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
      en: 'Polymorphism means one interface, many implementations: code written against a base type or a common interface works with any concrete type that fulfils it, and the right behaviour is chosen automatically.\nThere are two main forms:\n- Dynamic (runtime) polymorphism: a base class declares a virtual method, derived classes override it, and a call through a base pointer or reference is dispatched at runtime to the actual object\'s override. In C++ this is done with a vtable; in Java every non-static, non-final, non-private method is virtual by default.\n- Static (compile-time) polymorphism: function overloading, operator overloading and templates or generics. The compiler picks the implementation, so there is no runtime cost.\nA concrete example: a drawing app keeps a list of Shape pointers and calls area() on each. Circle and Square compute it differently, but the loop never changes when you add a Triangle. The same idea appears in device drivers: the kernel calls read() on a generic interface and each driver supplies its own implementation.\nTrade-offs: dynamic dispatch gives flexibility and follows the open/closed principle, but costs an indirect call, a vptr in every object and usually blocks inlining. Templates are faster but increase code size and compile time, and the type set must be known at compile time.\nA common follow-up: in C++ always give a polymorphic base class a virtual destructor, otherwise deleting a derived object through a base pointer is undefined behaviour.',
      he: 'פולימורפיזם זה ממשק אחד עם הרבה מימושים: קוד שנכתב מול טיפוס בסיס או ממשק משותף עובד עם כל טיפוס קונקרטי שמממש אותו, וההתנהגות הנכונה נבחרת אוטומטית.\nיש שתי צורות עיקריות:\n- פולימורפיזם דינמי (בזמן ריצה): מחלקת הבסיס מצהירה על מתודה virtual, המחלקות היורשות עושות לה override, וקריאה דרך pointer או reference לבסיס מנותבת בזמן ריצה למימוש של האובייקט האמיתי. ב-C++ זה עובד דרך vtable, וב-Java כל מתודה שאינה static, final או private היא וירטואלית כברירת מחדל.\n- פולימורפיזם סטטי (בזמן קומפילציה): overloading של פונקציות ואופרטורים, ו-templates או generics. הקומפיילר בוחר את המימוש, ולכן אין עלות בזמן ריצה.\nדוגמה: אפליקציית ציור מחזיקה רשימה של מצביעים ל-Shape וקוראת ל-area() על כל אחד. Circle ו-Square מחשבים את זה אחרת, אבל הלולאה לא משתנה כשמוסיפים Triangle. אותו רעיון קיים ב-drivers: ה-kernel קורא ל-read() דרך ממשק כללי, וכל driver מספק מימוש משלו.\nשיקולים: dispatch דינמי נותן גמישות ומקיים את עקרון open/closed, אבל עולה בקריאה עקיפה, ב-vptr בכל אובייקט, ובדרך כלל מונע inlining. templates מהירים יותר אבל מגדילים את גודל הקוד ואת זמן הקומפילציה, וצריך לדעת את הטיפוסים כבר בקומפילציה.\nשאלת המשך נפוצה: ב-C++ תמיד לתת למחלקת בסיס פולימורפית destructor וירטואלי, אחרת מחיקה של אובייקט יורש דרך מצביע לבסיס היא undefined behaviour.',
    },
    keyPoints: [
      {
        en: 'Name both kinds: runtime (virtual functions, overriding) and compile-time (overloading, templates, generics).',
        he: 'לציין את שני הסוגים: בזמן ריצה (פונקציות וירטואליות, override) ובזמן קומפילציה (overloading, templates, generics).',
      },
      {
        en: 'Distinguish overriding (same signature in a derived class, resolved at runtime) from overloading (different parameters, resolved at compile time).',
        he: 'להבדיל בין override (אותה חתימה במחלקה יורשת, נקבע בזמן ריצה) לבין overload (פרמטרים שונים, נקבע בזמן קומפילציה).',
      },
      {
        en: 'Mention the cost of dynamic dispatch: a vptr per object, an indirect call and lost inlining.',
        he: 'להזכיר את המחיר של dispatch דינמי: vptr בכל אובייקט, קריאה עקיפה ואובדן inlining.',
      },
      {
        en: 'A polymorphic base class needs a virtual destructor.',
        he: 'מחלקת בסיס פולימורפית צריכה destructor וירטואלי.',
      },
      {
        en: 'Object slicing: passing a derived object by value as a base copies only the base part and loses polymorphism, so pass by pointer or reference.',
        he: 'Object slicing: העברה של אובייקט יורש by value כטיפוס הבסיס מעתיקה רק את חלק הבסיס ומאבדת את הפולימורפיזם, לכן מעבירים pointer או reference.',
      },
      {
        en: 'Tie it to design: it lets you add new types without touching existing callers (open/closed principle).',
        he: 'לקשר לתכנון: זה מאפשר להוסיף טיפוסים חדשים בלי לגעת בקוד הקיים שמשתמש בהם (עקרון open/closed).',
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
      en: 'A virtual function is a member function declared with the virtual keyword in a base class, so that a call through a base pointer or reference runs the override of the object\'s actual (dynamic) type, not the function of the pointer\'s static type.\nHow it works in a typical implementation:\n- Every class that has virtual functions gets one vtable: an array of function pointers, one slot per virtual function.\n- Every object of such a class carries a hidden pointer, the vptr, set by the constructor to its class\'s vtable.\n- A call like p->draw() loads the vptr, indexes into the vtable and makes an indirect call. A derived class that overrides draw() simply has a different pointer in that slot.\nExample: with Base* p = new Derived, p->hello() prints Derived because hello is virtual, while a non-virtual bye() prints the Base version because it is bound at compile time.\nRelated terms: a pure virtual function (= 0) has no implementation in the base and makes the class abstract, so it cannot be instantiated. The override specifier makes the compiler check that you really override something, and final stops further overriding.\nTrade-offs: you pay one pointer per object, one indirect call per invocation and usually lose inlining, which matters in tight embedded loops.\nTwo pitfalls interviewers love: calling a virtual function from a constructor or destructor runs the version of the class currently being built, not the derived one; and a base class with virtual functions needs a virtual destructor.',
      he: 'פונקציה וירטואלית היא member function שמוצהרת עם virtual במחלקת הבסיס, כך שקריאה דרך pointer או reference לבסיס מריצה את ה-override של הטיפוס האמיתי של האובייקט, ולא את הפונקציה של הטיפוס הסטטי של המצביע.\nאיך זה עובד במימוש טיפוסי:\n- לכל מחלקה שיש בה פונקציות וירטואליות יש vtable אחת: מערך של מצביעים לפונקציות, תא אחד לכל פונקציה וירטואלית.\n- כל אובייקט של מחלקה כזו מחזיק מצביע נסתר, ה-vptr, שה-constructor מכוון ל-vtable של המחלקה שלו.\n- קריאה כמו p->draw() טוענת את ה-vptr, ניגשת לתא המתאים ב-vtable ומבצעת קריאה עקיפה. מחלקה יורשת שעושה override ל-draw() פשוט מחזיקה מצביע אחר באותו תא.\nדוגמה: עם Base* p = new Derived, הקריאה p->hello() מדפיסה Derived כי hello וירטואלית, ואילו bye() שאינה וירטואלית מדפיסה את הגרסה של Base כי היא נקשרת בזמן קומפילציה.\nמונחים קשורים: pure virtual function (= 0) היא פונקציה בלי מימוש בבסיס, והיא הופכת את המחלקה לאבסטרקטית, כך שאי אפשר ליצור ממנה מופע. המילה override גורמת לקומפיילר לבדוק שבאמת דורסים משהו, ו-final חוסמת דריסה נוספת.\nמחיר: pointer נוסף בכל אובייקט, קריאה עקיפה בכל הפעלה ובדרך כלל אובדן inlining, מה שמשנה בלולאות הדוקות ב-embedded.\nשתי מלכודות שמראיינים אוהבים: קריאה לפונקציה וירטואלית מתוך constructor או destructor מריצה את הגרסה של המחלקה שנבנית כרגע ולא של היורשת, ומחלקת בסיס עם פונקציות וירטואליות צריכה destructor וירטואלי.',
    },
    keyPoints: [
      {
        en: 'Explain the vtable and vptr: one table per class, one hidden pointer per object, an indirect call per invocation.',
        he: 'להסביר vtable ו-vptr: טבלה אחת לכל מחלקה, מצביע נסתר אחד לכל אובייקט, וקריאה עקיפה בכל הפעלה.',
      },
      {
        en: 'Dispatch depends on the dynamic type of the object, not the static type of the pointer; calling through an object by value is not polymorphic.',
        he: 'ה-dispatch תלוי בטיפוס הדינמי של האובייקט ולא בטיפוס הסטטי של המצביע; קריאה דרך אובייקט by value אינה פולימורפית.',
      },
      {
        en: 'Pure virtual (= 0) makes a class abstract; this is how C++ expresses interfaces.',
        he: 'pure virtual (= 0) הופכת מחלקה לאבסטרקטית; כך מגדירים ממשקים ב-C++.',
      },
      {
        en: 'Virtual calls inside constructors and destructors do not reach the derived override.',
        he: 'קריאה וירטואלית בתוך constructor או destructor לא מגיעה ל-override של היורשת.',
      },
      {
        en: 'Always declare a virtual destructor in a polymorphic base, otherwise delete through a base pointer is undefined behaviour.',
        he: 'תמיד להצהיר על destructor וירטואלי בבסיס פולימורפי, אחרת delete דרך מצביע לבסיס הוא undefined behaviour.',
      },
      {
        en: 'Use override to catch signature mistakes at compile time; compilers can devirtualize when the type is known or the class is final.',
        he: 'להשתמש ב-override כדי לתפוס טעויות חתימה בקומפילציה; הקומפיילר יכול לבטל את הוירטואליות (devirtualization) כשהטיפוס ידוע או כשהמחלקה final.',
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
      en: 'A static method belongs to the class itself rather than to any object, so you call it on the class name and it runs without an instance.\nWhat that implies:\n- It has no this (or self), so it cannot read or modify instance fields or call instance methods directly. It can use static fields and other static methods.\n- It exists once per class, not per object.\n- It is bound at compile time. In C++ a static member function cannot be virtual; in Java a static method with the same signature in a subclass hides the parent\'s method instead of overriding it, so there is no polymorphism.\nTypical uses: utility functions such as Math.max or Integer.parseInt, factory methods such as a createFromConfig() that returns a new object, and accessors for class-wide state such as an instance counter. In Python there is a useful distinction: @staticmethod receives nothing, while @classmethod receives the class (cls), which makes it the natural choice for alternative constructors that should also work for subclasses.\nTrade-offs: static methods are simple and cheap to call, but heavy use of them, especially with static mutable state, creates hidden global state, tight coupling and code that is hard to mock in unit tests.\nA good closing point: static mutable fields are shared by all threads, so a static method that touches them needs synchronization. And in C++ a static member function has a plain function pointer type, which is why it can be passed as a callback to a C API.',
      he: 'מתודה סטטית שייכת למחלקה עצמה ולא לאובייקט מסוים, ולכן קוראים לה דרך שם המחלקה והיא רצה בלי מופע.\nמה זה אומר:\n- אין לה this (או self), ולכן היא לא יכולה לקרוא או לשנות שדות של מופע או לקרוא ישירות למתודות של מופע. היא כן יכולה להשתמש בשדות סטטיים ובמתודות סטטיות אחרות.\n- היא קיימת פעם אחת לכל מחלקה ולא לכל אובייקט.\n- היא נקשרת בזמן קומפילציה. ב-C++ מתודה סטטית לא יכולה להיות virtual, וב-Java מתודה סטטית עם אותה חתימה במחלקה יורשת מסתירה (hiding) את המתודה של האב ולא דורסת אותה, כך שאין כאן פולימורפיזם.\nשימושים נפוצים: פונקציות עזר כמו Math.max או Integer.parseInt, מתודות factory כמו createFromConfig() שמחזירה אובייקט חדש, וגישה למצב משותף לכל המחלקה כמו מונה מופעים. ב-Python יש הבחנה שימושית: @staticmethod לא מקבלת כלום, ואילו @classmethod מקבלת את המחלקה (cls), ולכן היא הבחירה הטבעית ל-constructors חלופיים שצריכים לעבוד גם עבור מחלקות יורשות.\nשיקולים: מתודות סטטיות פשוטות וזולות לקריאה, אבל שימוש מוגזם בהן, במיוחד עם מצב סטטי שמשתנה, יוצר global state נסתר, צימוד חזק וקוד שקשה לעשות לו mock בבדיקות יחידה.\nנקודת סיום טובה: שדות סטטיים משותפים לכל ה-threads, ולכן מתודה סטטית שנוגעת בהם צריכה סנכרון. וב-C++ למתודה סטטית יש טיפוס של מצביע לפונקציה רגילה, ולכן אפשר להעביר אותה כ-callback ל-API של C.',
    },
    keyPoints: [
      {
        en: 'No this pointer: it cannot touch instance state unless an object is passed to it explicitly.',
        he: 'אין this: היא לא יכולה לגשת למצב של מופע אלא אם מעבירים לה אובייקט במפורש.',
      },
      {
        en: 'Static methods are not polymorphic: not virtual in C++, hidden rather than overridden in Java.',
        he: 'מתודות סטטיות אינן פולימורפיות: לא virtual ב-C++, ועוברות hiding ולא override ב-Java.',
      },
      {
        en: 'Name concrete uses: utilities, factory methods, a singleton\'s getInstance, counters.',
        he: 'לתת שימושים קונקרטיים: פונקציות עזר, factory methods, getInstance של singleton, מונים.',
      },
      {
        en: 'In Python, contrast @staticmethod with @classmethod.',
        he: 'ב-Python, להשוות בין @staticmethod ל-@classmethod.',
      },
      {
        en: 'Static mutable state is shared across threads and hurts testability; mention synchronization and dependency injection as the alternative.',
        he: 'מצב סטטי שמשתנה משותף בין threads ופוגע ביכולת לבדוק; להזכיר סנכרון ו-dependency injection כחלופה.',
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
      en: 'In C++ class and struct are almost the same thing: the only language differences are the default access levels.\nThe differences:\n- Default member access: members of a struct are public by default, members of a class are private by default.\n- Default inheritance access: struct D : B inherits publicly by default, class D : B inherits privately by default.\n- The keyword class can also be used for template parameters (template<class T>); struct cannot.\nEverything else is identical: both can have constructors, destructors, methods, virtual functions, operator overloads, templates and inheritance, and memory layout follows the same rules. You can even forward-declare with one keyword and define with the other, although some compilers warn about it.\nThe real difference is convention. Use struct for a passive data aggregate with public fields and few or no invariants, such as a Point, a configuration record or a packet header. Use class when the type has invariants to protect, private state and a behaviour-rich interface, such as an Account or a driver object.\nIt is also worth contrasting with C: a C struct has only data, no member functions, no access control and no inheritance. A C++ struct written like a C struct, with only plain data members, is a standard-layout aggregate, so it can be shared with C code or mapped onto a hardware register block.\nA common follow-up is padding: the compiler may insert padding between members for alignment, so sizeof can be larger than the sum of the fields, whether you wrote class or struct.',
      he: 'ב-C++ class ו-struct הם כמעט אותו דבר: ההבדל היחיד בשפה הוא רמות הגישה כברירת מחדל.\nההבדלים:\n- גישה לחברים: חברי struct הם public כברירת מחדל, וחברי class הם private כברירת מחדל.\n- גישה בירושה: struct D : B יורש כ-public כברירת מחדל, ו-class D : B יורש כ-private כברירת מחדל.\n- במילה class אפשר להשתמש גם בפרמטרים של template (template<class T>), וב-struct לא.\nכל השאר זהה: לשניהם יכולים להיות constructors, destructors, מתודות, פונקציות וירטואליות, overloading של אופרטורים, templates וירושה, ופריסת הזיכרון עובדת לפי אותם כללים. אפשר אפילו להצהיר מראש עם מילה אחת ולהגדיר עם השנייה, אם כי חלק מהקומפיילרים יתריעו על כך.\nההבדל האמיתי הוא מוסכמה. משתמשים ב-struct לאגרגט נתונים פסיבי עם שדות public ומעט או בלי אינווריאנטים, כמו Point, רשומת קונפיגורציה או header של packet. משתמשים ב-class כשלטיפוס יש אינווריאנטים להגן עליהם, מצב פרטי וממשק עשיר בהתנהגות, כמו Account או אובייקט של driver.\nכדאי גם להשוות ל-C: ב-C ל-struct יש רק נתונים, בלי פונקציות חברות, בלי בקרת גישה ובלי ירושה. struct ב-C++ שנכתב כמו ב-C, רק עם שדות נתונים פשוטים, הוא standard-layout aggregate, ולכן אפשר לחלוק אותו עם קוד C או למפות אותו על בלוק של רגיסטרים בחומרה.\nשאלת המשך נפוצה היא padding: הקומפיילר עשוי להוסיף ריפוד בין שדות לצורך alignment, ולכן sizeof יכול להיות גדול מסכום השדות, בלי קשר לשאלה אם כתבתם class או struct.',
    },
    keyPoints: [
      {
        en: 'Mention both defaults: member access and inheritance access, not just members.',
        he: 'להזכיר את שתי ברירות המחדל: גישה לחברים וגם סוג הירושה, לא רק את החברים.',
      },
      {
        en: 'State clearly that a struct can have methods, constructors and virtual functions in C++.',
        he: 'לומר במפורש שב-C++ ל-struct יכולים להיות מתודות, constructors ופונקציות וירטואליות.',
      },
      {
        en: 'Explain the convention: struct for plain data, class for types with invariants and encapsulation.',
        he: 'להסביר את המוסכמה: struct לנתונים פשוטים, class לטיפוסים עם אינווריאנטים ו-encapsulation.',
      },
      {
        en: 'Contrast with C structs and mention C interoperability and standard-layout types.',
        he: 'להשוות ל-struct של C ולהזכיר תאימות ל-C וטיפוסי standard-layout.',
      },
      {
        en: 'Be ready for padding and alignment questions about sizeof.',
        he: 'להיות מוכנים לשאלות על padding ו-alignment ועל sizeof.',
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
      en: 'Encapsulation is bundling data together with the operations that act on it, and hiding the internal state so the outside world can only use a deliberate public interface.\nHow it is achieved:\n- Make fields private and expose behaviour through public methods, not a raw setter for every field.\n- Validate every state change inside the class, so its invariants (rules that must always hold) are enforced in one place.\n- Expose only what callers need; keep helpers and internal data structures private.\n- Return copies or read-only views of internal collections instead of references callers could mutate.\nA concrete example: a BankAccount keeps balance private and offers deposit() and withdraw(). withdraw() refuses to go below zero, so no caller anywhere can create a negative balance. If tomorrow the balance is stored in cents or fetched from a database, callers do not change. In embedded C the same idea appears as a driver module that hides register access behind uart_send() and keeps its state static inside the .c file.\nWhy it matters: it protects invariants, reduces coupling, lets you change the implementation freely, narrows the area where a bug can originate, and makes unit testing and thread-safety easier because all access goes through known points.\nTrade-offs: getters and setters for everything is not real encapsulation, it just publishes the fields with extra steps.\nA good closing line: encapsulation is about controlling how state changes, and access modifiers are only the tool; in C you achieve it with opaque pointers and static functions.',
      he: 'Encapsulation (כימוס) היא אריזה של נתונים יחד עם הפעולות שפועלות עליהם, והסתרת המצב הפנימי כך שהעולם החיצוני יכול להשתמש רק בממשק ציבורי שתוכנן בכוונה.\nאיך משיגים את זה:\n- שדות private, וחשיפת התנהגות דרך מתודות public, ולא setter גולמי לכל שדה.\n- בדיקת תקינות של כל שינוי מצב בתוך המחלקה, כך שהאינווריאנטים (כללים שחייבים להתקיים תמיד) נאכפים במקום אחד.\n- חשיפה רק של מה שהקוראים צריכים; פונקציות עזר ומבני נתונים פנימיים נשארים private.\n- החזרת עותקים או תצוגה לקריאה בלבד של אוספים פנימיים, במקום הפניות שאפשר לשנות דרכן.\nדוגמה: BankAccount מחזיק את balance כ-private ומציע deposit() ו-withdraw(). withdraw() מסרבת לרדת מתחת לאפס, כך שאף קוד בשום מקום לא יכול ליצור יתרה שלילית. אם מחר היתרה תישמר באגורות או תגיע ממסד נתונים, הקוד שמשתמש במחלקה לא משתנה. ב-C של embedded אותו רעיון מופיע כמודול driver שמסתיר את הגישה לרגיסטרים מאחורי uart_send() ומחזיק את המצב שלו כ-static בתוך קובץ ה-.c.\nלמה זה חשוב: זה מגן על אינווריאנטים, מקטין צימוד, מאפשר לשנות מימוש בחופשיות, מצמצם את האזור שממנו באג יכול להגיע, ומקל על בדיקות יחידה ועל thread-safety כי כל הגישה עוברת בנקודות ידועות.\nשיקולים: getter ו-setter לכל שדה הם לא encapsulation אמיתי, זו רק חשיפה של השדות עם עוד צעד בדרך.\nמשפט סיום טוב: encapsulation עוסק בשליטה על האופן שבו המצב משתנה, ו-access modifiers הם רק הכלי; ב-C משיגים את זה עם opaque pointers ופונקציות static.',
    },
    keyPoints: [
      {
        en: 'Talk about invariants: the class guarantees its own consistency because all changes go through its methods.',
        he: 'לדבר על אינווריאנטים: המחלקה מבטיחה את העקביות של עצמה כי כל השינויים עוברים דרך המתודות שלה.',
      },
      {
        en: 'Point out that blind getters and setters for every field defeat the purpose.',
        he: 'לציין ש-getters ו-setters אוטומטיים לכל שדה מבטלים את הרעיון.',
      },
      {
        en: 'Benefits: change the implementation without breaking callers, lower coupling, easier testing and debugging.',
        he: 'יתרונות: שינוי מימוש בלי לשבור את מי שמשתמש, צימוד נמוך, בדיקות ודיבאג קלים יותר.',
      },
      {
        en: 'Beware of leaking internal references, such as returning a mutable internal list.',
        he: 'להיזהר מדליפת הפניות פנימיות, למשל החזרה של רשימה פנימית שאפשר לשנות.',
      },
      {
        en: 'Show it is language-independent: opaque pointers and static functions in C, the underscore convention in Python.',
        he: 'להראות שזה לא תלוי שפה: opaque pointers ופונקציות static ב-C, מוסכמת הקו התחתון ב-Python.',
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
      en: 'A pointer is a variable that stores the address of an object, while a reference is an alias, another name for an existing object.\nThe key differences:\n- Initialization: a reference must be bound when it is declared; a pointer can be declared uninitialized or set to nullptr.\n- Null: a pointer can be null, so you must check it; a reference in well-defined code always refers to a valid object.\n- Reseating: a pointer can be changed to point elsewhere; a reference stays bound to the same object for its whole life, and assigning to it assigns to the object.\n- Arithmetic and indirection: pointers support arithmetic (p + 1) and pointers to pointers; there is no reference arithmetic, no reference to a reference and no array of references.\nExample: void swap(int& a, int& b) is clearer than swap(int* a, int* b) because the caller cannot pass null and the body needs no dereferencing. On the other hand, a function that searches a tree returns a pointer, because nullptr is a meaningful \'not found\'.\nRule of thumb: const references for passing large objects in, references for out-parameters that must exist, pointers when null is a valid value, when you need to reseat or when walking memory, and smart pointers when ownership is involved.\nA depth point: references can still dangle, for example a returned reference to a local variable, and a const reference bound to a temporary extends that temporary\'s lifetime.',
      he: 'pointer הוא משתנה שמחזיק כתובת של אובייקט, ואילו reference הוא alias, שם נוסף לאובייקט קיים.\nההבדלים המרכזיים:\n- אתחול: reference חייב להיקשר לאובייקט כבר בהצהרה; pointer אפשר להצהיר בלי אתחול או לקבוע ל-nullptr.\n- null: pointer יכול להיות null ולכן צריך לבדוק אותו; reference בקוד תקין תמיד מפנה לאובייקט קיים.\n- הפניה מחדש: pointer אפשר לכוון למקום אחר; reference נשאר קשור לאותו אובייקט כל חייו, והשמה אליו היא השמה לאובייקט עצמו.\n- אריתמטיקה ורמות עקיפות: pointer תומך באריתמטיקה (p + 1) וב-pointer ל-pointer; אין אריתמטיקה על reference, אין reference ל-reference ואין מערך של references.\nדוגמה: void swap(int& a, int& b) ברורה יותר מ-swap(int* a, int* b) כי אי אפשר להעביר null והגוף לא צריך dereference. מצד שני, פונקציה שמחפשת בעץ מחזירה pointer, כי nullptr הוא תשובה משמעותית של \'לא נמצא\'.\nכלל אצבע: const reference להעברת אובייקטים גדולים פנימה, reference לפרמטרי פלט שחייבים להתקיים, pointer כש-null הוא ערך חוקי, כשצריך להפנות מחדש או כשעוברים על זיכרון, ו-smart pointers כשיש עניין של בעלות.\nנקודת עומק: גם reference יכול להיות dangling, למשל reference שמוחזר למשתנה מקומי, ו-const reference שנקשר ל-temporary מאריך את חיי ה-temporary.',
    },
    keyPoints: [
      {
        en: 'List the hard rules: must initialize, cannot be null, cannot reseat, no arithmetic.',
        he: 'לפרט את הכללים הקשיחים: חובה לאתחל, לא null, אי אפשר להפנות מחדש, אין אריתמטיקה.',
      },
      {
        en: 'Assigning to a reference changes the referred object; it does not rebind the reference.',
        he: 'השמה ל-reference משנה את האובייקט שהוא מפנה אליו, ולא קושרת אותו מחדש.',
      },
      {
        en: 'Give the API guideline: const T& for input, T& for required output, T* when optional, smart pointers for ownership.',
        he: 'לתת את הכלל לתכנון API: const T& לקלט, T& לפלט שחייב להתקיים, T* כשהערך אופציונלי, smart pointers לבעלות.',
      },
      {
        en: 'References can dangle too, for example returning a reference to a local.',
        he: 'גם references יכולים להיות dangling, למשל החזרת reference למשתנה מקומי.',
      },
      {
        en: 'Under the hood a reference is usually implemented as a pointer, but the language gives it alias semantics.',
        he: 'מאחורי הקלעים reference ממומש בדרך כלל כמו pointer, אבל השפה נותנת לו סמנטיקה של alias.',
      },
      {
        en: 'Mention lifetime extension of temporaries bound to const references as a depth signal.',
        he: 'להזכיר הארכת חיים של temporary שנקשר ל-const reference כסימן לעומק.',
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
      en: 'Smart pointers are RAII class templates that own a dynamically allocated object and release it automatically in their destructor, so you no longer write delete by hand and the memory is freed even when an exception is thrown.\nThe main types in <memory>:\n- unique_ptr: exclusive ownership. It cannot be copied, only moved with std::move, which transfers ownership. With the default deleter it is the size of a raw pointer and has essentially no overhead.\n- shared_ptr: shared ownership. Copies share a control block holding a reference count; the count is updated atomically, and when the last shared_ptr is destroyed the object is deleted. It is typically two pointers wide and every copy costs an atomic increment and decrement.\n- weak_ptr: a non-owning observer of an object managed by shared_ptr. It does not keep the object alive; you call lock() to get a shared_ptr if it still exists. It breaks reference cycles, for example a child pointing back to its parent, and suits caches.\nCreate them with make_unique and make_shared: they are exception-safe, and make_shared puts the object and control block in one allocation.\nExample: a factory returns unique_ptr<Sensor>, so the caller clearly owns it, and it converts to shared_ptr if sharing is needed later.\nTrade-off: default to unique_ptr and use shared_ptr only when ownership is genuinely shared, because it is slower and blurs who owns what.\nPitfalls: never create two shared_ptrs from the same raw pointer (double delete), use enable_shared_from_this to get a shared_ptr to this, and remember that two objects holding shared_ptrs to each other leak.',
      he: 'Smart pointers הם class templates בגישת RAII שמחזיקים אובייקט שהוקצה דינמית ומשחררים אותו אוטומטית ב-destructor שלהם, כך שלא כותבים delete ידנית והזיכרון משתחרר גם כשנזרקת exception.\nהסוגים העיקריים ב-<memory>:\n- unique_ptr: בעלות בלעדית. אי אפשר להעתיק אותו, רק להעביר עם std::move, שמעביר את הבעלות. עם ה-deleter הרגיל הוא בגודל של מצביע רגיל וכמעט בלי תקורה.\n- shared_ptr: בעלות משותפת. עותקים חולקים control block שמחזיק מונה הפניות; המונה מתעדכן אטומית, וכשה-shared_ptr האחרון נהרס האובייקט נמחק. בדרך כלל הוא ברוחב של שני מצביעים, וכל עותק עולה בהגדלה והקטנה אטומית של המונה.\n- weak_ptr: צופה בלי בעלות על אובייקט שמנוהל על ידי shared_ptr. הוא לא משאיר את האובייקט בחיים; קוראים ל-lock() כדי לקבל shared_ptr אם האובייקט עדיין קיים. הוא שובר מעגלי הפניות, למשל ילד שמצביע חזרה להורה, ומתאים ל-caches.\nיוצרים אותם עם make_unique ו-make_shared: הם בטוחים מבחינת exceptions, ו-make_shared שם את האובייקט ואת ה-control block בהקצאה אחת.\nדוגמה: factory מחזיר unique_ptr<Sensor>, כך שברור מי הבעלים, ואפשר להמיר אותו ל-shared_ptr אם בהמשך צריך לחלוק אותו.\nשיקול: ברירת המחדל היא unique_ptr, ו-shared_ptr רק כשהבעלות באמת משותפת, כי הוא איטי יותר ומטשטש מי הבעלים של מה.\nמלכודות: לעולם לא ליצור שני shared_ptr מאותו מצביע גולמי (מחיקה כפולה), להשתמש ב-enable_shared_from_this כדי לקבל shared_ptr ל-this, ולזכור ששני אובייקטים שמחזיקים shared_ptr אחד לשני דולפים.',
    },
    keyPoints: [
      {
        en: 'Start from RAII and ownership: who is responsible for freeing the object.',
        he: 'להתחיל מ-RAII ובעלות: מי אחראי לשחרר את האובייקט.',
      },
      {
        en: 'unique_ptr is move-only and zero-overhead with the default deleter; it should be the default choice.',
        he: 'unique_ptr ניתן רק להעברה ובלי תקורה עם ה-deleter הרגיל; זו צריכה להיות בחירת ברירת המחדל.',
      },
      {
        en: 'Explain the shared_ptr control block, atomic reference counting and its cost.',
        he: 'להסביר את ה-control block של shared_ptr, את ספירת ההפניות האטומית ואת המחיר שלה.',
      },
      {
        en: 'Cycles leak with shared_ptr; weak_ptr and lock() solve it.',
        he: 'מעגלים עם shared_ptr גורמים לדליפה; weak_ptr ו-lock() פותרים את זה.',
      },
      {
        en: 'Prefer make_unique and make_shared; never wrap the same raw pointer in two shared_ptrs.',
        he: 'להעדיף make_unique ו-make_shared; לעולם לא לעטוף את אותו מצביע גולמי בשני shared_ptr.',
      },
      {
        en: 'The reference count is thread-safe, but access to the pointed-to object is not.',
        he: 'מונה ההפניות הוא thread-safe, אבל הגישה לאובייקט עצמו לא.',
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
      en: 'The Rule of Three says that if a class needs a user-defined destructor, copy constructor or copy assignment operator, it almost certainly needs all three, because needing one means the class manages a resource such as raw memory, a file handle or a lock. C++11 extended it to the Rule of Five by adding the move constructor and move assignment operator.\nWhy each one matters for a class that owns a raw buffer:\n- Destructor: frees the buffer.\n- Copy constructor: must allocate a new buffer and copy the contents (a deep copy); the compiler-generated one copies only the pointer, so two objects would free the same memory.\n- Copy assignment: must release the old buffer, copy the new one and handle self-assignment; copy-and-swap does this safely and gives the strong exception guarantee.\n- Move constructor: steals the pointer and leaves the source empty (nullptr).\n- Move assignment: releases its own resource, takes the source\'s and leaves the source valid but empty.\nAn important rule: if you declare a destructor or any copy operation, the compiler does not generate the move operations, so moves silently fall back to copies. Mark move operations noexcept, otherwise std::vector copies instead of moving when it reallocates.\nThe modern guideline is the Rule of Zero: do not manage resources by hand; hold them in members such as std::vector, std::string or std::unique_ptr, and then you write none of the five. If you must write one, declare all five, using = default or = delete explicitly.',
      he: 'Rule of Three אומר שאם מחלקה צריכה destructor, copy constructor או copy assignment operator שכתבנו בעצמנו, כמעט בטוח שהיא צריכה את שלושתם, כי הצורך באחד מהם אומר שהמחלקה מנהלת משאב כמו זיכרון גולמי, file handle או מנעול. C++11 הרחיבה את זה ל-Rule of Five עם move constructor ו-move assignment operator.\nלמה כל אחד חשוב במחלקה שמחזיקה buffer גולמי:\n- Destructor: משחרר את ה-buffer.\n- Copy constructor: חייב להקצות buffer חדש ולהעתיק את התוכן (deep copy); הגרסה שהקומפיילר מייצר מעתיקה רק את המצביע, ואז שני אובייקטים ישחררו את אותו זיכרון.\n- Copy assignment: חייב לשחרר את ה-buffer הישן, להעתיק את החדש ולטפל בהשמה עצמית; copy-and-swap עושה את זה בצורה בטוחה ונותן strong exception guarantee.\n- Move constructor: לוקח את המצביע ומשאיר את המקור ריק (nullptr).\n- Move assignment: משחרר את המשאב שלו, לוקח את של המקור ומשאיר את המקור תקין אבל ריק.\nכלל חשוב: אם מצהירים על destructor או על פעולת העתקה כלשהי, הקומפיילר לא מייצר את פעולות ה-move, וה-move נופל בשקט להעתקה. צריך לסמן את פעולות ה-move כ-noexcept, אחרת std::vector יעתיק במקום להעביר כשהוא מקצה מחדש.\nההנחיה המודרנית היא Rule of Zero: לא לנהל משאבים ידנית, אלא להחזיק אותם בחברים כמו std::vector, std::string או std::unique_ptr, ואז לא כותבים אף אחת מחמש הפונקציות. אם בכל זאת כותבים אחת, מצהירים על כל החמש, עם = default או = delete במפורש.',
    },
    keyPoints: [
      {
        en: 'Name all five special members and explain the shallow-copy double-free bug that motivates them.',
        he: 'למנות את חמש הפונקציות המיוחדות ולהסביר את באג ה-shallow copy שמוביל למחיקה כפולה.',
      },
      {
        en: 'Declaring a destructor or a copy operation suppresses the implicit move operations, so moves become copies.',
        he: 'הצהרה על destructor או על פעולת העתקה מבטלת את יצירת פעולות ה-move, ואז העברות הופכות להעתקות.',
      },
      {
        en: 'Move operations should be noexcept so containers like std::vector use them.',
        he: 'פעולות move צריכות להיות noexcept כדי שקונטיינרים כמו std::vector ישתמשו בהן.',
      },
      {
        en: 'Handle self-assignment; copy-and-swap gives the strong exception guarantee.',
        he: 'לטפל בהשמה עצמית; copy-and-swap נותן strong exception guarantee.',
      },
      {
        en: 'Recommend the Rule of Zero: let RAII members manage resources.',
        he: 'להמליץ על Rule of Zero: לתת לחברי RAII לנהל את המשאבים.',
      },
      {
        en: 'A moved-from object must stay valid and destructible, typically empty.',
        he: 'אובייקט שהעבירו ממנו חייב להישאר תקין וניתן להריסה, בדרך כלל ריק.',
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
      en: 'volatile tells the compiler that a variable can change, or that reading and writing it has side effects, outside the code it can see, so it must not optimise those accesses away.\nWhat the compiler must do for a volatile object:\n- Perform every read and write that appears in the source, in program order relative to other volatile accesses.\n- Not cache the value in a register across iterations, not merge two writes into one and not delete a read whose result looks unused.\nWhen you need it:\n- Memory-mapped hardware registers, for example a status register whose ready bit is set by the peripheral, or a data register where each read pops a byte from a FIFO.\n- Variables shared between an ISR and the main loop, such as a data_ready flag. Without volatile, an optimised build may read the flag once and spin forever.\nWhat it does not do: it does not make operations atomic (count++ on a volatile is still read-modify-write and can be interrupted), it does not stop the CPU from reordering accesses, and it does not provide synchronization between threads. For multi-threaded code in C11 or C++11 use atomics and mutexes.\nTrade-off: every access goes to memory, so overusing volatile slows code down; apply it to the specific variables or register pointers, not everywhere.\nDepth points: const volatile makes sense for a read-only hardware register, and for DMA buffers volatile does not deal with the data cache, you still need cache clean or invalidate operations.',
      he: 'volatile אומר לקומפיילר שמשתנה יכול להשתנות, או שלקריאה ולכתיבה אליו יש תופעות לוואי, מחוץ לקוד שהוא רואה, ולכן אסור לו לבטל את הגישות האלה באופטימיזציה.\nמה הקומפיילר חייב לעשות עם אובייקט volatile:\n- לבצע כל קריאה וכתיבה שמופיעה בקוד, בסדר התוכנית ביחס לגישות volatile אחרות.\n- לא לשמור את הערך ברגיסטר לאורך איטרציות, לא לאחד שתי כתיבות לאחת ולא למחוק קריאה שהתוצאה שלה נראית לא בשימוש.\nמתי צריך את זה:\n- רגיסטרים של חומרה שממופים לזיכרון (memory-mapped), למשל status register שהפריפריה מדליקה בו ביט ready, או data register שכל קריאה ממנו שולפת byte מ-FIFO.\n- משתנים שמשותפים בין ISR ללולאה הראשית, כמו דגל data_ready. בלי volatile, build עם אופטימיזציות עלול לקרוא את הדגל פעם אחת ולהיתקע בלולאה לנצח.\nמה זה לא עושה: זה לא הופך פעולות לאטומיות (count++ על volatile הוא עדיין read-modify-write ויכול להיקטע באמצע), זה לא מונע מהמעבד לשנות סדר גישות, וזה לא מספק סנכרון בין threads. בקוד multi-threaded ב-C11 או C++11 משתמשים ב-atomics וב-mutex.\nשיקול: כל גישה הולכת לזיכרון, ולכן שימוש מוגזם ב-volatile מאט את הקוד; שמים אותו על המשתנים הספציפיים או על המצביעים לרגיסטרים, לא בכל מקום.\nנקודות עומק: const volatile הגיוני לרגיסטר חומרה לקריאה בלבד, ובבאפרים של DMA volatile לא מטפל ב-data cache, ועדיין צריך פעולות clean או invalidate ל-cache.',
    },
    keyPoints: [
      {
        en: 'Explain the concrete bug: an optimised build hoists the flag read out of the loop and spins forever.',
        he: 'להסביר את הבאג הקונקרטי: build עם אופטימיזציות מוציא את קריאת הדגל מהלולאה ונתקע לנצח.',
      },
      {
        en: 'Give the three classic uses: memory-mapped registers, ISR-shared variables, setjmp/longjmp.',
        he: 'לתת את שלושת השימושים הקלאסיים: רגיסטרים ממופים לזיכרון, משתנים משותפים עם ISR, setjmp/longjmp.',
      },
      {
        en: 'Stress that volatile is not atomic: protect multi-byte or read-modify-write accesses by briefly disabling interrupts or using atomics.',
        he: 'להדגיש ש-volatile אינו אטומי: להגן על גישות read-modify-write או רב-בתיות על ידי כיבוי פסיקות לרגע או atomics.',
      },
      {
        en: 'volatile is not a thread synchronization tool in C/C++; contrast with Java\'s volatile.',
        he: 'volatile אינו כלי לסנכרון בין threads ב-C/C++; להשוות ל-volatile של Java.',
      },
      {
        en: 'Know const volatile and where the qualifier goes: volatile uint32_t *reg (the pointed-to data is volatile) vs uint32_t * volatile reg (the pointer itself).',
        he: 'להכיר const volatile ואת מיקום המילה: volatile uint32_t *reg (הנתון שמוצבע הוא volatile) לעומת uint32_t * volatile reg (המצביע עצמו).',
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
      en: 'In C, static changes two different things depending on where it is used: for a global variable or function it changes linkage (visibility), and for a local variable it changes storage duration (lifetime).\nAt file scope (global variable or function):\n- static gives internal linkage: the name is visible only inside that .c file (translation unit).\n- The lifetime was already the whole program; only the visibility changes.\nInside a function (local variable):\n- The variable gets static storage duration: it lives for the whole program in .data (if initialised to non-zero) or .bss, not on the stack.\n- It is initialised only once, before the program starts, and in C the initialiser must be a constant expression. Its value persists between calls.\nExample: a UART driver keeps its ring buffer and helper functions static in uart.c, so other modules can only use the public API in uart.h, and a next_id() function uses a static local counter that returns 1, 2, 3 on successive calls.\nTrade-offs: file-level static is C\'s way to get encapsulation and avoid name collisions, and it should be the default for anything not declared in the header. Static locals are convenient but make the function non-reentrant and not thread-safe, which is dangerous if it is called from both an ISR and the main loop or from several threads.\nFollow-up: in C++ static also marks a class member shared by all objects, and since C++11 initialization of a function-local static is thread-safe.',
      he: 'ב-C המילה static משנה שני דברים שונים לפי המקום שבו היא מופיעה: על משתנה גלובלי או פונקציה היא משנה את ה-linkage (הנראות), ועל משתנה מקומי היא משנה את ה-storage duration (משך החיים).\nברמת הקובץ (משתנה גלובלי או פונקציה):\n- static נותן internal linkage: השם נראה רק בתוך קובץ ה-.c הזה (translation unit).\n- משך החיים היה ממילא כל התוכנית; רק הנראות משתנה.\nבתוך פונקציה (משתנה מקומי):\n- המשתנה מקבל static storage duration: הוא חי לאורך כל התוכנית ב-.data (אם אותחל לערך שאינו אפס) או ב-.bss, ולא על ה-stack.\n- הוא מאותחל פעם אחת בלבד, לפני תחילת התוכנית, וב-C ערך האתחול חייב להיות ביטוי קבוע. הערך שלו נשמר בין קריאות.\nדוגמה: driver של UART מחזיק את ה-ring buffer ואת פונקציות העזר שלו כ-static בתוך uart.c, כך שמודולים אחרים יכולים להשתמש רק ב-API הציבורי שב-uart.h, ופונקציה next_id() משתמשת במונה static מקומי שמחזיר 1, 2, 3 בקריאות עוקבות.\nשיקולים: static ברמת הקובץ הוא הדרך של C להשיג encapsulation ולמנוע התנגשויות שמות, והוא צריך להיות ברירת המחדל לכל מה שלא מוצהר ב-header. משתנה static מקומי נוח, אבל הופך את הפונקציה ללא reentrant ולא thread-safe, וזה מסוכן אם קוראים לה גם מ-ISR וגם מהלולאה הראשית או מכמה threads.\nשאלת המשך: ב-C++ static מסמן גם member של מחלקה שמשותף לכל האובייקטים, ומאז C++11 האתחול של static מקומי בפונקציה הוא thread-safe.',
    },
    keyPoints: [
      {
        en: 'Use the right terms: linkage for globals and functions, storage duration for locals.',
        he: 'להשתמש במונחים הנכונים: linkage עבור גלובליים ופונקציות, storage duration עבור מקומיים.',
      },
      {
        en: 'Static locals live in .data or .bss, are initialised once, and keep their value between calls.',
        he: 'משתנים static מקומיים יושבים ב-.data או ב-.bss, מאותחלים פעם אחת ושומרים את הערך בין קריאות.',
      },
      {
        en: 'Static functions and file-scope variables are C\'s encapsulation mechanism and prevent linker name clashes.',
        he: 'פונקציות static ומשתנים ברמת הקובץ הם מנגנון ה-encapsulation של C ומונעים התנגשויות שמות ב-linker.',
      },
      {
        en: 'Static locals make a function non-reentrant: a risk with ISRs, recursion and threads.',
        he: 'משתנים static מקומיים הופכים פונקציה ללא reentrant: סיכון עם ISR, רקורסיה ו-threads.',
      },
      {
        en: 'Mention the extra C++ meaning: static class members, and thread-safe local static initialization since C++11.',
        he: 'להזכיר את המשמעות הנוספת ב-C++: static members של מחלקה, ואתחול thread-safe של static מקומי מאז C++11.',
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
      en: 'An interrupt is a signal, usually from hardware such as a timer, a UART or a GPIO pin, that makes the CPU suspend the code it is running and jump to a handler; that handler is the interrupt service routine (ISR).\nWhat happens step by step on a typical microcontroller:\n- The peripheral sets its interrupt flag, and the interrupt controller (the NVIC on ARM Cortex-M) checks that the interrupt is enabled and has a high enough priority.\n- The CPU saves context. On Cortex-M the hardware automatically stacks R0 to R3, R12, LR, PC and xPSR.\n- It looks up the ISR address in the vector table and jumps there.\n- The ISR handles the event and clears the interrupt source flag.\n- On return the context is restored and the interrupted code resumes.\nExample: a UART receive interrupt fires per byte; the ISR reads the data register, pushes the byte into a ring buffer and returns, and the main loop or an RTOS task parses the message.\nWhat to avoid inside an ISR:\n- Blocking or waiting: delays, busy loops, taking a mutex, waiting on a queue. In FreeRTOS use only the FromISR APIs.\n- Long work, heavy computation, printf and malloc, which are slow and often non-reentrant.\nShared variables must be volatile, and multi-byte or read-modify-write access from the main code should be protected by briefly disabling that interrupt.\nThe design idea is to keep ISRs short to minimise interrupt latency for everything else: do the minimum and defer the rest, which Linux calls the top half and bottom half.',
      he: 'פסיקה (interrupt) היא אות, בדרך כלל מהחומרה כמו timer, UART או פין GPIO, שגורם למעבד להשהות את הקוד שרץ ולקפוץ ל-handler; ה-handler הזה הוא שגרת הטיפול בפסיקה, ISR.\nמה קורה שלב אחר שלב במיקרו-בקר טיפוסי:\n- הפריפריה מדליקה את דגל הפסיקה שלה, ובקר הפסיקות (NVIC ב-ARM Cortex-M) בודק שהפסיקה מאופשרת ושהעדיפות שלה מספיק גבוהה.\n- המעבד שומר context. ב-Cortex-M החומרה דוחפת אוטומטית ל-stack את R0 עד R3, R12, LR, PC ו-xPSR.\n- הוא מוצא את כתובת ה-ISR ב-vector table וקופץ אליה.\n- ה-ISR מטפל באירוע ומנקה את דגל הפסיקה במקור.\n- ביציאה ה-context משוחזר והקוד שנקטע ממשיך לרוץ.\nדוגמה: פסיקת קליטה של UART קופצת על כל byte; ה-ISR קורא את ה-data register, דוחף את ה-byte ל-ring buffer וחוזר, והלולאה הראשית או משימת RTOS מפענחת את ההודעה.\nממה להימנע בתוך ISR:\n- חסימה או המתנה: delays, לולאות busy, לקיחת mutex, המתנה על תור. ב-FreeRTOS משתמשים רק בפונקציות FromISR.\n- עבודה ארוכה, חישובים כבדים, printf ו-malloc, שהם איטיים ולרוב לא reentrant.\nמשתנים משותפים חייבים להיות volatile, וגישה רב-בתית או read-modify-write מהקוד הראשי צריכה הגנה על ידי כיבוי קצר של אותה פסיקה.\nהרעיון התכנוני הוא לשמור על ISR קצר כדי למזער את ה-interrupt latency של כל השאר: לעשות את המינימום ולדחות את השאר, מה שב-Linux נקרא top half ו-bottom half.',
    },
    keyPoints: [
      {
        en: 'Walk through the sequence: flag set, controller and priority check, context save, vector table lookup, ISR, flag clear, context restore.',
        he: 'לעבור על הרצף: הדלקת דגל, בדיקת בקר ועדיפות, שמירת context, חיפוש ב-vector table, ISR, ניקוי דגל, שחזור context.',
      },
      {
        en: 'Mention priorities, nesting and interrupt latency.',
        he: 'להזכיר עדיפויות, nesting ו-interrupt latency.',
      },
      {
        en: 'The flag-or-queue pattern: the ISR records the event, a task or the main loop does the work.',
        he: 'תבנית הדגל או התור: ה-ISR רושם את האירוע, ומשימה או הלולאה הראשית עושות את העבודה.',
      },
      {
        en: 'No blocking calls, no malloc or printf, and only FromISR RTOS APIs inside an ISR.',
        he: 'בלי קריאות חוסמות, בלי malloc או printf, ורק פונקציות RTOS מסוג FromISR בתוך ISR.',
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
      en: 'A mutex is a mutual-exclusion lock with an owner, used to protect a critical section; a semaphore is a counter with atomic wait (take) and signal (give) operations, used for signalling between tasks or for limiting access to a pool of N resources.\nThe differences in detail:\n- Ownership: only the thread that locked a mutex may unlock it. A semaphore has no owner, so one task or an ISR can give it and another task takes it.\n- Count: a mutex is locked or unlocked. A counting semaphore holds a value from 0 to N; a binary semaphore holds 0 or 1 but still has no owner.\n- Priority inversion: because a mutex has an owner, an RTOS can apply priority inheritance, temporarily raising the holder\'s priority so a high-priority task is not stuck behind a medium-priority one. FreeRTOS mutexes do this; binary semaphores do not.\n- ISRs: a mutex must not be taken in an ISR, while giving a semaphore from an ISR is the standard pattern.\nExample: a UART ISR gives a binary semaphore when a frame arrives, and the receive task blocks on it instead of polling. Meanwhile two tasks writing to the same I2C bus share a mutex.\nTrade-offs: using a binary semaphore as a lock loses priority inheritance and ownership checks, so use a mutex for mutual exclusion.\nA classic follow-up is the Mars Pathfinder resets in 1997: a priority inversion bug fixed by enabling priority inheritance on a mutex.',
      he: 'mutex הוא מנעול להדדיות (mutual exclusion) עם בעלים, שמגן על קטע קריטי; סמפור הוא מונה עם פעולות אטומיות של המתנה (take) ואיתות (give), שמשמש לאיתות בין משימות או להגבלת גישה למאגר של N משאבים.\nההבדלים בפירוט:\n- בעלות: רק ה-thread שנעל mutex רשאי לשחרר אותו. לסמפור אין בעלים, כך שמשימה אחת או ISR עושים give ומשימה אחרת עושה take.\n- ספירה: mutex הוא נעול או פתוח. counting semaphore מחזיק ערך בין 0 ל-N; binary semaphore מחזיק 0 או 1, אבל עדיין בלי בעלים.\n- Priority inversion: כיוון של-mutex יש בעלים, ה-RTOS יכול להפעיל priority inheritance, כלומר להעלות זמנית את העדיפות של מי שמחזיק אותו, כדי שמשימה בעדיפות גבוהה לא תיתקע מאחורי משימה בעדיפות בינונית. ב-FreeRTOS ל-mutex יש את זה, ולסמפור בינארי אין.\n- ISR: אסור לקחת mutex בתוך ISR, ואילו give לסמפור מתוך ISR הוא התבנית הסטנדרטית.\nדוגמה: ISR של UART עושה give לסמפור בינארי כשמגיעה מסגרת, ומשימת הקליטה חוסמת עליו במקום לעשות polling. במקביל, שתי משימות שכותבות לאותו bus של I2C חולקות mutex.\nשיקולים: שימוש בסמפור בינארי כמנעול מאבד את ה-priority inheritance ואת בדיקת הבעלות, ולכן להדדיות משתמשים ב-mutex.\nשאלת המשך קלאסית היא ה-resets של Mars Pathfinder ב-1997: באג של priority inversion שתוקן על ידי הפעלת priority inheritance על mutex.',
    },
    keyPoints: [
      {
        en: 'Ownership is the core difference: a mutex is released by its owner, a semaphore can be given by anyone.',
        he: 'בעלות היא ההבדל המרכזי: mutex משוחרר רק על ידי הבעלים, וסמפור כל אחד יכול לעשות לו give.',
      },
      {
        en: 'Explain priority inversion and priority inheritance, ideally with the Mars Pathfinder story.',
        he: 'להסביר priority inversion ו-priority inheritance, רצוי עם הסיפור של Mars Pathfinder.',
      },
      {
        en: 'A binary semaphore is not a mutex: no owner, no priority inheritance.',
        he: 'סמפור בינארי אינו mutex: אין בעלים ואין priority inheritance.',
      },
      {
        en: 'ISR-to-task signalling uses a semaphore given with the FromISR API; never take a mutex in an ISR.',
        he: 'איתות מ-ISR למשימה נעשה עם סמפור דרך פונקציית FromISR; לעולם לא לוקחים mutex בתוך ISR.',
      },
      {
        en: 'Give a counting semaphore example, such as a pool of N buffers or connections.',
        he: 'לתת דוגמה ל-counting semaphore, כמו מאגר של N באפרים או חיבורים.',
      },
      {
        en: 'Mention deadlock risk and a fixed lock order when several mutexes are held.',
        he: 'להזכיר סיכון ל-deadlock וחשיבות סדר נעילה קבוע כשמחזיקים כמה mutexes.',
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
      en: 'A C program\'s memory is divided into segments, each holding a different kind of data with a different lifetime.\nFrom low to high addresses in the classic layout:\n- .text: the machine code. Read-only and executable.\n- .rodata: constants and string literals, also read-only. On a microcontroller both of these live in flash.\n- .data: global and static variables initialised to a non-zero value. The initial values are stored in the executable (in flash on an MCU) and copied to RAM by the startup code.\n- .bss: global and static variables that are uninitialised or initialised to zero. They take no space in the image; the startup code simply zeroes this region.\n- Heap: dynamic memory from malloc and free.\n- Stack: local variables, function arguments and return addresses, one frame per call. It typically grows downward and is released automatically on return.\nExample: int g = 5 goes to .data, an uninitialised global int goes to .bss, const char *msg = \'hi\' puts the pointer in .data and the characters in .rodata, a local int is on the stack and malloc(100) returns heap memory.\nTrade-offs in embedded: the stack is fast and automatic but small, and deep recursion or large local arrays cause a stack overflow that silently corrupts neighbouring memory. The heap is flexible but suffers from fragmentation and non-deterministic timing, which is why many safety-critical systems forbid malloc after initialisation and use static allocation or memory pools.\nDepth point: the linker script decides where each section goes, and the map file and the size tool show what used the memory.',
      he: 'הזיכרון של תוכנית C מחולק לסגמנטים, וכל אחד מחזיק סוג אחר של נתונים עם משך חיים אחר.\nמהכתובות הנמוכות לגבוהות בפריסה הקלאסית:\n- .text: קוד המכונה. לקריאה ולהרצה בלבד.\n- .rodata: קבועים ו-string literals, גם הם לקריאה בלבד. במיקרו-בקר שני האזורים האלה יושבים ב-flash.\n- .data: משתנים גלובליים ו-static שאותחלו לערך שאינו אפס. ערכי ההתחלה נשמרים בקובץ ההרצה (ב-flash במיקרו-בקר), וקוד ה-startup מעתיק אותם ל-RAM.\n- .bss: משתנים גלובליים ו-static שלא אותחלו או אותחלו לאפס. הם לא תופסים מקום בקובץ; קוד ה-startup פשוט מאפס את האזור הזה.\n- Heap: זיכרון דינמי מ-malloc ו-free.\n- Stack: משתנים מקומיים, פרמטרים של פונקציות וכתובות חזרה, frame אחד לכל קריאה. בדרך כלל גדל כלפי מטה ומשתחרר אוטומטית ביציאה מהפונקציה.\nדוגמה: int g = 5 הולך ל-.data, int גלובלי שלא אותחל הולך ל-.bss, const char *msg = \'hi\' שם את המצביע ב-.data ואת התווים ב-.rodata, int מקומי יושב על ה-stack, ו-malloc(100) מחזיר זיכרון מה-heap.\nשיקולים ב-embedded: ה-stack מהיר ואוטומטי אבל קטן, ורקורסיה עמוקה או מערכים מקומיים גדולים גורמים ל-stack overflow שמשחית בשקט זיכרון סמוך. ה-heap גמיש אבל סובל מ-fragmentation ומזמנים לא דטרמיניסטיים, ולכן מערכות safety-critical רבות אוסרות malloc אחרי האתחול ומשתמשות בהקצאה סטטית או ב-memory pools.\nנקודת עומק: ה-linker script קובע איפה כל section יושב, וה-map file והכלי size מראים מי צרך את הזיכרון.',
    },
    keyPoints: [
      {
        en: 'Distinguish .data from .bss precisely: initialised to non-zero vs zero or uninitialised, and why .bss costs no space in the image.',
        he: 'להבחין במדויק בין .data ל-.bss: מאותחל לערך שאינו אפס לעומת אפס או לא מאותחל, ולמה .bss לא תופס מקום בקובץ.',
      },
      {
        en: 'Explain the startup code: copy .data from flash to RAM, zero .bss, set up the stack pointer, then call main.',
        he: 'להסביר את קוד ה-startup: העתקת .data מ-flash ל-RAM, איפוס .bss, הגדרת ה-stack pointer, ואז קריאה ל-main.',
      },
      {
        en: 'Static local variables live in .data or .bss, not on the stack.',
        he: 'משתנים static מקומיים יושבים ב-.data או ב-.bss, לא על ה-stack.',
      },
      {
        en: 'Embedded concerns: stack overflow, heap fragmentation, and avoiding malloc in real-time code.',
        he: 'דאגות ב-embedded: stack overflow, fragmentation של ה-heap, והימנעות מ-malloc בקוד real-time.',
      },
      {
        en: 'Mention the tools: the linker script, the map file and the size command.',
        he: 'להזכיר את הכלים: ה-linker script, ה-map file והפקודה size.',
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
      en: 'A dangling pointer is a pointer that still holds the address of memory whose lifetime has ended, either because it was freed or because the object went out of scope. Dereferencing it is undefined behaviour.\nCommon ways it happens:\n- Use after free: free(p) or delete p, then using p or another copy of it.\n- Returning the address of a local variable: the stack frame is gone once the function returns.\n- Aliasing: two pointers to the same buffer, one owner frees it and the other is left dangling.\n- Invalidation: a pointer or iterator into a std::vector, or into a buffer passed to realloc, becomes invalid when the data is moved to a new block.\nWhy it is dangerous: the bug often does not crash where it happens. The memory may be reused by another allocation, so a write silently corrupts unrelated data and the symptom shows up much later, sometimes only in release builds.\nHow to avoid and detect it:\n- Set the pointer to NULL right after free, so a later use crashes predictably; this fixes only that one copy, not other aliases.\n- Never return pointers or references to locals; return by value or allocate with a clear owner.\n- Give every allocation a single, clear owner; in C++ use unique_ptr or shared_ptr, and weak_ptr for observers.\n- Use tools: AddressSanitizer (-fsanitize=address) and Valgrind.\nA related term worth naming is a wild pointer, one that was never initialised; the cure there is to always initialise pointers, to NULL if nothing else.',
      he: 'dangling pointer הוא מצביע שעדיין מחזיק כתובת של זיכרון שזמן החיים שלו נגמר, כי הוא שוחרר או כי האובייקט יצא מה-scope. גישה דרכו היא undefined behaviour.\nאיך זה קורה בדרך כלל:\n- Use after free: free(p) או delete p, ואחר כך שימוש ב-p או בעותק אחר שלו.\n- החזרת כתובת של משתנה מקומי: ה-stack frame נעלם ברגע שהפונקציה חוזרת.\n- Aliasing: שני מצביעים לאותו buffer, הבעלים משחרר אותו והשני נשאר מצביע לשום מקום.\n- Invalidation: מצביע או iterator לתוך std::vector, או לתוך buffer שעבר realloc, הופך ללא תקין כשהנתונים מועברים לבלוק חדש.\nלמה זה מסוכן: הבאג לרוב לא קורס במקום שבו הוא קורה. הזיכרון יכול להיות מוקצה מחדש למישהו אחר, כך שכתיבה משחיתה בשקט נתונים לא קשורים והתסמין מופיע הרבה אחר כך, לפעמים רק ב-release build.\nאיך נמנעים ומאתרים:\n- לאפס את המצביע ל-NULL מיד אחרי free, כך ששימוש מאוחר יקרוס באופן צפוי; זה מתקן רק את העותק הזה ולא aliases אחרים.\n- לא להחזיר מצביעים או references למשתנים מקומיים; להחזיר by value או להקצות עם בעלים ברור.\n- לתת לכל הקצאה בעלים יחיד וברור; ב-C++ להשתמש ב-unique_ptr או shared_ptr, וב-weak_ptr לצופים.\n- להשתמש בכלים: AddressSanitizer (-fsanitize=address) ו-Valgrind.\nמונח קשור ששווה להזכיר הוא wild pointer, מצביע שמעולם לא אותחל; הפתרון שם הוא תמיד לאתחל מצביעים, ל-NULL אם אין משהו אחר.',
    },
    keyPoints: [
      {
        en: 'List several causes, not just free: returning a local\'s address, aliases, and container reallocation.',
        he: 'למנות כמה גורמים ולא רק free: החזרת כתובת של משתנה מקומי, aliases והקצאה מחדש של קונטיינר.',
      },
      {
        en: 'Explain why it is nasty: undefined behaviour that often corrupts silently instead of crashing.',
        he: 'להסביר למה זה קשה: undefined behaviour שלרוב משחית בשקט במקום לקרוס.',
      },
      {
        en: 'Setting to NULL after free helps but does not fix other copies of the pointer.',
        he: 'איפוס ל-NULL אחרי free עוזר, אבל לא מתקן עותקים אחרים של המצביע.',
      },
      {
        en: 'Ownership discipline and smart pointers are the real fix in C++.',
        he: 'משמעת בעלות ו-smart pointers הם הפתרון האמיתי ב-C++.',
      },
      {
        en: 'Name the tools: AddressSanitizer and Valgrind.',
        he: 'לנקוב בכלים: AddressSanitizer ו-Valgrind.',
      },
      {
        en: 'Distinguish dangling, wild (uninitialised) and null pointers, and mention double free as a related bug.',
        he: 'להבחין בין dangling, wild (לא מאותחל) ו-null, ולהזכיר double free כבאג קשור.',
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
      en: 'The optimal approach is Brian Kernighan\'s trick: n & (n - 1) clears the lowest set bit of n. Subtracting 1 turns the lowest 1 into 0 and all the zeros below it into 1s; ANDing with the original keeps every higher bit and wipes out that lowest 1 and everything below it. So we loop while n is not zero, apply n &= n - 1 and increment a counter, and the number of iterations equals the number of set bits.\nComplexity: O(k) time, where k is the number of set bits, at most 32 for a 32-bit integer, and O(1) extra space.\nEdge cases: n = 0 returns 0 without entering the loop. Use an unsigned type in C and C++ so there is no sign issue. In Java the same loop also works for negative ints, because it never shifts, it only clears bits until the value reaches zero.\nIn production you would use the built-in: std::popcount in C++20, Integer.bitCount in Java, int.bit_count in Python 3.10+, which can map to a single POPCNT instruction.',
      he: 'הפתרון האופטימלי הוא הטריק של Brian Kernighan: n & (n - 1) מכבה את הביט הדלוק הנמוך ביותר של n. החסרת 1 הופכת את ה-1 הנמוך ביותר ל-0 ואת כל האפסים שמתחתיו ל-1; AND עם המספר המקורי משאיר את כל הביטים הגבוהים ומוחק את ה-1 הנמוך הזה ואת כל מה שמתחתיו. לכן רצים בלולאה כל עוד n שונה מאפס, מבצעים n &= n - 1 ומגדילים מונה, ומספר האיטרציות שווה למספר הביטים הדלוקים.\nסיבוכיות: O(k) זמן, כש-k הוא מספר הביטים הדלוקים, לכל היותר 32 עבור מספר של 32 ביט, ו-O(1) זיכרון נוסף.\nמקרי קצה: n = 0 מחזיר 0 בלי להיכנס ללולאה. ב-C וב-C++ משתמשים בטיפוס unsigned כדי שלא תהיה בעיית סימן. ב-Java אותה לולאה עובדת גם על int שלילי, כי אין בה shift, היא רק מכבה ביטים עד שהערך מגיע לאפס.\nבקוד אמיתי משתמשים בפונקציה המובנית: std::popcount ב-C++20, Integer.bitCount ב-Java, int.bit_count ב-Python 3.10 ומעלה, שיכולות להפוך לפקודת POPCNT אחת.',
    },
    approach: [
      {
        en: 'Clarify: is the input signed or unsigned, and what width (32 or 64 bits)? Confirm that n = 0 should return 0.',
        he: 'להבהיר: האם הקלט signed או unsigned ובאיזה רוחב (32 או 64 ביט)? לוודא ש-n = 0 צריך להחזיר 0.',
      },
      {
        en: 'Brute force: test the lowest bit with n & 1 and shift right until n is zero. That is O(number of bits), up to 32 iterations.',
        he: 'Brute force: לבדוק את הביט הנמוך עם n & 1 ולעשות shift ימינה עד ש-n מתאפס. זה O(מספר הביטים), עד 32 איטרציות.',
      },
      {
        en: 'Insight: n & (n - 1) removes exactly the lowest set bit, so we can jump directly from one set bit to the next and skip the zeros.',
        he: 'התובנה: n & (n - 1) מסיר בדיוק את הביט הדלוק הנמוך, כך שאפשר לקפוץ ישירות מביט דלוק אחד לבא ולדלג על האפסים.',
      },
      {
        en: 'Algorithm: count = 0; while n is not zero, set n = n & (n - 1) and increment count; return count.',
        he: 'האלגוריתם: count = 0; כל עוד n שונה מאפס, מציבים n = n & (n - 1) ומגדילים את count באחד; מחזירים count.',
      },
      {
        en: 'Complexity: O(k) time where k is the number of set bits, O(1) space.',
        he: 'סיבוכיות: O(k) זמן כש-k הוא מספר הביטים הדלוקים, O(1) זיכרון.',
      },
      {
        en: 'Test: walk through n = 11 (1011, three iterations: 1010, 1000, 0), n = 128 (one iteration), n = 0, and the all-ones value.',
        he: 'בדיקה: לעבור על n = 11 (1011, שלוש איטרציות: 1010, 1000, 0), על n = 128 (איטרציה אחת), על n = 0 ועל ערך שכל הביטים בו דלוקים.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why n & (n - 1) clears the lowest set bit with a small binary example, such as 1100 & 1011 = 1000.',
        he: 'להסביר למה n & (n - 1) מכבה את הביט הדלוק הנמוך עם דוגמה בינארית קטנה, כמו 1100 & 1011 = 1000.',
      },
      {
        en: 'State the complexity as O(number of set bits), bounded by the word size, with O(1) space.',
        he: 'לציין סיבוכיות O(מספר הביטים הדלוקים), חסומה בגודל המילה, ו-O(1) זיכרון.',
      },
      {
        en: 'Use unsigned in C: right-shifting a negative signed value is implementation-defined, and with an arithmetic shift a shift-based loop never terminates.',
        he: 'להשתמש ב-unsigned ב-C: shift ימינה של ערך signed שלילי מוגדר לפי המימוש, ועם arithmetic shift לולאה שמבוססת על shift לא מסתיימת לעולם.',
      },
      {
        en: 'Mention alternatives: a 256-entry lookup table per byte, the SWAR parallel bit count, and the hardware POPCNT instruction.',
        he: 'להזכיר חלופות: טבלת חיפוש של 256 ערכים לכל byte, ספירה מקבילית בשיטת SWAR, ופקודת POPCNT בחומרה.',
      },
      {
        en: 'Real uses: parity, Hamming distance (popcount of a XOR b), and counting active flags in a register.',
        he: 'שימושים אמיתיים: parity, Hamming distance (popcount של a XOR b), וספירת דגלים פעילים ברגיסטר.',
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
      en: 'A positive power of two has exactly one set bit in binary, for example 16 is 10000. Subtracting 1 turns that bit off and all the bits below it on, 15 is 01111, so n & (n - 1) is zero exactly when n has at most one set bit. The full check is n > 0 and (n & (n - 1)) == 0.\nWhy the n > 0 part is essential: for n = 0, 0 & (0 - 1) is 0, so without the guard zero would wrongly be reported as a power of two. With signed integers there is a second trap: the most negative value, for example Integer.MIN_VALUE in Java, has only the sign bit set, so n & (n - 1) is also zero; requiring n > 0 rejects it along with every other negative number. With an unsigned type, n != 0 is enough.\nComplexity: O(1) time and O(1) space. In C++20 you can use std::has_single_bit.',
      he: 'לחזקה חיובית של 2 יש בדיוק ביט דלוק אחד בבינארי, למשל 16 הוא 10000. החסרת 1 מכבה את הביט הזה ומדליקה את כל הביטים שמתחתיו, 15 הוא 01111, ולכן n & (n - 1) שווה אפס בדיוק כשיש ב-n לכל היותר ביט דלוק אחד. הבדיקה המלאה היא n > 0 וגם (n & (n - 1)) == 0.\nלמה החלק של n > 0 חיוני: עבור n = 0, הביטוי 0 & (0 - 1) שווה 0, כך שבלי התנאי הזה אפס ידווח בטעות כחזקה של 2. עם מספרים signed יש מלכודת נוספת: הערך השלילי ביותר, למשל Integer.MIN_VALUE ב-Java, מכיל רק את ביט הסימן, ולכן גם עבורו n & (n - 1) שווה אפס; הדרישה n > 0 פוסלת אותו יחד עם כל שאר השליליים. בטיפוס unsigned מספיק n != 0.\nסיבוכיות: O(1) זמן ו-O(1) זיכרון. ב-C++20 אפשר להשתמש ב-std::has_single_bit.',
    },
    approach: [
      {
        en: 'Clarify: can n be zero or negative, and is the type signed or unsigned? Both zero and negatives must return false.',
        he: 'להבהיר: האם n יכול להיות אפס או שלילי, והאם הטיפוס signed או unsigned? גם אפס וגם שליליים מחזירים false.',
      },
      {
        en: 'Brute force: divide by 2 while the number is even and check that you end at 1, or count the set bits. That is O(log n).',
        he: 'Brute force: לחלק ב-2 כל עוד המספר זוגי ולבדוק שמגיעים ל-1, או לספור את הביטים הדלוקים. זה O(log n).',
      },
      {
        en: 'Insight: a power of two has exactly one set bit, and n & (n - 1) clears the lowest set bit, so the result is zero only if that was the only one.',
        he: 'התובנה: לחזקה של 2 יש בדיוק ביט דלוק אחד, ו-n & (n - 1) מכבה את הביט הדלוק הנמוך, כך שהתוצאה אפס רק אם הוא היה היחיד.',
      },
      {
        en: 'Algorithm: return n > 0 and (n & (n - 1)) == 0, with parentheses around the AND.',
        he: 'האלגוריתם: להחזיר n > 0 וגם (n & (n - 1)) == 0, עם סוגריים סביב ה-AND.',
      },
      {
        en: 'Complexity: O(1) time and O(1) space.',
        he: 'סיבוכיות: O(1) זמן ו-O(1) זיכרון.',
      },
      {
        en: 'Test: n = 16 (true), n = 12 (false), n = 1 (true, it is 2 to the power 0), n = 0 (false), a negative value and the minimum signed integer (false).',
        he: 'בדיקה: n = 16 (true), n = 12 (false), n = 1 (true, זה 2 בחזקת 0), n = 0 (false), ערך שלילי והערך המינימלי של signed int (false).',
      },
    ],
    keyPoints: [
      {
        en: 'Explain the bit pattern: one set bit, and n - 1 is all ones below it.',
        he: 'להסביר את תבנית הביטים: ביט דלוק אחד, ו-n - 1 הוא רצף של אחדות מתחתיו.',
      },
      {
        en: 'Handle zero explicitly; it is the most common bug in this question.',
        he: 'לטפל באפס במפורש; זה הבאג הנפוץ ביותר בשאלה הזו.',
      },
      {
        en: 'With signed types, the minimum value (only the sign bit set) also passes the bit test, so require n > 0.',
        he: 'בטיפוסים signed, הערך המינימלי (רק ביט הסימן דלוק) גם עובר את בדיקת הביטים, ולכן דורשים n > 0.',
      },
      {
        en: 'Mention operator precedence in C: == binds tighter than &, so write (n & (n - 1)) == 0 with parentheses.',
        he: 'להזכיר קדימות אופרטורים ב-C: == קודם ל-&, ולכן כותבים (n & (n - 1)) == 0 עם סוגריים.',
      },
      {
        en: 'Connect to practice: power-of-two buffer sizes allow index & (size - 1) instead of the slower % size.',
        he: 'לקשר לעולם האמיתי: גודל buffer שהוא חזקה של 2 מאפשר index & (size - 1) במקום % size האיטי יותר.',
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
      en: 'The classic solution is the XOR swap: a ^= b; b ^= a; a ^= b. It works because XOR is commutative and associative, x ^ x = 0 and x ^ 0 = x. After the first step a holds a^b. The second step computes b ^ (a^b), which is the original a, and stores it in b. The third computes (a^b) ^ a, which is the original b, and stores it in a.\nTime is O(1) and extra space is O(1). Unlike the arithmetic version (a = a + b; b = a - b; a = a - b), XOR works bit by bit and can never overflow, while signed overflow in C is undefined behaviour.\nThe important edge case is when a and b are the same memory location (same pointer, same reference, same array index). The first step then computes x ^ x = 0 and the value is lost, so the solution checks the addresses and returns early. Equal values at different addresses are fine.\nIn production code a temporary or std::swap is clearer and at least as fast.',
      he: 'הפתרון הקלאסי הוא XOR swap: ‏a ^= b; b ^= a; a ^= b. זה עובד כי XOR הוא קומוטטיבי ואסוציאטיבי, ומתקיים x ^ x = 0 וגם x ^ 0 = x. אחרי הצעד הראשון a מחזיק את a^b. הצעד השני מחשב b ^ (a^b), שזה ה-a המקורי, ושומר אותו ב-b. הצעד השלישי מחשב (a^b) ^ a, שזה ה-b המקורי, ושומר אותו ב-a.\nהזמן O(1) והזיכרון הנוסף O(1). בניגוד לגרסה האריתמטית (חיבור וחיסור), XOR עובד ביט-ביט ולא יכול לגלוש, ואילו overflow של signed ב-C הוא undefined behaviour.\nמקרה הקצה החשוב הוא כש-a ו-b הם אותו מקום בזיכרון (אותו pointer, אותו reference, אותו אינדקס במערך). אז הצעד הראשון מחשב x ^ x = 0 והערך הולך לאיבוד, ולכן הפתרון בודק את הכתובות ויוצא מוקדם. ערכים שווים בכתובות שונות זה בסדר גמור.\nבקוד production משתנה עזר או std::swap ברורים יותר ומהירים לפחות באותה מידה.',
    },
    approach: [
      {
        en: 'Clarify: what type (signed or unsigned int), are the values passed by pointer or reference, and can both arguments refer to the same variable?',
        he: 'לברר: איזה טיפוס (int עם סימן או בלי), האם הערכים מועברים כ-pointer או reference, והאם שני הארגומנטים יכולים להיות אותו משתנה?',
      },
      {
        en: 'Baseline: the normal swap uses a temporary, O(1) time and space. That is exactly what is forbidden, so we need to store both values inside the two variables themselves.',
        he: 'נקודת התחלה: swap רגיל משתמש במשתנה עזר, O(1) זמן וזיכרון. בדיוק זה אסור, אז צריך לשמור את שני הערכים בתוך שני המשתנים עצמם.',
      },
      {
        en: 'First idea: a = a + b; b = a - b; a = a - b. It works mathematically but can overflow, so look for an operation that is reversible without carries.',
        he: 'רעיון ראשון: a = a + b; ‏b = a - b; ‏a = a - b. מתמטית זה עובד אבל יכול לגלוש, אז מחפשים פעולה הפיכה בלי carry.',
      },
      {
        en: 'Insight: XOR is its own inverse, so a^b combined with either value gives back the other one. Apply a ^= b, b ^= a, a ^= b, after first returning if the two addresses are equal.',
        he: 'התובנה: XOR הוא ההופכי של עצמו, ולכן a^b יחד עם אחד הערכים מחזיר את השני. מבצעים a ^= b, ‏b ^= a, ‏a ^= b, אחרי שקודם יוצאים אם שתי הכתובות שוות.',
      },
      {
        en: 'Complexity: O(1) time, O(1) space, no overflow possible.',
        he: 'סיבוכיות: O(1) זמן, O(1) זיכרון, אין אפשרות ל-overflow.',
      },
      {
        en: 'Test: walk through a=3 (011), b=8 (1000) bit by bit; then equal values (5, 5), zero, negative numbers, and the same variable passed twice to show the guard.',
        he: 'בדיקה: לעבור על a=3 ‏(011), ‏b=8 ‏(1000) ביט-ביט, ואחר כך ערכים שווים (5, 5), אפס, מספרים שליליים, ואותו משתנה שמועבר פעמיים כדי להראות את ה-guard.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why it works with the XOR identities (x ^ x = 0, x ^ 0 = x, commutativity), not just the three lines.',
        he: 'להסביר למה זה עובד דרך הזהויות של XOR ‏(x ^ x = 0, ‏x ^ 0 = x, קומוטטיביות), ולא רק לדקלם שלוש שורות.',
      },
      {
        en: 'Aliasing: if both pointers point to the same variable the result is 0, so guard with if (a == b) return. Equal values are not a problem, equal addresses are.',
        he: 'Aliasing: אם שני ה-pointers מצביעים לאותו משתנה התוצאה היא 0, ולכן שמים if (a == b) return. ערכים שווים הם לא בעיה, כתובות שוות כן.',
      },
      {
        en: 'Mention the add/subtract variant and why it is worse: it can overflow, and signed overflow in C/C++ is undefined behaviour.',
        he: 'להזכיר את גרסת החיבור והחיסור ולמה היא פחות טובה: היא יכולה לגלוש, ו-signed overflow ב-C/C++ הוא undefined behaviour.',
      },
      {
        en: 'Show maturity: XOR swap is not faster on modern CPUs. Each step depends on the previous one, while a temporary usually lives in a register or becomes a single exchange instruction.',
        he: 'להראות בגרות: XOR swap לא מהיר יותר על מעבדים מודרניים. כל צעד תלוי בקודם, ואילו משתנה עזר יושב בדרך כלל ב-register או הופך לפקודת exchange אחת.',
      },
      {
        en: 'Language detail: Java cannot swap two primitive parameters because they are copies, so swap inside an array or object. Python has tuple unpacking.',
        he: 'פרט שפה: ב-Java אי אפשר להחליף שני פרמטרים פרימיטיביים כי הם עותקים, ולכן מחליפים בתוך מערך או אובייקט. ב-Python יש tuple unpacking.',
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
      en: 'Endianness is the order in which the bytes of a multi-byte value are laid out in memory. Little-endian puts the least significant byte at the lowest address (x86, ARM in its usual configuration), big-endian puts the most significant byte first (network byte order).\nTo detect it, store a known multi-byte value, the unsigned int 1, and look at the byte at its lowest address. In 1 the least significant byte is 0x01 and all the others are 0x00, so if the first byte is 1 the machine is little-endian, and if it is 0 it is big-endian. In C we cast the address to unsigned char *, which is allowed because character pointers may alias any object.\nIn C++20 std::endian::native answers at compile time, Java exposes ByteOrder.nativeOrder() because the JVM hides memory layout, and Python has sys.byteorder.\nTime and space are O(1). Remember that shifts and arithmetic behave the same on both orders: endianness only matters when memory is reinterpreted as bytes, for example in network packets, binary file formats and hardware registers, which is why htonl and ntohl exist.',
      he: 'Endianness הוא הסדר שבו הבתים של ערך רב-בתי מסודרים בזיכרון. little-endian שם את הבית הפחות משמעותי בכתובת הנמוכה ביותר (x86, ו-ARM בתצורה הרגילה שלו), ו-big-endian שם קודם את הבית המשמעותי ביותר (network byte order).\nכדי לזהות, שומרים ערך רב-בתי ידוע, unsigned int עם הערך 1, ומסתכלים על הבית בכתובת הנמוכה שלו. ב-1 הבית הפחות משמעותי הוא 0x01 וכל השאר 0x00, ולכן אם הבית הראשון הוא 1 המכונה little-endian, ואם הוא 0 היא big-endian. ב-C עושים cast לכתובת ל-unsigned char *, וזה חוקי כי מצביע לתווים מותר לו לעשות alias לכל אובייקט.\nב-C++20 יש std::endian::native שעונה כבר בזמן קומפילציה, ב-Java יש ByteOrder.nativeOrder() כי ה-JVM מסתיר את מבנה הזיכרון, וב-Python יש sys.byteorder.\nהזמן והזיכרון O(1). חשוב לזכור ש-shifts ואריתמטיקה מתנהגים אותו דבר בשני הסדרים: endianness משנה רק כשמפרשים זיכרון כבתים, למשל בחבילות רשת, בפורמטים בינאריים של קבצים וב-registers של חומרה, ובגלל זה קיימים htonl ו-ntohl.',
    },
    approach: [
      {
        en: 'Clarify the definition with an example: show how 0x01020304 is stored in little-endian and in big-endian, and confirm which language is expected.',
        he: 'לחדד את ההגדרה עם דוגמה: להראות איך 0x01020304 נשמר ב-little-endian וב-big-endian, ולוודא באיזו שפה מצופה הפתרון.',
      },
      {
        en: 'Note why arithmetic cannot reveal it: shifts work on values, not on memory, so we must look at the raw bytes of a stored integer.',
        he: 'להסביר למה אריתמטיקה לא תגלה את זה: shifts עובדים על ערכים ולא על זיכרון, ולכן חייבים להסתכל על הבתים הגולמיים של מספר שמור.',
      },
      {
        en: 'Key idea: store 1 in an unsigned int, take its address as unsigned char *, and read the first byte. 1 means little-endian, 0 means big-endian.',
        he: 'הרעיון המרכזי: לשמור 1 ב-unsigned int, לקחת את הכתובת שלו כ-unsigned char *, ולקרוא את הבית הראשון. 1 פירושו little-endian, ו-0 פירושו big-endian.',
      },
      {
        en: 'Mention alternatives: a union, C++20 std::endian, Java ByteOrder.nativeOrder(), Python sys.byteorder, and compile-time macros in embedded code.',
        he: 'להזכיר חלופות: union, ‏std::endian ב-C++20, ‏ByteOrder.nativeOrder() ב-Java, ‏sys.byteorder ב-Python, ומאקרו בזמן קומפילציה בקוד embedded.',
      },
      {
        en: 'Complexity: O(1) time and space.',
        he: 'סיבוכיות: O(1) זמן וזיכרון.',
      },
      {
        en: 'Test: trace the memory of x = 1 on both byte orders, run it on an x86 machine (expect true), and if possible on a big-endian target or emulator to see false.',
        he: 'בדיקה: לעקוב אחרי הזיכרון של x = 1 בשני הסדרים, להריץ על מכונת x86 (מצפים ל-true), ואם אפשר על מעבד big-endian או אמולטור כדי לראות false.',
      },
    ],
    keyPoints: [
      {
        en: 'Draw 0x01020304 in memory both ways (04 03 02 01 vs 01 02 03 04). Interviewers love a quick diagram.',
        he: 'לצייר את 0x01020304 בזיכרון בשני הסדרים (04 03 02 01 מול 01 02 03 04). מראיינים אוהבים ציור קצר.',
      },
      {
        en: 'Network byte order is big-endian; use htons/htonl and ntohs/ntohl when sending binary fields, and never assume the peer has the same byte order.',
        he: 'network byte order הוא big-endian. משתמשים ב-htons/htonl וב-ntohs/ntohl כששולחים שדות בינאריים, ולא מניחים שלצד השני יש אותו סדר בתים.',
      },
      {
        en: 'Endianness is about bytes, not bits, and does not affect shifts or masks on a value in a register: (x >> 8) & 0xFF is portable.',
        he: 'Endianness עוסק בבתים ולא בביטים, ולא משפיע על shifts או masks על ערך ב-register: ‏(x >> 8) & 0xFF הוא קוד portable.',
      },
      {
        en: 'Use unsigned char * for the byte view: char types may alias anything, while casting to other pointer types breaks strict aliasing rules.',
        he: 'משתמשים ב-unsigned char * כדי להסתכל על הבתים: לטיפוסי char מותר לעשות alias לכל דבר, ו-cast לטיפוסי pointer אחרים שובר את חוקי ה-strict aliasing.',
      },
      {
        en: 'Embedded angle: a big-endian sensor or bus protocol on a little-endian MCU means byte swapping (often with a compiler builtin such as __builtin_bswap32), and the check can be done at compile time with predefined macros.',
        he: 'זווית embedded: חיישן או פרוטוקול big-endian על MCU שהוא little-endian מחייב היפוך בתים (לרוב עם builtin של הקומפיילר כמו __builtin_bswap32), ואפשר לבדוק את הסדר כבר בזמן קומפילציה עם מאקרו מוגדרים מראש.',
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
      en: 'A process is an instance of a running program with its own isolated virtual address space and resources. A thread is an independent flow of execution inside a process, and all threads of a process share that address space.\n- What a process owns: its virtual address space (code, data, heap), open file descriptors and sockets, a PID and a security context. The OS tracks it in a process control block.\n- What each thread owns: its own stack, registers, program counter and thread-local storage. Everything else is shared with the other threads of the process.\n- Cost: creating a process (fork, CreateProcess) means building a new address space and page tables. A thread needs only a stack and a kernel structure. Switching between threads of the same process does not change page tables, so caches and the TLB stay warm.\n- Isolation: a crash in one process does not affect another, but a bad pointer in one thread can corrupt or kill the whole process.\n- Communication: threads simply share variables, which means race conditions and the need for mutexes or atomics. Processes need IPC such as pipes, sockets or shared memory.\nExample: Chrome runs tabs in separate processes so one crashing page does not take down the browser, while a game engine uses threads for rendering, physics and audio that work on the same data.\nDepth: on Linux both are created with clone() and scheduled as tasks; the difference is only what is shared. And in CPython the GIL stops threads from running Python bytecode in parallel, so CPU-bound work uses multiprocessing.',
      he: 'תהליך (process) הוא מופע של תוכנית רצה, עם מרחב כתובות וירטואלי מבודד ומשאבים משלו. Thread הוא רצף ריצה עצמאי בתוך תהליך, וכל ה-threads של אותו תהליך חולקים את מרחב הכתובות שלו.\n- מה שייך לתהליך: מרחב הכתובות הווירטואלי (קוד, data, heap), קבצים ו-sockets פתוחים, PID והרשאות. מערכת ההפעלה מנהלת אותו ב-process control block.\n- מה שייך לכל thread: stack משלו, registers, program counter ו-thread-local storage. כל השאר משותף עם שאר ה-threads בתהליך.\n- עלות: יצירת תהליך (fork, ‏CreateProcess) דורשת לבנות מרחב כתובות ו-page tables חדשים. ל-thread צריך רק stack ומבנה ב-kernel. מעבר בין threads של אותו תהליך לא מחליף page tables, ולכן ה-cache וה-TLB נשארים חמים.\n- בידוד: קריסה של תהליך אחד לא פוגעת באחר, אבל pointer שגוי ב-thread אחד יכול להשחית או להפיל את כל התהליך.\n- תקשורת: threads פשוט חולקים משתנים, ולכן יש race conditions וצריך mutex או atomics. תהליכים צריכים IPC כמו pipes, ‏sockets או shared memory.\nדוגמה: Chrome מריץ לשוניות בתהליכים נפרדים כדי שדף שקורס לא יפיל את כל הדפדפן, ומנוע משחק משתמש ב-threads לרינדור, פיזיקה ואודיו שעובדים על אותם נתונים.\nלעומק: בלינוקס שניהם נוצרים עם clone() ומתוזמנים כ-tasks, וההבדל הוא רק מה משותף. וב-CPython ה-GIL מונע מ-threads להריץ bytecode במקביל, ולכן עבודה כבדת CPU עושים עם multiprocessing.',
    },
    keyPoints: [
      {
        en: 'Be precise about what is shared: heap, globals, code and file descriptors are shared; stack, registers and program counter are per thread.',
        he: 'לדייק מה משותף: heap, משתנים גלובליים, קוד ו-file descriptors משותפים, ואילו stack, ‏registers ו-program counter הם לכל thread בנפרד.',
      },
      {
        en: 'Explain why a thread context switch is cheaper: same address space, no page-table switch, warmer caches and TLB.',
        he: 'להסביר למה context switch בין threads זול יותר: אותו מרחב כתובות, בלי החלפת page tables, ‏cache ו-TLB חמים יותר.',
      },
      {
        en: 'Mention fork() and copy-on-write: the child gets a logical copy of the memory, but physical pages are copied only when one side writes.',
        he: 'להזכיר fork() ו-copy-on-write: הילד מקבל עותק לוגי של הזיכרון, אבל דפים פיזיים מועתקים רק כשאחד הצדדים כותב.',
      },
      {
        en: 'Name the trade-off in one line: threads are faster and share easily, processes are safer and isolated.',
        he: 'לסכם את ה-trade-off במשפט: threads מהירים יותר וחולקים בקלות, תהליכים בטוחים ומבודדים יותר.',
      },
      {
        en: 'Expect follow-ups: race condition, mutex vs semaphore, deadlock, and the Python GIL (threads for I/O, processes for CPU).',
        he: 'לצפות לשאלות המשך: race condition, ההבדל בין mutex ל-semaphore, ‏deadlock, וה-GIL של Python ‏(threads ל-I/O, תהליכים ל-CPU).',
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
      en: 'A deadlock is a state where a group of threads each hold a resource and wait for a resource held by another member of the group, so none of them can ever continue.\nIt requires all four Coffman conditions at once:\n- Mutual exclusion: a resource can be held by only one thread at a time.\n- Hold and wait: a thread keeps one lock while waiting for another.\n- No preemption: a lock cannot be taken away, only its owner can release it.\n- Circular wait: T1 waits for T2 and T2 waits for T1.\nPrevention means breaking at least one condition:\n- Lock ordering: give locks a global order and always acquire them in that order. This removes circular wait and is the most common fix.\n- Acquire all needed locks together, for example std::scoped_lock(a, b) in C++, which uses a deadlock-avoidance algorithm.\n- try_lock with a timeout: if you cannot get the second lock, release the first, back off and retry. This breaks hold and wait, but watch out for livelock.\n- Design it away: hold only one lock at a time, shorten critical sections, use lock-free structures or message passing.\nOther strategies are avoidance, such as the Banker\'s algorithm, and detection with recovery: databases build a wait-for graph, find the cycle and abort one transaction as the victim.\nExample: transfer(A, B) locks A then B while transfer(B, A) locks B then A. Fix it by always locking the account with the lower ID first.\nDepth: distinguish deadlock from livelock and starvation, and in RTOS work mention priority inversion, solved with priority-inheritance mutexes.',
      he: 'deadlock הוא מצב שבו קבוצת threads, כל אחד מחזיק משאב ומחכה למשאב שמחזיק thread אחר בקבוצה, ולכן אף אחד מהם לא יכול להתקדם לעולם.\nהוא דורש שכל ארבעת תנאי Coffman יתקיימו יחד:\n- Mutual exclusion: משאב יכול להיות מוחזק רק על ידי thread אחד בכל רגע.\n- Hold and wait: ‏thread מחזיק מנעול אחד בזמן שהוא מחכה לאחר.\n- No preemption: אי אפשר לקחת מנעול בכוח, רק הבעלים משחרר אותו.\n- Circular wait: ‏T1 מחכה ל-T2 ו-T2 מחכה ל-T1.\nמניעה פירושה לשבור לפחות תנאי אחד:\n- סדר נעילה: לתת למנעולים סדר גלובלי ולנעול תמיד לפיו. זה מבטל circular wait וזה הפתרון הנפוץ ביותר.\n- לנעול את כל המנעולים יחד, למשל std::scoped_lock(a, b) ב-C++, שמשתמש באלגוריתם שנמנע מ-deadlock.\n- try_lock עם timeout: אם אי אפשר לקבל את המנעול השני, משחררים את הראשון, מחכים קצת ומנסים שוב. זה שובר את hold and wait, אבל צריך להיזהר מ-livelock.\n- לתכנן כך שזה לא יקרה: להחזיק מנעול אחד בכל פעם, לקצר critical sections, להשתמש במבנים lock-free או ב-message passing.\nאסטרטגיות נוספות הן avoidance, כמו Banker\'s algorithm, ו-detection and recovery: מסדי נתונים בונים wait-for graph, מזהים מעגל ומבטלים טרנזקציה אחת כקורבן.\nדוגמה: transfer(A, B) נועל A ואז B, ובמקביל transfer(B, A) נועל B ואז A. הפתרון: תמיד לנעול קודם את החשבון עם ה-ID הנמוך.\nלעומק: להבדיל בין deadlock ל-livelock ול-starvation, ובעבודה עם RTOS להזכיר priority inversion, שנפתר עם mutex שתומך ב-priority inheritance.',
    },
    keyPoints: [
      {
        en: 'List all four Coffman conditions by name and stress that all four must hold, so breaking any one prevents deadlock.',
        he: 'למנות את ארבעת תנאי Coffman בשמם ולהדגיש שכולם חייבים להתקיים, ולכן שבירת אחד מהם מונעת deadlock.',
      },
      {
        en: 'Lock ordering is the practical answer interviewers want; give a concrete rule such as lock by address or by ID.',
        he: 'סדר נעילה הוא התשובה המעשית שמראיינים מחפשים. לתת כלל קונקרטי, כמו לנעול לפי כתובת או לפי ID.',
      },
      {
        en: 'Know the difference: deadlock (everyone blocked), livelock (everyone busy retrying, no progress), starvation (one thread never gets the resource).',
        he: 'לדעת את ההבדל: deadlock ‏(כולם חסומים), livelock ‏(כולם עסוקים בניסיונות חוזרים בלי התקדמות), starvation ‏(thread אחד אף פעם לא מקבל את המשאב).',
      },
      {
        en: 'Prevention vs avoidance vs detection: prevention changes the design, avoidance checks each request (Banker\'s), detection finds cycles in a wait-for graph and recovers, as databases do.',
        he: 'prevention מול avoidance מול detection: מניעה משנה את התכנון, avoidance בודק כל בקשה (Banker\'s), ו-detection מוצא מעגלים ב-wait-for graph ומתאושש, כמו שמסדי נתונים עושים.',
      },
      {
        en: 'Debugging tip: a deadlocked process shows 0% CPU with threads stuck in lock calls; dump all thread stacks (gdb thread apply all bt, jstack) to see who holds what.',
        he: 'טיפ ל-debug: תהליך ב-deadlock מראה 0% CPU עם threads תקועים בקריאות נעילה. עושים dump לכל ה-stacks ‏(gdb thread apply all bt, ‏jstack) כדי לראות מי מחזיק מה.',
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
      en: 'The stack is a per-thread LIFO region for function call frames and local variables, managed automatically. The heap is a shared region for dynamic allocations whose size and lifetime are decided at runtime.\n- Allocation: a function call reserves its frame by moving the stack pointer and the frame vanishes on return. malloc or new must search the allocator\'s free lists for a fitting block and sometimes ask the OS for more memory, so it is much slower.\n- Lifetime: stack data lives until the function returns. Heap data lives until free or delete, or until a smart pointer or garbage collector releases it.\n- Size: the stack is small and fixed per thread, typically 8 MB for the main thread on Linux and 1 MB on Windows, and often only a few KB per task on embedded systems. Deep recursion or huge local arrays cause a stack overflow. The heap is limited by available virtual memory.\n- Threads: every thread has its own stack, while the heap is shared, so the allocator must be thread-safe.\nTypical bugs: on the stack, returning a pointer to a local variable and buffer overflows that overwrite the return address. On the heap, leaks, double free, use-after-free and fragmentation.\nExample: safety-critical embedded code often follows MISRA C, which forbids malloc and free, and uses static and stack memory instead, because heap fragmentation is unpredictable on a device that runs for years.\nDepth: in Java and Python objects are allocated on the heap and locals hold references, while C++ RAII ties heap memory to the lifetime of a stack object.',
      he: 'ה-stack הוא אזור LIFO לכל thread, שמחזיק מסגרות של קריאות לפונקציות ומשתנים מקומיים, ומנוהל אוטומטית. ה-heap הוא אזור משותף להקצאות דינמיות, שהגודל ומשך החיים שלהן נקבעים בזמן ריצה.\n- הקצאה: קריאה לפונקציה שומרת לעצמה frame על ידי הזזת ה-stack pointer וה-frame נעלם כשהיא חוזרת. malloc או new צריכים לחפש בלוק מתאים ברשימות של ה-allocator, ולפעמים לבקש עוד זיכרון ממערכת ההפעלה, ולכן זה הרבה יותר איטי.\n- משך חיים: מידע על ה-stack חי עד שהפונקציה חוזרת. מידע על ה-heap חי עד free או delete, או עד ש-smart pointer או garbage collector משחררים אותו.\n- גודל: ה-stack קטן וקבוע לכל thread, בדרך כלל 8 MB ל-thread הראשי בלינוקס ו-1 MB ב-Windows, ובמערכות embedded לפעמים רק כמה KB לכל task. רקורסיה עמוקה או מערכים מקומיים ענקיים גורמים ל-stack overflow. ה-heap מוגבל בזיכרון הווירטואלי הזמין.\n- Threads: לכל thread יש stack משלו, וה-heap משותף, ולכן ה-allocator חייב להיות thread-safe.\nבאגים טיפוסיים: ב-stack, החזרת pointer למשתנה מקומי ו-buffer overflow שדורס את כתובת החזרה. ב-heap, דליפות זיכרון, double free, ‏use-after-free ופרגמנטציה.\nדוגמה: קוד embedded קריטי עובד הרבה פעמים לפי MISRA C, שאוסר על malloc ו-free, ומשתמש בזיכרון סטטי וב-stack במקום, כי פרגמנטציה של ה-heap לא צפויה במכשיר שרץ שנים.\nלעומק: ב-Java וב-Python אובייקטים מוקצים על ה-heap והמשתנים המקומיים מחזיקים references, וב-C++ ‏RAII קושר זיכרון ב-heap למשך החיים של אובייקט על ה-stack.',
    },
    keyPoints: [
      {
        en: 'Say why the stack is fast: allocation is just moving the stack pointer, and the memory is contiguous and hot in cache.',
        he: 'להסביר למה ה-stack מהיר: הקצאה היא רק הזזה של ה-stack pointer, והזיכרון רציף וחם ב-cache.',
      },
      {
        en: 'One stack per thread, one heap per process: this is why heap allocators need locking or per-thread caches.',
        he: 'stack אחד לכל thread ו-heap אחד לכל תהליך: בגלל זה allocators של heap צריכים נעילה או cache לכל thread.',
      },
      {
        en: 'Name the classic bugs on each side: dangling pointer to a local and stack overflow; leak, double free, use-after-free and fragmentation.',
        he: 'לציין את הבאגים הקלאסיים בכל צד: dangling pointer למשתנה מקומי ו-stack overflow, ומהצד השני leak, ‏double free, ‏use-after-free ופרגמנטציה.',
      },
      {
        en: 'Do not confuse the heap memory area with the heap data structure; they are unrelated.',
        he: 'לא לבלבל בין אזור הזיכרון heap למבנה הנתונים heap, אין ביניהם קשר.',
      },
      {
        en: 'Embedded follow-up: why avoid dynamic allocation, how to size task stacks, and how stack canaries or watermarking detect overflows.',
        he: 'שאלת המשך ב-embedded: למה נמנעים מהקצאה דינמית, איך קובעים גודל stack לכל task, ואיך stack canaries או watermarking מזהים overflow.',
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
      en: 'Virtual memory gives every process its own private, contiguous address space, which the operating system and the CPU\'s MMU translate to physical RAM one page at a time.\nHow it works:\n- Memory is divided into pages, usually 4 KB. Each process has a page table that maps virtual pages to physical frames, with permission bits for read, write, execute and user or kernel access.\n- On every access the MMU translates the address. The TLB caches recent translations so most accesses do not walk the page table.\n- If the page is valid but not in RAM, the CPU raises a page fault: the OS loads it from swap or from the mapped file, updates the page table and re-runs the instruction. An access to an unmapped or forbidden address becomes a segmentation fault instead.\nWhat it gives us:\n- Isolation and protection: a process cannot read another process\'s memory or write to its own code.\n- More memory than RAM: cold pages are swapped out to disk.\n- Sharing: shared libraries, and copy-on-write after fork, map the same physical frames into many processes.\n- Lazy loading: executables and memory-mapped files are read only when touched.\nExample: two processes can hold the same pointer value, say 0x7ffd1000, and it points to completely different physical memory in each.\nTrade-off: when the working set does not fit in RAM the system thrashes, spending its time paging instead of working.\nDepth: common follow-ups are TLB misses, huge pages (2 MB) to reduce them, and why many microcontrollers have only an MPU, which gives protection without address translation.',
      he: 'זיכרון וירטואלי נותן לכל תהליך מרחב כתובות פרטי ורציף משלו, שמערכת ההפעלה וה-MMU של המעבד מתרגמים ל-RAM הפיזי דף אחרי דף.\nאיך זה עובד:\n- הזיכרון מחולק לדפים (pages), בדרך כלל 4 KB. לכל תהליך יש page table שממפה דפים וירטואליים ל-frames פיזיים, עם ביטים של הרשאות לקריאה, כתיבה, הרצה וגישת user או kernel.\n- בכל גישה ה-MMU מתרגם את הכתובת. ה-TLB שומר תרגומים אחרונים, כך שרוב הגישות לא צריכות לעבור על ה-page table.\n- אם הדף תקין אבל לא נמצא ב-RAM, המעבד מעלה page fault: מערכת ההפעלה טוענת אותו מה-swap או מהקובץ הממופה, מעדכנת את ה-page table ומריצה את הפקודה שוב. גישה לכתובת שלא ממופה או אסורה הופכת ל-segmentation fault.\nמה זה נותן:\n- בידוד והגנה: תהליך לא יכול לקרוא זיכרון של תהליך אחר או לכתוב על הקוד של עצמו.\n- יותר זיכרון מה-RAM: דפים שלא בשימוש מועברים לדיסק.\n- שיתוף: ספריות משותפות, ו-copy-on-write אחרי fork, ממפים את אותם frames פיזיים לתהליכים רבים.\n- טעינה עצלה: קבצי הרצה וקבצים ממופים נקראים רק כשניגשים אליהם.\nדוגמה: שני תהליכים יכולים להחזיק את אותו ערך pointer, נגיד 0x7ffd1000, והוא מצביע אצל כל אחד לזיכרון פיזי אחר לגמרי.\nTrade-off: כשה-working set לא נכנס ב-RAM המערכת נכנסת ל-thrashing, מבזבזת את הזמן על paging במקום על עבודה.\nלעומק: שאלות המשך נפוצות הן TLB miss, ‏huge pages ‏(2 MB) כדי לצמצם אותם, ולמה להרבה מיקרו-בקרים יש רק MPU, שנותן הגנה בלי תרגום כתובות.',
    },
    keyPoints: [
      {
        en: 'Use the right terms: page, frame, page table, MMU, TLB, page fault. Explain the TLB as a cache of translations.',
        he: 'להשתמש במונחים הנכונים: page, ‏frame, ‏page table, ‏MMU, ‏TLB, ‏page fault. להסביר את ה-TLB כ-cache של תרגומים.',
      },
      {
        en: 'Distinguish a page fault (normal, the OS handles it) from a segmentation fault (invalid access, the process gets SIGSEGV).',
        he: 'להבדיל בין page fault ‏(רגיל, מערכת ההפעלה מטפלת בו) לבין segmentation fault ‏(גישה לא חוקית, התהליך מקבל SIGSEGV).',
      },
      {
        en: 'Virtual memory is not just swap: isolation, sharing and copy-on-write are the main benefits even on machines with no swap at all.',
        he: 'זיכרון וירטואלי הוא לא רק swap: בידוד, שיתוף ו-copy-on-write הם היתרונות העיקריים, גם במכונות בלי swap בכלל.',
      },
      {
        en: 'Mention thrashing and how to spot it (high page-fault rate, vmstat si/so columns, disk at 100%).',
        he: 'להזכיר thrashing ואיך מזהים אותו (קצב page faults גבוה, העמודות si/so ב-vmstat, דיסק ב-100%).',
      },
      {
        en: 'Linux overcommits memory: malloc can succeed and the process can be killed later by the OOM killer when pages are actually touched.',
        he: 'לינוקס עושה overcommit לזיכרון: malloc יכול להצליח, והתהליך ייהרג אחר כך על ידי ה-OOM killer כשניגשים לדפים בפועל.',
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
      en: 'Active Directory is Microsoft\'s directory service: a central, replicated database of users, computers, groups and policies in a Windows domain, used to authenticate people and decide what they can access.\nThe building blocks:\n- Domain controllers: servers that hold the AD database and replicate it to each other, so losing one DC does not stop logins.\n- Objects and OUs: users, computers and groups are organized in organizational units so admin rights can be delegated and policies linked.\n- Domain, tree and forest: the domain is the main administrative and replication unit, and the forest is the real security boundary.\n- Protocols: Kerberos for authentication, with NTLM as a legacy fallback, LDAP to query and edit the directory, and DNS, which AD depends on to find domain controllers through SRV records.\n- Group Policy: GPOs linked to sites, domains or OUs push settings such as password policy, mapped drives and security baselines.\nHow a login works: the user signs in on a domain-joined PC, the PC locates a DC through DNS, the DC verifies the password and issues a Kerberos ticket, and from then on the user has single sign-on to file shares, printers and apps according to group membership.\nHelp-desk example: a user keeps getting locked out after a password change because an old phone or mapped drive keeps trying the old password. You find the lockout source, unlock the account and remove the saved credential.\nDepth: assign permissions to groups, not to individual users, and know the cloud counterpart, Microsoft Entra ID (formerly Azure AD), which is often synced with on-prem AD.',
      he: 'Active Directory הוא שירות ה-directory של מיקרוסופט: מסד נתונים מרכזי ומשוכפל של משתמשים, מחשבים, קבוצות ומדיניות בדומיין של Windows, שמשמש לאימות משתמשים ולהחלטה למה מותר להם לגשת.\nאבני הבניין:\n- Domain controllers: שרתים שמחזיקים את מסד הנתונים של AD ומשכפלים אותו ביניהם, כך שנפילה של DC אחד לא עוצרת התחברויות.\n- אובייקטים ו-OUs: משתמשים, מחשבים וקבוצות מאורגנים ב-organizational units כדי שאפשר יהיה להאציל הרשאות ניהול ולקשר מדיניות.\n- Domain, ‏tree ו-forest: ה-domain הוא יחידת הניהול והשכפול העיקרית, וה-forest הוא גבול האבטחה האמיתי.\n- פרוטוקולים: Kerberos לאימות, עם NTLM כגיבוי ישן, ‏LDAP כדי לשאול ולערוך את ה-directory, ו-DNS, ש-AD תלוי בו כדי למצוא domain controllers דרך רשומות SRV.\n- Group Policy: ‏GPOs שמקושרים לאתרים, לדומיינים או ל-OUs דוחפים הגדרות כמו מדיניות סיסמאות, כוננים ממופים ו-security baselines.\nאיך עובדת התחברות: המשתמש נכנס במחשב שמחובר לדומיין, המחשב מוצא DC דרך DNS, ה-DC מאמת את הסיסמה ומנפיק Kerberos ticket, ומאותו רגע יש למשתמש single sign-on לתיקיות משותפות, מדפסות ואפליקציות לפי הקבוצות שהוא חבר בהן.\nדוגמה מה-helpdesk: משתמש ננעל שוב ושוב אחרי החלפת סיסמה, כי טלפון ישן או כונן ממופה ממשיכים לנסות את הסיסמה הישנה. מוצאים את מקור הנעילה, משחררים את החשבון ומוחקים את הסיסמה השמורה.\nלעומק: נותנים הרשאות לקבוצות ולא למשתמשים בודדים, וכדאי להכיר את המקבילה בענן, Microsoft Entra ID (לשעבר Azure AD), שלרוב מסונכרן עם ה-AD המקומי.',
    },
    keyPoints: [
      {
        en: 'Separate authentication (who you are, Kerberos) from authorization (what you may do, group membership and ACLs).',
        he: 'להפריד בין authentication ‏(מי אתה, Kerberos) לבין authorization ‏(מה מותר לך, חברות בקבוצות ו-ACLs).',
      },
      {
        en: 'AD depends on DNS: most \'cannot join the domain\' or slow-login problems come from the client using a DNS server that is not the DC.',
        he: 'AD תלוי ב-DNS: רוב הבעיות של \'לא מצליח להצטרף לדומיין\' או התחברות איטית נובעות מכך שהלקוח משתמש בשרת DNS שהוא לא ה-DC.',
      },
      {
        en: 'Kerberos is sensitive to time: if the clock skew between client and DC exceeds 5 minutes by default, authentication fails.',
        he: 'Kerberos רגיש לשעון: אם הפרש השעות בין הלקוח ל-DC עולה על 5 דקות (ברירת המחדל), האימות נכשל.',
      },
      {
        en: 'Know the daily help-desk tasks: unlock an account, reset a password, add a user to a group, move a computer to an OU, run gpupdate /force and gpresult /r.',
        he: 'להכיר את המשימות היומיומיות ב-helpdesk: לשחרר חשבון נעול, לאפס סיסמה, להוסיף משתמש לקבוצה, להעביר מחשב ל-OU, ולהריץ gpupdate /force ו-gpresult /r.',
      },
      {
        en: 'Security angle: AD is a prime attack target (pass-the-hash, Kerberoasting), so use least privilege and separate admin accounts.',
        he: 'זווית אבטחה: AD הוא יעד תקיפה מרכזי (pass-the-hash, ‏Kerberoasting), ולכן עובדים עם least privilege וחשבונות ניהול נפרדים.',
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
      en: 'Every file in Linux has an owner, a group, and three sets of permission bits: one for the owner (user), one for the group and one for everyone else (others).\n- r = 4: read the file, or list the names in a directory.\n- w = 2: modify the file, or create, delete and rename entries in a directory.\n- x = 1: execute the file, or enter a directory and access entries in it by name.\nIn octal each digit is the sum for one class, so chmod 755 means:\n- 7 = 4+2+1 = rwx for the owner.\n- 5 = 4+1 = r-x for the group.\n- 5 = r-x for others.\nls -l shows it as -rwxr-xr-x: the owner can read, change and run the file, everyone else can read and run it but not change it. It is the standard mode for scripts, binaries and shared directories. 644 (rw-r--r--) is typical for regular files, and 600 for secrets such as an SSH private key, which ssh refuses to use if others can read it.\nThe kernel picks exactly one class: owner if you own the file, otherwise group if you belong to its group, otherwise others, and applies only that set.\nRelated tools: chown and chgrp change ownership, and umask (often 022) sets the defaults, so new files get 644 and new directories 755.\nSpecial bits: setuid (4xxx) runs a program with its owner\'s privileges, which is how passwd works; setgid on a directory makes new files inherit its group; the sticky bit on /tmp stops users deleting each other\'s files.\nDepth: deleting a file depends on write permission on the directory, not on the file itself.',
      he: 'לכל קובץ בלינוקס יש בעלים, קבוצה ושלוש קבוצות של ביטי הרשאה: אחת לבעלים (user), אחת לקבוצה (group) ואחת לכל השאר (others).\n- r = 4: קריאת הקובץ, או הצגת השמות בתוך תיקייה.\n- w = 2: שינוי הקובץ, או יצירה, מחיקה ושינוי שם של קבצים בתוך תיקייה.\n- x = 1: הרצת הקובץ, או כניסה לתיקייה וגישה לקבצים בה לפי שם.\nבייצוג אוקטלי כל ספרה היא סכום ההרשאות של קבוצה אחת, ולכן chmod 755 אומר:\n- 7 = 4+2+1 = rwx לבעלים.\n- 5 = 4+1 = r-x לקבוצה.\n- 5 = r-x לאחרים.\nב-ls -l זה נראה כך: -rwxr-xr-x. הבעלים יכול לקרוא, לשנות ולהריץ, וכל השאר יכולים לקרוא ולהריץ אבל לא לשנות. זה המצב הסטנדרטי לסקריפטים, לקבצי הרצה ולתיקיות משותפות. 644 ‏(rw-r--r--) מקובל לקבצים רגילים, ו-600 לסודות כמו מפתח SSH פרטי, ש-ssh מסרב להשתמש בו אם אחרים יכולים לקרוא אותו.\nה-kernel בוחר בדיוק קבוצה אחת: owner אם אתה הבעלים, אחרת group אם אתה חבר בקבוצה של הקובץ, אחרת others, ומפעיל רק את הביטים שלה.\nכלים קשורים: chown ו-chgrp משנים בעלות, ו-umask (לרוב 022) קובע את ברירת המחדל, כך שקבצים חדשים מקבלים 644 ותיקיות חדשות 755.\nביטים מיוחדים: setuid ‏(4xxx) מריץ תוכנית עם ההרשאות של הבעלים שלה, וככה עובד passwd. ‏setgid על תיקייה גורם לקבצים חדשים לרשת את הקבוצה שלה. ה-sticky bit על /tmp מונע ממשתמשים למחוק קבצים של אחרים.\nלעומק: מחיקת קובץ תלויה בהרשאת כתיבה על התיקייה, ולא על הקובץ עצמו.',
    },
    keyPoints: [
      {
        en: 'Explain what r, w and x mean on a directory, not only on a file; this is where most candidates stumble.',
        he: 'להסביר מה המשמעות של r, ‏w ו-x על תיקייה ולא רק על קובץ. כאן רוב המועמדים נופלים.',
      },
      {
        en: 'Show you can convert both ways: 755 to rwxr-xr-x and 640 to rw-r-----, and use symbolic form like chmod u+x or chmod go-w.',
        he: 'להראות שאפשר להמיר לשני הכיוונים: 755 ל-rwxr-xr-x ו-640 ל-rw-r-----, ולהשתמש גם בצורה הסימבולית, כמו chmod u+x או chmod go-w.',
      },
      {
        en: 'Never answer a permission problem with chmod 777: it lets anyone modify the file. Fix the owner or group instead.',
        he: 'אף פעם לא לפתור בעיית הרשאות עם chmod 777: זה מאפשר לכל אחד לשנות את הקובץ. במקום זה מתקנים את הבעלים או הקבוצה.',
      },
      {
        en: 'Mention umask, setuid, setgid and the sticky bit, and that setuid binaries are a classic privilege-escalation target.',
        he: 'להזכיר umask, ‏setuid, ‏setgid ו-sticky bit, ושקבצי setuid הם יעד קלאסי ל-privilege escalation.',
      },
      {
        en: 'When the basic bits are not enough, ACLs (setfacl, getfacl) give permissions to specific extra users or groups.',
        he: 'כשהביטים הבסיסיים לא מספיקים, ACLs ‏(setfacl, ‏getfacl) נותנים הרשאות למשתמשים או קבוצות נוספים ספציפיים.',
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
      en: 'A virtual machine virtualizes hardware and runs a complete guest operating system with its own kernel. A container is an isolated group of processes that shares the host\'s kernel.\nHow each works:\n- VM: a hypervisor, either type 1 such as ESXi, Hyper-V or KVM, or type 2 such as VirtualBox, gives each VM virtual CPUs, memory, disks and NICs, with hardware help from Intel VT-x or AMD-V. The guest boots its own kernel.\n- Container: the Linux kernel isolates ordinary processes with namespaces (PID, network, mount, UTS, IPC, user) and limits their resources with cgroups (CPU, memory, I/O). The image is a layered filesystem that holds only the app and its libraries.\nComparison:\n- Startup: a VM takes tens of seconds to minutes, a container usually well under a second.\n- Size: VM images are gigabytes, container images often tens to hundreds of megabytes.\n- Isolation: a VM is stronger, since the boundary is the hypervisor. Containers share one kernel, so a kernel vulnerability can lead to an escape.\n- OS: a VM can run any OS, such as Windows on a Linux host. A Linux container needs a Linux kernel, which is why Docker Desktop on Windows and Mac runs a small Linux VM.\nWhen to use: containers for microservices, CI and dense deployment with Kubernetes; VMs for strong multi-tenant isolation or a different OS or kernel. In practice they are combined, since cloud Kubernetes nodes are themselves VMs.\nDepth: Firecracker microVMs (used by AWS Lambda) and gVisor narrow the gap between the two.',
      he: 'מכונה וירטואלית מדמה חומרה ומריצה מערכת הפעלה אורחת שלמה עם kernel משלה. קונטיינר הוא קבוצה מבודדת של תהליכים שחולקת את ה-kernel של המארח.\nאיך כל אחד עובד:\n- VM: ‏hypervisor, מסוג 1 כמו ESXi, ‏Hyper-V או KVM, או מסוג 2 כמו VirtualBox, נותן לכל VM מעבדים, זיכרון, דיסקים וכרטיסי רשת וירטואליים, בעזרת תמיכת חומרה של Intel VT-x או AMD-V. האורח מעלה kernel משלו.\n- קונטיינר: ה-kernel של לינוקס מבודד תהליכים רגילים עם namespaces ‏(PID, ‏network, ‏mount, ‏UTS, ‏IPC, ‏user) ומגביל את המשאבים שלהם עם cgroups ‏(CPU, זיכרון, I/O). ה-image היא מערכת קבצים בשכבות שמכילה רק את האפליקציה והספריות שלה.\nהשוואה:\n- עלייה: VM לוקחת עשרות שניות עד דקות, קונטיינר בדרך כלל הרבה פחות משנייה.\n- גודל: images של VM שוקלים ג\'יגה-בייטים, ו-images של קונטיינרים לרוב עשרות עד מאות מגה-בייטים.\n- בידוד: VM חזקה יותר, כי הגבול הוא ה-hypervisor. קונטיינרים חולקים kernel אחד, ולכן חולשה ב-kernel יכולה להוביל לבריחה מהקונטיינר.\n- מערכת הפעלה: VM יכולה להריץ כל מערכת, למשל Windows על מארח לינוקס. קונטיינר לינוקס צריך kernel של לינוקס, ובגלל זה Docker Desktop על Windows ו-Mac מריץ VM קטנה של לינוקס.\nמתי מה: קונטיינרים ל-microservices, ל-CI ולפריסה צפופה עם Kubernetes. ‏VMs לבידוד חזק בין לקוחות או למערכת הפעלה או kernel אחרים. בפועל משלבים, כי ה-nodes של Kubernetes בענן הם בעצמם VMs.\nלעומק: Firecracker microVMs ‏(שמשמשים את AWS Lambda) ו-gVisor מצמצמים את הפער בין השניים.',
    },
    keyPoints: [
      {
        en: 'Name the mechanisms: namespaces for isolation and cgroups for resource limits. \'A lightweight VM\' is the answer interviewers do not want.',
        he: 'לנקוב במנגנונים: namespaces לבידוד ו-cgroups להגבלת משאבים. \'VM קלה\' היא בדיוק התשובה שמראיינים לא רוצים לשמוע.',
      },
      {
        en: 'The shared kernel is the key difference: it explains the speed, the density and the weaker isolation.',
        he: 'ה-kernel המשותף הוא ההבדל המרכזי: הוא מסביר את המהירות, את הצפיפות ואת הבידוד החלש יותר.',
      },
      {
        en: 'Distinguish image vs container (template vs running instance) and note that containers should be stateless, with data in volumes.',
        he: 'להבדיל בין image לקונטיינר (תבנית מול מופע רץ), ולציין שקונטיינרים צריכים להיות stateless והמידע נשמר ב-volumes.',
      },
      {
        en: 'Security follow-ups: do not run as root inside the container, avoid --privileged, and use minimal base images.',
        he: 'שאלות המשך באבטחה: לא להריץ כ-root בתוך הקונטיינר, להימנע מהדגל --privileged, ולהשתמש ב-base images מינימליים.',
      },
      {
        en: 'Know hypervisor types: type 1 runs on bare metal, type 2 runs on top of a host OS.',
        he: 'להכיר את סוגי ה-hypervisor: סוג 1 רץ ישירות על החומרה, סוג 2 רץ מעל מערכת הפעלה מארחת.',
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
      en: 'The OSI model is a seven-layer reference model that splits network communication into layers, where each layer provides a service to the one above it and relies on the one below.\nFrom the bottom up:\n- 1 Physical: raw bits over the medium, such as copper, fiber or radio. Cables, hubs, repeaters.\n- 2 Data Link: frames between devices on the same link, MAC addresses, error detection with a CRC. Ethernet, Wi-Fi, switches. ARP bridges layers 2 and 3.\n- 3 Network: logical addressing and routing between networks. IP, ICMP, routers.\n- 4 Transport: end-to-end delivery between processes, identified by ports. TCP and UDP.\n- 5 Session: opening, managing and closing sessions between applications.\n- 6 Presentation: data format, encoding, compression and encryption. TLS is often placed here.\n- 7 Application: the protocols applications speak, such as HTTP, DNS, SMTP and SSH.\nEncapsulation: on the way down each layer adds its own header, so data becomes a segment, then a packet, then a frame, then bits. On the way up each layer strips its header.\nExample: opening a website, DNS (7) resolves the name, TCP (4) opens a connection to port 443, IP (3) routes packets across routers, Ethernet or Wi-Fi (2) delivers frames to the gateway\'s MAC address, and the NIC puts bits on the wire (1).\nIn practice the internet runs on the TCP/IP model, with four layers (link, internet, transport, application), where OSI layers 5 to 7 merge into one. OSI survives as the shared language of troubleshooting: a layer 1 problem is a cable, layer 2 is a VLAN or switch, and an L7 load balancer routes by HTTP content.',
      he: 'מודל OSI הוא מודל ייחוס של שבע שכבות שמחלק תקשורת רשת לשכבות, כשכל שכבה נותנת שירות לשכבה שמעליה ונשענת על השכבה שמתחתיה.\nמלמטה למעלה:\n- 1 Physical: ביטים על התווך, כמו נחושת, סיב אופטי או רדיו. כבלים, hubs, ‏repeaters.\n- 2 Data Link: ‏frames בין מכשירים על אותו קו, כתובות MAC, זיהוי שגיאות עם CRC. ‏Ethernet, ‏Wi-Fi, ‏switches. ‏ARP מחבר בין שכבה 2 לשכבה 3.\n- 3 Network: כתובות לוגיות וניתוב בין רשתות. IP, ‏ICMP, נתבים.\n- 4 Transport: מסירה מקצה לקצה בין תהליכים, שמזוהים לפי ports. ‏TCP ו-UDP.\n- 5 Session: פתיחה, ניהול וסגירה של sessions בין אפליקציות.\n- 6 Presentation: פורמט הנתונים, קידוד, דחיסה והצפנה. TLS ממוקם כאן לעיתים קרובות.\n- 7 Application: הפרוטוקולים שהאפליקציות מדברות, כמו HTTP, ‏DNS, ‏SMTP ו-SSH.\nEncapsulation: בדרך למטה כל שכבה מוסיפה header משלה, כך שהמידע הופך ל-segment, אחר כך ל-packet, ל-frame ולביטים. בדרך למעלה כל שכבה מסירה את ה-header שלה.\nדוגמה: כשפותחים אתר, DNS ‏(7) מתרגם את השם, TCP ‏(4) פותח חיבור לפורט 443, IP ‏(3) מנתב את החבילות דרך נתבים, Ethernet או Wi-Fi ‏(2) מעבירים frames לכתובת ה-MAC של ה-gateway, וכרטיס הרשת שם ביטים על הקו (1).\nבפועל האינטרנט עובד לפי מודל TCP/IP, עם ארבע שכבות (link, ‏internet, ‏transport, ‏application), שבו שכבות 5 עד 7 של OSI מתמזגות לאחת. OSI נשאר השפה המשותפת לתחקור תקלות: בעיה בשכבה 1 היא כבל, שכבה 2 היא VLAN או switch, ו-load balancer של L7 מנתב לפי תוכן HTTP.',
    },
    keyPoints: [
      {
        en: 'Give the PDU name per layer: bits, frame, packet, segment (TCP) or datagram (UDP), data.',
        he: 'לציין את שם יחידת המידע בכל שכבה: bits, ‏frame, ‏packet, ‏segment ‏(TCP) או datagram ‏(UDP), ‏data.',
      },
      {
        en: 'Map devices to layers: hub (1), switch (2), router (3), stateful firewall (3 and 4), WAF or proxy (7).',
        he: 'למפות רכיבים לשכבות: hub ‏(1), ‏switch ‏(2), נתב (3), ‏firewall ‏stateful ‏(3 ו-4), ‏WAF או proxy ‏(7).',
      },
      {
        en: 'Say that OSI is a reference model and the real stack is TCP/IP, and be ready to compare the two.',
        he: 'לומר ש-OSI הוא מודל ייחוס והמימוש האמיתי הוא TCP/IP, ולהיות מוכנים להשוות ביניהם.',
      },
      {
        en: 'Use it for troubleshooting bottom-up: link light, IP and gateway, ping, port reachability, then the application.',
        he: 'להשתמש בו לתחקור מלמטה למעלה: נורית link, ‏IP ו-gateway, ‏ping, האם הפורט נגיש, ואז האפליקציה.',
      },
      {
        en: 'A mnemonic helps you list the layers quickly, for example \'Please Do Not Throw Sausage Pizza Away\' from layer 1 up.',
        he: 'משפט עזר עוזר למנות את השכבות מהר, למשל Please Do Not Throw Sausage Pizza Away משכבה 1 למעלה.',
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
      en: 'Both are layer 4 transport protocols on top of IP. TCP gives a reliable, ordered byte stream over a connection; UDP sends independent datagrams with no guarantees.\nHow TCP works:\n- Connection setup, the three-way handshake: the client sends SYN with its initial sequence number, the server answers SYN-ACK with its own sequence number and acknowledges the client\'s, and the client sends ACK. That costs one round trip before any data.\n- Sequence numbers and ACKs: every byte is numbered, and the receiver sends cumulative ACKs saying which byte it expects next.\n- Retransmission: if no ACK arrives before the retransmission timeout, or three duplicate ACKs arrive (fast retransmit), the missing segment is sent again.\n- Ordering: the receiver buffers out-of-order segments and gives the application an in-order stream.\n- Flow control: the receiver advertises a window, how many bytes it can still buffer, so a fast sender cannot overrun a slow receiver.\n- Congestion control: slow start, then additive increase and multiplicative decrease, lowers the sending rate when loss signals a congested network.\n- Teardown: each side sends FIN and receives an ACK, and the side that closed first waits in TIME_WAIT.\nUDP has none of this: an 8-byte header (source port, destination port, length, checksum) versus at least 20 bytes for TCP, no handshake, no retransmission, no ordering, but message boundaries are kept.\nExamples: TCP carries HTTP/1.1, HTTP/2, SSH, SMTP and database connections. UDP carries DNS queries, DHCP, VoIP, video calls and online games.\nModern twist: QUIC, the transport of HTTP/3, runs over UDP and implements reliability, congestion control and TLS 1.3 in user space, avoiding TCP\'s head-of-line blocking.',
      he: 'TCP ו-UDP הם שני פרוטוקולי transport בשכבה 4, מעל IP. ‏TCP נותן זרם בתים אמין ומסודר על גבי חיבור, ו-UDP שולח datagrams עצמאיים בלי שום הבטחה.\nאיך TCP עובד:\n- הקמת חיבור, ה-three-way handshake: הלקוח שולח SYN עם מספר הסידור ההתחלתי שלו, השרת עונה SYN-ACK עם מספר הסידור שלו ומאשר את של הלקוח, והלקוח שולח ACK. זה עולה round trip שלם לפני שעובר מידע.\n- Sequence numbers ו-ACKs: כל בית ממוספר, והצד המקבל שולח ACK מצטבר שאומר איזה בית הוא מצפה לקבל עכשיו.\n- שידור חוזר: אם ACK לא מגיע לפני ה-retransmission timeout, או שמגיעים שלושה ACKs כפולים (fast retransmit), ה-segment החסר נשלח שוב.\n- סדר: הצד המקבל שומר בבאפר segments שהגיעו לא לפי הסדר, ומעביר לאפליקציה זרם נקי ומסודר.\n- Flow control: הצד המקבל מפרסם window, כמה בתים הוא עוד יכול לקלוט, כך ששולח מהיר לא יציף מקבל איטי.\n- Congestion control: ‏slow start, ואחריו additive increase ו-multiplicative decrease, מוריד את קצב השליחה כשאובדן חבילות מעיד על עומס ברשת.\n- סגירה: כל צד שולח FIN ומקבל ACK, והצד שסגר ראשון מחכה במצב TIME_WAIT.\nב-UDP אין שום דבר מזה: header של 8 בתים (source port, ‏destination port, ‏length, ‏checksum) לעומת לפחות 20 בתים ב-TCP, בלי handshake, בלי שידור חוזר ובלי סדר, אבל הגבולות בין הודעות נשמרים.\nדוגמאות: TCP נושא HTTP/1.1, ‏HTTP/2, ‏SSH, ‏SMTP וחיבורים למסדי נתונים. UDP נושא שאילתות DNS, ‏DHCP, ‏VoIP, שיחות וידאו ומשחקים אונליין.\nטוויסט מודרני: QUIC, שכבת ה-transport של HTTP/3, רץ מעל UDP ומממש אמינות, congestion control ו-TLS 1.3 ב-user space, וכך נמנע מה-head-of-line blocking של TCP.',
    },
    keyPoints: [
      {
        en: 'Separate flow control from congestion control: flow control protects the receiver (receive window), congestion control protects the network (congestion window). The sender uses the smaller of the two.',
        he: 'להפריד בין flow control ל-congestion control: ‏flow control מגן על המקבל (receive window), ו-congestion control מגן על הרשת (congestion window). השולח משתמש בקטן מבין השניים.',
      },
      {
        en: 'TCP is a byte stream with no message boundaries: one send() can arrive as several recv() calls and vice versa, so applications need their own framing. UDP keeps each datagram whole.',
        he: 'TCP הוא זרם בתים בלי גבולות בין הודעות: send() אחד יכול להגיע בכמה recv() ולהפך, ולכן האפליקציה צריכה framing משלה. UDP שומר כל datagram שלם.',
      },
      {
        en: 'Head-of-line blocking: one lost TCP segment stalls everything behind it, which is why real-time voice and video prefer UDP: late data is useless.',
        he: 'Head-of-line blocking: ‏segment אחד שאבד ב-TCP עוצר את כל מה שאחריו, ובגלל זה קול ווידאו בזמן אמת מעדיפים UDP: מידע שמגיע באיחור כבר לא שימושי.',
      },
      {
        en: 'DNS is not UDP-only: it falls back to TCP port 53 for large responses and zone transfers.',
        he: 'DNS הוא לא רק UDP: הוא עובר ל-TCP בפורט 53 לתשובות גדולות ול-zone transfers.',
      },
      {
        en: 'Know the states that show up in netstat or ss: LISTEN, SYN_SENT, ESTABLISHED, TIME_WAIT, CLOSE_WAIT. Many CLOSE_WAIT sockets usually mean the application forgot to close them.',
        he: 'להכיר את המצבים שמופיעים ב-netstat או ss: ‏LISTEN, ‏SYN_SENT, ‏ESTABLISHED, ‏TIME_WAIT, ‏CLOSE_WAIT. הרבה sockets ב-CLOSE_WAIT בדרך כלל אומר שהאפליקציה שכחה לסגור אותם.',
      },
      {
        en: 'Security follow-up: a SYN flood exhausts half-open connections and SYN cookies defend against it; UDP is abused for reflection and amplification attacks because the source address is easy to spoof.',
        he: 'שאלת המשך באבטחה: SYN flood ממלא את התור של חיבורים חצי-פתוחים ו-SYN cookies מגינים מפניו. UDP מנוצל להתקפות reflection ו-amplification כי קל לזייף את כתובת המקור.',
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
      en: 'DNS is the internet\'s distributed, hierarchical directory that translates names such as www.example.com into records, most often IP addresses.\nA lookup, step by step:\n- The application asks the operating system\'s stub resolver, which checks its own cache and the hosts file.\n- On a miss it sends a query, normally over UDP port 53, to the configured recursive resolver: the home router, the ISP, a corporate DNS server, or a public one such as 8.8.8.8 or 1.1.1.1.\n- The resolver checks its cache. If the answer is not there, it walks the hierarchy iteratively: a root server refers it to the .com TLD servers, the TLD servers refer it to the domain\'s authoritative name servers, and the authoritative server returns the answer.\n- The resolver caches the record for its TTL and returns it to the client, which caches it as well.\nCommon record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail server), NS (delegation), TXT (verification and SPF), PTR (reverse lookup) and SOA.\nExample: dig +trace example.com shows the walk from the root to .com to the authoritative server. CDNs use DNS to return a different IP depending on where the user is.\nTrade-offs: caching makes DNS fast and resilient, but changes only spread as old TTLs expire, so you lower the TTL before a migration. In troubleshooting, if an IP address works and a name does not, suspect DNS first.\nDepth: DNS uses TCP for large responses and zone transfers, and plain DNS is unencrypted and can be spoofed, which DNSSEC (authenticity) and DNS over HTTPS or TLS (privacy) address.',
      he: 'DNS הוא ספר הכתובות המבוזר וההיררכי של האינטרנט, שמתרגם שמות כמו www.example.com לרשומות, ברוב המקרים לכתובות IP.\nשאילתה, צעד אחרי צעד:\n- האפליקציה שואלת את ה-stub resolver של מערכת ההפעלה, שבודק את ה-cache שלו ואת קובץ ה-hosts.\n- אם אין תשובה, הוא שולח שאילתה, בדרך כלל ב-UDP לפורט 53, ל-recursive resolver המוגדר: הראוטר הביתי, ספק האינטרנט, שרת ה-DNS של הארגון, או שרת ציבורי כמו 8.8.8.8 או 1.1.1.1.\n- ה-resolver בודק את ה-cache שלו. אם התשובה לא שם, הוא עובר על ההיררכיה באופן איטרטיבי: שרת root מפנה אותו לשרתי ה-TLD של .com, שרתי ה-TLD מפנים אותו לשרתי ה-authoritative של הדומיין, ושרת ה-authoritative מחזיר את התשובה.\n- ה-resolver שומר את הרשומה ב-cache לפי ה-TTL שלה ומחזיר אותה ללקוח, שגם הוא שומר אותה.\nסוגי רשומות נפוצים: A ‏(IPv4), ‏AAAA ‏(IPv6), ‏CNAME ‏(כינוי), ‏MX ‏(שרת דואר), ‏NS ‏(האצלה), ‏TXT ‏(אימות ו-SPF), ‏PTR ‏(חיפוש הפוך) ו-SOA.\nדוגמה: dig +trace example.com מראה את המסלול מה-root ל-.com ולשרת ה-authoritative. רשתות CDN משתמשות ב-DNS כדי להחזיר IP שונה לפי המיקום של המשתמש.\nTrade-offs: ה-cache הופך את DNS למהיר ועמיד, אבל שינויים מתפשטים רק כשה-TTL הישן פג, ולכן מורידים TTL לפני מיגרציה. בתחקור תקלות, אם כתובת IP עובדת ושם לא, חושדים קודם ב-DNS.\nלעומק: DNS משתמש ב-TCP לתשובות גדולות ול-zone transfers, ו-DNS רגיל לא מוצפן ואפשר לזייף אותו, ולכן יש DNSSEC ‏(אמינות) ו-DNS over HTTPS או TLS ‏(פרטיות).',
    },
    keyPoints: [
      {
        en: 'Distinguish recursive queries (client to resolver: give me the final answer) from iterative ones (resolver to root, TLD and authoritative servers: give me a referral).',
        he: 'להבדיל בין שאילתה רקורסיבית (לקוח ל-resolver: תביא לי תשובה סופית) לבין איטרטיבית (resolver לשרתי root, ‏TLD ו-authoritative: תפנה אותי הלאה).',
      },
      {
        en: 'Name the caching layers: browser, OS, resolver. Know ipconfig /flushdns and that TTL controls how long a stale record survives.',
        he: 'למנות את שכבות ה-cache: דפדפן, מערכת הפעלה, resolver. להכיר את ipconfig /flushdns ולדעת שה-TTL קובע כמה זמן רשומה ישנה שורדת.',
      },
      {
        en: 'Know the main record types, especially A, AAAA, CNAME, MX and PTR, and that a CNAME cannot sit at the zone apex.',
        he: 'להכיר את סוגי הרשומות העיקריים, במיוחד A, ‏AAAA, ‏CNAME, ‏MX ו-PTR, ולדעת ש-CNAME לא יכול לשבת בשורש הדומיין (zone apex).',
      },
      {
        en: 'Port 53, UDP by default and TCP for large answers and zone transfers.',
        he: 'פורט 53, ‏UDP כברירת מחדל ו-TCP לתשובות גדולות ול-zone transfers.',
      },
      {
        en: 'Security: DNS cache poisoning, DNS tunneling for data exfiltration, and the defenses DNSSEC, DoH and DoT.',
        he: 'אבטחה: DNS cache poisoning, ‏DNS tunneling להוצאת מידע, וההגנות DNSSEC, ‏DoH ו-DoT.',
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
      en: 'DHCP (Dynamic Host Configuration Protocol) automatically gives a device that joins a network its IP configuration: an IP address, subnet mask, default gateway, DNS servers and a lease time.\nIt runs over UDP, with the server on port 67 and the client on port 68, in four steps known as DORA:\n- Discover: the client has no address yet, so it broadcasts from 0.0.0.0 to 255.255.255.255 looking for any DHCP server.\n- Offer: a server replies with a proposed address from its pool.\n- Request: the client broadcasts that it accepts that specific offer, which also tells any other server that its offer was declined.\n- Acknowledge: the server confirms with DHCPACK and the lease begins. If the address is no longer valid, it answers DHCPNAK and the client starts over.\nLeases: the client tries to renew directly with its server at 50% of the lease time (T1), and with any server at 87.5% (T2). If the lease expires, it must stop using the address.\nAcross subnets: broadcasts do not cross routers, so the router acts as a DHCP relay (ip helper-address on Cisco) and forwards requests to a central server.\nHelp-desk example: a laptop shows 169.254.x.x. That is an APIPA address, meaning no DHCP server answered. Check the cable or Wi-Fi, the VLAN, whether the scope is exhausted and the relay, then run ipconfig /release and ipconfig /renew.\nServers and printers get reservations, a fixed IP tied to their MAC address, or static addresses outside the pool.\nDepth: a rogue DHCP server can hand out a malicious gateway or DNS server, and switches block it with DHCP snooping.',
      he: 'DHCP ‏(Dynamic Host Configuration Protocol) נותן אוטומטית למכשיר שמצטרף לרשת את הגדרות ה-IP שלו: כתובת IP, ‏subnet mask, ‏default gateway, שרתי DNS וזמן lease.\nהוא רץ מעל UDP, השרת בפורט 67 והלקוח בפורט 68, בארבעה שלבים שנקראים DORA:\n- Discover: ללקוח עוד אין כתובת, אז הוא שולח broadcast מ-0.0.0.0 ל-255.255.255.255 ומחפש שרת DHCP כלשהו.\n- Offer: שרת עונה עם כתובת מוצעת מה-pool שלו.\n- Request: הלקוח שולח broadcast שהוא מקבל את ההצעה הספציפית הזאת, וכך גם שרתים אחרים יודעים שההצעה שלהם נדחתה.\n- Acknowledge: השרת מאשר עם DHCPACK וה-lease מתחיל. אם הכתובת כבר לא תקפה, הוא עונה DHCPNAK והלקוח מתחיל מחדש.\nLease: הלקוח מנסה לחדש ישירות מול השרת שלו ב-50% מזמן ה-lease ‏(T1), ומול כל שרת ב-87.5% ‏(T2). אם ה-lease פג, הוא חייב להפסיק להשתמש בכתובת.\nבין subnets: ‏broadcast לא עובר נתבים, ולכן הנתב משמש DHCP relay ‏(ip helper-address בציוד Cisco) ומעביר את הבקשות לשרת מרכזי.\nדוגמה מה-helpdesk: מחשב נייד מקבל כתובת 169.254.x.x. זו כתובת APIPA, כלומר אף שרת DHCP לא ענה. בודקים כבל או Wi-Fi, את ה-VLAN, האם ה-scope התמלא ואת ה-relay, ואז מריצים ipconfig /release ו-ipconfig /renew.\nשרתים ומדפסות מקבלים reservation, כתובת קבועה שקשורה לכתובת ה-MAC שלהם, או כתובת סטטית מחוץ ל-pool.\nלעומק: שרת DHCP זדוני (rogue) יכול לחלק gateway או שרת DNS של תוקף, ו-switches חוסמים אותו עם DHCP snooping.',
    },
    keyPoints: [
      {
        en: 'Recite DORA and say which messages are broadcast and why: the client has no IP and does not know the server yet.',
        he: 'לפרט את DORA ולהגיד אילו הודעות הן broadcast ולמה: ללקוח אין IP והוא עוד לא מכיר את השרת.',
      },
      {
        en: '169.254.x.x (APIPA) is the classic symptom of a client that got no DHCP answer; recognising it instantly impresses in a helpdesk interview.',
        he: '169.254.x.x ‏(APIPA) הוא הסימפטום הקלאסי של לקוח שלא קיבל תשובה מ-DHCP. לזהות את זה מיד עושה רושם בראיון helpdesk.',
      },
      {
        en: 'Explain DHCP relay: without it you would need a DHCP server on every subnet or VLAN.',
        he: 'להסביר DHCP relay: בלעדיו היה צריך שרת DHCP בכל subnet או VLAN.',
      },
      {
        en: 'Know reservations vs static IPs, scope exhaustion, and lease time trade-offs (short leases for guest Wi-Fi, longer for office desktops).',
        he: 'להכיר reservation מול IP סטטי, scope שהתמלא, ואת ה-trade-off בזמן lease (קצר ל-Wi-Fi של אורחים, ארוך יותר למחשבים במשרד).',
      },
      {
        en: 'Security: rogue DHCP servers and starvation attacks, mitigated with DHCP snooping and port security.',
        he: 'אבטחה: שרתי DHCP זדוניים והתקפות starvation, ומתגוננים עם DHCP snooping ו-port security.',
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
      en: 'A successful ping to the gateway proves the local LAN works up to layer 3: cable or Wi-Fi, IP address, mask and ARP. So the fault is beyond the gateway or higher in the stack, and I narrow it down step by step.\n- Scope: is it one user or everyone? Everyone points to the router, the WAN link or the ISP. One user points to that PC\'s configuration.\n- Check the configuration with ipconfig /all: the default gateway, the mask and the DNS servers. Confirm that the address the user pinged is really the configured default gateway.\n- Ping a public IP such as 8.8.8.8. If it answers, routing and NAT work, so move to DNS.\n- Test DNS with nslookup google.com. If IPs work but names fail, the DNS server is wrong or down. Compare with nslookup google.com 8.8.8.8 and clear the cache with ipconfig /flushdns.\n- If the public IP fails, run tracert 8.8.8.8. If packets stop right after the gateway, look at the router\'s WAN link, NAT, the ISP, or a firewall rule.\n- If ping and DNS both work but the browser still fails, check proxy settings, the local firewall or antivirus, a wrong system clock breaking HTTPS, or a network that allows ICMP but blocks TCP 443.\nExample: a laptop that came from another office still has a manually set DNS server. Pinging 8.8.8.8 works, names do not resolve, and switching back to DNS from DHCP fixes it.\nFinish by confirming with the user that it works, documenting the cause, and escalating to the ISP or network team with the tracert output if the fault is upstream.',
      he: 'ping מוצלח ל-gateway מוכיח שהרשת המקומית עובדת עד שכבה 3: כבל או Wi-Fi, כתובת IP, ‏mask ו-ARP. כלומר התקלה נמצאת אחרי ה-gateway או גבוה יותר במחסנית, ואני מצמצם אותה צעד אחרי צעד.\n- היקף: זה משתמש אחד או כולם? אם כולם, זה הנתב, קו ה-WAN או ספק האינטרנט. אם משתמש אחד, זו ההגדרה של המחשב שלו.\n- בודקים את ההגדרות עם ipconfig /all: ה-default gateway, ה-mask ושרתי ה-DNS. מוודאים שהכתובת שהמשתמש עשה לה ping היא באמת ה-default gateway המוגדר.\n- עושים ping ל-IP ציבורי כמו 8.8.8.8. אם הוא עונה, הניתוב וה-NAT עובדים, ועוברים ל-DNS.\n- בודקים DNS עם nslookup google.com. אם כתובות IP עובדות ושמות לא, שרת ה-DNS שגוי או לא זמין. משווים מול nslookup google.com 8.8.8.8 ומנקים את ה-cache עם ipconfig /flushdns.\n- אם ה-IP הציבורי לא עונה, מריצים tracert 8.8.8.8. אם החבילות נעצרות מיד אחרי ה-gateway, בודקים את קו ה-WAN של הנתב, ‏NAT, ספק האינטרנט או חוק ב-firewall.\n- אם גם ping וגם DNS עובדים אבל הדפדפן עדיין נכשל, בודקים הגדרות proxy, ‏firewall או אנטי-וירוס מקומי, שעון מערכת שגוי ששובר HTTPS, או רשת שמאפשרת ICMP אבל חוסמת TCP 443.\nדוגמה: מחשב נייד שהגיע ממשרד אחר עדיין מוגדר עם שרת DNS ידני. ping ל-8.8.8.8 עובד, שמות לא נפתרים, והחזרה ל-DNS שמגיע מ-DHCP פותרת את זה.\nמסיימים בווידוא מול המשתמש שהכול עובד, תיעוד הסיבה, ואם התקלה אצל הספק או ברשת, העברה לצוות הרשת או לספק עם הפלט של tracert.',
    },
    keyPoints: [
      {
        en: 'Start by interpreting what the gateway ping already proves, so you do not waste time on cables and IP settings.',
        he: 'להתחיל בפירוש של מה שה-ping ל-gateway כבר מוכיח, כדי לא לבזבז זמן על כבלים והגדרות IP.',
      },
      {
        en: 'The key split is ping by IP vs ping by name: it separates routing problems from DNS problems in one step.',
        he: 'החלוקה המרכזית היא ping לפי IP מול ping לפי שם: היא מפרידה בין בעיות ניתוב לבעיות DNS בצעד אחד.',
      },
      {
        en: 'Always ask whether other users are affected; it decides between a local fix and escalation.',
        he: 'תמיד לשאול אם משתמשים אחרים מושפעים. זה מכריע בין תיקון מקומי להעברה הלאה.',
      },
      {
        en: 'Remember that ping is ICMP: a working ping does not prove that TCP 80 or 443 is allowed, and some hosts block ICMP entirely.',
        he: 'לזכור ש-ping הוא ICMP: ‏ping שעובד לא מוכיח ש-TCP 80 או 443 פתוחים, ויש שרתים שחוסמים ICMP לגמרי.',
      },
      {
        en: 'Show a methodical approach: one change at a time, verify after each step, and document the outcome.',
        he: 'להראות עבודה שיטתית: שינוי אחד בכל פעם, בדיקה אחרי כל צעד, ותיעוד התוצאה.',
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
      en: 'A subnet mask is a 32-bit value that marks which bits of an IPv4 address identify the network and which identify the host.\nHow it works:\n- Ones mark network bits and zeros mark host bits. 255.255.255.0 is 24 ones followed by 8 zeros, written /24 in CIDR notation.\n- The network address is the IP AND the mask: 192.168.1.77 AND 255.255.255.0 gives 192.168.1.0.\n- With h host bits a subnet has 2^h addresses and 2^h minus 2 usable hosts, because the all-zeros address is the network ID and the all-ones address is the broadcast. A /24 has 256 addresses, 254 hosts, and broadcast 192.168.1.255.\n- Before sending, a host ANDs the destination with its own mask. Same network means it delivers directly using ARP; a different network means it sends the packet to the default gateway.\nCommon sizes: /8 is 255.0.0.0, /16 is 255.255.0.0, /26 is 255.255.255.192 with 64 addresses and 62 hosts, /30 has 2 usable hosts for a point-to-point link, and /32 is a single host.\nExample: splitting 192.168.1.0/24 into four /26 subnets for different departments gives networks starting at .0, .64, .128 and .192, each with 62 hosts.\nWhy it matters: subnetting limits broadcast domains, separates departments or VLANs for security, and lets routers summarize routes.\nPitfall: a wrong mask on one host causes strange partial connectivity, where it reaches some local machines but treats others as remote. Follow-up: /31 is valid on point-to-point links (RFC 3021), and IPv6 uses only prefix lengths, usually /64 for a LAN.',
      he: 'subnet mask הוא ערך של 32 ביט שמסמן אילו ביטים בכתובת IPv4 מזהים את הרשת ואילו מזהים את המארח.\nאיך זה עובד:\n- אחדות מסמנות ביטים של רשת ואפסים מסמנים ביטים של מארח. 255.255.255.0 הוא 24 אחדות ואחריהם 8 אפסים, ובכתיב CIDR כותבים /24.\n- כתובת הרשת היא ה-IP בפעולת AND עם ה-mask: ‏192.168.1.77 AND 255.255.255.0 נותן 192.168.1.0.\n- עם h ביטים של מארח יש ב-subnet ‏2^h כתובות, ו-2^h פחות 2 מארחים שמישים, כי הכתובת שכולה אפסים היא מזהה הרשת והכתובת שכולה אחדות היא ה-broadcast. ב-/24 יש 256 כתובות, 254 מארחים, וה-broadcast הוא 192.168.1.255.\n- לפני שליחה, המחשב עושה AND בין כתובת היעד ל-mask שלו. אם זו אותה רשת, הוא שולח ישירות בעזרת ARP. אם זו רשת אחרת, הוא שולח את החבילה ל-default gateway.\nגדלים נפוצים: ‏/8 הוא 255.0.0.0, ‏/16 הוא 255.255.0.0, ‏/26 הוא 255.255.255.192 עם 64 כתובות ו-62 מארחים, ב-/30 יש 2 מארחים שמישים לקו point-to-point, ו-/32 הוא מארח בודד.\nדוגמה: חלוקה של 192.168.1.0/24 לארבעה subnets של /26 עבור מחלקות שונות נותנת רשתות שמתחילות ב-.0, ‏.64, ‏.128 ו-.192, בכל אחת 62 מארחים.\nלמה זה חשוב: חלוקה ל-subnets מגבילה את ה-broadcast domain, מפרידה מחלקות או VLANs לטובת אבטחה, ומאפשרת לנתבים לסכם routes.\nמלכודת: mask שגוי במחשב אחד גורם לקישוריות חלקית ומוזרה, שבה הוא מגיע לחלק מהמחשבים המקומיים ומתייחס לאחרים כרחוקים. שאלת המשך: ‏/31 חוקי בקווי point-to-point ‏(RFC 3021), וב-IPv6 משתמשים רק ב-prefix length, בדרך כלל /64 ל-LAN.',
    },
    keyPoints: [
      {
        en: 'Show the AND operation on a real address; computing the network ID by hand is what interviewers test.',
        he: 'להראות את פעולת ה-AND על כתובת אמיתית. חישוב מזהה הרשת ביד זה בדיוק מה שבודקים בראיון.',
      },
      {
        en: 'Know the formula 2^h - 2 usable hosts and be able to compute network, broadcast and host range for a /26 or /27 quickly.',
        he: 'לדעת את הנוסחה 2^h פחות 2 מארחים שמישים, ולחשב מהר רשת, broadcast וטווח מארחים עבור /26 או /27.',
      },
      {
        en: 'Explain how the mask decides local delivery vs sending to the default gateway; that links subnetting to real troubleshooting.',
        he: 'להסביר איך ה-mask מחליט בין מסירה מקומית לשליחה ל-default gateway. זה מחבר את ה-subnetting לתחקור תקלות אמיתי.',
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
      en: 'Symmetric encryption uses the same secret key to encrypt and decrypt. Asymmetric encryption uses a mathematically linked key pair: a public key that anyone may have and a private key that never leaves its owner.\n- Symmetric: AES or ChaCha20. Very fast, often hardware-accelerated (AES-NI), so it is used for bulk data: disk encryption, VPN tunnels and the actual traffic inside TLS. The problem is key distribution: both sides need the same secret.\n- Asymmetric: RSA (2048 bits or more) and elliptic curve cryptography (ECDH, ECDSA, Ed25519). Orders of magnitude slower and limited in data size, so it is used for small things: key exchange and digital signatures.\n- Two directions: encrypt with the recipient\'s public key so only their private key can decrypt, which gives confidentiality. Sign with your own private key so anyone can verify with your public key, which gives authenticity and integrity.\nExample, TLS 1.3 when you open an HTTPS site: client and server run an ephemeral elliptic-curve Diffie-Hellman exchange (ECDHE), the server proves its identity by signing with its certificate\'s private key, and both sides derive symmetric session keys. From then on all traffic is encrypted with AES-GCM or ChaCha20-Poly1305. This hybrid gets key distribution from asymmetric crypto and speed from symmetric crypto.\nTrade-off: asymmetric crypto is only as good as your trust that a public key really belongs to its owner, which is why we need certificates and a PKI.\nDepth: ephemeral keys give forward secrecy, and a large quantum computer running Shor\'s algorithm would break RSA and ECC but not AES-256, which drives the move to post-quantum algorithms such as ML-KEM.',
      he: 'הצפנה סימטרית משתמשת באותו מפתח סודי גם להצפנה וגם לפענוח. הצפנה אסימטרית משתמשת בזוג מפתחות שקשורים מתמטית: מפתח ציבורי שכל אחד יכול להחזיק, ומפתח פרטי שלא יוצא אף פעם מהבעלים שלו.\n- סימטרית: AES או ChaCha20. מהירה מאוד, ולרוב יש לה האצה בחומרה (AES-NI), ולכן משתמשים בה לכמויות גדולות של מידע: הצפנת דיסקים, מנהרות VPN והתעבורה עצמה בתוך TLS. הבעיה היא הפצת המפתחות: לשני הצדדים צריך להיות אותו סוד.\n- אסימטרית: RSA ‏(2048 ביט ומעלה) וקריפטוגרפיה של עקומים אליפטיים (ECDH, ‏ECDSA, ‏Ed25519). איטית בסדרי גודל ומוגבלת בכמות המידע, ולכן משתמשים בה לדברים קטנים: החלפת מפתחות וחתימות דיגיטליות.\n- שני כיוונים: מצפינים עם המפתח הציבורי של הנמען כך שרק המפתח הפרטי שלו יפענח, וזה נותן סודיות. חותמים עם המפתח הפרטי שלך כך שכל אחד יכול לאמת עם המפתח הציבורי שלך, וזה נותן אמינות ושלמות.\nדוגמה אמיתית, TLS 1.3 כשנכנסים לאתר HTTPS: הלקוח והשרת מבצעים החלפת מפתחות Diffie-Hellman זמנית על עקומים אליפטיים (ECDHE), השרת מוכיח את זהותו בחתימה עם המפתח הפרטי של התעודה שלו, ושני הצדדים גוזרים מפתחות session סימטריים. מאותו רגע כל התעבורה מוצפנת ב-AES-GCM או ב-ChaCha20-Poly1305. השילוב הזה לוקח מהאסימטרית את פתרון הפצת המפתחות ומהסימטרית את המהירות.\nTrade-off: הצפנה אסימטרית טובה רק כמו האמון שלנו בכך שהמפתח הציבורי באמת שייך לבעלים שלו, ובגלל זה צריך תעודות ו-PKI.\nלעומק: מפתחות זמניים נותנים forward secrecy, ומחשב קוונטי גדול שמריץ את האלגוריתם של Shor ישבור RSA ו-ECC אבל לא AES-256, וזה מה שמניע את המעבר לאלגוריתמים post-quantum כמו ML-KEM.',
    },
    keyPoints: [
      {
        en: 'Explain the hybrid model: asymmetric to agree on a key and authenticate, symmetric for the data. This is how TLS, SSH and PGP all work.',
        he: 'להסביר את המודל ההיברידי: אסימטרית כדי להסכים על מפתח ולאמת זהות, סימטרית למידע עצמו. ככה עובדים TLS, ‏SSH ו-PGP.',
      },
      {
        en: 'Separate encryption from signing: encrypt with the recipient\'s public key, sign with your own private key.',
        he: 'להפריד בין הצפנה לחתימה: מצפינים עם המפתח הציבורי של הנמען, וחותמים עם המפתח הפרטי שלך.',
      },
      {
        en: 'Do not confuse encryption with hashing: SHA-256 is one-way and has no key; HMAC adds a shared key for integrity.',
        he: 'לא לבלבל בין הצפנה ל-hashing: ‏SHA-256 הוא חד-כיווני ואין לו מפתח, ו-HMAC מוסיף מפתח משותף לשמירת שלמות.',
      },
      {
        en: 'Mention the trust problem: without certificates and a CA, an attacker could do a man-in-the-middle by substituting their own public key.',
        he: 'להזכיר את בעיית האמון: בלי תעודות ו-CA תוקף יכול לבצע man-in-the-middle על ידי החלפת המפתח הציבורי במפתח שלו.',
      },
      {
        en: 'Key sizes are not comparable across types: a 256-bit elliptic-curve key gives roughly the security of a 3072-bit RSA key.',
        he: 'גודלי מפתחות לא ניתנים להשוואה בין סוגים: מפתח של 256 ביט על עקום אליפטי נותן בערך את הביטחון של מפתח RSA של 3072 ביט.',
      },
      {
        en: 'Use authenticated encryption modes such as AES-GCM, never ECB, which leaks patterns in the data.',
        he: 'להשתמש במצבי הצפנה מאומתים כמו AES-GCM, ולעולם לא ב-ECB, שמדליף דפוסים במידע.',
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
      en: 'SQL injection is an attack where user input is concatenated into a SQL statement, so the database parses part of that input as code instead of as data.\nHow it happens:\n- The application builds a query by string concatenation, for example WHERE name = \'input\'.\n- The attacker types \' OR 1=1 -- which closes the string literal, adds a condition that is always true and comments out the rest of the query.\n- The database cannot tell the developer\'s SQL from the attacker\'s, so it returns every row. With UNION SELECT or stacked queries the attacker can read other tables, change data or delete it.\nPrevention, in order of importance:\n- Parameterised queries (prepared statements): the SQL text and the values are sent separately, so a value can never change the structure of the query.\n- An ORM or query builder, which parameterises by default, as long as you avoid its raw SQL escape hatches.\n- Allow-list validation for things that cannot be parameters, such as a column name in ORDER BY or a table name.\n- Least privilege: the application\'s database user should not be able to DROP tables or read unrelated schemas.\n- Defence in depth: generic error messages, a WAF and logging of suspicious queries.\nExample: a login form that runs SELECT * FROM users WHERE name = \'...\' AND password = \'...\' can be bypassed completely with a crafted user name.\nA common follow-up is blind SQL injection: even when no data is shown, the attacker infers it from true or false responses or from time delays such as MySQL\'s SLEEP().',
      he: 'SQL injection היא מתקפה שבה קלט של משתמש משורשר לתוך שאילתת SQL, ולכן מסד הנתונים מפרש חלק מהקלט כקוד ולא כנתון.\nאיך זה קורה:\n- האפליקציה בונה שאילתה בשרשור מחרוזות, למשל WHERE name = \'input\'.\n- התוקף מקליד \' OR 1=1 -- שסוגר את המחרוזת, מוסיף תנאי שתמיד מתקיים והופך את שאר השאילתה להערה.\n- מסד הנתונים לא יכול להבדיל בין ה-SQL של המפתח לזה של התוקף, ולכן מחזיר את כל השורות. עם UNION SELECT או stacked queries התוקף יכול לקרוא טבלאות אחרות, לשנות נתונים או למחוק אותם.\nמניעה, לפי סדר חשיבות:\n- Parameterised queries ‏(prepared statements): טקסט השאילתה והערכים נשלחים בנפרד, כך שערך לעולם לא יכול לשנות את מבנה השאילתה.\n- ORM או query builder, שעושים parameterisation כברירת מחדל, כל עוד לא עוקפים אותם עם raw SQL.\n- ולידציה מול allow-list לדברים שאי אפשר להעביר כפרמטר, כמו שם עמודה ב-ORDER BY או שם טבלה.\n- Least privilege: למשתמש של האפליקציה במסד הנתונים לא צריכה להיות הרשאה לעשות DROP לטבלאות או לקרוא סכמות שלא קשורות אליו.\n- הגנה בשכבות: הודעות שגיאה כלליות, WAF ולוגים של שאילתות חשודות.\nדוגמה: טופס login שמריץ SELECT * FROM users WHERE name = \'...\' AND password = \'...\' אפשר לעקוף לגמרי עם שם משתמש מתוחכם.\nשאלת המשך נפוצה היא blind SQL injection: גם כשלא מוצגים נתונים, התוקף מסיק אותם מתשובות של אמת או שקר או מהשהיות זמן, כמו SLEEP() ב-MySQL.',
    },
    keyPoints: [
      {
        en: 'The root cause is mixing code and data. Prepared statements separate them at the protocol level, which is why they work and escaping does not reliably.',
        he: 'שורש הבעיה הוא ערבוב של קוד ונתונים. Prepared statements מפרידים ביניהם ברמת הפרוטוקול, ולכן הם עובדים ו-escaping לא תמיד.',
      },
      {
        en: 'Identifiers such as table names, column names and the ORDER BY direction cannot be bound as parameters, so validate them against an allow-list.',
        he: 'שמות טבלאות, שמות עמודות וכיוון המיון ב-ORDER BY אי אפשר להעביר כפרמטר, ולכן בודקים אותם מול allow-list.',
      },
      {
        en: 'An ORM is not automatically safe: raw query functions and filters built from strings bring the vulnerability back.',
        he: 'ORM לא בטוח אוטומטית: פונקציות של raw query ופילטרים שנבנים ממחרוזות מחזירים את הפגיעות.',
      },
      {
        en: 'Know the variants: in-band (UNION-based, error-based), blind (boolean or time-based) and second-order, where stored input is later used unsafely in another query.',
        he: 'כדאי להכיר את הסוגים: in-band ‏(UNION-based, error-based), blind ‏(boolean או time-based) ו-second-order, שבו קלט שנשמר במסד משמש מאוחר יותר בשאילתה אחרת בצורה לא בטוחה.',
      },
      {
        en: 'Least privilege and hiding database errors from users do not prevent the bug, but they limit the damage and the information an attacker gets.',
        he: 'Least privilege והסתרת שגיאות מסד הנתונים מהמשתמש לא מונעים את הבאג, אבל מצמצמים את הנזק ואת המידע שהתוקף מקבל.',
      },
      {
        en: 'Injection is in the OWASP Top 10 (A03:2021), which shows you know the standard security references.',
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
      en: 'The optimal solution is iterative, with three pointers: prev, current and next. prev starts as null and current starts at the head.\nOn each step I save current.next in next, because I am about to overwrite it, then point current.next back to prev, then move prev to current and current to next. When current becomes null every link has been flipped, and prev points to the old tail, which is the new head.\nIt works because of a simple invariant: prev is always the head of the part that is already reversed, and current is the head of the part that still needs reversing, so no node is ever lost.\nTime is O(n), one pass over the list. Extra space is O(1): only three pointers, and no new nodes are allocated.\nEdge cases: an empty list returns null because the loop never runs, and a single node returns itself. A recursive version is also O(n) time but uses O(n) stack space, which can overflow on long lists, so the iterative one is preferred, especially in embedded C.',
      he: 'הפתרון האופטימלי הוא איטרטיבי, עם שלושה מצביעים: prev, current ו-next. ‏prev מתחיל ב-null ו-current מתחיל ב-head.\nבכל צעד שומרים את current.next בתוך next, כי עוד רגע דורסים אותו, אחר כך מכוונים את current.next אחורה אל prev, ואז מקדמים את prev ל-current ואת current ל-next. כש-current הופך ל-null כל הקישורים כבר הפוכים, ו-prev מצביע על הזנב הישן, שהוא ה-head החדש.\nזה עובד בזכות invariant פשוט: prev הוא תמיד הראש של החלק שכבר הפכנו, ו-current הוא הראש של החלק שעוד צריך להפוך, כך שאף צומת לא הולך לאיבוד.\nזמן O(n), מעבר אחד על הרשימה. זיכרון נוסף O(1): רק שלושה מצביעים, בלי להקצות צמתים חדשים.\nמקרי קצה: רשימה ריקה מחזירה null כי הלולאה לא רצה בכלל, וצומת יחיד מחזיר את עצמו. גרסה רקורסיבית היא גם O(n) בזמן אבל צורכת O(n) מקום במחסנית ועלולה לגרום ל-stack overflow ברשימות ארוכות, ולכן מעדיפים את האיטרטיבית, במיוחד ב-C ל-embedded.',
    },
    approach: [
      {
        en: 'Clarify: the list is singly linked, I may modify it in place, and I should return the new head. Ask what to return for an empty list (null) and note the size limit of 5000 nodes.',
        he: 'מבהירים: הרשימה חד-כיוונית, מותר לשנות אותה במקום, וצריך להחזיר את ה-head החדש. שואלים מה מחזירים לרשימה ריקה (null) ושמים לב למגבלה של 5000 צמתים.',
      },
      {
        en: 'Brute force: copy the values into an array or a stack and write them back in reverse order, or build a new list. That is O(n) time but O(n) extra space, which breaks the O(1) requirement.',
        he: 'Brute force: מעתיקים את הערכים למערך או ל-stack וכותבים אותם בחזרה בסדר הפוך, או בונים רשימה חדשה. זה O(n) בזמן אבל O(n) בזיכרון נוסף, וזה מפר את דרישת ה-O(1).',
      },
      {
        en: 'Insight: reversing a list is the same as flipping every next pointer to point backwards. The only difficulty is remembering the next node before the pointer is flipped.',
        he: 'התובנה: להפוך רשימה זה בדיוק להפוך כל מצביע next כך שיצביע אחורה. הקושי היחיד הוא לזכור את הצומת הבא לפני שהופכים את המצביע.',
      },
      {
        en: 'Algorithm: prev = null, current = head. While current is not null: next = current.next; current.next = prev; prev = current; current = next. Return prev.',
        he: 'האלגוריתם: prev = null, ‏current = head. כל עוד current אינו null: ‏next = current.next; ‏current.next = prev; ‏prev = current; ‏current = next. מחזירים את prev.',
      },
      {
        en: 'Complexity: O(n) time, one pass. O(1) extra space, three pointers.',
        he: 'סיבוכיות: O(n) זמן, מעבר אחד. O(1) זיכרון נוסף, שלושה מצביעים.',
      },
      {
        en: 'Test: trace 1 -> 2 -> 3 and write prev, current and next after each iteration. Then check an empty list and a single node.',
        he: 'בדיקה: עוברים ידנית על 1 -> 2 -> 3 וכותבים את prev, current ו-next אחרי כל איטרציה. אחר כך בודקים רשימה ריקה וצומת יחיד.',
      },
    ],
    keyPoints: [
      {
        en: 'Save next before overwriting the link. Forgetting it is the classic bug that loses the rest of the list.',
        he: 'שומרים את next לפני שדורסים את הקישור. לשכוח את זה זה הבאג הקלאסי שמאבד את כל שאר הרשימה.',
      },
      {
        en: 'Return prev, not head: at the end the loop variable is null and the old head is now the tail.',
        he: 'מחזירים את prev ולא את head: בסוף הלולאה המשתנה הרץ הוא null, וה-head הישן הפך לזנב.',
      },
      {
        en: 'State the loop invariant out loud. It shows you understand why the algorithm is correct, not just that it works.',
        he: 'כדאי להגיד בקול את ה-invariant של הלולאה. זה מראה שמבינים למה האלגוריתם נכון, ולא רק שהוא עובד.',
      },
      {
        en: 'Mention the recursive version and its O(n) call stack, and why that matters on embedded targets with small stacks.',
        he: 'להזכיר את הגרסה הרקורסיבית ואת ה-O(n) של מחסנית הקריאות, ולמה זה חשוב במערכות embedded עם stack קטן.',
      },
      {
        en: 'Common follow-ups: reverse only positions m to n, reverse in groups of k, check whether a list is a palindrome, or reverse a doubly linked list by swapping each node\'s prev and next.',
        he: 'שאלות המשך נפוצות: להפוך רק את המקומות m עד n, להפוך בקבוצות של k, לבדוק אם רשימה היא פלינדרום, או להפוך רשימה דו-כיוונית על ידי החלפת prev ו-next בכל צומת.',
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
      en: 'The optimal solution is two passes with a frequency count. In the first pass I count how many times each character appears. In the second pass I walk the string again from the left and return the index of the first character whose count is exactly 1. If none is found, I return -1.\nThe second pass must go over the string, not over the counts, because the order of the string is what defines "first", and a hash map does not keep insertion order in most languages.\nSince the input contains only lowercase English letters, a fixed array of 26 counters (or 256 in C, one per byte value) is faster than a hash map and has no hashing overhead.\nTime is O(n): two linear passes. Space is O(k), where k is the size of the alphabet, which is O(1) for a fixed alphabet.\nEdge cases: an empty string returns -1, a string where every character repeats returns -1, and a single character returns 0.',
      he: 'הפתרון האופטימלי הוא שני מעברים עם ספירת שכיחויות. במעבר הראשון סופרים כמה פעמים מופיע כל תו. במעבר השני עוברים שוב על המחרוזת משמאל ומחזירים את האינדקס של התו הראשון שהמונה שלו בדיוק 1. אם אין כזה, מחזירים -1.\nהמעבר השני חייב להיות על המחרוזת ולא על המונים, כי הסדר במחרוזת הוא מה שמגדיר "ראשון", ו-hash map ברוב השפות לא שומר על סדר ההכנסה.\nמכיוון שהקלט מכיל רק אותיות אנגליות קטנות, מערך קבוע של 26 מונים (או 256 ב-C, אחד לכל ערך של byte) מהיר יותר מ-hash map ואין בו תקורה של hashing.\nזמן O(n): שני מעברים לינאריים. זיכרון O(k), כש-k הוא גודל האלפבית, כלומר O(1) לאלפבית קבוע.\nמקרי קצה: מחרוזת ריקה מחזירה -1, מחרוזת שכל התווים בה חוזרים מחזירה -1, ותו יחיד מחזיר 0.',
    },
    approach: [
      {
        en: 'Clarify: return the index or the character, what the character set is, whether case matters, and what to return for an empty string.',
        he: 'מבהירים: האם מחזירים אינדקס או תו, מהו סט התווים, האם יש הבדל בין אותיות גדולות לקטנות, ומה מחזירים למחרוזת ריקה.',
      },
      {
        en: 'Brute force: for each index, scan the whole string looking for another occurrence. That is O(n^2) time and O(1) space.',
        he: 'Brute force: לכל אינדקס סורקים את כל המחרוזת ומחפשים מופע נוסף. זה O(n^2) בזמן ו-O(1) בזיכרון.',
      },
      {
        en: 'Insight: for each character we only need its total count, and that can be computed once, in advance, in a single pass.',
        he: 'התובנה: לכל תו צריך רק את מספר ההופעות הכולל שלו, ואפשר לחשב אותו פעם אחת מראש במעבר יחיד.',
      },
      {
        en: 'Algorithm: count every character into an array of 26 or a hash map, then scan the string from index 0 and return the first index whose count is 1, or -1.',
        he: 'האלגוריתם: סופרים כל תו לתוך מערך של 26 או hash map, ואז סורקים את המחרוזת מאינדקס 0 ומחזירים את האינדקס הראשון שהמונה שלו 1, או -1.',
      },
      {
        en: 'Complexity: O(n) time and O(k) space for alphabet size k, which is O(1) here.',
        he: 'סיבוכיות: O(n) זמן ו-O(k) זיכרון לפי גודל האלפבית k, כלומר O(1) כאן.',
      },
      {
        en: 'Test: "leetcode" gives 0, "loveleetcode" gives 2, "aabb" gives -1, then the empty string and a single character.',
        he: 'בדיקה: "leetcode" מחזיר 0, ‏"loveleetcode" מחזיר 2, ‏"aabb" מחזיר -1, ואחר כך מחרוזת ריקה ותו יחיד.',
      },
    ],
    keyPoints: [
      {
        en: 'Iterate over the string in the second pass, not over the map. Iterating the map can return a unique character that is not the first one.',
        he: 'במעבר השני עוברים על המחרוזת ולא על ה-map. מעבר על ה-map עלול להחזיר תו ייחודי שהוא לא הראשון.',
      },
      {
        en: 'Say explicitly that space is O(1) for a fixed alphabet, and that a plain array beats a hash map here.',
        he: 'להגיד במפורש שהזיכרון הוא O(1) לאלפבית קבוע, ושמערך פשוט עדיף כאן על hash map.',
      },
      {
        en: 'Avoid hidden O(n^2) solutions such as calling count(), indexOf or lastIndexOf for every character.',
        he: 'להיזהר מפתרונות O(n^2) מוסתרים, כמו קריאה ל-count(), ‏indexOf או lastIndexOf על כל תו.',
      },
      {
        en: 'For Unicode input the alphabet is not small, so use a hash map, and in Java remember that one char is not always one character (surrogate pairs).',
        he: 'עבור קלט Unicode האלפבית לא קטן, אז משתמשים ב-hash map, וב-Java צריך לזכור ש-char אחד הוא לא תמיד תו אחד (surrogate pairs).',
      },
      {
        en: 'Follow-up: first unique character in a stream. Keep counts plus a queue (or an ordered map such as LinkedHashMap) and pop repeated characters from the front, giving amortised O(1) per character.',
        he: 'שאלת המשך: התו הייחודי הראשון ב-stream. מחזיקים מונים ועוד תור (או map ששומר סדר כמו LinkedHashMap) ומוציאים מהחזית תווים שחזרו, וכך מקבלים O(1) amortised לכל תו.',
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
      en: 'The optimal solution uses two pointers: left starts at index 0 and right at the last index. While left is smaller than right, I swap the two characters, move left forward and right backward. When they meet or cross, the whole string is reversed.\nIt works because each swap puts two characters in their final positions and the pointers stop at the middle, so every pair is swapped exactly once. With an odd length the middle character simply stays where it is.\nTime is O(n), about n/2 swaps. Extra space is O(1) when the characters live in a mutable array, as in C or a C++ std::string.\nIn Java and Python strings are immutable, so a true in-place reverse is impossible: you copy into a char array or a list, reverse that, and build a new string, which costs O(n) extra memory. Interviewers like hearing that distinction.\nEdge cases: the empty string and a single character. With unsigned indices or an end pointer, length - 1 on an empty string underflows, so guard that case first.',
      he: 'הפתרון האופטימלי משתמש בשני מצביעים: left מתחיל באינדקס 0 ו-right באינדקס האחרון. כל עוד left קטן מ-right, מחליפים בין שני התווים, מקדמים את left קדימה ואת right אחורה. כשהם נפגשים או חוצים זה את זה, כל המחרוזת הפוכה.\nזה עובד כי כל החלפה מציבה שני תווים במקום הסופי שלהם, והמצביעים עוצרים באמצע, כך שכל זוג מוחלף בדיוק פעם אחת. באורך אי-זוגי התו האמצעי פשוט נשאר במקומו.\nזמן O(n), בערך n/2 החלפות. זיכרון נוסף O(1) כשהתווים נמצאים במערך שניתן לשנות, כמו ב-C או ב-std::string של C++.\nב-Java וב-Python מחרוזות הן immutable, ולכן היפוך אמיתי במקום בלתי אפשרי: מעתיקים למערך תווים או לרשימה, הופכים אותם ובונים מחרוזת חדשה, וזה עולה O(n) זיכרון נוסף. מראיינים אוהבים לשמוע את ההבחנה הזו.\nמקרי קצה: מחרוזת ריקה ותו יחיד. עם אינדקסים unsigned או עם מצביע לסוף, length - 1 על מחרוזת ריקה גורם ל-underflow, אז בודקים את המקרה הזה קודם.',
    },
    approach: [
      {
        en: 'Clarify: is the input a mutable character array or an immutable string, should I return a value, and what is the encoding (ASCII or Unicode)?',
        he: 'מבהירים: האם הקלט הוא מערך תווים שניתן לשנות או מחרוזת immutable, האם צריך להחזיר ערך, ומה הקידוד (ASCII או Unicode)?',
      },
      {
        en: 'Brute force: build a new array by copying characters from the end to the start. That is O(n) time but O(n) extra space.',
        he: 'Brute force: בונים מערך חדש ומעתיקים אליו את התווים מהסוף להתחלה. זה O(n) בזמן אבל O(n) בזיכרון נוסף.',
      },
      {
        en: 'Insight: position i and position n - 1 - i simply trade places, so swapping symmetric pairs from the outside in reverses the array without extra storage.',
        he: 'התובנה: המקום i והמקום n - 1 - i פשוט מתחלפים, ולכן החלפה של זוגות סימטריים מבחוץ פנימה הופכת את המערך בלי אחסון נוסף.',
      },
      {
        en: 'Algorithm: left = 0, right = n - 1. While left < right: swap s[left] and s[right], left++, right--.',
        he: 'האלגוריתם: left = 0, ‏right = n - 1. כל עוד left < right: מחליפים את s[left] ו-s[right], ‏left++, ‏right--.',
      },
      {
        en: 'Complexity: O(n) time with n/2 swaps, O(1) extra space on a mutable array.',
        he: 'סיבוכיות: O(n) זמן עם n/2 החלפות, O(1) זיכרון נוסף על מערך שניתן לשנות.',
      },
      {
        en: 'Test: "hello" (odd length), "ab" (even length), "a", and the empty string.',
        he: 'בדיקה: "hello" (אורך אי-זוגי), ‏"ab" (אורך זוגי), ‏"a" ומחרוזת ריקה.',
      },
    ],
    keyPoints: [
      {
        en: 'Immutable strings in Java and Python mean the O(1) space claim only holds for the character array, not for the String itself.',
        he: 'מחרוזות immutable ב-Java וב-Python אומרות שה-O(1) בזיכרון נכון רק למערך התווים, לא ל-String עצמו.',
      },
      {
        en: 'Watch the empty string: size() - 1 on an unsigned size_t wraps to a huge number, and in C the end pointer would point before the buffer.',
        he: 'לשים לב למחרוזת ריקה: size() - 1 על size_t שהוא unsigned מתגלגל למספר ענק, וב-C המצביע לסוף יצביע לפני תחילת ה-buffer.',
      },
      {
        en: 'Reversing bytes breaks multi-byte UTF-8 characters, and in Java reversing chars can split surrogate pairs. Ask about the encoding.',
        he: 'היפוך של bytes שובר תווי UTF-8 מרובי בתים, וב-Java היפוך של char יכול לפרק surrogate pairs. כדאי לשאול על הקידוד.',
      },
      {
        en: 'Know the library calls (std::reverse, StringBuilder.reverse(), s[::-1]) but show the manual two-pointer version when asked.',
        he: 'להכיר את פונקציות הספרייה (std::reverse, ‏StringBuilder.reverse(), ‏s[::-1]) אבל להראות את גרסת שני המצביעים הידנית כשמבקשים.',
      },
      {
        en: 'The XOR swap trick avoids a temporary variable but is less readable and fails if both operands are the same memory location, so a temp variable is preferred.',
        he: 'טריק ה-XOR swap חוסך משתנה זמני אבל פחות קריא ונכשל אם שני האופרנדים הם אותו מקום בזיכרון, ולכן עדיף משתנה זמני.',
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
      en: 'Binary search keeps a range [lo, hi] that is guaranteed to contain the target if it exists. I start with lo = 0 and hi = n - 1. While lo <= hi, I compute mid and compare nums[mid] with the target: if they are equal I return mid; if nums[mid] is smaller, the target can only be to the right, so lo = mid + 1; otherwise hi = mid - 1. If the loop ends, I return -1.\nIt works because the array is sorted, so one comparison rules out half of the remaining range.\nTime is O(log n): a million elements need at most 20 comparisons. Space is O(1) for the iterative version and O(log n) of call stack for a recursive one.\nEdge cases: an empty array (hi = -1, so the loop never runs) and a target smaller than the first or larger than the last element. In C, C++ and Java I compute mid as lo + (hi - lo) / 2, because lo + hi can overflow an int on very large arrays.',
      he: 'חיפוש בינארי מחזיק טווח [lo, hi] שמובטח שמכיל את היעד אם הוא קיים. מתחילים עם lo = 0 ו-hi = n - 1. כל עוד lo <= hi, מחשבים את mid ומשווים את nums[mid] ליעד: אם הם שווים מחזירים את mid; אם nums[mid] קטן יותר, היעד יכול להיות רק מימין, אז lo = mid + 1; אחרת hi = mid - 1. אם הלולאה מסתיימת, הטווח ריק והתשובה היא -1.\nזה עובד כי המערך ממוין, ולכן השוואה אחת פוסלת חצי מהטווח שנשאר.\nזמן O(log n): מיליון איברים דורשים לכל היותר 20 השוואות. זיכרון O(1) בגרסה האיטרטיבית ו-O(log n) של מחסנית קריאות בגרסה רקורסיבית.\nמקרי קצה: מערך ריק (hi = -1, אז הלולאה לא רצה בכלל) ויעד שקטן מהאיבר הראשון או גדול מהאחרון. ב-C, ‏C++ ו-Java מחשבים את mid כ-lo + (hi - lo) / 2, כי lo + hi יכול לגרום ל-overflow של int במערכים ענקיים.',
    },
    approach: [
      {
        en: 'Clarify: the array is sorted in ascending order, values are distinct, and I return the index or -1. Ask what should happen with duplicates if that changes.',
        he: 'מבהירים: המערך ממוין בסדר עולה, הערכים שונים, ומחזירים אינדקס או -1. שואלים מה קורה אם יש כפילויות.',
      },
      {
        en: 'Brute force: a linear scan that compares every element, O(n) time and O(1) space. It ignores the fact that the array is sorted.',
        he: 'Brute force: סריקה לינארית שמשווה כל איבר, O(n) זמן ו-O(1) זיכרון. היא מתעלמת מכך שהמערך ממוין.',
      },
      {
        en: 'Insight: because the array is sorted, comparing the target with the middle element tells me which half cannot contain it, so I can discard half the range at every step.',
        he: 'התובנה: מכיוון שהמערך ממוין, השוואה של היעד לאיבר האמצעי אומרת לי באיזה חצי הוא לא יכול להיות, אז אפשר לזרוק חצי מהטווח בכל צעד.',
      },
      {
        en: 'Algorithm: lo = 0, hi = n - 1. While lo <= hi: mid = lo + (hi - lo) / 2; if equal return mid; if nums[mid] < target then lo = mid + 1, else hi = mid - 1. Return -1.',
        he: 'האלגוריתם: lo = 0, ‏hi = n - 1. כל עוד lo <= hi: ‏mid = lo + (hi - lo) / 2; אם שווה מחזירים mid; אם nums[mid] < target אז lo = mid + 1, אחרת hi = mid - 1. מחזירים -1.',
      },
      {
        en: 'Complexity: O(log n) time, O(1) space for the loop version.',
        he: 'סיבוכיות: O(log n) זמן, O(1) זיכרון בגרסת הלולאה.',
      },
      {
        en: 'Test: [-1, 0, 3, 5, 9, 12] with target 9 (mid lands on 3, then on 9, returns 4), target 2 (returns -1), then an empty array, one element, and the first and last positions.',
        he: 'בדיקה: ‏[-1, 0, 3, 5, 9, 12] עם target 9 (ה-mid נופל על 3, אחר כך על 9, ומחזירים 4), ‏target 2 (מחזיר -1), ואחר כך מערך ריק, איבר יחיד, והמקום הראשון והאחרון.',
      },
    ],
    keyPoints: [
      {
        en: 'Keep the invariant consistent: a closed range uses hi = n - 1 with lo <= hi, a half-open range uses hi = n with lo < hi and hi = mid. Mixing the two causes infinite loops or missed elements.',
        he: 'שומרים על invariant עקבי: טווח סגור משתמש ב-hi = n - 1 עם lo <= hi, וטווח חצי פתוח משתמש ב-hi = n עם lo < hi ו-hi = mid. ערבוב של השניים גורם ללולאות אינסופיות או לאיברים שמפספסים.',
      },
      {
        en: 'The (lo + hi) / 2 overflow is a real bug: it existed for years in the JDK\'s Arrays.binarySearch until it was fixed in 2006.',
        he: 'ה-overflow של (lo + hi) / 2 הוא באג אמיתי: הוא היה קיים שנים ב-Arrays.binarySearch של ה-JDK עד שתוקן ב-2006.',
      },
      {
        en: 'Binary search needs sorted data and random access. On a linked list it gives no benefit, and sorting first costs O(n log n), which only pays off for many queries.',
        he: 'חיפוש בינארי דורש נתונים ממוינים וגישה אקראית. ברשימה מקושרת אין לו יתרון, ומיון מראש עולה O(n log n), וזה משתלם רק כשיש הרבה שאילתות.',
      },
      {
        en: 'Expect variants: first or last occurrence with duplicates (lower bound / upper bound), search insert position, a rotated sorted array, and binary search on the answer.',
        he: 'לצפות לווריאציות: מופע ראשון או אחרון כשיש כפילויות (lower bound / upper bound), מיקום הכנסה, מערך ממוין שעבר רוטציה, וחיפוש בינארי על התשובה.',
      },
      {
        en: 'Mention the library versions: bisect in Python, std::lower_bound and std::binary_search in C++, Arrays.binarySearch in Java.',
        he: 'להזכיר את גרסאות הספרייה: bisect ב-Python, ‏std::lower_bound ו-std::binary_search ב-C++, ‏Arrays.binarySearch ב-Java.',
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
      en: 'An abstract class is a partially implemented base class that subclasses extend, while an interface is a contract of behaviour that any class can promise to implement.\nMain differences:\n- Inheritance: a class can extend only one class, abstract or not, but can implement many interfaces.\n- State: an abstract class can have instance fields of any kind; an interface can only have constants, which are implicitly public static final.\n- Constructors: an abstract class has constructors that subclasses call with super(); an interface has none.\n- Methods: an abstract class mixes abstract and concrete methods with any access modifier. Interface methods are public and abstract by default; since Java 8 they can also be default or static, and since Java 9 private.\n- Relationship: extending an abstract class says "is a"; implementing an interface says "can do".\nExample: in the JDK, AbstractList implements most of List, so a concrete read-only list only needs get and size, while Comparable and Runnable are interfaces that completely unrelated classes implement.\nWhen to use which: an abstract class when related classes share state and code and you control the hierarchy; an interface to define a capability, to let a class have several types, and to make dependency injection and mocking easy. A common pattern combines them: an interface for the contract and an abstract skeleton class that implements it.\nFollow-up: if a class implements two interfaces with the same default method, the compiler forces it to override that method, and it can call a specific one with InterfaceName.super.method().',
      he: 'מחלקה אבסטרקטית היא מחלקת בסיס עם מימוש חלקי שמחלקות יורשות ממנה, ואילו interface הוא חוזה של התנהגות שכל מחלקה יכולה להתחייב לממש.\nההבדלים העיקריים:\n- ירושה: מחלקה יכולה לרשת רק ממחלקה אחת, אבסטרקטית או לא, אבל לממש הרבה interfaces.\n- מצב: למחלקה אבסטרקטית יכולים להיות שדות מופע מכל סוג; ב-interface יכולים להיות רק קבועים, שהם באופן מובלע public static final.\n- בנאים: למחלקה אבסטרקטית יש constructors שהמחלקות היורשות קוראות להם עם super(); ל-interface אין.\n- מתודות: מחלקה אבסטרקטית משלבת מתודות אבסטרקטיות ומתודות עם מימוש, עם כל access modifier. מתודות ב-interface הן public ו-abstract כברירת מחדל; מ-Java 8 הן יכולות להיות גם default או static, ומ-Java 9 גם private.\n- סוג הקשר: ירושה ממחלקה אבסטרקטית אומרת "is a"; מימוש interface אומר "can do".\nדוגמה: ב-JDK, ‏AbstractList מממשת את רוב List, כך שרשימה קונקרטית לקריאה בלבד צריכה לממש רק get ו-size, ואילו Comparable ו-Runnable הם interfaces שמחלקות שלא קשורות זו לזו בכלל מממשות.\nמתי מה: מחלקה אבסטרקטית כשלמחלקות קשורות יש מצב וקוד משותפים ואתם שולטים בהיררכיה; interface כדי להגדיר יכולת, לאפשר למחלקה כמה טיפוסים, ולהקל על dependency injection ועל mocking בבדיקות. דפוס נפוץ משלב את שניהם: interface לחוזה ומחלקת skeleton אבסטרקטית שמממשת אותו.\nשאלת המשך: אם מחלקה מממשת שני interfaces עם אותה default method, הקומפיילר מחייב אותה לעשות override, והיא יכולה לקרוא לגרסה מסוימת עם InterfaceName.super.method().',
    },
    keyPoints: [
      {
        en: 'Default methods were added in Java 8 so interfaces could evolve, for example adding forEach and stream to the collection interfaces without breaking every existing implementation.',
        he: 'default methods נוספו ב-Java 8 כדי לאפשר ל-interfaces להתפתח, למשל להוסיף forEach ו-stream לממשקי ה-collections בלי לשבור כל מימוש קיים.',
      },
      {
        en: 'Neither can be instantiated directly, although you can create an anonymous class from either one.',
        he: 'אי אפשר ליצור מופע ישירות משניהם, אבל אפשר ליצור מכל אחד מהם anonymous class.',
      },
      {
        en: 'An interface with a single abstract method is a functional interface and can be the target of a lambda; an abstract class cannot.',
        he: 'interface עם מתודה אבסטרקטית אחת הוא functional interface ויכול להיות יעד של lambda; מחלקה אבסטרקטית לא יכולה.',
      },
      {
        en: '"Program to an interface": depending on interfaces keeps code loosely coupled and easy to test with mocks.',
        he: '"Program to an interface": תלות ב-interfaces שומרת על צימוד רופף ומקלה על בדיקות עם mocks.',
      },
      {
        en: 'Adding an abstract method to an abstract class or a non-default method to an interface breaks every existing subclass, so API design choices are hard to change later.',
        he: 'הוספת מתודה אבסטרקטית למחלקה אבסטרקטית או מתודה שאינה default ל-interface שוברת כל מחלקה קיימת שיורשת או מממשת, ולכן קשה לשנות החלטות כאלה ב-API בהמשך.',
      },
      {
        en: 'Since Java 17, sealed classes and interfaces let you restrict which classes may extend or implement them.',
        he: 'מ-Java 17, sealed classes ו-sealed interfaces מאפשרים להגביל אילו מחלקות רשאיות לרשת מהם או לממש אותם.',
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
      en: 'Garbage collection in Java is the JVM automatically reclaiming heap memory that belongs to objects the program can no longer reach.\nHow it works:\n- Reachability, not reference counting: the collector starts from GC roots, such as local variables on thread stacks, static fields and JNI references, and marks everything reachable from them. Whatever is not marked is garbage, so cycles of objects that only reference each other are collected too.\n- Generational hypothesis: most objects die young, so the heap is split into a young generation (Eden plus two survivor spaces) and an old generation.\n- Minor GC: new objects are allocated in Eden. When it fills, live objects are copied to a survivor space, and objects that survive enough collections are promoted to the old generation.\n- Major or full GC: the old generation is collected with mark, sweep and compact, which is more expensive.\n- Stop-the-world pauses: some phases pause the application threads; modern collectors do most of the work concurrently.\nCollectors: Serial and Parallel favour throughput; G1, the default since Java 9, divides the heap into regions and aims for a pause-time target; ZGC and Shenandoah keep pauses at a few milliseconds even on very large heaps.\nExample: when a service has latency spikes, -Xlog:gc shows each pause and how much memory it freed.\nTrade-off: memory safety and no manual free, paid for with CPU overhead, extra memory headroom and less predictable latency.\nFollow-up: Java can still leak memory. Objects held forever in a static collection or an unbounded cache stay reachable and are never collected.',
      he: 'Garbage collection ב-Java הוא תהליך שבו ה-JVM משחרר אוטומטית זיכרון ב-heap של אובייקטים שהתוכנית כבר לא יכולה להגיע אליהם.\nאיך זה עובד:\n- נגישות ולא reference counting: האוסף מתחיל מ-GC roots, כמו משתנים מקומיים ב-stack של כל thread, שדות סטטיים והפניות JNI, ומסמן את כל מה שאפשר להגיע אליו מהם. מה שלא סומן הוא זבל, ולכן גם מעגלים של אובייקטים שמצביעים רק זה על זה נאספים.\n- ההנחה הדורית: רוב האובייקטים מתים צעירים, ולכן ה-heap מחולק ל-young generation ‏(Eden ועוד שני survivor spaces) ול-old generation.\n- Minor GC: אובייקטים חדשים מוקצים ב-Eden. כשהוא מתמלא, האובייקטים החיים מועתקים ל-survivor space, ואובייקטים ששרדו מספיק איסופים מקודמים ל-old generation.\n- Major או full GC: ה-old generation נאסף בשיטת mark, sweep ו-compact, וזה יקר יותר.\n- השהיות stop-the-world: חלק מהשלבים עוצרים את ה-threads של האפליקציה; אוספים מודרניים עושים את רוב העבודה במקביל.\nהאוספים: Serial ו-Parallel מכוונים ל-throughput; ‏G1, ברירת המחדל מאז Java 9, מחלק את ה-heap לאזורים (regions) ומכוון ליעד של זמן השהיה; ZGC ו-Shenandoah שומרים על השהיות של מילישניות בודדות גם ב-heap ענק.\nדוגמה: כשלשירות יש קפיצות ב-latency, ‏-Xlog:gc מראה כל השהיה וכמה זיכרון היא שחררה.\nTrade-off: מקבלים בטיחות זיכרון ובלי free ידני, ומשלמים בתקורת CPU, בזיכרון עודף ובזמני תגובה פחות צפויים.\nשאלת המשך: גם ב-Java יכולות להיות דליפות זיכרון. אובייקטים שמוחזקים לנצח ב-collection סטטי או ב-cache בלי גבול נשארים נגישים ולעולם לא נאספים.',
    },
    keyPoints: [
      {
        en: 'Use the word "reachability" and explain why cycles are not a problem, unlike reference counting in CPython or C++ shared_ptr.',
        he: 'להשתמש במילה reachability ולהסביר למה מעגלים הם לא בעיה, בניגוד ל-reference counting ב-CPython או ב-shared_ptr של C++.',
      },
      {
        en: 'Give concrete leak sources: static maps, listeners that are never removed, unbounded caches, and ThreadLocal values in thread pools.',
        he: 'לתת מקורות דליפה קונקרטיים: maps סטטיים, listeners שלא מוסרים, caches בלי גבול, וערכי ThreadLocal ב-thread pools.',
      },
      {
        en: 'System.gc() is only a hint, and finalize() is deprecated. Release non-memory resources such as files and sockets with try-with-resources.',
        he: 'System.gc() הוא רק המלצה, ו-finalize() הוא deprecated. משאבים שאינם זיכרון, כמו קבצים ו-sockets, משחררים עם try-with-resources.',
      },
      {
        en: 'Know the basic tuning flags: -Xms and -Xmx for heap size, -XX:MaxGCPauseMillis as a pause goal for G1, and what an OutOfMemoryError means.',
        he: 'להכיר את דגלי הכיוונון הבסיסיים: ‏-Xms ו-‏-Xmx לגודל ה-heap, ‏-XX:MaxGCPauseMillis כיעד השהיה ל-G1, ומה המשמעות של OutOfMemoryError.',
      },
      {
        en: 'Weak and soft references let the collector reclaim objects you only want to keep while memory allows, which is useful for caches.',
        he: 'Weak references ו-soft references מאפשרים לאוסף לשחרר אובייקטים שרוצים לשמור רק כל עוד יש זיכרון, וזה שימושי ל-caches.',
      },
      {
        en: 'Frame collector choice as a trade-off between throughput, latency and memory footprint.',
        he: 'להציג את בחירת האוסף כ-trade-off בין throughput, ‏latency וצריכת זיכרון.',
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
      en: 'Both are ordered sequences that can hold any type, but a list is mutable and a tuple is immutable.\nDifferences:\n- Mutability: a list supports append, insert, remove, sort and item assignment; a tuple cannot change after it is created.\n- Hashability: because it is immutable, a tuple can be a dict key or a set element, as long as everything inside it is hashable; a list never can.\n- Performance and memory: a tuple is a fixed-size object, so it is slightly smaller and faster to create, and constant tuples can be built once at compile time. A list over-allocates space so that append is amortised O(1).\n- Syntax: [1, 2] versus (1, 2). A one-element tuple needs a trailing comma, (1,), because (1) is just the integer 1.\n- Meaning: by convention a list is a collection of similar items whose length varies, while a tuple is a record with a fixed structure where position has meaning, like (x, y) or (name, age).\nExample: a function that returns several values actually returns a tuple, which you unpack with x, y = get_point(). A list fits a growing collection, like rows read from a file.\nWhen to use: a tuple for fixed records, dictionary keys and data you want protected from accidental changes; a list when items are added, removed or reordered.\nPitfall: immutability is shallow. A tuple that contains a list cannot be hashed, and the inner list can still change: t = ([1], 2) followed by t[0].append(3) works.',
      he: 'שניהם רצפים מסודרים שיכולים להכיל כל טיפוס, אבל list הוא mutable ו-tuple הוא immutable.\nההבדלים:\n- שינוי: list תומך ב-append, ‏insert, ‏remove, ‏sort ובהשמה לאיבר; tuple לא משתנה אחרי שנוצר.\n- Hashability: מכיוון שהוא immutable, ‏tuple יכול לשמש כמפתח ב-dict או כאיבר ב-set, בתנאי שכל מה שבתוכו hashable; ‏list לעולם לא יכול.\n- ביצועים וזיכרון: tuple הוא אובייקט בגודל קבוע, ולכן הוא קצת קטן יותר ומהיר יותר ליצירה, ו-tuples קבועים יכולים להיבנות פעם אחת בזמן הקומפילציה. ‏list מקצה מקום עודף כדי ש-append יהיה O(1) amortised.\n- תחביר: [1, 2] לעומת (1, 2). ‏tuple עם איבר אחד צריך פסיק בסוף, (1,), כי (1) הוא פשוט המספר 1.\n- משמעות: לפי המוסכמה list הוא אוסף של פריטים דומים שאורכו משתנה, ו-tuple הוא רשומה במבנה קבוע שבה למיקום יש משמעות, כמו (x, y) או (name, age).\nדוגמה: פונקציה שמחזירה כמה ערכים בעצם מחזירה tuple, ופורקים אותו עם x, y = get_point(). ‏list מתאים לאוסף שגדל, כמו שורות שנקראות מקובץ.\nמתי מה: tuple לרשומות קבועות, למפתחות במילון ולנתונים שרוצים להגן עליהם משינוי בטעות; list כשמוסיפים, מוחקים או מסדרים מחדש פריטים.\nמלכודת: ה-immutability היא רדודה. ‏tuple שמכיל list לא ניתן ל-hash, וה-list הפנימי עדיין יכול להשתנות: t = ([1], 2) ואחריו t[0].append(3) עובד.',
    },
    keyPoints: [
      {
        en: 'Immutability is shallow: the tuple\'s references cannot change, but the objects they point to can.',
        he: 'ה-immutability רדודה: ההפניות בתוך ה-tuple לא משתנות, אבל האובייקטים שהן מצביעות עליהם יכולים להשתנות.',
      },
      {
        en: 'A tuple is hashable only if all its elements are hashable, so (1, [2]) cannot be a dict key.',
        he: 'tuple הוא hashable רק אם כל האיברים שלו hashable, ולכן (1, [2]) לא יכול להיות מפתח ב-dict.',
      },
      {
        en: 'Remember the one-element syntax (1,). It is a common bug and a common quiz question.',
        he: 'לזכור את התחביר לאיבר יחיד (1,). זה באג נפוץ וגם שאלת טריק נפוצה.',
      },
      {
        en: 'For readable fixed records mention collections.namedtuple, typing.NamedTuple or a frozen dataclass.',
        he: 'לרשומות קבועות וקריאות להזכיר את collections.namedtuple, ‏typing.NamedTuple או dataclass עם frozen=True.',
      },
      {
        en: 'Both have O(1) indexing and O(n) membership tests. If you need fast "in" checks, use a set.',
        he: 'לשניהם גישה לפי אינדקס ב-O(1) ובדיקת שייכות ב-O(n). אם צריך בדיקת in מהירה, משתמשים ב-set.',
      },
      {
        en: 'A classic trick: for t = ([1],), the statement t[0] += [2] raises a TypeError but still extends the inner list.',
        he: 'טריק קלאסי: עבור t = ([1],), הפקודה t[0] += [2] זורקת TypeError ובכל זאת מרחיבה את ה-list הפנימי.',
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
      en: 'A decorator is a callable that takes a function (or a class) and returns a replacement for it, usually a wrapper that adds behaviour before or after the original call without changing the original code.\nHow it works:\n- Functions in Python are first-class objects, so they can be passed as arguments and returned from other functions.\n- The decorator defines an inner wrapper that accepts *args and **kwargs, does its extra work, calls the original function and returns its result.\n- The wrapper is a closure: it remembers the original function from the enclosing scope.\n- Writing @decorator above def f is syntactic sugar for f = decorator(f). It runs once, when the function is defined, not on every call.\n- functools.wraps copies __name__, __doc__ and other metadata to the wrapper, so debugging and introspection still work.\n- A decorator that takes arguments, like @retry(times=3), is a function that returns a decorator, so it has three levels of nesting.\n- Stacked decorators are applied bottom-up: the one closest to def wraps the function first.\nExamples: @functools.lru_cache for memoisation, @property, @staticmethod and @classmethod in classes, @app.get in FastAPI for routing, @pytest.fixture in tests, and custom decorators for timing, logging, retries or permission checks.\nTrade-offs: decorators remove repeated cross-cutting code and keep business logic clean, but too many layers hide what actually runs and make stack traces longer.\nFollow-up: a decorator can also be a class with __call__, which is handy when it needs to keep state, such as a call counter.',
      he: 'דקורטור הוא callable שמקבל פונקציה (או מחלקה) ומחזיר משהו שמחליף אותה, בדרך כלל wrapper שמוסיף התנהגות לפני או אחרי הקריאה המקורית בלי לשנות את הקוד המקורי.\nאיך זה עובד:\n- ב-Python פונקציות הן first-class objects, אז אפשר להעביר אותן כארגומנט ולהחזיר אותן מפונקציות אחרות.\n- הדקורטור מגדיר wrapper פנימי שמקבל *args ו-**kwargs, עושה את העבודה הנוספת, קורא לפונקציה המקורית ומחזיר את התוצאה שלה.\n- ה-wrapper הוא closure: הוא זוכר את הפונקציה המקורית מה-scope העוטף.\n- הכתיבה @decorator מעל def f היא syntactic sugar ל-f = decorator(f). היא רצה פעם אחת, כשהפונקציה מוגדרת, ולא בכל קריאה.\n- functools.wraps מעתיק את __name__, ‏__doc__ ומטא-דאטה נוסף ל-wrapper, כך שדיבוג ו-introspection ממשיכים לעבוד.\n- דקורטור שמקבל ארגומנטים, כמו @retry(times=3), הוא פונקציה שמחזירה דקורטור, ולכן יש בו שלוש רמות קינון.\n- כשמערימים כמה דקורטורים הם מופעלים מלמטה למעלה: זה שהכי קרוב ל-def עוטף ראשון.\nדוגמאות: @functools.lru_cache ל-memoization, ‏@property, ‏@staticmethod ו-@classmethod במחלקות, ‏@app.get ב-FastAPI לניתוב, ‏@pytest.fixture בבדיקות, ודקורטורים מותאמים למדידת זמן, לוגים, retries או בדיקות הרשאה.\nTrade-offs: דקורטורים חוסכים קוד חוזר של cross-cutting concerns ושומרים על לוגיקה עסקית נקייה, אבל יותר מדי שכבות מסתירות מה באמת רץ ומאריכות את ה-stack traces.\nשאלת המשך: דקורטור יכול להיות גם מחלקה עם __call__, וזה שימושי כשהוא צריך לשמור מצב, כמו מונה קריאות.',
    },
    keyPoints: [
      {
        en: 'Say that @d above a function is exactly f = d(f), executed at definition time. Many candidates think it runs on every call.',
        he: 'להגיד ש-@d מעל פונקציה זה בדיוק f = d(f), ושזה רץ בזמן ההגדרה. הרבה מועמדים חושבים שזה רץ בכל קריאה.',
      },
      {
        en: 'Always use functools.wraps, otherwise the wrapped function reports the name "wrapper" and loses its docstring.',
        he: 'תמיד להשתמש ב-functools.wraps, אחרת הפונקציה העטופה מדווחת על השם wrapper ומאבדת את ה-docstring שלה.',
      },
      {
        en: 'Be able to write a decorator with arguments: an outer factory that receives the arguments and returns the real decorator.',
        he: 'לדעת לכתוב דקורטור עם ארגומנטים: factory חיצוני שמקבל את הארגומנטים ומחזיר את הדקורטור האמיתי.',
      },
      {
        en: 'Stacking order matters: with @a above @b, the result is a(b(f)), so a\'s code runs first on each call.',
        he: 'סדר ההערמה חשוב: עם @a מעל @b, התוצאה היא a(b(f)), ולכן הקוד של a רץ ראשון בכל קריאה.',
      },
      {
        en: 'Decorating an async function needs an async wrapper that awaits the original, or the wrapper returns an un-awaited coroutine.',
        he: 'כשעוטפים פונקציה async צריך wrapper שהוא async ועושה await למקורית, אחרת ה-wrapper מחזיר coroutine שאף אחד לא עשה לו await.',
      },
      {
        en: 'Class decorators exist too: @dataclass takes a class and returns it with generated __init__, __repr__ and __eq__.',
        he: 'יש גם דקורטורים למחלקות: @dataclass מקבל מחלקה ומחזיר אותה עם __init__, ‏__repr__ ו-__eq__ שנוצרו אוטומטית.',
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
      en: 'The event loop is the mechanism that lets single-threaded JavaScript handle asynchronous work without blocking: it runs queued callbacks one at a time whenever the call stack is empty.\nHow it works:\n- Call stack: synchronous code runs to completion. Calling a function pushes a frame and returning pops it.\n- Host APIs: timers, network requests, DOM events and file I/O are handled by the browser or by Node\'s libuv, outside the JavaScript thread.\n- Task (macrotask) queue: when that work finishes, its callback, such as a setTimeout handler or a click handler, is queued.\n- Microtask queue: promise reactions (.then, and the code after await) and queueMicrotask go here.\n- The loop: take one macrotask and run it to completion, then drain the entire microtask queue, then let the browser render if needed, then take the next macrotask.\nExample: log 1, a setTimeout with 0 ms that logs 4, a resolved promise whose then logs 3, then log 2. The output is 1, 2, 3, 4, because the synchronous code finishes first, microtasks run before the next task, and setTimeout 0 only means "as soon as possible, after at least that delay".\nTrade-offs: this model avoids locks and data races on shared memory and handles thousands of concurrent I/O operations efficiently, but CPU-heavy code blocks everything, including rendering and clicks. Heavy computation belongs in Web Workers or Node worker threads, or should be split into chunks.\nFollow-up: Node adds its own phases (timers, poll, and check for setImmediate) and process.nextTick, whose queue runs even before promise microtasks.',
      he: 'ה-event loop הוא המנגנון שמאפשר ל-JavaScript, שרץ על thread יחיד, לטפל בעבודה אסינכרונית בלי לחסום: הוא מריץ callbacks מהתור אחד אחרי השני בכל פעם שה-call stack ריק.\nאיך זה עובד:\n- Call stack: קוד סינכרוני רץ עד הסוף. קריאה לפונקציה דוחפת frame וחזרה ממנה מוציאה אותו.\n- APIs של הסביבה: טיימרים, בקשות רשת, אירועי DOM ו-I/O של קבצים מטופלים על ידי הדפדפן או על ידי libuv ב-Node, מחוץ ל-thread של JavaScript.\n- תור ה-tasks ‏(macrotasks): כשהעבודה הזו מסתיימת, ה-callback שלה, כמו handler של setTimeout או של click, נכנס לתור.\n- תור ה-microtasks: תגובות של promises ‏(.then, והקוד שאחרי await) ו-queueMicrotask נכנסים לכאן.\n- הלולאה: לוקחים macrotask אחד ומריצים אותו עד הסוף, אחר כך מרוקנים את כל תור ה-microtasks, אחר כך הדפדפן מרנדר אם צריך, ואז לוקחים את ה-macrotask הבא.\nדוגמה: מדפיסים 1, מגדירים setTimeout של 0 מילישניות שמדפיס 4, promise שכבר resolved שה-then שלו מדפיס 3, ואז מדפיסים 2. הפלט הוא 1, 2, 3, 4, כי הקוד הסינכרוני מסתיים קודם, ה-microtasks רצים לפני ה-task הבא, ו-setTimeout של 0 אומר רק "כמה שיותר מהר, אחרי לפחות ההשהיה הזו".\nTrade-offs: המודל הזה חוסך locks ו-data races על זיכרון משותף ומטפל ביעילות באלפי פעולות I/O במקביל, אבל קוד כבד ב-CPU חוסם הכול, כולל רינדור ולחיצות. חישוב כבד שייך ל-Web Workers או ל-worker threads ב-Node, או שמפרקים אותו לחלקים.\nשאלת המשך: ב-Node יש שלבים משלו (timers, ‏poll, ו-check עבור setImmediate) ויש process.nextTick, שהתור שלו רץ אפילו לפני ה-microtasks של promises.',
    },
    keyPoints: [
      {
        en: 'The microtask queue is drained completely before the next task, so a promise chain that keeps queueing microtasks can starve rendering and timers.',
        he: 'תור ה-microtasks מתרוקן עד הסוף לפני ה-task הבא, ולכן שרשרת promises שממשיכה להוסיף microtasks יכולה להרעיב את הרינדור ואת הטיימרים.',
      },
      {
        en: 'setTimeout(fn, 0) is not immediate: it waits for the stack and the microtasks, and browsers clamp deeply nested timers to about 4 ms.',
        he: 'setTimeout(fn, 0) לא מיידי: הוא מחכה ל-stack ול-microtasks, ודפדפנים מגבילים טיימרים מקוננים לעומק לכ-4 מילישניות.',
      },
      {
        en: 'async/await is syntax over promises: everything after an await resumes as a microtask.',
        he: 'async/await הוא תחביר מעל promises: כל מה שאחרי await ממשיך לרוץ כ-microtask.',
      },
      {
        en: 'Rendering happens between tasks, which is why a long task freezes the UI; requestAnimationFrame callbacks run right before a paint.',
        he: 'הרינדור קורה בין tasks, ולכן task ארוך מקפיא את הממשק; ה-callbacks של requestAnimationFrame רצים ממש לפני ציור המסך.',
      },
      {
        en: 'The JavaScript engine is single-threaded, but the runtime is not: Node\'s libuv uses a thread pool for file system, DNS lookups and crypto work.',
        he: 'מנוע ה-JavaScript הוא single-threaded, אבל סביבת הריצה לא: ‏libuv ב-Node משתמש ב-thread pool לעבודה עם מערכת הקבצים, DNS lookups ו-crypto.',
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
      en: 'var, let and const all declare variables, but they differ in scope, in hoisting behaviour and in whether they can be reassigned.\nDifferences:\n- Scope: var is function-scoped, so a var declared inside an if or a for is visible in the whole function. let and const are block-scoped, limited to the nearest curly braces.\n- Hoisting: all three are hoisted, but var is initialised to undefined, so reading it before its line gives undefined. let and const stay uninitialised in the temporal dead zone (TDZ) until their declaration runs, and touching them there throws a ReferenceError.\n- Redeclaration: var can be declared twice in the same scope without any error; let and const cannot, which is a SyntaxError.\n- Reassignment: var and let can be reassigned; const must be initialised when declared and cannot be reassigned. const does not make the value immutable: the properties of a const object or the items of a const array can still change. Object.freeze does that, and only shallowly.\nExample: the classic loop bug. for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)) prints 3, 3, 3, because all callbacks share one i. With let each iteration gets a fresh binding, and it prints 0, 1, 2.\nBest practice: const by default, let only when the variable must be reassigned, and no var in modern code. ESLint enforces this with the no-var and prefer-const rules.\nFollow-up: typeof on an undeclared variable safely returns "undefined", but typeof on a let variable inside its TDZ throws.',
      he: 'var, ‏let ו-const כולם מצהירים על משתנים, אבל הם נבדלים ב-scope, בהתנהגות ה-hoisting ובשאלה אם אפשר להשים להם ערך מחדש.\nההבדלים:\n- Scope: ‏var הוא function-scoped, כך ש-var שהוצהר בתוך if או for גלוי בכל הפונקציה. ‏let ו-const הם block-scoped, מוגבלים לסוגריים המסולסלים הקרובים.\n- Hoisting: כל השלושה עוברים hoisting, אבל var מאותחל ל-undefined, ולכן קריאה שלו לפני השורה שלו מחזירה undefined. ‏let ו-const נשארים לא מאותחלים ב-temporal dead zone ‏(TDZ) עד שההצהרה שלהם רצה, ונגיעה בהם שם זורקת ReferenceError.\n- הצהרה כפולה: את var אפשר להצהיר פעמיים באותו scope בלי שום שגיאה; את let ו-const אי אפשר, וזו SyntaxError.\n- השמה מחדש: ל-var ול-let אפשר להשים ערך חדש; const חייב להיות מאותחל בהצהרה ואי אפשר להשים לו מחדש. const לא הופך את הערך ל-immutable: את השדות של אובייקט const או את האיברים של מערך const עדיין אפשר לשנות. בשביל זה יש Object.freeze, וגם הוא רדוד.\nדוגמה: באג הלולאה הקלאסי. for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)) מדפיס 3, 3, 3, כי כל ה-callbacks חולקים את אותו i. עם let כל איטרציה מקבלת binding חדש, והפלט הוא 0, 1, 2.\nBest practice: ‏const כברירת מחדל, let רק כשצריך להשים ערך מחדש, ובלי var בקוד מודרני. ‏ESLint אוכף את זה עם הכללים no-var ו-prefer-const.\nשאלת המשך: typeof על משתנה שלא הוצהר מחזיר "undefined" בבטחה, אבל typeof על משתנה let בתוך ה-TDZ שלו זורק שגיאה.',
    },
    keyPoints: [
      {
        en: 'Use the term "temporal dead zone": let and const are hoisted too, they are just not initialised.',
        he: 'להשתמש במונח temporal dead zone: גם let ו-const עוברים hoisting, הם פשוט לא מאותחלים.',
      },
      {
        en: 'Explain the closure-in-a-loop bug and why let fixes it with a new binding per iteration.',
        he: 'להסביר את באג ה-closure בלולאה ולמה let פותר אותו עם binding חדש בכל איטרציה.',
      },
      {
        en: 'const protects the binding, not the value. Object.freeze makes an object read-only, but only one level deep.',
        he: 'const מגן על ה-binding ולא על הערך. ‏Object.freeze הופך אובייקט לקריאה בלבד, אבל רק ברמה אחת.',
      },
      {
        en: 'A top-level var pollutes the global object (window), which can clash with other scripts.',
        he: 'var ברמה העליונה מלכלך את האובייקט הגלובלי (window), וזה יכול להתנגש עם סקריפטים אחרים.',
      },
      {
        en: 'Function declarations are hoisted completely, body included, unlike function expressions assigned to var, let or const.',
        he: 'הצהרות פונקציה עוברות hoisting מלא כולל הגוף, בניגוד ל-function expressions שמושמות ל-var, ‏let או const.',
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
      en: 'REST, Representational State Transfer, is an architectural style for APIs over HTTP in which clients work with resources identified by URLs, using the standard HTTP methods.\nCore principles:\n- Resources and URLs: nouns, not verbs, for example /users and /users/42/orders rather than /getUser.\n- HTTP methods carry the action: GET reads, POST creates, PUT replaces, PATCH partially updates and DELETE removes.\n- Statelessness: every request carries everything the server needs, such as an auth token. The server keeps no client session between requests, which makes horizontal scaling easy.\n- Representations: the client receives a representation of the resource, usually JSON, and the Content-Type and Accept headers describe the format.\n- Status codes: 200 OK, 201 Created, 204 No Content, 400, 401, 403, 404, 409 and 500 tell the client what happened without parsing the body.\n- Cacheability: GET responses can be cached using headers such as Cache-Control and ETag.\n- Layered system: the client does not care whether a load balancer, gateway or cache sits in between.\nExample: GET /users/42 returns 200 with the user as JSON, POST /users returns 201 with a Location header pointing to the new user, and DELETE /users/42 returns 204.\nTrade-offs: REST is simple, reuses existing HTTP infrastructure such as caches and proxies, and is easy to debug with curl. It can cause over-fetching or many round trips; GraphQL lets the client choose fields, and gRPC suits fast internal service-to-service calls.\nFollow-up: interviewers often ask about idempotency (GET, PUT and DELETE are idempotent, POST is not), versioning such as /v1/, and pagination.',
      he: 'REST, ‏Representational State Transfer, הוא סגנון ארכיטקטוני ל-APIs מעל HTTP, שבו הלקוח עובד עם משאבים שמזוהים על ידי URL באמצעות מתודות ה-HTTP הסטנדרטיות.\nהעקרונות המרכזיים:\n- משאבים ו-URLs: שמות עצם ולא פעלים, למשל /users ו-/users/42/orders ולא /getUser.\n- מתודות ה-HTTP מבטאות את הפעולה: GET קורא, POST יוצר, PUT מחליף, PATCH מעדכן חלקית ו-DELETE מוחק.\n- Stateless: כל בקשה נושאת את כל מה שהשרת צריך, כמו auth token. השרת לא שומר session של הלקוח בין בקשות, וזה מקל מאוד על horizontal scaling.\n- ייצוגים: הלקוח מקבל ייצוג של המשאב, בדרך כלל JSON, וה-headers ‏Content-Type ו-Accept מתארים את הפורמט.\n- קודי סטטוס: 200 OK, ‏201 Created, ‏204 No Content, ‏400, ‏401, ‏403, ‏404, ‏409 ו-500 אומרים ללקוח מה קרה בלי לפרסר את הגוף.\n- Cacheability: אפשר לשמור תשובות GET ב-cache בעזרת headers כמו Cache-Control ו-ETag.\n- מערכת בשכבות: ללקוח לא משנה אם יש באמצע load balancer, ‏gateway או cache.\nדוגמה: GET /users/42 מחזיר 200 עם המשתמש כ-JSON, ‏POST /users מחזיר 201 עם header בשם Location שמצביע על המשתמש החדש, ו-DELETE /users/42 מחזיר 204.\nTrade-offs: ‏REST פשוט, משתמש בתשתית HTTP קיימת כמו caches ו-proxies, וקל לדבג אותו עם curl. הוא יכול לגרום ל-over-fetching או להרבה round trips; ‏GraphQL מאפשר ללקוח לבחור שדות, ו-gRPC מתאים לתקשורת פנימית מהירה בין שירותים.\nשאלת המשך: מראיינים שואלים הרבה על idempotency ‏(GET, ‏PUT ו-DELETE הם אידמפוטנטיים, POST לא), על versioning כמו /v1/, ועל pagination.',
    },
    keyPoints: [
      {
        en: 'Distinguish safe from idempotent: GET is safe and idempotent, PUT and DELETE are idempotent but not safe, POST is neither.',
        he: 'להבחין בין safe לבין idempotent: ‏GET הוא גם safe וגם אידמפוטנטי, ‏PUT ו-DELETE אידמפוטנטיים אבל לא safe, ו-POST אף אחד מהם.',
      },
      {
        en: 'Strict REST includes HATEOAS (responses contain links to related actions); most real APIs skip it and are "RESTful" or REST-like.',
        he: 'REST במובן המחמיר כולל HATEOAS (התשובות מכילות קישורים לפעולות קשורות); רוב ה-APIs בפועל מדלגים על זה והם RESTful או REST-like.',
      },
      {
        en: 'Filtering, sorting and pagination belong in query parameters, for example /users?role=admin&page=2&limit=20.',
        he: 'סינון, מיון ו-pagination שייכים ל-query parameters, למשל /users?role=admin&page=2&limit=20.',
      },
      {
        en: 'Statelessness pairs naturally with token authentication (a bearer token or JWT in the Authorization header) instead of server-side sessions.',
        he: 'Stateless מתאים באופן טבעי לאימות עם token ‏(bearer token או JWT ב-header בשם Authorization) במקום sessions בצד השרת.',
      },
      {
        en: 'Know 401 versus 403: 401 means "who are you?" (not authenticated), 403 means "I know who you are, and you may not".',
        he: 'להכיר את ההבדל בין 401 ל-403: ‏401 אומר "מי אתה?" (לא מאומת), ‏403 אומר "אני יודע מי אתה, ואסור לך".',
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
      en: 'For a resource that does not exist I return 404 Not Found. For a validation error I return 400 Bad Request, or 422 Unprocessable Content when the request is well-formed but its data breaks the rules.\nHow I choose:\n- 404 Not Found: the URL points to something that does not exist, for example GET /users/999 when there is no user 999.\n- 400 Bad Request: the server cannot parse or accept the request at all: malformed JSON, a wrong Content-Type, a string where a number is required, a missing required query parameter.\n- 422 Unprocessable Content (formerly called Unprocessable Entity): the syntax is fine but the content is semantically invalid, for example an email field that is not a valid address, or an end date before the start date. FastAPI returns 422 for validation errors by default. Many APIs simply use 400 for all of these, which is fine as long as it is consistent.\n- Related codes: 401 Unauthorized when the client is not authenticated, 403 Forbidden when it is authenticated but not allowed, 409 Conflict for a duplicate such as an email that is already registered, and 405 Method Not Allowed.\nExample: POST /users with an invalid email returns 422 with a body that lists each invalid field and the reason, so the frontend can show the message next to the right input.\nFollow-up: some APIs return 404 instead of 403 for a resource the caller is not allowed to see, so they do not reveal that it exists.',
      he: 'למשאב שלא קיים אני מחזיר 404 Not Found. לשגיאת ולידציה אני מחזיר 400 Bad Request, או 422 Unprocessable Content כשהבקשה בנויה נכון אבל הנתונים בה שוברים את הכללים.\nאיך בוחרים:\n- 404 Not Found: ה-URL מצביע על משהו שלא קיים, למשל GET /users/999 כשאין משתמש 999.\n- 400 Bad Request: השרת לא מצליח בכלל לפרסר או לקבל את הבקשה: JSON פגום, ‏Content-Type שגוי, מחרוזת במקום שצריך מספר, query parameter חובה שחסר.\n- 422 Unprocessable Content (בעבר נקרא Unprocessable Entity): התחביר תקין אבל התוכן לא תקין מבחינה סמנטית, למשל שדה email שאינו כתובת תקינה, או תאריך סיום לפני תאריך התחלה. ‏FastAPI מחזיר 422 לשגיאות ולידציה כברירת מחדל. הרבה APIs פשוט משתמשים ב-400 לכל המקרים האלה, וזה בסדר כל עוד זה עקבי.\n- קודים קשורים: 401 Unauthorized כשהלקוח לא מאומת, 403 Forbidden כשהוא מאומת אבל אין לו הרשאה, 409 Conflict לכפילות כמו email שכבר רשום, ו-405 Method Not Allowed.\nדוגמה: POST /users עם email לא תקין מחזיר 422 עם גוף שמפרט כל שדה לא תקין ואת הסיבה, כך שה-frontend יכול להציג את ההודעה ליד השדה הנכון.\nשאלת המשך: יש APIs שמחזירים 404 במקום 403 על משאב שאסור למשתמש לראות, כדי לא לחשוף שהוא בכלל קיים.',
    },
    keyPoints: [
      {
        en: 'Return a consistent, machine-readable error body. RFC 9457 (Problem Details, application/problem+json) is the standard format.',
        he: 'להחזיר גוף שגיאה עקבי שמכונה יכולה לקרוא. ‏RFC 9457 ‏(Problem Details, ‏application/problem+json) הוא הפורמט הסטנדרטי.',
      },
      {
        en: 'Never return 200 with an error inside the body: it breaks monitoring, retries, caching and client error handling.',
        he: 'אף פעם לא להחזיר 200 עם שגיאה בתוך הגוף: זה שובר ניטור, retries, ‏caching וטיפול בשגיאות בצד הלקוח.',
      },
      {
        en: 'The 4xx versus 5xx split drives behaviour: clients and gateways retry 5xx and some 429s, alerts usually fire on 5xx rates.',
        he: 'ההפרדה בין 4xx ל-5xx קובעת התנהגות: לקוחות ו-gateways עושים retry ל-5xx ולחלק מה-429, והתראות בדרך כלל מבוססות על שיעור ה-5xx.',
      },
      {
        en: 'Mention 409 Conflict for business conflicts such as duplicates or version mismatches, which candidates often wrongly report as 400.',
        he: 'להזכיר 409 Conflict להתנגשויות עסקיות כמו כפילויות או אי-התאמה בגרסה, שמועמדים רבים מחזירים בטעות כ-400.',
      },
      {
        en: 'A missing item inside a collection query, such as GET /users?name=x with no matches, is 200 with an empty list, not 404.',
        he: 'חיפוש בתוך collection שלא מצא כלום, כמו GET /users?name=x, מחזיר 200 עם רשימה ריקה ולא 404.',
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
      en: 'PUT replaces the whole resource with the representation in the request, while PATCH applies a partial modification to it.\nDifferences:\n- Payload: PUT sends the complete resource, and any field left out is reset or removed. PATCH sends only the changes.\n- Idempotency: PUT is idempotent by definition: sending the same request once or ten times leaves the same state. PATCH is not guaranteed to be idempotent: "set email to x" is, but "add 1 to the balance" or "append an item to a list" is not.\n- Creation: PUT to a URL the client chooses can create the resource if it does not exist, for example PUT /config/theme. PATCH usually requires the resource to exist.\n- Formats: a PATCH body is often plain partial JSON, or a formal format such as JSON Merge Patch (RFC 7396) or JSON Patch (RFC 6902), which is a list of operations like add, remove and replace.\nExample: a user has name, email and phone. PUT /users/7 with only name and email removes the phone. PATCH /users/7 with only email changes the email and keeps everything else.\nWhen to use: PUT when the client owns the full state, such as saving a whole settings form; PATCH for small edits, for large resources, and to avoid overwriting fields the client does not know about.\nFollow-up: two clients editing the same resource can overwrite each other\'s changes. An ETag with an If-Match header gives optimistic concurrency control, and the server answers 412 Precondition Failed on a conflict.',
      he: 'PUT מחליף את המשאב כולו בייצוג שנשלח בבקשה, ואילו PATCH מבצע בו שינוי חלקי.\nההבדלים:\n- התוכן שנשלח: PUT שולח את המשאב השלם, וכל שדה שלא נשלח מתאפס או נמחק. PATCH שולח רק את השינויים.\n- Idempotency: ‏PUT אידמפוטנטי לפי ההגדרה: שליחה של אותה בקשה פעם אחת או עשר פעמים משאירה את אותו מצב. PATCH לא מובטח כאידמפוטנטי: "קבע את ה-email ל-x" כן, אבל "הוסף 1 ליתרה" או "הוסף פריט לרשימה" לא.\n- יצירה: PUT ל-URL שהלקוח בוחר יכול ליצור את המשאב אם הוא לא קיים, למשל PUT /config/theme. ‏PATCH בדרך כלל דורש שהמשאב כבר קיים.\n- פורמטים: גוף של PATCH הוא לרוב JSON חלקי פשוט, או פורמט רשמי כמו JSON Merge Patch ‏(RFC 7396) או JSON Patch ‏(RFC 6902), שהוא רשימת פעולות כמו add, ‏remove ו-replace.\nדוגמה: למשתמש יש name, ‏email ו-phone. ‏PUT /users/7 עם name ו-email בלבד מוחק את ה-phone. ‏PATCH /users/7 עם email בלבד משנה את ה-email ומשאיר את כל השאר.\nמתי מה: PUT כשהלקוח מחזיק את המצב המלא, כמו שמירה של טופס הגדרות שלם; PATCH לעריכות קטנות, למשאבים גדולים, וכדי לא לדרוס שדות שהלקוח לא מכיר.\nשאלת המשך: שני לקוחות שעורכים את אותו משאב יכולים לדרוס זה את השינויים של זה. ‏ETag יחד עם header בשם If-Match נותנים optimistic concurrency control, והשרת עונה 412 Precondition Failed כשיש התנגשות.',
    },
    keyPoints: [
      {
        en: 'Idempotency matters in practice: a client or proxy can safely retry a PUT after a timeout, but retrying a non-idempotent PATCH may apply it twice.',
        he: 'ל-idempotency יש משמעות מעשית: לקוח או proxy יכולים לעשות retry בבטחה ל-PUT אחרי timeout, אבל retry ל-PATCH שאינו אידמפוטנטי עלול להחיל אותו פעמיים.',
      },
      {
        en: 'PATCH was added later, in RFC 5789; knowing it is a separate standard shows depth.',
        he: 'PATCH נוסף מאוחר יותר, ב-RFC 5789; לדעת שזה תקן נפרד מראה עומק.',
      },
      {
        en: 'In JSON Merge Patch, setting a field to null means "delete this field", which surprises many clients.',
        he: 'ב-JSON Merge Patch, השמה של null לשדה אומרת "מחק את השדה הזה", וזה מפתיע הרבה לקוחות.',
      },
      {
        en: 'Neither PUT nor PATCH is safe, because both change server state.',
        he: 'גם PUT וגם PATCH אינם safe, כי שניהם משנים מצב בשרת.',
      },
      {
        en: 'Mention the lost update problem and the ETag plus If-Match solution with 412 Precondition Failed.',
        he: 'להזכיר את בעיית ה-lost update ואת הפתרון עם ETag ו-If-Match שמחזיר 412 Precondition Failed.',
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
      en: 'INNER JOIN returns only the rows that have a match in both tables, while LEFT JOIN returns every row from the left table and fills the right table\'s columns with NULL where there is no match.\nHow it works:\n- The database pairs rows from both tables according to the ON condition.\n- INNER JOIN keeps only the pairs where the condition is true; rows without a partner on either side disappear.\n- LEFT JOIN (LEFT OUTER JOIN) keeps those same pairs, and also adds every unmatched left row once, with NULLs on the right side.\n- If a left row matches several right rows, both joins return it several times, once per match.\nExample: employees and departments. INNER JOIN shows only employees who have a department. LEFT JOIN shows every employee, and Noa, who has no department, appears with NULL as the department name. To find employees without a department, use a LEFT JOIN with WHERE d.id IS NULL, the anti-join pattern.\nWhen to use: INNER JOIN when the related row must exist, such as orders with their customers; LEFT JOIN when the main entity must appear no matter what, such as all customers with their order count, including customers with zero orders.\nPitfall: a filter on the right table in the WHERE clause, like WHERE d.name = \'R&D\', removes the NULL rows and silently turns the LEFT JOIN into an INNER JOIN. Put that condition in the ON clause if you want to keep all left rows.',
      he: 'INNER JOIN מחזיר רק שורות שיש להן התאמה בשתי הטבלאות, ואילו LEFT JOIN מחזיר את כל השורות מהטבלה השמאלית וממלא את העמודות של הטבלה הימנית ב-NULL היכן שאין התאמה.\nאיך זה עובד:\n- מסד הנתונים מצמיד שורות משתי הטבלאות לפי תנאי ה-ON.\n- INNER JOIN שומר רק את הזוגות שבהם התנאי מתקיים; שורות בלי בן זוג באחד הצדדים נעלמות.\n- LEFT JOIN ‏(LEFT OUTER JOIN) שומר את אותם זוגות, ובנוסף מוסיף פעם אחת כל שורה שמאלית שאין לה התאמה, עם NULL בצד הימני.\n- אם לשורה שמאלית יש כמה התאמות בצד הימני, שני סוגי ה-JOIN מחזירים אותה כמה פעמים, פעם לכל התאמה.\nדוגמה: employees ו-departments. ‏INNER JOIN מציג רק עובדים שיש להם מחלקה. ‏LEFT JOIN מציג את כל העובדים, ונועה, שאין לה מחלקה, מופיעה עם NULL בשם המחלקה. כדי למצוא עובדים בלי מחלקה עושים LEFT JOIN עם WHERE d.id IS NULL, דפוס ה-anti-join.\nמתי מה: INNER JOIN כשהשורה הקשורה חייבת להתקיים, כמו הזמנות עם הלקוחות שלהן; LEFT JOIN כשהישות הראשית חייבת להופיע בכל מקרה, כמו כל הלקוחות עם מספר ההזמנות שלהם, כולל לקוחות עם אפס הזמנות.\nמלכודת: סינון על הטבלה הימנית ב-WHERE, כמו WHERE d.name = \'R&D\', מסנן החוצה את שורות ה-NULL והופך בשקט את ה-LEFT JOIN ל-INNER JOIN. אם רוצים לשמור את כל השורות השמאליות, שמים את התנאי ב-ON.',
    },
    keyPoints: [
      {
        en: 'Explain the difference between a condition in ON and in WHERE for a LEFT JOIN. This is the most common follow-up.',
        he: 'להסביר את ההבדל בין תנאי ב-ON לתנאי ב-WHERE ב-LEFT JOIN. זו שאלת ההמשך הנפוצה ביותר.',
      },
      {
        en: 'When counting with a LEFT JOIN use COUNT(o.id), not COUNT(*): COUNT(*) counts the NULL row and reports 1 order for a customer with none.',
        he: 'כשסופרים עם LEFT JOIN משתמשים ב-COUNT(o.id) ולא ב-COUNT(*): ‏COUNT(*) סופר גם את שורת ה-NULL ומדווח על הזמנה אחת ללקוח שאין לו בכלל.',
      },
      {
        en: 'Joins on one-to-many relations multiply rows, which can inflate SUM and COUNT results. Aggregate in a subquery first if needed.',
        he: 'JOIN על קשר של אחד לרבים מכפיל שורות, וזה יכול לנפח תוצאות של SUM ו-COUNT. אם צריך, עושים את האגרגציה קודם בתת-שאילתה.',
      },
      {
        en: 'NULL never equals NULL, so rows with a NULL join key never match, even in an INNER JOIN.',
        he: 'NULL אף פעם לא שווה ל-NULL, ולכן שורות שמפתח ה-JOIN שלהן NULL לעולם לא מותאמות, גם ב-INNER JOIN.',
      },
      {
        en: 'For "rows with no match", NOT EXISTS is an equivalent and often clearer alternative to LEFT JOIN plus IS NULL.',
        he: 'ל"שורות בלי התאמה", ‏NOT EXISTS הוא חלופה שקולה ולרוב ברורה יותר ל-LEFT JOIN עם IS NULL.',
      },
      {
        en: 'Index the join columns, typically the foreign key, or large joins will scan whole tables.',
        he: 'שמים אינדקס על עמודות ה-JOIN, בדרך כלל ה-foreign key, אחרת JOINs גדולים יסרקו טבלאות שלמות.',
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
      en: 'The classic solution is a nested MAX: a subquery finds the highest salary, and the outer query takes the MAX of all salaries strictly smaller than it. Because the condition is strictly "less than", every copy of the top salary is skipped, so 300, 300, 200 gives 200. And because an aggregate over zero rows returns NULL, a table with only one distinct salary returns NULL, exactly as required.\nThe second solution uses the window function DENSE_RANK() OVER (ORDER BY salary DESC) and keeps rank 2. DENSE_RANK gives equal salaries the same rank with no gaps, so it handles ties and generalises to the Nth highest salary. Note that it returns no rows, not NULL, when there is no second salary; wrapping it in an outer SELECT MAX(...) turns that into NULL.\nComplexity: the MAX version is two linear scans, O(n), and with an index on salary both maxima are found almost instantly. The window version sorts, O(n log n), unless an index already provides the order. MAX also ignores NULL salaries.',
      he: 'הפתרון הקלאסי הוא MAX מקונן: תת-שאילתה מוצאת את המשכורת הגבוהה ביותר, והשאילתה החיצונית לוקחת את ה-MAX מבין כל המשכורות שקטנות ממנה ממש. מכיוון שהתנאי הוא "קטן ממש", כל העותקים של המשכורת העליונה מדולגים, ולכן 300, 300, 200 נותן 200. ומכיוון שפונקציית אגרגציה על אפס שורות מחזירה NULL, טבלה עם משכורת שונה אחת בלבד מחזירה NULL, בדיוק כמו שנדרש.\nהפתרון השני משתמש ב-window function ‏DENSE_RANK() OVER (ORDER BY salary DESC) ושומר את דירוג 2. ‏DENSE_RANK נותן למשכורות זהות אותו דירוג בלי חורים, ולכן הוא מטפל בתיקו ומוכלל בקלות למשכורת ה-N בגובהה. שימו לב שהוא מחזיר אפס שורות ולא NULL כשאין משכורת שנייה; עטיפה שלו ב-SELECT MAX(...) חיצוני הופכת את זה ל-NULL.\nסיבוכיות: גרסת ה-MAX היא שתי סריקות לינאריות, O(n), ועם אינדקס על salary שני המקסימומים נמצאים כמעט מיד. גרסת ה-window ממיינת, O(n log n), אלא אם אינדקס כבר מספק את הסדר. ‏MAX גם מתעלם ממשכורות NULL.',
    },
    approach: [
      {
        en: 'Clarify: the table and column names, whether equal salaries count once, whether to return NULL or an empty result, how to treat NULL salaries, and which SQL dialect.',
        he: 'מבהירים: שמות הטבלה והעמודות, האם משכורות זהות נספרות פעם אחת, האם להחזיר NULL או תוצאה ריקה, איך מתייחסים למשכורות NULL, ובאיזה dialect של SQL עובדים.',
      },
      {
        en: 'Naive approach: ORDER BY salary DESC and take the second row. It fails on ties (300, 300) and returns no row instead of NULL. A correlated subquery that counts higher salaries works but is O(n^2).',
        he: 'גישה נאיבית: ORDER BY salary DESC ולוקחים את השורה השנייה. היא נכשלת בתיקו (300, 300) ומחזירה אפס שורות במקום NULL. תת-שאילתה מתואמת שסופרת משכורות גבוהות יותר עובדת, אבל היא O(n^2).',
      },
      {
        en: 'Insight: the second highest distinct salary is simply the largest salary strictly below the maximum.',
        he: 'התובנה: המשכורת השנייה בגובהה מבין הערכים השונים היא פשוט המשכורת הגדולה ביותר שקטנה ממש מהמקסימום.',
      },
      {
        en: 'Write it: SELECT MAX(salary) FROM the table WHERE salary < (SELECT MAX(salary) FROM the table). If the interviewer wants the Nth salary, switch to DENSE_RANK and filter on rank N.',
        he: 'כותבים: SELECT MAX(salary) מהטבלה WHERE salary < (SELECT MAX(salary) מהטבלה). אם המראיין רוצה את המשכורת ה-N, עוברים ל-DENSE_RANK ומסננים לפי דירוג N.',
      },
      {
        en: 'Complexity: O(n) for two scans, faster with an index on salary; the window version is O(n log n) because of the sort.',
        he: 'סיבוכיות: O(n) לשתי סריקות, ומהר יותר עם אינדקס על salary; גרסת ה-window היא O(n log n) בגלל המיון.',
      },
      {
        en: 'Test: (100, 200, 300) gives 200, (100) gives NULL, (300, 300, 200) gives 200, (100, 100) gives NULL, and an empty table gives NULL.',
        he: 'בדיקה: ‏(100, 200, 300) מחזיר 200, ‏(100) מחזיר NULL, ‏(300, 300, 200) מחזיר 200, ‏(100, 100) מחזיר NULL, וטבלה ריקה מחזירה NULL.',
      },
    ],
    keyPoints: [
      {
        en: 'Know DENSE_RANK versus RANK versus ROW_NUMBER: for 300, 300, 200, RANK gives 1, 1, 3, so rank 2 does not exist, and ROW_NUMBER returns the duplicate 300 as "second".',
        he: 'להכיר את ההבדל בין DENSE_RANK, ‏RANK ו-ROW_NUMBER: עבור 300, 300, 200, ‏RANK נותן 1, 1, 3, כך שדירוג 2 לא קיים, ו-ROW_NUMBER מחזיר את ה-300 הכפול כ"שני".',
      },
      {
        en: 'Point out the difference between returning NULL and returning no rows; the problem explicitly asks for NULL.',
        he: 'להצביע על ההבדל בין החזרת NULL לבין החזרת אפס שורות; השאלה מבקשת במפורש NULL.',
      },
      {
        en: 'The LIMIT 1 OFFSET 1 approach needs DISTINCT and returns no rows when empty, so wrap it as a scalar subquery: SELECT (SELECT DISTINCT salary ... ORDER BY salary DESC LIMIT 1 OFFSET 1). SQL Server uses OFFSET ... FETCH instead of LIMIT.',
        he: 'הגישה של LIMIT 1 OFFSET 1 צריכה DISTINCT ומחזירה אפס שורות כשאין תוצאה, ולכן עוטפים אותה כ-scalar subquery: ‏SELECT (SELECT DISTINCT salary ... ORDER BY salary DESC LIMIT 1 OFFSET 1). ב-SQL Server משתמשים ב-OFFSET ... FETCH במקום LIMIT.',
      },
      {
        en: 'Generalise on request: the Nth highest salary with DENSE_RANK, and the second highest per department with PARTITION BY department_id.',
        he: 'להכליל כשמבקשים: המשכורת ה-N בגובהה עם DENSE_RANK, והשנייה בגובהה בכל מחלקה עם PARTITION BY department_id.',
      },
      {
        en: 'Mention that an index on salary makes MAX lookups fast, which matters on large tables.',
        he: 'להזכיר שאינדקס על salary הופך את חיפושי ה-MAX למהירים, וזה חשוב בטבלאות גדולות.',
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
      en: 'A database index is a separate, sorted data structure, usually a B+tree, that maps column values to row locations so the engine can find rows without scanning the whole table.\nHow it works:\n- The B+tree keeps keys sorted in wide, shallow pages, so a lookup is O(log n) and typically touches only 3 or 4 pages even for millions of rows.\n- Leaf pages are linked in order, so range queries (BETWEEN, greater than, ORDER BY, a prefix LIKE \'abc%\') read one contiguous slice.\n- A composite index on (customer_id, created_at) serves filters on customer_id alone or on both columns, but not on created_at alone: the leftmost-prefix rule.\n- If the index holds every column the query needs, it is a covering index and the table itself is never read.\nExample: an orders table with 10 million rows and WHERE customer_id = 42. Without an index EXPLAIN shows a sequential scan; after CREATE INDEX on customer_id it becomes an index scan that reads a handful of pages.\nWhen to add one: columns in frequent WHERE filters, JOIN keys, ORDER BY and GROUP BY columns on large tables, and columns with high selectivity.\nTrade-offs: every INSERT, UPDATE and DELETE must also update each index, indexes cost disk and memory, and on a low-selectivity column such as a boolean flag the planner will often ignore the index and scan anyway.\nPitfall: WHERE LOWER(email) = ... cannot use a normal index without an expression index, so always confirm with EXPLAIN.',
      he: 'אינדקס הוא מבנה נתונים נפרד וממוין, בדרך כלל B+tree, שממפה ערכי עמודה למיקום השורות, כך שהמנוע מוצא שורות בלי לסרוק את כל הטבלה.\nאיך זה עובד:\n- ה-B+tree שומר את המפתחות ממוינים בדפים רחבים ורדודים, ולכן חיפוש הוא O(log n) ובדרך כלל נוגע רק ב-3 או 4 דפים גם בטבלה של מיליוני שורות.\n- דפי העלים מקושרים לפי הסדר, ולכן שאילתות טווח (BETWEEN, גדול מ, ORDER BY, או LIKE עם תחילית כמו \'abc%\') קוראות פרוסה רציפה אחת.\n- אינדקס מורכב על (customer_id, created_at) משרת סינון לפי customer_id לבד או לפי שתי העמודות, אבל לא לפי created_at לבד. זה כלל ה-leftmost prefix.\n- אם האינדקס מכיל את כל העמודות שהשאילתה צריכה, זה covering index והטבלה עצמה בכלל לא נקראת.\nדוגמה: טבלת orders עם 10 מיליון שורות והשאילתה WHERE customer_id = 42. בלי אינדקס, EXPLAIN מראה sequential scan; אחרי CREATE INDEX על customer_id זה הופך ל-index scan שקורא כמה דפים בודדים.\nמתי מוסיפים: על עמודות שמופיעות הרבה ב-WHERE, על מפתחות JOIN, על עמודות של ORDER BY ו-GROUP BY בטבלאות גדולות, ועל עמודות עם selectivity גבוהה.\nהמחיר: כל INSERT, UPDATE ו-DELETE צריך לעדכן גם כל אינדקס, אינדקסים תופסים דיסק וזיכרון, ועל עמודה עם selectivity נמוכה כמו דגל בוליאני ה-planner לרוב יתעלם מהאינדקס ויסרוק בכל מקרה.\nמלכודת: WHERE LOWER(email) = ... לא יכול להשתמש באינדקס רגיל בלי expression index, ולכן תמיד מאמתים עם EXPLAIN.',
    },
    keyPoints: [
      {
        en: 'Name the structure: B+tree with O(log n) lookups and linked leaves for range scans; hash indexes help only equality lookups.',
        he: 'לציין את המבנה: B+tree עם חיפוש ב-O(log n) ועלים מקושרים לסריקות טווח; hash index עוזר רק להשוואת שוויון.',
      },
      {
        en: 'Explain the leftmost-prefix rule for composite indexes and that column order should follow how queries filter.',
        he: 'להסביר את כלל ה-leftmost prefix באינדקס מורכב, ושסדר העמודות צריך להתאים לאופן שבו השאילתות מסננות.',
      },
      {
        en: 'Mention covering indexes: the query is answered from the index alone, with no lookup back into the table.',
        he: 'להזכיר covering index: השאילתה נענית מהאינדקס בלבד, בלי לחזור לטבלה.',
      },
      {
        en: 'Clustered vs non-clustered: in InnoDB the table is stored in primary-key order, and secondary indexes point to the primary key.',
        he: 'clustered מול non-clustered: ב-InnoDB הטבלה עצמה שמורה לפי סדר ה-primary key, ואינדקסים משניים מצביעים על ה-primary key.',
      },
      {
        en: 'Every index slows writes and uses space, and low-selectivity columns rarely benefit. Verify with EXPLAIN instead of guessing.',
        he: 'כל אינדקס מאט כתיבות ותופס מקום, ועמודות עם selectivity נמוכה כמעט לא מרוויחות. מאמתים עם EXPLAIN ולא מנחשים.',
      },
      {
        en: 'Functions on the column, implicit type casts and leading wildcards (LIKE \'%abc\') usually prevent index use.',
        he: 'פונקציה על העמודה, המרת טיפוס מרומזת ו-wildcard בהתחלה (LIKE \'%abc\') בדרך כלל מונעים שימוש באינדקס.',
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
      en: 'A rate limiter caps how many requests a client may send in a time window, protecting the API from abuse and overload.\nDesign steps:\n- Identify the client: API key or user id for authenticated calls, IP address for anonymous ones, optionally per endpoint.\n- Pick an algorithm. A fixed window counter is simplest but can let through up to twice the limit around a window boundary. A sliding window log is exact but stores a timestamp per request. A sliding window counter weights the previous window\'s count, a good approximation with O(1) memory. A token bucket refills at a steady rate up to a capacity, so it allows controlled bursts; a leaky bucket drains at a constant rate and smooths traffic.\n- Keep state in a fast shared store such as Redis so every API instance sees the same counters, and make check-and-increment atomic with INCR plus EXPIRE or a Lua script, otherwise concurrent requests race past the limit.\n- Enforce it in the API gateway or middleware, before any expensive work.\n- On rejection return HTTP 429 Too Many Requests with a Retry-After header, and expose the limit and remaining quota in headers such as X-RateLimit-Remaining.\nExample: a public API allows 100 requests per minute per key with bursts of 20, as a token bucket in Redis.\nTrade-offs: a central Redis adds a network hop and a dependency; local in-memory limiters are faster but only approximately global. Decide whether to fail open or closed if it goes down.\nFollow-up: multi-region accuracy, often handled by counting locally and syncing asynchronously.',
      he: 'Rate limiter מגביל כמה בקשות לקוח יכול לשלוח בחלון זמן, כדי להגן על ה-API מניצול לרעה ומעומס.\nשלבי התכנון:\n- מזהים את הלקוח: API key או user id לקריאות מאומתות, כתובת IP לאנונימיות, ולפעמים גם לפי endpoint.\n- בוחרים אלגוריתם. fixed window counter הוא הפשוט ביותר, אבל סביב גבול החלון הוא יכול להעביר עד פי שניים מהמגבלה. sliding window log מדויק, אבל שומר חותמת זמן לכל בקשה. sliding window counter נותן משקל לספירה של החלון הקודם, קירוב טוב עם זיכרון O(1). token bucket מתמלא בקצב קבוע עד קיבולת מסוימת, ולכן מאפשר burst מבוקר; leaky bucket מתרוקן בקצב קבוע ומחליק את התעבורה.\n- שומרים את המצב במאגר משותף ומהיר כמו Redis, כדי שכל מופעי ה-API יראו את אותם מונים, ודואגים שהבדיקה וההגדלה יהיו אטומיות עם INCR ו-EXPIRE או סקריפט Lua. אחרת בקשות מקבילות עוקפות את המגבלה ב-race condition.\n- אוכפים ב-API gateway או ב-middleware, לפני כל עבודה יקרה.\n- כשחוסמים מחזירים HTTP 429 Too Many Requests עם כותרת Retry-After, וחושפים את המגבלה ואת המכסה שנותרה בכותרות כמו X-RateLimit-Remaining.\nדוגמה: API ציבורי שמאפשר 100 בקשות בדקה לכל מפתח עם burst של 20, ממומש כ-token bucket ב-Redis.\nשיקולים: Redis מרכזי מוסיף קפיצת רשת ותלות; limiter מקומי בזיכרון מהיר יותר אבל גלובלי רק בקירוב. מחליטים אם כשהוא נופל עושים fail open או fail closed.\nשאלת המשך: דיוק בפריסה על כמה regions, שלרוב פותרים בספירה מקומית וסנכרון אסינכרוני.',
    },
    keyPoints: [
      {
        en: 'Compare at least three algorithms and name the fixed-window boundary problem: up to 2x the limit across two adjacent windows.',
        he: 'להשוות לפחות שלושה אלגוריתמים ולציין את בעיית הגבול של fixed window: עד פי 2 מהמגבלה על פני שני חלונות סמוכים.',
      },
      {
        en: 'Atomicity matters: a read-then-write in Redis races under concurrency, so use INCR, a Lua script or a transaction.',
        he: 'אטומיות חשובה: קריאה ואחריה כתיבה ב-Redis יוצרת race condition, ולכן משתמשים ב-INCR, בסקריפט Lua או בטרנזקציה.',
      },
      {
        en: 'Return 429 with Retry-After and quota headers so well-behaved clients can back off instead of hammering the API.',
        he: 'להחזיר 429 עם Retry-After וכותרות מכסה, כדי שלקוחות מסודרים יוכלו לעשות back off במקום להפציץ את ה-API.',
      },
      {
        en: 'Discuss failure mode: fail open keeps the API up but unprotected, fail closed protects it but blocks everyone.',
        he: 'לדבר על מצב כשל: fail open משאיר את ה-API זמין אבל לא מוגן, fail closed מגן אבל חוסם את כולם.',
      },
      {
        en: 'Key choice has pitfalls: many users share one IP behind NAT, and attackers can rotate IPs, so prefer API keys where possible.',
        he: 'לבחירת המפתח יש מלכודות: הרבה משתמשים חולקים IP אחד מאחורי NAT, ותוקף יכול להחליף כתובות IP, ולכן עדיף API key כשאפשר.',
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
      en: 'The key observation is that a palindrome only constrains mirrored pairs: position i must equal position n-1-i, and different pairs are independent of each other. So walk two pointers, one from each end, toward the middle. A pair that already matches costs nothing; a pair that differs costs exactly one replacement, since changing either character to the other fixes it, and no single replacement can fix two pairs because every position belongs to exactly one pair. The answer is therefore the count of mismatched pairs, which is a lower bound and is also achievable.\nTime is O(n) with n/2 comparisons, and extra space is O(1).\nEdge cases: a single character or an already palindromic string returns 0; for odd length the middle character pairs with itself and never needs changing; the pointers stop when they meet. Example: \'abcbd\' has pairs (a, d), (b, b) and a middle c, so the answer is 1.',
      he: 'התובנה המרכזית: פלינדרום מגביל רק זוגות מראה, מיקום i חייב להיות שווה למיקום n-1-i, וזוגות שונים לא תלויים זה בזה. לכן מריצים שני מצביעים, אחד מכל קצה, לכיוון האמצע. זוג שכבר תואם לא עולה כלום; זוג שונה עולה בדיוק החלפה אחת, כי שינוי של אחד התווים לשני מתקן אותו, ושום החלפה בודדת לא יכולה לתקן שני זוגות, כי כל מיקום שייך לזוג אחד בדיוק. התשובה היא מספר הזוגות הלא תואמים: זה גם חסם תחתון וגם ניתן להשגה.\nזמן O(n) עם n/2 השוואות, וזיכרון נוסף O(1).\nמקרי קצה: תו בודד או מחרוזת שכבר פלינדרום מחזירים 0; באורך אי-זוגי התו האמצעי מתאים לעצמו ואף פעם לא צריך להחליף אותו; המצביעים עוצרים כשהם נפגשים. דוגמה: ב-\'abcbd\' הזוגות הם (a, d) ו-(b, b) ובאמצע c, ולכן התשובה 1.',
    },
    approach: [
      {
        en: 'Clarify: lowercase letters only, length up to 2 * 10^5, and one replacement changes a single character. Ask whether the resulting string is needed or only the count.',
        he: 'מבהירים: רק אותיות קטנות, אורך עד 2 * 10^5, והחלפה אחת משנה תו בודד. שואלים אם צריך את המחרוזת שמתקבלת או רק את המספר.',
      },
      {
        en: 'Brute force would try changing characters and recheck the palindrome property, which is exponential and clearly unnecessary.',
        he: 'כוח גס היה מנסה לשנות תווים ולבדוק שוב אם יש פלינדרום, וזה אקספוננציאלי ומיותר לגמרי.',
      },
      {
        en: 'Insight: only mirrored pairs (i, n-1-i) matter, and they are independent, so each mismatched pair costs exactly one.',
        he: 'התובנה: רק זוגות מראה (i, n-1-i) חשובים, והם בלתי תלויים, ולכן כל זוג לא תואם עולה בדיוק 1.',
      },
      {
        en: 'Algorithm: i = 0, j = n-1; while i < j, add one if s[i] != s[j], then move both pointers inward.',
        he: 'האלגוריתם: i = 0, ‏j = n-1; כל עוד i < j, מוסיפים 1 אם s[i] != s[j], ומקרבים את שני המצביעים.',
      },
      {
        en: 'Complexity: O(n) time, O(1) extra space.',
        he: 'סיבוכיות: זמן O(n), זיכרון נוסף O(1).',
      },
      {
        en: 'Test with \'a\' (0), \'aba\' (0), \'ab\' (1), \'abcbd\' (1), \'abdaa\' (1) and \'abcd\' (2).',
        he: 'בודקים עם \'a\' ‏(0), ‏\'aba\' ‏(0), ‏\'ab\' ‏(1), ‏\'abcbd\' ‏(1), ‏\'abdaa\' ‏(1) ו-\'abcd\' ‏(2).',
      },
    ],
    keyPoints: [
      {
        en: 'Argue optimality: each position belongs to exactly one mirrored pair, so one replacement can fix at most one mismatch.',
        he: 'להוכיח אופטימליות: כל מיקום שייך לזוג מראה אחד בדיוק, ולכן החלפה אחת מתקנת לכל היותר אי-התאמה אחת.',
      },
      {
        en: 'Do not confuse it with minimum insertions to make a palindrome, which is a different, DP-based problem (n minus the longest palindromic subsequence).',
        he: 'לא לבלבל עם מינימום הכנסות ליצירת פלינדרום, שזו בעיה אחרת עם DP (n פחות האורך של תת-הסדרה הפלינדרומית הארוכה ביותר).',
      },
      {
        en: 'Mention the middle character of an odd-length string is never counted.',
        he: 'לציין שהתו האמצעי במחרוזת באורך אי-זוגי אף פעם לא נספר.',
      },
      {
        en: 'In C or C++ with unsigned indexes, guard the empty string: len - 1 underflows.',
        he: 'ב-C או C++ עם אינדקסים unsigned צריך להגן על מחרוזת ריקה, כי len - 1 עושה underflow.',
      },
      {
        en: 'A natural follow-up: return the resulting palindrome too, choosing the smaller letter of each pair for the lexicographically smallest result.',
        he: 'שאלת המשך טבעית: להחזיר גם את הפלינדרום עצמו, ולבחור בכל זוג את האות הקטנה כדי לקבל את התוצאה הקטנה ביותר לקסיקוגרפית.',
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
      en: 'This is a greedy scheduling problem with a priority queue. First group the titles by artist into FIFO queues, which preserves each artist\'s original song order, and record each artist\'s first-appearance index. Push every artist into a max-heap ordered by remaining songs descending, then by first appearance ascending. Each step, pop the top artist. If it is the artist that just played and the heap still has someone else, pop the runner-up instead and push the first artist back unchanged. Play the chosen artist\'s next song, decrement its count and push it back if songs remain. When only the previous artist is left, the rule allows playing it again, which is exactly what happens when the heap holds just that artist.\nWith n songs and k artists, grouping is O(n) and each step is O(log k), so the total is O(n log k) time and O(n) space. Edge cases: a single artist plays in original order, and ties are broken by first appearance, so the output is deterministic.',
      he: 'זו בעיית תזמון חמדנית עם תור עדיפויות. קודם מקבצים את השירים לפי אמן לתורי FIFO, מה ששומר על הסדר המקורי של כל אמן, ורושמים לכל אמן את אינדקס ההופעה הראשונה שלו. דוחפים את כל האמנים ל-max-heap לפי מספר השירים שנותרו בסדר יורד, ואז לפי ההופעה הראשונה בסדר עולה. בכל צעד מוציאים את האמן שבראש. אם זה האמן שניגן הרגע ויש עוד מישהו ב-heap, מוציאים במקומו את הבא בתור ומחזירים את הראשון בלי שינוי. מנגנים את השיר הבא של האמן שנבחר, מקטינים את המונה שלו ומחזירים אותו ל-heap אם נשארו לו שירים. כשנשאר רק האמן הקודם, הכלל מרשה לנגן אותו שוב, וזה בדיוק מה שקורה כשב-heap יש רק אותו.\nעבור n שירים ו-k אמנים, הקיבוץ הוא O(n) וכל צעד O(log k), ולכן סך הכול זמן O(n log k) וזיכרון O(n). מקרי קצה: אמן יחיד מתנגן בסדר המקורי, ותיקו נשבר לפי ההופעה הראשונה, כך שהפלט דטרמיניסטי.',
    },
    approach: [
      {
        en: 'Clarify the rules on the example: what counts as a tie, that repeats are allowed only when one artist remains, and that each artist\'s songs keep their order.',
        he: 'מבהירים את הכללים על הדוגמה: מה נחשב תיקו, שחזרה מותרת רק כשנשאר אמן אחד, ושהשירים של כל אמן שומרים על הסדר שלהם.',
      },
      {
        en: 'Brute force: at every step scan all artists for the best eligible one, O(n * k), too slow when both are large.',
        he: 'כוח גס: בכל צעד סורקים את כל האמנים ומחפשים את המתאים ביותר, O(n * k), איטי מדי כששניהם גדולים.',
      },
      {
        en: 'Insight: we repeatedly need the maximum under a changing key, which is what a heap gives in O(log k), plus at most one extra pop to skip the previous artist.',
        he: 'התובנה: שוב ושוב צריך את המקסימום לפי מפתח שמשתנה, וזה בדיוק מה ש-heap נותן ב-O(log k), ועוד לכל היותר הוצאה נוספת אחת כדי לדלג על האמן הקודם.',
      },
      {
        en: 'Algorithm: group into per-artist queues, heapify (-count, firstSeen, artist), loop popping, swapping with the runner-up when needed, emitting a song and re-pushing with count - 1.',
        he: 'האלגוריתם: מקבצים לתורים לפי אמן, בונים heap של (-count, firstSeen, artist), ובלולאה מוציאים, מחליפים עם הבא בתור כשצריך, פולטים שיר ומחזירים עם count - 1.',
      },
      {
        en: 'Complexity: O(n log k) time, O(n) space for the queues and output.',
        he: 'סיבוכיות: זמן O(n log k), זיכרון O(n) לתורים ולפלט.',
      },
      {
        en: 'Test on the given example, on a single artist, on two artists with equal counts (checks the tie-break) and on one dominant artist (checks forced repeats at the end).',
        he: 'בודקים על הדוגמה הנתונה, על אמן יחיד, על שני אמנים עם מספר שירים שווה (בודק את שבירת התיקו) ועל אמן אחד דומיננטי (בודק חזרות כפויות בסוף).',
      },
    ],
    keyPoints: [
      {
        en: 'Recognise the pattern: it is the same greedy as \'reorganize string\' or \'task scheduler\', most remaining first, never the same twice in a row.',
        he: 'לזהות את התבנית: זה אותו אלגוריתם חמדני כמו reorganize string או task scheduler, הכי הרבה שנותרו קודם, אף פעם לא אותו אחד פעמיים ברצף.',
      },
      {
        en: 'The tie-break must be part of the heap key, as a tuple (-count, firstSeen), not handled after popping.',
        he: 'שבירת התיקו חייבת להיות חלק מהמפתח של ה-heap, כ-tuple ‏(-count, firstSeen), ולא טיפול אחרי ההוצאה.',
      },
      {
        en: 'Pushing the skipped top artist back unchanged is essential; forgetting it silently drops an artist.',
        he: 'חובה להחזיר את האמן שדילגנו עליו בלי שינוי; אם שוכחים, אמן שלם נעלם בשקט.',
      },
      {
        en: 'In Java a PriorityQueue does not re-sort when an element\'s key changes, so remove and re-add after the count changes.',
        he: 'ב-Java ה-PriorityQueue לא ממיין מחדש כשמפתח של איבר משתנה, ולכן מוציאים ומכניסים מחדש אחרי שהמונה משתנה.',
      },
      {
        en: 'Complexity is O(n log k), not O(n log n), because the heap holds artists, not songs.',
        he: 'הסיבוכיות היא O(n log k) ולא O(n log n), כי ה-heap מחזיק אמנים ולא שירים.',
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
      en: 'This is the 0/1 knapsack problem: each endpoint is an item with weight bandwidth[i] and value request[i], and the capacity is totalBandwidth. Define dp[w] as the most requests servable with at most w units. Start with all zeros, then for each endpoint iterate w from totalBandwidth down to bandwidth[i] and set dp[w] = max(dp[w], dp[w - bandwidth[i]] + request[i]). The answer is dp[totalBandwidth].\nIterating downward is what makes it 0/1: dp[w - bandwidth[i]] still holds the value from before this endpoint was considered, so no endpoint is counted twice. Iterating upward would turn it into the unbounded knapsack.\nTime is O(n * W), at most 100 * 100,000 = 10^7 updates here, and space is O(W) thanks to the one-dimensional table. Edge cases: an endpoint wider than the total never updates anything, and sums of up to 100 values of 10^9 overflow 32-bit integers, so the table must be 64-bit.',
      he: 'זו בעיית 0/1 knapsack: כל נקודת קצה היא פריט במשקל bandwidth[i] ובערך request[i], והקיבולת היא totalBandwidth. מגדירים dp[w] כמספר הבקשות המקסימלי שאפשר לשרת עם לכל היותר w יחידות. מתחילים מאפסים, ולכל נקודת קצה עוברים על w מ-totalBandwidth למטה עד bandwidth[i] ומעדכנים dp[w] = max(dp[w], dp[w - bandwidth[i]] + request[i]). התשובה היא dp[totalBandwidth].\nהמעבר מלמעלה למטה הוא מה שהופך את זה ל-0/1: ב-dp[w - bandwidth[i]] עדיין יושב הערך מלפני שהתחשבנו בנקודה הנוכחית, ולכן אף נקודה לא נספרת פעמיים. מעבר מלמטה למעלה היה הופך את זה ל-unbounded knapsack.\nזמן O(n * W), כאן לכל היותר 100 * 100,000 = 10^7 עדכונים, וזיכרון O(W) בזכות הטבלה החד-ממדית. מקרי קצה: נקודה שרחבה יותר מהסך הכולל אף פעם לא מעדכנת כלום, וסכום של עד 100 ערכים של 10^9 גולש מעבר ל-32 ביט, ולכן הטבלה חייבת להיות 64 ביט.',
    },
    approach: [
      {
        en: 'Clarify: each endpoint is all-or-nothing, the bandwidth used may be less than the total, and the result may exceed 32 bits.',
        he: 'מבהירים: כל נקודה היא הכול או כלום, מותר להשתמש בפחות מכל רוחב הפס, והתוצאה יכולה לעבור 32 ביט.',
      },
      {
        en: 'Brute force: try all 2^n subsets and keep the best that fits, impossible for n = 100.',
        he: 'כוח גס: לנסות את כל 2^n תתי-הקבוצות ולשמור את הטובה ביותר שנכנסת, בלתי אפשרי עבור n = 100.',
      },
      {
        en: 'Insight: the best value for capacity w using the first i items depends only on the first i-1 items at w and at w - bandwidth[i], so overlapping subproblems invite DP.',
        he: 'התובנה: הערך הטוב ביותר לקיבולת w עם i הפריטים הראשונים תלוי רק ב-i-1 הפריטים הראשונים בקיבולת w וב-w - bandwidth[i], כלומר יש תתי-בעיות חופפות ומתאים DP.',
      },
      {
        en: 'Algorithm: dp of size W+1 filled with 0; for each endpoint loop w from W down to bandwidth[i] applying the max update; return dp[W].',
        he: 'האלגוריתם: מערך dp בגודל W+1 מלא באפסים; לכל נקודה עוברים על w מ-W למטה עד bandwidth[i] ומעדכנים עם max; מחזירים dp[W].',
      },
      {
        en: 'Complexity: O(n * W) time, about 10^7 here, and O(W) space.',
        he: 'סיבוכיות: זמן O(n * W), כאן בערך 10^7, וזיכרון O(W).',
      },
      {
        en: 'Test both samples (763 and 230), a case where nothing fits (0), and the greedy counterexample to show the DP beats the ratio heuristic.',
        he: 'בודקים את שתי הדוגמאות (763 ו-230), מקרה שבו שום דבר לא נכנס (0), ואת הדוגמה הנגדית לחמדנות כדי להראות שה-DP מנצח את היוריסטיקת היחס.',
      },
    ],
    keyPoints: [
      {
        en: 'Name the problem as 0/1 knapsack immediately; it shows pattern recognition.',
        he: 'לזהות מיד שזו 0/1 knapsack; זה מראה זיהוי תבניות.',
      },
      {
        en: 'Explain why greedy by requests per unit fails for 0/1: capacity 10 with items (6, 7), (5, 5), (5, 5) gives 7 greedily but 10 optimally.',
        he: 'להסביר למה חמדני לפי בקשות ליחידה נכשל ב-0/1: קיבולת 10 עם פריטים (6, 7), ‏(5, 5), ‏(5, 5) נותן 7 בחמדנות אבל 10 באופטימום.',
      },
      {
        en: 'Explain the downward loop: it keeps each item used at most once in the rolled 1D array.',
        he: 'להסביר את הלולאה היורדת: היא מבטיחה שכל פריט נבחר לכל היותר פעם אחת במערך החד-ממדי.',
      },
      {
        en: 'O(n * W) is pseudo-polynomial: it depends on the numeric value of W, not its bit length.',
        he: 'O(n * W) היא סיבוכיות פסאודו-פולינומית: היא תלויה בערך המספרי של W ולא באורך שלו בביטים.',
      },
      {
        en: 'Use 64-bit accumulators; mention it before the interviewer asks.',
        he: 'להשתמש במשתנים של 64 ביט, ולהזכיר את זה לפני שהמראיין שואל.',
      },
      {
        en: 'Follow-up: to report which endpoints were chosen, keep the 2D table or a choice table and backtrack from dp[n][W].',
        he: 'שאלת המשך: כדי לדעת אילו נקודות נבחרו, שומרים טבלה דו-ממדית או טבלת בחירות וחוזרים אחורה מ-dp[n][W].',
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
      en: 'Adding one only affects the trailing run of 9s and the digit just before it. So in one pass find the rightmost node whose digit is not 9. Increment that node and set every node after it to 0, because those were all 9s that roll over. If no such node exists, every digit is 9: prepend a new head node holding 0, treat it as the rightmost non-9, and the same increment makes it 1 while the old nodes become 0, turning 99 into 100.\nThis works because the carry stops exactly at the first non-9 digit from the right, and in a singly linked list we cannot walk backwards, so remembering the last non-9 seen while walking forward replaces the backward walk.\nTime is O(n) and extra space is O(1): no reversal and no recursion stack. Edge cases: a single node 9 becomes 1 -> 0, a single node 0 becomes 1, and a number ending in a non-9 changes only its last node.',
      he: 'הוספת 1 משפיעה רק על רצף ה-9 בסוף ועל הספרה שלפניו. לכן במעבר אחד מוצאים את הצומת הימני ביותר שהספרה שלו אינה 9. מגדילים אותו ב-1 ומאפסים את כל הצמתים שאחריו, כי כולם היו 9 שמתגלגלים ל-0. אם אין צומת כזה, כל הספרות הן 9: מוסיפים ראש חדש עם 0, מתייחסים אליו כצומת הימני שאינו 9, ואותה הגדלה הופכת אותו ל-1 בזמן שהצמתים הישנים הופכים ל-0, כך ש-99 הופך ל-100.\nזה עובד כי הנשיאה נעצרת בדיוק בספרה הראשונה מימין שאינה 9, וברשימה חד-כיוונית אי אפשר ללכת אחורה, אז זכירת ה-non-9 האחרון בזמן ההליכה קדימה מחליפה את ההליכה אחורה.\nזמן O(n) וזיכרון נוסף O(1): בלי היפוך ובלי מחסנית רקורסיה. מקרי קצה: צומת יחיד 9 הופך ל-1 -> 0, צומת יחיד 0 הופך ל-1, ומספר שנגמר בספרה שאינה 9 משנה רק את הצומת האחרון.',
    },
    approach: [
      {
        en: 'Clarify: most significant digit first, digits 0 to 9, list non-empty, and whether modifying the list in place is allowed.',
        he: 'מבהירים: הספרה המשמעותית ראשונה, ספרות 0 עד 9, הרשימה לא ריקה, והאם מותר לשנות את הרשימה במקום.',
      },
      {
        en: 'Simple approach: reverse the list, add one with a carry from the head, reverse back. O(n) time, O(1) space, but three passes.',
        he: 'גישה פשוטה: הופכים את הרשימה, מוסיפים 1 עם carry מהראש, והופכים חזרה. זמן O(n), זיכרון O(1), אבל שלושה מעברים.',
      },
      {
        en: 'Insight: the carry propagates only through the trailing 9s, so the only node that really increments is the last non-9.',
        he: 'התובנה: ה-carry מתפשט רק דרך ה-9 שבסוף, ולכן הצומת היחיד שבאמת גדל הוא ה-non-9 האחרון.',
      },
      {
        en: 'Algorithm: walk once remembering the last non-9 node; if none, prepend a 0 node; increment it; zero every node after it; return the head.',
        he: 'האלגוריתם: עוברים פעם אחת וזוכרים את הצומת האחרון שאינו 9; אם אין, מוסיפים צומת 0 בהתחלה; מגדילים אותו; מאפסים את כל מה שאחריו; מחזירים את הראש.',
      },
      {
        en: 'Complexity: O(n) time, O(1) extra space.',
        he: 'סיבוכיות: זמן O(n), זיכרון נוסף O(1).',
      },
      {
        en: 'Walk through 1 -> 2 -> 9 (expect 1 -> 3 -> 0), 9 -> 9 (expect 1 -> 0 -> 0) and a single 0 (expect 1).',
        he: 'עוברים על 1 -> 2 -> 9 (מצפים ל-1 -> 3 -> 0), על 9 -> 9 (מצפים ל-1 -> 0 -> 0) ועל 0 בודד (מצפים ל-1).',
      },
    ],
    keyPoints: [
      {
        en: 'Mention the alternatives and their cost: reverse, add, reverse back (O(1) space but two extra passes and mutates links), or recursion returning the carry (O(n) stack).',
        he: 'להזכיר חלופות והמחיר שלהן: היפוך, הוספה והיפוך חזרה (זיכרון O(1) אבל עוד שני מעברים ושינוי מצביעים), או רקורסיה שמחזירה carry (מחסנית O(n)).',
      },
      {
        en: 'Converting to an integer and back is wrong: the list can represent a number far larger than 64 bits.',
        he: 'המרה למספר שלם וחזרה היא טעות: הרשימה יכולה לייצג מספר גדול בהרבה מ-64 ביט.',
      },
      {
        en: 'The all-9s case is the one interviewers check: a new head must be allocated and returned.',
        he: 'המקרה של כל ה-9 הוא מה שהמראיינים בודקים: צריך להקצות ראש חדש ולהחזיר אותו.',
      },
      {
        en: 'The sentinel trick (a dummy 0 node in front) unifies the all-9s case with the normal one.',
        he: 'טריק ה-sentinel (צומת דמה 0 בהתחלה) מאחד את המקרה של כל ה-9 עם המקרה הרגיל.',
      },
      {
        en: 'For verification roles, list the test vectors explicitly: [0], [9], [1,2,9], [9,9], [1,9,9,9], [1,2,3].',
        he: 'בתפקידי verification כדאי לפרט את וקטורי הבדיקה במפורש: ‏[0], ‏[9], ‏[1,2,9], ‏[9,9], ‏[1,9,9,9], ‏[1,2,3].',
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
      en: 'The trick is to never actually write to every cell. Keep a logical clock that increases on every write. Each cell stores its value plus the clock value of its last set. setAll stores its value and the current clock in one global slot. get(i) compares the cell\'s stamp with the setAll stamp: whichever write happened later wins, so if the setAll stamp is greater, return the setAll value, otherwise the cell\'s own value.\nThis is correct because the clock gives a total order of all writes, and the value of a cell is by definition its most recent write, whether that was an individual set or a setAll.\nEvery operation touches a constant number of fields, so set, get and setAll are all O(1), with O(n) memory for the values and stamps arrays. Edge cases: before any write both stamps are 0 and get returns the initial value; repeated setAll calls simply overwrite the global slot; a set after setAll correctly overrides only its own index.',
      he: 'הטריק הוא לא לכתוב באמת לכל תא. מחזיקים שעון לוגי שגדל בכל כתיבה. כל תא שומר את הערך שלו ואת ערך השעון של ה-set האחרון שלו. setAll שומר את הערך שלו ואת השעון הנוכחי במשבצת גלובלית אחת. get(i) משווה את חותמת התא לחותמת של setAll: הכתיבה המאוחרת יותר מנצחת, כלומר אם החותמת של setAll גדולה יותר מחזירים את ערך ה-setAll, ואחרת את ערך התא.\nזה נכון כי השעון נותן סדר מלא על כל הכתיבות, והערך של תא הוא לפי ההגדרה הכתיבה האחרונה אליו, בין אם זו הייתה set בודד ובין אם setAll.\nכל פעולה נוגעת במספר קבוע של שדות, ולכן set, ‏get ו-setAll כולן O(1), עם זיכרון O(n) למערכי הערכים והחותמות. מקרי קצה: לפני כל כתיבה שתי החותמות 0 ו-get מחזיר את הערך ההתחלתי; קריאות חוזרות ל-setAll פשוט דורסות את המשבצת הגלובלית; set אחרי setAll דורס נכון רק את התא שלו.',
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
        en: 'Insight: get only needs to know which write to this cell was last; recording when each write happened answers that without touching other cells.',
        he: 'התובנה: get צריך רק לדעת איזו כתיבה לתא הזה הייתה האחרונה; אם רושמים מתי כל כתיבה קרתה, אפשר לענות על זה בלי לגעת בשאר התאים.',
      },
      {
        en: 'Algorithm: clock++ on each write; set stores value and stamp per cell; setAll stores value and stamp globally; get returns the global value if its stamp is newer.',
        he: 'האלגוריתם: clock++ בכל כתיבה; set שומר ערך וחותמת לתא; setAll שומר ערך וחותמת גלובליים; get מחזיר את הערך הגלובלי אם החותמת שלו חדשה יותר.',
      },
      {
        en: 'Complexity: O(1) per operation, O(n) space.',
        he: 'סיבוכיות: O(1) לכל פעולה, זיכרון O(n).',
      },
      {
        en: 'Trace the example: set(0,5), setAll(7), set(1,9), then get(0)=7, get(1)=9, get(2)=7; also test get before any write and two setAll calls in a row.',
        he: 'עוקבים אחרי הדוגמה: set(0,5), ‏setAll(7), ‏set(1,9), ואז get(0)=7, ‏get(1)=9, ‏get(2)=7; ובודקים גם get לפני כל כתיבה ושתי קריאות setAll ברצף.',
      },
    ],
    keyPoints: [
      {
        en: 'Say the general idea out loud: lazy evaluation with timestamps, comparing versions instead of copying data.',
        he: 'להגיד את הרעיון הכללי בקול: lazy evaluation עם חותמות זמן, השוואת גרסאות במקום העתקת נתונים.',
      },
      {
        en: 'Use a strictly increasing counter, not wall-clock time: two writes in the same millisecond would tie.',
        he: 'להשתמש במונה שעולה בקפידה ולא בשעון אמיתי: שתי כתיבות באותה מילישנייה ייצאו בתיקו.',
      },
      {
        en: 'Counter overflow: a 32-bit clock wraps after about 2.1 billion writes, so use 64 bits in a long-running system.',
        he: 'גלישת מונה: שעון של 32 ביט מתגלגל אחרי בערך 2.1 מיליארד כתיבות, ולכן במערכת שרצה הרבה זמן משתמשים ב-64 ביט.',
      },
      {
        en: 'An alternative is a hash map of overrides cleared on setAll, but clearing is not O(1) in every language; replacing the map object is.',
        he: 'חלופה היא hash map של דריסות שמתנקה ב-setAll, אבל ניקוי הוא לא O(1) בכל שפה; החלפת אובייקט ה-map כן.',
      },
      {
        en: 'Follow-ups: add increment-all, or make it thread-safe, where the clock increment and the write must be atomic together.',
        he: 'שאלות המשך: להוסיף increment לכל האיברים, או להפוך את המבנה ל-thread-safe, ואז ההגדלה של השעון והכתיבה חייבות להיות אטומיות יחד.',
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
      en: 'Use a greedy walk over a 13-row table ordered from largest to smallest: 1000 M, 900 CM, 500 D, 400 CD, 100 C, 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I. For each row, while the number is at least the value, append the symbol and subtract the value.\nGreedy is correct here because the six subtractive forms are included as their own rows, so the largest symbol that fits is always the right next symbol in canonical Roman notation. Without those rows, greedy would produce IIII instead of IV.\nThe input is bounded by 3999, so the table has a fixed size and the output is at most 15 characters, which makes the algorithm O(1) in practice; in general terms it is linear in the output length. Example: 1994 gives M, leaving 994, then CM leaving 94, XC leaving 4, IV leaving 0, so MCMXCIV. Edge cases: 1 is I, 3999 is MMMCMXCIX, and there is no Roman numeral for 0.',
      he: 'עוברים בצורה חמדנית על טבלה של 13 שורות מהגדול לקטן: 1000 M, ‏900 CM, ‏500 D, ‏400 CD, ‏100 C, ‏90 XC, ‏50 L, ‏40 XL, ‏10 X, ‏9 IX, ‏5 V, ‏4 IV, ‏1 I. לכל שורה, כל עוד המספר גדול או שווה לערך, מוסיפים את הסימן ומחסרים את הערך.\nהחמדנות נכונה כאן כי שש הצורות החיסוריות נמצאות בטבלה כשורות בפני עצמן, ולכן הסימן הגדול ביותר שנכנס הוא תמיד הסימן הבא הנכון בכתיב הרומי הקנוני. בלי השורות האלה החמדני היה מייצר IIII במקום IV.\nהקלט חסום ב-3999, ולכן הטבלה בגודל קבוע והפלט הוא לכל היותר 15 תווים, כך שבפועל האלגוריתם O(1); באופן כללי הוא לינארי באורך הפלט. דוגמה: 1994 נותן M ונשאר 994, אחר כך CM ונשאר 94, ‏XC ונשאר 4, ‏IV ונשאר 0, ולכן MCMXCIV. מקרי קצה: 1 הוא I, ‏3999 הוא MMMCMXCIX, ואין ספרה רומית ל-0.',
    },
    approach: [
      {
        en: 'Clarify the range (1 to 3999), that the standard subtractive form is expected, and whether invalid input must be handled.',
        he: 'מבהירים את הטווח (1 עד 3999), שמצופה הכתיב החיסורי הסטנדרטי, והאם צריך לטפל בקלט לא תקין.',
      },
      {
        en: 'A first attempt with only the seven basic symbols fails on 4, 9, 40 and so on, unless you add special cases per digit.',
        he: 'ניסיון ראשון עם שבעת הסימנים הבסיסיים בלבד נכשל ב-4, ‏9, ‏40 וכן הלאה, אלא אם מוסיפים מקרים מיוחדים לכל ספרה.',
      },
      {
        en: 'Insight: put the six subtractive forms into the table as values of their own, and greedy becomes correct.',
        he: 'התובנה: מכניסים את שש הצורות החיסוריות לטבלה כערכים בפני עצמם, ואז החמדנות נכונה.',
      },
      {
        en: 'Algorithm: for each (value, symbol) from largest to smallest, while number >= value append the symbol and subtract.',
        he: 'האלגוריתם: לכל (value, symbol) מהגדול לקטן, כל עוד number >= value מוסיפים את הסימן ומחסרים.',
      },
      {
        en: 'Complexity: O(1) because the table and the output length are bounded.',
        he: 'סיבוכיות: O(1), כי הטבלה ואורך הפלט חסומים.',
      },
      {
        en: 'Test 1 (I), 4 (IV), 9 (IX), 58 (LVIII), 1994 (MCMXCIV) and 3999 (MMMCMXCIX).',
        he: 'בודקים 1 ‏(I), ‏4 ‏(IV), ‏9 ‏(IX), ‏58 ‏(LVIII), ‏1994 ‏(MCMXCIV) ו-3999 ‏(MMMCMXCIX).',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why greedy works: the subtractive pairs are in the table, so no case needs lookahead.',
        he: 'להסביר למה החמדנות עובדת: הזוגות החיסוריים נמצאים בטבלה, ולכן אף מקרה לא צריך להסתכל קדימה.',
      },
      {
        en: 'Alternative: four lookup arrays for thousands, hundreds, tens and ones digits, then concatenate. Also O(1) and branch-free.',
        he: 'חלופה: ארבעה מערכי lookup לספרת האלפים, המאות, העשרות והאחדות, ואז שרשור. גם זה O(1) ובלי תנאים.',
      },
      {
        en: 'Know the bounds: valid input is 1 to 3999 and the longest output is MMMDCCCLXXXVIII, 15 characters, which matters for a C buffer.',
        he: 'להכיר את הגבולות: קלט תקין הוא 1 עד 3999 והפלט הארוך ביותר הוא MMMDCCCLXXXVIII, ‏15 תווים, וזה חשוב לגודל buffer ב-C.',
      },
      {
        en: 'Validate input: reject 0, negatives and values above 3999 rather than returning garbage.',
        he: 'לוודא קלט: לדחות 0, מספרים שליליים וערכים מעל 3999 במקום להחזיר זבל.',
      },
      {
        en: 'Common follow-up: Roman to integer, scanning and subtracting a symbol when it is smaller than the one after it.',
        he: 'שאלת המשך נפוצה: המרה מרומי למספר, סורקים ומחסרים סימן כשהוא קטן מהסימן שאחריו.',
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
      en: 'Store, for every key, a list of (timestamp, value) entries in the order they were set. Because set is called with strictly increasing timestamps, appending keeps each list sorted for free, so set is an O(1) amortized append.\nFor get(key, t), binary search that key\'s timestamps for the last one that is less than or equal to t. With bisect_right you get the number of stored timestamps that are at most t; if it is 0, nothing existed yet and you return the empty string, otherwise return the value at index count - 1.\nThis works because the latest value at time t is by definition the entry with the greatest timestamp not after t, and a sorted list lets binary search find it in O(log m), where m is the number of versions of that key. Space is O(total sets). Edge cases: an unknown key returns empty, a time before the first set returns empty, a time after the last set returns the newest value, and an exact timestamp match returns that entry.',
      he: 'לכל מפתח שומרים רשימה של רשומות (timestamp, value) לפי סדר ההכנסה. מכיוון ש-set נקרא עם חותמות זמן שעולות בקפידה, הוספה לסוף משאירה כל רשימה ממוינת בחינם, ולכן set הוא append ב-O(1) amortized.\nב-get(key, t) עושים חיפוש בינארי על חותמות הזמן של המפתח ומחפשים את האחרונה שקטנה או שווה ל-t. עם bisect_right מקבלים כמה חותמות שמורות קטנות או שוות ל-t; אם זה 0, עוד לא היה כלום ומחזירים מחרוזת ריקה, ואחרת מחזירים את הערך באינדקס count - 1.\nזה עובד כי הערך העדכני בזמן t הוא לפי ההגדרה הרשומה עם חותמת הזמן הגדולה ביותר שאינה אחרי t, ורשימה ממוינת מאפשרת לחיפוש בינארי למצוא אותה ב-O(log m), כאשר m הוא מספר הגרסאות של המפתח. זיכרון O(סך כל ה-set). מקרי קצה: מפתח לא קיים מחזיר ריק, זמן לפני ה-set הראשון מחזיר ריק, זמן אחרי ה-set האחרון מחזיר את הערך החדש ביותר, והתאמה מדויקת לחותמת מחזירה את הרשומה הזאת.',
    },
    approach: [
      {
        en: 'Clarify: are set timestamps increasing, what to return for a missing key or an early time, and whether the same timestamp can be set twice.',
        he: 'מבהירים: האם חותמות הזמן של set עולות, מה מחזירים למפתח חסר או לזמן מוקדם, והאם אותה חותמת יכולה להיות מוגדרת פעמיים.',
      },
      {
        en: 'Brute force: keep the entries per key and scan them linearly in get, O(m) per query.',
        he: 'כוח גס: שומרים את הרשומות לכל מפתח וסורקים אותן לינארית ב-get, ‏O(m) לכל שאילתה.',
      },
      {
        en: 'Insight: the per-key list is already sorted by time, so the floor search is a binary search.',
        he: 'התובנה: הרשימה של כל מפתח כבר ממוינת לפי זמן, ולכן חיפוש ה-floor הוא חיפוש בינארי.',
      },
      {
        en: 'Algorithm: a dict from key to parallel lists of times and values; set appends to both; get uses bisect_right and returns values[i-1] or empty.',
        he: 'האלגוריתם: dict ממפתח לשתי רשימות מקבילות של זמנים וערכים; set מוסיף לשתיהן; get משתמש ב-bisect_right ומחזיר values[i-1] או ריק.',
      },
      {
        en: 'Complexity: set O(1) amortized, get O(log m), space O(total sets).',
        he: 'סיבוכיות: set ב-O(1) amortized, ‏get ב-O(log m), זיכרון O(סך כל ה-set).',
      },
      {
        en: 'Walk the example: after set a=x at 1 and a=y at 3, get at 0, 1, 2, 3 and 5 should give empty, x, x, y, y; also try an unknown key.',
        he: 'עוברים על הדוגמה: אחרי set של a=x בזמן 1 ו-a=y בזמן 3, ‏get בזמנים 0, ‏1, ‏2, ‏3 ו-5 צריך להחזיר ריק, x, ‏x, ‏y, ‏y; ובודקים גם מפתח לא קיים.',
      },
    ],
    keyPoints: [
      {
        en: 'Point out that the strictly increasing timestamps are what make append enough; without that guarantee you need a sorted structure.',
        he: 'לציין שחותמות הזמן העולות בקפידה הן מה שמאפשר להסתפק ב-append; בלי ההבטחה הזאת צריך מבנה ממוין.',
      },
      {
        en: 'Name the language tools: bisect_right in Python, upper_bound in C++, and TreeMap.floorEntry in Java for the general unsorted-insert case.',
        he: 'להכיר את כלי השפה: bisect_right ב-Python, ‏upper_bound ב-C++, ו-TreeMap.floorEntry ב-Java למקרה הכללי שבו ההכנסות לא ממוינות.',
      },
      {
        en: 'Get the off-by-one right: bisect_right, not bisect_left, so that an exact timestamp match is included.',
        he: 'לדייק ב-off-by-one: bisect_right ולא bisect_left, כדי שהתאמה מדויקת לחותמת תיכלל.',
      },
      {
        en: 'Relate it to real systems: this is multi-version storage, the same idea behind MVCC snapshots and versioned config stores.',
        he: 'לקשר למערכות אמיתיות: זה אחסון רב-גרסתי, אותו רעיון שעומד מאחורי snapshots של MVCC ומאגרי קונפיגורציה עם גרסאות.',
      },
      {
        en: 'Follow-up: memory grows forever, so discuss a retention policy that drops versions older than some horizon.',
        he: 'שאלת המשך: הזיכרון גדל בלי סוף, ולכן מדברים על מדיניות שמירה שמוחקת גרסאות ישנות מאופק מסוים.',
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
      en: 'Make a single pass from index 1, keeping just two pieces of state: the previous reading and the length of the current run of equal values. At each index, update the run (increment if the value equals the previous one, otherwise reset to 1), then evaluate three conditions: the run length is exactly 3; the current value is 0 and the previous is not; the previous value is not 0 and the absolute difference exceeds 50% of the absolute previous value. If any of them holds, append the index once, which naturally avoids duplicates when several rules fire.\nTime is O(n) and extra space is O(1) besides the output.\nThe edge cases are the real test, so state the assumptions: a previous value of 0 makes the percentage undefined, so the jump rule is skipped; a run longer than three is reported only once, at its third element; an empty list or a single reading yields no anomalies; and with floating-point readings the equality check is exact, which you might replace with a tolerance.',
      he: 'עושים מעבר אחד מאינדקס 1, ושומרים רק שני דברים: הקריאה הקודמת ואורך הרצף הנוכחי של ערכים שווים. בכל אינדקס מעדכנים את הרצף (מגדילים אם הערך שווה לקודם, ואחרת מאפסים ל-1), ואז בודקים שלושה תנאים: אורך הרצף בדיוק 3; הערך הנוכחי 0 והקודם לא; הערך הקודם אינו 0 וההפרש המוחלט גדול מ-50% מהערך המוחלט של הקודם. אם אחד מהם מתקיים, מוסיפים את האינדקס פעם אחת, וכך באופן טבעי אין כפילויות כשכמה כללים מתקיימים.\nזמן O(n) וזיכרון נוסף O(1) מלבד הפלט.\nמקרי הקצה הם המבחן האמיתי, ולכן אומרים את ההנחות בקול: ערך קודם 0 הופך את האחוז ללא מוגדר, ולכן מדלגים על כלל הקפיצה; רצף ארוך משלוש מדווח פעם אחת בלבד, באיבר השלישי; רשימה ריקה או קריאה בודדת לא מחזירות חריגות; ובקריאות float בדיקת השוויון מדויקת, ואפשר להחליף אותה בסבילות.',
    },
    approach: [
      {
        en: 'Clarify ambiguities first: a run longer than three, a previous value of 0, whether 50% is strict, negative readings and duplicate reports.',
        he: 'קודם מבהירים את העמימויות: רצף ארוך משלוש, ערך קודם 0, האם 50% הוא אי-שוויון חזק, קריאות שליליות ודיווחים כפולים.',
      },
      {
        en: 'A naive version checks each rule in its own loop and merges the results with a set, O(n) but clumsy and easy to get wrong.',
        he: 'גרסה נאיבית בודקת כל כלל בלולאה נפרדת וממזגת את התוצאות עם set, ‏O(n) אבל מסורבל וקל לטעות.',
      },
      {
        en: 'Insight: every rule depends only on the previous value and the run length, so one pass with constant state suffices.',
        he: 'התובנה: כל כלל תלוי רק בערך הקודם ובאורך הרצף, ולכן מספיק מעבר אחד עם מצב קבוע.',
      },
      {
        en: 'Algorithm: run = 1; for i from 1, update run, compute the three booleans, append i if any is true.',
        he: 'האלגוריתם: run = 1; לכל i מ-1, מעדכנים את run, מחשבים את שלושת הבוליאנים, ומוסיפים את i אם אחד מהם true.',
      },
      {
        en: 'Complexity: O(n) time, O(1) extra space.',
        he: 'סיבוכיות: זמן O(n), זיכרון נוסף O(1).',
      },
      {
        en: 'Test the given example ([2, 4, 6]), an empty list, a list of all zeros, a long run of equal values, and negative readings.',
        he: 'בודקים את הדוגמה הנתונה ‏([2, 4, 6]), רשימה ריקה, רשימה של אפסים בלבד, רצף ארוך של ערכים שווים, וקריאות שליליות.',
      },
    ],
    keyPoints: [
      {
        en: 'Guard the division by zero explicitly; it is the first thing a verification or QA interviewer checks.',
        he: 'להגן במפורש על חלוקה באפס; זה הדבר הראשון שמראיין verification או QA בודק.',
      },
      {
        en: 'Use abs on both the difference and the previous value so negative readings behave correctly.',
        he: 'להשתמש ב-abs גם על ההפרש וגם על הערך הקודם, כדי שקריאות שליליות יתנהגו נכון.',
      },
      {
        en: 'Evaluate all rules, then append once: an OR of conditions avoids duplicate indices without a set.',
        he: 'לבדוק את כל הכללים ואז להוסיף פעם אחת: OR של התנאים מונע אינדקסים כפולים בלי set.',
      },
      {
        en: 'Comparing floats with == is fragile; mention a tolerance such as abs(a - b) < eps for real sensor data.',
        he: 'השוואת float עם == שבירה; כדאי להזכיר סבילות כמו abs(a - b) < eps לנתוני סנסור אמיתיים.',
      },
      {
        en: 'Structure the rules as separate small predicates so new anomaly types can be added and unit tested individually.',
        he: 'לבנות את הכללים כפונקציות קטנות ונפרדות, כדי שאפשר יהיה להוסיף סוגי חריגות חדשים ולבדוק כל אחד ב-unit test.',
      },
      {
        en: 'Follow-up for streaming: the same state machine works on an unbounded stream because it only needs the previous reading.',
        he: 'שאלת המשך על streaming: אותה מכונת מצבים עובדת על זרם אינסופי, כי היא צריכה רק את הקריאה הקודמת.',
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
      en: 'Combine a hash map with a doubly linked list. The list holds the entries in recency order, most recent at the front and least recent at the back; the map goes from key to that key\'s list node.\nget(key): look up the node in the map, return -1 if missing; otherwise unlink it and move it to the front, then return its value. put(key, value): if the key exists, update the value and move it to the front; otherwise insert a new node at the front and add it to the map, and if the size now exceeds capacity, remove the back node and delete its key from the map.\nEverything is O(1): the map finds a node in O(1) average time, and the doubly linked list can unlink any node and splice it to the front in O(1) because it has prev and next pointers. Space is O(capacity). Each node stores its key so eviction can remove it from the map. In practice Python\'s OrderedDict, Java\'s LinkedHashMap with access order and C++ std::list::splice give this structure directly.',
      he: 'משלבים hash map עם רשימה מקושרת דו-כיוונית. הרשימה מחזיקה את הרשומות לפי סדר השימוש, החדש ביותר בראש והישן ביותר בסוף; ה-map ממפה ממפתח לצומת שלו ברשימה.\nget(key): מחפשים את הצומת ב-map, ומחזירים -1 אם הוא לא קיים; אחרת מנתקים אותו ומעבירים לראש, ומחזירים את הערך. put(key, value): אם המפתח קיים, מעדכנים את הערך ומעבירים לראש; אחרת מכניסים צומת חדש בראש ומוסיפים אותו ל-map, ואם הגודל עבר את הקיבולת, מוציאים את הצומת שבסוף ומוחקים את המפתח שלו מה-map.\nהכול O(1): ה-map מוצא צומת ב-O(1) בממוצע, והרשימה הדו-כיוונית יכולה לנתק כל צומת ולהעביר אותו לראש ב-O(1), כי יש לה מצביעי prev ו-next. זיכרון O(capacity). כל צומת שומר גם את המפתח שלו, כדי שבזמן eviction אפשר יהיה למחוק אותו מה-map. בפועל, OrderedDict ב-Python, ‏LinkedHashMap עם access order ב-Java ו-std::list::splice ב-C++ נותנים את המבנה הזה ישירות.',
    },
    approach: [
      {
        en: 'Clarify: capacity at least 1, what get returns on a miss, and that both get and put count as a use.',
        he: 'מבהירים: קיבולת לפחות 1, מה get מחזיר כשאין פגיעה, ושגם get וגם put נחשבים שימוש.',
      },
      {
        en: 'Naive: a map plus a timestamp per key and a scan for the oldest on eviction, O(n) per put; or a plain list, O(n) per get.',
        he: 'נאיבי: map עם חותמת זמן לכל מפתח וסריקה לחיפוש הישן ביותר בזמן eviction, ‏O(n) לכל put; או רשימה רגילה, ‏O(n) לכל get.',
      },
      {
        en: 'Insight: we need O(1) lookup by key and O(1) reordering, so pair a hash map with a doubly linked list whose nodes the map points to.',
        he: 'התובנה: צריך חיפוש לפי מפתח ב-O(1) ושינוי סדר ב-O(1), ולכן מצמידים hash map לרשימה דו-כיוונית שה-map מצביע על הצמתים שלה.',
      },
      {
        en: 'Algorithm: get moves the node to the front; put updates or inserts at the front and evicts the tail when over capacity, removing its key from the map.',
        he: 'האלגוריתם: get מעביר את הצומת לראש; put מעדכן או מכניס בראש, וכשחורגים מהקיבולת מוציא את הזנב ומוחק את המפתח שלו מה-map.',
      },
      {
        en: 'Complexity: O(1) average for both operations, O(capacity) space.',
        he: 'סיבוכיות: O(1) בממוצע לשתי הפעולות, זיכרון O(capacity).',
      },
      {
        en: 'Trace the example with capacity 2: put 1, put 2, get 1, put 3 evicts 2, so get 2 is -1 and get 3 is 3; also test updating an existing key and capacity 1.',
        he: 'עוקבים אחרי הדוגמה עם קיבולת 2: put 1, ‏put 2, ‏get 1, ‏put 3 מוציא את 2, ולכן get 2 מחזיר -1 ו-get 3 מחזיר 3; ובודקים גם עדכון של מפתח קיים וקיבולת 1.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why each half is needed: the map alone has no order, the list alone needs O(n) to find a key.',
        he: 'להסביר למה צריך כל חלק: ה-map לבד לא שומר סדר, והרשימה לבד צריכה O(n) כדי למצוא מפתח.',
      },
      {
        en: 'Sentinel head and tail nodes remove the null checks for an empty list and for the first and last nodes.',
        he: 'צמתי sentinel בראש ובזנב מבטלים בדיקות null לרשימה ריקה ולצומת הראשון והאחרון.',
      },
      {
        en: 'Store the key inside the node; without it you cannot delete the evicted entry from the map.',
        he: 'לשמור את המפתח בתוך הצומת; בלעדיו אי אפשר למחוק את הרשומה שהוצאה מה-map.',
      },
      {
        en: 'put on an existing key must update and refresh recency without evicting anything.',
        he: 'put על מפתח קיים צריך לעדכן ולרענן את סדר השימוש בלי להוציא שום דבר.',
      },
      {
        en: 'Follow-ups: thread safety (a lock around both structures, or sharding), LFU instead of LRU, and TTL expiry.',
        he: 'שאלות המשך: thread safety (נעילה סביב שני המבנים, או חלוקה ל-shards), ‏LFU במקום LRU, ותפוגה עם TTL.',
      },
      {
        en: 'Real-world anchor: CPU caches, OS page replacement approximations and Redis\'s allkeys-lru eviction policy.',
        he: 'עוגן מהעולם האמיתי: מטמוני CPU, קירובים של החלפת דפים במערכת ההפעלה, ומדיניות ה-eviction ‏allkeys-lru ב-Redis.',
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
      en: 'Use a stack, because brackets must close in last-opened, first-closed order. Scan left to right. Push every opening bracket. On a closing bracket, the stack must be non-empty and its top must be the matching opener; pop it, or return false immediately if either check fails. At the end the string is valid only if the stack is empty, since anything left is an unclosed opener.\nA small map from each closer to its opener keeps the matching check to one lookup.\nThis is correct because the most recently opened unclosed bracket is exactly the one the next closer must match, and the stack top always holds it. Time is O(n) and space is O(n) in the worst case, for example a string of only openers. Edge cases: the empty string is valid; a closer on an empty stack, as in \')(\' , is invalid; leftover openers, as in \'((\' , are invalid; and interleaving such as \'([)]\' fails at the mismatched pop.',
      he: 'משתמשים במחסנית, כי סוגריים צריכים להיסגר בסדר של האחרון שנפתח נסגר ראשון. סורקים משמאל לימין. כל סוגר פותח נדחף. בסוגר סוגר, המחסנית חייבת להיות לא ריקה והראש שלה חייב להיות הפותח המתאים; מוציאים אותו, או מחזירים false מיד אם אחת הבדיקות נכשלת. בסוף המחרוזת תקינה רק אם המחסנית ריקה, כי כל מה שנשאר הוא פותח שלא נסגר.\nמפה קטנה מכל סוגר לפותח שלו הופכת את בדיקת ההתאמה לחיפוש אחד.\nזה נכון כי הסוגר שנפתח אחרון ועדיין לא נסגר הוא בדיוק זה שהסוגר הבא חייב להתאים לו, וראש המחסנית תמיד מחזיק אותו. זמן O(n) וזיכרון O(n) במקרה הגרוע, למשל מחרוזת של פותחים בלבד. מקרי קצה: מחרוזת ריקה תקינה; סוגר על מחסנית ריקה, כמו ב-\')(\' , לא תקין; פותחים שנשארו, כמו ב-\'((\' , לא תקין; ושזירה כמו \'([)]\' נכשלת ב-pop שלא מתאים.',
    },
    approach: [
      {
        en: 'Clarify: only the six bracket characters, the empty string counts as valid, and whether other characters may appear.',
        he: 'מבהירים: רק ששת תווי הסוגריים, מחרוזת ריקה נחשבת תקינה, והאם יכולים להופיע תווים אחרים.',
      },
      {
        en: 'Brute force: repeatedly delete adjacent pairs \'()\', \'[]\', \'{}\' until nothing changes, O(n^2).',
        he: 'כוח גס: מוחקים שוב ושוב זוגות סמוכים \'()\', ‏\'[]\', ‏\'{}\' עד שאין שינוי, ‏O(n^2).',
      },
      {
        en: 'Insight: the closer must match the most recent unmatched opener, which is last-in, first-out, so use a stack.',
        he: 'התובנה: הסוגר צריך להתאים לפותח האחרון שעדיין לא הותאם, וזה last-in, first-out, ולכן מחסנית.',
      },
      {
        en: 'Algorithm: push openers; on a closer, fail if the stack is empty or the popped opener does not match; return whether the stack is empty.',
        he: 'האלגוריתם: דוחפים פותחים; בסוגר, נכשלים אם המחסנית ריקה או שהפותח שהוצא לא מתאים; מחזירים האם המחסנית ריקה.',
      },
      {
        en: 'Complexity: O(n) time, O(n) space.',
        he: 'סיבוכיות: זמן O(n), זיכרון O(n).',
      },
      {
        en: 'Test \'\' (true), \'()[]{}\' (true), \'{[]}\' (true), \'([)]\' (false), \']\' (false) and \'((\' (false).',
        he: 'בודקים \'\' ‏(true), ‏\'()[]{}\' ‏(true), ‏\'{[]}\' ‏(true), ‏\'([)]\' ‏(false), ‏\']\' ‏(false) ו-\'((\' ‏(false).',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why a simple counter is not enough with three bracket types: \'([)]\' has balanced counts but is invalid.',
        he: 'להסביר למה מונה פשוט לא מספיק עם שלושה סוגי סוגריים: ב-\'([)]\' הספירות מאוזנות אבל המחרוזת לא תקינה.',
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
        he: 'יציאה מוקדמת: מחרוזת באורך אי-זוגי אף פעם לא יכולה להיות תקינה.',
      },
      {
        en: 'Real-world link: compilers, JSON and XML parsers and editor bracket matching all use this stack idea.',
        he: 'קשר לעולם האמיתי: קומפיילרים, ‏parsers של JSON ו-XML והתאמת סוגריים בעורכים משתמשים כולם ברעיון המחסנית הזה.',
      },
      {
        en: 'Follow-up: with other characters mixed in, simply skip non-bracket characters.',
        he: 'שאלת המשך: אם יש תווים אחרים במחרוזת, פשוט מדלגים על כל מה שאינו סוגר.',
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
      en: 'Sort the intervals by start time, then sweep once. Keep the last merged interval in the output list. For each next interval, if its start is less than or equal to the last merged end, they overlap, so extend the end to the maximum of the two ends; otherwise there is a gap, so append it as a new merged interval.\nThis works because after sorting, any interval that overlaps the current merged block must come right after it: an interval that starts later than the current end cannot overlap it, and neither can anything after it, since starts only grow.\nTime is O(n log n) for the sort plus O(n) for the sweep; space is O(n) for the output, plus whatever the sort uses. Edge cases: touching intervals like [1,4] and [4,5] merge because of the less-or-equal check; a nested interval such as [2,3] inside [1,10] must not shrink the end, which is why max is required; an empty input returns an empty list; and a single interval is returned as is.',
      he: 'ממיינים את המקטעים לפי זמן ההתחלה, ואז עוברים פעם אחת. שומרים את המקטע הממוזג האחרון ברשימת הפלט. לכל מקטע הבא, אם ה-start שלו קטן או שווה ל-end של הממוזג האחרון, הם חופפים, ולכן מרחיבים את ה-end למקסימום של שני ה-end; אחרת יש רווח, ולכן מוסיפים אותו כמקטע ממוזג חדש.\nזה עובד כי אחרי המיון, כל מקטע שחופף לבלוק הממוזג הנוכחי חייב להופיע מיד אחריו: מקטע שמתחיל אחרי ה-end הנוכחי לא יכול לחפוף לו, וגם לא שום מקטע שאחריו, כי ה-start רק גדל.\nזמן O(n log n) למיון ועוד O(n) למעבר; זיכרון O(n) לפלט, ועוד מה שהמיון צורך. מקרי קצה: מקטעים שנוגעים זה בזה, כמו [1,4] ו-[4,5], מתמזגים בזכות בדיקת הקטן או שווה; מקטע מקונן כמו [2,3] בתוך [1,10] לא אמור לקצר את ה-end, ולכן חובה max; קלט ריק מחזיר רשימה ריקה; ומקטע יחיד מוחזר כמו שהוא.',
    },
    approach: [
      {
        en: 'Clarify: is the input sorted, do touching intervals merge, can start equal end, and may the input be modified.',
        he: 'מבהירים: האם הקלט ממוין, האם מקטעים שנוגעים מתמזגים, האם start יכול להיות שווה ל-end, והאם מותר לשנות את הקלט.',
      },
      {
        en: 'Brute force: compare every pair and merge repeatedly until nothing changes, O(n^2) or worse.',
        he: 'כוח גס: משווים כל זוג וממזגים שוב ושוב עד שאין שינוי, ‏O(n^2) או גרוע מזה.',
      },
      {
        en: 'Insight: once sorted by start, overlapping intervals become adjacent, so a single linear sweep can merge them.',
        he: 'התובנה: אחרי מיון לפי start, מקטעים חופפים הופכים לסמוכים, ולכן מעבר לינארי אחד מספיק כדי למזג אותם.',
      },
      {
        en: 'Algorithm: sort by start; for each interval, extend the last merged end with max if start <= end, else append a new interval.',
        he: 'האלגוריתם: ממיינים לפי start; לכל מקטע, אם start <= end מרחיבים את ה-end האחרון עם max, ואחרת מוסיפים מקטע חדש.',
      },
      {
        en: 'Complexity: O(n log n) time dominated by the sort, O(n) space for the output.',
        he: 'סיבוכיות: זמן O(n log n) שנשלט על ידי המיון, וזיכרון O(n) לפלט.',
      },
      {
        en: 'Test [[1,3],[2,6],[8,10],[15,18]], touching [[1,4],[4,5]], nested [[1,10],[2,3]], unsorted input and an empty list.',
        he: 'בודקים את [[1,3],[2,6],[8,10],[15,18]], מקטעים שנוגעים [[1,4],[4,5]], מקטעים מקוננים [[1,10],[2,3]], קלט לא ממוין ורשימה ריקה.',
      },
    ],
    keyPoints: [
      {
        en: 'Use max for the new end; just taking the next interval\'s end breaks on nested intervals like [1,10] and [2,3].',
        he: 'להשתמש ב-max ל-end החדש; לקחת פשוט את ה-end של המקטע הבא נשבר על מקטעים מקוננים כמו [1,10] ו-[2,3].',
      },
      {
        en: 'Confirm whether touching intervals merge, since that decides between less-than and less-or-equal.',
        he: 'לוודא אם מקטעים שנוגעים מתמזגים, כי זה קובע בין קטן לבין קטן או שווה.',
      },
      {
        en: 'Sorting in place mutates the caller\'s list; mention copying if the input must stay unchanged.',
        he: 'מיון במקום משנה את הרשימה של מי שקרא לפונקציה; כדאי להזכיר העתקה אם הקלט חייב להישאר כמו שהוא.',
      },
      {
        en: 'Related follow-ups: insert one interval into a sorted list in O(n), or count meeting rooms needed with a min-heap of end times.',
        he: 'שאלות המשך קשורות: הכנסת מקטע אחד לרשימה ממוינת ב-O(n), או ספירת חדרי ישיבות נדרשים עם min-heap של זמני סיום.',
      },
      {
        en: 'Real use: merging calendar busy slots, memory address ranges or time windows in log analysis.',
        he: 'שימוש אמיתי: מיזוג זמנים תפוסים ביומן, טווחי כתובות זיכרון או חלונות זמן בניתוח לוגים.',
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
      en: 'Use Floyd\'s tortoise and hare. Start two pointers at the head: slow moves one node per step, fast moves two. Loop while fast and fast.next are not null; if slow and fast ever point to the same node, there is a cycle. If fast reaches the end, the list is acyclic.\nWhy they must meet: if there is no cycle, fast simply runs off the end. If there is one, both pointers eventually enter it, and from then on the distance between them along the cycle shrinks by exactly one node per step, so fast catches slow within at most one lap, without jumping over it.\nTime is O(n) and extra space is O(1), which is the whole point compared with storing visited nodes in a hash set, which also works in O(n) time but costs O(n) memory. Edge cases: an empty list, a single node with no next, a single node pointing to itself, and a cycle that starts at the head.',
      he: 'משתמשים באלגוריתם הצב והארנב של Floyd. מתחילים שני מצביעים בראש: slow מתקדם צומת אחד בכל צעד, ו-fast מתקדם שניים. ממשיכים כל עוד fast ו-fast.next אינם null; אם slow ו-fast מצביעים אי פעם על אותו צומת, יש מעגל. אם fast מגיע לסוף, אין מעגל.\nלמה הם חייבים להיפגש: אם אין מעגל, fast פשוט יוצא מהסוף. אם יש, שני המצביעים נכנסים אליו בסופו של דבר, ומאותו רגע המרחק ביניהם לאורך המעגל קטן בדיוק בצומת אחד בכל צעד, ולכן fast משיג את slow תוך הקפה אחת לכל היותר, בלי לדלג מעליו.\nזמן O(n) וזיכרון נוסף O(1), וזה כל העניין לעומת שמירת צמתים שביקרנו בהם ב-hash set, שגם עובד ב-O(n) זמן אבל עולה O(n) זיכרון. מקרי קצה: רשימה ריקה, צומת יחיד בלי next, צומת יחיד שמצביע על עצמו, ומעגל שמתחיל בראש.',
    },
    approach: [
      {
        en: 'Clarify: singly linked, may be empty, and the requirement of O(1) extra memory; ask whether modifying the list is allowed.',
        he: 'מבהירים: רשימה חד-כיוונית, יכולה להיות ריקה, והדרישה לזיכרון נוסף O(1); שואלים אם מותר לשנות את הרשימה.',
      },
      {
        en: 'Simple solution: walk the list storing visited nodes in a hash set; a repeat means a cycle. O(n) time but O(n) space, which breaks the constraint.',
        he: 'פתרון פשוט: הולכים על הרשימה ושומרים צמתים שביקרנו בהם ב-hash set; חזרה פירושה מעגל. זמן O(n) אבל זיכרון O(n), וזה שובר את הדרישה.',
      },
      {
        en: 'Insight: two pointers at different speeds must meet inside a cycle, and need no extra memory.',
        he: 'התובנה: שני מצביעים במהירויות שונות חייבים להיפגש בתוך מעגל, ולא צריכים זיכרון נוסף.',
      },
      {
        en: 'Algorithm: slow = fast = head; while fast and fast.next: slow one step, fast two steps, return true if they are the same node; return false after the loop.',
        he: 'האלגוריתם: slow = fast = head; כל עוד fast ו-fast.next קיימים: slow צעד אחד, fast שני צעדים, ומחזירים true אם הם אותו צומת; אחרי הלולאה מחזירים false.',
      },
      {
        en: 'Complexity: O(n) time, O(1) space.',
        he: 'סיבוכיות: זמן O(n), זיכרון O(1).',
      },
      {
        en: 'Test an empty list, one node, one node pointing to itself, 3 -> 2 -> 0 -> -4 looping back to 2, and 1 -> 2 with no cycle.',
        he: 'בודקים רשימה ריקה, צומת אחד, צומת אחד שמצביע על עצמו, ‏3 -> 2 -> 0 -> -4 שחוזר ל-2, ו-1 -> 2 בלי מעגל.',
      },
    ],
    keyPoints: [
      {
        en: 'Prove the meeting: inside the cycle the gap closes by one per step, so the fast pointer cannot skip over the slow one.',
        he: 'להוכיח את המפגש: בתוך המעגל הפער נסגר בצומת אחד בכל צעד, ולכן המצביע המהיר לא יכול לדלג מעל האיטי.',
      },
      {
        en: 'Check both fast and fast.next before advancing, otherwise you dereference null on even-length lists.',
        he: 'לבדוק גם את fast וגם את fast.next לפני ההתקדמות, אחרת ניגשים ל-null ברשימות באורך זוגי.',
      },
      {
        en: 'Compare node identity (is or pointer equality), not node values, since values can repeat.',
        he: 'להשוות זהות של צמתים (is או השוואת מצביעים), לא ערכים, כי ערכים יכולים לחזור.',
      },
      {
        en: 'Follow-up: to find the cycle\'s start, reset one pointer to the head after they meet and move both one step at a time; they meet at the entry node.',
        he: 'שאלת המשך: כדי למצוא את תחילת המעגל, אחרי המפגש מחזירים מצביע אחד לראש ומקדמים את שניהם צעד אחד בכל פעם; הם נפגשים בצומת הכניסה.',
      },
      {
        en: 'Follow-up: the cycle length is found by keeping one pointer fixed at the meeting point and counting steps until the other returns.',
        he: 'שאלת המשך: את אורך המעגל מוצאים כשמשאירים מצביע אחד בנקודת המפגש וסופרים צעדים עד שהשני חוזר אליו.',
      },
      {
        en: 'The same idea detects cycles in any function iteration, for example finding a duplicate number in an array of n+1 values from 1 to n.',
        he: 'אותו רעיון מזהה מעגלים בכל איטרציה של פונקציה, למשל מציאת מספר כפול במערך של n+1 ערכים בין 1 ל-n.',
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
      en: 'First count occurrences with a hash map in O(n). Then pick the k largest counts without fully sorting. Option one: a min-heap of size k over the (count, value) pairs; push each pair and pop whenever the heap exceeds k, so it always holds the k most frequent seen so far. That is O(n log k), which beats O(n log n) when k is small. Option two, bucket sort: a frequency can be at most n, so create n+1 buckets where bucket f lists the values that appear f times, then read buckets from n downward until k values are collected. That is O(n) time and O(n) space.\nBoth are correct because they only compare counts, and the problem guarantees the answer is unique, so ties at the cutoff do not matter. Space is O(u) for the counter, where u is the number of distinct values, plus O(k) for the heap or O(n) for the buckets. Edge cases: k equal to the number of distinct values returns all of them, and a single-element array returns that element.',
      he: 'קודם סופרים מופעים עם hash map ב-O(n). אחר כך בוחרים את k הספירות הגדולות בלי למיין הכול. אפשרות אחת: min-heap בגודל k על זוגות (count, value); דוחפים כל זוג ומוציאים כשה-heap עובר את k, כך שהוא תמיד מחזיק את k השכיחים ביותר עד עכשיו. זה O(n log k), טוב יותר מ-O(n log n) כש-k קטן. אפשרות שנייה, bucket sort: שכיחות יכולה להיות לכל היותר n, ולכן יוצרים n+1 דליים, כאשר דלי f מכיל את הערכים שמופיעים f פעמים, וקוראים את הדליים מ-n למטה עד שאוספים k ערכים. זה זמן O(n) וזיכרון O(n).\nשתיהן נכונות כי הן משוות רק ספירות, והבעיה מבטיחה שהתשובה יחידה, כך שתיקו בגבול לא משנה. זיכרון O(u) למונה, כאשר u הוא מספר הערכים השונים, ועוד O(k) ל-heap או O(n) לדליים. מקרי קצה: k ששווה למספר הערכים השונים מחזיר את כולם, ומערך של איבר אחד מחזיר את האיבר הזה.',
    },
    approach: [
      {
        en: 'Clarify: k is valid, the answer is unique, the output order does not matter, and the expected complexity is better than O(n log n).',
        he: 'מבהירים: k תקין, התשובה יחידה, סדר הפלט לא משנה, והסיבוכיות הנדרשת טובה מ-O(n log n).',
      },
      {
        en: 'Baseline: count with a hash map and sort the distinct values by count, O(n + u log u), which is O(n log n) in the worst case.',
        he: 'בסיס: סופרים עם hash map וממיינים את הערכים השונים לפי ספירה, ‏O(n + u log u), כלומר O(n log n) במקרה הגרוע.',
      },
      {
        en: 'Insight: we need only the top k, not a full order, so a bounded heap or frequency buckets avoid the full sort.',
        he: 'התובנה: צריך רק את k העליונים ולא סדר מלא, ולכן heap חסום או דליי שכיחות חוסכים את המיון המלא.',
      },
      {
        en: 'Algorithm: count; then either keep a size-k min-heap of (count, value), or fill buckets by frequency and read from the highest down until k values are taken.',
        he: 'האלגוריתם: סופרים; ואז או מחזיקים min-heap בגודל k של (count, value), או ממלאים דליים לפי שכיחות וקוראים מהגבוה למטה עד שלוקחים k ערכים.',
      },
      {
        en: 'Complexity: heap O(n log k) time and O(u + k) space; buckets O(n) time and O(n) space.',
        he: 'סיבוכיות: heap בזמן O(n log k) וזיכרון O(u + k); דליים בזמן O(n) וזיכרון O(n).',
      },
      {
        en: 'Test [1,1,1,2,2,3] with k=2 (1 and 2), [4] with k=1, and an array where every value is distinct with k equal to its length.',
        he: 'בודקים [1,1,1,2,2,3] עם k=2 ‏(1 ו-2), ‏[4] עם k=1, ומערך שבו כל הערכים שונים עם k ששווה לאורך שלו.',
      },
    ],
    keyPoints: [
      {
        en: 'Use a min-heap of size k, not a max-heap of everything: the min-heap keeps memory at O(k) and time at O(n log k).',
        he: 'להשתמש ב-min-heap בגודל k ולא ב-max-heap של הכול: ה-min-heap שומר על זיכרון O(k) וזמן O(n log k).',
      },
      {
        en: 'Bucket sort is linear because the maximum frequency is bounded by n; say that bound explicitly.',
        he: 'bucket sort הוא לינארי כי השכיחות המקסימלית חסומה ב-n; להגיד את החסם הזה במפורש.',
      },
      {
        en: 'Quickselect on the distinct values is another option: O(u) average, O(u^2) worst case.',
        he: 'quickselect על הערכים השונים היא אפשרות נוספת: O(u) בממוצע, ‏O(u^2) במקרה הגרוע.',
      },
      {
        en: 'Ask about ties; here the answer is guaranteed unique, but in production you need a tie-break rule.',
        he: 'לשאול על תיקו; כאן התשובה מובטחת יחידה, אבל בפרודקשן צריך כלל לשבירת תיקו.',
      },
      {
        en: 'Streaming follow-up: for huge or unbounded data, approximate structures such as Count-Min Sketch or the Space-Saving algorithm keep memory bounded.',
        he: 'שאלת המשך על streaming: לנתונים ענקיים או אינסופיים, מבנים מקורבים כמו Count-Min Sketch או אלגוריתם Space-Saving שומרים על זיכרון חסום.',
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
      en: 'Stream the file line by line with a file iterator, so memory stays constant no matter how large the log is. Split each line on whitespace, at most three times: field 0 is the date, field 1 is the time, field 2 is the level. Skip any line with fewer than three fields or a level other than ERROR. Build the hour key from the date plus the first two characters of the time, for example \'2024-03-01 14\', and increment it in a Counter. At the end, return the entry with the highest count, or nothing if no errors were found.\nTime is O(n) in the number of lines and memory is O(h) for the number of distinct hours. Edge cases: malformed or empty lines are skipped instead of crashing and a file without errors returns None. Clarify whether \'hour\' means a calendar hour, as here, or hour of day across all dates, in which case the key is just the two-digit hour. The shell one-liner grep, cut, sort, uniq -c, sort -rn, head -1 does the same job.',
      he: 'קוראים את הקובץ שורה אחרי שורה עם iterator של הקובץ, כך שהזיכרון נשאר קבוע לא משנה כמה הלוג גדול. מפצלים כל שורה לפי רווחים, לכל היותר שלוש פעמים: שדה 0 הוא התאריך, שדה 1 השעה ושדה 2 הרמה. מדלגים על כל שורה עם פחות משלושה שדות או עם רמה שאינה ERROR. בונים מפתח שעה מהתאריך ועוד שני התווים הראשונים של השעה, למשל \'2024-03-01 14\', ומגדילים אותו ב-Counter. בסוף מחזירים את הרשומה עם הספירה הגבוהה ביותר, או כלום אם לא נמצאו שגיאות.\nזמן O(n) במספר השורות וזיכרון O(h) במספר השעות השונות. מקרי קצה: שורות פגומות או ריקות מדולגות במקום לגרום לקריסה, וקובץ בלי שגיאות מחזיר None. מבהירים אם שעה פירושה שעה קלנדרית, כמו כאן, או שעה ביום על פני כל התאריכים, ואז המפתח הוא רק השעה בשתי ספרות. ה-one-liner ב-shell עם grep, ‏cut, ‏sort, ‏uniq -c, ‏sort -rn ו-head -1 עושה את אותה עבודה.',
    },
    approach: [
      {
        en: 'Clarify the line format, whether \'hour\' means calendar hour or hour of day, how to treat malformed lines and what to output when there are no errors.',
        he: 'מבהירים את פורמט השורה, האם שעה פירושה שעה קלנדרית או שעה ביום, איך מתייחסים לשורות פגומות ומה מדפיסים כשאין שגיאות.',
      },
      {
        en: 'Naive: load all lines into memory, filter, and group, which fails when the file is larger than RAM.',
        he: 'נאיבי: טוענים את כל השורות לזיכרון, מסננים ומקבצים, וזה נכשל כשהקובץ גדול מה-RAM.',
      },
      {
        en: 'Insight: the aggregate needs only one counter per hour, so a single streaming pass with a dictionary is enough.',
        he: 'התובנה: הסיכום צריך רק מונה אחד לכל שעה, ולכן מספיק מעבר streaming אחד עם מילון.',
      },
      {
        en: 'Algorithm: for each line split with maxsplit=3, skip if fewer than 3 fields or level is not ERROR, increment Counter[date + \' \' + time[:2]], then return most_common(1).',
        he: 'האלגוריתם: לכל שורה עושים split עם maxsplit=3, מדלגים אם יש פחות מ-3 שדות או שהרמה אינה ERROR, מגדילים את Counter[date + \' \' + time[:2]], ובסוף מחזירים most_common(1).',
      },
      {
        en: 'Complexity: O(n) time over lines, O(h) memory for distinct hours.',
        he: 'סיבוכיות: זמן O(n) על פני השורות, וזיכרון O(h) למספר השעות השונות.',
      },
      {
        en: 'Test the given sample (hour 14 with 2 errors), a file with no ERROR lines, a file with blank and malformed lines, and an INFO line whose message contains the word ERROR.',
        he: 'בודקים את הדוגמה הנתונה (שעה 14 עם 2 שגיאות), קובץ בלי שורות ERROR, קובץ עם שורות ריקות ופגומות, ושורת INFO שההודעה שלה מכילה את המילה ERROR.',
      },
    ],
    keyPoints: [
      {
        en: 'Never call read() or readlines() on a potentially huge log; iterate the file object so memory is O(1) per line.',
        he: 'אף פעם לא לקרוא ל-read() או ל-readlines() על לוג שעלול להיות ענק; עוברים על אובייקט הקובץ כך שהזיכרון O(1) לכל שורה.',
      },
      {
        en: 'Match the level field exactly instead of searching for \'ERROR\' anywhere, so a message like \'no ERROR found\' at INFO level is not counted.',
        he: 'להשוות את שדה הרמה במדויק במקום לחפש \'ERROR\' בכל מקום, כדי שהודעה כמו \'no ERROR found\' ברמת INFO לא תיספר.',
      },
      {
        en: 'Handle malformed lines explicitly and say so; real logs contain stack traces and multi-line messages.',
        he: 'לטפל בשורות פגומות במפורש ולהגיד את זה; בלוגים אמיתיים יש stack traces והודעות של כמה שורות.',
      },
      {
        en: 'Raise time zones and log rotation: the hour depends on the logger\'s zone, and a day\'s data may span several rotated files.',
        he: 'להעלות את נושא אזורי הזמן ו-log rotation: השעה תלויה באזור הזמן של ה-logger, והנתונים של יום יכולים להתפרס על כמה קבצים מסובבים.',
      },
      {
        en: 'Know the shell version and why the first sort is needed: uniq -c only collapses adjacent duplicate lines.',
        he: 'להכיר את גרסת ה-shell ולהבין למה צריך את ה-sort הראשון: uniq -c מאחד רק שורות זהות סמוכות.',
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
      en: 'The GIL (Global Interpreter Lock) is a mutex in CPython that lets only one thread at a time execute Python bytecode, which keeps reference counting and the interpreter\'s internal state safe without fine-grained locking.\nHow it works:\n- A thread must hold the GIL to run bytecode.\n- A running thread is asked to release it periodically (the switch interval, 5 ms by default, see sys.getswitchinterval) so other threads get a turn.\n- Blocking I/O calls (socket recv, file read, time.sleep) and many C extensions release the GIL while they wait or compute.\nSo threads still help for I/O-bound work: a test harness talking to 20 devices over SSH or serial, or a script making many HTTP requests, overlaps all the waiting and finishes in roughly the time of the slowest call. For CPU-bound pure Python work (parsing huge logs, number crunching in loops), threads give no speedup and can even be slower because of lock contention.\nOptions for CPU-bound work:\n- multiprocessing or ProcessPoolExecutor: separate processes, each with its own interpreter and GIL, at the cost of process startup and pickling data between them.\n- NumPy, or C / Cython extensions that release the GIL around heavy loops.\nFor thousands of concurrent I/O tasks, asyncio is lighter than threads.\nA point that shows depth: the GIL does not make your code thread-safe. counter += 1 is several bytecodes and can still race, so you still need a Lock. And since Python 3.13 there is an optional free-threaded build without the GIL (PEP 703).',
      he: 'ה-GIL (Global Interpreter Lock) הוא mutex בתוך CPython שמאפשר רק ל-thread אחד בכל רגע להריץ bytecode של Python. המטרה שלו היא להגן על ה-reference counting ועל המצב הפנימי של האינטרפרטר בלי צורך בנעילות קטנות בכל מקום.\nאיך זה עובד:\n- thread חייב להחזיק את ה-GIL כדי להריץ bytecode.\n- ה-thread שרץ מתבקש לשחרר אותו כל פרק זמן קבוע (ה-switch interval, ברירת מחדל 5 ms, אפשר לראות ב-sys.getswitchinterval) כדי שגם threads אחרים יקבלו תור.\n- קריאות I/O חוסמות (recv על socket, קריאת קובץ, time.sleep) והרבה הרחבות C משחררות את ה-GIL בזמן שהן מחכות או מחשבות.\nלכן threads עדיין עוזרים בעבודת I/O: סביבת בדיקות שמדברת עם 20 מכשירים ב-SSH או ב-serial, או סקריפט ששולח הרבה בקשות HTTP, מריצים את כל ההמתנות במקביל ומסיימים בערך בזמן של הקריאה האיטית ביותר. בעבודת CPU ב-Python טהור (פענוח לוגים ענקיים, חישובים בלולאות) threads לא נותנים שיפור, ולפעמים אפילו מאטים בגלל התחרות על הנעילה.\nאפשרויות לעבודת CPU:\n- multiprocessing או ProcessPoolExecutor: תהליכים נפרדים, לכל אחד אינטרפרטר ו-GIL משלו, במחיר של זמן הקמת תהליך ו-pickling של הנתונים ביניהם.\n- NumPy, או הרחבות C ו-Cython שמשחררות את ה-GIL סביב לולאות כבדות.\nלאלפי משימות I/O במקביל, asyncio קל יותר מ-threads.\nנקודה שמראה עומק: ה-GIL לא הופך את הקוד ל-thread-safe. הפעולה counter += 1 מורכבת מכמה פקודות bytecode ועדיין יכולה ליצור race, ולכן עדיין צריך Lock. ומאז Python 3.13 יש build אופציונלי מסוג free-threaded בלי GIL (PEP 703).',
    },
    keyPoints: [
      {
        en: 'The GIL belongs to CPython, not to the Python language itself; it exists mainly to protect reference counting.',
        he: 'ה-GIL שייך ל-CPython ולא לשפה עצמה; הוא קיים בעיקר כדי להגן על ה-reference counting.',
      },
      {
        en: 'Classify the workload first: I/O-bound goes to threads or asyncio, CPU-bound goes to processes or native code.',
        he: 'קודם מסווגים את העבודה: I/O הולך ל-threads או ל-asyncio, CPU הולך לתהליכים או לקוד native.',
      },
      {
        en: 'The GIL is not a substitute for locks: read-modify-write operations like x += 1 can still race between threads.',
        he: 'ה-GIL לא מחליף נעילות: פעולות read-modify-write כמו x += 1 עדיין יכולות ליצור race בין threads.',
      },
      {
        en: 'Name the cost of multiprocessing: process startup, separate memory, and pickling every argument and result.',
        he: 'כדאי לציין את המחיר של multiprocessing: הקמת תהליך, זיכרון נפרד, ו-pickling של כל ארגומנט ותוצאה.',
      },
      {
        en: 'Libraries like NumPy release the GIL inside their C loops, so threads can give real parallelism for vectorised work.',
        he: 'ספריות כמו NumPy משחררות את ה-GIL בתוך לולאות ה-C שלהן, ולכן threads יכולים לתת מקביליות אמיתית בעבודה וקטורית.',
      },
      {
        en: 'Modern twist: Python 3.13 added an experimental free-threaded build (PEP 703) that can run without the GIL.',
        he: 'חידוש: Python 3.13 הוסיפה build ניסיוני מסוג free-threaded (PEP 703) שיכול לרוץ בלי GIL.',
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
      en: 'A generator is a function that uses yield to produce a sequence of values lazily, one at a time, pausing between values instead of building the whole result up front.\nHow it works:\n- Calling a generator function does not run its body; it returns a generator object, which is an iterator.\n- Each next() resumes the body until the next yield, hands back that value, and freezes the local variables and the current position.\n- When the function returns, StopIteration is raised, and a for loop ends cleanly.\nWhy use one instead of a list:\n- Memory: a list of a billion items needs gigabytes, while a generator holds only its current state, so it works for huge files, streams and even infinite sequences.\n- Latency: the first item is available immediately, and if the consumer stops early, the rest is never computed.\n- Pipelines: you chain small stages (read lines, keep ERROR lines, parse, aggregate), each pulling from the previous one, like Unix pipes.\nExample: scanning a 10 GB regression log for failures with a generator uses a few kilobytes of memory, while f.readlines() would try to load the whole file.\nTrade-offs: a generator can be consumed only once, has no len() or indexing, and errors inside it surface only when you iterate. Use a list when you need random access, several passes or the size.\nDepth point: yield from delegates to a sub-generator, and generators with send() are the historical basis of coroutines and asyncio.',
      he: 'generator הוא פונקציה שמשתמשת ב-yield כדי לייצר סדרת ערכים בצורה עצלה (lazy), ערך אחד בכל פעם, ועוצרת בין ערך לערך במקום לבנות את כל התוצאה מראש.\nאיך זה עובד:\n- קריאה לפונקציית generator לא מריצה את הגוף שלה; היא מחזירה אובייקט generator, שהוא iterator.\n- כל next() ממשיך את הגוף עד ה-yield הבא, מחזיר את הערך, ומקפיא את המשתנים המקומיים ואת המיקום הנוכחי.\n- כשהפונקציה מסתיימת נזרק StopIteration, ולולאת for פשוט נגמרת.\nלמה להעדיף אותו על רשימה:\n- זיכרון: רשימה של מיליארד איברים צורכת גיגה-בייטים, ו-generator מחזיק רק את המצב הנוכחי, ולכן מתאים לקבצים ענקיים, ל-streams ואפילו לסדרות אינסופיות.\n- זמן תגובה: הערך הראשון זמין מיד, ואם הצרכן עוצר מוקדם, השאר בכלל לא מחושב.\n- pipelines: משרשרים שלבים קטנים (קריאת שורות, סינון שורות ERROR, פענוח, סיכום), וכל שלב מושך מהשלב שלפניו, כמו pipes ביוניקס.\nדוגמה: סריקה של לוג רגרסיה בגודל 10 GB לחיפוש כשלים עם generator צורכת כמה קילו-בייטים, בעוד ש-f.readlines() ינסה לטעון את כל הקובץ לזיכרון.\nחסרונות: אפשר לעבור על generator רק פעם אחת, אין לו len() או גישה לפי אינדקס, ושגיאות בתוכו מתגלות רק בזמן המעבר. רשימה עדיפה כשצריך גישה אקראית, כמה מעברים או את הגודל.\nנקודה שמראה עומק: yield from מעביר את העבודה ל-generator פנימי, ו-generators עם send() הם הבסיס ההיסטורי של coroutines ושל asyncio.',
    },
    keyPoints: [
      {
        en: 'Calling the function returns a generator object and runs nothing; the body starts only on the first next().',
        he: 'קריאה לפונקציה מחזירה אובייקט generator ולא מריצה כלום; הגוף מתחיל לרוץ רק ב-next() הראשון.',
      },
      {
        en: 'A generator is single-use: a second loop over the same object yields nothing, a common bug in tests.',
        he: 'generator הוא חד-פעמי: לולאה שנייה על אותו אובייקט לא מחזירה כלום, באג נפוץ בבדיקות.',
      },
      {
        en: 'Contrast list comprehension [..] with generator expression (..): same syntax, eager versus lazy.',
        he: 'כדאי להשוות בין list comprehension עם סוגריים מרובעים ל-generator expression עם סוגריים עגולים: אותו תחביר, אחד מחושב מיד והשני בעצלות.',
      },
      {
        en: 'Mention itertools (islice, chain, groupby) for composing lazy pipelines.',
        he: 'כדאי להזכיר את itertools (islice, chain, groupby) לבניית pipelines עצלים.',
      },
      {
        en: 'Lazy evaluation delays errors and side effects until iteration, which can surprise when debugging.',
        he: 'ההערכה העצלה דוחה שגיאות ו-side effects לזמן המעבר, וזה יכול להפתיע בזמן דיבוג.',
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
      en: 'In Python, default argument values are evaluated once, when the def statement runs, not on every call, so a mutable default like [] is a single object shared by every call that does not pass that argument.\nWhat happens step by step:\n- At definition time Python creates one empty list and stores it in add.__defaults__.\n- add(1) appends to that list and returns it: [1].\n- add(2) receives the very same list and returns [1, 2]. State leaks across calls, and any caller still holding the returned list sees it change.\nThe fix is a None sentinel: def add(item, items=None), and inside the body if items is None: items = []. Each call then gets a fresh list. Use is None and not if not items, because an empty list passed by the caller is falsy and would be silently replaced.\nThe same trap applies to dicts, sets and custom objects, and to function calls in defaults: def log(msg, ts=datetime.now()) freezes the timestamp at import time. Dataclasses protect you here: a list, dict or set default on a field raises an error and you must use field(default_factory=list).\nReal-world example: a test helper with results=[] that keeps results from earlier test cases, so tests pass or fail depending on the order they run in.\nThe rare intentional use is a simple cache between calls, but functools.lru_cache is clearer. Linters flag the pattern: pylint dangerous-default-value and flake8-bugbear B006.',
      he: 'ב-Python ערכי ברירת המחדל של פרמטרים מחושבים פעם אחת, כשפקודת ה-def רצה, ולא בכל קריאה. לכן ברירת מחדל שניתנת לשינוי כמו [] היא אובייקט יחיד שמשותף לכל הקריאות שלא מעבירות את הפרמטר.\nמה קורה שלב אחרי שלב:\n- בזמן ההגדרה Python יוצרת רשימה ריקה אחת ושומרת אותה ב-add.__defaults__.\n- add(1) מוסיף לרשימה הזאת ומחזיר אותה: [1].\n- add(2) מקבל בדיוק את אותה רשימה ומחזיר [1, 2]. המצב דולף בין קריאות, ומי שעדיין מחזיק את הרשימה שהוחזרה רואה אותה משתנה.\nהתיקון הוא sentinel של None: def add(item, items=None), ובתוך הפונקציה if items is None: items = []. כך כל קריאה מקבלת רשימה חדשה. בודקים is None ולא if not items, כי רשימה ריקה שהמשתמש העביר היא falsy והייתה מוחלפת בשקט.\nאותה מלכודת קיימת ב-dict, ב-set ובאובייקטים שלנו, וגם בקריאה לפונקציה בתוך ברירת מחדל: def log(msg, ts=datetime.now()) מקפיא את חותמת הזמן לרגע הטעינה של המודול. dataclasses מגינים מזה: ברירת מחדל מסוג list, dict או set בשדה זורקת שגיאה, וצריך להשתמש ב-field(default_factory=list).\nדוגמה מהעולם האמיתי: פונקציית עזר לבדיקות עם results=[] ששומרת תוצאות מבדיקות קודמות, כך שבדיקות עוברות או נכשלות לפי הסדר שבו הן רצות.\nהשימוש המכוון הנדיר הוא cache פשוט בין קריאות, אבל functools.lru_cache ברור יותר. כלי lint מסמנים את הדפוס הזה: dangerous-default-value ב-pylint ו-B006 ב-flake8-bugbear.',
    },
    keyPoints: [
      {
        en: 'The key sentence: defaults are evaluated once at definition time, not per call.',
        he: 'המשפט המרכזי: ברירות מחדל מחושבות פעם אחת בזמן ההגדרה, לא בכל קריאה.',
      },
      {
        en: 'You can show the shared object directly: it lives in func.__defaults__ and its id() stays the same across calls.',
        he: 'אפשר להראות את האובייקט המשותף ישירות: הוא נמצא ב-func.__defaults__ וה-id() שלו זהה בין קריאות.',
      },
      {
        en: 'Use if items is None, not if not items, so an empty list passed by the caller is respected.',
        he: 'בודקים if items is None ולא if not items, כדי לכבד רשימה ריקה שהמשתמש העביר.',
      },
      {
        en: 'Immutable defaults (numbers, strings, tuples, None) are safe because they cannot be changed in place.',
        he: 'ברירות מחדל שאינן ניתנות לשינוי (מספרים, מחרוזות, tuple, None) בטוחות, כי אי אפשר לשנות אותן במקום.',
      },
      {
        en: 'The same idea explains datetime.now() as a default: it is frozen at import time.',
        he: 'אותו רעיון מסביר למה datetime.now() כברירת מחדל קופא על זמן הטעינה של המודול.',
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
      en: 'I work from the process outward: is it running, is it listening, on which address, is something in between blocking it, and is it actually healthy.\nStep by step:\n- Process: systemctl status myservice. Is it running, crashed, or stuck in a restart loop?\n- Logs: journalctl -u myservice -n 100, or the application log under /var/log. Typical findings: a config error, port already in use (EADDRINUSE), permission denied when binding a port below 1024 as a non-root user.\n- Listening socket: ss -ltnp (or lsof -i :8080). Check both the port and the bind address: 127.0.0.1:8080 answers only locally, while 0.0.0.0 or the machine\'s IP answers from outside.\n- Local test: curl -v localhost:8080. If it works locally but not remotely, the problem is between the client and the box.\n- Firewall and network: iptables -L -n, nft list ruleset or firewall-cmd, and tcpdump -i any port 8080 to see whether SYN packets arrive at all. Connection refused means nothing listens there (the kernel answers with RST); a timeout usually means a firewall silently drops packets.\n- Hung process: it listens but never replies. Check CPU and memory with top, open file descriptors against ulimit -n, a full disk with df -h, and strace -p PID or a stack dump to see what it is blocked on.\nExample: after a config change the service binds to 127.0.0.1, so curl on the host works but every remote client gets connection refused.\nFinally, verify the fix from the client side and record the root cause.',
      he: 'עובדים מהתהליך החוצה: האם הוא רץ, האם הוא מקשיב, על איזו כתובת, האם משהו בדרך חוסם, והאם הוא באמת תקין.\nשלב אחרי שלב:\n- התהליך: systemctl status myservice. הוא רץ, קרס, או תקוע בלולאת restart?\n- לוגים: journalctl -u myservice -n 100, או הלוג של האפליקציה תחת /var/log. ממצאים נפוצים: שגיאת קונפיגורציה, פורט שכבר תפוס (EADDRINUSE), permission denied כשמנסים להאזין לפורט מתחת ל-1024 בלי root.\n- socket מאזין: ss -ltnp (או lsof -i :8080). בודקים גם את הפורט וגם את כתובת ה-bind: 127.0.0.1:8080 עונה רק מקומית, ו-0.0.0.0 או ה-IP של המכונה עונים גם מבחוץ.\n- בדיקה מקומית: curl -v localhost:8080. אם זה עובד מקומית ולא מרחוק, הבעיה נמצאת בין הלקוח למכונה.\n- firewall ורשת: iptables -L -n, nft list ruleset או firewall-cmd, ו-tcpdump -i any port 8080 כדי לראות אם פקטות SYN בכלל מגיעות. connection refused אומר שאף אחד לא מקשיב שם (ה-kernel עונה ב-RST); timeout בדרך כלל אומר ש-firewall זורק את הפקטות בשקט.\n- תהליך תקוע: מקשיב אבל לא עונה. בודקים CPU וזיכרון ב-top, מספר file descriptors פתוחים מול ulimit -n, דיסק מלא עם df -h, ו-strace -p PID או stack dump כדי לראות על מה הוא חסום.\nדוגמה: אחרי שינוי קונפיגורציה השירות מאזין על 127.0.0.1, ולכן curl על המכונה עצמה עובד אבל כל לקוח מרוחק מקבל connection refused.\nבסוף בודקים שהתיקון עובד מצד הלקוח ומתעדים את שורש הבעיה.',
    },
    keyPoints: [
      {
        en: 'Have a fixed order (process, logs, socket, local test, network, health) instead of jumping between random commands.',
        he: 'לעבוד לפי סדר קבוע (תהליך, לוגים, socket, בדיקה מקומית, רשת, תקינות) במקום לקפוץ בין פקודות אקראיות.',
      },
      {
        en: 'Refused versus timeout is a strong diagnostic: RST means no listener, silence usually means a firewall drop.',
        he: 'ההבדל בין refused ל-timeout הוא אבחנה חזקה: RST אומר שאין מאזין, שקט בדרך כלל אומר firewall שזורק.',
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
        en: 'Running out of file descriptors or a full disk can make a live process stop accepting connections.',
        he: 'מחסור ב-file descriptors או דיסק מלא יכולים לגרום לתהליך חי להפסיק לקבל חיבורים.',
      },
      {
        en: 'tcpdump on the server proves whether packets arrive at all, which splits the problem in half.',
        he: 'tcpdump על השרת מוכיח אם הפקטות בכלל מגיעות, וזה חוצה את הבעיה לשניים.',
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
      en: 'The three-way handshake is how TCP opens a connection: both sides confirm they can reach each other and agree on initial sequence numbers before any data is sent.\nThe steps:\n- SYN: the client chooses a random initial sequence number (ISN), say x, and sends a segment with the SYN flag.\n- SYN-ACK: the server, which is in LISTEN, replies with its own ISN y, the SYN and ACK flags set, and acknowledgement number x + 1.\n- ACK: the client sends an ACK with acknowledgement number y + 1. Both sides are now ESTABLISHED, and this third segment may already carry data.\nWhy three and not two: each direction needs its own sequence number, and each must be acknowledged. With only two messages the server would not know the client received its ISN, and an old duplicate SYN from an earlier connection could open a stale connection. After the handshake, sequence numbers and ACKs drive ordering, duplicate detection and retransmission of lost segments, and the advertised window drives flow control.\nTeardown is separate: a FIN and an ACK in each direction, often four segments, and the side that closes first waits in TIME_WAIT for twice the MSL.\nExample: every new HTTPS connection pays one round trip for the handshake before TLS even starts, which is why keep-alive, connection pooling, TCP Fast Open and QUIC over UDP exist.\nSecurity follow-up: a SYN flood fills the server\'s queue of half-open connections; SYN cookies defend against it by encoding the state in the server\'s ISN.',
      he: 'לחיצת היד המשולשת היא הדרך שבה TCP פותח חיבור: שני הצדדים מוודאים שהם מגיעים זה לזה ומסכימים על מספרי סידור (sequence numbers) התחלתיים לפני שנשלח מידע.\nהשלבים:\n- SYN: הלקוח בוחר מספר סידורי התחלתי אקראי (ISN), נניח x, ושולח segment עם דגל SYN.\n- SYN-ACK: השרת, שנמצא במצב LISTEN, עונה עם ה-ISN שלו y, עם הדגלים SYN ו-ACK, ועם מספר אישור x + 1.\n- ACK: הלקוח שולח ACK עם מספר אישור y + 1. עכשיו שני הצדדים במצב ESTABLISHED, וה-segment השלישי כבר יכול לשאת מידע.\nלמה שלוש ולא שתיים: לכל כיוון צריך מספר סידורי משלו, וכל אחד מהם צריך לקבל אישור. עם שתי הודעות בלבד השרת לא היה יודע שהלקוח קיבל את ה-ISN שלו, ו-SYN ישן וכפול מחיבור קודם היה יכול לפתוח חיבור מיושן. אחרי הלחיצה, מספרי הסידור וה-ACKs אחראים לסדר, לזיהוי כפילויות ולשידור חוזר של segments שאבדו, וה-window המפורסם אחראי ל-flow control.\nהסגירה נפרדת: FIN ו-ACK בכל כיוון, בדרך כלל ארבעה segments, והצד שסוגר ראשון ממתין במצב TIME_WAIT למשך פעמיים ה-MSL.\nדוגמה: כל חיבור HTTPS חדש משלם round trip אחד על הלחיצה עוד לפני שה-TLS מתחיל, ובגלל זה קיימים keep-alive, connection pooling, TCP Fast Open ו-QUIC שרץ מעל UDP.\nשאלת המשך מתחום האבטחה: SYN flood ממלא את התור של חיבורים חצי-פתוחים בשרת; SYN cookies מגינים מזה בכך שהם מקודדים את המצב בתוך ה-ISN של השרת.',
    },
    keyPoints: [
      {
        en: 'Use the real numbers: SYN with seq x, SYN-ACK with seq y and ack x + 1, ACK with ack y + 1.',
        he: 'להשתמש במספרים האמיתיים: SYN עם seq x, SYN-ACK עם seq y ו-ack x + 1, ACK עם ack y + 1.',
      },
      {
        en: 'The SYN itself consumes one sequence number, which is why the acknowledgement is x + 1.',
        he: 'ה-SYN עצמו צורך מספר סידורי אחד, ולכן האישור הוא x + 1.',
      },
      {
        en: 'ISNs are randomised to resist sequence prediction attacks and to avoid confusion with old segments.',
        he: 'ה-ISN אקראי כדי להקשות על התקפות ניחוש מספרי סידור וכדי לא להתבלבל עם segments ישנים.',
      },
      {
        en: 'Name the connection states (LISTEN, SYN-SENT, SYN-RECEIVED, ESTABLISHED, TIME_WAIT); ss or netstat show them live.',
        he: 'לציין את מצבי החיבור (LISTEN, SYN-SENT, SYN-RECEIVED, ESTABLISHED, TIME_WAIT); אפשר לראות אותם בזמן אמת עם ss או netstat.',
      },
      {
        en: 'Know the follow-ups: SYN flood and SYN cookies, the four-segment FIN teardown, and why TIME_WAIT exists.',
        he: 'להכיר את שאלות ההמשך: SYN flood ו-SYN cookies, הסגירה עם FIN בארבעה segments, ולמה קיים TIME_WAIT.',
      },
      {
        en: 'Connect it to performance: the handshake costs one RTT, the reason for connection reuse and QUIC.',
        he: 'לקשר לביצועים: הלחיצה עולה RTT אחד, וזו הסיבה לשימוש חוזר בחיבורים ול-QUIC.',
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
      en: 'Verifying a network driver means proving, against the spec, that it moves packets correctly, handles every error path, meets its performance targets and stays stable over time, with automated and reproducible tests.\nHow I would build it:\n- Requirements and plan: list the features from the spec and datasheet: link up and down, speeds and autonegotiation, MTU and jumbo frames, checksum and segmentation offloads, multi-queue and RSS, VLANs, interrupts and NAPI, statistics. Map each feature to test cases with expected results.\n- Bring-up and functional tests: load and unload the module repeatedly, send traffic at many packet sizes, check that the counters match what was sent, and compare payloads end to end.\n- Negative and error paths: link pulled and restored during traffic, malformed and oversized frames, full ring buffers, allocation failures through fault injection, suspend and resume.\n- Performance: iperf3 and pktgen for throughput, packets per second with 64-byte frames, latency and CPU usage, against a baseline.\n- Stress and soak: hours or days of mixed traffic while watching for memory leaks (kmemleak), dmesg warnings and counter drift.\n- Automation: a pytest framework driving the device under test and a traffic peer, running in CI on every build, saving logs, dmesg and pcap captures.\nExample: toggling the link a thousand times under load often finds a leak or race in the reset path that functional tests never hit.\nTrade-off: real hardware is the source of truth but scarce, so run fast checks on a virtual or loopback setup per commit and the full hardware regression nightly.',
      he: 'verification של דרייבר רשת פירושו להוכיח, מול המפרט, שהוא מעביר פקטות נכון, מטפל בכל נתיבי השגיאה, עומד ביעדי הביצועים ונשאר יציב לאורך זמן, עם בדיקות אוטומטיות שאפשר לשחזר.\nאיך הייתי בונה את זה:\n- דרישות ותוכנית: רושמים את הפיצ׳רים מהמפרט ומה-datasheet: link up ו-down, מהירויות ו-autonegotiation, MTU ו-jumbo frames, offloads של checksum ושל segmentation, multi-queue ו-RSS, VLAN, פסיקות ו-NAPI, סטטיסטיקות. ממפים כל פיצ׳ר למקרי בדיקה עם תוצאה צפויה.\n- הרמה ובדיקות פונקציונליות: טוענים ומורידים את המודול שוב ושוב, שולחים תעבורה במגוון גדלי פקטות, מוודאים שהמונים תואמים למה שנשלח, ומשווים את התוכן מקצה לקצה.\n- בדיקות שליליות ונתיבי שגיאה: ניתוק link והחזרה תוך כדי תעבורה, frames פגומים וגדולים מדי, ring buffers מלאים, כשלי הקצאת זיכרון בעזרת fault injection, suspend ו-resume.\n- ביצועים: iperf3 ו-pktgen ל-throughput, packets per second עם frames של 64 בתים, latency וצריכת CPU, מול baseline.\n- stress ו-soak: שעות או ימים של תעבורה מעורבת תוך מעקב אחרי דליפות זיכרון (kmemleak), אזהרות ב-dmesg וסטייה במונים.\n- אוטומציה: framework ב-pytest שמפעיל את ה-DUT ועמדת תעבורה מולו, רץ ב-CI על כל build, ושומר לוגים, dmesg והקלטות pcap.\nדוגמה: ניתוק וחיבור של ה-link אלף פעמים תחת עומס מוצא הרבה פעמים דליפה או race בנתיב ה-reset, שבדיקות פונקציונליות אף פעם לא מגיעות אליו.\ntrade-off: חומרה אמיתית היא מקור האמת אבל היא משאב נדיר, ולכן מריצים בדיקות מהירות על סביבה וירטואלית או loopback בכל commit, ואת הרגרסיה המלאה על חומרה בכל לילה.',
    },
    keyPoints: [
      {
        en: 'Start from requirements and a traceability matrix, so coverage is measurable rather than a feeling.',
        he: 'להתחיל מדרישות ומטבלת traceability, כדי שהכיסוי יהיה מדיד ולא תחושה.',
      },
      {
        en: 'Error paths (link loss, resource exhaustion, reset, suspend) are where driver bugs live; give them as much weight as the happy path.',
        he: 'נתיבי השגיאה (אובדן link, מחסור במשאבים, reset, suspend) הם המקום שבו באגים בדרייבר חיים; לתת להם משקל כמו לנתיב התקין.',
      },
      {
        en: 'Performance means more than throughput: small-packet rate, latency and CPU cost per packet matter too.',
        he: 'ביצועים זה לא רק throughput: קצב פקטות קטנות, latency ועלות CPU לפקטה חשובים לא פחות.',
      },
      {
        en: 'Long soak runs with kmemleak and dmesg monitoring catch leaks and races that short tests miss.',
        he: 'ריצות soak ארוכות עם kmemleak ומעקב אחרי dmesg תופסות דליפות ו-races שבדיקות קצרות מפספסות.',
      },
      {
        en: 'Reproducibility: record kernel, firmware, driver version and test seed with every result.',
        he: 'שחזוריות: לתעד עם כל תוצאה את גרסת ה-kernel, הקושחה, הדרייבר ואת ה-seed של הבדיקה.',
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
      en: 'The optimal solution is one pass with a hash map from value to index. For each element n at index i, compute the complement target - n and look it up in the map. If it is there, return the stored index and i. Otherwise store n with index i and continue.\nWhy it works: when we reach the second number of the pair, the first one is already in the map, so every pair is found exactly when its later element is visited. Looking up before inserting guarantees we never pair an element with itself, which handles [3, 2, 4] with target 6, while [3, 3] with target 6 still works because the first 3 is already stored.\nTime O(n), since each hash lookup and insert is O(1) on average, and space O(n) for the map. Negative numbers and zero need no special handling.\nIf the array were sorted, two pointers from both ends would solve it in O(n) time and O(1) space.',
      he: 'הפתרון האופטימלי הוא מעבר אחד עם hash map מערך לאינדקס. לכל איבר n באינדקס i מחשבים את המשלים target - n ומחפשים אותו במפה. אם הוא שם, מחזירים את האינדקס השמור ואת i. אחרת שומרים את n עם האינדקס i וממשיכים.\nלמה זה עובד: כשמגיעים למספר השני בזוג, הראשון כבר נמצא במפה, ולכן כל זוג נמצא בדיוק כשמבקרים באיבר המאוחר שלו. החיפוש לפני ההכנסה מבטיח שלא נצמיד איבר לעצמו, וזה מטפל ב-[3, 2, 4] עם target 6, בעוד ש-[3, 3] עם target 6 עדיין עובד כי ה-3 הראשון כבר שמור.\nזמן O(n), כי כל חיפוש והכנסה ב-hash הם O(1) בממוצע, ומקום O(n) בשביל המפה. מספרים שליליים ואפס לא דורשים טיפול מיוחד.\nאם המערך היה ממוין, שני מצביעים משני הקצוות היו פותרים את זה בזמן O(n) ובמקום O(1).',
    },
    approach: [
      {
        en: 'Clarify: is there exactly one answer, can values repeat or be negative, do they want indices or values, and is the array sorted?',
        he: 'הבהרה: האם יש תשובה אחת בדיוק, האם ערכים יכולים לחזור או להיות שליליים, האם מחזירים אינדקסים או ערכים, והאם המערך ממוין?',
      },
      {
        en: 'Brute force: check every pair i < j, O(n²) time and O(1) space. Correct, but too slow for 10^4 elements if repeated often.',
        he: 'פתרון נאיבי: לבדוק כל זוג i < j, זמן O(n²) ומקום O(1). נכון, אבל איטי מדי כשיש הרבה איברים.',
      },
      {
        en: 'Insight: for each number we know exactly which partner we need, target - n, so the question becomes have I seen this value before, which a hash map answers in O(1).',
        he: 'התובנה: לכל מספר אנחנו יודעים בדיוק איזה בן זוג צריך, target - n, ולכן השאלה הופכת ל-האם כבר ראיתי את הערך הזה, ו-hash map עונה עליה ב-O(1).',
      },
      {
        en: 'Algorithm: iterate with index i; if target - nums[i] is in the map, return [map[target - nums[i]], i]; otherwise set map[nums[i]] = i.',
        he: 'האלגוריתם: עוברים עם אינדקס i; אם target - nums[i] נמצא במפה מחזירים [map[target - nums[i]], i]; אחרת שומרים map[nums[i]] = i.',
      },
      {
        en: 'Complexity: O(n) time on average, O(n) extra space for the map.',
        he: 'סיבוכיות: זמן O(n) בממוצע, מקום נוסף O(n) בשביל המפה.',
      },
      {
        en: 'Test: [2, 7, 11, 15] with 9 gives [0, 1]; [3, 2, 4] with 6 gives [1, 2] (no self-pairing); [3, 3] with 6 gives [0, 1]; [-1, -2, -3, -4, -5] with -8 gives [2, 4].',
        he: 'בדיקה: [2, 7, 11, 15] עם 9 נותן [0, 1]; [3, 2, 4] עם 6 נותן [1, 2] (בלי זוג עם עצמו); [3, 3] עם 6 נותן [0, 1]; [-1, -2, -3, -4, -5] עם -8 נותן [2, 4].',
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
        en: 'Sorting plus two pointers is O(n log n) and loses the original indices unless you keep them alongside the values.',
        he: 'מיון ושני מצביעים הם O(n log n) ומאבדים את האינדקסים המקוריים, אלא אם שומרים אותם לצד הערכים.',
      },
      {
        en: 'Typical follow-ups: return all pairs, the sorted version (Two Sum II), and 3Sum in O(n²) with sort and two pointers.',
        he: 'שאלות המשך נפוצות: להחזיר את כל הזוגות, הגרסה הממוינת (Two Sum II), ו-3Sum ב-O(n²) עם מיון ושני מצביעים.',
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
      en: 'Fill the array with 1..N in order, then apply the Fisher-Yates shuffle: walk i from N-1 down to 1, pick a random index j in the range [0, i] inclusive, and swap arr[i] with arr[j].\nWhy it works: at each step, the element placed at position i is chosen uniformly from the elements not yet placed, which always sit in the prefix [0, i]. There are N * (N-1) * ... * 2 equally likely sequences of choices, exactly N! of them, one per permutation, so every permutation is equally likely.\nTime O(N) with one random call per position, and O(1) extra space since the shuffle is in place.\nEdge cases and pitfalls: N = 1 needs no swaps, and j may equal i, which is required for uniformity. Picking j from the whole array [0, N-1] at every step looks similar but is biased. In C, rand() % (i + 1) is slightly biased when RAND_MAX + 1 is not a multiple of i + 1, which is why the C++ and Java versions use uniform_int_distribution and nextInt.',
      he: 'ממלאים את המערך ב-1..N לפי הסדר, ואז מפעילים ערבוב Fisher-Yates: עוברים עם i מ-N-1 עד 1, מגרילים אינדקס j בטווח [0, i] כולל, ומחליפים בין arr[i] ל-arr[j].\nלמה זה עובד: בכל שלב, האיבר שמוצב במקום i נבחר באופן אחיד מתוך האיברים שעוד לא הוצבו, והם תמיד יושבים בתחילית [0, i]. יש N * (N-1) * ... * 2 רצפי בחירות, כולם באותה הסתברות, בדיוק N! מהם, אחד לכל תמורה, ולכן כל תמורה מתקבלת באותה הסתברות.\nזמן O(N) עם הגרלה אחת לכל מקום, ומקום נוסף O(1) כי הערבוב נעשה במקום.\nמקרי קצה ומלכודות: עבור N = 1 אין החלפות, ו-j יכול להיות שווה ל-i, וזה הכרחי כדי שההתפלגות תהיה אחידה. הגרלת j מכל המערך [0, N-1] בכל שלב נראית דומה אבל מוטה. ב-C, rand() % (i + 1) מוטה מעט כש-RAND_MAX + 1 לא מתחלק ב-i + 1, ובגלל זה גרסאות ה-C++ וה-Java משתמשות ב-uniform_int_distribution וב-nextInt.',
    },
    approach: [
      {
        en: 'Clarify: must every permutation be equally likely, what range does Rand() return, may I work in place, and how large is N (up to 10^6)?',
        he: 'הבהרה: האם כל תמורה חייבת להיות באותה הסתברות, באיזה טווח Rand() מחזיר, האם מותר לעבוד במקום, ומה הגודל של N (עד 10^6)?',
      },
      {
        en: 'Brute force: draw random values in 1..N and reject ones already used, tracked in a boolean array. Correct, but it needs about N ln N draws on average and has no worst-case bound.',
        he: 'פתרון נאיבי: להגריל ערכים ב-1..N ולדחות כאלה שכבר בשימוש, עם מערך בוליאני למעקב. נכון, אבל צריך בערך N ln N הגרלות בממוצע ואין חסם למקרה הגרוע.',
      },
      {
        en: 'Insight: instead of drawing values, draw positions. Start from the sorted array and, for each slot from the end, choose which of the remaining elements goes there; the remaining ones are always the prefix [0, i].',
        he: 'התובנה: במקום להגריל ערכים, מגרילים מקומות. מתחילים מהמערך הממוין, ולכל תא מהסוף בוחרים איזה מהאיברים שנשארו יגיע אליו; האיברים שנשארו תמיד נמצאים בתחילית [0, i].',
      },
      {
        en: 'Algorithm: arr[k] = k + 1 for all k; for i from N-1 down to 1, j = random integer in [0, i], swap arr[i] and arr[j].',
        he: 'האלגוריתם: arr[k] = k + 1 לכל k; עבור i מ-N-1 עד 1, j = מספר אקראי ב-[0, i], ומחליפים בין arr[i] ל-arr[j].',
      },
      {
        en: 'Complexity: O(N) time, O(1) extra space, exactly N-1 random calls.',
        he: 'סיבוכיות: זמן O(N), מקום נוסף O(1), בדיוק N-1 הגרלות.',
      },
      {
        en: 'Test: N = 1 and N = 2; check that sorting the output gives 1..N; run N = 3 many times and confirm each of the 6 permutations appears about 1/6 of the time.',
        he: 'בדיקה: N = 1 ו-N = 2; לוודא שמיון הפלט נותן 1..N; להריץ N = 3 הרבה פעמים ולוודא שכל אחת מ-6 התמורות מופיעה בערך בשישית מהמקרים.',
      },
    ],
    keyPoints: [
      {
        en: 'Name the algorithm: Fisher-Yates (Knuth) shuffle; std::shuffle, random.shuffle and Collections.shuffle implement it.',
        he: 'לציין את שם האלגוריתם: Fisher-Yates (או Knuth shuffle); std::shuffle, random.shuffle ו-Collections.shuffle מממשים אותו.',
      },
      {
        en: 'The naive swap with a random j in [0, N-1] gives N^N equally likely outcomes, which is not divisible by N! for N ≥ 3, so it must be biased.',
        he: 'ההחלפה הנאיבית עם j אקראי ב-[0, N-1] נותנת N^N תוצאות שוות הסתברות, מספר שלא מתחלק ב-N! עבור N ≥ 3, ולכן היא בהכרח מוטה.',
      },
      {
        en: 'RAND_MAX can be as small as 32767, so for large N, rand() alone cannot even reach every index.',
        he: 'RAND_MAX יכול להיות קטן כמו 32767, ולכן עבור N גדול rand() לבדו אפילו לא מגיע לכל האינדקסים.',
      },
      {
        en: 'Seed once (srand at program start), never inside the loop; for security-sensitive shuffles use a cryptographic RNG.',
        he: 'לאתחל seed פעם אחת (srand בתחילת התוכנית), אף פעם לא בתוך הלולאה; לערבוב רגיש לאבטחה משתמשים ב-RNG קריפטוגרפי.',
      },
      {
        en: 'The reject-if-used approach is the coupon collector problem: about N ln N draws on average, and the last numbers are the slowest to hit.',
        he: 'גישת להגריל ולדחות אם כבר בשימוש היא בעיית אספן הקופונים: בערך N ln N הגרלות בממוצע, והמספרים האחרונים הם הכי קשים לפגוע בהם.',
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
      en: 'Test the lowest bit: n & 1 is 1 for odd numbers and 0 for even numbers. In binary, every bit except bit 0 stands for a multiple of 2, so parity depends only on bit 0. It also holds for negatives in two\'s complement: -7 is ...11111001, lowest bit 1, so it is odd. Time and space are O(1), a single AND instruction.\nIf bit operations are also forbidden, use integer division: (n / 2) * 2 == n is true exactly for even numbers, because division drops the remainder. In C this works for negatives too, since division truncates toward zero: -7 / 2 is -3, and -3 * 2 = -6, which is not -7.\nPitfall: in C, C++ and Java, == binds tighter than &, so n & 1 == 0 means n & (1 == 0), which is always 0. Write (n & 1) == 0. In Python the precedence is the other way round, so n & 1 == 0 works as written.',
      he: 'בודקים את הביט הנמוך: n & 1 שווה 1 למספר אי-זוגי ו-0 למספר זוגי. בייצוג בינארי כל ביט חוץ מביט 0 מייצג כפולה של 2, ולכן הזוגיות תלויה רק בביט 0. זה נכון גם לשליליים במשלים ל-2: -7 הוא ...11111001, הביט הנמוך הוא 1, ולכן הוא אי-זוגי. זמן ומקום O(1), פקודת AND אחת.\nאם גם פעולות על ביטים אסורות, משתמשים בחילוק שלמים: (n / 2) * 2 == n מתקיים בדיוק למספרים זוגיים, כי החילוק זורק את השארית. ב-C זה עובד גם לשליליים, כי החילוק מעגל לכיוון אפס: -7 / 2 הוא -3, ו-(-3) * 2 הוא -6, שזה לא -7.\nמלכודת: ב-C, ב-C++ וב-Java האופרטור == קודם ל-&, ולכן n & 1 == 0 פירושו n & (1 == 0), שתמיד שווה 0. צריך לכתוב (n & 1) == 0. ב-Python סדר הקדימויות הפוך, ולכן שם n & 1 == 0 עובד כמו שהוא כתוב.',
    },
    approach: [
      {
        en: 'Clarify: signed or unsigned, are negatives allowed, and are division or bit operators also forbidden?',
        he: 'הבהרה: signed או unsigned, האם מותרים שליליים, והאם גם חילוק או אופרטורים על ביטים אסורים?',
      },
      {
        en: 'Brute force: subtract 2 repeatedly until you reach 0 or 1, which is O(|n|) and painful for large or negative values.',
        he: 'פתרון נאיבי: להחסיר 2 שוב ושוב עד שמגיעים ל-0 או ל-1, זמן O(|n|) ובעייתי לערכים גדולים או שליליים.',
      },
      {
        en: 'Insight: parity is the remainder mod 2, and in binary that remainder is exactly the lowest bit.',
        he: 'התובנה: זוגיות היא השארית בחלוקה ל-2, ובבינארי השארית הזאת היא בדיוק הביט הנמוך.',
      },
      {
        en: 'Algorithm: return (n & 1) == 0 for even; as a fallback without bits, return (n / 2) * 2 == n.',
        he: 'האלגוריתם: מחזירים (n & 1) == 0 לזוגי; כגיבוי בלי ביטים, מחזירים (n / 2) * 2 == n.',
      },
      {
        en: 'Complexity: O(1) time and O(1) space.',
        he: 'סיבוכיות: זמן O(1) ומקום O(1).',
      },
      {
        en: 'Test: 0 (even), 1, 10, -7, -8, INT_MAX (odd) and INT_MIN (even).',
        he: 'בדיקה: 0 (זוגי), 1, 10, -7, -8, INT_MAX (אי-זוגי) ו-INT_MIN (זוגי).',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why bit 0 decides parity: every other bit is a power of two that is at least 2.',
        he: 'להסביר למה ביט 0 קובע זוגיות: כל ביט אחר הוא חזקה של 2 שהיא לפחות 2.',
      },
      {
        en: 'Operator precedence: always parenthesise (n & 1) in C, C++ and Java.',
        he: 'קדימות אופרטורים: תמיד לשים סוגריים סביב (n & 1) ב-C, ב-C++ וב-Java.',
      },
      {
        en: 'n % 2 == 1 is false for negative odd numbers in C and Java because the remainder is -1; the bit test avoids that trap.',
        he: 'n % 2 == 1 יוצא false למספרים שליליים אי-זוגיים ב-C וב-Java כי השארית היא -1; בדיקת הביט נמנעת מהמלכודת הזאת.',
      },
      {
        en: 'Two\'s complement is guaranteed by C23 and C++20 and is universal in practice, so n & 1 is reliable for negatives.',
        he: 'משלים ל-2 מובטח מ-C23 ומ-C++20 ונהוג בפועל בכל מקום, ולכן n & 1 אמין גם לשליליים.',
      },
      {
        en: 'Compilers turn n % 2 == 0 into the same AND instruction, so the trick is about understanding, not speed.',
        he: 'קומפיילרים הופכים את n % 2 == 0 לאותה פקודת AND, כך שהטריק הוא עניין של הבנה ולא של מהירות.',
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
      en: 'Object-oriented programming organises code around objects that combine state and behaviour, and its four classic principles are encapsulation, abstraction, inheritance and polymorphism.\n- Encapsulation: keep the data private and change it only through methods that enforce the rules. Example: a BankAccount with a private balance, where withdraw() refuses to overdraw, so no caller can break that invariant.\n- Abstraction: expose what an object does and hide how it does it. Example: a Sensor interface with read(); the caller does not care whether it talks over I2C, SPI or a simulator.\n- Inheritance: a class derives from another, reusing its code and expressing an is-a relationship. Example: Circle and Square derive from Shape and share its position and name handling.\n- Polymorphism: one call, different behaviour depending on the actual type. Example: looping over a list of Shape references and calling area() runs the right implementation at run time. In C++ this is dynamic dispatch through virtual functions and a vtable.\nA classic follow-up is encapsulation versus abstraction: encapsulation hides data to protect invariants, abstraction hides complexity behind a simple interface.\nTrade-offs: deep inheritance trees are fragile, because a change in the base class ripples into every subclass, so prefer composition (a Car has an Engine) and inherit mainly from interfaces. A subclass must also respect the Liskov substitution principle: it has to work anywhere the base class is expected.\nDepth point for C++: a base class used polymorphically needs a virtual destructor, otherwise deleting a derived object through a base pointer is undefined behaviour.',
      he: 'תכנות מונחה עצמים מארגן את הקוד סביב אובייקטים שמשלבים מצב והתנהגות, וארבעת העקרונות הקלאסיים שלו הם אנקפסולציה, הפשטה, ירושה ופולימורפיזם.\n- אנקפסולציה (כימוס): הנתונים פרטיים, ומשנים אותם רק דרך מתודות שאוכפות את הכללים. דוגמה: BankAccount עם balance פרטי, שבו withdraw() מסרב למשוך מעבר ליתרה, כך שאף קוד חיצוני לא יכול לשבור את ה-invariant.\n- הפשטה: חושפים מה האובייקט עושה ומסתירים איך. דוגמה: ממשק Sensor עם read(); מי שקורא לו לא מתעניין אם הוא מדבר ב-I2C, ב-SPI או עם סימולטור.\n- ירושה: מחלקה נגזרת ממחלקה אחרת, משתמשת שוב בקוד שלה ומבטאת יחס is-a. דוגמה: Circle ו-Square יורשים מ-Shape וחולקים את הטיפול במיקום ובשם.\n- פולימורפיזם: אותה קריאה, התנהגות שונה לפי הטיפוס בפועל. דוגמה: לולאה על רשימה של הפניות ל-Shape שקוראת ל-area() מריצה את המימוש הנכון בזמן ריצה. ב-C++ זה dynamic dispatch דרך פונקציות virtual ו-vtable.\nשאלת המשך קלאסית היא ההבדל בין אנקפסולציה להפשטה: אנקפסולציה מסתירה נתונים כדי להגן על invariants, הפשטה מסתירה מורכבות מאחורי ממשק פשוט.\ntrade-offs: עצי ירושה עמוקים הם שבירים, כי שינוי במחלקת הבסיס מתגלגל לכל המחלקות היורשות, ולכן מעדיפים composition (ל-Car יש Engine) ויורשים בעיקר מממשקים. מחלקה יורשת חייבת גם לכבד את עקרון ההחלפה של Liskov: היא צריכה לעבוד בכל מקום שבו מצפים למחלקת הבסיס.\nנקודה שמראה עומק ב-C++: מחלקת בסיס שמשתמשים בה בצורה פולימורפית צריכה destructor וירטואלי, אחרת מחיקה של אובייקט נגזר דרך מצביע לבסיס היא undefined behaviour.',
    },
    keyPoints: [
      {
        en: 'Give a concrete, domain-relevant example for each principle, not just a definition.',
        he: 'לתת לכל עיקרון דוגמה מוחשית ורלוונטית לתחום, לא רק הגדרה.',
      },
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
      en: 'static is an overloaded keyword: in C it controls either linkage or storage duration depending on where it appears, and C++ adds meanings for class members.\nIn C:\n- On a global variable or a function: internal linkage. The name is visible only inside its translation unit, so two files can each define a static helper() without a linker clash. It is C\'s way of making something private to a module.\n- On a local variable: static storage duration. The variable is initialised once, before the program starts (to zero if there is no initialiser), keeps its value between calls and lives until the program ends, but its scope is still the function. It lives in .data or .bss, not on the stack.\nC++ keeps both meanings and adds:\n- A static data member: one copy shared by all objects of the class. It must be defined in exactly one .cpp file, unless it is declared inline (C++17).\n- A static member function: it belongs to the class, has no this pointer, and can access only static members directly.\n- Function-local statics with non-trivial constructors are initialised the first time control reaches them, and since C++11 that initialisation is thread-safe.\nEmbedded example: a driver .c file keeps its state in static variables and exports only accessor functions in the header.\nPitfalls: a static local makes a function non-reentrant; static in a header gives every .c file its own private copy; and the initialisation order of globals across files is unspecified.',
      he: 'static היא מילה עם כמה משמעויות: ב-C היא קובעת linkage או storage duration, תלוי איפה היא מופיעה, ו-C++ מוסיפה משמעויות לחברי מחלקה.\nב-C:\n- על משתנה גלובלי או פונקציה: internal linkage. השם נראה רק בתוך ה-translation unit שלו, כך ששני קבצים יכולים להגדיר כל אחד static helper() בלי התנגשות ב-linker. זו הדרך של C להפוך משהו לפרטי בתוך מודול.\n- על משתנה מקומי: static storage duration. המשתנה מאותחל פעם אחת, לפני תחילת התוכנית (לאפס אם אין ערך התחלתי), שומר את ערכו בין קריאות וחי עד סוף התוכנית, אבל הטווח שלו נשאר הפונקציה. הוא יושב ב-.data או ב-.bss, לא על ה-stack.\nC++ שומרת את שתי המשמעויות ומוסיפה:\n- static data member: עותק אחד שמשותף לכל האובייקטים של המחלקה. חייבים להגדיר אותו בדיוק בקובץ .cpp אחד, אלא אם הוא מוצהר inline (C++17).\n- static member function: שייכת למחלקה, אין לה מצביע this, והיא ניגשת ישירות רק לחברים סטטיים.\n- משתנים סטטיים מקומיים עם constructor לא טריוויאלי מאותחלים בפעם הראשונה שהביצוע מגיע אליהם, ומאז C++11 האתחול הזה בטוח ל-threads.\nדוגמה מ-embedded: קובץ .c של דרייבר שומר את המצב שלו במשתנים סטטיים ומייצא ב-header רק פונקציות גישה.\nמלכודות: static מקומי הופך פונקציה ל-non-reentrant; static ב-header נותן לכל קובץ .c עותק פרטי משלו; וסדר האתחול של משתנים גלובליים בין קבצים לא מוגדר.',
    },
    keyPoints: [
      {
        en: 'Separate the two C meanings precisely: linkage for globals and functions, lifetime (storage duration) for locals.',
        he: 'להפריד במדויק בין שתי המשמעויות ב-C: linkage לגלובליים ולפונקציות, אורך חיים (storage duration) למקומיים.',
      },
      {
        en: 'A static local changes lifetime, not scope: it is still visible only inside its function.',
        he: 'static מקומי משנה את אורך החיים, לא את הטווח: הוא עדיין נראה רק בתוך הפונקציה שלו.',
      },
      {
        en: 'Static member functions have no this pointer, so they cannot be virtual and cannot touch instance members directly.',
        he: 'ל-static member functions אין this, ולכן הן לא יכולות להיות virtual ולא יכולות לגשת ישירות לחברי מופע.',
      },
      {
        en: 'Since C++11, static local initialisation is thread-safe (magic statics), the basis of the Meyers singleton.',
        he: 'מאז C++11 האתחול של static מקומי בטוח ל-threads (magic statics), וזה הבסיס ל-Meyers singleton.',
      },
      {
        en: 'Putting a static variable in a header creates a separate copy per translation unit, a classic embedded bug.',
        he: 'משתנה static ב-header יוצר עותק נפרד בכל translation unit, באג קלאסי ב-embedded.',
      },
      {
        en: 'Static locals make functions non-reentrant, which matters for ISRs and multithreaded code.',
        he: 'משתנים סטטיים מקומיים הופכים פונקציות ל-non-reentrant, וזה חשוב ב-ISR ובקוד מרובה threads.',
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
      en: 'Scan the array once with a hash set. For each value, if it is already in the set, return true immediately; otherwise insert it. If the loop finishes, every value was distinct and the answer is false.\nWhy it works: the set always holds exactly the values seen so far, so a hit means the current value appeared earlier. The early exit makes inputs with an early duplicate finish fast. In C++ one insert both checks and adds: insert(n).second is false when the value was already there.\nTime O(n) on average, space O(n) in the worst case, when all values are distinct.\nThe trade-off to mention: sort and compare neighbours, O(n log n) time with O(1) extra space if an in-place sort is allowed, though it modifies the input. For a small known value range, a boolean or bit array is even faster.\nEdge cases: an empty or one-element array returns false, and negative numbers and zero need nothing special.',
      he: 'סורקים את המערך פעם אחת עם hash set. לכל ערך, אם הוא כבר ב-set מחזירים true מיד; אחרת מכניסים אותו. אם הלולאה הסתיימה, כל הערכים היו שונים והתשובה היא false.\nלמה זה עובד: ה-set מחזיק תמיד בדיוק את הערכים שכבר ראינו, ולכן פגיעה אומרת שהערך הנוכחי הופיע קודם. היציאה המוקדמת גורמת לקלטים עם כפילות מוקדמת להסתיים מהר. ב-C++ הכנסה אחת גם בודקת וגם מוסיפה: insert(n).second הוא false כשהערך כבר היה שם.\nזמן O(n) בממוצע, מקום O(n) במקרה הגרוע, כשכל הערכים שונים.\nה-trade-off שכדאי להזכיר: מיון והשוואת שכנים, זמן O(n log n) עם מקום נוסף O(1) אם מותר למיין במקום, אבל זה משנה את הקלט. כשטווח הערכים קטן וידוע, מערך בוליאני או מערך ביטים מהיר עוד יותר.\nמקרי קצה: מערך ריק או עם איבר אחד מחזיר false, ומספרים שליליים ואפס לא דורשים טיפול מיוחד.',
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
        en: 'Insight: the real question is have I seen this value before, which a hash set answers in O(1); alternatively, sorting puts equal values next to each other.',
        he: 'התובנה: השאלה האמיתית היא האם כבר ראיתי את הערך הזה, ו-hash set עונה עליה ב-O(1); לחלופין, מיון שם ערכים שווים אחד ליד השני.',
      },
      {
        en: 'Algorithm: for each n, if n is in the set return true, else add n; after the loop return false.',
        he: 'האלגוריתם: לכל n, אם n ב-set מחזירים true, אחרת מוסיפים אותו; אחרי הלולאה מחזירים false.',
      },
      {
        en: 'Complexity: O(n) average time and O(n) space, versus O(n log n) and O(1) for the sorting version.',
        he: 'סיבוכיות: זמן O(n) בממוצע ומקום O(n), לעומת O(n log n) ו-O(1) בגרסת המיון.',
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
        en: 'State the time versus memory trade-off: hash set O(n) time and O(n) space, sorting O(n log n) time and O(1) space.',
        he: 'לציין את ה-trade-off בין זמן לזיכרון: hash set בזמן O(n) ובמקום O(n), מיון בזמן O(n log n) ובמקום O(1).',
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
      en: 'If the lengths differ, return false right away. Otherwise count character frequencies: increment a counter for every character of s, then decrement for every character of t. If a counter goes below zero while processing t, then t has that character more times than s, so return false immediately. If the loop finishes, the strings are anagrams.\nWhy the early check is enough: the lengths are equal, so if no counter ever goes negative, the decrements exactly cancel the increments and every counter ends at zero.\nFor lowercase English letters, an int array of 26 indexed by c - \'a\' is the fastest choice: O(n) time and O(1) space, since the array size does not depend on the input. The Python version uses Counter, a hash map, which also works for any characters.\nSorting both strings and comparing them is O(n log n) and simpler to write. For Unicode input, switch to a hash map, and consider normalisation, because the same visible character can be encoded in different ways.',
      he: 'אם האורכים שונים, מחזירים false מיד. אחרת סופרים תדירויות של תווים: מגדילים מונה לכל תו ב-s, ואז מקטינים לכל תו ב-t. אם מונה יורד מתחת לאפס בזמן המעבר על t, סימן שב-t התו הזה מופיע יותר פעמים מאשר ב-s, ולכן מחזירים false מיד. אם הלולאה הסתיימה, המחרוזות הן אנגרמות.\nלמה הבדיקה המוקדמת מספיקה: האורכים שווים, ולכן אם אף מונה לא ירד מתחת לאפס, ההקטנות מבטלות בדיוק את ההגדלות וכל מונה מסתיים באפס.\nלאותיות אנגליות קטנות, מערך int בגודל 26 עם אינדקס c - \'a\' הוא הבחירה המהירה ביותר: זמן O(n) ומקום O(1), כי גודל המערך לא תלוי בקלט. גרסת ה-Python משתמשת ב-Counter, שהוא hash map, ועובדת גם לכל סוג של תו.\nמיון שתי המחרוזות והשוואה הם O(n log n) ופשוטים יותר לכתיבה. לקלט Unicode עוברים ל-hash map, ושוקלים נרמול, כי אותו תו שנראה זהה יכול להיות מקודד בכמה דרכים.',
    },
    approach: [
      {
        en: 'Clarify: only lowercase letters, or also uppercase, spaces and Unicode? Is the comparison case-sensitive?',
        he: 'הבהרה: רק אותיות קטנות, או גם אותיות גדולות, רווחים ו-Unicode? האם ההשוואה רגישה לגודל אותיות?',
      },
      {
        en: 'Brute force: sort both strings and compare, O(n log n) time; a naive version that searches and removes each character is O(n²).',
        he: 'פתרון נאיבי: למיין את שתי המחרוזות ולהשוות, זמן O(n log n); גרסה נאיבית יותר שמחפשת ומוחקת כל תו היא O(n²).',
      },
      {
        en: 'Insight: two strings are anagrams exactly when every character has the same count in both, so compare frequency counts instead of orders.',
        he: 'התובנה: שתי מחרוזות הן אנגרמות בדיוק כשלכל תו יש אותה כמות בשתיהן, ולכן משווים ספירות ולא סדר.',
      },
      {
        en: 'Algorithm: if lengths differ return false; count[c - \'a\']++ for s; for t decrement and return false if a count drops below zero; return true.',
        he: 'האלגוריתם: אם האורכים שונים מחזירים false; count[c - \'a\']++ לכל תו ב-s; לכל תו ב-t מקטינים ומחזירים false אם מונה יורד מתחת לאפס; בסוף מחזירים true.',
      },
      {
        en: 'Complexity: O(n) time, O(1) space for a fixed alphabet, O(k) for k distinct characters with a hash map.',
        he: 'סיבוכיות: זמן O(n), מקום O(1) לאלפבית קבוע, ו-O(k) עבור k תווים שונים עם hash map.',
      },
      {
        en: 'Test: anagram and nagaram (true), rat and car (false), a and ab (different lengths), aab and abb (same letters, different counts), two empty strings (true).',
        he: 'בדיקה: anagram ו-nagaram (true), rat ו-car (false), a ו-ab (אורכים שונים), aab ו-abb (אותן אותיות, כמויות שונות), שתי מחרוזות ריקות (true).',
      },
    ],
    keyPoints: [
      {
        en: 'The length check first is both a correctness shortcut and what makes the negative-counter early exit valid.',
        he: 'בדיקת האורך בהתחלה היא גם קיצור דרך וגם מה שהופך את היציאה המוקדמת על מונה שלילי לתקינה.',
      },
      {
        en: 'A fixed array of 26 is O(1) space because its size does not grow with the input.',
        he: 'מערך קבוע של 26 הוא מקום O(1) כי הגודל שלו לא גדל עם הקלט.',
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
      en: 'Use Kadane\'s algorithm. Walk the array once, keeping two values: current, the best sum of a subarray that must end at the current index, and best, the best sum found anywhere so far. For each element n, set current = max(n, current + n), meaning either extend the previous subarray or start a new one at n, then best = max(best, current).\nWhy it works: every optimal subarray ends at some index, and the best subarray ending at index i is either nums[i] alone or nums[i] appended to the best subarray ending at i - 1. If the previous running sum is negative, it can only hurt, so we drop it. This is dynamic programming with the table compressed into one variable.\nTime O(n), space O(1).\nEdge cases: initialise both values with nums[0], not 0, so an all-negative array like [-3, -1, -2] correctly returns -1. A single element returns itself. To return the subarray itself, record the start index whenever we restart and the end index whenever best improves.',
      he: 'משתמשים באלגוריתם של Kadane. עוברים על המערך פעם אחת ושומרים שני ערכים: current, הסכום הטוב ביותר של תת-מערך שחייב להסתיים באינדקס הנוכחי, ו-best, הסכום הטוב ביותר שנמצא עד עכשיו בכל מקום. לכל איבר n קובעים current = max(n, current + n), כלומר או שמאריכים את תת-המערך הקודם או שמתחילים חדש ב-n, ואז best = max(best, current).\nלמה זה עובד: כל תת-מערך אופטימלי מסתיים באינדקס כלשהו, ותת-המערך הטוב ביותר שמסתיים באינדקס i הוא או nums[i] לבד, או nums[i] שמוצמד לתת-המערך הטוב ביותר שמסתיים ב-i - 1. אם הסכום הרץ הקודם שלילי, הוא רק מזיק, ולכן זורקים אותו. זה תכנות דינמי שבו הטבלה מכווצת למשתנה אחד.\nזמן O(n), מקום O(1).\nמקרי קצה: מאתחלים את שני הערכים ב-nums[0] ולא ב-0, כדי שמערך שכולו שלילי כמו [-3, -1, -2] יחזיר נכון -1. איבר יחיד מחזיר את עצמו. כדי להחזיר את תת-המערך עצמו, שומרים את אינדקס ההתחלה בכל פעם שמתחילים מחדש ואת אינדקס הסוף בכל פעם ש-best משתפר.',
    },
    approach: [
      {
        en: 'Clarify: can the array be empty, can all values be negative, and do they want the sum or the subarray boundaries?',
        he: 'הבהרה: האם המערך יכול להיות ריק, האם כל הערכים יכולים להיות שליליים, והאם מבקשים את הסכום או את גבולות תת-המערך?',
      },
      {
        en: 'Brute force: try every start and extend to every end with a running sum, O(n²) time; the fully naive version that re-sums each subarray is O(n³).',
        he: 'פתרון נאיבי: לנסות כל התחלה ולהאריך לכל סוף עם סכום רץ, זמן O(n²); הגרסה הנאיבית לגמרי שסוכמת כל תת-מערך מחדש היא O(n³).',
      },
      {
        en: 'Insight: think about the best subarray ending at each index; it either extends the best one ending at the previous index or starts fresh, and a negative prefix is never worth keeping.',
        he: 'התובנה: לחשוב על תת-המערך הטוב ביותר שמסתיים בכל אינדקס; הוא או ממשיך את הטוב ביותר שהסתיים באינדקס הקודם או מתחיל מחדש, ותחילית שלילית אף פעם לא כדאית.',
      },
      {
        en: 'Algorithm: best = current = nums[0]; for each next n, current = max(n, current + n) and best = max(best, current); return best.',
        he: 'האלגוריתם: best = current = nums[0]; לכל n הבא, current = max(n, current + n) ו-best = max(best, current); מחזירים best.',
      },
      {
        en: 'Complexity: O(n) time, O(1) space.',
        he: 'סיבוכיות: זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: [-2, 1, -3, 4, -1, 2, 1, -5, 4] gives 6, [-3, -1, -2] gives -1, [5] gives 5, [1, 2, 3] gives 6.',
        he: 'בדיקה: [-2, 1, -3, 4, -1, 2, 1, -5, 4] נותן 6, [-3, -1, -2] נותן -1, [5] נותן 5, [1, 2, 3] נותן 6.',
      },
    ],
    keyPoints: [
      {
        en: 'Define current precisely: the best sum of a subarray that ends exactly at index i. That definition is the whole proof.',
        he: 'להגדיר את current במדויק: הסכום הטוב ביותר של תת-מערך שמסתיים בדיוק באינדקס i. ההגדרה הזאת היא כל ההוכחה.',
      },
      {
        en: 'Initialising with 0 is the classic bug: it returns 0 for all-negative input instead of the largest element.',
        he: 'אתחול ב-0 הוא הבאג הקלאסי: הוא מחזיר 0 לקלט שכולו שלילי במקום את האיבר הגדול ביותר.',
      },
      {
        en: 'Call it dynamic programming: dp[i] = max(nums[i], dp[i-1] + nums[i]), compressed to O(1) space.',
        he: 'לקרוא לזה בשמו, תכנות דינמי: dp[i] = max(nums[i], dp[i-1] + nums[i]), מכווץ למקום O(1).',
      },
      {
        en: 'Mention the divide and conquer O(n log n) solution as an alternative some interviewers ask for.',
        he: 'להזכיר את פתרון ה-divide and conquer ב-O(n log n) כחלופה שחלק מהמראיינים מבקשים.',
      },
      {
        en: 'Follow-ups: return the indices, maximum product subarray (track both min and max), and circular arrays.',
        he: 'שאלות המשך: להחזיר את האינדקסים, תת-מערך עם מכפלה מקסימלית (שומרים גם מינימום וגם מקסימום), ומערך מעגלי.',
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
      en: 'Scan the prices once, keeping the lowest price seen so far and the best profit so far. For each day, update lowest = min(lowest, price), then compute the profit of selling today, price - lowest, and update best if it is larger.\nWhy it works: for a sale on day j, the best purchase is the minimum price on any day up to j, and that is exactly what lowest holds at that moment. Trying every possible sell day with its best buy day covers every valid transaction, and because lowest only includes days up to today, we never sell before buying. Starting best at 0 handles falling prices: the answer is 0, meaning no transaction.\nTime O(n), space O(1).\nEdge cases: an empty or one-day array returns 0, and equal prices give 0. Updating lowest before computing the profit allows a same-day buy and sell with profit 0, which is harmless. A new minimum late in the array matters only if a higher price comes after it.',
      he: 'סורקים את המחירים פעם אחת ושומרים את המחיר הנמוך ביותר עד כה ואת הרווח הטוב ביותר עד כה. בכל יום מעדכנים lowest = min(lowest, price), ואז מחשבים את הרווח ממכירה היום, price - lowest, ומעדכנים את best אם הוא גדול יותר.\nלמה זה עובד: למכירה ביום j, הקנייה הטובה ביותר היא המחיר המינימלי בכל יום עד j, ובדיוק את זה lowest מחזיק באותו רגע. בדיקה של כל יום מכירה אפשרי עם יום הקנייה הטוב ביותר שלו מכסה את כל העסקאות החוקיות, ומכיוון ש-lowest כולל רק ימים עד היום, אף פעם לא מוכרים לפני שקונים. אתחול best ל-0 מטפל במחירים יורדים: התשובה היא 0, כלומר לא מבצעים עסקה.\nזמן O(n), מקום O(1).\nמקרי קצה: מערך ריק או של יום אחד מחזיר 0, ומחירים שווים נותנים 0. עדכון lowest לפני חישוב הרווח מאפשר קנייה ומכירה באותו יום ברווח 0, וזה לא מזיק. מינימום חדש בסוף המערך משנה משהו רק אם בא אחריו מחיר גבוה יותר.',
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
        en: 'Insight: fix the sell day; the best buy for it is simply the minimum price before it, which can be maintained while scanning.',
        he: 'התובנה: מקבעים את יום המכירה; הקנייה הטובה ביותר עבורו היא פשוט המחיר המינימלי לפניו, ואפשר לתחזק אותו תוך כדי הסריקה.',
      },
      {
        en: 'Algorithm: lowest = infinity, best = 0; for each price, lowest = min(lowest, price), best = max(best, price - lowest); return best.',
        he: 'האלגוריתם: lowest = אינסוף, best = 0; לכל מחיר, lowest = min(lowest, price), best = max(best, price - lowest); מחזירים best.',
      },
      {
        en: 'Complexity: O(n) time, O(1) space.',
        he: 'סיבוכיות: זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: [7, 1, 5, 3, 6, 4] gives 5, [7, 6, 4, 3, 1] gives 0, [2, 4, 1] gives 2 (the minimum comes last), [1] gives 0.',
        he: 'בדיקה: [7, 1, 5, 3, 6, 4] נותן 5, [7, 6, 4, 3, 1] נותן 0, [2, 4, 1] נותן 2 (המינימום מגיע בסוף), [1] נותן 0.',
      },
    ],
    keyPoints: [
      {
        en: 'The tempting answer max(prices) - min(prices) ignores order: [2, 4, 1] gives 3 but the real answer is 2.',
        he: 'התשובה המפתה max(prices) - min(prices) מתעלמת מהסדר: [2, 4, 1] נותן 3 אבל התשובה האמיתית היא 2.',
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
      {
        en: 'Harder variants (at most k transactions, cooldown, fees) are solved with a small state-machine DP.',
        he: 'גרסאות קשות יותר (לכל היותר k עסקאות, cooldown, עמלות) נפתרות ב-DP עם מכונת מצבים קטנה.',
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
      en: 'Use a dummy head node and a tail pointer. While both lists are non-empty, compare their heads, link the smaller node after tail, advance that list, and move tail forward. When one list runs out, link the whole remainder of the other in one step, since it is already sorted. Return dummy.next.\nWhy it works: at every step the smallest remaining node overall is one of the two heads, so the output is built in sorted order. The dummy node removes the special case of choosing the first head and handles an empty input list naturally.\nTime O(n + m), since each node is visited once. Extra space O(1), because we re-link existing nodes instead of allocating new ones.\nUsing <= when comparing takes from the first list on ties, which keeps the merge stable. Edge cases: either or both lists empty, very different lengths, and duplicate values. The recursive version is elegant but uses O(n + m) stack depth, which can overflow on long lists, an important point on embedded targets with small stacks.',
      he: 'משתמשים בצומת דמה (dummy) כראש ובמצביע tail. כל עוד שתי הרשימות לא ריקות, משווים את הראשים שלהן, מחברים את הצומת הקטן יותר אחרי tail, מקדמים את הרשימה הזאת, ומזיזים את tail קדימה. כשרשימה אחת נגמרת, מחברים את כל השארית של השנייה בצעד אחד, כי היא כבר ממוינת. מחזירים את dummy.next.\nלמה זה עובד: בכל שלב הצומת הקטן ביותר שנשאר הוא אחד משני הראשים, ולכן הפלט נבנה בסדר ממוין. צומת הדמה חוסך את המקרה המיוחד של בחירת הראש הראשון, ומטפל באופן טבעי ברשימת קלט ריקה.\nזמן O(n + m), כי מבקרים בכל צומת פעם אחת. מקום נוסף O(1), כי מקשרים מחדש צמתים קיימים במקום להקצות חדשים.\nשימוש ב-<= בהשוואה לוקח מהרשימה הראשונה במקרה של שוויון, וזה שומר על מיזוג יציב (stable). מקרי קצה: אחת הרשימות או שתיהן ריקות, אורכים שונים מאוד, וערכים כפולים. הגרסה הרקורסיבית אלגנטית אבל צורכת עומק stack של O(n + m), שיכול לגרום ל-stack overflow ברשימות ארוכות, נקודה חשובה במערכות embedded עם stack קטן.',
    },
    approach: [
      {
        en: 'Clarify: singly linked, sorted ascending, may either list be empty, and must I reuse nodes or may I create new ones?',
        he: 'הבהרה: רשימה חד-כיוונית, ממוינת בסדר עולה, האם אחת הרשימות יכולה להיות ריקה, והאם חייבים להשתמש בצמתים הקיימים או מותר ליצור חדשים?',
      },
      {
        en: 'Brute force: copy all values into an array, sort it and build a new list, O((n + m) log(n + m)) time and O(n + m) space, ignoring that the inputs are sorted.',
        he: 'פתרון נאיבי: להעתיק את כל הערכים למערך, למיין ולבנות רשימה חדשה, זמן O((n + m) log(n + m)) ומקום O(n + m), בלי לנצל את זה שהקלטים ממוינים.',
      },
      {
        en: 'Insight: because both lists are sorted, the next smallest node is always one of the two current heads, as in the merge step of merge sort.',
        he: 'התובנה: מכיוון ששתי הרשימות ממוינות, הצומת הבא הקטן ביותר הוא תמיד אחד משני הראשים הנוכחיים, כמו בשלב המיזוג של merge sort.',
      },
      {
        en: 'Algorithm: dummy and tail = dummy; while a and b, link the smaller head to tail.next and advance; then tail.next = a or b; return dummy.next.',
        he: 'האלגוריתם: dummy ו-tail = dummy; כל עוד a ו-b קיימים, מחברים את הראש הקטן ל-tail.next ומקדמים; אחר כך tail.next = a או b; מחזירים dummy.next.',
      },
      {
        en: 'Complexity: O(n + m) time, O(1) extra space for the iterative version.',
        he: 'סיבוכיות: זמן O(n + m), מקום נוסף O(1) בגרסה האיטרטיבית.',
      },
      {
        en: 'Test: 1->2->4 with 1->3->4 gives 1->1->2->3->4->4; empty with 0 gives 0; both empty gives empty; 1->2->3 with 10 checks the leftover attach.',
        he: 'בדיקה: 1->2->4 עם 1->3->4 נותן 1->1->2->3->4->4; ריקה עם 0 נותן 0; שתיהן ריקות נותן רשימה ריקה; 1->2->3 עם 10 בודק את חיבור השארית.',
      },
    ],
    keyPoints: [
      {
        en: 'The dummy node removes the special case for the head; in C it can live on the stack, so there is nothing to free.',
        he: 'צומת הדמה מבטל את המקרה המיוחד של הראש; ב-C הוא יכול לשבת על ה-stack, כך שאין מה לשחרר.',
      },
      {
        en: 'Attach the leftover list in O(1) instead of looping over it.',
        he: 'לחבר את שארית הרשימה ב-O(1) במקום לעבור עליה בלולאה.',
      },
      {
        en: 'Re-linking nodes gives O(1) extra space; copying into new nodes is O(n + m) and needs allocation.',
        he: 'קישור מחדש של צמתים נותן מקום נוסף O(1); העתקה לצמתים חדשים היא O(n + m) ודורשת הקצאה.',
      },
      {
        en: 'Recursion uses O(n + m) stack: say why the iterative version is safer for long lists.',
        he: 'רקורסיה צורכת O(n + m) של stack: לומר למה הגרסה האיטרטיבית בטוחה יותר לרשימות ארוכות.',
      },
      {
        en: 'Follow-ups: merge k sorted lists with a min-heap in O(N log k), and merge sort on a linked list built on this step.',
        he: 'שאלות המשך: מיזוג k רשימות ממוינות עם min-heap ב-O(N log k), ו-merge sort על רשימה מקושרת שבנוי על השלב הזה.',
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
      en: 'The key observation is about the last move: to stand on step n you arrived either from step n-1 with a single step or from step n-2 with a double step. Those two groups of paths never overlap, so ways(n) = ways(n-1) + ways(n-2). That is exactly the Fibonacci recurrence, with ways(0) = 1 (one way to stay at the bottom: do nothing) and ways(1) = 1.\nNaive recursion recomputes the same subproblems again and again and takes O(2^n) time. Memoization or a bottom-up table fixes that in O(n) time and O(n) space. Since each value depends only on the previous two, I keep just two variables and roll them forward n times: O(n) time, O(1) space.\nEdge cases: n = 1 returns 1, n = 2 returns 2. With n up to 45 the answer is 1,836,311,903, which still fits in a signed 32-bit int, but one step further it would overflow, so for larger n I would use 64-bit integers or big numbers.',
      he: 'התובנה המרכזית היא על הצעד האחרון: כדי לעמוד על מדרגה n הגעתם או ממדרגה n-1 בצעד אחד, או ממדרגה n-2 בצעד כפול. שתי הקבוצות האלה של מסלולים לא חופפות, ולכן ways(n) = ways(n-1) + ways(n-2). זו בדיוק נוסחת פיבונאצ׳י, עם ways(0) = 1 (דרך אחת להישאר למטה: לא לזוז) ו-ways(1) = 1.\nרקורסיה נאיבית מחשבת את אותן תתי-בעיות שוב ושוב ולוקחת O(2^n). עם memoization או טבלה מלמטה למעלה יורדים ל-O(n) זמן ו-O(n) מקום. מכיוון שכל ערך תלוי רק בשני הקודמים, מספיק להחזיק שני משתנים ולגלגל אותם קדימה n פעמים: זמן O(n), מקום O(1).\nמקרי קצה: עבור n = 1 מחזירים 1, ועבור n = 2 מחזירים 2. כש-n מגיע ל-45 התשובה היא 1,836,311,903, שעדיין נכנסת ב-int חתום של 32 ביט, אבל צעד אחד נוסף כבר יגרום ל-overflow, ולכן עבור n גדול יותר עוברים ל-64 ביט או למספרים גדולים.',
    },
    approach: [
      {
        en: 'Clarify: n is at least 1, steps are only 1 or 2, order matters (1+2 and 2+1 are different), and ask about the range of n because of overflow.',
        he: 'לברר: n לפחות 1, הצעדים הם רק 1 או 2, הסדר משנה (1+2 ו-2+1 שונים), ולשאול מה הטווח של n בגלל overflow.',
      },
      {
        en: 'Brute force: recursively try a 1-step and a 2-step from every position. Correct but O(2^n) because subproblems repeat.',
        he: 'Brute force: לנסות ברקורסיה צעד של 1 וצעד של 2 מכל מיקום. נכון, אבל O(2^n) כי תתי-הבעיות חוזרות.',
      },
      {
        en: 'Insight: look at the last move. Every path to n ends with a 1-step from n-1 or a 2-step from n-2, so ways(n) = ways(n-1) + ways(n-2).',
        he: 'התובנה: להסתכל על הצעד האחרון. כל מסלול ל-n מסתיים בצעד 1 מ-n-1 או בצעד 2 מ-n-2, ולכן ways(n) = ways(n-1) + ways(n-2).',
      },
      {
        en: 'Optimal: start with a = ways(0) = 1 and b = ways(1) = 1, and n times set (a, b) to (b, a + b). Return a.',
        he: 'הפתרון האופטימלי: מתחילים עם a = ways(0) = 1 ו-b = ways(1) = 1, ו-n פעמים מעדכנים את (a, b) ל-(b, a + b). מחזירים את a.',
      },
      {
        en: 'Complexity: O(n) time, O(1) space.',
        he: 'סיבוכיות: זמן O(n), מקום O(1).',
      },
      {
        en: 'Test: n = 1 gives 1, n = 2 gives 2, n = 3 gives 3, n = 5 gives 8. Trace the two variables for n = 3 out loud.',
        he: 'בדיקה: n = 1 נותן 1, n = 2 נותן 2, n = 3 נותן 3, n = 5 נותן 8. לעקוב בקול אחרי שני המשתנים עבור n = 3.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain the recurrence from the last move, not just \'it is Fibonacci\'. Interviewers want to see you derive it.',
        he: 'להסביר את הנוסחה מתוך הצעד האחרון, ולא רק להגיד \'זה פיבונאצ׳י\'. המראיין רוצה לראות איך הגעתם לזה.',
      },
      {
        en: 'Name the DP ingredients, overlapping subproblems and optimal substructure, and show the progression: recursion, memoization, table, two variables.',
        he: 'לתת שמות למרכיבי ה-DP, תתי-בעיות חופפות ומבנה אופטימלי, ולהראות את ההתקדמות: רקורסיה, memoization, טבלה, שני משתנים.',
      },
      {
        en: 'State why naive recursion is exponential: the call tree branches in two and repeats the same n values.',
        he: 'להסביר למה רקורסיה נאיבית היא אקספוננציאלית: עץ הקריאות מתפצל לשניים וחוזר על אותם ערכי n.',
      },
      {
        en: 'Mention overflow: the result grows like Fibonacci, so a 32-bit int is safe only up to n = 45.',
        he: 'להזכיר overflow: התוצאה גדלה כמו פיבונאצ׳י, ולכן int של 32 ביט בטוח רק עד n = 45.',
      },
      {
        en: 'Common follow-up: steps of 1, 2 or 3, or an arbitrary set of step sizes. The same idea becomes a sum of dp[n - s] over each allowed step s.',
        he: 'שאלת המשך נפוצה: צעדים של 1, 2 או 3, או קבוצה כלשהי של גדלי צעדים. אותו רעיון הופך לסכום של dp[n - s] על כל צעד מותר s.',
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
      en: 'Maximum depth is defined recursively, so the solution follows the definition: an empty tree has depth 0, and any other tree has depth 1 + max(depth(left), depth(right)). This is a post-order DFS: each node asks both children for their depth, takes the larger one and adds itself.\nIt works because the longest root-to-leaf path must continue into either the left or the right subtree, and the best path inside that subtree is exactly its own maximum depth.\nEvery node is visited once, so time is O(n). Space is O(h) for the call stack, where h is the height: O(log n) for a balanced tree but O(n) for a skewed tree that looks like a linked list.\nThat skewed case is the main pitfall. On a tree with hundreds of thousands of nodes in a line, recursion can overflow the stack. The iterative alternative is a BFS with a queue that processes one level at a time and counts levels, or a DFS with an explicit stack of (node, depth) pairs.',
      he: 'עומק מקסימלי מוגדר באופן רקורסיבי, ולכן הפתרון פשוט הולך לפי ההגדרה: לעץ ריק עומק 0, ולכל עץ אחר עומק 1 + max(depth(left), depth(right)). זו בעצם DFS בסדר post-order: כל צומת שואל את שני הילדים מה העומק שלהם, לוקח את הגדול ומוסיף את עצמו.\nזה עובד כי המסלול הארוך ביותר מהשורש לעלה חייב להמשיך לתת-העץ השמאלי או לימני, והמסלול הטוב ביותר בתוך תת-העץ הוא בדיוק העומק המקסימלי שלו.\nמבקרים בכל צומת פעם אחת, ולכן הזמן הוא O(n). המקום הוא O(h) עבור מחסנית הקריאות, כש-h הוא הגובה: O(log n) בעץ מאוזן, אבל O(n) בעץ מוטה שנראה כמו רשימה מקושרת.\nהמקרה המוטה הזה הוא המלכודת העיקרית. בעץ עם מאות אלפי צמתים בשורה, הרקורסיה עלולה לגרום ל-stack overflow. החלופה האיטרטיבית היא BFS עם תור שמעבד רמה אחת בכל פעם וסופר רמות, או DFS עם stack מפורש של זוגות (node, depth).',
    },
    approach: [
      {
        en: 'Clarify: can the root be null, and is depth counted in nodes or edges? Ask how large and how skewed the tree can be.',
        he: 'לברר: האם השורש יכול להיות null, והאם העומק נספר בצמתים או בקשתות? לשאול כמה גדול ומוטה העץ יכול להיות.',
      },
      {
        en: 'Baseline: enumerate every root-to-leaf path and keep the longest. Done with DFS this is already O(n), so the focus here is a clean recursive definition rather than beating a slow brute force.',
        he: 'נקודת התחלה: לעבור על כל מסלול משורש לעלה ולשמור את הארוך. עם DFS זה כבר O(n), כך שהדגש כאן הוא הגדרה רקורסיבית נקייה ולא שיפור של brute force איטי.',
      },
      {
        en: 'Insight: the depth of a tree depends only on the depths of its two subtrees, so define it recursively with the base case null = 0.',
        he: 'התובנה: העומק של עץ תלוי רק בעומקים של שני תתי-העצים, ולכן מגדירים אותו ברקורסיה עם מקרה בסיס null = 0.',
      },
      {
        en: 'Algorithm: if the node is null return 0, otherwise return 1 + the max of the two recursive calls. Mention the BFS alternative that counts levels with a queue.',
        he: 'האלגוריתם: אם הצומת null מחזירים 0, אחרת מחזירים 1 + המקסימום של שתי הקריאות הרקורסיביות. להזכיר את חלופת ה-BFS שסופרת רמות עם תור.',
      },
      {
        en: 'Complexity: O(n) time, O(h) space for the stack (or O(w) for BFS, where w is the width of the widest level).',
        he: 'סיבוכיות: זמן O(n), מקום O(h) למחסנית (או O(w) ב-BFS, כש-w הוא רוחב הרמה הרחבה ביותר).',
      },
      {
        en: 'Test: an empty tree gives 0, a single node gives 1, the example [3, 9, 20, null, null, 15, 7] gives 3, and a left-only chain of 4 nodes gives 4.',
        he: 'בדיקה: עץ ריק נותן 0, צומת בודד נותן 1, הדוגמה [3, 9, 20, null, null, 15, 7] נותנת 3, ושרשרת שמאלית של 4 צמתים נותנת 4.',
      },
    ],
    keyPoints: [
      {
        en: 'Clarify the definition: depth counted in nodes (single node = 1) or in edges (single node = 0). This problem counts nodes.',
        he: 'לברר את ההגדרה: האם סופרים צמתים (צומת בודד = 1) או קשתות (צומת בודד = 0). כאן סופרים צמתים.',
      },
      {
        en: 'Give space as O(h), not O(1): the recursion stack is real memory, O(n) in the worst case.',
        he: 'לתת מקום O(h) ולא O(1): מחסנית הרקורסיה היא זיכרון אמיתי, O(n) במקרה הגרוע.',
      },
      {
        en: 'Raise the stack-overflow risk on a skewed tree and offer the BFS level-count version as the fix.',
        he: 'להעלות את הסיכון ל-stack overflow בעץ מוטה ולהציע את גרסת ה-BFS שסופרת רמות כפתרון.',
      },
      {
        en: 'Know the cousin problem: minimum depth must stop at the first leaf, and a node with only one child is not a leaf. A classic trap.',
        he: 'להכיר את הבעיה הקרובה: עומק מינימלי צריך לעצור בעלה הראשון, וצומת עם ילד אחד בלבד הוא לא עלה. מלכודת קלאסית.',
      },
      {
        en: 'The same post-order pattern solves \'is the tree balanced\' and \'diameter of a binary tree\', common next questions.',
        he: 'אותה תבנית post-order פותרת את \'האם העץ מאוזן\' ואת \'קוטר של עץ בינארי\', שהן שאלות המשך נפוצות.',
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
      en: 'The trap is checking each node only against its direct children. In [5, 1, 4, null, null, 3, 6], 4 is the right child of 5 but smaller than it. The BST property is a constraint from all ancestors, not only the parent.\nSo I pass an open interval (low, high) down the recursion. The root gets (minus infinity, plus infinity). Going left, the upper bound becomes the current value: (low, node.val). Going right, the lower bound becomes the current value: (node.val, high). A node is valid if low < val < high and both subtrees are valid.\nEach node is checked once: O(n) time and O(h) stack space.\nDetails that matter: strict inequalities, because this definition forbids duplicates; and the sentinel bounds. If a value can be the minimum or maximum int, using INT_MIN as a bound would wrongly reject it, which is why the C++ version uses long long bounds. An equally good alternative is an in-order traversal that checks each value is strictly greater than the previous one.',
      he: 'המלכודת היא לבדוק כל צומת רק מול הילדים הישירים שלו. ב-[5, 1, 4, null, null, 3, 6], 4 הוא הילד הימני של 5 אבל קטן ממנו. תכונת ה-BST היא אילוץ שמגיע מכל האבות, לא רק מההורה.\nלכן מעבירים בירידה ברקורסיה טווח פתוח (low, high). השורש מקבל (מינוס אינסוף, פלוס אינסוף). כשיורדים שמאלה, הגבול העליון הופך לערך הנוכחי: (low, node.val). כשיורדים ימינה, הגבול התחתון הופך לערך הנוכחי: (node.val, high). צומת תקין אם low < val < high ושני תתי-העצים תקינים.\nכל צומת נבדק פעם אחת: זמן O(n) ומקום O(h) במחסנית.\nפרטים שחשובים: אי-שוויונות חזקים, כי ההגדרה הזו אוסרת כפילויות; וערכי הגבול. אם ערך יכול להיות ה-int המינימלי או המקסימלי, שימוש ב-INT_MIN כגבול יפסול אותו בטעות, ולכן גרסת ה-C++ משתמשת בגבולות מסוג long long. חלופה טובה באותה מידה היא סריקת in-order ובדיקה שכל ערך גדול ממש מהקודם.',
    },
    approach: [
      {
        en: 'Clarify: are duplicates allowed, what is the value range (it affects the sentinels), and is an empty tree valid (yes).',
        he: 'לברר: האם מותרות כפילויות, מה טווח הערכים (משפיע על ערכי הגבול), והאם עץ ריק תקין (כן).',
      },
      {
        en: 'Brute force: for each node, scan its whole left subtree for the max and its right subtree for the min. Correct but O(n^2) on a skewed tree.',
        he: 'Brute force: לכל צומת לסרוק את כל תת-העץ השמאלי כדי למצוא מקסימום ואת הימני כדי למצוא מינימום. נכון, אבל O(n^2) בעץ מוטה.',
      },
      {
        en: 'Insight: every node has a valid range inherited from its ancestors, and that range can be passed down instead of recomputed.',
        he: 'התובנה: לכל צומת יש טווח חוקי שעובר בירושה מהאבות, ואפשר להעביר אותו למטה במקום לחשב אותו מחדש.',
      },
      {
        en: 'Algorithm: validate(node, low, high): null returns true; if not low < val < high return false; recurse left with (low, val) and right with (val, high).',
        he: 'האלגוריתם: validate(node, low, high): עבור null מחזירים true; אם לא מתקיים low < val < high מחזירים false; ממשיכים שמאלה עם (low, val) וימינה עם (val, high).',
      },
      {
        en: 'Complexity: O(n) time, O(h) space for the recursion.',
        he: 'סיבוכיות: זמן O(n), מקום O(h) לרקורסיה.',
      },
      {
        en: 'Test: [2, 1, 3] is true, [5, 1, 4, null, null, 3, 6] is false, [2, 2, 2] is false because of duplicates, and a single node holding INT_MIN is true.',
        he: 'בדיקה: [2, 1, 3] נותן true, [5, 1, 4, null, null, 3, 6] נותן false, [2, 2, 2] נותן false בגלל כפילויות, וצומת בודד עם INT_MIN נותן true.',
      },
    ],
    keyPoints: [
      {
        en: 'Give a counterexample where local parent-child checks pass but the tree is invalid, such as [5, 4, 6, null, null, 3, 7]: 3 is in the right subtree of 5. It proves you understand the real constraint.',
        he: 'לתת דוגמה נגדית שבה בדיקה מקומית של הורה וילד עוברת אבל העץ לא תקין, למשל [5, 4, 6, null, null, 3, 7]: 3 נמצא בתת-העץ הימני של 5. זה מוכיח שהבנתם את האילוץ האמיתי.',
      },
      {
        en: 'Ask about duplicates: the strict definition rejects equal values; some variants allow equal keys on one side only.',
        he: 'לשאול על כפילויות: ההגדרה החזקה פוסלת ערכים שווים; יש גרסאות שמתירות ערך שווה רק בצד אחד.',
      },
      {
        en: 'Sentinel pitfall: bounds of INT_MIN or INT_MAX fail on trees that contain those values. Use a wider type, nullable bounds, or pass node pointers as bounds.',
        he: 'מלכודת ערכי הגבול: גבולות INT_MIN או INT_MAX נכשלים בעץ שמכיל את הערכים האלה. משתמשים בטיפוס רחב יותר, בגבולות שיכולים להיות null, או מעבירים pointers לצמתים בתור גבולות.',
      },
      {
        en: 'Alternative: an in-order traversal of a BST yields a strictly increasing sequence; track only the previous value, no array needed.',
        he: 'חלופה: סריקת in-order של BST נותנת סדרה עולה ממש; מספיק לזכור את הערך הקודם, בלי מערך.',
      },
      {
        en: 'Mention early exit: the \'and\' short-circuits, so the right subtree is not explored once the left one fails.',
        he: 'להזכיר יציאה מוקדמת: ה-and מקצר את הבדיקה, כך שלא נכנסים לתת-העץ הימני אחרי שהשמאלי נכשל.',
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
      en: 'This is counting connected components in a graph where every land cell is a node and edges connect it to its four orthogonal neighbours.\nI scan the grid row by row. Whenever I hit a land cell that has not been visited, it must belong to a new island, so I increment the counter and flood-fill from it with BFS or DFS, marking every connected land cell as visited. Marking can be done in place by turning \'1\' into \'0\'. After the fill, the rest of that island will never trigger the counter again.\nEvery cell is scanned once and enqueued at most once, so time is O(rows × cols). Extra space is O(rows × cols) in the worst case for the recursion stack; a BFS queue is smaller in practice, on the order of O(min(rows, cols)).\nThe practical pitfall is recursive DFS on a big grid that is all land: recursion depth can reach rows × cols and overflow the stack, which is why the Python solution uses an iterative BFS.',
      he: 'זו בעצם ספירת רכיבי קשירות בגרף שבו כל תא יבשה הוא צומת, והקשתות מחברות אותו לארבעת השכנים האורתוגונליים.\nסורקים את הגריד שורה אחרי שורה. בכל פעם שפוגשים תא יבשה שעוד לא ביקרנו בו, הוא בהכרח שייך לאי חדש, אז מגדילים את המונה ומציפים ממנו עם BFS או DFS, ומסמנים כל תא יבשה מחובר כמבוקר. אפשר לסמן במקום, על ידי הפיכת \'1\' ל-\'0\'. אחרי ההצפה, שאר האי כבר לא יפעיל את המונה שוב.\nכל תא נסרק פעם אחת ונכנס לתור לכל היותר פעם אחת, ולכן הזמן הוא O(rows × cols). המקום הנוסף הוא O(rows × cols) במקרה הגרוע עבור מחסנית הרקורסיה; תור ה-BFS קטן יותר בפועל, בסדר גודל של O(min(rows, cols)).\nהמלכודת המעשית היא DFS רקורסיבי על גריד גדול שכולו יבשה: עומק הרקורסיה יכול להגיע ל-rows × cols ולגרום ל-stack overflow, ולכן פתרון ה-Python משתמש ב-BFS איטרטיבי.',
    },
    approach: [
      {
        en: 'Clarify: four-directional connectivity, can the grid be empty, may I modify it, and how large can it be (recursion depth).',
        he: 'לברר: קישוריות בארבעה כיוונים, האם הגריד יכול להיות ריק, האם מותר לשנות אותו, וכמה גדול הוא יכול להיות (בגלל עומק הרקורסיה).',
      },
      {
        en: 'Naive idea: for each land cell, search whether it connects to an island already counted. That repeats work and can approach O((rows × cols)^2).',
        he: 'רעיון נאיבי: לכל תא יבשה לחפש אם הוא מחובר לאי שכבר נספר. זה חוזר על עבודה ויכול להגיע ל-O((rows × cols)^2).',
      },
      {
        en: 'Insight: the first unvisited land cell of an island is enough to count it; sink the whole island right away so it is never counted again.',
        he: 'התובנה: מספיק התא הראשון שלא ביקרנו בו כדי לספור את האי; מטביעים מיד את כל האי כדי שלא ייספר שוב.',
      },
      {
        en: 'Algorithm: loop over all cells; on a \'1\', count++, set it to \'0\', then BFS over the four neighbours, turning each reached \'1\' into \'0\' as it is enqueued.',
        he: 'האלגוריתם: עוברים על כל התאים; על \'1\' עושים count++, הופכים אותו ל-\'0\', ומריצים BFS על ארבעת השכנים, וכל \'1\' שמגיעים אליו הופך ל-\'0\' ברגע שהוא נכנס לתור.',
      },
      {
        en: 'Complexity: O(rows × cols) time, O(rows × cols) worst-case extra space.',
        he: 'סיבוכיות: זמן O(rows × cols), מקום נוסף O(rows × cols) במקרה הגרוע.',
      },
      {
        en: 'Test: the 4×5 example gives 3, all water gives 0, all land gives 1, and a diagonal pattern like [[1,0],[0,1]] gives 2.',
        he: 'בדיקה: הדוגמה בגודל 4×5 נותנת 3, כולו מים נותן 0, כולו יבשה נותן 1, ותבנית אלכסונית כמו [[1,0],[0,1]] נותנת 2.',
      },
    ],
    keyPoints: [
      {
        en: 'Name it: connected components on an implicit graph. It shows you recognise the pattern, not just this one problem.',
        he: 'לקרוא לזה בשם: רכיבי קשירות בגרף מרומז. זה מראה שאתם מזהים את התבנית, ולא רק את הבעיה הספציפית.',
      },
      {
        en: 'Ask whether mutating the grid is allowed; if not, use a visited matrix and say it costs O(rows × cols) memory.',
        he: 'לשאול אם מותר לשנות את הגריד; אם לא, משתמשים במטריצת visited ואומרים שהיא עולה O(rows × cols) זיכרון.',
      },
      {
        en: 'Mark visited on enqueue, not on dequeue, to avoid duplicates in the queue.',
        he: 'לסמן כמבוקר בזמן ההכנסה לתור ולא בזמן ההוצאה, כדי למנוע כפילויות בתור.',
      },
      {
        en: 'Recursion depth on an all-land grid can overflow the stack; iterative BFS, or DFS with an explicit stack, avoids it.',
        he: 'עומק הרקורסיה בגריד שכולו יבשה יכול לגרום ל-stack overflow; BFS איטרטיבי, או DFS עם stack מפורש, פותרים את זה.',
      },
      {
        en: 'Union-Find is the follow-up answer when land is added dynamically (Number of Islands II) and you need the count after each addition.',
        he: 'Union-Find היא התשובה לשאלת ההמשך כשמוסיפים יבשה בצורה דינמית (Number of Islands II) וצריך את מספר האיים אחרי כל הוספה.',
      },
      {
        en: 'Clarify connectivity: four directions here; eight directions would change only the neighbour list.',
        he: 'לברר את הקישוריות: כאן ארבעה כיוונים; שמונה כיוונים ישנו רק את רשימת השכנים.',
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
      en: 'For each index, the product of all the other elements equals the product of everything to its left times the product of everything to its right. So the problem splits into prefix products and suffix products.\nI do it in two passes over the output array. First pass, left to right: keep a running product \'left\' starting at 1; write it into result[i], then multiply it by nums[i]. After this pass result[i] holds the product of nums[0..i-1]. Second pass, right to left: keep a running product \'right\' starting at 1; multiply result[i] by it, then multiply \'right\' by nums[i]. Now result[i] = prefix × suffix.\nTime is O(n) with two linear passes, and extra space is O(1) besides the output array, because the suffix is a single variable instead of a second array.\nZeros are handled naturally, which is exactly why division is banned: total / nums[i] breaks on a zero, and with two zeros every answer is 0. The first and last elements get an empty product of 1 on one side.',
      he: 'לכל אינדקס, מכפלת כל שאר האיברים שווה למכפלת כל מה שמשמאלו כפול מכפלת כל מה שמימינו. כך הבעיה מתפרקת למכפלות prefix ולמכפלות suffix.\nעושים את זה בשני מעברים על מערך הפלט. מעבר ראשון, משמאל לימין: מחזיקים מכפלה רצה left שמתחילה ב-1; כותבים אותה ל-result[i] ואז מכפילים אותה ב-nums[i]. בסוף המעבר result[i] מכיל את מכפלת nums[0..i-1]. מעבר שני, מימין לשמאל: מחזיקים מכפלה רצה right שמתחילה ב-1; מכפילים בה את result[i] ואז מכפילים את right ב-nums[i]. עכשיו result[i] = prefix × suffix.\nהזמן הוא O(n) עם שני מעברים לינאריים, והמקום הנוסף הוא O(1) מעבר למערך הפלט, כי ה-suffix הוא משתנה אחד ולא מערך שני.\nאפסים מטופלים באופן טבעי, וזו בדיוק הסיבה שחילוק אסור: total / nums[i] נשבר על אפס, ועם שני אפסים כל התשובות הן 0. האיבר הראשון והאחרון מקבלים מכפלה ריקה של 1 בצד אחד.',
    },
    approach: [
      {
        en: 'Clarify: can there be zeros or negatives, what is the length (at least 2), and does the result fit in an int.',
        he: 'לברר: האם יש אפסים או מספרים שליליים, מה האורך (לפחות 2), והאם התוצאה נכנסת ב-int.',
      },
      {
        en: 'Brute force: for each i, multiply all j != i. O(n^2) time, O(1) extra space.',
        he: 'Brute force: לכל i להכפיל את כל ה-j != i. זמן O(n^2), מקום נוסף O(1).',
      },
      {
        en: 'Insight: answer[i] = (product of nums[0..i-1]) × (product of nums[i+1..n-1]), and both sides can be built incrementally.',
        he: 'התובנה: answer[i] = (מכפלת nums[0..i-1]) × (מכפלת nums[i+1..n-1]), ואפשר לבנות את שני הצדדים בהדרגה.',
      },
      {
        en: 'Algorithm: pass one fills result with prefix products using a running \'left\'; pass two walks backwards with a running \'right\' and multiplies it into result.',
        he: 'האלגוריתם: מעבר ראשון ממלא את result במכפלות prefix עם משתנה רץ left; מעבר שני הולך אחורה עם משתנה רץ right ומכפיל אותו לתוך result.',
      },
      {
        en: 'Complexity: O(n) time, O(1) extra space excluding the output.',
        he: 'סיבוכיות: זמן O(n), מקום נוסף O(1) לא כולל הפלט.',
      },
      {
        en: 'Test: [1, 2, 3, 4] gives [24, 12, 8, 6]; [-1, 1, 0, -3, 3] gives [0, 0, 9, 0, 0]; two zeros give all zeros; [2, 3] gives [3, 2].',
        he: 'בדיקה: [1, 2, 3, 4] נותן [24, 12, 8, 6]; [-1, 1, 0, -3, 3] נותן [0, 0, 9, 0, 0]; שני אפסים נותנים רק אפסים; [2, 3] נותן [3, 2].',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why division fails: a zero makes total / nums[i] undefined, and the one-zero and two-zero cases need special handling.',
        he: 'להסביר למה חילוק נכשל: אפס הופך את total / nums[i] ללא מוגדר, והמקרים של אפס אחד ושל שני אפסים דורשים טיפול מיוחד.',
      },
      {
        en: 'Present the two-array prefix/suffix version first, then optimise to one running variable. Interviewers like seeing that step.',
        he: 'להציג קודם את גרסת ה-prefix/suffix עם שני מערכים, ואז לייעל למשתנה רץ אחד. מראיינים אוהבים לראות את הצעד הזה.',
      },
      {
        en: 'State the space convention: the output array does not count as extra space.',
        he: 'להגיד במפורש את המוסכמה: מערך הפלט לא נחשב מקום נוסף.',
      },
      {
        en: 'Order matters inside each loop: write the running product first, then multiply in nums[i], so each element excludes itself.',
        he: 'הסדר בתוך כל לולאה חשוב: קודם כותבים את המכפלה הרצה ורק אחר כך מכפילים ב-nums[i], כך שכל איבר לא כולל את עצמו.',
      },
      {
        en: 'The prefix/suffix pattern reappears in Trapping Rain Water and in range-sum queries; worth naming.',
        he: 'תבנית ה-prefix/suffix חוזרת ב-Trapping Rain Water ובשאילתות סכום על טווח, וכדאי להזכיר את זה.',
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
      en: 'I use a sliding window [left, right] that never contains a repeated character, plus a hash map from each character to the last index where I saw it.\nI move right across the string one character at a time. If the current character was seen before and its last index is inside the window (last[ch] >= left), the window now has a duplicate, so I jump left to last[ch] + 1, just past the previous occurrence. Then I record last[ch] = right and update the best length with right - left + 1.\nThe check last[ch] >= left is the subtle part: a character seen before the window started is not a real duplicate, and without the check left could jump backwards.\nEach index is processed once and left only moves forward, so time is O(n). Space is O(k), where k is the alphabet size: at most 128 entries for ASCII.\nEdge cases: an empty string returns 0, all identical characters return 1, all distinct return n.',
      he: 'משתמשים בחלון הזזה [left, right] שאף פעם לא מכיל תו חוזר, ובמפת hash מכל תו לאינדקס האחרון שבו ראינו אותו.\nמזיזים את right על המחרוזת תו אחרי תו. אם התו הנוכחי כבר הופיע והאינדקס האחרון שלו נמצא בתוך החלון (last[ch] >= left), יש עכשיו כפילות בחלון, אז מקפיצים את left ל-last[ch] + 1, מיד אחרי ההופעה הקודמת. אחר כך שומרים last[ch] = right ומעדכנים את האורך הטוב ביותר עם right - left + 1.\nהבדיקה last[ch] >= left היא החלק העדין: תו שהופיע לפני תחילת החלון הוא לא כפילות אמיתית, ובלי הבדיקה left עלול לקפוץ אחורה.\nכל אינדקס מעובד פעם אחת ו-left רק מתקדם קדימה, ולכן הזמן הוא O(n). המקום הוא O(k), כש-k הוא גודל האלפבית: לכל היותר 128 ערכים ב-ASCII.\nמקרי קצה: מחרוזת ריקה מחזירה 0, כשכל התווים זהים מחזירים 1, וכשכולם שונים מחזירים n.',
    },
    approach: [
      {
        en: 'Clarify: the character set (ASCII or Unicode), whether an empty string is allowed, and whether to return the length or the substring.',
        he: 'לברר: איזו קבוצת תווים (ASCII או Unicode), האם מותרת מחרוזת ריקה, והאם להחזיר את האורך או את תת-המחרוזת.',
      },
      {
        en: 'Brute force: check every substring for uniqueness, O(n^3), or O(n^2) by extending each start until a repeat appears.',
        he: 'Brute force: לבדוק כל תת-מחרוזת אם היא בלי חזרות, O(n^3), או O(n^2) אם מאריכים מכל נקודת התחלה עד שמופיעה חזרה.',
      },
      {
        en: 'Insight: when a repeat appears, every window starting at or before the previous occurrence is also invalid, so the start can jump forward and never go back.',
        he: 'התובנה: כשמופיעה חזרה, כל חלון שמתחיל בהופעה הקודמת או לפניה גם הוא לא תקין, ולכן ההתחלה יכולה לקפוץ קדימה ולעולם לא לחזור אחורה.',
      },
      {
        en: 'Algorithm: for each right, if last[ch] >= left set left = last[ch] + 1; set last[ch] = right; best = max(best, right - left + 1).',
        he: 'האלגוריתם: לכל right, אם last[ch] >= left קובעים left = last[ch] + 1; קובעים last[ch] = right; best = max(best, right - left + 1).',
      },
      {
        en: 'Complexity: O(n) time, O(k) space for the alphabet.',
        he: 'סיבוכיות: זמן O(n), מקום O(k) לפי גודל האלפבית.',
      },
      {
        en: 'Test: \'abcabcbb\' gives 3, \'bbbbb\' gives 1, \'pwwkew\' gives 3, \'\' gives 0, and \'abba\' gives 2.',
        he: 'בדיקה: \'abcabcbb\' נותן 3, \'bbbbb\' נותן 1, \'pwwkew\' נותן 3, \'\' נותן 0, ו-\'abba\' נותן 2.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain the window invariant: the window never contains a duplicate, and both pointers only move forward.',
        he: 'להסביר את האינווריאנט של החלון: אין בו אף פעם כפילות, ושני המצביעים רק מתקדמים קדימה.',
      },
      {
        en: 'The last[ch] >= left check is the classic bug; test it with \'abba\', where forgetting it gives 3 instead of 2.',
        he: 'הבדיקה last[ch] >= left היא הבאג הקלאסי; בודקים אותה עם \'abba\', שם שכחה שלה נותנת 3 במקום 2.',
      },
      {
        en: 'Compare with the set-based variant that shrinks left one step at a time: still O(n), but up to 2n steps; the index map jumps directly.',
        he: 'להשוות לגרסה עם set שמכווצת את left צעד אחד בכל פעם: עדיין O(n), אבל עד 2n צעדים; מפת האינדקסים קופצת ישירות.',
      },
      {
        en: 'Distinguish substring (contiguous) from subsequence.',
        he: 'להבחין בין תת-מחרוזת (רציפה) לבין תת-סדרה.',
      },
      {
        en: 'Mention the space bound O(min(n, alphabet)) and the fixed-array optimisation for ASCII.',
        he: 'להזכיר את חסם המקום O(min(n, alphabet)) ואת האופטימיזציה של מערך קבוע עבור ASCII.',
      },
      {
        en: 'Follow-up: return the substring itself by also storing the start index of the best window.',
        he: 'שאלת המשך: להחזיר את תת-המחרוזת עצמה, על ידי שמירה גם של אינדקס ההתחלה של החלון הטוב ביותר.',
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
      en: 'Two words are anagrams exactly when they contain the same letters with the same counts, so I need a canonical key that is identical for all anagrams and different otherwise. The simplest key is the word with its letters sorted: \'eat\', \'tea\' and \'ate\' all become \'aet\'.\nI keep a hash map from key to a list of words. For every word I compute its key and append the word to that key\'s list. At the end the map\'s values are the groups.\nWith n words of maximum length k, sorting each word costs O(k log k), so total time is O(n · k log k), and space is O(n · k) to store all the words in the map.\nThe follow-up interviewers usually ask: for lowercase English letters, build the key from a 26-entry count array instead of sorting. That costs O(k) per word, O(n · k) overall. The counts must become a hashable key, for example a tuple in Python or a string with separators, because without separators counts like 1,11 and 11,1 would collide.',
      he: 'שתי מילים הן אנגרמות בדיוק כשיש בהן אותן אותיות באותן כמויות, ולכן צריך מפתח קנוני שזהה לכל האנגרמות ושונה לכל השאר. המפתח הפשוט ביותר הוא המילה עם האותיות ממוינות: \'eat\', \'tea\' ו-\'ate\' כולן הופכות ל-\'aet\'.\nמחזיקים מפת hash ממפתח לרשימת מילים. לכל מילה מחשבים את המפתח ומוסיפים את המילה לרשימה של אותו מפתח. בסוף, הערכים של המפה הם הקבוצות.\nעם n מילים באורך מקסימלי k, מיון של כל מילה עולה O(k log k), ולכן הזמן הכולל הוא O(n · k log k), והמקום הוא O(n · k) כדי לשמור את כל המילים במפה.\nשאלת ההמשך שמראיינים בדרך כלל שואלים: עבור אותיות אנגליות קטנות, בונים את המפתח ממערך ספירה של 26 תאים במקום למיין. זה עולה O(k) למילה, כלומר O(n · k) בסך הכל. צריך להפוך את הספירה למפתח שאפשר לעשות לו hash, למשל tuple ב-Python או מחרוזת עם מפרידים, כי בלי מפרידים ספירות כמו 1,11 ו-11,1 יתנגשו.',
    },
    approach: [
      {
        en: 'Clarify: lowercase letters only, can words be empty or repeated, and does output order matter.',
        he: 'לברר: רק אותיות קטנות, האם מילים יכולות להיות ריקות או לחזור, והאם סדר הפלט חשוב.',
      },
      {
        en: 'Brute force: compare every pair of words with an anagram check and merge them into groups. O(n^2 · k).',
        he: 'Brute force: להשוות כל זוג מילים עם בדיקת אנגרמה ולאחד לקבוצות. O(n^2 · k).',
      },
      {
        en: 'Insight: instead of comparing pairs, map each word to a key shared by all its anagrams and let a hash map do the grouping.',
        he: 'התובנה: במקום להשוות זוגות, ממפים כל מילה למפתח שמשותף לכל האנגרמות שלה ונותנים למפת hash לעשות את הקיבוץ.',
      },
      {
        en: 'Algorithm: for each word, key = its sorted letters; append the word to groups[key]; return the map\'s values as a list.',
        he: 'האלגוריתם: לכל מילה, key = האותיות שלה ממוינות; מוסיפים את המילה ל-groups[key]; מחזירים את הערכים של המפה כרשימה.',
      },
      {
        en: 'Complexity: O(n · k log k) time, O(n · k) space; O(n · k) time with the count key.',
        he: 'סיבוכיות: זמן O(n · k log k), מקום O(n · k); זמן O(n · k) עם מפתח הספירה.',
      },
      {
        en: 'Test: the example list gives three groups; [\'\'] gives [[\'\']]; [\'a\'] gives [[\'a\']]; and [\'ab\', \'ba\', \'abc\'] gives two groups.',
        he: 'בדיקה: רשימת הדוגמה נותנת שלוש קבוצות; [\'\'] נותן [[\'\']]; [\'a\'] נותן [[\'a\']]; ו-[\'ab\', \'ba\', \'abc\'] נותן שתי קבוצות.',
      },
    ],
    keyPoints: [
      {
        en: 'Frame it as \'find a canonical key, then group by it with a hash map\'. The pattern is reusable.',
        he: 'להציג את זה כ\'מוצאים מפתח קנוני ואז מקבצים לפיו עם מפת hash\'. זו תבנית שחוזרת.',
      },
      {
        en: 'Give complexity in both n and k; saying only O(n) or O(n log n) is a common slip.',
        he: 'לתת סיבוכיות גם לפי n וגם לפי k; להגיד רק O(n) או O(n log n) זו טעות נפוצה.',
      },
      {
        en: 'Offer the 26-count key for O(n · k), and mention separators or tuples so the key is unambiguous.',
        he: 'להציע את מפתח הספירה של 26 עבור O(n · k), ולהזכיר מפרידים או tuple כדי שהמפתח יהיה חד-משמעי.',
      },
      {
        en: 'Ask about the character set: with Unicode or mixed case the 26-count array no longer fits, and the sorted key is the safe choice.',
        he: 'לשאול על קבוצת התווים: ב-Unicode או באותיות גדולות וקטנות מערך הספירה של 26 כבר לא מתאים, והמפתח הממוין הוא הבחירה הבטוחה.',
      },
      {
        en: 'A product-of-primes key works in theory but overflows quickly on long words; a good idea to reject explicitly.',
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
      en: 'Sorting and taking the element at index n - k works in O(n log n), but we only need one order statistic, so we can do better.\nMy solution keeps a min-heap of size at most k. I push every element; whenever the heap grows to k + 1, I pop the smallest. The invariant is that the heap holds the k largest elements seen so far, and its root is the smallest of them, which is exactly the k-th largest. After processing all elements I return the root.\nEach push and pop costs O(log k), so time is O(n log k) and space is O(k). When k is much smaller than n this is a clear win over sorting.\nThe follow-up is quickselect: partition around a pivot as in quicksort, then continue only into the side that contains index n - k. Average time is O(n) with O(1) extra space, but a bad sequence of pivots gives O(n^2), so a random pivot is essential.',
      he: 'מיון ולקיחת האיבר באינדקס n - k עובדים ב-O(n log n), אבל צריך רק סטטיסטי סדר אחד, ולכן אפשר לעשות טוב יותר.\nהפתרון שלי מחזיק min-heap בגודל של לכל היותר k. דוחפים כל איבר; כשה-heap מגיע ל-k + 1 מוציאים את הקטן ביותר. האינווריאנט הוא שה-heap מחזיק את k האיברים הגדולים ביותר שראינו עד עכשיו, והשורש שלו הוא הקטן מביניהם, כלומר בדיוק האיבר ה-k בגודלו. בסוף מחזירים את השורש.\nכל push ו-pop עולים O(log k), ולכן הזמן הוא O(n log k) והמקום O(k). כש-k הרבה יותר קטן מ-n זה יתרון ברור על מיון.\nשאלת ההמשך היא quickselect: עושים partition סביב pivot כמו ב-quicksort, וממשיכים רק לצד שמכיל את האינדקס n - k. בממוצע זה O(n) זמן עם O(1) מקום נוסף, אבל רצף גרוע של pivots נותן O(n^2), ולכן pivot אקראי הכרחי.',
    },
    approach: [
      {
        en: 'Clarify: k is valid (1 ≤ k ≤ n), duplicates count separately, may I modify the array, and is the data a stream.',
        he: 'לברר: k חוקי (1 ≤ k ≤ n), כפילויות נספרות בנפרד, האם מותר לשנות את המערך, והאם הנתונים מגיעים כ-stream.',
      },
      {
        en: 'Brute force: sort in descending order and return index k - 1. O(n log n) time.',
        he: 'Brute force: למיין בסדר יורד ולהחזיר את האינדקס k - 1. זמן O(n log n).',
      },
      {
        en: 'Insight: we never need the full order, only the top k, and the smallest of the top k is the answer, which a min-heap exposes in O(1).',
        he: 'התובנה: לא צריך את כל הסדר, רק את k הגדולים, והקטן מבין k הגדולים הוא התשובה, ו-min-heap חושף אותו ב-O(1).',
      },
      {
        en: 'Algorithm: push each number into a min-heap; if the size exceeds k, pop; return the heap\'s root. Mention quickselect as the O(n)-average alternative.',
        he: 'האלגוריתם: דוחפים כל מספר ל-min-heap; אם הגודל עובר את k מוציאים; מחזירים את השורש. להזכיר את quickselect כחלופה של O(n) בממוצע.',
      },
      {
        en: 'Complexity: O(n log k) time, O(k) space.',
        he: 'סיבוכיות: זמן O(n log k), מקום O(k).',
      },
      {
        en: 'Test: [3, 2, 1, 5, 6, 4] with k = 2 gives 5; the duplicates example with k = 4 gives 4; k = 1 gives the max; k = n gives the min.',
        he: 'בדיקה: [3, 2, 1, 5, 6, 4] עם k = 2 נותן 5; דוגמת הכפילויות עם k = 4 נותנת 4; k = 1 נותן את המקסימום; k = n נותן את המינימום.',
      },
    ],
    keyPoints: [
      {
        en: 'Use a min-heap, not a max-heap: the root of a size-k min-heap is the k-th largest. Mixing them up is the classic slip.',
        he: 'להשתמש ב-min-heap ולא ב-max-heap: השורש של min-heap בגודל k הוא האיבר ה-k בגודלו. בלבול ביניהם הוא הטעות הקלאסית.',
      },
      {
        en: 'Compare all three options with complexities: sort O(n log n), heap O(n log k), quickselect O(n) on average and O(n^2) in the worst case.',
        he: 'להשוות את שלוש האפשרויות עם הסיבוכיות: מיון O(n log n), heap O(n log k), quickselect O(n) בממוצע ו-O(n^2) במקרה הגרוע.',
      },
      {
        en: 'Point out that the heap works on streaming data with O(k) memory; quickselect needs the whole array and reorders it.',
        he: 'לציין שה-heap עובד על נתונים זורמים עם O(k) זיכרון; quickselect צריך את כל המערך ומשנה את הסדר שלו.',
      },
      {
        en: 'Mention a randomised pivot for quickselect, and median-of-medians for a guaranteed O(n) worst case.',
        he: 'להזכיר pivot אקראי ב-quickselect, ואת median-of-medians לקבלת O(n) מובטח גם במקרה הגרוע.',
      },
      {
        en: 'Know your library: Python heapq is a min-heap; C++ priority_queue is a max-heap by default and needs std::greater for a min-heap.',
        he: 'להכיר את הספרייה: heapq ב-Python הוא min-heap; priority_queue ב-C++ הוא max-heap כברירת מחדל וצריך std::greater כדי לקבל min-heap.',
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
      en: 'A single \'current minimum\' variable is not enough. The fix is to remember, for every depth of the stack, what the minimum was at that moment.\nI keep two stacks side by side. On push(value), I push value onto the main stack and push min(value, mins.top) onto the min stack, or just value if it is empty. On pop, I pop both stacks. top returns the main stack\'s top, and getMin returns the min stack\'s top.\nThis works because a stack only changes at the top: after a pop, the minimum of the remaining elements is exactly the minimum recorded when the element now on top was pushed. All four operations are O(1), and space is O(n), twice a plain stack.\nTwo variants worth mentioning: store (value, minSoFar) pairs in a single stack, which is the same idea; or push to the min stack only when value ≤ the current minimum and pop from it only when the popped value equals it. The ≤ is essential, otherwise duplicate minimums break.',
      he: 'משתנה יחיד של \'המינימום הנוכחי\' לא מספיק. הפתרון הוא לזכור, לכל עומק של המחסנית, מה היה המינימום באותו רגע.\nמחזיקים שתי מחסניות זו לצד זו. ב-push(value) דוחפים את value למחסנית הראשית, ולמחסנית המינימום דוחפים min(value, mins.top), או פשוט value אם היא ריקה. ב-pop מוציאים משתיהן. top מחזיר את הראש של המחסנית הראשית, ו-getMin מחזיר את הראש של מחסנית המינימום.\nזה עובד כי מחסנית משתנה רק בראש: אחרי pop, המינימום של מה שנשאר הוא בדיוק המינימום שנרשם כשהאיבר שעכשיו בראש נדחף. כל ארבע הפעולות הן O(1), והמקום הוא O(n), פי שניים ממחסנית רגילה.\nשתי גרסאות ששווה להזכיר: לשמור זוגות (value, minSoFar) במחסנית אחת, שזה אותו רעיון; או לדחוף למחסנית המינימום רק כש-value ≤ המינימום הנוכחי, ולהוציא ממנה רק כשהערך שיוצא שווה לו. ה-≤ הכרחי, אחרת מינימום כפול נשבר.',
    },
    approach: [
      {
        en: 'Clarify: integer values, duplicates allowed, behaviour of pop or getMin on an empty stack, and whether memory is tight.',
        he: 'לברר: ערכים שלמים, כפילויות מותרות, מה קורה ב-pop או ב-getMin על מחסנית ריקה, והאם הזיכרון מוגבל.',
      },
      {
        en: 'Brute force: a normal stack where getMin scans all elements. getMin is O(n), which violates the requirement.',
        he: 'Brute force: מחסנית רגילה שבה getMin סורק את כל האיברים. getMin הוא O(n), וזה מפר את הדרישה.',
      },
      {
        en: 'Insight: the minimum only changes on push and pop, and pop restores the exact previous state, so the history of minimums is itself a stack.',
        he: 'התובנה: המינימום משתנה רק ב-push וב-pop, ו-pop מחזיר בדיוק את המצב הקודם, ולכן ההיסטוריה של המינימומים היא בעצמה מחסנית.',
      },
      {
        en: 'Algorithm: push writes value to items and min(value, mins.top) to mins; pop pops both; top and getMin read the tops.',
        he: 'האלגוריתם: push כותב את value ל-items ואת min(value, mins.top) ל-mins; pop מוציא משתיהן; top ו-getMin קוראים את הראשים.',
      },
      {
        en: 'Complexity: O(1) for every operation, O(n) space.',
        he: 'סיבוכיות: O(1) לכל פעולה, מקום O(n).',
      },
      {
        en: 'Test: the example push -2, 0, -3, then getMin is -3, pop, top is 0, getMin is -2; also push 1, 1, pop, and check getMin is still 1.',
        he: 'בדיקה: הדוגמה push -2, 0, -3, ואז getMin נותן -3, pop, top נותן 0, getMin נותן -2; ובנוסף push 1, 1, pop, ולוודא ש-getMin עדיין 1.',
      },
    ],
    keyPoints: [
      {
        en: 'Start by explaining why one min variable fails on pop; it shows you understand the real difficulty.',
        he: 'להתחיל בהסבר למה משתנה מינימום אחד נכשל ב-pop; זה מראה שהבנתם את הקושי האמיתי.',
      },
      {
        en: 'The key invariant: mins[i] is the minimum of items[0..i], so the two stacks always stay in sync.',
        he: 'האינווריאנט המרכזי: mins[i] הוא המינימום של items[0..i], ולכן שתי המחסניות תמיד נשארות מסונכרנות.',
      },
      {
        en: 'In the space-saving variant use ≤, not <, when pushing to the min stack, or a duplicate minimum gets lost on pop.',
        he: 'בגרסה החסכונית משתמשים ב-≤ ולא ב-< כשדוחפים למחסנית המינימום, אחרת מינימום כפול הולך לאיבוד ב-pop.',
      },
      {
        en: 'Discuss empty-stack behaviour: throw, return an error code, or document a precondition.',
        he: 'לדון בהתנהגות על מחסנית ריקה: לזרוק חריגה, להחזיר קוד שגיאה, או לתעד תנאי מוקדם.',
      },
      {
        en: 'Advanced O(1)-extra-space trick: store encoded values such as 2·value - min when a new minimum arrives. Mention it, and its overflow risk, rather than lead with it.',
        he: 'טריק מתקדם עם O(1) מקום נוסף: לשמור ערכים מקודדים כמו 2·value - min כשמגיע מינימום חדש. כדאי להזכיר אותו, ואת סיכון ה-overflow שלו, ולא להתחיל ממנו.',
      },
      {
        en: 'Follow-up: a min-queue can be built from two min-stacks, giving amortised O(1) getMin, useful for sliding-window minimums.',
        he: 'שאלת המשך: אפשר לבנות min-queue משתי min-stacks ולקבל getMin ב-O(1) אמורטייזד, שימושי למינימום בחלון הזזה.',
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
      en: 'The array has n distinct numbers from 0..n, which has n + 1 possible values, so exactly one is absent. Two tricks find it in O(n) time and O(1) space, without sorting or extra memory.\nSum: the numbers 0..n add up to n(n+1)/2. Subtract the actual sum of the array, and what remains is the missing number. Simple and clear, but in a fixed-width language the sum can overflow for large n; Python integers do not overflow.\nXOR: x ^ x = 0, x ^ 0 = x, and XOR is commutative and associative. If I XOR every index 0..n-1, plus n itself, together with every value in the array, each present number appears twice and cancels, leaving only the missing one. In code I start with result = n and for each i do result ^= i ^ nums[i]. No overflow is possible.\nEdge cases: the missing number is 0, as in [1], or it is n, as in [0, 1]; both tricks handle them with no special code.',
      he: 'במערך יש n מספרים שונים מתוך 0..n, שבו n + 1 ערכים אפשריים, ולכן בדיוק אחד חסר. שני טריקים מוצאים אותו בזמן O(n) ומקום O(1), בלי מיון ובלי זיכרון נוסף.\nסכום: המספרים 0..n מסתכמים ל-n(n+1)/2. מחסירים את הסכום בפועל של המערך, ומה שנשאר הוא המספר החסר. פשוט וברור, אבל בשפה עם טיפוסים ברוחב קבוע הסכום יכול לגרום ל-overflow עבור n גדול; ב-Python מספרים שלמים לא גולשים.\nXOR: x ^ x = 0, x ^ 0 = x, ו-XOR הוא קומוטטיבי ואסוציאטיבי. אם עושים XOR לכל האינדקסים 0..n-1, יחד עם n עצמו ויחד עם כל ערך במערך, כל מספר שקיים מופיע פעמיים ומתבטל, ורק החסר נשאר. בקוד מתחילים עם result = n ולכל i עושים result ^= i ^ nums[i]. אין שום סיכון ל-overflow.\nמקרי קצה: המספר החסר הוא 0, כמו ב-[1], או שהוא n, כמו ב-[0, 1]; שני הטריקים מטפלים בהם בלי קוד מיוחד.',
    },
    approach: [
      {
        en: 'Clarify: values are distinct, exactly one is missing, the range is 0..n where n is the array length, and whether the input may be modified.',
        he: 'לברר: הערכים שונים, בדיוק אחד חסר, הטווח הוא 0..n כש-n הוא אורך המערך, והאם מותר לשנות את הקלט.',
      },
      {
        en: 'Brute force: for each candidate in 0..n, search the array, O(n^2). Better: a hash set (O(n) extra space) or sorting (O(n log n) time).',
        he: 'Brute force: לכל מועמד ב-0..n לחפש במערך, O(n^2). טוב יותר: set של hash (מקום נוסף O(n)) או מיון (זמן O(n log n)).',
      },
      {
        en: 'Insight: we know exactly what the full set should be, so compare an aggregate of the full range with the same aggregate of the array, using sum or XOR.',
        he: 'התובנה: אנחנו יודעים בדיוק מה הקבוצה המלאה צריכה להיות, אז משווים צבירה של הטווח המלא לאותה צבירה של המערך, עם סכום או XOR.',
      },
      {
        en: 'Algorithm: result = n; for each i, result ^= i ^ nums[i]; return result. Or return n(n+1)/2 minus the sum.',
        he: 'האלגוריתם: result = n; לכל i, result ^= i ^ nums[i]; מחזירים את result. או מחזירים n(n+1)/2 פחות הסכום.',
      },
      {
        en: 'Complexity: O(n) time, O(1) extra space.',
        he: 'סיבוכיות: זמן O(n), מקום נוסף O(1).',
      },
      {
        en: 'Test: [3, 0, 1] gives 2, [0, 1] gives 2 (missing is n), [1] gives 0 (missing is 0), and the 9-element example gives 8.',
        he: 'בדיקה: [3, 0, 1] נותן 2, [0, 1] נותן 2 (החסר הוא n), [1] נותן 0 (החסר הוא 0), ודוגמת תשעת האיברים נותנת 8.',
      },
    ],
    keyPoints: [
      {
        en: 'Explain why XOR works from its properties: every value is its own inverse, 0 is the identity, and order does not matter.',
        he: 'להסביר למה XOR עובד מתוך התכונות שלו: כל ערך הופכי לעצמו, 0 הוא איבר נייטרלי, והסדר לא משנה.',
      },
      {
        en: 'Raise overflow for the sum approach in C, C++ or Java, and note that XOR avoids it; this matters especially for embedded roles.',
        he: 'להעלות את בעיית ה-overflow בשיטת הסכום ב-C, C++ או Java, ולציין ש-XOR נמנע ממנה; זה חשוב במיוחד לתפקידי embedded.',
      },
      {
        en: 'Do not forget n itself, which has no matching index; starting result at n handles it.',
        he: 'לא לשכוח את n עצמו, שאין לו אינדקס מתאים; התחלה של result מ-n מטפלת בזה.',
      },
      {
        en: 'Mention the in-place alternative of cyclic sort or sign marking by index, which modifies the input.',
        he: 'להזכיר את החלופה במקום של cyclic sort או סימון לפי אינדקס, שמשנה את הקלט.',
      },
      {
        en: 'Follow-up with two missing numbers: XOR gives a ^ b, any set bit of it splits the numbers into two groups, and XOR-ing each group separately yields a and b.',
        he: 'שאלת המשך עם שני מספרים חסרים: XOR נותן a ^ b, כל ביט דלוק בו מחלק את המספרים לשתי קבוצות, ו-XOR של כל קבוצה בנפרד נותן את a ואת b.',
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
      en: 'The array is no longer sorted end to end, but a rotated sorted array has a useful property: if you split any range [lo, hi] at mid, at least one of the two halves is sorted normally. Binary search still works if each step first figures out which half is sorted.\nAt each step: if nums[mid] is the target, return mid. If nums[lo] <= nums[mid], the left half [lo, mid] is sorted; if nums[lo] <= target < nums[mid], the target can only be there, so hi = mid - 1, otherwise lo = mid + 1. Otherwise the right half [mid, hi] is sorted; if nums[mid] < target <= nums[hi], go right with lo = mid + 1, otherwise hi = mid - 1.\nIt is correct because inside a sorted half a simple range check tells for certain whether the target can be there, and every step discards half the range. Time O(log n), space O(1).\nThe <= in nums[lo] <= nums[mid] matters when lo == mid, with two elements left. A zero rotation is handled naturally.',
      he: 'המערך כבר לא ממוין מתחילתו ועד סופו, אבל למערך ממוין שעבר סיבוב יש תכונה שימושית: אם חותכים טווח [lo, hi] כלשהו ב-mid, לפחות אחד משני החצאים ממוין כרגיל. חיפוש בינארי עדיין עובד אם בכל צעד קודם מבינים איזה חצי ממוין.\nבכל צעד: אם nums[mid] הוא ה-target, מחזירים mid. אם nums[lo] <= nums[mid], החצי השמאלי [lo, mid] ממוין; אם nums[lo] <= target < nums[mid], ה-target יכול להיות רק שם, אז hi = mid - 1, אחרת lo = mid + 1. אחרת, החצי הימני [mid, hi] ממוין; אם nums[mid] < target <= nums[hi] הולכים ימינה עם lo = mid + 1, אחרת hi = mid - 1.\nזה נכון כי בתוך חצי ממוין בדיקת טווח פשוטה אומרת בוודאות אם ה-target יכול להיות שם, ובכל צעד זורקים חצי מהטווח. זמן O(log n), מקום O(1).\nה-<= ב-nums[lo] <= nums[mid] חשוב כש-lo == mid, כשנשארו שני איברים. סיבוב של אפס מטופל באופן טבעי.',
    },
    approach: [
      {
        en: 'Clarify: values are distinct, the rotation may be zero, the array is non-empty, and return -1 if the target is absent.',
        he: 'לברר: הערכים שונים, הסיבוב יכול להיות אפס, המערך לא ריק, ומחזירים -1 אם ה-target לא קיים.',
      },
      {
        en: 'Brute force: a linear scan, O(n), which ignores the sorted structure and is not accepted.',
        he: 'Brute force: סריקה לינארית, O(n), שמתעלמת מהמבנה הממוין ולא מתקבלת.',
      },
      {
        en: 'Insight: splitting a rotated sorted range at mid always leaves at least one sorted half, and for a sorted half two comparisons decide whether the target is inside.',
        he: 'התובנה: חיתוך של טווח ממוין שעבר סיבוב ב-mid תמיד משאיר לפחות חצי ממוין אחד, ובחצי ממוין שתי השוואות מחליטות אם ה-target בפנים.',
      },
      {
        en: 'Algorithm: binary search loop; return on a match; if nums[lo] <= nums[mid] test the left range, otherwise test the right range; move lo or hi accordingly.',
        he: 'האלגוריתם: לולאת חיפוש בינארי; מחזירים כשיש התאמה; אם nums[lo] <= nums[mid] בודקים את הטווח השמאלי, אחרת את הימני; מזיזים את lo או את hi בהתאם.',
      },
      {
        en: 'Complexity: O(log n) time, O(1) space.',
        he: 'סיבוכיות: זמן O(log n), מקום O(1).',
      },
      {
        en: 'Test: [7, 9, 12, 1, 2, 4, 5] with targets 4 (index 5), 3 (-1) and 7 (index 0); [1, 2, 3] with target 3; and a two-element array [3, 1] with target 1.',
        he: 'בדיקה: [7, 9, 12, 1, 2, 4, 5] עם target 4 (אינדקס 5), עם 3 (-1) ועם 7 (אינדקס 0); [1, 2, 3] עם target 3; ומערך של שני איברים [3, 1] עם target 1.',
      },
    ],
    keyPoints: [
      {
        en: 'State the invariant clearly: one half is always sorted, and range checks are reliable only inside the sorted half.',
        he: 'לנסח את האינווריאנט בבירור: חצי אחד תמיד ממוין, ובדיקות טווח אמינות רק בתוך החצי הממוין.',
      },
      {
        en: 'Boundary details are where candidates fail: <= when comparing nums[lo] with nums[mid], and inclusive versus exclusive bounds in the target check.',
        he: 'בפרטי הגבולות מועמדים נכשלים: <= בהשוואה בין nums[lo] ל-nums[mid], וגבולות כוללים מול לא כוללים בבדיקת ה-target.',
      },
      {
        en: 'Use mid = lo + (hi - lo) / 2 in C++ or Java to avoid integer overflow.',
        he: 'להשתמש ב-mid = lo + (hi - lo) / 2 ב-C++ או Java כדי להימנע מ-overflow.',
      },
      {
        en: 'Alternative two-step approach: binary search for the rotation point (the index of the minimum), then a normal binary search in the correct part. Still O(log n).',
        he: 'גישה חלופית בשני שלבים: חיפוש בינארי של נקודת הסיבוב (האינדקס של המינימום), ואז חיפוש בינארי רגיל בחלק הנכון. עדיין O(log n).',
      },
      {
        en: 'Follow-up with duplicates: when nums[lo] == nums[mid] == nums[hi] you cannot tell which side is sorted, so shrink lo and hi by one; the worst case becomes O(n).',
        he: 'שאלת המשך עם כפילויות: כש-nums[lo] == nums[mid] == nums[hi] אי אפשר לדעת איזה צד ממוין, אז מצמצמים את lo ואת hi באחד; המקרה הגרוע הופך ל-O(n).',
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
      en: 'Greedy is the tempting answer and it is wrong in general: with coins [1, 3, 4] and amount 6, greedy takes 4 + 1 + 1, three coins, while 3 + 3 uses two.\nThe correct approach is dynamic programming. Define dp[a] as the fewest coins that sum exactly to a. dp[0] = 0, and every other entry starts as infinity, meaning unreachable. For each amount a from 1 to the target, try every coin c ≤ a: dp[a] = min(dp[a], dp[a - c] + 1). The last coin used is one of the denominations, and the rest must itself be an optimal solution for a - c, which is the optimal substructure.\nTime is O(amount × number of coins), space O(amount). At the end, if dp[amount] is still infinity, return -1.\nIn C++ the sentinel is amount + 1 instead of INT_MAX, because no real answer can exceed amount coins and INT_MAX + 1 would overflow. Edge cases: amount = 0 returns 0, and an impossible amount such as 3 with coins [2] returns -1.',
      he: 'גישה חמדנית היא התשובה המפתה, והיא שגויה באופן כללי: עם מטבעות [1, 3, 4] וסכום 6, החמדן לוקח 4 + 1 + 1, שלושה מטבעות, בזמן ש-3 + 3 משתמש בשניים.\nהגישה הנכונה היא תכנות דינמי. מגדירים dp[a] כמספר המטבעות הקטן ביותר שמסתכם בדיוק ל-a. dp[0] = 0, וכל שאר התאים מתחילים באינסוף, כלומר אי אפשר להגיע אליהם. לכל סכום a מ-1 ועד היעד, מנסים כל מטבע c ≤ a: dp[a] = min(dp[a], dp[a - c] + 1). המטבע האחרון הוא אחד מהערכים, ומה שנשאר חייב להיות בעצמו פתרון אופטימלי עבור a - c, וזה המבנה האופטימלי.\nהזמן הוא O(amount × מספר המטבעות), והמקום O(amount). בסוף, אם dp[amount] עדיין אינסוף, מחזירים -1.\nב-C++ ערך האינסוף הוא amount + 1 ולא INT_MAX, כי שום תשובה אמיתית לא עוברת amount מטבעות, ו-INT_MAX + 1 היה גולש. מקרי קצה: amount = 0 מחזיר 0, וסכום בלתי אפשרי כמו 3 עם מטבעות [2] מחזיר -1.',
    },
    approach: [
      {
        en: 'Clarify: unlimited coins of each type, all coins positive, amount can be 0, and return -1 when it is impossible.',
        he: 'לברר: כמות בלתי מוגבלת מכל מטבע, כל המטבעות חיוביים, amount יכול להיות 0, ומחזירים -1 כשזה בלתי אפשרי.',
      },
      {
        en: 'Brute force: recursively try every coin at every step and take the minimum; exponential because the same remainders repeat. Also show that greedy fails on [1, 3, 4] with 6.',
        he: 'Brute force: לנסות ברקורסיה כל מטבע בכל צעד ולקחת את המינימום; אקספוננציאלי, כי אותן שאריות חוזרות. ובנוסף להראות שהחמדן נכשל על [1, 3, 4] עם 6.',
      },
      {
        en: 'Insight: the answer for a depends only on answers for smaller amounts a - c, so subproblems overlap and a table indexed by amount removes the repetition.',
        he: 'התובנה: התשובה עבור a תלויה רק בתשובות של סכומים קטנים יותר a - c, ולכן תתי-הבעיות חופפות, וטבלה לפי סכום מבטלת את החזרות.',
      },
      {
        en: 'Algorithm: dp[0] = 0 and the rest infinity; for a in 1..amount and each coin ≤ a, dp[a] = min(dp[a], dp[a - coin] + 1); return dp[amount], or -1 if it is still infinity.',
        he: 'האלגוריתם: dp[0] = 0 והשאר אינסוף; לכל a ב-1..amount ולכל מטבע ≤ a, dp[a] = min(dp[a], dp[a - coin] + 1); מחזירים את dp[amount], או -1 אם הוא עדיין אינסוף.',
      },
      {
        en: 'Complexity: O(amount × coins) time, O(amount) space.',
        he: 'סיבוכיות: זמן O(amount × coins), מקום O(amount).',
      },
      {
        en: 'Test: [1, 2, 5] with 11 gives 3; [2] with 3 gives -1; [1] with 0 gives 0; [1, 3, 4] with 6 gives 2.',
        he: 'בדיקה: [1, 2, 5] עם 11 נותן 3; [2] עם 3 נותן -1; [1] עם 0 נותן 0; [1, 3, 4] עם 6 נותן 2.',
      },
    ],
    keyPoints: [
      {
        en: 'Disprove greedy with a concrete counterexample before writing DP; interviewers often wait to see if you fall for it.',
        he: 'להפריך את החמדן עם דוגמה נגדית קונקרטית לפני שכותבים DP; מראיינים מחכים לראות אם תיפלו בזה.',
      },
      {
        en: 'Define the state in words (dp[a] = fewest coins for exactly a) and the base case dp[0] = 0 before writing the recurrence.',
        he: 'להגדיר את המצב במילים (dp[a] = מספר המטבעות הקטן ביותר לסכום a בדיוק) ואת מקרה הבסיס dp[0] = 0 לפני שכותבים את הנוסחה.',
      },
      {
        en: 'Sentinel choice: amount + 1 is a safe \'infinity\' that cannot overflow when you add 1.',
        he: 'בחירת ערך האינסוף: amount + 1 הוא אינסוף בטוח שלא גולש כשמוסיפים לו 1.',
      },
      {
        en: 'The complexity is pseudo-polynomial: it depends on the numeric value of amount, not on the size of the input.',
        he: 'הסיבוכיות היא פסאודו-פולינומית: היא תלויה בערך המספרי של amount ולא בגודל הקלט.',
      },
      {
        en: 'Know the sibling problem, Coin Change II (count the combinations): there the coin loop must be the outer loop, or you count permutations.',
        he: 'להכיר את הבעיה האחות Coin Change II (ספירת צירופים): שם לולאת המטבעות חייבת להיות החיצונית, אחרת סופרים פרמוטציות.',
      },
      {
        en: 'Top-down memoised recursion is equivalent; mention that its recursion depth can reach the amount.',
        he: 'רקורסיה מלמעלה למטה עם memoization שקולה; להזכיר שעומק הרקורסיה שלה יכול להגיע ל-amount.',
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
