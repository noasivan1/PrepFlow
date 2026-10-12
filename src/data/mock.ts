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
      en: 'Polymorphism lets one interface be used for different underlying types. In OOP it usually means calling a method through a base-class reference and having the derived class override run at runtime (dynamic polymorphism via virtual functions). The compiler can also pick between overloads or template instantiations at compile time (static polymorphism).',
      he: 'פולימורפיזם מאפשר להשתמש בממשק אחד עבור טיפוסים שונים. ב-OOP הכוונה בדרך כלל לקריאה למתודה דרך הפניה למחלקת הבסיס, כשבפועל רצה הדריסה (override) של המחלקה היורשת בזמן ריצה (פולימורפיזם דינמי באמצעות פונקציות וירטואליות). הקומפיילר יכול גם לבחור בין overloads או בין מופעים של templates בזמן קומפילציה (פולימורפיזם סטטי).',
    },
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
      en: 'A member function declared with `virtual` in a base class so that calls through a base pointer or reference dispatch to the derived class override at runtime, using a vtable. It is the mechanism behind runtime polymorphism in C++.',
      he: 'פונקציית מחבר (member function) שמוצהרת עם virtual במחלקת הבסיס, כך שקריאה דרך מצביע או הפניה למחלקת הבסיס מופנית בזמן ריצה לדריסה של המחלקה היורשת, באמצעות vtable. זה המנגנון שמאחורי פולימורפיזם בזמן ריצה ב-C++.',
    },
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
      en: 'A method that belongs to the class rather than to an instance. It has no `this`, cannot access instance members directly, and is called on the class itself, e.g. `Math.max()`. Useful for factories, utilities and shared behaviour.',
      he: 'מתודה ששייכת למחלקה עצמה ולא למופע (instance). אין לה this, היא לא יכולה לגשת ישירות לשדות של מופע, וקוראים לה על שם המחלקה, למשל Math.max()‎. שימושית ל-factories, לפונקציות עזר ולהתנהגות משותפת.',
    },
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
      en: 'Only the default access level: struct members are public by default, class members are private. Everything else (methods, inheritance, constructors) works the same. By convention structs are used for plain data aggregates.',
      he: 'רק רמת הגישה כברירת מחדל: חברי struct הם public כברירת מחדל, וחברי class הם private. כל השאר (מתודות, ירושה, בנאים) עובד אותו דבר. לפי המוסכמה משתמשים ב-struct למבני נתונים פשוטים.',
    },
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
      en: 'Bundling data with the methods that operate on it and hiding internal state behind a public interface. It keeps invariants inside the class, lets you change the implementation without breaking callers, and makes code easier to reason about and test.',
      he: 'אריזה של נתונים יחד עם המתודות שפועלות עליהם, והסתרת המצב הפנימי מאחורי ממשק ציבורי. כך האינווריאנטים נשמרים בתוך המחלקה, אפשר לשנות את המימוש בלי לשבור את מי שמשתמש בה, והקוד קל יותר להבנה ולבדיקה.',
    },
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
      en: 'A reference is an alias for an existing object: it must be initialised, cannot be null and cannot be reseated. A pointer holds an address: it can be null, reassigned and supports arithmetic. Prefer references for parameters that must exist and pointers when "nothing" is a valid value or ownership is involved.',
      he: 'הפניה היא שם נוסף לאובייקט קיים: חייבים לאתחל אותה, היא לא יכולה להיות null ואי אפשר להפנות אותה מחדש. מצביע מחזיק כתובת: הוא יכול להיות null, אפשר להשים לו ערך חדש והוא תומך באריתמטיקה. עדיף הפניות לפרמטרים שחייבים להתקיים, ומצביעים כש"כלום" הוא ערך חוקי או כשמדובר בבעלות על זיכרון.',
    },
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
      en: 'RAII wrappers that own a heap object and delete it automatically. unique_ptr has a single owner, is move-only and has zero overhead. shared_ptr keeps a reference count so several owners can share the object, which is freed when the last owner goes away. Use weak_ptr to break reference cycles.',
      he: 'עטיפות RAII שמחזיקות אובייקט על ה-heap ומשחררות אותו אוטומטית. ל-unique_ptr יש בעלים יחיד, הוא ניתן להעברה (move) בלבד וללא תקורה. shared_ptr מנהל מונה הפניות כך שכמה בעלים חולקים את האובייקט, והוא משתחרר כשהבעלים האחרון נעלם. weak_ptr שובר מעגלי הפניות.',
    },
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
      en: 'If a class needs a custom destructor, copy constructor or copy assignment operator, it almost certainly needs all three (Rule of Three). With C++11 move semantics, add the move constructor and move assignment operator (Rule of Five). If you need none of them, follow the Rule of Zero and rely on RAII members.',
      he: 'אם מחלקה צריכה destructor, copy constructor או copy assignment operator משלה, כמעט בטוח שהיא צריכה את שלושתם (Rule of Three). עם סמנטיקת move של C++11 מוסיפים גם move constructor ו-move assignment operator (Rule of Five). אם לא צריך אף אחד מהם, הולכים לפי Rule of Zero ומסתמכים על חברי RAII.',
    },
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
      en: 'It tells the compiler the value can change outside the program’s control (a hardware register, an ISR, another thread), so every access must really read or write memory instead of being cached in a register or optimised away. Needed for memory-mapped I/O and variables shared with interrupt handlers. It does not make operations atomic.',
      he: 'היא אומרת לקומפיילר שהערך יכול להשתנות מחוץ לשליטת התוכנית (רגיסטר חומרה, ISR, Thread אחר), ולכן כל גישה חייבת באמת לקרוא או לכתוב לזיכרון, במקום להישמר ברגיסטר או להימחק באופטימיזציה. נחוצה ל-memory-mapped I/O ולמשתנים שמשותפים עם שגרות טיפול בפסיקות. היא לא הופכת פעולות לאטומיות.',
    },
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
      en: 'For a global variable or a function, static limits its visibility to the current file (translation unit). For a local variable, static keeps the value alive across calls: it is initialised once and lives for the whole program instead of on the stack.',
      he: 'עבור משתנה גלובלי או פונקציה, static מגביל את הנראות לקובץ הנוכחי (translation unit). עבור משתנה מקומי, static שומר את הערך בין קריאות: הוא מאותחל פעם אחת וחי לאורך כל התוכנית במקום על המחסנית.',
    },
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
      en: 'An interrupt is a hardware signal that makes the CPU pause the current code and run an interrupt service routine (ISR). ISRs should be short: no blocking calls, no heavy computation, no dynamic allocation or printf. Set a flag or push to a queue and let the main loop do the work. Variables shared with the ISR must be volatile and protected.',
      he: 'פסיקה היא אות חומרה שגורם למעבד לעצור את הקוד הנוכחי ולהריץ שגרת טיפול בפסיקה (ISR). ה-ISR צריך להיות קצר: בלי קריאות חוסמות, בלי חישובים כבדים, בלי הקצאה דינמית או printf. מדליקים דגל או דוחפים לתור ונותנים ללולאה הראשית לעשות את העבודה. משתנים שמשותפים עם ה-ISR חייבים להיות volatile ומוגנים.',
    },
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
      en: 'A mutex is a lock with an owner: the thread that locks it is the only one that may unlock it, and it protects a critical section. A semaphore is a counter used for signalling or for limiting access to N resources; any task can signal it. Binary semaphores are common for ISR-to-task signalling, mutexes for shared data.',
      he: 'mutex הוא מנעול עם בעלים: ה-Thread שנעל אותו הוא היחיד שרשאי לשחרר אותו, והוא מגן על קטע קריטי. סמפור הוא מונה שמשמש לאיתות או להגבלת גישה ל-N משאבים; כל משימה יכולה לאותת עליו. סמפור בינארי נפוץ לאיתות מ-ISR למשימה, ו-mutex להגנה על נתונים משותפים.',
    },
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
      en: 'Text holds the code (read-only). .data holds initialised globals, .bss holds uninitialised globals (zeroed at startup). The heap grows upward and serves malloc; the stack grows downward and holds locals and return addresses. On microcontrollers text and const data live in flash, the rest in RAM.',
      he: 'text מכיל את הקוד (לקריאה בלבד). ‎.data מכיל משתנים גלובליים מאותחלים, ‎.bss מכיל משתנים גלובליים לא מאותחלים (מאופסים בעלייה). ה-heap גדל כלפי מעלה ומשרת את malloc; המחסנית (stack) גדלה כלפי מטה ומחזיקה משתנים מקומיים וכתובות חזרה. במיקרו-בקרים text וקבועים יושבים ב-flash, והשאר ב-RAM.',
    },
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
      en: 'A pointer that still points to memory that has been freed or has gone out of scope. Using it is undefined behaviour. Avoid it by setting pointers to NULL after free, never returning the address of a local variable, and keeping ownership clear (or using smart pointers in C++).',
      he: 'מצביע שעדיין מצביע לזיכרון ששוחרר או שיצא מה-scope. שימוש בו הוא undefined behaviour. נמנעים ממנו על ידי איפוס המצביע ל-NULL אחרי free, אי-החזרת כתובת של משתנה מקומי, ושמירה על בעלות ברורה (או מצביעים חכמים ב-C++).',
    },
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
    topicId: 'hardware',
    roleIds: ['embedded', 'software', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'The trick is n & (n - 1), which clears the lowest set bit. Repeat until n is zero and count the iterations: the loop runs once per set bit instead of once per bit. Most languages also have a built-in popcount.',
      he: 'הטריק הוא n & (n - 1)‎, שמכבה את הביט הדלוק הנמוך ביותר. חוזרים על זה עד ש-n מתאפס וסופרים את האיטרציות: הלולאה רצה פעם אחת לכל ביט דלוק במקום פעם אחת לכל ביט. ברוב השפות יש גם popcount מובנה.',
    },
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
    topicId: 'hardware',
    roleIds: ['embedded', 'software', 'student', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'A power of two has exactly one set bit, so n & (n - 1) clears it and leaves zero. Zero itself must be excluded because 0 & -1 is also zero.',
      he: 'לחזקה של 2 יש בדיוק ביט דלוק אחד, ולכן n & (n - 1)‎ מכבה אותו ומשאיר אפס. חייבים להוציא את אפס עצמו מהבדיקה כי גם 0 & -1 שווה אפס.',
    },
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
    topicId: 'hardware',
    roleIds: ['embedded', 'software', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'XOR-swap: a ^= b; b ^= a; a ^= b. It works because XOR is its own inverse. Guard against swapping a variable with itself (it would zero the value). In real code a temporary or the language swap is clearer and just as fast.',
      he: 'החלפה עם XOR: ‏a ^= b; b ^= a; a ^= b. זה עובד כי XOR הוא ההופכי של עצמו. צריך להיזהר מהחלפה של משתנה עם עצמו (הערך יתאפס). בקוד אמיתי משתנה עזר או swap של השפה ברורים יותר ומהירים באותה מידה.',
    },
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
    topicId: 'hardware',
    roleIds: ['embedded', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 2,
    answer: {
      en: 'Endianness is the byte order of multi-byte values in memory. Little-endian stores the least significant byte first (x86, most ARM), big-endian stores the most significant byte first (network byte order). Store the integer 1 and look at its first byte: if it is 1, the machine is little-endian.',
      he: 'Endianness הוא סדר הבתים של ערכים רב-בתיים בזיכרון. little-endian שומר קודם את הבית הפחות משמעותי (x86, רוב מעבדי ARM), big-endian שומר קודם את הבית המשמעותי ביותר (סדר הבתים ברשת). שומרים את המספר 1 ומסתכלים על הבית הראשון שלו: אם הוא 1, המכונה היא little-endian.',
    },
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
      en: 'A process is a running program with its own address space, file handles and resources. A thread is a unit of execution inside a process. Threads of the same process share memory and resources, which makes them cheaper to create and switch between, but requires synchronisation to avoid race conditions.',
      he: 'תהליך הוא תוכנית רצה עם מרחב כתובות, קבצים פתוחים ומשאבים משלה. Thread הוא יחידת ריצה בתוך תהליך. ה-Threads של אותו תהליך חולקים זיכרון ומשאבים, ולכן זול יותר ליצור אותם ולעבור ביניהם, אבל צריך סנכרון כדי להימנע מ-race conditions.',
    },
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
      en: 'A deadlock happens when threads wait on each other forever. It needs four conditions: mutual exclusion, hold-and-wait, no preemption and circular wait. Prevent it by breaking one of them, most commonly by acquiring locks in a fixed global order, using timeouts, or never holding more than one lock at a time.',
      he: 'deadlock קורה כש-Threads מחכים זה לזה לנצח. הוא דורש ארבעה תנאים: mutual exclusion, hold-and-wait, ללא preemption, ו-circular wait. מונעים אותו על ידי שבירת אחד התנאים, לרוב נעילת מנעולים בסדר גלובלי קבוע, שימוש ב-timeouts, או אי-החזקה של יותר ממנעול אחד בכל רגע.',
    },
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
      en: 'The stack holds local variables and call frames. Allocation is automatic, fast and LIFO, but limited in size and freed when the function returns. The heap is for dynamic allocation: flexible size and lifetime, but slower, manually managed (or via smart pointers / GC), and prone to fragmentation and leaks.',
      he: 'המחסנית מחזיקה משתנים מקומיים ומסגרות קריאה. ההקצאה אוטומטית, מהירה ו-LIFO, אבל מוגבלת בגודל ומשתחררת כשהפונקציה חוזרת. הערימה משמשת להקצאה דינמית: גודל ומשך חיים גמישים, אבל איטית יותר, מנוהלת ידנית (או דרך מצביעים חכמים / GC), ונוטה לפרגמנטציה ולדליפות.',
    },
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
      en: 'An abstraction where each process sees its own contiguous address space that the OS and MMU map onto physical RAM in pages. It isolates processes, lets programs use more memory than is physically present by paging to disk, and enables sharing and protection of memory regions.',
      he: 'הפשטה שבה כל תהליך רואה מרחב כתובות רציף משלו, שמערכת ההפעלה וה-MMU ממפים ל-RAM הפיזי בדפים. היא מבודדת תהליכים, מאפשרת לתוכניות להשתמש ביותר זיכרון ממה שקיים פיזית על ידי דפדוף לדיסק, ומאפשרת שיתוף והגנה על אזורי זיכרון.',
    },
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
      en: 'Microsoft directory service for Windows domains. It stores users, groups, computers and policies in a central database and handles authentication and authorisation, so admins can manage access, apply Group Policy and reset passwords from one place.',
      he: 'שירות ה-directory של מיקרוסופט לדומיינים של Windows. הוא שומר משתמשים, קבוצות, מחשבים ומדיניות במסד נתונים מרכזי ומטפל באימות ובהרשאות, כך שמנהלי מערכת יכולים לנהל גישה, להחיל Group Policy ולאפס סיסמאות ממקום אחד.',
    },
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
      en: 'Each file has read, write and execute bits for owner, group and others. chmod 755 sets rwx for the owner (7 = 4+2+1) and r-x for group and others (5 = 4+1): the owner can edit, everyone can read and run it.',
      he: 'לכל קובץ יש ביטים של קריאה, כתיבה והרצה עבור הבעלים, הקבוצה והאחרים. chmod 755 נותן rwx לבעלים (7 = 4+2+1) ו-r-x לקבוצה ולאחרים (5 = 4+1): הבעלים יכול לערוך, וכולם יכולים לקרוא ולהריץ.',
    },
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
      en: 'A VM virtualises hardware and runs a full guest OS with its own kernel, so it is heavier but strongly isolated. A container shares the host kernel and isolates only the process, filesystem and network namespaces, so it starts in milliseconds and uses far less memory.',
      he: 'מכונה וירטואלית מדמה חומרה ומריצה מערכת הפעלה שלמה עם kernel משלה, ולכן היא כבדה יותר אבל מבודדת היטב. קונטיינר חולק את ה-kernel של המארח ומבודד רק את התהליך, מערכת הקבצים ומרחב הרשת, ולכן הוא עולה במילישניות וצורך הרבה פחות זיכרון.',
    },
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
      en: 'Seven layers, bottom to top: Physical, Data Link, Network, Transport, Session, Presentation, Application. Each layer offers a service to the one above it. Common mapping: Ethernet (2), IP (3), TCP/UDP (4), HTTP and DNS (7).',
      he: 'שבע שכבות, מלמטה למעלה: Physical, Data Link, Network, Transport, Session, Presentation, Application. כל שכבה נותנת שירות לשכבה שמעליה. מיפוי נפוץ: Ethernet (2), IP (3), TCP/UDP (4), HTTP ו-DNS (7).',
    },
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
      en: 'TCP is connection-oriented and reliable: ordered, complete delivery with acknowledgements, retransmission and flow control. UDP is connectionless and lightweight with no delivery guarantees, which suits latency-sensitive traffic such as video, gaming and DNS.',
      he: 'TCP מבוסס חיבור ואמין: מסירה מלאה ומסודרת עם אישורים, שידור חוזר ובקרת זרימה. UDP הוא ללא חיבור וקל משקל, בלי הבטחת מסירה, ולכן מתאים לתעבורה רגישה להשהיה כמו וידאו, משחקים ו-DNS.',
    },
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
      en: 'DNS translates domain names into IP addresses. The client asks a recursive resolver, which checks its cache and, if needed, walks from the root servers to the TLD servers to the authoritative name server for the domain, then returns and caches the record according to its TTL.',
      he: 'DNS מתרגם שמות דומיין לכתובות IP. הלקוח שואל resolver רקורסיבי, שבודק את המטמון שלו ובמידת הצורך עובר משרתי ה-root לשרתי ה-TLD ומשם לשרת ה-authoritative של הדומיין, ואז מחזיר את הרשומה ושומר אותה במטמון לפי ה-TTL.',
    },
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
      en: 'Dynamic Host Configuration Protocol automatically assigns IP addresses, subnet masks, default gateways and DNS servers to devices joining a network. It uses the DORA sequence: Discover, Offer, Request, Acknowledge.',
      he: 'Dynamic Host Configuration Protocol מקצה אוטומטית כתובות IP, subnet mask, default gateway ושרתי DNS למכשירים שמצטרפים לרשת. הוא משתמש ברצף DORA: ‏Discover, Offer, Request, Acknowledge.',
    },
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
      en: 'Work up the stack. Ping a public IP such as 8.8.8.8: if that works but names fail, it is DNS, so check the configured DNS servers with nslookup. If the public IP fails, check the router WAN link, NAT and firewall rules, and whether other users are affected.',
      he: 'עולים בשכבות. עושים ping ל-IP ציבורי כמו 8.8.8.8: אם זה עובד אבל שמות לא נפתרים, הבעיה ב-DNS, אז בודקים את שרתי ה-DNS המוגדרים עם nslookup. אם ה-IP הציבורי לא עונה, בודקים את קו ה-WAN של הנתב, NAT וחוקי firewall, והאם משתמשים אחרים מושפעים.',
    },
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
      en: 'A 32-bit mask that splits an IP address into a network part and a host part. For example 255.255.255.0 (/24) means the first 24 bits identify the network, leaving 256 addresses (254 usable hosts) in the subnet.',
      he: 'מסכה של 32 ביט שמפצלת כתובת IP לחלק הרשת ולחלק המארח. למשל 255.255.255.0 (‎/24) אומר ש-24 הביטים הראשונים מזהים את הרשת, ונשארות 256 כתובות (254 מארחים שמישים) ב-subnet.',
    },
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
      en: 'Symmetric encryption uses one shared key for both encryption and decryption (AES): fast, but the key must be exchanged securely. Asymmetric uses a public / private key pair (RSA, ECC): anyone can encrypt with the public key, only the private key decrypts. TLS uses asymmetric crypto to exchange a symmetric session key.',
      he: 'הצפנה סימטרית משתמשת במפתח משותף אחד גם להצפנה וגם לפענוח (AES): מהירה, אבל צריך להעביר את המפתח בצורה מאובטחת. אסימטרית משתמשת בזוג מפתחות ציבורי / פרטי (RSA, ECC): כל אחד יכול להצפין עם המפתח הציבורי, ורק המפתח הפרטי מפענח. TLS משתמש בהצפנה אסימטרית כדי להחליף מפתח session סימטרי.',
    },
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
      en: "Injecting SQL through user input that is concatenated into a query, e.g. ' OR 1=1 --. Prevent it with parameterised queries / prepared statements, an ORM, input validation and least-privilege database accounts. Never build SQL by string concatenation.",
      he: "הזרקת SQL דרך קלט משתמש ששורשר לתוך שאילתה, למשל ' OR 1=1 --. מונעים אותה עם parameterised queries / prepared statements, ‏ORM, ולידציה של קלט וחשבונות מסד נתונים עם הרשאות מינימליות. אף פעם לא בונים SQL בשרשור מחרוזות.",
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'backend', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 3,
    answer: {
      en: 'Walk the list with three pointers: prev (starts null), current and next. For each node, save next, point current.next to prev, then advance prev and current. When current becomes null, prev is the new head. O(n) time, O(1) extra space.',
      he: 'עוברים על הרשימה עם שלושה מצביעים: prev (מתחיל ב-null), current ו-next. לכל צומת שומרים את next, מצביעים את current.next ל-prev, ואז מקדמים את prev ואת current. כש-current הופך ל-null, ‏prev הוא הראש החדש. זמן O(n), זיכרון נוסף O(1).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'frontend', 'student', 'data', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 2,
    answer: {
      en: 'Count characters in a hash map in one pass, then scan the string again and return the first character whose count is 1. O(n) time and O(k) space for the alphabet size.',
      he: 'סופרים את התווים ב-hash map במעבר אחד, ואז עוברים שוב על המחרוזת ומחזירים את התו הראשון שהמונה שלו הוא 1. זמן O(n) וזיכרון O(k) לפי גודל האלפבית.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'student', 'frontend', 'verification'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 2,
    answer: {
      en: 'Two pointers, one at each end: swap the characters and move both pointers toward the middle until they meet. O(n) time, O(1) extra space. Languages with immutable strings (Java, Python) work on a character array first.',
      he: 'שני מצביעים, אחד בכל קצה: מחליפים את התווים ומקרבים את שני המצביעים למרכז עד שהם נפגשים. זמן O(n), זיכרון נוסף O(1). בשפות עם מחרוזות בלתי ניתנות לשינוי (Java, Python) עובדים קודם על מערך תווים.',
    },
    codeSolutions: [
      {
        language: 'c',
        code: `#include <string.h>

void reverse(char *s) {
    char *end = s + strlen(s) - 1;
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'data', 'verification', 'qa'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'high',
    timesAsked: 3,
    answer: {
      en: 'Idea: keep two indexes, lo and hi, around the part of the array that can still contain the target. Look at the middle element: equal → found; smaller than the target → continue in the right half (lo = mid + 1); larger → the left half (hi = mid - 1). Stop when lo passes hi.\nTime: O(log n). Every comparison halves the range, so 1,000,000 items need at most 20 comparisons.\nSpace: O(1) for the loop version; O(log n) of call stack for the recursive one.\nPitfalls: the array must be sorted; in C, C++ and Java compute mid as lo + (hi - lo) / 2 to avoid overflow; watch the off-by-one in hi = n - 1 and the <= condition.',
      he: 'הרעיון: מחזיקים שני אינדקסים, lo ו-hi, סביב החלק של המערך שעדיין יכול להכיל את היעד. מסתכלים על האיבר האמצעי: שווה → מצאנו; קטן מהיעד → ממשיכים בחצי הימני (lo = mid + 1); גדול → בחצי השמאלי (hi = mid - 1). עוצרים כש-lo עובר את hi.\nזמן: O(log n). כל השוואה מחצה את הטווח, ולכן מיליון איברים דורשים לכל היותר 20 השוואות.\nמקום: O(1) בגרסת הלולאה; O(log n) של מחסנית קריאות בגרסה הרקורסיבית.\nמלכודות: המערך חייב להיות ממוין; ב-C, C++ ו-Java מחשבים את mid כ-lo + (hi - lo) / 2 כדי למנוע overflow; לשים לב ל-off-by-one ב-hi = n - 1 ובתנאי <=.',
    },
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
      en: 'An abstract class can hold state and partial implementation and supports single inheritance. An interface defines a contract and a class can implement many of them. Since Java 8 interfaces can have default and static methods, but still no instance fields. Use an abstract class for shared base behaviour and an interface for a capability.',
      he: 'מחלקה אבסטרקטית יכולה להחזיק מצב ומימוש חלקי ותומכת בירושה יחידה. ממשק מגדיר חוזה, ומחלקה יכולה לממש כמה ממשקים. מ-Java 8 לממשקים יש default ו-static methods, אבל עדיין אין שדות של מופע. משתמשים במחלקה אבסטרקטית להתנהגות בסיס משותפת ובממשק ליכולת.',
    },
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
      en: 'The JVM frees objects that are no longer reachable from GC roots (stack references, static fields, and so on). Modern collectors are generational: young objects are collected often and cheaply, survivors are promoted to the old generation, which is collected less often. G1 and ZGC aim to keep pauses short.',
      he: 'ה-JVM משחרר אובייקטים שכבר לא ניתן להגיע אליהם משורשי ה-GC (הפניות במחסנית, שדות סטטיים וכדומה). אספנים מודרניים הם דוריים: אובייקטים צעירים נאספים לעיתים קרובות ובזול, השורדים מקודמים לדור הישן שנאסף לעיתים רחוקות יותר. G1 ו-ZGC שואפים להשהיות קצרות.',
    },
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
      en: 'Lists are mutable and use square brackets; tuples are immutable and use parentheses. Tuples are slightly faster, can be used as dictionary keys, and signal fixed-structure data, while lists are for collections that change.',
      he: 'list ניתן לשינוי ונכתב בסוגריים מרובעים; tuple אינו ניתן לשינוי ונכתב בסוגריים עגולים. tuple מעט מהיר יותר, יכול לשמש כמפתח במילון ומסמן נתונים במבנה קבוע, בעוד list מיועד לאוספים שמשתנים.',
    },
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
      en: 'A decorator is a function that takes a function and returns a new function, applied with the @ syntax. It wraps behaviour around a function without changing its body: logging, caching (@lru_cache), authentication checks, timing, and so on.',
      he: 'דקורטור הוא פונקציה שמקבלת פונקציה ומחזירה פונקציה חדשה, ומופעל עם התחביר @. הוא עוטף התנהגות סביב פונקציה בלי לשנות את הגוף שלה: לוגים, caching ‏(@lru_cache), בדיקות הרשאה, מדידת זמן וכדומה.',
    },
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
      en: 'JavaScript runs on a single thread. The call stack runs synchronous code; asynchronous work (timers, I/O, fetch) is handled by the environment and its callbacks are queued. The event loop moves a task from the queue to the stack only when the stack is empty. Microtasks (promises) run before the next macrotask (setTimeout).',
      he: 'JavaScript רץ על Thread יחיד. ה-call stack מריץ קוד סינכרוני; עבודה אסינכרונית (טיימרים, I/O, fetch) מטופלת על ידי הסביבה וה-callbacks שלה נכנסים לתור. לולאת האירועים מעבירה משימה מהתור למחסנית רק כשהמחסנית ריקה. microtasks (promises) רצים לפני ה-macrotask הבא (setTimeout).',
    },
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
      en: 'var is function-scoped and hoisted (usable before its declaration as undefined). let and const are block-scoped and cannot be used before their line. const cannot be reassigned, although the object it points to can still be mutated.',
      he: 'var הוא function-scoped ועובר hoisting (אפשר להשתמש בו לפני ההצהרה כ-undefined). let ו-const הם block-scoped ואי אפשר להשתמש בהם לפני השורה שלהם. ל-const אי אפשר להשים ערך חדש, אבל את האובייקט שהוא מצביע עליו עדיין אפשר לשנות.',
    },
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
      en: 'An HTTP API that follows REST conventions: resources identified by URLs, standard methods (GET, POST, PUT, PATCH, DELETE), stateless requests, and representations such as JSON. Good REST APIs use proper status codes and are predictable and cacheable.',
      he: 'API מבוסס HTTP שעוקב אחרי מוסכמות REST: משאבים שמזוהים על ידי URL, מתודות סטנדרטיות (GET, POST, PUT, PATCH, DELETE), בקשות חסרות מצב (stateless), וייצוגים כמו JSON. REST API טוב משתמש בקודי סטטוס נכונים והוא צפוי וניתן ל-cache.',
    },
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
      en: '404 Not Found when the resource does not exist. 400 Bad Request for a malformed or invalid request, or 422 Unprocessable Entity when the request is well-formed but fails validation rules. Both are client errors (4xx).',
      he: '404 Not Found כשהמשאב לא קיים. 400 Bad Request לבקשה פגומה או לא תקינה, או 422 Unprocessable Entity כשהבקשה תקינה מבחינה מבנית אבל נכשלת בכללי ולידציה. שניהם שגיאות לקוח (4xx).',
    },
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
      en: 'PUT replaces the entire resource with the representation sent and is idempotent. PATCH applies a partial update, changing only the fields provided. PATCH is not required to be idempotent, although it usually is in practice.',
      he: 'PUT מחליף את המשאב כולו בייצוג שנשלח והוא אידמפוטנטי. PATCH מבצע עדכון חלקי ומשנה רק את השדות שנשלחו. PATCH לא חייב להיות אידמפוטנטי, אם כי בפועל הוא בדרך כלל כן.',
    },
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
      en: 'INNER JOIN returns only rows that have a match in both tables. LEFT JOIN returns every row from the left table plus the matching rows from the right table, filling the right side with NULLs where there is no match.',
      he: 'INNER JOIN מחזיר רק שורות שיש להן התאמה בשתי הטבלאות. LEFT JOIN מחזיר את כל השורות מהטבלה השמאלית בתוספת השורות התואמות מהטבלה הימנית, וממלא את הצד הימני ב-NULL היכן שאין התאמה.',
    },
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
    topicId: 'sql',
    roleIds: ['backend', 'data', 'fullstack'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'low',
    timesAsked: 1,
    answer: {
      en: 'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees); Or with a window function: DENSE_RANK() OVER (ORDER BY salary DESC) and pick rank 2, which also handles duplicate salaries cleanly.',
      he: 'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees); או עם פונקציית חלון: DENSE_RANK() OVER (ORDER BY salary DESC) ובוחרים דירוג 2, מה שמטפל נכון גם במשכורות כפולות.',
    },
    codeSolutions: [
      {
        language: 'sql',
        code: `-- Option 1: the maximum below the maximum
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Option 2: window function, handles duplicate salaries cleanly
SELECT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
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
      en: 'A data structure (usually a B-tree) that lets the database find rows by a column without scanning the whole table. Add one on columns used in WHERE clauses, JOIN conditions and ORDER BY on large tables. Indexes speed up reads but slow down writes and take space, so do not index everything.',
      he: 'מבנה נתונים (בדרך כלל B-tree) שמאפשר למסד הנתונים למצוא שורות לפי עמודה בלי לסרוק את כל הטבלה. מוסיפים אינדקס על עמודות שמשמשות ב-WHERE, בתנאי JOIN וב-ORDER BY בטבלאות גדולות. אינדקסים מאיצים קריאה אבל מאטים כתיבה ותופסים מקום, אז לא מאנדקסים הכול.',
    },
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
      en: 'Decide the scope (per user, API key or IP) and the algorithm: token bucket or a sliding window counter are common. Keep counters in a fast shared store such as Redis so every API server sees the same state, return 429 with Retry-After when the limit is hit, and expose the remaining quota in response headers.',
      he: 'מחליטים על הטווח (לפי משתמש, מפתח API או IP) ועל האלגוריתם: token bucket או sliding window counter נפוצים. שומרים את המונים במאגר משותף ומהיר כמו Redis כדי שכל שרתי ה-API יראו את אותו מצב, מחזירים 429 עם Retry-After כשעוברים את המגבלה, וחושפים את המכסה שנותרה בכותרות התשובה.',
    },
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
      en: 'Compare the string from both ends: position i against position n-1-i. Every mismatched pair needs exactly one replacement (change either character to match the other) and matched pairs need nothing, so the answer is simply the number of mismatched pairs. O(n) time, O(1) space. "abdaa": the pair (a, a) matches, the pair (b, a) does not, so the answer is 1.',
      he: 'משווים את המחרוזת משני הקצוות: מיקום i מול מיקום n-1-i. כל זוג לא תואם דורש בדיוק החלפה אחת (משנים אחד משני התווים כך שיתאים לשני), וזוג תואם לא דורש כלום. לכן התשובה היא פשוט מספר הזוגות הלא תואמים. זמן O(n), זיכרון O(1). לדוגמה "abdaa": הזוג (a, a) תואם, הזוג (b, a) לא, ולכן התשובה 1.',
    },
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
      en: 'Group the songs by artist into queues that keep the original order. Keep a max-heap of artists keyed by (remaining songs, descending; first-appearance index, ascending). Each step pop the best artist; if it is the artist just played and the heap is not empty, pop the runner-up instead and push the first back. Play that artist’s next song, decrease its count and push it back if songs remain. Each step costs O(log k) for k artists, so the whole shuffle is O(n log k), fine for 200,000 songs. Example: Ed Sheeran has 4 songs → Photograph; Ed is still best but was just played, so The Weeknd → Blinding Lights; Ed → Perfect; Taylor Swift → Blank Space; Ed → Shivers; only Ed is left → Tides.',
      he: 'מקבצים את השירים לפי אמן, כל אמן בתור ששומר על הסדר המקורי. מחזיקים ערימת מקסימום של אמנים לפי (שירים שנותרו, בסדר יורד; אינדקס ההופעה הראשונה, בסדר עולה). בכל צעד מוציאים את האמן הטוב ביותר; אם זה האמן שניגן הרגע והערימה לא ריקה, מוציאים במקומו את הבא בתור ומחזירים את הראשון. מנגנים את השיר הבא של האמן, מקטינים את המונה ומחזירים אותו לערימה אם נותרו לו שירים. כל צעד עולה O(log k) עבור k אמנים, כלומר O(n log k) בסך הכול, מספיק מהיר ל-200,000 שירים. בדוגמה: לאד שירן 4 שירים ולכן Photograph; אד עדיין הכי גבוה אבל ניגן הרגע, ולכן The Weeknd עם Blinding Lights; אד עם Perfect; טיילור סוויפט עם Blank Space; אד עם Shivers; נשאר רק אד ולכן Tides.',
    },
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
      en: 'This is the classic 0/1 knapsack: each endpoint is an item with weight bandwidth[i] and value request[i], and the capacity is totalBandwidth. Build dp[w] = the most requests served with at most w units; for each endpoint walk w from totalBandwidth down to bandwidth[i] and set dp[w] = max(dp[w], dp[w - bandwidth[i]] + request[i]). Walking downwards guarantees each endpoint is used at most once. With n ≤ 100 and totalBandwidth ≤ 100,000 that is at most 10^7 steps. Keep the result in 64 bits: a single request count can be 10^9. Sample: capacity 200, bandwidth [100, 500, 80, 25, 400], requests [100, 1000, 120, 110, 100] → endpoints 3 and 4 (80 + 25) serve 230.',
      he: 'זו בעיית התרמיל הקלאסית (0/1 knapsack): כל נקודת קצה היא פריט במשקל bandwidth[i] ובערך request[i], והקיבולת היא totalBandwidth. בונים dp[w] = מקסימום הבקשות עם לכל היותר w יחידות; לכל נקודת קצה עוברים על w מ-totalBandwidth למטה עד bandwidth[i] ומעדכנים dp[w] = max(dp[w], dp[w - bandwidth[i]] + request[i]). המעבר מלמעלה למטה מבטיח שכל נקודה נבחרת פעם אחת לכל היותר. עם n ≤ 100 ו-totalBandwidth ≤ 100,000 זה לכל היותר 10^7 צעדים. התוצאה חייבת להיות 64 ביט, כי כל request יכול להיות 10^9. בדוגמה: קיבולת 200, רוחב פס [100, 500, 80, 25, 400], בקשות [100, 1000, 120, 110, 100], הנקודות השלישית והרביעית (80 + 25) משרתות 230.',
    },
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
      en: 'Find the rightmost node whose digit is not 9. Increment it and set every node after it to 0. If there is no such node (all nines), create a new head holding 0, treat it as that node, and the same increment turns it into 1 while all the old nodes become 0. One pass, O(n) time, O(1) space, no reversal or recursion. Examples: [1, 2, 9] becomes [1, 3, 0]; [9, 9] becomes [1, 0, 0].',
      he: 'מוצאים את הצומת הימני ביותר שהספרה שלו אינה 9. מגדילים אותו באחד ומאפסים את כל הצמתים שאחריו. אם אין צומת כזה (כל הספרות 9), יוצרים ראש חדש עם הערך 0, מתייחסים אליו כאל אותו צומת, ואותה הגדלה הופכת אותו ל-1 בזמן שכל הצמתים הישנים הופכים ל-0. מעבר אחד, זמן O(n), זיכרון O(1), בלי היפוך ובלי רקורסיה. דוגמאות: [1, 2, 9] הופך ל-[1, 3, 0]; ‏[9, 9] הופך ל-[1, 0, 0].',
    },
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
      en: 'Never write to every cell. Keep a global counter that grows on every write (a logical clock). Each cell stores its value and the clock value of its last set. setAll stores the value and the current clock in one global slot. get(i) compares the two clocks: if the setAll happened later than the cell’s own set, return the setAll value, otherwise the cell’s value. All three operations touch a constant amount of memory, so each is O(1).',
      he: 'לא כותבים באמת לכל תא. מחזיקים מונה גלובלי שגדל בכל כתיבה (שעון לוגי). כל תא שומר את הערך שלו ואת ערך השעון של ה-set האחרון שלו. setAll שומר את הערך ואת השעון הנוכחי במשבצת גלובלית אחת. get(i) משווה את שני השעונים: אם ה-setAll קרה אחרי ה-set של התא, מחזירים את ערך ה-setAll, אחרת את ערך התא. כל שלוש הפעולות נוגעות בכמות קבועה של זיכרון, ולכן כל אחת היא O(1).',
    },
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
      en: 'Greedy: walk the table from the largest value down. While the number is at least the current value, append the symbol and subtract the value. Because the subtractive pairs (CM, CD, XC, XL, IX, IV) are part of the table, the greedy choice is always right. 1994: M leaves 994, CM leaves 94, XC leaves 4, IV leaves 0 → MCMXCIV. Thirteen table rows and a few iterations each, effectively O(1).',
      he: 'חמדני: עוברים על הטבלה מהערך הגדול לקטן. כל עוד המספר גדול או שווה לערך הנוכחי, מוסיפים את הסימן ומחסרים את הערך. מכיוון שהזוגות החיסוריים (CM, CD, XC, XL, IX, IV) הם חלק מהטבלה, הבחירה החמדנית תמיד נכונה. 1994: ‏M משאיר 994, ‏CM משאיר 94, ‏XC משאיר 4, ‏IV משאיר 0, והתוצאה MCMXCIV. שלוש-עשרה שורות בטבלה וכמה איטרציות לכל אחת, למעשה O(1).',
    },
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
      en: 'Keep a dictionary from key to a list of timestamps and a parallel list of values. Timestamps arrive in increasing order, so each list is already sorted and set is an append: O(1). get binary-searches the timestamps for the last one that is ≤ the requested time and returns the value at the same position: O(log n). If the requested time is earlier than the first entry, return "". No classes needed: two functions and two dictionaries.',
      he: 'מחזיקים מילון ממפתח לרשימת חותמות זמן ורשימה מקבילה של ערכים. חותמות הזמן מגיעות בסדר עולה, ולכן כל רשימה כבר ממוינת ו-set הוא פשוט הוספה לסוף: O(1). ‏get מבצע חיפוש בינארי בחותמות הזמן אחרי האחרונה שקטנה או שווה לזמן המבוקש ומחזיר את הערך באותו מיקום: O(log n). אם הזמן המבוקש מוקדם מהרשומה הראשונה, מחזירים "". בלי מחלקות: שתי פונקציות ושני מילונים.',
    },
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
      en: 'One pass with a little state: the previous value and the length of the current run of equal values. At each index i ≥ 1: update the run length (reset to 1 when the value changes); if the run length is exactly 3, report i; if readings[i] is 0 and readings[i-1] is not, report i; if readings[i-1] is not 0 and |readings[i] - readings[i-1]| > 0.5 × |readings[i-1]|, report i. Report each index once even if several rules fire. O(n) time, O(1) extra space. The edge cases interviewers look for: division by zero in the percentage rule (skip it when the previous value is 0), and whether a run of five equal values reports once (at the third) or at every reading from the third on. Say your assumption out loud.',
      he: 'מעבר אחד עם מעט מצב: הערך הקודם ואורך הרצף הנוכחי של ערכים שווים. בכל אינדקס i ≥ 1: מעדכנים את אורך הרצף (מאפסים ל-1 כשהערך משתנה); אם אורך הרצף הוא בדיוק 3, מדווחים על i; אם readings[i] הוא 0 והקודם לא, מדווחים על i; אם הקודם אינו 0 ו-|readings[i] - readings[i-1]| > 0.5 × |readings[i-1]|, מדווחים על i. מדווחים על כל אינדקס פעם אחת גם אם כמה כללים מתקיימים. זמן O(n), זיכרון נוסף O(1). מקרי הקצה שהמראיינים מחפשים: חלוקה באפס בכלל האחוזים (מדלגים כשהערך הקודם 0), והאם רצף של חמישה ערכים שווים מדווח פעם אחת (בשלישי) או בכל קריאה מהשלישית והלאה. אמרו את ההנחה שלכם בקול.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Keep a hash map from key to a node in a doubly linked list ordered by recency. get moves the node to the front; put inserts at the front and, past capacity, evicts the tail. Both are O(1). In Python, OrderedDict gives you this directly (move_to_end / popitem(last=False)).',
      he: 'שומרים מפת hash ממפתח לצומת ברשימה מקושרת דו-כיוונית שמסודרת לפי זמן השימוש. get מעביר את הצומת לראש; put מכניס לראש, ומעבר לקיבולת מוציא את הזנב. שניהם O(1). ב-Python אפשר להשתמש ישירות ב-OrderedDict (move_to_end ו-popitem(last=False)).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'verification', 'qa', 'frontend', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Scan left to right with a stack: push every opening bracket; on a closing bracket the stack top must be its matching opener, otherwise fail. Balanced if the stack is empty at the end. O(n) time, O(n) space.',
      he: 'סורקים משמאל לימין עם מחסנית: כל סוגר פותח נדחף; בסוגר סוגר, ראש המחסנית חייב להיות הפותח המתאים, אחרת נכשלים. המחרוזת מאוזנת אם המחסנית ריקה בסוף. זמן O(n), מקום O(n).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Sort by start. Walk the list keeping the current merged interval: if the next start is within the current end, extend the end; otherwise emit the current one and start a new one. O(n log n) for the sort, O(n) for the walk.',
      he: 'ממיינים לפי start. עוברים על הרשימה ושומרים את המקטע הממוזג הנוכחי: אם ה-start הבא בתוך ה-end הנוכחי, מרחיבים את ה-end; אחרת פולטים את הנוכחי ומתחילים חדש. O(n log n) בגלל המיון, O(n) למעבר.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'verification', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: "Floyd's tortoise and hare: one pointer moves one step, the other two. If they ever meet there is a cycle; if the fast pointer reaches null there is none. O(n) time, O(1) space. A set of visited nodes also works but costs O(n) memory.",
      he: 'הצב והארנב של פלויד: מצביע אחד מתקדם צעד, השני שני צעדים. אם הם נפגשים יש מעגל; אם המהיר מגיע ל-null אין. זמן O(n), מקום O(1). גם set של צמתים שביקרנו בהם עובד, אבל עולה O(n) זיכרון.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Count with a hash map, then either keep the k largest counts in a heap (O(n log k)) or bucket-sort by frequency (O(n)): index i holds the values that appear i times, then read the buckets from the highest frequency down.',
      he: 'סופרים עם מפת hash, ואז שומרים את k הספירות הגדולות ב-heap (O(n log k)) או עושים bucket sort לפי שכיחות (O(n)): אינדקס i מחזיק את הערכים שמופיעים i פעמים, וקוראים מהדלי הגבוה למטה.',
    },
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
    topicId: 'python',
    roleIds: ['verification', 'qa', 'devops', 'data', 'sysadmin'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Stream the file line by line (never read it all into memory), pull the timestamp and the level with split or a regex, count in a dict keyed by hour, then take the max by count. Mention what you do with malformed lines and time zones. In a shell: grep + cut + sort | uniq -c.',
      he: 'קוראים את הקובץ שורה-שורה (לא כולו לזיכרון), מחלצים את חותמת הזמן והרמה עם split או regex, סופרים ב-dict לפי שעה, ולוקחים מקסימום לפי ספירה. כדאי להזכיר מה עושים עם שורות פגומות ואזורי זמן. ב-shell: grep + cut + sort | uniq -c.',
    },
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
      en: 'The Global Interpreter Lock lets only one thread run Python bytecode at a time, so CPU-bound threads do not run in parallel. Threads still help for I/O-bound work (network, files, waiting on hardware) because the lock is released while blocking. For CPU-bound work use multiprocessing, or C extensions / NumPy that release the GIL.',
      he: 'ה-Global Interpreter Lock מאפשר רק ל-thread אחד להריץ bytecode של Python בכל רגע, ולכן threads עם עבודת CPU לא רצים במקביל. threads עדיין עוזרים לעבודת I/O (רשת, קבצים, המתנה לחומרה) כי הנעילה משתחררת בזמן החסימה. לעבודת CPU משתמשים ב-multiprocessing, או בהרחבות C / NumPy שמשחררות את ה-GIL.',
    },
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
      en: 'A generator produces values lazily with yield: each next() resumes the function until the next yield. It keeps only the current state in memory, so it handles huge or infinite sequences and pipelines (read a log line by line, filter, transform) without building intermediate lists. A list is better when you need random access or to iterate more than once.',
      he: 'generator מייצר ערכים בעצלתיים עם yield: כל next() ממשיך את הפונקציה עד ה-yield הבא. הוא שומר בזיכרון רק את המצב הנוכחי, ולכן מתאים לסדרות ענקיות או אינסופיות ול-pipelines (קריאת לוג שורה-שורה, סינון, המרה) בלי לבנות רשימות ביניים. רשימה עדיפה כשצריך גישה אקראית או לעבור יותר מפעם אחת.',
    },
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
      en: 'Default values are evaluated once, when the function is defined, so every call without items shares the same list and it keeps growing across calls. Use None as the default and create the list inside the function. The same trap exists for dicts and sets.',
      he: 'ערכי ברירת המחדל מחושבים פעם אחת, כשהפונקציה מוגדרת, ולכן כל קריאה בלי items משתפת את אותה רשימה והיא גדלה בין קריאות. משתמשים ב-None כברירת מחדל ויוצרים את הרשימה בתוך הפונקציה. אותה מלכודת קיימת ל-dict ול-set.',
    },
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
      en: 'Check whether anything listens on the port (ss -ltnp / lsof -i :PORT), whether the process is alive (ps, systemctl status), its logs (journalctl -u service, /var/log), whether a firewall blocks it (iptables / nft), and whether the port answers locally (curl localhost:PORT) versus remotely. If it is up but hanging, strace -p or a stack dump shows what it waits on.',
      he: 'בודקים אם משהו מקשיב על הפורט (ss -ltnp / lsof -i :PORT), אם התהליך חי (ps, systemctl status), את הלוגים שלו (journalctl -u service, /var/log), אם firewall חוסם (iptables / nft), ואם הפורט עונה מקומית (curl localhost:PORT) לעומת מרחוק. אם הוא חי אבל תקוע, strace -p או dump של ה-stack מראים על מה הוא מחכה.',
    },
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
      en: 'The client sends SYN with its initial sequence number, the server answers SYN-ACK with its own sequence number and an acknowledgement, and the client replies ACK. Both sides now know the other is reachable and agree on starting sequence numbers, which TCP needs for ordering, loss detection and retransmission. UDP has no handshake, so it is faster but gives none of those guarantees.',
      he: 'הלקוח שולח SYN עם המספר הסידורי ההתחלתי שלו, השרת עונה SYN-ACK עם המספר הסידורי שלו ואישור, והלקוח משיב ACK. עכשיו שני הצדדים יודעים שהצד השני נגיש ומסכימים על מספרי סידור התחלתיים, שנחוצים ל-TCP לסידור, לזיהוי אובדן ולשידור חוזר. ל-UDP אין לחיצת יד, ולכן הוא מהיר יותר אבל בלי ההבטחות האלה.',
    },
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
      en: 'Start from the spec: list the features (link up/down, MTU, offloads, multi-queue, error paths) and write a test plan with expected results. Layer the tests: unit tests for pure logic, functional tests on real hardware (traffic with iperf / pktgen, counters, ethtool), negative tests (cable pull, bad packets, resource exhaustion), stress and long-run stability, and performance against a baseline. Automate in Python, run in CI on every build, collect logs and dmesg, and make every failure reproducible with the exact firmware and driver versions.',
      he: 'מתחילים מהמפרט: רושמים את הפיצ׳רים (link up/down, MTU, offloads, multi-queue, נתיבי שגיאה) וכותבים תוכנית בדיקות עם תוצאות צפויות. בונים שכבות: unit tests ללוגיקה טהורה, בדיקות פונקציונליות על חומרה אמיתית (תעבורה עם iperf / pktgen, מונים, ethtool), בדיקות שליליות (ניתוק כבל, פקטות פגומות, מחסור במשאבים), stress ויציבות לאורך זמן, וביצועים מול baseline. מאטמטים ב-Python, מריצים ב-CI על כל build, אוספים לוגים ו-dmesg, ומוודאים שכל כשל ניתן לשחזור עם גרסאות הקושחה והדרייבר המדויקות.',
    },
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
      en: 'The naive way checks every pair: O(n²).\nBetter: one pass with a hash map from value to index. For each number look up target - number; if it is already in the map, return both indices, otherwise store the current number. O(n) time, O(n) space.\nInterviewers then like to ask: what if the array is sorted (two pointers, O(1) space), and what if there can be several answers.',
      he: 'הדרך הנאיבית בודקת כל זוג: O(n²).\nעדיף: מעבר אחד עם מפת hash מערך לאינדקס. לכל מספר מחפשים את target - number; אם הוא כבר במפה מחזירים את שני האינדקסים, אחרת שומרים את המספר הנוכחי. זמן O(n), מקום O(n).\nשאלות המשך נפוצות: מה אם המערך ממוין (שני מצביעים, מקום O(1)), ומה אם יכולות להיות כמה תשובות.',
    },
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
      en: 'The trap: drawing random numbers and checking whether each was already used gets slower and slower (expected O(N log N) draws, and a "used" array). The clean answer is the Fisher-Yates shuffle: fill the array with 1..N, then walk i from N-1 down to 1 and swap element i with a random index in [0, i]. Every permutation is equally likely, O(N) time, O(1) extra space.\nMention that rand() % (i + 1) is slightly biased when RAND_MAX + 1 is not a multiple of i + 1; interviewers like hearing that.',
      he: 'המלכודת: להגריל מספרים ולבדוק אם כל אחד כבר בשימוש הולך ומאט (בממוצע O(N log N) הגרלות, ועוד מערך "בשימוש"). התשובה הנקייה היא ערבוב Fisher-Yates: ממלאים את המערך ב-1..N, ואז עוברים עם i מ-N-1 עד 1 ומחליפים את האיבר i עם אינדקס אקראי בטווח [0, i]. כל תמורה בעלת אותה הסתברות, זמן O(N), מקום נוסף O(1).\nכדאי להזכיר ש-rand() % (i + 1) מוטה מעט כש-RAND_MAX + 1 לא מתחלק ב-i + 1; מראיינים אוהבים לשמוע את זה.',
    },
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
      en: 'Look at the lowest bit: n & 1 is 1 for odd numbers and 0 for even ones, for negatives as well (two’s complement). O(1).\nAlternatives if they push: (n / 2) * 2 == n for even (integer division drops the remainder), or n - 2 * (n / 2). The bit test is the one interviewers expect.',
      he: 'מסתכלים על הביט הנמוך: n & 1 הוא 1 למספר אי-זוגי ו-0 לזוגי, גם לשליליים (משלים ל-2). O(1).\nחלופות אם מתעקשים: (n / 2) * 2 == n לזוגי (חילוק שלמים זורק את השארית), או n - 2 * (n / 2). בדיקת הביט היא מה שמראיינים מצפים לו.',
    },
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
      en: 'Encapsulation: data and the code that works on it live together, and the internals are hidden behind a small interface (private fields, public methods). Example: a BankAccount whose balance can only change through deposit() and withdraw(), so it can never go negative by accident.\nAbstraction: expose what an object does, not how. Example: a Shape with area() - callers do not care whether it is a circle or a square.\nInheritance: a class reuses and extends another. Example: Circle and Square inherit from Shape and share its common code (name, position).\nPolymorphism: the same call behaves differently per type. Example: a list of Shape pointers, and shape->area() picks the right implementation at run time (virtual functions / overriding).\nGood answers add when NOT to inherit (prefer composition) and what breaks encapsulation (public fields, getters that leak internals).',
      he: 'אנקפסולציה (כימוס): הנתונים והקוד שפועל עליהם חיים יחד, והפנימיות מוסתרת מאחורי ממשק קטן (שדות פרטיים, מתודות ציבוריות). דוגמה: BankAccount שהיתרה בו משתנה רק דרך deposit() ו-withdraw(), ולכן לעולם לא תהיה שלילית בטעות.\nהפשטה: חושפים מה האובייקט עושה, לא איך. דוגמה: Shape עם area() - מי שקורא לא צריך לדעת אם זה עיגול או ריבוע.\nירושה: מחלקה משתמשת שוב במחלקה אחרת ומרחיבה אותה. דוגמה: Circle ו-Square יורשים מ-Shape וחולקים את הקוד המשותף (שם, מיקום).\nפולימורפיזם: אותה קריאה מתנהגת אחרת לכל טיפוס. דוגמה: רשימה של מצביעים ל-Shape, ו-shape->area() בוחר את המימוש הנכון בזמן ריצה (פונקציות וירטואליות / דריסה).\nתשובה טובה מוסיפה מתי לא לרשת (להעדיף הרכבה) ומה שובר אנקפסולציה (שדות ציבוריים, getters שחושפים פנימיות).',
    },
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
      en: 'In C, static has two meanings. On a global variable or function it gives internal linkage: the symbol is visible only inside its own .c file (no clashes between files, hidden implementation). On a local variable it changes lifetime, not scope: the variable is created once, keeps its value between calls, and lives until the program ends.\nC++ keeps both and adds class members: a static data member is one variable shared by all objects of the class (declared in the class, defined once outside it), and a static member function belongs to the class, has no this pointer and can touch only static members. Since C++11 the initialisation of a static local is also thread-safe (the "magic static" used for singletons).',
      he: 'ב-C ל-static שתי משמעויות. על משתנה גלובלי או פונקציה היא נותנת internal linkage: הסימבול נראה רק בתוך קובץ ה-.c שלו (בלי התנגשויות בין קבצים, מימוש מוסתר). על משתנה מקומי היא משנה את אורך החיים, לא את הטווח: המשתנה נוצר פעם אחת, שומר את ערכו בין קריאות, וחי עד סוף התוכנית.\nC++ שומרת את שתיהן ומוסיפה חברי מחלקה: static data member הוא משתנה אחד שמשותף לכל האובייקטים של המחלקה (מוצהר במחלקה, מוגדר פעם אחת מחוצה לה), ו-static member function שייכת למחלקה, אין לה this ויכולה לגעת רק בחברים סטטיים. מ-C++11 גם האתחול של static מקומי בטוח ל-threads (ה-"magic static" שמשמש ל-singleton).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'qa', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Put the values into a hash set while scanning; the first value already in the set is a duplicate. O(n) time, O(n) space. Sorting first and comparing neighbours is O(n log n) with O(1) extra space, which is the trade-off to mention.',
      he: 'מכניסים את הערכים ל-hash set תוך כדי סריקה; הערך הראשון שכבר נמצא ב-set הוא כפילות. זמן O(n), מקום O(n). מיון ובדיקת שכנים הוא O(n log n) עם מקום נוסף O(1), וזה ה-trade-off שכדאי להזכיר.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'qa', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Different lengths → no. Otherwise count the letters of the first string and subtract the letters of the second; every count must end at zero. For lowercase ASCII an array of 26 counters is enough: O(n) time, O(1) space. Sorting both strings and comparing is the simple O(n log n) alternative.',
      he: 'אורכים שונים → לא. אחרת סופרים את האותיות של המחרוזת הראשונה ומחסירים את האותיות של השנייה; כל מונה חייב להסתיים באפס. לאותיות ASCII קטנות מספיק מערך של 26 מונים: זמן O(n), מקום O(1). מיון שתי המחרוזות והשוואה הוא החלופה הפשוטה ב-O(n log n).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: "Kadane's algorithm: walk once, keeping the best sum of a subarray that ends at the current index: current = max(n, current + n). The answer is the maximum of current over the walk. If the running sum ever drops below the element itself, a fresh start is better. O(n) time, O(1) space. Handle the all-negative case: the answer is the largest single element, which this formula gives naturally.",
      he: 'האלגוריתם של Kadane: עוברים פעם אחת ושומרים את הסכום הטוב ביותר של תת-מערך שמסתיים באינדקס הנוכחי: current = max(n, current + n). התשובה היא המקסימום של current לאורך המעבר. אם הסכום הרץ יורד מתחת לאיבר עצמו, עדיף להתחיל מחדש. זמן O(n), מקום O(1). מקרה כל-שלילי: התשובה היא האיבר הגדול ביותר, וזה יוצא מהנוסחה באופן טבעי.',
    },
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
    text: { en: 'Best time to buy and sell a stock once: maximise the profit.', he: 'הזמן הטוב ביותר לקנות ולמכור מניה פעם אחת: הגדילו את הרווח למקסימום.' },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'One pass keeping the lowest price seen so far; at each day the profit if selling today is price - lowest, and the answer is the best of those. You must buy before you sell, which the left-to-right walk guarantees. O(n) time, O(1) space. If no profit is possible, return 0.',
      he: 'מעבר אחד ששומר את המחיר הנמוך ביותר עד כה; בכל יום הרווח ממכירה היום הוא price - lowest, והתשובה היא הטוב מביניהם. חייבים לקנות לפני שמוכרים, וזה מובטח במעבר משמאל לימין. זמן O(n), מקום O(1). אם אין רווח אפשרי מחזירים 0.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'backend', 'verification', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Use a dummy head and a tail pointer. While both lists have nodes, attach the smaller head to the tail and advance that list; when one list runs out, attach the rest of the other. O(n + m) time, O(1) extra space because nodes are re-linked, not copied. The recursive version is shorter but uses O(n + m) stack.',
      he: 'משתמשים בראש דמה ובמצביע זנב. כל עוד בשתי הרשימות יש צמתים, מחברים לזנב את הראש הקטן יותר ומקדמים את אותה רשימה; כשאחת נגמרת מחברים את השאר של השנייה. זמן O(n + m), מקום נוסף O(1) כי הצמתים מקושרים מחדש ולא מועתקים. הגרסה הרקורסיבית קצרה יותר אבל צורכת O(n + m) של מחסנית.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'To stand on step n you came from n-1 (one step) or n-2 (two steps), so ways(n) = ways(n-1) + ways(n-2): the Fibonacci recurrence with ways(1) = 1, ways(2) = 2. Naive recursion is exponential; keep the last two values instead for O(n) time, O(1) space. This is the classic introduction to dynamic programming: overlapping subproblems, bottom-up table, then only the needed rows.',
      he: 'כדי לעמוד על מדרגה n הגעת מ-n-1 (צעד אחד) או מ-n-2 (שני צעדים), ולכן ways(n) = ways(n-1) + ways(n-2): נוסחת פיבונאצ׳י עם ways(1) = 1, ways(2) = 2. רקורסיה נאיבית היא אקספוננציאלית; במקום זה שומרים רק את שני הערכים האחרונים: זמן O(n), מקום O(1). זו ההקדמה הקלאסית לתכנות דינמי: תת-בעיות חופפות, טבלה מלמטה למעלה, ואז רק השורות הנחוצות.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Recursion: an empty tree has depth 0, otherwise 1 + max(depth(left), depth(right)). O(n) time, O(h) stack where h is the height. The iterative version does a BFS level by level and counts levels, which avoids deep recursion on a skewed tree.',
      he: 'רקורסיה: לעץ ריק עומק 0, אחרת 1 + max(depth(left), depth(right)). זמן O(n), מחסנית O(h) כש-h הוא הגובה. הגרסה האיטרטיבית עושה BFS רמה-רמה וסופרת רמות, וכך נמנעת מרקורסיה עמוקה בעץ מוטה.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'data'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'The common mistake is to compare each node only with its direct children. Every node must satisfy a range inherited from all its ancestors: pass (low, high) down the recursion; the left child gets (low, node) and the right child gets (node, high). Alternatively do an in-order traversal and check that the values are strictly increasing. O(n) time, O(h) stack.',
      he: 'הטעות הנפוצה היא להשוות כל צומת רק לילדים הישירים שלו. כל צומת חייב לקיים טווח שירש מכל אבותיו: מעבירים (low, high) ברקורסיה; הילד השמאלי מקבל (low, node) והימני (node, high). לחלופין עושים סריקה in-order ובודקים שהערכים עולים ממש. זמן O(n), מחסנית O(h).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Scan the grid; every time you meet an unvisited land cell, count one island and flood-fill from it (DFS or BFS over the four neighbours), marking every reached land cell as visited (for example by turning it into water). O(rows × cols) time; the flood fill visits each cell once. BFS with a queue avoids deep recursion on big grids.',
      he: 'סורקים את הגריד; בכל פעם שפוגשים תא יבשה שלא ביקרנו בו סופרים אי אחד ומציפים ממנו (DFS או BFS על ארבעת השכנים), ומסמנים כל תא יבשה שהגענו אליו כמבוקר (למשל הופכים אותו למים). זמן O(rows × cols); ההצפה מבקרת בכל תא פעם אחת. BFS עם תור נמנע מרקורסיה עמוקה בגרידים גדולים.',
    },
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
    text: { en: 'Product of array except self, without division.', he: 'מכפלת כל האיברים חוץ מהאיבר עצמו, בלי חילוק.' },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'result[i] = (product of everything left of i) × (product of everything right of i). Build the left products in one pass into the result array, then walk from the right keeping a running right product and multiply it in. O(n) time, O(1) extra space besides the output. Division is not allowed because of zeros (and the interviewer wants the prefix/suffix idea).',
      he: 'result[i] = (מכפלת כל מה שמשמאל ל-i) × (מכפלת כל מה שמימין ל-i). בונים את מכפלות השמאל במעבר אחד לתוך מערך התוצאה, ואז עוברים מימין עם מכפלת ימין רצה ומכפילים אותה פנימה. זמן O(n), מקום נוסף O(1) מעבר לפלט. חילוק אסור בגלל אפסים (והמראיין רוצה את רעיון ה-prefix/suffix).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'verification', 'data', 'student', 'frontend'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Sliding window: two indexes left and right, and a map from character to its last index. Move right over the string; if the character was seen inside the current window, jump left to just after its previous position. The window is always repeat-free, so the answer is the largest right - left + 1. O(n) time, O(k) space for the alphabet.',
      he: 'חלון הזזה: שני אינדקסים left ו-right, ומפה מתו לאינדקס האחרון שלו. מזיזים את right על המחרוזת; אם התו כבר נראה בתוך החלון הנוכחי, מקפיצים את left לאחרי המיקום הקודם שלו. החלון תמיד בלי חזרות, ולכן התשובה היא ה-right - left + 1 הגדול ביותר. זמן O(n), מקום O(k) לפי גודל האלפבית.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Two words are anagrams if they have the same sorted letters, so use the sorted word as a hash-map key and append each word to its group. O(n · k log k) for n words of length k. A count-based key (26 letter counts) makes it O(n · k) and is the follow-up interviewers expect.',
      he: 'שתי מילים הן אנגרמות אם האותיות הממוינות שלהן זהות, ולכן משתמשים במילה הממוינת כמפתח במפת hash ומוסיפים כל מילה לקבוצה שלה. O(n · k log k) ל-n מילים באורך k. מפתח מבוסס ספירה (26 מונים) נותן O(n · k), וזו שאלת ההמשך שמראיינים מצפים לה.',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Sorting is O(n log n). Better: a min-heap of size k - push every element, pop when the heap grows past k; the top is the answer. O(n log k). Best on average: quickselect, the partition step of quicksort applied to one side only, O(n) average and O(1) extra space. Mention which one you would write in an interview (heap: short and safe) and why quickselect can degrade to O(n²).',
      he: 'מיון הוא O(n log n). עדיף: min-heap בגודל k - דוחפים כל איבר ומוציאים כשה-heap גדל מעבר ל-k; הראש הוא התשובה. O(n log k). הכי טוב בממוצע: quickselect, צעד ה-partition של quicksort שמופעל רק על צד אחד, O(n) בממוצע ומקום נוסף O(1). כדאי לומר מה הייתם כותבים בראיון (heap: קצר ובטוח) ולמה quickselect עלול להתדרדר ל-O(n²).',
    },
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
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'embedded', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Keep a second stack of minimums: on push, also push min(value, current minimum); on pop, pop both. The top of the min stack is always the minimum of what is left, so push, pop, top and getMin are all O(1). The memory doubles; the space-saving variant pushes to the min stack only when the value is ≤ the current minimum.',
      he: 'שומרים מחסנית שנייה של מינימומים: ב-push דוחפים גם min(value, המינימום הנוכחי); ב-pop מוציאים משתיהן. ראש מחסנית המינימום הוא תמיד המינימום של מה שנשאר, ולכן push, pop, top ו-getMin כולם O(1). הזיכרון מוכפל; הגרסה החסכונית דוחפת למחסנית המינימום רק כשהערך ≤ המינימום הנוכחי.',
    },
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
    text: { en: 'Find the missing number in an array containing 0..n with one number absent.', he: 'מצאו את המספר החסר במערך שמכיל את 0..n עם מספר אחד חסר.' },
    topicId: 'algorithms',
    roleIds: ['software', 'embedded', 'verification', 'qa', 'student'],
    type: 'coding',
    difficulty: 'easy',
    confidence: 'medium',
    timesAsked: 2,
    answer: {
      en: 'Two O(n) / O(1) tricks. Sum: the expected sum is n(n+1)/2; subtract the actual sum. XOR: XOR all numbers 0..n together with all array values; pairs cancel and the missing number remains, with no overflow risk. Sorting or a set also work but cost more.',
      he: 'שני טריקים ב-O(n) / O(1). סכום: הסכום הצפוי הוא n(n+1)/2; מחסירים את הסכום בפועל. XOR: עושים XOR לכל המספרים 0..n יחד עם כל ערכי המערך; הזוגות מתבטלים והמספר החסר נשאר, בלי סיכון ל-overflow. מיון או set עובדים גם, אבל עולים יותר.',
    },
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
    text: { en: 'Search a target in a sorted array that was rotated, in O(log n).', he: 'חפשו יעד במערך ממוין שעבר סיבוב, ב-O(log n).' },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'student', 'verification'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Binary search with one extra observation: at every step at least one half of [lo, hi] is properly sorted. Check which half is sorted (compare nums[lo] with nums[mid]); if the target lies inside that sorted half, continue there, otherwise go to the other half. O(log n) time, O(1) space. Watch the boundary comparisons (≤ vs <).',
      he: 'חיפוש בינארי עם תובנה אחת נוספת: בכל צעד לפחות חצי אחד של [lo, hi] ממוין כמו שצריך. בודקים איזה חצי ממוין (משווים את nums[lo] ל-nums[mid]); אם היעד בתוך החצי הממוין ממשיכים שם, אחרת עוברים לחצי השני. זמן O(log n), מקום O(1). לשים לב להשוואות הגבול (≤ מול <).',
    },
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
    text: { en: 'Coin change: the fewest coins that make up an amount.', he: 'עודף במטבעות: המספר הקטן ביותר של מטבעות שמרכיבים סכום.' },
    topicId: 'algorithms',
    roleIds: ['software', 'backend', 'data', 'student'],
    type: 'coding',
    difficulty: 'medium',
    confidence: 'medium',
    timesAsked: 1,
    answer: {
      en: 'Greedy (largest coin first) fails for coins like [1, 3, 4] and amount 6. Dynamic programming: dp[a] = fewest coins for amount a = 1 + min(dp[a - coin]) over coins that fit, with dp[0] = 0 and unreachable amounts marked infinite. Fill from 1 to the amount: O(amount × coins) time, O(amount) space. Return -1 when dp[amount] stays infinite.',
      he: 'חמדני (המטבע הגדול קודם) נכשל למשל במטבעות [1, 3, 4] וסכום 6. תכנות דינמי: dp[a] = מספר המטבעות הקטן ביותר לסכום a = 1 + min(dp[a - coin]) על המטבעות שנכנסים, עם dp[0] = 0 וסכומים בלתי אפשריים מסומנים כאינסוף. ממלאים מ-1 עד הסכום: זמן O(amount × coins), מקום O(amount). מחזירים -1 כש-dp[amount] נשאר אינסוף.',
    },
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
