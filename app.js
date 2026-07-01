const STORAGE_KEY = "oneAccordIntercessoryTeamState.v1";
const REFLECTION_KEY = "oneAccordIntercessoryReflection.week1";
const DAILY_CHECKIN_PREFIX = "oneAccordIntercessoryDailyPrayerCheckin.";
const PRAYER_PARTICIPANT_KEY = "oneAccordIntercessoryParticipantKey";
const SUPABASE_CONFIG = window.ONE_ACCORD_SUPABASE || {};

const supabaseClient =
  window.supabase && SUPABASE_CONFIG.url && SUPABASE_CONFIG.publishableKey
    ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey)
    : null;

const emergencyNotice =
  "One Accord CPM is a prayer-support platform and is not an emergency-response service. If you or someone else is in immediate danger, contact emergency services or the appropriate professional support immediately.";

const coreLibraryThemes = [
  "One Accord in Prayer",
  "Prayer With One Heart",
  "Specific Prayer, Shared Burden",
  "Remembering God's Faithfulness",
  "Humility Before God",
  "Praying Scripture Together",
  "Repentance and Renewal",
  "Faith for Families",
  "Wisdom for Leaders",
  "Unity Across Generations",
  "Strength for the Weary",
  "A Church That Intercedes",
  "Prayer for the Lost",
  "Healing and Restoration",
  "Peace in the Household",
  "Courage in Witness",
  "Serving With Clean Hands",
  "Guarding the Heart",
  "Prayer in Times of Crisis",
  "The Ministry of Reconciliation",
  "Spiritual Hunger",
  "Dependence on the Holy Spirit",
  "Faithful Stewardship",
  "Covering Children and Youth",
  "Marriage and Family Strength",
  "Compassion for the Community",
  "Freedom From Fear",
  "Perseverance in Prayer",
  "Discernment and Wisdom",
  "Bearing One Another's Burdens",
  "The Fruit of the Spirit",
  "Prayer for Schools and Educators",
  "Prayer for the City",
  "Healing Old Wounds",
  "Renewed Worship",
  "Servant Leadership",
  "Prayer for the Vulnerable",
  "Generosity and Mission",
  "Boldness and Clarity",
  "Surrendered Plans",
  "Spiritual Protection",
  "Thanksgiving and Remembrance",
  "Endurance Through Trials",
  "Rest and Renewal",
  "Preparing Future Leaders",
  "A Culture of Prayer",
  "Answered Prayer and Testimony",
  "Faithful Continuance",
  "Churchwide Alignment",
  "Prayer Beyond the Walls",
  "A Year of God's Faithfulness",
  "Continuing in One Accord",
];

const arcOnePackets = [
  {
    week: 1,
    title: "LORD, SEND THE RIGHT PEOPLE",
    focusLabel: "Laborers",
    primaryScripture:
      "Matthew 9:37-38 - Jesus told His disciples that the harvest was plentiful, but the workers were few. He instructed them to ask the Lord of the harvest to send laborers into His field.",
    supporting: [
      "Exodus 36:1-2 - God called skilled and willing people to carry out the work of building the tabernacle.",
      "Romans 12:4-8 - The body has different gifts, and every gift has a meaningful purpose.",
    ],
    devotionalFocus:
      "Every God-given vision requires God-sent people. Passion matters, but vision cannot be sustained by passion alone. We need willing hearts, faithful hands, mature character, and people who are aligned with the assignment. Jesus did not merely tell His disciples to notice the harvest. He instructed them to pray for laborers.\n\nToday, we are not simply asking God to send available help. We are asking Him to send the right help. We need people who are dependable, teachable, spiritually mature, and committed to the work. We are also asking God for discernment so that we recognize those He is sending and avoid partnerships that could distract, delay, or damage the assignment.",
    prayerTargets: [
      "Laborers with the right spirit, character, and commitment",
      "Faithful people who are available, teachable, and dependable",
      "Leaders, intercessors, administrators, and ministry workers",
      "Discernment to recognize those who are truly assigned to the vision",
      "Protection from wrong partnerships and misaligned connections",
    ],
    morningPrayer:
      "Father, we place the vision before You. We acknowledge that what You have called us to do cannot be accomplished in our own strength. Send laborers into the harvest. Raise up people who are willing, faithful, teachable, and ready. Connect us with the right people, guard us from wrong alignments, and give us discernment to recognize those You are sending. In Jesus' name, amen.",
    middayPrayer:
      "Return to the areas where faithful help is most needed. Pray specifically for ministry teams, community initiatives, leadership needs, administrative support, outreach efforts, and every assignment that requires dependable laborers. Ask God to awaken people who may already be connected to the vision but have not yet recognized their role.",
    eveningPrayer:
      "Father, thank You that the vision will not die for lack of help. We believe You are stirring hearts, aligning people, and preparing laborers. Send the right people at the right time, with the right spirit, for the right assignment. Strengthen every faithful servant and teach us to steward people wisely. In Jesus' name, amen.",
    reflectionQuestions: [
      "What kind of people does the vision require in this season?",
      "Are we merely praying for available help, or are we praying for aligned help?",
      "What qualities must be present in those who help carry the assignment?",
    ],
    journalingPrompt: "Lord, show us the kind of people we should be praying for and preparing to receive.",
  },
  {
    week: 2,
    title: "LORD, MAKE US A HOUSE OF PRAYER",
    focusLabel: "Prayer Culture",
    primaryScripture: "Isaiah 56:7 - God declared that His house would be called a house of prayer for all nations.",
    supporting: [
      "Mark 11:15-17 - Jesus reaffirmed that God's house should be known as a house of prayer.",
      "Acts 2:42 - The early believers devoted themselves to teaching, fellowship, breaking bread, and prayer.",
    ],
    devotionalFocus:
      "A praying church is not simply a church that schedules a prayer meeting. It is a church where prayer shapes the atmosphere, influences decisions, strengthens relationships, and becomes a natural response in every season. Prayer should not be reserved for emergencies. It should be woven into the identity of the church.\n\nToday, we are asking God to make us a house of prayer. We are praying that prayer becomes more than a ministry department or an occasional gathering. We are asking God to develop a community where believers instinctively seek Him, carry one another's burdens, and approach every assignment with dependence upon His presence.",
    prayerTargets: [
      "A deeper hunger for prayer throughout the church",
      "Consistency in personal and corporate prayer",
      "Greater participation from believers who have felt hesitant or uncomfortable",
      "Prayer to become central to planning, leadership, outreach, and ministry",
      "A sustained praying culture that continues beyond crises and special events",
    ],
    morningPrayer:
      "Father, make us a house of prayer. Awaken a deeper desire to seek You. Forgive us for the times we have depended on our own wisdom and strength. Teach us to pray first, pray consistently, and pray with expectation. Let prayer become part of the identity of our church. In Jesus' name, amen.",
    middayPrayer:
      "Pause and pray for the spiritual culture of the church. Ask God to remove distractions, spiritual apathy, and intimidation. Pray for those who desire to pray but do not yet feel confident. Ask God to make prayer natural, accessible, and central to the life of the community.",
    eveningPrayer:
      "Lord, establish a sustained prayer culture among us. Let our homes, ministries, leadership meetings, outreach efforts, and gatherings be marked by prayer. Raise up a committed remnant that will remain faithful. Teach us to seek You before we move, while we serve, and after we see the fruit. In Jesus' name, amen.",
    reflectionQuestions: [
      "Is prayer central to our church culture or primarily activated during moments of need?",
      "What distractions keep believers from developing a consistent prayer life?",
      "How can we help people experience corporate prayer as welcoming and spiritually meaningful?",
    ],
    journalingPrompt: "Lord, show us what must change for prayer to become part of our identity.",
  },
  {
    week: 3,
    title: "LORD, BRING US INTO ONE ACCORD",
    focusLabel: "Unity",
    primaryScripture: "Acts 1:14 - The disciples joined together constantly in prayer before the outpouring at Pentecost.",
    supporting: [
      "Ephesians 4:1-6 - Believers are called to preserve the unity of the Spirit through humility, patience, and love.",
      "Philippians 2:1-4 - Followers of Christ are instructed to value others and pursue shared purpose.",
    ],
    devotionalFocus:
      "Unity is not uniformity. It does not mean that everyone has the same personality, preferences, or assignment. Biblical unity means that believers bring their differences under the lordship of Christ and pursue a shared spiritual purpose. The believers in the upper room were not identical, but they were gathered with one accord.\n\nA divided church struggles to carry a unified burden. Today, we are asking God to heal relational fractures, remove unnecessary competition, and align hearts around His will. We are praying for a fellowship where people can disagree without becoming divided and serve without seeking personal recognition.",
    prayerTargets: [
      "Humility, patience, and love among believers",
      "Healing from offense, misunderstanding, and relational strain",
      "Protection from gossip, competition, jealousy, and division",
      "Shared purpose across ministries, generations, and backgrounds",
      "Wisdom for leaders as they foster unity without suppressing healthy differences",
    ],
    morningPrayer:
      "Father, bring us into one accord. Remove pride, offense, jealousy, and every attitude that weakens fellowship. Teach us to walk in humility and love. Help us value one another, listen to one another, and pursue Your purpose together. Let the unity of Your church become a testimony to the world. In Jesus' name, amen.",
    middayPrayer:
      "Consider any relationships, ministries, or situations where unity may be strained. Pray for understanding, healing, and wise communication. Ask God to reveal any attitude in your own heart that may contribute to unnecessary division.",
    eveningPrayer:
      "Lord, make us one in purpose, one in prayer, and one in love. Heal division before it grows. Restore trust where it has been damaged. Teach us to honor one another and serve without competition. Let our unity reflect Your presence and strengthen our witness. In Jesus' name, amen.",
    reflectionQuestions: [
      "Where is greater unity needed within our community?",
      "How can we disagree with humility and remain committed to fellowship?",
      "Are there offenses or assumptions that need to be released?",
    ],
    journalingPrompt: "Lord, search my heart and show me how I can help strengthen unity.",
  },
  {
    week: 4,
    title: "LORD, TEACH US TO PRAY",
    focusLabel: "Spiritual Formation",
    primaryScripture: "Luke 11:1-4 - After observing Jesus pray, one of His disciples asked Him to teach them how to pray.",
    supporting: [
      "Matthew 6:9-13 - Jesus gave His disciples a pattern of prayer centered on God's name, kingdom, provision, forgiveness, and protection.",
      "Romans 8:26-27 - The Spirit helps believers in their weakness and intercedes according to the will of God.",
    ],
    devotionalFocus:
      "Prayer is both a privilege and a practice. The disciples walked closely with Jesus, witnessed miracles, and heard His teaching, yet they still recognized their need to learn how to pray. Their request reminds us that prayer is not merely instinctive. It is something we can grow in over time.\n\nToday, we are asking God to deepen our understanding of prayer. We want to move beyond repetition, fear, and uncertainty. We are asking the Holy Spirit to help us pray with greater biblical grounding, honesty, sensitivity, and confidence. The goal is not impressive language. The goal is meaningful communion with God.",
    prayerTargets: [
      "A deeper desire to learn and grow in prayer",
      "Greater confidence among those who feel uncomfortable praying aloud",
      "Sensitivity to the guidance of the Holy Spirit",
      "Biblical grounding in personal and corporate prayer",
      "Freedom from comparison, performance pressure, and intimidation",
    ],
    morningPrayer:
      "Father, teach us to pray. Help us approach You with humility, honesty, and confidence. Deliver us from the pressure to impress others. Teach us to pray according to Your Word and remain sensitive to Your Spirit. Deepen our communion with You and strengthen our commitment to seek You consistently. In Jesus' name, amen.",
    middayPrayer:
      "Return to the Lord with simplicity. Pray through the pattern Jesus taught: honor God's name, ask for His will, seek provision, extend forgiveness, and request protection. Pray especially for people who want to grow in prayer but feel hesitant or unsure.",
    eveningPrayer:
      "Lord, teach Your church to pray. Strengthen those who are learning. Encourage those who feel intimidated. Deepen the prayer life of mature believers. Let our corporate prayers be biblically grounded, Spirit-led, honest, and full of faith. In Jesus' name, amen.",
    reflectionQuestions: [
      "What has helped you grow in prayer?",
      "What makes some believers uncomfortable praying corporately?",
      "How can we create space for people to grow without feeling judged?",
    ],
    journalingPrompt: "Lord, teach me how to pray with greater honesty, focus, and dependence upon You.",
  },
  {
    week: 5,
    title: "LORD, GIVE US CLEAN HANDS AND PURE HEARTS",
    focusLabel: "Consecration",
    primaryScripture:
      "Psalm 24:3-4 - The psalmist asks who may stand in God's holy place and answers: the one with clean hands and a pure heart.",
    supporting: [
      "Joel 2:12-17 - God called His people to return to Him with fasting, weeping, and wholehearted repentance.",
      "James 4:8-10 - Believers are instructed to draw near to God, humble themselves, and purify their hearts.",
    ],
    devotionalFocus:
      "Consecration is not a demand for perfection. It is a call to surrender. God invites us to approach Him honestly, acknowledge where we have drifted, and return with humility. Before we ask God to change our circumstances, we must remain willing to let Him change us.\n\nToday, we are asking God to purify our motives, correct our priorities, and expose anything that weakens our fellowship with Him. We are not praying from a place of condemnation. We are praying with confidence that God receives those who return to Him with sincere hearts.",
    prayerTargets: [
      "Repentance from sin, compromise, and spiritual drift",
      "Pure motives in leadership, service, and relationships",
      "Freedom from hidden habits that weaken spiritual health",
      "Greater hunger for holiness and obedience",
      "A renewed willingness to surrender every area of life to God",
    ],
    morningPrayer:
      "Father, create in us clean hearts and renew steadfast spirits within us. Search our motives, attitudes, habits, and priorities. Reveal anything that is out of alignment with Your will. Give us grace to repent without defensiveness and return to You wholeheartedly. In Jesus' name, amen.",
    middayPrayer:
      "Take a few quiet moments before God. Ask Him to reveal any area where you have become distracted, resistant, or spiritually careless. Pray for the courage to respond with humility and obedience.",
    eveningPrayer:
      "Lord, purify Your church. Remove compromise, pride, bitterness, and hidden sin. Teach us to serve with clean hands and pure hearts. Restore the joy of obedience and deepen our reverence for Your presence. In Jesus' name, amen.",
    reflectionQuestions: [
      "Are there areas where we have become spiritually casual or distracted?",
      "What is the difference between condemnation and conviction?",
      "What does wholehearted surrender look like in this season?",
    ],
    journalingPrompt: "Lord, reveal anything in my life that needs to be surrendered again.",
  },
  {
    week: 6,
    title: "LORD, RESTORE OUR FIRST LOVE",
    focusLabel: "Spiritual Renewal",
    primaryScripture:
      "Revelation 2:4-5 - Jesus warned the church at Ephesus that it had forsaken its first love and called it to remember and return.",
    supporting: [
      "Psalm 51:10-12 - David asked God to renew a steadfast spirit and restore the joy of salvation.",
      "Jeremiah 29:13 - God promised that those who seek Him wholeheartedly will find Him.",
    ],
    devotionalFocus:
      "It is possible to remain active in ministry while becoming distant in devotion. The church at Ephesus was commended for its hard work and perseverance, but Jesus still confronted its loss of first love. Activity alone does not guarantee intimacy.\n\nToday, we are asking God to restore affection, hunger, and joy. We are praying for believers who feel spiritually dry, emotionally exhausted, or disconnected from the presence of God. We are asking the Lord to renew our desire for Him, not merely our ability to perform religious duties.",
    prayerTargets: [
      "Renewed passion for God's presence",
      "Restoration for believers experiencing spiritual dryness",
      "Joy in worship, Scripture, prayer, and service",
      "Freedom from empty routine and religious performance",
      "A fresh awareness of God's grace and love",
    ],
    morningPrayer:
      "Father, restore our first love. Forgive us for the times we have allowed routine to replace relationship. Renew our hunger for Your presence and restore the joy of our salvation. Awaken our hearts again and help us seek You wholeheartedly. In Jesus' name, amen.",
    middayPrayer:
      "Pause and reflect on your relationship with God. Ask Him to renew areas that feel dry or routine. Pray for others who may be serving faithfully while quietly struggling with spiritual exhaustion.",
    eveningPrayer:
      "Lord, renew Your church. Restore joy where there is weariness. Restore hunger where there is complacency. Restore hope where there is discouragement. Draw us beyond activity and bring us back into deeper intimacy with You. In Jesus' name, amen.",
    reflectionQuestions: [
      "Can spiritual activity exist without spiritual intimacy?",
      "What practices help us remain close to God?",
      "Where have routine and responsibility weakened joy?",
    ],
    journalingPrompt: "Lord, breathe fresh life into the areas of my faith that have become dry or routine.",
  },
  {
    week: 7,
    title: "LORD, STRENGTHEN OUR FAITH",
    focusLabel: "Trust",
    primaryScripture:
      "Mark 9:24 - A desperate father cried out to Jesus, expressing both belief and the need for help with his unbelief.",
    supporting: [
      "Hebrews 11:6 - Faith is essential as we seek God and trust His character.",
      "James 1:5-8 - Believers are instructed to ask God for wisdom with confidence in His generosity.",
    ],
    devotionalFocus:
      'Faith is not the absence of questions. Sometimes faith sounds like the honest cry of the father in Mark 9: "I believe; help my unbelief." God is not threatened by our weakness. He invites us to bring our doubts, fears, and uncertainties to Him.\n\nToday, we are praying for stronger faith in seasons of delay, disappointment, and limited understanding. We are asking God to help us trust His character when we cannot trace His hand. Faith does not deny reality. It refuses to let present circumstances define the limits of God\'s power.',
    prayerTargets: [
      "Stronger trust in God during seasons of uncertainty",
      "Faith for people waiting on answers to prayer",
      "Freedom from fear, anxiety, and discouragement",
      "Confidence in God's character when circumstances feel unclear",
      "Grace to remain faithful without becoming cynical or weary",
    ],
    morningPrayer:
      "Father, strengthen our faith. Where we believe, help us stand. Where we struggle, help our unbelief. Teach us to trust You in seasons of delay and uncertainty. Remind us that Your character is faithful even when we do not understand the process. In Jesus' name, amen.",
    middayPrayer:
      "Name the areas where trust feels difficult. Pray honestly about your questions. Ask God to strengthen people who are waiting for healing, provision, direction, reconciliation, or breakthrough.",
    eveningPrayer:
      "Lord, increase our faith. Help us resist fear, discouragement, and cynicism. Teach us to remain steadfast while we wait. Remind us of Your past faithfulness and strengthen our confidence in Your promises. In Jesus' name, amen.",
    reflectionQuestions: [
      "What does honest faith look like when questions remain?",
      "Are there areas where disappointment has weakened expectation?",
      "How can remembrance strengthen trust?",
    ],
    journalingPrompt: "Lord, help me trust You in the places where I do not yet understand what You are doing.",
  },
  {
    week: 8,
    title: "LORD, GIVE US WISDOM",
    focusLabel: "Discernment",
    primaryScripture: "James 1:5 - Those who lack wisdom are invited to ask God, who gives generously.",
    supporting: [
      "Proverbs 3:5-6 - Believers are instructed to trust the Lord rather than depend solely on their own understanding.",
      "Colossians 1:9-10 - Paul prayed that believers would be filled with spiritual wisdom and live lives pleasing to God.",
    ],
    devotionalFocus:
      "Wisdom is more than information. It is the ability to apply truth faithfully in real situations. Many decisions are not simply choices between right and wrong. Sometimes we must discern timing, priorities, relationships, opportunities, and the difference between a good idea and a God-directed assignment.\n\nToday, we are asking God for wisdom in every area of life. We are praying for leaders, families, business owners, educators, parents, students, and decision-makers. We are also asking for humility, because wisdom requires us to acknowledge that we do not always know what to do.",
    prayerTargets: [
      "Wisdom for pastors, ministry leaders, and decision-makers",
      "Discernment in relationships, partnerships, and opportunities",
      "Clarity for families facing difficult choices",
      "Wisdom for business, finances, education, and career decisions",
      "Humility to seek counsel and wait for God's direction",
    ],
    morningPrayer:
      "Father, give us wisdom. Deliver us from pride, haste, and confusion. Teach us to trust You rather than rely solely on our own understanding. Give us clarity in decisions, discernment in relationships, and patience when the path is not yet clear. In Jesus' name, amen.",
    middayPrayer:
      "Pray specifically about decisions that are currently before you, your family, your church, or your community. Ask God for clarity, wise counsel, and the discipline to avoid rushing ahead of His direction.",
    eveningPrayer:
      "Lord, fill Your people with wisdom and spiritual understanding. Guide leaders, families, educators, entrepreneurs, and every person facing important decisions. Protect us from deception and help us recognize what aligns with Your will. In Jesus' name, amen.",
    reflectionQuestions: [
      "Where is wisdom most needed in this season?",
      "Are we moving too quickly in any area?",
      "How do humility and patience protect wise decision-making?",
    ],
    journalingPrompt: "Lord, show me where I need Your wisdom more than my own instincts.",
  },
  {
    week: 9,
    title: "LORD, HELP US NOT TO FAINT",
    focusLabel: "Perseverance",
    primaryScripture: "Luke 18:1 - Jesus taught His disciples that they should always pray and not give up.",
    supporting: [
      "Galatians 6:9 - Believers are encouraged not to become weary in doing good because the harvest comes in due season.",
      "Romans 12:12 - Followers of Christ are called to remain joyful in hope, patient in affliction, and faithful in prayer.",
    ],
    devotionalFocus:
      "Consistency is powerful because many meaningful things are built slowly. It is easy to pray with intensity when a need is new or a crisis is urgent. The greater challenge is remaining faithful after weeks, months, or years of waiting.\n\nToday, we are asking God to strengthen those who feel weary. We are praying against discouragement, frustration, and spiritual fatigue. We are asking the Lord to help us remain faithful even when results are not immediately visible. Sustained prayer is not wasted prayer.",
    prayerTargets: [
      "Strength for people growing weary in prayer",
      "Endurance for those waiting on healing, provision, or direction",
      "Faithfulness among leaders carrying long-term burdens",
      "Freedom from discouragement, frustration, and spiritual fatigue",
      "Renewed hope for those tempted to give up",
    ],
    morningPrayer:
      "Father, help us not to faint. Strengthen us when answers seem delayed and progress feels slow. Remind us that faithfulness matters even when results are not immediately visible. Renew our hope and teach us to remain steadfast in prayer. In Jesus' name, amen.",
    middayPrayer:
      "Pray for someone who may be close to giving up. Name the situations that require long-term endurance. Ask God to renew strength, restore hope, and remind His people that their labor is not in vain.",
    eveningPrayer:
      "Lord, strengthen every weary heart. Encourage those who have prayed for a long time without seeing the outcome they hoped for. Teach us to remain patient, faithful, and hopeful. Help us continue praying without losing heart. In Jesus' name, amen.",
    reflectionQuestions: [
      "What makes sustained prayer difficult?",
      "Where are we most tempted to become discouraged?",
      "How can the praying community support people during long seasons of waiting?",
    ],
    journalingPrompt: "Lord, renew my strength in the areas where I feel tired of waiting.",
  },
  {
    week: 10,
    title: "LORD, HEAL THE BROKENHEARTED",
    focusLabel: "Inner Healing",
    primaryScripture: "Psalm 147:3 - God heals the brokenhearted and binds up their wounds.",
    supporting: [
      "Isaiah 61:1-3 - God promises comfort, healing, and restoration for those who mourn and feel broken.",
      "James 5:16 - Believers are encouraged to pray for one another so that healing may occur.",
    ],
    devotionalFocus:
      "Some wounds are visible. Others are carried quietly. Grief, betrayal, rejection, disappointment, trauma, and prolonged stress can affect how people see themselves, relate to others, and experience God. The church must become a place where broken hearts are not ignored or rushed.\n\nToday, we are praying for healing that reaches beneath the surface. We are asking God to comfort people who have learned how to function while still carrying deep pain. We are also praying for wisdom, compassion, and appropriate support so that people receive care rather than shame.",
    prayerTargets: [
      "Healing for grief, rejection, betrayal, and emotional wounds",
      "Comfort for people carrying pain privately",
      "Freedom from shame, isolation, and hopelessness",
      "Compassionate support from families, churches, and trusted professionals",
      "Wisdom for leaders caring for people in seasons of emotional distress",
    ],
    morningPrayer:
      "Father, heal the brokenhearted. Bring comfort to those carrying hidden pain. Bind up wounds caused by grief, rejection, betrayal, and disappointment. Surround hurting people with compassion, wise support, and hope. Teach us to become a community where people can heal without shame. In Jesus' name, amen.",
    middayPrayer:
      "Pray quietly for people who may be hurting beneath the surface. Ask God to bring comfort, wise counsel, and supportive relationships. If you are carrying pain personally, bring it honestly before the Lord.",
    eveningPrayer:
      "Lord, bring healing to broken hearts. Restore hope to people who feel emotionally exhausted or alone. Give us compassion and wisdom. Help the church become a safe community where people are supported, encouraged, and treated with dignity. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why do people sometimes hide emotional pain?",
      "How can the church offer support without oversimplifying healing?",
      "Are there wounds we need to bring honestly before God?",
    ],
    journalingPrompt: "Lord, meet me in the places where my heart still needs healing.",
  },
  {
    week: 11,
    title: "LORD, PROTECT THE UNITY OF YOUR CHURCH",
    focusLabel: "Fellowship",
    primaryScripture:
      "Ephesians 4:3 - Believers are instructed to make every effort to preserve the unity of the Spirit through the bond of peace.",
    supporting: [
      "Psalm 133:1 - Unity among God's people is described as good and pleasant.",
      "Colossians 3:12-15 - Believers are called to compassion, kindness, patience, forgiveness, love, and peace.",
    ],
    devotionalFocus:
      "Unity must be protected intentionally. Division rarely begins with a major public conflict. It often grows through unresolved offense, careless words, private assumptions, unaddressed tension, and repeated misunderstandings. Healthy fellowship requires humility, forgiveness, and honest communication.\n\nToday, we are praying for protection over the relational health of the church. We are asking God to expose the subtle ways division gains room. We are also praying for the courage to address conflict wisely, forgive generously, and preserve peace without pretending that problems do not exist.",
    prayerTargets: [
      "Protection from gossip, offense, suspicion, and unresolved conflict",
      "Healthy communication across ministries and relationships",
      "Grace to forgive and wisdom to pursue reconciliation",
      "Humility among leaders and members",
      "Stronger fellowship across generations, backgrounds, and personalities",
    ],
    morningPrayer:
      "Father, protect the unity of Your church. Guard us from careless words, unresolved offense, and unhealthy assumptions. Teach us to forgive, communicate honestly, and pursue peace. Give us humility to listen and courage to address conflict wisely. In Jesus' name, amen.",
    middayPrayer:
      "Consider whether there are strained relationships or unresolved concerns that need prayer. Ask God for wisdom, humility, and peace. Pray against gossip and for stronger trust within the church.",
    eveningPrayer:
      "Lord, preserve the unity of Your people. Heal relational fractures. Help us speak with grace, listen with humility, and forgive as we have been forgiven. Let peace rule in our hearts and strengthen our fellowship. In Jesus' name, amen.",
    reflectionQuestions: [
      "What subtle habits weaken fellowship over time?",
      "How can we protect unity without avoiding difficult conversations?",
      "Is there a relationship that needs prayer, forgiveness, or wise communication?",
    ],
    journalingPrompt: "Lord, show me how I can become a stronger guardian of unity.",
  },
  {
    week: 12,
    title: "LORD, RAISE UP INTERCESSORS",
    focusLabel: "Prayer Leadership",
    primaryScripture: "Ezekiel 22:30 - God looked for someone who would stand in the gap on behalf of the land.",
    supporting: [
      "Isaiah 62:6-7 - Watchmen are called to remain persistent and give themselves no rest in prayer.",
      "1 Timothy 2:1 - Believers are urged to offer petitions, prayers, intercession, and thanksgiving for all people.",
    ],
    devotionalFocus:
      "Every praying culture needs people who are willing to stand in the gap. Intercessors are not spiritual celebrities. They are faithful people who quietly carry burdens, pray consistently, and remain committed even when no one sees their labor.\n\nToday, we are asking God to raise intercessors within the church. We are praying for people who will not only respond to urgent requests but also cultivate a sustained burden for families, communities, leaders, and the mission of the church. We are asking God to strengthen those already praying and awaken those who have not yet recognized this assignment.",
    prayerTargets: [
      "A committed remnant of faithful intercessors",
      "Strength and encouragement for those already carrying prayer burdens",
      "New believers and hesitant participants to grow in confidence",
      "Prayer leaders who are humble, spiritually mature, and dependable",
      "Intercession for families, churches, communities, and nations",
    ],
    morningPrayer:
      "Father, raise up intercessors. Awaken people who will stand in the gap with humility and consistency. Strengthen those who have been praying quietly for years. Teach us to carry burdens faithfully without seeking recognition. Build a committed praying remnant within Your church. In Jesus' name, amen.",
    middayPrayer:
      "Pray for those who already serve as intercessors. Ask God to renew their strength. Pray for people who may be feeling a new burden to pray but do not yet know how to begin. Ask God to develop a faithful remnant.",
    eveningPrayer:
      "Lord, raise up watchmen and intercessors. Strengthen the prayer ministry of Your church. Give us people who are faithful, discerning, compassionate, and committed. Let prayer become a shared responsibility rather than the assignment of only a few. In Jesus' name, amen.",
    reflectionQuestions: [
      "What qualities are essential in a faithful intercessor?",
      "How can we encourage people who carry prayer burdens quietly?",
      "What would change if more believers embraced intercession as part of discipleship?",
    ],
    journalingPrompt: "Lord, show me where You are calling me to stand in the gap.",
  },
  {
    week: 13,
    title: "LORD, REVIVE US AGAIN",
    focusLabel: "Revival",
    primaryScripture: "Psalm 85:6 - The psalmist asks God to revive His people so that they may rejoice in Him again.",
    supporting: [
      "2 Chronicles 7:14 - God called His people to humility, prayer, repentance, and renewed seeking.",
      "Habakkuk 3:2 - The prophet asked God to renew His work in the present generation.",
    ],
    devotionalFocus:
      "Revival is not merely a series of emotional services. It is a renewed work of God that awakens hunger, restores conviction, strengthens obedience, deepens love, and reorients the hearts of His people. Revival begins with a people who recognize their need for God.\n\nToday, we are asking God to revive us again. We are praying for spiritual awakening in the church and throughout our communities. We are asking God to restore sensitivity where hearts have become dull, renew hope where people have grown weary, and draw people back to Himself with power and grace.",
    prayerTargets: [
      "Fresh hunger for God throughout the church",
      "Repentance, humility, and renewed obedience",
      "Spiritual awakening among believers who have grown weary or distant",
      "Salvation and transformation throughout the community",
      "A sustained move of God that produces lasting fruit rather than temporary excitement",
    ],
    morningPrayer:
      "Father, revive us again. Awaken our hearts and restore our hunger for Your presence. Forgive us for spiritual complacency and draw us back to You. Renew Your work in our generation. Let revival begin in us and produce lasting transformation in our church and community. In Jesus' name, amen.",
    middayPrayer:
      "Ask God to reveal where renewal is most needed. Pray for believers who have become discouraged, distracted, or spiritually distant. Pray for people in the community who need salvation, hope, and restoration.",
    eveningPrayer:
      "Lord, revive Your church. Breathe fresh life into weary hearts. Restore conviction, passion, obedience, and joy. Let Your presence transform individuals, families, ministries, and communities. Give us more than a temporary moment. Produce lasting fruit. In Jesus' name, amen.",
    reflectionQuestions: [
      "What is the difference between revival and temporary excitement?",
      "Where is spiritual renewal most needed in our community?",
      "Are we willing to allow revival to begin with personal surrender?",
    ],
    journalingPrompt: "Lord, revive the areas of my life that need fresh surrender, hunger, and obedience.",
  },
];

