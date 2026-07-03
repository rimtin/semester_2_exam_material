// units/unit1_mcq.js
// Unit 1 – Cloud Computing Introduction
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit1_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Which of the following is an important component of cloud computing?",
    options: ["Fat Clients", "Virtualization", "Abstraction", "CapEx"],
    correctIndex: 0,
    explanation: "Correct: Fat clients are one type of client device used in cloud access. Why others are wrong: Virtualization and abstraction are important cloud concepts, while CapEx is a cost term, not a direct component."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Computers that do not have internal hard drives and depend on the server to do most of the work are called:",
    options: ["Fat Clients", "Thick Clients", "Thin Clients", "Internal HDD Computers"],
    correctIndex: 2,
    explanation: "Correct: Thin clients depend on servers for processing and storage. Why others are wrong: Fat and thick clients have more local processing power. Internal HDD computers are not the cloud term used here."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Which computing model allows access to applications that actually reside at a remote location, usually a distant data center?",
    options: ["Grid Computing", "Client-Server Computing", "Cloud Computing", "Utility Computing"],
    correctIndex: 2,
    explanation: "Correct: Cloud computing allows users to access applications and resources located remotely. Why others are wrong: Grid computing focuses on distributed resource sharing, client-server computing is a centralized model, and utility computing focuses on pay-per-use."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "In cloud computing, when the physical system running the application and the data location are hidden from the user, this represents:",
    options: ["Virtualization", "Abstraction", "Collaboration", "Vendor Lock-In"],
    correctIndex: 1,
    explanation: "Correct: Abstraction hides implementation details from the user. Why others are wrong: Virtualization creates virtual resources, collaboration means working together online, and vendor lock-in means difficulty changing providers."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "SLA in cloud computing stands for:",
    options: ["Service-Low Agreements", "Software-Level Approach", "Software-Low Approach", "Service-Level Agreements"],
    correctIndex: 3,
    explanation: "Correct: SLA stands for Service-Level Agreement. Why others are wrong: The other options are incorrect expansions and are not standard cloud terms."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "__________ as a utility has been a dream from the beginning of the computing industry.",
    options: ["Software", "Hardware", "Computing", "Model"],
    correctIndex: 2,
    explanation: "Correct: Computing as a utility means using computing resources like electricity or water and paying according to usage. Why others are wrong: Software, hardware, and model do not complete the idea correctly."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Cloud computing refers to:",
    options: [
      "Applications and services running on a distributed network using virtualized resources",
      "Only applications running on a distributed network",
      "Only services running on a distributed network",
      "None of the above"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud computing includes both applications and services using virtualized resources over a network. Why others are wrong: Options B and C are incomplete, and option D is wrong because option A is correct."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Which of the following is a major concern in cloud computing?",
    options: ["Security", "Cost", "Space", "Platforms"],
    correctIndex: 0,
    explanation: "Correct: Security is a major concern because data and applications may be stored on external cloud infrastructure. Why others are wrong: Cost, space, and platforms matter, but security is usually the major concern."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "The ability to provision server time and storage automatically without human interaction is called:",
    options: ["Broad Network Access", "On-Demand Self-Service", "Elasticity", "Resource Pooling"],
    correctIndex: 1,
    explanation: "Correct: On-demand self-service allows users to get resources whenever needed without provider-side manual interaction. Why others are wrong: Broad network access means network availability, elasticity means scaling, and resource pooling means shared resources."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Outsourced cloud management helps in:",
    options: [
      "Saving upfront capital investment",
      "Making IT infrastructure setup easier",
      "Paying mainly for operational expenses",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Cloud outsourcing can reduce upfront investment, simplify infrastructure setup, and support operational-expense-based payment. Why others are wrong: Options A, B, and C are all individually correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "__________ allows multiple users to use the same shared resources while keeping their data separate.",
    options: ["Multitenancy", "Distribution", "Virtualization", "Abstraction"],
    correctIndex: 0,
    explanation: "Correct: Multitenancy allows many users or customers to share the same cloud resources securely. Why others are wrong: Distribution means spreading resources, virtualization creates virtual versions, and abstraction hides details."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "SOA in cloud computing stands for:",
    options: ["Software Oriented Applications", "Server Oriented Approach", "Service Optimal Approach", "Service Oriented Architecture"],
    correctIndex: 3,
    explanation: "Correct: SOA stands for Service Oriented Architecture. Why others are wrong: The other options are not standard expansions of SOA."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "CSPs stands for:",
    options: ["Cloud Service Provisioners", "Cloud Service Providers", "Cloud Software Providers", "Cloud Software Provisioners"],
    correctIndex: 1,
    explanation: "Correct: CSPs means Cloud Service Providers. Why others are wrong: The other options are similar-sounding but are not the standard term."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Which cloud applications allow a large number of users to connect using platforms like Facebook, Twitter, and LinkedIn?",
    options: ["Social Cloud Applications", "E-Commerce Applications", "Telehealth Applications", "Tele-Learning Applications"],
    correctIndex: 0,
    explanation: "Correct: Social cloud applications allow users to connect and communicate through social networking platforms. Why others are wrong: E-commerce is for online business, telehealth is for healthcare, and tele-learning is for education."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Self Assessment Based",
    question: "Which of the following is Amazon's cloud platform?",
    options: ["Azure", "AWS", "Cloudera", "All of the mentioned"],
    correctIndex: 1,
    explanation: "Correct: AWS stands for Amazon Web Services. Why others are wrong: Azure is Microsoft’s cloud platform, Cloudera is related to big data, and all of the mentioned is incorrect."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "In cloud computing, the word cloud mainly refers to:",
    options: ["Only hardware", "Only software", "Network or Internet", "Only a database"],
    correctIndex: 2,
    explanation: "Correct: Cloud refers to a network or the Internet through which services are accessed. Why others are wrong: Cloud computing includes hardware, software, databases, and services, but it is not limited to only one of them."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Which of the following can run in the cloud?",
    options: ["Email", "Web conferencing", "Customer relationship management", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Email, web conferencing, and CRM can all run in the cloud. Why others are wrong: Since all listed services can use cloud computing, choosing only one would be incomplete."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Cloud computing helps reduce cost mainly because:",
    options: [
      "Users must buy all servers first",
      "Users can use hosted services without maintaining all infrastructure themselves",
      "Users cannot use software updates",
      "Users must install everything manually"
    ],
    correctIndex: 1,
    explanation: "Correct: Cloud providers manage much of the infrastructure, reducing the need for users to buy and maintain everything themselves. Why others are wrong: Buying all servers, avoiding updates, and manual installation increase effort and cost."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Cloud collaboration is also known as:",
    options: ["Offline collaboration", "Internet-based group collaboration", "Single-computer collaboration", "Hardware-only collaboration"],
    correctIndex: 1,
    explanation: "Correct: Cloud collaboration means users work together through Internet-based services. Why others are wrong: It is not offline, not limited to one computer, and not hardware-only."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "According to Google's perspective, user-centric cloud computing means:",
    options: [
      "The user can access and share their cloud data from connected devices",
      "Only the cloud provider owns all data",
      "The user cannot access data remotely",
      "Only one device can use the cloud"
    ],
    correctIndex: 0,
    explanation: "Correct: User-centric cloud computing focuses on user access, ownership experience, and sharing of cloud-stored data. Why others are wrong: Cloud access is not limited to one device, and users can access data remotely."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Task-centric cloud computing focuses on:",
    options: ["The application only", "What the user needs to get done", "The physical server brand", "Only the operating system"],
    correctIndex: 1,
    explanation: "Correct: Task-centric means the focus is on the user's task rather than only the application. Why others are wrong: Application, server brand, and OS are not the main focus."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Cloud computing is considered powerful because:",
    options: [
      "It connects many computers together to provide large computing power",
      "It works only on one desktop PC",
      "It removes all storage",
      "It does not use networking"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud computing combines the power of many machines. Why others are wrong: It is not limited to one PC, does not remove storage, and depends heavily on networking."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Cloud computing is accessible because:",
    options: [
      "Data can be retrieved from the cloud using network access",
      "Data can only be used on one desktop",
      "It blocks all users",
      "It removes applications"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud services can be accessed through network-connected devices. Why others are wrong: Cloud does not restrict data to one desktop, block users by default, or remove applications."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Cloud computing is intelligent because:",
    options: [
      "It can use data mining and analysis to access information effectively",
      "It does not store any data",
      "It works without applications",
      "It avoids automation"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud systems can use data mining, search, and analysis to handle large amounts of data. Why others are wrong: Cloud stores data, runs applications, and often uses automation."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Cloud computing is programmable because:",
    options: [
      "Many cloud tasks can be automated",
      "It cannot replicate data",
      "It only supports manual work",
      "It works only without software"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud systems can automate tasks like replication, scaling, and recovery. Why others are wrong: Cloud can replicate data, reduce manual work, and depends on software."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Before cloud computing, client-server computing mainly used:",
    options: [
      "Centralized storage and control on the server side",
      "No servers at all",
      "Only mobile phones",
      "Only offline documents"
    ],
    correctIndex: 0,
    explanation: "Correct: Client-server computing stores applications, data, or control on a central server. Why others are wrong: It uses servers, is not phone-only, and is not only offline."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Distributed computing means:",
    options: [
      "All computers are disconnected",
      "Computers are networked together and share resources when needed",
      "Only one computer does all work",
      "No resources are shared"
    ],
    correctIndex: 1,
    explanation: "Correct: Distributed computing connects multiple computers to share resources. Why others are wrong: It does not mean disconnected systems, single-computer work, or zero sharing."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Who is commonly associated with the early idea of cloud computing through ARPANET-related work?",
    options: ["J.C.R. Licklider", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    correctIndex: 0,
    explanation: "Correct: J.C.R. Licklider is associated with early ideas of connected computing and ARPANET. Why others are wrong: The other names are important in technology history but not the key person for this early cloud concept."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Who suggested that computing could be sold like a utility such as electricity or water?",
    options: ["John McCarthy", "Larry Page", "Elon Musk", "Tim Cook"],
    correctIndex: 0,
    explanation: "Correct: John McCarthy suggested the idea of computing as a utility. Why others are wrong: The other people are not linked with this specific cloud computing idea."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Which company helped popularize delivering applications to users through a simple website in 1999?",
    options: ["Salesforce.com", "Instagram", "TikTok", "WhatsApp"],
    correctIndex: 0,
    explanation: "Correct: Salesforce.com was an early example of delivering applications over the Internet. Why others are wrong: The other platforms came later and are not the classic example for this point."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Which service was started by Amazon in 2002 to provide cloud-based services like storage and computation?",
    options: ["Amazon Web Services", "Microsoft Word", "Google Chrome", "Facebook Cloud"],
    correctIndex: 0,
    explanation: "Correct: Amazon Web Services provided cloud services such as storage and computation. Why others are wrong: Microsoft Word is software, Google Chrome is a browser, and Facebook Cloud is not the standard term."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Abstraction in cloud computing helps users by:",
    options: [
      "Hiding unnecessary technical details",
      "Showing every hardware detail",
      "Removing all services",
      "Blocking remote access"
    ],
    correctIndex: 0,
    explanation: "Correct: Abstraction hides complexity and presents resources in a simpler way. Why others are wrong: Cloud abstraction does not show every hardware detail, remove services, or block remote access."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Virtualization in cloud computing is mainly used to:",
    options: [
      "Create virtual versions of computing resources",
      "Remove networks",
      "Disable servers",
      "Stop resource sharing"
    ],
    correctIndex: 0,
    explanation: "Correct: Virtualization creates virtual machines, storage, or networks from physical resources. Why others are wrong: It does not remove networks, disable servers, or stop sharing."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Which client type usually has more local processing power?",
    options: ["Thin Client", "Thick Client", "Zero Client", "Cloud Storage"],
    correctIndex: 1,
    explanation: "Correct: A thick client has more local processing ability. Why others are wrong: Thin and zero clients depend more on servers, and cloud storage is not a client type."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Concept MCQ",
    question: "Resource pooling means:",
    options: [
      "Cloud provider resources are shared among multiple users",
      "Only one user can use the entire cloud",
      "Resources cannot be assigned dynamically",
      "Users must own all hardware"
    ],
    correctIndex: 0,
    explanation: "Correct: Resource pooling allows cloud resources to be shared and assigned based on need. Why others are wrong: Cloud is not limited to one user, resources can be assigned dynamically, and users do not need to own all hardware."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "A student says, 'I do not know where my data is physically stored, but I can still access it online.' Which cloud concept is this?",
    options: ["Abstraction", "Keyboard Input", "Local Installation", "Manual Backup"],
    correctIndex: 0,
    explanation: "Correct: Abstraction hides the physical location and technical details. Why others are wrong: Keyboard input, local installation, and manual backup do not describe hidden cloud infrastructure."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "A company wants to pay according to actual cloud resource usage. Which characteristic supports this?",
    options: ["Measured Service", "No Networking", "Manual Billing Only", "Single-Tenant Hardware Only"],
    correctIndex: 0,
    explanation: "Correct: Measured service tracks resource usage and supports pay-as-you-use billing. Why others are wrong: Cloud needs networking, billing can be automated, and single-tenant hardware is not required."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Which pair is correctly matched?",
    options: [
      "On-demand self-service – user can provision resources when needed",
      "Broad network access – no internet or network required",
      "Resource pooling – resources used by only one user",
      "Measured service – no usage tracking"
    ],
    correctIndex: 0,
    explanation: "Correct: On-demand self-service means users can provision resources when needed. Why others are wrong: Broad network access needs network connectivity, resource pooling involves multiple users, and measured service requires usage tracking."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Which situation best shows vendor lock-in?",
    options: [
      "A company finds it difficult and costly to move from one cloud provider to another",
      "A user logs in from a mobile phone",
      "A file is stored online",
      "A server is switched on"
    ],
    correctIndex: 0,
    explanation: "Correct: Vendor lock-in means difficulty moving to another provider. Why others are wrong: Login access, online storage, and server power are not vendor lock-in."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Which cloud challenge is most connected with protecting user data from unauthorized access?",
    options: ["Security and Privacy", "Color Scheme", "Keyboard Layout", "Screen Resolution"],
    correctIndex: 0,
    explanation: "Correct: Security and privacy deal with protecting data and user information. Why others are wrong: Color scheme, keyboard layout, and screen resolution are interface or device-related topics."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Which cloud challenge is related to following laws, regulations, and organizational rules?",
    options: ["Compliance", "Brightness", "Typing Speed", "Image Cropping"],
    correctIndex: 0,
    explanation: "Correct: Compliance means following legal, regulatory, and policy requirements. Why others are wrong: Brightness, typing speed, and image cropping are not cloud compliance issues."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Moving existing applications and data from local systems to cloud systems is mainly related to which challenge?",
    options: ["Migration", "Social Media Posting", "Keyboard Cleaning", "Monitor Size"],
    correctIndex: 0,
    explanation: "Correct: Migration means shifting applications, data, or workloads to the cloud. Why others are wrong: The other options are unrelated to cloud movement."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "A business uses cloud storage to store documents, images, audio, and video files. Which cloud application is this?",
    options: ["Online Data Storage", "Telehealth", "E-Commerce", "Art Application"],
    correctIndex: 0,
    explanation: "Correct: Online data storage allows users to store different types of files in the cloud. Why others are wrong: Telehealth is healthcare, e-commerce is online business, and art applications are for design or creative work."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Which statement best explains the difference between abstraction and virtualization?",
    options: [
      "Abstraction hides complexity, while virtualization creates virtual resources",
      "Abstraction means buying servers, while virtualization means deleting files",
      "Both mean exactly the same thing in every case",
      "Virtualization hides users, while abstraction creates keyboards"
    ],
    correctIndex: 0,
    explanation: "Correct: Abstraction hides details, while virtualization creates virtual versions of resources. Why others are wrong: Buying servers, deleting files, creating keyboards, or saying both are always identical is incorrect."
  },

  {
    unit: "Unit 1 – Cloud Computing Introduction",
    type: "Tricky Exam MCQ",
    question: "Which option best connects cloud computing with operational expense?",
    options: [
      "Cloud allows organizations to pay for usage instead of buying all infrastructure upfront",
      "Cloud always requires buying all hardware first",
      "Cloud removes the need for any payment",
      "Cloud only works without service providers"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud computing can reduce upfront capital expense and shift spending toward usage-based operational expense. Why others are wrong: Users do not always buy all hardware first, cloud is not free, and cloud usually involves service providers."
  }
];
