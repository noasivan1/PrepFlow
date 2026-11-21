import type { Company, Interview, Question, Role, Topic } from '../types'

/**
 * Local mock data. Nothing here is persisted; it only exists so the prototype
 * has something realistic to render. Pages never import this file directly,
 * they go through `./queries.ts`.
 *
 * Everything the user reads has an `en` and a `he` version. Code stays as is.
 *
 * To add a company: add one object to `companies`.
 * To add a question: add one object to `questions` and list it in an
 * interview's `questionIds` so it shows up under that company.
 *   - `codeSolutions`: full solutions, for coding questions.
 *   - `codeExamples`: a short illustrative snippet, for open questions.
 */

export const topics: Topic[] = [
  { id: 'oop', name: { en: 'OOP', he: 'תכנות מונחה עצמים' }, color: 'violet' },
  { id: 'cpp', name: { en: 'C++', he: 'C++' }, color: 'blue' },
  { id: 'c', name: { en: 'C', he: 'C' }, color: 'indigo' },
  { id: 'java', name: { en: 'Java', he: 'Java' }, color: 'orange' },
  { id: 'python', name: { en: 'Python', he: 'Python' }, color: 'amber' },
  { id: 'javascript', name: { en: 'JavaScript', he: 'JavaScript' }, color: 'amber' },
  { id: 'os', name: { en: 'Operating Systems', he: 'מערכות הפעלה' }, color: 'emerald' },
  { id: 'hardware', name: { en: 'Embedded & Hardware', he: 'אמבדד וחומרה' }, color: 'teal' },
  { id: 'linux', name: { en: 'Linux', he: 'לינוקס' }, color: 'slate' },
  { id: 'networking', name: { en: 'Networking', he: 'רשתות' }, color: 'sky' },
  { id: 'security', name: { en: 'Security', he: 'אבטחת מידע' }, color: 'rose' },
  { id: 'sql', name: { en: 'SQL', he: 'SQL' }, color: 'teal' },
  { id: 'rest', name: { en: 'REST APIs', he: 'REST APIs' }, color: 'pink' },
  { id: 'algorithms', name: { en: 'Algorithms', he: 'אלגוריתמים' }, color: 'indigo' },
  { id: 'system-design', name: { en: 'System Design', he: 'תכנון מערכות' }, color: 'violet' },
]

export const roles: Role[] = [
  {
    id: 'software',
    name: { en: 'Software Developer', he: 'מפתח/ת תוכנה' },
    description: {
      en: 'General software development. OOP, data structures, C++ / Java / Python fundamentals.',
      he: 'פיתוח תוכנה כללי. OOP, מבני נתונים ויסודות C++‎, Java ו-Python.',
    },
    category: 'development',
    icon: 'code',
    focusTopicIds: ['oop', 'cpp', 'algorithms', 'os'],
  },
  {
    id: 'verification',
    name: { en: 'Software Verification Engineer', he: 'מהנדס/ת ורפיקציה של תוכנה' },
    description: {
      en: 'Tests software, drivers and SDKs end to end. Python automation, reading C / C++, Linux, networking and OS internals.',
      he: 'בודק/ת תוכנה, דרייברים ו-SDK מקצה לקצה. אוטומציה ב-Python, קריאת C ו-C++, לינוקס, רשתות ופנימיות מערכת ההפעלה.',
    },
    category: 'development',
    icon: 'bug',
    focusTopicIds: ['python', 'linux', 'networking', 'os', 'c'],
  },
  {
    id: 'embedded',
    name: { en: 'Embedded Engineer', he: 'מהנדס/ת אמבדד' },
    description: {
      en: 'Firmware and hardware-near code. C, bit manipulation, memory, interrupts and RTOS.',
      he: 'קוד קרוב לחומרה. C, פעולות על ביטים, זיכרון, פסיקות ו-RTOS.',
    },
    category: 'development',
    icon: 'cpu',
    focusTopicIds: ['c', 'hardware', 'os', 'cpp'],
  },
  {
    id: 'backend',
    name: { en: 'Backend Developer', he: 'מפתח/ת Backend' },
    description: {
      en: 'Servers and APIs. REST, databases, system design and concurrency.',
      he: 'שרתים ו-API. REST, מסדי נתונים, תכנון מערכות ומקביליות.',
    },
    category: 'development',
    icon: 'server',
    focusTopicIds: ['rest', 'sql', 'system-design', 'os'],
  },
  {
    id: 'frontend',
    name: { en: 'Frontend Developer', he: 'מפתח/ת Frontend' },
    description: {
      en: 'Web interfaces. JavaScript, the browser, frameworks and performance.',
      he: 'ממשקי ווב. JavaScript, הדפדפן, פריימוורקים וביצועים.',
    },
    category: 'development',
    icon: 'layout',
    focusTopicIds: ['javascript', 'rest', 'algorithms'],
  },
  {
    id: 'fullstack',
    name: { en: 'Full Stack Developer', he: 'מפתח/ת Full Stack' },
    description: {
      en: 'Both sides of the web app, from the UI to the database.',
      he: 'שני הצדדים של אפליקציית ווב, מהממשק ועד מסד הנתונים.',
    },
    category: 'development',
    icon: 'layers',
    focusTopicIds: ['javascript', 'rest', 'sql'],
  },
  {
    id: 'devops',
    name: { en: 'DevOps Engineer', he: 'מהנדס/ת DevOps' },
    description: {
      en: 'Infrastructure and delivery. Linux, networking, containers, CI/CD and cloud.',
      he: 'תשתיות ו-delivery. לינוקס, רשתות, קונטיינרים, CI/CD וענן.',
    },
    category: 'development',
    icon: 'cloud',
    focusTopicIds: ['linux', 'networking', 'security'],
  },
  {
    id: 'data',
    name: { en: 'Data / ML Engineer', he: 'מהנדס/ת דאטה ו-ML' },
    description: {
      en: 'Data pipelines and models. Python, SQL, statistics and algorithms.',
      he: 'צינורות נתונים ומודלים. Python, SQL, סטטיסטיקה ואלגוריתמים.',
    },
    category: 'development',
    icon: 'database',
    focusTopicIds: ['python', 'sql', 'algorithms'],
  },
  {
    id: 'qa',
    name: { en: 'QA Automation', he: 'אוטומציית QA' },
    description: {
      en: 'Test automation. Python or Java, APIs, test design and CI.',
      he: 'אוטומציית בדיקות. Python או Java, API, תכנון בדיקות ו-CI.',
    },
    category: 'development',
    icon: 'bug',
    focusTopicIds: ['python', 'rest', 'sql'],
  },
  {
    id: 'helpdesk',
    name: { en: 'Help Desk / IT Support', he: 'תמיכה טכנית' },
    description: {
      en: 'First-line IT support. Networking basics, Windows, Active Directory and troubleshooting.',
      he: 'תמיכת IT קו ראשון (Help Desk). יסודות רשתות, Windows, Active Directory ופתרון תקלות.',
    },
    category: 'other',
    icon: 'headset',
    focusTopicIds: ['networking', 'os', 'linux'],
  },
  {
    id: 'sysadmin',
    name: { en: 'System Administrator', he: 'מנהל/ת מערכות' },
    description: {
      en: 'Servers, users and networks. Linux / Windows administration and monitoring.',
      he: 'שרתים, משתמשים ורשתות. ניהול לינוקס / Windows וניטור.',
    },
    category: 'other',
    icon: 'terminal',
    focusTopicIds: ['linux', 'networking', 'os'],
  },
  {
    id: 'security',
    name: { en: 'Security Analyst', he: 'אנליסט/ית אבטחת מידע' },
    description: {
      en: 'Defending systems. Networking, threats, encryption and secure coding.',
      he: 'הגנה על מערכות. רשתות, איומים, הצפנה וכתיבת קוד מאובטח.',
    },
    category: 'other',
    icon: 'shield',
    focusTopicIds: ['security', 'networking', 'linux'],
  },
  {
    id: 'student',
    name: { en: 'Student / Intern', he: 'סטודנט/ית ומתמחה' },
    description: {
      en: 'Internships and first jobs. Fundamentals across the board.',
      he: 'התמחויות ומשרות ראשונות. יסודות מכל התחומים.',
    },
    category: 'other',
    icon: 'graduation',
    focusTopicIds: ['oop', 'algorithms', 'os'],
  },
]

export const companies: Company[] = [
  {
    id: 'elbit',
    name: { en: 'Elbit Systems', he: 'אלביט מערכות' },
    industry: { en: 'Defense', he: 'ביטחוני' },
    color: 'blue',
    about: {
      en: "Israel's largest defense electronics company: avionics, electronic warfare, command and control, UAVs and land systems. Thousands of embedded and software engineers across the country.",
      he: 'חברת האלקטרוניקה הביטחונית הגדולה בישראל: אוויוניקה, לוחמה אלקטרונית, שליטה ובקרה, כטב"מים ומערכות יבשה. אלפי מהנדסי אמבדד ותוכנה ברחבי הארץ.',
    },
    tips: {
      en: 'Expect C / C++, bit manipulation, OS and RTOS basics and hardware-near questions. Security clearance is usually required.',
      he: 'צפו ל-C / C++, פעולות על ביטים, יסודות מערכות הפעלה ו-RTOS ושאלות קרובות לחומרה. בדרך כלל נדרש סיווג ביטחוני.',
    },
    focusTopicIds: ['c', 'cpp', 'hardware', 'os'],
  },
  {
    id: 'rafael',
    name: { en: 'Rafael', he: 'רפאל' },
    industry: { en: 'Defense', he: 'ביטחוני' },
    color: 'sky',
    about: {
      en: "Government-owned defense company behind Iron Dome, David's Sling and precision weapons. Strong in real-time and embedded software.",
      he: 'חברה ביטחונית ממשלתית שמאחורי כיפת ברזל, קלע דוד וחימוש מדויק. חזקה בתוכנת זמן אמת ואמבדד.',
    },
    tips: {
      en: 'C / C++ depth, OOP design, real-time OS, plus LeetCode-style problems. Long, thorough processes with several rounds.',
      he: 'עומק ב-C / C++, תכנון מונחה עצמים, מערכות הפעלה בזמן אמת ושאלות בסגנון LeetCode. תהליכים ארוכים ויסודיים עם כמה סבבים.',
    },
    focusTopicIds: ['cpp', 'c', 'oop', 'os', 'algorithms'],
  },
  {
    id: 'iai',
    name: { en: 'IAI', he: 'התעשייה האווירית' },
    industry: { en: 'Defense', he: 'ביטחוני' },
    color: 'indigo',
    about: {
      en: 'Israel Aerospace Industries: aircraft, satellites, missiles and radar. Large embedded, DSP and systems-engineering teams.',
      he: 'התעשייה האווירית: מטוסים, לוויינים, טילים ומכ"ם. צוותים גדולים של אמבדד, DSP והנדסת מערכות.',
    },
    tips: {
      en: 'Similar to Elbit and Rafael: C, real-time, hardware interfaces. Expect questions about reliability and testing.',
      he: 'דומה לאלביט ורפאל: C, זמן אמת, ממשקי חומרה. צפו לשאלות על אמינות ובדיקות.',
    },
    focusTopicIds: ['c', 'hardware', 'os'],
  },
  {
    id: 'intel',
    name: { en: 'Intel', he: 'אינטל' },
    industry: { en: 'Semiconductors', he: 'שבבים' },
    color: 'sky',
    about: {
      en: 'Intel Israel designs CPUs (the Core line started in Haifa), networking chips and validation tools. A huge site with software, firmware and hardware roles.',
      he: 'אינטל ישראל מפתחת מעבדים (סדרת Core התחילה בחיפה), שבבי רשת וכלי ולידציה. אתר ענק עם משרות תוכנה, קושחה וחומרה.',
    },
    tips: {
      en: 'For firmware: C, bit operations, memory and endianness. For software: C++ / Python, algorithms and OS. Often a technical exam before the interview.',
      he: 'לקושחה: C, פעולות על ביטים, זיכרון ו-Endianness. לתוכנה: C++ / Python, אלגוריתמים ומערכות הפעלה. לעיתים קרובות מבחן טכני לפני הראיון.',
    },
    focusTopicIds: ['c', 'hardware', 'cpp', 'python'],
  },
  {
    id: 'nvidia',
    name: { en: 'NVIDIA', he: 'NVIDIA' },
    industry: { en: 'Semiconductors', he: 'שבבים' },
    color: 'emerald',
    about: {
      en: 'NVIDIA Israel (formerly Mellanox) builds networking chips, DPUs and AI infrastructure. Deep C++ / C and Python roles, and a lot of Linux.',
      he: 'אנבידיה ישראל (לשעבר מלאנוקס) מפתחת שבבי רשת, DPU ותשתיות AI. משרות עמוקות ב-C++ / C ו-Python, והרבה לינוקס.',
    },
    tips: {
      en: 'Depends on the team: some rounds are pure Python and its rules, others deep C++ (smart pointers, Rule of Five) and OS. Ask the recruiter which languages the team uses.',
      he: 'תלוי בצוות: יש סבבים שהם Python טהור וכל החוקים שלו, ואחרים C++ עמוק (מצביעים חכמים, Rule of Five) ומערכות הפעלה. שאלו את המגייס/ת באילו שפות הצוות עובד.',
    },
    focusTopicIds: ['cpp', 'python', 'os', 'linux'],
  },
  {
    id: 'mobileye',
    name: { en: 'Mobileye', he: 'מובילאיי' },
    industry: { en: 'Automotive', he: 'רכב אוטונומי' },
    color: 'emerald',
    about: {
      en: 'Mobileye (Intel) develops driver-assistance and autonomous-driving chips and software in Jerusalem. Computer vision, C++ and embedded.',
      he: 'מובילאיי (אינטל) מפתחת בירושלים שבבים ותוכנה לסיוע לנהג ולנהיגה אוטונומית. ראייה ממוחשבת, C++ ואמבדד.',
    },
    tips: {
      en: 'C++ and algorithms, some linear algebra and image processing. Coding on a whiteboard is common.',
      he: 'C++ ואלגוריתמים, מעט אלגברה לינארית ועיבוד תמונה. קוד על לוח נפוץ.',
    },
    focusTopicIds: ['cpp', 'algorithms', 'hardware'],
  },
  {
    id: 'google',
    name: { en: 'Google', he: 'גוגל' },
    industry: { en: 'Big Tech', he: 'ביג-טק' },
    color: 'amber',
    about: {
      en: 'Google Tel Aviv and Haifa work on Search, Cloud, Waze and AI. A classic big-tech process.',
      he: 'גוגל תל אביב וחיפה עובדות על חיפוש, ענן, Waze ו-AI. תהליך ביג-טק קלאסי.',
    },
    tips: {
      en: 'Algorithms and data structures above all, in a shared editor, with complexity analysis for every solution. The language is your choice.',
      he: 'אלגוריתמים ומבני נתונים מעל הכול, בעורך משותף, עם ניתוח סיבוכיות לכל פתרון. השפה לבחירתכם.',
    },
    focusTopicIds: ['algorithms', 'system-design'],
  },
  {
    id: 'microsoft',
    name: { en: 'Microsoft', he: 'מיקרוסופט' },
    industry: { en: 'Big Tech', he: 'ביג-טק' },
    color: 'teal',
    about: {
      en: 'Microsoft Israel R&D in Herzliya and Haifa: security, cloud and AI products. Many intern and junior programs.',
      he: "מיקרוסופט ישראל בהרצליה ובחיפה: מוצרי אבטחה, ענן ו-AI. הרבה תוכניות התמחות וג'וניור.",
    },
    tips: {
      en: 'Data structures, OOP and "how would you design" questions. Behavioural questions matter too.',
      he: 'מבני נתונים, OOP ושאלות "איך היית מתכנן/ת". גם שאלות התנהגותיות חשובות.',
    },
    focusTopicIds: ['algorithms', 'oop', 'system-design'],
  },
  {
    id: 'apple',
    name: { en: 'Apple', he: 'אפל' },
    industry: { en: 'Big Tech', he: 'ביג-טק' },
    color: 'slate',
    about: {
      en: 'Apple Israel in Herzliya and Haifa focuses on chips (the M and A series), wireless and camera technologies.',
      he: 'אפל ישראל בהרצליה ובחיפה מתמקדת בשבבים (סדרות M ו-A), טכנולוגיות אלחוט ומצלמה.',
    },
    tips: {
      en: 'Hardware-near C / C++, performance and debugging. Very confidential: expect little detail about the actual project.',
      he: 'C / C++ קרוב לחומרה, ביצועים ודיבוג. סודי מאוד: צפו למעט פרטים על הפרויקט עצמו.',
    },
    focusTopicIds: ['c', 'cpp', 'hardware'],
  },
  {
    id: 'amazon',
    name: { en: 'Amazon', he: 'אמזון' },
    industry: { en: 'Big Tech / Cloud', he: 'ביג-טק / ענן' },
    color: 'orange',
    about: {
      en: 'Amazon and AWS in Tel Aviv and Haifa: cloud infrastructure, Alexa Shopping and the Annapurna chips.',
      he: 'אמזון ו-AWS בתל אביב ובחיפה: תשתיות ענן, Alexa Shopping ושבבי Annapurna.',
    },
    tips: {
      en: 'Coding plus the Leadership Principles: prepare stories in the STAR format. System design for senior roles.',
      he: 'קוד ועקרונות המנהיגות (Leadership Principles): הכינו סיפורים בפורמט STAR. תכנון מערכות לתפקידים בכירים.',
    },
    focusTopicIds: ['algorithms', 'system-design', 'linux'],
  },
  {
    id: 'meta',
    name: { en: 'Meta', he: 'מטא' },
    industry: { en: 'Big Tech', he: 'ביג-טק' },
    color: 'blue',
    about: {
      en: 'Meta Tel Aviv works on Instagram, WhatsApp, Reels and infrastructure.',
      he: 'מטא תל אביב עובדת על אינסטגרם, וואטסאפ, Reels ותשתיות.',
    },
    tips: {
      en: 'Two coding rounds with medium LeetCode-style problems, then system design and behavioural.',
      he: 'שני סבבי קוד עם שאלות ברמת medium בסגנון LeetCode, ואז תכנון מערכות והתנהגותי.',
    },
    focusTopicIds: ['algorithms', 'system-design'],
  },
  {
    id: 'upwind',
    name: { en: 'Upwind', he: 'Upwind' },
    industry: { en: 'Cloud Security', he: 'אבטחת ענן' },
    color: 'violet',
    about: {
      en: 'Upwind is a fast-growing cloud-security startup: runtime protection for cloud workloads, built on eBPF and Kubernetes.',
      he: 'Upwind היא סטארטאפ אבטחת ענן שצומח מהר: הגנה בזמן ריצה על עומסי ענן, על בסיס eBPF ו-Kubernetes.',
    },
    tips: {
      en: 'Linux internals, containers, networking and Go / Python. Design questions about scale and data pipelines.',
      he: 'פנימיות לינוקס, קונטיינרים, רשתות ו-Go / Python. שאלות תכנון על סקייל וצינורות נתונים.',
    },
    focusTopicIds: ['linux', 'networking', 'security', 'system-design'],
  },
  {
    id: 'wiz',
    name: { en: 'Wiz', he: 'Wiz' },
    industry: { en: 'Cloud Security', he: 'אבטחת ענן' },
    color: 'indigo',
    about: {
      en: 'Wiz is the cloud-security unicorn: agentless scanning of cloud environments. Backend, security research and product roles.',
      he: 'Wiz היא חד-קרן אבטחת הענן: סריקה ללא סוכן של סביבות ענן. תפקידי backend, מחקר אבטחה ומוצר.',
    },
    tips: {
      en: 'Cloud concepts (IAM, networking), backend design and security thinking. A fast process.',
      he: 'מושגי ענן (IAM, רשתות), תכנון backend וחשיבה אבטחתית. תהליך מהיר.',
    },
    focusTopicIds: ['security', 'system-design', 'linux'],
  },
  {
    id: 'checkpoint',
    name: { en: 'Check Point', he: "צ'ק פוינט" },
    industry: { en: 'Cybersecurity', he: 'סייבר' },
    color: 'pink',
    about: {
      en: 'Check Point is the veteran Israeli cybersecurity company: firewalls, endpoint and cloud security. Big R&D and support organisations.',
      he: "צ'ק פוינט היא חברת הסייבר הוותיקה של ישראל: firewalls, אבטחת תחנות קצה וענן. ארגוני פיתוח ותמיכה גדולים.",
    },
    tips: {
      en: 'Networking fundamentals (OSI, TCP / UDP, DNS) for support and security roles; C / C++ and Linux for R&D.',
      he: 'יסודות רשתות (OSI, TCP / UDP, DNS) לתפקידי תמיכה ואבטחה; C / C++ ולינוקס לפיתוח.',
    },
    focusTopicIds: ['networking', 'security', 'linux', 'c'],
  },
  {
    id: 'palo-alto',
    name: { en: 'Palo Alto Networks', he: 'פאלו אלטו' },
    industry: { en: 'Cybersecurity', he: 'סייבר' },
    color: 'orange',
    about: {
      en: 'Palo Alto Networks Israel builds Cortex XDR and Prisma Cloud, largely from acquired Israeli startups.',
      he: 'פאלו אלטו ישראל מפתחת את Cortex XDR ו-Prisma Cloud, ברובם מסטארטאפים ישראליים שנרכשו.',
    },
    tips: {
      en: 'Security concepts, Python / Go backend, cloud and Kubernetes.',
      he: 'מושגי אבטחה, backend ב-Python / Go, ענן ו-Kubernetes.',
    },
    focusTopicIds: ['security', 'linux', 'python'],
  },
  {
    id: 'cyberark',
    name: { en: 'CyberArk', he: 'סייברארק' },
    industry: { en: 'Cybersecurity', he: 'סייבר' },
    color: 'teal',
    about: {
      en: 'CyberArk specialises in identity security and privileged access management, headquartered in Petah Tikva.',
      he: 'סייברארק מתמחה באבטחת זהויות וניהול גישה מורשית, עם מטה בפתח תקווה.',
    },
    tips: {
      en: 'Windows internals and Active Directory, C# / C++, and security basics such as encryption.',
      he: 'פנימיות Windows ו-Active Directory, C# / C++ ויסודות אבטחה כמו הצפנה.',
    },
    focusTopicIds: ['security', 'os', 'networking'],
  },
  {
    id: 'wix',
    name: { en: 'Wix', he: 'וויקס' },
    industry: { en: 'Web', he: 'ווב' },
    color: 'rose',
    about: {
      en: 'Wix builds the website-building platform: huge frontend and backend teams in Tel Aviv.',
      he: 'וויקס מפתחת את פלטפורמת בניית האתרים: צוותי frontend ו-backend ענקיים בתל אביב.',
    },
    tips: {
      en: 'JavaScript / TypeScript and React for frontend, Scala / Node for backend. A home assignment is common.',
      he: 'JavaScript / TypeScript ו-React ל-frontend, Scala / Node ל-backend. מטלת בית נפוצה.',
    },
    focusTopicIds: ['javascript', 'rest', 'system-design'],
  },
  {
    id: 'monday',
    name: { en: 'monday.com', he: 'monday.com' },
    industry: { en: 'SaaS', he: 'SaaS' },
    color: 'rose',
    about: {
      en: "monday.com is the work-management platform, one of Israel's largest SaaS companies.",
      he: 'monday.com היא פלטפורמת ניהול העבודה, מחברות ה-SaaS הגדולות בישראל.',
    },
    tips: {
      en: 'Home assignment followed by a review call about your design decisions. REST, SQL and JavaScript.',
      he: 'מטלת בית ואחריה שיחה על החלטות התכנון שלכם. REST, SQL ו-JavaScript.',
    },
    focusTopicIds: ['rest', 'sql', 'javascript'],
  },
  {
    id: 'amdocs',
    name: { en: 'Amdocs', he: 'אמדוקס' },
    industry: { en: 'Telecom software', he: 'תוכנה לתקשורת' },
    color: 'violet',
    about: {
      en: 'Amdocs delivers billing and customer-management software for telecom operators. Large Java and enterprise teams.',
      he: 'אמדוקס מפתחת תוכנת חיוב וניהול לקוחות לחברות תקשורת. צוותי Java ואנטרפרייז גדולים.',
    },
    tips: {
      en: 'Java depth (JVM, GC, collections, concurrency), SQL and OOP.',
      he: 'עומק ב-Java (JVM, GC, collections, מקביליות), SQL ו-OOP.',
    },
    focusTopicIds: ['java', 'sql', 'oop'],
  },
  {
    id: 'emg',
    name: { en: 'EMG', he: 'EMG' },
    industry: { en: 'Software house', he: 'בית תוכנה' },
    color: 'teal',
    about: {
      en: 'EMG is a software house that builds systems for enterprise and public-sector clients.',
      he: 'EMG היא בית תוכנה שמפתח מערכות ללקוחות ארגוניים ולמגזר הציבורי.',
    },
    tips: {
      en: 'OOP fundamentals and general software questions; friendly, conversational interviews.',
      he: 'יסודות OOP ושאלות תוכנה כלליות; ראיונות ידידותיים בסגנון שיחה.',
    },
    focusTopicIds: ['oop', 'os', 'algorithms'],
  },
  {
    id: 'taboola',
    name: { en: 'Taboola', he: 'טאבולה' },
    industry: { en: 'AdTech', he: 'אדטק' },
    color: 'sky',
    about: {
      en: 'Taboola runs a content-recommendation network at web scale, with big data pipelines and a Java backend.',
      he: 'טאבולה מפעילה רשת המלצות תוכן בסקייל של הרשת, עם צינורות ביג-דאטה ו-backend ב-Java.',
    },
    tips: {
      en: 'Java, data structures, and questions about scale (caching, queues, databases).',
      he: 'Java, מבני נתונים ושאלות על סקייל (caching, תורים, מסדי נתונים).',
    },
    focusTopicIds: ['java', 'algorithms', 'system-design'],
  },
  {
    id: 'fiverr',
    name: { en: 'Fiverr', he: 'פייבר' },
    industry: { en: 'Marketplace', he: 'מרקטפלייס' },
    color: 'emerald',
    about: {
      en: 'Fiverr is the freelance-services marketplace, with Ruby / Node backend and React frontend teams.',
      he: 'פייבר היא מרקטפלייס של שירותי פרילנס, עם צוותי backend ב-Ruby / Node ו-frontend ב-React.',
    },
    tips: {
      en: 'Web fundamentals, REST APIs, JavaScript and product thinking.',
      he: 'יסודות ווב, REST APIs, JavaScript וחשיבה מוצרית.',
    },
    focusTopicIds: ['javascript', 'rest', 'sql'],
  },
]

export const questions: Question[] = [
  // ---------- OOP / C++ ----------
  {
    id: 'q-polymorphism',
    text: { en: 'What is polymorphism?', he: 'מהו פולימורפיזם?' },
    topicId: 'oop',
    roleIds: ['software', 'backend', 'embedded', 'student'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 4,
    answer: {
      en: 'Polymorphism means one interface, many implementations: code written against a base type works with any type that implements it, and the right behaviour is chosen automatically.\nThere are two forms. Runtime polymorphism uses virtual methods that derived classes override, and a call through a base pointer or reference is dispatched to the real object\'s version, in C++ through a vtable. Compile-time polymorphism is overloading and templates or generics, where the compiler picks the implementation with no runtime cost.',
      he: 'פולימורפיזם זה ממשק אחד עם הרבה מימושים: קוד שנכתב מול טיפוס בסיס עובד עם כל טיפוס שמממש אותו, וההתנהגות הנכונה נבחרת אוטומטית.\nיש שתי צורות. פולימורפיזם בזמן ריצה משתמש במתודות virtual שהמחלקות היורשות עושות להן override, וקריאה דרך pointer או reference לבסיס מגיעה לגרסה של האובייקט האמיתי, ב-C++ דרך vtable. פולימורפיזם בזמן קומפילציה הוא overloading ו-templates או generics, שבהם הקומפיילר בוחר את המימוש בלי עלות בזמן ריצה.',
    },
    example: {
      en: 'A drawing app keeps a list of Shape pointers and calls area() on each one. Circle and Square compute it differently, and adding a Triangle does not change the loop at all.',
      he: 'אפליקציית ציור מחזיקה רשימה של מצביעים ל-Shape וקוראת ל-area() על כל אחד. Circle ו-Square מחשבים את זה אחרת, והוספה של Triangle לא משנה את הלולאה בכלל.',
    },
    keyPoints: [
      {
        en: 'Distinguish overriding (same signature, resolved at runtime) from overloading (different parameters, resolved at compile time).',
        he: 'להבדיל בין override (אותה חתימה, נקבע בזמן ריצה) לבין overload (פרמטרים שונים, נקבע בזמן קומפילציה).',
      },
      {
        en: 'Dynamic dispatch costs a vptr per object, an indirect call and usually lost inlining.',
        he: 'ל-dispatch דינמי יש מחיר: vptr בכל אובייקט, קריאה עקיפה ובדרך כלל אובדן inlining.',
      },
      {
        en: 'A polymorphic base class in C++ needs a virtual destructor.',
        he: 'מחלקת בסיס פולימורפית ב-C++ צריכה destructor וירטואלי.',
      },
      {
        en: 'It supports the open/closed principle: add new types without touching existing callers.',
        he: 'זה מקיים את עקרון open/closed: מוסיפים טיפוסים חדשים בלי לגעת בקוד הקיים.',
      },
    ],
    extras: [
      {
        en: 'Object slicing: passing a derived object by value as its base copies only the base part and loses polymorphism.',
        he: 'Object slicing: העברה של אובייקט יורש by value כטיפוס הבסיס מעתיקה רק את חלק הבסיס, והפולימורפיזם הולך לאיבוד.',
      },
      {
        en: 'In Java every non-static, non-final, non-private method is virtual by default.',
        he: 'ב-Java כל מתודה שאינה static, final או private היא וירטואלית כברירת מחדל.',
      },
      {
        en: 'Templates avoid runtime cost but increase code size and compile time, and the types must be known at compile time.',
        he: 'templates חוסכים עלות בזמן ריצה, אבל מגדילים את גודל הקוד ואת זמן הקומפילציה, וצריך לדעת את הטיפוסים כבר בקומפילציה.',
      },
      {
        en: 'Device drivers use the same idea: the kernel calls read() on a generic interface and each driver supplies its own implementation.',
        he: 'drivers עובדים באותו רעיון: ה-kernel קורא ל-read() דרך ממשק כללי, וכל driver מספק מימוש משלו.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `struct Shape {
    virtual double area() const = 0;      // one interface...
    virtual ~Shape() = default;
};
struct Circle : Shape {
    double r;
    double area() const override { return 3.14159 * r * r; }
};
struct Square : Shape {
    double s;
    double area() const override { return s * s; }
};

double total(const std::vector<Shape*>& shapes) {
    double sum = 0;
    for (Shape* s : shapes) sum += s->area();   // ...different behaviour at runtime
    return sum;
}`,
      },
      {
        language: 'java',
        code: `abstract class Shape { abstract double area(); }

class Circle extends Shape {
    double r; Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}
class Square extends Shape {
    double s; Square(double s) { this.s = s; }
    double area() { return s * s; }
}

Shape[] shapes = { new Circle(1), new Square(2) };
double total = 0;
for (Shape s : shapes) total += s.area();   // runtime dispatch`,
      },
      {
        language: 'python',
        code: `class Shape:
    def area(self):
        raise NotImplementedError

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return 3.14159 * self.r ** 2

class Square(Shape):
    def __init__(self, s): self.s = s
    def area(self): return self.s ** 2

shapes = [Circle(1), Square(2)]
print(sum(s.area() for s in shapes))   # each object answers in its own way`,
      },
    ],
  },
  {
    id: 'q-virtual-function',
    text: { en: 'What is a virtual function?', he: 'מהי פונקציה וירטואלית?' },
    topicId: 'cpp',
    roleIds: ['software', 'embedded'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'A virtual function is a member function declared virtual in a base class, so a call through a base pointer or reference runs the override of the object\'s actual type, not the pointer\'s static type.\nTypically each class with virtual functions has a vtable, an array of function pointers, and each object holds a hidden vptr to its class\'s vtable. A call loads the vptr, indexes the table and makes an indirect call.',
      he: 'פונקציה וירטואלית היא member function שמוצהרת כ-virtual במחלקת הבסיס, כך שקריאה דרך pointer או reference לבסיס מריצה את ה-override של הטיפוס האמיתי של האובייקט, ולא של הטיפוס הסטטי של המצביע.\nבמימוש טיפוסי לכל מחלקה עם פונקציות וירטואליות יש vtable, מערך של מצביעים לפונקציות, וכל אובייקט מחזיק vptr נסתר ל-vtable של המחלקה שלו. הקריאה טוענת את ה-vptr, ניגשת לתא המתאים בטבלה ומבצעת קריאה עקיפה.',
    },
    example: {
      en: 'With Base* p = new Derived, p->hello() prints Derived because hello is virtual, while the non-virtual p->bye() prints the Base version, bound at compile time.',
      he: 'עם Base* p = new Derived, הקריאה p->hello() מדפיסה Derived כי hello וירטואלית, ואילו p->bye() שאינה וירטואלית מדפיסה את הגרסה של Base, כי היא נקשרת בזמן קומפילציה.',
    },
    keyPoints: [
      {
        en: 'Pure virtual (= 0) makes the class abstract; this is how C++ expresses interfaces.',
        he: 'pure virtual (= 0) הופכת את המחלקה לאבסטרקטית; כך מגדירים ממשקים ב-C++.',
      },
      {
        en: 'Virtual calls inside a constructor or destructor do not reach the derived override.',
        he: 'קריאה וירטואלית בתוך constructor או destructor לא מגיעה ל-override של היורשת.',
      },
      {
        en: 'A polymorphic base needs a virtual destructor, otherwise delete through a base pointer is undefined behaviour.',
        he: 'בסיס פולימורפי צריך destructor וירטואלי, אחרת delete דרך מצביע לבסיס הוא undefined behaviour.',
      },
      {
        en: 'Use override so the compiler catches signature mistakes, and final to stop further overriding.',
        he: 'להשתמש ב-override כדי שהקומפיילר יתפוס טעויות חתימה, וב-final כדי לחסום דריסה נוספת.',
      },
    ],
    extras: [
      {
        en: 'Cost: one hidden pointer per object, an indirect call per invocation and usually no inlining, which matters in tight embedded loops.',
        he: 'המחיר: מצביע נסתר בכל אובייקט, קריאה עקיפה בכל הפעלה ובדרך כלל בלי inlining, מה שמשנה בלולאות הדוקות ב-embedded.',
      },
      {
        en: 'Calling through an object by value is not polymorphic; dispatch needs a pointer or reference.',
        he: 'קריאה דרך אובייקט by value אינה פולימורפית; ה-dispatch עובד רק דרך pointer או reference.',
      },
      {
        en: 'Compilers can devirtualize a call when the exact type is known or the class is final.',
        he: 'הקומפיילר יכול לבטל את הוירטואליות (devirtualization) כשהטיפוס המדויק ידוע או כשהמחלקה final.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `struct Base {
    virtual void hello() { std::cout << "Base\\n"; }
    void bye()           { std::cout << "Base bye\\n"; }     // not virtual
};
struct Derived : Base {
    void hello() override { std::cout << "Derived\\n"; }
    void bye()            { std::cout << "Derived bye\\n"; }
};

Base* p = new Derived;
p->hello();   // "Derived"  -> virtual: resolved at runtime through the vtable
p->bye();     // "Base bye" -> not virtual: resolved by the pointer's static type`,
      },
    ],
  },
  {
    id: 'q-static-method',
    text: { en: 'What is a static method?', he: 'מהי מתודה סטטית?' },
    topicId: 'oop',
    roleIds: ['software', 'backend', 'student'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 2,
    answer: {
      en: 'A static method belongs to the class itself, not to an object, so you call it on the class name without creating an instance.\nBecause it has no this or self, it cannot touch instance fields or call instance methods directly; it works only with its parameters and static members. It is bound at compile time, so it is not polymorphic. Typical uses are utility functions like Math.max, factory methods and class-wide counters.',
      he: 'מתודה סטטית שייכת למחלקה עצמה ולא לאובייקט, ולכן קוראים לה דרך שם המחלקה בלי ליצור מופע.\nכיוון שאין לה this או self, היא לא יכולה לגשת לשדות של מופע או לקרוא ישירות למתודות של מופע; היא עובדת רק עם הפרמטרים שלה ועם חברים סטטיים. היא נקשרת בזמן קומפילציה, ולכן אינה פולימורפית. שימושים נפוצים: פונקציות עזר כמו Math.max, מתודות factory ומונים ברמת המחלקה.',
    },
    example: {
      en: 'Integer.parseInt("42") in Java needs no Integer object. A User.createFromConfig(cfg) factory builds and returns a new User, and a static counter tracks how many were created.',
      he: 'Integer.parseInt("42") ב-Java לא צריך אובייקט Integer. מתודת factory כמו User.createFromConfig(cfg) בונה ומחזירה User חדש, ומונה סטטי סופר כמה נוצרו.',
    },
    keyPoints: [
      {
        en: 'Not polymorphic: cannot be virtual in C++, and in Java a subclass static method hides rather than overrides.',
        he: 'לא פולימורפית: ב-C++ אי אפשר להגדיר אותה virtual, וב-Java מתודה סטטית במחלקה יורשת עושה hiding ולא override.',
      },
      {
        en: 'In Python, @staticmethod receives nothing, while @classmethod receives cls and suits alternative constructors.',
        he: 'ב-Python, @staticmethod לא מקבלת כלום, ואילו @classmethod מקבלת cls ומתאימה ל-constructors חלופיים.',
      },
      {
        en: 'Static mutable state is shared by all threads, so it needs synchronization.',
        he: 'מצב סטטי שמשתנה משותף לכל ה-threads, ולכן צריך סנכרון.',
      },
      {
        en: 'Heavy static use creates hidden global state and makes mocking in unit tests hard; dependency injection is the alternative.',
        he: 'שימוש מוגזם בסטטי יוצר global state נסתר ומקשה על mock בבדיקות; dependency injection היא החלופה.',
      },
    ],
    extras: [
      {
        en: 'A singleton\'s getInstance() is a classic static method.',
        he: 'getInstance() של singleton היא מתודה סטטית קלאסית.',
      },
      {
        en: 'In C++ a static member function has a plain function pointer type, so it can be passed as a callback to a C API.',
        he: 'ב-C++ למתודה סטטית יש טיפוס של מצביע לפונקציה רגילה, ולכן אפשר להעביר אותה כ-callback ל-API של C.',
      },
      {
        en: 'A static method exists once per class, not once per object.',
        he: 'מתודה סטטית קיימת פעם אחת לכל מחלקה, ולא פעם אחת לכל אובייקט.',
      },
    ],
    codeExamples: [
      {
        language: 'java',
        code: `class MathUtils {
    static int max(int a, int b) { return a > b ? a : b; }   // no instance needed
}

int m = MathUtils.max(3, 7);   // called on the class, not on an object`,
      },
      {
        language: 'python',
        code: `class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    @staticmethod
    def c_to_f(c):                 # no self: does not touch instance state
        return c * 9 / 5 + 32

    @classmethod
    def from_fahrenheit(cls, f):   # gets the class: handy as a factory
        return cls((f - 32) * 5 / 9)

print(Temperature.c_to_f(100))     # 212.0`,
      },
    ],
  },
  {
    id: 'q-class-struct',
    text: {
      en: 'What is the difference between a class and a struct in C++?',
      he: 'מה ההבדל בין class ל-struct ב-C++?',
    },
    topicId: 'cpp',
    roleIds: ['software', 'embedded'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'In C++ class and struct are almost identical; the only language difference is the default access. Struct members and inheritance are public by default, class members and inheritance are private by default.\nOtherwise both can have constructors, methods, virtual functions and inheritance. The real difference is convention: struct for a plain data aggregate with public fields, class for a type with private state and invariants to protect.',
      he: 'ב-C++ class ו-struct כמעט זהים; ההבדל היחיד בשפה הוא רמת הגישה כברירת מחדל. ב-struct החברים והירושה הם public כברירת מחדל, וב-class החברים והירושה הם private כברירת מחדל.\nמעבר לזה, לשניהם יכולים להיות constructors, מתודות, פונקציות וירטואליות וירושה. ההבדל האמיתי הוא מוסכמה: struct לאגרגט נתונים פשוט עם שדות public, ו-class לטיפוס עם מצב פרטי ואינווריאנטים שצריך להגן עליהם.',
    },
    example: {
      en: 'A Point or a packet header with public x, y or length fields is a natural struct. An Account whose withdraw() must never go below zero is a class.',
      he: 'Point או header של packet עם שדות public כמו x, y או length הם struct טבעי. Account ש-withdraw() שלו אף פעם לא יורד מתחת לאפס הוא class.',
    },
    keyPoints: [
      {
        en: 'Mention both defaults: member access and inheritance access, not only members.',
        he: 'להזכיר את שתי ברירות המחדל: גישה לחברים וגם סוג הירושה, לא רק את החברים.',
      },
      {
        en: 'State clearly that a C++ struct can have methods, constructors and virtual functions.',
        he: 'לומר במפורש שב-C++ ל-struct יכולים להיות מתודות, constructors ופונקציות וירטואליות.',
      },
      {
        en: 'A C struct has only data: no member functions, no access control, no inheritance.',
        he: 'ל-struct של C יש רק נתונים: בלי פונקציות חברות, בלי בקרת גישה ובלי ירושה.',
      },
      {
        en: 'Be ready for padding: alignment can make sizeof larger than the sum of the fields, for class or struct.',
        he: 'להיות מוכנים לשאלת padding: alignment יכול להפוך את sizeof לגדול מסכום השדות, גם ב-class וגם ב-struct.',
      },
    ],
    extras: [
      {
        en: 'The keyword class can be used for template parameters (template<class T>); struct cannot.',
        he: 'במילה class אפשר להשתמש בפרמטרים של template (template<class T>), וב-struct לא.',
      },
      {
        en: 'A struct with only plain data members is a standard-layout aggregate, so it can be shared with C code or mapped onto hardware registers.',
        he: 'struct עם שדות נתונים פשוטים בלבד הוא standard-layout aggregate, ולכן אפשר לחלוק אותו עם קוד C או למפות אותו על רגיסטרים בחומרה.',
      },
      {
        en: 'You can forward-declare with one keyword and define with the other, though some compilers warn.',
        he: 'אפשר להצהיר מראש עם מילה אחת ולהגדיר עם השנייה, אם כי חלק מהקומפיילרים יתריעו.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `struct Point { int x, y; };          // public by default: p.x is fine

class Account {
    double balance = 0;              // private by default
public:
    void deposit(double amount) { balance += amount; }
    double get() const { return balance; }
};`,
      },
    ],
  },
  {
    id: 'q-encapsulation',
    text: {
      en: 'What is encapsulation and why does it matter?',
      he: 'מהי אנקפסולציה (כימוס) ולמה היא חשובה?',
    },
    topicId: 'oop',
    roleIds: ['software', 'backend', 'student'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 2,
    answer: {
      en: 'Encapsulation is bundling data with the operations on it and hiding the internal state, so the outside world uses only a deliberate public interface.\nYou make fields private, expose behaviour through methods and validate every state change inside the class, so its invariants are enforced in one place. It matters because it protects consistency, lowers coupling, lets you change the implementation without breaking callers, and makes bugs and tests easier to manage.',
      he: 'Encapsulation (כימוס) היא אריזה של נתונים יחד עם הפעולות עליהם והסתרת המצב הפנימי, כך שהעולם החיצוני משתמש רק בממשק ציבורי שתוכנן בכוונה.\nהופכים את השדות ל-private, חושפים התנהגות דרך מתודות ובודקים כל שינוי מצב בתוך המחלקה, כך שהאינווריאנטים נאכפים במקום אחד. זה חשוב כי זה שומר על עקביות, מקטין צימוד, מאפשר לשנות את המימוש בלי לשבור את מי שמשתמש, ומקל על איתור באגים ועל בדיקות.',
    },
    example: {
      en: 'A BankAccount keeps balance private and offers deposit() and withdraw(). withdraw() refuses to go below zero, so no caller can create a negative balance, and storing it in cents later changes nothing for callers.',
      he: 'BankAccount מחזיק את balance כ-private ומציע deposit() ו-withdraw(). withdraw() מסרבת לרדת מתחת לאפס, כך שאף קוד לא יכול ליצור יתרה שלילית, ואם בהמשך שומרים את היתרה באגורות, שום דבר לא משתנה למשתמשים.',
    },
    keyPoints: [
      {
        en: 'Talk about invariants: the class guarantees its own consistency because all changes go through its methods.',
        he: 'לדבר על אינווריאנטים: המחלקה מבטיחה את העקביות של עצמה כי כל השינויים עוברים דרך המתודות שלה.',
      },
      {
        en: 'Blind getters and setters for every field are not encapsulation; they just publish the fields.',
        he: 'getters ו-setters אוטומטיים לכל שדה הם לא encapsulation; הם פשוט חושפים את השדות.',
      },
      {
        en: 'Do not leak internal references, such as returning a mutable internal list; return a copy or read-only view.',
        he: 'לא להדליף הפניות פנימיות, למשל רשימה פנימית שאפשר לשנות; להחזיר עותק או תצוגה לקריאה בלבד.',
      },
      {
        en: 'It is language-independent: opaque pointers and static functions in C, the underscore convention in Python.',
        he: 'זה לא תלוי שפה: opaque pointers ופונקציות static ב-C, מוסכמת הקו התחתון ב-Python.',
      },
    ],
    extras: [
      {
        en: 'In embedded C, a driver module hides register access behind uart_send() and keeps its state static inside the .c file.',
        he: 'ב-C של embedded, מודול driver מסתיר את הגישה לרגיסטרים מאחורי uart_send() ומחזיק את המצב שלו כ-static בתוך קובץ ה-.c.',
      },
      {
        en: 'Funnelling all access through known points also makes thread-safety easier to add.',
        he: 'כשכל הגישה עוברת בנקודות ידועות, גם קל יותר להוסיף thread-safety.',
      },
      {
        en: 'Encapsulation is about controlling how state changes; access modifiers are only the tool.',
        he: 'encapsulation עוסק בשליטה על האופן שבו המצב משתנה; access modifiers הם רק הכלי.',
      },
    ],
    codeExamples: [
      {
        language: 'java',
        code: `class BankAccount {
    private double balance;                    // hidden state

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("amount must be positive");
        balance += amount;                     // the rule lives in one place
    }
    public double getBalance() { return balance; }
}
// account.balance = -100;   -> compile error: callers cannot break the invariant`,
      },
    ],
  },
  {
    id: 'q-pointer-reference',
    text: {
      en: 'What is the difference between a pointer and a reference in C++?',
      he: 'מה ההבדל בין מצביע (pointer) להפניה (reference) ב-C++?',
    },
    topicId: 'cpp',
    roleIds: ['software', 'embedded', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'A pointer is a variable that stores an object\'s address, while a reference is an alias, another name for an existing object.\nA reference must be initialised when declared, cannot be null and cannot be reseated: assigning to it assigns to the object. A pointer can be null, can point elsewhere later and supports arithmetic. So I use references when the object must exist, and pointers when null is meaningful or I need to reseat.',
      he: 'pointer הוא משתנה שמחזיק כתובת של אובייקט, ואילו reference הוא alias, שם נוסף לאובייקט קיים.\nאת ה-reference חייבים לאתחל בהצהרה, הוא לא יכול להיות null ואי אפשר לקשור אותו מחדש: השמה אליו היא השמה לאובייקט עצמו. pointer יכול להיות null, אפשר לכוון אותו למקום אחר ויש לו אריתמטיקה. לכן משתמשים ב-reference כשהאובייקט חייב להתקיים, וב-pointer כש-null הוא ערך משמעותי או כשצריך לכוון מחדש.',
    },
    example: {
      en: 'void swap(int& a, int& b) is cleaner than the pointer version: callers cannot pass null and the body needs no dereferencing. A tree search returns a pointer, because nullptr means not found.',
      he: 'void swap(int& a, int& b) נקייה יותר מהגרסה עם מצביעים: אי אפשר להעביר null והגוף לא צריך dereference. חיפוש בעץ מחזיר pointer, כי nullptr אומר \'לא נמצא\'.',
    },
    keyPoints: [
      {
        en: 'API guideline: const T& for input, T& for required output, T* when optional, smart pointers for ownership.',
        he: 'כלל לתכנון API: const T& לקלט, T& לפלט שחייב להתקיים, T* כשהערך אופציונלי, smart pointers לבעלות.',
      },
      {
        en: 'References can dangle too, for example returning a reference to a local variable.',
        he: 'גם references יכולים להיות dangling, למשל החזרת reference למשתנה מקומי.',
      },
      {
        en: 'Under the hood a reference is usually implemented as a pointer, but the language gives it alias semantics.',
        he: 'מאחורי הקלעים reference ממומש בדרך כלל כמו pointer, אבל השפה נותנת לו סמנטיקה של alias.',
      },
      {
        en: 'A const reference bound to a temporary extends that temporary\'s lifetime.',
        he: 'const reference שנקשר ל-temporary מאריך את חיי ה-temporary.',
      },
    ],
    extras: [
      {
        en: 'There is no reference to a reference, no array of references and no reference arithmetic; pointers allow pointer-to-pointer.',
        he: 'אין reference ל-reference, אין מערך של references ואין אריתמטיקה על reference; ב-pointer יש גם pointer ל-pointer.',
      },
      {
        en: 'Pointers are the natural choice when walking through memory, such as iterating over a buffer.',
        he: 'pointer הוא הבחירה הטבעית כשעוברים על זיכרון, למשל לולאה על buffer.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `int a = 1, b = 2;

int& ref = a;      // alias for a: must be initialised, cannot be re-bound
ref = 5;           // a is now 5

int* ptr = &a;     // holds an address
ptr = &b;          // can point somewhere else
*ptr = 7;          // b is now 7
ptr = nullptr;     // can be "nothing"; a reference cannot`,
      },
    ],
  },
  {
    id: 'q-smart-pointers',
    text: {
      en: 'What are smart pointers? Compare unique_ptr and shared_ptr.',
      he: 'מהם מצביעים חכמים? השוו בין unique_ptr ל-shared_ptr.',
    },
    topicId: 'cpp',
    roleIds: ['software', 'embedded'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'Smart pointers are RAII wrappers that own a heap object and delete it automatically in their destructor, so there is no manual delete and no leak even when an exception is thrown.\nunique_ptr means exclusive ownership: it is move-only and has essentially no overhead, so it is the default. shared_ptr means shared ownership through an atomic reference count in a control block, and the object is deleted when the last copy goes away. weak_ptr observes without owning and breaks cycles.',
      he: 'Smart pointers הם עטיפות RAII שמחזיקות אובייקט על ה-heap ומוחקות אותו אוטומטית ב-destructor, כך שאין delete ידני ואין דליפה גם כשנזרקת exception.\nunique_ptr הוא בעלות בלעדית: אפשר רק להעביר אותו (move) והוא כמעט בלי תקורה, ולכן הוא ברירת המחדל. shared_ptr הוא בעלות משותפת דרך מונה הפניות אטומי ב-control block, והאובייקט נמחק כשהעותק האחרון נעלם. weak_ptr צופה בלי בעלות ושובר מעגלים.',
    },
    example: {
      en: 'A factory returns unique_ptr<Sensor>, so the caller clearly owns it, and it can be converted to shared_ptr later if sharing is needed. A child holds a weak_ptr back to its parent to avoid a cycle.',
      he: 'factory מחזיר unique_ptr<Sensor>, כך שברור מי הבעלים, ואפשר להמיר אותו ל-shared_ptr אם בהמשך צריך לחלוק אותו. ילד מחזיק weak_ptr להורה שלו כדי למנוע מעגל.',
    },
    keyPoints: [
      {
        en: 'Start from ownership: who is responsible for freeing the object.',
        he: 'להתחיל מבעלות: מי אחראי לשחרר את האובייקט.',
      },
      {
        en: 'shared_ptr costs a control block, two-pointer size and an atomic increment and decrement per copy.',
        he: 'ל-shared_ptr יש מחיר: control block, גודל של שני מצביעים, והגדלה והקטנה אטומית של המונה בכל עותק.',
      },
      {
        en: 'Cycles of shared_ptr leak; weak_ptr with lock() solves it.',
        he: 'מעגל של shared_ptr דולף; weak_ptr עם lock() פותר את זה.',
      },
      {
        en: 'Prefer make_unique and make_shared, and never wrap the same raw pointer in two shared_ptrs.',
        he: 'להעדיף make_unique ו-make_shared, ולעולם לא לעטוף את אותו מצביע גולמי בשני shared_ptr.',
      },
    ],
    extras: [
      {
        en: 'The reference count is thread-safe, but access to the pointed-to object is not.',
        he: 'מונה ההפניות הוא thread-safe, אבל הגישה לאובייקט עצמו לא.',
      },
      {
        en: 'make_shared puts the object and the control block in a single allocation.',
        he: 'make_shared שם את האובייקט ואת ה-control block בהקצאה אחת.',
      },
      {
        en: 'Use enable_shared_from_this when an object needs a shared_ptr to itself.',
        he: 'משתמשים ב-enable_shared_from_this כשאובייקט צריך shared_ptr לעצמו.',
      },
      {
        en: 'weak_ptr also suits caches: lock() returns a shared_ptr only if the object still exists.',
        he: 'weak_ptr מתאים גם ל-caches: lock() מחזיר shared_ptr רק אם האובייקט עדיין קיים.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `#include <memory>

auto owner = std::make_unique<Widget>();     // single owner, freed automatically
// auto copy = owner;                         // error: unique_ptr is move-only
auto moved = std::move(owner);               // ownership transferred, owner is now null

auto shared1 = std::make_shared<Widget>();   // reference count = 1
auto shared2 = shared1;                      // reference count = 2
shared1.reset();                             // count = 1, the Widget is still alive
// shared2 goes out of scope -> count = 0 -> the Widget is destroyed`,
      },
    ],
  },
  {
    id: 'q-rule-of-five',
    text: { en: 'What is the Rule of Three / Rule of Five?', he: 'מהו Rule of Three / Rule of Five?' },
    topicId: 'cpp',
    roleIds: ['software', 'embedded'],
    type: 'conceptual',
    difficulty: 'hard',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'The Rule of Three says that if a class needs a custom destructor, copy constructor or copy assignment, it needs all three, because it manages a resource like raw memory or a file handle. C++11 adds the move constructor and move assignment, making it the Rule of Five.\nThe reason is that the compiler-generated copy only copies the pointer, so two objects free the same memory. The modern advice is the Rule of Zero: let RAII members manage resources.',
      he: 'Rule of Three אומר שאם מחלקה צריכה destructor, copy constructor או copy assignment משלה, היא צריכה את שלושתם, כי היא מנהלת משאב כמו זיכרון גולמי או file handle. C++11 מוסיפה move constructor ו-move assignment, וכך זה הופך ל-Rule of Five.\nהסיבה היא שההעתקה שהקומפיילר מייצר מעתיקה רק את המצביע, ואז שני אובייקטים משחררים את אותו זיכרון. ההמלצה המודרנית היא Rule of Zero: לתת לחברי RAII לנהל את המשאבים.',
    },
    example: {
      en: 'A Buffer class owns a char* from new[]. Copying it needs a new allocation and a deep copy, while moving it just steals the pointer and leaves the source as nullptr.',
      he: 'מחלקת Buffer מחזיקה char* שהוקצה עם new[]. העתקה שלה צריכה הקצאה חדשה ו-deep copy, ואילו move פשוט לוקח את המצביע ומשאיר את המקור עם nullptr.',
    },
    keyPoints: [
      {
        en: 'Declaring a destructor or a copy operation suppresses the implicit moves, so moves silently become copies.',
        he: 'הצהרה על destructor או על פעולת העתקה מבטלת את יצירת ה-move, וההעברות הופכות בשקט להעתקות.',
      },
      {
        en: 'Mark move operations noexcept, otherwise std::vector copies instead of moving when it reallocates.',
        he: 'לסמן את פעולות ה-move כ-noexcept, אחרת std::vector יעתיק במקום להעביר כשהוא מקצה מחדש.',
      },
      {
        en: 'Handle self-assignment; copy-and-swap does it safely and gives the strong exception guarantee.',
        he: 'לטפל בהשמה עצמית; copy-and-swap עושה את זה בבטחה ונותן strong exception guarantee.',
      },
      {
        en: 'A moved-from object must stay valid and destructible, typically empty.',
        he: 'אובייקט שהעבירו ממנו חייב להישאר תקין וניתן להריסה, בדרך כלל ריק.',
      },
    ],
    extras: [
      {
        en: 'If you must write one special member, declare all five explicitly, using = default or = delete.',
        he: 'אם בכל זאת כותבים אחת מהפונקציות המיוחדות, מצהירים על כל החמש במפורש, עם = default או = delete.',
      },
      {
        en: 'Good Rule of Zero members are std::vector, std::string and std::unique_ptr.',
        he: 'חברים טובים ל-Rule of Zero הם std::vector, std::string ו-std::unique_ptr.',
      },
      {
        en: 'Move assignment must release its own resource before taking the source\'s.',
        he: 'move assignment חייב לשחרר את המשאב שלו לפני שהוא לוקח את של המקור.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `class Buffer {
    char* data; size_t size;
public:
    explicit Buffer(size_t n) : data(new char[n]), size(n) {}
    ~Buffer() { delete[] data; }                                   // 1. destructor

    Buffer(const Buffer& o) : data(new char[o.size]), size(o.size) // 2. copy ctor
    { std::copy(o.data, o.data + size, data); }
    Buffer& operator=(Buffer o) {                                  // 3. copy assign (copy-and-swap)
        std::swap(data, o.data); std::swap(size, o.size); return *this;
    }
    Buffer(Buffer&& o) noexcept : data(o.data), size(o.size)        // 4. move ctor
    { o.data = nullptr; o.size = 0; }
    Buffer& operator=(Buffer&& o) noexcept {                       // 5. move assign
        std::swap(data, o.data); std::swap(size, o.size); return *this;
    }
};
// Rule of Zero alternative:  std::vector<char> data;   -> nothing to write`,
      },
    ],
  },

  // ---------- C / Embedded ----------
  {
    id: 'q-volatile',
    text: {
      en: 'What does the `volatile` keyword do in C and when is it needed?',
      he: 'מה עושה מילת המפתח volatile ב-C ומתי צריך אותה?',
    },
    topicId: 'c',
    roleIds: ['embedded', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'volatile tells the compiler that a variable can change, or that accessing it has side effects, outside the code it can see, so every read and write must really happen and cannot be optimised away or cached in a register.\nYou need it for memory-mapped hardware registers and for flags shared between an ISR and the main loop. It does not make operations atomic and it is not a thread synchronization tool; for threads use atomics and mutexes.',
      he: 'volatile אומר לקומפיילר שמשתנה יכול להשתנות, או שלגישה אליו יש תופעות לוואי, מחוץ לקוד שהוא רואה, ולכן כל קריאה וכתיבה חייבות לקרות באמת, ואסור לבטל אותן באופטימיזציה או לשמור את הערך ברגיסטר.\nצריך את זה לרגיסטרים של חומרה שממופים לזיכרון ולדגלים שמשותפים בין ISR ללולאה הראשית. זה לא הופך פעולות לאטומיות וזה לא כלי לסנכרון בין threads; בשביל threads משתמשים ב-atomics וב-mutex.',
    },
    example: {
      en: 'The main loop waits with while (!data_ready); and a UART ISR sets data_ready = 1. Without volatile, an optimised build reads the flag once and spins forever.',
      he: 'הלולאה הראשית ממתינה עם while (!data_ready); ו-ISR של UART מציב data_ready = 1. בלי volatile, build עם אופטימיזציות קורא את הדגל פעם אחת ונתקע לנצח.',
    },
    keyPoints: [
      {
        en: 'count++ on a volatile is still read-modify-write; protect it by briefly disabling interrupts or using atomics.',
        he: 'count++ על volatile הוא עדיין read-modify-write; מגינים עליו בכיבוי קצר של פסיקות או עם atomics.',
      },
      {
        en: 'The three classic uses: memory-mapped registers, ISR-shared variables, and locals across setjmp/longjmp.',
        he: 'שלושת השימושים הקלאסיים: רגיסטרים ממופים לזיכרון, משתנים משותפים עם ISR, ומשתנים מקומיים סביב setjmp/longjmp.',
      },
      {
        en: 'Unlike Java\'s volatile, C/C++ volatile gives no inter-thread visibility or ordering guarantees.',
        he: 'בניגוד ל-volatile של Java, ב-C/C++ volatile לא נותן הבטחות של נראות או סדר בין threads.',
      },
      {
        en: 'Know the placement: volatile uint32_t *reg (the data is volatile) vs uint32_t * volatile reg (the pointer).',
        he: 'להכיר את המיקום: volatile uint32_t *reg (הנתון הוא volatile) לעומת uint32_t * volatile reg (המצביע עצמו).',
      },
    ],
    extras: [
      {
        en: 'const volatile makes sense for a read-only hardware register: your code cannot write it, but the hardware changes it.',
        he: 'const volatile הגיוני לרגיסטר חומרה לקריאה בלבד: הקוד לא כותב אליו, אבל החומרה משנה אותו.',
      },
      {
        en: 'For DMA buffers volatile does not handle the data cache; you still need cache clean or invalidate operations.',
        he: 'בבאפרים של DMA, volatile לא מטפל ב-data cache, ועדיין צריך פעולות clean או invalidate.',
      },
      {
        en: 'Every volatile access goes to memory, so apply it only to the specific variables that need it.',
        he: 'כל גישה ל-volatile הולכת לזיכרון, ולכן שמים אותו רק על המשתנים שבאמת צריכים.',
      },
      {
        en: 'A data register where each read pops a byte from a FIFO is a case where even an unused read must not be removed.',
        he: 'data register שכל קריאה ממנו שולפת byte מ-FIFO הוא מקרה שבו אסור למחוק אפילו קריאה שהתוצאה שלה לא בשימוש.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `#define STATUS_REG (*(volatile uint32_t *)0x40021000)

volatile int data_ready = 0;       /* written by the ISR, read by main */

void UART_IRQHandler(void) {
    data_ready = 1;
}

int main(void) {
    while (!data_ready) {          /* without volatile the compiler may load   */
        /* wait */                 /* data_ready once and spin here forever   */
    }
    while (STATUS_REG & 0x1) { }   /* hardware register: must be re-read each time */
}`,
      },
    ],
  },
  {
    id: 'q-static-c',
    text: {
      en: 'What does `static` mean in C for a global variable versus a local variable?',
      he: 'מה המשמעות של static ב-C עבור משתנה גלובלי לעומת משתנה מקומי?',
    },
    topicId: 'c',
    roleIds: ['embedded', 'software', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'In C, static means two different things. On a global variable or function it changes linkage: the name becomes visible only inside that .c file. On a local variable it changes storage duration: the variable lives for the whole program, in .data or .bss rather than on the stack, is initialised once and keeps its value between calls.\nFile-level static is C\'s main tool for encapsulation and for avoiding name clashes at link time.',
      he: 'ב-C למילה static יש שתי משמעויות שונות. על משתנה גלובלי או פונקציה היא משנה את ה-linkage: השם נראה רק בתוך קובץ ה-.c הזה. על משתנה מקומי היא משנה את ה-storage duration: המשתנה חי לאורך כל התוכנית, ב-.data או ב-.bss ולא על ה-stack, מאותחל פעם אחת ושומר את הערך שלו בין קריאות.\nstatic ברמת הקובץ הוא הכלי המרכזי של C ל-encapsulation ולמניעת התנגשויות שמות ב-link.',
    },
    example: {
      en: 'A UART driver keeps its ring buffer and helpers static in uart.c, so other modules use only uart.h. A next_id() function with a static local counter returns 1, 2, 3 on successive calls.',
      he: 'driver של UART מחזיק את ה-ring buffer ואת פונקציות העזר שלו כ-static בתוך uart.c, כך שמודולים אחרים משתמשים רק ב-uart.h. פונקציה next_id() עם מונה static מקומי מחזירה 1, 2, 3 בקריאות עוקבות.',
    },
    keyPoints: [
      {
        en: 'Use the right terms: linkage for globals and functions, storage duration for locals.',
        he: 'להשתמש במונחים הנכונים: linkage עבור גלובליים ופונקציות, storage duration עבור מקומיים.',
      },
      {
        en: 'For a global, the lifetime was already the whole program; only the visibility changes.',
        he: 'במשתנה גלובלי משך החיים היה ממילא כל התוכנית; רק הנראות משתנה.',
      },
      {
        en: 'Static locals make a function non-reentrant: risky with ISRs, recursion and threads.',
        he: 'משתנה static מקומי הופך פונקציה ללא reentrant: מסוכן עם ISR, רקורסיה ו-threads.',
      },
      {
        en: 'Anything not declared in the header should be static by default.',
        he: 'כל מה שלא מוצהר ב-header צריך להיות static כברירת מחדל.',
      },
    ],
    extras: [
      {
        en: 'In C the initialiser of a static local must be a constant expression.',
        he: 'ב-C ערך האתחול של משתנה static מקומי חייב להיות ביטוי קבוע.',
      },
      {
        en: 'In C++ static also marks a class member shared by all objects.',
        he: 'ב-C++ static מסמן גם member של מחלקה שמשותף לכל האובייקטים.',
      },
      {
        en: 'Since C++11, initialization of a function-local static is thread-safe.',
        he: 'מאז C++11, האתחול של static מקומי בפונקציה הוא thread-safe.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `static int counter = 0;                /* file scope: invisible to other .c files */

static int helper(void) { return 42; } /* function private to this file */

int next_id(void) {
    static int id = 0;                 /* initialised once, keeps its value between calls */
    return ++id;                       /* 1, 2, 3, ... */
}`,
      },
    ],
  },
  {
    id: 'q-interrupt',
    text: {
      en: 'What is an interrupt and what is an ISR? What should you avoid doing inside one?',
      he: 'מהי פסיקה (interrupt) ומהו ISR? ממה צריך להימנע בתוכו?',
    },
    topicId: 'hardware',
    roleIds: ['embedded'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'An interrupt is a signal, usually from hardware like a timer, UART or GPIO pin, that makes the CPU pause its current code and jump to a handler, the interrupt service routine or ISR. The CPU saves context, finds the ISR in the vector table, runs it and then resumes.\nInside an ISR, avoid anything slow or blocking: delays, waiting on a mutex or queue, printf and malloc. Do the minimum, clear the flag and defer the real work to a task.',
      he: 'פסיקה (interrupt) היא אות, בדרך כלל מהחומרה כמו timer, UART או פין GPIO, שגורם למעבד לעצור את הקוד הנוכחי ולקפוץ ל-handler, שגרת הטיפול בפסיקה, ISR. המעבד שומר context, מוצא את ה-ISR ב-vector table, מריץ אותו ואז ממשיך מאיפה שעצר.\nבתוך ISR נמנעים מכל דבר איטי או חוסם: delays, המתנה על mutex או תור, printf ו-malloc. עושים את המינימום, מנקים את הדגל ודוחים את העבודה האמיתית למשימה.',
    },
    example: {
      en: 'A UART receive interrupt fires per byte: the ISR reads the data register, pushes the byte into a ring buffer and returns. The main loop or an RTOS task parses the full message.',
      he: 'פסיקת קליטה של UART קופצת על כל byte: ה-ISR קורא את ה-data register, דוחף את ה-byte ל-ring buffer וחוזר. הלולאה הראשית או משימת RTOS מפענחת את ההודעה המלאה.',
    },
    keyPoints: [
      {
        en: 'Keep ISRs short to minimise interrupt latency for everything else; Linux calls this top half and bottom half.',
        he: 'לשמור על ISR קצר כדי למזער את ה-interrupt latency של כל השאר; ב-Linux זה נקרא top half ו-bottom half.',
      },
      {
        en: 'In an RTOS use only the FromISR APIs inside an ISR.',
        he: 'ב-RTOS משתמשים בתוך ISR רק בפונקציות FromISR.',
      },
      {
        en: 'Forgetting to clear the interrupt flag makes the ISR retrigger endlessly.',
        he: 'שכחה לנקות את דגל הפסיקה גורמת ל-ISR לקפוץ שוב ושוב בלי סוף.',
      },
      {
        en: 'Shared data needs volatile plus a critical section, because volatile alone is not atomic.',
        he: 'נתונים משותפים צריכים volatile ועוד critical section, כי volatile לבדו אינו אטומי.',
      },
    ],
    extras: [
      {
        en: 'On ARM Cortex-M the NVIC checks enable and priority, and the hardware automatically stacks R0 to R3, R12, LR, PC and xPSR.',
        he: 'ב-ARM Cortex-M ה-NVIC בודק שהפסיקה מאופשרת ואת העדיפות, והחומרה דוחפת אוטומטית ל-stack את R0 עד R3, R12, LR, PC ו-xPSR.',
      },
      {
        en: 'Be ready to discuss priorities and nesting, where a higher-priority interrupt preempts a running ISR.',
        he: 'להיות מוכנים לדבר על עדיפויות ועל nesting, כשפסיקה בעדיפות גבוהה יותר קוטעת ISR שרץ.',
      },
      {
        en: 'printf and malloc are slow and often non-reentrant, which is why they are dangerous inside an ISR.',
        he: 'printf ו-malloc איטיים ולרוב לא reentrant, ולכן הם מסוכנים בתוך ISR.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `volatile uint8_t button_pressed = 0;

void EXTI0_IRQHandler(void) {      /* ISR: keep it tiny */
    button_pressed = 1;            /* just set a flag */
    EXTI->PR = EXTI_PR_PR0;        /* clear the interrupt flag */
}

int main(void) {
    for (;;) {
        if (button_pressed) {      /* the heavy work happens here, not in the ISR */
            button_pressed = 0;
            handle_button();
        }
    }
}`,
      },
    ],
  },
  {
    id: 'q-mutex-semaphore',
    text: {
      en: 'What is the difference between a mutex and a semaphore?',
      he: 'מה ההבדל בין mutex לבין סמפור?',
    },
    topicId: 'os',
    roleIds: ['embedded', 'software', 'backend', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A mutex is a lock with an owner that protects a critical section; only the thread that locked it may unlock it. A semaphore is a counter with atomic take and give operations and no owner, used for signalling between tasks or limiting access to N resources.\nBecause a mutex has an owner, an RTOS can apply priority inheritance to prevent priority inversion. So use a mutex for mutual exclusion and a semaphore for signalling, for example from an ISR.',
      he: 'mutex הוא מנעול עם בעלים שמגן על קטע קריטי; רק ה-thread שנעל אותו רשאי לשחרר אותו. סמפור הוא מונה עם פעולות take ו-give אטומיות ובלי בעלים, שמשמש לאיתות בין משימות או להגבלת גישה ל-N משאבים.\nכיוון של-mutex יש בעלים, ה-RTOS יכול להפעיל priority inheritance ולמנוע priority inversion. לכן משתמשים ב-mutex להדדיות, ובסמפור לאיתות, למשל מתוך ISR.',
    },
    example: {
      en: 'A UART ISR gives a binary semaphore when a frame arrives, and the receive task blocks on it instead of polling. Two tasks writing to the same I2C bus share a mutex.',
      he: 'ISR של UART עושה give לסמפור בינארי כשמגיעה מסגרת, ומשימת הקליטה חוסמת עליו במקום לעשות polling. שתי משימות שכותבות לאותו bus של I2C חולקות mutex.',
    },
    keyPoints: [
      {
        en: 'A binary semaphore is not a mutex: no owner and no priority inheritance.',
        he: 'סמפור בינארי אינו mutex: אין לו בעלים ואין priority inheritance.',
      },
      {
        en: 'Explain priority inversion with the Mars Pathfinder resets in 1997, fixed by enabling priority inheritance.',
        he: 'להסביר priority inversion עם ה-resets של Mars Pathfinder ב-1997, שתוקנו בהפעלת priority inheritance.',
      },
      {
        en: 'Never take a mutex in an ISR; giving a semaphore with the FromISR API is the standard pattern.',
        he: 'לעולם לא לוקחים mutex בתוך ISR; give לסמפור עם פונקציית FromISR היא התבנית הסטנדרטית.',
      },
      {
        en: 'Holding several mutexes risks deadlock, so always lock them in a fixed order.',
        he: 'החזקה של כמה mutexes מסכנת ב-deadlock, ולכן נועלים תמיד בסדר קבוע.',
      },
    ],
    extras: [
      {
        en: 'A counting semaphore holds 0 to N, for example a pool of N buffers or connections.',
        he: 'counting semaphore מחזיק ערך בין 0 ל-N, למשל מאגר של N באפרים או חיבורים.',
      },
      {
        en: 'Priority inheritance temporarily raises the lock holder\'s priority so a high-priority task is not stuck behind a medium-priority one.',
        he: 'priority inheritance מעלה זמנית את העדיפות של מי שמחזיק את המנעול, כדי שמשימה בעדיפות גבוהה לא תיתקע מאחורי משימה בעדיפות בינונית.',
      },
      {
        en: 'In FreeRTOS, mutexes have priority inheritance and binary semaphores do not.',
        he: 'ב-FreeRTOS ל-mutex יש priority inheritance ולסמפור בינארי אין.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `/* FreeRTOS. Mutex: protect shared data; only the task that took it gives it back. */
xSemaphoreTake(data_mutex, portMAX_DELAY);
shared_buffer[i] = value;
xSemaphoreGive(data_mutex);

/* Binary semaphore: signal from an ISR to a task. */
void UART_IRQHandler(void) {
    BaseType_t woken = pdFALSE;
    xSemaphoreGiveFromISR(rx_semaphore, &woken);    /* "data arrived" */
}
void rx_task(void *arg) {
    for (;;) {
        xSemaphoreTake(rx_semaphore, portMAX_DELAY); /* sleeps until signalled */
        process_rx();
    }
}`,
      },
      {
        language: 'cpp',
        code: `std::mutex m;                            // mutex: one owner at a time
void add(std::vector<int>& v, int x) {
    std::lock_guard<std::mutex> lock(m);    // unlocked automatically at scope exit
    v.push_back(x);
}

std::counting_semaphore<3> slots(3);      // semaphore: up to 3 users at once (C++20)
void use_connection() {
    slots.acquire();
    /* ... */
    slots.release();                      // any thread may release
}`,
      },
    ],
  },
  {
    id: 'q-memory-layout',
    text: {
      en: 'Describe the memory layout of a C program (text, data, bss, heap, stack).',
      he: 'תארו את מבנה הזיכרון של תוכנית ב-C: אזורי text, data, bss, heap ו-stack ומה יש בכל אחד.',
    },
    topicId: 'c',
    roleIds: ['embedded', 'software', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'A C program\'s memory is split into segments by kind of data and lifetime. .text holds the code and .rodata the constants and string literals, both read-only. .data holds globals and statics initialised to non-zero, and .bss holds those that are zero or uninitialised. The heap serves malloc and free, and the stack holds locals, arguments and return addresses, one frame per call, typically growing downward.',
      he: 'הזיכרון של תוכנית C מחולק לסגמנטים לפי סוג הנתונים ומשך החיים. ב-.text יושב הקוד וב-.rodata הקבועים וה-string literals, ושניהם לקריאה בלבד. ב-.data יושבים משתנים גלובליים ו-static שאותחלו לערך שאינו אפס, וב-.bss אלה שאותחלו לאפס או לא אותחלו. ה-heap משרת את malloc ו-free, וה-stack מחזיק משתנים מקומיים, פרמטרים וכתובות חזרה, frame לכל קריאה, ובדרך כלל גדל כלפי מטה.',
    },
    example: {
      en: 'int g = 5 goes to .data, an uninitialised global int to .bss, a string literal\'s characters to .rodata, a local int to the stack, and malloc(100) returns heap memory.',
      he: 'int g = 5 הולך ל-.data, int גלובלי שלא אותחל ל-.bss, התווים של string literal ל-.rodata, int מקומי ל-stack, ו-malloc(100) מחזיר זיכרון מה-heap.',
    },
    keyPoints: [
      {
        en: '.bss takes no space in the image; the startup code simply zeroes it.',
        he: '.bss לא תופס מקום בקובץ ההרצה; קוד ה-startup פשוט מאפס אותו.',
      },
      {
        en: 'Startup code copies .data from flash to RAM, zeroes .bss, sets the stack pointer, then calls main.',
        he: 'קוד ה-startup מעתיק את .data מ-flash ל-RAM, מאפס את .bss, מגדיר את ה-stack pointer ואז קורא ל-main.',
      },
      {
        en: 'Static local variables live in .data or .bss, not on the stack.',
        he: 'משתנים static מקומיים יושבים ב-.data או ב-.bss, לא על ה-stack.',
      },
      {
        en: 'In embedded, watch for stack overflow and heap fragmentation, and avoid malloc in real-time code.',
        he: 'ב-embedded צריך להיזהר מ-stack overflow ומ-fragmentation של ה-heap, ולהימנע מ-malloc בקוד real-time.',
      },
    ],
    extras: [
      {
        en: 'On a microcontroller .text and .rodata live in flash, and .data\'s initial values are stored there too.',
        he: 'במיקרו-בקר .text ו-.rodata יושבים ב-flash, וגם ערכי ההתחלה של .data נשמרים שם.',
      },
      {
        en: 'Deep recursion or large local arrays can overflow the stack and silently corrupt neighbouring memory.',
        he: 'רקורסיה עמוקה או מערכים מקומיים גדולים יכולים לגרום ל-stack overflow שמשחית בשקט זיכרון סמוך.',
      },
      {
        en: 'Many safety-critical systems forbid malloc after initialisation and use static allocation or memory pools.',
        he: 'מערכות safety-critical רבות אוסרות malloc אחרי האתחול ומשתמשות בהקצאה סטטית או ב-memory pools.',
      },
      {
        en: 'The linker script decides where each section goes; the map file and the size tool show what used the memory.',
        he: 'ה-linker script קובע איפה כל section יושב; ה-map file והכלי size מראים מי צרך את הזיכרון.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `#include <stdlib.h>

int  initialised   = 5;         /* .data   */
int  uninitialised;             /* .bss    (zeroed at startup) */
const char *msg = "hi";         /* pointer in .data, "hi" in .rodata (flash) */

void f(void) {
    int local = 1;              /* stack   */
    int *p = malloc(100);       /* heap    */
    free(p);
}                               /* the code of f itself lives in .text */`,
      },
    ],
  },
  {
    id: 'q-dangling-pointer',
    text: {
      en: 'What is a dangling pointer and how do you avoid it?',
      he: 'מהו dangling pointer ואיך נמנעים ממנו?',
    },
    topicId: 'c',
    roleIds: ['embedded', 'software', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A dangling pointer still holds the address of memory whose lifetime has ended, because it was freed or the object went out of scope. Dereferencing it is undefined behaviour, and it often corrupts other data silently instead of crashing.\nTo avoid it, give every allocation one clear owner, never return the address of a local, set pointers to NULL after free, and in C++ use smart pointers. AddressSanitizer and Valgrind catch the rest.',
      he: 'dangling pointer הוא מצביע שעדיין מחזיק כתובת של זיכרון שזמן החיים שלו נגמר, כי הוא שוחרר או כי האובייקט יצא מה-scope. גישה דרכו היא undefined behaviour, ולרוב היא משחיתה נתונים אחרים בשקט במקום לקרוס.\nכדי להימנע: לתת לכל הקצאה בעלים אחד וברור, לא להחזיר כתובת של משתנה מקומי, לאפס מצביעים ל-NULL אחרי free, וב-C++ להשתמש ב-smart pointers. את מה שנשאר תופסים AddressSanitizer ו-Valgrind.',
    },
    example: {
      en: 'A function returns &local, and the caller reads it after the stack frame is gone. Or a pointer into a std::vector becomes invalid after push_back reallocates the storage.',
      he: 'פונקציה מחזירה &local, והקורא ניגש אליו אחרי שה-stack frame כבר נעלם. או מצביע לתוך std::vector שהופך ללא תקין אחרי ש-push_back מקצה מחדש את הזיכרון.',
    },
    keyPoints: [
      {
        en: 'List several causes beyond free: returned locals, aliases, and container or realloc reallocation.',
        he: 'למנות כמה גורמים מעבר ל-free: החזרת משתנה מקומי, aliases, והקצאה מחדש של קונטיינר או realloc.',
      },
      {
        en: 'Setting to NULL after free helps, but other copies of the pointer still dangle.',
        he: 'איפוס ל-NULL אחרי free עוזר, אבל עותקים אחרים של המצביע עדיין מצביעים לשום מקום.',
      },
      {
        en: 'The symptom often appears much later, sometimes only in release builds, because the memory gets reused.',
        he: 'התסמין מופיע לרוב הרבה אחר כך, לפעמים רק ב-release build, כי הזיכרון מוקצה מחדש למישהו אחר.',
      },
      {
        en: 'Distinguish dangling, wild (never initialised) and null pointers, and mention double free.',
        he: 'להבחין בין dangling, wild (לא אותחל מעולם) ו-null, ולהזכיר double free.',
      },
    ],
    extras: [
      {
        en: 'In C++, weak_ptr is the safe way to observe an object you do not own.',
        he: 'ב-C++, weak_ptr היא הדרך הבטוחה לצפות באובייקט שאינו בבעלותך.',
      },
      {
        en: 'Enable AddressSanitizer with -fsanitize=address.',
        he: 'מפעילים AddressSanitizer עם -fsanitize=address.',
      },
      {
        en: 'The cure for wild pointers is to always initialise pointers, to NULL if nothing else.',
        he: 'הפתרון ל-wild pointers הוא לאתחל תמיד מצביעים, ל-NULL אם אין משהו אחר.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `int *make_number(void) {
    int n = 42;
    return &n;          /* BUG: n dies when the function returns */
}

int *p = malloc(sizeof *p);
free(p);
/* *p = 1;  BUG: p is dangling, the memory may belong to someone else now */
p = NULL;               /* fix: null it out, so a later bug is a crash, not corruption */`,
      },
    ],
  },
  {
    id: 'q-count-set-bits',
    text: {
      en: 'Count the number of set bits (1s) in an integer.',
      he: 'ספרו כמה ביטים דלוקים (1) יש במספר שלם.',
    },
    details: {
      description: {
        en: 'Given a non-negative integer n, return how many bits in its binary representation are 1.',
        he: 'נתון מספר שלם לא שלילי n. החזירו כמה ביטים בייצוג הבינארי שלו דלוקים (שווים ל-1).',
      },
      examples: [
        {
          input: 'n = 11',
          output: '3',
          explanation: { en: '11 is 1011 in binary: three 1s.', he: '11 בבינארי הוא 1011: שלושה ביטים דלוקים.' },
        },
        {
          input: 'n = 128',
          output: '1',
          explanation: { en: '128 is 10000000 in binary: a single 1.', he: '128 בבינארי הוא 10000000: ביט דלוק אחד.' },
        },
      ],
      constraints: [
        { en: '0 ≤ n < 2^32', he: '0 ≤ n < 2^32' },
      ],
    },
    topicId: 'hardware',
    roleIds: ['embedded', 'software', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'I use Brian Kernighan\'s trick: n & (n - 1) clears the lowest set bit. So I loop while n is not zero, apply n &= n - 1 and increment a counter; the number of iterations equals the number of set bits.\nThat is O(k) time, where k is the number of set bits and at most 32 for a 32-bit integer, with O(1) extra space.',
      he: 'משתמשים בטריק של Brian Kernighan: n & (n - 1) מכבה את הביט הדלוק הנמוך ביותר. לכן רצים בלולאה כל עוד n שונה מאפס, מבצעים n &= n - 1 ומגדילים מונה; מספר האיטרציות שווה למספר הביטים הדלוקים.\nזה O(k) זמן, כש-k הוא מספר הביטים הדלוקים ולכל היותר 32 במספר של 32 ביט, ו-O(1) זיכרון נוסף.',
    },
    example: {
      en: 'For n = 11 (1011) the loop runs three times: 1010, 1000, then 0, so the answer is 3.',
      he: 'עבור n = 11 (1011) הלולאה רצה שלוש פעמים: 1010, 1000 ואז 0, ולכן התשובה היא 3.',
    },
    approach: [
      {
        en: 'Clarify: signed or unsigned, 32 or 64 bits, and confirm n = 0 returns 0.',
        he: 'להבהיר: signed או unsigned, 32 או 64 ביט, ולוודא ש-n = 0 מחזיר 0.',
      },
      {
        en: 'Brute force: check n & 1 and shift right until n is zero, up to 32 iterations.',
        he: 'Brute force: לבדוק n & 1 ולעשות shift ימינה עד ש-n מתאפס, עד 32 איטרציות.',
      },
      {
        en: 'Insight: n & (n - 1) removes exactly the lowest set bit, so we jump from one set bit to the next.',
        he: 'התובנה: n & (n - 1) מסיר בדיוק את הביט הדלוק הנמוך, כך שקופצים מביט דלוק אחד לבא.',
      },
      {
        en: 'Algorithm: while n is not zero, n &= n - 1 and count++; O(k) time, O(1) space.',
        he: 'האלגוריתם: כל עוד n שונה מאפס, n &= n - 1 ו-count++; O(k) זמן, O(1) זיכרון.',
      },
      {
        en: 'Test n = 11 (three iterations), n = 128 (one), n = 0, and the all-ones value.',
        he: 'לבדוק n = 11 (שלוש איטרציות), n = 128 (אחת), n = 0, וערך שכל הביטים בו דלוקים.',
      },
    ],
    keyPoints: [
      {
        en: 'Show why it works with a small example: 1100 & 1011 = 1000.',
        he: 'להראות למה זה עובד עם דוגמה קטנה: 1100 & 1011 = 1000.',
      },
      {
        en: 'Use unsigned in C: right-shifting a negative value is implementation-defined and can make a shift loop never end.',
        he: 'להשתמש ב-unsigned ב-C: shift ימינה של ערך שלילי מוגדר לפי המימוש ויכול לגרום ללולאת shift לא להסתיים.',
      },
      {
        en: 'Alternatives: a 256-entry byte lookup table, the SWAR parallel count, and the hardware POPCNT instruction.',
        he: 'חלופות: טבלת חיפוש של 256 ערכים לכל byte, ספירה מקבילית בשיטת SWAR, ופקודת POPCNT בחומרה.',
      },
      {
        en: 'Real uses: parity, Hamming distance as popcount of a XOR b, and counting active flags in a register.',
        he: 'שימושים אמיתיים: parity, Hamming distance כ-popcount של a XOR b, וספירת דגלים פעילים ברגיסטר.',
      },
    ],
    extras: [
      {
        en: 'In production use the built-in: std::popcount in C++20, Integer.bitCount in Java, int.bit_count in Python 3.10+.',
        he: 'בקוד אמיתי משתמשים בפונקציה המובנית: std::popcount ב-C++20, Integer.bitCount ב-Java, int.bit_count ב-Python 3.10 ומעלה.',
      },
      {
        en: 'In Java the Kernighan loop also works for negative ints, because it never shifts; it only clears bits until zero.',
        he: 'ב-Java הלולאה של Kernighan עובדת גם על int שלילי, כי אין בה shift; היא רק מכבה ביטים עד שמגיעים לאפס.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `int count_set_bits(unsigned int n) {
    int count = 0;
    while (n) {
        n &= n - 1;   /* clears the lowest set bit */
        count++;
    }
    return count;
}`,
      },
      {
        language: 'cpp',
        code: `int countSetBits(unsigned int n) {
    int count = 0;
    while (n) {
        n &= n - 1;  // clears the lowest set bit
        ++count;
    }
    return count;
    // C++20: return std::popcount(n);  (#include <bit>)
}`,
      },
      {
        language: 'java',
        code: `static int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
        n &= n - 1;  // clears the lowest set bit
        count++;
    }
    return count;
    // or: Integer.bitCount(n)
}`,
      },
      {
        language: 'python',
        code: `def count_set_bits(n: int) -> int:
    count = 0
    while n:
        n &= n - 1  # clears the lowest set bit
        count += 1
    return count
    # or: bin(n).count("1")  /  n.bit_count()  (Python 3.10+)`,
      },
    ],
  },
  {
    id: 'q-power-of-two',
    text: {
      en: 'Check whether an integer is a power of two using bit operations.',
      he: 'בדקו אם מספר שלם הוא חזקה של 2 באמצעות פעולות על ביטים.',
    },
    details: {
      description: {
        en: 'Given an integer n, return true if it is a power of two (1, 2, 4, 8, ...), otherwise false. Use bit operations rather than loops or division.',
        he: 'נתון מספר שלם n. החזירו true אם הוא חזקה של 2 (1, 2, 4, 8, ...), אחרת false. השתמשו בפעולות על ביטים ולא בלולאות או בחילוק.',
      },
      examples: [
        {
          input: 'n = 16',
          output: 'true',
          explanation: { en: '16 = 2^4; in binary 10000, a single set bit.', he: '16 = 2^4; בבינארי 10000, ביט דלוק יחיד.' },
        },
        {
          input: 'n = 12',
          output: 'false',
          explanation: { en: '12 is 1100 in binary: two set bits.', he: '12 בבינארי הוא 1100: שני ביטים דלוקים.' },
        },
      ],
      constraints: [
        { en: 'n may be zero or negative: neither is a power of two.', he: 'n יכול להיות אפס או שלילי: אף אחד מהם אינו חזקה של 2.' },
      ],
    },
    topicId: 'hardware',
    roleIds: ['embedded', 'software', 'student', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A positive power of two has exactly one set bit, and n & (n - 1) clears the lowest set bit, so the result is zero only if that bit was the only one. The check is n > 0 and (n & (n - 1)) == 0.\nThe n > 0 guard rejects zero and negative numbers. It runs in O(1) time and O(1) space.',
      he: 'לחזקה חיובית של 2 יש בדיוק ביט דלוק אחד, ו-n & (n - 1) מכבה את הביט הדלוק הנמוך, ולכן התוצאה אפס רק אם הוא היה היחיד. הבדיקה היא n > 0 וגם (n & (n - 1)) == 0.\nהתנאי n > 0 פוסל את האפס ואת המספרים השליליים. זה רץ ב-O(1) זמן וב-O(1) זיכרון.',
    },
    example: {
      en: '16 is 10000 and 15 is 01111, so 16 & 15 = 0 and 16 is a power of two. 12 is 1100 and 11 is 1011, so 12 & 11 = 1000, not zero.',
      he: '16 הוא 10000 ו-15 הוא 01111, ולכן 16 & 15 = 0 ו-16 הוא חזקה של 2. 12 הוא 1100 ו-11 הוא 1011, ולכן 12 & 11 = 1000, לא אפס.',
    },
    approach: [
      {
        en: 'Clarify: can n be zero or negative, and is it signed? Both zero and negatives return false.',
        he: 'להבהיר: האם n יכול להיות אפס או שלילי, והאם הוא signed? גם אפס וגם שליליים מחזירים false.',
      },
      {
        en: 'Brute force: divide by 2 while even and check you reach 1, which is O(log n).',
        he: 'Brute force: לחלק ב-2 כל עוד המספר זוגי ולבדוק שמגיעים ל-1, וזה O(log n).',
      },
      {
        en: 'Insight: a power of two has one set bit, and n & (n - 1) clears the lowest one.',
        he: 'התובנה: לחזקה של 2 יש ביט דלוק אחד, ו-n & (n - 1) מכבה את הנמוך ביותר.',
      },
      {
        en: 'Algorithm: return n > 0 and (n & (n - 1)) == 0; O(1) time and space.',
        he: 'האלגוריתם: להחזיר n > 0 וגם (n & (n - 1)) == 0; O(1) זמן וזיכרון.',
      },
      {
        en: 'Test 16 (true), 12 (false), 1 (true), 0 (false), a negative value and the minimum signed int.',
        he: 'לבדוק 16 (true), 12 (false), 1 (true), 0 (false), ערך שלילי והערך המינימלי של signed int.',
      },
    ],
    keyPoints: [
      {
        en: 'Handle zero explicitly: 0 & (0 - 1) is 0, the most common bug in this question.',
        he: 'לטפל באפס במפורש: 0 & (0 - 1) שווה 0, וזה הבאג הנפוץ ביותר בשאלה הזו.',
      },
      {
        en: 'The minimum signed value has only the sign bit set and passes the bit test, so require n > 0.',
        he: 'בטיפוס signed לערך המינימלי יש רק את ביט הסימן, והוא עובר את בדיקת הביטים, ולכן דורשים n > 0.',
      },
      {
        en: 'In C, == binds tighter than &, so write (n & (n - 1)) == 0 with parentheses.',
        he: 'ב-C האופרטור == קודם ל-&, ולכן כותבים (n & (n - 1)) == 0 עם סוגריים.',
      },
      {
        en: 'Power-of-two buffer sizes allow index & (size - 1) instead of the slower % size.',
        he: 'גודל buffer שהוא חזקה של 2 מאפשר index & (size - 1) במקום % size האיטי יותר.',
      },
    ],
    extras: [
      {
        en: 'With an unsigned type, n != 0 is enough as the guard.',
        he: 'בטיפוס unsigned מספיק התנאי n != 0.',
      },
      {
        en: 'C++20 offers std::has_single_bit for exactly this check.',
        he: 'ב-C++20 יש את std::has_single_bit בדיוק לבדיקה הזו.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `int is_power_of_two(unsigned int n) {
    return n != 0 && (n & (n - 1)) == 0;
}`,
      },
      {
        language: 'cpp',
        code: `bool isPowerOfTwo(unsigned int n) {
    return n != 0 && (n & (n - 1)) == 0;
    // C++20: return std::has_single_bit(n);
}`,
      },
      {
        language: 'java',
        code: `static boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}`,
      },
      {
        language: 'python',
        code: `def is_power_of_two(n: int) -> bool:
    return n > 0 and n & (n - 1) == 0`,
      },
    ],
  },
  {
    id: 'q-swap-no-temp',
    text: {
      en: 'Swap two integers without using a temporary variable.',
      he: 'החליפו בין שני מספרים שלמים בלי משתנה עזר.',
    },
    details: {
      description: {
        en: 'Given two integer variables a and b, exchange their values without declaring a third variable.',
        he: 'נתונים שני משתנים שלמים a ו-b. החליפו ביניהם את הערכים בלי להגדיר משתנה שלישי.',
      },
      rules: [
        { en: 'Explain what happens when a and b refer to the same memory location.', he: 'הסבירו מה קורה כאשר a ו-b מצביעים לאותו מקום בזיכרון.' },
      ],
      examples: [
        {
          input: 'a = 3, b = 8',
          output: 'a = 8, b = 3',
        },
      ],
    },
    topicId: 'hardware',
    roleIds: ['embedded', 'software', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Use the XOR swap: a ^= b; b ^= a; a ^= b. It works because XOR is its own inverse: x ^ x = 0 and x ^ 0 = x, so a^b combined with either original value gives back the other.\nGuard first: if both arguments share one memory location, the first step zeroes it, so return early on equal addresses. Time and extra space are O(1).',
      he: 'משתמשים ב-XOR swap: ‏a ^= b; b ^= a; a ^= b. זה עובד כי XOR הוא ההופכי של עצמו: x ^ x = 0 וגם x ^ 0 = x, ולכן a^b יחד עם אחד הערכים המקוריים מחזיר את השני.\nקודם שמים guard: אם שני הארגומנטים הם אותו מקום בזיכרון, הצעד הראשון מאפס אותו, ולכן יוצאים מוקדם כשהכתובות שוות. הזמן והזיכרון הנוסף O(1).',
    },
    example: {
      en: 'With a = 3 (011) and b = 5 (101): a ^= b makes a = 6 (110), b ^= a makes b = 3, and a ^= b makes a = 5. The values are swapped.',
      he: 'עם a = 3 ‏(011) ו-b = 5 ‏(101): אחרי a ^= b יוצא a = 6 ‏(110), אחרי b ^= a יוצא b = 3, ואחרי a ^= b יוצא a = 5. הערכים הוחלפו.',
    },
    approach: [
      {
        en: 'Clarify: which integer type, passed by pointer or reference, and can both arguments refer to the same variable?',
        he: 'לברר: איזה טיפוס שלם, האם מועבר כ-pointer או reference, והאם שני הארגומנטים יכולים להיות אותו משתנה?',
      },
      {
        en: 'Baseline: a normal swap needs a temporary, which is forbidden, so both values must live inside the two variables.',
        he: 'נקודת התחלה: swap רגיל צריך משתנה עזר, וזה אסור, אז שני הערכים חייבים לשבת בתוך שני המשתנים עצמם.',
      },
      {
        en: 'The add and subtract trick works mathematically but can overflow, so look for an operation reversible without carries.',
        he: 'הטריק של חיבור וחיסור עובד מתמטית אבל יכול לגלוש, אז מחפשים פעולה הפיכה בלי carry.',
      },
      {
        en: 'Insight: XOR undoes itself, so apply a ^= b, b ^= a, a ^= b after an equal-address guard.',
        he: 'התובנה: XOR מבטל את עצמו, אז מבצעים a ^= b, ‏b ^= a, ‏a ^= b אחרי בדיקה שהכתובות שונות.',
      },
      {
        en: 'O(1) time and space; test by tracing 3 and 5 bit by bit, equal values, zero, negatives and aliasing.',
        he: 'O(1) זמן וזיכרון. בודקים במעקב ביט-ביט על 3 ו-5, ערכים שווים, אפס, שליליים ו-aliasing.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why it works with the XOR identities, not just three memorized lines.',
        he: 'להסביר למה זה עובד דרך הזהויות של XOR, ולא רק לדקלם שלוש שורות.',
      },
      {
        en: 'Aliasing: equal addresses break it, equal values do not, so guard with an address check.',
        he: 'Aliasing: כתובות שוות שוברות את זה, ערכים שווים לא. לכן שמים בדיקת כתובות בהתחלה.',
      },
      {
        en: 'The add and subtract variant can overflow, and signed overflow in C/C++ is undefined behaviour.',
        he: 'גרסת החיבור והחיסור יכולה לגלוש, ו-signed overflow ב-C/C++ הוא undefined behaviour.',
      },
      {
        en: 'Show maturity: XOR swap is not faster on modern CPUs, so real code uses a temporary or std::swap.',
        he: 'להראות בגרות: XOR swap לא מהיר יותר במעבדים מודרניים, ובקוד אמיתי משתמשים במשתנה עזר או ב-std::swap.',
      },
    ],
    extras: [
      {
        en: 'Each XOR step depends on the previous one, while a temporary usually lives in a register or becomes a single exchange instruction.',
        he: 'כל צעד XOR תלוי בקודם, ואילו משתנה עזר יושב בדרך כלל ב-register או הופך לפקודת exchange אחת.',
      },
      {
        en: 'Java cannot swap two primitive parameters because they are copies, so swap inside an array or object. Python uses tuple unpacking: a, b = b, a.',
        he: 'ב-Java אי אפשר להחליף שני פרמטרים פרימיטיביים כי הם עותקים, ולכן מחליפים בתוך מערך או אובייקט. ב-Python יש tuple unpacking: ‏a, b = b, a.',
      },
      {
        en: 'Good test cases: equal values (5, 5), zero, negative numbers, and the same variable passed twice to show the guard.',
        he: 'מקרי בדיקה טובים: ערכים שווים (5, 5), אפס, מספרים שליליים, ואותו משתנה שמועבר פעמיים כדי להראות את ה-guard.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `void swap(int *a, int *b) {
    if (a == b) return;   /* XOR-swapping a value with itself zeroes it */
    *a ^= *b;
    *b ^= *a;
    *a ^= *b;
}`,
      },
      {
        language: 'cpp',
        code: `void swap(int& a, int& b) {
    if (&a == &b) return;
    a ^= b;
    b ^= a;
    a ^= b;
    // In real code prefer std::swap(a, b);
}`,
      },
      {
        language: 'java',
        code: `// Java passes primitives by value, so swap inside an array:
static void swap(int[] arr, int i, int j) {
    if (i == j) return;
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
}`,
      },
      {
        language: 'python',
        code: `def swap(a: int, b: int) -> tuple[int, int]:
    a ^= b
    b ^= a
    a ^= b
    return a, b
    # Idiomatic Python: a, b = b, a`,
      },
    ],
  },
  {
    id: 'q-endianness',
    text: {
      en: 'What is endianness? Write code that detects whether the machine is little-endian.',
      he: 'מהו Endianness? כתבו קוד שבודק אם המכונה היא little-endian או לא.',
    },
    details: {
      description: {
        en: 'Endianness is the order in which the bytes of a multi-byte value are stored in memory. Write a function that returns true when the machine stores the least significant byte first (little-endian).',
        he: 'Endianness הוא הסדר שבו הבתים של ערך בן כמה בתים נשמרים בזיכרון. כתבו פונקציה שמחזירה true כאשר המכונה שומרת את הבית הפחות משמעותי ראשון (little-endian).',
      },
      examples: [
        {
          input: 'The 32-bit value 0x01020304 stored at address 0x1000',
          output: 'little-endian: bytes 04 03 02 01\nbig-endian: bytes 01 02 03 04',
          explanation: { en: 'Reading the first byte tells you the order: 0x04 means little-endian.', he: 'קריאת הבית הראשון מגלה את הסדר: 0x04 פירושו little-endian.' },
        },
      ],
    },
    topicId: 'hardware',
    roleIds: ['embedded', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'Endianness is the order of the bytes of a multi-byte value in memory. Little-endian stores the least significant byte at the lowest address (x86, usually ARM), big-endian stores the most significant byte first (network byte order).\nTo detect it, store the unsigned int 1, view its address as unsigned char *, and read the first byte: 1 means little-endian, 0 means big-endian. Time and space are O(1).',
      he: 'Endianness הוא סדר הבתים של ערך רב-בתי בזיכרון. little-endian שומר את הבית הפחות משמעותי בכתובת הנמוכה ביותר (x86, ובדרך כלל ARM), ו-big-endian שומר קודם את הבית המשמעותי ביותר (network byte order).\nכדי לזהות, שומרים unsigned int עם הערך 1, מסתכלים על הכתובת שלו כ-unsigned char *, וקוראים את הבית הראשון: 1 פירושו little-endian, ו-0 פירושו big-endian. הזמן והזיכרון O(1).',
    },
    example: {
      en: 'The value 0x01020304 is stored as 04 03 02 01 on a little-endian x86 machine, and as 01 02 03 04 in big-endian network byte order.',
      he: 'הערך 0x01020304 נשמר כ-04 03 02 01 על מכונת x86 שהיא little-endian, וכ-01 02 03 04 ב-network byte order שהוא big-endian.',
    },
    approach: [
      {
        en: 'Clarify the definition by drawing 0x01020304 in both byte orders, and confirm the expected language.',
        he: 'לחדד את ההגדרה עם ציור של 0x01020304 בשני הסדרים, ולוודא באיזו שפה מצופה הפתרון.',
      },
      {
        en: 'Arithmetic cannot reveal it, because shifts work on values, so inspect the raw bytes of a stored integer.',
        he: 'אריתמטיקה לא תגלה את זה, כי shifts עובדים על ערכים, ולכן בודקים את הבתים הגולמיים של מספר שמור.',
      },
      {
        en: 'Key idea: store 1 in an unsigned int and read its first byte through unsigned char *; 1 means little-endian.',
        he: 'הרעיון המרכזי: לשמור 1 ב-unsigned int ולקרוא את הבית הראשון דרך unsigned char *. אם יוצא 1, זה little-endian.',
      },
      {
        en: 'Mention alternatives: a union, C++20 std::endian, Java ByteOrder.nativeOrder() and Python sys.byteorder.',
        he: 'להזכיר חלופות: union, ‏std::endian ב-C++20, ‏ByteOrder.nativeOrder() ב-Java ו-sys.byteorder ב-Python.',
      },
      {
        en: 'O(1) time and space; test on x86 (expect true) and, if possible, on a big-endian target or emulator.',
        he: 'O(1) זמן וזיכרון. בודקים על x86 (מצפים ל-true), ואם אפשר גם על מעבד big-endian או אמולטור.',
      },
    ],
    keyPoints: [
      {
        en: 'Network byte order is big-endian: use htons/htonl and ntohs/ntohl, and never assume the peer\'s byte order.',
        he: 'network byte order הוא big-endian: משתמשים ב-htons/htonl וב-ntohs/ntohl, ולא מניחים מה הסדר אצל הצד השני.',
      },
      {
        en: 'Endianness is about bytes, not bits, so shifts and masks like (x >> 8) & 0xFF are portable.',
        he: 'Endianness עוסק בבתים ולא בביטים, ולכן shifts ו-masks כמו ‏(x >> 8) & 0xFF הם portable.',
      },
      {
        en: 'Use unsigned char * for the byte view: char types may alias anything without breaking strict aliasing.',
        he: 'משתמשים ב-unsigned char * כדי לראות את הבתים: לטיפוסי char מותר לעשות alias לכל דבר בלי לשבור strict aliasing.',
      },
      {
        en: 'It matters only when memory is reinterpreted as bytes: network packets, binary file formats and hardware registers.',
        he: 'זה משנה רק כשמפרשים זיכרון כבתים: חבילות רשת, פורמטים בינאריים של קבצים ו-registers של חומרה.',
      },
    ],
    extras: [
      {
        en: 'C++20 std::endian::native answers at compile time, Java has ByteOrder.nativeOrder(), and Python has sys.byteorder.',
        he: 'ב-C++20 יש std::endian::native שעונה בזמן קומפילציה, ב-Java יש ByteOrder.nativeOrder(), וב-Python יש sys.byteorder.',
      },
      {
        en: 'A union of an integer and a byte array is another common way to look at the bytes.',
        he: 'union של מספר שלם ומערך בתים הוא עוד דרך נפוצה להסתכל על הבתים.',
      },
      {
        en: 'Embedded: a big-endian sensor or bus on a little-endian MCU needs byte swapping, often with __builtin_bswap32, and predefined macros allow a compile-time check.',
        he: 'ב-embedded: חיישן או bus שהם big-endian על MCU שהוא little-endian מחייבים היפוך בתים, לרוב עם __builtin_bswap32, ומאקרו מוגדרים מראש מאפשרים בדיקה בזמן קומפילציה.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `int is_little_endian(void) {
    unsigned int x = 1;
    return *(unsigned char *)&x == 1;   /* first byte holds the LSB */
}`,
      },
      {
        language: 'cpp',
        code: `bool isLittleEndian() {
    unsigned int x = 1;
    return *reinterpret_cast<unsigned char*>(&x) == 1;
    // C++20: return std::endian::native == std::endian::little;
}`,
      },
      {
        language: 'java',
        code: `import java.nio.ByteOrder;

static boolean isLittleEndian() {
    // The JVM hides byte order; ask the platform directly.
    return ByteOrder.nativeOrder() == ByteOrder.LITTLE_ENDIAN;
}`,
      },
      {
        language: 'python',
        code: `import sys

def is_little_endian() -> bool:
    return sys.byteorder == "little"`,
      },
    ],
  },

  // ---------- Operating systems ----------
  {
    id: 'q-process-thread',
    text: {
      en: 'Explain the difference between a process and a thread.',
      he: 'הסבירו את ההבדל בין תהליך (process) ל-Thread.',
    },
    topicId: 'os',
    roleIds: ['software', 'embedded', 'backend', 'devops', 'sysadmin', 'helpdesk', 'student', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 3,
    answer: {
      en: 'A process is a running program with its own isolated virtual address space and resources, such as memory, open files and sockets. A thread is a flow of execution inside a process, with its own stack, registers and program counter, and it shares the process\'s memory with the other threads.\nSo threads are cheaper to create and switch and share data easily, but one bad thread can crash the whole process. Processes are isolated and safer, but must communicate through IPC.',
      he: 'תהליך (process) הוא תוכנית רצה עם מרחב כתובות וירטואלי מבודד ומשאבים משלו, כמו זיכרון, קבצים פתוחים ו-sockets. ‏Thread הוא רצף ריצה בתוך תהליך, עם stack, ‏registers ו-program counter משלו, והוא חולק את הזיכרון של התהליך עם שאר ה-threads.\nלכן threads זולים יותר ליצירה ולהחלפה וחולקים מידע בקלות, אבל thread אחד בעייתי יכול להפיל את כל התהליך. תהליכים מבודדים ובטוחים יותר, אבל צריכים IPC כדי לתקשר.',
    },
    example: {
      en: 'Chrome runs tabs in separate processes, so one crashing page does not take down the browser. A game engine uses threads for rendering, physics and audio that work on the same data.',
      he: 'Chrome מריץ לשוניות בתהליכים נפרדים, כך שדף שקורס לא מפיל את כל הדפדפן. מנוע משחק משתמש ב-threads לרינדור, פיזיקה ואודיו שעובדים על אותם נתונים.',
    },
    keyPoints: [
      {
        en: 'Be precise: heap, globals, code and file descriptors are shared; stack, registers and program counter are per thread.',
        he: 'לדייק: heap, משתנים גלובליים, קוד ו-file descriptors משותפים. ‏stack, ‏registers ו-program counter הם לכל thread.',
      },
      {
        en: 'A thread context switch is cheaper: same address space, no page-table switch, warmer caches and TLB.',
        he: 'context switch בין threads זול יותר: אותו מרחב כתובות, בלי החלפת page tables, ‏cache ו-TLB חמים יותר.',
      },
      {
        en: 'Shared memory means race conditions, so threads need mutexes or atomics; processes use pipes, sockets or shared memory.',
        he: 'זיכרון משותף פירושו race conditions, ולכן threads צריכים mutex או atomics. תהליכים מתקשרים דרך pipes, ‏sockets או shared memory.',
      },
      {
        en: 'Mention fork() with copy-on-write: physical pages are copied only when one side writes.',
        he: 'להזכיר fork() עם copy-on-write: דפים פיזיים מועתקים רק כשאחד הצדדים כותב.',
      },
    ],
    extras: [
      {
        en: 'Creating a process means building a new address space and page tables; a thread needs only a stack and a kernel structure.',
        he: 'יצירת תהליך דורשת לבנות מרחב כתובות ו-page tables חדשים. ל-thread צריך רק stack ומבנה ב-kernel.',
      },
      {
        en: 'On Linux both are created with clone() and scheduled as tasks; the only difference is what they share.',
        he: 'בלינוקס שניהם נוצרים עם clone() ומתוזמנים כ-tasks, וההבדל היחיד הוא מה משותף.',
      },
      {
        en: 'In CPython the GIL stops threads from running bytecode in parallel: threads for I/O, multiprocessing for CPU-bound work.',
        he: 'ב-CPython ה-GIL מונע מ-threads להריץ bytecode במקביל: ‏threads ל-I/O, ו-multiprocessing לעבודה כבדת CPU.',
      },
      {
        en: 'Expect follow-ups on race conditions, mutex vs semaphore, and deadlock.',
        he: 'לצפות לשאלות המשך על race condition, ההבדל בין mutex ל-semaphore, ו-deadlock.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `#include <unistd.h>
#include <pthread.h>

pid_t pid = fork();                 /* new PROCESS: a copy of the whole address space */
if (pid == 0) { /* child: has its own copy of every variable */ }

void *worker(void *arg) { return NULL; }
pthread_t tid;
pthread_create(&tid, NULL, worker, NULL);   /* new THREAD: same address space, shares globals */
pthread_join(tid, NULL);`,
      },
      {
        language: 'python',
        code: `import threading, multiprocessing

counter = 0

def work():
    global counter
    for _ in range(100_000):
        counter += 1          # threads share memory: needs a lock to be correct

threads = [threading.Thread(target=work) for _ in range(4)]     # same process
for t in threads: t.start()
for t in threads: t.join()

procs = [multiprocessing.Process(target=work) for _ in range(4)]  # separate memory
for p in procs: p.start()
for p in procs: p.join()      # each process incremented its OWN counter`,
      },
    ],
  },
  {
    id: 'q-deadlock',
    text: { en: 'What is a deadlock and how can it be prevented?', he: 'מהו deadlock ואיך מונעים אותו?' },
    topicId: 'os',
    roleIds: ['software', 'embedded', 'backend', 'verification'],
    type: 'conceptual',
    difficulty: 'hard',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'A deadlock is when threads each hold a resource and wait for one held by another thread in the group, so none of them can ever continue. It needs all four Coffman conditions at once: mutual exclusion, hold and wait, no preemption and circular wait.\nTo prevent it, break one condition. The most common fix is lock ordering: give locks a global order and always acquire them in that order, which removes circular wait.',
      he: 'deadlock הוא מצב שבו כל thread מחזיק משאב ומחכה למשאב שמחזיק thread אחר בקבוצה, ולכן אף אחד מהם לא יכול להתקדם לעולם. הוא דורש שכל ארבעת תנאי Coffman יתקיימו יחד: mutual exclusion, ‏hold and wait, ‏no preemption ו-circular wait.\nכדי למנוע אותו שוברים תנאי אחד. הפתרון הנפוץ ביותר הוא סדר נעילה: נותנים למנעולים סדר גלובלי ונועלים תמיד לפיו, וכך circular wait לא יכול לקרות.',
    },
    example: {
      en: 'transfer(A, B) locks A then B while transfer(B, A) locks B then A, and both threads freeze. The fix: always lock the account with the lower ID first.',
      he: 'transfer(A, B) נועל A ואז B, ובמקביל transfer(B, A) נועל B ואז A, ושני ה-threads נתקעים. הפתרון: תמיד לנעול קודם את החשבון עם ה-ID הנמוך.',
    },
    keyPoints: [
      {
        en: 'Name all four Coffman conditions and stress that breaking any one of them is enough.',
        he: 'למנות את ארבעת תנאי Coffman ולהדגיש שמספיק לשבור אחד מהם.',
      },
      {
        en: 'Other fixes: std::scoped_lock to take locks together, or try_lock with a timeout and back-off, watching for livelock.',
        he: 'פתרונות נוספים: std::scoped_lock כדי לנעול יחד, או try_lock עם timeout ונסיגה, תוך זהירות מ-livelock.',
      },
      {
        en: 'Know the difference: deadlock is everyone blocked, livelock is busy retrying without progress, starvation is one thread never served.',
        he: 'לדעת את ההבדל: deadlock הוא כולם חסומים, livelock הוא ניסיונות חוזרים בלי התקדמות, ו-starvation הוא thread אחד שאף פעם לא מקבל את המשאב.',
      },
      {
        en: 'Debugging: a deadlocked process shows 0% CPU; dump all thread stacks with gdb or jstack to see who holds what.',
        he: 'ב-debug: תהליך ב-deadlock מראה 0% CPU. עושים dump לכל ה-stacks עם gdb או jstack כדי לראות מי מחזיק מה.',
      },
    ],
    extras: [
      {
        en: 'Avoidance checks each request in advance (Banker\'s algorithm); detection, as in databases, finds a cycle in a wait-for graph and aborts a victim transaction.',
        he: 'avoidance בודק כל בקשה מראש (Banker\'s algorithm). ‏detection, כמו במסדי נתונים, מוצא מעגל ב-wait-for graph ומבטל טרנזקציה אחת כקורבן.',
      },
      {
        en: 'Design it away: hold one lock at a time, keep critical sections short, or use lock-free structures or message passing.',
        he: 'אפשר לתכנן כך שזה לא יקרה: להחזיק מנעול אחד בכל פעם, לקצר critical sections, או להשתמש במבנים lock-free או ב-message passing.',
      },
      {
        en: 'In RTOS work, mention priority inversion, which is solved with priority-inheritance mutexes.',
        he: 'בעבודה עם RTOS כדאי להזכיר priority inversion, שנפתר עם mutex שתומך ב-priority inheritance.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `std::mutex a, b;

void thread1() { std::lock_guard<std::mutex> la(a); std::lock_guard<std::mutex> lb(b); }
void thread2() { std::lock_guard<std::mutex> lb(b); std::lock_guard<std::mutex> la(a); }
// Opposite order: thread1 holds a and waits for b, thread2 holds b and waits for a -> deadlock

// Fix 1: always lock in the same order (a then b) everywhere.
// Fix 2: lock both atomically:
void safe() { std::scoped_lock lock(a, b); }   // C++17, deadlock-free`,
      },
    ],
  },
  {
    id: 'q-stack-heap',
    text: {
      en: 'What is the difference between stack and heap memory?',
      he: 'מה ההבדל בין זיכרון המחסנית (stack) לזיכרון הערימה (heap)?',
    },
    topicId: 'os',
    roleIds: ['software', 'embedded', 'student', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'The stack is a per-thread LIFO region for function frames and local variables, managed automatically: allocating is just moving the stack pointer, and the memory is freed when the function returns. The heap is a shared region for dynamic allocations whose size and lifetime are decided at runtime, with malloc or new, and it lives until free, delete or a garbage collector releases it.\nThe stack is fast but small; the heap is flexible but slower.',
      he: 'ה-stack הוא אזור LIFO לכל thread, למסגרות של פונקציות ולמשתנים מקומיים, והוא מנוהל אוטומטית: הקצאה היא רק הזזה של ה-stack pointer, והזיכרון משתחרר כשהפונקציה חוזרת. ה-heap הוא אזור משותף להקצאות דינמיות שהגודל ומשך החיים שלהן נקבעים בזמן ריצה, עם malloc או new, והוא חי עד free, ‏delete או עד ש-garbage collector משחרר אותו.\nה-stack מהיר אבל קטן, וה-heap גמיש אבל איטי יותר.',
    },
    example: {
      en: 'Deep recursion can overflow the 8 MB main-thread stack on Linux, while a 1 GB buffer must come from the heap. Safety-critical embedded code following MISRA C forbids malloc, because heap fragmentation is unpredictable.',
      he: 'רקורסיה עמוקה יכולה לגלוש מה-stack של 8 MB של ה-thread הראשי בלינוקס, ואילו buffer של 1 GB חייב לבוא מה-heap. קוד embedded קריטי שעובד לפי MISRA C אוסר על malloc, כי פרגמנטציה של ה-heap לא צפויה.',
    },
    keyPoints: [
      {
        en: 'Stack allocation is fast: just a stack-pointer move, on contiguous memory that is hot in cache.',
        he: 'הקצאה על ה-stack מהירה: רק הזזה של ה-stack pointer, על זיכרון רציף שחם ב-cache.',
      },
      {
        en: 'One stack per thread, one heap per process, so heap allocators must be thread-safe.',
        he: 'stack אחד לכל thread ו-heap אחד לכל תהליך, ולכן ה-allocator של ה-heap חייב להיות thread-safe.',
      },
      {
        en: 'Classic bugs: dangling pointers to locals and stack overflow; on the heap, leaks, double free, use-after-free and fragmentation.',
        he: 'באגים קלאסיים: dangling pointer למשתנה מקומי ו-stack overflow, וב-heap דליפות, ‏double free, ‏use-after-free ופרגמנטציה.',
      },
      {
        en: 'Do not confuse the heap memory area with the heap data structure; they are unrelated.',
        he: 'לא לבלבל בין אזור הזיכרון heap למבנה הנתונים heap, אין ביניהם קשר.',
      },
    ],
    extras: [
      {
        en: 'Typical stack sizes: 8 MB for the Linux main thread, 1 MB on Windows, and often a few KB per task on embedded systems.',
        he: 'גדלי stack טיפוסיים: 8 MB ל-thread הראשי בלינוקס, 1 MB ב-Windows, ולפעמים רק כמה KB לכל task במערכות embedded.',
      },
      {
        en: 'malloc searches the allocator\'s free lists for a fitting block and sometimes asks the OS for more memory, which is why it is slower.',
        he: 'malloc מחפש בלוק מתאים ברשימות של ה-allocator ולפעמים מבקש עוד זיכרון ממערכת ההפעלה, ולכן הוא איטי יותר.',
      },
      {
        en: 'In Java and Python objects live on the heap and locals hold references; C++ RAII ties heap memory to a stack object\'s lifetime.',
        he: 'ב-Java וב-Python אובייקטים יושבים על ה-heap והמשתנים המקומיים מחזיקים references. ב-C++ ‏RAII קושר זיכרון ב-heap למשך החיים של אובייקט על ה-stack.',
      },
      {
        en: 'Embedded follow-up: how to size task stacks, and how stack canaries or watermarking detect overflows.',
        he: 'שאלת המשך ב-embedded: איך קובעים גודל stack לכל task, ואיך stack canaries או watermarking מזהים overflow.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `void f(void) {
    int on_stack[100];                          /* automatic: gone when f returns */
    int *on_heap = malloc(100 * sizeof(int));   /* lives until free() */
    /* ... */
    free(on_heap);                              /* forget this -> memory leak */
}                                               /* on_stack is released here, for free */`,
      },
    ],
  },
  {
    id: 'q-virtual-memory',
    text: { en: 'What is virtual memory?', he: 'מהו זיכרון וירטואלי?' },
    topicId: 'os',
    roleIds: ['software', 'embedded', 'sysadmin', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'Virtual memory gives every process its own private address space, which the OS and the CPU\'s MMU translate to physical RAM page by page, usually in 4 KB pages. Each process has a page table that maps virtual pages to physical frames, and the TLB caches recent translations.\nThis gives isolation between processes, sharing of libraries, and more memory than RAM: if a valid page is not in RAM, a page fault loads it from disk.',
      he: 'זיכרון וירטואלי נותן לכל תהליך מרחב כתובות פרטי משלו, שמערכת ההפעלה וה-MMU של המעבד מתרגמים ל-RAM הפיזי דף אחרי דף, בדרך כלל בדפים של 4 KB. לכל תהליך יש page table שממפה דפים וירטואליים ל-frames פיזיים, וה-TLB שומר תרגומים אחרונים.\nזה נותן בידוד בין תהליכים, שיתוף של ספריות, ויותר זיכרון מה-RAM: אם דף תקין לא נמצא ב-RAM, ‏page fault טוען אותו מהדיסק.',
    },
    example: {
      en: 'Two processes can both hold the pointer value 0x7ffd1000, and it points to completely different physical memory in each one.',
      he: 'שני תהליכים יכולים להחזיק את אותו ערך pointer, נגיד 0x7ffd1000, והוא מצביע אצל כל אחד לזיכרון פיזי אחר לגמרי.',
    },
    keyPoints: [
      {
        en: 'Use the right terms: page, frame, page table, MMU and TLB, and explain the TLB as a translation cache.',
        he: 'להשתמש במונחים הנכונים: page, ‏frame, ‏page table, ‏MMU ו-TLB, ולהסביר את ה-TLB כ-cache של תרגומים.',
      },
      {
        en: 'A page fault is normal and handled by the OS; a segmentation fault is an invalid access that gets SIGSEGV.',
        he: 'page fault הוא רגיל ומערכת ההפעלה מטפלת בו. ‏segmentation fault הוא גישה לא חוקית, והתהליך מקבל SIGSEGV.',
      },
      {
        en: 'Virtual memory is not just swap: isolation, sharing and copy-on-write matter even with no swap at all.',
        he: 'זיכרון וירטואלי הוא לא רק swap: בידוד, שיתוף ו-copy-on-write חשובים גם בלי swap בכלל.',
      },
      {
        en: 'Thrashing: when the working set exceeds RAM, the system spends its time paging; vmstat si/so reveals it.',
        he: 'thrashing: כשה-working set גדול מה-RAM, המערכת מבזבזת את הזמן על paging. העמודות si/so ב-vmstat חושפות את זה.',
      },
    ],
    extras: [
      {
        en: 'Page-table entries carry permission bits for read, write, execute and user or kernel access, which stops a process writing its own code.',
        he: 'ברשומות של ה-page table יש ביטים של הרשאות לקריאה, כתיבה, הרצה וגישת user או kernel, וכך תהליך לא יכול לכתוב על הקוד של עצמו.',
      },
      {
        en: 'Executables and memory-mapped files load lazily, and fork uses copy-on-write to share frames until someone writes.',
        he: 'קבצי הרצה וקבצים ממופים נטענים בעצלות, ו-fork משתמש ב-copy-on-write כדי לשתף frames עד שמישהו כותב.',
      },
      {
        en: 'Linux overcommits: malloc can succeed and the OOM killer can later kill the process when the pages are actually touched.',
        he: 'לינוקס עושה overcommit: ‏malloc יכול להצליח, וה-OOM killer יכול להרוג את התהליך אחר כך כשניגשים לדפים בפועל.',
      },
      {
        en: 'Huge pages (2 MB) reduce TLB misses, and many microcontrollers have only an MPU: protection without address translation.',
        he: 'huge pages ‏(2 MB) מצמצמים TLB misses, ולהרבה מיקרו-בקרים יש רק MPU: הגנה בלי תרגום כתובות.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `$ cat /proc/$$/maps            # the virtual address space of this shell
55d1c0400000-55d1c04a0000 r-xp  /usr/bin/bash     # code, read-only
55d1c06a0000-55d1c06c0000 rw-p  [heap]
7f3a2c000000-7f3a2c1c0000 r-xp  /usr/lib/libc.so.6   # shared with other processes
7ffd1e800000-7ffd1e821000 rw-p  [stack]

$ free -m                       # physical RAM vs swap (paged-out memory on disk)
              total   used   free
Mem:          15872   9123   6749
Swap:          2047    128   1919`,
      },
    ],
  },
  {
    id: 'q-active-directory',
    text: {
      en: 'What is Active Directory and what is it used for?',
      he: 'מהו Active Directory ולמה הוא משמש?',
    },
    topicId: 'os',
    roleIds: ['helpdesk', 'sysadmin'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Active Directory is Microsoft\'s directory service: a central, replicated database of users, computers, groups and policies in a Windows domain. It is used to authenticate users and decide what they may access.\nDomain controllers hold the database and replicate it, Kerberos handles logins, LDAP queries the directory, and Group Policy pushes settings such as password rules. After one login the user gets single sign-on to file shares, printers and apps according to group membership.',
      he: 'Active Directory הוא שירות ה-directory של מיקרוסופט: מסד נתונים מרכזי ומשוכפל של משתמשים, מחשבים, קבוצות ומדיניות בדומיין של Windows. משתמשים בו כדי לאמת משתמשים ולהחליט למה מותר להם לגשת.\nה-domain controllers מחזיקים את מסד הנתונים ומשכפלים אותו, Kerberos מטפל בהתחברות, LDAP משמש לשאילתות על ה-directory, ו-Group Policy דוחף הגדרות כמו מדיניות סיסמאות. אחרי התחברות אחת המשתמש מקבל single sign-on לתיקיות משותפות, מדפסות ואפליקציות לפי הקבוצות שלו.',
    },
    example: {
      en: 'A user keeps getting locked out after a password change because an old phone still tries the old password. You find the lockout source, unlock the account and remove the saved credential.',
      he: 'משתמש ננעל שוב ושוב אחרי החלפת סיסמה, כי טלפון ישן ממשיך לנסות את הסיסמה הישנה. מוצאים את מקור הנעילה, משחררים את החשבון ומוחקים את הסיסמה השמורה.',
    },
    keyPoints: [
      {
        en: 'Separate authentication (who you are, Kerberos) from authorization (what you may do, groups and ACLs).',
        he: 'להפריד בין authentication ‏(מי אתה, Kerberos) לבין authorization ‏(מה מותר לך, קבוצות ו-ACLs).',
      },
      {
        en: 'AD depends on DNS: most domain-join or slow-login problems come from a client not using the DC for DNS.',
        he: 'AD תלוי ב-DNS: רוב הבעיות בהצטרפות לדומיין או בהתחברות איטית נובעות מלקוח שלא משתמש ב-DC כשרת DNS.',
      },
      {
        en: 'Kerberos fails when the clock skew between client and DC exceeds 5 minutes by default.',
        he: 'Kerberos נכשל כשהפרש השעונים בין הלקוח ל-DC עולה על 5 דקות (ברירת המחדל).',
      },
      {
        en: 'Daily help-desk tasks: unlock accounts, reset passwords, manage groups, move computers between OUs, run gpupdate /force and gpresult /r.',
        he: 'משימות יומיומיות ב-helpdesk: לשחרר חשבונות, לאפס סיסמאות, לנהל קבוצות, להעביר מחשבים בין OUs, ולהריץ gpupdate /force ו-gpresult /r.',
      },
    ],
    extras: [
      {
        en: 'Objects are organized in OUs for delegation and policies; the domain is the main admin unit, and the forest is the real security boundary.',
        he: 'אובייקטים מאורגנים ב-OUs לצורך האצלת הרשאות ומדיניות. ה-domain הוא יחידת הניהול העיקרית, וה-forest הוא גבול האבטחה האמיתי.',
      },
      {
        en: 'Clients find domain controllers through DNS SRV records, and NTLM remains as a legacy fallback to Kerberos.',
        he: 'לקוחות מוצאים domain controllers דרך רשומות SRV ב-DNS, ו-NTLM נשאר כגיבוי ישן ל-Kerberos.',
      },
      {
        en: 'Assign permissions to groups, not individual users. The cloud counterpart is Microsoft Entra ID (formerly Azure AD), often synced with on-prem AD.',
        he: 'נותנים הרשאות לקבוצות ולא למשתמשים בודדים. המקבילה בענן היא Microsoft Entra ID (לשעבר Azure AD), שלרוב מסונכרן עם ה-AD המקומי.',
      },
      {
        en: 'AD is a prime attack target (pass-the-hash, Kerberoasting), so use least privilege and separate admin accounts.',
        he: 'AD הוא יעד תקיפה מרכזי (pass-the-hash, ‏Kerberoasting), ולכן עובדים עם least privilege וחשבונות ניהול נפרדים.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `# PowerShell on a domain-joined machine (typical help-desk tasks)
Get-ADUser -Identity dana.levi -Properties MemberOf    # who is this user, which groups
Unlock-ADAccount -Identity dana.levi                   # locked out after bad passwords
Set-ADAccountPassword -Identity dana.levi -Reset       # reset the password
Add-ADGroupMember -Identity "VPN-Users" -Members dana.levi
gpupdate /force                                        # re-apply Group Policy now`,
      },
    ],
  },

  // ---------- Linux / DevOps ----------
  {
    id: 'q-linux-permissions',
    text: {
      en: 'Explain Linux file permissions and what chmod 755 means.',
      he: 'הסבירו הרשאות קבצים בלינוקס ומה המשמעות של chmod 755.',
    },
    topicId: 'linux',
    roleIds: ['devops', 'sysadmin', 'helpdesk', 'backend', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Every Linux file has an owner, a group and three sets of permission bits: for the owner, for the group and for everyone else. Each set adds up read (4), write (2) and execute (1).\nSo chmod 755 means 7 = rwx for the owner, and 5 = r-x for the group and for others, which ls -l shows as -rwxr-xr-x. The owner can read, change and run the file; everyone else can read and run it but not change it.',
      he: 'לכל קובץ בלינוקס יש בעלים, קבוצה ושלוש קבוצות של ביטי הרשאה: לבעלים, לקבוצה ולכל השאר. כל קבוצה היא סכום של קריאה (4), כתיבה (2) והרצה (1).\nלכן chmod 755 אומר 7 = rwx לבעלים, ו-5 = r-x לקבוצה ולאחרים, וב-ls -l זה מופיע כ-‎-rwxr-xr-x. הבעלים יכול לקרוא, לשנות ולהריץ, וכל השאר יכולים לקרוא ולהריץ אבל לא לשנות.',
    },
    example: {
      en: 'Scripts and binaries usually get 755, regular files 644 (rw-r--r--), and an SSH private key 600, because ssh refuses a key that others can read.',
      he: 'סקריפטים וקבצי הרצה מקבלים בדרך כלל 755, קבצים רגילים 644 ‏(rw-r--r--), ומפתח SSH פרטי 600, כי ssh מסרב להשתמש במפתח שאחרים יכולים לקרוא.',
    },
    keyPoints: [
      {
        en: 'On a directory, r lists names, w creates or deletes entries, and x lets you enter it.',
        he: 'על תיקייה, r מציג את השמות, w מאפשר ליצור ולמחוק קבצים בה, ו-x מאפשר להיכנס אליה.',
      },
      {
        en: 'Convert both ways, for example 640 is rw-r-----, and use symbolic forms like chmod u+x or chmod go-w.',
        he: 'להמיר לשני הכיוונים, למשל 640 הוא rw-r-----, ולהשתמש גם בצורה סימבולית כמו chmod u+x או chmod go-w.',
      },
      {
        en: 'Never fix a permission problem with chmod 777; fix the owner or group instead.',
        he: 'אף פעם לא לפתור בעיית הרשאות עם chmod 777. מתקנים את הבעלים או את הקבוצה.',
      },
      {
        en: 'The kernel applies exactly one class: owner if you own the file, else group, else others.',
        he: 'ה-kernel מפעיל בדיוק קבוצה אחת: owner אם אתה הבעלים, אחרת group, ואחרת others.',
      },
    ],
    extras: [
      {
        en: 'chown and chgrp change ownership, and umask (often 022) sets defaults, so new files get 644 and new directories 755.',
        he: 'chown ו-chgrp משנים בעלות, ו-umask (לרוב 022) קובע ברירות מחדל, כך שקבצים חדשים מקבלים 644 ותיקיות חדשות 755.',
      },
      {
        en: 'Special bits: setuid runs a program with its owner\'s rights, as passwd does, setgid on a directory passes its group to new files, and the sticky bit protects /tmp.',
        he: 'ביטים מיוחדים: setuid מריץ תוכנית עם ההרשאות של הבעלים שלה, כמו passwd. ‏setgid על תיקייה מוריש את הקבוצה לקבצים חדשים, וה-sticky bit מגן על /tmp.',
      },
      {
        en: 'Deleting a file depends on write permission on the directory, not on the file itself.',
        he: 'מחיקת קובץ תלויה בהרשאת כתיבה על התיקייה, ולא על הקובץ עצמו.',
      },
      {
        en: 'When the basic bits are not enough, ACLs (setfacl, getfacl) grant access to specific extra users or groups.',
        he: 'כשהביטים הבסיסיים לא מספיקים, ACLs ‏(setfacl, ‏getfacl) נותנים גישה למשתמשים או קבוצות נוספים ספציפיים.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `$ ls -l script.sh
-rw-r--r-- 1 dana dev 120 Sep 10 09:00 script.sh
#  owner rw-   group r--   others r--

$ chmod 755 script.sh          # 7=rwx  5=r-x  5=r-x
$ chmod u+x,go-w script.sh     # same idea, symbolic form
$ ls -l script.sh
-rwxr-xr-x 1 dana dev 120 Sep 10 09:00 script.sh`,
      },
    ],
  },
  {
    id: 'q-container-vm',
    text: {
      en: 'What is the difference between a container and a virtual machine?',
      he: 'מה ההבדל בין קונטיינר למכונה וירטואלית?',
    },
    topicId: 'linux',
    roleIds: ['devops', 'backend', 'sysadmin', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A virtual machine virtualizes hardware and runs a complete guest OS with its own kernel on top of a hypervisor. A container is an isolated group of processes that shares the host\'s kernel, isolated with namespaces and limited with cgroups.\nBecause of the shared kernel, containers start in under a second and are much smaller, while VMs give stronger isolation and can run any operating system.',
      he: 'מכונה וירטואלית מדמה חומרה ומריצה מערכת הפעלה אורחת שלמה עם kernel משלה, מעל hypervisor. קונטיינר הוא קבוצה מבודדת של תהליכים שחולקת את ה-kernel של המארח, מבודדת עם namespaces ומוגבלת במשאבים עם cgroups.\nבגלל ה-kernel המשותף, קונטיינרים עולים תוך פחות משנייה והרבה יותר קטנים, ואילו VMs נותנות בידוד חזק יותר ויכולות להריץ כל מערכת הפעלה.',
    },
    example: {
      en: 'Microservices in Kubernetes run as containers, often on cloud nodes that are themselves VMs. Docker Desktop on Windows or Mac runs a small Linux VM, because Linux containers need a Linux kernel.',
      he: 'microservices ב-Kubernetes רצים כקונטיינרים, ולרוב על nodes בענן שהם בעצמם VMs. ‏Docker Desktop על Windows או Mac מריץ VM קטנה של לינוקס, כי קונטיינר לינוקס צריך kernel של לינוקס.',
    },
    keyPoints: [
      {
        en: 'Name the mechanisms, namespaces and cgroups; calling a container \'a lightweight VM\' is what interviewers do not want.',
        he: 'לנקוב במנגנונים, namespaces ו-cgroups. להגיד שקונטיינר הוא \'VM קלה\' זו בדיוק התשובה שמראיינים לא רוצים.',
      },
      {
        en: 'The shared kernel explains speed, density and weaker isolation, since a kernel bug can allow a container escape.',
        he: 'ה-kernel המשותף מסביר את המהירות, הצפיפות והבידוד החלש יותר, כי באג ב-kernel יכול לאפשר בריחה מהקונטיינר.',
      },
      {
        en: 'Distinguish image from container (template vs running instance); containers should be stateless, with data in volumes.',
        he: 'להבדיל בין image לקונטיינר (תבנית מול מופע רץ). קונטיינרים צריכים להיות stateless, והמידע נשמר ב-volumes.',
      },
      {
        en: 'Hypervisor types: type 1 (ESXi, Hyper-V, KVM) runs on bare metal, type 2 (VirtualBox) on a host OS.',
        he: 'סוגי hypervisor: סוג 1 ‏(ESXi, ‏Hyper-V, ‏KVM) רץ ישירות על החומרה, וסוג 2 ‏(VirtualBox) רץ מעל מערכת הפעלה.',
      },
    ],
    extras: [
      {
        en: 'Typical numbers: a VM boots in tens of seconds to minutes with gigabyte images; container images are tens to hundreds of megabytes.',
        he: 'מספרים טיפוסיים: VM עולה בעשרות שניות עד דקות עם images של ג\'יגה-בייטים, ו-images של קונטיינרים הם עשרות עד מאות מגה-בייטים.',
      },
      {
        en: 'VMs rely on hardware support from Intel VT-x or AMD-V, and container images are layered filesystems holding only the app and its libraries.',
        he: 'VMs נשענות על תמיכת חומרה של Intel VT-x או AMD-V, ו-image של קונטיינר הוא מערכת קבצים בשכבות שמכילה רק את האפליקציה והספריות שלה.',
      },
      {
        en: 'Security basics: do not run as root inside the container, avoid --privileged, and use minimal base images.',
        he: 'יסודות אבטחה: לא להריץ כ-root בתוך הקונטיינר, להימנע מ-‎--privileged, ולהשתמש ב-base images מינימליים.',
      },
      {
        en: 'Firecracker microVMs, used by AWS Lambda, and gVisor narrow the gap between the two.',
        he: 'Firecracker microVMs, שמשמשים את AWS Lambda, ו-gVisor מצמצמים את הפער בין השניים.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `# A container starts in about a second and shares the host kernel:
$ docker run --rm python:3.12 uname -r
6.8.0-45-generic          # <- that is the HOST's kernel

# A VM boots a whole operating system with its own kernel:
$ qemu-system-x86_64 -m 2048 -cdrom ubuntu.iso      # minutes, not seconds`,
      },
    ],
  },

  // ---------- Networking ----------
  {
    id: 'q-osi',
    text: { en: 'Explain the OSI model layers.', he: 'הסבירו את שכבות מודל OSI.' },
    topicId: 'networking',
    roleIds: ['helpdesk', 'sysadmin', 'security', 'devops', 'embedded', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'The OSI model is a seven-layer reference model for network communication, where each layer serves the one above it. From the bottom: Physical (bits), Data Link (frames, MAC addresses, switches), Network (IP and routing), Transport (TCP, UDP, ports), Session, Presentation (encoding, encryption) and Application (HTTP, DNS).\nOn the way down each layer adds its own header, which is called encapsulation, and on the way up each layer strips it.',
      he: 'מודל OSI הוא מודל ייחוס של שבע שכבות לתקשורת רשת, שבו כל שכבה נותנת שירות לשכבה שמעליה. מלמטה: Physical ‏(ביטים), Data Link ‏(frames, כתובות MAC, ‏switches), Network ‏(IP וניתוב), Transport ‏(TCP, ‏UDP, ‏ports), ‏Session, ‏Presentation ‏(קידוד, הצפנה) ו-Application ‏(HTTP, ‏DNS).\nבדרך למטה כל שכבה מוסיפה header משלה, וזה נקרא encapsulation, ובדרך למעלה כל שכבה מסירה אותו.',
    },
    example: {
      en: 'Opening a website: DNS (7) resolves the name, TCP (4) connects to port 443, IP (3) routes the packets, Ethernet or Wi-Fi (2) delivers frames to the gateway, and the NIC sends bits (1).',
      he: 'כשפותחים אתר: DNS ‏(7) מתרגם את השם, TCP ‏(4) מתחבר לפורט 443, IP ‏(3) מנתב את החבילות, Ethernet או Wi-Fi ‏(2) מעבירים frames ל-gateway, וכרטיס הרשת שולח ביטים (1).',
    },
    keyPoints: [
      {
        en: 'Give the PDU per layer: bits, frame, packet, segment or datagram, data.',
        he: 'לציין את יחידת המידע בכל שכבה: bits, ‏frame, ‏packet, ‏segment או datagram, ‏data.',
      },
      {
        en: 'Map devices to layers: hub 1, switch 2, router 3, stateful firewall 3 and 4, WAF or proxy 7.',
        he: 'למפות רכיבים לשכבות: hub ‏1, ‏switch ‏2, נתב 3, ‏firewall ‏stateful ‏3 ו-4, ‏WAF או proxy ‏7.',
      },
      {
        en: 'Say that OSI is a reference model and the real stack is TCP/IP, with four layers.',
        he: 'לומר ש-OSI הוא מודל ייחוס, והמימוש האמיתי הוא TCP/IP עם ארבע שכבות.',
      },
      {
        en: 'Troubleshoot bottom-up: link light, IP and gateway, ping, port reachability, then the application.',
        he: 'לתחקר מלמטה למעלה: נורית link, ‏IP ו-gateway, ‏ping, האם הפורט נגיש, ואז האפליקציה.',
      },
    ],
    extras: [
      {
        en: 'In TCP/IP (link, internet, transport, application), OSI layers 5 to 7 merge into one application layer.',
        he: 'ב-TCP/IP ‏(link, ‏internet, ‏transport, ‏application) שכבות 5 עד 7 של OSI מתמזגות לשכבת application אחת.',
      },
      {
        en: 'ARP bridges layers 2 and 3, and TLS is often placed at the presentation layer.',
        he: 'ARP מחבר בין שכבה 2 לשכבה 3, ו-TLS ממוקם לעיתים קרובות בשכבת ה-presentation.',
      },
      {
        en: 'OSI is the shared troubleshooting language: layer 1 is a cable, layer 2 a VLAN or switch, and an L7 load balancer routes by HTTP content.',
        he: 'OSI הוא השפה המשותפת לתחקור תקלות: שכבה 1 היא כבל, שכבה 2 היא VLAN או switch, ו-load balancer של L7 מנתב לפי תוכן HTTP.',
      },
      {
        en: 'A mnemonic from layer 1 up: Please Do Not Throw Sausage Pizza Away.',
        he: 'משפט עזר משכבה 1 למעלה: Please Do Not Throw Sausage Pizza Away.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `# One HTTP request as seen by tcpdump, layer by layer:
$ sudo tcpdump -i eth0 -nn port 80 -c 1 -e
12:00:01 aa:bb:cc:dd:ee:ff > 11:22:33:44:55:66, ethertype IPv4   # L2  Ethernet (MAC)
  192.168.1.10.51234 > 93.184.216.34.80:                          # L3  IP addresses
  Flags [P.], seq 1:80, ack 1, win 502                            # L4  TCP (ports, seq)
  GET / HTTP/1.1  Host: example.com                               # L7  HTTP`,
      },
    ],
  },
  {
    id: 'q-tcp-udp',
    text: { en: 'What is the difference between TCP and UDP?', he: 'מה ההבדל בין TCP ל-UDP?' },
    topicId: 'networking',
    roleIds: ['helpdesk', 'sysadmin', 'security', 'devops', 'backend', 'embedded', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Both are layer 4 transport protocols on top of IP. TCP is connection-oriented: it opens a connection with a three-way handshake and gives a reliable, ordered byte stream, using sequence numbers, ACKs, retransmission, flow control and congestion control.\nUDP just sends independent datagrams with an 8-byte header: no handshake, no retransmission and no ordering. That makes it lighter and lower-latency, which suits real-time traffic where late data is useless.',
      he: 'שניהם פרוטוקולי transport בשכבה 4, מעל IP. ‏TCP מבוסס חיבור: הוא פותח חיבור עם three-way handshake ונותן זרם בתים אמין ומסודר, בעזרת sequence numbers, ‏ACKs, שידור חוזר, flow control ו-congestion control.\nUDP פשוט שולח datagrams עצמאיים עם header של 8 בתים: בלי handshake, בלי שידור חוזר ובלי סדר. זה הופך אותו לקל יותר ועם latency נמוך יותר, ומתאים לתעבורה בזמן אמת, שבה מידע שמגיע באיחור כבר לא שימושי.',
    },
    example: {
      en: 'Loading a web page or sending a file uses TCP, because every byte must arrive in order. A Zoom call or an online game uses UDP: a lost voice packet is better skipped than delivered late.',
      he: 'טעינת דף אינטרנט או שליחת קובץ עוברות ב-TCP, כי כל בית חייב להגיע ולפי הסדר. שיחת Zoom או משחק אונליין עובדים ב-UDP: עדיף לדלג על חבילת קול שאבדה מאשר לקבל אותה באיחור.',
    },
    keyPoints: [
      {
        en: 'The handshake is SYN, SYN-ACK, ACK, costing one round trip before any data flows.',
        he: 'ה-handshake הוא SYN, ‏SYN-ACK, ‏ACK, וזה עולה round trip שלם לפני שעובר מידע.',
      },
      {
        en: 'Flow control protects the receiver (receive window); congestion control protects the network (congestion window).',
        he: 'flow control מגן על המקבל (receive window), ו-congestion control מגן על הרשת (congestion window).',
      },
      {
        en: 'TCP has no message boundaries, so applications need their own framing; UDP keeps each datagram whole.',
        he: 'ב-TCP אין גבולות בין הודעות, ולכן האפליקציה צריכה framing משלה. UDP שומר כל datagram שלם.',
      },
      {
        en: 'Head-of-line blocking: one lost TCP segment stalls everything behind it.',
        he: 'Head-of-line blocking: ‏segment אחד שאבד ב-TCP עוצר את כל מה שאחריו.',
      },
    ],
    extras: [
      {
        en: 'QUIC, the transport of HTTP/3, runs over UDP and implements reliability, congestion control and TLS 1.3 in user space.',
        he: 'QUIC, שכבת ה-transport של HTTP/3, רץ מעל UDP ומממש אמינות, congestion control ו-TLS 1.3 ב-user space.',
      },
      {
        en: 'DNS is not UDP-only: it falls back to TCP port 53 for large responses and zone transfers.',
        he: 'DNS הוא לא רק UDP: הוא עובר ל-TCP בפורט 53 לתשובות גדולות ול-zone transfers.',
      },
      {
        en: 'In netstat or ss, many sockets in CLOSE_WAIT usually mean the application forgot to close them.',
        he: 'ב-netstat או ss, הרבה sockets במצב CLOSE_WAIT בדרך כלל אומרים שהאפליקציה שכחה לסגור אותם.',
      },
      {
        en: 'Security: SYN floods exhaust half-open connections and SYN cookies defend against them; spoofable UDP enables reflection and amplification attacks.',
        he: 'אבטחה: SYN flood ממלא את התור של חיבורים חצי-פתוחים ו-SYN cookies מגינים מפניו. ב-UDP קל לזייף כתובת מקור, וזה מאפשר התקפות reflection ו-amplification.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `import socket

# TCP: connect first (three-way handshake), then a reliable byte stream
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("example.com", 80))
s.sendall(b"GET / HTTP/1.0\\r\\nHost: example.com\\r\\n\\r\\n")
print(s.recv(1024))

# UDP: no connection; each sendto is an independent datagram that may be lost
u = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
u.sendto(b"ping", ("192.168.1.10", 9999))`,
      },
    ],
  },
  {
    id: 'q-dns',
    text: { en: 'What does DNS do and how does a lookup work?', he: 'מה עושה DNS ואיך עובד lookup?' },
    topicId: 'networking',
    roleIds: ['helpdesk', 'sysadmin', 'devops', 'security', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'DNS is the internet\'s distributed, hierarchical directory that translates names like www.example.com into records, usually IP addresses.\nThe OS asks a recursive resolver, such as the ISP\'s or 8.8.8.8, over UDP port 53. If the answer is not cached, the resolver walks the hierarchy: a root server points it to the .com TLD servers, they point it to the domain\'s authoritative server, and that server returns the answer. The result is cached for its TTL.',
      he: 'DNS הוא ספר הכתובות המבוזר וההיררכי של האינטרנט, שמתרגם שמות כמו www.example.com לרשומות, בדרך כלל לכתובות IP.\nמערכת ההפעלה שואלת recursive resolver, למשל של ספק האינטרנט או 8.8.8.8, ב-UDP לפורט 53. אם התשובה לא ב-cache, ה-resolver עובר על ההיררכיה: שרת root מפנה אותו לשרתי ה-TLD של .com, הם מפנים אותו לשרת ה-authoritative של הדומיין, והשרת הזה מחזיר את התשובה. התוצאה נשמרת ב-cache לפי ה-TTL שלה.',
    },
    example: {
      en: 'Running dig +trace example.com shows the walk from the root to .com to the authoritative server. In troubleshooting, if an IP address works but a name does not, suspect DNS first.',
      he: 'הפקודה dig +trace example.com מראה את המסלול מה-root ל-.com ולשרת ה-authoritative. בתחקור תקלות, אם כתובת IP עובדת ושם לא, חושדים קודם ב-DNS.',
    },
    keyPoints: [
      {
        en: 'Recursive query: client to resolver, give me the final answer. Iterative: resolver to servers, give me a referral.',
        he: 'שאילתה רקורסיבית: לקוח ל-resolver, תביא לי תשובה סופית. איטרטיבית: resolver לשרתים, תפנה אותי הלאה.',
      },
      {
        en: 'Caching layers are browser, OS and resolver; flush with ipconfig /flushdns, and TTL decides how long stale records survive.',
        he: 'שכבות ה-cache הן דפדפן, מערכת הפעלה ו-resolver. מנקים עם ipconfig /flushdns, וה-TTL קובע כמה זמן רשומה ישנה שורדת.',
      },
      {
        en: 'Know A, AAAA, CNAME, MX and PTR records, and that a CNAME cannot sit at the zone apex.',
        he: 'להכיר רשומות A, ‏AAAA, ‏CNAME, ‏MX ו-PTR, ולדעת ש-CNAME לא יכול לשבת בשורש הדומיין (zone apex).',
      },
      {
        en: 'Lower the TTL before a migration, since changes spread only as old TTLs expire.',
        he: 'מורידים TTL לפני מיגרציה, כי שינויים מתפשטים רק כשה-TTL הישן פג.',
      },
    ],
    extras: [
      {
        en: 'Other record types: NS for delegation, TXT for verification and SPF, and SOA for the zone itself.',
        he: 'סוגי רשומות נוספים: NS להאצלה, TXT לאימות ול-SPF, ו-SOA לאזור עצמו.',
      },
      {
        en: 'DNS switches to TCP port 53 for large responses and zone transfers.',
        he: 'DNS עובר ל-TCP בפורט 53 לתשובות גדולות ול-zone transfers.',
      },
      {
        en: 'CDNs use DNS to return a different IP depending on where the user is.',
        he: 'רשתות CDN משתמשות ב-DNS כדי להחזיר IP שונה לפי המיקום של המשתמש.',
      },
      {
        en: 'Plain DNS is unencrypted and spoofable: DNSSEC adds authenticity, DoH and DoT add privacy. Know cache poisoning and DNS tunneling.',
        he: 'DNS רגיל לא מוצפן ואפשר לזייף אותו: DNSSEC מוסיף אמינות, ו-DoH ו-DoT מוסיפים פרטיות. כדאי להכיר cache poisoning ו-DNS tunneling.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `$ nslookup example.com
Server:   192.168.1.1            # the resolver that was asked
Address:  192.168.1.1#53
Name:     example.com
Address:  93.184.216.34

$ dig +trace example.com         # shows the walk: root -> .com -> authoritative server`,
      },
    ],
  },
  {
    id: 'q-dhcp',
    text: { en: 'What is DHCP?', he: 'מהו DHCP?' },
    topicId: 'networking',
    roleIds: ['helpdesk', 'sysadmin'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 1,
    answer: {
      en: 'DHCP automatically gives a device that joins a network its IP configuration: an IP address, subnet mask, default gateway, DNS servers and a lease time.\nIt runs over UDP, server port 67 and client port 68, in four steps called DORA: Discover, Offer, Request, Acknowledge. The client has no address yet, so it broadcasts a Discover, a server offers an address from its pool, the client requests it, and the server confirms the lease.',
      he: 'DHCP נותן אוטומטית למכשיר שמצטרף לרשת את הגדרות ה-IP שלו: כתובת IP, ‏subnet mask, ‏default gateway, שרתי DNS וזמן lease.\nהוא רץ מעל UDP, השרת בפורט 67 והלקוח בפורט 68, בארבעה שלבים שנקראים DORA: ‏Discover, ‏Offer, ‏Request, ‏Acknowledge. ללקוח עוד אין כתובת, אז הוא שולח Discover ב-broadcast, שרת מציע כתובת מה-pool שלו, הלקוח מבקש אותה, והשרת מאשר את ה-lease.',
    },
    example: {
      en: 'A laptop showing 169.254.x.x got an APIPA address, meaning no DHCP server answered. Check the cable or Wi-Fi, the VLAN and the scope, then run ipconfig /release and ipconfig /renew.',
      he: 'מחשב נייד עם כתובת 169.254.x.x קיבל כתובת APIPA, כלומר אף שרת DHCP לא ענה. בודקים כבל או Wi-Fi, את ה-VLAN ואת ה-scope, ואז מריצים ipconfig /release ו-ipconfig /renew.',
    },
    keyPoints: [
      {
        en: 'Explain why Discover and Request are broadcasts: the client has no IP and does not know the server yet.',
        he: 'להסביר למה Discover ו-Request נשלחים ב-broadcast: ללקוח אין IP והוא עוד לא מכיר את השרת.',
      },
      {
        en: 'Broadcasts do not cross routers, so a DHCP relay (ip helper-address) forwards requests to a central server.',
        he: 'broadcast לא עובר נתבים, ולכן DHCP relay ‏(ip helper-address) מעביר את הבקשות לשרת מרכזי.',
      },
      {
        en: 'Servers and printers get reservations tied to their MAC address, or static addresses outside the pool.',
        he: 'שרתים ומדפסות מקבלים reservation שקשור לכתובת ה-MAC שלהם, או כתובת סטטית מחוץ ל-pool.',
      },
      {
        en: 'Security: rogue DHCP servers and starvation attacks are blocked with DHCP snooping and port security.',
        he: 'אבטחה: שרתי DHCP זדוניים והתקפות starvation נחסמים עם DHCP snooping ו-port security.',
      },
    ],
    extras: [
      {
        en: 'Leases renew with the same server at 50% of the lease time (T1) and with any server at 87.5% (T2).',
        he: 'חידוש ה-lease נעשה מול אותו שרת ב-50% מהזמן (T1), ומול כל שרת ב-87.5% ‏(T2).',
      },
      {
        en: 'If the address is no longer valid, the server answers DHCPNAK and the client starts over.',
        he: 'אם הכתובת כבר לא תקפה, השרת עונה DHCPNAK והלקוח מתחיל מחדש.',
      },
      {
        en: 'Lease length is a trade-off: short for guest Wi-Fi, longer for office desktops. Watch for scope exhaustion.',
        he: 'אורך ה-lease הוא trade-off: קצר ל-Wi-Fi של אורחים, ארוך יותר למחשבים במשרד. צריך לשים לב ל-scope שמתמלא.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `# Windows: see the lease, then force a new DORA exchange
> ipconfig /all
   DHCP Enabled . . . . : Yes
   Lease Obtained . . . : Monday, 14 September 2026 08:12
> ipconfig /release && ipconfig /renew

# Linux: watch the four steps happen
$ sudo dhclient -v eth0
DHCPDISCOVER on eth0 ... DHCPOFFER of 192.168.1.42 ... DHCPREQUEST ... DHCPACK`,
      },
    ],
  },
  {
    id: 'q-troubleshoot-gateway',
    text: {
      en: "A user can ping the default gateway but can't reach the internet. How do you troubleshoot?",
      he: 'משתמש מצליח לעשות ping ל-default gateway אבל לא מגיע לאינטרנט. איך מאבחנים?',
    },
    topicId: 'networking',
    roleIds: ['helpdesk', 'sysadmin'],
    type: 'troubleshooting',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A working ping to the gateway proves the local network is fine up to layer 3, so the problem is beyond the gateway or higher up. First I ask whether only this user is affected, then check the settings with ipconfig /all.\nNext I ping a public IP like 8.8.8.8. If it answers, routing works, so I test DNS with nslookup. If it fails, tracert shows where packets stop: the router, NAT, a firewall or the ISP.',
      he: 'ping מוצלח ל-gateway מוכיח שהרשת המקומית תקינה עד שכבה 3, כלומר הבעיה אחרי ה-gateway או גבוה יותר. קודם אני שואל אם רק המשתמש הזה מושפע, ואז בודק את ההגדרות עם ipconfig /all.\nאחר כך אני עושה ping ל-IP ציבורי כמו 8.8.8.8. אם הוא עונה, הניתוב עובד, ואני בודק DNS עם nslookup. אם לא, ‏tracert מראה איפה החבילות נעצרות: בנתב, ב-NAT, ב-firewall או אצל ספק האינטרנט.',
    },
    example: {
      en: 'A laptop from another office still has a manually set DNS server. Pinging 8.8.8.8 works but names do not resolve, and switching DNS back to DHCP fixes it.',
      he: 'מחשב נייד שהגיע ממשרד אחר עדיין מוגדר עם שרת DNS ידני. ‏ping ל-8.8.8.8 עובד אבל שמות לא נפתרים, והחזרת ה-DNS להגדרה מ-DHCP פותרת את זה.',
    },
    keyPoints: [
      {
        en: 'Start by stating what the gateway ping already proves, so you skip cables and IP settings.',
        he: 'להתחיל במה שה-ping ל-gateway כבר מוכיח, כדי לא לבזבז זמן על כבלים והגדרות IP.',
      },
      {
        en: 'Ping by IP versus ping by name separates routing problems from DNS problems in one step.',
        he: 'ping לפי IP מול ping לפי שם מפריד בין בעיות ניתוב לבעיות DNS בצעד אחד.',
      },
      {
        en: 'Ping is ICMP: it does not prove TCP 80 or 443 is open, and some hosts block ICMP.',
        he: 'ping הוא ICMP: הוא לא מוכיח ש-TCP 80 או 443 פתוחים, ויש שרתים שחוסמים ICMP.',
      },
      {
        en: 'Work methodically: one change at a time, verify after each step, and document the outcome.',
        he: 'לעבוד בשיטתיות: שינוי אחד בכל פעם, בדיקה אחרי כל צעד, ותיעוד התוצאה.',
      },
    ],
    extras: [
      {
        en: 'If ping and DNS work but the browser fails, check proxy settings, the local firewall or antivirus, and a wrong clock breaking HTTPS.',
        he: 'אם ping ו-DNS עובדים אבל הדפדפן נכשל, בודקים הגדרות proxy, ‏firewall או אנטי-וירוס מקומי, ושעון שגוי ששובר HTTPS.',
      },
      {
        en: 'Compare nslookup google.com with nslookup google.com 8.8.8.8, and clear the cache with ipconfig /flushdns.',
        he: 'משווים בין nslookup google.com לבין nslookup google.com 8.8.8.8, ומנקים את ה-cache עם ipconfig /flushdns.',
      },
      {
        en: 'If the fault is upstream, escalate to the network team or ISP with the tracert output, and finally confirm with the user that it works.',
        he: 'אם התקלה מעבר לרשת המקומית, מעבירים לצוות הרשת או לספק עם הפלט של tracert, ובסוף מוודאים מול המשתמש שהכול עובד.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `ping 192.168.1.1        # gateway answers   -> cable, switch and LAN are fine
ping 8.8.8.8            # public IP fails?   -> routing / WAN / firewall problem
ping google.com         # IP works, name fails? -> DNS problem
nslookup google.com     # which DNS server is configured, does it answer
tracert 8.8.8.8         # (traceroute on Linux) where exactly the packets stop`,
      },
    ],
  },
  {
    id: 'q-subnet-mask',
    text: { en: 'What is a subnet mask?', he: 'מהו subnet mask?' },
    topicId: 'networking',
    roleIds: ['helpdesk', 'sysadmin', 'security', 'devops', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A subnet mask is a 32-bit value that marks which bits of an IPv4 address are the network part and which are the host part: ones for network, zeros for host. 255.255.255.0 is written /24.\nThe network address is the IP AND the mask. Before sending, a host applies its mask to the destination: same network means direct delivery using ARP, otherwise the packet goes to the default gateway.',
      he: 'subnet mask הוא ערך של 32 ביט שמסמן אילו ביטים בכתובת IPv4 הם חלק הרשת ואילו חלק המארח: אחדות לרשת, אפסים למארח. את 255.255.255.0 כותבים /24.\nכתובת הרשת היא ה-IP בפעולת AND עם ה-mask. לפני שליחה, המחשב מפעיל את ה-mask שלו על כתובת היעד: אם זו אותה רשת, הוא שולח ישירות בעזרת ARP, ואם לא, החבילה הולכת ל-default gateway.',
    },
    example: {
      en: '192.168.1.77 AND 255.255.255.0 gives the network 192.168.1.0. A /24 has 256 addresses, 254 usable hosts, and the broadcast 192.168.1.255.',
      he: '192.168.1.77 AND 255.255.255.0 נותן את הרשת 192.168.1.0. ב-/24 יש 256 כתובות, 254 מארחים שמישים, וה-broadcast הוא 192.168.1.255.',
    },
    keyPoints: [
      {
        en: 'Usable hosts are 2^h minus 2: the all-zeros address is the network ID, all-ones is the broadcast.',
        he: 'מספר המארחים השמישים הוא 2^h פחות 2: הכתובת שכולה אפסים היא מזהה הרשת, וזו שכולה אחדות היא ה-broadcast.',
      },
      {
        en: 'Be able to compute network, broadcast and host range for a /26 or /27 quickly.',
        he: 'לדעת לחשב מהר רשת, broadcast וטווח מארחים עבור /26 או /27.',
      },
      {
        en: 'Use CIDR notation and mention that classful addressing (class A, B, C) is obsolete.',
        he: 'להשתמש בכתיב CIDR ולהזכיר שהחלוקה הישנה למחלקות (class A, ‏B, ‏C) כבר לא בשימוש.',
      },
      {
        en: 'Know the private ranges: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 (RFC 1918).',
        he: 'להכיר את הטווחים הפרטיים: 10.0.0.0/8, ‏172.16.0.0/12 ו-192.168.0.0/16 ‏(RFC 1918).',
      },
    ],
    extras: [
      {
        en: 'Common sizes: /26 is 255.255.255.192 with 62 hosts, /30 gives 2 hosts for a point-to-point link, and /32 is a single host.',
        he: 'גדלים נפוצים: ‏/26 הוא 255.255.255.192 עם 62 מארחים, ‏/30 נותן 2 מארחים לקו point-to-point, ו-/32 הוא מארח בודד.',
      },
      {
        en: 'Splitting 192.168.1.0/24 into four /26 subnets gives networks starting at .0, .64, .128 and .192.',
        he: 'חלוקה של 192.168.1.0/24 לארבעה subnets של /26 נותנת רשתות שמתחילות ב-.0, ‏.64, ‏.128 ו-.192.',
      },
      {
        en: 'A wrong mask on one host causes strange partial connectivity: it reaches some local machines but treats others as remote.',
        he: 'mask שגוי במחשב אחד גורם לקישוריות חלקית ומוזרה: הוא מגיע לחלק מהמחשבים המקומיים ומתייחס לאחרים כרחוקים.',
      },
      {
        en: 'A /31 is valid on point-to-point links (RFC 3021), and IPv6 uses only prefix lengths, usually /64 for a LAN.',
        he: '‏/31 חוקי בקווי point-to-point ‏(RFC 3021), וב-IPv6 משתמשים רק ב-prefix length, בדרך כלל /64 ל-LAN.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `import ipaddress

net = ipaddress.ip_network("192.168.1.0/24")
print(net.netmask)                                   # 255.255.255.0
print(net.num_addresses)                             # 256
hosts = list(net.hosts())
print(hosts[0], hosts[-1])                           # 192.168.1.1  192.168.1.254
print(ipaddress.ip_address("192.168.1.77") in net)   # True
print(ipaddress.ip_address("192.168.2.5") in net)    # False: different network`,
      },
    ],
  },

  // ---------- Security ----------
  {
    id: 'q-symmetric-asymmetric',
    text: {
      en: 'What is the difference between symmetric and asymmetric encryption?',
      he: 'מה ההבדל בין הצפנה סימטרית לאסימטרית?',
    },
    topicId: 'security',
    roleIds: ['security', 'backend', 'devops'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'Symmetric encryption uses the same secret key to encrypt and decrypt, for example AES. It is very fast, so it handles bulk data, but both sides must somehow share the key.\nAsymmetric encryption uses a key pair: a public key anyone can have and a private key only the owner keeps, for example RSA or elliptic curves. It is much slower, so it is used for key exchange and digital signatures.',
      he: 'הצפנה סימטרית משתמשת באותו מפתח סודי להצפנה ולפענוח, למשל AES. היא מהירה מאוד, ולכן מצפינים בה כמויות גדולות של מידע, אבל שני הצדדים צריכים איכשהו לחלוק את המפתח.\nהצפנה אסימטרית משתמשת בזוג מפתחות: מפתח ציבורי שכל אחד יכול להחזיק, ומפתח פרטי שרק הבעלים מחזיק, למשל RSA או עקומים אליפטיים. היא איטית בהרבה, ולכן משתמשים בה להחלפת מפתחות ולחתימות דיגיטליות.',
    },
    example: {
      en: 'When you open an HTTPS site, TLS uses asymmetric crypto (an ECDHE key exchange and the certificate\'s signature) to agree on a key and prove identity, then encrypts all traffic with AES-GCM.',
      he: 'כשנכנסים לאתר HTTPS, ‏TLS משתמש בהצפנה אסימטרית (החלפת מפתחות ECDHE וחתימה עם התעודה) כדי להסכים על מפתח ולהוכיח זהות, ואז מצפין את כל התעבורה ב-AES-GCM.',
    },
    keyPoints: [
      {
        en: 'Explain the hybrid model: asymmetric for key agreement and authentication, symmetric for data, as in TLS, SSH and PGP.',
        he: 'להסביר את המודל ההיברידי: אסימטרית להסכמה על מפתח ולאימות, סימטרית למידע עצמו, כמו ב-TLS, ‏SSH ו-PGP.',
      },
      {
        en: 'Encrypt with the recipient\'s public key for confidentiality; sign with your own private key for authenticity.',
        he: 'מצפינים עם המפתח הציבורי של הנמען לשם סודיות, וחותמים עם המפתח הפרטי שלך לשם אמינות.',
      },
      {
        en: 'Do not confuse encryption with hashing: SHA-256 is one-way and keyless; HMAC adds a key for integrity.',
        he: 'לא לבלבל בין הצפנה ל-hashing: ‏SHA-256 הוא חד-כיווני ובלי מפתח, ו-HMAC מוסיף מפתח לשמירת שלמות.',
      },
      {
        en: 'Trust problem: without certificates and a CA, an attacker can swap in their own public key (man-in-the-middle).',
        he: 'בעיית האמון: בלי תעודות ו-CA, תוקף יכול להחליף את המפתח הציבורי במפתח שלו (man-in-the-middle).',
      },
    ],
    extras: [
      {
        en: 'Key sizes are not comparable across types: a 256-bit elliptic-curve key gives roughly the security of a 3072-bit RSA key.',
        he: 'גודלי מפתחות לא ניתנים להשוואה בין סוגים: מפתח של 256 ביט על עקום אליפטי נותן בערך את הביטחון של RSA עם 3072 ביט.',
      },
      {
        en: 'Use authenticated modes such as AES-GCM, never ECB, which leaks patterns in the data.',
        he: 'משתמשים במצבים מאומתים כמו AES-GCM, ולעולם לא ב-ECB, שמדליף דפוסים במידע.',
      },
      {
        en: 'Ephemeral keys in TLS give forward secrecy: a later stolen server key cannot decrypt past sessions.',
        he: 'מפתחות זמניים ב-TLS נותנים forward secrecy: מפתח שרת שנגנב בהמשך לא יפענח sessions קודמים.',
      },
      {
        en: 'A large quantum computer running Shor\'s algorithm would break RSA and ECC but not AES-256, driving the move to post-quantum ML-KEM.',
        he: 'מחשב קוונטי גדול עם האלגוריתם של Shor ישבור RSA ו-ECC אבל לא AES-256, וזה מניע את המעבר ל-ML-KEM שהוא post-quantum.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `# Symmetric (AES via Fernet): one shared secret does both directions
from cryptography.fernet import Fernet
key = Fernet.generate_key()
token = Fernet(key).encrypt(b"hello")
print(Fernet(key).decrypt(token))            # b'hello'  (same key)

# Asymmetric (RSA): public key encrypts, only the private key decrypts
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes
private = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public = private.public_key()                # safe to share
oaep = padding.OAEP(padding.MGF1(hashes.SHA256()), hashes.SHA256(), None)
secret = public.encrypt(b"hello", oaep)
print(private.decrypt(secret, oaep))         # b'hello'`,
      },
    ],
  },
  {
    id: 'q-sql-injection',
    text: {
      en: 'What is SQL injection and how do you prevent it?',
      he: 'מהי הזרקת SQL (SQL injection) ואיך מונעים אותה?',
    },
    topicId: 'security',
    roleIds: ['security', 'backend', 'fullstack'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'SQL injection happens when user input is concatenated into a SQL statement, so the database runs part of that input as code instead of treating it as data. An attacker can then read, change or delete data they should never reach.\nThe main fix is parameterised queries, also called prepared statements: the SQL text and the values travel separately, so a value can never change the structure of the query. ORMs do this by default, and least privilege limits the damage if something slips through.',
      he: 'SQL injection קורה כשקלט של משתמש משורשר לתוך שאילתת SQL, ואז מסד הנתונים מריץ חלק מהקלט כקוד במקום להתייחס אליו כנתון. כך תוקף יכול לקרוא, לשנות או למחוק נתונים שאסור לו להגיע אליהם.\nהפתרון המרכזי הוא parameterised queries, כלומר prepared statements: טקסט השאילתה והערכים נשלחים בנפרד, ולכן ערך לעולם לא יכול לשנות את מבנה השאילתה. ORM עושה את זה כברירת מחדל, ו-least privilege מצמצם את הנזק אם משהו בכל זאת חומק.',
    },
    example: {
      en: 'A login query built as WHERE name = \'...\' AND password = \'...\' can be bypassed by typing \' OR 1=1 -- as the user name: it closes the string, adds an always-true condition and comments out the password check.',
      he: 'שאילתת login שנבנית כ-WHERE name = \'...\' AND password = \'...\' נעקפת אם מקלידים בשם המשתמש \' OR 1=1 --. זה סוגר את המחרוזת, מוסיף תנאי שתמיד מתקיים והופך את בדיקת הסיסמה להערה.',
    },
    keyPoints: [
      {
        en: 'The root cause is mixing code and data; prepared statements separate them, which escaping alone does not reliably do.',
        he: 'שורש הבעיה הוא ערבוב של קוד ונתונים. Prepared statements מפרידים ביניהם, ו-escaping לבד לא עושה את זה בצורה אמינה.',
      },
      {
        en: 'Table names, column names and ORDER BY direction cannot be parameters, so validate them against an allow-list.',
        he: 'שמות טבלאות, שמות עמודות וכיוון המיון ב-ORDER BY אי אפשר להעביר כפרמטר, ולכן בודקים אותם מול allow-list.',
      },
      {
        en: 'An ORM is not automatically safe: raw query functions and string-built filters bring the bug back.',
        he: 'ORM לא בטוח אוטומטית: פונקציות של raw query ופילטרים שנבנים ממחרוזות מחזירים את הבאג.',
      },
      {
        en: 'Know the variants: in-band (UNION or error-based), blind (boolean or time-based) and second-order injection.',
        he: 'כדאי להכיר את הסוגים: in-band ‏(UNION או error-based), ‏blind ‏(boolean או time-based) ו-second-order.',
      },
    ],
    extras: [
      {
        en: 'Blind SQL injection: even when no data is shown, the attacker infers it from true or false responses or from delays such as MySQL\'s SLEEP().',
        he: 'Blind SQL injection: גם כשלא מוצגים נתונים, התוקף מסיק אותם מתשובות של אמת או שקר, או מהשהיות כמו SLEEP() ב-MySQL.',
      },
      {
        en: 'With UNION SELECT or stacked queries an attacker can read other tables or modify and delete data, not just bypass a login.',
        he: 'עם UNION SELECT או stacked queries התוקף יכול לקרוא טבלאות אחרות או לשנות ולמחוק נתונים, ולא רק לעקוף login.',
      },
      {
        en: 'Defence in depth: generic error messages, a WAF and logging of suspicious queries limit what an attacker learns.',
        he: 'הגנה בשכבות: הודעות שגיאה כלליות, WAF ולוגים של שאילתות חשודות מצמצמים את מה שהתוקף לומד.',
      },
      {
        en: 'Injection is in the OWASP Top 10 (A03:2021); mentioning it shows you know the standard security references.',
        he: 'Injection נמצא ב-OWASP Top 10 ‏(A03:2021), ואזכור שלו מראה היכרות עם מקורות הייחוס הסטנדרטיים באבטחה.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `name = "' OR 1=1 --"          # what an attacker types into the login form

# Vulnerable: the input becomes part of the SQL text
cursor.execute(f"SELECT * FROM users WHERE name = '{name}'")
# -> SELECT * FROM users WHERE name = '' OR 1=1 --'   (returns every user)

# Safe: the value is sent separately and can never change the query
cursor.execute("SELECT * FROM users WHERE name = %s", (name,))`,
      },
    ],
  },

  // ---------- Algorithms ----------
  {
    id: 'q-reverse-linked-list',
    text: {
      en: 'Reverse a singly linked list in place.',
      he: 'הפכו רשימה מקושרת חד-כיוונית במקום (in place).',
    },
    details: {
      description: {
        en: 'Given the head of a singly linked list, reverse the list and return the new head. Do it in place: no new nodes, O(1) extra memory.',
        he: 'נתון ראש (head) של רשימה מקושרת חד-כיוונית. הפכו את הרשימה והחזירו את הראש החדש. עשו זאת במקום: בלי צמתים חדשים, בזיכרון נוסף של O(1).',
      },
      examples: [
        {
          input: 'head = 1 -> 2 -> 3 -> 4 -> 5',
          output: '5 -> 4 -> 3 -> 2 -> 1',
        },
        {
          input: 'head = (empty list)',
          output: '(empty list)',
        },
      ],
      constraints: [
        { en: '0 ≤ number of nodes ≤ 5000', he: '0 ≤ מספר הצמתים ≤ 5000' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'backend', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 3,
    answer: {
      en: 'I reverse it iteratively with three pointers: prev starts as null and current at the head. On each step I save current.next, point current.next back to prev, then move prev and current one step forward. When current becomes null, prev is the new head.\nTime is O(n), a single pass, and extra space is O(1), because no new nodes are allocated.',
      he: 'הופכים איטרטיבית עם שלושה מצביעים: prev מתחיל ב-null ו-current ב-head. בכל צעד שומרים את current.next, מכוונים את current.next אחורה אל prev, ואז מקדמים את prev ואת current צעד אחד קדימה. כש-current הופך ל-null, ‏prev הוא ה-head החדש.\nזמן O(n), מעבר אחד, וזיכרון נוסף O(1), כי לא מקצים צמתים חדשים.',
    },
    approach: [
      {
        en: 'Clarify: singly linked, modify in place, return the new head, and return null for an empty list.',
        he: 'מבהירים: הרשימה חד-כיוונית, מותר לשנות אותה במקום, מחזירים את ה-head החדש, ו-null לרשימה ריקה.',
      },
      {
        en: 'Brute force: copy the values into an array or stack and write them back reversed: O(n) time but O(n) space.',
        he: 'Brute force: מעתיקים את הערכים למערך או ל-stack וכותבים אותם בחזרה הפוך: O(n) זמן, אבל O(n) זיכרון.',
      },
      {
        en: 'Insight: reversing means flipping every next pointer backwards, remembering the next node before each flip.',
        he: 'התובנה: להפוך רשימה זה להפוך כל מצביע next אחורה, ולזכור את הצומת הבא לפני כל היפוך.',
      },
      {
        en: 'Loop: next = current.next; current.next = prev; prev = current; current = next. Return prev. O(n) time, O(1) space.',
        he: 'הלולאה: next = current.next; ‏current.next = prev; ‏prev = current; ‏current = next. מחזירים prev. זמן O(n), זיכרון O(1).',
      },
      {
        en: 'Test: trace 1 -> 2 -> 3, writing prev, current and next after each iteration, then an empty list and one node.',
        he: 'בדיקה: עוברים ידנית על 1 -> 2 -> 3 ורושמים prev, ‏current ו-next אחרי כל איטרציה, ואז רשימה ריקה וצומת יחיד.',
      },
    ],
    keyPoints: [
      {
        en: 'Save next before overwriting the link; forgetting it is the classic bug that loses the rest of the list.',
        he: 'שומרים את next לפני שדורסים את הקישור. לשכוח את זה זה הבאג הקלאסי שמאבד את שאר הרשימה.',
      },
      {
        en: 'Return prev, not head: at the end current is null and the old head is now the tail.',
        he: 'מחזירים את prev ולא את head: בסוף current הוא null, וה-head הישן הפך לזנב.',
      },
      {
        en: 'State the invariant: prev heads the reversed part, current heads the part still to reverse.',
        he: 'כדאי להגיד את ה-invariant: ‏prev הוא הראש של החלק שכבר הפכנו, ו-current הוא הראש של מה שנשאר.',
      },
      {
        en: 'Recursion is also O(n) time but uses O(n) stack, risky on long lists and small embedded stacks.',
        he: 'גם רקורסיה היא O(n) בזמן, אבל צורכת O(n) ב-stack, וזה מסוכן ברשימות ארוכות וב-embedded עם stack קטן.',
      },
    ],
    extras: [
      {
        en: 'Edge cases: an empty list returns null because the loop never runs, and a single node returns itself.',
        he: 'מקרי קצה: רשימה ריקה מחזירה null כי הלולאה לא רצה, וצומת יחיד מחזיר את עצמו.',
      },
      {
        en: 'Common follow-ups: reverse only positions m to n, reverse in groups of k, or check whether a list is a palindrome.',
        he: 'שאלות המשך נפוצות: להפוך רק את המקומות m עד n, להפוך בקבוצות של k, או לבדוק אם רשימה היא פלינדרום.',
      },
      {
        en: 'A doubly linked list is reversed by swapping each node\'s prev and next pointers.',
        he: 'רשימה דו-כיוונית הופכים על ידי החלפת המצביעים prev ו-next בכל צומת.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `struct Node { int value; struct Node *next; };

struct Node *reverse(struct Node *head) {
    struct Node *prev = NULL;
    while (head) {
        struct Node *next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`,
      },
      {
        language: 'cpp',
        code: `struct Node { int value; Node* next; };

Node* reverse(Node* head) {
    Node* prev = nullptr;
    while (head) {
        Node* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`,
      },
      {
        language: 'java',
        code: `class Node { int value; Node next; }

static Node reverse(Node head) {
    Node prev = null;
    while (head != null) {
        Node next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`,
      },
      {
        language: 'python',
        code: `class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

def reverse(head):
    prev = None
    while head:
        nxt = head.next
        head.next = prev
        prev = head
        head = nxt
    return prev`,
      },
    ],
  },
  {
    id: 'q-first-unique-char',
    text: {
      en: 'Find the first non-repeating character in a string.',
      he: 'מצאו את התו הראשון שלא חוזר על עצמו במחרוזת.',
    },
    details: {
      description: {
        en: 'Given a string s, return the index of the first character that appears exactly once. If there is none, return -1.',
        he: 'נתונה מחרוזת s. החזירו את האינדקס של התו הראשון שמופיע בדיוק פעם אחת. אם אין כזה, החזירו -1.',
      },
      examples: [
        {
          input: 's = "leetcode"',
          output: '0',
          explanation: { en: '"l" appears once and comes first.', he: '"l" מופיע פעם אחת והוא הראשון.' },
        },
        {
          input: 's = "aabb"',
          output: '-1',
          explanation: { en: 'Every character repeats.', he: 'כל תו חוזר על עצמו.' },
        },
      ],
      constraints: [
        { en: 's contains only lowercase English letters', he: 's מכיל רק אותיות אנגליות קטנות' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'frontend', 'student', 'data', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 2,
    answer: {
      en: 'I use two passes with a frequency count. The first pass counts how many times each character appears. The second pass walks the string again from the left and returns the first index whose count is exactly 1, or -1 if there is none.\nWith only lowercase letters, an array of 26 counters beats a hash map. Time is O(n), and space is O(1) for a fixed alphabet.',
      he: 'משתמשים בשני מעברים עם ספירת שכיחויות. המעבר הראשון סופר כמה פעמים מופיע כל תו. המעבר השני עובר שוב על המחרוזת משמאל ומחזיר את האינדקס הראשון שהמונה שלו בדיוק 1, או -1 אם אין כזה.\nכשיש רק אותיות קטנות באנגלית, מערך של 26 מונים עדיף על hash map. זמן O(n), וזיכרון O(1) לאלפבית קבוע.',
    },
    approach: [
      {
        en: 'Clarify: return the index or the character, what the character set is, whether case matters, and the result for an empty string.',
        he: 'מבהירים: מחזירים אינדקס או תו, מהו סט התווים, האם יש הבדל בין גדולות לקטנות, ומה מחזירים למחרוזת ריקה.',
      },
      {
        en: 'Brute force: for each index, scan the whole string for another occurrence: O(n^2) time, O(1) space.',
        he: 'Brute force: לכל אינדקס סורקים את כל המחרוזת ומחפשים מופע נוסף: O(n^2) זמן, O(1) זיכרון.',
      },
      {
        en: 'Insight: each character only needs its total count, which one pass can compute in advance.',
        he: 'התובנה: לכל תו צריך רק את מספר ההופעות הכולל שלו, ומעבר אחד מחשב את זה מראש.',
      },
      {
        en: 'Count into an array of 26, then scan from index 0 and return the first index with count 1, else -1.',
        he: 'סופרים לתוך מערך של 26, ואז סורקים מאינדקס 0 ומחזירים את האינדקס הראשון שהמונה שלו 1, אחרת -1.',
      },
      {
        en: 'Test: "leetcode" gives 0, "loveleetcode" gives 2, "aabb" gives -1, then an empty string and a single character.',
        he: 'בדיקה: "leetcode" מחזיר 0, ‏"loveleetcode" מחזיר 2, ‏"aabb" מחזיר -1, ואז מחרוזת ריקה ותו יחיד.',
      },
    ],
    keyPoints: [
      {
        en: 'Scan the string in the second pass, not the map: the order of the string defines "first".',
        he: 'במעבר השני עוברים על המחרוזת ולא על ה-map: הסדר במחרוזת הוא מה שמגדיר "ראשון".',
      },
      {
        en: 'Space is O(k) for alphabet size k, so O(1) here, and a plain array avoids hashing overhead.',
        he: 'הזיכרון הוא O(k) לפי גודל האלפבית k, כלומר O(1) כאן, ומערך פשוט חוסך את התקורה של hashing.',
      },
      {
        en: 'Avoid hidden O(n^2) solutions such as calling count() or indexOf for every character.',
        he: 'להיזהר מפתרונות O(n^2) מוסתרים, כמו קריאה ל-count() או ל-indexOf על כל תו.',
      },
      {
        en: 'For Unicode input use a hash map; in Java one char is not always one character (surrogate pairs).',
        he: 'לקלט Unicode משתמשים ב-hash map, וב-Java צריך לזכור ש-char אחד הוא לא תמיד תו אחד (surrogate pairs).',
      },
    ],
    extras: [
      {
        en: 'Edge cases: an empty string returns -1, a string where every character repeats returns -1, and a single character returns 0.',
        he: 'מקרי קצה: מחרוזת ריקה מחזירה -1, מחרוזת שכל התווים בה חוזרים מחזירה -1, ותו יחיד מחזיר 0.',
      },
      {
        en: 'Stream follow-up: keep counts plus a queue or a LinkedHashMap and pop repeated characters from the front, amortised O(1) per character.',
        he: 'שאלת המשך על stream: מחזיקים מונים ועוד תור או LinkedHashMap, ומוציאים מהחזית תווים שחזרו. יוצא O(1) amortised לכל תו.',
      },
      {
        en: 'In C, an array of 256 counters covers every possible byte value.',
        he: 'ב-C, מערך של 256 מונים מכסה כל ערך אפשרי של byte.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `int first_unique(const char *s) {
    int counts[256] = {0};
    for (const char *p = s; *p; p++)
        counts[(unsigned char)*p]++;
    for (int i = 0; s[i]; i++)
        if (counts[(unsigned char)s[i]] == 1)
            return i;
    return -1;   /* index of the first unique char, or -1 */
}`,
      },
      {
        language: 'cpp',
        code: `int firstUnique(const std::string& s) {
    std::unordered_map<char, int> counts;
    for (char c : s) counts[c]++;
    for (size_t i = 0; i < s.size(); ++i)
        if (counts[s[i]] == 1)
            return static_cast<int>(i);
    return -1;
}`,
      },
      {
        language: 'java',
        code: `static int firstUnique(String s) {
    Map<Character, Integer> counts = new HashMap<>();
    for (char c : s.toCharArray())
        counts.merge(c, 1, Integer::sum);
    for (int i = 0; i < s.length(); i++)
        if (counts.get(s.charAt(i)) == 1)
            return i;
    return -1;
}`,
      },
      {
        language: 'python',
        code: `from collections import Counter

def first_unique(s: str) -> int:
    counts = Counter(s)
    for i, c in enumerate(s):
        if counts[c] == 1:
            return i
    return -1`,
      },
    ],
  },
  {
    id: 'q-reverse-string',
    text: { en: 'Reverse a string in place.', he: 'הפכו מחרוזת במקום (in place).' },
    details: {
      description: {
        en: 'Given a string stored as an array of characters, reverse it in place: modify the array itself using O(1) extra memory and return nothing.',
        he: 'נתונה מחרוזת השמורה כמערך של תווים. הפכו אותה במקום: שנו את המערך עצמו בזיכרון נוסף של O(1), בלי להחזיר ערך.',
      },
      examples: [
        {
          input: 's = ["h","e","l","l","o"]',
          output: '["o","l","l","e","h"]',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'student', 'frontend', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 2,
    answer: {
      en: 'I use two pointers, left at the start and right at the end. While left is smaller than right, I swap the two characters and move both pointers toward the middle. Each swap puts two characters in their final place, and with an odd length the middle character stays put.\nTime is O(n), about n/2 swaps, and extra space is O(1) on a mutable character array.',
      he: 'משתמשים בשני מצביעים: left בהתחלה ו-right בסוף. כל עוד left קטן מ-right, מחליפים בין שני התווים ומקרבים את שני המצביעים לאמצע. כל החלפה מציבה שני תווים במקום הסופי שלהם, ובאורך אי-זוגי התו האמצעי נשאר במקומו.\nזמן O(n), בערך n/2 החלפות, וזיכרון נוסף O(1) על מערך תווים שאפשר לשנות.',
    },
    approach: [
      {
        en: 'Clarify: a mutable character array or an immutable string, whether to return a value, and the encoding (ASCII or Unicode).',
        he: 'מבהירים: מערך תווים שאפשר לשנות או מחרוזת immutable, האם מחזירים ערך, ומה הקידוד (ASCII או Unicode).',
      },
      {
        en: 'Brute force: copy the characters into a new array from end to start: O(n) time but O(n) extra space.',
        he: 'Brute force: מעתיקים את התווים למערך חדש מהסוף להתחלה: O(n) זמן, אבל O(n) זיכרון נוסף.',
      },
      {
        en: 'Insight: positions i and n - 1 - i trade places, so swapping symmetric pairs outside-in needs no extra storage.',
        he: 'התובנה: המקומות i ו-n - 1 - i מתחלפים, ולכן החלפת זוגות סימטריים מבחוץ פנימה לא דורשת אחסון נוסף.',
      },
      {
        en: 'Loop: left = 0, right = n - 1; while left < right, swap s[left] and s[right], then left++, right--.',
        he: 'הלולאה: left = 0, ‏right = n - 1. כל עוד left < right, מחליפים את s[left] ו-s[right], ואז left++, ‏right--.',
      },
      {
        en: 'Test: "hello" (odd length), "ab" (even length), "a", and the empty string.',
        he: 'בדיקה: "hello" (אורך אי-זוגי), ‏"ab" (אורך זוגי), ‏"a" ומחרוזת ריקה.',
      },
    ],
    keyPoints: [
      {
        en: 'In Java and Python strings are immutable, so O(1) space holds only for a character array.',
        he: 'ב-Java וב-Python מחרוזות הן immutable, ולכן O(1) בזיכרון נכון רק למערך תווים.',
      },
      {
        en: 'Guard the empty string: size() - 1 on an unsigned size_t wraps around to a huge number.',
        he: 'לשים לב למחרוזת ריקה: size() - 1 על size_t שהוא unsigned מתגלגל למספר ענק.',
      },
      {
        en: 'Reversing bytes breaks multi-byte UTF-8 characters, and Java chars can split surrogate pairs, so ask about the encoding.',
        he: 'היפוך של bytes שובר תווי UTF-8 מרובי בתים, וב-Java היפוך של char יכול לפרק surrogate pairs, אז שואלים על הקידוד.',
      },
      {
        en: 'Know std::reverse, StringBuilder.reverse() and s[::-1], but show the manual two-pointer version when asked.',
        he: 'להכיר את std::reverse, ‏StringBuilder.reverse() ו-s[::-1], אבל להראות את גרסת שני המצביעים כשמבקשים.',
      },
    ],
    extras: [
      {
        en: 'To reverse a Java or Python string you copy it into a char array or list, reverse that and build a new string, costing O(n) memory.',
        he: 'כדי להפוך מחרוזת ב-Java או ב-Python מעתיקים למערך תווים או לרשימה, הופכים ובונים מחרוזת חדשה, וזה עולה O(n) זיכרון.',
      },
      {
        en: 'The XOR swap trick avoids a temporary variable, but it is less readable and fails when both operands are the same memory location.',
        he: 'טריק ה-XOR swap חוסך משתנה זמני, אבל הוא פחות קריא ונכשל כששני האופרנדים הם אותו מקום בזיכרון.',
      },
      {
        en: 'In C, an end pointer computed on an empty string points before the buffer, so check the length first.',
        he: 'ב-C, מצביע לסוף שמחושב על מחרוזת ריקה מצביע לפני תחילת ה-buffer, ולכן בודקים את האורך קודם.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `#include <string.h>

void reverse(char *s) {
    size_t n = strlen(s);
    if (n < 2) return;              /* empty or one char: nothing to do */
    char *end = s + n - 1;
    while (s < end) {
        char tmp = *s;
        *s++ = *end;
        *end-- = tmp;
    }
}`,
      },
      {
        language: 'cpp',
        code: `void reverse(std::string& s) {
    if (s.size() < 2) return;  // s.size() - 1 would wrap around for an empty string
    for (size_t i = 0, j = s.size() - 1; i < j; ++i, --j)
        std::swap(s[i], s[j]);
    // or: std::reverse(s.begin(), s.end());
}`,
      },
      {
        language: 'java',
        code: `static String reverse(String s) {
    char[] chars = s.toCharArray();
    for (int i = 0, j = chars.length - 1; i < j; i++, j--) {
        char tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }
    return new String(chars);
    // or: new StringBuilder(s).reverse().toString()
}`,
      },
      {
        language: 'python',
        code: `def reverse(s: str) -> str:
    chars = list(s)
    i, j = 0, len(chars) - 1
    while i < j:
        chars[i], chars[j] = chars[j], chars[i]
        i, j = i + 1, j - 1
    return "".join(chars)
    # Idiomatic Python: s[::-1]`,
      },
    ],
  },
  {
    id: 'q-binary-search',
    text: {
      en: 'Implement binary search on a sorted array, and state its time and space complexity.',
      he: 'ממשו חיפוש בינארי במערך ממוין, וציינו את סיבוכיות הזמן והמקום.',
    },
    details: {
      description: {
        en: 'Given a sorted array of distinct integers nums and a value target, return the index of target in nums, or -1 if it is not there. Then state the time and space complexity of your solution.',
        he: 'נתונים מערך ממוין של מספרים שלמים שונים nums וערך target. החזירו את האינדקס של target ב-nums, או -1 אם אינו קיים. לאחר מכן ציינו את סיבוכיות הזמן והמקום של הפתרון.',
      },
      examples: [
        {
          input: 'nums = [-1, 0, 3, 5, 9, 12], target = 9',
          output: '4',
          explanation: { en: '9 is at index 4.', he: '9 נמצא באינדקס 4.' },
        },
        {
          input: 'nums = [-1, 0, 3, 5, 9, 12], target = 2',
          output: '-1',
          explanation: { en: '2 is not in the array.', he: '2 לא נמצא במערך.' },
        },
      ],
      constraints: [
        { en: 'nums is sorted in ascending order and has no duplicates', he: 'nums ממוין בסדר עולה וללא כפילויות' },
        { en: 'Aim for O(log n) time', he: 'שאפו לזמן O(log n)' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'data', 'verification', 'qa'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 3,
    answer: {
      en: 'Binary search keeps a range lo to hi that must contain the target. While lo <= hi, I check the middle: if it equals the target I return mid, if it is smaller I move lo to mid + 1, otherwise hi to mid - 1. If the range empties, I return -1.\nTime is O(log n), because each comparison discards half the range, and space is O(1) iteratively.',
      he: 'חיפוש בינארי מחזיק טווח מ-lo עד hi שחייב להכיל את היעד אם הוא קיים. כל עוד lo <= hi, בודקים את האיבר האמצעי: אם הוא שווה ליעד מחזירים את mid, אם הוא קטן ממנו מזיזים את lo ל-mid + 1, ואחרת את hi ל-mid - 1. אם הטווח התרוקן, מחזירים -1.\nזמן O(log n), כי כל השוואה זורקת חצי מהטווח, וזיכרון O(1) בגרסה האיטרטיבית.',
    },
    approach: [
      {
        en: 'Clarify: ascending order, distinct values, return the index or -1, and ask what should happen with duplicates.',
        he: 'מבהירים: סדר עולה, ערכים שונים, מחזירים אינדקס או -1, ושואלים מה קורה כשיש כפילויות.',
      },
      {
        en: 'Brute force: a linear scan, O(n) time and O(1) space, which ignores that the array is sorted.',
        he: 'Brute force: סריקה לינארית, O(n) זמן ו-O(1) זיכרון, שמתעלמת מכך שהמערך ממוין.',
      },
      {
        en: 'Insight: comparing the target with the middle element shows which half cannot contain it, so discard that half.',
        he: 'התובנה: השוואה של היעד לאיבר האמצעי מראה באיזה חצי הוא לא יכול להיות, ואת החצי הזה זורקים.',
      },
      {
        en: 'Loop while lo <= hi, set mid = lo + (hi - lo) / 2, then move lo or hi past mid.',
        he: 'לולאה כל עוד lo <= hi, עם mid = lo + (hi - lo) / 2, ומזיזים את lo או hi אל מעבר ל-mid.',
      },
      {
        en: 'Test: [-1, 0, 3, 5, 9, 12] with target 9 returns 4, target 2 returns -1, then empty and one-element arrays.',
        he: 'בדיקה: ‏[-1, 0, 3, 5, 9, 12] עם target 9 מחזיר 4, ‏target 2 מחזיר -1, ואז מערך ריק ומערך עם איבר אחד.',
      },
    ],
    keyPoints: [
      {
        en: 'Compute mid as lo + (hi - lo) / 2, because lo + hi can overflow an int.',
        he: 'מחשבים את mid כ-lo + (hi - lo) / 2, כי lo + hi יכול לגרום ל-overflow של int.',
      },
      {
        en: 'Do not mix closed [lo, hi] and half-open [lo, hi) ranges; that causes infinite loops or missed elements.',
        he: 'לא לערבב טווח סגור [lo, hi] עם טווח חצי פתוח [lo, hi). זה גורם ללולאות אינסופיות או לאיברים שמפספסים.',
      },
      {
        en: 'It needs sorted data with random access; on a linked list it gives no benefit.',
        he: 'הוא דורש נתונים ממוינים עם גישה אקראית. ברשימה מקושרת אין לו יתרון.',
      },
      {
        en: 'Expect variants: lower or upper bound with duplicates, insert position, a rotated array, and binary search on the answer.',
        he: 'לצפות לווריאציות: lower bound או upper bound עם כפילויות, מיקום הכנסה, מערך עם רוטציה, וחיפוש בינארי על התשובה.',
      },
    ],
    extras: [
      {
        en: 'A million elements need at most 20 comparisons. A recursive version uses O(log n) of call stack.',
        he: 'מיליון איברים דורשים לכל היותר 20 השוואות. גרסה רקורסיבית צורכת O(log n) במחסנית הקריאות.',
      },
      {
        en: 'The (lo + hi) / 2 overflow was a real bug in the JDK\'s Arrays.binarySearch for years, until it was fixed in 2006.',
        he: 'ה-overflow של (lo + hi) / 2 היה באג אמיתי ב-Arrays.binarySearch של ה-JDK במשך שנים, עד שתוקן ב-2006.',
      },
      {
        en: 'Sorting first costs O(n log n), which only pays off when you run many searches.',
        he: 'מיון מראש עולה O(n log n), וזה משתלם רק כשמריצים הרבה חיפושים.',
      },
      {
        en: 'Library versions: bisect in Python, std::lower_bound and std::binary_search in C++, Arrays.binarySearch in Java.',
        he: 'גרסאות ספרייה: bisect ב-Python, ‏std::lower_bound ו-std::binary_search ב-C++, ‏Arrays.binarySearch ב-Java.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def binary_search(items, target):       # items must be sorted
    lo, hi = 0, len(items) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if items[mid] == target:
            return mid
        if items[mid] < target:
            lo = mid + 1                    # half of the range is gone after each step
        else:
            hi = mid - 1
    return -1
# 1,000,000 items -> at most 20 comparisons (2^20 > 1,000,000)`,
      },
      {
        language: 'cpp',
        code: `#include <vector>

int binarySearch(const std::vector<int>& items, int target) {   // items must be sorted
    int lo = 0, hi = (int)items.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;                            // no overflow, unlike (lo + hi) / 2
        if (items[mid] == target) return mid;
        if (items[mid] < target) lo = mid + 1;                   // target is in the right half
        else hi = mid - 1;                                       // target is in the left half
    }
    return -1;
}`,
      },
      {
        language: 'java',
        code: `static int binarySearch(int[] items, int target) {   // items must be sorted
    int lo = 0, hi = items.length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;                 // avoids int overflow
        if (items[mid] == target) return mid;
        if (items[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}`,
      },
      {
        language: 'c',
        code: `int binary_search(const int* items, int n, int target) {   /* items must be sorted */
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (items[mid] == target) return mid;
        if (items[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}`,
      },
    ],
  },

  // ---------- Java / Python / JavaScript ----------
  {
    id: 'q-abstract-interface',
    text: {
      en: 'What is the difference between an abstract class and an interface in Java?',
      he: 'מה ההבדל בין מחלקה אבסטרקטית לממשק (interface) ב-Java?',
    },
    topicId: 'java',
    roleIds: ['software', 'backend', 'qa'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'An abstract class is a partially implemented base class that subclasses extend, while an interface is a contract that any class can promise to implement.\nThe key differences: a class can extend only one class but implement many interfaces, and an abstract class can have instance fields and constructors, while an interface has only constants. I use an abstract class when related classes share state and code, and an interface to define a capability, like Comparable or Runnable.',
      he: 'מחלקה אבסטרקטית היא מחלקת בסיס עם מימוש חלקי שמחלקות יורשות ממנה, ואילו interface הוא חוזה שכל מחלקה יכולה להתחייב לממש.\nההבדלים המרכזיים: מחלקה יכולה לרשת רק ממחלקה אחת אבל לממש הרבה interfaces, ולמחלקה אבסטרקטית יכולים להיות שדות מופע ו-constructors, בעוד ב-interface יש רק קבועים. משתמשים במחלקה אבסטרקטית כשלמחלקות קשורות יש מצב וקוד משותפים, וב-interface כדי להגדיר יכולת, כמו Comparable או Runnable.',
    },
    example: {
      en: 'In the JDK, AbstractList implements most of List, so a read-only list only needs get and size. Comparable, by contrast, is implemented by unrelated classes such as String and Integer.',
      he: 'ב-JDK, ‏AbstractList מממשת את רוב List, כך שרשימה לקריאה בלבד צריכה לממש רק get ו-size. לעומת זאת, את Comparable מממשות מחלקות שלא קשורות זו לזו, כמו String ו-Integer.',
    },
    keyPoints: [
      {
        en: 'Since Java 8 interfaces can have default and static methods, and since Java 9 private methods.',
        he: 'מ-Java 8 ל-interface יכולות להיות מתודות default ו-static, ומ-Java 9 גם מתודות private.',
      },
      {
        en: '"Is a" versus "can do": extending says what something is, implementing says what it can do.',
        he: '"is a" לעומת "can do": ירושה אומרת מה משהו הוא, ומימוש interface אומר מה הוא יודע לעשות.',
      },
      {
        en: 'An interface with one abstract method is a functional interface and can be the target of a lambda.',
        he: 'interface עם מתודה אבסטרקטית אחת הוא functional interface, ויכול להיות יעד של lambda.',
      },
      {
        en: '"Program to an interface": it keeps code loosely coupled and easy to test with mocks.',
        he: '"Program to an interface": זה שומר על צימוד רופף ומקל על בדיקות עם mocks.',
      },
    ],
    extras: [
      {
        en: 'Default methods let interfaces evolve, for example adding forEach and stream to the collections without breaking existing implementations.',
        he: 'default methods מאפשרים ל-interfaces להתפתח, למשל להוסיף forEach ו-stream ל-collections בלי לשבור מימושים קיימים.',
      },
      {
        en: 'If two interfaces provide the same default method, the class must override it and can call InterfaceName.super.method().',
        he: 'אם שני interfaces מספקים אותה default method, המחלקה חייבת לעשות override, ויכולה לקרוא ל-InterfaceName.super.method().',
      },
      {
        en: 'A common pattern combines both: an interface for the contract plus an abstract skeleton class that implements it.',
        he: 'דפוס נפוץ משלב את שניהם: interface לחוזה, ומחלקת skeleton אבסטרקטית שמממשת אותו.',
      },
      {
        en: 'Since Java 17, sealed classes and interfaces restrict which classes may extend or implement them.',
        he: 'מ-Java 17, ‏sealed classes ו-sealed interfaces מגבילים אילו מחלקות רשאיות לרשת מהם או לממש אותם.',
      },
    ],
    codeExamples: [
      {
        language: 'java',
        code: `interface Drawable { void draw(); }                  // a capability, no state

abstract class Shape {                               // shared state + partial code
    protected String name;
    Shape(String name) { this.name = name; }
    abstract double area();
    void describe() { System.out.println(name + " " + area()); }
}

class Circle extends Shape implements Drawable {     // ONE base class, MANY interfaces
    double r;
    Circle(double r) { super("circle"); this.r = r; }
    double area() { return Math.PI * r * r; }
    public void draw() { System.out.println("O"); }
}`,
      },
    ],
  },
  {
    id: 'q-garbage-collection',
    text: {
      en: 'How does garbage collection work in Java?',
      he: 'איך עובד איסוף זבל (Garbage Collection) ב-Java?',
    },
    topicId: 'java',
    roleIds: ['software', 'backend'],
    type: 'conceptual',
    difficulty: 'hard',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'Garbage collection is the JVM automatically freeing heap memory of objects the program can no longer reach. The collector starts from GC roots, such as local variables on thread stacks and static fields, marks everything reachable, and reclaims the rest, so even cycles are collected.\nThe heap is generational because most objects die young: new objects go to Eden, cheap minor collections copy the survivors, and long-lived objects are promoted to the old generation, which is collected less often.',
      he: 'Garbage collection הוא ה-JVM שמשחרר אוטומטית זיכרון ב-heap של אובייקטים שהתוכנית כבר לא יכולה להגיע אליהם. האוסף מתחיל מ-GC roots, כמו משתנים מקומיים ב-stack של כל thread ושדות סטטיים, מסמן את כל מה שנגיש ומשחרר את השאר, ולכן גם מעגלים של אובייקטים נאספים.\nה-heap מחולק לדורות כי רוב האובייקטים מתים צעירים: אובייקטים חדשים נכנסים ל-Eden, איסופי minor זולים מעתיקים את השורדים, ואובייקטים ותיקים מקודמים ל-old generation, שנאסף לעתים רחוקות יותר.',
    },
    example: {
      en: 'When a service shows latency spikes, running it with -Xlog:gc shows each pause and how much memory it freed. A static map that only grows is a classic Java leak: everything in it stays reachable.',
      he: 'כשלשירות יש קפיצות ב-latency, הרצה עם -Xlog:gc מראה כל השהיה וכמה זיכרון היא שחררה. map סטטי שרק גדל הוא דליפה קלאסית ב-Java: כל מה שבתוכו נשאר נגיש.',
    },
    keyPoints: [
      {
        en: 'Say "reachability": unlike reference counting in CPython or shared_ptr, cycles are not a problem.',
        he: 'להשתמש במילה reachability: בניגוד ל-reference counting ב-CPython או ב-shared_ptr, מעגלים הם לא בעיה.',
      },
      {
        en: 'Java can still leak: static maps, listeners never removed, unbounded caches, and ThreadLocal values in thread pools.',
        he: 'גם ב-Java יש דליפות: maps סטטיים, listeners שלא מוסרים, caches בלי גבול, וערכי ThreadLocal ב-thread pools.',
      },
      {
        en: 'G1 is the default since Java 9; ZGC and Shenandoah keep pauses at a few milliseconds on huge heaps.',
        he: 'G1 הוא ברירת המחדל מאז Java 9. ‏ZGC ו-Shenandoah שומרים על השהיות של מילישניות בודדות גם ב-heap ענק.',
      },
      {
        en: 'Frame collector choice as a trade-off between throughput, latency and memory footprint.',
        he: 'להציג את בחירת האוסף כ-trade-off בין throughput, ‏latency וצריכת זיכרון.',
      },
    ],
    extras: [
      {
        en: 'Some phases are stop-the-world and pause the application threads; modern collectors do most of the work concurrently.',
        he: 'חלק מהשלבים הם stop-the-world ועוצרים את ה-threads של האפליקציה. אוספים מודרניים עושים את רוב העבודה במקביל.',
      },
      {
        en: 'The old generation is collected with mark, sweep and compact, which is more expensive than a minor GC.',
        he: 'ה-old generation נאסף בשיטת mark, ‏sweep ו-compact, וזה יקר יותר מ-minor GC.',
      },
      {
        en: 'System.gc() is only a hint and finalize() is deprecated; release files and sockets with try-with-resources.',
        he: 'System.gc() הוא רק המלצה ו-finalize() הוא deprecated. קבצים ו-sockets משחררים עם try-with-resources.',
      },
      {
        en: 'Tuning basics: -Xms and -Xmx set the heap size, and -XX:MaxGCPauseMillis sets G1\'s pause goal. Weak and soft references help with caches.',
        he: 'כיוונון בסיסי: -Xms ו-‏-Xmx קובעים את גודל ה-heap, ו-‏-XX:MaxGCPauseMillis קובע את יעד ההשהיה של G1. ‏Weak ו-soft references עוזרים ב-caches.',
      },
    ],
    codeExamples: [
      {
        language: 'java',
        code: `Object a = new Object();     // reachable through 'a'
a = null;                    // now unreachable: eligible for collection

System.gc();                 // only a hint; the JVM decides when to collect

// Watch it happen:   java -Xlog:gc MyApp
// [gc] Pause Young (G1 Evacuation Pause) 24M->3M(64M) 2.1ms
//       ^ young generation collected: 24 MB of garbage became 3 MB of survivors`,
      },
    ],
  },
  {
    id: 'q-list-tuple',
    text: {
      en: 'What is the difference between a list and a tuple in Python?',
      he: 'מה ההבדל בין list ל-tuple ב-Python?',
    },
    topicId: 'python',
    roleIds: ['data', 'software', 'qa', 'student', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 1,
    answer: {
      en: 'Both are ordered sequences that can hold any type, but a list is mutable and a tuple is immutable.\nBecause it cannot change, a tuple is hashable when all its items are hashable, so it can be a dict key or a set element. It is also slightly smaller and faster to create. By convention a list holds a varying number of similar items, while a tuple is a fixed record where position has meaning, like (x, y).',
      he: 'שניהם רצפים מסודרים שיכולים להכיל כל טיפוס, אבל list הוא mutable ו-tuple הוא immutable.\nמכיוון שהוא לא משתנה, tuple הוא hashable כשכל האיברים שלו hashable, ולכן הוא יכול להיות מפתח ב-dict או איבר ב-set. הוא גם קצת קטן יותר ומהיר יותר ליצירה. לפי המוסכמה, list מחזיק מספר משתנה של פריטים דומים, ו-tuple הוא רשומה קבועה שבה למיקום יש משמעות, כמו (x, y).',
    },
    example: {
      en: 'A function that returns several values actually returns a tuple, unpacked with x, y = get_point(). Rows read from a file, which keep growing, belong in a list.',
      he: 'פונקציה שמחזירה כמה ערכים בעצם מחזירה tuple, ופורקים אותו עם x, y = get_point(). שורות שנקראות מקובץ ורק הולכות ומצטברות שייכות ל-list.',
    },
    keyPoints: [
      {
        en: 'Immutability is shallow: with t = ([1], 2), t[0].append(3) works, and that tuple cannot be hashed.',
        he: 'ה-immutability רדודה: עם t = ([1], 2), הפקודה t[0].append(3) עובדת, ואת ה-tuple הזה אי אפשר לעשות hash.',
      },
      {
        en: 'A one-element tuple needs a trailing comma, (1,), because (1) is just the integer 1.',
        he: 'tuple עם איבר אחד צריך פסיק בסוף, (1,), כי (1) הוא פשוט המספר 1.',
      },
      {
        en: 'For readable fixed records, mention collections.namedtuple, typing.NamedTuple or a frozen dataclass.',
        he: 'לרשומות קבועות וקריאות כדאי להזכיר collections.namedtuple, ‏typing.NamedTuple או dataclass עם frozen=True.',
      },
      {
        en: 'Both index in O(1) and test membership in O(n); use a set for fast "in" checks.',
        he: 'לשניהם גישה לפי אינדקס ב-O(1) ובדיקת שייכות ב-O(n). לבדיקת in מהירה משתמשים ב-set.',
      },
    ],
    extras: [
      {
        en: 'A list over-allocates space so that append is amortised O(1); constant tuples can be built once at compile time.',
        he: 'list מקצה מקום עודף כדי ש-append יהיה O(1) amortised, ו-tuples קבועים יכולים להיבנות פעם אחת בזמן הקומפילציה.',
      },
      {
        en: 'Classic trick: for t = ([1],), t[0] += [2] raises a TypeError but still extends the inner list.',
        he: 'טריק קלאסי: עבור t = ([1],), הפקודה t[0] += [2] זורקת TypeError ובכל זאת מרחיבה את ה-list הפנימי.',
      },
      {
        en: 'Use a tuple for data you want protected from accidental changes, and a list when items are added, removed or reordered.',
        he: 'tuple מתאים לנתונים שרוצים להגן עליהם משינוי בטעות, ו-list מתאים כשמוסיפים, מוחקים או מסדרים מחדש פריטים.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `nums = [1, 2, 3]
nums.append(4)              # lists change
nums[0] = 10

point = (3, 4)
# point[0] = 5              # TypeError: tuples do not change
lookup = {point: "home"}    # hashable -> usable as a dict key (a list is not)
x, y = point                # unpacking fixed-structure data`,
      },
    ],
  },
  {
    id: 'q-decorators',
    text: { en: 'What are Python decorators?', he: 'מהם דקורטורים ב-Python?' },
    topicId: 'python',
    roleIds: ['data', 'backend', 'qa', 'verification'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A decorator is a callable that takes a function and returns a replacement, usually a wrapper that adds behaviour before or after the original call without changing its code.\nIt works because functions are first-class objects: the wrapper is a closure that remembers the original function and calls it with *args and **kwargs. Writing @decorator above def f is just f = decorator(f), and it runs once, when the function is defined, not on every call.',
      he: 'דקורטור הוא callable שמקבל פונקציה ומחזיר משהו שמחליף אותה, בדרך כלל wrapper שמוסיף התנהגות לפני או אחרי הקריאה המקורית בלי לשנות את הקוד שלה.\nזה עובד כי ב-Python פונקציות הן first-class objects: ה-wrapper הוא closure שזוכר את הפונקציה המקורית וקורא לה עם *args ו-**kwargs. הכתיבה @decorator מעל def f היא פשוט f = decorator(f), והיא רצה פעם אחת, כשהפונקציה מוגדרת, ולא בכל קריאה.',
    },
    example: {
      en: 'A @timer decorator records the start time, calls the function and logs how long it took. Built-in examples include @functools.lru_cache for memoisation, @property, and @app.get for routing in FastAPI.',
      he: 'דקורטור @timer רושם את זמן ההתחלה, קורא לפונקציה ומדפיס ללוג כמה זמן היא לקחה. דוגמאות מוכנות: @functools.lru_cache ל-memoization, ‏@property, ו-@app.get לניתוב ב-FastAPI.',
    },
    keyPoints: [
      {
        en: 'Always use functools.wraps, otherwise the wrapped function is named "wrapper" and loses its docstring.',
        he: 'תמיד להשתמש ב-functools.wraps, אחרת הפונקציה העטופה נקראת wrapper ומאבדת את ה-docstring שלה.',
      },
      {
        en: 'A decorator with arguments, like @retry(times=3), is a factory that returns the real decorator.',
        he: 'דקורטור עם ארגומנטים, כמו @retry(times=3), הוא factory שמחזיר את הדקורטור האמיתי.',
      },
      {
        en: 'Stacking order matters: @a above @b gives a(b(f)), so a\'s code runs first on each call.',
        he: 'סדר ההערמה חשוב: @a מעל @b נותן a(b(f)), ולכן הקוד של a רץ ראשון בכל קריאה.',
      },
      {
        en: 'Decorating an async function needs an async wrapper that awaits the original.',
        he: 'כשעוטפים פונקציה async צריך wrapper שהוא async ועושה await למקורית.',
      },
    ],
    extras: [
      {
        en: 'Class decorators exist too: @dataclass returns the class with generated __init__, __repr__ and __eq__.',
        he: 'יש גם דקורטורים למחלקות: @dataclass מחזיר את המחלקה עם __init__, ‏__repr__ ו-__eq__ שנוצרו אוטומטית.',
      },
      {
        en: 'A decorator can be a class with __call__, which helps when it must keep state, such as a call counter.',
        he: 'דקורטור יכול להיות גם מחלקה עם __call__, וזה שימושי כשהוא צריך לשמור מצב, כמו מונה קריאות.',
      },
      {
        en: 'Decorators remove repeated cross-cutting code like logging, retries and permission checks, but too many layers hide what actually runs.',
        he: 'דקורטורים חוסכים קוד חוזר כמו לוגים, retries ובדיקות הרשאה, אבל יותר מדי שכבות מסתירות מה באמת רץ.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `import functools, time

def timed(func):
    @functools.wraps(func)                   # keeps the original name and docstring
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.perf_counter() - start:.3f}s")
        return result
    return wrapper

@timed                                       # same as:  slow = timed(slow)
def slow():
    time.sleep(0.2)

slow()                                       # slow took 0.200s`,
      },
    ],
  },
  {
    id: 'q-event-loop',
    text: {
      en: 'Explain the JavaScript event loop.',
      he: 'הסבירו את לולאת האירועים (Event Loop) ב-JavaScript.',
    },
    topicId: 'javascript',
    roleIds: ['frontend', 'fullstack'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'The event loop lets single-threaded JavaScript handle asynchronous work without blocking: it runs queued callbacks one at a time whenever the call stack is empty.\nSlow work like timers and network requests is handled by the browser or by libuv in Node, and its callback is queued when it finishes. The loop runs one task to completion, then drains all microtasks, such as promise callbacks and code after await, then may render, then takes the next task.',
      he: 'ה-event loop מאפשר ל-JavaScript, שרץ על thread יחיד, לטפל בעבודה אסינכרונית בלי לחסום: הוא מריץ callbacks מהתור אחד אחרי השני בכל פעם שה-call stack ריק.\nעבודה איטית כמו טיימרים ובקשות רשת מטופלת על ידי הדפדפן או על ידי libuv ב-Node, וה-callback שלה נכנס לתור כשהיא מסתיימת. הלולאה מריצה task אחד עד הסוף, אחר כך מרוקנת את כל ה-microtasks, כמו callbacks של promises והקוד שאחרי await, אחר כך אולי מרנדרת, ואז לוקחת את ה-task הבא.',
    },
    example: {
      en: 'Log 1, set a setTimeout of 0 that logs 4, add a resolved promise whose then logs 3, then log 2. The output is 1, 2, 3, 4: synchronous code first, then microtasks, then the timer task.',
      he: 'מדפיסים 1, מגדירים setTimeout של 0 שמדפיס 4, promise שכבר resolved שה-then שלו מדפיס 3, ואז מדפיסים 2. הפלט הוא 1, 2, 3, 4: קודם הקוד הסינכרוני, אחר כך ה-microtasks, ורק אז ה-task של הטיימר.',
    },
    keyPoints: [
      {
        en: 'Microtasks drain completely before the next task, so an endless promise chain can starve rendering and timers.',
        he: 'ה-microtasks מתרוקנים עד הסוף לפני ה-task הבא, ולכן שרשרת promises אינסופית יכולה להרעיב את הרינדור ואת הטיימרים.',
      },
      {
        en: 'setTimeout(fn, 0) is not immediate: it waits for the stack and the microtasks.',
        he: 'setTimeout(fn, 0) לא מיידי: הוא מחכה ל-stack ול-microtasks.',
      },
      {
        en: 'CPU-heavy code blocks everything, including clicks and rendering; move it to Web Workers or worker threads.',
        he: 'קוד כבד ב-CPU חוסם הכול, כולל לחיצות ורינדור. מעבירים אותו ל-Web Workers או ל-worker threads.',
      },
      {
        en: 'The engine is single-threaded, but Node\'s libuv uses a thread pool for file system, DNS and crypto work.',
        he: 'המנוע הוא single-threaded, אבל libuv ב-Node משתמש ב-thread pool למערכת הקבצים, ל-DNS ול-crypto.',
      },
    ],
    extras: [
      {
        en: 'Node adds its own phases (timers, poll, and check for setImmediate), and process.nextTick runs even before promise microtasks.',
        he: 'ב-Node יש שלבים משלו (timers, ‏poll, ו-check עבור setImmediate), ו-process.nextTick רץ אפילו לפני ה-microtasks של promises.',
      },
      {
        en: 'Rendering happens between tasks, so a long task freezes the UI; requestAnimationFrame callbacks run right before a paint.',
        he: 'הרינדור קורה בין tasks, ולכן task ארוך מקפיא את הממשק. ה-callbacks של requestAnimationFrame רצים ממש לפני ציור המסך.',
      },
      {
        en: 'Browsers clamp deeply nested timers to about 4 ms.',
        he: 'דפדפנים מגבילים טיימרים מקוננים לעומק לכ-4 מילישניות.',
      },
      {
        en: 'The model avoids locks and data races on shared memory, and handles thousands of concurrent I/O operations efficiently.',
        he: 'המודל הזה חוסך locks ו-data races על זיכרון משותף, ומטפל ביעילות באלפי פעולות I/O במקביל.',
      },
    ],
    codeExamples: [
      {
        language: 'javascript',
        code: `console.log("1: sync");

setTimeout(() => console.log("4: macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("3: microtask (promise)"));

console.log("2: sync");

// Output order: 1, 2, 3, 4
// The stack runs to the end, then ALL microtasks run, then the next macrotask.`,
      },
    ],
  },
  {
    id: 'q-let-var-const',
    text: {
      en: 'What is the difference between var, let and const in JavaScript?',
      he: 'מה ההבדל בין var, let ו-const ב-JavaScript?',
    },
    topicId: 'javascript',
    roleIds: ['frontend', 'fullstack', 'student'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'All three declare variables, but they differ in scope, hoisting and reassignment.\nvar is function-scoped and hoisted with the value undefined. let and const are block-scoped, and although they are hoisted too, touching them before their declaration throws a ReferenceError: that is the temporal dead zone. var and let can be reassigned, const cannot. In modern code I use const by default, let only when I must reassign, and never var.',
      he: 'שלושתם מצהירים על משתנים, אבל הם נבדלים ב-scope, ב-hoisting ובאפשרות להשים ערך מחדש.\nvar הוא function-scoped ועובר hoisting עם הערך undefined. ‏let ו-const הם block-scoped, וגם הם עוברים hoisting, אבל נגיעה בהם לפני ההצהרה זורקת ReferenceError: זה ה-temporal dead zone. ל-var ול-let אפשר להשים ערך חדש, ל-const לא. בקוד מודרני משתמשים ב-const כברירת מחדל, ב-let רק כשחייבים להשים מחדש, ולא ב-var.',
    },
    example: {
      en: 'for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)) prints 3, 3, 3, because every callback shares one i. With let, each iteration gets a fresh binding and it prints 0, 1, 2.',
      he: 'הלולאה for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)) מדפיסה 3, 3, 3, כי כל ה-callbacks חולקים את אותו i. עם let כל איטרציה מקבלת binding חדש, והפלט הוא 0, 1, 2.',
    },
    keyPoints: [
      {
        en: 'const protects the binding, not the value; Object.freeze makes an object read-only, but only one level deep.',
        he: 'const מגן על ה-binding ולא על הערך. ‏Object.freeze הופך אובייקט לקריאה בלבד, אבל רק ברמה אחת.',
      },
      {
        en: 'var can be redeclared in the same scope silently; redeclaring let or const is a SyntaxError.',
        he: 'את var אפשר להצהיר שוב באותו scope בלי שגיאה. הצהרה כפולה של let או const היא SyntaxError.',
      },
      {
        en: 'A top-level var pollutes the global object (window) and can clash with other scripts.',
        he: 'var ברמה העליונה מלכלך את האובייקט הגלובלי (window), ויכול להתנגש עם סקריפטים אחרים.',
      },
      {
        en: 'Function declarations are fully hoisted, body included, unlike function expressions assigned to variables.',
        he: 'הצהרות פונקציה עוברות hoisting מלא כולל הגוף, בניגוד ל-function expressions שמושמות למשתנה.',
      },
    ],
    extras: [
      {
        en: 'typeof on an undeclared variable safely returns "undefined", but typeof on a let variable inside its TDZ throws.',
        he: 'typeof על משתנה שלא הוצהר מחזיר "undefined" בבטחה, אבל typeof על משתנה let בתוך ה-TDZ שלו זורק שגיאה.',
      },
      {
        en: 'ESLint enforces the modern style with the no-var and prefer-const rules.',
        he: 'ESLint אוכף את הסגנון המודרני עם הכללים no-var ו-prefer-const.',
      },
      {
        en: 'A const must be initialised in the same statement that declares it.',
        he: 'const חייב לקבל ערך באותה הצהרה שבה הוא מוגדר.',
      },
    ],
    codeExamples: [
      {
        language: 'javascript',
        code: `console.log(a);   // undefined   (var is hoisted)
var a = 1;

// console.log(b); // ReferenceError: cannot use before declaration
let b = 2;

const c = { n: 1 };
c.n = 2;          // fine: the object itself is mutable
// c = {};        // TypeError: cannot reassign a const

if (true) { var x = 1; let y = 2; }
console.log(x);   // 1              (function-scoped)
// console.log(y); // ReferenceError (block-scoped)`,
      },
    ],
  },

  // ---------- REST / SQL / System design ----------
  {
    id: 'q-rest-api',
    text: { en: 'What is a REST API?', he: 'מהו REST API?' },
    topicId: 'rest',
    roleIds: ['backend', 'fullstack', 'frontend', 'software', 'qa', 'verification'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 3,
    answer: {
      en: 'REST is an architectural style for APIs over HTTP: clients work with resources identified by URLs, using the standard HTTP methods.\nURLs are nouns, like /users/42, and the method carries the action: GET reads, POST creates, PUT replaces, PATCH updates partially and DELETE removes. Each request is stateless, carrying everything the server needs, such as an auth token, which makes horizontal scaling easy. Responses are usually JSON with a meaningful status code.',
      he: 'REST הוא סגנון ארכיטקטוני ל-APIs מעל HTTP: הלקוח עובד עם משאבים שמזוהים על ידי URL, בעזרת מתודות ה-HTTP הסטנדרטיות.\nה-URLs הם שמות עצם, כמו /users/42, והמתודה מבטאת את הפעולה: GET קורא, POST יוצר, PUT מחליף, PATCH מעדכן חלקית ו-DELETE מוחק. כל בקשה היא stateless ונושאת את כל מה שהשרת צריך, כמו auth token, וזה מקל על horizontal scaling. התשובות הן בדרך כלל JSON עם קוד סטטוס בעל משמעות.',
    },
    example: {
      en: 'GET /users/42 returns 200 with the user as JSON, POST /users returns 201 with a Location header pointing to the new user, and DELETE /users/42 returns 204 No Content.',
      he: 'GET /users/42 מחזיר 200 עם המשתמש כ-JSON, ‏POST /users מחזיר 201 עם header בשם Location שמצביע על המשתמש החדש, ו-DELETE /users/42 מחזיר 204 No Content.',
    },
    keyPoints: [
      {
        en: 'Safe versus idempotent: GET is both, PUT and DELETE are idempotent but not safe, POST is neither.',
        he: 'safe לעומת idempotent: ‏GET הוא גם וגם, PUT ו-DELETE אידמפוטנטיים אבל לא safe, ו-POST אף אחד מהם.',
      },
      {
        en: 'Know 401 versus 403: 401 means not authenticated, 403 means authenticated but not allowed.',
        he: 'להכיר את ההבדל בין 401 ל-403: ‏401 אומר לא מאומת, ו-403 אומר מאומת אבל אין הרשאה.',
      },
      {
        en: 'Filtering, sorting and pagination go in query parameters, like /users?role=admin&page=2.',
        he: 'סינון, מיון ו-pagination שייכים ל-query parameters, כמו /users?role=admin&page=2.',
      },
      {
        en: 'Strict REST includes HATEOAS links in responses; most real APIs skip it and are really "REST-like".',
        he: 'REST במובן המחמיר כולל קישורי HATEOAS בתשובות. רוב ה-APIs בפועל מדלגים על זה והם בעצם REST-like.',
      },
    ],
    extras: [
      {
        en: 'GET responses can be cached with headers such as Cache-Control and ETag, so existing proxies and caches just work.',
        he: 'אפשר לשמור תשובות GET ב-cache עם headers כמו Cache-Control ו-ETag, כך שתשתית קיימת של proxies ו-caches פשוט עובדת.',
      },
      {
        en: 'Trade-offs: REST can over-fetch or need many round trips; GraphQL lets clients choose fields, and gRPC suits fast internal calls.',
        he: 'Trade-offs: ‏REST יכול לגרום ל-over-fetching או להרבה round trips. ‏GraphQL מאפשר ללקוח לבחור שדות, ו-gRPC מתאים לקריאות פנימיות מהירות.',
      },
      {
        en: 'Statelessness pairs naturally with token authentication, such as a bearer token or JWT in the Authorization header.',
        he: 'Stateless מתאים באופן טבעי לאימות עם token, כמו bearer token או JWT ב-header בשם Authorization.',
      },
      {
        en: 'Versioning, such as /v1/ in the URL, is a common follow-up topic.',
        he: 'Versioning, כמו /v1/ ב-URL, הוא נושא המשך נפוץ.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `from fastapi import FastAPI
app = FastAPI()

@app.get("/users/{user_id}")             # resource identified by its URL
def get_user(user_id: int):
    return {"id": user_id, "name": "Dana"}     # JSON representation

@app.post("/users", status_code=201)     # standard method + meaningful status code
def create_user(user: dict):
    return user`,
      },
      {
        language: 'javascript',
        code: `// The client side of the same API
const res = await fetch("/api/users/7");           // GET
const user = await res.json();

await fetch("/api/users", {                        // POST
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Dana" }),
});`,
      },
    ],
  },
  {
    id: 'q-status-codes',
    text: {
      en: 'Which HTTP status codes would you return for a missing resource vs. a validation error?',
      he: 'אילו קודי סטטוס HTTP תחזירו עבור משאב חסר לעומת שגיאת ולידציה?',
    },
    topicId: 'rest',
    roleIds: ['backend', 'fullstack', 'frontend', 'qa'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'For a resource that does not exist I return 404 Not Found. For a validation error I return 400 Bad Request, or 422 Unprocessable Content when the request is well-formed but its data breaks the rules.\n400 fits requests the server cannot parse at all, like malformed JSON or a string where a number belongs. 422 fits valid syntax with invalid meaning, like an end date before the start date. Many APIs use 400 for both, which is fine if it is consistent.',
      he: 'למשאב שלא קיים מחזירים 404 Not Found. לשגיאת ולידציה מחזירים 400 Bad Request, או 422 Unprocessable Content כשהבקשה בנויה נכון אבל הנתונים בה שוברים את הכללים.\n400 מתאים לבקשה שהשרת בכלל לא מצליח לפרסר, כמו JSON פגום או מחרוזת במקום שצריך מספר. ‏422 מתאים לתחביר תקין עם תוכן לא תקין, כמו תאריך סיום לפני תאריך התחלה. הרבה APIs משתמשים ב-400 לשני המקרים, וזה בסדר כל עוד זה עקבי.',
    },
    example: {
      en: 'GET /users/999 when there is no such user returns 404. POST /users with an invalid email returns 422 and a body listing each bad field and the reason, so the frontend can show it next to the input.',
      he: 'GET /users/999 כשאין משתמש כזה מחזיר 404. ‏POST /users עם email לא תקין מחזיר 422 עם גוף שמפרט כל שדה שגוי ואת הסיבה, כדי שה-frontend יציג את ההודעה ליד השדה.',
    },
    keyPoints: [
      {
        en: 'Return a consistent, machine-readable error body; RFC 9457 Problem Details is the standard format.',
        he: 'להחזיר גוף שגיאה עקבי שמכונה יכולה לקרוא. ‏RFC 9457 ‏(Problem Details) הוא הפורמט הסטנדרטי.',
      },
      {
        en: 'Never return 200 with an error inside the body; it breaks monitoring, retries and client error handling.',
        he: 'אף פעם לא להחזיר 200 עם שגיאה בתוך הגוף. זה שובר ניטור, retries וטיפול בשגיאות בצד הלקוח.',
      },
      {
        en: 'Use 409 Conflict for duplicates, such as an email that is already registered, not 400.',
        he: 'משתמשים ב-409 Conflict לכפילויות, כמו email שכבר רשום, ולא ב-400.',
      },
      {
        en: 'An empty search result, like GET /users?name=x, is 200 with an empty list, not 404.',
        he: 'חיפוש שלא מצא כלום, כמו GET /users?name=x, מחזיר 200 עם רשימה ריקה ולא 404.',
      },
    ],
    extras: [
      {
        en: 'Related codes: 401 when the client is not authenticated, 403 when it is authenticated but not allowed, 405 Method Not Allowed.',
        he: 'קודים קשורים: 401 כשהלקוח לא מאומת, 403 כשהוא מאומת אבל אין לו הרשאה, ו-405 Method Not Allowed.',
      },
      {
        en: 'Some APIs return 404 instead of 403 for a resource the caller may not see, so they do not reveal that it exists.',
        he: 'יש APIs שמחזירים 404 במקום 403 על משאב שאסור למשתמש לראות, כדי לא לחשוף שהוא בכלל קיים.',
      },
      {
        en: '4xx versus 5xx drives behaviour: clients and gateways retry 5xx and some 429s, and alerts usually fire on 5xx rates.',
        he: 'ההפרדה בין 4xx ל-5xx קובעת התנהגות: לקוחות ו-gateways עושים retry ל-5xx ולחלק מה-429, והתראות מבוססות בדרך כלל על שיעור ה-5xx.',
      },
      {
        en: 'FastAPI returns 422 for validation errors by default. 422 was formerly called Unprocessable Entity.',
        he: 'FastAPI מחזיר 422 לשגיאות ולידציה כברירת מחדל. בעבר 422 נקרא Unprocessable Entity.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `from fastapi import FastAPI, HTTPException
app = FastAPI()

@app.get("/users/{user_id}")
def get_user(user_id: int):
    user = db.get(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="user not found")
    return user

@app.post("/users")
def create_user(payload: dict):
    if "email" not in payload:
        raise HTTPException(status_code=422, detail="email is required")
    return payload`,
      },
    ],
  },
  {
    id: 'q-put-patch',
    text: { en: 'What is the difference between PUT and PATCH?', he: 'מה ההבדל בין PUT ל-PATCH?' },
    topicId: 'rest',
    roleIds: ['backend', 'fullstack', 'frontend'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'PUT replaces the whole resource with the representation in the request, while PATCH changes only the fields it sends.\nWith PUT, any field left out is reset or removed. PUT is idempotent by definition: sending it once or ten times leaves the same state. PATCH is not guaranteed to be idempotent: "set email to x" is, but "add 1 to the balance" is not. I use PUT when the client owns the full state, and PATCH for small edits.',
      he: 'PUT מחליף את המשאב כולו בייצוג שנשלח בבקשה, ואילו PATCH משנה רק את השדות שהוא שולח.\nב-PUT, כל שדה שלא נשלח מתאפס או נמחק. PUT אידמפוטנטי לפי ההגדרה: שליחה אחת או עשר שליחות משאירות את אותו מצב. PATCH לא מובטח כאידמפוטנטי: "קבע את ה-email ל-x" כן, אבל "הוסף 1 ליתרה" לא. משתמשים ב-PUT כשהלקוח מחזיק את המצב המלא, וב-PATCH לעריכות קטנות.',
    },
    example: {
      en: 'A user has name, email and phone. PUT /users/7 with only name and email removes the phone. PATCH /users/7 with only email changes the email and keeps everything else.',
      he: 'למשתמש יש name, ‏email ו-phone. ‏PUT /users/7 עם name ו-email בלבד מוחק את ה-phone. ‏PATCH /users/7 עם email בלבד משנה את ה-email ומשאיר את כל השאר.',
    },
    keyPoints: [
      {
        en: 'Idempotency matters for retries: a PUT can be retried safely after a timeout, a non-idempotent PATCH may apply twice.',
        he: 'ל-idempotency יש משמעות ב-retries: אפשר לשלוח PUT שוב בבטחה אחרי timeout, אבל PATCH לא אידמפוטנטי עלול לחול פעמיים.',
      },
      {
        en: 'Neither PUT nor PATCH is safe, because both change server state.',
        he: 'גם PUT וגם PATCH אינם safe, כי שניהם משנים מצב בשרת.',
      },
      {
        en: 'Mention lost updates: ETag plus If-Match, with 412 Precondition Failed on a conflict.',
        he: 'להזכיר את בעיית ה-lost update: ‏ETag יחד עם If-Match, והשרת מחזיר 412 Precondition Failed כשיש התנגשות.',
      },
      {
        en: 'PATCH formats include JSON Merge Patch (RFC 7396) and JSON Patch (RFC 6902), a list of operations.',
        he: 'פורמטים ל-PATCH: ‏JSON Merge Patch ‏(RFC 7396) ו-JSON Patch ‏(RFC 6902), שהוא רשימת פעולות.',
      },
    ],
    extras: [
      {
        en: 'PUT to a URL the client chooses can create the resource, like PUT /config/theme; PATCH usually needs the resource to exist.',
        he: 'PUT ל-URL שהלקוח בוחר יכול ליצור את המשאב, כמו PUT /config/theme. ‏PATCH בדרך כלל דורש שהמשאב כבר קיים.',
      },
      {
        en: 'In JSON Merge Patch, setting a field to null means "delete this field", which surprises many clients.',
        he: 'ב-JSON Merge Patch, השמה של null לשדה אומרת "מחק את השדה", וזה מפתיע הרבה לקוחות.',
      },
      {
        en: 'PATCH was added later, in RFC 5789, as a separate standard.',
        he: 'PATCH נוסף מאוחר יותר, ב-RFC 5789, כתקן נפרד.',
      },
      {
        en: 'PATCH also suits large resources and avoids overwriting fields the client does not know about.',
        he: 'PATCH מתאים גם למשאבים גדולים, ונמנע מדריסה של שדות שהלקוח לא מכיר.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `# PUT: send the WHOLE resource; fields you leave out are gone
curl -X PUT /users/7 -H "Content-Type: application/json" \\
     -d '{"name": "Dana", "email": "dana@example.com"}'

# PATCH: send only what changes
curl -X PATCH /users/7 -H "Content-Type: application/json" \\
     -d '{"email": "new@example.com"}'`,
      },
    ],
  },
  {
    id: 'q-sql-join',
    text: {
      en: 'What is the difference between INNER JOIN and LEFT JOIN?',
      he: 'מה ההבדל בין INNER JOIN ל-LEFT JOIN?',
    },
    topicId: 'sql',
    roleIds: ['backend', 'fullstack', 'data', 'software', 'qa'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'INNER JOIN returns only rows that have a match in both tables, while LEFT JOIN returns every row from the left table and fills the right side with NULL where there is no match.\nI use INNER JOIN when the related row must exist, like orders with their customers, and LEFT JOIN when the main entity must always appear, like all customers with their order count, including those with zero orders.',
      he: 'INNER JOIN מחזיר רק שורות שיש להן התאמה בשתי הטבלאות, ואילו LEFT JOIN מחזיר את כל השורות מהטבלה השמאלית וממלא את הצד הימני ב-NULL היכן שאין התאמה.\nמשתמשים ב-INNER JOIN כשהשורה הקשורה חייבת להתקיים, כמו הזמנות עם הלקוחות שלהן, וב-LEFT JOIN כשהישות הראשית חייבת להופיע תמיד, כמו כל הלקוחות עם מספר ההזמנות שלהם, כולל לקוחות עם אפס הזמנות.',
    },
    example: {
      en: 'With employees and departments, INNER JOIN shows only employees who have a department. LEFT JOIN also shows Noa, who has none, with NULL as her department. Adding WHERE d.id IS NULL finds exactly those employees.',
      he: 'עם employees ו-departments, ‏INNER JOIN מציג רק עובדים שיש להם מחלקה. ‏LEFT JOIN מציג גם את נועה, שאין לה מחלקה, עם NULL בשם המחלקה. הוספת WHERE d.id IS NULL מוצאת בדיוק את העובדים האלה.',
    },
    keyPoints: [
      {
        en: 'A WHERE filter on the right table silently turns a LEFT JOIN into an INNER JOIN; put it in ON.',
        he: 'סינון ב-WHERE על הטבלה הימנית הופך בשקט LEFT JOIN ל-INNER JOIN. שמים את התנאי ב-ON.',
      },
      {
        en: 'Count with COUNT(o.id), not COUNT(*), or a customer with no orders shows 1.',
        he: 'סופרים עם COUNT(o.id) ולא COUNT(*), אחרת לקוח בלי הזמנות יקבל 1.',
      },
      {
        en: 'One-to-many joins multiply rows and can inflate SUM and COUNT; aggregate in a subquery first.',
        he: 'JOIN על קשר של אחד לרבים מכפיל שורות ויכול לנפח SUM ו-COUNT. עושים את האגרגציה קודם בתת-שאילתה.',
      },
      {
        en: 'NULL never equals NULL, so rows with a NULL join key never match.',
        he: 'NULL אף פעם לא שווה ל-NULL, ולכן שורות שמפתח ה-JOIN שלהן NULL לעולם לא מותאמות.',
      },
    ],
    extras: [
      {
        en: 'If a left row matches several right rows, both joins return it once per match.',
        he: 'אם לשורה שמאלית יש כמה התאמות בצד הימני, שני סוגי ה-JOIN מחזירים אותה פעם לכל התאמה.',
      },
      {
        en: 'NOT EXISTS is an equivalent and often clearer alternative to the LEFT JOIN plus IS NULL anti-join.',
        he: 'NOT EXISTS הוא חלופה שקולה ולרוב ברורה יותר ל-anti-join של LEFT JOIN עם IS NULL.',
      },
      {
        en: 'Index the join columns, usually the foreign key, or large joins will scan whole tables.',
        he: 'שמים אינדקס על עמודות ה-JOIN, בדרך כלל ה-foreign key, אחרת JOINs גדולים סורקים טבלאות שלמות.',
      },
    ],
    codeExamples: [
      {
        language: 'sql',
        code: `-- employees                 departments
-- id | name | dept_id       id | name
--  1 | Dana |  10           10 | R&D
--  2 | Noa  |  NULL         20 | Sales

SELECT e.name, d.name
FROM employees e
INNER JOIN departments d ON d.id = e.dept_id;
-- Dana | R&D                       (only rows with a match on both sides)

SELECT e.name, d.name
FROM employees e
LEFT JOIN departments d ON d.id = e.dept_id;
-- Dana | R&D
-- Noa  | NULL                      (every left row is kept)`,
      },
    ],
  },
  {
    id: 'q-second-salary',
    text: {
      en: 'Write a SQL query to find the second highest salary.',
      he: 'כתבו שאילתת SQL שמוצאת את המשכורת השנייה בגובהה.',
    },
    details: {
      description: {
        en: 'The table Employee has the columns id and salary. Write a query that returns the second highest distinct salary. If there is no second highest salary, return NULL.',
        he: 'בטבלה Employee יש את העמודות id ו-salary. כתבו שאילתה שמחזירה את המשכורת השנייה בגובהה (מבין הערכים השונים). אם אין משכורת שנייה בגובהה, החזירו NULL.',
      },
      rules: [
        { en: 'Equal salaries count once: for 300, 300, 200 the answer is 200.', he: 'משכורות זהות נספרות פעם אחת: עבור 300, 300, 200 התשובה היא 200.' },
      ],
      examples: [
        {
          input: 'Employee: (1, 100), (2, 200), (3, 300)',
          output: '200',
        },
        {
          input: 'Employee: (1, 100)',
          output: 'NULL',
          explanation: { en: 'Only one salary exists.', he: 'קיימת רק משכורת אחת.' },
        },
      ],
    },
    topicId: 'sql',
    roleIds: ['backend', 'data', 'fullstack'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'The classic solution is a nested MAX: a subquery finds the top salary, and the outer query takes the MAX of salaries strictly below it. Duplicates of the top salary are skipped, and if no second salary exists, MAX over zero rows returns NULL, as required.\nIt is O(n), and nearly instant with an index on salary. For the Nth salary, DENSE_RANK() OVER (ORDER BY salary DESC) generalises better.',
      he: 'הפתרון הקלאסי הוא MAX מקונן: תת-שאילתה מוצאת את המשכורת הגבוהה ביותר, והשאילתה החיצונית לוקחת את ה-MAX מבין המשכורות שקטנות ממנה ממש. עותקים של המשכורת העליונה מדולגים, ואם אין משכורת שנייה, MAX על אפס שורות מחזיר NULL, כמו שנדרש.\nזה O(n), וכמעט מיידי עם אינדקס על salary. למשכורת ה-N, ‏DENSE_RANK() OVER (ORDER BY salary DESC) מוכלל טוב יותר.',
    },
    example: {
      en: 'For salaries 300, 300 and 200 the answer is 200, and for a table that holds only 100 it is NULL.',
      he: 'עבור המשכורות 300, 300 ו-200 התשובה היא 200, ובטבלה שיש בה רק 100 התשובה היא NULL.',
    },
    approach: [
      {
        en: 'Clarify: table and column names, whether equal salaries count once, NULL versus an empty result, NULL salaries, and the dialect.',
        he: 'מבהירים: שמות הטבלה והעמודות, האם משכורות זהות נספרות פעם אחת, NULL או תוצאה ריקה, משכורות NULL, ואיזה dialect.',
      },
      {
        en: 'Naive: ORDER BY salary DESC and take the second row; it fails on ties and returns no row instead of NULL.',
        he: 'גישה נאיבית: ORDER BY salary DESC ולוקחים את השורה השנייה. היא נכשלת בתיקו ומחזירה אפס שורות במקום NULL.',
      },
      {
        en: 'Insight: the second highest distinct salary is the largest salary strictly below the maximum.',
        he: 'התובנה: המשכורת השנייה בגובהה מבין הערכים השונים היא המשכורת הגדולה ביותר שקטנה ממש מהמקסימום.',
      },
      {
        en: 'Write SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee). O(n), faster with an index.',
        he: 'כותבים SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee). זמן O(n), מהר יותר עם אינדקס.',
      },
      {
        en: 'Test: (100, 200, 300) gives 200, (300, 300, 200) gives 200, and (100) or an empty table gives NULL.',
        he: 'בדיקה: ‏(100, 200, 300) מחזיר 200, ‏(300, 300, 200) מחזיר 200, ו-(100) או טבלה ריקה מחזירים NULL.',
      },
    ],
    keyPoints: [
      {
        en: 'DENSE_RANK versus RANK versus ROW_NUMBER: for 300, 300, 200, RANK skips rank 2 and ROW_NUMBER returns 300 again.',
        he: 'DENSE_RANK לעומת RANK ו-ROW_NUMBER: עבור 300, 300, 200, ‏RANK מדלג על דירוג 2, ו-ROW_NUMBER מחזיר שוב 300.',
      },
      {
        en: 'Returning NULL differs from returning no rows, and the problem explicitly asks for NULL.',
        he: 'החזרת NULL שונה מהחזרת אפס שורות, והשאלה מבקשת במפורש NULL.',
      },
      {
        en: 'A DENSE_RANK query returns no rows when there is no rank 2, so wrap it in an outer SELECT MAX(...).',
        he: 'שאילתת DENSE_RANK מחזירה אפס שורות כשאין דירוג 2, ולכן עוטפים אותה ב-SELECT MAX(...) חיצוני.',
      },
      {
        en: 'Generalise on request: the Nth salary with DENSE_RANK, and per department with PARTITION BY department_id.',
        he: 'להכליל כשמבקשים: המשכורת ה-N עם DENSE_RANK, ולכל מחלקה עם PARTITION BY department_id.',
      },
    ],
    extras: [
      {
        en: 'LIMIT 1 OFFSET 1 needs DISTINCT and must be wrapped as a scalar subquery to return NULL. SQL Server uses OFFSET ... FETCH instead.',
        he: 'LIMIT 1 OFFSET 1 צריך DISTINCT, וצריך לעטוף אותו כ-scalar subquery כדי לקבל NULL. ב-SQL Server משתמשים ב-OFFSET ... FETCH במקום.',
      },
      {
        en: 'The window version sorts, O(n log n), unless an index already provides the order. MAX also ignores NULL salaries.',
        he: 'גרסת ה-window ממיינת, O(n log n), אלא אם אינדקס כבר מספק את הסדר. ‏MAX גם מתעלם ממשכורות NULL.',
      },
    ],
    codeSolutions: [
      {
        language: 'sql',
        code: `-- Option 1: the maximum below the maximum (NULL when there is none)
SELECT MAX(salary) AS second_highest
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Option 2: window function; the outer MAX turns "no row" into NULL
SELECT MAX(salary) AS second_highest
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM Employee
) ranked
WHERE rnk = 2;`,
      },
    ],
  },
  {
    id: 'q-database-index',
    text: {
      en: 'What is a database index and when would you add one?',
      he: 'מהו אינדקס במסד נתונים ומתי מוסיפים אחד?',
    },
    topicId: 'sql',
    roleIds: ['backend', 'data', 'fullstack'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A database index is a separate sorted structure, usually a B+tree, that maps column values to row locations, so the engine finds rows without scanning the whole table. A lookup is O(log n) and touches only a few pages even for millions of rows, and the linked leaves make range queries and ORDER BY cheap.\nI add one on columns used in frequent WHERE filters, JOIN keys and sorting on large tables, especially high-selectivity columns. The cost is slower writes and extra disk, so I confirm the gain with EXPLAIN.',
      he: 'אינדקס הוא מבנה נתונים נפרד וממוין, בדרך כלל B+tree, שממפה ערכי עמודה למיקום השורות, כך שהמנוע מוצא את השורות בלי לסרוק את כל הטבלה. חיפוש הוא O(log n) ונוגע רק בכמה דפים גם בטבלה של מיליוני שורות, והעלים המקושרים הופכים שאילתות טווח ו-ORDER BY לזולות.\nמוסיפים אינדקס על עמודות שמופיעות הרבה ב-WHERE, על מפתחות JOIN ועל עמודות מיון בטבלאות גדולות, בעיקר כשה-selectivity גבוהה. המחיר הוא כתיבות איטיות יותר ועוד מקום בדיסק, ולכן מאמתים את השיפור עם EXPLAIN.',
    },
    example: {
      en: 'An orders table with 10 million rows and WHERE customer_id = 42: without an index, EXPLAIN shows a sequential scan. After CREATE INDEX on customer_id it becomes an index scan that reads a handful of pages.',
      he: 'טבלת orders עם 10 מיליון שורות והשאילתה WHERE customer_id = 42: בלי אינדקס, EXPLAIN מראה sequential scan. אחרי CREATE INDEX על customer_id זה הופך ל-index scan שקורא כמה דפים בודדים.',
    },
    keyPoints: [
      {
        en: 'Composite indexes follow the leftmost-prefix rule: (customer_id, created_at) cannot serve a filter on created_at alone.',
        he: 'אינדקס מורכב עובד לפי כלל ה-leftmost prefix: אינדקס על (customer_id, created_at) לא משרת סינון לפי created_at לבד.',
      },
      {
        en: 'A covering index holds every column the query needs, so the table itself is never read.',
        he: 'covering index מכיל את כל העמודות שהשאילתה צריכה, ולכן הטבלה עצמה בכלל לא נקראת.',
      },
      {
        en: 'Low-selectivity columns like a boolean flag rarely benefit; the planner often scans anyway.',
        he: 'עמודות עם selectivity נמוכה, כמו דגל בוליאני, כמעט לא מרוויחות; ה-planner לרוב יסרוק בכל מקרה.',
      },
      {
        en: 'Functions on the column, implicit casts and leading wildcards (LIKE \'%abc\') usually prevent index use.',
        he: 'פונקציה על העמודה, המרת טיפוס מרומזת ו-wildcard בהתחלה (LIKE \'%abc\') בדרך כלל מונעים שימוש באינדקס.',
      },
    ],
    extras: [
      {
        en: 'Hash indexes help only equality lookups; a B+tree also serves ranges, ORDER BY and a prefix LIKE \'abc%\'.',
        he: 'hash index עוזר רק בהשוואת שוויון; B+tree משרת גם טווחים, ORDER BY ו-LIKE עם תחילית כמו \'abc%\'.',
      },
      {
        en: 'Clustered vs non-clustered: InnoDB stores the table in primary-key order, and secondary indexes point to the primary key.',
        he: 'clustered מול non-clustered: ב-InnoDB הטבלה שמורה לפי סדר ה-primary key, ואינדקסים משניים מצביעים על ה-primary key.',
      },
      {
        en: 'WHERE LOWER(email) = ... needs an expression index; a plain index on email will not be used.',
        he: 'WHERE LOWER(email) = ... צריך expression index; אינדקס רגיל על email לא ישמש.',
      },
      {
        en: 'Every INSERT, UPDATE and DELETE must also update each index, so index the queries you actually run, not every column.',
        he: 'כל INSERT, UPDATE ו-DELETE מעדכן גם כל אינדקס, ולכן מוסיפים אינדקסים לפי השאילתות שבאמת רצות, לא על כל עמודה.',
      },
    ],
    codeExamples: [
      {
        language: 'sql',
        code: `-- Before: every query scans the whole table
EXPLAIN SELECT * FROM orders WHERE customer_id = 42;
-- Seq Scan on orders  (cost=0.00..18334.00 rows=12)

CREATE INDEX idx_orders_customer ON orders (customer_id);

-- After: the planner jumps straight to the matching rows
EXPLAIN SELECT * FROM orders WHERE customer_id = 42;
-- Index Scan using idx_orders_customer on orders  (cost=0.42..8.44 rows=12)`,
      },
    ],
  },
  {
    id: 'q-rate-limiter',
    text: {
      en: 'How would you design a rate limiter for a public API?',
      he: 'איך הייתם מתכננים Rate Limiter ל-API ציבורי?',
    },
    topicId: 'system-design',
    roleIds: ['backend', 'software', 'devops'],
    type: 'system-design',
    difficulty: 'hard',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'A rate limiter caps how many requests a client can send per time window, to protect the API from abuse and overload. I identify the client by API key, or by IP for anonymous calls, and use a token bucket, which refills at a steady rate and allows controlled bursts.\nThe counters live in a shared store like Redis so every API instance sees the same state, with an atomic check-and-increment. It runs in the gateway or middleware, and rejected calls get HTTP 429 with a Retry-After header.',
      he: 'Rate limiter מגביל כמה בקשות לקוח יכול לשלוח בחלון זמן, כדי להגן על ה-API מניצול לרעה ומעומס. מזהים את הלקוח לפי API key, או לפי IP בקריאות אנונימיות, ומשתמשים ב-token bucket, שמתמלא בקצב קבוע ומאפשר burst מבוקר.\nהמונים יושבים במאגר משותף כמו Redis, כדי שכל מופעי ה-API יראו את אותו מצב, והבדיקה וההגדלה נעשות בפעולה אטומית. האכיפה נעשית ב-gateway או ב-middleware, ובקשה שנחסמת מקבלת HTTP 429 עם כותרת Retry-After.',
    },
    example: {
      en: 'A public API allows 100 requests per minute per key with bursts of 20, as a token bucket in Redis. A client that runs out of tokens gets 429 Too Many Requests and Retry-After tells it when to come back.',
      he: 'API ציבורי שמאפשר 100 בקשות בדקה לכל מפתח עם burst של 20, ממומש כ-token bucket ב-Redis. לקוח שנגמרו לו ה-tokens מקבל 429 Too Many Requests, ו-Retry-After אומר לו מתי לחזור.',
    },
    keyPoints: [
      {
        en: 'Compare algorithms and name the fixed-window flaw: up to 2x the limit can pass around a window boundary.',
        he: 'להשוות אלגוריתמים ולציין את החולשה של fixed window: סביב גבול החלון יכולות לעבור עד פי 2 מהמגבלה.',
      },
      {
        en: 'Make check-and-increment atomic with INCR plus EXPIRE or a Lua script, or concurrent requests race past the limit.',
        he: 'הבדיקה וההגדלה חייבות להיות אטומיות, עם INCR ו-EXPIRE או סקריפט Lua, אחרת בקשות מקבילות עוקפות את המגבלה.',
      },
      {
        en: 'Decide the failure mode: fail open keeps the API up but unprotected, fail closed protects it but blocks everyone.',
        he: 'להחליט על מצב כשל: fail open משאיר את ה-API זמין אבל לא מוגן, fail closed מגן אבל חוסם את כולם.',
      },
      {
        en: 'IP keys are weak: many users share one IP behind NAT, and attackers can rotate IPs.',
        he: 'מפתח לפי IP חלש: הרבה משתמשים חולקים IP אחד מאחורי NAT, ותוקף יכול להחליף כתובות.',
      },
    ],
    extras: [
      {
        en: 'Sliding window log is exact but stores a timestamp per request; sliding window counter approximates it with O(1) memory.',
        he: 'sliding window log מדויק אבל שומר חותמת זמן לכל בקשה; sliding window counter נותן קירוב טוב עם זיכרון O(1).',
      },
      {
        en: 'A leaky bucket drains at a constant rate and smooths traffic, while a token bucket allows bursts.',
        he: 'leaky bucket מתרוקן בקצב קבוע ומחליק את התעבורה, ואילו token bucket מאפשר bursts.',
      },
      {
        en: 'Expose quota headers such as X-RateLimit-Remaining so well-behaved clients can back off.',
        he: 'חושפים כותרות מכסה כמו X-RateLimit-Remaining, כדי שלקוחות מסודרים יוכלו לעשות back off.',
      },
      {
        en: 'Central Redis adds a network hop; local limiters are faster but only approximately global. Multi-region setups often count locally and sync asynchronously.',
        he: 'Redis מרכזי מוסיף קפיצת רשת; limiter מקומי מהיר יותר אבל גלובלי רק בקירוב. בפריסה על כמה regions לרוב סופרים מקומית ומסנכרנים אסינכרונית.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `import time

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate, self.capacity = rate, capacity      # tokens per second, max burst
        self.tokens, self.last = capacity, time.monotonic()

    def allow(self):
        now = time.monotonic()
        self.tokens = min(self.capacity, self.tokens + (now - self.last) * self.rate)
        self.last = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False               # caller answers 429 Too Many Requests

bucket = TokenBucket(rate=5, capacity=10)   # 5 requests/s, bursts of up to 10
# In production the bucket lives in Redis, keyed by user or API key.`,
      },
    ],
  },

  // ---------- NVIDIA: Python home test ----------
  {
    id: 'q-min-replacements-palindrome',
    text: {
      en: 'Minimum replacements to make a string a palindrome',
      he: 'מינימום החלפות להפיכת מחרוזת לפלינדרום',
    },
    details: {
      description: {
        en: 'A string s of lowercase English letters is given. Determine the minimum number of character replacements required to make it a palindrome, a string that reads the same forwards and backwards. In one replacement you may change any character to any other lowercase English letter.',
        he: 'נתונה מחרוזת s של אותיות קטנות באנגלית. מצאו את מספר ההחלפות המינימלי של תווים כדי להפוך אותה לפלינדרום, מחרוזת שנקראת אותו דבר משני הכיוונים. בהחלפה אחת אפשר לשנות כל תו לכל אות קטנה אחרת.',
      },
      examples: [
        {
          input: 's = "abcbd"',
          output: '1',
          explanation: { en: 'Replace d with a: "abcba".', he: 'מחליפים את d ב-a ומקבלים "abcba".' },
        },
        {
          input: 's = "abdaa"',
          output: '1',
          explanation: { en: 'Replace b with a: "aadaa".', he: 'מחליפים את b ב-a ומקבלים "aadaa".' },
        },
      ],
      constraints: [
        { en: '1 ≤ |s| ≤ 2 · 10^5', he: '1 ≤ |s| ≤ 2 · 10^5' },
        { en: 's consists of lowercase English letters only.', he: 's מכילה אותיות קטנות באנגלית בלבד.' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'qa', 'data', 'student', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Only mirrored pairs matter: position i must equal position n-1-i, and the pairs are independent. I walk two pointers from both ends toward the middle and count the pairs that differ. Each mismatched pair costs exactly one replacement, and one replacement can never fix two pairs, so that count is optimal. Time is O(n) and extra space is O(1).',
      he: 'רק זוגות מראה חשובים: מיקום i חייב להיות שווה למיקום n-1-i, והזוגות לא תלויים זה בזה. מריצים שני מצביעים מהקצוות לכיוון האמצע וסופרים את הזוגות השונים. כל זוג לא תואם עולה בדיוק החלפה אחת, והחלפה אחת אף פעם לא מתקנת שני זוגות, ולכן הספירה הזאת אופטימלית. זמן O(n) וזיכרון נוסף O(1).',
    },
    example: {
      en: '\'abcbd\' has the pairs (a, d) and (b, b) with c in the middle, so the answer is 1.',
      he: 'ב-\'abcbd\' הזוגות הם (a, d) ו-(b, b), ו-c באמצע, ולכן התשובה היא 1.',
    },
    approach: [
      {
        en: 'Clarify: lowercase letters only, one replacement changes one character, and whether the result string is needed or only the count.',
        he: 'מבהירים: רק אותיות קטנות, החלפה אחת משנה תו אחד, והאם צריך את המחרוזת שמתקבלת או רק את המספר.',
      },
      {
        en: 'Brute force would try changing characters and recheck the palindrome, which is exponential.',
        he: 'כוח גס היה מנסה לשנות תווים ולבדוק שוב אם יש פלינדרום, וזה אקספוננציאלי.',
      },
      {
        en: 'Insight: only mirrored pairs (i, n-1-i) matter and they are independent, so each mismatch costs exactly one.',
        he: 'התובנה: רק זוגות מראה (i, n-1-i) חשובים והם בלתי תלויים, ולכן כל אי-התאמה עולה בדיוק 1.',
      },
      {
        en: 'Algorithm: i = 0, j = n-1; while i < j, count s[i] != s[j], then move both inward. O(n) time.',
        he: 'האלגוריתם: i = 0, j = n-1; כל עוד i < j, סופרים אם s[i] != s[j] ומקרבים את שני המצביעים. זמן O(n), זיכרון O(1).',
      },
      {
        en: 'Test \'a\' (0), \'aba\' (0), \'ab\' (1), \'abcbd\' (1) and \'abcd\' (2).',
        he: 'בודקים \'a\' (0), \'aba\' (0), \'ab\' (1), \'abcbd\' (1) ו-\'abcd\' (2).',
      },
    ],
    keyPoints: [
      {
        en: 'Argue optimality: each position belongs to exactly one mirrored pair, so one replacement fixes at most one mismatch.',
        he: 'להוכיח אופטימליות: כל מיקום שייך לזוג מראה אחד בדיוק, ולכן החלפה אחת מתקנת לכל היותר אי-התאמה אחת.',
      },
      {
        en: 'The middle character of an odd-length string is never counted.',
        he: 'התו האמצעי במחרוזת באורך אי-זוגי אף פעם לא נספר.',
      },
      {
        en: 'Do not confuse it with minimum insertions, a DP problem: n minus the longest palindromic subsequence.',
        he: 'לא לבלבל עם מינימום הכנסות, שזו בעיית DP: n פחות האורך של תת-הסדרה הפלינדרומית הארוכה ביותר.',
      },
    ],
    extras: [
      {
        en: 'In C or C++ with unsigned indexes, guard the empty string: len - 1 underflows.',
        he: 'ב-C או C++ עם אינדקסים unsigned צריך להגן על מחרוזת ריקה, כי len - 1 עושה underflow.',
      },
      {
        en: 'Follow-up: return the palindrome too, choosing the smaller letter of each pair for the lexicographically smallest result.',
        he: 'שאלת המשך: להחזיר גם את הפלינדרום עצמו, ולבחור בכל זוג את האות הקטנה כדי לקבל את התוצאה הקטנה ביותר לקסיקוגרפית.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def min_replacements_to_palindrome(s: str) -> int:
    changes = 0
    i, j = 0, len(s) - 1
    while i < j:
        if s[i] != s[j]:
            changes += 1          # one replacement fixes this pair
        i += 1
        j -= 1
    return changes

print(min_replacements_to_palindrome("abcbd"))   # 1
print(min_replacements_to_palindrome("abdaa"))   # 1`,
      },
      {
        language: 'cpp',
        code: `int minReplacementsToPalindrome(const std::string& s) {
    int changes = 0;
    for (size_t i = 0, j = s.size() - 1; i < j; ++i, --j)
        if (s[i] != s[j]) ++changes;      // one replacement fixes this pair
    return changes;
}`,
      },
      {
        language: 'java',
        code: `static int minReplacementsToPalindrome(String s) {
    int changes = 0;
    for (int i = 0, j = s.length() - 1; i < j; i++, j--)
        if (s.charAt(i) != s.charAt(j)) changes++;
    return changes;
}`,
      },
      {
        language: 'c',
        code: `int min_replacements_to_palindrome(const char *s) {
    size_t n = strlen(s);
    int changes = 0;
    for (size_t i = 0; n > 0 && i < n - 1 - i; i++)
        if (s[i] != s[n - 1 - i]) changes++;
    return changes;
}`,
      },
    ],
  },
  {
    id: 'q-shuffle-playlist',
    text: { en: 'Smart shuffle of a playlist', he: 'ערבוב חכם של פלייליסט' },
    details: {
      description: {
        en: 'An array playlist of n [title, artist] pairs is given. Reorder the songs into a "smart shuffle" play order according to the rules below, and return the reordered list of [title, artist] pairs.',
        he: 'נתון מערך playlist של n זוגות [שם שיר, אמן]. סדרו את השירים מחדש לסדר נגינה "חכם" לפי הכללים שלמטה, והחזירו את רשימת הזוגות [שם שיר, אמן] המסודרת.',
      },
      rules: [
        {
          en: 'At each step, choose the artist with the largest number of remaining unplayed songs.',
          he: 'בכל צעד בוחרים את האמן עם המספר הגדול ביותר של שירים שטרם נוגנו.',
        },
        {
          en: 'If several artists are tied, choose the one whose first song appears earliest in the original playlist.',
          he: 'אם כמה אמנים בתיקו, בוחרים את זה שהשיר הראשון שלו מופיע מוקדם יותר בפלייליסט המקורי.',
        },
        {
          en: 'Do not choose the artist of the previously played song, unless no other artist has songs left.',
          he: 'לא בוחרים את האמן של השיר הקודם, אלא אם לאף אמן אחר לא נשארו שירים.',
        },
        {
          en: 'Songs by the same artist keep their original relative order.',
          he: 'שירים של אותו אמן שומרים על הסדר היחסי המקורי שלהם.',
        },
      ],
      examples: [
        {
          input:
            'playlist = [\n  ["Photograph", "EdSheeran"],\n  ["Perfect", "EdSheeran"],\n  ["BlindingLights", "TheWeeknd"],\n  ["Shivers", "EdSheeran"],\n  ["Tides", "EdSheeran"],\n  ["BlankSpace", "TaylorSwift"]\n]',
          output:
            '[\n  ["Photograph", "EdSheeran"],\n  ["BlindingLights", "TheWeeknd"],\n  ["Perfect", "EdSheeran"],\n  ["BlankSpace", "TaylorSwift"],\n  ["Shivers", "EdSheeran"],\n  ["Tides", "EdSheeran"]\n]',
          explanation: {
            en: 'Ed Sheeran has the most songs, so Photograph plays first. He is still first in priority but was just played, so The Weeknd is next. Then Ed Sheeran again (Perfect), Taylor Swift, Ed Sheeran (Shivers). Only Ed Sheeran has songs left, so Tides closes the list.',
            he: 'לאד שירן הכי הרבה שירים, ולכן Photograph ראשון. הוא עדיין ראשון בעדיפות אבל ניגן הרגע, ולכן The Weeknd הבא. אחר כך שוב אד שירן (Perfect), טיילור סוויפט, אד שירן (Shivers). נשארו שירים רק לאד שירן, ולכן Tides סוגר.',
          },
        },
      ],
      constraints: [
        { en: '1 ≤ n ≤ 2 · 10^5', he: '1 ≤ n ≤ 2 · 10^5' },
        {
          en: '1 ≤ |title|, |artist| ≤ 20; titles and artists are alphanumeric.',
          he: '1 ≤ |title|, |artist| ≤ 20; שמות השירים והאמנים הם תווים אלפאנומריים.',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'verification'],
    type: 'coding',
    difficulty: 'hard',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'Use a greedy max-heap of artists. Group the songs by artist into FIFO queues and push each artist keyed by remaining songs, then by first appearance. Each step, pop the top artist; if it just played and someone else is left, play the runner-up and push the first back. Play one song and re-push with count minus one. Time is O(n log k) for k artists, space O(n).',
      he: 'זה אלגוריתם חמדני עם max-heap של אמנים. מקבצים את השירים לפי אמן לתורי FIFO, ודוחפים כל אמן ל-heap לפי מספר השירים שנותרו ואחר כך לפי ההופעה הראשונה. בכל צעד מוציאים את האמן שבראש; אם הוא ניגן הרגע ויש עוד מישהו, מנגנים את הבא בתור ומחזירים את הראשון. מנגנים שיר אחד ומחזירים את האמן עם מונה קטן ב-1. זמן O(n log k) עבור k אמנים, זיכרון O(n).',
    },
    approach: [
      {
        en: 'Clarify: what counts as a tie, that repeats are allowed only when one artist remains, and that each artist\'s order is kept.',
        he: 'מבהירים: מה נחשב תיקו, שחזרה מותרת רק כשנשאר אמן אחד, ושהסדר של כל אמן נשמר.',
      },
      {
        en: 'Brute force scans all artists at every step for the best eligible one, O(n * k).',
        he: 'כוח גס סורק בכל צעד את כל האמנים ומחפש את המתאים ביותר, O(n * k).',
      },
      {
        en: 'Insight: we repeatedly need the max under a changing key, which a heap gives in O(log k).',
        he: 'התובנה: שוב ושוב צריך מקסימום לפי מפתח שמשתנה, ו-heap נותן אותו ב-O(log k), ועוד הוצאה אחת נוספת כדי לדלג.',
      },
      {
        en: 'Algorithm: group into queues, heapify (-count, firstSeen, artist), pop, swap with the runner-up if needed, emit a song, re-push.',
        he: 'האלגוריתם: מקבצים לתורים, בונים heap של (-count, firstSeen, artist), מוציאים, מחליפים עם הבא בתור כשצריך, פולטים שיר ומחזירים.',
      },
      {
        en: 'Test the given example, a single artist, two artists with equal counts (tie-break) and one dominant artist (forced repeats).',
        he: 'בודקים את הדוגמה הנתונה, אמן יחיד, שני אמנים עם מספר שירים שווה (שבירת תיקו) ואמן דומיננטי אחד (חזרות כפויות).',
      },
    ],
    keyPoints: [
      {
        en: 'Recognize the pattern: it is the same greedy as \'reorganize string\' or \'task scheduler\'.',
        he: 'לזהות את התבנית: זה אותו אלגוריתם חמדני כמו reorganize string או task scheduler.',
      },
      {
        en: 'The tie-break belongs in the heap key, as a tuple (-count, firstSeen), not handled after popping.',
        he: 'שבירת התיקו צריכה להיות חלק מהמפתח של ה-heap, כ-tuple (-count, firstSeen), ולא טיפול אחרי ההוצאה.',
      },
      {
        en: 'Push the skipped top artist back unchanged; forgetting it silently drops an artist.',
        he: 'חובה להחזיר את האמן שדילגנו עליו בלי שינוי; אם שוכחים, אמן שלם נעלם בשקט.',
      },
      {
        en: 'It is O(n log k), not O(n log n), because the heap holds artists, not songs.',
        he: 'הסיבוכיות היא O(n log k) ולא O(n log n), כי ה-heap מחזיק אמנים ולא שירים.',
      },
    ],
    extras: [
      {
        en: 'In Java a PriorityQueue does not re-sort when a key changes, so remove and re-add after updating the count.',
        he: 'ב-Java ה-PriorityQueue לא ממיין מחדש כשמפתח משתנה, ולכן מוציאים ומכניסים מחדש אחרי שמעדכנים את המונה.',
      },
      {
        en: 'When only the previous artist remains, the rules allow repeating it, which happens naturally when the heap holds just that artist.',
        he: 'כשנשאר רק האמן הקודם, הכללים מרשים לנגן אותו שוב, וזה קורה מעצמו כשב-heap יש רק אותו.',
      },
      {
        en: 'A single artist plays in original order, and the first-appearance tie-break keeps the output deterministic.',
        he: 'אמן יחיד מתנגן בסדר המקורי, ושבירת התיקו לפי ההופעה הראשונה שומרת על פלט דטרמיניסטי.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `import heapq
from collections import defaultdict, deque

def smart_shuffle(playlist):
    songs = defaultdict(deque)             # artist -> songs in original order
    first_seen = {}
    for i, (title, artist) in enumerate(playlist):
        songs[artist].append(title)
        first_seen.setdefault(artist, i)

    # max-heap by remaining songs, then by earliest first appearance
    heap = [(-len(q), first_seen[a], a) for a, q in songs.items()]
    heapq.heapify(heap)

    order, prev = [], None
    while heap:
        neg, first, artist = heapq.heappop(heap)
        if artist == prev and heap:                       # avoid a repeat: take the runner-up
            neg2, first2, artist2 = heapq.heappop(heap)
            heapq.heappush(heap, (neg, first, artist))
            neg, first, artist = neg2, first2, artist2
        order.append([songs[artist].popleft(), artist])
        if songs[artist]:
            heapq.heappush(heap, (neg + 1, first, artist))  # one song fewer
        prev = artist
    return order`,
      },
      {
        language: 'cpp',
        code: `#include <deque>
#include <queue>
#include <string>
#include <tuple>
#include <unordered_map>
#include <vector>
using namespace std;

vector<vector<string>> smartShuffle(const vector<vector<string>>& playlist) {
    unordered_map<string, deque<string>> songs;
    unordered_map<string, int> firstSeen;
    for (int i = 0; i < (int)playlist.size(); ++i) {
        songs[playlist[i][1]].push_back(playlist[i][0]);
        firstSeen.emplace(playlist[i][1], i);
    }
    // (remaining, -firstSeen, artist): more songs first, then earlier appearance
    priority_queue<tuple<int, int, string>> heap;
    for (auto& [artist, q] : songs) heap.emplace((int)q.size(), -firstSeen[artist], artist);

    vector<vector<string>> order;
    string prev;
    while (!heap.empty()) {
        auto [cnt, negFirst, artist] = heap.top(); heap.pop();
        if (artist == prev && !heap.empty()) {            // avoid a repeat
            auto runnerUp = heap.top(); heap.pop();
            heap.emplace(cnt, negFirst, artist);
            tie(cnt, negFirst, artist) = runnerUp;
        }
        order.push_back({songs[artist].front(), artist});
        songs[artist].pop_front();
        if (cnt > 1) heap.emplace(cnt - 1, negFirst, artist);
        prev = artist;
    }
    return order;
}`,
      },
      {
        language: 'java',
        code: `static List<String[]> smartShuffle(List<String[]> playlist) {
    Map<String, Deque<String>> songs = new HashMap<>();
    Map<String, Integer> firstSeen = new HashMap<>();
    for (int i = 0; i < playlist.size(); i++) {
        String title = playlist.get(i)[0], artist = playlist.get(i)[1];
        songs.computeIfAbsent(artist, k -> new ArrayDeque<>()).add(title);
        firstSeen.putIfAbsent(artist, i);
    }
    // most remaining songs first, then earliest first appearance
    PriorityQueue<String> heap = new PriorityQueue<>((a, b) ->
        songs.get(b).size() != songs.get(a).size()
            ? songs.get(b).size() - songs.get(a).size()
            : firstSeen.get(a) - firstSeen.get(b));
    heap.addAll(songs.keySet());

    List<String[]> order = new ArrayList<>();
    String prev = null;
    while (!heap.isEmpty()) {
        String artist = heap.poll();
        if (artist.equals(prev) && !heap.isEmpty()) {      // avoid a repeat
            String runnerUp = heap.poll();
            heap.add(artist);
            artist = runnerUp;
        }
        order.add(new String[] { songs.get(artist).poll(), artist });
        if (!songs.get(artist).isEmpty()) heap.add(artist);   // re-add after its size changed
        prev = artist;
    }
    return order;
}`,
      },
    ],
  },
  {
    id: 'q-bandwidth-knapsack',
    text: { en: 'Bandwidth allocation: serve the most requests', he: 'חלוקת רוחב פס: מקסימום בקשות' },
    details: {
      description: {
        en: 'There are n API endpoints. Endpoint i needs bandwidth[i] units to function and, when active, serves request[i] requests. With totalBandwidth units available, choose which endpoints to activate so that the total number of requests served is as large as possible, and return that number.',
        he: 'יש n נקודות קצה של API. נקודה i צריכה bandwidth[i] יחידות כדי לפעול, וכשהיא פעילה היא משרתת request[i] בקשות. עם totalBandwidth יחידות זמינות, בחרו אילו נקודות להפעיל כך שסך הבקשות יהיה מקסימלי, והחזירו את המספר הזה.',
      },
      examples: [
        {
          input: 'n = 5\nbandwidth = [200, 100, 350, 50, 100]\nrequest = [270, 142, 450, 124, 189]\ntotalBandwidth = 500',
          output: '763',
          explanation: {
            en: 'The last three endpoints use 350 + 50 + 100 = 500 units and serve 450 + 124 + 189 = 763 requests.',
            he: 'שלוש הנקודות האחרונות צורכות 350 + 50 + 100 = 500 יחידות ומשרתות 450 + 124 + 189 = 763 בקשות.',
          },
        },
        {
          input: 'bandwidth = [100, 500, 80, 25, 400]\nrequest = [100, 1000, 120, 110, 100]\ntotalBandwidth = 200',
          output: '230',
          explanation: {
            en: 'Endpoints 3 and 4 use 80 + 25 = 105 units and serve 120 + 110 = 230 requests; no other endpoint fits in what is left.',
            he: 'הנקודות השלישית והרביעית צורכות 80 + 25 = 105 יחידות ומשרתות 120 + 110 = 230 בקשות; אף נקודה נוספת לא נכנסת במה שנשאר.',
          },
        },
      ],
      constraints: [
        { en: '1 ≤ n ≤ 100', he: '1 ≤ n ≤ 100' },
        { en: '1 ≤ totalBandwidth, bandwidth[i] ≤ 10^5', he: '1 ≤ totalBandwidth, bandwidth[i] ≤ 10^5' },
        {
          en: '1 ≤ request[i] ≤ 10^9, so the answer needs a 64-bit integer.',
          he: '1 ≤ request[i] ≤ 10^9, ולכן התשובה צריכה מספר של 64 ביט.',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'This is 0/1 knapsack: each endpoint is an item with weight bandwidth[i] and value request[i], and the capacity is totalBandwidth. dp[w] is the most requests servable with at most w units. For each endpoint, loop w from the total down to bandwidth[i] and set dp[w] = max(dp[w], dp[w - bandwidth[i]] + request[i]). Looping downward uses each endpoint once. Time O(n * W), space O(W).',
      he: 'זו בעיית 0/1 knapsack: כל נקודת קצה היא פריט במשקל bandwidth[i] ובערך request[i], והקיבולת היא totalBandwidth. dp[w] הוא מספר הבקשות המקסימלי עם לכל היותר w יחידות. לכל נקודה עוברים על w מהסך הכולל למטה עד bandwidth[i] ומעדכנים dp[w] = max(dp[w], dp[w - bandwidth[i]] + request[i]). המעבר מלמעלה למטה מבטיח שכל נקודה נבחרת פעם אחת. זמן O(n * W), זיכרון O(W).',
    },
    approach: [
      {
        en: 'Clarify: each endpoint is all-or-nothing, the total need not be fully used, and the result may exceed 32 bits.',
        he: 'מבהירים: כל נקודה היא הכול או כלום, לא חייבים לנצל את כל רוחב הפס, והתוצאה יכולה לעבור 32 ביט.',
      },
      {
        en: 'Brute force tries all 2^n subsets, impossible for n = 100.',
        he: 'כוח גס מנסה את כל 2^n תתי-הקבוצות, וזה בלתי אפשרי עבור n = 100.',
      },
      {
        en: 'Insight: the best value at capacity w depends on smaller capacities with fewer items, so overlapping subproblems invite DP.',
        he: 'התובנה: הערך הטוב ביותר בקיבולת w תלוי בקיבולות קטנות יותר עם פחות פריטים, כלומר תתי-בעיות חופפות ומתאים DP.',
      },
      {
        en: 'Algorithm: dp of size W+1 filled with 0; per endpoint loop w downward applying the max update; return dp[W].',
        he: 'האלגוריתם: מערך dp בגודל W+1 מלא באפסים; לכל נקודה עוברים על w מלמעלה למטה ומעדכנים עם max; מחזירים dp[W].',
      },
      {
        en: 'Test both samples (763 and 230), a case where nothing fits (0) and the greedy counterexample.',
        he: 'בודקים את שתי הדוגמאות (763 ו-230), מקרה שבו שום דבר לא נכנס (0), ואת הדוגמה הנגדית לחמדנות.',
      },
    ],
    keyPoints: [
      {
        en: 'Name it as 0/1 knapsack immediately; it shows pattern recognition.',
        he: 'לזהות מיד שזו 0/1 knapsack; זה מראה זיהוי תבניות.',
      },
      {
        en: 'Greedy by requests per unit fails: capacity 10 with (6, 7), (5, 5), (5, 5) gives 7; optimum is 10.',
        he: 'חמדני לפי בקשות ליחידה נכשל: קיבולת 10 עם (6, 7), (5, 5), (5, 5) נותן 7, אבל האופטימום הוא 10.',
      },
      {
        en: 'Looping upward would reuse an endpoint and turn it into unbounded knapsack.',
        he: 'מעבר מלמטה למעלה היה משתמש בנקודה יותר מפעם אחת והופך את זה ל-unbounded knapsack.',
      },
      {
        en: 'Use 64-bit sums: up to 100 values of 10^9 overflow 32-bit integers.',
        he: 'להשתמש בסכומים של 64 ביט: עד 100 ערכים של 10^9 גולשים מעבר ל-32 ביט.',
      },
    ],
    extras: [
      {
        en: 'O(n * W) is pseudo-polynomial: it depends on the numeric value of W, not its bit length. Here it is about 10^7 updates.',
        he: 'O(n * W) היא סיבוכיות פסאודו-פולינומית: היא תלויה בערך של W ולא באורך שלו בביטים. כאן זה בערך 10^7 עדכונים.',
      },
      {
        en: 'To report which endpoints were chosen, keep a 2D or choice table and backtrack from dp[n][W].',
        he: 'כדי לדעת אילו נקודות נבחרו, שומרים טבלה דו-ממדית או טבלת בחירות וחוזרים אחורה מ-dp[n][W].',
      },
      {
        en: 'An endpoint wider than the total bandwidth never updates anything, so it needs no special case.',
        he: 'נקודה שרחבה יותר מכל רוחב הפס אף פעם לא מעדכנת כלום, ולכן לא צריך לה טיפול מיוחד.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def get_max_requests(bandwidth, request, total_bandwidth):
    # dp[w] = most requests we can serve using at most w units of bandwidth
    dp = [0] * (total_bandwidth + 1)
    for need, served in zip(bandwidth, request):
        for w in range(total_bandwidth, need - 1, -1):   # downwards: each endpoint used once
            dp[w] = max(dp[w], dp[w - need] + served)
    return dp[total_bandwidth]

print(get_max_requests([200, 100, 350, 50, 100], [270, 142, 450, 124, 189], 500))   # 763
print(get_max_requests([100, 500, 80, 25, 400], [100, 1000, 120, 110, 100], 200))   # 230`,
      },
      {
        language: 'cpp',
        code: `long long getMaxRequests(const std::vector<int>& bandwidth,
                         const std::vector<int>& request, int totalBandwidth) {
    std::vector<long long> dp(totalBandwidth + 1, 0);   // 64-bit: requests reach 1e9 each
    for (size_t i = 0; i < bandwidth.size(); ++i)
        for (int w = totalBandwidth; w >= bandwidth[i]; --w)
            dp[w] = std::max(dp[w], dp[w - bandwidth[i]] + request[i]);
    return dp[totalBandwidth];
}`,
      },
      {
        language: 'java',
        code: `static long getMaxRequests(int[] bandwidth, int[] request, int totalBandwidth) {
    long[] dp = new long[totalBandwidth + 1];
    for (int i = 0; i < bandwidth.length; i++)
        for (int w = totalBandwidth; w >= bandwidth[i]; w--)
            dp[w] = Math.max(dp[w], dp[w - bandwidth[i]] + request[i]);
    return dp[totalBandwidth];
}`,
      },
    ],
  },

  // ---------- NVIDIA: verification interview ----------
  {
    id: 'q-plus-one-linked-list',
    text: { en: 'Plus one on a linked list', he: 'פלוס אחד ברשימה מקושרת' },
    details: {
      description: {
        en: 'A singly linked list is given in which every node holds one digit (0–9). Read from head to tail, the list represents a non-negative integer with the most significant digit first. Add one to that number and return the head of the resulting list.',
        he: 'נתונה רשימה מקושרת חד-כיוונית שבה כל צומת מחזיק ספרה אחת (0–9). מהראש לזנב הרשימה מייצגת מספר שלם לא שלילי, הספרה המשמעותית ביותר ראשונה. הוסיפו 1 למספר והחזירו את ראש הרשימה החדשה.',
      },
      rules: [
        {
          en: 'A 9 that becomes 0 carries 1 into the previous digit.',
          he: '9 שהופך ל-0 מעביר נשיאה של 1 לספרה הקודמת.',
        },
        {
          en: 'If every digit is 9, a new leading node holding 1 must be added.',
          he: 'אם כל הספרות הן 9, יש להוסיף צומת מוביל חדש עם הספרה 1.',
        },
      ],
      examples: [
        { input: '1 -> 2 -> 9', output: '1 -> 3 -> 0' },
        { input: '9 -> 9', output: '1 -> 0 -> 0' },
      ],
      constraints: [{ en: 'The list has at least one node.', he: 'ברשימה יש לפחות צומת אחד.' }],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Adding one only changes the trailing run of 9s and the digit before it. In one pass I remember the last node whose digit is not 9. I increment it and set every node after it to 0. If every digit is 9, I first prepend a new node holding 0, so 99 becomes 100. Time is O(n) and extra space O(1), with no reversal and no recursion.',
      he: 'הוספת 1 משנה רק את רצף ה-9 בסוף ואת הספרה שלפניו. במעבר אחד זוכרים את הצומת האחרון שהספרה שלו אינה 9. מגדילים אותו ב-1 ומאפסים את כל הצמתים שאחריו. אם כל הספרות הן 9, קודם מוסיפים בהתחלה צומת חדש עם 0, וכך 99 הופך ל-100. זמן O(n) וזיכרון נוסף O(1), בלי היפוך ובלי רקורסיה.',
    },
    example: {
      en: 'For 1 -> 2 -> 9 the last non-9 is the 2, so the result is 1 -> 3 -> 0. For 9 -> 9 a new head is added, giving 1 -> 0 -> 0.',
      he: 'ב-1 -> 2 -> 9 הצומת האחרון שאינו 9 הוא ה-2, ולכן התוצאה 1 -> 3 -> 0. ב-9 -> 9 מוסיפים ראש חדש ומקבלים 1 -> 0 -> 0.',
    },
    approach: [
      {
        en: 'Clarify: most significant digit first, the list is non-empty, and whether modifying it in place is allowed.',
        he: 'מבהירים: הספרה המשמעותית ראשונה, הרשימה לא ריקה, והאם מותר לשנות אותה במקום.',
      },
      {
        en: 'Simple approach: reverse the list, add one with a carry, reverse back. O(n), but three passes.',
        he: 'גישה פשוטה: הופכים את הרשימה, מוסיפים 1 עם carry, והופכים חזרה. O(n), אבל שלושה מעברים.',
      },
      {
        en: 'Insight: the carry passes only through the trailing 9s, so only the last non-9 node really increments.',
        he: 'התובנה: ה-carry עובר רק דרך ה-9 שבסוף, ולכן רק הצומת האחרון שאינו 9 באמת גדל.',
      },
      {
        en: 'Algorithm: walk once remembering the last non-9; if none, prepend a 0; increment it; zero everything after. O(n), O(1).',
        he: 'האלגוריתם: עוברים פעם אחת וזוכרים את האחרון שאינו 9; אם אין, מוסיפים 0 בהתחלה; מגדילים אותו; מאפסים את כל מה שאחריו.',
      },
      {
        en: 'Walk through 1 -> 2 -> 9, 9 -> 9 and a single 0.',
        he: 'עוברים על 1 -> 2 -> 9, על 9 -> 9 ועל 0 בודד.',
      },
    ],
    keyPoints: [
      {
        en: 'Converting to an integer and back is wrong: the list can represent a number far beyond 64 bits.',
        he: 'המרה למספר שלם וחזרה היא טעות: הרשימה יכולה לייצג מספר גדול בהרבה מ-64 ביט.',
      },
      {
        en: 'The all-9s case is what interviewers check: a new head must be allocated and returned.',
        he: 'המקרה של כל ה-9 הוא מה שמראיינים בודקים: צריך להקצות ראש חדש ולהחזיר אותו.',
      },
      {
        en: 'A dummy 0 sentinel node in front unifies the all-9s case with the normal one.',
        he: 'צומת sentinel עם 0 בהתחלה מאחד את המקרה של כל ה-9 עם המקרה הרגיל.',
      },
      {
        en: 'Alternatives: reverse, add, reverse back (three passes), or recursion returning the carry (O(n) stack).',
        he: 'חלופות: היפוך, הוספה והיפוך חזרה (שלושה מעברים), או רקורסיה שמחזירה carry (מחסנית O(n)).',
      },
    ],
    extras: [
      {
        en: 'It works because the carry stops exactly at the first non-9 from the right, and remembering it replaces walking backwards.',
        he: 'זה עובד כי ה-carry נעצר בדיוק בספרה הראשונה מימין שאינה 9, וזכירה שלה מחליפה את ההליכה אחורה ברשימה חד-כיוונית.',
      },
      {
        en: 'Test vectors worth listing: [0], [9], [1,2,9], [9,9], [1,9,9,9], [1,2,3].',
        he: 'וקטורי בדיקה ששווה לפרט: [0], [9], [1,2,9], [9,9], [1,9,9,9], [1,2,3].',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `class Node:
    def __init__(self, digit, next=None):
        self.digit, self.next = digit, next

def plus_one(head):
    last_not_nine = None                     # rightmost digit that is not 9
    node = head
    while node:
        if node.digit != 9:
            last_not_nine = node
        node = node.next

    if last_not_nine is None:                # all nines: 99 -> 100
        head = Node(0, head)                 # new leading node, becomes 1 below
        last_not_nine = head

    last_not_nine.digit += 1
    node = last_not_nine.next
    while node:                              # everything after it was a 9
        node.digit = 0
        node = node.next
    return head`,
      },
      {
        language: 'cpp',
        code: `struct Node { int digit; Node* next; };

Node* plusOne(Node* head) {
    Node* lastNotNine = nullptr;             // rightmost digit that is not 9
    for (Node* n = head; n; n = n->next)
        if (n->digit != 9) lastNotNine = n;

    if (!lastNotNine) {                      // all nines: 99 -> 100
        head = new Node{0, head};
        lastNotNine = head;
    }
    lastNotNine->digit += 1;
    for (Node* n = lastNotNine->next; n; n = n->next) n->digit = 0;
    return head;
}`,
      },
      {
        language: 'java',
        code: `class Node { int digit; Node next; Node(int d, Node n) { digit = d; next = n; } }

static Node plusOne(Node head) {
    Node lastNotNine = null;                 // rightmost digit that is not 9
    for (Node n = head; n != null; n = n.next)
        if (n.digit != 9) lastNotNine = n;

    if (lastNotNine == null) {               // all nines: 99 -> 100
        head = new Node(0, head);
        lastNotNine = head;
    }
    lastNotNine.digit++;
    for (Node n = lastNotNine.next; n != null; n = n.next) n.digit = 0;
    return head;
}`,
      },
      {
        language: 'c',
        code: `struct Node { int digit; struct Node *next; };

struct Node *plus_one(struct Node *head) {
    struct Node *last_not_nine = NULL;       /* rightmost digit that is not 9 */
    for (struct Node *n = head; n; n = n->next)
        if (n->digit != 9) last_not_nine = n;

    if (!last_not_nine) {                    /* all nines: 99 -> 100 */
        struct Node *fresh = malloc(sizeof *fresh);
        fresh->digit = 0;
        fresh->next = head;
        head = last_not_nine = fresh;
    }
    last_not_nine->digit += 1;
    for (struct Node *n = last_not_nine->next; n; n = n->next) n->digit = 0;
    return head;
}`,
      },
    ],
  },
  {
    id: 'q-array-set-all',
    text: { en: 'Array with setAll in O(1)', he: 'מערך עם setAll ב-O(1)' },
    details: {
      description: {
        en: 'Design a data structure that behaves like an array of n integers and supports the three operations below, each in O(1) time.',
        he: 'תכננו מבנה נתונים שמתנהג כמו מערך של n מספרים שלמים ותומך בשלוש הפעולות הבאות, כל אחת בזמן O(1).',
      },
      rules: [
        { en: 'set(index, value): store value at index.', he: 'set(index, value): שמירת value במקום index.' },
        { en: 'get(index): return the current value at index.', he: 'get(index): החזרת הערך הנוכחי במקום index.' },
        { en: 'setAll(value): make every element equal to value.', he: 'setAll(value): כל האיברים מקבלים את הערך value.' },
      ],
      examples: [
        {
          input: 'set(0, 5)\nsetAll(7)\nset(1, 9)\nget(0)\nget(1)\nget(2)',
          output: '7\n9\n7',
          explanation: {
            en: 'setAll overrides the earlier set(0, 5); the later set(1, 9) overrides setAll for index 1 only.',
            he: 'setAll דורס את set(0, 5) שקדם לו; set(1, 9) שבא אחריו דורס את setAll עבור מקום 1 בלבד.',
          },
        },
      ],
      constraints: [
        {
          en: 'All three operations must be O(1); looping over the array inside setAll is not allowed.',
          he: 'שלוש הפעולות חייבות להיות O(1); אסור לעבור על כל המערך בתוך setAll.',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'embedded', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'Never write to every cell; use timestamps instead. A counter increases on every write. set stores the value and the current stamp in that cell, and setAll stores its value and stamp in one global slot. get(i) returns whichever write is newer: the global value if its stamp is greater, otherwise the cell\'s own value. Every operation is O(1), with O(n) memory.',
      he: 'לא כותבים באמת לכל תא, אלא משתמשים בחותמות זמן. מחזיקים מונה שגדל בכל כתיבה. set שומר בתא את הערך ואת החותמת הנוכחית, ו-setAll שומר את הערך והחותמת שלו במשבצת גלובלית אחת. get(i) מחזיר את הכתיבה החדשה יותר: את הערך הגלובלי אם החותמת שלו גדולה יותר, ואחרת את ערך התא. כל פעולה היא O(1), עם זיכרון O(n).',
    },
    example: {
      en: 'After set(0,5), setAll(7), set(1,9): get(0) returns 7 because setAll is newer, get(1) returns 9, and get(2) returns 7.',
      he: 'אחרי set(0,5), setAll(7), set(1,9): get(0) מחזיר 7 כי ה-setAll חדש יותר, get(1) מחזיר 9, ו-get(2) מחזיר 7.',
    },
    approach: [
      {
        en: 'Clarify: fixed size n, initial values, index bounds, and that all three operations must be O(1), not amortized.',
        he: 'מבהירים: גודל קבוע n, ערכים התחלתיים, גבולות אינדקס, ושכל שלוש הפעולות חייבות להיות O(1) ולא amortized.',
      },
      {
        en: 'Naive: setAll loops over the array, O(n), which the problem forbids.',
        he: 'נאיבי: setAll עובר בלולאה על המערך, O(n), וזה בדיוק מה שאסור.',
      },
      {
        en: 'Insight: get only needs to know which write to this cell came last, and timestamps answer that.',
        he: 'התובנה: get צריך רק לדעת איזו כתיבה לתא הייתה האחרונה, וחותמות זמן עונות על זה.',
      },
      {
        en: 'Algorithm: clock++ per write; set stamps the cell; setAll stamps the global slot; get returns the newer value.',
        he: 'האלגוריתם: clock++ בכל כתיבה; set מחתים את התא; setAll מחתים את המשבצת הגלובלית; get מחזיר את הערך החדש יותר.',
      },
      {
        en: 'Trace the example, then test get before any write and two setAll calls in a row.',
        he: 'עוקבים אחרי הדוגמה, ואז בודקים get לפני כל כתיבה ושתי קריאות setAll ברצף.',
      },
    ],
    keyPoints: [
      {
        en: 'Name the idea: lazy evaluation with timestamps, comparing versions instead of copying data.',
        he: 'לתת שם לרעיון: lazy evaluation עם חותמות זמן, השוואת גרסאות במקום העתקת נתונים.',
      },
      {
        en: 'Use a strictly increasing counter, not wall-clock time: two writes in the same millisecond would tie.',
        he: 'להשתמש במונה שעולה בקפידה ולא בשעון אמיתי: שתי כתיבות באותה מילישנייה ייצאו בתיקו.',
      },
      {
        en: 'A 32-bit counter wraps after about 2.1 billion writes, so use 64 bits in long-running systems.',
        he: 'מונה של 32 ביט מתגלגל אחרי בערך 2.1 מיליארד כתיבות, ולכן במערכת שרצה הרבה זמן משתמשים ב-64 ביט.',
      },
    ],
    extras: [
      {
        en: 'Alternative: a hash map of overrides reset on setAll. Clearing is not O(1) in every language, but replacing the map object is.',
        he: 'חלופה: hash map של דריסות שמתאפס ב-setAll. ניקוי הוא לא O(1) בכל שפה, אבל החלפת אובייקט ה-map כן.',
      },
      {
        en: 'Follow-ups: increment-all, or thread safety, where the clock increment and the write must be atomic together.',
        he: 'שאלות המשך: increment לכל האיברים, או thread safety, ואז ההגדלה של השעון והכתיבה חייבות להיות אטומיות יחד.',
      },
      {
        en: 'Before any write both stamps are 0 and get returns the initial value; repeated setAll calls simply overwrite the global slot.',
        he: 'לפני כל כתיבה שתי החותמות 0 ו-get מחזיר את הערך ההתחלתי; קריאות חוזרות ל-setAll פשוט דורסות את המשבצת הגלובלית.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `class SetAllArray:
    def __init__(self, size):
        self.values = [0] * size
        self.stamps = [0] * size        # when each cell was last set
        self.all_value = 0
        self.all_stamp = 0              # when setAll was last called
        self.clock = 0                  # grows on every write

    def set(self, index, value):
        self.clock += 1
        self.values[index] = value
        self.stamps[index] = self.clock

    def set_all(self, value):
        self.clock += 1
        self.all_value = value
        self.all_stamp = self.clock

    def get(self, index):
        if self.all_stamp > self.stamps[index]:   # whichever write came later wins
            return self.all_value
        return self.values[index]`,
      },
      {
        language: 'cpp',
        code: `class SetAllArray {
    std::vector<int> values, stamps;     // stamps[i]: when cell i was last set
    int allValue = 0, allStamp = 0;      // when setAll was last called
    int clock = 0;                       // grows on every write
public:
    explicit SetAllArray(int size) : values(size), stamps(size) {}
    void set(int i, int v)  { values[i] = v; stamps[i] = ++clock; }
    void setAll(int v)      { allValue = v; allStamp = ++clock; }
    int  get(int i) const   { return allStamp > stamps[i] ? allValue : values[i]; }
};`,
      },
      {
        language: 'java',
        code: `class SetAllArray {
    private final int[] values, stamps;  // stamps[i]: when cell i was last set
    private int allValue, allStamp;      // when setAll was last called
    private int clock;                   // grows on every write

    SetAllArray(int size) { values = new int[size]; stamps = new int[size]; }
    void set(int i, int v) { values[i] = v; stamps[i] = ++clock; }
    void setAll(int v)     { allValue = v; allStamp = ++clock; }
    int get(int i)         { return allStamp > stamps[i] ? allValue : values[i]; }
}`,
      },
    ],
  },

  // ---------- NVIDIA: QA screening day ----------
  {
    id: 'q-int-to-roman',
    text: { en: 'Integer to Roman numeral', he: 'המרת מספר לספרה רומית' },
    details: {
      description: {
        en: 'Write a function that receives an integer and returns its Roman numeral representation, using the value table below.',
        he: 'כתבו פונקציה שמקבלת מספר שלם ומחזירה את הייצוג הרומי שלו, בעזרת טבלת הערכים שלמטה.',
      },
      rules: [
        {
          en: 'M = 1000, CM = 900, D = 500, CD = 400, C = 100, XC = 90, L = 50, XL = 40, X = 10, IX = 9, V = 5, IV = 4, I = 1',
          he: 'M = 1000, CM = 900, D = 500, CD = 400, C = 100, XC = 90, L = 50, XL = 40, X = 10, IX = 9, V = 5, IV = 4, I = 1',
        },
      ],
      examples: [
        {
          input: '1994',
          output: '"MCMXCIV"',
          explanation: { en: 'M (1000) + CM (900) + XC (90) + IV (4).', he: 'M ‏(1000) + CM ‏(900) + XC ‏(90) + IV ‏(4).' },
        },
        {
          input: '58',
          output: '"LVIII"',
          explanation: { en: 'L (50) + V (5) + III (3).', he: 'L ‏(50) + V ‏(5) + III ‏(3).' },
        },
      ],
      constraints: [{ en: '1 ≤ number ≤ 3999', he: '1 ≤ number ≤ 3999' }],
    },
    topicId: 'algorithms',
    roleIds: ['qa', 'software', 'student', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Walk greedily over a 13-row table from largest to smallest that includes the six subtractive forms: 1000 M, 900 CM, 500 D, 400 CD, down to 4 IV and 1 I. While the number is at least the row\'s value, append the symbol and subtract. Greedy is correct because the subtractive forms are rows of their own. The input is bounded by 3999, so it runs in O(1).',
      he: 'עוברים בצורה חמדנית על טבלה של 13 שורות מהגדול לקטן, שכוללת את שש הצורות החיסוריות: 1000 M, 900 CM, 500 D, 400 CD, וכן הלאה עד 4 IV ו-1 I. כל עוד המספר גדול או שווה לערך השורה, מוסיפים את הסימן ומחסרים. החמדנות נכונה כי הצורות החיסוריות הן שורות בפני עצמן. הקלט חסום ב-3999, ולכן זה O(1).',
    },
    example: {
      en: '1994: M leaves 994, CM leaves 94, XC leaves 4, IV leaves 0, giving MCMXCIV.',
      he: '1994: אחרי M נשאר 994, אחרי CM נשאר 94, אחרי XC נשאר 4, אחרי IV נשאר 0, ומתקבל MCMXCIV.',
    },
    approach: [
      {
        en: 'Clarify the range (1 to 3999), that the standard subtractive form is expected, and whether invalid input must be handled.',
        he: 'מבהירים את הטווח (1 עד 3999), שמצופה הכתיב החיסורי הסטנדרטי, והאם צריך לטפל בקלט לא תקין.',
      },
      {
        en: 'A first attempt with only the seven basic symbols fails on 4, 9, 40 and so on without special cases.',
        he: 'ניסיון ראשון עם שבעת הסימנים הבסיסיים בלבד נכשל ב-4, 9, 40 וכן הלאה, אלא אם מוסיפים מקרים מיוחדים.',
      },
      {
        en: 'Insight: add the six subtractive forms as table rows and greedy becomes correct.',
        he: 'התובנה: מכניסים את שש הצורות החיסוריות כשורות בטבלה, ואז החמדנות נכונה.',
      },
      {
        en: 'Algorithm: for each (value, symbol) from largest down, while number >= value append and subtract. O(1), since everything is bounded.',
        he: 'האלגוריתם: לכל (value, symbol) מהגדול לקטן, כל עוד number >= value מוסיפים ומחסרים. O(1), כי הכול חסום.',
      },
      {
        en: 'Test 1 (I), 4 (IV), 9 (IX), 58 (LVIII), 1994 (MCMXCIV) and 3999 (MMMCMXCIX).',
        he: 'בודקים 1 (I), 4 (IV), 9 (IX), 58 (LVIII), 1994 (MCMXCIV) ו-3999 (MMMCMXCIX).',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why greedy works: the subtractive pairs are in the table, so no case needs lookahead.',
        he: 'להסביר למה החמדנות עובדת: הזוגות החיסוריים נמצאים בטבלה, ולכן אף מקרה לא צריך להסתכל קדימה.',
      },
      {
        en: 'Without the subtractive rows, greedy would produce IIII instead of IV.',
        he: 'בלי השורות החיסוריות, החמדני היה מייצר IIII במקום IV.',
      },
      {
        en: 'Validate input: reject 0, negatives and values above 3999 rather than returning garbage.',
        he: 'לוודא קלט: לדחות 0, מספרים שליליים וערכים מעל 3999 במקום להחזיר זבל.',
      },
      {
        en: 'Common follow-up: Roman to integer, subtracting a symbol when it is smaller than the next one.',
        he: 'שאלת המשך נפוצה: מרומי למספר, מחסרים סימן כשהוא קטן מהסימן שאחריו.',
      },
    ],
    extras: [
      {
        en: 'Alternative: four lookup arrays for thousands, hundreds, tens and ones, then concatenate. Also O(1) and branch-free.',
        he: 'חלופה: ארבעה מערכי lookup לאלפים, מאות, עשרות ואחדות, ואז שרשור. גם זה O(1) ובלי תנאים.',
      },
      {
        en: 'The longest output is MMMDCCCLXXXVIII, 15 characters, which matters when sizing a buffer in C.',
        he: 'הפלט הארוך ביותר הוא MMMDCCCLXXXVIII, באורך 15 תווים, וזה חשוב כשקובעים גודל buffer ב-C.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `ROMAN = [(1000, "M"), (900, "CM"), (500, "D"), (400, "CD"), (100, "C"), (90, "XC"),
         (50, "L"), (40, "XL"), (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")]

def int_to_roman(number: int) -> str:
    result = []
    for value, symbol in ROMAN:            # largest value first
        while number >= value:
            result.append(symbol)
            number -= value
    return "".join(result)

print(int_to_roman(1994))   # MCMXCIV
print(int_to_roman(58))     # LVIII`,
      },
      {
        language: 'cpp',
        code: `std::string intToRoman(int number) {
    static const std::pair<int, const char*> table[] = {
        {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"}, {90, "XC"},
        {50, "L"}, {40, "XL"}, {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}};
    std::string result;
    for (auto [value, symbol] : table)          // largest value first
        while (number >= value) { result += symbol; number -= value; }
    return result;
}`,
      },
      {
        language: 'java',
        code: `static String intToRoman(int number) {
    int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < values.length; i++)     // largest value first
        while (number >= values[i]) { result.append(symbols[i]); number -= values[i]; }
    return result.toString();
}`,
      },
      {
        language: 'c',
        code: `/* out must have room for at least 16 characters ("MMMDCCCLXXXVIII" is 15) */
void int_to_roman(int number, char *out) {
    static const int values[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    static const char *symbols[] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    out[0] = '\\0';
    for (int i = 0; i < 13; i++)
        while (number >= values[i]) { strcat(out, symbols[i]); number -= values[i]; }
}`,
      },
    ],
  },
  {
    id: 'q-time-kv-store',
    text: { en: 'Time-based key-value store', he: 'מאגר מפתח-ערך מבוסס זמן' },
    details: {
      description: {
        en: 'Implement a key-value store where every value is saved together with a timestamp, and a read asks for the value as it was at a given time.',
        he: 'ממשו מאגר מפתח-ערך שבו כל ערך נשמר יחד עם חותמת זמן, וקריאה מבקשת את הערך כפי שהיה בזמן נתון.',
      },
      rules: [
        {
          en: 'set(key, value, timestamp): store value for key at that timestamp.',
          he: 'set(key, value, timestamp): שמירת value עבור key בחותמת הזמן הזאת.',
        },
        {
          en: 'get(key, timestamp): return the value stored for key with the largest timestamp that is ≤ the requested one, or "" if there is none.',
          he: 'get(key, timestamp): החזרת הערך של key עם חותמת הזמן הגדולה ביותר שקטנה או שווה למבוקשת, או "" אם אין כזה.',
        },
        {
          en: 'The timestamps passed to set are strictly increasing.',
          he: 'חותמות הזמן שמועברות ל-set עולות בקפידה.',
        },
        {
          en: 'No classes are required: functions plus a dictionary are fine.',
          he: 'לא נדרשות מחלקות: פונקציות ומילון מספיקים.',
        },
      ],
      examples: [
        {
          input: 'set("a", "x", 1)\nset("a", "y", 3)\nget("a", 2)\nget("a", 3)\nget("a", 5)\nget("a", 0)',
          output: '"x"\n"y"\n"y"\n""',
          explanation: {
            en: 'At time 2 the latest value is still "x"; from time 3 on it is "y"; before time 1 nothing exists yet.',
            he: 'בזמן 2 הערך האחרון הוא עדיין "x"; מזמן 3 והלאה הוא "y"; לפני זמן 1 עוד לא קיים כלום.',
          },
        },
      ],
      constraints: [{ en: 'Aim for O(log n) per get.', he: 'שאפו ל-O(log n) לכל get.' }],
    },
    topicId: 'algorithms',
    roleIds: ['qa', 'software', 'backend', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'For each key keep a list of (timestamp, value) pairs in insertion order. Since set timestamps are strictly increasing, appending keeps each list sorted, so set is O(1) amortized. get(key, t) binary searches for the last timestamp at or before t with bisect_right: if it returns 0, return empty, otherwise the value at index i - 1. get is O(log m) for m versions of the key.',
      he: 'לכל מפתח שומרים רשימה של זוגות (timestamp, value) לפי סדר ההכנסה. מכיוון שחותמות הזמן של set עולות בקפידה, הוספה לסוף משאירה את הרשימה ממוינת, ולכן set הוא O(1) amortized. ב-get(key, t) עושים חיפוש בינארי עם bisect_right על חותמת הזמן האחרונה שקטנה או שווה ל-t: אם חוזר 0 מחזירים ריק, ואחרת את הערך באינדקס i - 1. get הוא O(log m), כאשר m הוא מספר הגרסאות של המפתח.',
    },
    example: {
      en: 'After set a=x at time 1 and a=y at time 3, get(a) at times 0, 1, 2, 3 and 5 returns empty, x, x, y, y.',
      he: 'אחרי set של a=x בזמן 1 ו-a=y בזמן 3, get(a) בזמנים 0, 1, 2, 3 ו-5 מחזיר ריק, x, x, y, y.',
    },
    approach: [
      {
        en: 'Clarify: are set timestamps increasing, what to return for a missing key or an early time, and can a timestamp repeat.',
        he: 'מבהירים: האם חותמות הזמן של set עולות, מה מחזירים למפתח חסר או לזמן מוקדם, והאם חותמת יכולה לחזור.',
      },
      {
        en: 'Brute force: scan the key\'s entries linearly in get, O(m) per query.',
        he: 'כוח גס: סורקים לינארית את הרשומות של המפתח ב-get, O(m) לכל שאילתה.',
      },
      {
        en: 'Insight: each key\'s list is already sorted by time, so the floor search is a binary search.',
        he: 'התובנה: הרשימה של כל מפתח כבר ממוינת לפי זמן, ולכן חיפוש ה-floor הוא חיפוש בינארי.',
      },
      {
        en: 'Algorithm: a dict from key to parallel lists of times and values; set appends; get uses bisect_right.',
        he: 'האלגוריתם: dict ממפתח לשתי רשימות מקבילות של זמנים וערכים; set מוסיף לסוף; get משתמש ב-bisect_right.',
      },
      {
        en: 'Test times before, between, exactly on and after the stored timestamps, plus an unknown key.',
        he: 'בודקים זמנים לפני, בין, בדיוק על ואחרי החותמות השמורות, וגם מפתח לא קיים.',
      },
    ],
    keyPoints: [
      {
        en: 'Strictly increasing timestamps are what make append enough; without that guarantee you need a sorted structure.',
        he: 'חותמות זמן שעולות בקפידה הן מה שמאפשר להסתפק ב-append; בלי ההבטחה הזאת צריך מבנה ממוין.',
      },
      {
        en: 'Use bisect_right, not bisect_left, so an exact timestamp match is included.',
        he: 'להשתמש ב-bisect_right ולא ב-bisect_left, כדי שהתאמה מדויקת לחותמת תיכלל.',
      },
      {
        en: 'Know the tools: bisect_right in Python, upper_bound in C++, TreeMap.floorEntry in Java for unsorted inserts.',
        he: 'להכיר את הכלים: bisect_right ב-Python, upper_bound ב-C++, ו-TreeMap.floorEntry ב-Java כשההכנסות לא ממוינות.',
      },
      {
        en: 'Relate it to real systems: this is multi-version storage, the idea behind MVCC snapshots.',
        he: 'לקשר למערכות אמיתיות: זה אחסון רב-גרסתי, הרעיון שמאחורי snapshots של MVCC.',
      },
    ],
    extras: [
      {
        en: 'Memory grows forever, so discuss a retention policy that drops versions older than some horizon.',
        he: 'הזיכרון גדל בלי סוף, ולכן כדאי לדבר על מדיניות שמירה שמוחקת גרסאות ישנות מאופק מסוים.',
      },
      {
        en: 'Edge cases: an unknown key or a time before the first set returns empty; a time after the last set returns the newest value.',
        he: 'מקרי קצה: מפתח לא קיים או זמן לפני ה-set הראשון מחזירים ריק; זמן אחרי ה-set האחרון מחזיר את הערך החדש ביותר.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from bisect import bisect_right

times = {}     # key -> [t1, t2, ...]  sorted, because set is called with growing timestamps
values = {}    # key -> [v1, v2, ...]  same positions as times

def set_value(key, value, timestamp):
    times.setdefault(key, []).append(timestamp)
    values.setdefault(key, []).append(value)

def get_value(key, timestamp):
    if key not in times:
        return ""
    i = bisect_right(times[key], timestamp)      # how many stored times are <= timestamp
    return values[key][i - 1] if i > 0 else ""

set_value("a", "x", 1)
set_value("a", "y", 3)
print(get_value("a", 2), get_value("a", 3), get_value("a", 5), repr(get_value("a", 0)))
# x y y ''`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <map>
#include <string>
#include <vector>

std::map<std::string, std::vector<std::pair<int, std::string>>> store;   // key -> (time, value), sorted

void setValue(const std::string& key, const std::string& value, int timestamp) {
    store[key].push_back({timestamp, value});        // timestamps only grow: stays sorted
}

std::string getValue(const std::string& key, int timestamp) {
    auto it = store.find(key);
    if (it == store.end()) return "";
    const auto& entries = it->second;
    // first entry with time > timestamp ...
    auto pos = std::upper_bound(entries.begin(), entries.end(), timestamp,
        [](int t, const std::pair<int, std::string>& e) { return t < e.first; });
    if (pos == entries.begin()) return "";           // everything stored is newer than asked
    return std::prev(pos)->second;                   // ... so the one before it is the answer
}`,
      },
      {
        language: 'java',
        code: `static Map<String, List<Integer>> times = new HashMap<>();
static Map<String, List<String>> values = new HashMap<>();

static void set(String key, String value, int timestamp) {
    times.computeIfAbsent(key, k -> new ArrayList<>()).add(timestamp);
    values.computeIfAbsent(key, k -> new ArrayList<>()).add(value);
}

static String get(String key, int timestamp) {
    List<Integer> t = times.get(key);
    if (t == null) return "";
    int lo = 0, hi = t.size();                 // binary search: first index with time > timestamp
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (t.get(mid) <= timestamp) lo = mid + 1; else hi = mid;
    }
    return lo == 0 ? "" : values.get(key).get(lo - 1);
}`,
      },
    ],
  },
  {
    id: 'q-sensor-anomalies',
    text: { en: 'Sensor anomalies', he: 'חריגות בקריאות סנסור' },
    details: {
      description: {
        en: 'A list of numeric readings from a sensor is given. Return the list of indices at which an anomaly occurs according to any of the rules below.',
        he: 'נתונה רשימה של קריאות מספריות מסנסור. החזירו את רשימת האינדקסים שבהם יש חריגה לפי אחד מהכללים הבאים.',
      },
      rules: [
        {
          en: 'The same value appears three or more times in a row: report the index where the run reaches three.',
          he: 'אותו ערך מופיע שלוש פעמים או יותר ברצף: מדווחים על האינדקס שבו הרצף מגיע לשלוש.',
        },
        {
          en: 'The value is 0 and the previous value was not 0: report the index of the 0.',
          he: 'הערך הוא 0 והערך הקודם לא היה 0: מדווחים על האינדקס של ה-0.',
        },
        {
          en: 'The value differs from the previous value by more than 50% of the previous value: report the current index.',
          he: 'הערך שונה מהערך הקודם ביותר מ-50% מהערך הקודם: מדווחים על האינדקס הנוכחי.',
        },
        { en: 'Report each index at most once.', he: 'מדווחים על כל אינדקס פעם אחת לכל היותר.' },
      ],
      examples: [
        {
          input: 'readings = [10, 10, 10, 10, 0, 4, 9, 9]',
          output: '[2, 4, 6]',
          explanation: {
            en: 'Index 2: third 10 in a row. Index 4: a 0 after a non-zero. Index 6: 9 after 4 is a jump of more than 50%. Index 5 (4 after 0) is not reported because a percentage of 0 is undefined.',
            he: 'אינדקס 2: 10 שלישי ברצף. אינדקס 4: 0 אחרי ערך שאינו 0. אינדקס 6: 9 אחרי 4 הוא קפיצה של יותר מ-50%. אינדקס 5 (4 אחרי 0) לא מדווח כי אחוז מתוך 0 אינו מוגדר.',
          },
        },
      ],
      constraints: [
        {
          en: 'State your assumptions out loud: what happens with a run longer than three, and with a previous value of 0.',
          he: 'אמרו את ההנחות בקול: מה קורה ברצף ארוך משלוש, ומה קורה כשהערך הקודם הוא 0.',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['qa', 'software', 'embedded', 'data', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'One pass from index 1 keeps only the previous reading and the length of the current run of equal values. At each index update the run, then check three rules: the run length is exactly 3; the value is 0 and the previous is not; or the previous is non-zero and the absolute jump exceeds 50% of it. If any holds, append the index once. O(n) time, O(1) extra space.',
      he: 'עושים מעבר אחד מאינדקס 1, ושומרים רק את הקריאה הקודמת ואת אורך הרצף הנוכחי של ערכים שווים. בכל אינדקס מעדכנים את הרצף ובודקים שלושה כללים: אורך הרצף בדיוק 3; הערך 0 והקודם לא; או שהקודם אינו 0 והקפיצה המוחלטת גדולה מ-50% ממנו. אם אחד הכללים מתקיים, מוסיפים את האינדקס פעם אחת. זמן O(n), זיכרון נוסף O(1).',
    },
    approach: [
      {
        en: 'Clarify: runs longer than three, a previous value of 0, whether 50% is strict, negative readings and duplicate reports.',
        he: 'מבהירים: רצף ארוך משלוש, ערך קודם 0, האם 50% הוא אי-שוויון חזק, קריאות שליליות ודיווחים כפולים.',
      },
      {
        en: 'Naive: one loop per rule merged with a set, O(n) but clumsy and easy to get wrong.',
        he: 'נאיבי: לולאה נפרדת לכל כלל ומיזוג עם set, O(n) אבל מסורבל וקל לטעות.',
      },
      {
        en: 'Insight: every rule depends only on the previous value and the run length, so one pass with constant state suffices.',
        he: 'התובנה: כל כלל תלוי רק בערך הקודם ובאורך הרצף, ולכן מספיק מעבר אחד עם מצב קבוע.',
      },
      {
        en: 'Algorithm: run = 1; for each i from 1, update run, compute three booleans, append i if any is true.',
        he: 'האלגוריתם: run = 1; לכל i מ-1 מעדכנים את run, מחשבים שלושה בוליאנים, ומוסיפים את i אם אחד מהם true.',
      },
      {
        en: 'Test the given example ([2, 4, 6]), an empty list, all zeros, a long equal run and negative readings.',
        he: 'בודקים את הדוגמה הנתונה ([2, 4, 6]), רשימה ריקה, רק אפסים, רצף ארוך של ערכים שווים וקריאות שליליות.',
      },
    ],
    keyPoints: [
      {
        en: 'Guard the division by zero: when the previous value is 0, the jump rule is skipped.',
        he: 'להגן על חלוקה באפס: כשהערך הקודם 0, מדלגים על כלל הקפיצה.',
      },
      {
        en: 'Use abs on both the difference and the previous value so negative readings behave correctly.',
        he: 'להשתמש ב-abs גם על ההפרש וגם על הערך הקודם, כדי שקריאות שליליות יתנהגו נכון.',
      },
      {
        en: 'OR the rules and append once, which avoids duplicate indices without a set.',
        he: 'לחבר את הכללים ב-OR ולהוסיף פעם אחת, וכך אין אינדקסים כפולים בלי set.',
      },
      {
        en: 'A run longer than three is reported only once, at its third element.',
        he: 'רצף ארוך משלוש מדווח פעם אחת בלבד, באיבר השלישי שלו.',
      },
    ],
    extras: [
      {
        en: 'Comparing floats with == is fragile; real sensor data may need a tolerance like abs(a - b) < eps.',
        he: 'השוואת float עם == שבירה; בנתוני סנסור אמיתיים אולי צריך סבילות כמו abs(a - b) < eps.',
      },
      {
        en: 'Write each rule as a small predicate so new anomaly types can be added and unit tested separately.',
        he: 'כדאי לכתוב כל כלל כפונקציה קטנה, כדי שאפשר יהיה להוסיף סוגי חריגות חדשים ולבדוק כל אחד ב-unit test.',
      },
      {
        en: 'The same state machine works on an unbounded stream, because it only needs the previous reading.',
        he: 'אותה מכונת מצבים עובדת גם על stream אינסופי, כי היא צריכה רק את הקריאה הקודמת.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def find_anomalies(readings):
    anomalies = []
    run = 1                                    # length of the current run of equal values
    for i in range(1, len(readings)):
        prev, cur = readings[i - 1], readings[i]
        run = run + 1 if cur == prev else 1

        repeated = run == 3                    # third equal value in a row
        dropped_to_zero = cur == 0 and prev != 0
        big_jump = prev != 0 and abs(cur - prev) > 0.5 * abs(prev)

        if repeated or dropped_to_zero or big_jump:
            anomalies.append(i)                # each index reported once
    return anomalies

print(find_anomalies([10, 10, 10, 10, 0, 4, 9, 9]))   # [2, 4, 6]`,
      },
      {
        language: 'cpp',
        code: `#include <cmath>
#include <vector>

std::vector<int> findAnomalies(const std::vector<double>& r) {
    std::vector<int> anomalies;
    int run = 1;                                  // current run of equal values
    for (size_t i = 1; i < r.size(); ++i) {
        double prev = r[i - 1], cur = r[i];
        run = (cur == prev) ? run + 1 : 1;
        bool repeated      = run == 3;
        bool droppedToZero = cur == 0 && prev != 0;
        bool bigJump       = prev != 0 && std::fabs(cur - prev) > 0.5 * std::fabs(prev);
        if (repeated || droppedToZero || bigJump) anomalies.push_back((int)i);
    }
    return anomalies;
}`,
      },
      {
        language: 'java',
        code: `static List<Integer> findAnomalies(double[] r) {
    List<Integer> anomalies = new ArrayList<>();
    int run = 1;                                  // current run of equal values
    for (int i = 1; i < r.length; i++) {
        double prev = r[i - 1], cur = r[i];
        run = (cur == prev) ? run + 1 : 1;
        boolean repeated      = run == 3;
        boolean droppedToZero = cur == 0 && prev != 0;
        boolean bigJump       = prev != 0 && Math.abs(cur - prev) > 0.5 * Math.abs(prev);
        if (repeated || droppedToZero || bigJump) anomalies.add(i);
    }
    return anomalies;
}`,
      },
    ],
  },
  // ---------- Verification / Python / Linux style (added after the NVIDIA verification round) ----------
  {
    id: 'q-lru-cache',
    text: { en: 'Design an LRU cache with O(1) get and put.', he: 'תכננו LRU cache עם get ו-put ב-O(1).' },
    details: {
      description: {
        en: 'Design a data structure that behaves like a Least Recently Used cache with a fixed capacity. get(key) returns the value or -1; put(key, value) inserts or updates, and when the capacity is exceeded it evicts the key that was used least recently. Both operations must run in O(1).',
        he: 'תכננו מבנה נתונים שמתנהג כמו מטמון LRU (Least Recently Used) בקיבולת קבועה. get(key) מחזיר את הערך או -1; put(key, value) מכניס או מעדכן, וכאשר חורגים מהקיבולת הוא מסיר את המפתח שהשימוש בו היה הכי מזמן. שתי הפעולות חייבות לרוץ ב-O(1).',
      },
      rules: [
        { en: 'Both get and put count as "using" a key.', he: 'גם get וגם put נחשבים "שימוש" במפתח.' },
      ],
      examples: [
        {
          input: 'capacity = 2\nput(1, 1); put(2, 2); get(1); put(3, 3); get(2); get(3)',
          output: 'get(1) = 1, get(2) = -1, get(3) = 3',
          explanation: { en: 'put(3, 3) evicted key 2 because key 1 had just been used.', he: 'put(3, 3) הסיר את מפתח 2, כי במפתח 1 השתמשו ממש לפני כן.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Pair a hash map with a doubly linked list. The list keeps entries in recency order, most recent at the front, and the map goes from key to node. get moves the node to the front. put updates or inserts at the front, and when over capacity removes the tail node and its key from the map. Both are O(1), since prev and next pointers unlink a node in place.',
      he: 'משלבים hash map עם רשימה מקושרת דו-כיוונית. הרשימה שומרת את הרשומות לפי סדר השימוש, החדשה ביותר בראש, וה-map ממפה ממפתח לצומת. get מעביר את הצומת לראש. put מעדכן או מכניס בראש, וכשעוברים את הקיבולת מוציא את הצומת שבזנב ומוחק את המפתח שלו מה-map. שתי הפעולות O(1), כי מצביעי prev ו-next מנתקים צומת במקום.',
    },
    example: {
      en: 'With capacity 2: put 1, put 2, get 1, then put 3 evicts key 2, because 1 was used more recently. Now get 2 returns -1.',
      he: 'עם קיבולת 2: put 1, put 2, get 1, ואז put 3 מוציא את מפתח 2, כי ב-1 השתמשו לאחרונה. עכשיו get 2 מחזיר -1.',
    },
    approach: [
      {
        en: 'Clarify: capacity at least 1, what get returns on a miss, and that both get and put count as a use.',
        he: 'מבהירים: קיבולת לפחות 1, מה get מחזיר כשאין פגיעה, ושגם get וגם put נחשבים שימוש.',
      },
      {
        en: 'Naive: a timestamp per key and a scan for the oldest on eviction, O(n) per put.',
        he: 'נאיבי: חותמת זמן לכל מפתח וסריקה לחיפוש הישן ביותר בזמן eviction, O(n) לכל put.',
      },
      {
        en: 'Insight: we need O(1) lookup and O(1) reordering, so pair a hash map with a doubly linked list.',
        he: 'התובנה: צריך חיפוש ב-O(1) ושינוי סדר ב-O(1), ולכן מצמידים hash map לרשימה דו-כיוונית.',
      },
      {
        en: 'Algorithm: get moves the node to the front; put inserts at the front and evicts the tail when over capacity.',
        he: 'האלגוריתם: get מעביר את הצומת לראש; put מכניס בראש ומוציא את הזנב כשחורגים מהקיבולת.',
      },
      {
        en: 'Trace capacity 2 with put 1, put 2, get 1, put 3, then test updating a key and capacity 1.',
        he: 'עוקבים אחרי קיבולת 2 עם put 1, put 2, get 1, put 3, ואז בודקים עדכון של מפתח קיים וקיבולת 1.',
      },
    ],
    keyPoints: [
      {
        en: 'Each half is needed: the map alone has no order, and the list alone needs O(n) to find a key.',
        he: 'צריך את שני החלקים: ה-map לבד לא שומר סדר, והרשימה לבד צריכה O(n) כדי למצוא מפתח.',
      },
      {
        en: 'Store the key inside the node, or you cannot delete the evicted entry from the map.',
        he: 'לשמור את המפתח בתוך הצומת, אחרת אי אפשר למחוק מה-map את הרשומה שהוצאה.',
      },
      {
        en: 'Sentinel head and tail nodes remove the null checks at both ends.',
        he: 'צמתי sentinel בראש ובזנב חוסכים את בדיקות ה-null בקצוות.',
      },
      {
        en: 'put on an existing key updates it and refreshes recency without evicting anything.',
        he: 'put על מפתח קיים מעדכן אותו ומרענן את סדר השימוש בלי להוציא שום דבר.',
      },
    ],
    extras: [
      {
        en: 'Python\'s OrderedDict, Java\'s LinkedHashMap with access order and C++ std::list::splice give this structure almost directly.',
        he: 'OrderedDict ב-Python, LinkedHashMap עם access order ב-Java ו-std::list::splice ב-C++ נותנים את המבנה הזה כמעט ישירות.',
      },
      {
        en: 'Follow-ups: thread safety with a lock or sharding, LFU instead of LRU, and TTL expiry.',
        he: 'שאלות המשך: thread safety עם נעילה או חלוקה ל-shards, LFU במקום LRU, ותפוגה עם TTL.',
      },
      {
        en: 'Real-world anchors: CPU caches, OS page replacement approximations and Redis\'s allkeys-lru eviction policy.',
        he: 'עוגנים מהעולם האמיתי: מטמוני CPU, קירובים של החלפת דפים במערכת ההפעלה, ומדיניות allkeys-lru ב-Redis.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.data = OrderedDict()

    def get(self, key):
        if key not in self.data:
            return -1
        self.data.move_to_end(key)          # most recently used -> end
        return self.data[key]

    def put(self, key, value):
        self.data[key] = value
        self.data.move_to_end(key)
        if len(self.data) > self.cap:
            self.data.popitem(last=False)   # evict the least recently used`,
      },
      {
        language: 'cpp',
        code: `#include <list>
#include <unordered_map>

class LRUCache {
    int cap;
    std::list<std::pair<int, int>> items;                                   // front = most recent
    std::unordered_map<int, std::list<std::pair<int, int>>::iterator> where;
public:
    explicit LRUCache(int capacity) : cap(capacity) {}

    int get(int key) {
        auto it = where.find(key);
        if (it == where.end()) return -1;
        items.splice(items.begin(), items, it->second);                     // move to front, O(1)
        return it->second->second;
    }

    void put(int key, int value) {
        if (auto it = where.find(key); it != where.end()) {
            it->second->second = value;
            items.splice(items.begin(), items, it->second);
            return;
        }
        items.emplace_front(key, value);
        where[key] = items.begin();
        if ((int)items.size() > cap) {
            where.erase(items.back().first);
            items.pop_back();
        }
    }
};`,
      },
      {
        language: 'java',
        code: `import java.util.LinkedHashMap;
import java.util.Map;

class LRUCache extends LinkedHashMap<Integer, Integer> {
    private final int cap;

    LRUCache(int capacity) {
        super(capacity, 0.75f, true);      // accessOrder = true: get() moves the entry to the end
        cap = capacity;
    }

    public int get(int key) { return getOrDefault(key, -1); }

    public void put(int key, int value) { super.put(key, value); }

    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > cap;               // evict the least recently used
    }
}`,
      },
    ],
  },
  {
    id: 'q-valid-parentheses',
    text: { en: 'Check whether a string of brackets ()[]{} is balanced.', he: 'בדקו אם מחרוזת של סוגריים ()[]{} מאוזנת.' },
    details: {
      description: {
        en: 'Given a string containing only the characters ( ) [ ] { }, decide whether it is valid: every opening bracket is closed by the same type of bracket, and in the correct order.',
        he: 'נתונה מחרוזת שמכילה רק את התווים ( ) [ ] { }. קבעו אם היא תקינה: כל סוגר פותח נסגר על ידי סוגר מאותו סוג, ובסדר הנכון.',
      },
      examples: [
        {
          input: 's = "()[]{}"',
          output: 'true',
        },
        {
          input: 's = "([)]"',
          output: 'false',
          explanation: { en: 'The ( is closed by ] before the [ is closed.', he: 'ה-( נסגר על ידי ] לפני שה-[ נסגר.' },
        },
        {
          input: 's = "{[]}"',
          output: 'true',
        },
      ],
      constraints: [
        { en: 'An empty string is valid', he: 'מחרוזת ריקה נחשבת תקינה' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'verification', 'qa', 'frontend', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Use a stack, because brackets close in last-opened, first-closed order. Push every opener. On a closer, the stack must be non-empty and its top must be the matching opener; pop it, or return false. At the end the string is valid only if the stack is empty. A small map from closer to opener makes the check one lookup. Time O(n), space O(n).',
      he: 'משתמשים במחסנית, כי סוגריים נסגרים בסדר של האחרון שנפתח נסגר ראשון. כל פותח נדחף. בסוגר, המחסנית חייבת להיות לא ריקה והראש שלה חייב להיות הפותח המתאים; מוציאים אותו, או מחזירים false. בסוף המחרוזת תקינה רק אם המחסנית ריקה. מפה קטנה מסוגר לפותח הופכת את הבדיקה לחיפוש אחד. זמן O(n), זיכרון O(n).',
    },
    approach: [
      {
        en: 'Clarify: only the six bracket characters, whether the empty string counts as valid, and whether other characters may appear.',
        he: 'מבהירים: רק ששת תווי הסוגריים, האם מחרוזת ריקה נחשבת תקינה, והאם יכולים להופיע תווים אחרים.',
      },
      {
        en: 'Brute force: repeatedly delete adjacent pairs \'()\', \'[]\', \'{}\' until nothing changes, O(n^2).',
        he: 'כוח גס: מוחקים שוב ושוב זוגות סמוכים \'()\', \'[]\', \'{}\' עד שאין שינוי, O(n^2).',
      },
      {
        en: 'Insight: a closer must match the most recent unmatched opener, which is last-in, first-out, so a stack.',
        he: 'התובנה: סוגר צריך להתאים לפותח האחרון שעוד לא הותאם, וזה last-in, first-out, כלומר מחסנית.',
      },
      {
        en: 'Algorithm: push openers; on a closer fail if the stack is empty or mismatched; return whether the stack is empty.',
        he: 'האלגוריתם: דוחפים פותחים; בסוגר נכשלים אם המחסנית ריקה או שאין התאמה; מחזירים האם המחסנית ריקה.',
      },
      {
        en: 'Test \'\' (true), \'()[]{}\' (true), \'{[]}\' (true), \'([)]\' (false), \']\' (false) and \'((\' (false).',
        he: 'בודקים \'\' (true), \'()[]{}\' (true), \'{[]}\' (true), \'([)]\' (false), \']\' (false) ו-\'((\' (false).',
      },
    ],
    keyPoints: [
      {
        en: 'A counter is not enough with three types: \'([)]\' has balanced counts but is invalid.',
        he: 'מונה לא מספיק עם שלושה סוגים: ב-\'([)]\' הספירות מאוזנות אבל המחרוזת לא תקינה.',
      },
      {
        en: 'Check for an empty stack before popping; it is the most common bug.',
        he: 'לבדוק שהמחסנית לא ריקה לפני pop; זה הבאג הנפוץ ביותר.',
      },
      {
        en: 'Do not forget the final emptiness check, or \'((\' is wrongly accepted.',
        he: 'לא לשכוח את בדיקת הריקות בסוף, אחרת \'((\' יתקבל בטעות.',
      },
      {
        en: 'Early exit: an odd-length string can never be valid.',
        he: 'יציאה מוקדמת: מחרוזת באורך אי-זוגי אף פעם לא תקינה.',
      },
    ],
    extras: [
      {
        en: 'Compilers, JSON and XML parsers and editor bracket matching all rely on this stack idea.',
        he: 'קומפיילרים, parsers של JSON ו-XML והתאמת סוגריים בעורכים נשענים כולם על רעיון המחסנית הזה.',
      },
      {
        en: 'Follow-up: if other characters appear, simply skip anything that is not a bracket.',
        he: 'שאלת המשך: אם מופיעים תווים אחרים, פשוט מדלגים על כל מה שאינו סוגר.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def is_balanced(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif not stack or stack.pop() != pairs[ch]:
            return False
    return not stack`,
      },
      {
        language: 'cpp',
        code: `#include <stack>
#include <string>

bool isBalanced(const std::string& s) {
    std::stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') { st.push(c); continue; }
        if (st.empty()) return false;
        char open = st.top(); st.pop();
        if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{')) return false;
    }
    return st.empty();
}`,
      },
      {
        language: 'java',
        code: `boolean isBalanced(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') { stack.push(c); continue; }
        if (stack.isEmpty()) return false;
        char open = stack.pop();
        if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{')) return false;
    }
    return stack.isEmpty();
}`,
      },
    ],
  },
  {
    id: 'q-merge-intervals',
    text: { en: 'Merge all overlapping intervals in a list of [start, end] pairs.', he: 'מזגו את כל המקטעים החופפים ברשימה של זוגות [start, end].' },
    details: {
      description: {
        en: 'Given a list of intervals, each a pair [start, end], merge every group of overlapping intervals and return the resulting list of non-overlapping intervals.',
        he: 'נתונה רשימה של מקטעים, כל אחד זוג [start, end]. מזגו כל קבוצה של מקטעים חופפים והחזירו רשימה של מקטעים שאינם חופפים.',
      },
      examples: [
        {
          input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
          output: '[[1,6],[8,10],[15,18]]',
          explanation: { en: '[1,3] and [2,6] overlap, so they become [1,6].', he: '[1,3] ו-[2,6] חופפים, ולכן הם הופכים ל-[1,6].' },
        },
        {
          input: 'intervals = [[1,4],[4,5]]',
          output: '[[1,5]]',
          explanation: { en: 'Touching intervals count as overlapping.', he: 'מקטעים שנוגעים זה בזה נחשבים חופפים.' },
        },
      ],
      constraints: [
        { en: 'The input is not necessarily sorted', he: 'הקלט לא בהכרח ממוין' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Sort the intervals by start, then sweep once. For each interval, if its start is at most the last merged end, they overlap, so extend that end to the maximum of the two ends; otherwise append it as a new block. After sorting, anything that overlaps the current block must come right after it. Time is O(n log n) for the sort, and O(n) space for the output.',
      he: 'ממיינים את המקטעים לפי start, ואז עוברים פעם אחת. לכל מקטע, אם ה-start שלו קטן או שווה ל-end של המקטע הממוזג האחרון, הם חופפים, ולכן מרחיבים את ה-end למקסימום של שניהם; אחרת מוסיפים אותו כבלוק חדש. אחרי המיון, כל מה שחופף לבלוק הנוכחי חייב להופיע מיד אחריו. זמן O(n log n) בגלל המיון, וזיכרון O(n) לפלט.',
    },
    example: {
      en: '[[1,3],[2,6],[8,10],[15,18]] becomes [[1,6],[8,10],[15,18]]: 2 falls inside [1,3], so the end grows to 6, while 8 starts after 6.',
      he: '[[1,3],[2,6],[8,10],[15,18]] הופך ל-[[1,6],[8,10],[15,18]]: ה-2 נמצא בתוך [1,3], ולכן ה-end גדל ל-6, ואילו 8 מתחיל אחרי 6.',
    },
    approach: [
      {
        en: 'Clarify: is the input sorted, do touching intervals merge, and may the input be modified.',
        he: 'מבהירים: האם הקלט ממוין, האם מקטעים שנוגעים מתמזגים, והאם מותר לשנות את הקלט.',
      },
      {
        en: 'Brute force: compare every pair and merge repeatedly until nothing changes, O(n^2) or worse.',
        he: 'כוח גס: משווים כל זוג וממזגים שוב ושוב עד שאין שינוי, O(n^2) או גרוע מזה.',
      },
      {
        en: 'Insight: once sorted by start, overlapping intervals become adjacent, so one linear sweep merges them.',
        he: 'התובנה: אחרי מיון לפי start מקטעים חופפים הופכים לסמוכים, ולכן מעבר לינארי אחד ממזג אותם.',
      },
      {
        en: 'Algorithm: sort by start; extend the last end with max if start <= end, else append a new interval.',
        he: 'האלגוריתם: ממיינים לפי start; אם start <= end מרחיבים את ה-end האחרון עם max, ואחרת מוסיפים מקטע חדש.',
      },
      {
        en: 'Test the classic example, touching [[1,4],[4,5]], nested [[1,10],[2,3]], unsorted input and an empty list.',
        he: 'בודקים את הדוגמה הקלאסית, מקטעים שנוגעים [[1,4],[4,5]], מקוננים [[1,10],[2,3]], קלט לא ממוין ורשימה ריקה.',
      },
    ],
    keyPoints: [
      {
        en: 'Use max for the new end; just taking the next end breaks on nested intervals like [1,10] and [2,3].',
        he: 'להשתמש ב-max ל-end החדש; לקחת פשוט את ה-end הבא נשבר על מקטעים מקוננים כמו [1,10] ו-[2,3].',
      },
      {
        en: 'Confirm whether touching intervals like [1,4] and [4,5] merge; it decides between < and <=.',
        he: 'לוודא אם מקטעים שנוגעים, כמו [1,4] ו-[4,5], מתמזגים; זה קובע בין < לבין <=.',
      },
      {
        en: 'Sorting in place mutates the caller\'s list; copy it if the input must stay unchanged.',
        he: 'מיון במקום משנה את הרשימה של מי שקרא לפונקציה; מעתיקים אם הקלט צריך להישאר כמו שהוא.',
      },
    ],
    extras: [
      {
        en: 'Related follow-ups: insert one interval into a sorted list in O(n), or count meeting rooms with a min-heap of end times.',
        he: 'שאלות המשך קשורות: הכנסת מקטע אחד לרשימה ממוינת ב-O(n), או ספירת חדרי ישיבות עם min-heap של זמני סיום.',
      },
      {
        en: 'Real uses: merging calendar busy slots, memory address ranges or time windows in log analysis.',
        he: 'שימושים אמיתיים: מיזוג זמנים תפוסים ביומן, טווחי כתובות זיכרון או חלונות זמן בניתוח לוגים.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def merge(intervals):
    intervals.sort(key=lambda iv: iv[0])
    merged = []
    for start, end in intervals:
        if merged and start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)   # overlaps: extend the current one
        else:
            merged.append([start, end])
    return merged`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <vector>

std::vector<std::vector<int>> merge(std::vector<std::vector<int>> intervals) {
    std::sort(intervals.begin(), intervals.end());
    std::vector<std::vector<int>> merged;
    for (const auto& iv : intervals) {
        if (!merged.empty() && iv[0] <= merged.back()[1])
            merged.back()[1] = std::max(merged.back()[1], iv[1]);
        else
            merged.push_back(iv);
    }
    return merged;
}`,
      },
    ],
  },
  {
    id: 'q-linked-list-cycle',
    text: {
      en: 'Detect whether a singly linked list has a cycle, in O(1) extra space.',
      he: 'בדקו אם ברשימה מקושרת חד-כיוונית יש מעגל, במקום נוסף של O(1).',
    },
    details: {
      description: {
        en: 'Given the head of a singly linked list, return true if following the next pointers eventually revisits a node (the list has a cycle), otherwise false. Use O(1) extra memory.',
        he: 'נתון ראש של רשימה מקושרת חד-כיוונית. החזירו true אם מעקב אחרי מצביעי next מגיע שוב לצומת שכבר ביקרנו בו (יש מעגל), אחרת false. השתמשו בזיכרון נוסף של O(1).',
      },
      examples: [
        {
          input: 'head = 3 -> 2 -> 0 -> -4, and the next of -4 points back to 2',
          output: 'true',
        },
        {
          input: 'head = 1 -> 2, and the next of 2 is null',
          output: 'false',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'verification', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Use Floyd\'s tortoise and hare: slow moves one node per step and fast moves two. Loop while fast and fast.next exist; if they ever point to the same node there is a cycle, and if fast reaches the end there is none. Inside a cycle the gap closes by exactly one node per step, so fast cannot skip over slow. Time O(n), extra space O(1).',
      he: 'משתמשים בצב והארנב של Floyd: slow מתקדם צומת אחד בכל צעד ו-fast מתקדם שניים. ממשיכים כל עוד fast ו-fast.next קיימים; אם הם מצביעים אי פעם על אותו צומת יש מעגל, ואם fast מגיע לסוף אין. בתוך מעגל הפער נסגר בדיוק בצומת אחד בכל צעד, ולכן fast לא יכול לדלג מעל slow. זמן O(n), זיכרון נוסף O(1).',
    },
    approach: [
      {
        en: 'Clarify: singly linked, may be empty, O(1) extra memory, and whether modifying the list is allowed.',
        he: 'מבהירים: רשימה חד-כיוונית, יכולה להיות ריקה, זיכרון נוסף O(1), והאם מותר לשנות את הרשימה.',
      },
      {
        en: 'Simple solution: store visited nodes in a hash set; O(n) time, but O(n) space breaks the constraint.',
        he: 'פתרון פשוט: שומרים צמתים שביקרנו בהם ב-hash set; זמן O(n), אבל זיכרון O(n) שובר את הדרישה.',
      },
      {
        en: 'Insight: two pointers at different speeds must meet inside a cycle, with no extra memory.',
        he: 'התובנה: שני מצביעים במהירויות שונות חייבים להיפגש בתוך מעגל, בלי זיכרון נוסף.',
      },
      {
        en: 'Algorithm: slow = fast = head; while fast and fast.next, step 1 and 2; meeting means a cycle.',
        he: 'האלגוריתם: slow = fast = head; כל עוד fast ו-fast.next קיימים מתקדמים 1 ו-2 צעדים, ואם הם נפגשים יש מעגל.',
      },
      {
        en: 'Test an empty list, one node, a self-loop, 3 -> 2 -> 0 -> -4 back to 2, and 1 -> 2.',
        he: 'בודקים רשימה ריקה, צומת אחד, צומת שמצביע על עצמו, 3 -> 2 -> 0 -> -4 שחוזר ל-2, ו-1 -> 2.',
      },
    ],
    keyPoints: [
      {
        en: 'A hash set of visited nodes also works in O(n) time, but costs O(n) memory.',
        he: 'hash set של צמתים שביקרנו בהם גם עובד בזמן O(n), אבל עולה O(n) זיכרון.',
      },
      {
        en: 'Check both fast and fast.next before advancing, or you dereference null.',
        he: 'לבדוק גם את fast וגם את fast.next לפני ההתקדמות, אחרת ניגשים ל-null.',
      },
      {
        en: 'Compare node identity, not values, since values can repeat.',
        he: 'להשוות זהות של צמתים ולא ערכים, כי ערכים יכולים לחזור.',
      },
      {
        en: 'Follow-up: to find the cycle start, reset one pointer to head and step both one at a time.',
        he: 'שאלת המשך: כדי למצוא את תחילת המעגל, אחרי המפגש מחזירים מצביע אחד לראש ומקדמים את שניהם צעד אחד בכל פעם.',
      },
    ],
    extras: [
      {
        en: 'Cycle length: keep one pointer at the meeting point and count steps until the other returns to it.',
        he: 'אורך המעגל: משאירים מצביע אחד בנקודת המפגש וסופרים צעדים עד שהשני חוזר אליו.',
      },
      {
        en: 'The same idea finds a duplicate in an array of n+1 values from 1 to n, treating values as next pointers.',
        he: 'אותו רעיון מוצא מספר כפול במערך של n+1 ערכים בין 1 ל-n, כשמתייחסים לערכים כמצביעי next.',
      },
      {
        en: 'Edge cases: an empty list, one node, one node pointing to itself, and a cycle that starts at the head.',
        he: 'מקרי קצה: רשימה ריקה, צומת אחד, צומת אחד שמצביע על עצמו, ומעגל שמתחיל בראש.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`,
      },
      {
        language: 'c',
        code: `#include <stdbool.h>

struct Node { int val; struct Node* next; };

bool has_cycle(struct Node* head) {
    struct Node *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
      },
      {
        language: 'cpp',
        code: `struct Node { int val; Node* next; };

bool hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
      },
    ],
  },
  {
    id: 'q-top-k-frequent',
    text: { en: 'Return the k most frequent elements of an array.', he: 'החזירו את k האיברים השכיחים ביותר במערך.' },
    details: {
      description: {
        en: 'Given an integer array nums and an integer k, return the k elements that appear most often. The answer may be returned in any order.',
        he: 'נתונים מערך של מספרים שלמים nums ומספר k. החזירו את k האיברים שמופיעים הכי הרבה פעמים. אפשר להחזיר את התשובה בכל סדר.',
      },
      examples: [
        {
          input: 'nums = [1, 1, 1, 2, 2, 3], k = 2',
          output: '[1, 2]',
        },
        {
          input: 'nums = [4], k = 1',
          output: '[4]',
        },
      ],
      constraints: [
        { en: 'k is between 1 and the number of distinct elements, and the answer is unique', he: 'k הוא בין 1 למספר האיברים השונים, והתשובה יחידה' },
        { en: 'Aim for better than O(n log n)', he: 'שאפו לסיבוכיות טובה מ-O(n log n)' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'First count occurrences with a hash map in O(n). Then pick the top k without a full sort. A min-heap of size k over (count, value) pairs, popping whenever it exceeds k, gives O(n log k). Or use bucket sort: a frequency is at most n, so bucket the values by count and read from the highest bucket down until k are collected, O(n) time and space.',
      he: 'קודם סופרים מופעים עם hash map ב-O(n). אחר כך בוחרים את k העליונים בלי מיון מלא. min-heap בגודל k על זוגות (count, value), שמוציאים ממנו כל פעם שהוא עובר את k, נותן O(n log k). או bucket sort: שכיחות היא לכל היותר n, ולכן מחלקים את הערכים לדליים לפי ספירה וקוראים מהדלי הגבוה למטה עד שיש k ערכים, זמן וזיכרון O(n).',
    },
    example: {
      en: 'For [1,1,1,2,2,3] with k = 2 the counts are 1:3, 2:2 and 3:1, so the answer is [1, 2].',
      he: 'עבור [1,1,1,2,2,3] עם k = 2 הספירות הן 1:3, 2:2 ו-3:1, ולכן התשובה היא [1, 2].',
    },
    approach: [
      {
        en: 'Clarify: k is valid, the answer is unique, output order does not matter, and better than O(n log n) is expected.',
        he: 'מבהירים: k תקין, התשובה יחידה, סדר הפלט לא משנה, ומצופה משהו טוב מ-O(n log n).',
      },
      {
        en: 'Baseline: count, then sort the distinct values by count, O(n log n) in the worst case.',
        he: 'בסיס: סופרים וממיינים את הערכים השונים לפי ספירה, O(n log n) במקרה הגרוע.',
      },
      {
        en: 'Insight: only the top k is needed, so a bounded heap or frequency buckets avoid the full sort.',
        he: 'התובנה: צריך רק את k העליונים, ולכן heap חסום או דליי שכיחות חוסכים את המיון המלא.',
      },
      {
        en: 'Algorithm: count; keep a size-k min-heap, or fill buckets and read from the highest down. Heap O(n log k), buckets O(n).',
        he: 'האלגוריתם: סופרים; מחזיקים min-heap בגודל k, או ממלאים דליים וקוראים מהגבוה למטה. heap ב-O(n log k), דליים ב-O(n).',
      },
      {
        en: 'Test [1,1,1,2,2,3] with k=2, [4] with k=1, and all-distinct values with k equal to the length.',
        he: 'בודקים [1,1,1,2,2,3] עם k=2, [4] עם k=1, ומערך של ערכים שונים עם k ששווה לאורך שלו.',
      },
    ],
    keyPoints: [
      {
        en: 'Use a min-heap of size k, not a max-heap of everything, keeping memory at O(k).',
        he: 'להשתמש ב-min-heap בגודל k ולא ב-max-heap של הכול, וכך הזיכרון נשאר O(k).',
      },
      {
        en: 'Bucket sort is linear because the maximum frequency is bounded by n; say that bound explicitly.',
        he: 'bucket sort הוא לינארי כי השכיחות המקסימלית חסומה ב-n; להגיד את החסם הזה במפורש.',
      },
      {
        en: 'Ask about ties: here the answer is unique, but production code needs a tie-break rule.',
        he: 'לשאול על תיקו: כאן התשובה יחידה, אבל בפרודקשן צריך כלל לשבירת תיקו.',
      },
    ],
    extras: [
      {
        en: 'Quickselect on the distinct values is another option: O(u) average, O(u^2) worst case.',
        he: 'quickselect על הערכים השונים היא אפשרות נוספת: O(u) בממוצע, O(u^2) במקרה הגרוע.',
      },
      {
        en: 'For huge or unbounded streams, Count-Min Sketch or the Space-Saving algorithm approximate the top k with bounded memory.',
        he: 'בנתונים ענקיים או ב-stream אינסופי, Count-Min Sketch או אלגוריתם Space-Saving נותנים קירוב ל-top k עם זיכרון חסום.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from collections import Counter
import heapq

def top_k_frequent(nums, k):
    counts = Counter(nums)
    return heapq.nlargest(k, counts, key=counts.get)      # O(n log k)

def top_k_frequent_buckets(nums, k):
    counts = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]
    for value, freq in counts.items():
        buckets[freq].append(value)
    result = []
    for freq in range(len(nums), 0, -1):                 # highest frequency first
        result.extend(buckets[freq])
        if len(result) >= k:
            return result[:k]
    return result`,
      },
      {
        language: 'cpp',
        code: `#include <queue>
#include <unordered_map>
#include <vector>

std::vector<int> topKFrequent(const std::vector<int>& nums, int k) {
    std::unordered_map<int, int> counts;
    for (int n : nums) counts[n]++;
    using Entry = std::pair<int, int>;                                       // (count, value)
    std::priority_queue<Entry, std::vector<Entry>, std::greater<Entry>> heap; // min-heap of size k
    for (const auto& [value, count] : counts) {
        heap.emplace(count, value);
        if ((int)heap.size() > k) heap.pop();
    }
    std::vector<int> result;
    while (!heap.empty()) { result.push_back(heap.top().second); heap.pop(); }
    return result;
}`,
      },
    ],
  },
  {
    id: 'q-log-error-count',
    text: {
      en: 'Given a log file, count the ERROR lines per hour and print the busiest hour.',
      he: 'בהינתן קובץ לוג, ספרו את שורות ה-ERROR לפי שעה והדפיסו את השעה העמוסה ביותר.',
    },
    details: {
      description: {
        en: 'Each line of a log file starts with a timestamp such as 2024-03-01 14:23:51, followed by a level (INFO, WARN, ERROR) and a message. Count how many ERROR lines fall in each hour of the day and print the hour with the most errors.',
        he: 'כל שורה בקובץ לוג מתחילה בחותמת זמן כמו 2024-03-01 14:23:51, אחריה רמה (INFO, WARN, ERROR) והודעה. ספרו כמה שורות ERROR יש בכל שעה ביום והדפיסו את השעה עם הכי הרבה שגיאות.',
      },
      rules: [
        { en: 'The file may be larger than memory: read it line by line.', he: 'הקובץ עשוי להיות גדול מהזיכרון: קראו אותו שורה אחרי שורה.' },
      ],
      examples: [
        {
          input: '2024-03-01 14:03:10 ERROR disk full\n2024-03-01 14:40:02 INFO retry ok\n2024-03-01 14:41:55 ERROR timeout\n2024-03-01 15:02:00 ERROR timeout',
          output: '14 (2 errors)',
          explanation: { en: 'Hour 14 has two ERROR lines, hour 15 has one.', he: 'בשעה 14 יש שתי שורות ERROR, בשעה 15 אחת.' },
        },
      ],
    },
    topicId: 'python',
    roleIds: ['verification', 'qa', 'devops', 'data', 'sysadmin'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Stream the file line by line so memory stays constant. Split each line at most three times into date, time, level and message, and skip lines with fewer than three fields or a level other than ERROR. Increment a Counter keyed by the date plus the hour, like \'2024-03-01 14\', and finally return most_common(1), or None if there were no errors. Time O(n), memory O(h) for distinct hours.',
      he: 'קוראים את הקובץ שורה אחרי שורה, כך שהזיכרון נשאר קבוע. מפצלים כל שורה לכל היותר שלוש פעמים לתאריך, שעה, רמה והודעה, ומדלגים על שורות עם פחות משלושה שדות או עם רמה שאינה ERROR. מגדילים Counter לפי מפתח של תאריך ושעה, למשל \'2024-03-01 14\', ובסוף מחזירים most_common(1), או None אם לא היו שגיאות. זמן O(n), וזיכרון O(h) למספר השעות השונות.',
    },
    approach: [
      {
        en: 'Clarify the line format, the meaning of \'hour\', how to treat malformed lines and what to print when there are no errors.',
        he: 'מבהירים את פורמט השורה, מה פירוש שעה, איך מתייחסים לשורות פגומות ומה מדפיסים כשאין שגיאות.',
      },
      {
        en: 'Naive: load all lines into memory, filter and group, which fails when the file is larger than RAM.',
        he: 'נאיבי: טוענים את כל השורות לזיכרון, מסננים ומקבצים, וזה נכשל כשהקובץ גדול מה-RAM.',
      },
      {
        en: 'Insight: the result needs only one counter per hour, so a single streaming pass with a dictionary is enough.',
        he: 'התובנה: צריך רק מונה אחד לכל שעה, ולכן מספיק מעבר streaming אחד עם מילון.',
      },
      {
        en: 'Algorithm: split with maxsplit=3, skip short or non-ERROR lines, increment Counter[date + \' \' + time[:2]], return most_common(1).',
        he: 'האלגוריתם: split עם maxsplit=3, מדלגים על שורות קצרות או שאינן ERROR, מגדילים את Counter[date + \' \' + time[:2]], ומחזירים most_common(1).',
      },
      {
        en: 'Test the sample (hour 14 with 2 errors), no ERROR lines, blank or malformed lines, and an INFO line mentioning ERROR.',
        he: 'בודקים את הדוגמה (שעה 14 עם 2 שגיאות), קובץ בלי ERROR, שורות ריקות או פגומות, ושורת INFO שמזכירה ERROR.',
      },
    ],
    keyPoints: [
      {
        en: 'Never call read() or readlines() on a potentially huge log; iterate the file object.',
        he: 'אף פעם לא לקרוא ל-read() או ל-readlines() על לוג שעלול להיות ענק; עוברים על אובייקט הקובץ.',
      },
      {
        en: 'Match the level field exactly, so an INFO message containing \'ERROR\' is not counted.',
        he: 'להשוות את שדה הרמה במדויק, כדי שהודעת INFO שמכילה \'ERROR\' לא תיספר.',
      },
      {
        en: 'Skip malformed lines and say so; real logs contain stack traces and multi-line messages.',
        he: 'לדלג על שורות פגומות ולהגיד את זה; בלוגים אמיתיים יש stack traces והודעות של כמה שורות.',
      },
      {
        en: 'Clarify whether \'hour\' means a calendar hour or hour of day across all dates.',
        he: 'לברר אם שעה פירושה שעה קלנדרית או שעה ביום על פני כל התאריכים.',
      },
    ],
    extras: [
      {
        en: 'Time zones and log rotation matter: the hour depends on the logger\'s zone, and a day may span several rotated files.',
        he: 'אזורי זמן ו-log rotation חשובים: השעה תלויה באזור הזמן של ה-logger, ויום אחד יכול להתפרס על כמה קבצים.',
      },
      {
        en: 'Shell version: grep, cut, sort, uniq -c, sort -rn, head -1. The first sort is needed because uniq -c only merges adjacent lines.',
        he: 'גרסת ה-shell: grep, cut, sort, uniq -c, sort -rn, head -1. צריך את ה-sort הראשון כי uniq -c מאחד רק שורות סמוכות.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from collections import Counter

def busiest_error_hour(path):
    # line format: 2026-09-18 14:03:22 ERROR Link flap on port 3
    per_hour = Counter()
    with open(path) as f:
        for line in f:                            # streams: fine for huge files
            parts = line.split(maxsplit=3)
            if len(parts) < 3 or parts[2] != "ERROR":
                continue                          # other levels and malformed lines
            hour = parts[0] + " " + parts[1][:2]  # "2026-09-18 14"
            per_hour[hour] += 1
    if not per_hour:
        return None
    return per_hour.most_common(1)[0]             # (hour, count)`,
      },
      {
        language: 'bash',
        code: `grep ' ERROR ' app.log | cut -c1-13 | sort | uniq -c | sort -rn | head -1
# cut -c1-13 keeps "YYYY-MM-DD HH"; the first line is the busiest hour and its count`,
      },
    ],
  },
  {
    id: 'q-python-gil',
    text: { en: 'What is the Python GIL, and when do threads still help?', he: 'מה זה ה-GIL ב-Python, ומתי threads בכל זאת עוזרים?' },
    topicId: 'python',
    roleIds: ['verification', 'qa', 'data', 'software', 'backend'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'The GIL is a mutex in CPython that lets only one thread execute Python bytecode at a time. It exists mainly to keep reference counting and the interpreter\'s internal state safe without fine-grained locking.\nThreads still help for I/O-bound work, because blocking calls like socket reads, file reads and time.sleep release the GIL while they wait, so the waiting overlaps. For CPU-bound pure Python code, threads give no speedup: use multiprocessing, or native code like NumPy that releases the GIL.',
      he: 'ה-GIL הוא mutex בתוך CPython שמאפשר רק ל-thread אחד בכל רגע להריץ bytecode של Python. הוא קיים בעיקר כדי להגן על ה-reference counting ועל המצב הפנימי של האינטרפרטר, בלי נעילות קטנות בכל מקום.\nthreads עדיין עוזרים בעבודת I/O, כי קריאות חוסמות כמו קריאה מ-socket, קריאת קובץ ו-time.sleep משחררות את ה-GIL בזמן ההמתנה, וכך ההמתנות חופפות. בעבודת CPU ב-Python טהור threads לא מאיצים כלום: עוברים ל-multiprocessing, או לקוד native כמו NumPy שמשחרר את ה-GIL.',
    },
    example: {
      en: 'A test harness that talks to 20 devices over SSH finishes, with threads, in roughly the time of the slowest device. Parsing a huge log in pure Python with 8 threads is no faster than with one.',
      he: 'סביבת בדיקות שמדברת עם 20 מכשירים ב-SSH מסיימת עם threads בערך בזמן של המכשיר האיטי ביותר. לעומת זאת, פענוח לוג ענק ב-Python טהור עם 8 threads לא יהיה מהיר יותר מאשר עם thread אחד.',
    },
    keyPoints: [
      {
        en: 'The GIL belongs to CPython, not to the Python language itself.',
        he: 'ה-GIL שייך ל-CPython ולא לשפה עצמה.',
      },
      {
        en: 'Classify the workload first: I/O-bound goes to threads or asyncio, CPU-bound to processes or native code.',
        he: 'קודם מסווגים את העבודה: I/O הולך ל-threads או ל-asyncio, CPU הולך לתהליכים או לקוד native.',
      },
      {
        en: 'The GIL does not make code thread-safe: x += 1 can still race, so you still need a Lock.',
        he: 'ה-GIL לא הופך את הקוד ל-thread-safe: הפעולה x += 1 עדיין יכולה ליצור race, ולכן עדיין צריך Lock.',
      },
      {
        en: 'Name the cost of multiprocessing: process startup, separate memory, and pickling every argument and result.',
        he: 'כדאי לציין את המחיר של multiprocessing: הקמת תהליך, זיכרון נפרד, ו-pickling של כל ארגומנט ותוצאה.',
      },
    ],
    extras: [
      {
        en: 'A running thread is asked to release the GIL every switch interval, 5 ms by default (see sys.getswitchinterval).',
        he: 'ה-thread שרץ מתבקש לשחרר את ה-GIL כל switch interval, ברירת מחדל 5 ms (אפשר לראות ב-sys.getswitchinterval).',
      },
      {
        en: 'CPU-bound threads can even be slower than a single thread, because of contention on the lock.',
        he: 'בעבודת CPU, threads יכולים אפילו להאט לעומת thread יחיד, בגלל התחרות על הנעילה.',
      },
      {
        en: 'For thousands of concurrent I/O tasks, asyncio is lighter than threads.',
        he: 'לאלפי משימות I/O במקביל, asyncio קל יותר מ-threads.',
      },
      {
        en: 'Python 3.13 added an optional, experimental free-threaded build without the GIL (PEP 703).',
        he: 'ב-Python 3.13 נוסף build אופציונלי וניסיוני מסוג free-threaded בלי GIL (PEP 703).',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `import threading, time

def io_task():
    time.sleep(1)                              # releases the GIL while waiting -> threads overlap

def cpu_task():
    sum(i * i for i in range(10_000_000))      # holds the GIL -> threads take turns

start = time.perf_counter()
threads = [threading.Thread(target=io_task) for _ in range(4)]
for t in threads: t.start()
for t in threads: t.join()
print(f"4 I/O tasks in threads: {time.perf_counter() - start:.1f}s")   # ~1s, not 4s`,
      },
    ],
  },
  {
    id: 'q-python-generators',
    text: { en: 'What is a generator in Python, and why use one instead of a list?', he: 'מה זה generator ב-Python, ולמה להשתמש בו במקום ברשימה?' },
    topicId: 'python',
    roleIds: ['verification', 'qa', 'data', 'software'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'A generator is a function that uses yield to produce values lazily, one at a time, instead of building the whole result up front. Calling it runs nothing and returns an iterator; each next() resumes the body until the next yield and freezes its local state.\nUse one instead of a list when the data is large, streamed or infinite: it holds only its current state, the first item is ready immediately, and items you never consume are never computed.',
      he: 'generator הוא פונקציה שמשתמשת ב-yield כדי לייצר ערכים בצורה עצלה (lazy), אחד בכל פעם, במקום לבנות את כל התוצאה מראש. קריאה לפונקציה לא מריצה כלום ומחזירה iterator; כל next() ממשיך את הגוף עד ה-yield הבא ומקפיא את המצב המקומי.\nמעדיפים אותו על רשימה כשהמידע גדול, מגיע כ-stream או אינסופי: הוא מחזיק רק את המצב הנוכחי, הערך הראשון זמין מיד, וערכים שאף אחד לא צורך בכלל לא מחושבים.',
    },
    example: {
      en: 'Scanning a 10 GB regression log for ERROR lines with a generator uses a few kilobytes of memory, while f.readlines() tries to load the whole file into a list.',
      he: 'סריקה של לוג רגרסיה בגודל 10 GB לחיפוש שורות ERROR עם generator צורכת כמה קילו-בייטים, בעוד ש-f.readlines() מנסה לטעון את כל הקובץ לרשימה בזיכרון.',
    },
    keyPoints: [
      {
        en: 'A generator is single-use: a second loop over the same object yields nothing, a common bug in tests.',
        he: 'generator הוא חד-פעמי: לולאה שנייה על אותו אובייקט לא מחזירה כלום, באג נפוץ בבדיקות.',
      },
      {
        en: 'Contrast list comprehension [..] with generator expression (..): same syntax, eager versus lazy.',
        he: 'כדאי להשוות בין list comprehension עם סוגריים מרובעים ל-generator expression עם סוגריים עגולים: אותו תחביר, אחד מחושב מיד והשני בעצלות.',
      },
      {
        en: 'Use a list when you need len(), indexing, random access or several passes over the data.',
        he: 'רשימה עדיפה כשצריך len(), גישה לפי אינדקס, גישה אקראית או כמה מעברים על הנתונים.',
      },
      {
        en: 'Lazy evaluation delays errors and side effects until iteration, which can surprise when debugging.',
        he: 'ההערכה העצלה דוחה שגיאות ו-side effects לזמן המעבר, וזה יכול להפתיע בזמן דיבוג.',
      },
    ],
    extras: [
      {
        en: 'When the body returns, StopIteration is raised and a for loop simply ends.',
        he: 'כשהגוף מסתיים נזרק StopIteration, ולולאת for פשוט נגמרת.',
      },
      {
        en: 'Generators chain into pipelines (read lines, filter, parse, aggregate), each stage pulling from the previous one, like Unix pipes.',
        he: 'אפשר לשרשר generators ל-pipeline (קריאת שורות, סינון, פענוח, סיכום), וכל שלב מושך מהשלב שלפניו, כמו pipes ביוניקס.',
      },
      {
        en: 'itertools (islice, chain, groupby) helps compose lazy pipelines.',
        he: 'itertools (islice, chain, groupby) עוזר לבנות pipelines עצלים.',
      },
      {
        en: 'yield from delegates to a sub-generator, and generators with send() are the historical basis of coroutines and asyncio.',
        he: 'yield from מעביר את העבודה ל-generator פנימי, ו-generators עם send() הם הבסיס ההיסטורי של coroutines ושל asyncio.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `def error_lines(path):
    with open(path) as f:
        for line in f:                  # one line in memory at a time
            if " ERROR " in line:
                yield line.rstrip()

first_ten = []
for line in error_lines("app.log"):
    first_ten.append(line)
    if len(first_ten) == 10:
        break                           # the rest of the file is never read

squares = (n * n for n in range(10**9))   # generator expression: instant, no 1e9-item list`,
      },
    ],
  },
  {
    id: 'q-mutable-default-args',
    text: { en: 'What is wrong with def add(item, items=[]) in Python?', he: 'מה הבעיה ב-def add(item, items=[]) ב-Python?' },
    topicId: 'python',
    roleIds: ['verification', 'qa', 'data', 'software'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Default argument values are evaluated once, when the def statement runs, not on every call. So items=[] is a single list shared by every call that does not pass items: add(1) returns [1], and then add(2) returns [1, 2].\nThe fix is a None sentinel: def add(item, items=None), and inside the body, if items is None: items = []. Each call then gets a fresh list.',
      he: 'ב-Python ערכי ברירת המחדל מחושבים פעם אחת, כשפקודת ה-def רצה, ולא בכל קריאה. לכן items=[] היא רשימה אחת שמשותפת לכל הקריאות שלא מעבירות items: add(1) מחזיר [1], ואחר כך add(2) מחזיר [1, 2].\nהתיקון הוא sentinel של None: def add(item, items=None), ובתוך הפונקציה if items is None: items = []. כך כל קריאה מקבלת רשימה חדשה.',
    },
    example: {
      en: 'A test helper with results=[] keeps results from earlier test cases, so tests pass or fail depending on the order they run in.',
      he: 'פונקציית עזר לבדיקות עם results=[] שומרת תוצאות מבדיקות קודמות, ולכן בדיקות עוברות או נכשלות לפי הסדר שבו הן רצות.',
    },
    keyPoints: [
      {
        en: 'The key sentence: defaults are evaluated once at definition time, not per call.',
        he: 'המשפט המרכזי: ברירות מחדל מחושבות פעם אחת בזמן ההגדרה, לא בכל קריאה.',
      },
      {
        en: 'Use if items is None, not if not items, so an empty list passed by the caller is respected.',
        he: 'בודקים if items is None ולא if not items, כדי לכבד רשימה ריקה שהמשתמש העביר.',
      },
      {
        en: 'You can show the shared object: it lives in func.__defaults__ and its id() stays the same across calls.',
        he: 'אפשר להראות את האובייקט המשותף: הוא נמצא ב-func.__defaults__ וה-id() שלו זהה בין קריאות.',
      },
      {
        en: 'Immutable defaults (numbers, strings, tuples, None) are safe because they cannot be changed in place.',
        he: 'ברירות מחדל שאינן ניתנות לשינוי (מספרים, מחרוזות, tuple, None) בטוחות, כי אי אפשר לשנות אותן במקום.',
      },
    ],
    extras: [
      {
        en: 'The same trap applies to dicts, sets and custom objects, and to calls: def log(msg, ts=datetime.now()) freezes the timestamp at import time.',
        he: 'אותה מלכודת קיימת ב-dict, ב-set ובאובייקטים שלנו, וגם בקריאה לפונקציה: def log(msg, ts=datetime.now()) מקפיא את חותמת הזמן לרגע טעינת המודול.',
      },
      {
        en: 'Dataclasses reject a list, dict or set default on a field; use field(default_factory=list) instead.',
        he: 'dataclasses לא מרשים ברירת מחדל מסוג list, dict או set בשדה; משתמשים במקום זה ב-field(default_factory=list).',
      },
      {
        en: 'Linters flag the pattern: pylint dangerous-default-value and flake8-bugbear B006.',
        he: 'כלי lint מסמנים את הדפוס: dangerous-default-value ב-pylint ו-B006 ב-flake8-bugbear.',
      },
      {
        en: 'The rare intentional use is a simple cache between calls, but functools.lru_cache is clearer.',
        he: 'השימוש המכוון הנדיר הוא cache פשוט בין קריאות, אבל functools.lru_cache ברור יותר.',
      },
    ],
    codeExamples: [
      {
        language: 'python',
        code: `def add_bad(item, items=[]):
    items.append(item)
    return items

print(add_bad(1))    # [1]
print(add_bad(2))    # [1, 2]  <- the same list, shared between calls

def add_good(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_good(1))   # [1]
print(add_good(2))   # [2]`,
      },
    ],
  },
  {
    id: 'q-linux-port-process',
    text: {
      en: 'A service on a Linux box is not answering on its port. How do you find out what is going on?',
      he: 'שירות במכונת לינוקס לא עונה על הפורט שלו. איך מגלים מה קורה?',
    },
    topicId: 'linux',
    roleIds: ['verification', 'devops', 'sysadmin', 'backend', 'helpdesk'],
    type: 'troubleshooting',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'I work from the process outward. First, is it running: systemctl status, and journalctl -u for errors such as a bad config or a port already in use. Then, is it listening, and on which address: ss -ltnp. Then a local test with curl.\nIf it works locally but not remotely, the problem is in between: the bind address, the firewall or the network, and tcpdump shows whether packets arrive. If it listens but never answers, I check CPU, memory, disk and strace.',
      he: 'עובדים מהתהליך החוצה. קודם, האם הוא רץ: systemctl status, ו-journalctl -u כדי לחפש שגיאות כמו קונפיגורציה שבורה או פורט שכבר תפוס. אחר כך, האם הוא מקשיב ועל איזו כתובת: ss -ltnp. ואז בדיקה מקומית עם curl.\nאם זה עובד מקומית ולא מרחוק, הבעיה באמצע: כתובת ה-bind, ה-firewall או הרשת, ו-tcpdump מראה אם הפקטות בכלל מגיעות. אם הוא מקשיב אבל לא עונה, בודקים CPU, זיכרון, דיסק ו-strace.',
    },
    example: {
      en: 'After a config change the service binds to 127.0.0.1:8080, so curl on the host works but every remote client gets connection refused. ss -ltnp shows it at once.',
      he: 'אחרי שינוי קונפיגורציה השירות מאזין על 127.0.0.1:8080, ולכן curl על המכונה עצמה עובד, אבל כל לקוח מרוחק מקבל connection refused. ss -ltnp מראה את זה מיד.',
    },
    keyPoints: [
      {
        en: 'Refused versus timeout: an RST means nothing listens, silence usually means a firewall drops the packets.',
        he: 'ההבדל בין refused ל-timeout: RST אומר שאף אחד לא מקשיב, שקט בדרך כלל אומר ש-firewall זורק את הפקטות.',
      },
      {
        en: 'Always look at the bind address in ss output, not just the port number.',
        he: 'תמיד להסתכל על כתובת ה-bind בפלט של ss, לא רק על מספר הפורט.',
      },
      {
        en: 'Ports below 1024 need root or CAP_NET_BIND_SERVICE, a common reason a service fails right after start.',
        he: 'פורטים מתחת ל-1024 דורשים root או CAP_NET_BIND_SERVICE, סיבה נפוצה לכך ששירות נופל מיד אחרי עלייה.',
      },
      {
        en: 'tcpdump on the server proves whether packets arrive at all, which splits the problem in half.',
        he: 'tcpdump על השרת מוכיח אם הפקטות בכלל מגיעות, וזה חוצה את הבעיה לשניים.',
      },
    ],
    extras: [
      {
        en: 'Typical log findings: EADDRINUSE when the port is taken, or permission denied when binding a low port as non-root.',
        he: 'ממצאים נפוצים בלוג: EADDRINUSE כשהפורט תפוס, או permission denied כשמנסים להאזין לפורט נמוך בלי root.',
      },
      {
        en: 'Firewall checks: iptables -L -n, nft list ruleset or firewall-cmd; capture with tcpdump -i any port 8080.',
        he: 'בדיקות firewall: iptables -L -n, nft list ruleset או firewall-cmd; הקלטה עם tcpdump -i any port 8080.',
      },
      {
        en: 'A live process can stop accepting connections when it runs out of file descriptors (ulimit -n) or the disk is full (df -h).',
        he: 'תהליך חי יכול להפסיק לקבל חיבורים כשנגמרים לו ה-file descriptors (ulimit -n) או כשהדיסק מלא (df -h).',
      },
      {
        en: 'Finish by verifying the fix from the client side and recording the root cause.',
        he: 'בסוף בודקים שהתיקון עובד מצד הלקוח ומתעדים את שורש הבעיה.',
      },
    ],
    codeExamples: [
      {
        language: 'bash',
        code: `ss -ltnp | grep ':8080'          # who listens on 8080 (pid / program)
systemctl status my-service      # running? crashed? restarting in a loop?
journalctl -u my-service -n 50   # the last 50 log lines
curl -v http://localhost:8080/   # answers locally? then suspect firewall / network
sudo strace -p <pid> -f          # what a hung process is waiting on`,
      },
    ],
  },
  {
    id: 'q-tcp-handshake',
    text: { en: 'Explain the TCP three-way handshake and why it is needed.', he: 'הסבירו את לחיצת היד המשולשת של TCP ולמה היא נחוצה.' },
    topicId: 'networking',
    roleIds: ['verification', 'devops', 'sysadmin', 'security', 'embedded', 'helpdesk', 'backend'],
    type: 'conceptual',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 3,
    answer: {
      en: 'The three-way handshake opens a TCP connection: both sides confirm they can reach each other and agree on initial sequence numbers before data flows. The client sends SYN with a random sequence number x, the server answers SYN-ACK with its own number y and ack x + 1, and the client sends ACK y + 1.\nThree messages are needed because each direction has its own sequence number and each must be acknowledged. This also stops an old duplicate SYN from opening a stale connection.',
      he: 'לחיצת היד המשולשת פותחת חיבור TCP: שני הצדדים מוודאים שהם מגיעים זה לזה ומסכימים על מספרי סידור (sequence numbers) התחלתיים לפני שעובר מידע. הלקוח שולח SYN עם מספר סידורי אקראי x, השרת עונה SYN-ACK עם מספר משלו y ועם ack x + 1, והלקוח שולח ACK y + 1.\nצריך שלוש הודעות כי לכל כיוון יש מספר סידורי משלו, וכל אחד מהם צריך לקבל אישור. זה גם מונע מ-SYN ישן וכפול לפתוח חיבור מיושן.',
    },
    example: {
      en: 'Every new HTTPS connection pays one round trip for the handshake before TLS even starts. That cost is why browsers reuse connections with keep-alive, and why QUIC runs over UDP.',
      he: 'כל חיבור HTTPS חדש משלם round trip אחד על הלחיצה עוד לפני שה-TLS מתחיל. בגלל המחיר הזה דפדפנים משתמשים שוב בחיבורים עם keep-alive, ובגלל זה QUIC רץ מעל UDP.',
    },
    keyPoints: [
      {
        en: 'The SYN itself consumes one sequence number, which is why the acknowledgement is x + 1.',
        he: 'ה-SYN עצמו צורך מספר סידורי אחד, ולכן האישור הוא x + 1.',
      },
      {
        en: 'ISNs are randomised to resist sequence prediction attacks and to avoid confusion with old segments.',
        he: 'ה-ISN אקראי כדי להקשות על התקפות ניחוש מספרי סידור וכדי לא להתבלבל עם segments ישנים.',
      },
      {
        en: 'Name the states: LISTEN, SYN-SENT, SYN-RECEIVED, ESTABLISHED, TIME_WAIT; ss or netstat shows them live.',
        he: 'לציין את מצבי החיבור: LISTEN, SYN-SENT, SYN-RECEIVED, ESTABLISHED, TIME_WAIT; אפשר לראות אותם בזמן אמת עם ss או netstat.',
      },
      {
        en: 'Security follow-up: a SYN flood fills the half-open queue; SYN cookies encode that state in the server\'s ISN.',
        he: 'שאלת המשך באבטחה: SYN flood ממלא את תור החיבורים החצי-פתוחים; SYN cookies מקודדים את המצב בתוך ה-ISN של השרת.',
      },
    ],
    extras: [
      {
        en: 'The third segment, the ACK, may already carry data.',
        he: 'ה-segment השלישי, ה-ACK, כבר יכול לשאת מידע.',
      },
      {
        en: 'Teardown is separate: a FIN and an ACK in each direction, and the side that closes first waits in TIME_WAIT for twice the MSL.',
        he: 'הסגירה נפרדת: FIN ו-ACK בכל כיוון, והצד שסוגר ראשון ממתין במצב TIME_WAIT למשך פעמיים ה-MSL.',
      },
      {
        en: 'After the handshake, sequence numbers and ACKs drive ordering, duplicate detection and retransmission; the advertised window drives flow control.',
        he: 'אחרי הלחיצה, מספרי הסידור וה-ACKs אחראים לסדר, לזיהוי כפילויות ולשידור חוזר; ה-window המפורסם אחראי ל-flow control.',
      },
      {
        en: 'Connection pooling and TCP Fast Open are other ways to avoid paying for the handshake again.',
        he: 'connection pooling ו-TCP Fast Open הם דרכים נוספות לא לשלם שוב על הלחיצה.',
      },
    ],
  },
  {
    id: 'q-verify-driver',
    text: { en: 'How would you verify a new network driver end to end?', he: 'איך הייתם מוודאים (verification) דרייבר רשת חדש מקצה לקצה?' },
    topicId: 'networking',
    roleIds: ['verification', 'qa', 'embedded'],
    type: 'system-design',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'I would prove against the spec that the driver moves packets correctly, handles every error path, meets its performance targets and stays stable over time, with automated, reproducible tests.\nI start by mapping each feature in the spec to test cases. Then functional tests with traffic at many packet sizes, negative tests such as pulling the link under load, performance runs with iperf3 and pktgen, and long soak runs with kmemleak. A pytest framework runs everything in CI and saves logs, dmesg and pcaps.',
      he: 'verification של דרייבר רשת פירושו להוכיח מול המפרט שהוא מעביר פקטות נכון, מטפל בכל נתיבי השגיאה, עומד ביעדי הביצועים ונשאר יציב לאורך זמן, עם בדיקות אוטומטיות שאפשר לשחזר.\nמתחילים במיפוי של כל פיצ׳ר מהמפרט למקרי בדיקה. אחר כך בדיקות פונקציונליות עם תעבורה במגוון גדלי פקטות, בדיקות שליליות כמו ניתוק ה-link תחת עומס, מדידות ביצועים עם iperf3 ו-pktgen, וריצות soak ארוכות עם kmemleak. framework ב-pytest מריץ הכול ב-CI ושומר לוגים, dmesg ו-pcap.',
    },
    example: {
      en: 'Toggling the link a thousand times under load often finds a leak or a race in the reset path that functional tests never hit.',
      he: 'ניתוק וחיבור של ה-link אלף פעמים תחת עומס מוצא הרבה פעמים דליפה או race בנתיב ה-reset, שבדיקות פונקציונליות אף פעם לא מגיעות אליו.',
    },
    keyPoints: [
      {
        en: 'Start from requirements and a traceability matrix, so coverage is measurable rather than a feeling.',
        he: 'להתחיל מדרישות ומטבלת traceability, כדי שהכיסוי יהיה מדיד ולא תחושה.',
      },
      {
        en: 'Error paths (link loss, resource exhaustion, reset, suspend) are where driver bugs live.',
        he: 'נתיבי השגיאה (אובדן link, מחסור במשאבים, reset, suspend) הם המקום שבו באגים בדרייבר חיים.',
      },
      {
        en: 'Performance means more than throughput: small-packet rate, latency and CPU cost per packet matter too.',
        he: 'ביצועים זה לא רק throughput: קצב פקטות קטנות, latency ועלות CPU לפקטה חשובים לא פחות.',
      },
      {
        en: 'Reproducibility: record kernel, firmware, driver version and test seed with every result.',
        he: 'שחזוריות: לתעד עם כל תוצאה את גרסת ה-kernel, הקושחה, הדרייבר ואת ה-seed של הבדיקה.',
      },
    ],
    extras: [
      {
        en: 'Features to cover: autonegotiation, MTU and jumbo frames, checksum and segmentation offloads, multi-queue and RSS, VLANs, interrupts and NAPI, statistics.',
        he: 'פיצ׳רים לכסות: autonegotiation, MTU ו-jumbo frames, offloads של checksum ושל segmentation, multi-queue ו-RSS, VLAN, פסיקות ו-NAPI, סטטיסטיקות.',
      },
      {
        en: 'Also test module load and unload loops, full ring buffers, malformed frames, suspend and resume, and allocation failures through fault injection.',
        he: 'כדאי לבדוק גם טעינה והסרה חוזרת של המודול, ring buffers מלאים, frames פגומים, suspend ו-resume, וכשלי הקצאה בעזרת fault injection.',
      },
      {
        en: 'Real hardware is scarce: run fast checks per commit on a virtual or loopback setup, and the full hardware regression nightly.',
        he: 'חומרה אמיתית היא משאב נדיר: מריצים בדיקות מהירות על סביבה וירטואלית או loopback בכל commit, ואת הרגרסיה המלאה על חומרה בכל לילה.',
      },
      {
        en: 'Be ready to explain how you triage a failure between driver, firmware, hardware and test setup.',
        he: 'להיות מוכנים להסביר איך מבצעים triage לכשל בין דרייבר, קושחה, חומרה וסביבת הבדיקה.',
      },
    ],
  },
  // ---------- Rafael: junior software developer round (reported by the user) ----------
  {
    id: 'q-two-sum',
    text: {
      en: 'Two Sum: return the indices of the two numbers that add up to the target.',
      he: 'Two Sum: החזירו את האינדקסים של שני המספרים שסכומם שווה ליעד.',
    },
    details: {
      description: {
        en: 'You are given an array of integers nums and an integer target. Return the indices of the two numbers in nums whose sum equals target.',
        he: 'נתונים מערך של מספרים שלמים nums ומספר שלם target. החזירו את האינדקסים של שני המספרים ב-nums שסכומם שווה ל-target.',
      },
      rules: [
        { en: 'Every input has exactly one solution.', he: 'לכל קלט יש בדיוק פתרון אחד.' },
        { en: 'The same element may not be used twice.', he: 'אסור להשתמש באותו איבר פעמיים.' },
        { en: 'The two indices may be returned in any order.', he: 'אפשר להחזיר את שני האינדקסים בכל סדר.' },
      ],
      examples: [
        {
          input: 'nums = [2, 7, 11, 15], target = 9',
          output: '[0, 1]',
          explanation: { en: 'nums[0] + nums[1] = 2 + 7 = 9.', he: 'nums[0] + nums[1] = 2 + 7 = 9.' },
        },
        {
          input: 'nums = [3, 2, 4], target = 6',
          output: '[1, 2]',
          explanation: { en: '3 + 3 would reuse the same element, so the answer is 2 + 4.', he: '3 + 3 היה משתמש באותו איבר פעמיים, ולכן התשובה היא 2 + 4.' },
        },
      ],
      constraints: [
        { en: '2 ≤ nums.length ≤ 10^4', he: '2 ≤ nums.length ≤ 10^4' },
        { en: '-10^9 ≤ nums[i], target ≤ 10^9', he: '-10^9 ≤ nums[i], target ≤ 10^9' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'qa', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'One pass with a hash map from value to index. For each element n at index i, look up the complement target - n. If it is in the map, return its stored index and i; otherwise store n with index i and continue. Looking up before inserting guarantees an element is never paired with itself.\nTime O(n) on average, space O(n) for the map.',
      he: 'מעבר אחד עם hash map מערך לאינדקס. לכל איבר n באינדקס i מחפשים את המשלים target - n. אם הוא במפה, מחזירים את האינדקס השמור ואת i; אחרת שומרים את n עם האינדקס i וממשיכים. החיפוש לפני ההכנסה מבטיח שאיבר אף פעם לא יוצמד לעצמו.\nזמן O(n) בממוצע, מקום O(n) בשביל המפה.',
    },
    approach: [
      {
        en: 'Clarify: exactly one answer, can values repeat or be negative, indices or values, and is the array sorted?',
        he: 'הבהרה: האם יש תשובה אחת בדיוק, האם ערכים חוזרים או שליליים, אינדקסים או ערכים, והאם המערך ממוין?',
      },
      {
        en: 'Brute force: check every pair i < j, O(n²) time and O(1) space.',
        he: 'פתרון נאיבי: לבדוק כל זוג i < j, זמן O(n²) ומקום O(1).',
      },
      {
        en: 'Insight: each number needs exactly target - n, so ask have I seen that value before, which a hash map answers.',
        he: 'התובנה: כל מספר צריך בדיוק את target - n, ולכן שואלים האם כבר ראיתי את הערך הזה, ו-hash map עונה על זה.',
      },
      {
        en: 'Algorithm: if target - nums[i] is in the map return both indices, else store nums[i]; O(n) time, O(n) space.',
        he: 'האלגוריתם: אם target - nums[i] במפה מחזירים את שני האינדקסים, אחרת שומרים את nums[i]; זמן O(n), מקום O(n).',
      },
      {
        en: 'Test: [2, 7, 11, 15] with 9 gives [0, 1]; [3, 2, 4] with 6 gives [1, 2], no self-pairing.',
        he: 'בדיקה: [2, 7, 11, 15] עם 9 נותן [0, 1]; [3, 2, 4] עם 6 נותן [1, 2], בלי זוג עם עצמו.',
      },
    ],
    keyPoints: [
      {
        en: 'Insert after the lookup: that ordering is what prevents using the same element twice.',
        he: 'להכניס אחרי החיפוש: הסדר הזה הוא מה שמונע שימוש באותו איבר פעמיים.',
      },
      {
        en: 'Store value to index, not index to value, because the lookup is by value.',
        he: 'לשמור ערך לאינדקס ולא אינדקס לערך, כי החיפוש הוא לפי ערך.',
      },
      {
        en: 'Hash lookups are O(1) on average but can degrade with many collisions; say average case explicitly.',
        he: 'חיפוש ב-hash הוא O(1) בממוצע אבל יכול להידרדר עם הרבה התנגשויות; כדאי לומר במפורש שזה המקרה הממוצע.',
      },
      {
        en: 'Typical follow-ups: return all pairs, the sorted version (Two Sum II), and 3Sum in O(n²).',
        he: 'שאלות המשך נפוצות: להחזיר את כל הזוגות, הגרסה הממוינת (Two Sum II), ו-3Sum ב-O(n²).',
      },
    ],
    extras: [
      {
        en: 'If the array is already sorted, two pointers from both ends solve it in O(n) time and O(1) space.',
        he: 'אם המערך כבר ממוין, שני מצביעים משני הקצוות פותרים את זה בזמן O(n) ובמקום O(1).',
      },
      {
        en: 'Sorting an unsorted array first costs O(n log n) and loses the original indices unless you keep them alongside the values.',
        he: 'מיון של מערך לא ממוין עולה O(n log n) ומאבד את האינדקסים המקוריים, אלא אם שומרים אותם לצד הערכים.',
      },
      {
        en: '[3, 3] with target 6 still works, because the first 3 is already stored when the second one arrives.',
        he: '[3, 3] עם target 6 עדיין עובד, כי ה-3 הראשון כבר שמור כשהשני מגיע.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def two_sum(nums, target):
    seen = {}                          # value -> index
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target - n], i]
        seen[n] = i                    # store after the check: no reuse of the same element
    return []`,
      },
      {
        language: 'cpp',
        code: `#include <unordered_map>
#include <vector>

std::vector<int> twoSum(const std::vector<int>& nums, int target) {
    std::unordered_map<int, int> seen;                 // value -> index
    for (int i = 0; i < (int)nums.size(); ++i) {
        auto it = seen.find(target - nums[i]);
        if (it != seen.end()) return {it->second, i};
        seen[nums[i]] = i;
    }
    return {};
}`,
      },
      {
        language: 'java',
        code: `int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();      // value -> index
    for (int i = 0; i < nums.length; i++) {
        Integer j = seen.get(target - nums[i]);
        if (j != null) return new int[] { j, i };
        seen.put(nums[i], i);
    }
    return new int[0];
}`,
      },
    ],
  },
  {
    id: 'q-random-permutation',
    text: {
      en: 'Fill an array of size N with the numbers 1..N in random order, without repetitions.',
      he: 'מלאו מערך בגודל N במספרים 1 עד N בסדר אקראי, בלי חזרות.',
    },
    details: {
      description: {
        en: 'Write a function that fills an array of size N with the numbers 1 to N in random order, with every number appearing exactly once. You may use a Rand() function that returns a random integer.',
        he: 'כתבו פונקציה שממלאת מערך בגודל N במספרים 1 עד N בסדר אקראי, כך שכל מספר מופיע בדיוק פעם אחת. מותר להשתמש בפונקציה Rand() שמחזירה מספר שלם אקראי.',
      },
      rules: [
        { en: 'Every number from 1 to N appears exactly once.', he: 'כל מספר מ-1 עד N מופיע בדיוק פעם אחת.' },
        { en: 'Every ordering should be equally likely.', he: 'כל סידור צריך להיות בעל אותה הסתברות.' },
      ],
      examples: [
        {
          input: 'N = 5',
          output: '[3, 1, 5, 2, 4]',
          explanation: { en: 'Any permutation of 1..5 is a valid answer.', he: 'כל תמורה של 1..5 היא תשובה תקינה.' },
        },
      ],
      constraints: [{ en: '1 ≤ N ≤ 10^6', he: '1 ≤ N ≤ 10^6' }],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'verification', 'student', 'qa'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Fill the array with 1..N in order, then run the Fisher-Yates shuffle: for i from N-1 down to 1, pick a random j in [0, i] inclusive and swap arr[i] with arr[j]. Each position gets a uniform choice among the elements not yet placed, so all N! permutations are equally likely.\nTime O(N) with one random call per position, and O(1) extra space, since the shuffle is in place.',
      he: 'ממלאים את המערך ב-1..N לפי הסדר, ואז מפעילים ערבוב Fisher-Yates: עבור i מ-N-1 עד 1, מגרילים j בטווח [0, i] כולל, ומחליפים בין arr[i] ל-arr[j]. כל מקום מקבל בחירה אחידה מבין האיברים שעוד לא הוצבו, ולכן כל N! התמורות מתקבלות באותה הסתברות.\nזמן O(N) עם הגרלה אחת לכל מקום, ומקום נוסף O(1) כי הערבוב נעשה במקום.',
    },
    approach: [
      {
        en: 'Clarify: must every permutation be equally likely, what range does Rand() return, may I work in place, how large is N?',
        he: 'הבהרה: האם כל תמורה חייבת להיות באותה הסתברות, באיזה טווח Rand() מחזיר, האם מותר לעבוד במקום, ומה גודל N?',
      },
      {
        en: 'Brute force: draw values in 1..N and reject used ones; about N ln N draws on average, no worst-case bound.',
        he: 'פתרון נאיבי: להגריל ערכים ב-1..N ולדחות כאלה שכבר בשימוש; בערך N ln N הגרלות בממוצע, בלי חסם למקרה הגרוע.',
      },
      {
        en: 'Insight: draw positions, not values; for each slot from the end, pick one of the remaining elements in the prefix [0, i].',
        he: 'התובנה: מגרילים מקומות ולא ערכים; לכל תא מהסוף בוחרים אחד מהאיברים שנשארו בתחילית [0, i].',
      },
      {
        en: 'Algorithm: arr[k] = k + 1; for i from N-1 down to 1, swap arr[i] with arr[j], j random in [0, i].',
        he: 'האלגוריתם: arr[k] = k + 1; עבור i מ-N-1 עד 1, מחליפים את arr[i] עם arr[j] אקראי, כש-j בטווח [0, i].',
      },
      {
        en: 'Complexity and test: O(N) time, O(1) space; check N = 1, sorted output equals 1..N, and N = 3 permutation frequencies.',
        he: 'סיבוכיות ובדיקה: זמן O(N), מקום O(1); בודקים N = 1, שהפלט הממוין שווה ל-1..N, ושכל 6 התמורות של N = 3 מופיעות בשכיחות דומה.',
      },
    ],
    keyPoints: [
      {
        en: 'Name the algorithm: Fisher-Yates (Knuth) shuffle; std::shuffle, random.shuffle and Collections.shuffle implement it.',
        he: 'לציין את שם האלגוריתם: Fisher-Yates (או Knuth shuffle); std::shuffle, random.shuffle ו-Collections.shuffle מממשים אותו.',
      },
      {
        en: 'j may equal i; that is required, otherwise the distribution is not uniform.',
        he: 'j יכול להיות שווה ל-i; זה הכרחי, אחרת ההתפלגות לא אחידה.',
      },
      {
        en: 'Swapping with j from all of [0, N-1] gives N^N outcomes, not divisible by N!, so it is biased.',
        he: 'החלפה עם j מכל הטווח [0, N-1] נותנת N^N תוצאות, מספר שלא מתחלק ב-N!, ולכן היא מוטה.',
      },
      {
        en: 'Seed once at program start, never inside the loop; use a cryptographic RNG for security-sensitive shuffles.',
        he: 'לאתחל seed פעם אחת בתחילת התוכנית, אף פעם לא בתוך הלולאה; לערבוב רגיש לאבטחה משתמשים ב-RNG קריפטוגרפי.',
      },
    ],
    extras: [
      {
        en: 'rand() % (i + 1) is slightly biased when RAND_MAX + 1 is not a multiple of i + 1; prefer uniform_int_distribution or nextInt.',
        he: 'rand() % (i + 1) מוטה מעט כש-RAND_MAX + 1 לא מתחלק ב-i + 1; עדיף uniform_int_distribution או nextInt.',
      },
      {
        en: 'RAND_MAX can be as small as 32767, so for large N, rand() alone cannot even reach every index.',
        he: 'RAND_MAX יכול להיות קטן כמו 32767, ולכן עבור N גדול rand() לבדו אפילו לא מגיע לכל האינדקסים.',
      },
      {
        en: 'Draw-and-reject-if-used is the coupon collector problem: about N ln N draws on average, and the last numbers are the slowest.',
        he: 'הגרלה ודחייה של מספר שכבר בשימוש היא בעיית אספן הקופונים: בערך N ln N הגרלות בממוצע, והמספרים האחרונים הכי איטיים.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `#include <stdlib.h>

void fill_random(int* arr, int n) {
    for (int i = 0; i < n; i++) arr[i] = i + 1;        /* 1..N in order */
    for (int i = n - 1; i > 0; i--) {                    /* Fisher-Yates shuffle */
        int j = rand() % (i + 1);                        /* random index in [0, i] */
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <numeric>
#include <random>
#include <vector>

std::vector<int> fillRandom(int n) {
    std::vector<int> arr(n);
    std::iota(arr.begin(), arr.end(), 1);               // 1..N
    std::mt19937 gen(std::random_device{}());
    for (int i = n - 1; i > 0; --i) {                    // Fisher-Yates
        std::uniform_int_distribution<int> pick(0, i);
        std::swap(arr[i], arr[pick(gen)]);
    }
    return arr;                                          // or simply std::shuffle(arr.begin(), arr.end(), gen)
}`,
      },
      {
        language: 'java',
        code: `int[] fillRandom(int n) {
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) arr[i] = i + 1;
    Random rand = new Random();
    for (int i = n - 1; i > 0; i--) {                    // Fisher-Yates
        int j = rand.nextInt(i + 1);                     // 0..i inclusive
        int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
}`,
      },
      {
        language: 'python',
        code: `import random

def fill_random(n):
    arr = list(range(1, n + 1))
    for i in range(n - 1, 0, -1):          # Fisher-Yates
        j = random.randint(0, i)
        arr[i], arr[j] = arr[j], arr[i]
    return arr                             # random.shuffle(arr) does exactly this`,
      },
    ],
  },
  {
    id: 'q-even-odd-no-mod',
    text: {
      en: 'Check whether an integer is even or odd without using the % operator.',
      he: 'בדקו אם מספר שלם הוא זוגי או אי-זוגי בלי להשתמש באופרטור %.',
    },
    details: {
      description: {
        en: 'Given an integer n, decide whether it is even or odd. The modulo operator (%) is not allowed.',
        he: 'נתון מספר שלם n. קבעו אם הוא זוגי או אי-זוגי. אסור להשתמש באופרטור המודולו (%).',
      },
      examples: [
        { input: 'n = 10', output: 'even', explanation: { en: 'The lowest bit of 10 (1010) is 0.', he: 'הביט הנמוך של 10 (1010) הוא 0.' } },
        { input: 'n = -7', output: 'odd', explanation: { en: 'Works for negatives too: in two’s complement the lowest bit of an odd number is 1.', he: 'עובד גם לשליליים: במשלים ל-2 הביט הנמוך של מספר אי-זוגי הוא 1.' } },
      ],
    },
    topicId: 'c',
    roleIds: ['software', 'embedded', 'verification', 'student', 'qa'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Test the lowest bit: n & 1 is 1 for odd numbers and 0 for even ones, because every other bit stands for a multiple of 2. It also works for negative numbers in two\'s complement. Time and space are O(1), a single AND instruction.\nIf bit operations are also forbidden, (n / 2) * 2 == n is true exactly for even numbers, since integer division drops the remainder.',
      he: 'בודקים את הביט הנמוך: n & 1 שווה 1 למספר אי-זוגי ו-0 למספר זוגי, כי כל ביט אחר מייצג כפולה של 2. זה עובד גם למספרים שליליים בייצוג משלים ל-2. זמן ומקום O(1), פקודת AND אחת.\nאם גם פעולות על ביטים אסורות, (n / 2) * 2 == n מתקיים בדיוק למספרים זוגיים, כי חילוק שלמים זורק את השארית.',
    },
    approach: [
      {
        en: 'Clarify: signed or unsigned, are negatives allowed, and are division or bit operators also forbidden?',
        he: 'הבהרה: signed או unsigned, האם מותרים שליליים, והאם גם חילוק או אופרטורים על ביטים אסורים?',
      },
      {
        en: 'Brute force: subtract 2 repeatedly until reaching 0 or 1, O(|n|) and painful for large or negative values.',
        he: 'פתרון נאיבי: להחסיר 2 שוב ושוב עד שמגיעים ל-0 או ל-1, זמן O(|n|) ובעייתי לערכים גדולים או שליליים.',
      },
      {
        en: 'Insight: parity is the remainder mod 2, and in binary that remainder is exactly the lowest bit.',
        he: 'התובנה: זוגיות היא השארית בחלוקה ל-2, ובבינארי השארית הזאת היא בדיוק הביט הנמוך.',
      },
      {
        en: 'Algorithm: return (n & 1) == 0, or (n / 2) * 2 == n without bits; O(1) time and space.',
        he: 'האלגוריתם: מחזירים (n & 1) == 0, או (n / 2) * 2 == n בלי ביטים; זמן ומקום O(1).',
      },
      {
        en: 'Test: 0 (even), 1, 10, -7, -8, INT_MAX (odd) and INT_MIN (even).',
        he: 'בדיקה: 0 (זוגי), 1, 10, -7, -8, INT_MAX (אי-זוגי) ו-INT_MIN (זוגי).',
      },
    ],
    keyPoints: [
      {
        en: 'Operator precedence: in C, C++ and Java, == binds tighter than &, so always write (n & 1) == 0.',
        he: 'קדימות אופרטורים: ב-C, ב-C++ וב-Java האופרטור == קודם ל-&, ולכן תמיד כותבים (n & 1) == 0.',
      },
      {
        en: 'n % 2 == 1 is false for negative odd numbers in C and Java, because the remainder is -1.',
        he: 'n % 2 == 1 יוצא false למספרים שליליים אי-זוגיים ב-C וב-Java, כי השארית היא -1.',
      },
      {
        en: 'Explain why bit 0 decides parity: every other bit is a power of two that is at least 2.',
        he: 'להסביר למה ביט 0 קובע זוגיות: כל ביט אחר הוא חזקה של 2 שהיא לפחות 2.',
      },
      {
        en: 'Compilers turn n % 2 == 0 into the same AND instruction, so the trick is about understanding, not speed.',
        he: 'קומפיילרים הופכים את n % 2 == 0 לאותה פקודת AND, כך שהטריק הוא עניין של הבנה ולא של מהירות.',
      },
    ],
    extras: [
      {
        en: '-7 in two\'s complement is ...11111001: the lowest bit is 1, so it is odd.',
        he: '-7 במשלים ל-2 הוא ...11111001: הביט הנמוך הוא 1, ולכן הוא אי-זוגי.',
      },
      {
        en: 'C division truncates toward zero: -7 / 2 is -3, and -3 * 2 is -6, not -7, so the fallback handles negatives.',
        he: 'חילוק ב-C מעגל לכיוון אפס: -7 / 2 הוא -3, ו-(-3) * 2 הוא -6 ולא -7, ולכן הגיבוי עובד גם לשליליים.',
      },
      {
        en: 'Two\'s complement is guaranteed by C23 and C++20 and is universal in practice.',
        he: 'משלים ל-2 מובטח מ-C23 ומ-C++20, ונהוג בפועל בכל מקום.',
      },
      {
        en: 'In Python the precedence is the other way round, so n & 1 == 0 works as written.',
        he: 'ב-Python סדר הקדימויות הפוך, ולכן שם n & 1 == 0 עובד כמו שהוא כתוב.',
      },
    ],
    codeSolutions: [
      {
        language: 'c',
        code: `#include <stdbool.h>

bool is_even(int n) {
    return (n & 1) == 0;            /* lowest bit set -> odd */
}

bool is_even_no_bits(int n) {
    return (n / 2) * 2 == n;        /* integer division drops the remainder */
}`,
      },
      {
        language: 'cpp',
        code: `bool isEven(int n) {
    return (n & 1) == 0;
}`,
      },
      {
        language: 'java',
        code: `boolean isEven(int n) {
    return (n & 1) == 0;
}`,
      },
      {
        language: 'python',
        code: `def is_even(n):
    return n & 1 == 0`,
      },
    ],
  },
  {
    id: 'q-oop-principles',
    text: {
      en: 'What are the four principles of OOP? Explain each one with an example.',
      he: 'מהם ארבעת עקרונות ה-OOP? הסבירו כל אחד מהם עם דוגמה.',
    },
    topicId: 'oop',
    roleIds: ['software', 'backend', 'embedded', 'fullstack', 'student', 'qa'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 3,
    answer: {
      en: 'The four principles are encapsulation, abstraction, inheritance and polymorphism. Encapsulation keeps data private and changes it only through methods that enforce the rules. Abstraction exposes what an object does and hides how it does it.\nInheritance lets a class reuse another class\'s code in an is-a relationship. Polymorphism means one call runs different code depending on the object\'s actual type, which C++ implements with virtual functions and a vtable.',
      he: 'ארבעת העקרונות הם אנקפסולציה, הפשטה, ירושה ופולימורפיזם. אנקפסולציה שומרת את הנתונים פרטיים ומשנה אותם רק דרך מתודות שאוכפות את הכללים. הפשטה חושפת מה האובייקט עושה ומסתירה איך הוא עושה את זה.\nירושה מאפשרת למחלקה להשתמש שוב בקוד של מחלקה אחרת ביחס של is-a. פולימורפיזם אומר שאותה קריאה מריצה קוד שונה לפי הטיפוס האמיתי של האובייקט, וב-C++ זה ממומש עם פונקציות virtual ו-vtable.',
    },
    example: {
      en: 'A BankAccount keeps balance private, and withdraw() refuses to overdraw. A Sensor interface offers read() whether it talks I2C or SPI. Circle and Square inherit from Shape, and calling area() on each Shape runs the right version.',
      he: 'BankAccount שומר את balance פרטי, ו-withdraw() מסרב למשוך מעבר ליתרה. ממשק Sensor מציע read() בלי קשר אם הוא מדבר ב-I2C או ב-SPI. Circle ו-Square יורשים מ-Shape, וקריאה ל-area() על כל Shape מריצה את הגרסה הנכונה.',
    },
    keyPoints: [
      {
        en: 'Clearly separate encapsulation (protecting data and invariants) from abstraction (hiding complexity behind an interface).',
        he: 'להפריד בבירור בין אנקפסולציה (הגנה על נתונים ו-invariants) לבין הפשטה (הסתרת מורכבות מאחורי ממשק).',
      },
      {
        en: 'Know runtime polymorphism (virtual, vtable, override) versus compile-time polymorphism (overloading, templates).',
        he: 'להכיר פולימורפיזם בזמן ריצה (virtual, vtable, override) לעומת פולימורפיזם בזמן קומפילציה (overloading, templates).',
      },
      {
        en: 'Say when not to inherit: prefer composition over inheritance, and respect the Liskov substitution principle.',
        he: 'לומר מתי לא לרשת: להעדיף composition על פני ירושה, ולכבד את עקרון ההחלפה של Liskov.',
      },
      {
        en: 'In C++, a polymorphic base class needs a virtual destructor.',
        he: 'ב-C++, מחלקת בסיס פולימורפית צריכה destructor וירטואלי.',
      },
    ],
    extras: [
      {
        en: 'Deep inheritance trees are fragile: a change in the base class ripples into every subclass. A Car has an Engine, it is not one.',
        he: 'עצי ירושה עמוקים שבירים: שינוי במחלקת הבסיס מתגלגל לכל היורשות. ל-Car יש Engine, הוא לא Engine.',
      },
      {
        en: 'Liskov: a subclass must work anywhere the base class is expected.',
        he: 'עקרון Liskov: מחלקה יורשת חייבת לעבוד בכל מקום שבו מצפים למחלקת הבסיס.',
      },
      {
        en: 'Without a virtual destructor, deleting a derived object through a base pointer is undefined behaviour.',
        he: 'בלי destructor וירטואלי, מחיקה של אובייקט נגזר דרך מצביע לבסיס היא undefined behaviour.',
      },
      {
        en: 'Public fields and getters that return internal containers by reference break encapsulation.',
        he: 'שדות ציבוריים ו-getters שמחזירים containers פנימיים by reference שוברים את האנקפסולציה.',
      },
    ],
    codeExamples: [
      {
        language: 'cpp',
        code: `#include <memory>
#include <vector>

class Shape {                                   // abstraction: what a shape can do
public:
    virtual ~Shape() = default;
    virtual double area() const = 0;            // no "how" here
};

class Circle : public Shape {                   // inheritance: Circle is a Shape
    double r;                                   // encapsulation: r is private
public:
    explicit Circle(double radius) : r(radius) {}
    double area() const override { return 3.14159 * r * r; }
};

class Square : public Shape {
    double side;
public:
    explicit Square(double s) : side(s) {}
    double area() const override { return side * side; }
};

double totalArea(const std::vector<std::unique_ptr<Shape>>& shapes) {
    double sum = 0;
    for (const auto& shape : shapes) sum += shape->area();   // polymorphism: the right area() per type
    return sum;
}`,
      },
      {
        language: 'java',
        code: `abstract class Shape {                       // abstraction
    abstract double area();
}

class Circle extends Shape {                 // inheritance
    private final double r;                  // encapsulation
    Circle(double r) { this.r = r; }
    @Override double area() { return Math.PI * r * r; }
}

class Square extends Shape {
    private final double side;
    Square(double side) { this.side = side; }
    @Override double area() { return side * side; }
}

double totalArea(List<Shape> shapes) {
    double sum = 0;
    for (Shape s : shapes) sum += s.area();  // polymorphism
    return sum;
}`,
      },
    ],
  },
  {
    id: 'q-static-c-vs-cpp',
    text: {
      en: 'What does static mean in C, and what does C++ add to it?',
      he: 'מה המשמעות של static ב-C, ומה C++ מוסיפה לזה?',
    },
    topicId: 'cpp',
    roleIds: ['software', 'embedded', 'verification', 'student'],
    type: 'conceptual',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'In C, static has two meanings. On a global variable or a function it gives internal linkage: the name is visible only inside its translation unit, which is C\'s way of making something private to a module. On a local variable it gives static storage duration: initialised once, it keeps its value between calls, but its scope is still the function.\nC++ keeps both and adds static class members: a data member shared by all objects, and member functions with no this pointer.',
      he: 'ב-C יש ל-static שתי משמעויות. על משתנה גלובלי או פונקציה הוא נותן internal linkage: השם נראה רק בתוך ה-translation unit שלו, וזו הדרך של C להפוך משהו לפרטי בתוך מודול. על משתנה מקומי הוא נותן static storage duration: המשתנה מאותחל פעם אחת ושומר את ערכו בין קריאות, אבל הטווח שלו נשאר הפונקציה.\nC++ שומרת את שתיהן ומוסיפה חברי מחלקה סטטיים: data member שמשותף לכל האובייקטים, ו-member functions בלי מצביע this.',
    },
    example: {
      en: 'A driver .c file keeps its state in static variables and exports only accessor functions in its header, so no other file can touch that state directly.',
      he: 'קובץ .c של דרייבר שומר את המצב שלו במשתנים סטטיים ומייצא ב-header רק פונקציות גישה, כך שאף קובץ אחר לא יכול לגעת במצב הזה ישירות.',
    },
    keyPoints: [
      {
        en: 'A static local changes lifetime, not scope: it is still visible only inside its function.',
        he: 'static מקומי משנה את אורך החיים, לא את הטווח: הוא עדיין נראה רק בתוך הפונקציה שלו.',
      },
      {
        en: 'Static member functions have no this pointer, so they cannot be virtual or touch instance members directly.',
        he: 'ל-static member functions אין this, ולכן הן לא יכולות להיות virtual ולא לגשת ישירות לחברי מופע.',
      },
      {
        en: 'Since C++11, static local initialisation is thread-safe (magic statics), the basis of the Meyers singleton.',
        he: 'מאז C++11 האתחול של static מקומי בטוח ל-threads (magic statics), וזה הבסיס ל-Meyers singleton.',
      },
      {
        en: 'A static variable in a header creates a separate copy in every translation unit, a classic embedded bug.',
        he: 'משתנה static ב-header יוצר עותק נפרד בכל translation unit, באג קלאסי ב-embedded.',
      },
    ],
    extras: [
      {
        en: 'Static locals live in .data or .bss, not on the stack, and are zero-initialised when there is no initialiser.',
        he: 'משתנים סטטיים מקומיים יושבים ב-.data או ב-.bss ולא על ה-stack, ומאותחלים לאפס אם אין ערך התחלתי.',
      },
      {
        en: 'A static data member must be defined in exactly one .cpp file, unless it is declared inline (C++17).',
        he: 'static data member חייב להיות מוגדר בדיוק בקובץ .cpp אחד, אלא אם הוא מוצהר inline (C++17).',
      },
      {
        en: 'Static locals make a function non-reentrant, which matters for ISRs and multithreaded code.',
        he: 'משתנים סטטיים מקומיים הופכים פונקציה ל-non-reentrant, וזה חשוב ב-ISR ובקוד מרובה threads.',
      },
      {
        en: 'The initialisation order of globals across different files is unspecified.',
        he: 'סדר האתחול של משתנים גלובליים בין קבצים שונים לא מוגדר.',
      },
    ],
    codeExamples: [
      {
        language: 'c',
        code: `static int hits = 0;                 /* internal linkage: visible only in this .c file */

static int helper(int x) {           /* same for functions */
    return x * 2;
}

int next_id(void) {
    static int id = 0;               /* created once, keeps its value between calls */
    return ++id;                     /* 1, 2, 3, ... */
}`,
      },
      {
        language: 'cpp',
        code: `class Counter {
public:
    Counter() { ++created; }
    static int howMany() { return created; }   // no this: only static members
private:
    static int created;                        // one for the whole class
};
int Counter::created = 0;                      // defined exactly once

Counter& instance() {
    static Counter single;                     // C++11: initialised once, thread-safe
    return single;
}`,
      },
    ],
  },

  // ---------- Classic LeetCode questions interviewers like ----------
  {
    id: 'q-contains-duplicate',
    text: { en: 'Does an array contain any duplicate value?', he: 'האם במערך יש ערך שחוזר על עצמו?' },
    details: {
      description: {
        en: 'Given an integer array nums, return true if any value appears at least twice, and false if every element is distinct.',
        he: 'נתון מערך של מספרים שלמים nums. החזירו true אם ערך כלשהו מופיע לפחות פעמיים, ו-false אם כל האיברים שונים זה מזה.',
      },
      examples: [
        {
          input: 'nums = [1, 2, 3, 1]',
          output: 'true',
        },
        {
          input: 'nums = [1, 2, 3, 4]',
          output: 'false',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'qa', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Scan the array once with a hash set. If the current value is already in the set, return true immediately; otherwise insert it. If the loop ends, every value was distinct, so return false.\nTime O(n) on average and O(n) space in the worst case. The alternative is sorting and comparing neighbours: O(n log n) time and O(1) extra space, but it modifies the input.',
      he: 'סורקים את המערך פעם אחת עם hash set. אם הערך הנוכחי כבר ב-set, מחזירים true מיד; אחרת מכניסים אותו. אם הלולאה הסתיימה, כל הערכים היו שונים ומחזירים false.\nזמן O(n) בממוצע ומקום O(n) במקרה הגרוע. החלופה היא מיון והשוואת שכנים: זמן O(n log n) ומקום נוסף O(1), אבל זה משנה את הקלט.',
    },
    approach: [
      {
        en: 'Clarify: array size, value range, memory limits, and whether the input may be modified.',
        he: 'הבהרה: גודל המערך, טווח הערכים, מגבלות זיכרון, והאם מותר לשנות את הקלט.',
      },
      {
        en: 'Brute force: compare every pair, O(n²) time and O(1) space.',
        he: 'פתרון נאיבי: להשוות כל זוג, זמן O(n²) ומקום O(1).',
      },
      {
        en: 'Insight: the real question is have I seen this value before, which a hash set answers in O(1).',
        he: 'התובנה: השאלה האמיתית היא האם כבר ראיתי את הערך הזה, ו-hash set עונה עליה ב-O(1).',
      },
      {
        en: 'Algorithm: for each n, return true if n is in the set, else add it; O(n) time, O(n) space.',
        he: 'האלגוריתם: לכל n, מחזירים true אם הוא ב-set, אחרת מוסיפים אותו; זמן O(n), מקום O(n).',
      },
      {
        en: 'Test: [1, 2, 3, 1] gives true, [1, 2, 3, 4] gives false, [] and [5] give false, [-1, -1] gives true.',
        he: 'בדיקה: [1, 2, 3, 1] נותן true, [1, 2, 3, 4] נותן false, [] ו-[5] נותנים false, [-1, -1] נותן true.',
      },
    ],
    keyPoints: [
      {
        en: 'Return as soon as you find the first duplicate instead of building the whole set.',
        he: 'להחזיר תשובה ברגע שמוצאים את הכפילות הראשונה, במקום לבנות את כל ה-set.',
      },
      {
        en: 'Ask whether you may modify the input before sorting it in place.',
        he: 'לשאול אם מותר לשנות את הקלט לפני שממיינים אותו במקום.',
      },
      {
        en: 'The one-liner len(set(nums)) < len(nums) is fine but always processes the whole array.',
        he: 'השורה הקצרה len(set(nums)) < len(nums) תקינה, אבל תמיד עוברת על כל המערך.',
      },
      {
        en: 'Follow-up: Contains Duplicate II, duplicates within distance k, solved with a sliding window set.',
        he: 'שאלת המשך: Contains Duplicate II, כפילות במרחק של עד k, נפתרת עם set בחלון נע.',
      },
    ],
    extras: [
      {
        en: 'In C++ one insert both checks and adds: insert(n).second is false when the value was already there.',
        he: 'ב-C++ הכנסה אחת גם בודקת וגם מוסיפה: insert(n).second הוא false כשהערך כבר היה שם.',
      },
      {
        en: 'For a small, known value range, a boolean or bit array is even faster than a hash set.',
        he: 'כשטווח הערכים קטן וידוע, מערך בוליאני או מערך ביטים מהיר עוד יותר מ-hash set.',
      },
      {
        en: 'An empty or one-element array returns false; negative numbers and zero need nothing special.',
        he: 'מערך ריק או עם איבר אחד מחזיר false; מספרים שליליים ואפס לא דורשים טיפול מיוחד.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def contains_duplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False                       # or: len(set(nums)) < len(nums)`,
      },
      {
        language: 'cpp',
        code: `#include <unordered_set>
#include <vector>

bool containsDuplicate(const std::vector<int>& nums) {
    std::unordered_set<int> seen;
    for (int n : nums) {
        if (!seen.insert(n).second) return true;   // insert failed: already there
    }
    return false;
}`,
      },
    ],
  },
  {
    id: 'q-valid-anagram',
    text: { en: 'Are two strings anagrams of each other?', he: 'האם שתי מחרוזות הן אנגרמות זו של זו?' },
    details: {
      description: {
        en: 'Given two strings s and t, return true if t is an anagram of s: the same letters with the same counts, in any order.',
        he: 'נתונות שתי מחרוזות s ו-t. החזירו true אם t היא אנגרמה של s: אותן אותיות באותן כמויות, בכל סדר.',
      },
      examples: [
        {
          input: 's = "anagram", t = "nagaram"',
          output: 'true',
        },
        {
          input: 's = "rat", t = "car"',
          output: 'false',
          explanation: { en: 'Different letters.', he: 'אותיות שונות.' },
        },
      ],
      constraints: [
        { en: 'Lowercase English letters only', he: 'אותיות אנגליות קטנות בלבד' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'qa', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'If the lengths differ, return false. Otherwise count characters in one array of 26: increment for each character of s, decrement for each character of t, and return false as soon as a counter drops below zero. With equal lengths, if no counter goes negative, they all end at zero, so the strings are anagrams.\nTime O(n), space O(1), since the array size does not depend on the input.',
      he: 'אם האורכים שונים, מחזירים false. אחרת סופרים תווים במערך אחד בגודל 26: מגדילים לכל תו ב-s, מקטינים לכל תו ב-t, ומחזירים false ברגע שמונה יורד מתחת לאפס. כשהאורכים שווים ואף מונה לא נהיה שלילי, כולם מסתיימים באפס, ולכן המחרוזות הן אנגרמות.\nזמן O(n), מקום O(1), כי גודל המערך לא תלוי בקלט.',
    },
    approach: [
      {
        en: 'Clarify: only lowercase letters, or also uppercase, spaces and Unicode? Is the comparison case-sensitive?',
        he: 'הבהרה: רק אותיות קטנות, או גם אותיות גדולות, רווחים ו-Unicode? האם ההשוואה רגישה לגודל אותיות?',
      },
      {
        en: 'Brute force: sort both strings and compare, O(n log n); searching and removing each character is O(n²).',
        he: 'פתרון נאיבי: למיין את שתי המחרוזות ולהשוות, O(n log n); חיפוש ומחיקה של כל תו הם O(n²).',
      },
      {
        en: 'Insight: anagrams have the same count for every character, so compare frequency counts instead of order.',
        he: 'התובנה: לאנגרמות יש אותה כמות לכל תו, ולכן משווים ספירות ולא סדר.',
      },
      {
        en: 'Algorithm: check lengths, count s up and t down, fail on a negative count; O(n) time, O(1) space.',
        he: 'האלגוריתם: בודקים אורכים, סופרים את s למעלה ואת t למטה, ונכשלים על מונה שלילי; זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: anagram and nagaram (true), rat and car (false), a and ab, aab and abb, two empty strings (true).',
        he: 'בדיקה: anagram ו-nagaram (true), rat ו-car (false), a ו-ab, aab ו-abb, שתי מחרוזות ריקות (true).',
      },
    ],
    keyPoints: [
      {
        en: 'The length check first is both a shortcut and what makes the negative-counter early exit valid.',
        he: 'בדיקת האורך בהתחלה היא גם קיצור דרך וגם מה שהופך את היציאה המוקדמת על מונה שלילי לתקינה.',
      },
      {
        en: 'One counting array, incremented for s and decremented for t, is cleaner than two arrays compared at the end.',
        he: 'מערך מונים אחד, שמגדילים עבור s ומקטינים עבור t, נקי יותר משני מערכים שמשווים בסוף.',
      },
      {
        en: 'Ask about the character set: uppercase, spaces, Unicode. The answer decides between an array and a hash map.',
        he: 'לשאול על סוג התווים: אותיות גדולות, רווחים, Unicode. התשובה קובעת אם להשתמש במערך או ב-hash map.',
      },
      {
        en: 'Follow-up: Group Anagrams, using the sorted string or the count tuple as a hash key.',
        he: 'שאלת המשך: Group Anagrams, עם המחרוזת הממוינת או tuple של מונים כמפתח ל-hash.',
      },
    ],
    extras: [
      {
        en: 'Sorting both strings and comparing is O(n log n) and simpler to write.',
        he: 'מיון שתי המחרוזות והשוואה הם O(n log n) ופשוטים יותר לכתיבה.',
      },
      {
        en: 'The Python version uses Counter, a hash map, which works for any characters.',
        he: 'גרסת ה-Python משתמשת ב-Counter, שהוא hash map, ועובדת לכל סוג של תו.',
      },
      {
        en: 'For Unicode, use a hash map and consider normalisation, because the same visible character can be encoded in different ways.',
        he: 'ל-Unicode משתמשים ב-hash map ושוקלים נרמול, כי אותו תו שנראה זהה יכול להיות מקודד בכמה דרכים.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from collections import Counter

def is_anagram(s, t):
    return len(s) == len(t) and Counter(s) == Counter(t)`,
      },
      {
        language: 'cpp',
        code: `#include <string>

bool isAnagram(const std::string& s, const std::string& t) {
    if (s.size() != t.size()) return false;
    int counts[26] = {0};
    for (char c : s) counts[c - 'a']++;
    for (char c : t) if (--counts[c - 'a'] < 0) return false;
    return true;
}`,
      },
      {
        language: 'java',
        code: `boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] counts = new int[26];
    for (char c : s.toCharArray()) counts[c - 'a']++;
    for (char c : t.toCharArray()) if (--counts[c - 'a'] < 0) return false;
    return true;
}`,
      },
    ],
  },
  {
    id: 'q-max-subarray',
    text: { en: 'Find the contiguous subarray with the largest sum (Kadane).', he: 'מצאו את תת-המערך הרציף עם הסכום הגדול ביותר (Kadane).' },
    details: {
      description: {
        en: 'Given an integer array nums (it may contain negative numbers), find the contiguous subarray with the largest sum and return that sum.',
        he: 'נתון מערך של מספרים שלמים nums (יכול להכיל מספרים שליליים). מצאו את תת-המערך הרציף עם הסכום הגדול ביותר והחזירו את הסכום.',
      },
      examples: [
        {
          input: 'nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]',
          output: '6',
          explanation: { en: 'The subarray [4, -1, 2, 1] sums to 6.', he: 'תת-המערך [4, -1, 2, 1] מסתכם ל-6.' },
        },
        {
          input: 'nums = [-3, -1, -2]',
          output: '-1',
          explanation: { en: 'When every number is negative, the best subarray is the single largest element.', he: 'כשכל המספרים שליליים, תת-המערך הטוב ביותר הוא האיבר הגדול ביותר לבדו.' },
        },
      ],
      constraints: [
        { en: 'At least one element; aim for O(n)', he: 'לפחות איבר אחד; שאפו ל-O(n)' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Kadane\'s algorithm. Keep current, the best sum of a subarray ending at the current index, and best, the best sum seen anywhere. For each n, set current = max(n, current + n), because a negative running sum only hurts, then best = max(best, current).\nInitialise both with nums[0], so an all-negative array returns its largest element. Time O(n), space O(1).',
      he: 'האלגוריתם של Kadane. שומרים current, הסכום הטוב ביותר של תת-מערך שמסתיים באינדקס הנוכחי, ו-best, הסכום הטוב ביותר שנמצא בכל מקום. לכל n קובעים current = max(n, current + n), כי סכום רץ שלילי רק מזיק, ואז best = max(best, current).\nמאתחלים את שניהם ב-nums[0], כדי שמערך שכולו שלילי יחזיר את האיבר הגדול ביותר. זמן O(n), מקום O(1).',
    },
    example: {
      en: 'For [-2, 1, -3, 4, -1, 2, 1, -5, 4], current restarts at 4, grows to 6 over 4, -1, 2, 1, and best ends at 6.',
      he: 'עבור [-2, 1, -3, 4, -1, 2, 1, -5, 4], current מתחיל מחדש ב-4, עולה ל-6 על פני 4, -1, 2, 1, ו-best מסתיים ב-6.',
    },
    approach: [
      {
        en: 'Clarify: can the array be empty, can all values be negative, and do they want the sum or the boundaries?',
        he: 'הבהרה: האם המערך יכול להיות ריק, האם כל הערכים יכולים להיות שליליים, והאם מבקשים את הסכום או את הגבולות?',
      },
      {
        en: 'Brute force: try every start and extend to every end with a running sum, O(n²) time.',
        he: 'פתרון נאיבי: לנסות כל התחלה ולהאריך לכל סוף עם סכום רץ, זמן O(n²).',
      },
      {
        en: 'Insight: the best subarray ending at i either extends the one ending at i - 1 or starts fresh at i.',
        he: 'התובנה: תת-המערך הטוב ביותר שמסתיים ב-i או ממשיך את זה שמסתיים ב-i - 1 או מתחיל מחדש ב-i.',
      },
      {
        en: 'Algorithm: best = current = nums[0]; current = max(n, current + n), best = max(best, current); O(n) time, O(1) space.',
        he: 'האלגוריתם: best = current = nums[0]; current = max(n, current + n), best = max(best, current); זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: [-2, 1, -3, 4, -1, 2, 1, -5, 4] gives 6, [-3, -1, -2] gives -1, [5] gives 5.',
        he: 'בדיקה: [-2, 1, -3, 4, -1, 2, 1, -5, 4] נותן 6, [-3, -1, -2] נותן -1, [5] נותן 5.',
      },
    ],
    keyPoints: [
      {
        en: 'Define current precisely: the best sum of a subarray that ends exactly at index i. That definition is the proof.',
        he: 'להגדיר את current במדויק: הסכום הטוב ביותר של תת-מערך שמסתיים בדיוק באינדקס i. ההגדרה הזאת היא ההוכחה.',
      },
      {
        en: 'Initialising with 0 is the classic bug: it returns 0 for all-negative input.',
        he: 'אתחול ב-0 הוא הבאג הקלאסי: הוא מחזיר 0 לקלט שכולו שלילי.',
      },
      {
        en: 'Call it dynamic programming: dp[i] = max(nums[i], dp[i-1] + nums[i]), compressed to O(1) space.',
        he: 'לקרוא לזה בשמו, תכנות דינמי: dp[i] = max(nums[i], dp[i-1] + nums[i]), מכווץ למקום O(1).',
      },
      {
        en: 'Mention the divide and conquer O(n log n) solution as an alternative some interviewers ask for.',
        he: 'להזכיר את פתרון ה-divide and conquer ב-O(n log n) כחלופה שחלק מהמראיינים מבקשים.',
      },
    ],
    extras: [
      {
        en: 'To return the subarray, record the start index whenever current restarts and the end index whenever best improves.',
        he: 'כדי להחזיר את תת-המערך עצמו, שומרים את אינדקס ההתחלה בכל פעם ש-current מתחיל מחדש ואת אינדקס הסוף בכל פעם ש-best משתפר.',
      },
      {
        en: 'Follow-ups: maximum product subarray (track both min and max) and the circular array version.',
        he: 'שאלות המשך: תת-מערך עם מכפלה מקסימלית (שומרים גם מינימום וגם מקסימום), וגרסת המערך המעגלי.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def max_subarray(nums):
    best = current = nums[0]
    for n in nums[1:]:
        current = max(n, current + n)      # extend, or start fresh here
        best = max(best, current)
    return best`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <vector>

int maxSubArray(const std::vector<int>& nums) {
    int best = nums[0], current = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        current = std::max(nums[i], current + nums[i]);
        best = std::max(best, current);
    }
    return best;
}`,
      },
      {
        language: 'java',
        code: `int maxSubArray(int[] nums) {
    int best = nums[0], current = nums[0];
    for (int i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        best = Math.max(best, current);
    }
    return best;
}`,
      },
    ],
  },
  {
    id: 'q-buy-sell-stock',
    text: {
      en: 'Buy and sell a stock once: find the maximum profit.',
      he: 'קנייה ומכירה של מניה פעם אחת: מצאו את הרווח המקסימלי.',
    },
    details: {
      description: {
        en: 'prices[i] is the price of a stock on day i. Choose one day to buy and a later day to sell so that the profit is as large as possible, and return that profit. If no profit is possible, return 0.',
        he: 'prices[i] הוא מחיר המניה ביום i. בחרו יום אחד לקנייה ויום מאוחר יותר למכירה כך שהרווח יהיה גדול ככל האפשר, והחזירו את הרווח. אם אי אפשר להרוויח, החזירו 0.',
      },
      rules: [
        { en: 'You must buy before you sell, and only one transaction is allowed.', he: 'חייבים לקנות לפני שמוכרים, ומותרת עסקה אחת בלבד.' },
      ],
      examples: [
        {
          input: 'prices = [7, 1, 5, 3, 6, 4]',
          output: '5',
          explanation: { en: 'Buy on day 2 (price 1), sell on day 5 (price 6).', he: 'קונים ביום 2 (מחיר 1), מוכרים ביום 5 (מחיר 6).' },
        },
        {
          input: 'prices = [7, 6, 4, 3, 1]',
          output: '0',
          explanation: { en: 'Prices only fall, so no transaction is made.', he: 'המחירים רק יורדים, ולכן לא מבצעים עסקה.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'One pass, tracking the lowest price so far and the best profit so far. For each price, update lowest = min(lowest, price), then best = max(best, price - lowest). For any sell day the best buy is the minimum before it, and lowest only covers days up to today, so we never sell before buying.\nStart best at 0, so falling prices return 0. Time O(n), space O(1).',
      he: 'מעבר אחד, שבו שומרים את המחיר הנמוך ביותר עד כה ואת הרווח הטוב ביותר עד כה. לכל מחיר מעדכנים lowest = min(lowest, price), ואז best = max(best, price - lowest). לכל יום מכירה הקנייה הטובה ביותר היא המינימום שלפניו, ו-lowest כולל רק ימים עד היום, ולכן אף פעם לא מוכרים לפני שקונים.\nמתחילים עם best = 0, כך שמחירים יורדים מחזירים 0. זמן O(n), מקום O(1).',
    },
    approach: [
      {
        en: 'Clarify: exactly one buy and one later sell, return 0 if no profit, and can the array be empty?',
        he: 'הבהרה: קנייה אחת ומכירה אחת מאוחרת יותר, מחזירים 0 אם אין רווח, והאם המערך יכול להיות ריק?',
      },
      {
        en: 'Brute force: try every pair i < j and take the largest prices[j] - prices[i], O(n²) time.',
        he: 'פתרון נאיבי: לנסות כל זוג i < j ולקחת את prices[j] - prices[i] הגדול ביותר, זמן O(n²).',
      },
      {
        en: 'Insight: fix the sell day; its best buy is the minimum price before it, maintained while scanning.',
        he: 'התובנה: מקבעים את יום המכירה; הקנייה הטובה ביותר עבורו היא המחיר המינימלי לפניו, שמתחזקים תוך כדי סריקה.',
      },
      {
        en: 'Algorithm: lowest = infinity, best = 0; per price, update lowest, then best; O(n) time, O(1) space.',
        he: 'האלגוריתם: lowest = אינסוף, best = 0; לכל מחיר מעדכנים את lowest ואז את best; זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: [7, 1, 5, 3, 6, 4] gives 5, [7, 6, 4, 3, 1] gives 0, [2, 4, 1] gives 2.',
        he: 'בדיקה: [7, 1, 5, 3, 6, 4] נותן 5, [7, 6, 4, 3, 1] נותן 0, [2, 4, 1] נותן 2.',
      },
    ],
    keyPoints: [
      {
        en: 'The tempting max(prices) - min(prices) ignores order: [2, 4, 1] gives 3, but the real answer is 2.',
        he: 'התשובה המפתה max(prices) - min(prices) מתעלמת מהסדר: [2, 4, 1] נותן 3, אבל התשובה האמיתית היא 2.',
      },
      {
        en: 'Explain the invariant: lowest is the cheapest buy among days up to the current sell day.',
        he: 'להסביר את ה-invariant: lowest הוא הקנייה הזולה ביותר מבין הימים עד יום המכירה הנוכחי.',
      },
      {
        en: 'It is Kadane\'s algorithm on the array of daily price differences.',
        he: 'זה האלגוריתם של Kadane על מערך ההפרשים היומיים במחיר.',
      },
      {
        en: 'Follow-up with unlimited transactions: sum every positive day-to-day increase, still O(n).',
        he: 'שאלת המשך עם מספר עסקאות לא מוגבל: סוכמים כל עלייה חיובית מיום ליום, עדיין O(n).',
      },
    ],
    extras: [
      {
        en: 'Harder variants (at most k transactions, cooldown, fees) are solved with a small state-machine DP.',
        he: 'גרסאות קשות יותר (לכל היותר k עסקאות, cooldown, עמלות) נפתרות ב-DP עם מכונת מצבים קטנה.',
      },
      {
        en: 'An empty or one-day array returns 0, and updating lowest first only allows a harmless same-day trade with profit 0.',
        he: 'מערך ריק או של יום אחד מחזיר 0, ועדכון lowest קודם מאפשר רק עסקה באותו יום ברווח 0, וזה לא מזיק.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def max_profit(prices):
    lowest, best = float("inf"), 0
    for price in prices:
        lowest = min(lowest, price)          # cheapest day so far
        best = max(best, price - lowest)     # sell today?
    return best`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <climits>
#include <vector>

int maxProfit(const std::vector<int>& prices) {
    int lowest = INT_MAX, best = 0;
    for (int price : prices) {
        lowest = std::min(lowest, price);
        best = std::max(best, price - lowest);
    }
    return best;
}`,
      },
    ],
  },
  {
    id: 'q-merge-sorted-lists',
    text: { en: 'Merge two sorted linked lists into one sorted list.', he: 'מזגו שתי רשימות מקושרות ממוינות לרשימה ממוינת אחת.' },
    details: {
      description: {
        en: 'Given the heads of two sorted singly linked lists, merge them into one sorted list by splicing the existing nodes together, and return its head.',
        he: 'נתונים ראשי שתי רשימות מקושרות חד-כיווניות ממוינות. מזגו אותן לרשימה ממוינת אחת על ידי חיבור הצמתים הקיימים, והחזירו את הראש שלה.',
      },
      examples: [
        {
          input: 'list1 = 1 -> 2 -> 4, list2 = 1 -> 3 -> 4',
          output: '1 -> 1 -> 2 -> 3 -> 4 -> 4',
        },
        {
          input: 'list1 = (empty), list2 = 0',
          output: '0',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'backend', 'verification', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Use a dummy head node and a tail pointer. While both lists have nodes, link the smaller head after tail and advance that list. When one list runs out, attach the rest of the other in one step, since it is already sorted, and return dummy.next.\nTime O(n + m), and O(1) extra space, because we re-link the existing nodes instead of allocating new ones.',
      he: 'משתמשים בצומת דמה (dummy) כראש ובמצביע tail. כל עוד בשתי הרשימות יש צמתים, מחברים את הראש הקטן יותר אחרי tail ומקדמים את הרשימה הזאת. כשרשימה אחת נגמרת, מחברים את כל השארית של השנייה בצעד אחד, כי היא כבר ממוינת, ומחזירים את dummy.next.\nזמן O(n + m), ומקום נוסף O(1), כי מקשרים מחדש צמתים קיימים במקום להקצות חדשים.',
    },
    approach: [
      {
        en: 'Clarify: singly linked, ascending, may a list be empty, and must I reuse the existing nodes?',
        he: 'הבהרה: רשימה חד-כיוונית, בסדר עולה, האם רשימה יכולה להיות ריקה, והאם חייבים להשתמש בצמתים הקיימים?',
      },
      {
        en: 'Brute force: copy values to an array, sort and rebuild, O((n + m) log(n + m)), ignoring the existing order.',
        he: 'פתרון נאיבי: להעתיק את הערכים למערך, למיין ולבנות מחדש, O((n + m) log(n + m)), בלי לנצל את הסדר הקיים.',
      },
      {
        en: 'Insight: the next smallest node is always one of the two current heads, as in merge sort\'s merge step.',
        he: 'התובנה: הצומת הבא הקטן ביותר הוא תמיד אחד משני הראשים הנוכחיים, כמו בשלב המיזוג של merge sort.',
      },
      {
        en: 'Algorithm: tail = dummy; link the smaller head and advance; then attach the leftover; O(n + m) time, O(1) space.',
        he: 'האלגוריתם: tail = dummy; מחברים את הראש הקטן ומקדמים; בסוף מחברים את השארית; זמן O(n + m), מקום O(1).',
      },
      {
        en: 'Test: 1->2->4 with 1->3->4 gives 1->1->2->3->4->4; empty with 0 gives 0; both empty gives empty.',
        he: 'בדיקה: 1->2->4 עם 1->3->4 נותן 1->1->2->3->4->4; ריקה עם 0 נותן 0; שתיהן ריקות נותן רשימה ריקה.',
      },
    ],
    keyPoints: [
      {
        en: 'The dummy node removes the special case for the head; in C it can live on the stack.',
        he: 'צומת הדמה מבטל את המקרה המיוחד של הראש; ב-C הוא יכול לשבת על ה-stack.',
      },
      {
        en: 'Attach the leftover list in O(1) instead of looping over it.',
        he: 'לחבר את שארית הרשימה ב-O(1) במקום לעבור עליה בלולאה.',
      },
      {
        en: 'Recursion uses O(n + m) stack depth, so the iterative version is safer for long lists and small embedded stacks.',
        he: 'רקורסיה צורכת עומק stack של O(n + m), ולכן הגרסה האיטרטיבית בטוחה יותר לרשימות ארוכות ול-stack קטן ב-embedded.',
      },
      {
        en: 'Follow-ups: merge k sorted lists with a min-heap in O(N log k), and merge sort on a linked list.',
        he: 'שאלות המשך: מיזוג k רשימות ממוינות עם min-heap ב-O(N log k), ו-merge sort על רשימה מקושרת.',
      },
    ],
    extras: [
      {
        en: 'Comparing with <= takes from the first list on ties, which keeps the merge stable.',
        he: 'השוואה עם <= לוקחת מהרשימה הראשונה במקרה של שוויון, וזה שומר על מיזוג יציב (stable).',
      },
      {
        en: 'Copying values into new nodes costs O(n + m) extra space and needs allocation.',
        he: 'העתקת ערכים לצמתים חדשים עולה מקום נוסף O(n + m) ודורשת הקצאה.',
      },
      {
        en: 'Edge cases: either or both lists empty, very different lengths, and duplicate values.',
        he: 'מקרי קצה: אחת הרשימות או שתיהן ריקות, אורכים שונים מאוד, וערכים כפולים.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def merge(a, b):
    dummy = tail = ListNode(0)
    while a and b:
        if a.val <= b.val:
            tail.next, a = a, a.next
        else:
            tail.next, b = b, b.next
        tail = tail.next
    tail.next = a or b                     # whatever is left
    return dummy.next`,
      },
      {
        language: 'cpp',
        code: `struct ListNode { int val; ListNode* next; };

ListNode* merge(ListNode* a, ListNode* b) {
    ListNode dummy{0, nullptr};
    ListNode* tail = &dummy;
    while (a && b) {
        ListNode*& smaller = (a->val <= b->val) ? a : b;
        tail->next = smaller;
        smaller = smaller->next;
        tail = tail->next;
    }
    tail->next = a ? a : b;
    return dummy.next;
}`,
      },
      {
        language: 'c',
        code: `struct Node { int val; struct Node* next; };

struct Node* merge(struct Node* a, struct Node* b) {
    struct Node dummy = {0, NULL};
    struct Node* tail = &dummy;
    while (a && b) {
        if (a->val <= b->val) { tail->next = a; a = a->next; }
        else                  { tail->next = b; b = b->next; }
        tail = tail->next;
    }
    tail->next = a ? a : b;
    return dummy.next;
}`,
      },
    ],
  },
  {
    id: 'q-climbing-stairs',
    text: { en: 'Climbing stairs: how many distinct ways to reach step n with steps of 1 or 2?', he: 'עלייה במדרגות: בכמה דרכים שונות אפשר להגיע למדרגה n בצעדים של 1 או 2?' },
    details: {
      description: {
        en: 'A staircase has n steps. Each move climbs either 1 or 2 steps. In how many distinct ways can you reach the top?',
        he: 'בגרם מדרגות יש n מדרגות. בכל צעד עולים מדרגה אחת או שתיים. בכמה דרכים שונות אפשר להגיע לראש המדרגות?',
      },
      examples: [
        {
          input: 'n = 2',
          output: '2',
          explanation: { en: '1+1 or 2.', he: '1+1 או 2.' },
        },
        {
          input: 'n = 3',
          output: '3',
          explanation: { en: '1+1+1, 1+2, 2+1.', he: '1+1+1, 1+2, 2+1.' },
        },
      ],
      constraints: [
        { en: '1 ≤ n ≤ 45', he: '1 ≤ n ≤ 45' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'To stand on step n, the last move came either from n-1 with a single step or from n-2 with a double step, so ways(n) = ways(n-1) + ways(n-2). That is the Fibonacci recurrence, with ways(0) = ways(1) = 1.\nNaive recursion is O(2^n) because subproblems repeat. Each value needs only the previous two, so I roll two variables forward n times: O(n) time, O(1) space.',
      he: 'כדי לעמוד על מדרגה n, הצעד האחרון הגיע או ממדרגה n-1 בצעד אחד, או ממדרגה n-2 בצעד כפול, ולכן ways(n) = ways(n-1) + ways(n-2). זו נוסחת פיבונאצ׳י, עם ways(0) = ways(1) = 1.\nרקורסיה נאיבית היא O(2^n) כי תתי-הבעיות חוזרות. כל ערך צריך רק את שני הקודמים, אז מגלגלים שני משתנים קדימה n פעמים: זמן O(n), מקום O(1).',
    },
    example: {
      en: 'For n = 3 the paths are 1+1+1, 1+2 and 2+1, so 3 ways, which is exactly ways(2) + ways(1) = 2 + 1.',
      he: 'עבור n = 3 המסלולים הם 1+1+1, 1+2 ו-2+1, כלומר 3 דרכים, וזה בדיוק ways(2) + ways(1) = 2 + 1.',
    },
    approach: [
      {
        en: 'Clarify: n is at least 1, steps are 1 or 2, order matters, and ask the range of n because of overflow.',
        he: 'לברר: n לפחות 1, הצעדים הם 1 או 2, הסדר משנה, ולשאול מה הטווח של n בגלל overflow.',
      },
      {
        en: 'Brute force: recursively try a 1-step and a 2-step from every position, O(2^n) because subproblems repeat.',
        he: 'Brute force: לנסות ברקורסיה צעד של 1 וצעד של 2 מכל מיקום, O(2^n) כי תתי-הבעיות חוזרות.',
      },
      {
        en: 'Insight: every path to n ends with a 1-step from n-1 or a 2-step from n-2.',
        he: 'התובנה: כל מסלול ל-n מסתיים בצעד 1 מ-n-1 או בצעד 2 מ-n-2.',
      },
      {
        en: 'Optimal: a = b = 1; n times set (a, b) to (b, a + b); return a. O(n) time, O(1) space.',
        he: 'הפתרון האופטימלי: a = b = 1, ואז n פעמים מעדכנים (a, b) ל-(b, a + b); מחזירים את a. זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: n = 1 gives 1, n = 2 gives 2, n = 3 gives 3, n = 5 gives 8.',
        he: 'בדיקה: n = 1 נותן 1, n = 2 נותן 2, n = 3 נותן 3, n = 5 נותן 8.',
      },
    ],
    keyPoints: [
      {
        en: 'Derive the recurrence from the last move instead of just saying \'it is Fibonacci\'.',
        he: 'לגזור את הנוסחה מתוך הצעד האחרון, ולא רק להגיד \'זה פיבונאצ׳י\'.',
      },
      {
        en: 'Name the DP ingredients: overlapping subproblems and optimal substructure.',
        he: 'לתת שם למרכיבי ה-DP: תתי-בעיות חופפות ומבנה אופטימלי.',
      },
      {
        en: 'Show the progression: recursion, memoization, table, then two variables.',
        he: 'להראות את ההתקדמות: רקורסיה, memoization, טבלה, ואז שני משתנים.',
      },
      {
        en: 'Mention overflow: a signed 32-bit int is safe only up to n = 45.',
        he: 'להזכיר overflow: int חתום של 32 ביט בטוח רק עד n = 45.',
      },
    ],
    extras: [
      {
        en: 'For n = 45 the answer is 1,836,311,903; for larger n use 64-bit integers or big numbers.',
        he: 'עבור n = 45 התשובה היא 1,836,311,903; עבור n גדול יותר עוברים ל-64 ביט או למספרים גדולים.',
      },
      {
        en: 'Follow-up with steps of 1, 2 or 3, or any set of steps: dp[n] becomes the sum of dp[n - s] over each allowed step s.',
        he: 'שאלת המשך עם צעדים של 1, 2 או 3, או כל קבוצת צעדים: dp[n] הופך לסכום של dp[n - s] על כל צעד מותר s.',
      },
      {
        en: 'For a huge n with a modulo, matrix exponentiation gives O(log n).',
        he: 'עבור n ענק עם מודולו, העלאת מטריצה בחזקה נותנת O(log n).',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def climb_stairs(n):
    a, b = 1, 1                    # ways(0) = 1, ways(1) = 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
      },
      {
        language: 'cpp',
        code: `int climbStairs(int n) {
    long long a = 1, b = 1;        // ways(0), ways(1)
    for (int i = 0; i < n; ++i) {
        long long next = a + b;
        a = b;
        b = next;
    }
    return (int)a;
}`,
      },
      {
        language: 'java',
        code: `int climbStairs(int n) {
    int a = 1, b = 1;
    for (int i = 0; i < n; i++) {
        int next = a + b;
        a = b;
        b = next;
    }
    return a;
}`,
      },
    ],
  },
  {
    id: 'q-max-depth-binary-tree',
    text: { en: 'Return the maximum depth of a binary tree.', he: 'החזירו את העומק המקסימלי של עץ בינארי.' },
    details: {
      description: {
        en: 'Given the root of a binary tree, return its maximum depth: the number of nodes on the longest path from the root down to a leaf.',
        he: 'נתון שורש של עץ בינארי. החזירו את העומק המקסימלי שלו: מספר הצמתים במסלול הארוך ביותר מהשורש ועד עלה.',
      },
      examples: [
        {
          input: 'root = [3, 9, 20, null, null, 15, 7]\n(3 has the children 9 and 20; 20 has the children 15 and 7)',
          output: '3',
        },
        {
          input: 'root = (empty tree)',
          output: '0',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'I follow the recursive definition: an empty tree has depth 0, and any other tree has depth 1 + max(depth(left), depth(right)). It is a post-order DFS where each node asks its two children for their depth, takes the larger and adds itself.\nEvery node is visited once, so time is O(n). Space is O(h) for the call stack: O(log n) when balanced, O(n) when skewed.',
      he: 'הולכים לפי ההגדרה הרקורסיבית: לעץ ריק עומק 0, ולכל עץ אחר עומק 1 + max(depth(left), depth(right)). זה DFS בסדר post-order: כל צומת שואל את שני הילדים מה העומק שלהם, לוקח את הגדול ומוסיף את עצמו.\nמבקרים בכל צומת פעם אחת, ולכן הזמן הוא O(n). המקום הוא O(h) למחסנית הקריאות: O(log n) בעץ מאוזן, ו-O(n) בעץ מוטה.',
    },
    approach: [
      {
        en: 'Clarify: can the root be null, is depth counted in nodes or edges, and how large or skewed can the tree be.',
        he: 'לברר: האם השורש יכול להיות null, האם העומק נספר בצמתים או בקשתות, וכמה גדול או מוטה העץ יכול להיות.',
      },
      {
        en: 'Insight: a tree\'s depth depends only on its two subtrees\' depths, with base case null = 0.',
        he: 'התובנה: העומק של עץ תלוי רק בעומקים של שני תתי-העצים, עם מקרה בסיס null = 0.',
      },
      {
        en: 'Algorithm: if the node is null return 0, otherwise return 1 + the max of the two recursive calls.',
        he: 'האלגוריתם: אם הצומת null מחזירים 0, אחרת מחזירים 1 + המקסימום של שתי הקריאות הרקורסיביות.',
      },
      {
        en: 'Complexity: O(n) time, O(h) stack space, or O(w) with the BFS version.',
        he: 'סיבוכיות: זמן O(n), מקום O(h) למחסנית, או O(w) בגרסת ה-BFS.',
      },
      {
        en: 'Test: empty tree gives 0, a single node gives 1, [3, 9, 20, null, null, 15, 7] gives 3.',
        he: 'בדיקה: עץ ריק נותן 0, צומת בודד נותן 1, [3, 9, 20, null, null, 15, 7] נותן 3.',
      },
    ],
    keyPoints: [
      {
        en: 'Clarify whether depth counts nodes (single node = 1) or edges (single node = 0); here it counts nodes.',
        he: 'לברר אם העומק נספר בצמתים (צומת בודד = 1) או בקשתות (צומת בודד = 0); כאן סופרים צמתים.',
      },
      {
        en: 'Give space as O(h), not O(1): the recursion stack is real memory.',
        he: 'לתת מקום O(h) ולא O(1): מחסנית הרקורסיה היא זיכרון אמיתי.',
      },
      {
        en: 'Raise the stack-overflow risk on a skewed tree and offer BFS that counts levels as the fix.',
        he: 'להעלות את הסיכון ל-stack overflow בעץ מוטה ולהציע BFS שסופר רמות כפתרון.',
      },
      {
        en: 'Know the minimum-depth trap: a node with only one child is not a leaf.',
        he: 'להכיר את המלכודת בעומק מינימלי: צומת עם ילד אחד בלבד הוא לא עלה.',
      },
    ],
    extras: [
      {
        en: 'The iterative options are BFS with a queue, one level at a time, or DFS with an explicit stack of (node, depth) pairs.',
        he: 'החלופות האיטרטיביות: BFS עם תור, רמה אחת בכל פעם, או DFS עם stack מפורש של זוגות (node, depth).',
      },
      {
        en: 'BFS space is O(w), where w is the width of the widest level.',
        he: 'המקום ב-BFS הוא O(w), כש-w הוא רוחב הרמה הרחבה ביותר.',
      },
      {
        en: 'The same post-order pattern solves \'is the tree balanced\' and \'diameter of a binary tree\', common next questions.',
        he: 'אותה תבנית post-order פותרת את \'האם העץ מאוזן\' ואת \'קוטר של עץ בינארי\', שאלות המשך נפוצות.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def max_depth(root):
    if root is None:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>

struct TreeNode { int val; TreeNode* left; TreeNode* right; };

int maxDepth(const TreeNode* root) {
    if (!root) return 0;
    return 1 + std::max(maxDepth(root->left), maxDepth(root->right));
}`,
      },
    ],
  },
  {
    id: 'q-validate-bst',
    text: { en: 'Check whether a binary tree is a valid binary search tree.', he: 'בדקו אם עץ בינארי הוא עץ חיפוש בינארי תקין.' },
    details: {
      description: {
        en: 'Given the root of a binary tree, return true if it is a valid binary search tree: every node in the left subtree is strictly smaller than the node, every node in the right subtree is strictly larger, and both subtrees are themselves valid.',
        he: 'נתון שורש של עץ בינארי. החזירו true אם זהו עץ חיפוש בינארי תקין: כל צומת בתת-העץ השמאלי קטן ממש מהצומת, כל צומת בתת-העץ הימני גדול ממש ממנו, ושני תתי-העצים תקינים בעצמם.',
      },
      examples: [
        {
          input: 'root = [2, 1, 3]',
          output: 'true',
        },
        {
          input: 'root = [5, 1, 4, null, null, 3, 6]\n(4 is the right child of 5 and has the children 3 and 6)',
          output: 'false',
          explanation: { en: '4 is in the right subtree of 5 but is smaller than 5. Comparing each node only with its direct children misses this.', he: '4 נמצא בתת-העץ הימני של 5 אבל קטן מ-5. השוואה של כל צומת רק עם הילדים הישירים שלו מפספסת את זה.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'data'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'The trap is checking each node only against its children: the BST rule comes from all ancestors. So I pass an open interval (low, high) down the recursion, starting from minus and plus infinity. Going left, the upper bound becomes the node\'s value; going right, the lower bound does.\nA node is valid if low < val < high and both subtrees are valid. O(n) time, O(h) space.',
      he: 'המלכודת היא לבדוק כל צומת רק מול הילדים שלו: חוק ה-BST מגיע מכל האבות. לכן מעבירים בירידה ברקורסיה טווח פתוח (low, high), שמתחיל ממינוס אינסוף עד פלוס אינסוף. כשיורדים שמאלה, הגבול העליון הופך לערך של הצומת; כשיורדים ימינה, הגבול התחתון.\nצומת תקין אם low < val < high ושני תתי-העצים תקינים. זמן O(n), מקום O(h).',
    },
    example: {
      en: 'In [5, 4, 6, null, null, 3, 7] every parent and child look fine, but 3 sits in the right subtree of 5. Its allowed range there is (5, 6), so the tree is invalid.',
      he: 'ב-[5, 4, 6, null, null, 3, 7] כל הורה וילד נראים תקינים, אבל 3 נמצא בתת-העץ הימני של 5. הטווח המותר שלו שם הוא (5, 6), ולכן העץ לא תקין.',
    },
    approach: [
      {
        en: 'Clarify: are duplicates allowed, what is the value range (it affects sentinels), and an empty tree is valid.',
        he: 'לברר: האם מותרות כפילויות, מה טווח הערכים (משפיע על ערכי הגבול), ועץ ריק הוא תקין.',
      },
      {
        en: 'Brute force: for each node, scan its subtrees for max and min. O(n^2) on a skewed tree.',
        he: 'Brute force: לכל צומת לסרוק את תתי-העצים שלו למקסימום ולמינימום. O(n^2) בעץ מוטה.',
      },
      {
        en: 'Insight: each node has a valid range inherited from its ancestors, which can be passed down.',
        he: 'התובנה: לכל צומת יש טווח חוקי שעובר בירושה מהאבות, ואפשר להעביר אותו למטה.',
      },
      {
        en: 'Algorithm: validate(node, low, high); null is true; check low < val < high; recurse with (low, val) and (val, high).',
        he: 'האלגוריתם: validate(node, low, high); null מחזיר true; בודקים low < val < high; ממשיכים עם (low, val) ועם (val, high).',
      },
      {
        en: 'Test: [2, 1, 3] is true, [5, 1, 4, null, null, 3, 6] is false, [2, 2, 2] is false.',
        he: 'בדיקה: [2, 1, 3] נותן true, [5, 1, 4, null, null, 3, 6] נותן false, [2, 2, 2] נותן false.',
      },
    ],
    keyPoints: [
      {
        en: 'Give a counterexample where local parent-child checks pass but the tree is invalid.',
        he: 'לתת דוגמה נגדית שבה בדיקה מקומית של הורה וילד עוברת, אבל העץ לא תקין.',
      },
      {
        en: 'Use strict inequalities, and ask whether duplicates are allowed.',
        he: 'להשתמש באי-שוויונות חזקים, ולשאול אם מותרות כפילויות.',
      },
      {
        en: 'Sentinel pitfall: INT_MIN or INT_MAX bounds break on those values; use long long or nullable bounds.',
        he: 'מלכודת ערכי הגבול: גבולות INT_MIN או INT_MAX נשברים על הערכים האלה; משתמשים ב-long long או בגבולות שיכולים להיות null.',
      },
      {
        en: 'Alternative: an in-order traversal must be strictly increasing; track only the previous value.',
        he: 'חלופה: סריקת in-order חייבת להיות עולה ממש; מספיק לזכור את הערך הקודם.',
      },
    ],
    extras: [
      {
        en: 'Early exit: the \'and\' short-circuits, so the right subtree is skipped once the left one fails.',
        he: 'יציאה מוקדמת: ה-and מקצר את הבדיקה, כך שתת-העץ הימני לא נבדק אחרי שהשמאלי נכשל.',
      },
      {
        en: 'Some variants allow equal keys on one side only; the strict definition rejects them.',
        he: 'יש גרסאות שמתירות ערך שווה רק בצד אחד; ההגדרה החזקה פוסלת אותו.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def is_valid_bst(root, low=float("-inf"), high=float("inf")):
    if root is None:
        return True
    if not (low < root.val < high):
        return False
    return (is_valid_bst(root.left, low, root.val) and
            is_valid_bst(root.right, root.val, high))`,
      },
      {
        language: 'cpp',
        code: `#include <climits>

struct TreeNode { int val; TreeNode* left; TreeNode* right; };

bool isValid(const TreeNode* node, long long low, long long high) {
    if (!node) return true;
    if (node->val <= low || node->val >= high) return false;
    return isValid(node->left, low, node->val) && isValid(node->right, node->val, high);
}

bool isValidBST(const TreeNode* root) { return isValid(root, LLONG_MIN, LLONG_MAX); }`,
      },
    ],
  },
  {
    id: 'q-number-of-islands',
    text: { en: 'Count the islands in a grid of land (1) and water (0).', he: 'ספרו את האיים בגריד של יבשה (1) ומים (0).' },
    details: {
      description: {
        en: 'Given an m x n grid of "1" (land) and "0" (water), count the islands. An island is a group of land cells connected horizontally or vertically; the grid is surrounded by water.',
        he: 'נתון גריד בגודל m על n של "1" (יבשה) ו-"0" (מים). ספרו את האיים. אי הוא קבוצה של תאי יבשה המחוברים אופקית או אנכית; הגריד מוקף במים.',
      },
      examples: [
        {
          input: 'grid =\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1',
          output: '3',
          explanation: { en: 'The block at the top left, the single cell in the middle and the pair at the bottom right. Diagonal cells do not connect.', he: 'הבלוק בפינה השמאלית-עליונה, התא הבודד באמצע והזוג בפינה הימנית-תחתונה. תאים באלכסון לא מחוברים.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'This is counting connected components, where each land cell is a node linked to its four neighbours. I scan the grid; every unvisited \'1\' starts a new island, so I increment the counter and flood-fill from it with BFS, turning each connected \'1\' into \'0\' so it is never counted again.\nTime is O(rows × cols), and extra space is O(rows × cols) in the worst case.',
      he: 'זו ספירת רכיבי קשירות, כשכל תא יבשה הוא צומת שמחובר לארבעת השכנים שלו. סורקים את הגריד; כל \'1\' שעוד לא ביקרנו בו פותח אי חדש, אז מגדילים את המונה ומציפים ממנו עם BFS, וכל \'1\' מחובר הופך ל-\'0\' כדי שלא ייספר שוב.\nהזמן הוא O(rows × cols), והמקום הנוסף הוא O(rows × cols) במקרה הגרוע.',
    },
    approach: [
      {
        en: 'Clarify: four-directional connectivity, can the grid be empty, may I modify it, and how large it can be.',
        he: 'לברר: קישוריות בארבעה כיוונים, האם הגריד יכול להיות ריק, האם מותר לשנות אותו, וכמה גדול הוא יכול להיות.',
      },
      {
        en: 'Insight: the first unvisited land cell is enough to count an island; sink the whole island right away.',
        he: 'התובנה: התא הראשון שלא ביקרנו בו מספיק כדי לספור אי; מטביעים מיד את כל האי.',
      },
      {
        en: 'Algorithm: loop over cells; on a \'1\', count++, then BFS, turning each reached \'1\' into \'0\' as it is enqueued.',
        he: 'האלגוריתם: עוברים על התאים; על \'1\' עושים count++, ואז BFS, וכל \'1\' שמגיעים אליו הופך ל-\'0\' כשהוא נכנס לתור.',
      },
      {
        en: 'Complexity: O(rows × cols) time, O(rows × cols) worst-case extra space.',
        he: 'סיבוכיות: זמן O(rows × cols), מקום נוסף O(rows × cols) במקרה הגרוע.',
      },
      {
        en: 'Test: the example gives 3, all water gives 0, all land gives 1, [[1,0],[0,1]] gives 2.',
        he: 'בדיקה: הדוגמה נותנת 3, כולו מים נותן 0, כולו יבשה נותן 1, [[1,0],[0,1]] נותן 2.',
      },
    ],
    keyPoints: [
      {
        en: 'Name the pattern: connected components on an implicit graph.',
        he: 'לקרוא לתבנית בשם: רכיבי קשירות בגרף מרומז.',
      },
      {
        en: 'Ask whether you may modify the grid; otherwise use a visited matrix costing O(rows × cols).',
        he: 'לשאול אם מותר לשנות את הגריד; אחרת משתמשים במטריצת visited שעולה O(rows × cols).',
      },
      {
        en: 'Mark cells visited on enqueue, not on dequeue, to avoid duplicates in the queue.',
        he: 'לסמן תאים כמבוקרים בזמן ההכנסה לתור ולא בזמן ההוצאה, כדי למנוע כפילויות בתור.',
      },
      {
        en: 'Recursive DFS on an all-land grid can overflow the stack; iterative BFS avoids it.',
        he: 'DFS רקורסיבי על גריד שכולו יבשה יכול לגרום ל-stack overflow; BFS איטרטיבי נמנע מזה.',
      },
    ],
    extras: [
      {
        en: 'In practice the BFS queue stays small, on the order of O(min(rows, cols)).',
        he: 'בפועל תור ה-BFS נשאר קטן, בסדר גודל של O(min(rows, cols)).',
      },
      {
        en: 'Union-Find is the follow-up answer when land is added dynamically and you need the count after each addition.',
        he: 'Union-Find היא התשובה לשאלת ההמשך כשמוסיפים יבשה בצורה דינמית וצריך את מספר האיים אחרי כל הוספה.',
      },
      {
        en: 'Eight-directional connectivity changes only the neighbour list.',
        he: 'קישוריות בשמונה כיוונים משנה רק את רשימת השכנים.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from collections import deque

def num_islands(grid):
    rows, cols = len(grid), len(grid[0])
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] != "1":
                continue
            count += 1
            queue = deque([(r, c)])
            grid[r][c] = "0"                        # visited
            while queue:                            # BFS flood fill
                y, x = queue.popleft()
                for ny, nx in ((y+1, x), (y-1, x), (y, x+1), (y, x-1)):
                    if 0 <= ny < rows and 0 <= nx < cols and grid[ny][nx] == "1":
                        grid[ny][nx] = "0"
                        queue.append((ny, nx))
    return count`,
      },
      {
        language: 'cpp',
        code: `#include <vector>

void sink(std::vector<std::vector<char>>& g, int r, int c) {   // DFS flood fill
    if (r < 0 || c < 0 || r >= (int)g.size() || c >= (int)g[0].size() || g[r][c] != '1') return;
    g[r][c] = '0';
    sink(g, r + 1, c); sink(g, r - 1, c); sink(g, r, c + 1); sink(g, r, c - 1);
}

int numIslands(std::vector<std::vector<char>>& grid) {
    int count = 0;
    for (int r = 0; r < (int)grid.size(); ++r)
        for (int c = 0; c < (int)grid[0].size(); ++c)
            if (grid[r][c] == '1') { ++count; sink(grid, r, c); }
    return count;
}`,
      },
    ],
  },
  {
    id: 'q-product-except-self',
    text: {
      en: 'For every index, return the product of all the other elements, without division.',
      he: 'לכל אינדקס, החזירו את מכפלת כל שאר האיברים, בלי להשתמש בחילוק.',
    },
    details: {
      description: {
        en: 'Given an integer array nums, return an array answer where answer[i] is the product of every element of nums except nums[i]. Do not use division, and aim for O(n) time.',
        he: 'נתון מערך של מספרים שלמים nums. החזירו מערך answer שבו answer[i] הוא מכפלת כל איברי nums חוץ מ-nums[i]. אל תשתמשו בחילוק, ושאפו לזמן O(n).',
      },
      examples: [
        {
          input: 'nums = [1, 2, 3, 4]',
          output: '[24, 12, 8, 6]',
          explanation: { en: 'answer[0] = 2·3·4 = 24, answer[1] = 1·3·4 = 12, and so on.', he: 'answer[0] = 2·3·4 = 24, answer[1] = 1·3·4 = 12, וכן הלאה.' },
        },
        {
          input: 'nums = [-1, 1, 0, -3, 3]',
          output: '[0, 0, 9, 0, 0]',
          explanation: { en: 'Only answer[2] skips the zero.', he: 'רק answer[2] מדלג על האפס.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Each answer is the product of everything to the left of i times everything to the right. In a first pass, left to right, I write a running prefix product into result[i], then multiply it by nums[i]. In a second pass, right to left, I multiply result[i] by a running suffix product.\nThat is O(n) time and O(1) extra space besides the output.',
      he: 'כל תשובה היא מכפלת כל מה שמשמאל ל-i כפול כל מה שמימינו. במעבר ראשון, משמאל לימין, כותבים מכפלת prefix רצה ל-result[i], ורק אחר כך מכפילים אותה ב-nums[i]. במעבר שני, מימין לשמאל, מכפילים את result[i] במכפלת suffix רצה.\nזה זמן O(n) ומקום נוסף O(1) מעבר למערך הפלט.',
    },
    example: {
      en: 'For [1, 2, 3, 4] the prefix pass gives [1, 1, 2, 6]. Multiplying by the suffixes [24, 12, 4, 1] gives [24, 12, 8, 6].',
      he: 'עבור [1, 2, 3, 4] מעבר ה-prefix נותן [1, 1, 2, 6]. הכפלה במכפלות ה-suffix [24, 12, 4, 1] נותנת [24, 12, 8, 6].',
    },
    approach: [
      {
        en: 'Clarify: can there be zeros or negatives, is the length at least 2, and does the result fit in an int.',
        he: 'לברר: האם יש אפסים או שליליים, האם האורך לפחות 2, והאם התוצאה נכנסת ב-int.',
      },
      {
        en: 'Brute force: for each i, multiply all j != i. O(n^2) time.',
        he: 'Brute force: לכל i להכפיל את כל ה-j != i. זמן O(n^2).',
      },
      {
        en: 'Insight: answer[i] = prefix product before i times suffix product after i, both built incrementally.',
        he: 'התובנה: answer[i] = מכפלת ה-prefix לפני i כפול מכפלת ה-suffix אחרי i, ושתיהן נבנות בהדרגה.',
      },
      {
        en: 'Algorithm: pass one fills prefixes with a running \'left\'; pass two multiplies in a running \'right\' backwards. O(n) time, O(1) extra.',
        he: 'האלגוריתם: מעבר ראשון ממלא prefix עם left רץ; מעבר שני הולך אחורה ומכפיל ב-right רץ. זמן O(n), מקום נוסף O(1).',
      },
      {
        en: 'Test: [1, 2, 3, 4] gives [24, 12, 8, 6]; [-1, 1, 0, -3, 3] gives [0, 0, 9, 0, 0].',
        he: 'בדיקה: [1, 2, 3, 4] נותן [24, 12, 8, 6]; [-1, 1, 0, -3, 3] נותן [0, 0, 9, 0, 0].',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why division fails: a zero makes total / nums[i] break.',
        he: 'להסביר למה חילוק נכשל: אפס שובר את total / nums[i].',
      },
      {
        en: 'Show the two-array prefix/suffix version first, then optimise to one running variable.',
        he: 'להציג קודם את גרסת ה-prefix/suffix עם שני מערכים, ואז לייעל למשתנה רץ אחד.',
      },
      {
        en: 'State the convention: the output array does not count as extra space.',
        he: 'להגיד במפורש את המוסכמה: מערך הפלט לא נחשב מקום נוסף.',
      },
      {
        en: 'Order inside each loop matters: write first, then multiply in nums[i], so no element includes itself.',
        he: 'הסדר בתוך כל לולאה חשוב: קודם כותבים ואז מכפילים ב-nums[i], כך שאף איבר לא כולל את עצמו.',
      },
    ],
    extras: [
      {
        en: 'Zeros are handled naturally: with two zeros every answer is 0.',
        he: 'אפסים מטופלים באופן טבעי: עם שני אפסים כל התשובות הן 0.',
      },
      {
        en: 'The first and last elements get an empty product of 1 on one side.',
        he: 'האיבר הראשון והאחרון מקבלים מכפלה ריקה של 1 בצד אחד.',
      },
      {
        en: 'The prefix/suffix pattern reappears in Trapping Rain Water and range-sum queries.',
        he: 'תבנית ה-prefix/suffix חוזרת ב-Trapping Rain Water ובשאילתות סכום על טווח.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    left = 1
    for i in range(n):                 # result[i] = product of nums[0..i-1]
        result[i] = left
        left *= nums[i]
    right = 1
    for i in range(n - 1, -1, -1):     # multiply in product of nums[i+1..]
        result[i] *= right
        right *= nums[i]
    return result`,
      },
      {
        language: 'cpp',
        code: `#include <vector>

std::vector<int> productExceptSelf(const std::vector<int>& nums) {
    int n = nums.size();
    std::vector<int> result(n, 1);
    int left = 1;
    for (int i = 0; i < n; ++i) { result[i] = left; left *= nums[i]; }
    int right = 1;
    for (int i = n - 1; i >= 0; --i) { result[i] *= right; right *= nums[i]; }
    return result;
}`,
      },
    ],
  },
  {
    id: 'q-longest-substring-no-repeat',
    text: { en: 'Length of the longest substring without repeating characters.', he: 'אורך תת-המחרוזת הארוכה ביותר בלי תווים חוזרים.' },
    details: {
      description: {
        en: 'Given a string s, return the length of the longest substring (contiguous characters) in which no character repeats.',
        he: 'נתונה מחרוזת s. החזירו את האורך של תת-המחרוזת הארוכה ביותר (תווים רצופים) שבה אף תו לא חוזר.',
      },
      examples: [
        {
          input: 's = "abcabcbb"',
          output: '3',
          explanation: { en: '"abc" is the longest such substring.', he: '"abc" היא תת-המחרוזת הארוכה ביותר כזו.' },
        },
        {
          input: 's = "pwwkew"',
          output: '3',
          explanation: { en: '"wke". Note that "pwke" is a subsequence, not a substring.', he: '"wke". שימו לב ש-"pwke" היא תת-סדרה, לא תת-מחרוזת.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'I use a sliding window that never contains a repeated character, plus a hash map from each character to its last index. Moving right one step at a time, if last[ch] >= left, I jump left to last[ch] + 1. Then I store last[ch] = right and update best with right - left + 1.\nBoth pointers only move forward: O(n) time and O(k) space for the alphabet.',
      he: 'משתמשים בחלון הזזה שאף פעם לא מכיל תו חוזר, ובמפת hash מכל תו לאינדקס האחרון שלו. מזיזים את right תו אחרי תו: אם last[ch] >= left, מקפיצים את left ל-last[ch] + 1. אחר כך שומרים last[ch] = right ומעדכנים את best עם right - left + 1.\nשני המצביעים רק מתקדמים, ולכן זה זמן O(n) ומקום O(k) לפי גודל האלפבית.',
    },
    example: {
      en: 'In \'pwwkew\' the second w pushes left past the first w. The best window is \'wke\', length 3.',
      he: 'ב-\'pwwkew\' ה-w השני דוחף את left אל מעבר ל-w הראשון. החלון הטוב ביותר הוא \'wke\', באורך 3.',
    },
    approach: [
      {
        en: 'Clarify: the character set, whether the string can be empty, and whether to return the length or the substring.',
        he: 'לברר: איזו קבוצת תווים, האם המחרוזת יכולה להיות ריקה, והאם להחזיר את האורך או את תת-המחרוזת.',
      },
      {
        en: 'Brute force: extend each start until a repeat appears, O(n^2).',
        he: 'Brute force: להאריך מכל נקודת התחלה עד שמופיעה חזרה, O(n^2).',
      },
      {
        en: 'Insight: on a repeat, every window starting at or before the previous occurrence is invalid, so the start jumps forward.',
        he: 'התובנה: כשיש חזרה, כל חלון שמתחיל בהופעה הקודמת או לפניה לא תקין, ולכן ההתחלה קופצת קדימה.',
      },
      {
        en: 'Algorithm: if last[ch] >= left, left = last[ch] + 1; set last[ch] = right; update best. O(n) time, O(k) space.',
        he: 'האלגוריתם: אם last[ch] >= left, אז left = last[ch] + 1; שומרים last[ch] = right; מעדכנים את best. זמן O(n), מקום O(k).',
      },
      {
        en: 'Test: \'abcabcbb\' gives 3, \'bbbbb\' gives 1, \'\' gives 0, \'abba\' gives 2.',
        he: 'בדיקה: \'abcabcbb\' נותן 3, \'bbbbb\' נותן 1, \'\' נותן 0, \'abba\' נותן 2.',
      },
    ],
    keyPoints: [
      {
        en: 'State the invariant: the window never holds a duplicate, and both pointers only move forward.',
        he: 'לנסח את האינווריאנט: בחלון אף פעם אין כפילות, ושני המצביעים רק מתקדמים.',
      },
      {
        en: 'The last[ch] >= left check is the classic bug: \'abba\' gives 3 instead of 2 without it.',
        he: 'הבדיקה last[ch] >= left היא הבאג הקלאסי: בלעדיה \'abba\' נותן 3 במקום 2.',
      },
      {
        en: 'Compare with the set version that shrinks left step by step: still O(n), but up to 2n steps.',
        he: 'להשוות לגרסה עם set שמכווצת את left צעד צעד: עדיין O(n), אבל עד 2n צעדים.',
      },
      {
        en: 'Distinguish substring (contiguous) from subsequence.',
        he: 'להבחין בין תת-מחרוזת (רציפה) לבין תת-סדרה.',
      },
    ],
    extras: [
      {
        en: 'For ASCII a fixed array of 128 entries can replace the hash map; the space bound is O(min(n, alphabet)).',
        he: 'ב-ASCII אפשר להחליף את מפת ה-hash במערך קבוע של 128 תאים; חסם המקום הוא O(min(n, alphabet)).',
      },
      {
        en: 'Follow-up: to return the substring itself, also store the start index of the best window.',
        he: 'שאלת המשך: כדי להחזיר את תת-המחרוזת עצמה, שומרים גם את אינדקס ההתחלה של החלון הטוב ביותר.',
      },
      {
        en: 'Edge cases: an empty string returns 0, all identical characters return 1.',
        he: 'מקרי קצה: מחרוזת ריקה מחזירה 0, וכשכל התווים זהים מחזירים 1.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def length_of_longest_substring(s):
    last = {}                            # char -> last index seen
    left = best = 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1          # shrink past the previous occurrence
        last[ch] = right
        best = max(best, right - left + 1)
    return best`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <string>
#include <unordered_map>

int lengthOfLongestSubstring(const std::string& s) {
    std::unordered_map<char, int> last;
    int left = 0, best = 0;
    for (int right = 0; right < (int)s.size(); ++right) {
        auto it = last.find(s[right]);
        if (it != last.end() && it->second >= left) left = it->second + 1;
        last[s[right]] = right;
        best = std::max(best, right - left + 1);
    }
    return best;
}`,
      },
    ],
  },
  {
    id: 'q-group-anagrams',
    text: { en: 'Group the anagrams in a list of words.', he: 'קבצו יחד את האנגרמות ברשימת מילים.' },
    details: {
      description: {
        en: 'Given a list of words, group the words that are anagrams of each other. Return the groups in any order.',
        he: 'נתונה רשימת מילים. קבצו יחד מילים שהן אנגרמות זו של זו. החזירו את הקבוצות בכל סדר.',
      },
      examples: [
        {
          input: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
          output: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]',
        },
      ],
      constraints: [
        { en: 'Lowercase English letters; think about which key identifies a group', he: 'אותיות אנגליות קטנות; חשבו איזה מפתח מזהה קבוצה' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Anagrams share the same letters with the same counts, so I map every word to a canonical key: its letters sorted. \'eat\', \'tea\' and \'ate\' all become \'aet\'. A hash map from key to a list of words does the grouping, and its values are the answer.\nWith n words of length up to k, time is O(n · k log k) and space is O(n · k).',
      he: 'לאנגרמות יש אותן אותיות באותן כמויות, ולכן ממפים כל מילה למפתח קנוני: האותיות שלה ממוינות. \'eat\', \'tea\' ו-\'ate\' כולן הופכות ל-\'aet\'. מפת hash ממפתח לרשימת מילים עושה את הקיבוץ, והערכים שלה הם התשובה.\nעם n מילים באורך עד k, הזמן הוא O(n · k log k) והמקום O(n · k).',
    },
    approach: [
      {
        en: 'Clarify: lowercase letters only, can words be empty or repeated, and does output order matter.',
        he: 'לברר: רק אותיות קטנות, האם מילים יכולות להיות ריקות או לחזור, והאם סדר הפלט חשוב.',
      },
      {
        en: 'Brute force: compare every pair with an anagram check and merge groups, O(n^2 · k).',
        he: 'Brute force: להשוות כל זוג עם בדיקת אנגרמה ולאחד לקבוצות, O(n^2 · k).',
      },
      {
        en: 'Insight: map each word to a key shared by all its anagrams and let a hash map group them.',
        he: 'התובנה: ממפים כל מילה למפתח שמשותף לכל האנגרמות שלה, ומפת hash מקבצת אותן.',
      },
      {
        en: 'Algorithm: key = sorted letters; append the word to groups[key]; return the values. O(n · k log k) time.',
        he: 'האלגוריתם: key = האותיות ממוינות; מוסיפים את המילה ל-groups[key]; מחזירים את הערכים. זמן O(n · k log k).',
      },
      {
        en: 'Test: the example gives three groups, [\'\'] gives [[\'\']], [\'ab\', \'ba\', \'abc\'] gives two groups.',
        he: 'בדיקה: הדוגמה נותנת שלוש קבוצות, [\'\'] נותן [[\'\']], [\'ab\', \'ba\', \'abc\'] נותן שתי קבוצות.',
      },
    ],
    keyPoints: [
      {
        en: 'Frame it as \'find a canonical key, then group by it with a hash map\', a reusable pattern.',
        he: 'להציג את זה כ\'מוצאים מפתח קנוני ומקבצים לפיו עם מפת hash\', תבנית שחוזרת.',
      },
      {
        en: 'Give complexity in both n and k; saying only O(n log n) is a common slip.',
        he: 'לתת סיבוכיות גם לפי n וגם לפי k; להגיד רק O(n log n) זו טעות נפוצה.',
      },
      {
        en: 'Offer a 26-count key for O(n · k), with separators or a tuple so counts stay unambiguous.',
        he: 'להציע מפתח של ספירת 26 אותיות עבור O(n · k), עם מפרידים או tuple כדי שהמפתח יהיה חד-משמעי.',
      },
      {
        en: 'Ask about the character set: with Unicode or mixed case, the sorted key is the safe choice.',
        he: 'לשאול על קבוצת התווים: ב-Unicode או באותיות גדולות וקטנות, המפתח הממוין הוא הבחירה הבטוחה.',
      },
    ],
    extras: [
      {
        en: 'Without separators, count strings like 1,11 and 11,1 would collide into the same key.',
        he: 'בלי מפרידים, מחרוזות ספירה כמו 1,11 ו-11,1 יתנגשו לאותו מפתח.',
      },
      {
        en: 'A product-of-primes key works in theory but overflows quickly on long words; reject it explicitly.',
        he: 'מפתח של מכפלת מספרים ראשוניים עובד בתיאוריה, אבל גולש מהר במילים ארוכות; כדאי לפסול אותו במפורש.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        groups["".join(sorted(word))].append(word)   # key: sorted letters
    return list(groups.values())`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <string>
#include <unordered_map>
#include <vector>

std::vector<std::vector<std::string>> groupAnagrams(const std::vector<std::string>& words) {
    std::unordered_map<std::string, std::vector<std::string>> groups;
    for (const auto& word : words) {
        std::string key = word;
        std::sort(key.begin(), key.end());
        groups[key].push_back(word);
    }
    std::vector<std::vector<std::string>> result;
    for (auto& [key, group] : groups) result.push_back(std::move(group));
    return result;
}`,
      },
    ],
  },
  {
    id: 'q-kth-largest',
    text: { en: 'Find the k-th largest element in an unsorted array.', he: 'מצאו את האיבר ה-k הכי גדול במערך לא ממוין.' },
    details: {
      description: {
        en: 'Given an unsorted integer array nums and an integer k, return the k-th largest element in sorted order (not the k-th distinct element).',
        he: 'נתונים מערך לא ממוין של מספרים שלמים nums ומספר k. החזירו את האיבר ה-k בגודלו לפי סדר ממוין (לא האיבר ה-k השונה).',
      },
      examples: [
        {
          input: 'nums = [3, 2, 1, 5, 6, 4], k = 2',
          output: '5',
        },
        {
          input: 'nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4',
          output: '4',
          explanation: { en: 'Sorted descending: 6, 5, 5, 4, ... so the 4th is 4.', he: 'בסדר יורד: 6, 5, 5, 4, ... ולכן הרביעי הוא 4.' },
        },
      ],
      constraints: [
        { en: 'Can you do better than sorting the whole array?', he: 'האם אפשר לעשות טוב יותר ממיון של כל המערך?' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'I keep a min-heap of at most k elements. I push every number, and whenever the size passes k I pop the smallest. The heap then holds the k largest values seen so far, and its root, the smallest of them, is the k-th largest.\nEach push and pop costs O(log k), so time is O(n log k) and space O(k), better than sorting in O(n log n).',
      he: 'מחזיקים min-heap עם לכל היותר k איברים. דוחפים כל מספר, וכשהגודל עובר את k מוציאים את הקטן ביותר. כך ה-heap מחזיק את k הערכים הגדולים שראינו, והשורש שלו, הקטן מביניהם, הוא האיבר ה-k בגודלו.\nכל push ו-pop עולים O(log k), ולכן הזמן הוא O(n log k) והמקום O(k), טוב יותר ממיון ב-O(n log n).',
    },
    example: {
      en: 'For [3, 2, 1, 5, 6, 4] with k = 2, the heap ends holding 5 and 6, and its root 5 is the answer.',
      he: 'עבור [3, 2, 1, 5, 6, 4] עם k = 2, ה-heap מסיים עם 5 ו-6, והשורש שלו, 5, הוא התשובה.',
    },
    approach: [
      {
        en: 'Clarify: 1 ≤ k ≤ n, duplicates count separately, may I modify the array, and is the data a stream.',
        he: 'לברר: 1 ≤ k ≤ n, כפילויות נספרות בנפרד, האם מותר לשנות את המערך, והאם הנתונים הם stream.',
      },
      {
        en: 'Brute force: sort descending and return index k - 1, O(n log n).',
        he: 'Brute force: למיין בסדר יורד ולהחזיר את האינדקס k - 1, O(n log n).',
      },
      {
        en: 'Insight: only the top k matter, and their smallest is the answer, which a min-heap exposes in O(1).',
        he: 'התובנה: רק k הגדולים חשובים, והקטן מביניהם הוא התשובה, ו-min-heap חושף אותו ב-O(1).',
      },
      {
        en: 'Algorithm: push each number; if size exceeds k, pop; return the root. O(n log k) time, O(k) space.',
        he: 'האלגוריתם: דוחפים כל מספר; אם הגודל עובר את k מוציאים; מחזירים את השורש. זמן O(n log k), מקום O(k).',
      },
      {
        en: 'Test: [3, 2, 1, 5, 6, 4] with k = 2 gives 5; k = 1 gives the max.',
        he: 'בדיקה: [3, 2, 1, 5, 6, 4] עם k = 2 נותן 5; k = 1 נותן את המקסימום.',
      },
    ],
    keyPoints: [
      {
        en: 'Use a min-heap, not a max-heap: mixing them up is the classic slip.',
        he: 'להשתמש ב-min-heap ולא ב-max-heap: בלבול ביניהם הוא הטעות הקלאסית.',
      },
      {
        en: 'Compare: sort O(n log n), heap O(n log k), quickselect O(n) average and O(n^2) worst.',
        he: 'להשוות: מיון O(n log n), heap O(n log k), quickselect O(n) בממוצע ו-O(n^2) במקרה הגרוע.',
      },
      {
        en: 'The heap works on streaming data with O(k) memory; quickselect needs and reorders the whole array.',
        he: 'ה-heap עובד על נתונים זורמים עם O(k) זיכרון; quickselect צריך את כל המערך ומשנה את הסדר שלו.',
      },
      {
        en: 'Know your library: Python heapq is a min-heap; C++ priority_queue needs std::greater for one.',
        he: 'להכיר את הספרייה: heapq ב-Python הוא min-heap; ב-priority_queue של C++ צריך std::greater כדי לקבל min-heap.',
      },
    ],
    extras: [
      {
        en: 'Quickselect partitions around a pivot and continues only into the side containing index n - k; a random pivot is essential.',
        he: 'quickselect עושה partition סביב pivot וממשיך רק לצד שמכיל את האינדקס n - k; pivot אקראי הכרחי.',
      },
      {
        en: 'Median-of-medians guarantees O(n) even in the worst case.',
        he: 'median-of-medians מבטיח O(n) גם במקרה הגרוע.',
      },
      {
        en: 'Duplicates count separately: this is the k-th largest in sorted order, not the k-th distinct value.',
        he: 'כפילויות נספרות בנפרד: מחפשים את ה-k בגודלו בסדר הממוין, ולא את הערך השונה ה-k.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `import heapq

def kth_largest(nums, k):
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)          # drop the smallest: keep the k largest
    return heap[0]                       # or: heapq.nlargest(k, nums)[-1]`,
      },
      {
        language: 'cpp',
        code: `#include <functional>
#include <queue>
#include <vector>

int findKthLargest(const std::vector<int>& nums, int k) {
    std::priority_queue<int, std::vector<int>, std::greater<int>> heap;   // min-heap
    for (int n : nums) {
        heap.push(n);
        if ((int)heap.size() > k) heap.pop();
    }
    return heap.top();
}`,
      },
    ],
  },
  {
    id: 'q-min-stack',
    text: { en: 'Design a stack whose getMin() runs in O(1).', he: 'תכננו מחסנית שבה getMin() רץ ב-O(1).' },
    details: {
      description: {
        en: 'Design a stack that supports push, pop, top and getMin, where getMin returns the smallest element currently in the stack. Every operation must run in O(1).',
        he: 'תכננו מחסנית שתומכת ב-push, pop, top ו-getMin, כאשר getMin מחזיר את האיבר הקטן ביותר שנמצא כרגע במחסנית. כל פעולה חייבת לרוץ ב-O(1).',
      },
      examples: [
        {
          input: 'push(-2); push(0); push(-3); getMin(); pop(); top(); getMin()',
          output: 'getMin() = -3, top() = 0, getMin() = -2',
          explanation: { en: 'After popping -3 the minimum goes back to -2, so a single "current minimum" variable is not enough.', he: 'אחרי הוצאת -3 המינימום חוזר להיות -2, ולכן משתנה יחיד של "המינימום הנוכחי" לא מספיק.' },
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'embedded', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'One min variable is not enough: after popping the minimum, you no longer know the previous one. So I keep a second stack in sync. On push, the main stack gets the value and the min stack gets min(value, mins.top). On pop, I pop both.\ntop reads the main stack and getMin reads the min stack. Every operation is O(1), with O(n) space.',
      he: 'משתנה מינימום אחד לא מספיק: אחרי שמוציאים את המינימום, כבר לא יודעים מה היה הקודם. לכן מחזיקים מחסנית שנייה מסונכרנת. ב-push המחסנית הראשית מקבלת את הערך, ומחסנית המינימום מקבלת min(value, mins.top). ב-pop מוציאים משתיהן.\ntop קורא מהמחסנית הראשית ו-getMin ממחסנית המינימום. כל פעולה היא O(1), עם מקום O(n).',
    },
    example: {
      en: 'Push -2, 0, -3: the min stack is [-2, -2, -3], so getMin returns -3. After one pop it is [-2, -2], and getMin returns -2.',
      he: 'דוחפים -2, 0, -3: מחסנית המינימום היא [-2, -2, -3], ולכן getMin מחזיר -3. אחרי pop אחד היא [-2, -2], ו-getMin מחזיר -2.',
    },
    approach: [
      {
        en: 'Clarify: integer values, duplicates allowed, behaviour on an empty stack, and whether memory is tight.',
        he: 'לברר: ערכים שלמים, כפילויות מותרות, מה קורה על מחסנית ריקה, והאם הזיכרון מוגבל.',
      },
      {
        en: 'Brute force: getMin scans the whole stack, O(n), which breaks the requirement.',
        he: 'Brute force: getMin סורק את כל המחסנית, O(n), וזה מפר את הדרישה.',
      },
      {
        en: 'Insight: pop restores the exact previous state, so the history of minimums is itself a stack.',
        he: 'התובנה: pop מחזיר בדיוק את המצב הקודם, ולכן ההיסטוריה של המינימומים היא בעצמה מחסנית.',
      },
      {
        en: 'Algorithm: push writes value and min(value, mins.top); pop pops both; top and getMin read the tops. All O(1).',
        he: 'האלגוריתם: push כותב את value ואת min(value, mins.top); pop מוציא משתיהן; top ו-getMin קוראים את הראשים. הכל O(1).',
      },
      {
        en: 'Test: push -2, 0, -3, getMin is -3, pop, getMin is -2; also push 1, 1, pop, getMin is still 1.',
        he: 'בדיקה: push -2, 0, -3, getMin נותן -3, pop, getMin נותן -2; וגם push 1, 1, pop, ו-getMin עדיין 1.',
      },
    ],
    keyPoints: [
      {
        en: 'The invariant: mins[i] is the minimum of items[0..i], so both stacks stay in sync.',
        he: 'האינווריאנט: mins[i] הוא המינימום של items[0..i], ולכן שתי המחסניות נשארות מסונכרנות.',
      },
      {
        en: 'A stack only changes at the top, so pop restores exactly the previous minimum.',
        he: 'מחסנית משתנה רק בראש, ולכן pop מחזיר בדיוק את המינימום הקודם.',
      },
      {
        en: 'In the space-saving variant, push to the min stack on value ≤ min, not <, or duplicate minimums break.',
        he: 'בגרסה החסכונית דוחפים למחסנית המינימום כש-value ≤ min ולא <, אחרת מינימום כפול נשבר.',
      },
      {
        en: 'Discuss empty-stack behaviour: throw, return an error code, or document a precondition.',
        he: 'לדון בהתנהגות על מחסנית ריקה: לזרוק חריגה, להחזיר קוד שגיאה, או לתעד תנאי מוקדם.',
      },
    ],
    extras: [
      {
        en: 'Storing (value, minSoFar) pairs in a single stack is the same idea.',
        he: 'שמירת זוגות (value, minSoFar) במחסנית אחת היא אותו רעיון.',
      },
      {
        en: 'In the space-saving variant, pop from the min stack only when the popped value equals its top.',
        he: 'בגרסה החסכונית מוציאים ממחסנית המינימום רק כשהערך שיוצא שווה לראש שלה.',
      },
      {
        en: 'An O(1)-extra-space trick stores encoded values like 2·value - min; mention it and its overflow risk, do not lead with it.',
        he: 'טריק עם O(1) מקום נוסף שומר ערכים מקודדים כמו 2·value - min; כדאי להזכיר אותו ואת סיכון ה-overflow, ולא להתחיל ממנו.',
      },
      {
        en: 'Follow-up: two min-stacks make a min-queue with amortised O(1) getMin, useful for sliding-window minimums.',
        he: 'שאלת המשך: משתי min-stacks בונים min-queue עם getMin ב-O(1) אמורטייזד, שימושי למינימום בחלון הזזה.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `class MinStack:
    def __init__(self):
        self.items = []
        self.mins = []                       # mins[-1] = minimum of items

    def push(self, value):
        self.items.append(value)
        self.mins.append(min(value, self.mins[-1]) if self.mins else value)

    def pop(self):
        self.mins.pop()
        return self.items.pop()

    def top(self):
        return self.items[-1]

    def get_min(self):
        return self.mins[-1]`,
      },
      {
        language: 'cpp',
        code: `#include <algorithm>
#include <stack>

class MinStack {
    std::stack<int> items, mins;
public:
    void push(int value) {
        items.push(value);
        mins.push(mins.empty() ? value : std::min(value, mins.top()));
    }
    void pop() { items.pop(); mins.pop(); }
    int top() const { return items.top(); }
    int getMin() const { return mins.top(); }
};`,
      },
    ],
  },
  {
    id: 'q-missing-number',
    text: {
      en: 'Find the missing number: an array holds n distinct numbers from 0..n, one is absent.',
      he: 'מצאו את המספר החסר: מערך עם n מספרים שונים מתוך 0..n, שאחד מהם חסר.',
    },
    details: {
      description: {
        en: 'Given an array nums containing n distinct numbers taken from the range 0..n, exactly one number of the range is missing. Return it.',
        he: 'נתון מערך nums שמכיל n מספרים שונים מתוך הטווח 0..n. בדיוק מספר אחד מהטווח חסר. החזירו אותו.',
      },
      examples: [
        {
          input: 'nums = [3, 0, 1]',
          output: '2',
          explanation: { en: 'n = 3, so the range is 0..3 and 2 is absent.', he: 'n = 3, ולכן הטווח הוא 0..3 ו-2 חסר.' },
        },
        {
          input: 'nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]',
          output: '8',
        },
      ],
      constraints: [
        { en: 'Aim for O(n) time and O(1) extra space', he: 'שאפו לזמן O(n) ולזיכרון נוסף O(1)' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'verification', 'qa', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Two tricks give O(n) time and O(1) space. Sum: 0..n adds up to n(n+1)/2, so subtracting the array\'s sum leaves the missing number, but it can overflow in fixed-width types.\nXOR avoids that: start with result = n, and for each i do result ^= i ^ nums[i]. Every present number appears twice and cancels, leaving only the missing one.',
      he: 'שני טריקים נותנים זמן O(n) ומקום O(1). סכום: המספרים 0..n מסתכמים ל-n(n+1)/2, ולכן אחרי שמחסירים את סכום המערך נשאר המספר החסר, אבל בטיפוסים ברוחב קבוע זה יכול לגרום ל-overflow.\nXOR נמנע מזה: מתחילים עם result = n, ולכל i עושים result ^= i ^ nums[i]. כל מספר שקיים מופיע פעמיים ומתבטל, ורק החסר נשאר.',
    },
    example: {
      en: 'For [3, 0, 1] the expected sum is 6 and the actual sum is 4, so 2 is missing. XOR of 3, the indices 0, 1, 2 and the values 3, 0, 1 also leaves 2.',
      he: 'עבור [3, 0, 1] הסכום הצפוי הוא 6 והסכום בפועל 4, ולכן 2 חסר. XOR של 3, של האינדקסים 0, 1, 2 ושל הערכים 3, 0, 1 גם משאיר 2.',
    },
    approach: [
      {
        en: 'Clarify: values are distinct, exactly one is missing, the range is 0..n, and may the input be modified.',
        he: 'לברר: הערכים שונים, בדיוק אחד חסר, הטווח הוא 0..n, והאם מותר לשנות את הקלט.',
      },
      {
        en: 'Brute force: search the array for each candidate, O(n^2); a hash set or sorting is better but not optimal.',
        he: 'Brute force: לחפש במערך כל מועמד, O(n^2); set של hash או מיון טובים יותר אבל לא אופטימליים.',
      },
      {
        en: 'Insight: we know the full set, so compare an aggregate of the range with the array\'s, using sum or XOR.',
        he: 'התובנה: אנחנו יודעים מה הקבוצה המלאה, אז משווים צבירה של הטווח לצבירה של המערך, עם סכום או XOR.',
      },
      {
        en: 'Algorithm: result = n; for each i, result ^= i ^ nums[i]; return result. O(n) time, O(1) space.',
        he: 'האלגוריתם: result = n; לכל i, result ^= i ^ nums[i]; מחזירים את result. זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: [3, 0, 1] gives 2, [0, 1] gives 2, [1] gives 0.',
        he: 'בדיקה: [3, 0, 1] נותן 2, [0, 1] נותן 2, [1] נותן 0.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain XOR from its properties: x ^ x = 0, x ^ 0 = x, and order does not matter.',
        he: 'להסביר את XOR מתוך התכונות שלו: x ^ x = 0, x ^ 0 = x, והסדר לא משנה.',
      },
      {
        en: 'Raise sum overflow in C, C++ or Java and note that XOR avoids it, important for embedded roles.',
        he: 'להעלות את ה-overflow של הסכום ב-C, C++ או Java ולציין ש-XOR נמנע ממנו, חשוב לתפקידי embedded.',
      },
      {
        en: 'Do not forget n itself, which has no matching index; starting result at n handles it.',
        he: 'לא לשכוח את n עצמו, שאין לו אינדקס מתאים; התחלה של result מ-n מטפלת בזה.',
      },
      {
        en: 'Check the edges: missing 0, as in [1], and missing n, as in [0, 1].',
        he: 'לבדוק את הקצוות: חסר 0, כמו ב-[1], וחסר n, כמו ב-[0, 1].',
      },
    ],
    extras: [
      {
        en: 'Simpler but weaker options: a hash set costs O(n) extra space, sorting costs O(n log n) time.',
        he: 'אפשרויות פשוטות וחלשות יותר: set של hash עולה O(n) מקום נוסף, ומיון עולה O(n log n) זמן.',
      },
      {
        en: 'Cyclic sort or sign marking by index also works in place, but modifies the input.',
        he: 'גם cyclic sort או סימון לפי אינדקס עובדים במקום, אבל משנים את הקלט.',
      },
      {
        en: 'Two missing numbers: XOR gives a ^ b; any set bit splits the numbers into two groups, and XOR-ing each group yields a and b.',
        he: 'שני מספרים חסרים: XOR נותן a ^ b; כל ביט דלוק בו מחלק את המספרים לשתי קבוצות, ו-XOR של כל קבוצה נותן את a ואת b.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def missing_number(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)

def missing_number_xor(nums):
    result = len(nums)
    for i, n in enumerate(nums):
        result ^= i ^ n                  # pairs cancel out
    return result`,
      },
      {
        language: 'c',
        code: `int missing_number(const int* nums, int n) {   /* n values from 0..n, one missing */
    int result = n;
    for (int i = 0; i < n; i++) result ^= i ^ nums[i];
    return result;
}`,
      },
      {
        language: 'cpp',
        code: `#include <vector>

int missingNumber(const std::vector<int>& nums) {
    int result = nums.size();
    for (int i = 0; i < (int)nums.size(); ++i) result ^= i ^ nums[i];
    return result;
}`,
      },
    ],
  },
  {
    id: 'q-search-rotated-array',
    text: {
      en: 'Search in a rotated sorted array: return the index of a target in O(log n).',
      he: 'חיפוש במערך ממוין שעבר סיבוב: החזירו את האינדקס של target ב-O(log n).',
    },
    details: {
      description: {
        en: 'An array of distinct integers was sorted in ascending order and then rotated at some unknown index: for example [1, 2, 4, 5, 7, 9, 12] became [7, 9, 12, 1, 2, 4, 5]. Given the rotated array nums and an integer target, return the index of target in nums, or -1 if it is not present. Your algorithm must run in O(log n).',
        he: 'מערך של מספרים שלמים שונים היה ממוין בסדר עולה ואז עבר סיבוב באינדקס לא ידוע: למשל [1, 2, 4, 5, 7, 9, 12] הפך ל-[7, 9, 12, 1, 2, 4, 5]. נתונים המערך המסובב nums ומספר target. החזירו את האינדקס של target ב-nums, או -1 אם אינו קיים. האלגוריתם חייב לרוץ ב-O(log n).',
      },
      rules: [
        { en: 'A plain scan of the array is O(n) and does not count: the point is to keep binary search working although the array is no longer sorted end to end.', he: 'מעבר פשוט על המערך הוא O(n) ולא נחשב: המטרה היא לשמור על חיפוש בינארי למרות שהמערך כבר לא ממוין מתחילתו ועד סופו.' },
      ],
      examples: [
        {
          input: 'nums = [7, 9, 12, 1, 2, 4, 5], target = 4',
          output: '5',
          explanation: { en: 'nums[5] = 4.', he: 'nums[5] = 4.' },
        },
        {
          input: 'nums = [7, 9, 12, 1, 2, 4, 5], target = 3',
          output: '-1',
          explanation: { en: '3 is not in the array.', he: '3 לא נמצא במערך.' },
        },
        {
          input: 'nums = [1, 2, 3], target = 3',
          output: '2',
          explanation: { en: 'A rotation by zero positions is allowed: the array may still be fully sorted.', he: 'סיבוב ב-0 מקומות מותר: המערך יכול להיות ממוין לגמרי.' },
        },
      ],
      constraints: [
        { en: 'All values are distinct', he: 'כל הערכים שונים זה מזה' },
        { en: '1 ≤ nums.length ≤ 5000', he: '1 ≤ nums.length ≤ 5000' },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'If you split a rotated sorted range at mid, at least one half is always sorted. So in each binary search step I check nums[lo] <= nums[mid] to find the sorted half, then use a range check to see whether the target lies inside it. If it does, I search that half; otherwise, the other one.\nEach step discards half the range: O(log n) time, O(1) space.',
      he: 'אם חותכים טווח ממוין שעבר סיבוב ב-mid, לפחות חצי אחד תמיד ממוין. לכן בכל צעד של החיפוש הבינארי בודקים nums[lo] <= nums[mid] כדי לזהות את החצי הממוין, ואז בדיקת טווח אומרת אם ה-target נמצא בו. אם כן, ממשיכים לחצי הזה; אחרת, לחצי השני.\nבכל צעד זורקים חצי מהטווח: זמן O(log n), מקום O(1).',
    },
    example: {
      en: 'Searching 4 in [7, 9, 12, 1, 2, 4, 5]: mid holds 1, and since 7 > 1 the right half [1, 2, 4, 5] is sorted. 4 is in its range, so we go right.',
      he: 'מחפשים 4 ב-[7, 9, 12, 1, 2, 4, 5]: ב-mid נמצא 1, ומכיוון ש-7 > 1 החצי הימני [1, 2, 4, 5] ממוין. 4 בטווח שלו, אז ממשיכים ימינה.',
    },
    approach: [
      {
        en: 'Clarify: distinct values, the rotation may be zero, the array is non-empty, return -1 if absent.',
        he: 'לברר: ערכים שונים, הסיבוב יכול להיות אפס, המערך לא ריק, ומחזירים -1 אם ה-target לא קיים.',
      },
      {
        en: 'Brute force: a linear scan, O(n), which ignores the sorted structure.',
        he: 'Brute force: סריקה לינארית, O(n), שמתעלמת מהמבנה הממוין.',
      },
      {
        en: 'Insight: splitting at mid always leaves one sorted half, and two comparisons decide if the target is inside.',
        he: 'התובנה: חיתוך ב-mid תמיד משאיר חצי ממוין אחד, ושתי השוואות מחליטות אם ה-target בפנים.',
      },
      {
        en: 'Algorithm: return on a match; find the sorted half; range-check the target; move lo or hi. O(log n) time.',
        he: 'האלגוריתם: מחזירים כשיש התאמה; מזהים את החצי הממוין; בודקים טווח ל-target; מזיזים את lo או את hi. זמן O(log n).',
      },
      {
        en: 'Test: [7, 9, 12, 1, 2, 4, 5] with 4 gives 5, with 3 gives -1; also [3, 1] with 1.',
        he: 'בדיקה: [7, 9, 12, 1, 2, 4, 5] עם 4 נותן 5, עם 3 נותן -1; וגם [3, 1] עם 1.',
      },
    ],
    keyPoints: [
      {
        en: 'State the invariant: one half is always sorted, and range checks are reliable only there.',
        he: 'לנסח את האינווריאנט: חצי אחד תמיד ממוין, ובדיקות טווח אמינות רק בו.',
      },
      {
        en: 'Boundaries are where candidates fail: <= in nums[lo] <= nums[mid] matters when lo == mid.',
        he: 'בגבולות מועמדים נכשלים: ה-<= ב-nums[lo] <= nums[mid] חשוב כש-lo == mid.',
      },
      {
        en: 'Use mid = lo + (hi - lo) / 2 in C++ or Java to avoid overflow.',
        he: 'להשתמש ב-mid = lo + (hi - lo) / 2 ב-C++ או Java כדי להימנע מ-overflow.',
      },
      {
        en: 'With duplicates, nums[lo] == nums[mid] == nums[hi] hides the sorted side; shrink both ends, worst case O(n).',
        he: 'עם כפילויות, nums[lo] == nums[mid] == nums[hi] מסתיר את הצד הממוין; מצמצמים את שני הקצוות, ובמקרה הגרוע O(n).',
      },
    ],
    extras: [
      {
        en: 'Alternative: binary search for the rotation point (the minimum\'s index), then a normal binary search in the right part. Still O(log n).',
        he: 'חלופה: חיפוש בינארי של נקודת הסיבוב (האינדקס של המינימום), ואז חיפוש בינארי רגיל בחלק הנכון. עדיין O(log n).',
      },
      {
        en: 'Watch the bounds: nums[lo] <= target < nums[mid] on the left, nums[mid] < target <= nums[hi] on the right.',
        he: 'לשים לב לגבולות: nums[lo] <= target < nums[mid] משמאל, nums[mid] < target <= nums[hi] מימין.',
      },
      {
        en: 'A zero rotation, a plain sorted array, needs no special handling.',
        he: 'סיבוב של אפס, כלומר מערך ממוין רגיל, לא דורש טיפול מיוחד.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:                    # left half is sorted
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:                                        # right half is sorted
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1`,
      },
      {
        language: 'cpp',
        code: `#include <vector>

int search(const std::vector<int>& nums, int target) {
    int lo = 0, hi = (int)nums.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] == target) return mid;
        if (nums[lo] <= nums[mid]) {                          // left half sorted
            if (nums[lo] <= target && target < nums[mid]) hi = mid - 1; else lo = mid + 1;
        } else {                                              // right half sorted
            if (nums[mid] < target && target <= nums[hi]) lo = mid + 1; else hi = mid - 1;
        }
    }
    return -1;
}`,
      },
    ],
  },
  {
    id: 'q-coin-change',
    text: {
      en: 'Coin change: the fewest coins that add up to a given amount.',
      he: 'עודף במטבעות: מספר המטבעות הקטן ביותר שמרכיב סכום נתון.',
    },
    details: {
      description: {
        en: 'You are given coin denominations coins (unlimited supply of each) and an integer amount. Return the fewest coins needed to make up exactly that amount, or -1 if it cannot be done.',
        he: 'נתונים ערכי מטבעות coins (כמות בלתי מוגבלת מכל סוג) ומספר שלם amount. החזירו את מספר המטבעות הקטן ביותר שמרכיב בדיוק את הסכום, או -1 אם זה בלתי אפשרי.',
      },
      rules: [
        { en: 'Greedy (always take the largest coin) fails, e.g. coins = [1, 3, 4], amount = 6: greedy gives 4+1+1 but 3+3 is better.', he: 'גישה חמדנית (תמיד לקחת את המטבע הגדול) נכשלת, למשל coins = [1, 3, 4], amount = 6: החמדן נותן 4+1+1 אבל 3+3 עדיף.' },
      ],
      examples: [
        {
          input: 'coins = [1, 2, 5], amount = 11',
          output: '3',
          explanation: { en: '11 = 5 + 5 + 1.', he: '11 = 5 + 5 + 1.' },
        },
        {
          input: 'coins = [2], amount = 3',
          output: '-1',
          explanation: { en: 'An odd amount cannot be made from 2s.', he: 'אי אפשר להרכיב סכום אי-זוגי ממטבעות של 2.' },
        },
        {
          input: 'coins = [1], amount = 0',
          output: '0',
        },
      ],
    },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Greedy fails in general, so I use dynamic programming. dp[a] is the fewest coins that sum exactly to a, with dp[0] = 0 and every other entry starting at infinity. For each amount a and each coin c ≤ a, dp[a] = min(dp[a], dp[a - c] + 1).\nIf dp[amount] is still infinity, I return -1. Time is O(amount × coins), space O(amount).',
      he: 'גישה חמדנית נכשלת באופן כללי, ולכן משתמשים בתכנות דינמי. dp[a] הוא מספר המטבעות הקטן ביותר שמסתכם בדיוק ל-a, עם dp[0] = 0 וכל השאר מתחילים באינסוף. לכל סכום a ולכל מטבע c ≤ a, dp[a] = min(dp[a], dp[a - c] + 1).\nאם dp[amount] עדיין אינסוף, מחזירים -1. הזמן הוא O(amount × coins), והמקום O(amount).',
    },
    example: {
      en: 'With coins [1, 3, 4] and amount 6, greedy takes 4 + 1 + 1, three coins, while 3 + 3 needs only two. The DP finds the two.',
      he: 'עם מטבעות [1, 3, 4] וסכום 6, החמדן לוקח 4 + 1 + 1, שלושה מטבעות, בזמן ש-3 + 3 צריך רק שניים. ה-DP מוצא את השניים.',
    },
    approach: [
      {
        en: 'Clarify: unlimited coins of each type, all positive, amount can be 0, return -1 if impossible.',
        he: 'לברר: כמות בלתי מוגבלת מכל מטבע, כולם חיוביים, amount יכול להיות 0, ומחזירים -1 אם זה בלתי אפשרי.',
      },
      {
        en: 'Brute force: try every coin recursively, exponential; also show greedy fails on [1, 3, 4] with 6.',
        he: 'Brute force: לנסות כל מטבע ברקורסיה, אקספוננציאלי; ובנוסף להראות שהחמדן נכשל על [1, 3, 4] עם 6.',
      },
      {
        en: 'Insight: the answer for a depends only on smaller amounts a - c, so a table by amount removes repetition.',
        he: 'התובנה: התשובה עבור a תלויה רק בסכומים קטנים יותר a - c, ולכן טבלה לפי סכום מבטלת חזרות.',
      },
      {
        en: 'Algorithm: dp[0] = 0, rest infinity; dp[a] = min over coins of dp[a - coin] + 1. O(amount × coins) time.',
        he: 'האלגוריתם: dp[0] = 0, השאר אינסוף; dp[a] = המינימום על המטבעות של dp[a - coin] + 1. זמן O(amount × coins).',
      },
      {
        en: 'Test: [1, 2, 5] with 11 gives 3; [2] with 3 gives -1; [1] with 0 gives 0.',
        he: 'בדיקה: [1, 2, 5] עם 11 נותן 3; [2] עם 3 נותן -1; [1] עם 0 נותן 0.',
      },
    ],
    keyPoints: [
      {
        en: 'Disprove greedy with a concrete counterexample before writing the DP.',
        he: 'להפריך את החמדן עם דוגמה נגדית קונקרטית לפני שכותבים את ה-DP.',
      },
      {
        en: 'Define the state in words and the base case dp[0] = 0 before the recurrence.',
        he: 'להגדיר את המצב במילים ואת מקרה הבסיס dp[0] = 0 לפני הנוסחה.',
      },
      {
        en: 'Use amount + 1 as \'infinity\': no answer exceeds amount coins, and it cannot overflow when adding 1.',
        he: 'להשתמש ב-amount + 1 בתור אינסוף: שום תשובה לא עוברת amount מטבעות, והוא לא גולש כשמוסיפים 1.',
      },
      {
        en: 'The complexity is pseudo-polynomial: it depends on the value of amount, not the input size.',
        he: 'הסיבוכיות פסאודו-פולינומית: היא תלויה בערך של amount ולא בגודל הקלט.',
      },
    ],
    extras: [
      {
        en: 'Coin Change II counts combinations: there the coin loop must be outer, or you count permutations.',
        he: 'Coin Change II סופרת צירופים: שם לולאת המטבעות חייבת להיות החיצונית, אחרת סופרים פרמוטציות.',
      },
      {
        en: 'Top-down memoised recursion is equivalent, but its recursion depth can reach the amount.',
        he: 'רקורסיה מלמעלה למטה עם memoization שקולה, אבל עומק הרקורסיה שלה יכול להגיע ל-amount.',
      },
      {
        en: 'Edge cases: amount = 0 returns 0, and 3 with coins [2] returns -1.',
        he: 'מקרי קצה: amount = 0 מחזיר 0, ו-3 עם מטבעות [2] מחזיר -1.',
      },
    ],
    codeSolutions: [
      {
        language: 'python',
        code: `def coin_change(coins, amount):
    INF = float("inf")
    dp = [0] + [INF] * amount
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a and dp[a - coin] + 1 < dp[a]:
                dp[a] = dp[a - coin] + 1
    return dp[amount] if dp[amount] != INF else -1`,
      },
      {
        language: 'cpp',
        code: `#include <vector>

int coinChange(const std::vector<int>& coins, int amount) {
    const int INF = amount + 1;                       // more than any real answer
    std::vector<int> dp(amount + 1, INF);
    dp[0] = 0;
    for (int a = 1; a <= amount; ++a)
        for (int coin : coins)
            if (coin <= a && dp[a - coin] + 1 < dp[a]) dp[a] = dp[a - coin] + 1;
    return dp[amount] == INF ? -1 : dp[amount];
}`,
      },
    ],
  },
]

export const interviews: Interview[] = [
  {
    id: 'int-rafael-junior-dev',
    companyId: 'rafael',
    roleId: 'software',
    reported: true,
    position: { en: 'Junior Software Developer', he: 'מפתח/ת תוכנה ג׳וניור' },
    stage: 'technical',
    date: '2026-01-08',
    status: 'rejected',
    notes: {
      en: 'Three coding exercises on paper (Two Sum, a random permutation with Rand(), even/odd without %), then theory: the OOP principles with examples, static in C vs C++, virtual functions, mutex vs semaphore.',
      he: 'שלושה תרגילי קוד על דף (Two Sum, תמורה אקראית עם Rand()‎, זוגי/אי-זוגי בלי %), ואז תיאוריה: עקרונות ה-OOP עם דוגמאות, static ב-C מול C++, פונקציות וירטואליות, mutex מול semaphore.',
    },
    questionIds: [
      'q-two-sum',
      'q-random-permutation',
      'q-even-odd-no-mod',
      'q-oop-principles',
      'q-static-c-vs-cpp',
      'q-virtual-function',
      'q-mutex-semaphore',
    ],
  },
  {
    id: 'int-nvidia-home-test',
    reported: true,
    companyId: 'nvidia',
    roleId: 'software',
    position: { en: 'Software Engineer (Python home test)', he: 'מהנדס/ת תוכנה (מבחן בית ב-Python)' },
    stage: 'home-assignment',
    date: '2026-05-20',
    status: 'passed',
    notes: {
      en: 'Python take-home test with three algorithmic problems, sent before the interview rounds. Time-limited and checked against hidden test cases.',
      he: 'מבחן בית ב-Python עם שלוש בעיות אלגוריתמיות, שנשלח לפני סבבי הראיון. מוגבל בזמן ונבדק מול מקרי בדיקה נסתרים.',
    },
    questionIds: ['q-min-replacements-palindrome', 'q-shuffle-playlist', 'q-bandwidth-knapsack'],
  },
  {
    id: 'int-nvidia-verification',
    reported: true,
    companyId: 'nvidia',
    roleId: 'verification',
    position: { en: 'Verification Engineer', he: 'מהנדס/ת וריפיקציה' },
    stage: 'technical',
    date: '2026-06-03',
    status: 'awaiting',
    notes: {
      en: 'Verification team, but the questions were pure data structures: a digit list to increment and an array with O(1) setAll.',
      he: 'צוות וריפיקציה, אבל השאלות היו מבני נתונים טהורים: רשימת ספרות להגדלה ומערך עם setAll ב-O(1).',
    },
    questionIds: ['q-plus-one-linked-list', 'q-array-set-all'],
  },
  {
    id: 'int-nvidia-qa-day',
    reported: true,
    companyId: 'nvidia',
    roleId: 'qa',
    position: { en: 'QA Engineer (screening day)', he: 'מהנדס/ת QA (יום מיון)' },
    stage: 'technical',
    date: '2026-05-06',
    status: 'awaiting',
    notes: {
      en: 'Group screening day: everyone received a sheet with the questions and a time limit, then the solutions were analysed together.',
      he: 'יום מיון קבוצתי: כולם קיבלו דף עם השאלות וזמן מוגבל, ואחר כך ניתחו את הפתרונות יחד.',
    },
    questionIds: ['q-int-to-roman', 'q-time-kv-store', 'q-sensor-anomalies'],
  },
  {
    id: 'int-microsoft',
    companyId: 'microsoft',
    roleId: 'software',
    position: { en: 'Software Engineer Intern', he: 'מתמחה בהנדסת תוכנה' },
    stage: 'technical',
    date: '2026-09-22',
    status: 'scheduled',
    notes: {
      en: 'Two 45-minute rounds: data structures and system fundamentals. Review OS and C++ beforehand.',
      he: 'שני סבבים של 45 דקות: מבני נתונים ויסודות מערכות. לחזור על מערכות הפעלה ו-C++ לפני.',
    },
    questionIds: [],
  },
  {
    id: 'int-google',
    companyId: 'google',
    roleId: 'software',
    position: { en: 'Software Engineer', he: 'מהנדס/ת תוכנה' },
    stage: 'technical',
    date: '2026-09-08',
    status: 'awaiting',
    notes: {
      en: 'Pure algorithms round in a shared editor. Asked to state complexity for every solution.',
      he: 'סבב אלגוריתמים טהור בעורך משותף. ביקשו לציין סיבוכיות לכל פתרון.',
    },
    questionIds: ['q-reverse-linked-list', 'q-first-unique-char', 'q-binary-search', 'q-reverse-string'],
  },
  {
    id: 'int-emg',
    companyId: 'emg',
    roleId: 'software',
    position: { en: 'Software Developer', he: 'מפתח/ת תוכנה' },
    stage: 'technical',
    date: '2026-09-03',
    status: 'awaiting',
    notes: {
      en: 'Two interviewers, mostly OOP fundamentals. They asked me to draw the process/thread difference on a whiteboard. Friendly atmosphere, about an hour.',
      he: 'שני מראיינים, בעיקר יסודות OOP. ביקשו ממני לצייר על הלוח את ההבדל בין תהליך ל-Thread. אווירה נעימה, בערך שעה.',
    },
    questionIds: [
      'q-polymorphism',
      'q-virtual-function',
      'q-static-method',
      'q-process-thread',
      'q-class-struct',
      'q-encapsulation',
    ],
  },
  {
    id: 'int-checkpoint',
    companyId: 'checkpoint',
    roleId: 'helpdesk',
    position: { en: 'Help Desk Administrator', he: 'מנהל/ת Help Desk' },
    stage: 'technical',
    date: '2026-08-25',
    status: 'passed',
    notes: {
      en: 'Networking-heavy. One scenario-based troubleshooting question, the rest were definitions.',
      he: 'הרבה רשתות. שאלה אחת של תרחיש לפתרון תקלה, השאר הגדרות.',
    },
    questionIds: [
      'q-osi',
      'q-tcp-udp',
      'q-dns',
      'q-dhcp',
      'q-troubleshoot-gateway',
      'q-active-directory',
      'q-subnet-mask',
      'q-process-thread',
    ],
  },
  {
    id: 'int-monday',
    companyId: 'monday',
    roleId: 'backend',
    position: { en: 'Backend Developer', he: 'מפתח/ת Backend' },
    stage: 'home-assignment',
    date: '2026-08-06',
    status: 'passed',
    notes: {
      en: 'Follow-up call on the home assignment. Questions focused on API design decisions I made.',
      he: 'שיחת המשך על מטלת הבית. השאלות התמקדו בהחלטות תכנון ה-API שלי.',
    },
    questionIds: ['q-rest-api', 'q-put-patch', 'q-status-codes', 'q-second-salary', 'q-database-index'],
  },
  {
    id: 'int-amdocs',
    companyId: 'amdocs',
    roleId: 'software',
    position: { en: 'Java Developer', he: 'מפתח/ת Java' },
    stage: 'technical',
    date: '2026-07-22',
    status: 'rejected',
    notes: {
      en: 'Feedback: solid basics, but they wanted more depth on the JVM and concurrency.',
      he: 'משוב: יסודות טובים, אבל רצו יותר עומק ב-JVM ובמקביליות.',
    },
    questionIds: ['q-abstract-interface', 'q-garbage-collection', 'q-polymorphism', 'q-sql-join', 'q-deadlock'],
  },
  {
    id: 'int-upwind',
    companyId: 'upwind',
    roleId: 'backend',
    position: { en: 'Backend Developer', he: 'מפתח/ת Backend' },
    stage: 'technical',
    date: '2026-07-15',
    status: 'passed',
    notes: {
      en: 'Cloud-native backend round. Linux basics, containers and one design question at the end.',
      he: 'סבב backend מוכוון ענן. יסודות לינוקס, קונטיינרים ושאלת תכנון אחת בסוף.',
    },
    questionIds: ['q-container-vm', 'q-rest-api', 'q-sql-injection', 'q-linux-permissions', 'q-rate-limiter'],
  },
  {
    id: 'int-intel',
    companyId: 'intel',
    roleId: 'embedded',
    position: { en: 'Firmware Engineer', he: 'מהנדס/ת קושחה' },
    stage: 'technical',
    date: '2026-07-08',
    status: 'rejected',
    notes: {
      en: 'Very hardware-oriented. Bit tricks on the board, then memory and C keywords.',
      he: 'מאוד מוכוון חומרה. טריקים על ביטים על הלוח, ואז זיכרון ומילות מפתח ב-C.',
    },
    questionIds: [
      'q-count-set-bits',
      'q-endianness',
      'q-volatile',
      'q-dangling-pointer',
      'q-reverse-string',
      'q-virtual-memory',
    ],
  },
  {
    id: 'int-elbit',
    companyId: 'elbit',
    roleId: 'embedded',
    position: { en: 'Embedded Software Engineer', he: 'מהנדס/ת תוכנה אמבדד' },
    stage: 'technical',
    date: '2026-06-30',
    status: 'passed',
    notes: {
      en: 'Live C coding on bits first, then OS and RTOS questions. Two interviewers from the team.',
      he: 'קודם קוד C חי על ביטים, ואז שאלות על מערכות הפעלה ו-RTOS. שני מראיינים מהצוות.',
    },
    questionIds: [
      'q-count-set-bits',
      'q-volatile',
      'q-static-c',
      'q-interrupt',
      'q-memory-layout',
      'q-mutex-semaphore',
      'q-endianness',
    ],
  },
  {
    id: 'int-rafael',
    companyId: 'rafael',
    roleId: 'embedded',
    position: { en: 'Embedded Software Engineer', he: 'מהנדס/ת תוכנה אמבדד' },
    stage: 'technical',
    date: '2026-06-16',
    status: 'passed',
    notes: {
      en: 'Mixed C / C++ round. Started with OS fundamentals and finished with two short coding tasks.',
      he: 'סבב מעורב C / C++. התחיל ביסודות מערכות הפעלה והסתיים בשתי משימות קוד קצרות.',
    },
    questionIds: [
      'q-process-thread',
      'q-deadlock',
      'q-swap-no-temp',
      'q-power-of-two',
      'q-pointer-reference',
      'q-stack-heap',
    ],
  },
]