const arcTwoPackets = [
  {
    week: 14,
    title: "LORD, STRENGTHEN THOSE WHO LEAD",
    focusLabel: "Church Leadership",
    primaryScripture:
      "1 Timothy 2:1-2 - Paul urges believers to pray for those in authority so that people may live peaceful and godly lives.",
    supporting: [
      "Hebrews 13:17-18 - Believers are encouraged to pray for spiritual leaders who carry responsibility for others.",
      "1 Peter 5:2-4 - Leaders are called to shepherd God's people willingly, humbly, and faithfully.",
    ],
    devotionalFocus:
      "Leadership carries weight. Pastors, ministry leaders, teachers, administrators, and decision-makers often carry responsibilities that others may never fully see. They are expected to provide direction, remain spiritually grounded, care for people, navigate conflict, and make difficult decisions with wisdom.\n\nToday, we are praying for those who lead. We are asking God to strengthen them emotionally, spiritually, mentally, and physically. We are also praying for humility, integrity, discernment, and protection from burnout, pride, isolation, and discouragement.",
    prayerTargets: [
      "Wisdom and discernment for pastors and ministry leaders",
      "Integrity, humility, and accountability in leadership",
      "Protection from burnout, isolation, discouragement, and spiritual attack",
      "Healthy families and strong support systems for leaders",
      "Courage to make wise and faithful decisions",
    ],
    morningPrayer:
      "Father, strengthen those who lead. Give them wisdom beyond their own understanding, courage for difficult decisions, and humility in every responsibility. Protect their minds, hearts, families, and health. Surround them with wise counsel and faithful support. In Jesus' name, amen.",
    middayPrayer:
      "Pray specifically for pastors, ministry leaders, and decision-makers by name. Ask God to strengthen the areas where responsibility feels heavy. Pray for integrity, rest, clarity, and renewed joy.",
    eveningPrayer:
      "Lord, cover every leader. Give them wisdom, endurance, humility, and courage. Protect them from weariness, pride, isolation, and distraction. Let those who lead do so with clean hearts, clear vision, and deep dependence upon You. In Jesus' name, amen.",
    reflectionQuestions: [
      "What burdens do leaders often carry that others may not see?",
      "How can a church support leaders without placing unrealistic expectations on them?",
      "What qualities should we pray for in those who carry responsibility?",
    ],
    journalingPrompt: "Lord, show me how I can pray more intentionally for those who lead.",
  },
  {
    week: 15,
    title: "LORD, STRENGTHEN MARRIAGES",
    focusLabel: "Marriage",
    primaryScripture: "Ecclesiastes 4:9-12 - Two are better than one, and a cord of three strands is not easily broken.",
    supporting: [
      "Ephesians 5:21-33 - Marriage is shaped by love, sacrifice, honor, and mutual devotion.",
      "Colossians 3:12-14 - Believers are called to compassion, patience, forgiveness, and love.",
    ],
    devotionalFocus:
      "Marriage is one of the most important relationships in the life of a family, but it is also one of the relationships most vulnerable to pressure. Financial stress, poor communication, unresolved wounds, exhaustion, unmet expectations, and competing responsibilities can slowly weaken connection.\n\nToday, we are praying for marriages to be strengthened, healed, and protected. We are asking God to restore tenderness where distance has grown, wisdom where communication has broken down, and grace where forgiveness is needed. We are also praying for healthy marriages to remain strong and become a source of stability for families and communities.",
    prayerTargets: [
      "Strong communication, patience, and mutual understanding",
      "Healing from unresolved conflict, disappointment, and emotional distance",
      "Protection from infidelity, temptation, resentment, and neglect",
      "Wisdom for couples navigating finances, parenting, and major decisions",
      "Renewed affection, friendship, trust, and spiritual unity",
    ],
    morningPrayer:
      "Father, strengthen marriages. Restore communication, tenderness, trust, and friendship. Heal wounds that have gone unaddressed and give couples the grace to forgive. Protect marriages from distraction, division, and temptation. Let homes become places of peace, love, and stability. In Jesus' name, amen.",
    middayPrayer:
      "Pray for married couples facing pressure. Ask God to renew patience, understanding, and connection. Pray for couples who may be hurting privately and for those preparing for marriage.",
    eveningPrayer:
      "Lord, cover marriages. Strengthen commitment, restore communication, and heal broken trust. Give couples wisdom to love one another with grace and humility. Let marriages become a testimony of faithfulness, partnership, and covenant love. In Jesus' name, amen.",
    reflectionQuestions: [
      "What pressures commonly weaken marriages over time?",
      "How can couples protect connection before crisis occurs?",
      "Where is forgiveness or renewed communication needed?",
    ],
    journalingPrompt: "Lord, show us how to pray more intentionally for marriages and families.",
  },
  {
    week: 16,
    title: "LORD, COVER OUR CHILDREN",
    focusLabel: "Children",
    primaryScripture: "Psalm 127:3-5 - Children are described as a heritage and gift from the Lord.",
    supporting: [
      "Isaiah 54:13 - God promises peace and instruction for children.",
      "Mark 10:13-16 - Jesus welcomed children and blessed them.",
    ],
    devotionalFocus:
      "Children are growing in a world filled with opportunity, pressure, distraction, and risk. They need protection, guidance, love, wise instruction, and healthy environments where they can discover who they are and who God has called them to become.\n\nToday, we are praying for children in our families, churches, schools, and communities. We are asking God to protect their minds, bodies, hearts, and futures. We are also praying for parents, teachers, mentors, and caregivers to guide them with patience, wisdom, and consistency.",
    prayerTargets: [
      "Protection from harm, abuse, neglect, bullying, and exploitation",
      "Healthy identity, confidence, and spiritual formation",
      "Wisdom for parents, caregivers, teachers, and mentors",
      "Safety and support in schools, homes, churches, and neighborhoods",
      "Healing and stability for children experiencing trauma or instability",
    ],
    morningPrayer:
      "Father, cover our children. Protect their minds, bodies, hearts, and futures. Guard them from harm and surround them with wise, loving, and trustworthy adults. Give them peace, confidence, and a strong sense of identity. In Jesus' name, amen.",
    middayPrayer:
      "Pray for children by name. Include children facing pressure, instability, grief, or difficult home environments. Ask God to strengthen parents, teachers, mentors, and caregivers.",
    eveningPrayer:
      "Lord, protect every child. Let our homes, churches, schools, and communities become safer places for them to grow. Heal children carrying pain. Strengthen those who care for them. Let the next generation be covered, guided, and deeply loved. In Jesus' name, amen.",
    reflectionQuestions: [
      "What pressures are children facing today that adults may overlook?",
      "How can churches become safer and more supportive environments for children?",
      "Which children or families need intentional prayer and support?",
    ],
    journalingPrompt: "Lord, show me how I can help create a safer and healthier environment for children.",
  },
  {
    week: 17,
    title: "LORD, CALL THE NEXT GENERATION",
    focusLabel: "Youth and Young Adults",
    primaryScripture:
      "1 Timothy 4:12 - Young believers are encouraged to set an example in speech, conduct, love, faith, and purity.",
    supporting: [
      "Joel 2:28 - God promises to pour out His Spirit across generations.",
      "Psalm 78:4-7 - God's works are to be passed on so that the next generation places its trust in Him.",
    ],
    devotionalFocus:
      "The next generation does not merely need entertainment, programs, or temporary inspiration. Young people need belonging, purpose, truth, mentors, opportunities to lead, and a genuine encounter with God. They are navigating intense pressures around identity, relationships, technology, education, and the future.\n\nToday, we are praying for youth and young adults to hear the voice of God clearly. We are asking God to awaken purpose, protect identity, deepen faith, and raise bold witnesses. We are also praying for older generations to listen, mentor, encourage, and make room for emerging leaders.",
    prayerTargets: [
      "Clear identity, spiritual confidence, and wise decision-making",
      "Protection from destructive influences, hopelessness, and isolation",
      "Mentors who listen, guide, and model faithful living",
      "Opportunities for young people to serve, lead, and use their gifts",
      "A fresh move of God among youth and young adults",
    ],
    morningPrayer:
      "Father, call the next generation. Give young people clarity, courage, wisdom, and purpose. Protect them from voices that distort identity and weaken hope. Surround them with mentors and open doors for them to serve faithfully. In Jesus' name, amen.",
    middayPrayer:
      "Pray for youth and young adults by name. Ask God to meet them in their questions, pressures, and decisions. Pray for mentors, parents, educators, and ministry leaders who guide them.",
    eveningPrayer:
      "Lord, pour out Your Spirit on the next generation. Awaken faith, purpose, and boldness. Heal discouragement, restore hope, and give young people a clear sense of belonging. Teach us to make room for their gifts and walk beside them with wisdom. In Jesus' name, amen.",
    reflectionQuestions: [
      "What pressures are shaping the next generation most strongly?",
      "Are we making room for young people to lead and serve meaningfully?",
      "How can older believers become better mentors and listeners?",
    ],
    journalingPrompt: "Lord, show us how to support and empower the next generation faithfully.",
  },
  {
    week: 18,
    title: "LORD, HEAL OUR FAMILIES",
    focusLabel: "Family Restoration",
    primaryScripture: "Malachi 4:6 - God speaks of turning hearts within families toward one another.",
    supporting: [
      "Luke 15:20-24 - The father welcomed the returning son with compassion and restoration.",
      "Colossians 3:13 - Believers are called to forgive as the Lord has forgiven them.",
    ],
    devotionalFocus:
      "Families can carry deep love and deep pain at the same time. Misunderstandings, absence, betrayal, grief, addiction, unresolved conflict, and generational patterns can create distance that feels difficult to overcome.\n\nToday, we are praying for healing in families. We are asking God to soften hardened hearts, restore communication, and create opportunities for reconciliation. We are not asking people to ignore wisdom, safety, or healthy boundaries. We are asking God to bring truth, grace, healing, and peace where relationships have been damaged.",
    prayerTargets: [
      "Reconciliation in strained or divided families",
      "Healing from abandonment, betrayal, grief, and unresolved conflict",
      "Wisdom for healthy communication and appropriate boundaries",
      "Restoration across generations",
      "Grace to forgive and courage to seek peace where possible",
    ],
    morningPrayer:
      "Father, heal our families. Restore relationships that have been damaged by pain, pride, misunderstanding, and time. Give us wisdom to communicate honestly, forgive faithfully, and maintain healthy boundaries. Turn hearts toward one another and bring peace into our homes. In Jesus' name, amen.",
    middayPrayer:
      "Pray for families experiencing strain or distance. Ask God to bring healing, wise counsel, and opportunities for honest conversation. Pray for those who need strength to establish safe and healthy boundaries.",
    eveningPrayer:
      "Lord, bring restoration to families. Heal wounds that have lasted for years. Break destructive cycles. Give parents, children, siblings, and extended families the grace to move toward truth, forgiveness, and peace. In Jesus' name, amen.",
    reflectionQuestions: [
      "What makes family wounds especially difficult to address?",
      "How can forgiveness and healthy boundaries work together?",
      "Where is reconciliation needed, and what wisdom is required?",
    ],
    journalingPrompt: "Lord, show me where healing, forgiveness, or wise boundaries are needed in my family.",
  },
  {
    week: 19,
    title: "LORD, COMFORT THOSE WHO MOURN",
    focusLabel: "Grief",
    primaryScripture:
      "2 Corinthians 1:3-4 - God is described as the Father of compassion and the God of all comfort.",
    supporting: [
      "Psalm 34:18 - The Lord is close to the brokenhearted.",
      "1 Thessalonians 4:13-18 - Believers grieve with hope because of the promise of resurrection.",
    ],
    devotionalFocus:
      "Grief does not follow a simple timetable. People may feel strong one day and overwhelmed the next. Loss can affect sleep, relationships, concentration, faith, and the ability to function. The church should never rush people through mourning or pressure them to appear healed before they are ready.\n\nToday, we are praying for those who grieve. We are asking God to bring comfort, strength, and companionship. We are also praying that families, churches, and friends become more patient, compassionate, and present with those experiencing loss.",
    prayerTargets: [
      "Comfort for those grieving the death of loved ones",
      "Strength for people navigating complicated or prolonged grief",
      "Support for families facing anniversaries, holidays, and difficult reminders",
      "Hope rooted in God's presence and the promise of resurrection",
      "Compassion and patience from churches, friends, and caregivers",
    ],
    morningPrayer:
      "Father, comfort those who mourn. Draw near to broken hearts and strengthen people carrying the weight of loss. Surround them with compassionate support and remind them that they do not walk alone. Give hope, peace, and grace for each day. In Jesus' name, amen.",
    middayPrayer:
      "Pray for someone grieving a loss. Ask God to provide comfort and supportive relationships. Pray especially for those who feel forgotten after the initial season of sympathy has passed.",
    eveningPrayer:
      "Lord, be close to the brokenhearted. Hold those who are grieving and give them strength for each step. Teach us to become a patient, compassionate, and present community. Let hope remain alive even in seasons of sorrow. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why can grief feel isolating even when people are surrounded by others?",
      "How can churches support grieving people beyond the first few weeks?",
      "What does it mean to grieve with hope?",
    ],
    journalingPrompt: "Lord, show me how to offer comfort with patience, humility, and compassion.",
  },
  {
    week: 20,
    title: "LORD, BREAK EVERY CHAIN",
    focusLabel: "Freedom From Bondage",
    primaryScripture: "John 8:36 - Jesus declares that those He sets free are truly free.",
    supporting: [
      "Isaiah 61:1 - God brings freedom to captives and release to those in bondage.",
      "Romans 6:12-14 - Believers are called not to allow sin to rule over their lives.",
    ],
    devotionalFocus:
      "Bondage can take many forms: addiction, destructive habits, secrecy, unhealthy relationships, compulsive behavior, and patterns that leave people feeling powerless. Shame often convinces people to hide, but freedom begins when darkness is brought into the light and help is received.\n\nToday, we are praying for freedom. We are asking God to break chains, restore hope, and surround people with wise spiritual, relational, and professional support. We are also praying against judgment and stigma so that people can seek help without fear.",
    prayerTargets: [
      "Freedom from addiction, destructive habits, and secret struggles",
      "Courage to seek help, accountability, counseling, or treatment",
      "Healing from shame, isolation, and hopelessness",
      "Wisdom and strength for families affected by addiction or bondage",
      "Churches to become places of truth, compassion, and restoration",
    ],
    morningPrayer:
      "Father, break every chain. Bring freedom to people trapped in destructive patterns. Replace shame with hope and isolation with support. Give courage to seek help and strength to take the next right step. Let Your church become a place of truth, compassion, and restoration. In Jesus' name, amen.",
    middayPrayer:
      "Pray for people facing addiction or destructive cycles. Ask God to provide wise support systems, treatment resources, accountability, and healing. Pray for families carrying the weight of these struggles.",
    eveningPrayer:
      "Lord, bring freedom. Break chains of addiction, secrecy, shame, and despair. Strengthen those taking steps toward healing. Surround them with wise help and faithful support. Teach us to respond with truth, compassion, and grace. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why does shame often keep people trapped in destructive cycles?",
      "How can the church support freedom without ignoring accountability?",
      "What resources or relationships help people move toward healing?",
    ],
    journalingPrompt: "Lord, shine Your light into any area where freedom, honesty, or support is needed.",
  },
  {
    week: 21,
    title: "LORD, RENEW OUR MINDS",
    focusLabel: "Mental and Emotional Well-Being",
    primaryScripture: "Romans 12:2 - Believers are called to be transformed by the renewing of their minds.",
    supporting: [
      "Philippians 4:6-8 - Paul encourages prayer, gratitude, and disciplined focus on what is true and worthy.",
      "Psalm 42:11 - The psalmist speaks honestly to his own discouragement and redirects his hope toward God.",
    ],
    devotionalFocus:
      "Mental and emotional well-being should not be treated as a source of shame. People may face anxiety, depression, exhaustion, grief, trauma, loneliness, or overwhelming stress. Faith does not require people to deny what they are experiencing. God welcomes honesty and provides wisdom through prayer, community, and appropriate professional care.\n\nToday, we are praying for renewed minds and strengthened hearts. We are asking God to bring peace, resilience, healthy support, and hope. We are also praying for churches to become more compassionate and better equipped to walk alongside people with sensitivity.",
    prayerTargets: [
      "Peace for people experiencing anxiety, stress, or emotional exhaustion",
      "Hope for those facing depression, isolation, or discouragement",
      "Wisdom to seek counseling, medical care, and trusted support when needed",
      "Compassionate churches that respond without stigma or oversimplification",
      "Renewed thought patterns rooted in truth, gratitude, and hope",
    ],
    morningPrayer:
      "Father, renew our minds. Bring peace where there is anxiety, hope where there is discouragement, and strength where there is exhaustion. Give wisdom to seek appropriate help and surround people with compassionate support. Teach us to walk in truth without shame. In Jesus' name, amen.",
    middayPrayer:
      "Pray for people carrying emotional or mental-health burdens. Ask God to provide peace, wise care, supportive relationships, and courage to seek help when needed.",
    eveningPrayer:
      "Lord, strengthen minds and hearts. Bring comfort to those who feel overwhelmed, isolated, or discouraged. Guide people toward wise support and healing resources. Help Your church become a place of compassion, patience, and hope. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why do people sometimes feel ashamed to discuss mental or emotional struggles?",
      "How can faith communities provide support without oversimplifying complex needs?",
      "What practices help us renew our minds consistently?",
    ],
    journalingPrompt: "Lord, help me identify the thoughts, pressures, and burdens I need to bring before You honestly.",
  },
  {
    week: 22,
    title: "LORD, BRING HEALING",
    focusLabel: "Physical Health",
    primaryScripture:
      "James 5:14-16 - Believers are instructed to pray for those who are sick and support one another in faith.",
    supporting: [
      "Psalm 103:2-5 - The psalmist remembers God's compassion and healing.",
      "Mark 5:34 - Jesus spoke peace and healing to a woman who had suffered for many years.",
    ],
    devotionalFocus:
      "Illness affects more than the body. It can affect emotions, finances, relationships, employment, caregiving responsibilities, and hope. Some people are waiting for answers, navigating treatment, or adjusting to long-term conditions.\n\nToday, we are praying for healing, strength, wise medical care, and support for those facing health challenges. We pray with faith while also remaining compassionate toward those whose journey may be long or complicated. We trust God and refuse to shame people for the pace or form of their healing.",
    prayerTargets: [
      "Healing and strength for those facing illness, pain, or recovery",
      "Wisdom for doctors, nurses, therapists, and caregivers",
      "Peace for people awaiting test results, procedures, or diagnosis",
      "Provision for medical expenses, treatment, and practical support",
      "Endurance and encouragement for those facing long-term conditions",
    ],
    morningPrayer:
      "Father, bring healing. Strengthen those facing illness, pain, treatment, or recovery. Give wisdom to medical professionals and peace to families waiting for answers. Provide practical support and renew hope. In Jesus' name, amen.",
    middayPrayer:
      "Pray for specific people facing health challenges. Ask God for healing, comfort, medical wisdom, financial provision, and strength for caregivers.",
    eveningPrayer:
      "Lord, touch bodies, minds, and families. Bring healing where healing is needed, strength where the journey is long, and peace where answers are unclear. Guide medical professionals and sustain caregivers. Let Your presence bring comfort and hope. In Jesus' name, amen.",
    reflectionQuestions: [
      "How can the church support people facing long-term health challenges?",
      "Why is compassion essential when people are waiting for healing?",
      "Who needs practical support in addition to prayer?",
    ],
    journalingPrompt: "Lord, show me how to pray with faith and compassion for those facing health challenges.",
  },
  {
    week: 23,
    title: "LORD, PROVIDE AND GIVE US WISDOM",
    focusLabel: "Financial Stewardship",
    primaryScripture:
      "Philippians 4:19 - Paul expresses confidence that God will supply every need according to His riches in Christ.",
    supporting: [
      "Deuteronomy 8:18 - God gives the ability to produce wealth.",
      "Proverbs 21:5 - Diligent planning leads toward abundance, while haste creates difficulty.",
    ],
    devotionalFocus:
      "Financial pressure can create stress, shame, fear, and conflict. Many people are carrying rising costs, unstable employment, debt, caregiving responsibilities, and difficult decisions. Prayer for financial health should include both provision and wisdom.\n\nToday, we are asking God to meet needs, open doors, and provide opportunities. We are also praying for discipline, wise planning, generosity, ethical decision-making, and freedom from destructive habits. Financial stewardship is not only about having more. It is about managing faithfully what God places in our hands.",
    prayerTargets: [
      "Provision for families facing financial hardship",
      "Employment, business opportunities, and stable income",
      "Wisdom in budgeting, saving, giving, and planning",
      "Freedom from destructive debt patterns and impulsive decisions",
      "Generosity, contentment, and ethical stewardship",
    ],
    morningPrayer:
      "Father, provide and give us wisdom. Meet the needs of families facing financial pressure. Open doors for employment and opportunity. Teach us discipline, planning, generosity, and contentment. Help us become faithful stewards of everything You place in our hands. In Jesus' name, amen.",
    middayPrayer:
      "Pray for families facing financial strain. Ask God to provide employment, wisdom, opportunity, and discipline. Pray for entrepreneurs, workers, caregivers, and people navigating debt or uncertainty.",
    eveningPrayer:
      "Lord, bring provision and wisdom. Strengthen households, open doors of opportunity, and teach us faithful stewardship. Free us from fear, shame, and destructive financial habits. Let generosity and wisdom grow among Your people. In Jesus' name, amen.",
    reflectionQuestions: [
      "How can prayer and practical wisdom work together in financial stewardship?",
      "Where do fear, shame, or impulsive decisions create difficulty?",
      "What does faithful stewardship look like in this season?",
    ],
    journalingPrompt: "Lord, show me where I need greater wisdom, discipline, and trust in my finances.",
  },
  {
    week: 24,
    title: "LORD, MAKE US SERVANTS",
    focusLabel: "Service",
    primaryScripture: "Mark 10:43-45 - Jesus taught that greatness in His kingdom is expressed through service.",
    supporting: [
      "Galatians 5:13 - Believers are called to serve one another humbly in love.",
      "1 Peter 4:10 - Each person should use their gifts to serve others faithfully.",
    ],
    devotionalFocus:
      "Service is not merely filling a volunteer slot. It is an expression of love, humility, and discipleship. Jesus did not seek position for its own sake. He served. A healthy church is shaped by people who are willing to notice needs, use their gifts, and remain faithful even when the work is not visible.\n\nToday, we are asking God to cultivate servant hearts. We are praying against entitlement, burnout, competition, and the desire for recognition. We are asking God to help people discover their gifts and use them with joy, humility, and consistency.",
    prayerTargets: [
      "Humility and willingness to serve",
      "Clarity for people discovering their gifts",
      "Strength for volunteers and ministry workers",
      "Freedom from competition, entitlement, and the need for recognition",
      "A culture where service is valued, supported, and sustainable",
    ],
    morningPrayer:
      "Father, make us servants. Give us humility, compassion, and willingness. Show us where our gifts can meet real needs. Protect us from pride, competition, and burnout. Teach us to serve with joy and faithfulness. In Jesus' name, amen.",
    middayPrayer:
      "Pray for volunteers, ministry workers, and people carrying unseen responsibilities. Ask God to strengthen them and raise new servants with the right spirit.",
    eveningPrayer:
      "Lord, cultivate servant hearts among us. Help us notice needs, use our gifts, and serve without seeking recognition. Strengthen those who are tired and call others into meaningful service. Let humility shape the culture of Your church. In Jesus' name, amen.",
    reflectionQuestions: [
      "What is the difference between serving and merely filling a role?",
      "Where is help most needed in this season?",
      "How can churches support volunteers and prevent burnout?",
    ],
    journalingPrompt: "Lord, show me where You are calling me to serve with greater humility and faithfulness.",
  },
  {
    week: 25,
    title: "LORD, MAKE DISCIPLES THROUGH US",
    focusLabel: "Discipleship",
    primaryScripture:
      "Matthew 28:19-20 - Jesus commissioned His followers to make disciples and teach others to obey His commands.",
    supporting: [
      "Colossians 1:28 - Paul describes the goal of presenting believers mature in Christ.",
      "2 Timothy 2:2 - Faithful teaching should be passed from one generation of disciples to another.",
    ],
    devotionalFocus:
      "The mission of the church is not merely to gather crowds. It is to make disciples. Discipleship is the long, intentional work of helping people grow in faith, character, biblical understanding, obedience, and service.\n\nToday, we are praying for deeper spiritual formation. We are asking God to raise mentors, teachers, small-group leaders, and faithful believers who will walk alongside others. We are also praying for a culture where people remain teachable and committed to growth.",
    prayerTargets: [
      "Deeper spiritual maturity among believers",
      "Mentors, teachers, and small-group leaders",
      "Teachable hearts and willingness to grow",
      "Strong biblical instruction and practical application",
      "Multiplication as disciples help develop other disciples",
    ],
    morningPrayer:
      "Father, make disciples through us. Deepen our faith and form Christlike character within us. Raise mentors, teachers, and faithful believers who will walk with others patiently. Give us teachable hearts and a hunger to grow. In Jesus' name, amen.",
    middayPrayer:
      "Pray for people who are growing in faith. Ask God to connect them with wise mentors and strong biblical community. Pray for those called to teach, disciple, and encourage others.",
    eveningPrayer:
      "Lord, make us a disciple-making church. Move us beyond shallow faith and help us grow in obedience, wisdom, and maturity. Raise leaders who teach faithfully and believers who help others follow You. In Jesus' name, amen.",
    reflectionQuestions: [
      "What is the difference between church attendance and discipleship?",
      "Who has helped shape your faith over time?",
      "Who may need your encouragement, mentorship, or support?",
    ],
    journalingPrompt: "Lord, show me where I need to grow and who I may be called to encourage.",
  },
  {
    week: 26,
    title: "LORD, EMPOWER OUR WITNESS",
    focusLabel: "Evangelism",
    primaryScripture: "Acts 1:8 - Jesus promised power through the Holy Spirit so His followers could become witnesses.",
    supporting: [
      "Matthew 5:14-16 - Believers are called to let their light shine before others.",
      "1 Peter 3:15 - Followers of Christ should be prepared to explain their hope with gentleness and respect.",
    ],
    devotionalFocus:
      "Evangelism is not merely a church event or specialized ministry. It is the natural overflow of a life transformed by Christ. People around us are carrying questions, wounds, disappointments, and spiritual hunger. They need to encounter both the truth of the gospel and the compassion of believers who genuinely care.\n\nToday, we are praying for boldness, wisdom, and opportunity. We are asking God to open doors for meaningful conversations, help believers share their testimony, and make the church a welcoming place for people seeking hope.",
    prayerTargets: [
      "Boldness to share the gospel with love and humility",
      "Open doors for meaningful conversations",
      "Compassion for people who feel distant from faith or church",
      "Wisdom to answer questions with gentleness and respect",
      "A welcoming church culture for guests, seekers, and new believers",
    ],
    morningPrayer:
      "Father, empower our witness. Give us boldness without arrogance, compassion without compromise, and wisdom without fear. Open doors for meaningful conversations. Help us share the hope of Christ with gentleness, clarity, and love. In Jesus' name, amen.",
    middayPrayer:
      "Pray for specific people who may need hope, encouragement, or an invitation. Ask God to create natural opportunities for conversation and give you wisdom to listen well.",
    eveningPrayer:
      "Lord, make us faithful witnesses. Fill us with compassion for people who feel overlooked, wounded, uncertain, or far from You. Give us courage to share our story and wisdom to speak with love. Let our church become a place where people encounter grace, truth, and belonging. In Jesus' name, amen.",
    reflectionQuestions: [
      "What keeps believers from sharing their faith naturally?",
      "How can listening become part of effective evangelism?",
      "Who may need an invitation, conversation, or act of compassion this week?",
    ],
    journalingPrompt: "Lord, show me who I am called to encourage, invite, or serve.",
  },
];

