-- One Accord CPM Servant Intercessory Team setup
-- Run this after the original One Accord pilot tables exist.
--
-- This adds a separate 30-day small-group pilot using access code:
-- INTERCESSORS-PRAY

create extension if not exists pgcrypto;

insert into public.pilot_churches (name, access_code)
values ('Servant Intercessory Team', 'INTERCESSORS-PRAY')
on conflict (access_code) do update set name = excluded.name;

alter table public.pilot_leaders drop constraint if exists pilot_leaders_email_key;

create unique index if not exists pilot_leaders_church_email_unique
on public.pilot_leaders (church_access_code, lower(email));

insert into public.pilot_leaders (church_access_code, name, email, roles)
values
  (
    'INTERCESSORS-PRAY',
    'Selwyn Davis',
    'selwyn_davis@yahoo.com',
    array['Lead Administrator', 'Packet Editor', 'Pastoral-Care Leader', 'Facilitator']
  ),
  (
    'INTERCESSORS-PRAY',
    'Cassandra Davis',
    'casswdavis@gmail.com',
    array['Prayer-Team Reviewer', 'Facilitator']
  ),
  (
    'INTERCESSORS-PRAY',
    'Sarah Mitchell',
    'smjackson822@gmail.com',
    array['Prayer-Team Reviewer', 'Testimony Curator']
  ),
  (
    'INTERCESSORS-PRAY',
    'Keisha Parris',
    'keisha@parrisfinancialservices.com',
    array['Prayer Administrator', 'Packet Editor', 'Facilitator']
  ),
  (
    'INTERCESSORS-PRAY',
    'Angela Permenter',
    'aperm50@gmail.com',
    array['Prayer-Team Reviewer', 'Pastoral-Care Support']
  )
on conflict (church_access_code, (lower(email))) do update
set
  name = excluded.name,
  roles = excluded.roles;

create or replace function public.is_pilot_leader_for_church(p_church_access_code text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.pilot_leaders
    where church_access_code = p_church_access_code
      and lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

create or replace function public.get_prayer_participation_count(
  p_church_access_code text,
  p_prayer_date text
)
returns integer
language sql
stable
security definer
set search_path = public
as $$
  select count(distinct coalesce(payload ->> 'participantKey', id::text))::integer
  from public.participant_check_ins
  where church_access_code = p_church_access_code
    and payload ->> 'type' = 'prayer_participation'
    and payload ->> 'date' = p_prayer_date;
$$;

grant execute on function public.is_pilot_leader_for_church(text) to authenticated;
grant execute on function public.get_prayer_participation_count(text, text) to anon, authenticated;

drop policy if exists "Participants can create check ins" on public.participant_check_ins;
create policy "Participants can create check ins"
on public.participant_check_ins
for insert
to anon
with check (church_access_code in ('SERVANT-PRAYS', 'INTERCESSORS-PRAY'));

drop policy if exists "Participants can submit prayer requests" on public.prayer_requests;
create policy "Participants can submit prayer requests"
on public.prayer_requests
for insert
to anon
with check (church_access_code in ('SERVANT-PRAYS', 'INTERCESSORS-PRAY'));

drop policy if exists "Participants can submit testimonies" on public.testimonies;
create policy "Participants can submit testimonies"
on public.testimonies
for insert
to anon
with check (church_access_code in ('SERVANT-PRAYS', 'INTERCESSORS-PRAY'));

drop policy if exists "Anyone can read public app settings" on public.pilot_app_settings;
create policy "Anyone can read public app settings"
on public.pilot_app_settings
for select
to anon, authenticated
using (church_access_code in ('SERVANT-PRAYS', 'INTERCESSORS-PRAY'));

drop policy if exists "Approved leaders can write app settings" on public.pilot_app_settings;
create policy "Approved leaders can write app settings"
on public.pilot_app_settings
for all
to authenticated
using (public.is_pilot_leader_for_church(church_access_code))
with check (public.is_pilot_leader_for_church(church_access_code));

drop policy if exists "Approved leaders can view check ins" on public.participant_check_ins;
create policy "Approved leaders can view check ins"
on public.participant_check_ins
for select
to authenticated
using (public.is_pilot_leader_for_church(church_access_code));

drop policy if exists "Approved leaders can view prayer requests" on public.prayer_requests;
create policy "Approved leaders can view prayer requests"
on public.prayer_requests
for select
to authenticated
using (public.is_pilot_leader_for_church(church_access_code));

drop policy if exists "Approved leaders can update prayer requests" on public.prayer_requests;
create policy "Approved leaders can update prayer requests"
on public.prayer_requests
for update
to authenticated
using (public.is_pilot_leader_for_church(church_access_code))
with check (public.is_pilot_leader_for_church(church_access_code));

drop policy if exists "Approved leaders can view testimonies" on public.testimonies;
create policy "Approved leaders can view testimonies"
on public.testimonies
for select
to authenticated
using (public.is_pilot_leader_for_church(church_access_code));

drop policy if exists "Approved leaders can update testimonies" on public.testimonies;
create policy "Approved leaders can update testimonies"
on public.testimonies
for update
to authenticated
using (public.is_pilot_leader_for_church(church_access_code))
with check (public.is_pilot_leader_for_church(church_access_code));

drop policy if exists "Approved leaders can view leader records" on public.pilot_leaders;
create policy "Approved leaders can view leader records"
on public.pilot_leaders
for select
to authenticated
using (public.is_pilot_leader_for_church(church_access_code));

-- Anonymous participants can submit to this group, but they cannot read requests,
-- testimonies, attendance rows, or leader-only review data.
