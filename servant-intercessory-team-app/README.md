# One Accord CPM Pilot App

This is a dependency-free small-group pilot build of the One Accord CPM Servant Intercessory Team hub.

It intentionally models the approved pilot scope without requiring package installation.
It now includes Supabase configuration for the approved pilot project.

## Run Locally

Open `index.html` in a browser.

Shared participant access code:

```text
INTERCESSORS-PRAY
```

Leader login is configured for the Servant Intercessory Team pilot leaders.

Approved leader emails:

```text
selwyn_davis@yahoo.com
casswdavis@gmail.com
smjackson822@gmail.com
keisha@parrisfinancialservices.com
aperm50@gmail.com
```

When hosted on `https://`, the app sends a Supabase email magic link. When opened as a local `file://` preview, it uses preview sign-in so the admin interface remains testable.

## Supabase Setup

Run `docs/SUPABASE_SETUP_INTERCESSORY_TEAM.sql` in the Supabase SQL Editor after the original pilot tables have been created.

After that, participant check-ins, prayer requests, testimonies, and leader-managed app settings can be saved in Supabase across devices.

The setup intentionally does not let anonymous visitors read prayer requests or testimonies. Authenticated review access is limited to the approved team leader emails.

## Included Pilot Flows

- Shared church access gate
- Dynamic participant homepage
- Current Anchor Packet
- Rich daily packet format with date, focus, Anchor Scriptures, devotional focus, prayer windows, reflection, journal prompt, and local-only check-in
- Previous-packet archive
- Prayer-request submission with emergency notice and privacy options
- Structured prayer-request prompts that help participants name who, what, timing, and prayer focus without removing the open request field
- Testimony submission and review queue
- Private reflection box stored only in browser local storage
- One-tap Zoom access placeholder
- Prayer schedule
- Participant check-in for corporate prayer
- Leader admin preview
- Packet editing preview
- Prayer request review queue
- Testimony review queue
- Gathering detail updates
- Monthly summary report
- Initial leaders and role assignments
- 30-day Servant Intercessory Team packet flow beginning Tuesday, June 30, 2026
- Tuesday individual prayer and Wednesday 7:15 AM corporate prayer rhythm
- Participant preview of upcoming prayer weeks
- Leader Resources tab with downloadable launch workbook and public guide
- Installable home-screen app manifest and icon metadata
- Prayer day countdown on the participant homepage
- "I Am Praying Today" participation button with anonymous daily count
- Share-ready weekly prayer focus graphic download

## Privacy Notes

The private reflection box uses a separate local-storage key and does not enter the app's shared pilot data state.

Prayer requests and testimonies are saved locally for preview and submitted to Supabase after the setup SQL is installed.

Private reflections remain local-only by design and are not submitted to Supabase.

The fasting reflection box also stays local-only. The hub does not ask participants to report what they are fasting from and does not track fasting compliance.

The "I Am Praying Today" count stores an anonymous local participant key so the same device does not repeatedly count itself. It does not ask for a name, comment, or prayer details.

The intercessory-team SQL includes the anonymous participation counter function. Without the SQL, the app falls back to the count available on the current device.

## Recommended Production Migration

Recommended stack:

- Frontend/hosting: Vercel
- App framework: Next.js
- Backend/database/auth: Supabase
- Leader login: passwordless email magic links
- Participant access: one shared Servant Intercessory Team link or code

Keep a `church_id` on church-owned records from the beginning, even while the pilot has only one church.