const arcThreePackets = [
  {
    week: 27,
    title: "LORD, BRING PEACE TO OUR COMMUNITIES",
    focusLabel: "Neighborhood Peace",
    primaryScripture:
      "Jeremiah 29:7 - God instructed His people to seek the peace and well-being of the city where they lived and to pray for it.",
    supporting: [
      "Matthew 5:9 - Jesus blesses those who actively work for peace.",
      "Psalm 122:6 - God's people are called to pray for peace.",
    ],
    devotionalFocus:
      "God has called the church to care about the places where people live, work, worship, and raise their families. Prayer cannot remain confined to the walls of a church building. The spiritual, relational, and practical health of neighborhoods should matter deeply to believers.\n\nToday, we are praying for peace in our communities. We are asking God to strengthen relationships, calm conflict, protect families, and raise people who are willing to work together for the good of others. We are praying not only for the absence of violence, but also for the presence of trust, safety, cooperation, and hope.",
    prayerTargets: [
      "Peace and safety in neighborhoods, apartment communities, and public spaces",
      "Healing where fear, mistrust, or conflict have taken root",
      "Stronger relationships among residents, churches, schools, and community leaders",
      "Protection for children, seniors, and vulnerable neighbors",
      "Churches to become visible sources of compassion, stability, and hope",
    ],
    morningPrayer:
      "Father, bring peace to our communities. Protect neighborhoods, families, and public spaces. Heal fear, mistrust, and division. Raise people who will work together with wisdom and compassion. Help Your church become a faithful presence in the community. In Jesus' name, amen.",
    middayPrayer:
      "Pray specifically for your neighborhood, street, apartment community, or city. Name places where peace, safety, or stronger relationships are needed. Ask God to show you how to become a source of encouragement and practical care.",
    eveningPrayer:
      "Lord, let peace take root in our communities. Strengthen relationships, protect families, and bring hope where people feel discouraged or overlooked. Make Your church a visible witness of compassion, stability, and love. In Jesus' name, amen.",
    reflectionQuestions: [
      "What does it mean to seek the peace of the community where we live?",
      "Where do fear, isolation, or mistrust weaken neighborhoods?",
      "How can churches become more present and helpful in their communities?",
    ],
    journalingPrompt: "Lord, show me how I can contribute to peace and well-being in my community.",
  },
  {
    week: 28,
    title: "LORD, MAKE US PEACEMAKERS",
    focusLabel: "Violence Prevention",
    primaryScripture:
      "Isaiah 2:4 - The prophet envisions a future where weapons of war are transformed into tools that cultivate life.",
    supporting: [
      "Psalm 34:14 - Believers are instructed to turn from evil, pursue peace, and actively seek it.",
      "Matthew 26:52 - Jesus warned against the destructive cycle of violence.",
    ],
    devotionalFocus:
      "Violence leaves wounds that extend far beyond the immediate moment. Families grieve. Children carry fear. Neighborhoods lose trust. First responders absorb repeated trauma. Communities can become accustomed to loss in ways that should never feel normal.\n\nToday, we are praying for an end to violence in every form. We are asking God to intervene before conflict escalates, strengthen those working to prevent harm, and heal families whose lives have been changed by violence. We are also praying for the church to become a courageous voice for peace, wisdom, and reconciliation.",
    prayerTargets: [
      "Protection from gun violence, domestic violence, assault, and retaliation",
      "Healing for families and communities affected by violent loss",
      "Wisdom for violence-prevention workers, mentors, educators, and first responders",
      "Intervention before anger, conflict, or despair becomes destructive",
      "Churches to model peacemaking, conflict resolution, and compassionate presence",
    ],
    morningPrayer:
      "Father, make us peacemakers. Protect our communities from violence and retaliation. Comfort families who grieve and heal those carrying trauma. Give wisdom to those working to prevent harm. Help us become people who pursue peace with courage and consistency. In Jesus' name, amen.",
    middayPrayer:
      "Pray for communities where violence has become too common. Pray for young people facing pressure, families grieving loss, and leaders working to interrupt destructive cycles. Ask God to reveal ways the church can serve faithfully.",
    eveningPrayer:
      "Lord, break cycles of violence. Bring peace into homes, schools, streets, and neighborhoods. Heal trauma, calm anger, and protect lives. Raise mentors, counselors, leaders, and churches committed to the work of peace. In Jesus' name, amen.",
    reflectionQuestions: [
      "What conditions allow violence to become normalized?",
      "How can the church support both prevention and healing?",
      "What does active peacemaking require from believers?",
    ],
    journalingPrompt: "Lord, show me how to become a stronger peacemaker in my relationships and community.",
  },
  {
    week: 29,
    title: "LORD, LET JUSTICE AND MERCY FLOW",
    focusLabel: "Justice",
    primaryScripture: "Micah 6:8 - God calls His people to act justly, love mercy, and walk humbly with Him.",
    supporting: [
      "Isaiah 1:17 - God's people are instructed to seek justice and defend those who are vulnerable.",
      "Amos 5:24 - God calls for justice and righteousness to flow continually.",
    ],
    devotionalFocus:
      "Biblical justice is not a slogan. It is a reflection of God's character. Scripture repeatedly calls God's people to care about truth, fairness, dignity, mercy, and the treatment of vulnerable people. Justice and humility belong together.\n\nToday, we are asking God to make us people who seek what is right without becoming prideful, harsh, or selective. We are praying for integrity in institutions, fairness in decision-making, and protection for those whose voices are often overlooked. We are also asking God to help the church pursue justice with wisdom, compassion, and humility.",
    prayerTargets: [
      "Fair treatment and dignity for every person",
      "Protection for people who are vulnerable, overlooked, or mistreated",
      "Integrity within courts, institutions, workplaces, and public systems",
      "Wisdom for leaders making decisions that affect communities",
      "Churches to pursue justice and mercy with humility and consistency",
    ],
    morningPrayer:
      "Father, let justice and mercy flow. Teach us to care about what is right, fair, and compassionate. Protect those who are vulnerable and overlooked. Give wisdom and integrity to those in positions of influence. Help us walk humbly as we seek justice. In Jesus' name, amen.",
    middayPrayer:
      "Pray for people affected by unfair treatment, limited opportunity, or difficult systems. Ask God to strengthen leaders who pursue integrity. Pray for the church to speak and serve with both courage and humility.",
    eveningPrayer:
      "Lord, establish justice and mercy in our communities. Expose corruption, protect the vulnerable, and strengthen those who work for what is right. Help us resist selective compassion and walk in humility. In Jesus' name, amen.",
    reflectionQuestions: [
      "How are justice, mercy, and humility connected?",
      "Are there people whose burdens are easy to overlook?",
      "How can the church pursue justice without losing compassion or wisdom?",
    ],
    journalingPrompt: "Lord, show me where You are calling me to act justly, love mercy, and walk humbly.",
  },
  {
    week: 30,
    title: "LORD, RECONCILE DIVIDED COMMUNITIES",
    focusLabel: "Reconciliation",
    primaryScripture:
      "2 Corinthians 5:18-20 - God has reconciled believers to Himself through Christ and entrusted them with a ministry of reconciliation.",
    supporting: [
      "Ephesians 2:14-18 - Christ brings peace and breaks down dividing walls.",
      "Romans 12:18 - Believers are called to live at peace with others as far as it depends on them.",
    ],
    devotionalFocus:
      "Division has become deeply embedded in many communities. People are separated by race, culture, politics, generation, class, church tradition, geography, and painful history. Differences do not have to become hostility, but unresolved wounds and repeated mistrust can harden over time.\n\nToday, we are praying for reconciliation. We are asking God to bring truth, humility, listening, healing, and courage into divided spaces. Reconciliation does not require pretending that pain never happened. It requires honesty, repentance where needed, forgiveness, wisdom, and a willingness to pursue peace.",
    prayerTargets: [
      "Healing across racial, cultural, political, and generational divides",
      "Humility to listen before reacting",
      "Truthful conversations shaped by grace and respect",
      "Wisdom for leaders navigating division and mistrust",
      "Churches to model reconciliation without avoiding difficult issues",
    ],
    morningPrayer:
      "Father, reconcile divided communities. Tear down walls of hostility, pride, and mistrust. Teach us to listen with humility, speak with grace, and pursue truth with compassion. Make Your church a credible witness of reconciliation. In Jesus' name, amen.",
    middayPrayer:
      "Pray for relationships or communities affected by division. Ask God to expose assumptions, soften hardened hearts, and create opportunities for honest conversation and healing.",
    eveningPrayer:
      "Lord, heal division. Bring reconciliation where mistrust, history, and pain have separated people. Teach us to pursue peace without ignoring truth. Let the church reflect the reconciling power of the gospel. In Jesus' name, amen.",
    reflectionQuestions: [
      "Which divisions are most damaging in our communities?",
      "What is the difference between avoiding conflict and pursuing reconciliation?",
      "How can believers listen more faithfully across differences?",
    ],
    journalingPrompt: "Lord, show me where pride, assumptions, or unresolved pain may be limiting reconciliation.",
  },
  {
    week: 31,
    title: "LORD, BLESS OUR SCHOOLS",
    focusLabel: "Education",
    primaryScripture: "Proverbs 2:6 - Wisdom, knowledge, and understanding ultimately come from the Lord.",
    supporting: [
      "Daniel 1:17 - God gave knowledge, understanding, and wisdom to young people navigating a challenging environment.",
      "James 3:17 - Wisdom from above is pure, peaceable, considerate, and sincere.",
    ],
    devotionalFocus:
      "Schools shape the lives of children, families, educators, and communities. Teachers, administrators, support staff, counselors, coaches, and parents carry significant responsibility. Students are navigating academic pressure, social challenges, safety concerns, technology, and questions about their future.\n\nToday, we are praying for schools. We are asking God to provide wisdom, protection, opportunity, resources, and healthy relationships. We are praying for students to learn in safe environments and for educators to receive the support they need.",
    prayerTargets: [
      "Wisdom, strength, and encouragement for teachers and administrators",
      "Safety for students, staff, and families",
      "Support for students facing academic, emotional, or social challenges",
      "Adequate resources and opportunities for schools in every community",
      "Healthy partnership among parents, educators, churches, and community leaders",
    ],
    morningPrayer:
      "Father, bless our schools. Give wisdom, strength, and patience to educators. Protect students and staff. Provide resources where needs are great. Help families, schools, and communities work together for the well-being of children. In Jesus' name, amen.",
    middayPrayer:
      "Pray for a specific school, teacher, student, or administrator. Ask God to provide safety, wisdom, encouragement, and practical support.",
    eveningPrayer:
      "Lord, cover our schools. Strengthen teachers, encourage students, guide administrators, and support families. Let schools become places where children can learn, grow, and experience safety and opportunity. In Jesus' name, amen.",
    reflectionQuestions: [
      "What pressures are educators and students carrying today?",
      "How can churches support schools respectfully and practically?",
      "Which schools or students need focused prayer and support?",
    ],
    journalingPrompt: "Lord, show me how I can pray for and support the schools in my community.",
  },
  {
    week: 32,
    title: "LORD, PROTECT VULNERABLE CHILDREN",
    focusLabel: "Child Protection",
    primaryScripture:
      "Psalm 82:3-4 - God's people are called to defend the weak, uphold the cause of the vulnerable, and rescue those in need.",
    supporting: [
      "Matthew 18:5-6 - Jesus speaks with seriousness about the treatment of children.",
      "James 1:27 - Genuine faith includes care for those who are vulnerable.",
    ],
    devotionalFocus:
      "Children deserve safety, dignity, protection, and love. Yet many children face abuse, neglect, exploitation, instability, food insecurity, unsafe housing, and environments that limit their ability to thrive. The church must never look away from these realities.\n\nToday, we are praying for vulnerable children and for the adults entrusted with their care. We are asking God to expose harm, interrupt abuse, strengthen protective systems, and raise trustworthy people who will advocate for children with courage and wisdom.",
    prayerTargets: [
      "Protection for children facing abuse, neglect, exploitation, or unsafe environments",
      "Courage for adults to report concerns and take responsible action",
      "Wisdom for social workers, educators, caregivers, and child-protection professionals",
      "Healing and stability for children carrying trauma",
      "Churches to create safe environments with strong safeguarding practices",
    ],
    morningPrayer:
      "Father, protect vulnerable children. Expose harm, interrupt abuse, and bring safety where danger exists. Strengthen caregivers, educators, and professionals who advocate for children. Help churches become places of safety, responsibility, and compassion. In Jesus' name, amen.",
    middayPrayer:
      "Pray for children who are unsafe, unseen, or carrying trauma. Ask God to place trustworthy adults around them and provide appropriate intervention, support, and healing.",
    eveningPrayer:
      "Lord, defend children who cannot defend themselves. Bring protection, healing, and stability. Give adults courage to act responsibly. Strengthen every system and person working to safeguard children. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why must child protection remain a clear responsibility of the church?",
      "How can adults respond wisely when they suspect a child may be unsafe?",
      "What practices help create safer environments for children?",
    ],
    journalingPrompt: "Lord, show us how to become more faithful protectors of children.",
  },
  {
    week: 33,
    title: "LORD, HELP US SERVE THOSE IN NEED",
    focusLabel: "Poverty and Housing",
    primaryScripture:
      "Isaiah 58:6-7 - God calls His people to care for those who are hungry, oppressed, and in need of shelter.",
    supporting: [
      "Matthew 25:35-40 - Jesus identifies acts of care for people in need as acts of service offered to Him.",
      "Proverbs 19:17 - Compassion toward the poor is treated as service rendered to the Lord.",
    ],
    devotionalFocus:
      "Poverty is not merely a statistic. It affects real families, seniors, children, veterans, workers, and people navigating crisis. Rising housing costs, unstable employment, medical bills, food insecurity, and unexpected emergencies can place people in difficult situations quickly.\n\nToday, we are praying for people experiencing poverty, homelessness, and housing instability. We are asking God for provision, opportunity, wise policy, compassionate service, and practical pathways toward stability. We are also asking Him to show the church how to respond with dignity rather than judgment.",
    prayerTargets: [
      "Safe housing and practical support for people experiencing homelessness",
      "Food security and essential resources for families in need",
      "Employment opportunities, financial stability, and long-term pathways forward",
      "Wisdom for agencies, ministries, and leaders serving vulnerable populations",
      "Churches to respond with dignity, compassion, and practical action",
    ],
    morningPrayer:
      "Father, help us serve those in need. Provide shelter, food, employment, and support for people facing hardship. Give wisdom to those working toward long-term solutions. Teach us to respond with compassion, dignity, and practical care. In Jesus' name, amen.",
    middayPrayer:
      "Pray for local shelters, outreach ministries, housing programs, food pantries, and service organizations. Ask God to show the church where prayer should lead to compassionate action.",
    eveningPrayer:
      "Lord, provide for those facing hardship. Strengthen families, open doors of opportunity, and guide those serving on the front lines. Make us generous, attentive, and willing to help in practical ways. In Jesus' name, amen.",
    reflectionQuestions: [
      "How can churches respond to poverty with both compassion and wisdom?",
      "What barriers make stable housing difficult for many families?",
      "Where might God be calling us to move from concern to action?",
    ],
    journalingPrompt: "Lord, show me how prayer can lead me toward compassionate and practical service.",
  },
  {
    week: 34,
    title: "LORD, REMEMBER THOSE WHO ARE INCARCERATED",
    focusLabel: "Incarceration and Reentry",
    primaryScripture:
      "Hebrews 13:3 - Believers are called to remember those in prison as though they were suffering alongside them.",
    supporting: [
      "Isaiah 61:1 - God's redemptive work includes freedom, healing, and restoration.",
      "Matthew 25:36 - Jesus includes visiting those in prison among acts of compassionate service.",
    ],
    devotionalFocus:
      "Incarceration affects more than the person serving a sentence. It affects children, spouses, parents, neighborhoods, employment opportunities, housing, and the difficult process of returning to community life. People need accountability, but they also need dignity, restoration, and pathways toward meaningful change.\n\nToday, we are praying for incarcerated people, their families, correctional staff, chaplains, and those navigating reentry. We are asking God to bring transformation, wisdom, justice, opportunity, and support.",
    prayerTargets: [
      "Spiritual transformation and hope for incarcerated people",
      "Strength for children and families affected by incarceration",
      "Wisdom and safety for correctional officers, staff, and chaplains",
      "Fair treatment, accountability, and restorative opportunities",
      "Employment, housing, mentorship, and support for people returning home",
    ],
    morningPrayer:
      "Father, remember those who are incarcerated and the families affected by incarceration. Bring transformation, hope, and restoration. Strengthen correctional staff and chaplains. Open doors for employment, housing, mentorship, and healthy reentry. In Jesus' name, amen.",
    middayPrayer:
      "Pray for someone affected by incarceration. Ask God to provide spiritual growth, family support, and practical opportunities for a stable future.",
    eveningPrayer:
      "Lord, bring hope into prisons and jails. Strengthen families, guide staff, and support those returning home. Help churches become communities of truth, accountability, restoration, and wise compassion. In Jesus' name, amen.",
    reflectionQuestions: [
      "How does incarceration affect families and communities beyond the individual?",
      "What barriers do people face when returning home?",
      "How can churches offer both accountability and restoration?",
    ],
    journalingPrompt: "Lord, show us how to support restoration and reentry with wisdom and compassion.",
  },
  {
    week: 35,
    title: "LORD, STRENGTHEN CAREGIVERS AND HEALTHCARE WORKERS",
    focusLabel: "Care and Compassion",
    primaryScripture: "Galatians 6:2 - Believers are called to carry one another's burdens.",
    supporting: [
      "Isaiah 40:31 - Those who hope in the Lord receive renewed strength.",
      "Matthew 11:28-30 - Jesus invites weary people to come to Him for rest.",
    ],
    devotionalFocus:
      "Caregiving can be deeply meaningful and deeply exhausting. Family members caring for aging parents, children with special needs, relatives with chronic illness, or loved ones in crisis often carry responsibilities that remain invisible to others. Healthcare professionals also work under intense pressure as they serve people during vulnerable moments.\n\nToday, we are praying for caregivers and healthcare workers. We are asking God to renew strength, provide rest, guide decisions, and surround those who care for others with support.",
    prayerTargets: [
      "Strength, rest, and resilience for family caregivers",
      "Wisdom and endurance for healthcare workers",
      "Support for those facing compassion fatigue and burnout",
      "Practical help for families carrying long-term caregiving responsibilities",
      "Healing, peace, and hope for patients and loved ones",
    ],
    morningPrayer:
      "Father, strengthen caregivers and healthcare workers. Renew those who are tired, guide those making difficult decisions, and provide support for those carrying heavy responsibilities. Let compassion remain strong without becoming depleted. In Jesus' name, amen.",
    middayPrayer:
      "Pray for a caregiver, nurse, doctor, therapist, aide, or healthcare worker by name. Ask God to provide strength, rest, wisdom, and encouragement.",
    eveningPrayer:
      "Lord, renew those who care for others. Protect them from burnout, strengthen their families, and surround them with support. Give wisdom, patience, and compassion to every healthcare worker and caregiver. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why do caregivers often struggle to ask for help?",
      "What practical support can churches offer caregivers?",
      "How can people protect compassion while also honoring the need for rest?",
    ],
    journalingPrompt: "Lord, show me someone who needs encouragement, relief, or practical support.",
  },
  {
    week: 36,
    title: "LORD, PROTECT THOSE WHO SERVE",
    focusLabel: "First Responders, Military Members, and Veterans",
    primaryScripture: "Psalm 121:7-8 - The Lord watches over His people and guards their coming and going.",
    supporting: [
      "Psalm 91:1-2 - God is described as a refuge and source of security.",
      "John 15:13 - Jesus speaks of sacrificial love expressed through laying down one's life for others.",
    ],
    devotionalFocus:
      "Many people serve in roles that require courage, sacrifice, and exposure to difficult circumstances. First responders, military members, veterans, emergency personnel, and their families often carry burdens that others may not fully understand.\n\nToday, we are praying for protection, wisdom, healing, and support. We are asking God to strengthen those currently serving, care for their families, and bring healing to veterans carrying visible or invisible wounds.",
    prayerTargets: [
      "Protection for first responders, military members, and emergency personnel",
      "Wisdom during difficult, dangerous, or rapidly changing situations",
      "Strength and support for spouses, children, and families",
      "Healing for veterans carrying physical, emotional, or relational wounds",
      "Compassionate resources and healthy community support",
    ],
    morningPrayer:
      "Father, protect those who serve. Watch over first responders, military members, veterans, and their families. Give wisdom in dangerous situations, healing for wounds, and strength for those carrying heavy responsibilities. In Jesus' name, amen.",
    middayPrayer:
      "Pray for someone currently serving or a veteran in need of support. Ask God to provide safety, peace, healing, and healthy resources.",
    eveningPrayer:
      "Lord, cover those who serve and sacrifice. Protect them, guide them, and strengthen their families. Heal veterans carrying pain and help communities offer meaningful support. In Jesus' name, amen.",
    reflectionQuestions: [
      "What unseen burdens may people in service professions carry?",
      "How can churches better support families affected by service-related stress?",
      "Who needs intentional encouragement or practical support?",
    ],
    journalingPrompt: "Lord, show me how to honor and support those who serve.",
  },
  {
    week: 37,
    title: "LORD, GIVE WISDOM TO CIVIC LEADERS",
    focusLabel: "Government and Public Leadership",
    primaryScripture:
      "1 Timothy 2:1-2 - Believers are instructed to pray for those in authority so that communities may experience peace and stability.",
    supporting: [
      "Proverbs 21:1 - God remains sovereign over the hearts of leaders.",
      "Romans 13:1-7 - Civil authority carries responsibility and accountability.",
    ],
    devotionalFocus:
      "Prayer for civic leaders is not an endorsement of a party, platform, or personality. It is a biblical responsibility. Leaders make decisions that affect schools, public safety, housing, transportation, healthcare, economic opportunity, and the everyday lives of families.\n\nToday, we are praying for local, state, and national leaders. We are asking God to grant wisdom, humility, courage, integrity, and compassion. We are praying for leaders with whom we agree and leaders with whom we disagree, because the well-being of communities matters.",
    prayerTargets: [
      "Wisdom for local, state, and national leaders",
      "Integrity, humility, and accountability in public service",
      "Compassion for vulnerable communities",
      "Cooperation where collaboration serves the common good",
      "Peaceful, respectful, and constructive civic engagement",
    ],
    morningPrayer:
      "Father, give wisdom to civic leaders. Guide those who make decisions affecting communities and families. Grant integrity, humility, courage, and compassion. Protect us from hatred, cynicism, and division. Teach us to pray faithfully and engage respectfully. In Jesus' name, amen.",
    middayPrayer:
      "Pray by name for local, state, and national leaders. Ask God to guide decisions, expose corruption, strengthen integrity, and create opportunities for wise cooperation.",
    eveningPrayer:
      "Lord, give wisdom to those in authority. Help leaders serve with humility, truth, and compassion. Protect communities from division and guide public decisions toward justice, peace, and the common good. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why is prayer for leaders important even when we disagree with them?",
      "How can believers remain principled without becoming consumed by hostility?",
      "What qualities should we consistently pray for in public leadership?",
    ],
    journalingPrompt: "Lord, teach me to pray for leaders with faithfulness, wisdom, and humility.",
  },
  {
    week: 38,
    title: "LORD, RESTORE INTEGRITY IN PUBLIC LIFE",
    focusLabel: "Civic Responsibility",
    primaryScripture: "Proverbs 14:34 - Righteousness strengthens a nation, while sin brings disgrace.",
    supporting: [
      "Exodus 18:21 - Leaders should be capable, trustworthy, and resistant to dishonest gain.",
      "Jeremiah 22:3 - God calls leaders to do what is just and right.",
    ],
    devotionalFocus:
      "Public trust weakens when integrity becomes negotiable. Communities suffer when truth is distorted, accountability is avoided, or leadership becomes driven by ego, fear, greed, or personal gain. Integrity matters in government, business, media, education, churches, and everyday relationships.\n\nToday, we are praying for a renewed commitment to truth and responsibility. We are asking God to raise principled leaders and conscientious citizens. We are also praying that the church models the integrity it desires to see in public life.",
    prayerTargets: [
      "Integrity and accountability in public institutions",
      "Leaders who value truth, justice, and ethical responsibility",
      "Protection from corruption, deception, and abuse of power",
      "Respectful public discourse shaped by truth and humility",
      "Churches to model integrity in leadership, communication, and service",
    ],
    morningPrayer:
      "Father, restore integrity in public life. Raise leaders who value truth, justice, and accountability. Expose corruption and protect communities from deception. Help Your church model honesty, humility, and responsibility. In Jesus' name, amen.",
    middayPrayer:
      "Pray for integrity in government, workplaces, media, schools, businesses, and churches. Ask God to strengthen people who choose truth even when integrity is costly.",
    eveningPrayer:
      "Lord, let truth and integrity increase. Strengthen leaders who act responsibly and expose practices that harm communities. Teach us to live with honesty and humility in every area of life. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why is integrity essential for healthy communities?",
      "Where can the church model stronger accountability?",
      "How can believers pursue truth without becoming harsh or self-righteous?",
    ],
    journalingPrompt: "Lord, show me where my own life must reflect greater integrity.",
  },
  {
    week: 39,
    title: "LORD, BLESS THE WORK OF OUR HANDS",
    focusLabel: "Work, Business, and the Economy",
    primaryScripture: "Psalm 90:17 - The psalmist asks God to establish the work of His people's hands.",
    supporting: [
      "Deuteronomy 8:18 - God gives people the ability to produce and steward resources.",
      "Colossians 3:23-24 - Believers are called to work wholeheartedly as service offered to the Lord.",
    ],
    devotionalFocus:
      "Work shapes much of everyday life. Employment affects families, housing, health, opportunity, dignity, and the ability to serve others. Business owners, employees, entrepreneurs, caregivers, job seekers, and workers navigating transition all need wisdom and provision.\n\nToday, we are praying for work, business, and economic stability. We are asking God to open doors of opportunity, strengthen ethical leadership, provide employment, and help people steward resources wisely. We are also praying for people facing layoffs, underemployment, rising costs, and financial uncertainty.",
    prayerTargets: [
      "Stable employment and meaningful opportunities for job seekers",
      "Wisdom and integrity for business owners, managers, and entrepreneurs",
      "Support for families affected by layoffs, reduced hours, or rising costs",
      "Fair treatment, dignity, and healthy conditions in workplaces",
      "Creativity, discipline, and stewardship in work and business",
    ],
    morningPrayer:
      "Father, bless the work of our hands. Open doors for employment, strengthen workers, and guide business owners with wisdom and integrity. Provide for families facing financial pressure. Teach us to work faithfully and steward opportunity well. In Jesus' name, amen.",
    middayPrayer:
      "Pray for job seekers, business owners, workers, and families navigating financial uncertainty. Ask God to create opportunities, provide wisdom, and establish the work of their hands.",
    eveningPrayer:
      "Lord, bring provision and opportunity. Strengthen workers, entrepreneurs, and families. Let workplaces reflect dignity, fairness, and integrity. Establish the work of our hands and help us use resources wisely. In Jesus' name, amen.",
    reflectionQuestions: [
      "How does work affect the health and stability of families?",
      "What does ethical leadership look like in business and employment?",
      "Who needs prayer for provision, employment, or opportunity?",
    ],
    journalingPrompt: "Lord, show me how to honor You through my work, stewardship, and service.",
  },
];

