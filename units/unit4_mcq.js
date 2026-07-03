// units/unit4_mcq.js
// Unit 4 – Introduction to Big Data
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit4_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Big Data mainly refers to data sets that are:",
    options: [
      "Too large or complex for traditional data-processing tools",
      "Always very small in size",
      "Only stored in one Excel sheet",
      "Always manually processed"
    ],
    correctIndex: 0,
    explanation: "Correct: Big Data deals with data that is too large, fast, or complex for traditional tools. Why others are wrong: Big Data is not small, not limited to Excel, and cannot always be handled manually."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which of the following is NOT a common V of Big Data?",
    options: ["Volume", "Velocity", "Variety", "Voltage"],
    correctIndex: 3,
    explanation: "Correct: Voltage is not a standard Big Data V. Why others are wrong: Volume, Velocity, and Variety are common Big Data characteristics."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which of the following is an example of structured data?",
    options: [
      "Data stored in relational database tables",
      "Random video files",
      "Unorganized social media comments",
      "Raw audio recordings"
    ],
    correctIndex: 0,
    explanation: "Correct: Structured data is organized in a fixed format such as rows and columns. Why others are wrong: Videos, comments, and audio are usually unstructured or semi-structured."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which of the following is an example of semi-structured data?",
    options: ["Plain video file", "XML or JSON file", "Only paper records", "Random image file"],
    correctIndex: 1,
    explanation: "Correct: XML and JSON contain tags or key-value structure, so they are semi-structured. Why others are wrong: Video, paper records, and image files do not follow this semi-structured format."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which of the following is a benefit of Big Data processing?",
    options: [
      "Better decision making",
      "Improved customer analysis",
      "Detection of patterns and trends",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Big Data processing helps in decision making, customer analysis, and pattern detection. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which of the following is a common challenge in handling Big Data?",
    options: ["Data storage and processing", "Using only one pen drive", "No data generation", "Removing all analytics"],
    correctIndex: 0,
    explanation: "Correct: Big Data creates challenges in storage, processing, transfer, analysis, and visualization. Why others are wrong: Pen drives are not enough, data is generated continuously, and analytics is needed."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which of the following activities can be part of the Big Data Analytics cycle?",
    options: [
      "Data acquisition",
      "Data preparation",
      "Model planning and evaluation",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Big Data Analytics cycle includes stages such as acquisition, preparation, modeling, and evaluation. Why others are wrong: Each individual option is part of the cycle, so the best answer is all of the above."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which tool is commonly used for statistical computing and data analysis?",
    options: ["Paint", "Notepad", "R", "Calculator only"],
    correctIndex: 2,
    explanation: "Correct: R is widely used for statistical computing, analysis, and visualization. Why others are wrong: Paint and Notepad are not data analytics tools, and a calculator is too limited."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Parallel data processing means:",
    options: [
      "Processing data only one record at a time",
      "Avoiding multiple processors",
      "Processing multiple tasks at the same time",
      "Deleting data before analysis"
    ],
    correctIndex: 2,
    explanation: "Correct: Parallel processing divides work so multiple tasks can be processed simultaneously. Why others are wrong: It is not one-by-one processing, does not avoid processors, and does not mean deleting data."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Distributed data processing means:",
    options: [
      "Processing all data on paper",
      "Using no computer network",
      "Processing data across multiple connected machines",
      "Using only one local file"
    ],
    correctIndex: 2,
    explanation: "Correct: Distributed processing uses multiple connected machines to process large data. Why others are wrong: Paper, no network, and one local file do not describe distributed processing."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Apache Hadoop is mainly used for:",
    options: [
      "Distributed storage and processing of large data sets",
      "Creating only PowerPoint slides",
      "Editing images only",
      "Playing music files only"
    ],
    correctIndex: 0,
    explanation: "Correct: Hadoop is an open-source framework for distributed storage and processing of large data. Why others are wrong: Slides, image editing, and music playback are unrelated."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "According to the unit, which of the following is an example of unstructured data?",
    options: ["Sensor data", "Relational table only", "Primary key", "Fixed schema table"],
    correctIndex: 0,
    explanation: "Correct: Sensor data can be treated as unstructured or non-traditional data in Big Data contexts. Why others are wrong: Relational tables, primary keys, and fixed schemas are linked with structured database systems."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Veracity in Big Data is mainly concerned with:",
    options: [
      "Only data size",
      "Only data speed",
      "Only data format",
      "Bias, noise, abnormality, and trustworthiness of data"
    ],
    correctIndex: 3,
    explanation: "Correct: Veracity focuses on reliability, uncertainty, noise, and trustworthiness of data. Why others are wrong: Size relates to volume, speed relates to velocity, and format relates to variety."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which Big Data characteristic refers to connectedness or relationship among data?",
    options: ["Variety", "Valence", "Velocity", "Volume"],
    correctIndex: 1,
    explanation: "Correct: Valence refers to connectedness or relationships in data. Why others are wrong: Variety is data type diversity, velocity is speed, and volume is size."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Self Assessment Based",
    question: "Which stage in the Big Data cycle identifies the type of data profiles needed to deliver the final data product?",
    options: ["Data Munging", "Data Acquisition", "Data Operations", "Resource Assessments"],
    correctIndex: 1,
    explanation: "Correct: Data acquisition identifies what data is needed and how it should be collected. Why others are wrong: Data munging cleans data, data operations handle processing, and resource assessment checks required resources."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Volume in Big Data means:",
    options: ["Large amount of data", "Speed of data generation", "Different types of data", "Trustworthiness of data"],
    correctIndex: 0,
    explanation: "Correct: Volume refers to the size or amount of data. Why others are wrong: Speed is velocity, type difference is variety, and trustworthiness is veracity."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Velocity in Big Data refers to:",
    options: ["How fast data is generated and processed", "How beautiful data looks", "Only data accuracy", "Only database tables"],
    correctIndex: 0,
    explanation: "Correct: Velocity deals with the speed at which data is created, received, and processed. Why others are wrong: Appearance, accuracy, and tables do not define velocity."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Variety in Big Data means:",
    options: ["Different forms of data such as text, image, video, logs, and sensor data", "Only one type of data", "Only numeric values", "Only small files"],
    correctIndex: 0,
    explanation: "Correct: Variety means data comes in many formats. Why others are wrong: Big Data is not limited to one type, numbers only, or small files."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Which of the following best describes value in Big Data?",
    options: ["Useful insight extracted from data", "Only file size", "Only data noise", "Only storage cost"],
    correctIndex: 0,
    explanation: "Correct: Value means the useful information or business benefit gained from data. Why others are wrong: Size, noise, and cost do not fully describe value."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Traditional databases usually work best with:",
    options: ["Structured data with fixed schema", "Only random videos", "Only social media memes", "Only raw audio"],
    correctIndex: 0,
    explanation: "Correct: Traditional databases are designed for structured data with predefined schema. Why others are wrong: Videos, memes, and audio are usually unstructured."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Why are traditional database methods not always suitable for Big Data?",
    options: [
      "Big Data may be too large, fast, or varied",
      "Traditional databases never store records",
      "Big Data is always smaller",
      "Traditional databases cannot use tables"
    ],
    correctIndex: 0,
    explanation: "Correct: Big Data may exceed traditional tools because of size, speed, and variety. Why others are wrong: Traditional databases do store records and tables, and Big Data is not always smaller."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Structured data is usually stored in:",
    options: ["Rows and columns", "Random video stream only", "No format at all", "Only handwritten notes"],
    correctIndex: 0,
    explanation: "Correct: Structured data is commonly organized in rows and columns. Why others are wrong: Video streams, no format, and handwritten notes are not structured database formats."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Unstructured data includes:",
    options: ["Images, videos, emails, social media posts, and audio", "Only relational tables", "Only primary keys", "Only fixed columns"],
    correctIndex: 0,
    explanation: "Correct: Unstructured data does not follow a fixed tabular format. Why others are wrong: Relational tables, primary keys, and fixed columns are structured database concepts."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Semi-structured data is different because it:",
    options: ["Has some organization but not a strict relational schema", "Has no structure at all", "Must always be in Excel", "Cannot be processed"],
    correctIndex: 0,
    explanation: "Correct: Semi-structured data has tags, keys, or markers but not strict relational tables. Why others are wrong: It has some structure, is not Excel-only, and can be processed."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Big Data Analytics is mainly used to:",
    options: ["Extract useful patterns, trends, and insights from large data", "Hide all data permanently", "Avoid decision making", "Delete databases"],
    correctIndex: 0,
    explanation: "Correct: Big Data Analytics helps discover insights from large and complex data. Why others are wrong: It does not mean hiding data, avoiding decisions, or deleting databases."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Descriptive analytics answers which type of question?",
    options: ["What happened?", "What will happen?", "What should we do?", "Why is the keyboard slow?"],
    correctIndex: 0,
    explanation: "Correct: Descriptive analytics explains past events. Why others are wrong: Predictive analytics asks what may happen, prescriptive analytics suggests actions, and keyboard speed is unrelated."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Predictive analytics is used to:",
    options: ["Forecast future outcomes using data", "Only describe past reports", "Only format text", "Only compress images"],
    correctIndex: 0,
    explanation: "Correct: Predictive analytics uses historical data and models to forecast future trends. Why others are wrong: Past reporting is descriptive analytics, while text formatting and image compression are unrelated."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Prescriptive analytics helps to:",
    options: ["Suggest actions or decisions", "Only store files", "Only create passwords", "Only copy data"],
    correctIndex: 0,
    explanation: "Correct: Prescriptive analytics recommends what action should be taken. Why others are wrong: Storage, passwords, and copying data are not the main purpose."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Data munging means:",
    options: ["Cleaning and transforming raw data into usable form", "Deleting all useful data", "Buying hardware only", "Stopping analysis"],
    correctIndex: 0,
    explanation: "Correct: Data munging means preparing raw data by cleaning, formatting, and transforming it. Why others are wrong: It does not mean deleting useful data, buying hardware, or stopping analysis."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Which of the following is commonly used for Big Data distributed storage?",
    options: ["HDFS", "MS Paint", "Calculator", "Keyboard"],
    correctIndex: 0,
    explanation: "Correct: HDFS stands for Hadoop Distributed File System. Why others are wrong: Paint, calculator, and keyboard are not distributed storage systems."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Which Hadoop module is responsible for distributed data processing?",
    options: ["MapReduce", "Photoshop", "Notepad", "Bluetooth speaker"],
    correctIndex: 0,
    explanation: "Correct: MapReduce processes large data sets in parallel across clusters. Why others are wrong: Photoshop, Notepad, and Bluetooth speakers are not Hadoop processing modules."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "YARN in Hadoop is mainly used for:",
    options: ["Resource management and job scheduling", "Image cropping", "Text styling", "Video playback"],
    correctIndex: 0,
    explanation: "Correct: YARN manages cluster resources and schedules jobs in Hadoop. Why others are wrong: Image cropping, text styling, and video playback are unrelated."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Hadoop Common provides:",
    options: ["Common utilities and libraries required by Hadoop modules", "Only music files", "Only games", "Only presentation themes"],
    correctIndex: 0,
    explanation: "Correct: Hadoop Common contains shared utilities used by other Hadoop components. Why others are wrong: Music, games, and themes are unrelated."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Cluster processing means:",
    options: ["Multiple connected computers work together as a system", "Only one standalone laptop works alone", "No network is used", "Only paper files are processed"],
    correctIndex: 0,
    explanation: "Correct: A cluster connects multiple machines to work together. Why others are wrong: One standalone laptop, no network, and paper files do not describe cluster processing."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Concept MCQ",
    question: "Batch processing is useful when:",
    options: ["Large amounts of data can be processed together at scheduled times", "Instant millisecond response is always required", "No data exists", "Only one small calculation is needed"],
    correctIndex: 0,
    explanation: "Correct: Batch processing handles large data in groups. Why others are wrong: Real-time needs instant response, and no data or tiny calculations do not need batch Big Data processing."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A social media company receives millions of posts, images, videos, and comments every hour. Which Big Data V is most visible here?",
    options: ["Volume and Velocity", "Only Voltage", "Only keyboard speed", "Only screen size"],
    correctIndex: 0,
    explanation: "Correct: Millions of items show volume, and every hour shows velocity. Why others are wrong: Voltage, keyboard speed, and screen size are not Big Data characteristics."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A bank wants to detect unusual transactions from huge transaction logs. Which Big Data use case is this?",
    options: ["Fraud detection", "Keyboard repair", "Image decoration", "Manual file naming"],
    correctIndex: 0,
    explanation: "Correct: Detecting unusual transactions is a fraud detection use case. Why others are wrong: Keyboard repair, image decoration, and file naming are unrelated."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A dataset has millions of rows but all rows follow the same columns and schema. What type of data is it?",
    options: ["Structured data", "Unstructured data", "No data", "Only multimedia data"],
    correctIndex: 0,
    explanation: "Correct: Same columns and schema indicate structured data. Why others are wrong: Unstructured data lacks fixed schema, and the dataset clearly contains data."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A JSON file has flexible fields but still uses key-value pairs. What type of data is it?",
    options: ["Semi-structured data", "Fully unstructured data", "Only handwritten data", "No data"],
    correctIndex: 0,
    explanation: "Correct: JSON is semi-structured because it has keys and values but flexible structure. Why others are wrong: It is not completely structureless, handwritten, or empty."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A company divides one large job into smaller tasks and runs them on many processors at the same time. This is:",
    options: ["Parallel processing", "Manual processing", "Only serial processing", "No processing"],
    correctIndex: 0,
    explanation: "Correct: Parallel processing runs multiple tasks at the same time. Why others are wrong: Manual and serial processing do not divide work across processors simultaneously."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A Big Data system stores chunks of data across several machines and processes them near where they are stored. Which framework is commonly used?",
    options: ["Hadoop", "Paint", "Calculator", "Media player"],
    correctIndex: 0,
    explanation: "Correct: Hadoop supports distributed storage and processing. Why others are wrong: Paint, calculator, and media player cannot handle this Big Data framework role."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "In MapReduce, the stage that converts input data into intermediate key-value pairs is:",
    options: ["Map phase", "Only printing phase", "Only deleting phase", "Only display phase"],
    correctIndex: 0,
    explanation: "Correct: The Map phase processes input and creates intermediate key-value pairs. Why others are wrong: Printing, deleting, and display phases are not MapReduce phases."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "In MapReduce, the stage that combines values having the same key is:",
    options: ["Reduce phase", "Paint phase", "Login phase", "Typing phase"],
    correctIndex: 0,
    explanation: "Correct: The Reduce phase aggregates or combines values for each key. Why others are wrong: Paint, login, and typing are unrelated to MapReduce."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "A data analyst cleans missing values, removes duplicates, and converts formats before analysis. Which step is this?",
    options: ["Data munging", "Data hiding", "Data sleeping", "Data deletion only"],
    correctIndex: 0,
    explanation: "Correct: Cleaning and transforming data is data munging. Why others are wrong: Hiding, sleeping, and only deleting data do not describe preparation for analysis."
  },

  {
    unit: "Unit 4 – Introduction to Big Data",
    type: "Tricky Exam MCQ",
    question: "Which statement is most accurate?",
    options: [
      "Big Data needs tools that can handle large volume, high velocity, and variety",
      "Big Data always means only one Excel file",
      "Big Data never needs analytics",
      "Big Data cannot include unstructured data"
    ],
    correctIndex: 0,
    explanation: "Correct: Big Data requires tools that handle size, speed, and different data types. Why others are wrong: It is not limited to Excel, analytics is important, and it can include unstructured data."
  }
];
