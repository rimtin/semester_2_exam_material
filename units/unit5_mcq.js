// units/unit5_mcq.js
// Unit 5 – File System in Cloud
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit5_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "Which of the following is an important characteristic of Google File System?",
    options: [
      "Scalable distributed file system for large distributed data-intensive applications",
      "Provides fault tolerance while running on inexpensive commodity hardware",
      "Meets the rapidly growing demands of Google's data processing needs",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: GFS is scalable, fault-tolerant, works on commodity hardware, and was designed for Google's large data processing needs. Why others are wrong: A, B, and C are all correct individually, so the best answer is all of the above."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "“System is built from many inexpensive commodity components that often fail” belongs to which GFS assumption?",
    options: [
      "Files are large and their number is limited",
      "Hardware failures are common",
      "Workloads have sequential writes that append data to files",
      "None of the above"
    ],
    correctIndex: 1,
    explanation: "Correct: GFS assumes hardware failures are common because it uses many inexpensive commodity machines. Why others are wrong: Large files and sequential writes are other assumptions, but they do not describe component failure."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "As per the Google File System assumption, high sustained bandwidth is more important than ______ latency.",
    options: ["High", "Low", "Dual", "Tri"],
    correctIndex: 1,
    explanation: "Correct: GFS focuses more on high sustained bandwidth than low latency. Why others are wrong: High, dual, and tri latency do not correctly complete the statement."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "Which type of metadata is stored by the Master in GFS architecture?",
    options: [
      "The file and chunk namespaces",
      "The mapping from files to chunks",
      "The locations of each chunk's replicas",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: The GFS Master stores file namespace, chunk namespace, file-to-chunk mapping, and replica location metadata. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "In GFS interface, which operation creates a copy of a file or a directory tree at low cost?",
    options: ["Snapshot", "Gutter", "Fieldname", "Directorylist"],
    correctIndex: 0,
    explanation: "Correct: Snapshot creates a low-cost copy of a file or directory tree. Why others are wrong: Gutter, fieldname, and directorylist are not standard GFS interface operations."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "In GFS architecture, files are divided into ______ chunks.",
    options: ["Variable-size", "Double-size", "Single-size", "Fixed-size"],
    correctIndex: 3,
    explanation: "Correct: GFS divides files into fixed-size chunks. Why others are wrong: Variable-size, double-size, and single-size are not the correct GFS chunk description."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "Which component in GFS architecture maintains all file system metadata?",
    options: ["Chunk locations", "Master", "Client code", "Operation log"],
    correctIndex: 1,
    explanation: "Correct: The Master maintains GFS metadata. Why others are wrong: Chunk locations are part of metadata, client code communicates with GFS, and operation log records metadata changes."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "In GFS architecture, which component contains a historical record of critical metadata changes?",
    options: ["Chunk location", "Client code", "Operation log", "In-memory data structures"],
    correctIndex: 2,
    explanation: "Correct: The operation log stores a historical record of critical metadata changes. Why others are wrong: Chunk location stores where chunks are placed, client code accesses the system, and in-memory structures help fast access."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "GFS is not implemented in the kernel of an operating system, but is provided as a user-space library.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Correct: GFS is provided as a user-space library rather than being implemented directly inside the operating system kernel. Why false is wrong: It contradicts the GFS design described in the unit."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "GFS provides capability for ______ by constant monitoring, replicating crucial data, and fast automatic recovery.",
    options: ["Scalability", "Elasticity", "Virtualization", "Fault tolerance"],
    correctIndex: 3,
    explanation: "Correct: Fault tolerance means the system can continue working even when components fail. Why others are wrong: Scalability is growth handling, elasticity is automatic resource adjustment, and virtualization creates virtual resources."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "SMB stands for:",
    options: [
      "Software Message Block",
      "Software Master Block",
      "Server Master Block",
      "Server Message Block"
    ],
    correctIndex: 3,
    explanation: "Correct: SMB stands for Server Message Block. Why others are wrong: The other options are incorrect expansions."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "A ______ can only be accessed on the computer on which it is created. It does not offer fault tolerance and cannot be linked to any other DFS.",
    options: ["Standalone DFS", "Domain-based DFS", "Namespace DFS", "Fault-tolerant DFS"],
    correctIndex: 0,
    explanation: "Correct: Standalone DFS is created on one computer and lacks fault tolerance. Why others are wrong: Domain-based DFS can provide better availability, namespace DFS organizes shared folders, and fault-tolerant DFS is the opposite of the description."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "Servers in HDFS are ______ connected, and they communicate through TCP-based protocols.",
    options: ["Loosely", "Partially", "Semi-loosely", "Fully"],
    correctIndex: 3,
    explanation: "Correct: According to the unit answer key, servers in HDFS are fully connected and communicate through TCP-based protocols. Why others are wrong: Loosely, partially, and semi-loosely do not match the given self-assessment answer."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "HDFS applications need a ______ access model for files.",
    options: [
      "Write-once-read-once",
      "Write-once-read-many",
      "Write-many-read-many",
      "Write-many-read-once"
    ],
    correctIndex: 1,
    explanation: "Correct: HDFS follows a write-once-read-many access model. Why others are wrong: HDFS is designed for large files that are written once and read many times, not frequent random rewriting."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Self Assessment Based",
    question: "NameNode and DataNode in HDFS architecture are ______ programming codes that can run on commodity hardware machines.",
    options: ["Python", "C++", "ASP.Net", "Java"],
    correctIndex: 3,
    explanation: "Correct: NameNode and DataNode are Java-based components. Why others are wrong: Python, C++, and ASP.Net are not the programming basis mentioned for HDFS components in this unit."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "Google File System is mainly designed for:",
    options: [
      "Large distributed data-intensive applications",
      "Small single-user documents only",
      "Only offline gaming files",
      "Only spreadsheet formatting"
    ],
    correctIndex: 0,
    explanation: "Correct: GFS is designed for large distributed data-intensive applications. Why others are wrong: It is not designed only for small files, games, or spreadsheet formatting."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "Commodity hardware means:",
    options: [
      "Common low-cost hardware machines",
      "Only expensive supercomputers",
      "Only mobile phones",
      "Only keyboard devices"
    ],
    correctIndex: 0,
    explanation: "Correct: Commodity hardware refers to commonly available low-cost machines. Why others are wrong: Supercomputers, phones, and keyboards do not match this meaning."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "Why does GFS replicate chunks?",
    options: [
      "To improve fault tolerance and data availability",
      "To delete data quickly",
      "To reduce all storage to zero",
      "To stop clients from reading files"
    ],
    correctIndex: 0,
    explanation: "Correct: Replication keeps copies of chunks so data remains available even if a machine fails. Why others are wrong: Replication is not for deleting data, removing storage, or blocking clients."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "In GFS, a chunk is:",
    options: [
      "A fixed-size part of a file",
      "A complete operating system",
      "A keyboard shortcut",
      "A type of monitor"
    ],
    correctIndex: 0,
    explanation: "Correct: GFS divides files into fixed-size chunks. Why others are wrong: A chunk is not an OS, keyboard shortcut, or monitor."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "The main role of the GFS Master is to:",
    options: [
      "Maintain metadata and coordinate file system operations",
      "Store only music files",
      "Replace every client machine",
      "Act as a web browser"
    ],
    correctIndex: 0,
    explanation: "Correct: The GFS Master manages metadata and coordinates access to chunks. Why others are wrong: It is not for music storage, replacing clients, or browsing web pages."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "The main role of a GFS chunkserver is to:",
    options: [
      "Store chunks of data",
      "Only design user interfaces",
      "Only create passwords",
      "Only print reports"
    ],
    correctIndex: 0,
    explanation: "Correct: Chunkservers store actual file chunks. Why others are wrong: UI design, passwords, and printing are unrelated to chunkserver storage."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "GFS client code is used to:",
    options: [
      "Communicate with the Master and chunkservers for file operations",
      "Replace the operating system kernel",
      "Only format text documents",
      "Only create images"
    ],
    correctIndex: 0,
    explanation: "Correct: GFS client code talks to the Master for metadata and to chunkservers for data operations. Why others are wrong: It does not replace the kernel or perform only document or image tasks."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "The GFS operation log is important because:",
    options: [
      "It records critical metadata changes",
      "It stores only screen brightness settings",
      "It deletes all metadata",
      "It is used only for typing practice"
    ],
    correctIndex: 0,
    explanation: "Correct: The operation log records important metadata changes and supports recovery. Why others are wrong: Brightness, deletion of all metadata, and typing practice are unrelated."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "A distributed file system allows:",
    options: [
      "Files to be stored and accessed across multiple networked machines",
      "Files to exist only on paper",
      "Only one local keyboard to store data",
      "No sharing of files"
    ],
    correctIndex: 0,
    explanation: "Correct: DFS allows files to be distributed across networked systems. Why others are wrong: Paper, keyboards, and no sharing do not describe distributed file systems."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "HDFS stands for:",
    options: [
      "Hadoop Distributed File System",
      "Hardware Data File Software",
      "High Definition File Server",
      "Hybrid Data Flow System"
    ],
    correctIndex: 0,
    explanation: "Correct: HDFS stands for Hadoop Distributed File System. Why others are wrong: The other expansions are incorrect."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "HDFS is a major component of:",
    options: ["Apache Hadoop", "Microsoft Paint", "HTML only", "Bluetooth speaker"],
    correctIndex: 0,
    explanation: "Correct: HDFS is the storage layer of Apache Hadoop. Why others are wrong: Paint, HTML, and Bluetooth speakers are unrelated."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "The NameNode in HDFS is responsible for:",
    options: [
      "Managing file system namespace and metadata",
      "Storing only user passwords",
      "Displaying images only",
      "Cooling the CPU"
    ],
    correctIndex: 0,
    explanation: "Correct: The NameNode manages metadata and namespace information in HDFS. Why others are wrong: Password storage, image display, and CPU cooling are unrelated."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "The DataNode in HDFS is responsible for:",
    options: [
      "Storing actual data blocks",
      "Only managing the browser",
      "Only writing HTML code",
      "Only formatting slides"
    ],
    correctIndex: 0,
    explanation: "Correct: DataNodes store actual data blocks in HDFS. Why others are wrong: Browsers, HTML, and slides are not DataNode responsibilities."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "HDFS is suitable for:",
    options: [
      "Large files and high-throughput access",
      "Very tiny files only",
      "Only manual paper records",
      "Only single-user calculators"
    ],
    correctIndex: 0,
    explanation: "Correct: HDFS is designed for large files and high-throughput data access. Why others are wrong: It is not optimized for only tiny files, paper records, or calculators."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "The file system namespace means:",
    options: [
      "The hierarchy and naming structure of files and directories",
      "Only the color of files",
      "Only the size of monitor",
      "Only keyboard layout"
    ],
    correctIndex: 0,
    explanation: "Correct: Namespace refers to the directory and file naming structure. Why others are wrong: Colors, monitor size, and keyboard layout are unrelated."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "HDFS block replication helps with:",
    options: [
      "Fault tolerance",
      "Removing all backups",
      "Making files unreadable",
      "Reducing all storage to one byte"
    ],
    correctIndex: 0,
    explanation: "Correct: Replication provides fault tolerance by storing multiple copies of blocks. Why others are wrong: It does not remove backups, make files unreadable, or reduce storage to one byte."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "In HDFS, client applications usually communicate with:",
    options: [
      "NameNode for metadata and DataNodes for actual data",
      "Only the keyboard",
      "Only the monitor",
      "Only a printer"
    ],
    correctIndex: 0,
    explanation: "Correct: Clients contact the NameNode for metadata and DataNodes for reading/writing actual data. Why others are wrong: Keyboard, monitor, and printer are not HDFS storage components."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "GFS and HDFS are similar because both:",
    options: [
      "Use distributed storage concepts for large data",
      "Are only image editing tools",
      "Are only programming languages",
      "Are only physical keyboards"
    ],
    correctIndex: 0,
    explanation: "Correct: Both GFS and HDFS are distributed file systems designed for large data workloads. Why others are wrong: They are not image editors, programming languages, or keyboards."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "One major difference between GFS and HDFS is:",
    options: [
      "GFS was designed by Google, while HDFS is part of Apache Hadoop",
      "GFS is a keyboard and HDFS is a mouse",
      "Both are only spreadsheet formulas",
      "HDFS is only for drawing pictures"
    ],
    correctIndex: 0,
    explanation: "Correct: GFS is Google's distributed file system, while HDFS is the Hadoop Distributed File System. Why others are wrong: The other options are unrelated and incorrect."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Concept MCQ",
    question: "A cloud file system should support:",
    options: [
      "Scalability, reliability, and access to distributed data",
      "Only one local file forever",
      "No fault tolerance",
      "No network communication"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud file systems need scalable and reliable distributed access. Why others are wrong: One local file, no fault tolerance, and no network communication do not match cloud file systems."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "A company stores huge log files across many low-cost machines. Machines may fail, but data should remain available. Which concept is most important?",
    options: ["Fault tolerance through replication", "Single local disk only", "Manual typing speed", "Screen brightness"],
    correctIndex: 0,
    explanation: "Correct: Fault tolerance through replication keeps data available even if machines fail. Why others are wrong: A single local disk is risky, and typing speed or brightness are unrelated."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "A file is divided into fixed-size parts and stored on multiple servers. What are these parts called in GFS?",
    options: ["Chunks", "Tabs", "Slides", "Pixels"],
    correctIndex: 0,
    explanation: "Correct: In GFS, files are split into chunks. Why others are wrong: Tabs, slides, and pixels do not describe GFS file division."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "A GFS client needs to know where a file's chunks are stored. Which component gives metadata information?",
    options: ["Master", "Keyboard", "Monitor", "Printer"],
    correctIndex: 0,
    explanation: "Correct: The Master provides metadata such as chunk mapping and locations. Why others are wrong: Keyboard, monitor, and printer are not GFS metadata components."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "A system keeps a record of every critical metadata change so it can recover after failure. Which GFS component is this?",
    options: ["Operation log", "Paint tool", "Mouse driver", "Screen saver"],
    correctIndex: 0,
    explanation: "Correct: The operation log stores critical metadata changes. Why others are wrong: Paint tools, mouse drivers, and screen savers are unrelated."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "An HDFS file is written once and then read many times by analytics jobs. Which HDFS access model is shown?",
    options: ["Write-once-read-many", "Write-many-read-never", "Read-once-delete-all", "Only-write-never-read"],
    correctIndex: 0,
    explanation: "Correct: HDFS is designed for write-once-read-many workloads. Why others are wrong: The other access patterns do not describe normal HDFS usage."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "In HDFS, the NameNode fails and metadata becomes unavailable. What type of information is mainly affected?",
    options: ["File system namespace and block metadata", "Keyboard color", "Speaker volume", "Monitor brightness"],
    correctIndex: 0,
    explanation: "Correct: NameNode manages namespace and metadata. Why others are wrong: Keyboard color, speaker volume, and brightness are not HDFS metadata."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "A DataNode receives instructions to store and retrieve data blocks. What is its main role?",
    options: ["Managing actual block storage", "Approving exam marks", "Designing logos", "Opening social media"],
    correctIndex: 0,
    explanation: "Correct: DataNodes store and serve actual blocks of data. Why others are wrong: Marks, logos, and social media are unrelated to HDFS storage."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "A DFS that exists only on one computer and does not provide fault tolerance is called:",
    options: ["Standalone DFS", "Highly available DFS", "Cloud-only DFS", "Replicated DFS"],
    correctIndex: 0,
    explanation: "Correct: Standalone DFS is limited to the computer where it is created and does not provide fault tolerance. Why others are wrong: Highly available, cloud-only, and replicated DFS do not match the description."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "Which pair is correctly matched?",
    options: [
      "NameNode – metadata management",
      "DataNode – only screen display",
      "GFS Master – only typing text",
      "Operation log – keyboard shortcut list"
    ],
    correctIndex: 0,
    explanation: "Correct: NameNode manages HDFS metadata. Why others are wrong: DataNode stores data blocks, GFS Master manages metadata, and operation log records metadata changes."
  },

  {
    unit: "Unit 5 – File System in Cloud",
    type: "Tricky Exam MCQ",
    question: "Which statement is most accurate?",
    options: [
      "GFS and HDFS are distributed file systems designed for large-scale data storage",
      "GFS and HDFS are only web browsers",
      "HDFS stores data only on paper",
      "GFS does not support fault tolerance"
    ],
    correctIndex: 0,
    explanation: "Correct: Both GFS and HDFS support large-scale distributed storage. Why others are wrong: They are not browsers, HDFS is digital, and GFS supports fault tolerance."
  }
];