const arcFourPackets = [
  {
    week: 40,
    title: "LORD, HELP US WELCOME THE STRANGER",
    focusLabel: "Immigrants, Refugees, and New Neighbors",
    primaryScripture:
      "Leviticus 19:33-34 - God instructed His people not to mistreat foreigners living among them, but to love them as themselves.",
    supporting: [
      "Matthew 25:35 - Jesus identifies welcoming the stranger as an act of service offered to Him.",
      "Hebrews 13:2 - Believers are encouraged to practice hospitality toward strangers.",
    ],
    devotionalFocus:
      "Communities are often shaped by people arriving from different nations, cultures, languages, and life experiences. Some come seeking opportunity. Others arrive after displacement, violence, hardship, or uncertainty. Scripture repeatedly calls God's people to treat the stranger with compassion, dignity, wisdom, and hospitality.\n\nToday, we are praying for immigrants, refugees, and new neighbors. We are asking God to protect vulnerable families, strengthen those navigating transition, and guide churches as they offer practical care. This prayer focus is not about political argument. It is about seeing people through the lens of compassion and honoring the dignity of every person.",
    prayerTargets: [
      "Safety, stability, and provision for immigrants, refugees, and displaced families",
      "Compassion and wisdom within churches and communities",
      "Healthy support for people learning new systems, languages, and environments",
      "Protection from exploitation, discrimination, and isolation",
      "Grace for communities to respond with truth, dignity, and hospitality",
    ],
    morningPrayer:
      "Father, help us welcome the stranger. Give protection, provision, and peace to families navigating unfamiliar places and difficult transitions. Teach us to respond with compassion, wisdom, and dignity. Help Your church become a place of welcome, care, and faithful hospitality. In Jesus' name, amen.",
    middayPrayer:
      "Pray for families adjusting to a new community. Ask God to provide housing, employment, supportive relationships, language resources, and protection. Pray for churches and organizations serving newcomers with compassion and wisdom.",
    eveningPrayer:
      "Lord, teach us to welcome people with grace. Protect immigrants, refugees, and displaced families. Give leaders wisdom and communities compassion. Help us recognize the image of God in every person and serve faithfully without fear or hostility. In Jesus' name, amen.",
    reflectionQuestions: [
      "What does biblical hospitality require from believers?",
      "How can churches support new neighbors with both compassion and wisdom?",
      "Are there people in our communities who feel unseen, isolated, or unwelcome?",
    ],
    journalingPrompt: "Lord, show me how I can extend hospitality and dignity to someone who may feel like a stranger.",
  },
  {
    week: 41,
    title: "LORD, DEFEND THE ORPHAN AND THE WIDOW",
    focusLabel: "Foster Care, Adoption, and Vulnerable Families",
    primaryScripture: "James 1:27 - Genuine faith includes caring for orphans and widows in their distress.",
    supporting: [
      "Psalm 68:5-6 - God is described as a father to the fatherless and a defender of widows.",
      "Isaiah 1:17 - God's people are called to defend the vulnerable and seek justice.",
    ],
    devotionalFocus:
      "Some families carry burdens that remain invisible to the wider community. Children may face instability, separation, or the need for foster care. Single parents, widows, adoptive families, caregivers, and kinship families may carry responsibilities that feel overwhelming.\n\nToday, we are praying for vulnerable children and families. We are asking God to provide safety, stability, support, and loving community. We are also asking Him to raise churches that do more than express concern. We want to become communities willing to support families practically, consistently, and compassionately.",
    prayerTargets: [
      "Safety and stability for children in foster care or unstable environments",
      "Strength for foster parents, adoptive families, kinship caregivers, and single parents",
      "Healing for children carrying grief, trauma, or disruption",
      "Wisdom for social workers, advocates, and family-support organizations",
      "Churches to provide practical care, mentorship, and long-term support",
    ],
    morningPrayer:
      "Father, defend the vulnerable. Cover children who need safety, stability, and care. Strengthen foster parents, adoptive families, widows, caregivers, and single parents. Raise people willing to serve with patience, compassion, and consistency. In Jesus' name, amen.",
    middayPrayer:
      "Pray for children and families facing instability. Ask God to strengthen caregivers, provide resources, and guide those working in foster care, adoption, and family support.",
    eveningPrayer:
      "Lord, protect vulnerable families. Bring healing to children carrying pain. Strengthen caregivers and provide wise support. Teach Your church to move beyond concern and become a source of practical, faithful care. In Jesus' name, amen.",
    reflectionQuestions: [
      "What burdens do foster, adoptive, and vulnerable families often carry privately?",
      "How can churches provide ongoing support rather than occasional attention?",
      "Where might God be calling us to respond practically?",
    ],
    journalingPrompt: "Lord, show me how I can support a child, caregiver, or family in need.",
  },
  {
    week: 42,
    title: "LORD, STRENGTHEN OUR SENIORS",
    focusLabel: "Older Adults",
    primaryScripture:
      "Psalm 71:18 - The psalmist asks God not to forsake him in old age so that he may continue declaring God's power to the next generation.",
    supporting: [
      "Leviticus 19:32 - God's people are instructed to honor older adults.",
      "Isaiah 46:4 - God promises continued care through old age.",
    ],
    devotionalFocus:
      "Older adults carry wisdom, stories, sacrifice, and experience that should never be overlooked. Yet many seniors face loneliness, declining health, grief, financial pressure, caregiving challenges, or the feeling that their contribution is no longer valued.\n\nToday, we are praying for older adults. We are asking God to provide strength, dignity, companionship, care, and renewed purpose. We are also asking the church to honor seniors, listen to their wisdom, support their needs, and create opportunities for meaningful connection across generations.",
    prayerTargets: [
      "Health, strength, and quality care for older adults",
      "Companionship for seniors facing loneliness or isolation",
      "Financial stability and practical support",
      "Wisdom for families navigating caregiving decisions",
      "Opportunities for seniors to share wisdom, faith, and encouragement",
    ],
    morningPrayer:
      "Father, strengthen our seniors. Give health, dignity, companionship, and peace. Comfort those experiencing loneliness or grief. Guide families making difficult caregiving decisions. Help us honor older adults and recognize the wisdom they carry. In Jesus' name, amen.",
    middayPrayer:
      "Pray for an older adult by name. Ask God to provide companionship, encouragement, health, and support. Consider whether someone may need a call, visit, meal, or practical assistance.",
    eveningPrayer:
      "Lord, cover our seniors. Let no one feel forgotten or discarded. Strengthen families, caregivers, and communities. Help us honor the wisdom of older generations and create stronger bonds across ages. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why can older adults become overlooked in fast-moving communities?",
      "How can churches create stronger intergenerational relationships?",
      "Who may need intentional encouragement or practical support?",
    ],
    journalingPrompt: "Lord, show me an older adult I can honor, encourage, or support.",
  },
  {
    week: 43,
    title: "LORD, HELP US WALK IN TRUTH",
    focusLabel: "Media, Technology, and Communication",
    primaryScripture:
      "Philippians 4:8 - Believers are instructed to focus their minds on what is true, honorable, just, pure, and worthy of praise.",
    supporting: [
      "Ephesians 4:25 - God's people are called to put away falsehood and speak truthfully.",
      "Proverbs 18:21 - Words carry the power to shape life and cause harm.",
    ],
    devotionalFocus:
      "Technology has created remarkable opportunities for connection, education, communication, and ministry. It has also increased exposure to misinformation, comparison, hostility, distraction, and unhealthy habits. Words can spread quickly, and careless communication can damage relationships and communities.\n\nToday, we are praying for discernment. We are asking God to help us walk in truth, communicate with grace, and use technology responsibly. We are praying for wisdom to recognize deception, discipline to resist unhealthy patterns, and humility in the way we speak to one another.",
    prayerTargets: [
      "Discernment to recognize misinformation, manipulation, and deception",
      "Responsible use of social media and technology",
      "Protection for children and families navigating online spaces",
      "Healthy communication shaped by truth, grace, and humility",
      "Wisdom for media professionals, educators, ministry leaders, and public voices",
    ],
    morningPrayer:
      "Father, help us walk in truth. Give us discernment in what we read, share, and believe. Guard our words and teach us to communicate with grace. Protect families and children in online spaces. Help us use technology wisely rather than allowing it to control us. In Jesus' name, amen.",
    middayPrayer:
      "Consider your own technology habits and communication patterns. Pray for discernment before sharing information, responding emotionally, or engaging in conflict. Ask God to strengthen families navigating digital challenges.",
    eveningPrayer:
      "Lord, lead us in truth. Protect communities from deception, hostility, and unhealthy distraction. Help us speak with wisdom, listen carefully, and use technology in ways that reflect integrity and grace. In Jesus' name, amen.",
    reflectionQuestions: [
      "How does technology shape our habits, emotions, and relationships?",
      "What does responsible communication look like in a divided culture?",
      "Are there digital habits that need greater discipline or healthy boundaries?",
    ],
    journalingPrompt: "Lord, help me communicate with greater truth, grace, and wisdom.",
  },
  {
    week: 44,
    title: "LORD, BE OUR REFUGE IN TIMES OF TROUBLE",
    focusLabel: "Disaster Relief and Community Resilience",
    primaryScripture: "Psalm 46:1 - God is our refuge and strength, an ever-present help in times of trouble.",
    supporting: [
      "Isaiah 43:2 - God promises His presence when His people pass through overwhelming circumstances.",
      "2 Corinthians 1:3-4 - God comforts His people so they can comfort others.",
    ],
    devotionalFocus:
      "Natural disasters, fires, storms, floods, displacement, and unexpected crises can disrupt life quickly. Families may lose homes, resources, stability, or loved ones. First responders, volunteers, community organizations, and churches often carry significant responsibility during recovery.\n\nToday, we are praying for communities facing disaster and crisis. We are asking God for protection, comfort, provision, coordination, and resilience. We are also praying that churches become prepared to respond with compassion, generosity, and practical support.",
    prayerTargets: [
      "Protection and rescue for people facing disaster or displacement",
      "Comfort for families experiencing loss",
      "Strength and wisdom for first responders and relief workers",
      "Resources for shelter, food, rebuilding, and long-term recovery",
      "Churches to respond with generosity, organization, and compassion",
    ],
    morningPrayer:
      "Father, be our refuge in times of trouble. Protect communities facing crisis and bring comfort to families experiencing loss. Strengthen first responders, volunteers, and relief workers. Provide resources for recovery and teach us to serve with compassion. In Jesus' name, amen.",
    middayPrayer:
      "Pray for a community affected by disaster or crisis. Ask God to provide shelter, safety, resources, and strength. Pray for organizations and churches serving on the ground.",
    eveningPrayer:
      "Lord, bring help in times of trouble. Protect lives, comfort families, and strengthen those working toward recovery. Help communities rebuild with hope and resilience. Make Your church ready to respond with practical love. In Jesus' name, amen.",
    reflectionQuestions: [
      "How can churches prepare before crisis occurs?",
      "What do communities need after the initial emergency has passed?",
      "How can prayer lead to practical compassion during recovery?",
    ],
    journalingPrompt: "Lord, show me how I can become more prepared to help others during times of crisis.",
  },
  {
    week: 45,
    title: "LORD, SEND US TO THE NATIONS",
    focusLabel: "Missions",
    primaryScripture:
      "Psalm 67:1-2 - The psalmist asks God to bless His people so that His ways may be known throughout the earth.",
    supporting: [
      "Matthew 28:19-20 - Jesus commissions His followers to make disciples among all nations.",
      "Revelation 7:9 - Scripture presents a vision of people from every nation, tribe, people, and language worshiping before God.",
    ],
    devotionalFocus:
      "The gospel is not limited to one neighborhood, culture, generation, or nation. God's heart extends to the whole world. Missions includes people serving across the globe, but it also includes the call to reach people across cultural and relational boundaries in our own communities.\n\nToday, we are praying for missionaries, churches, ministries, and believers serving in diverse contexts. We are asking God to open doors for the gospel, provide resources, strengthen cross-cultural relationships, and raise people willing to go wherever He sends them.",
    prayerTargets: [
      "Strength, protection, and provision for missionaries and their families",
      "Open doors for the gospel in communities and nations",
      "Wisdom for cross-cultural ministry",
      "Translation, discipleship, education, and humanitarian efforts",
      "New missionaries, supporters, and prayer partners to answer God's call",
    ],
    morningPrayer:
      "Father, send us to the nations. Strengthen missionaries, churches, and ministries carrying the gospel across cultures. Open doors, provide resources, and protect families. Give us hearts willing to go, give, pray, and serve wherever You lead. In Jesus' name, amen.",
    middayPrayer:
      "Pray for a missionary, nation, or cross-cultural ministry. Ask God to provide strength, wisdom, protection, and fruitful relationships.",
    eveningPrayer:
      "Lord, let Your ways be known throughout the earth. Strengthen those serving across cultures and raise new laborers. Give the church a global heart and help us carry the gospel with humility, compassion, and faithfulness. In Jesus' name, amen.",
    reflectionQuestions: [
      "How can every believer participate in missions?",
      "Why are humility and listening important in cross-cultural ministry?",
      "Is God calling us to pray, give, serve, or go in a new way?",
    ],
    journalingPrompt: "Lord, expand my heart for people, cultures, and communities beyond my immediate world.",
  },
  {
    week: 46,
    title: "LORD, STRENGTHEN THE PERSECUTED CHURCH",
    focusLabel: "Persecuted Believers",
    primaryScripture:
      "Hebrews 13:3 - Believers are called to remember those who are imprisoned and mistreated as though suffering with them.",
    supporting: [
      "Acts 12:5 - The church prayed earnestly for Peter while he was imprisoned.",
      "Ephesians 6:18-20 - Paul asks believers to pray for boldness as he proclaims the gospel.",
    ],
    devotionalFocus:
      "Around the world, many believers face hostility, imprisonment, displacement, violence, discrimination, or pressure because of their faith. Their stories remind us that discipleship can be costly and that the global church is deeply connected.\n\nToday, we are praying for persecuted believers. We are asking God to strengthen their courage, provide protection, sustain families, and give boldness to churches serving under pressure. We are also praying that our own faith becomes less casual and more deeply committed.",
    prayerTargets: [
      "Courage, endurance, and protection for persecuted believers",
      "Strength for families separated by imprisonment or displacement",
      "Boldness for pastors, missionaries, and churches under pressure",
      "Provision, shelter, legal support, and community care",
      "Greater awareness and faithful prayer within churches experiencing freedom",
    ],
    morningPrayer:
      "Father, strengthen the persecuted church. Protect believers facing hostility and give courage to those suffering for their faith. Sustain families, provide resources, and strengthen churches under pressure. Teach us to remember them faithfully. In Jesus' name, amen.",
    middayPrayer:
      "Pray for believers in a specific country or region. Ask God to provide courage, safety, and endurance. Pray for families affected by persecution and for ministries offering support.",
    eveningPrayer:
      "Lord, remember Your people who suffer for their faith. Give boldness, protection, and hope. Strengthen churches facing persecution and help us stand with them through prayer, generosity, and awareness. In Jesus' name, amen.",
    reflectionQuestions: [
      "How does the persecuted church challenge casual faith?",
      "Why is remembrance an important form of spiritual solidarity?",
      "How can churches support persecuted believers beyond occasional attention?",
    ],
    journalingPrompt: "Lord, strengthen my faith and teach me to remember believers who suffer for Your name.",
  },
  {
    week: 47,
    title: "LORD, TEACH US TO STAND",
    focusLabel: "Spiritual Warfare",
    primaryScripture:
      "Ephesians 6:10-18 - Believers are instructed to stand firm in the strength of the Lord and put on the full armor of God.",
    supporting: [
      "2 Corinthians 10:3-5 - Spiritual weapons have divine power to challenge destructive strongholds.",
      "James 4:7 - Believers are called to submit to God and resist the devil.",
    ],
    devotionalFocus:
      "Spiritual warfare should never become a source of fear, obsession, or confusion. Scripture calls believers to stand firm in the strength of the Lord, grounded in truth, righteousness, faith, salvation, Scripture, and prayer. The emphasis is not panic. It is preparedness.\n\nToday, we are praying for spiritual resilience. We are asking God to expose deception, strengthen faith, guard families, protect leaders, and help believers resist temptation. We are also asking for discernment so that we do not blame every struggle on spiritual attack while ignoring wisdom, responsibility, or practical action.",
    prayerTargets: [
      "Spiritual strength, discernment, and resilience",
      "Protection for families, leaders, and ministries",
      "Freedom from deception, temptation, fear, and discouragement",
      "Renewed commitment to truth, Scripture, prayer, and obedience",
      "Wisdom to respond to challenges with both spiritual maturity and practical responsibility",
    ],
    morningPrayer:
      "Father, teach us to stand. Strengthen us in Your power and help us walk in truth, righteousness, faith, and obedience. Protect families, leaders, and ministries. Give us discernment and deliver us from fear, deception, and temptation. In Jesus' name, amen.",
    middayPrayer:
      "Pray for strength in areas of temptation, discouragement, or confusion. Ask God to renew your mind, sharpen discernment, and strengthen believers carrying spiritual burdens.",
    eveningPrayer:
      "Lord, teach Your people to stand firm. Guard our minds, homes, leaders, and ministries. Expose deception and strengthen obedience. Help us resist fear and remain rooted in truth, Scripture, and prayer. In Jesus' name, amen.",
    reflectionQuestions: [
      "What does it mean to stand firm without becoming fearful or reactionary?",
      "Where is greater discernment needed?",
      "How do spiritual discipline and practical responsibility work together?",
    ],
    journalingPrompt: "Lord, show me where I need greater strength, truth, and spiritual discipline.",
  },
  {
    week: 48,
    title: "LORD, GIVE US GRATEFUL HEARTS",
    focusLabel: "Gratitude",
    primaryScripture:
      "Psalm 103:1-5 - The psalmist calls his soul to remember the benefits and faithfulness of God.",
    supporting: [
      "1 Thessalonians 5:16-18 - Believers are called to rejoice, pray continually, and give thanks in every circumstance.",
      "Philippians 4:6 - Prayer and thanksgiving belong together.",
    ],
    devotionalFocus:
      "Gratitude does not deny hardship. It helps us remember that hardship is not the whole story. In seasons of waiting, stress, or disappointment, it is easy to focus only on what is missing. Gratitude redirects attention toward God's faithfulness, provision, mercy, and sustaining grace.\n\nToday, we are praying for grateful hearts. We are asking God to free us from constant complaint, comparison, and entitlement. We are choosing to remember His goodness and thank Him for both visible blessings and quiet mercies.",
    prayerTargets: [
      "Grateful hearts in every season",
      "Freedom from complaint, entitlement, and unhealthy comparison",
      "Greater awareness of God's daily provision and grace",
      "Thanksgiving for people, relationships, opportunities, and answered prayer",
      "A church culture marked by joy, humility, and remembrance",
    ],
    morningPrayer:
      "Father, give us grateful hearts. Help us remember Your benefits and recognize Your faithfulness. Deliver us from complaint, comparison, and entitlement. Teach us to give thanks in every season and notice the quiet ways You sustain us. In Jesus' name, amen.",
    middayPrayer:
      "Pause and name specific reasons for gratitude. Thank God for people, provision, protection, growth, lessons, and answered prayers. Consider sharing appreciation with someone who has encouraged or supported you.",
    eveningPrayer:
      "Lord, fill Your church with gratitude. Help us remember what You have done and recognize Your goodness in the present. Let thanksgiving strengthen our faith and shape the atmosphere of our community. In Jesus' name, amen.",
    reflectionQuestions: [
      "How does gratitude change the way we interpret difficult seasons?",
      "What blessings have become easy to overlook?",
      "How can thanksgiving become part of our corporate prayer culture?",
    ],
    journalingPrompt: "Lord, help me remember and record the ways You have been faithful.",
  },
  {
    week: 49,
    title: "LORD, HELP US REMEMBER",
    focusLabel: "Book of Remembrance",
    primaryScripture:
      "Psalm 77:11-12 - The psalmist intentionally remembers and reflects on the works of God.",
    supporting: [
      "Malachi 3:16 - A Book of Remembrance was written concerning those who feared the Lord and honored His name.",
      "Joshua 4:6-7 - Memorial stones were established so future generations would ask what God had done.",
    ],
    devotionalFocus:
      "Answered prayers can be forgotten surprisingly quickly. A need may feel urgent while we are waiting, but after God responds, we may move forward without pausing to remember. Scripture repeatedly calls God's people to record, rehearse, and pass down the testimony of His faithfulness.\n\nToday, we are praying for a culture of remembrance. We are asking God to help us identify answered prayers, record testimonies, and celebrate what He has done. Remembrance is not nostalgia. It is fuel for future faith.",
    prayerTargets: [
      "Awareness of answered prayers and quiet testimonies",
      "Gratitude for God's faithfulness across seasons",
      "Courage for people to share testimonies appropriately",
      "Wisdom to document stories with care, dignity, and accuracy",
      "A culture that passes faith-building stories to the next generation",
    ],
    morningPrayer:
      "Father, help us remember. Open our eyes to the ways You have answered, sustained, protected, restored, and provided. Teach us to record Your faithfulness and share testimony with humility. Let remembrance strengthen our faith. In Jesus' name, amen.",
    middayPrayer:
      "Reflect on prayers God has answered, doors He has opened, relationships He has restored, and ways He has sustained you. Consider recording one testimony in the Book of Remembrance.",
    eveningPrayer:
      "Lord, make us a remembering people. Help us recognize Your faithfulness and celebrate Your goodness. Preserve testimonies that will strengthen families, churches, and future generations. In Jesus' name, amen.",
    reflectionQuestions: [
      "Why do people sometimes forget answered prayer?",
      "Which testimonies should be recorded and passed down?",
      "How does remembrance strengthen faith during future challenges?",
    ],
    journalingPrompt: "Lord, bring to mind one testimony I should record and remember.",
  },
  {
    week: 50,
    title: "LORD, TEACH US TO FORGIVE",
    focusLabel: "Forgiveness and Reconciliation",
    primaryScripture: "Colossians 3:13 - Believers are called to forgive as the Lord has forgiven them.",
    supporting: [
      "Matthew 6:14-15 - Jesus emphasizes the seriousness of forgiveness.",
      "Romans 12:18 - Believers are called to pursue peace as far as it depends on them.",
    ],
    devotionalFocus:
      "Forgiveness is not pretending that harm did not occur. It is not denying the need for truth, accountability, boundaries, or safety. Forgiveness is the difficult spiritual work of releasing personal vengeance and refusing to allow offense to dominate the heart.\n\nToday, we are praying for the grace to forgive. We are asking God to heal wounds, expose bitterness, and guide people toward wise reconciliation where possible. We are also praying for discernment, because forgiveness and restored access are not always the same thing.",
    prayerTargets: [
      "Grace to release bitterness, resentment, and the desire for revenge",
      "Healing from betrayal, disappointment, and relational pain",
      "Wisdom to pursue reconciliation where appropriate",
      "Courage to establish healthy boundaries where necessary",
      "Humility to seek forgiveness when we have caused harm",
    ],
    morningPrayer:
      "Father, teach us to forgive. Heal wounds that have become deeply rooted. Free us from bitterness and resentment. Give us humility to seek forgiveness and wisdom to pursue reconciliation safely and honestly. Teach us to extend the grace we have received. In Jesus' name, amen.",
    middayPrayer:
      "Bring relational wounds honestly before God. Ask Him to reveal bitterness, resentment, or avoidance. Pray for wisdom regarding forgiveness, reconciliation, accountability, and healthy boundaries.",
    eveningPrayer:
      "Lord, heal wounded relationships. Give us grace to forgive, humility to repent, and wisdom to pursue peace. Protect people from unhealthy pressure and help us understand the difference between forgiveness, reconciliation, and restored trust. In Jesus' name, amen.",
    reflectionQuestions: [
      "What is forgiveness, and what is it not?",
      "Why may reconciliation require time, truth, and accountability?",
      "Are there wounds that need to be brought honestly before God?",
    ],
    journalingPrompt: "Lord, show me where I need grace to forgive, repent, or establish wiser boundaries.",
  },
  {
    week: 51,
    title: "LORD, SHOW US WHAT IS NEXT",
    focusLabel: "Vision and Direction",
    primaryScripture:
      "Habakkuk 2:1-3 - The prophet is instructed to watch, listen, and write the vision clearly.",
    supporting: [
      "Proverbs 16:3 - Believers are encouraged to commit their plans to the Lord.",
      "Isaiah 43:18-19 - God calls His people to recognize the new thing He is doing.",
    ],
    devotionalFocus:
      "Every new season requires discernment. Some opportunities should be pursued. Others should be declined. Some doors require courage. Others require patience. Vision is not merely ambition. It is the disciplined work of seeking God's direction and aligning our plans with His will.\n\nToday, we are praying for clarity. We are asking God to guide families, churches, leaders, businesses, ministries, and communities. We are praying for wisdom to recognize the new things God may be doing without abandoning the lessons He has already taught us.",
    prayerTargets: [
      "Clarity for churches, ministries, families, and leaders",
      "Wisdom to recognize the right opportunities",
      "Patience where timing is not yet clear",
      "Courage to move forward when direction becomes evident",
      "Alignment between vision, character, resources, and God's will",
    ],
    morningPrayer:
      "Father, show us what is next. Give us clarity, patience, courage, and discernment. Help us recognize the doors You are opening and the distractions we should avoid. Align our plans with Your will and teach us to move at Your pace. In Jesus' name, amen.",
    middayPrayer:
      "Pray about the decisions, opportunities, and transitions before you, your family, your church, or your community. Ask God for clarity and the discipline to avoid rushing.",
    eveningPrayer:
      "Lord, guide our next steps. Help us see clearly, listen carefully, and move faithfully. Give us wisdom for new opportunities, patience in uncertain seasons, and courage when You call us forward. In Jesus' name, amen.",
    reflectionQuestions: [
      "How can we distinguish vision from personal ambition?",
      "Where do we need clarity, patience, or courage?",
      "What lessons from the previous season must we carry forward?",
    ],
    journalingPrompt: "Lord, show me what I need to release, recognize, and pursue in the next season.",
  },
  {
    week: 52,
    title: "LORD, CONSECRATE US FOR THE JOURNEY AHEAD",
    focusLabel: "Dedication",
    primaryScripture:
      "Romans 12:1-2 - Believers are called to offer their lives to God and be transformed through renewed minds.",
    supporting: [
      "Joshua 3:5 - Joshua called the people to consecrate themselves in preparation for what God would do.",
      "Psalm 90:17 - The psalmist asks God to establish the work of His people's hands.",
    ],
    devotionalFocus:
      "A full year of prayer should not end with a simple conclusion. It should lead into renewed surrender. Consecration means placing every area of life before God again: our plans, habits, relationships, responsibilities, gifts, resources, and expectations.\n\nToday, we are praying for the journey ahead. We are asking God to establish the work of our hands, deepen our prayer culture, and prepare us for new seasons of service. We are not returning to the beginning unchanged. We are carrying lessons, testimonies, and greater maturity forward.",
    prayerTargets: [
      "Renewed surrender in every area of life",
      "Continued commitment to unified, specific, and sustained prayer",
      "Wisdom for the next season of ministry and service",
      "Gratitude for testimonies, growth, and lessons from the year",
      "Courage, humility, and faithfulness for the journey ahead",
    ],
    morningPrayer:
      "Father, consecrate us for the journey ahead. We offer our lives, plans, gifts, relationships, and responsibilities to You again. Establish the work of our hands and deepen our commitment to prayer. Prepare us for the next season with humility, courage, and faithfulness. In Jesus' name, amen.",
    middayPrayer:
      "Reflect on the lessons, testimonies, and growth of the past year. Ask God what needs to be carried forward, released, or recommitted. Pray for renewed faithfulness in the next season.",
    eveningPrayer:
      "Lord, consecrate Your people. Thank You for sustaining us through every week of prayer. Establish the work of our hands and prepare us for the journey ahead. Let unified, specific, and sustained prayer remain part of our culture. In Jesus' name, amen.",
    reflectionQuestions: [
      "What has God taught us through a sustained rhythm of prayer?",
      "Which testimonies should shape our faith going forward?",
      "What must we recommit to God for the next season?",
    ],
    journalingPrompt: "Lord, show me what You are calling me to carry forward into the journey ahead.",
  },
];

const corePacketLibrary = [...arcOnePackets, ...arcTwoPackets, ...arcThreePackets, ...arcFourPackets];

