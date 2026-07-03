// units/unit9_mcq.js
// Unit 9 – Collaborating on Databases and Web-based Communication
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit9_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "The internal view of the database offers the lowest level of ___________.",
    options: ["Data manipulation", "Data excess", "Data abstraction", "Data mode"],
    correctIndex: 2,
    explanation: "Correct: The internal view gives the lowest level of data abstraction because it describes how data is physically stored. Why others are wrong: Data manipulation means changing data, data excess is not the correct term, and data mode does not describe database levels."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "The process of converting facts into meaningful information is termed as:",
    options: ["Data processing", "Data converging", "Data analyzing", "Data deduplication"],
    correctIndex: 0,
    explanation: "Correct: Data processing converts raw facts into useful and meaningful information. Why others are wrong: Data converging means combining, data analyzing is only one part of processing, and deduplication removes duplicate records."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "A database that can be dispersed or replicated among different points in a network is called:",
    options: ["Optical database", "Analytical database", "Distributed database", "Back-end database"],
    correctIndex: 2,
    explanation: "Correct: A distributed database can be spread or replicated across different network locations. Why others are wrong: Optical, analytical, and back-end databases do not specifically mean data is distributed across network points."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "Which of the following is a characteristic of a distributed database?",
    options: [
      "It is useful for local workgroups and departments at different locations",
      "It can include common operational data and local user data",
      "It can be replicated among different points in a network",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Distributed databases can support local workgroups, include shared and local data, and replicate data across network points. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "Which of the following is related to a hypermedia log database?",
    options: ["World Wide Web", "Web browsers", "Web crawlers", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: The World Wide Web, browsers, and crawlers are all related to web-based hypermedia information systems. Why others are wrong: Each individual option is correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "Which database level is closest to the users?",
    options: ["External", "Internal", "Physical", "Conceptual"],
    correctIndex: 0,
    explanation: "Correct: The external level is closest to the user because it shows the user’s view of the database. Why others are wrong: Internal and physical levels describe storage details, while conceptual level describes the overall logical structure."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "An archive of modern data from operational databases and often external sources is called:",
    options: ["Mined data house", "Data warehouse", "Archival", "External sources data"],
    correctIndex: 1,
    explanation: "Correct: A data warehouse stores collected data from operational and external sources for analysis and reporting. Why others are wrong: Mined data house and external sources data are not standard terms, while archival alone is too general."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "Web-based communication is also called:",
    options: ["Common communication", "Internet communication", "Internal communication", "Offline communication"],
    correctIndex: 1,
    explanation: "Correct: Web-based communication is communication using internet-based tools. Why others are wrong: Common and internal communication are general terms, while offline communication is the opposite of web-based communication."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "Web-based communication includes:",
    options: ["Web e-mail services", "Instant messaging services", "Web conferencing tools", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Web-based communication includes email, instant messaging, and web conferencing. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "When an instant message goes directly from one user’s PC to another without being filtered or stored on servers, this connection is called:",
    options: ["Peer-to-peer", "Client-server", "Non-filtered", "Non-storage"],
    correctIndex: 0,
    explanation: "Correct: Peer-to-peer communication allows direct communication between user systems. Why others are wrong: Client-server uses a central server, while non-filtered and non-storage are not standard network connection models."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "Which of the following is NOT a feature of web-conferencing services?",
    options: ["Application sharing", "Desktop sharing", "Annotation", "Physical document sharing"],
    correctIndex: 3,
    explanation: "Correct: Physical document sharing is not a web-conferencing feature because it is not done digitally inside the conferencing tool. Why others are wrong: Application sharing, desktop sharing, and annotation are common web-conferencing features."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "A __________ network group is like a virtual meeting or community room.",
    options: ["Social", "Virtualized", "Zoom", "Zoho"],
    correctIndex: 0,
    explanation: "Correct: A social network group acts like a virtual meeting or community room. Why others are wrong: Virtualized is a technical infrastructure term, Zoom is a meeting tool, and Zoho is a software company/tool suite."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "The collection of web-based collaborative tools that help team members communicate and manage group projects is called:",
    options: ["Alterware", "Groupware", "Communication ware", "Message ware"],
    correctIndex: 1,
    explanation: "Correct: Groupware is a collection of collaborative tools for communication and group project work. Why others are wrong: Alterware, communication ware, and message ware are not the standard terms."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "AirSet provides a cloud-based website for a group. The AirSet site can include:",
    options: ["Group announcements", "Web calendar", "File sharing and online storage", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: A cloud group site can include announcements, calendars, file sharing, and storage. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Self Assessment Based",
    question: "A discussion or informational website published on the World Wide Web with diary-style text entries is called:",
    options: ["Wall", "Hack info", "Blog", "Paragraph info"],
    correctIndex: 2,
    explanation: "Correct: A blog is a website with posts or diary-style entries. Why others are wrong: Wall, hack info, and paragraph info do not correctly define this type of website."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A database is mainly used to:",
    options: ["Store, organize, and manage data", "Only change screen brightness", "Only play videos", "Only delete files"],
    correctIndex: 0,
    explanation: "Correct: A database stores and manages organized data. Why others are wrong: Screen brightness, video playback, and deleting files are not the main purpose of databases."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Which of the following is an example of data?",
    options: ["Student roll number", "Customer name", "Product price", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Roll numbers, names, and prices are all examples of data. Why others are wrong: Since all given options are data, choosing only one is incomplete."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A DBMS stands for:",
    options: ["Database Management System", "Data Backup Main Server", "Digital Base Manual Software", "Database Mapping Service"],
    correctIndex: 0,
    explanation: "Correct: DBMS means Database Management System. Why others are wrong: The other options are incorrect expansions."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Which type of database stores data in tables with rows and columns?",
    options: ["Relational database", "Image database only", "Audio database only", "Random database"],
    correctIndex: 0,
    explanation: "Correct: A relational database organizes data into tables made of rows and columns. Why others are wrong: Image and audio databases are not table-based relational models, and random database is not a standard type."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A primary key is used to:",
    options: ["Uniquely identify each record in a table", "Change the monitor color", "Delete the database software", "Open a web browser"],
    correctIndex: 0,
    explanation: "Correct: A primary key uniquely identifies records in a table. Why others are wrong: Monitor color, deleting software, and opening a browser are unrelated."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A table in a database is made up of:",
    options: ["Rows and columns", "Only images", "Only sounds", "Only passwords"],
    correctIndex: 0,
    explanation: "Correct: A table contains rows and columns. Why others are wrong: Images, sounds, and passwords may be data values, but they do not define the structure of a table."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "The conceptual level of a database describes:",
    options: ["The overall logical structure of the database", "Only physical storage blocks", "Only one user’s screen", "Only keyboard settings"],
    correctIndex: 0,
    explanation: "Correct: The conceptual level describes the logical organization of the whole database. Why others are wrong: Physical blocks are internal level, one user’s screen is external view, and keyboard settings are unrelated."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "The internal level of a database mainly describes:",
    options: ["How data is physically stored", "How users see reports", "How emails are written", "How blogs are published"],
    correctIndex: 0,
    explanation: "Correct: The internal level deals with physical storage details. Why others are wrong: User reports relate to external view, while emails and blogs are web communication topics."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "An online database is useful because:",
    options: ["Users can access and update data through the web", "It can only be used on paper", "It cannot be shared", "It works without any data"],
    correctIndex: 0,
    explanation: "Correct: Online databases allow web-based access and collaboration. Why others are wrong: They are not paper-only, they support sharing, and they require data to be useful."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A cloud database is:",
    options: ["A database service hosted in a cloud environment", "A handwritten notebook", "A local calculator", "A monitor setting"],
    correctIndex: 0,
    explanation: "Correct: A cloud database is hosted and accessed using cloud infrastructure. Why others are wrong: Notebooks, calculators, and monitor settings are not cloud databases."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Cloud database collaboration allows:",
    options: ["Multiple authorized users to work on shared data online", "Only one offline user forever", "No data access", "Only printed records"],
    correctIndex: 0,
    explanation: "Correct: Cloud databases support shared online access for authorized users. Why others are wrong: Offline-only use, no access, and printed records do not describe cloud collaboration."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Which is a common database system application?",
    options: ["Banking system", "University student records", "Airline reservation system", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Banking, education, and airline systems all use databases. Why others are wrong: Each individual option is correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Web e-mail services allow users to:",
    options: ["Send and receive email through a web browser", "Only print photos", "Only manage CPU fans", "Only change wallpapers"],
    correctIndex: 0,
    explanation: "Correct: Web email services allow email access through the internet and browser. Why others are wrong: Printing, CPU fan management, and wallpaper changes are unrelated."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Instant messaging is mainly used for:",
    options: ["Real-time text communication", "Long-term physical storage", "Database backup only", "Screen cleaning"],
    correctIndex: 0,
    explanation: "Correct: Instant messaging allows real-time text-based communication. Why others are wrong: Storage, backup, and screen cleaning are not the main purpose."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Web conferencing tools are used for:",
    options: ["Online meetings and collaboration", "Only offline printing", "Only deleting databases", "Only local file renaming"],
    correctIndex: 0,
    explanation: "Correct: Web conferencing tools support online meetings, screen sharing, and collaboration. Why others are wrong: Printing, deleting databases, and renaming files do not define web conferencing."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Application sharing in web conferencing means:",
    options: ["Showing or sharing an application screen with meeting participants", "Deleting the application", "Installing a database", "Changing the mouse pointer only"],
    correctIndex: 0,
    explanation: "Correct: Application sharing lets participants view or work with a shared application during an online meeting. Why others are wrong: It does not mean deletion, database installation, or just changing the mouse pointer."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A social network helps collaboration by:",
    options: ["Allowing people to connect, share updates, and communicate online", "Preventing all communication", "Removing all user profiles", "Working only without internet"],
    correctIndex: 0,
    explanation: "Correct: Social networks support online connection and sharing. Why others are wrong: They do not prevent communication, remove all profiles, or work only offline."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "Groupware is useful because it:",
    options: ["Combines tools for communication, coordination, and collaboration", "Only changes screen color", "Only plays songs", "Only formats images"],
    correctIndex: 0,
    explanation: "Correct: Groupware helps groups communicate, coordinate, and manage shared work. Why others are wrong: Screen color, songs, and image formatting are unrelated."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A wiki is mainly used to:",
    options: ["Create and edit web pages collaboratively", "Only send private instant messages", "Only store CPU temperature", "Only play audio"],
    correctIndex: 0,
    explanation: "Correct: A wiki allows users to collaboratively create and edit content. Why others are wrong: Private messaging, CPU temperature, and audio playback do not define a wiki."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Concept MCQ",
    question: "A blog usually contains:",
    options: ["Posts or entries arranged like articles or diary updates", "Only database indexes", "Only spreadsheet formulas", "Only hidden system files"],
    correctIndex: 0,
    explanation: "Correct: Blogs contain posts or entries, often arranged by date. Why others are wrong: Database indexes, formulas, and hidden files do not describe blogs."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A sales team in different cities updates the same customer database online. Which concept is shown?",
    options: ["Collaborating on cloud databases", "Only offline storage", "Single-user paper diary", "Monitor sharing only"],
    correctIndex: 0,
    explanation: "Correct: Multiple users updating shared data online shows cloud database collaboration. Why others are wrong: Offline storage, paper diaries, and monitor sharing do not provide shared database collaboration."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A university stores student records, courses, marks, and fees in organized tables. Which system is most suitable?",
    options: ["Database system", "Only image editor", "Music player", "Printer driver"],
    correctIndex: 0,
    explanation: "Correct: A database system is suitable for structured records such as students, courses, marks, and fees. Why others are wrong: Image editors, music players, and printer drivers cannot manage this structured data properly."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A company replicates database copies at branch offices so users can access nearby data. Which database type is this?",
    options: ["Distributed database", "Only local text file", "Offline spreadsheet only", "Single paper register"],
    correctIndex: 0,
    explanation: "Correct: A distributed database can be replicated across different network locations. Why others are wrong: Local text files, offline spreadsheets, and paper registers are not distributed databases."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A user only sees the fields needed for their job, while storage details are hidden. Which database level is closest to this user?",
    options: ["External level", "Internal level", "Physical level", "Hardware level"],
    correctIndex: 0,
    explanation: "Correct: The external level gives the user-specific view of the database. Why others are wrong: Internal and physical levels describe storage, and hardware level is not one of the standard database abstraction levels."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A manager uses past sales records from many branches to study trends. Which database concept fits best?",
    options: ["Data warehouse", "Instant message", "Physical document sharing", "Keyboard shortcut"],
    correctIndex: 0,
    explanation: "Correct: A data warehouse stores data from different sources for analysis and trend reporting. Why others are wrong: Instant messages, physical document sharing, and keyboard shortcuts are not data analysis storage systems."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A remote meeting lets participants see the presenter’s screen and add notes. Which web-conferencing features are shown?",
    options: ["Desktop sharing and annotation", "Physical file transfer only", "Database indexing only", "Offline printing"],
    correctIndex: 0,
    explanation: "Correct: Showing the screen is desktop sharing, and adding notes is annotation. Why others are wrong: Physical transfer, indexing, and offline printing are not web-conferencing features."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "Two users chat instantly, and the message goes directly from one device to another. Which model is this?",
    options: ["Peer-to-peer", "Data warehouse", "External database level", "Blog publishing"],
    correctIndex: 0,
    explanation: "Correct: Direct device-to-device communication is peer-to-peer. Why others are wrong: Data warehouse is for analytics storage, external level is a database view, and blog publishing is web content posting."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A project group uses one online place for announcements, calendar, file sharing, and storage. Which tool category fits best?",
    options: ["Online groupware", "Only calculator", "Only local wallpaper", "Only offline diary"],
    correctIndex: 0,
    explanation: "Correct: Online groupware provides shared tools for communication, calendars, file sharing, and collaboration. Why others are wrong: Calculators, wallpapers, and offline diaries cannot provide full group collaboration."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "A class creates a shared website where students can edit notes and improve content together. Which tool is this?",
    options: ["Wiki", "Web browser cache", "Physical notice board only", "Screen saver"],
    correctIndex: 0,
    explanation: "Correct: A wiki allows collaborative editing of web content. Why others are wrong: Browser cache stores temporary files, notice boards are physical, and screen savers are display features."
  },

  {
    unit: "Unit 9 – Collaborating on Databases and Web-based Communication",
    type: "Tricky Exam MCQ",
    question: "Which statement best explains Unit 9 collaboration?",
    options: [
      "Users can collaborate through online databases, web email, instant messaging, web conferencing, social networks, groupware, blogs, and wikis",
      "Collaboration is possible only with paper files",
      "Web-based communication excludes email and conferencing",
      "Databases cannot be used in cloud collaboration"
    ],
    correctIndex: 0,
    explanation: "Correct: Unit 9 focuses on database collaboration and web-based communication tools. Why others are wrong: Collaboration is not paper-only, web communication includes email and conferencing, and databases can support cloud collaboration."
  }
];
