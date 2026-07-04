// units/unit5_mcq.js
// Unit 5 – File System in Cloud
// 45 MCQs — enriched format for AI Learning Agents
// Fields: unit, topic, type, question, options, correctIndex,
//         hint, tutor, optionExplanations, revisionNote

window.unit5_mcq = [
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "Which of the following is an important characteristic of Google File System?",
    "options": [
      "Scalable distributed file system for large distributed data-intensive applications",
      "Provides fault tolerance while running on inexpensive commodity hardware",
      "Meets the rapidly growing demands of Google's data processing needs",
      "All of the above"
    ],
    "correctIndex": 3,
    "hint": "Recall the key idea of File System in Cloud that this question is testing, then eliminate options that describe something different.",
    "tutor": "GFS is scalable, fault-tolerant, works on commodity hardware, and was designed for Google's large data processing needs.",
    "optionExplanations": [
      "\"Scalable distributed file system for large distributed data-intensive applications\" is true on its own, but it is incomplete — the other options also apply here, which is why \"All of the above\" is the best answer.",
      "\"Provides fault tolerance while running on inexpensive commodity hardware\" is true on its own, but it is incomplete — the other options also apply here, which is why \"All of the above\" is the best answer.",
      "\"Meets the rapidly growing demands of Google's data processing needs\" is true on its own, but it is incomplete — the other options also apply here, which is why \"All of the above\" is the best answer.",
      "Correct. GFS is scalable, fault-tolerant, works on commodity hardware, and was designed for Google's large data processing needs."
    ],
    "revisionNote": "Which of the following is an important characteristic of Google File System → All of the above"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "“System is built from many inexpensive commodity components that often fail” belongs to which GFS assumption?",
    "options": [
      "Files are large and their number is limited",
      "Hardware failures are common",
      "Workloads have sequential writes that append data to files",
      "None of the above"
    ],
    "correctIndex": 1,
    "hint": "Think about this: GFS assumes ____ because it uses many inexpensive ____ machines.",
    "tutor": "GFS assumes hardware failures are common because it uses many inexpensive commodity machines.",
    "optionExplanations": [
      "Large files and sequential writes are other assumptions. The question here points to \"Hardware failures are common\" instead.",
      "Correct. GFS assumes hardware failures are common because it uses many inexpensive commodity machines.",
      "Large files and sequential writes are other assumptions, but they do not describe component failure. So it does not fit; the matching concept here is \"Hardware failures are common\".",
      "\"None of the above\" fails here because one option does clearly match — \"Hardware failures are common\"."
    ],
    "revisionNote": "“System is built from many inexpensive commodity components that often fail” belongs to which GFS assumption → Hardware failures are common"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "As per the Google File System assumption, high sustained bandwidth is more important than ______ latency.",
    "options": [
      "High",
      "Low",
      "Dual",
      "Tri"
    ],
    "correctIndex": 1,
    "hint": "Think about this: GFS focuses more on high sustained bandwidth than ____ latency.",
    "tutor": "GFS focuses more on high sustained bandwidth than low latency.",
    "optionExplanations": [
      "High, dual, and tri latency do not correctly complete the statement. The question here points to \"Low\" instead.",
      "Correct. GFS focuses more on high sustained bandwidth than low latency.",
      "High, dual, and tri latency do not correctly complete the statement. So it does not fit; the matching concept here is \"Low\".",
      "\"Tri\" does not describe what the question is asking about. The question here points to \"Low\" instead."
    ],
    "revisionNote": "As per the Google File System assumption, high sustained bandwidth is more important than Low latency."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "Which type of metadata is stored by the Master in GFS architecture?",
    "options": [
      "The file and chunk namespaces",
      "The mapping from files to chunks",
      "The locations of each chunk's replicas",
      "All of the above"
    ],
    "correctIndex": 3,
    "hint": "Recall the key idea of File System in Cloud that this question is testing, then eliminate options that describe something different.",
    "tutor": "The GFS Master stores file namespace, chunk namespace, file-to-chunk mapping, and replica location metadata.",
    "optionExplanations": [
      "\"The file and chunk namespaces\" is true on its own, but it is incomplete — the other options also apply here, which is why \"All of the above\" is the best answer.",
      "\"The mapping from files to chunks\" is true on its own, but it is incomplete — the other options also apply here, which is why \"All of the above\" is the best answer.",
      "\"The locations of each chunk's replicas\" is true on its own, but it is incomplete — the other options also apply here, which is why \"All of the above\" is the best answer.",
      "Correct. The GFS Master stores file namespace, chunk namespace, file-to-chunk mapping, and replica location metadata."
    ],
    "revisionNote": "Which type of metadata is stored by the Master in GFS architecture → All of the above"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "In GFS interface, which operation creates a copy of a file or a directory tree at low cost?",
    "options": [
      "Snapshot",
      "Gutter",
      "Fieldname",
      "Directorylist"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ creates a low-cost copy of a file or directory tree.",
    "tutor": "Snapshot creates a low-cost copy of a file or directory tree.",
    "optionExplanations": [
      "Correct. Snapshot creates a low-cost copy of a file or directory tree.",
      "Gutter, fieldname, and directorylist are not standard GFS interface operations. That is not what the question describes — the answer is \"Snapshot\".",
      "Gutter, fieldname, and directorylist are not standard GFS interface operations. So it does not fit; the matching concept here is \"Snapshot\".",
      "Directorylist is not standard GFS interface operations. The question here points to \"Snapshot\" instead."
    ],
    "revisionNote": "In GFS interface, which operation creates a copy of a file or a directory tree at low cost → Snapshot"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "In GFS architecture, files are divided into ______ chunks.",
    "options": [
      "Variable-size",
      "Double-size",
      "Single-size",
      "Fixed-size"
    ],
    "correctIndex": 3,
    "hint": "Think about this: GFS divides files into ____ chunks.",
    "tutor": "GFS divides files into fixed-size chunks.",
    "optionExplanations": [
      "Variable-size, double-size, and single-size are not the correct GFS chunk description. The question here points to \"Fixed-size\" instead.",
      "Variable-size, double-size, and single-size are not the correct GFS chunk description. That is not what the question describes — the answer is \"Fixed-size\".",
      "Single-size is not the correct GFS chunk description. So it does not fit; the matching concept here is \"Fixed-size\".",
      "Correct. GFS divides files into fixed-size chunks."
    ],
    "revisionNote": "In GFS architecture, files are divided into Fixed-size chunks."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "Which component in GFS architecture maintains all file system metadata?",
    "options": [
      "Chunk locations",
      "Master",
      "Client code",
      "Operation log"
    ],
    "correctIndex": 1,
    "hint": "Think about this: The ____ maintains GFS metadata.",
    "tutor": "The Master maintains GFS metadata.",
    "optionExplanations": [
      "Chunk locations are part of metadata, client code communicates with GFS, and operation log records metadata changes. The question here points to \"Master\" instead.",
      "Correct. The Master maintains GFS metadata.",
      "Chunk locations are part of metadata, client code communicates with GFS, and operation log records metadata changes. So it does not fit; the matching concept here is \"Master\".",
      "Operation log records metadata changes. The question here points to \"Master\" instead."
    ],
    "revisionNote": "Which component in GFS architecture maintains all file system metadata → Master"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "In GFS architecture, which component contains a historical record of critical metadata changes?",
    "options": [
      "Chunk location",
      "Client code",
      "Operation log",
      "In-memory data structures"
    ],
    "correctIndex": 2,
    "hint": "Think about this: The ____ stores a historical record of critical metadata changes.",
    "tutor": "The operation log stores a historical record of critical metadata changes.",
    "optionExplanations": [
      "Chunk location stores where chunks are placed. The question here points to \"Operation log\" instead.",
      "Chunk location stores where chunks are placed, client code accesses the system, and in-memory structures help fast access. That is not what the question describes — the answer is \"Operation log\".",
      "Correct. The operation log stores a historical record of critical metadata changes.",
      "In-memory structures help fast access. The question here points to \"Operation log\" instead."
    ],
    "revisionNote": "In GFS architecture, which component contains a historical record of critical metadata changes → Operation log"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "GFS is not implemented in the kernel of an operating system, but is provided as a user-space library.",
    "options": [
      "True",
      "False"
    ],
    "correctIndex": 0,
    "hint": "Recall the key idea of File System in Cloud that this question is testing, then eliminate options that describe something different.",
    "tutor": "GFS is provided as a user-space library rather than being implemented directly inside the operating system kernel. Why false is wrong: It contradicts the GFS design described in the unit.",
    "optionExplanations": [
      "Correct. GFS is provided as a user-space library rather than being implemented directly inside the operating system kernel. Why false is wrong: It contradicts the GFS design described in the unit.",
      "The statement is actually the opposite — the correct choice is \"True\"."
    ],
    "revisionNote": "GFS is not implemented in the kernel of an operating system, but is provided as a user-space library. → True"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "GFS provides capability for ______ by constant monitoring, replicating crucial data, and fast automatic recovery.",
    "options": [
      "Scalability",
      "Elasticity",
      "Virtualization",
      "Fault tolerance"
    ],
    "correctIndex": 3,
    "hint": "Think about this: ____ means the system can continue working even when components fail.",
    "tutor": "Fault tolerance means the system can continue working even when components fail.",
    "optionExplanations": [
      "Scalability is the ability to add resources to handle a growing workload. The question here points to \"Fault tolerance\" instead.",
      "Elasticity means resources automatically grow and shrink with demand. Elasticity is automatic resource adjustment. That is not what the question describes — the answer is \"Fault tolerance\".",
      "Virtualization creates virtual versions of hardware, letting one physical machine run many virtual machines. So it does not fit; the matching concept here is \"Fault tolerance\".",
      "Correct. Fault tolerance means the system can continue working even when components fail."
    ],
    "revisionNote": "GFS provides capability for Fault tolerance by constant monitoring, replicating crucial data, and fast automatic recovery."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "SMB stands for:",
    "options": [
      "Software Message Block",
      "Software Master Block",
      "Server Master Block",
      "Server Message Block"
    ],
    "correctIndex": 3,
    "hint": "Think about this: SMB stands for ____ .",
    "tutor": "SMB stands for Server Message Block.",
    "optionExplanations": [
      "\"Software Message Block\" does not describe what the question is asking about. The question here points to \"Server Message Block\" instead.",
      "\"Software Master Block\" does not describe what the question is asking about. That is not what the question describes — the answer is \"Server Message Block\".",
      "\"Server Master Block\" does not describe what the question is asking about. So it does not fit; the matching concept here is \"Server Message Block\".",
      "Correct. SMB stands for Server Message Block."
    ],
    "revisionNote": "SMB stands for → Server Message Block"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "A ______ can only be accessed on the computer on which it is created. It does not offer fault tolerance and cannot be linked to any other DFS.",
    "options": [
      "Standalone DFS",
      "Domain-based DFS",
      "Namespace DFS",
      "Fault-tolerant DFS"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ is created on one computer and lacks fault tolerance.",
    "tutor": "Standalone DFS is created on one computer and lacks fault tolerance.",
    "optionExplanations": [
      "Correct. Standalone DFS is created on one computer and lacks fault tolerance.",
      "Domain-based DFS can provide better availability. That is not what the question describes — the answer is \"Standalone DFS\".",
      "Namespace DFS organizes shared folders. So it does not fit; the matching concept here is \"Standalone DFS\".",
      "Domain-based DFS can provide better availability, namespace DFS organizes shared folders, and fault-tolerant DFS is the opposite of the description. The question here points to \"Standalone DFS\" instead."
    ],
    "revisionNote": "A Standalone DFS can only be accessed on the computer on which it is created. It does not offer fault tolerance and cannot be linked to any other DFS."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "Servers in HDFS are ______ connected, and they communicate through TCP-based protocols.",
    "options": [
      "Loosely",
      "Partially",
      "Semi-loosely",
      "Fully"
    ],
    "correctIndex": 3,
    "hint": "Think about this: According to the unit answer key, servers in HDFS are ____ connected and communicate through TCP-based protocols.",
    "tutor": "According to the unit answer key, servers in HDFS are fully connected and communicate through TCP-based protocols.",
    "optionExplanations": [
      "Loosely, partially, and semi-loosely do not match the given self-assessment answer. The question here points to \"Fully\" instead.",
      "Loosely, partially, and semi-loosely do not match the given self-assessment answer. That is not what the question describes — the answer is \"Fully\".",
      "Semi-loosely does not match the given self-assessment answer. So it does not fit; the matching concept here is \"Fully\".",
      "Correct. According to the unit answer key, servers in HDFS are fully connected and communicate through TCP-based protocols."
    ],
    "revisionNote": "Servers in HDFS are Fully connected, and they communicate through TCP-based protocols."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "HDFS applications need a ______ access model for files.",
    "options": [
      "Write-once-read-once",
      "Write-once-read-many",
      "Write-many-read-many",
      "Write-many-read-once"
    ],
    "correctIndex": 1,
    "hint": "Think about this: HDFS follows a ____ access model.",
    "tutor": "HDFS follows a write-once-read-many access model.",
    "optionExplanations": [
      "\"Write-once-read-once\" does not describe what the question is asking about. The question here points to \"Write-once-read-many\" instead.",
      "Correct. HDFS follows a write-once-read-many access model.",
      "\"Write-many-read-many\" does not describe what the question is asking about. So it does not fit; the matching concept here is \"Write-once-read-many\".",
      "\"Write-many-read-once\" does not describe what the question is asking about. The question here points to \"Write-once-read-many\" instead."
    ],
    "revisionNote": "HDFS applications need a Write-once-read-many access model for files."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Self Assessment Based",
    "question": "NameNode and DataNode in HDFS architecture are ______ programming codes that can run on commodity hardware machines.",
    "options": [
      "Python",
      "C++",
      "ASP.Net",
      "Java"
    ],
    "correctIndex": 3,
    "hint": "Think about this: NameNode and DataNode are ____ -based components.",
    "tutor": "NameNode and DataNode are Java-based components.",
    "optionExplanations": [
      "Python, C++, and ASP.Net are not the programming basis mentioned for HDFS components in this unit. The question here points to \"Java\" instead.",
      "\"C++\" does not describe what the question is asking about. That is not what the question describes — the answer is \"Java\".",
      "\"ASP.Net\" does not describe what the question is asking about. So it does not fit; the matching concept here is \"Java\".",
      "Correct. NameNode and DataNode are Java-based components."
    ],
    "revisionNote": "NameNode and DataNode in HDFS architecture are Java programming codes that can run on commodity hardware machines."
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "Google File System is mainly designed for:",
    "options": [
      "Large distributed data-intensive applications",
      "Small single-user documents only",
      "Only offline gaming files",
      "Only spreadsheet formatting"
    ],
    "correctIndex": 0,
    "hint": "Think about this: GFS is designed for ____ .",
    "tutor": "GFS is designed for large distributed data-intensive applications.",
    "optionExplanations": [
      "Correct. GFS is designed for large distributed data-intensive applications.",
      "It is not designed only for small files, games, or spreadsheet formatting. That is not what the question describes — the answer is \"Large distributed data-intensive applications\".",
      "This option is too narrow — the correct idea is much broader than just offline gaming files. So it does not fit; the matching concept here is \"Large distributed data-intensive applications\".",
      "This option is too narrow — the correct idea is much broader than just spreadsheet formatting. The question here points to \"Large distributed data-intensive applications\" instead."
    ],
    "revisionNote": "Google File System is mainly designed for → Large distributed data-intensive applications"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "Commodity hardware means:",
    "options": [
      "Common low-cost hardware machines",
      "Only expensive supercomputers",
      "Only mobile phones",
      "Only keyboard devices"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ refers to ____ available ____ .",
    "tutor": "Commodity hardware refers to commonly available low-cost machines.",
    "optionExplanations": [
      "Correct. Commodity hardware refers to commonly available low-cost machines.",
      "This option is too narrow — the correct idea is much broader than just expensive supercomputers. Supercomputers, phones, and keyboards do not match this meaning. That is not what the question describes — the answer is \"Common low-cost hardware machines\".",
      "This option is too narrow — the correct idea is much broader than just mobile phones. Supercomputers, phones, and keyboards do not match this meaning. So it does not fit; the matching concept here is \"Common low-cost hardware machines\".",
      "This option is too narrow — the correct idea is much broader than just keyboard devices. Keyboards do not match this meaning. The question here points to \"Common low-cost hardware machines\" instead."
    ],
    "revisionNote": "Commodity hardware means → Common low-cost hardware machines"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "Why does GFS replicate chunks?",
    "options": [
      "To improve fault tolerance and data availability",
      "To delete data quickly",
      "To reduce all storage to zero",
      "To stop clients from reading files"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Replication keeps copies of chunks so ____ remains available even if a machine fails.",
    "tutor": "Replication keeps copies of chunks so data remains available even if a machine fails.",
    "optionExplanations": [
      "Correct. Replication keeps copies of chunks so data remains available even if a machine fails.",
      "Replication is not for deleting data, removing storage, or blocking clients. That is not what the question describes — the answer is \"To improve fault tolerance and data availability\".",
      "Replication is not for deleting data, removing storage, or blocking clients. So it does not fit; the matching concept here is \"To improve fault tolerance and data availability\".",
      "Replication is not for deleting data, removing storage, or blocking clients. The question here points to \"To improve fault tolerance and data availability\" instead."
    ],
    "revisionNote": "Why does GFS replicate chunks → To improve fault tolerance and data availability"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "In GFS, a chunk is:",
    "options": [
      "A fixed-size part of a file",
      "A complete operating system",
      "A keyboard shortcut",
      "A type of monitor"
    ],
    "correctIndex": 0,
    "hint": "Think about this: GFS divides ____ into ____ chunks.",
    "tutor": "GFS divides files into fixed-size chunks.",
    "optionExplanations": [
      "Correct. GFS divides files into fixed-size chunks.",
      "\"A complete operating system\" does not describe what the question is asking about. That is not what the question describes — the answer is \"A fixed-size part of a file\".",
      "A chunk is not an OS, keyboard shortcut, or monitor. So it does not fit; the matching concept here is \"A fixed-size part of a file\".",
      "A chunk is not an OS, keyboard shortcut, or monitor. The question here points to \"A fixed-size part of a file\" instead."
    ],
    "revisionNote": "In GFS, a chunk is → A fixed-size part of a file"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "The main role of the GFS Master is to:",
    "options": [
      "Maintain metadata and coordinate file system operations",
      "Store only music files",
      "Replace every client machine",
      "Act as a web browser"
    ],
    "correctIndex": 0,
    "hint": "Think about this: The GFS Master manages ____ and ____ access to chunks.",
    "tutor": "The GFS Master manages metadata and coordinates access to chunks.",
    "optionExplanations": [
      "Correct. The GFS Master manages metadata and coordinates access to chunks.",
      "It is not for music storage, replacing clients, or browsing web pages. That is not what the question describes — the answer is \"Maintain metadata and coordinate file system operations\".",
      "It is not for music storage, replacing clients, or browsing web pages. So it does not fit; the matching concept here is \"Maintain metadata and coordinate file system operations\".",
      "It is not for music storage, replacing clients, or browsing web pages. The question here points to \"Maintain metadata and coordinate file system operations\" instead."
    ],
    "revisionNote": "The main role of the GFS Master is to → Maintain metadata and coordinate file system operations"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "The main role of a GFS chunkserver is to:",
    "options": [
      "Store chunks of data",
      "Only design user interfaces",
      "Only create passwords",
      "Only print reports"
    ],
    "correctIndex": 0,
    "hint": "Recall the key idea of File System in Cloud that this question is testing, then eliminate options that describe something different.",
    "tutor": "Chunkservers store actual file chunks.",
    "optionExplanations": [
      "Correct. Chunkservers store actual file chunks.",
      "This option is too narrow — the correct idea is much broader than just design user interfaces. UI design, passwords, and printing are unrelated to chunkserver storage. That is not what the question describes — the answer is \"Store chunks of data\".",
      "This option is too narrow — the correct idea is much broader than just create passwords. UI design, passwords, and printing are unrelated to chunkserver storage. So it does not fit; the matching concept here is \"Store chunks of data\".",
      "This option is too narrow — the correct idea is much broader than just print reports. Printing is unrelated to chunkserver storage. The question here points to \"Store chunks of data\" instead."
    ],
    "revisionNote": "The main role of a GFS chunkserver is to → Store chunks of data"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "GFS client code is used to:",
    "options": [
      "Communicate with the Master and chunkservers for file operations",
      "Replace the operating system kernel",
      "Only format text documents",
      "Only create images"
    ],
    "correctIndex": 0,
    "hint": "Think about this: GFS client code talks to the ____ for metadata and to ____ for data ____ .",
    "tutor": "GFS client code talks to the Master for metadata and to chunkservers for data operations.",
    "optionExplanations": [
      "Correct. GFS client code talks to the Master for metadata and to chunkservers for data operations.",
      "It does not replace the kernel or perform only document or image tasks. That is not what the question describes — the answer is \"Communicate with the Master and chunkservers for file…\".",
      "This option is too narrow — the correct idea is much broader than just format text documents. So it does not fit; the matching concept here is \"Communicate with the Master and chunkservers for file…\".",
      "This option is too narrow — the correct idea is much broader than just create images. The question here points to \"Communicate with the Master and chunkservers for file…\" instead."
    ],
    "revisionNote": "GFS client code is used to → Communicate with the Master and chunkservers for file operations"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "The GFS operation log is important because:",
    "options": [
      "It records critical metadata changes",
      "It stores only screen brightness settings",
      "It deletes all metadata",
      "It is used only for typing practice"
    ],
    "correctIndex": 0,
    "hint": "Think about this: The operation log ____ important ____ and supports recovery.",
    "tutor": "The operation log records important metadata changes and supports recovery.",
    "optionExplanations": [
      "Correct. The operation log records important metadata changes and supports recovery.",
      "Brightness, deletion of all metadata, and typing practice are unrelated. That is not what the question describes — the answer is \"It records critical metadata changes\".",
      "Brightness, deletion of all metadata, and typing practice are unrelated. So it does not fit; the matching concept here is \"It records critical metadata changes\".",
      "Brightness, deletion of all metadata, and typing practice are unrelated. The question here points to \"It records critical metadata changes\" instead."
    ],
    "revisionNote": "The GFS operation log is important because → It records critical metadata changes"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "A distributed file system allows:",
    "options": [
      "Files to be stored and accessed across multiple networked machines",
      "Files to exist only on paper",
      "Only one local keyboard to store data",
      "No sharing of files"
    ],
    "correctIndex": 0,
    "hint": "Think about this: DFS allows ____ to be distributed ____ systems.",
    "tutor": "DFS allows files to be distributed across networked systems.",
    "optionExplanations": [
      "Correct. DFS allows files to be distributed across networked systems.",
      "Paper, keyboards, and no sharing do not describe distributed file systems. That is not what the question describes — the answer is \"Files to be stored and accessed across multiple…\".",
      "This option is too narrow — the correct idea is much broader than just one local keyboard to store data. So it does not fit; the matching concept here is \"Files to be stored and accessed across multiple…\".",
      "No sharing does not describe distributed file systems. The question here points to \"Files to be stored and accessed across multiple…\" instead."
    ],
    "revisionNote": "A distributed file system allows → Files to be stored and accessed across multiple networked machines"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "HDFS stands for:",
    "options": [
      "Hadoop Distributed File System",
      "Hardware Data File Software",
      "High Definition File Server",
      "Hybrid Data Flow System"
    ],
    "correctIndex": 0,
    "hint": "Think about this: HDFS stands for ____ .",
    "tutor": "HDFS stands for Hadoop Distributed File System.",
    "optionExplanations": [
      "Correct. HDFS stands for Hadoop Distributed File System.",
      "\"Hardware Data File Software\" does not describe what the question is asking about. That is not what the question describes — the answer is \"Hadoop Distributed File System\".",
      "\"High Definition File Server\" does not describe what the question is asking about. So it does not fit; the matching concept here is \"Hadoop Distributed File System\".",
      "\"Hybrid Data Flow System\" does not describe what the question is asking about. The question here points to \"Hadoop Distributed File System\" instead."
    ],
    "revisionNote": "HDFS stands for → Hadoop Distributed File System"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "HDFS is a major component of:",
    "options": [
      "Apache Hadoop",
      "Microsoft Paint",
      "HTML only",
      "Bluetooth speaker"
    ],
    "correctIndex": 0,
    "hint": "Think about this: HDFS is the storage layer of ____ .",
    "tutor": "HDFS is the storage layer of Apache Hadoop.",
    "optionExplanations": [
      "Correct. HDFS is the storage layer of Apache Hadoop.",
      "Paint, HTML, and Bluetooth speakers are unrelated. That is not what the question describes — the answer is \"Apache Hadoop\".",
      "Paint, HTML, and Bluetooth speakers are unrelated. So it does not fit; the matching concept here is \"Apache Hadoop\".",
      "Paint, HTML, and Bluetooth speakers are unrelated. The question here points to \"Apache Hadoop\" instead."
    ],
    "revisionNote": "HDFS is a major component of → Apache Hadoop"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "The NameNode in HDFS is responsible for:",
    "options": [
      "Managing file system namespace and metadata",
      "Storing only user passwords",
      "Displaying images only",
      "Cooling the CPU"
    ],
    "correctIndex": 0,
    "hint": "Think about this: The NameNode manages ____ and ____ information in HDFS.",
    "tutor": "The NameNode manages metadata and namespace information in HDFS.",
    "optionExplanations": [
      "Correct. The NameNode manages metadata and namespace information in HDFS.",
      "Password storage, image display, and CPU cooling are unrelated. That is not what the question describes — the answer is \"Managing file system namespace and metadata\".",
      "Password storage, image display, and CPU cooling are unrelated. So it does not fit; the matching concept here is \"Managing file system namespace and metadata\".",
      "Password storage, image display, and CPU cooling are unrelated. The question here points to \"Managing file system namespace and metadata\" instead."
    ],
    "revisionNote": "The NameNode in HDFS is responsible for → Managing file system namespace and metadata"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "The DataNode in HDFS is responsible for:",
    "options": [
      "Storing actual data blocks",
      "Only managing the browser",
      "Only writing HTML code",
      "Only formatting slides"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ store ____ in HDFS.",
    "tutor": "DataNodes store actual data blocks in HDFS.",
    "optionExplanations": [
      "Correct. DataNodes store actual data blocks in HDFS.",
      "This option is too narrow — the correct idea is much broader than just managing the browser. Browsers, HTML, and slides are not DataNode responsibilities. That is not what the question describes — the answer is \"Storing actual data blocks\".",
      "This option is too narrow — the correct idea is much broader than just writing html code. Browsers, HTML, and slides are not DataNode responsibilities. So it does not fit; the matching concept here is \"Storing actual data blocks\".",
      "This option is too narrow — the correct idea is much broader than just formatting slides. Browsers, HTML, and slides are not DataNode responsibilities. The question here points to \"Storing actual data blocks\" instead."
    ],
    "revisionNote": "The DataNode in HDFS is responsible for → Storing actual data blocks"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "HDFS is suitable for:",
    "options": [
      "Large files and high-throughput access",
      "Very tiny files only",
      "Only manual paper records",
      "Only single-user calculators"
    ],
    "correctIndex": 0,
    "hint": "Think about this: HDFS is designed for ____ and ____ data ____ .",
    "tutor": "HDFS is designed for large files and high-throughput data access.",
    "optionExplanations": [
      "Correct. HDFS is designed for large files and high-throughput data access.",
      "It is not optimized for only tiny files, paper records, or calculators. That is not what the question describes — the answer is \"Large files and high-throughput access\".",
      "This option is too narrow — the correct idea is much broader than just manual paper records. So it does not fit; the matching concept here is \"Large files and high-throughput access\".",
      "This option is too narrow — the correct idea is much broader than just single-user calculators. The question here points to \"Large files and high-throughput access\" instead."
    ],
    "revisionNote": "HDFS is suitable for → Large files and high-throughput access"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "The file system namespace means:",
    "options": [
      "The hierarchy and naming structure of files and directories",
      "Only the color of files",
      "Only the size of monitor",
      "Only keyboard layout"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Namespace refers to the directory and ____ .",
    "tutor": "Namespace refers to the directory and file naming structure.",
    "optionExplanations": [
      "Correct. Namespace refers to the directory and file naming structure.",
      "This option is too narrow — the correct idea is much broader than just the color of files. Colors, monitor size, and keyboard layout are unrelated. That is not what the question describes — the answer is \"The hierarchy and naming structure of files and…\".",
      "This option is too narrow — the correct idea is much broader than just the size of monitor. Colors, monitor size, and keyboard layout are unrelated. So it does not fit; the matching concept here is \"The hierarchy and naming structure of files and…\".",
      "This option is too narrow — the correct idea is much broader than just keyboard layout. Colors, monitor size, and keyboard layout are unrelated. The question here points to \"The hierarchy and naming structure of files and…\" instead."
    ],
    "revisionNote": "The file system namespace means → The hierarchy and naming structure of files and directories"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "HDFS block replication helps with:",
    "options": [
      "Fault tolerance",
      "Removing all backups",
      "Making files unreadable",
      "Reducing all storage to one byte"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Replication provides ____ by storing multiple copies of blocks.",
    "tutor": "Replication provides fault tolerance by storing multiple copies of blocks.",
    "optionExplanations": [
      "Correct. Replication provides fault tolerance by storing multiple copies of blocks.",
      "It does not remove backups, make files unreadable, or reduce storage to one byte. That is not what the question describes — the answer is \"Fault tolerance\".",
      "It does not remove backups, make files unreadable, or reduce storage to one byte. So it does not fit; the matching concept here is \"Fault tolerance\".",
      "It does not remove backups, make files unreadable, or reduce storage to one byte. The question here points to \"Fault tolerance\" instead."
    ],
    "revisionNote": "HDFS block replication helps with → Fault tolerance"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "In HDFS, client applications usually communicate with:",
    "options": [
      "NameNode for metadata and DataNodes for actual data",
      "Only the keyboard",
      "Only the monitor",
      "Only a printer"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Clients contact the ____ for ____ and ____ for reading/writing ____ .",
    "tutor": "Clients contact the NameNode for metadata and DataNodes for reading/writing actual data.",
    "optionExplanations": [
      "Correct. Clients contact the NameNode for metadata and DataNodes for reading/writing actual data.",
      "This option is too narrow — the correct idea is much broader than just the keyboard. Keyboard, monitor, and printer are not HDFS storage components. That is not what the question describes — the answer is \"NameNode for metadata and DataNodes for actual data\".",
      "This option is too narrow — the correct idea is much broader than just the monitor. Keyboard, monitor, and printer are not HDFS storage components. So it does not fit; the matching concept here is \"NameNode for metadata and DataNodes for actual data\".",
      "\"Only a printer\" is a physical hardware part or peripheral of a local computer — it does not provide any cloud capability by itself. Printer is not HDFS storage components. The question here points to \"NameNode for metadata and DataNodes for actual data\" instead."
    ],
    "revisionNote": "In HDFS, client applications usually communicate with → NameNode for metadata and DataNodes for actual data"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "GFS and HDFS are similar because both:",
    "options": [
      "Use distributed storage concepts for large data",
      "Are only image editing tools",
      "Are only programming languages",
      "Are only physical keyboards"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Both GFS and HDFS are ____ file systems designed for ____ workloads.",
    "tutor": "Both GFS and HDFS are distributed file systems designed for large data workloads.",
    "optionExplanations": [
      "Correct. Both GFS and HDFS are distributed file systems designed for large data workloads.",
      "They are not image editors, programming languages, or keyboards. That is not what the question describes — the answer is \"Use distributed storage concepts for large data\".",
      "They are not image editors, programming languages, or keyboards. So it does not fit; the matching concept here is \"Use distributed storage concepts for large data\".",
      "They are not image editors, programming languages, or keyboards. The question here points to \"Use distributed storage concepts for large data\" instead."
    ],
    "revisionNote": "GFS and HDFS are similar because both → Use distributed storage concepts for large data"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "One major difference between GFS and HDFS is:",
    "options": [
      "GFS was designed by Google, while HDFS is part of Apache Hadoop",
      "GFS is a keyboard and HDFS is a mouse",
      "Both are only spreadsheet formulas",
      "HDFS is only for drawing pictures"
    ],
    "correctIndex": 0,
    "hint": "Think about this: GFS is ____ 's distributed file system, ____ is the ____ Distributed File System.",
    "tutor": "GFS is Google's distributed file system, while HDFS is the Hadoop Distributed File System.",
    "optionExplanations": [
      "Correct. GFS is Google's distributed file system, while HDFS is the Hadoop Distributed File System.",
      "\"GFS is a keyboard and HDFS is a mouse\" does not describe what the question is asking about. That is not what the question describes — the answer is \"GFS was designed by Google, while HDFS is…\".",
      "\"Both are only spreadsheet formulas\" does not describe what the question is asking about. So it does not fit; the matching concept here is \"GFS was designed by Google, while HDFS is…\".",
      "\"HDFS is only for drawing pictures\" does not describe what the question is asking about. The question here points to \"GFS was designed by Google, while HDFS is…\" instead."
    ],
    "revisionNote": "One major difference between GFS and HDFS is → GFS was designed by Google, while HDFS is part of Apache Hadoop"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Concept MCQ",
    "question": "A cloud file system should support:",
    "options": [
      "Scalability, reliability, and access to distributed data",
      "Only one local file forever",
      "No fault tolerance",
      "No network communication"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Cloud file systems need scalable and reliable ____ .",
    "tutor": "Cloud file systems need scalable and reliable distributed access.",
    "optionExplanations": [
      "Correct. Cloud file systems need scalable and reliable distributed access.",
      "This option is too narrow — the correct idea is much broader than just one local file forever. That is not what the question describes — the answer is \"Scalability, reliability, and access to distributed data\".",
      "One local file, no fault tolerance, and no network communication do not match cloud file systems. So it does not fit; the matching concept here is \"Scalability, reliability, and access to distributed data\".",
      "No network communication does not match cloud file systems. The question here points to \"Scalability, reliability, and access to distributed data\" instead."
    ],
    "revisionNote": "A cloud file system should support → Scalability, reliability, and access to distributed data"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "A company stores huge log files across many low-cost machines. Machines may fail, but data should remain available. Which concept is most important?",
    "options": [
      "Fault tolerance through replication",
      "Single local disk only",
      "Manual typing speed",
      "Screen brightness"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ keeps data available even if machines fail.",
    "tutor": "Fault tolerance through replication keeps data available even if machines fail.",
    "optionExplanations": [
      "Correct. Fault tolerance through replication keeps data available even if machines fail.",
      "A single local disk is risky, and typing speed or brightness are unrelated. That is not what the question describes — the answer is \"Fault tolerance through replication\".",
      "A single local disk is risky, and typing speed or brightness are unrelated. So it does not fit; the matching concept here is \"Fault tolerance through replication\".",
      "\"Screen brightness\" is just a local setting or small utility on your own device. Typing speed or brightness are unrelated. The question here points to \"Fault tolerance through replication\" instead."
    ],
    "revisionNote": "A company stores huge log files across many low-cost machines. Machines may fail, but data should remain available. Which concept is most important → Fault tolerance through replication"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "A file is divided into fixed-size parts and stored on multiple servers. What are these parts called in GFS?",
    "options": [
      "Chunks",
      "Tabs",
      "Slides",
      "Pixels"
    ],
    "correctIndex": 0,
    "hint": "Think about this: In GFS, files are split into ____ .",
    "tutor": "In GFS, files are split into chunks.",
    "optionExplanations": [
      "Correct. In GFS, files are split into chunks.",
      "Tabs, slides, and pixels do not describe GFS file division. That is not what the question describes — the answer is \"Chunks\".",
      "Tabs, slides, and pixels do not describe GFS file division. So it does not fit; the matching concept here is \"Chunks\".",
      "Pixels do not describe GFS file division. The question here points to \"Chunks\" instead."
    ],
    "revisionNote": "A file is divided into fixed-size parts and stored on multiple servers. What are these parts called in GFS → Chunks"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "A GFS client needs to know where a file's chunks are stored. Which component gives metadata information?",
    "options": [
      "Master",
      "Keyboard",
      "Monitor",
      "Printer"
    ],
    "correctIndex": 0,
    "hint": "Think about this: The ____ provides metadata such as chunk mapping and locations.",
    "tutor": "The Master provides metadata such as chunk mapping and locations.",
    "optionExplanations": [
      "Correct. The Master provides metadata such as chunk mapping and locations.",
      "\"Keyboard\" is a physical hardware part or peripheral of a local computer — it does not provide any cloud capability by itself. That is not what the question describes — the answer is \"Master\".",
      "\"Monitor\" is a physical hardware part or peripheral of a local computer — it does not provide any cloud capability by itself. So it does not fit; the matching concept here is \"Master\".",
      "\"Printer\" is a physical hardware part or peripheral of a local computer — it does not provide any cloud capability by itself. The question here points to \"Master\" instead."
    ],
    "revisionNote": "A GFS client needs to know where a file's chunks are stored. Which component gives metadata information → Master"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "A system keeps a record of every critical metadata change so it can recover after failure. Which GFS component is this?",
    "options": [
      "Operation log",
      "Paint tool",
      "Mouse driver",
      "Screen saver"
    ],
    "correctIndex": 0,
    "hint": "Think about this: The ____ stores critical metadata changes.",
    "tutor": "The operation log stores critical metadata changes.",
    "optionExplanations": [
      "Correct. The operation log stores critical metadata changes.",
      "Paint tools, mouse drivers, and screen savers are unrelated. That is not what the question describes — the answer is \"Operation log\".",
      "Paint tools, mouse drivers, and screen savers are unrelated. So it does not fit; the matching concept here is \"Operation log\".",
      "\"Screen saver\" is just a local setting or small utility on your own device. The question here points to \"Operation log\" instead."
    ],
    "revisionNote": "A system keeps a record of every critical metadata change so it can recover after failure. Which GFS component is this → Operation log"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "An HDFS file is written once and then read many times by analytics jobs. Which HDFS access model is shown?",
    "options": [
      "Write-once-read-many",
      "Write-many-read-never",
      "Read-once-delete-all",
      "Only-write-never-read"
    ],
    "correctIndex": 0,
    "hint": "Think about this: HDFS is designed for ____ workloads.",
    "tutor": "HDFS is designed for write-once-read-many workloads.",
    "optionExplanations": [
      "Correct. HDFS is designed for write-once-read-many workloads.",
      "\"Write-many-read-never\" does not describe what the question is asking about. That is not what the question describes — the answer is \"Write-once-read-many\".",
      "\"Read-once-delete-all\" does not describe what the question is asking about. So it does not fit; the matching concept here is \"Write-once-read-many\".",
      "This option is too narrow — the correct idea is much broader than just only-write-never-read. The question here points to \"Write-once-read-many\" instead."
    ],
    "revisionNote": "An HDFS file is written once and then read many times by analytics jobs. Which HDFS access model is shown → Write-once-read-many"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "In HDFS, the NameNode fails and metadata becomes unavailable. What type of information is mainly affected?",
    "options": [
      "File system namespace and block metadata",
      "Keyboard color",
      "Speaker volume",
      "Monitor brightness"
    ],
    "correctIndex": 0,
    "hint": "Think about this: NameNode manages ____ and ____ .",
    "tutor": "NameNode manages namespace and metadata.",
    "optionExplanations": [
      "Correct. NameNode manages namespace and metadata.",
      "Keyboard color, speaker volume, and brightness are not HDFS metadata. That is not what the question describes — the answer is \"File system namespace and block metadata\".",
      "Keyboard color, speaker volume, and brightness are not HDFS metadata. So it does not fit; the matching concept here is \"File system namespace and block metadata\".",
      "Keyboard color, speaker volume, and brightness are not HDFS metadata. The question here points to \"File system namespace and block metadata\" instead."
    ],
    "revisionNote": "In HDFS, the NameNode fails and metadata becomes unavailable. What type of information is mainly affected → File system namespace and block metadata"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "A DataNode receives instructions to store and retrieve data blocks. What is its main role?",
    "options": [
      "Managing actual block storage",
      "Approving exam marks",
      "Designing logos",
      "Opening social media"
    ],
    "correctIndex": 0,
    "hint": "Think about this: DataNodes store and serve ____ of data.",
    "tutor": "DataNodes store and serve actual blocks of data.",
    "optionExplanations": [
      "Correct. DataNodes store and serve actual blocks of data.",
      "Marks, logos, and social media are unrelated to HDFS storage. That is not what the question describes — the answer is \"Managing actual block storage\".",
      "Marks, logos, and social media are unrelated to HDFS storage. So it does not fit; the matching concept here is \"Managing actual block storage\".",
      "Social media is unrelated to HDFS storage. The question here points to \"Managing actual block storage\" instead."
    ],
    "revisionNote": "A DataNode receives instructions to store and retrieve data blocks. What is its main role → Managing actual block storage"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "A DFS that exists only on one computer and does not provide fault tolerance is called:",
    "options": [
      "Standalone DFS",
      "Highly available DFS",
      "Cloud-only DFS",
      "Replicated DFS"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ is limited to the computer where it is created and does not provide fault tolerance.",
    "tutor": "Standalone DFS is limited to the computer where it is created and does not provide fault tolerance.",
    "optionExplanations": [
      "Correct. Standalone DFS is limited to the computer where it is created and does not provide fault tolerance.",
      "Highly available, cloud-only, and replicated DFS do not match the description. That is not what the question describes — the answer is \"Standalone DFS\".",
      "Highly available, cloud-only, and replicated DFS do not match the description. So it does not fit; the matching concept here is \"Standalone DFS\".",
      "Highly available, cloud-only, and replicated DFS do not match the description. The question here points to \"Standalone DFS\" instead."
    ],
    "revisionNote": "A DFS that exists only on one computer and does not provide fault tolerance is called → Standalone DFS"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "Which pair is correctly matched?",
    "options": [
      "NameNode – metadata management",
      "DataNode – only screen display",
      "GFS Master – only typing text",
      "Operation log – keyboard shortcut list"
    ],
    "correctIndex": 0,
    "hint": "Think about this: ____ manages HDFS ____ .",
    "tutor": "NameNode manages HDFS metadata.",
    "optionExplanations": [
      "Correct. NameNode manages HDFS metadata.",
      "DataNode stores data blocks. That is not what the question describes — the answer is \"NameNode – metadata management\".",
      "DataNode stores data blocks, GFS Master manages metadata, and operation log records metadata changes. So it does not fit; the matching concept here is \"NameNode – metadata management\".",
      "Operation log records metadata changes. The question here points to \"NameNode – metadata management\" instead."
    ],
    "revisionNote": "Which pair is correctly matched → NameNode – metadata management"
  },
  {
    "unit": "Unit 5 – File System in Cloud",
    "topic": "File System in Cloud",
    "type": "Tricky Exam MCQ",
    "question": "Which statement is most accurate?",
    "options": [
      "GFS and HDFS are distributed file systems designed for large-scale data storage",
      "GFS and HDFS are only web browsers",
      "HDFS stores data only on paper",
      "GFS does not support fault tolerance"
    ],
    "correctIndex": 0,
    "hint": "Think about this: Both GFS and ____ support ____ .",
    "tutor": "Both GFS and HDFS support large-scale distributed storage.",
    "optionExplanations": [
      "Correct. Both GFS and HDFS support large-scale distributed storage.",
      "They are not browsers, HDFS is digital, and GFS supports fault tolerance. That is not what the question describes — the answer is \"GFS and HDFS are distributed file systems designed…\".",
      "They are not browsers, HDFS is digital, and GFS supports fault tolerance. So it does not fit; the matching concept here is \"GFS and HDFS are distributed file systems designed…\".",
      "They are not browsers, HDFS is digital, and GFS supports fault tolerance. The question here points to \"GFS and HDFS are distributed file systems designed…\" instead."
    ],
    "revisionNote": "Which statement is most accurate → GFS and HDFS are distributed file systems designed for large-scale data storage"
  }
];