const fastingAuthoredLibrary = [
  {
    day: 1,
    title: "RETURN TO GOD",
    focusLabel: "Humility, gratitude, repentance, and remembrance",
    dateLabel: "Monday, September 14, 2026",
    anchorScripture:
      "Joel 2:12-13 - The Lord calls His people to return to Him with all their heart, with fasting, weeping, and mourning.",
    supporting: [
      "Psalm 139:23-24 - David asks God to search his heart and lead him in the everlasting way.",
      "Lamentations 3:22-23 - The Lord's mercies are new every morning.",
    ],
    devotionalFocus:
      "A fasting season begins with return. Before the church asks for direction, provision, or momentum, we first turn our hearts back toward God. Fasting is not a way to impress Him. It is a way to create space for humility, attention, surrender, and renewed dependence.\n\nAs Servant Church prepares to celebrate another year of life and ministry, this first day invites us to remember God's faithfulness and bring our hearts honestly before Him. We are not fasting to perform. We are setting aside distractions so we can return to God with gratitude, repentance, and expectation.",
    prayerTargets: [
      "Gratitude for God's faithfulness to Servant Church",
      "Humility as leaders and members prepare for the anniversary weekend",
      "Repentance where busyness, pride, distraction, or discouragement have taken root",
      "Renewed hunger for prayer, worship, and obedience",
      "Grace for each participant to choose a wise and meaningful fasting expression",
    ],
    morningPrayer:
      "Father, we return to You with humble hearts. Thank You for sustaining Servant Church and for every mercy You have shown us. Search us, cleanse us, and renew our desire for You. Let this fast begin with gratitude, honesty, and surrender. In Jesus' name, amen.",
    middayPrayer:
      "Pause and thank God for specific ways He has sustained the church, your family, and your own life. Ask Him to reveal anything that needs to be surrendered before the celebration weekend.",
    eveningPrayer:
      "Lord, receive our return. We lay down distraction, pride, and spiritual drift. Prepare our hearts for worship, unity, and renewed obedience. Let this anniversary season be marked by humility and remembrance. In Jesus' name, amen.",
    reflectionQuestions: [
      "What has God done for Servant Church that should be remembered with gratitude?",
      "Where do I personally need to return to God with greater humility?",
      "What distraction or appetite may need to be surrendered during this fast?",
    ],
    journalingPrompt: "Lord, show me what You are calling me to remember, release, and return to during this fast.",
  },
  {
    day: 2,
    title: "COME INTO ONE ACCORD",
    focusLabel: "Unity, alignment, healing, shared burden, and renewed love",
    dateLabel: "Tuesday, September 15, 2026",
    anchorScripture:
      "Acts 1:14 - The disciples joined together constantly in prayer before the outpouring at Pentecost.",
    supporting: [
      "Psalm 133:1 - It is good and pleasant when God's people dwell together in unity.",
      "Ephesians 4:1-6 - Believers are called to preserve the unity of the Spirit with humility, patience, and love.",
    ],
    devotionalFocus:
      "One accord is not sameness. It is shared surrender. A church can contain many personalities, generations, gifts, perspectives, and stories while still learning to seek God with one heart. Fasting helps quiet the noise that often competes with unity.\n\nOn this second day, we are asking God to align Servant Church around His heart. We are praying for healing where relationships have been strained, renewed love where people have grown tired, and shared burden for the assignment ahead. The anniversary weekend should not only celebrate what has been. It should help the church move forward together.",
    prayerTargets: [
      "Unity across leaders, members, families, generations, and ministry teams",
      "Healing from offense, misunderstanding, disappointment, or weariness",
      "Shared burden for prayer, worship, discipleship, outreach, and service",
      "Protection from division, comparison, gossip, and misalignment",
      "Renewed love for one another and for the mission of the church",
    ],
    morningPrayer:
      "Father, bring us into one accord. Align our hearts with Your will and with one another in humility and love. Heal what needs healing, strengthen what needs strengthening, and protect us from division. Make Servant Church a people who pray and move together. In Jesus' name, amen.",
    middayPrayer:
      "Pray for unity by name. Lift up leaders, families, ministry teams, and relationships that need grace, patience, healing, or renewed trust.",
    eveningPrayer:
      "Lord, make us one in heart and purpose. Let this fasting season remove distraction and deepen love. Give us shared burden, shared faith, and shared obedience for the journey ahead. In Jesus' name, amen.",
    reflectionQuestions: [
      "Where does Servant Church need deeper alignment in this season?",
      "What relationship or ministry area needs healing, patience, or renewed love?",
      "How can I contribute to one accord rather than merely desire it?",
    ],
    journalingPrompt: "Lord, show me how to walk in humility, unity, and love as the church moves forward.",
  },
  {
    day: 3,
    title: "DEDICATE THE FUTURE",
    focusLabel: "Surrender, vision, mission, laborers, and readiness for what God has next",
    dateLabel: "Wednesday, September 16, 2026",
    anchorScripture:
      "Romans 12:1-2 - Believers are called to offer their lives to God and be transformed through renewed minds.",
    supporting: [
      "Joshua 3:5 - Joshua called the people to consecrate themselves because the Lord would do wonders among them.",
      "Psalm 90:17 - The psalmist asks God to establish the work of His people's hands.",
    ],
    devotionalFocus:
      "The final day of this fast looks forward. Servant Church is not only celebrating a birthday; the church is dedicating the future back to God. Every anniversary is a moment to remember, but it is also a moment to surrender again.\n\nToday, we are praying for the journey ahead. We are asking God to establish the work of the church's hands, raise up laborers, clarify vision, deepen prayer, and prepare Servant Church for faithful ministry in the next season. We are not asking God to bless our ambition. We are offering Him our lives, plans, gifts, resources, relationships, and expectations.",
    prayerTargets: [
      "Fresh surrender for Servant Church's future",
      "Clarity for vision, ministry priorities, and community assignment",
      "Laborers with the right spirit, character, and commitment",
      "Courage, humility, and wisdom for leaders",
      "A sustained prayer culture that continues beyond the anniversary weekend",
    ],
    morningPrayer:
      "Father, we dedicate the future to You. Establish the work of our hands and align our plans with Your will. Raise up laborers, strengthen leaders, and prepare Servant Church for the assignment ahead. Let prayer remain central to our culture. In Jesus' name, amen.",
    middayPrayer:
      "Pray specifically for the next season of Servant Church. Name the ministries, leaders, families, outreach efforts, and decisions that need God's wisdom and covering.",
    eveningPrayer:
      "Lord, consecrate us for the journey ahead. We surrender our plans, expectations, gifts, and resources to You. Lead us with clarity, protect us from wrong alignments, and send the right people for the right assignment. In Jesus' name, amen.",
    reflectionQuestions: [
      "What should Servant Church carry forward into the next season?",
      "What may need to be released, simplified, or surrendered?",
      "What kind of laborers should we be praying for as the church moves ahead?",
    ],
    journalingPrompt: "Lord, show me how to dedicate my part in the church's future back to You.",
  },
];

const fastingPlaceholderThemes = [
  "Consecration",
  "Humility",
  "Repentance",
  "Unity",
  "Discernment",
  "Intercession",
  "Obedience",
  "Renewed Hunger",
  "Clean Hands and Pure Hearts",
  "Strength for Leaders",
  "Healing and Restoration",
  "Wisdom for the Assignment",
  "Laborers for the Harvest",
  "Families and Households",
  "Children and Youth",
  "Community Peace",
  "Compassion and Service",
  "Mission and Witness",
  "Faith for the Future",
  "Sustained Prayer",
  "Spiritual Resilience",
  "Remembrance",
  "Gratitude",
  "Forgiveness",
  "Alignment",
  "Courage",
  "Provision",
  "Protection",
  "Fresh Fire",
  "Dedication",
];

function createFastingPlaceholderDay(day) {
  const theme = fastingPlaceholderThemes[day - 1] || `Fasting Focus ${day}`;
  return {
    day,
    title: theme.toUpperCase(),
    focusLabel: "Daily fasting content to be finalized",
    anchorScripture: "Anchor Scripture to be finalized.",
    supporting: ["Supporting passage to be finalized."],
    devotionalFocus:
      "This day is reserved in the One Accord CPM fasting library. Leaders may use this placeholder while the full devotional content is being authored and approved.\n\nThe church shares the prayer focus; each participant chooses a wise and meaningful fasting expression. Continue to pray with humility, focus, and dependence on God.",
    prayerTargets: [
      `Pray into the focus of ${theme.toLowerCase()}.`,
      "Pray for humility, unity, and shared spiritual burden.",
      "Pray for the local church focus added by leaders.",
      "Pray for wisdom, obedience, and sustained prayer beyond the fast.",
    ],
    morningPrayer:
      "Father, guide this day of fasting and prayer. Give us humility, clarity, and grace as we seek You together. Keep our hearts focused on consecration rather than performance. In Jesus' name, amen.",
    middayPrayer:
      "Return briefly to the shared fasting focus. Ask God to keep the church attentive, unified, and surrendered throughout the day.",
    eveningPrayer:
      "Lord, seal the work of prayer in us. Strengthen our obedience, deepen our dependence, and help this fast bear fruit in the life of the church. In Jesus' name, amen.",
    reflectionQuestions: [
      "What is God bringing to my attention during this fast?",
      "Where do I need greater surrender, humility, or obedience?",
      "How should this fasting season shape the way I pray after it ends?",
    ],
    journalingPrompt: "Lord, show me how to respond faithfully to You during this fasting season.",
  };
}

const fastingLibrary = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  return fastingAuthoredLibrary.find((item) => item.day === day) || createFastingPlaceholderDay(day);
});

const seedState = {
  accessCode: "SERVANT-PRAYS",
  participantAccessGranted: false,
  adminSession: null,
  activeView: "home",
  adminTab: "overview",
  editingPacketId: "packet-1",
  rotation: {
    mode: "manual",
    startDate: "",
    entryWeek: 1,
  },
  fastingSeason: {
    enabled: true,
    name: "Servant Church Birthday Fast",
    theme: "Consecrated for the Journey Ahead",
    duration: 3,
    startDate: "2026-09-14",
    endDate: "2026-09-16",
    milestoneLabel: "Worship Night",
    milestoneDate: "2026-09-18",
    celebrationDate: "2026-09-20",
    localFocus:
      "Prepare our hearts for the worship night, anniversary celebration, and the next season of Servant Church.",
    leaderNote:
      "The church shares the prayer focus; each participant chooses a wise and meaningful fasting expression.",
  },
  checkIns: [],
  prayerParticipations: [],
  prayerParticipationCount: 0,
  schedule: [
    {
      id: "sched-1",
      title: "Designated Prayer Day",
      date: "Wednesday",
      time: "Morning, midday, and 7:00 PM",
      location: "Personal prayer and Zoom gathering",
    },
    {
      id: "sched-2",
      title: "Corporate Prayer Gathering",
      date: "Wednesday",
      time: "7:00 PM - 7:40 PM",
      location: "Zoom",
    },
  ],
  zoom: {
    url: "https://zoom.us/j/0000000000",
    label: "Join Corporate Prayer",
    details: "Wednesday at 7:00 PM",
  },
  leaders: [
    {
      id: "leader-1",
      name: "Selwyn Davis",
      email: "selwyn_davis@yahoo.com",
      roles: ["Lead Administrator", "Packet Editor", "Pastoral-Care Leader", "Facilitator"],
    },
  ],
  packets: [
    {
      id: "packet-1",
      week: 1,
      status: "active",
      theme: "One Accord in Prayer",
      primaryScripture: "Acts 1:14 - They all joined together constantly in prayer.",
      supporting: ["Acts 4:24-31", "2 Chronicles 20:3-4"],
      devotional: [
        "The first week invites Servant Church to begin with shared posture: humility, unity, and expectation. This is not a campaign to perform. It is a rhythm for becoming a praying people together.",
        "As the church gathers around the same Scripture and the same prayer targets, the goal is clarity of burden and faith-filled agreement before God.",
      ],
      rhythm: "Prepare in the morning. Return at midday. Gather in the evening. Remember what God does.",
      coreTargets: [
        "Pray for unity across Servant Church.",
        "Pray for renewed hunger for corporate prayer.",
        "Pray for families carrying hidden burdens.",
        "Pray for wisdom and covering for church leaders.",
        "Pray for meaningful reconciliation and ministry breakthroughs.",
      ],
      localTargets: [
        "Pray for the launch of the 12-week One Accord CPM pilot.",
        "Pray for first-time participants to feel welcomed and guided.",
      ],
      reflectionQuestions: [
        "Where do I need to move from isolated concern to shared prayer?",
        "What burden should I carry with the church this week?",
      ],
      journalingPrompt: "Write one prayer of surrender and agreement for this week's shared burden.",
      remembrancePrompt: "Share an answered prayer or testimony that can strengthen faith in the body.",
    },
    {
      id: "packet-2",
      week: 2,
      status: "upcoming",
      theme: "Prayer With One Heart",
      primaryScripture: "Acts 4:24 - When they heard this, they raised their voices together in prayer to God.",
      supporting: ["Psalm 133:1", "John 17:20-23"],
      devotional: [
        "Unified prayer does not require every person to carry the same life experience. It calls the church to bring different burdens under one shared dependence on God.",
        "This week invites Servant Church to pray for unity that is more than agreement. We are asking God to form a people who can carry one another in love.",
      ],
      rhythm: "Prepare in the morning. Return at midday. Gather in the evening. Remember what God does.",
      coreTargets: [
        "Pray for spiritual unity across generations.",
        "Pray for humility in relationships.",
        "Pray for families experiencing division.",
        "Pray for the church to carry shared burdens well.",
      ],
      localTargets: ["Add up to three local Servant Church prayer targets."],
      reflectionQuestions: ["Where can I help carry the burden of another believer this week?"],
      journalingPrompt: "Write a prayer asking God to deepen unity in the church.",
      remembrancePrompt: "Share a moment where God brought peace or unity.",
    },
    {
      id: "packet-3",
      week: 3,
      status: "upcoming",
      theme: "Specific Prayer, Shared Burden",
      primaryScripture: "Philippians 4:6 - In every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      supporting: ["Matthew 7:7-11", "1 John 5:14-15"],
      devotional: [
        "Specific prayer helps the church recognize God's faithfulness with greater clarity. We are not trying to control outcomes; we are learning to bring real burdens before God together.",
        "This week asks the church to move from vague concern to clear petition, trusting the Father's wisdom and goodness.",
      ],
      rhythm: "Prepare in the morning. Return at midday. Gather in the evening. Remember what God does.",
      coreTargets: [
        "Pray for clear and faithful intercession.",
        "Pray for courage to name real needs before God.",
        "Pray for wisdom in ministry decisions.",
        "Pray for answered prayers to be recognized and remembered.",
      ],
      localTargets: ["Add up to three local Servant Church prayer targets."],
      reflectionQuestions: ["What specific burden should I bring before God with the church?"],
      journalingPrompt: "Write one specific prayer request in faith and surrender.",
      remembrancePrompt: "Share an answer to a specific prayer.",
    },
    {
      id: "packet-4",
      week: 4,
      status: "upcoming",
      theme: "Remembering God's Faithfulness",
      primaryScripture: "Malachi 3:16 - A scroll of remembrance was written in his presence concerning those who feared the Lord.",
      supporting: ["Joshua 4:1-7", "Psalm 77:11-12"],
      devotional: [
        "Remembrance strengthens prayer because it helps the church see that God has been present, active, and faithful.",
        "This week invites Servant Church to record and celebrate testimonies without turning them into performance. We remember so faith can deepen.",
      ],
      rhythm: "Prepare in the morning. Return at midday. Gather in the evening. Remember what God does.",
      coreTargets: [
        "Pray for eyes to recognize God's faithfulness.",
        "Pray for testimonies that strengthen the church.",
        "Pray for answered prayers to be stewarded humbly.",
        "Pray for gratitude to shape the church's culture.",
      ],
      localTargets: ["Add up to three local Servant Church prayer targets."],
      reflectionQuestions: ["What has God already done that I need to remember?"],
      journalingPrompt: "Write one remembrance of God's faithfulness.",
      remembrancePrompt: "Share an answered prayer for review.",
    },
    {
      id: "packet-0",
      week: 0,
      status: "archived",
      theme: "Preparing the Heart",
      primaryScripture: "Joel 2:15-17 - Consecrate a fast; call a sacred assembly.",
      supporting: ["Psalm 139:23-24"],
      devotional: [
        "This preview packet helped leaders prepare the church for a prayer rhythm rooted in humility and shared intention.",
        "Preparation gives corporate prayer a stronger foundation because people arrive with Scripture, focus, and expectation.",
      ],
      rhythm: "Prepare. Return. Gather. Remember.",
      coreTargets: [
        "Pray for humility.",
        "Pray for spiritual attentiveness.",
        "Pray for willing participation.",
        "Pray for protection over the pilot.",
      ],
      localTargets: ["Pray for Servant Church leaders."],
      reflectionQuestions: ["What does readiness look like for me?"],
      journalingPrompt: "Name one area where you want God to prepare your heart.",
      remembrancePrompt: "Remember a time God met you in prayer.",
    },
  ],
  prayerRequests: [
    {
      id: "req-1",
      name: "Anonymous",
      contact: "",
      subject: "self",
      text: "Please pray for strength and wisdom during a family transition.",
      privacy: "Approved prayer team only",
      contactPermission: false,
      urgent: false,
      status: "New",
      pastoralFlag: false,
      reviewDate: addDays(new Date(), 30),
      createdAt: new Date().toISOString(),
    },
  ],
  testimonies: [
    {
      id: "test-1",
      name: "Servant Church member",
      text: "God opened a door for an overdue conversation, and peace came into a strained relationship.",
      relatedRequest: "",
      contactPermission: false,
      sharePermission: true,
      namePermission: false,
      status: "New",
      visibility: "Private review",
      createdAt: new Date().toISOString(),
    },
  ],
  report: {
    gatheringsHeld: 1,
    manualAttendanceAdjustment: 0,
    reconciliations: 1,
    breakthroughs: 1,
    leaderNotes:
      "Pilot reporting should measure the health of the rhythm, not individual spirituality.",
  },
};

function intercessoryPacket({
  week,
  status,
  theme,
  focusDate,
  focusLabel,
  primaryScripture,
  supporting,
  devotionalFocus,
  prayerTargets,
  localTargets,
  morningPrayer,
  middayPrayer,
  eveningPrayer,
  reflectionQuestions,
  journalingPrompt,
  remembrancePrompt,
}) {
  return {
    id: `packet-${week}`,
    week,
    status,
    groupSpecific: true,
    focusDate,
    theme,
    focusLabel,
    primaryScripture,
    supporting,
    anchorScriptures: [primaryScripture, ...supporting],
    devotional: devotionalFocus.split("\n\n"),
    devotionalFocus,
    rhythm:
      "Tuesday is individual prayer and devotion throughout the day. Wednesday begins with corporate prayer at 7:15 AM, followed by individual midday and evening return.",
    coreTargets: prayerTargets,
    prayerTargets,
    localTargets,
    morningPrayerTitle: "Tuesday Prayer | Individual Prayer Day",
    morningPrayer,
    middayPrayerTitle: "Wednesday Midday and Evening Return | Individual Prayer",
    middayPrayer,
    eveningPrayerTitle: "Wednesday Corporate Prayer | 7:15 AM",
    eveningPrayer,
    reflectionQuestions,
    journalingPrompt,
    remembrancePrompt,
    dailyTemplateVersion: 2,
  };
}

Object.assign(seedState, {
  accessCode: "INTERCESSORS-PRAY",
  libraryWeekCount: 5,
  activeView: "home",
  adminTab: "overview",
  editingPacketId: "packet-1",
  rotation: {
    mode: "manual",
    startDate: "2026-06-30",
    entryWeek: 1,
  },
  fastingSeason: {
    ...seedState.fastingSeason,
    enabled: false,
    name: "Servant Intercessory Team Fast",
    theme: "Set Apart for Prayer",
    localFocus:
      "Fasting can be activated later if the team chooses to add a short consecration rhythm.",
  },
  schedule: [
    {
      id: "sched-1",
      title: "30-Day Intercessory Team Rhythm",
      date: "Tuesday and Wednesday",
      time:
        "Tuesday individual prayer and devotion all day; Wednesday corporate prayer at 7:15 AM, with individual midday and evening return.",
      location: "Personal prayer and Wednesday group prayer",
    },
    {
      id: "sched-2",
      title: "Wednesday Corporate Prayer",
      date: "Wednesday",
      time: "7:15 AM - 7:45 AM",
      location: "Zoom / group gathering",
    },
  ],
  zoom: {
    url: "https://zoom.us/j/0000000000",
    label: "Join Wednesday Corporate Prayer",
    details: "Wednesday at 7:15 AM",
  },
  leaders: [
    {
      id: "leader-1",
      name: "Selwyn Davis",
      email: "selwyn_davis@yahoo.com",
      roles: ["Lead Administrator", "Packet Editor", "Pastoral-Care Leader", "Facilitator"],
    },
    {
      id: "leader-2",
      name: "Cassandra Davis",
      email: "casswdavis@gmail.com",
      roles: ["Prayer-Team Reviewer", "Facilitator"],
    },
    {
      id: "leader-3",
      name: "Sarah Mitchell",
      email: "smjackson822@gmail.com",
      roles: ["Prayer-Team Reviewer", "Testimony Curator"],
    },
    {
      id: "leader-4",
      name: "Keisha Parris",
      email: "keisha@parrisfinancialservices.com",
      roles: ["Prayer Administrator", "Packet Editor", "Facilitator"],
    },
    {
      id: "leader-5",
      name: "Angela Permenter",
      email: "aperm50@gmail.com",
      roles: ["Prayer-Team Reviewer", "Pastoral-Care Support"],
    },
  ],
  packets: [
    intercessoryPacket({
      week: 1,
      status: "active",
      theme: "Healing",
      focusLabel: "Healing",
      focusDate: "Tuesday, June 30 and Wednesday, July 1, 2026",
      primaryScripture:
        "Tuesday Anchor - Jeremiah 17:14 - Heal me, Lord, and I will be healed; save me and I will be saved, for You are the one I praise.",
      supporting: [
        "Tuesday Supporting Passage - Psalm 147:3 - He heals the brokenhearted and binds up their wounds.",
        "Wednesday Anchor - James 5:14-16 - The prayer offered in faith will make the sick person well, and the prayer of a righteous person is powerful and effective.",
        "Wednesday Supporting Passage - Mark 5:34 - Jesus told the woman that her faith had made her whole and to go in peace.",
      ],
      devotionalFocus:
        "Healing is not only physical recovery. It includes emotional wounds, family pain, spiritual weariness, church hurt, grief, fear, and places where hope has become thin. This first week asks the Servant Intercessory Team to begin with compassion and faith. We are not pretending that pain is simple, and we are not promising outcomes on our timetable. We are bringing real people, real bodies, real memories, and real burdens before the Lord who heals.\n\nTuesday is a day of individual intercession. Each person carries the healing focus personally and names the places where healing is needed. Wednesday morning gathers the team in one accord, asking God to make Servant Church a safe, prayerful, discerning place where people can encounter His care.",
      prayerTargets: [
        "Tuesday: Pray for physical healing among members, families, and those connected to the church.",
        "Tuesday: Pray for emotional healing from grief, disappointment, trauma, anxiety, and hidden wounds.",
        "Tuesday: Pray for healing in marriages, families, friendships, and strained church relationships.",
        "Wednesday: Pray for discernment and compassion among leaders as they care for wounded people.",
        "Wednesday: Pray that Servant Church becomes a house where people can be restored without shame.",
        "Wednesday: Pray for testimonies of healing to be stewarded humbly and wisely.",
      ],
      localTargets: [
        "Pray by name for people in the Servant Church family who need healing.",
        "Pray for a culture of care, confidentiality, and spiritual maturity.",
      ],
      morningPrayer:
        "Father, we lift every need for healing before You. Touch bodies, restore minds, mend relationships, and meet people in places no one else can see. Give us compassion without presumption, faith without pressure, and patience without passivity. Let healing begin where pain has been carried quietly. In Jesus' name, amen.",
      middayPrayer:
        "Return to the healing focus. Name specific people, families, relationships, or areas of emotional pain. Ask God to reveal practical steps of care, wise follow-up, and gentle pastoral support.",
      eveningPrayer:
        "Lord, as we gather, unite our hearts around Your compassion. Teach us to pray with faith and tenderness. Make Servant Church a healing community where burdens are carried, wounds are not exploited, and Your presence restores what has been broken. In Jesus' name, amen.",
      reflectionQuestions: [
        "Where is healing most needed in this season: bodies, families, emotions, relationships, or church culture?",
        "How can the team pray boldly while still honoring privacy, wisdom, and pastoral care?",
        "What kind of environment helps wounded people feel safe enough to receive prayer?",
      ],
      journalingPrompt:
        "Lord, show us where healing is needed and how to carry those needs with faith, tenderness, and wisdom.",
      remembrancePrompt:
        "Record any sign of healing, renewed peace, restored conversation, or answered prayer that should be remembered.",
    }),
    intercessoryPacket({
      week: 2,
      status: "upcoming",
      theme: "Increased Territory",
      focusLabel: "Increased Territory",
      focusDate: "Tuesday, July 7 and Wednesday, July 8, 2026",
      primaryScripture:
        "Tuesday Anchor - 1 Chronicles 4:10 - Jabez cried out for God to bless him and enlarge his territory.",
      supporting: [
        "Tuesday Supporting Passage - Psalm 90:17 - May the favor of the Lord establish the work of our hands.",
        "Wednesday Anchor - Isaiah 54:2-3 - Enlarge the place of your tent; stretch your tent curtains wide.",
        "Wednesday Supporting Passage - Deuteronomy 1:8 - God instructed His people to go in and possess what He had set before them.",
      ],
      devotionalFocus:
        "Increased territory is not ambition dressed in spiritual language. For Servant Church, the prayer for territory is a prayer for faithful capacity: space to serve, room to gather, stability for ministry, and a permanent building that supports the assignment. We are asking God to enlarge what can be entrusted, not simply what can be possessed.\n\nTuesday focuses on surrendering motives and praying for provision. Wednesday focuses on unity, wisdom, favor, and readiness. If God opens a door, the church must be spiritually prepared to steward it with humility, excellence, and mission.",
      prayerTargets: [
        "Tuesday: Pray for a permanent building that fits the assignment, budget, location, and long-term mission.",
        "Tuesday: Pray for provision without pressure, manipulation, fear, or striving.",
        "Tuesday: Pray for clear motives, wise stewardship, and readiness to carry increase.",
        "Wednesday: Pray for favor with property owners, lenders, city leaders, neighbors, and partners.",
        "Wednesday: Pray for unity among leaders and members as decisions are made.",
        "Wednesday: Pray that increased territory leads to increased service, discipleship, prayer, and outreach.",
      ],
      localTargets: [
        "Pray over the permanent-building search and every practical step connected to it.",
        "Pray that expansion never outruns spiritual health.",
      ],
      morningPrayer:
        "Father, enlarge our capacity only according to Your will. Provide the right place, at the right time, with the right terms, for the right purpose. Keep our hearts pure and our decisions wise. Establish the work of our hands for Your glory and for the people You have called us to serve. In Jesus' name, amen.",
      middayPrayer:
        "Pray specifically for the building need. Name practical details: location, affordability, favor, timing, parking, accessibility, community impact, and long-term stewardship.",
      eveningPrayer:
        "Lord, make us ready for whatever You entrust to us. If You enlarge our territory, enlarge our prayer, love, discipline, generosity, and mission. Give leaders unity and courage. Guard us from confusion and open the doors that align with Your purpose. In Jesus' name, amen.",
      reflectionQuestions: [
        "What would increased territory require from the church spiritually and practically?",
        "How can we pray for a permanent building without making the building the mission?",
        "What must be strengthened now so expansion can be stewarded well later?",
      ],
      journalingPrompt:
        "Lord, prepare us to receive and steward the territory You assign, without pride, fear, or distraction.",
      remembrancePrompt:
        "Record any provision, contact, open door, confirmation, or clarity related to territory and building needs.",
    }),
    intercessoryPacket({
      week: 3,
      status: "upcoming",
      theme: "Laborers",
      focusLabel: "Laborers",
      focusDate: "Tuesday, July 14 and Wednesday, July 15, 2026",
      primaryScripture:
        "Tuesday Anchor - Matthew 9:37-38 - The harvest is plentiful but the workers are few; ask the Lord of the harvest to send laborers.",
      supporting: [
        "Tuesday Supporting Passage - Romans 12:4-8 - The body has different gifts, and each gift has a purpose.",
        "Wednesday Anchor - Exodus 36:1-2 - God stirred skilled and willing workers to carry out the work.",
        "Wednesday Supporting Passage - 2 Timothy 2:2 - Entrust the work to reliable people who will also be qualified to teach others.",
      ],
      devotionalFocus:
        "Every God-given vision requires God-sent people. Passion matters, but vision cannot be sustained by passion alone. The church needs willing hearts, faithful hands, mature character, spiritual discernment, and people aligned with the assignment. Jesus did not merely tell the disciples to notice the harvest. He told them to pray for laborers.\n\nTuesday asks each intercessor to pray for the right people. Wednesday asks the team to pray for alignment: leaders, servants, administrators, intercessors, teachers, outreach workers, and those who may already be near the vision but have not yet recognized their role.",
      prayerTargets: [
        "Tuesday: Pray for laborers with the right spirit, character, and commitment.",
        "Tuesday: Pray for faithful people who are available, teachable, dependable, and spiritually mature.",
        "Tuesday: Pray for leaders, intercessors, administrators, teachers, care workers, and outreach servants.",
        "Wednesday: Pray for discernment to recognize those truly assigned to the vision.",
        "Wednesday: Pray for protection from wrong partnerships and misaligned connections.",
        "Wednesday: Pray for current workers to be strengthened, encouraged, and not burned out.",
      ],
      localTargets: [
        "Pray for every ministry area that needs faithful help.",
        "Pray that the right people come with humility, joy, consistency, and alignment.",
      ],
      morningPrayer:
        "Father, send laborers into the harvest. Raise up people who are willing, faithful, teachable, and ready. Connect Servant Church with the right people, guard us from wrong alignments, and give us discernment to recognize those You are sending. In Jesus' name, amen.",
      middayPrayer:
        "Pray specifically for the areas where help is most needed. Ask God to awaken people who may already be connected to the vision but have not yet recognized their role.",
      eveningPrayer:
        "Lord of the harvest, strengthen the workers already serving and send the laborers still needed. Let the work be carried by grace, wisdom, maturity, and shared burden. Build a team that reflects Your heart. In Jesus' name, amen.",
      reflectionQuestions: [
        "What kind of people does this vision require in this season?",
        "Are we merely praying for available help, or are we praying for aligned help?",
        "What qualities must be present in the people who help carry the assignment?",
      ],
      journalingPrompt:
        "Lord, show us the kind of people we should be praying for and preparing to receive.",
      remembrancePrompt:
        "Record any new connection, volunteer response, leadership clarity, or encouragement for current laborers.",
    }),
    intercessoryPacket({
      week: 4,
      status: "upcoming",
      theme: "Salvation",
      focusLabel: "Salvation",
      focusDate: "Tuesday, July 21 and Wednesday, July 22, 2026",
      primaryScripture:
        "Tuesday Anchor - Luke 19:10 - The Son of Man came to seek and to save the lost.",
      supporting: [
        "Tuesday Supporting Passage - 2 Peter 3:9 - The Lord is patient, not wanting anyone to perish but everyone to come to repentance.",
        "Wednesday Anchor - Romans 10:13-15 - Everyone who calls on the name of the Lord will be saved, and messengers must be sent.",
        "Wednesday Supporting Passage - Acts 2:41-47 - The early church saw people added as the gospel was received and community was formed.",
      ],
      devotionalFocus:
        "Salvation must remain more than a ministry category. It is the heartbeat of the church's assignment. Servant Church is praying not only to grow in number, but to become a place where people are genuinely led to Christ, discipled with care, and welcomed into a community shaped by grace and truth.\n\nTuesday focuses on people who need to know Christ. Wednesday focuses on the church's witness: clarity, compassion, courage, invitation, follow-up, and discipleship. We are asking God to make soul-winning foundational, not occasional.",
      prayerTargets: [
        "Tuesday: Pray by name for family members, friends, neighbors, coworkers, and community members who need salvation.",
        "Tuesday: Pray for hearts to be softened, spiritual blindness to lift, and the gospel to be heard clearly.",
        "Tuesday: Pray for divine appointments and courageous, loving conversations.",
        "Wednesday: Pray that Servant Church becomes a soul-winning and disciple-making church.",
        "Wednesday: Pray for altar ministry, follow-up, new-believer care, baptism, and discipleship pathways.",
        "Wednesday: Pray that salvation remains foundational to the church's identity and future.",
      ],
      localTargets: [
        "Pray for the names of people connected to the church who need Christ.",
        "Pray for outreach, invitation, follow-up, and a culture of witness.",
      ],
      morningPrayer:
        "Father, we ask You to save. Draw people to Christ, soften hearts, open eyes, and send faithful witnesses. Give us courage to speak with love and humility. Let salvation be more than something we celebrate occasionally; let it be central to who we are. In Jesus' name, amen.",
      middayPrayer:
        "Name specific people before the Lord. Pray for opportunities to invite, encourage, explain the gospel, and walk patiently with those who are searching.",
      eveningPrayer:
        "Lord, make Servant Church fruitful in the work of salvation and discipleship. Let people encounter Jesus, receive the gospel, and find a church family that helps them grow. Establish soul-winning as a foundation, not a side project. In Jesus' name, amen.",
      reflectionQuestions: [
        "Who are the specific people we are asking God to draw to Christ?",
        "What would need to be strengthened for Servant Church to care well for new believers?",
        "How can the church make salvation and discipleship foundational in practice?",
      ],
      journalingPrompt:
        "Lord, place specific people on our hearts and teach us how to pray, witness, invite, and disciple with love.",
      remembrancePrompt:
        "Record any salvation, renewed spiritual interest, invitation, gospel conversation, or discipleship opportunity.",
    }),
    intercessoryPacket({
      week: 5,
      status: "upcoming",
      theme: "Established for the Harvest",
      focusLabel: "Established for the Harvest",
      focusDate: "Tuesday, July 28 and Wednesday, July 29, 2026",
      primaryScripture:
        "Tuesday Anchor - Colossians 4:2-4 - Devote yourselves to prayer, being watchful and thankful, and pray that God may open a door for the message.",
      supporting: [
        "Tuesday Supporting Passage - Galatians 6:9 - Do not grow weary in doing good, for a harvest comes in due season.",
        "Wednesday Anchor - John 15:16 - Jesus appointed His disciples to go and bear fruit that remains.",
        "Wednesday Supporting Passage - 1 Corinthians 3:6-7 - One plants and another waters, but God gives the increase.",
      ],
      devotionalFocus:
        "The final week gathers the whole 30-day burden into one question: how do we continue faithfully after the pilot? Healing, territory, laborers, and salvation are not separate concerns. They belong together in a church that wants to be healthy enough to receive people, spacious enough to serve them, staffed enough to disciple them, and gospel-centered enough to keep Christ at the foundation.\n\nTuesday is a day of thanksgiving, listening, and naming what God has highlighted. Wednesday closes the pilot by asking God to establish a sustainable intercessory rhythm that strengthens Servant Church beyond this first 30 days.",
      prayerTargets: [
        "Tuesday: Give thanks for what God revealed, healed, clarified, or stirred during the 30-day rhythm.",
        "Tuesday: Pray for endurance so the team does not lose the burden after the pilot ends.",
        "Tuesday: Pray for clear next steps that are simple, sustainable, and spiritually healthy.",
        "Wednesday: Pray for a lasting intercessory culture at Servant Church.",
        "Wednesday: Pray that healing, territory, laborers, and salvation remain connected to the church's mission.",
        "Wednesday: Pray for wisdom as leaders decide what should continue, pause, adjust, or expand.",
      ],
      localTargets: [
        "Pray for the Servant Intercessory Team to finish the pilot with clarity and unity.",
        "Pray for the next faithful rhythm after these 30 days.",
      ],
      morningPrayer:
        "Father, thank You for carrying us through this prayer rhythm. Help us recognize what You have emphasized and respond with obedience. Establish the work that should continue and release us from anything that would become performance or pressure. In Jesus' name, amen.",
      middayPrayer:
        "Review the four main burdens: healing, increased territory, laborers, and salvation. Ask God which burden needs continued focus and what next step should be taken.",
      eveningPrayer:
        "Lord, establish us for the harvest. Let this not end as an event remembered only by dates. Let it become a seed for sustained intercession, wise leadership, faithful service, and people coming to Christ. In Jesus' name, amen.",
      reflectionQuestions: [
        "What has God emphasized most clearly during these 30 days?",
        "What rhythm would be sustainable for the team after the pilot?",
        "What should leaders celebrate, adjust, protect, or develop next?",
      ],
      journalingPrompt:
        "Lord, show us how to steward what You have begun in this team.",
      remembrancePrompt:
        "Record key testimonies, insights, answered prayers, and next-step confirmations from the 30-day pilot.",
    }),
  ],
  prayerRequests: [],
  testimonies: [],
  report: {
    gatheringsHeld: 0,
    manualAttendanceAdjustment: 0,
    reconciliations: 0,
    breakthroughs: 0,
    leaderNotes:
      "Small-group reporting should help leaders notice health, clarity, and care needs without turning prayer into performance.",
  },
});

let state = loadState();
let toastTimer = null;

function supabaseReady() {
  return Boolean(supabaseClient);
}

function approvedLeaderForEmail(email) {
  return state.leaders.find((leader) => leader.email.toLowerCase() === String(email).toLowerCase());
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy.toISOString().slice(0, 10);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatDateLabel(dateValue) {
  if (!dateValue) return "";
  return new Date(`${dateValue}T00:00:00`).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function prayerDayIndex() {
  return prayerDayIndexes()[0] || 3;
}

function prayerDayIndexes() {
  const dayText = String(state.schedule?.[0]?.date || "Wednesday").toLowerCase();
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const indexes = days
    .map((day, index) => (dayText.includes(day) ? index : null))
    .filter((index) => index !== null);
  return indexes.length ? indexes : [3];
}

function nextPrayerDayInfo() {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysUntil = Math.min(
    ...prayerDayIndexes().map((targetDay) => (targetDay - now.getDay() + 7) % 7)
  );
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntil);
  const label = nextDate.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return {
    date: nextDate,
    dateKey: nextDate.toISOString().slice(0, 10),
    daysUntil,
    label,
    isToday: daysUntil === 0,
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeState(structuredClone(seedState));

  try {
    return normalizeState({ ...structuredClone(seedState), ...JSON.parse(saved) });
  } catch {
    return normalizeState(structuredClone(seedState));
  }
}

function normalizeState(appState) {
  appState.rotation = {
    ...structuredClone(seedState.rotation),
    ...(appState.rotation || {}),
  };
  appState.fastingSeason = normalizeFastingSeason(appState.fastingSeason);

  const libraryWeekCount = appState.libraryWeekCount || 52;
  const existingByWeek = new Map((appState.packets || []).map((packet) => [packet.week, packet]));
  for (let week = 1; week <= libraryWeekCount; week += 1) {
    if (!existingByWeek.has(week)) {
      appState.packets.push(createCorePacket(week));
    }
  }

  appState.packets = appState.packets.map(enrichPacket).sort((a, b) => a.week - b.week);
  migrateIntercessoryTeamDefaults(appState);
  if (!appState.editingPacketId || !appState.packets.some((packet) => packet.id === appState.editingPacketId)) {
    appState.editingPacketId = activePacketFrom(appState).id;
  }

  return appState;
}

function migrateIntercessoryTeamDefaults(appState) {
  if (appState.accessCode !== "INTERCESSORS-PRAY") return;

  const rhythm = appState.schedule?.[0];
  const gathering = appState.schedule?.[1];

  if (rhythm?.time?.includes("8:00 AM")) {
    rhythm.time =
      "Tuesday individual prayer and devotion all day; Wednesday corporate prayer at 7:15 AM, with individual midday and evening return.";
  }

  if (gathering?.time === "8:00 AM - 8:40 AM") {
    gathering.time = "7:15 AM - 7:45 AM";
  }

  if (appState.zoom?.details === "Wednesday at 8:00 AM") {
    appState.zoom.details = "Wednesday at 7:15 AM";
  }

  (appState.packets || []).forEach((packet) => {
    if (packet.eveningPrayerTitle === "Wednesday Corporate Prayer | 8:00 AM") {
      packet.eveningPrayerTitle = "Wednesday Corporate Prayer | 7:15 AM";
    }
    if (packet.rhythm?.includes("Wednesday begins with corporate prayer at 8:00 AM")) {
      packet.rhythm =
        "Tuesday is individual prayer and devotion throughout the day. Wednesday begins with corporate prayer at 7:15 AM, followed by individual midday and evening return.";
    }
    applyBalancedIntercessoryScriptures(packet);
  });
}

function applyBalancedIntercessoryScriptures(packet) {
  const balancedScriptures = {
    1: [
      "Tuesday Anchor - Jeremiah 17:14 - Heal me, Lord, and I will be healed; save me and I will be saved, for You are the one I praise.",
      "Tuesday Supporting Passage - Psalm 147:3 - He heals the brokenhearted and binds up their wounds.",
      "Wednesday Anchor - James 5:14-16 - The prayer offered in faith will make the sick person well, and the prayer of a righteous person is powerful and effective.",
      "Wednesday Supporting Passage - Mark 5:34 - Jesus told the woman that her faith had made her whole and to go in peace.",
    ],
    2: [
      "Tuesday Anchor - 1 Chronicles 4:10 - Jabez cried out for God to bless him and enlarge his territory.",
      "Tuesday Supporting Passage - Psalm 90:17 - May the favor of the Lord establish the work of our hands.",
      "Wednesday Anchor - Isaiah 54:2-3 - Enlarge the place of your tent; stretch your tent curtains wide.",
      "Wednesday Supporting Passage - Deuteronomy 1:8 - God instructed His people to go in and possess what He had set before them.",
    ],
    3: [
      "Tuesday Anchor - Matthew 9:37-38 - The harvest is plentiful but the workers are few; ask the Lord of the harvest to send laborers.",
      "Tuesday Supporting Passage - Romans 12:4-8 - The body has different gifts, and each gift has a purpose.",
      "Wednesday Anchor - Exodus 36:1-2 - God stirred skilled and willing workers to carry out the work.",
      "Wednesday Supporting Passage - 2 Timothy 2:2 - Entrust the work to reliable people who will also be qualified to teach others.",
    ],
    4: [
      "Tuesday Anchor - Luke 19:10 - The Son of Man came to seek and to save the lost.",
      "Tuesday Supporting Passage - 2 Peter 3:9 - The Lord is patient, not wanting anyone to perish but everyone to come to repentance.",
      "Wednesday Anchor - Romans 10:13-15 - Everyone who calls on the name of the Lord will be saved, and messengers must be sent.",
      "Wednesday Supporting Passage - Acts 2:41-47 - The early church saw people added as the gospel was received and community was formed.",
    ],
    5: [
      "Tuesday Anchor - Colossians 4:2-4 - Devote yourselves to prayer, being watchful and thankful, and pray that God may open a door for the message.",
      "Tuesday Supporting Passage - Galatians 6:9 - Do not grow weary in doing good, for a harvest comes in due season.",
      "Wednesday Anchor - John 15:16 - Jesus appointed His disciples to go and bear fruit that remains.",
      "Wednesday Supporting Passage - 1 Corinthians 3:6-7 - One plants and another waters, but God gives the increase.",
    ],
  };
  const scriptures = balancedScriptures[packet.week];
  if (!scriptures) return;

  packet.primaryScripture = scriptures[0];
  packet.supporting = scriptures.slice(1);
  packet.anchorScriptures = scriptures;
}

function normalizeFastingSeason(season = {}) {
  const normalized = {
    ...structuredClone(seedState.fastingSeason),
    ...season,
  };
  normalized.duration = Math.min(30, Math.max(1, Number(normalized.duration || 3)));
  normalized.milestoneLabel = normalized.milestoneLabel || "Worship Night";
  normalized.milestoneDate = normalized.milestoneDate || normalized.worshipNightDate || "";
  if (normalized.startDate) {
    normalized.endDate = addDays(`${normalized.startDate}T00:00:00`, normalized.duration - 1);
  }
  return normalized;
}

function enrichPacket(packet) {
  let enriched = applyCorePacketContent(packet);

  enriched.focusDate = enriched.focusDate || `Week ${enriched.week}`;
  enriched.focusLabel = enriched.focusLabel || enriched.theme;
  enriched.anchorScriptures =
    enriched.anchorScriptures ||
    [enriched.primaryScripture, ...(enriched.supporting || [])].filter(Boolean);
  enriched.devotionalFocus = enriched.devotionalFocus || (enriched.devotional || []).join("\n\n");
  enriched.prayerTargets = enriched.prayerTargets || enriched.coreTargets || [];
  enriched.morningPrayerTitle = enriched.morningPrayerTitle || "Morning Prayer | Personal Prayer Window";
  enriched.morningPrayer =
    enriched.morningPrayer ||
    `Father, align our hearts with Your purpose for ${enriched.focusLabel.toLowerCase()}. Give us humility, clarity, and faith as we pray together.`;
  enriched.middayPrayerTitle = enriched.middayPrayerTitle || "Midday Prayer | Flexible Check-In";
  enriched.middayPrayer =
    enriched.middayPrayer ||
    "Return briefly to the shared focus. Name the burden before God and ask Him to keep the church unified in prayer throughout the day.";
  enriched.eveningPrayerTitle = enriched.eveningPrayerTitle || "Evening Prayer | Flexible Window";
  enriched.eveningPrayer =
    enriched.eveningPrayer ||
    "Father, seal the work of prayer in us. Strengthen our unity, deepen our faith, and help us remember what You are doing among Your people.";
  enriched.dailyTemplateVersion = enriched.dailyTemplateVersion || 1;

  return enriched;
}

function applyCorePacketContent(packet) {
  if (packet.groupSpecific) return { ...packet };

  const core = corePacketLibrary.find((item) => item.week === packet.week);
  if (!core) return { ...packet };

  return {
    ...packet,
    theme: core.title,
    focusLabel: core.focusLabel,
    primaryScripture: core.primaryScripture,
    supporting: core.supporting,
    devotional: core.devotionalFocus.split("\n\n"),
    anchorScriptures: [core.primaryScripture, ...core.supporting],
    devotionalFocus: core.devotionalFocus,
    prayerTargets: core.prayerTargets,
    coreTargets: core.prayerTargets,
    morningPrayerTitle: packet.morningPrayerTitle || "Morning Prayer | Personal Prayer Window",
    morningPrayer: core.morningPrayer,
    middayPrayerTitle: packet.middayPrayerTitle || "Midday Prayer | Flexible Check-In",
    middayPrayer: core.middayPrayer,
    eveningPrayerTitle: packet.eveningPrayerTitle || "Corporate Prayer Focus",
    eveningPrayer: core.eveningPrayer,
    reflectionQuestions: core.reflectionQuestions,
    journalingPrompt: core.journalingPrompt,
    dailyTemplateVersion: 2,
  };
}

function createCorePacket(week) {
  const theme = coreLibraryThemes[week - 1] || `Core Prayer Week ${week}`;
  return {
    id: `packet-${week}`,
    week,
    status: week === 1 ? "active" : "upcoming",
    theme,
    primaryScripture: "Anchor Scripture to be finalized.",
    supporting: ["Supporting passage to be finalized."],
    devotional: [
      "This core Anchor Packet is reserved in the 52-week One Accord CPM library.",
      "Leaders may use this placeholder while the full packet is being authored and approved.",
    ],
    rhythm: "Prepare in the morning. Return at midday. Gather in the evening. Remember what God does.",
    coreTargets: [
      "Pray for the weekly theme with biblical focus.",
      "Pray for unity, humility, and shared spiritual burden.",
      "Pray for Servant Church and future partner churches.",
      "Pray for specific local needs added by leaders.",
    ],
    localTargets: ["Add up to three local church prayer targets."],
    reflectionQuestions: [`How should I pray into ${theme.toLowerCase()} this week?`],
    journalingPrompt: "Write one focused prayer for this week's shared burden.",
    remembrancePrompt: "Share an answered prayer or testimony connected to this week's focus.",
  };
}

function activePacketFrom(appState) {
  return appState.packets.find((packet) => packet.status === "active") || appState.packets[0];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function participantKey() {
  let key = localStorage.getItem(PRAYER_PARTICIPANT_KEY);
  if (!key) {
    key = `participant-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(PRAYER_PARTICIPANT_KEY, key);
  }
  return key;
}

function todayPrayerParticipation() {
  const date = todayKey();
  const key = participantKey();
  return state.prayerParticipations.some(
    (item) => item.date === date && item.participantKey === key
  );
}

async function loadPrayerParticipationCount(date = todayKey()) {
  const localCount = state.prayerParticipations.filter((item) => item.date === date).length;
  state.prayerParticipationCount = localCount;

  if (!supabaseReady()) return localCount;

  const { data, error } = await supabaseClient.rpc("get_prayer_participation_count", {
    p_church_access_code: state.accessCode,
    p_prayer_date: date,
  });

  if (error) {
    console.warn("Prayer participation count unavailable:", error);
    return localCount;
  }

  state.prayerParticipationCount = Number(data || 0);
  saveState();
  return state.prayerParticipationCount;
}

async function insertRemoteRecord(table, payload) {
  if (!supabaseReady()) return false;

  const { error } = await supabaseClient.from(table).insert({
    church_access_code: state.accessCode,
    payload,
  });

  if (error) {
    console.error(`Supabase insert failed for ${table}:`, error);
    showToast("Saved on this device. Supabase needs the setup SQL before cross-device sync works.");
    return false;
  }

  return true;
}

async function loadRemoteSettings() {
  if (!supabaseReady()) return false;

  const { data, error } = await supabaseClient
    .from("pilot_app_settings")
    .select("payload")
    .eq("church_access_code", state.accessCode)
    .maybeSingle();

  if (error) {
    console.error("Supabase settings read failed:", error);
    return false;
  }

  if (data?.payload) {
    applySettingsPayload(data.payload);
    saveState();
    return true;
  }

  return false;
}

async function saveRemoteSettings() {
  if (!supabaseReady() || !state.adminSession) return false;

  const { error } = await supabaseClient.from("pilot_app_settings").upsert(
    {
      church_access_code: state.accessCode,
      payload: settingsPayload(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "church_access_code" }
  );

  if (error) {
    console.error("Supabase settings save failed:", error);
    showToast("Saved on this device, but Supabase settings did not update. Run setup v3 SQL.");
    return false;
  }

  return true;
}

async function updateRemotePayload(table, payload) {
  if (!supabaseReady() || !state.adminSession || !payload?.id) return false;

  const { error } = await supabaseClient
    .from(table)
    .update({ payload })
    .eq("church_access_code", state.accessCode)
    .filter("payload->>id", "eq", payload.id);

  if (error) {
    console.error(`Supabase update failed for ${table}:`, error);
    showToast("Saved on this device, but the shared review queue did not update.");
    return false;
  }

  return true;
}

async function loadRemoteAdminData() {
  if (!supabaseReady() || !state.adminSession) return;

  const tables = [
    ["participant_check_ins", "participantRecords"],
    ["prayer_requests", "prayerRequests"],
    ["testimonies", "testimonies"],
  ];

  for (const [table, stateKey] of tables) {
    const { data, error } = await supabaseClient
      .from(table)
      .select("payload, created_at")
      .eq("church_access_code", state.accessCode)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(`Supabase read failed for ${table}:`, error);
      continue;
    }

    if (Array.isArray(data)) {
      const payloads = data.map((row) => row.payload);
      if (stateKey === "participantRecords") {
        state.checkIns = payloads.filter(
          (item) => !item.type || item.type === "corporate_prayer_check_in" || item.type === "corporate-prayer"
        );
        state.prayerParticipations = payloads.filter((item) => item.type === "prayer_participation");
      } else {
        state[stateKey] = payloads;
      }
    }
  }

  saveState();
}

async function initializeApp() {
  await loadRemoteSettings();
  if (state.participantAccessGranted) {
    await loadPrayerParticipationCount();
  }

  if (supabaseReady()) {
    const { data } = await supabaseClient.auth.getSession();
    const email = data?.session?.user?.email;
    const leader = approvedLeaderForEmail(email);

    if (leader) {
      state.adminSession = leader;
      await loadRemoteAdminData();
    }
  }

  render();
}

function setView(view) {
  state.activeView = view;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setAdminTab(tab) {
  state.adminTab = tab;
  saveState();
  render();
}

function showToast(message) {
  clearTimeout(toastTimer);
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  toastTimer = setTimeout(() => toast.remove(), 3200);
}

function activePacket() {
  return state.packets.find((packet) => packet.status === "active") || state.packets[0];
}

function packetDateLabel(packet) {
  if (packet.groupSpecific && packet.focusDate) return packet.focusDate;

  if (state.rotation?.startDate && packet.week >= 1) {
    const start = new Date(`${state.rotation.startDate}T00:00:00`);
    const entryWeek = Number(state.rotation.entryWeek || 1);
    const offsetWeeks = packet.week - entryWeek;
    start.setDate(start.getDate() + offsetWeeks * 7);
    return start.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return packet.focusDate || `Week ${packet.week}`;
}

function gatheringTimeLabel() {
  const gathering = state.schedule.find((item) => item.id === "sched-2") || state.schedule[1];
  return gathering?.time || state.zoom.details || "Evening gathering time";
}

function corporatePrayerTimeParts() {
  const timeText = gatheringTimeLabel();
  const match = String(timeText).match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
  if (!match) return { hour: 7, minute: 15 };

  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const meridiem = match[3].toUpperCase();
  if (meridiem === "PM" && hour < 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return { hour, minute };
}

function nextCorporatePrayerDate() {
  const { hour, minute } = corporatePrayerTimeParts();
  const nextDate = new Date();
  nextDate.setHours(hour, minute, 0, 0);
  const wednesday = 3;
  let daysUntil = (wednesday - nextDate.getDay() + 7) % 7;
  if (daysUntil === 0 && nextDate <= new Date()) daysUntil = 7;
  nextDate.setDate(nextDate.getDate() + daysUntil);
  return nextDate;
}

function calendarDate(value) {
  return value
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function escapeCalendarText(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function downloadCorporatePrayerReminder() {
  const start = nextCorporatePrayerDate();
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 30);
  const description = [
    "Servant Intercessory Team corporate prayer.",
    state.zoom.url ? `Join: ${state.zoom.url}` : "",
    "This reminder is saved only to your own calendar.",
  ]
    .filter(Boolean)
    .join("\n");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//One Accord CPM//Servant Intercessory Team//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:one-accord-intercessory-team-${state.accessCode}@oneaccordcpm`,
    `DTSTAMP:${calendarDate(new Date())}`,
    `DTSTART:${calendarDate(start)}`,
    `DTEND:${calendarDate(end)}`,
    "RRULE:FREQ=WEEKLY;BYDAY=WE",
    "SUMMARY:One Accord Corporate Prayer",
    `DESCRIPTION:${escapeCalendarText(description)}`,
    `LOCATION:${escapeCalendarText(state.zoom.url || "One Accord CPM hub")}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:One Accord corporate prayer begins soon.",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "one-accord-corporate-prayer-reminder.ics";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Calendar reminder downloaded. Open it to add the weekly alert.");
}

function editablePacket() {
  return state.packets.find((packet) => packet.id === state.editingPacketId) || activePacket();
}

function upcomingPackets(limit = 3) {
  const activeWeek = activePacket().week;
  return state.packets
    .filter((packet) => packet.status === "upcoming" && packet.week > activeWeek)
    .sort((a, b) => a.week - b.week)
    .slice(0, limit);
}

function fastingDayIndex() {
  const season = state.fastingSeason;
  if (!season?.startDate) return 0;
  const start = new Date(`${season.startDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const elapsedDays = Math.floor((today.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
  return Math.min(Math.max(elapsedDays, 0), Math.max(Number(season.duration || 1) - 1, 0));
}

function activeFastingDay() {
  return fastingLibrary[fastingDayIndex()] || fastingLibrary[0];
}

function fastingDayDateLabel(day) {
  const season = state.fastingSeason;
  if (!season?.startDate) return `Day ${day.day}`;
  return new Date(`${addDays(`${season.startDate}T00:00:00`, day.day - 1)}T00:00:00`).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function fastingSeasonStatus() {
  const season = state.fastingSeason;
  if (!season?.enabled) return "Inactive";
  const start = new Date(`${season.startDate}T00:00:00`);
  const end = new Date(`${season.endDate || season.startDate}T23:59:59`);
  const today = new Date();
  if (today < start) return "Preparing";
  if (today > end) return "Completed";
  return "Active";
}

function fastingReflectionKey() {
  const day = activeFastingDay();
  return `oneAccordFastingReflection.${state.fastingSeason?.startDate || "pilot"}.day${day.day}`;
}

function saveFastingReflection() {
  const input = document.querySelector("#fasting-reflection");
  if (!input) return;
  localStorage.setItem(fastingReflectionKey(), input.value);
  showToast("Private fasting reflection saved on this device.");
}

function settingsPayload() {
  return {
    packets: state.packets,
    rotation: state.rotation,
    fastingSeason: state.fastingSeason,
    schedule: state.schedule,
    zoom: state.zoom,
    report: state.report,
  };
}

function applySettingsPayload(payload) {
  if (!payload || typeof payload !== "object") return;
  if (Array.isArray(payload.packets)) state.packets = payload.packets;
  if (payload.rotation) state.rotation = { ...state.rotation, ...payload.rotation };
  if (payload.fastingSeason) state.fastingSeason = normalizeFastingSeason(payload.fastingSeason);
  if (Array.isArray(payload.schedule)) state.schedule = payload.schedule;
  if (payload.zoom) state.zoom = payload.zoom;
  if (payload.report) state.report = payload.report;
  normalizeState(state);
  applyRotationIfNeeded();
}

function applyRotationIfNeeded() {
  if (state.rotation?.mode === "start-date" && state.rotation.startDate) {
    activateWeek(calculateRotationWeek());
  }
}

function isPrayerDay() {
  return prayerDayIndexes().includes(new Date().getDay());
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function navButton(id, label) {
  return `<button class="${state.activeView === id ? "active" : ""}" onclick="setView('${id}')">${label}</button>`;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="shell">
      ${renderTopbar()}
      ${state.participantAccessGranted ? renderNav() : ""}
      <main class="viewport">${state.participantAccessGranted ? renderView() : renderAccessGate()}</main>
    </div>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <img src="assets/one-accord-cpm-logo.png" alt="One Accord CPM logo">
          <span>
            <span class="brand-title">One Accord CPM</span>
            <span class="brand-subtitle">Corporate Prayer Model</span>
          </span>
        </div>
        <div class="top-actions">
          ${
            state.participantAccessGranted
              ? `<button class="ghost-button" onclick="setView('admin')">Leader</button>`
              : ""
          }
        </div>
      </div>
    </header>
  `;
}

function renderNav() {
  return `
    <nav class="nav" aria-label="Primary">
      ${navButton("home", "Home")}
      ${navButton("packet", "This Week")}
      ${navButton("fasting", "Fast")}
      ${navButton("request", "Request")}
      ${navButton("testimony", "Testimony")}
      ${navButton("schedule", "Schedule")}
      ${navButton("archive", "Archive")}
    </nav>
  `;
}

function renderAccessGate() {
  return `
    <section class="hero">
      <div>
        <p class="eyebrow">Servant Intercessory Team 30-Day Pilot</p>
        <h1>Changing church culture through unified, specific, and sustained corporate prayer.</h1>
        <p>Enter the shared team access code to open the pilot hub.</p>
        <form class="form" onsubmit="handleAccess(event)" style="margin-top:18px;max-width:480px">
          <div class="field">
            <label for="access-code">Team access code</label>
            <input id="access-code" autocomplete="off" value="INTERCESSORS-PRAY">
          </div>
          <button class="button gold" type="submit">Enter Pilot Hub</button>
        </form>
      </div>
      <img class="hero-logo" src="assets/one-accord-cpm-logo.png" alt="">
    </section>
  `;
}

async function handleAccess(event) {
  event.preventDefault();
  const code = document.querySelector("#access-code").value.trim().toUpperCase();
  if (code !== state.accessCode) {
    showToast("Please check the shared Servant Intercessory Team access code.");
    return;
  }

  state.participantAccessGranted = true;
  state.activeView = "home";
  await loadRemoteSettings();
  await loadPrayerParticipationCount();
  saveState();
  render();
  showToast("Welcome to the Servant Intercessory Team pilot hub.");
}

function renderView() {
  switch (state.activeView) {
    case "packet":
      return renderPacket(activePacket());
    case "fasting":
      return renderFastingSeason();
    case "request":
      return renderPrayerRequest();
    case "testimony":
      return renderTestimony();
    case "schedule":
      return renderSchedule();
    case "archive":
      return renderArchive();
    case "admin":
      return renderAdmin();
    default:
      return renderHome();
  }
}

function renderHome() {
  const packet = activePacket();
  const prayerDay = isPrayerDay();
  const checkedIn = todayCheckIn();
  const prayingToday = todayPrayerParticipation();
  const prayerDayInfo = nextPrayerDayInfo();
  const prayerCount = Number(state.prayerParticipationCount || 0);
  const nextPackets = upcomingPackets(3);
  const eveningTime = gatheringTimeLabel();
  const fastDateRange = `${formatDateLabel(state.fastingSeason.startDate)}-${formatDateLabel(state.fastingSeason.endDate)}`;
  const milestoneLabel = state.fastingSeason.milestoneLabel || "Milestone";

  return `
    <section class="hero">
      <div>
        <p class="eyebrow">${prayerDay ? "Today is Prayer Day" : "Next Prayer Day"}</p>
        <h1>${escapeHtml(packet.focusLabel || packet.theme)}</h1>
        <p>${escapeHtml(packet.primaryScripture)}</p>
        <div class="prayer-countdown">
          <strong>${prayerDayInfo.isToday ? "Today" : `${prayerDayInfo.daysUntil} ${prayerDayInfo.daysUntil === 1 ? "day" : "days"} away`}</strong>
          <span>${escapeHtml(prayerDayInfo.label)}</span>
        </div>
        <div class="participation-panel">
          <div>
            <strong>${prayerCount}</strong>
            <span>${prayerCount === 1 ? "person is" : "people are"} praying with you today.</span>
          </div>
          <button class="button gold" onclick="handlePrayerParticipation()">${prayingToday ? "Prayer Counted Today" : "I Am Praying Today"}</button>
        </div>
        <div class="actions-grid">
          <button class="button gold" onclick="setView('packet')">View This Week's Anchor Packet</button>
          <a class="button teal" href="${escapeHtml(state.zoom.url)}" target="_blank" rel="noreferrer">${escapeHtml(state.zoom.label)}</a>
          <button class="button gold" onclick="downloadCorporatePrayerReminder()">Add Corporate Prayer Reminder</button>
          <button class="ghost-button" onclick="handleCheckIn()">${checkedIn ? "Corporate Check-In Recorded" : "Corporate Prayer Check-In"}</button>
        </div>
      </div>
      <img class="hero-logo" src="assets/one-accord-cpm-logo.png" alt="">
    </section>

    <section class="section card impact-card">
      <p class="eyebrow">Why This Matters</p>
      <h2>A shared rhythm can shape a praying culture.</h2>
      <p class="muted">One Accord CPM helps the church pray from the same Scripture, carry the same burdens, and remember answered prayer together. The goal is not pressure or performance. The goal is a simple rhythm that helps prayer become part of the life of the church.</p>
      <ul class="list compact-list">
        <li><strong>Unified:</strong> We pray with one heart around shared focus and Scripture.</li>
        <li><strong>Specific:</strong> We name real needs, local burdens, and clear prayer targets.</li>
        <li><strong>Sustained:</strong> We return to prayer weekly so it becomes culture, not only an event.</li>
      </ul>
    </section>

    <section class="section card">
      <div class="section-title">
        <div>
          <p class="eyebrow">Share This Week</p>
          <h2>Invite others into the prayer focus.</h2>
        </div>
        <button class="button" onclick="downloadWeeklyGraphic()">Download Graphic</button>
      </div>
      <div class="share-card" id="weekly-share-card">
        <div>
          <p class="eyebrow">This Week's Prayer Focus</p>
          <h3>${escapeHtml(packet.focusLabel || packet.theme)}</h3>
          <p>${escapeHtml(packet.primaryScripture)}</p>
          <span>${escapeHtml(prayerDayInfo.label)} - ${escapeHtml(eveningTime)}</span>
        </div>
        <img src="assets/one-accord-cpm-logo.png" alt="One Accord CPM logo">
      </div>
      <p class="muted small">Use this graphic to share the weekly focus with your church family, small group, or ministry team.</p>
    </section>

    <section class="section grid three">
      <article class="card">
        <h3>Submit a Prayer Request</h3>
        <p class="muted">Requests enter a review queue before any wider sharing.</p>
        <button class="button" onclick="setView('request')">Submit Request</button>
      </article>
      <article class="card">
        <h3>Share an Answered Prayer</h3>
        <p class="muted">Testimonies remain private until reviewed by approved leaders.</p>
        <button class="button" onclick="setView('testimony')">Share Testimony</button>
      </article>
      <article class="card">
        <h3>View Prayer Schedule</h3>
        <p class="muted">See the weekly rhythm and gathering details.</p>
        <button class="button" onclick="setView('schedule')">Open Schedule</button>
      </article>
    </section>

    ${
      state.fastingSeason.enabled
        ? `
          <section class="section card fasting-preview">
            <div class="section-title">
              <div>
                <p class="eyebrow">Fasting Season Pilot</p>
                <h2>${escapeHtml(state.fastingSeason.theme)}</h2>
              </div>
              <span class="pill gold">${escapeHtml(fastingSeasonStatus())}</span>
            </div>
            <p class="muted">${escapeHtml(state.fastingSeason.leaderNote)}</p>
            <div class="meta-row">
              <span class="pill">Fast: ${escapeHtml(fastDateRange)}</span>
              <span class="pill teal">${escapeHtml(milestoneLabel)}: ${escapeHtml(formatDateLabel(state.fastingSeason.milestoneDate))}</span>
              <span class="pill gold">Birthday: ${escapeHtml(formatDateLabel(state.fastingSeason.celebrationDate))}</span>
            </div>
            <button class="button" onclick="setView('fasting')" style="margin-top:12px">Open Fasting Guide</button>
          </section>
        `
        : ""
    }

    <section class="section grid two">
      <article class="card">
        <p class="eyebrow">Weekly Rhythm</p>
        <h2>Prepare. Return. Gather. Remember.</h2>
        <ul class="list">
          <li><strong>Morning:</strong> Flexible personal prayer with this week's Anchor Packet. No check-in required.</li>
          <li><strong>Midday:</strong> Flexible personal return to the same burden. No check-in required.</li>
          <li><strong>Evening:</strong> Corporate prayer gathering at ${escapeHtml(eveningTime)}.</li>
          <li><strong>Remembrance:</strong> Reflect privately or share an answered prayer.</li>
        </ul>
      </article>
      <article class="card">
        <p class="eyebrow">Private Reflection</p>
        <h2>Your Reflection Box</h2>
        <p class="muted">This reflection stays on this device and is not visible to leaders.</p>
        ${renderReflectionBox()}
      </article>
    </section>
    ${
      nextPackets.length
        ? `
          <section class="section card">
            <div class="section-title">
              <div>
                <p class="eyebrow">Coming Up</p>
                <h2>Next Three Prayer Weeks</h2>
              </div>
              <button class="text-button" onclick="setView('archive')">View all packets</button>
            </div>
            <div class="grid three">
              ${nextPackets
                .map(
                  (item) => `
                    <article class="card">
                      <span class="pill gold">Week ${item.week}</span>
                      <h3 style="margin-top:10px">${escapeHtml(item.theme)}</h3>
                      <p class="muted">${escapeHtml(item.primaryScripture)}</p>
                      <button class="ghost-button" onclick="showArchivePacket('${item.id}')">Preview Week ${item.week}</button>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `
        : ""
    }
  `;
}

function renderFastingSeason() {
  const season = state.fastingSeason;
  const day = activeFastingDay();
  const savedReflection = localStorage.getItem(fastingReflectionKey()) || "";
  const fastDateRange = `${formatDateLabel(season.startDate)}-${formatDateLabel(season.endDate)}`;
  const milestoneLabel = season.milestoneLabel || "Milestone";

  if (!season.enabled) {
    return `
      <section class="section card">
        <p class="eyebrow">Fasting Season</p>
        <h2>No fasting season is active.</h2>
        <p class="muted">When leaders activate a One Accord CPM fasting season, the daily guide will appear here.</p>
      </section>
    `;
  }

  return `
    <section class="hero fasting-hero">
      <div>
        <p class="eyebrow">${escapeHtml(season.name)} - ${escapeHtml(fastingSeasonStatus())}</p>
        <h1>${escapeHtml(season.theme)}</h1>
        <p>${escapeHtml(season.leaderNote)}</p>
        <div class="meta-row">
          <span class="pill gold">Fast: ${escapeHtml(fastDateRange)}</span>
          <span class="pill teal">${escapeHtml(milestoneLabel)}: ${escapeHtml(formatDateLabel(season.milestoneDate))}</span>
          <span class="pill">Birthday: ${escapeHtml(formatDateLabel(season.celebrationDate))}</span>
        </div>
      </div>
      <img class="hero-logo" src="assets/one-accord-cpm-logo.png" alt="">
    </section>

    <section class="section card">
      <div class="section-title">
        <div>
          <p class="eyebrow">Day ${day.day} - ${escapeHtml(fastingDayDateLabel(day))}</p>
          <h2>${escapeHtml(day.title)}</h2>
        </div>
        <span class="pill teal">${escapeHtml(day.focusLabel)}</span>
      </div>
      <p><strong>Anchor Scripture</strong><br>${escapeHtml(day.anchorScripture)}</p>
      <ul class="list">
        ${day.supporting.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>

    <section class="section grid two">
      <article class="card">
        <p class="eyebrow">Devotional Focus</p>
        ${day.devotionalFocus
          .split("\n\n")
          .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
          .join("")}
      </article>
      <article class="card">
        <p class="eyebrow">Fasting Expression</p>
        <h3>Choose a wise and meaningful fast.</h3>
        <p class="muted">One Accord CPM does not prescribe one fasting method for every person. The church shares the prayer focus; each participant chooses a safe and meaningful fasting expression.</p>
        <ul class="list compact-list">
          <li>Daniel Fast or another food-related fast, if appropriate and safe</li>
          <li>Meal-specific fast</li>
          <li>Media, entertainment, or social media fast</li>
          <li>Unnecessary spending or personal comfort fast</li>
          <li>A private fasting expression chosen with wisdom and prayer</li>
        </ul>
      </article>
    </section>

    <section class="section card">
      <p class="eyebrow">Prayer Targets</p>
      <ul class="check-list">
        ${day.prayerTargets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      ${season.localFocus ? `<div class="notice ok" style="margin-top:12px"><strong>Local focus:</strong> ${escapeHtml(season.localFocus)}</div>` : ""}
    </section>

    <section class="section grid three">
      <article class="card">
        <h3>Morning Prayer</h3>
        <p>${escapeHtml(day.morningPrayer)}</p>
      </article>
      <article class="card">
        <h3>Midday Return</h3>
        <p>${escapeHtml(day.middayPrayer)}</p>
      </article>
      <article class="card">
        <h3>Evening Prayer</h3>
        <p>${escapeHtml(day.eveningPrayer)}</p>
      </article>
    </section>

    <section class="section grid two">
      <article class="card">
        <p class="eyebrow">Reflection Questions</p>
        <ul class="list">
          ${day.reflectionQuestions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <p><strong>Journal Prompt</strong><br>${escapeHtml(day.journalingPrompt)}</p>
      </article>
      <article class="card">
        <p class="eyebrow">Private Fasting Reflection</p>
        <p class="muted">This reflection stays on this device. It is not sent to leaders and does not track your fasting expression.</p>
        <textarea id="fasting-reflection" class="reflection-box" oninput="saveFastingReflection()" placeholder="Write a private reflection for this fasting day.">${escapeHtml(savedReflection)}</textarea>
      </article>
    </section>

    <section class="section card">
      <div class="notice">
        <strong>Health and grace reminder:</strong> Fasting is voluntary and should be practiced with wisdom, grace, and appropriate medical consideration. If you are pregnant, have a medical condition, take medication, have a history of disordered eating, or have health concerns, please consult a medical professional and choose a safe form of participation. The purpose of fasting is not performance. It is consecration, focus, humility, and deeper dependence on God.
      </div>
    </section>
  `;
}

function todayCheckIn() {
  const today = todayKey();
  return state.checkIns.some((checkIn) => checkIn.date === today);
}

async function handlePrayerParticipation() {
  if (todayPrayerParticipation()) {
    showToast("Your prayer participation is already counted for today.");
    return;
  }

  const participation = {
    id: crypto.randomUUID(),
    type: "prayer_participation",
    date: todayKey(),
    participantKey: participantKey(),
    week: activePacket().week,
    focus: activePacket().focusLabel || activePacket().theme,
    createdAt: new Date().toISOString(),
  };

  state.prayerParticipations.push(participation);
  state.prayerParticipationCount = state.prayerParticipations.filter((item) => item.date === participation.date).length;
  await insertRemoteRecord("participant_check_ins", participation);
  await loadPrayerParticipationCount(participation.date);
  saveState();
  render();
  showToast("You are counted with the church in prayer today.");
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 5) {
  const words = String(text).split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1) break;
    } else {
      line = testLine;
    }
  }

  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
  return y + lines.length * lineHeight;
}

async function downloadWeeklyGraphic() {
  const packet = activePacket();
  const prayerDayInfo = nextPrayerDayInfo();
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#062352");
  gradient.addColorStop(0.7, "#1155cc");
  ctx.fillStyle = gradient;
  ctx.fillRect(44, 44, 992, 992);

  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 0.08;
  ctx.beginPath();
  ctx.arc(900, 180, 220, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#f2c94c";
  ctx.font = "bold 34px Calibri, Arial, sans-serif";
  ctx.fillText("ONE ACCORD CPM", 96, 130);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 74px Calibri, Arial, sans-serif";
  wrapCanvasText(ctx, packet.focusLabel || packet.theme, 96, 250, 760, 82, 3);

  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = "32px Calibri, Arial, sans-serif";
  wrapCanvasText(ctx, packet.primaryScripture, 96, 520, 820, 44, 4);

  ctx.fillStyle = "#eaf7f4";
  ctx.fillRect(96, 746, 620, 116);
  ctx.fillStyle = "#062352";
  ctx.font = "bold 30px Calibri, Arial, sans-serif";
  ctx.fillText("Prayer Day", 128, 796);
  ctx.font = "bold 38px Calibri, Arial, sans-serif";
  ctx.fillText(prayerDayInfo.label, 128, 841);

  ctx.fillStyle = "#fff7e6";
  ctx.fillRect(96, 890, 620, 96);
  ctx.fillStyle = "#062352";
  ctx.font = "bold 22px Calibri, Arial, sans-serif";
  ctx.fillText("Changing church culture through unified,", 128, 930);
  ctx.fillText("specific, and sustained corporate prayer.", 128, 960);

  const logo = new Image();
  logo.src = "assets/one-accord-cpm-logo.png";
  await new Promise((resolve) => {
    logo.onload = resolve;
    logo.onerror = resolve;
  });
  if (logo.complete && logo.naturalWidth) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(786, 746, 190, 240);
    ctx.drawImage(logo, 806, 790, 150, 150);
  }

  const link = document.createElement("a");
  link.download = `one-accord-prayer-focus-week-${packet.week}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Weekly prayer graphic downloaded.");
}

async function handleCheckIn() {
  if (todayCheckIn()) {
    showToast("You are already checked in for today's corporate prayer.");
    return;
  }

  const checkIn = {
    id: crypto.randomUUID(),
    date: todayKey(),
    type: "corporate_prayer_check_in",
    returning: state.checkIns.length > 0,
  };

  state.checkIns.push(checkIn);
  await insertRemoteRecord("participant_check_ins", checkIn);
  saveState();
  render();
  showToast(
    supabaseReady()
      ? "Check-in recorded for the pilot."
      : "Check-in recorded on this device. Supabase is not connected."
  );
}

function renderPacket(packet) {
  const tuesdayTargets = packet.prayerTargets.filter((target) => target.toLowerCase().startsWith("tuesday:"));
  const wednesdayTargets = packet.prayerTargets.filter((target) => target.toLowerCase().startsWith("wednesday:"));
  return `
    <section class="section card">
      <div class="meta-row">
        <span class="pill gold">Week ${packet.week}</span>
        <span class="pill teal">${packet.status === "active" ? "Active Anchor Packet" : "Packet Preview"}</span>
      </div>
      <h2 style="margin-top:12px">${escapeHtml(packetDateLabel(packet))} | Focus: ${escapeHtml(packet.focusLabel || packet.theme)}</h2>
      <p class="muted"><strong>Prayer rhythm:</strong> ${escapeHtml(packet.rhythm)}</p>
    </section>

    <section class="section grid two">
      <article class="card prayer-window">
        <p class="eyebrow">Day 1 - Tuesday</p>
        <h3>Individual Prayer and Devotion</h3>
        <p>Carry this week's focus personally throughout the day. Read the Tuesday anchor, pray the Tuesday targets, and use the private notes area to capture what God highlights.</p>
        ${tuesdayTargets.length ? `<ul class="list compact-list">${tuesdayTargets.map((target) => `<li>${escapeHtml(target.replace(/^Tuesday:\s*/i, ""))}</li>`).join("")}</ul>` : ""}
      </article>
      <article class="card prayer-window">
        <p class="eyebrow">Day 2 - Wednesday</p>
        <h3>Corporate Prayer at ${escapeHtml(gatheringTimeLabel())}</h3>
        <p>Gather with the team for corporate prayer, then return privately at midday and evening to keep the same weekly focus before the Lord.</p>
        ${wednesdayTargets.length ? `<ul class="list compact-list">${wednesdayTargets.map((target) => `<li>${escapeHtml(target.replace(/^Wednesday:\s*/i, ""))}</li>`).join("")}</ul>` : ""}
        <a class="button teal" href="${escapeHtml(state.zoom.url)}" target="_blank" rel="noreferrer">${escapeHtml(state.zoom.label)}</a>
        <button class="button gold" onclick="downloadCorporatePrayerReminder()">Add Corporate Prayer Reminder</button>
      </article>
    </section>

    <section class="section card">
      <p class="eyebrow">Anchor Scripture</p>
      <div class="scripture-stack">
        ${packet.anchorScriptures.map((scripture) => `<div class="packet-scripture">${escapeHtml(scripture)}</div>`).join("")}
      </div>
    </section>

    <section class="section card">
      <p class="eyebrow">Devotional Focus</p>
      <p class="devotional-copy">${escapeHtml(packet.devotionalFocus)}</p>
    </section>

    <section class="section grid two">
      <article class="card">
        <h3>Prayer Targets</h3>
        <ul class="list prayer-targets">${packet.prayerTargets.map((target) => `<li><span class="target-box" aria-hidden="true"></span>${escapeHtml(target)}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h3>Local Intercessory Team Targets</h3>
        <ul class="list prayer-targets">${packet.localTargets.map((target) => `<li><span class="target-box" aria-hidden="true"></span>${escapeHtml(target)}</li>`).join("")}</ul>
      </article>
    </section>

    <section class="section grid three">
      <article class="card prayer-window">
        <p class="eyebrow">Tuesday</p>
        <h3>${escapeHtml(packet.morningPrayerTitle)}</h3>
        <p>${escapeHtml(packet.morningPrayer)}</p>
      </article>
      <article class="card prayer-window">
        <p class="eyebrow">Wednesday Return</p>
        <h3>${escapeHtml(packet.middayPrayerTitle)}</h3>
        <p>${escapeHtml(packet.middayPrayer)}</p>
      </article>
      <article class="card prayer-window">
        <p class="eyebrow">Wednesday Corporate Prayer</p>
        <h3>${escapeHtml(packet.eveningPrayerTitle)}</h3>
        <p>${escapeHtml(packet.eveningPrayer)}</p>
        <a class="button teal" href="${escapeHtml(state.zoom.url)}" target="_blank" rel="noreferrer">${escapeHtml(state.zoom.label)}</a>
        <button class="button gold" onclick="downloadCorporatePrayerReminder()">Add Corporate Prayer Reminder</button>
      </article>
    </section>

    <section class="section grid two">
      <article class="card">
        <h3>Reflection Questions</h3>
        <ul class="list">${packet.reflectionQuestions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h3>Private Journaling Prompt</h3>
        <p>${escapeHtml(packet.journalingPrompt)}</p>
        ${renderReflectionBox()}
      </article>
    </section>

    <section class="section card">
      <h3>Private Prayer and Devotion Tracker</h3>
      <p class="muted">This tracker stays on this device only. It is not visible to leaders and does not create streaks, rankings, or spiritual scores.</p>
      ${renderDailyCheckIn(packet)}
    </section>

    <section class="section card">
      <h3>Gathering Details</h3>
      <p>${escapeHtml(state.zoom.details)}</p>
      <a class="button teal" href="${escapeHtml(state.zoom.url)}" target="_blank" rel="noreferrer">${escapeHtml(state.zoom.label)}</a>
      <button class="button gold" onclick="downloadCorporatePrayerReminder()">Add Corporate Prayer Reminder</button>
    </section>
  `;
}

function renderReflectionBox() {
  const reflection = localStorage.getItem(REFLECTION_KEY) || "";
  return `
    <form class="form" onsubmit="handleReflection(event)">
      <div class="field">
        <label for="reflection">Private reflection</label>
        <textarea id="reflection" placeholder="Write a private note for yourself.">${escapeHtml(reflection)}</textarea>
      </div>
      <div class="notice">
        This reflection is saved only in this browser on this device. It is not sent to leaders.
      </div>
      <button class="button" type="submit">Save Reflection on This Device</button>
    </form>
  `;
}

function handleReflection(event) {
  event.preventDefault();
  const value = event.currentTarget.querySelector("#reflection").value;
  localStorage.setItem(REFLECTION_KEY, value);
  showToast("Reflection saved on this device only.");
}

function dailyCheckKey(packet) {
  return `${DAILY_CHECKIN_PREFIX}${packet.id}`;
}

function dailyCheckState(packet) {
  try {
    return JSON.parse(localStorage.getItem(dailyCheckKey(packet))) || {};
  } catch {
    return {};
  }
}

function renderDailyCheckIn(packet) {
  const checks = dailyCheckState(packet);
  const items = [
    ["tuesdayDevotion", "Tuesday devotion read"],
    ["tuesdayPrayer", "Tuesday individual prayer completed"],
    ["wednesdayCorporate", "Wednesday corporate prayer joined"],
    ["wednesdayReturn", "Wednesday midday/evening prayer return completed"],
  ];

  return `
    <div class="daily-checks">
      ${items
        .map(
          ([key, label]) => `
            <label class="check-row">
              <input type="checkbox" ${checks[key] ? "checked" : ""} onchange="toggleDailyCheck('${packet.id}', '${key}', this.checked)">
              <span>${label}</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function toggleDailyCheck(packetId, key, checked) {
  const packet = state.packets.find((item) => item.id === packetId);
  if (!packet) return;
  const checks = dailyCheckState(packet);
  checks[key] = checked;
  localStorage.setItem(dailyCheckKey(packet), JSON.stringify(checks));
  showToast("Daily check-in saved on this device only.");
}

function renderPrayerRequest() {
  return `
    <section class="section card">
      <p class="eyebrow">Prayer Support</p>
      <h2>Submit a Prayer Request</h2>
      <p class="muted">Anonymous requests are allowed. Wider sharing never happens automatically.</p>
      <div class="notice danger"><strong>Emergency notice:</strong> ${emergencyNotice}</div>
    </section>

    <section class="section card">
      <form class="form" onsubmit="handlePrayerRequest(event)">
        <div class="grid two">
          <div class="field">
            <label for="request-name">Name, optional</label>
            <input id="request-name" autocomplete="name">
          </div>
          <div class="field">
            <label for="request-contact">Contact information, optional</label>
            <input id="request-contact" autocomplete="email">
          </div>
        </div>
        <div class="field">
          <label for="request-subject">Is this request for you or someone else?</label>
          <select id="request-subject" onchange="handleRequestSubjectChange()">
            <option value="self">For me</option>
            <option value="other">For someone else</option>
          </select>
        </div>
        <section class="specificity-box">
          <p class="eyebrow">Help Us Pray Specifically</p>
          <p class="muted">These prompts are optional, but they help leaders carry the request with clarity and care.</p>
          <div class="grid two">
            <div class="field">
              <label for="request-who">Who are we praying for?</label>
              <input id="request-who" placeholder="Example: my family, a friend, our youth, a ministry team">
            </div>
            <div class="field">
              <label for="request-area">What area does this concern?</label>
              <select id="request-area">
                <option value="">Choose one, optional</option>
                <option>Healing or health</option>
                <option>Family or relationships</option>
                <option>Grief or comfort</option>
                <option>Provision or employment</option>
                <option>Wisdom or direction</option>
                <option>Salvation or spiritual renewal</option>
                <option>Protection or safety</option>
                <option>Church or ministry</option>
                <option>Community or outreach</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label for="request-breakthrough">What breakthrough, help, wisdom, healing, or provision is needed?</label>
            <input id="request-breakthrough" placeholder="Name the need as clearly as you feel comfortable.">
          </div>
          <div class="grid two">
            <div class="field">
              <label for="request-timing">Is there a timing concern?</label>
              <input id="request-timing" placeholder="Example: this week, before surgery, by Friday, ongoing">
            </div>
            <div class="field">
              <label for="request-prayer-focus">How should leaders pray?</label>
              <input id="request-prayer-focus" placeholder="Example: peace, wisdom, strength, protection, provision">
            </div>
          </div>
        </section>
        <div class="field">
          <label for="request-text">Prayer request details</label>
          <textarea id="request-text" required placeholder="Share any details that would help leaders pray with care."></textarea>
        </div>
        <fieldset class="field">
          <legend>Who may see this request?</legend>
          ${["Leadership only", "Approved prayer team only", "May be shared with the wider One Accord CPM community"]
            .map(
              (option, index) => `
                <label class="radio-row">
                  <input type="radio" name="privacy" value="${option}" ${index === 0 ? "checked" : ""}>
                  <span>${option}</span>
                </label>
              `
            )
            .join("")}
        </fieldset>
        <label class="check-row">
          <input id="request-contact-permission" type="checkbox">
          <span>Leadership may contact me about this request.</span>
        </label>
        <label class="check-row">
          <input id="request-urgent" type="checkbox">
          <span>This request feels urgent or sensitive and may need pastoral attention.</span>
        </label>
        <button class="button" type="submit">Submit for Review</button>
      </form>
    </section>
  `;
}

function handleRequestSubjectChange() {
  const subject = document.querySelector("#request-subject").value;
  if (subject === "other") {
    document.querySelector('input[name="privacy"][value="Leadership only"]').checked = true;
    showToast("Requests for another person default to limited visibility.");
  }
}

async function handlePrayerRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const urgent = form.querySelector("#request-urgent").checked;
  const request = {
    id: crypto.randomUUID(),
    name: form.querySelector("#request-name").value.trim() || "Anonymous",
    contact: form.querySelector("#request-contact").value.trim(),
    subject: form.querySelector("#request-subject").value,
    specificity: {
      who: form.querySelector("#request-who").value.trim(),
      area: form.querySelector("#request-area").value,
      breakthrough: form.querySelector("#request-breakthrough").value.trim(),
      timing: form.querySelector("#request-timing").value.trim(),
      prayerFocus: form.querySelector("#request-prayer-focus").value.trim(),
    },
    text: form.querySelector("#request-text").value.trim(),
    privacy: form.querySelector('input[name="privacy"]:checked').value,
    contactPermission: form.querySelector("#request-contact-permission").checked,
    urgent,
    status: urgent ? "Leadership Follow-Up Needed" : "New",
    pastoralFlag: urgent,
    reviewDate: addDays(new Date(), 30),
    createdAt: new Date().toISOString(),
  };

  state.prayerRequests.unshift(request);
  await insertRemoteRecord("prayer_requests", request);
  saveState();
  form.reset();
  showToast("Prayer request submitted to the private review queue.");
}

function renderTestimony() {
  return `
    <section class="section card">
      <p class="eyebrow">Book of Remembrance</p>
      <h2>Share an Answered Prayer or Testimony</h2>
      <p class="muted">Every testimony enters a private review queue before being shared.</p>
    </section>

    <section class="section card">
      <form class="form" onsubmit="handleTestimony(event)">
        <div class="grid two">
          <div class="field">
            <label for="testimony-name">Name, optional</label>
            <input id="testimony-name" autocomplete="name">
          </div>
          <div class="field">
            <label for="related-request">Related prayer request, optional</label>
            <input id="related-request">
          </div>
        </div>
        <div class="field">
          <label for="testimony-text">Testimony or answered prayer</label>
          <textarea id="testimony-text" required></textarea>
        </div>
        <label class="check-row">
          <input id="testimony-contact" type="checkbox">
          <span>Leadership may contact me about this testimony.</span>
        </label>
        <label class="check-row">
          <input id="testimony-share" type="checkbox">
          <span>This may be shared with the One Accord CPM community after review.</span>
        </label>
        <label class="check-row">
          <input id="testimony-name-use" type="checkbox">
          <span>My name may be used if this is shared.</span>
        </label>
        <button class="button" type="submit">Submit Testimony for Review</button>
      </form>
    </section>
  `;
}

async function handleTestimony(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const testimony = {
    id: crypto.randomUUID(),
    name: form.querySelector("#testimony-name").value.trim() || "Anonymous",
    text: form.querySelector("#testimony-text").value.trim(),
    relatedRequest: form.querySelector("#related-request").value.trim(),
    contactPermission: form.querySelector("#testimony-contact").checked,
    sharePermission: form.querySelector("#testimony-share").checked,
    namePermission: form.querySelector("#testimony-name-use").checked,
    status: "New",
    visibility: "Private review",
    createdAt: new Date().toISOString(),
  };

  state.testimonies.unshift(testimony);
  await insertRemoteRecord("testimonies", testimony);
  saveState();
  form.reset();
  showToast("Testimony submitted to the private review queue.");
}

function renderSchedule() {
  return `
    <section class="section card">
      <p class="eyebrow">Prayer Schedule</p>
      <h2>Servant Intercessory Team Rhythm</h2>
      <p class="muted">A 30-day pilot rhythm with Tuesday individual prayer and Wednesday 7:15 AM corporate prayer, followed by individual midday and evening return.</p>
    </section>
    <section class="section grid two">
      ${state.schedule
        .map(
          (item) => `
            <article class="card">
              <span class="pill teal">${escapeHtml(item.date)}</span>
              <h3 style="margin-top:10px">${escapeHtml(item.title)}</h3>
              <p><strong>${escapeHtml(item.time)}</strong></p>
              <p class="muted">${escapeHtml(item.location)}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderArchive() {
  const archived = state.packets.filter((packet) => packet.status === "archived");
  const upcoming = upcomingPackets(3);
  return `
    <section class="section card">
      <p class="eyebrow">Anchor Packets</p>
      <h2>Previous and Upcoming Weeks</h2>
      <p class="muted">The current week stays central, while participants may preview up to three upcoming prayer weeks.</p>
    </section>
    <section class="section card">
      <h3>Upcoming Preview</h3>
      <div class="grid three">
        ${
          upcoming.length
            ? upcoming
                .map(
                  (packet) => `
                    <article class="card">
                      <span class="pill gold">Week ${packet.week}</span>
                      <h3 style="margin-top:10px">${escapeHtml(packet.theme)}</h3>
                      <p class="muted">${escapeHtml(packet.primaryScripture)}</p>
                      <button class="ghost-button" onclick="showArchivePacket('${packet.id}')">Preview Packet</button>
                    </article>
                  `
                )
                .join("")
            : `<div class="empty">Upcoming packets will appear here when leaders add them.</div>`
        }
      </div>
    </section>
    <section class="section grid two">
      <div class="section-title" style="grid-column:1/-1">
        <h3>Previous Packets</h3>
      </div>
      ${
        archived.length
          ? archived
              .map(
                (packet) => `
                  <article class="card">
                    <span class="pill">Week ${packet.week}</span>
                    <h3 style="margin-top:10px">${escapeHtml(packet.theme)}</h3>
                    <p class="muted">${escapeHtml(packet.primaryScripture)}</p>
                    <button class="ghost-button" onclick="showArchivePacket('${packet.id}')">Preview Packet</button>
                  </article>
                `
              )
              .join("")
          : `<div class="empty">Previous packets will appear here after the pilot begins.</div>`
      }
    </section>
  `;
}

function showArchivePacket(id) {
  const packet = state.packets.find((item) => item.id === id);
  if (!packet) return;
  document.querySelector(".viewport").innerHTML = renderPacket(packet);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAdmin() {
  if (!state.adminSession) return renderAdminLogin();

  return `
    <section class="section card">
      <p class="eyebrow">Leader Admin</p>
      <h2>Servant Intercessory Team Controls</h2>
      <p class="muted">Signed in as ${escapeHtml(state.adminSession.name)}. Role-based controls are modeled for the pilot.</p>
      <button class="ghost-button" onclick="logoutAdmin()">Sign Out</button>
    </section>
    <section class="section admin-layout">
      <aside class="card">
        <div class="tabs" style="display:grid">
          ${["overview", "packets", "fasting", "requests", "testimonies", "schedule", "report", "resources", "leaders"]
            .map((tab) => `<button class="tab ${state.adminTab === tab ? "active" : ""}" onclick="setAdminTab('${tab}')">${label(tab)}</button>`)
            .join("")}
        </div>
      </aside>
      <div>${renderAdminTab()}</div>
    </section>
  `;
}

function label(tab) {
  return {
    overview: "Overview",
    packets: "Packets",
    fasting: "Fasting",
    requests: "Requests",
    testimonies: "Testimonies",
    schedule: "Schedule",
    report: "Monthly Report",
    resources: "Resources",
    leaders: "Leaders",
  }[tab];
}

function renderAdminLogin() {
  return `
    <section class="section card">
      <p class="eyebrow">Leader Login</p>
      <h2>Passwordless Pilot Login</h2>
      <p class="muted">Approved pilot leaders may sign in here. On the hosted site, this sends a Supabase magic link to the approved email address.</p>
      <form class="form" onsubmit="loginAdmin(event)">
        <div class="field">
          <label for="leader-email">Leader email</label>
          <input id="leader-email" type="email" value="selwyn_davis@yahoo.com" autocomplete="email">
        </div>
        <div class="notice">If you are previewing with a local file URL, the app signs in locally for testing. On the hosted Vercel site, it sends a real email magic link.</div>
        <button class="button" type="submit">Send Magic Link / Preview Login</button>
      </form>
    </section>
  `;
}

async function loginAdmin(event) {
  event.preventDefault();
  const email = document.querySelector("#leader-email").value.trim();
  const leader = approvedLeaderForEmail(email);

  if (!leader) {
    showToast("That email is not approved for leader access yet.");
    return;
  }

  if (supabaseReady() && window.location.protocol.startsWith("http")) {
    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.href.split("#")[0],
      },
    });

    if (error) {
      console.error("Magic link error:", error);
      showToast("Magic link could not be sent. Check Supabase Auth settings.");
      return;
    }

    showToast("Magic link sent. Check your email to sign in.");
    return;
  }

  state.adminSession = leader;
  state.adminTab = "overview";
  await loadRemoteAdminData();
  saveState();
  render();
  showToast(`Preview signed in as ${leader.name}.`);
}

async function logoutAdmin() {
  if (supabaseReady()) {
    await supabaseClient.auth.signOut();
  }

  state.adminSession = null;
  saveState();
  render();
}

function renderAdminTab() {
  switch (state.adminTab) {
    case "packets":
      return renderAdminPackets();
    case "fasting":
      return renderAdminFasting();
    case "requests":
      return renderAdminRequests();
    case "testimonies":
      return renderAdminTestimonies();
    case "schedule":
      return renderAdminSchedule();
    case "report":
      return renderAdminReport();
    case "resources":
      return renderAdminResources();
    case "leaders":
      return renderAdminLeaders();
    default:
      return renderAdminOverview();
  }
}

function renderAdminResources() {
  return `
    <section class="card">
      <h3>Launch Resources</h3>
      <p class="muted">Downloadable leader and partner-church materials for introducing, guiding, and sustaining the One Accord CPM rhythm.</p>
      <div class="resource-grid">
        <article class="resource-card">
          <p class="eyebrow">Leader Resource</p>
          <h4>One Accord CPM Launch Workbook</h4>
          <p class="muted">Use this internally with pastors, facilitators, prayer reviewers, and launch leaders. Includes pulpit language, first-gathering outline, weekly leader rhythm, health review questions, and confidentiality commitments.</p>
          <a class="button" href="assets/one-accord-cpm-launch-workbook.docx" download>Download Workbook</a>
        </article>
        <article class="resource-card">
          <p class="eyebrow">Public Guide</p>
          <h4>Building a Churchwide Prayer Culture</h4>
          <p class="muted">A more outward-facing ebook-style guide explaining why corporate prayer matters, why now, how One Accord CPM works, and how a church can begin simply.</p>
          <a class="button" href="assets/building-a-churchwide-prayer-culture-one-accord-cpm-guide.docx" download>Download Guide</a>
        </article>
      </div>
      <div class="notice" style="margin-top:14px">Recommendation: keep the workbook leader-facing during the pilot. Use the public guide as a shareable introduction for future partner churches once you are ready.</div>
    </section>
  `;
}

function renderAdminOverview() {
  const pendingRequests = state.prayerRequests.filter((request) => request.status === "New").length;
  const pastoral = state.prayerRequests.filter((request) => request.pastoralFlag).length;
  const pendingTestimonies = state.testimonies.filter((testimony) => testimony.status === "New").length;

  return `
    <section class="card">
      <h3>Weekly Snapshot</h3>
      <div class="summary-grid">
        <div class="summary-stat"><strong>${state.checkIns.length}</strong><span>Check-ins</span></div>
        <div class="summary-stat"><strong>${pendingRequests}</strong><span>New requests</span></div>
        <div class="summary-stat"><strong>${pastoral}</strong><span>Pastoral flags</span></div>
        <div class="summary-stat"><strong>${pendingTestimonies}</strong><span>New testimonies</span></div>
        <div class="summary-stat"><strong>${state.packets.filter((packet) => packet.week >= 1).length}</strong><span>Library weeks</span></div>
      </div>
    </section>
  `;
}

function renderAdminPackets() {
  const packet = editablePacket();
  return `
    <section class="card" style="margin-bottom:14px">
      <h3>52-Week Rotation Settings</h3>
      <p class="muted">Use this to help partner churches enter the One Accord CPM rhythm by start date or entry week. Manual packet activation still works when pastoral circumstances require it.</p>
      <form class="form" onsubmit="updateRotation(event)">
        <div class="grid two">
          <div class="field">
            <label for="rotation-mode">Rotation mode</label>
            <select id="rotation-mode">
              <option value="manual" ${state.rotation.mode === "manual" ? "selected" : ""}>Manual activation</option>
              <option value="start-date" ${state.rotation.mode === "start-date" ? "selected" : ""}>Calculate from start date</option>
            </select>
          </div>
          <div class="field">
            <label for="rotation-start">Church start date</label>
            <input id="rotation-start" type="date" value="${escapeHtml(state.rotation.startDate)}">
          </div>
          <div class="field">
            <label for="rotation-entry-week">Entry week</label>
            <input id="rotation-entry-week" type="number" min="1" max="52" value="${escapeHtml(state.rotation.entryWeek)}">
          </div>
          <div class="field">
            <label>Library status</label>
            <div class="notice ok">52-week structure active. Weeks 1-4 have fuller pilot content; weeks 5-52 are reserved placeholders until authored.</div>
          </div>
        </div>
        <button class="button" type="submit">Save Rotation Settings</button>
      </form>
    </section>
    <section class="card">
      <h3>Prayer Week Library</h3>
      <form class="form" onsubmit="updatePacket(event)">
        <div class="grid two">
          <div class="field">
            <label for="packet-select">Packet to edit</label>
            <select id="packet-select" onchange="setEditingPacket(this.value)">
              ${state.packets
                .sort((a, b) => a.week - b.week)
                .map(
                  (item) => `
                    <option value="${item.id}" ${item.id === packet.id ? "selected" : ""}>
                      Week ${item.week} - ${escapeHtml(item.theme)}
                    </option>
                  `
                )
                .join("")}
            </select>
          </div>
          <div class="field">
            <label for="packet-status">Packet status</label>
            <select id="packet-status">
              ${["active", "upcoming", "archived"]
                .map((status) => `<option value="${status}" ${packet.status === status ? "selected" : ""}>${status}</option>`)
                .join("")}
            </select>
          </div>
        </div>
        <div class="field">
          <label for="packet-theme">Weekly theme</label>
          <input id="packet-theme" value="${escapeHtml(packet.theme)}">
        </div>
        <div class="grid two">
          <div class="field">
            <label for="packet-focus-date">Date label</label>
            <input id="packet-focus-date" value="${escapeHtml(packet.focusDate)}">
          </div>
          <div class="field">
            <label for="packet-focus-label">Focus label</label>
            <input id="packet-focus-label" value="${escapeHtml(packet.focusLabel || packet.theme)}">
          </div>
        </div>
        <div class="field">
          <label for="packet-scripture">Primary Anchor Scripture</label>
          <input id="packet-scripture" value="${escapeHtml(packet.primaryScripture)}">
        </div>
        <div class="field">
          <label for="anchor-scriptures">Anchor Scriptures, one per line</label>
          <textarea id="anchor-scriptures">${escapeHtml((packet.anchorScriptures || []).join("\n"))}</textarea>
        </div>
        <div class="field">
          <label for="devotional-focus">Devotional focus</label>
          <textarea id="devotional-focus">${escapeHtml(packet.devotionalFocus || "")}</textarea>
        </div>
        <div class="field">
          <label for="prayer-targets">Prayer targets, one per line</label>
          <textarea id="prayer-targets">${escapeHtml((packet.prayerTargets || []).join("\n"))}</textarea>
        </div>
        <div class="grid three">
          <div class="field">
            <label for="morning-prayer">Morning prayer</label>
            <textarea id="morning-prayer">${escapeHtml(packet.morningPrayer || "")}</textarea>
          </div>
          <div class="field">
            <label for="midday-prayer">Midday prayer</label>
            <textarea id="midday-prayer">${escapeHtml(packet.middayPrayer || "")}</textarea>
          </div>
          <div class="field">
            <label for="evening-prayer">Evening prayer</label>
            <textarea id="evening-prayer">${escapeHtml(packet.eveningPrayer || "")}</textarea>
          </div>
        </div>
        <div class="field">
          <label for="local-targets">Local prayer targets, one per line</label>
          <textarea id="local-targets">${escapeHtml(packet.localTargets.join("\n"))}</textarea>
        </div>
        <button class="button" type="submit">Save Packet Updates</button>
      </form>
    </section>
  `;
}

async function updateRotation(event) {
  event.preventDefault();
  state.rotation.mode = document.querySelector("#rotation-mode").value;
  state.rotation.startDate = document.querySelector("#rotation-start").value;
  state.rotation.entryWeek = Math.min(
    52,
    Math.max(1, Number(document.querySelector("#rotation-entry-week").value || 1))
  );

  if (state.rotation.mode === "start-date" && state.rotation.startDate) {
    activateWeek(calculateRotationWeek());
  }

  saveState();
  await saveRemoteSettings();
  render();
  showToast("Rotation settings saved.");
}

function calculateRotationWeek() {
  if (!state.rotation.startDate) return state.rotation.entryWeek || 1;

  const start = new Date(`${state.rotation.startDate}T00:00:00`);
  const now = new Date();
  const elapsedMs = now.setHours(0, 0, 0, 0) - start.getTime();
  const elapsedWeeks = Math.max(0, Math.floor(elapsedMs / (7 * 24 * 60 * 60 * 1000)));
  return ((state.rotation.entryWeek - 1 + elapsedWeeks) % 52) + 1;
}

function activateWeek(week) {
  state.packets.forEach((item) => {
    if (item.week === week) {
      item.status = "active";
    } else if (item.week < week) {
      item.status = "archived";
    } else {
      item.status = "upcoming";
    }
  });
  const active = state.packets.find((item) => item.week === week);
  if (active) state.editingPacketId = active.id;
}

function setEditingPacket(id) {
  state.editingPacketId = id;
  saveState();
  render();
}

async function updatePacket(event) {
  event.preventDefault();
  const packet = editablePacket();
  packet.theme = document.querySelector("#packet-theme").value.trim();
  packet.focusDate = document.querySelector("#packet-focus-date").value.trim();
  packet.focusLabel = document.querySelector("#packet-focus-label").value.trim();
  packet.primaryScripture = document.querySelector("#packet-scripture").value.trim();
  packet.anchorScriptures = document
    .querySelector("#anchor-scriptures")
    .value.split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  packet.devotionalFocus = document.querySelector("#devotional-focus").value.trim();
  packet.prayerTargets = document
    .querySelector("#prayer-targets")
    .value.split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
  packet.morningPrayer = document.querySelector("#morning-prayer").value.trim();
  packet.middayPrayer = document.querySelector("#midday-prayer").value.trim();
  packet.eveningPrayer = document.querySelector("#evening-prayer").value.trim();
  const nextStatus = document.querySelector("#packet-status").value;
  if (nextStatus === "active") {
    state.packets.forEach((item) => {
      if (item.id === packet.id) return;
      item.status = item.week < packet.week ? "archived" : "upcoming";
    });
  }
  packet.status = nextStatus;
  packet.localTargets = document
    .querySelector("#local-targets")
    .value.split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
  saveState();
  await saveRemoteSettings();
  render();
  showToast("Anchor Packet updates saved.");
}

function renderAdminFasting() {
  const season = state.fastingSeason;
  return `
    <section class="card" style="margin-bottom:14px">
      <h3>Fasting Season Pilot</h3>
      <p class="muted">Use this to test the Servant Church birthday fast inside the existing hub. The model keeps fasting voluntary, private, and focused on shared prayer rather than food-rule tracking.</p>
      <form class="form" onsubmit="updateFastingSeason(event)">
        <label class="check-row">
          <input id="fasting-enabled" type="checkbox" ${season.enabled ? "checked" : ""}>
          <span>Show fasting season to participants</span>
        </label>
        <div class="grid two">
          <div class="field">
            <label for="fasting-name">Fast name</label>
            <input id="fasting-name" value="${escapeHtml(season.name)}">
          </div>
          <div class="field">
            <label for="fasting-theme">Theme</label>
            <input id="fasting-theme" value="${escapeHtml(season.theme)}">
          </div>
          <div class="field">
            <label for="fasting-start">Start date</label>
            <input id="fasting-start" type="date" value="${escapeHtml(season.startDate)}">
          </div>
          <div class="field">
            <label for="fasting-duration">Duration</label>
            <select id="fasting-duration">
              <option value="3" ${season.duration === 3 ? "selected" : ""}>3 days</option>
              <option value="7" ${season.duration === 7 ? "selected" : ""}>7 days</option>
              <option value="30" ${season.duration === 30 ? "selected" : ""}>30 days</option>
            </select>
            <p class="muted small">Days 4-30 are scaffolded placeholders until final fasting content is authored.</p>
          </div>
          <div class="field">
            <label for="fasting-milestone-label">Milestone label</label>
            <input id="fasting-milestone-label" value="${escapeHtml(season.milestoneLabel || "Worship Night")}">
          </div>
          <div class="field">
            <label for="fasting-milestone-date">Milestone date</label>
            <input id="fasting-milestone-date" type="date" value="${escapeHtml(season.milestoneDate || "")}">
          </div>
          <div class="field">
            <label for="fasting-celebration">Celebration date</label>
            <input id="fasting-celebration" type="date" value="${escapeHtml(season.celebrationDate)}">
          </div>
        </div>
        <div class="field">
          <label for="fasting-local-focus">Local fasting focus</label>
          <textarea id="fasting-local-focus">${escapeHtml(season.localFocus)}</textarea>
        </div>
        <div class="field">
          <label for="fasting-leader-note">Participant fasting guidance</label>
          <textarea id="fasting-leader-note">${escapeHtml(season.leaderNote)}</textarea>
        </div>
        <button class="button" type="submit">Save Fasting Season</button>
      </form>
    </section>

    <section class="card">
      <h3>Fasting Content Preview</h3>
      <div class="admin-list">
        ${fastingLibrary
          .slice(0, season.duration)
          .map(
            (day) => `
              <article class="admin-item">
                <div class="meta-row">
                  <span class="pill gold">Day ${day.day}</span>
                  <span class="pill teal">${escapeHtml(fastingDayDateLabel(day))}</span>
                </div>
                <h4>${escapeHtml(day.title)}</h4>
                <p class="muted">${escapeHtml(day.focusLabel)}</p>
                <p>${escapeHtml(day.anchorScripture)}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="notice" style="margin-top:14px">Days 1-3 include the Servant Church birthday fast content. Days 4-30 are placeholders so the 7-day and 30-day structure can be tested before final content is supplied.</div>
    </section>
  `;
}

async function updateFastingSeason(event) {
  event.preventDefault();
  const startDate = document.querySelector("#fasting-start").value;
  const duration = Number(document.querySelector("#fasting-duration").value || 3);
  state.fastingSeason = normalizeFastingSeason({
    enabled: document.querySelector("#fasting-enabled").checked,
    name: document.querySelector("#fasting-name").value.trim(),
    theme: document.querySelector("#fasting-theme").value.trim(),
    startDate,
    duration,
    milestoneLabel: document.querySelector("#fasting-milestone-label").value.trim(),
    milestoneDate: document.querySelector("#fasting-milestone-date").value,
    celebrationDate: document.querySelector("#fasting-celebration").value,
    localFocus: document.querySelector("#fasting-local-focus").value.trim(),
    leaderNote: document.querySelector("#fasting-leader-note").value.trim(),
  });
  saveState();
  await saveRemoteSettings();
  render();
  showToast("Fasting season settings saved.");
}

function renderAdminRequests() {
  return `
    <section class="card">
      <h3>Prayer Request Review Queue</h3>
      <div class="admin-list">
        ${state.prayerRequests.map(renderRequestItem).join("")}
      </div>
    </section>
  `;
}

function renderRequestItem(request) {
  const specifics = request.specificity || {};
  const specificRows = [
    ["Who", specifics.who],
    ["Area", specifics.area],
    ["Breakthrough needed", specifics.breakthrough],
    ["Timing", specifics.timing],
    ["Prayer focus", specifics.prayerFocus],
  ].filter(([, value]) => value);

  return `
    <article class="admin-item">
      <div class="meta-row">
        <span class="pill ${request.pastoralFlag ? "red" : "teal"}">${request.pastoralFlag ? "Pastoral flag" : escapeHtml(request.status)}</span>
        <span class="pill">${escapeHtml(request.privacy)}</span>
        <span class="pill gold">Review ${escapeHtml(request.reviewDate)}</span>
      </div>
      <p><strong>${escapeHtml(request.name)}</strong>${request.contact ? ` - ${escapeHtml(request.contact)}` : ""}</p>
      ${
        specificRows.length
          ? `
            <div class="specifics-summary">
              <p class="eyebrow">Prayer Specifics</p>
              ${specificRows
                .map(
                  ([labelText, value]) => `
                    <div>
                      <strong>${escapeHtml(labelText)}:</strong>
                      <span>${escapeHtml(value)}</span>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      <p>${escapeHtml(request.text)}</p>
      <div class="admin-controls">
        ${["Approved for Prayer Team", "Approved for Wider Sharing", "Leadership Follow-Up Needed", "Answered", "Closed"]
          .map((status) => `<button class="ghost-button" onclick="updateRequestStatus('${request.id}', '${status}')">${status}</button>`)
          .join("")}
      </div>
    </article>
  `;
}

async function updateRequestStatus(id, status) {
  const request = state.prayerRequests.find((item) => item.id === id);
  request.status = status;
  if (status === "Leadership Follow-Up Needed") request.pastoralFlag = true;
  saveState();
  await updateRemotePayload("prayer_requests", request);
  render();
  showToast("Prayer request status updated.");
}

function renderAdminTestimonies() {
  return `
    <section class="card">
      <h3>Testimony Review Queue</h3>
      <div class="admin-list">
        ${state.testimonies.map(renderTestimonyItem).join("")}
      </div>
    </section>
  `;
}

function renderTestimonyItem(testimony) {
  return `
    <article class="admin-item">
      <div class="meta-row">
        <span class="pill teal">${escapeHtml(testimony.status)}</span>
        <span class="pill">${escapeHtml(testimony.visibility)}</span>
        ${testimony.sharePermission ? `<span class="pill gold">Sharing permitted</span>` : `<span class="pill">Private unless clarified</span>`}
      </div>
      <p><strong>${escapeHtml(testimony.name)}</strong></p>
      <p>${escapeHtml(testimony.text)}</p>
      <div class="admin-controls">
        <button class="ghost-button" onclick="updateTestimony('${testimony.id}', 'Private', 'Kept private')">Keep Private</button>
        <button class="ghost-button" onclick="updateTestimony('${testimony.id}', 'Approved', 'Share anonymously')">Share Anonymously</button>
        <button class="ghost-button" onclick="updateTestimony('${testimony.id}', 'Approved', 'Share with name')">Share With Name</button>
        <button class="ghost-button" onclick="updateTestimony('${testimony.id}', 'Featured', 'Feature during remembrance')">Feature</button>
        <button class="ghost-button" onclick="updateTestimony('${testimony.id}', 'Clarification Needed', 'Request clarification')">Request Clarification</button>
      </div>
    </article>
  `;
}

async function updateTestimony(id, status, visibility) {
  const testimony = state.testimonies.find((item) => item.id === id);
  testimony.status = status;
  testimony.visibility = visibility;
  saveState();
  await updateRemotePayload("testimonies", testimony);
  render();
  showToast("Testimony review updated.");
}

function renderAdminSchedule() {
  const prayerDay = state.schedule[0] || { title: "Designated Prayer Day", date: "", time: "", location: "" };
  const gathering = state.schedule[1] || { title: "Corporate Prayer Gathering", date: "", time: "", location: "" };
  return `
    <section class="card">
      <h3>Prayer Day and Gathering Details</h3>
      <form class="form" onsubmit="updateGathering(event)">
        <div class="grid two">
          <div class="field">
            <label for="schedule-day">Designated prayer day</label>
            <input id="schedule-day" value="${escapeHtml(prayerDay.date)}">
          </div>
          <div class="field">
            <label for="schedule-rhythm-time">Prayer rhythm time summary</label>
            <input id="schedule-rhythm-time" value="${escapeHtml(prayerDay.time)}">
          </div>
          <div class="field">
            <label for="gathering-day">Corporate gathering day</label>
            <input id="gathering-day" value="${escapeHtml(gathering.date)}">
          </div>
          <div class="field">
            <label for="gathering-time">Corporate gathering time</label>
            <input id="gathering-time" value="${escapeHtml(gathering.time)}">
          </div>
          <div class="field">
            <label for="gathering-location">Gathering location label</label>
            <input id="gathering-location" value="${escapeHtml(gathering.location)}">
          </div>
        </div>
        <div class="field">
          <label for="zoom-url">Zoom link</label>
          <input id="zoom-url" value="${escapeHtml(state.zoom.url)}">
        </div>
        <div class="field">
          <label for="zoom-details">Gathering details</label>
          <input id="zoom-details" value="${escapeHtml(state.zoom.details)}">
        </div>
        <button class="button" type="submit">Save Gathering Details</button>
      </form>
    </section>
  `;
}

async function updateGathering(event) {
  event.preventDefault();
  state.schedule[0] = {
    ...(state.schedule[0] || {}),
    id: "sched-1",
    title: "Designated Prayer Day",
    date: document.querySelector("#schedule-day").value.trim(),
    time: document.querySelector("#schedule-rhythm-time").value.trim(),
    location: "Personal prayer and corporate gathering",
  };
  state.schedule[1] = {
    ...(state.schedule[1] || {}),
    id: "sched-2",
    title: "Corporate Prayer Gathering",
    date: document.querySelector("#gathering-day").value.trim(),
    time: document.querySelector("#gathering-time").value.trim(),
    location: document.querySelector("#gathering-location").value.trim(),
  };
  state.zoom.url = document.querySelector("#zoom-url").value.trim();
  state.zoom.details = document.querySelector("#zoom-details").value.trim();
  saveState();
  await saveRemoteSettings();
  render();
  showToast("Gathering details updated.");
}

function renderAdminReport() {
  const attendance = state.checkIns.length + Number(state.report.manualAttendanceAdjustment || 0);
  const returning = state.checkIns.filter((checkIn) => checkIn.returning).length;
  const newParticipants = Math.max(state.checkIns.length - returning, 0);
  return `
    <section class="card">
      <h3>Monthly Summary Report</h3>
      <div class="summary-grid">
        <div class="summary-stat"><strong>${state.report.gatheringsHeld}</strong><span>Gatherings held</span></div>
        <div class="summary-stat"><strong>${attendance}</strong><span>Attendance</span></div>
        <div class="summary-stat"><strong>${newParticipants}</strong><span>New participants</span></div>
        <div class="summary-stat"><strong>${returning}</strong><span>Returning participants</span></div>
        <div class="summary-stat"><strong>${state.prayerRequests.length}</strong><span>Requests</span></div>
        <div class="summary-stat"><strong>${state.prayerRequests.filter((item) => item.status === "Answered").length}</strong><span>Answered</span></div>
        <div class="summary-stat"><strong>${state.testimonies.length}</strong><span>Testimonies</span></div>
        <div class="summary-stat"><strong>${state.report.breakthroughs}</strong><span>Breakthroughs</span></div>
      </div>
      <form class="form" onsubmit="updateReport(event)" style="margin-top:14px">
        <div class="grid two">
          <div class="field">
            <label for="gatherings-held">Gatherings held</label>
            <input id="gatherings-held" type="number" min="0" value="${state.report.gatheringsHeld}">
          </div>
          <div class="field">
            <label for="attendance-adjustment">Manual attendance adjustment</label>
            <input id="attendance-adjustment" type="number" value="${state.report.manualAttendanceAdjustment}">
          </div>
          <div class="field">
            <label for="reconciliations">Reconciliations reported</label>
            <input id="reconciliations" type="number" min="0" value="${state.report.reconciliations}">
          </div>
          <div class="field">
            <label for="breakthroughs">Ministry breakthroughs reported</label>
            <input id="breakthroughs" type="number" min="0" value="${state.report.breakthroughs}">
          </div>
        </div>
        <div class="field">
          <label for="leader-notes">Leader notes</label>
          <textarea id="leader-notes">${escapeHtml(state.report.leaderNotes)}</textarea>
        </div>
        <button class="button" type="submit">Save Report Notes</button>
      </form>
    </section>
  `;
}

async function updateReport(event) {
  event.preventDefault();
  state.report.gatheringsHeld = Number(document.querySelector("#gatherings-held").value);
  state.report.manualAttendanceAdjustment = Number(document.querySelector("#attendance-adjustment").value);
  state.report.reconciliations = Number(document.querySelector("#reconciliations").value);
  state.report.breakthroughs = Number(document.querySelector("#breakthroughs").value);
  state.report.leaderNotes = document.querySelector("#leader-notes").value.trim();
  saveState();
  await saveRemoteSettings();
  render();
  showToast("Monthly report notes saved.");
}

function renderAdminLeaders() {
  return `
    <section class="card">
      <h3>Approved Pilot Leaders</h3>
      <div class="admin-list">
        ${state.leaders
          .map(
            (leader) => `
              <article class="admin-item">
                <p><strong>${escapeHtml(leader.name)}</strong><br><span class="muted">${escapeHtml(leader.email)}</span></p>
                <div class="meta-row">${leader.roles.map((role) => `<span class="pill">${escapeHtml(role)}</span>`).join("")}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

initializeApp();
