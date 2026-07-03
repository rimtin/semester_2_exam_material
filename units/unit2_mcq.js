// units/unit2_mcq.js
// Unit 2 – Cloud Computing Architecture and Models
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit2_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which deployment model allows cloud services to be used by the general public over the internet?",
    options: ["Private Cloud", "Community Cloud", "Public Cloud", "Hybrid Cloud"],
    correctIndex: 2,
    explanation: "Correct: Public cloud services are available to multiple users through the internet. Why others are wrong: Private cloud is for one organization, community cloud is for a group with common needs, and hybrid cloud combines two or more cloud models."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which deployment model combines two or more cloud models such as public and private cloud?",
    options: ["Private Cloud", "Community Cloud", "Public Cloud", "Hybrid Cloud"],
    correctIndex: 3,
    explanation: "Correct: Hybrid cloud combines public, private, or community clouds. Why others are wrong: Public, private, and community cloud are individual deployment models."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which deployment model is dedicated to a single organization?",
    options: ["Private Cloud", "Public Cloud", "Community Cloud", "Hybrid Cloud"],
    correctIndex: 0,
    explanation: "Correct: Private cloud is used by one organization. Why others are wrong: Public cloud is open to many users, community cloud is shared by similar organizations, and hybrid cloud is a combination model."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which cloud model is shared by several organizations with common security, policy, or compliance requirements?",
    options: ["Public Cloud", "Private Cloud", "Community Cloud", "Personal Cloud"],
    correctIndex: 2,
    explanation: "Correct: Community cloud is shared by organizations with common requirements. Why others are wrong: Public cloud is open to many users, private cloud is for one organization, and personal cloud is not the standard deployment model here."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which of the following is a benefit of cloud-based collaboration?",
    options: ["Only one user can work", "Users must be in the same room", "No document sharing is possible", "Users can share and edit documents from different locations"],
    correctIndex: 3,
    explanation: "Correct: Cloud collaboration allows users to work together from different locations. Why others are wrong: Cloud collaboration supports multiple users, remote work, and sharing."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which factor should be considered before moving into cloud computing?",
    options: ["Security", "Cost", "Availability", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Security, cost, and availability are all important before moving to the cloud. Why others are wrong: Each option alone is correct, but the best answer is all of the above."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which concept allows multiple operating systems or virtual machines to run on the same physical hardware?",
    options: ["Consolidation", "Anonymization", "Virtualization", "Pooling"],
    correctIndex: 2,
    explanation: "Correct: Virtualization allows physical resources to be divided into virtual resources. Why others are wrong: Consolidation means combining resources, anonymization hides identity, and pooling means shared resource grouping."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Virtualization shares physical resources by assigning a ________ name to a physical resource.",
    options: ["Physical", "Identification", "Portrayal", "Logical"],
    correctIndex: 3,
    explanation: "Correct: A logical name is used to refer to a physical resource virtually. Why others are wrong: Physical name exposes the real resource, while identification and portrayal are not the correct technical terms here."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which architecture provides virtual isolation among multiple tenants so each organization feels it has its own application instance?",
    options: ["Multitenant", "Multicore", "Dual Core", "Instant"],
    correctIndex: 0,
    explanation: "Correct: Multitenant architecture allows multiple customers to share the same application while keeping their data and configuration separate. Why others are wrong: Multicore and dual core are processor terms, and instant is not an architecture type."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Utility computing is mainly based on which model?",
    options: ["Pay per use", "Pay as you go", "Both A and B", "None of the above"],
    correctIndex: 2,
    explanation: "Correct: Utility computing is based on pay-per-use or pay-as-you-go pricing. Why others are wrong: A and B are both correct, so the best answer is both A and B."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which architecture allows applications to be used as services by other applications regardless of vendor or technology?",
    options: ["Application-Oriented Architecture", "Service-Oriented Architecture", "Product-Oriented Architecture", "Delivery-Oriented Architecture"],
    correctIndex: 1,
    explanation: "Correct: Service-Oriented Architecture allows services to communicate and be reused across different systems. Why others are wrong: The other options are not the standard architecture name for this concept."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which part of cloud architecture contains resources such as storage, virtual machines, security mechanisms, servers, and deployment models?",
    options: ["Front End", "Back End", "Middleware", "None of the above"],
    correctIndex: 1,
    explanation: "Correct: The back end contains the actual cloud infrastructure and resources. Why others are wrong: Front end is the user side, middleware connects components, and none is incorrect."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which client depends completely on another system for full functionality?",
    options: ["Thick Client", "Fat Client", "Hypervisor", "Thin Client"],
    correctIndex: 3,
    explanation: "Correct: A thin client depends on server-side resources for most processing and storage. Why others are wrong: Thick and fat clients have more local capability, and a hypervisor manages virtualization."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "SLA stands for:",
    options: ["Service Lowering Associations", "Software Level Agents", "Service Level Agreements", "Software Level Associations"],
    correctIndex: 2,
    explanation: "Correct: SLA means Service Level Agreement. Why others are wrong: The other options are incorrect expansions."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Self Assessment Based",
    question: "Which of the following is an example of online collaboration service based on cloud computing?",
    options: ["OneDrive", "Google Drive", "Zoho Tools", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: OneDrive, Google Drive, and Zoho Tools all support online collaboration. Why others are wrong: Each individual option is correct, so the best answer is all of the above."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Why does cloud computing matter for businesses?",
    options: ["It increases hardware ownership burden", "It allows flexible access to computing resources", "It stops online collaboration", "It removes scalability"],
    correctIndex: 1,
    explanation: "Correct: Cloud computing matters because it provides flexible, scalable, and accessible resources. Why others are wrong: Cloud reduces hardware burden, supports collaboration, and improves scalability."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which group benefits most from cloud collaboration tools?",
    options: ["Users working together from different locations", "Users who never share files", "Users with no internet access", "Users who only use paper documents"],
    correctIndex: 0,
    explanation: "Correct: Cloud collaboration is useful when users need to work together from different places. Why others are wrong: Cloud collaboration depends on sharing and internet-based access."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which is a common issue in cloud computing?",
    options: ["Security and privacy", "Keyboard color", "Screen size", "Mouse speed"],
    correctIndex: 0,
    explanation: "Correct: Security and privacy are major cloud issues. Why others are wrong: Keyboard color, screen size, and mouse speed are not cloud computing issues."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "What does cloud migration mean?",
    options: ["Moving data and applications to the cloud", "Deleting all applications", "Buying only printers", "Using only offline storage"],
    correctIndex: 0,
    explanation: "Correct: Cloud migration means transferring data, applications, or services from local systems to cloud environments. Why others are wrong: It does not mean deleting applications, buying printers, or using offline storage only."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which part of cloud architecture is used by the end user to access cloud services?",
    options: ["Front End", "Back End", "Data Center Cooling", "Server Rack Only"],
    correctIndex: 0,
    explanation: "Correct: The front end includes user devices, browsers, and interfaces used to access cloud services. Why others are wrong: Back end contains cloud resources, while cooling and racks are infrastructure details."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which part of cloud architecture stores and processes the actual cloud resources?",
    options: ["Front End", "Back End", "User Keyboard", "Monitor"],
    correctIndex: 1,
    explanation: "Correct: The back end includes servers, storage, databases, virtual machines, and security systems. Why others are wrong: Front end is user-facing, while keyboard and monitor are user devices."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Middleware in cloud architecture is mainly used to:",
    options: ["Connect and manage communication between components", "Replace the user", "Remove servers", "Disable storage"],
    correctIndex: 0,
    explanation: "Correct: Middleware helps different cloud components communicate and work together. Why others are wrong: It does not replace users, remove servers, or disable storage."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Cloud storage is different from traditional storage because:",
    options: ["It can be accessed over a network", "It must always be stored only on one local hard disk", "It cannot scale", "It cannot be shared"],
    correctIndex: 0,
    explanation: "Correct: Cloud storage can be accessed over the internet or network. Why others are wrong: Traditional local disks are limited, while cloud storage supports scalability and sharing."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which of the following is an example of cloud storage?",
    options: ["Google Drive", "Local keyboard", "Monitor screen", "CPU fan"],
    correctIndex: 0,
    explanation: "Correct: Google Drive is a cloud storage service. Why others are wrong: Keyboard, monitor, and CPU fan are hardware components, not cloud storage."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Cloud storage works by:",
    options: ["Storing user data on remote servers managed by a provider", "Keeping everything only on paper", "Using no network", "Removing backup options"],
    correctIndex: 0,
    explanation: "Correct: Cloud storage keeps data on remote servers and allows access through the internet. Why others are wrong: Cloud storage is digital, network-based, and often supports backup."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which model is useful when a company wants full control over infrastructure and security?",
    options: ["Private Cloud", "Public Cloud", "Community Cloud", "Social Cloud"],
    correctIndex: 0,
    explanation: "Correct: Private cloud gives one organization more control over resources and security. Why others are wrong: Public cloud is shared, community cloud is shared by similar organizations, and social cloud is not the standard deployment model."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which model is usually more cost-effective for general users because infrastructure is shared?",
    options: ["Public Cloud", "Private Cloud", "On-Premise Only", "Manual Cloud"],
    correctIndex: 0,
    explanation: "Correct: Public cloud shares infrastructure among many users, which can reduce cost. Why others are wrong: Private cloud can be more expensive, on-premise requires local infrastructure, and manual cloud is not a standard model."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which model is helpful when an organization wants to keep sensitive data private but use public cloud for less sensitive workloads?",
    options: ["Hybrid Cloud", "Only Public Cloud", "Only Local PC", "No Cloud"],
    correctIndex: 0,
    explanation: "Correct: Hybrid cloud allows private cloud for sensitive workloads and public cloud for flexible resources. Why others are wrong: Only public cloud may not suit sensitive data, local PC is limited, and no cloud removes cloud benefits."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Cloud business models are mainly concerned with:",
    options: ["How cloud services create value and generate revenue", "How to paint server rooms", "How to type faster", "How to replace keyboards"],
    correctIndex: 0,
    explanation: "Correct: Cloud business models explain how providers offer services and earn revenue. Why others are wrong: Painting, typing, and keyboards are unrelated."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Subscription-based cloud pricing means:",
    options: ["The customer pays a regular fixed amount for service access", "The customer never pays", "The provider gives hardware ownership to every user", "The service works only once"],
    correctIndex: 0,
    explanation: "Correct: Subscription pricing charges users regularly, such as monthly or yearly. Why others are wrong: It is not free, does not transfer hardware ownership, and is not one-time-only."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Pay-as-you-go pricing means:",
    options: ["Users pay according to actual usage", "Users pay only before installation", "Users buy every server", "Users cannot track usage"],
    correctIndex: 0,
    explanation: "Correct: Pay-as-you-go means users pay based on consumed resources. Why others are wrong: It avoids heavy upfront server purchase and usually includes usage tracking."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "The NIST cloud computing reference model mainly helps to:",
    options: ["Understand cloud roles, components, and architecture", "Design keyboard buttons", "Replace all databases", "Remove cloud services"],
    correctIndex: 0,
    explanation: "Correct: The NIST model helps explain cloud architecture, actors, and functions. Why others are wrong: It is not about keyboards, database removal, or removing services."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "The cloud cube model is used to:",
    options: ["Classify cloud formations and deployment choices", "Calculate screen brightness", "Format a Word document", "Create only local folders"],
    correctIndex: 0,
    explanation: "Correct: The cloud cube model helps classify cloud types and dimensions. Why others are wrong: It is not used for brightness, document formatting, or local folders."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which is a major reason companies consider cloud computing?",
    options: ["Scalability and flexibility", "No access from internet", "No resource sharing", "Only manual backup"],
    correctIndex: 0,
    explanation: "Correct: Scalability and flexibility are major reasons for cloud adoption. Why others are wrong: Cloud supports network access, resource sharing, and automated backup options."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Concept MCQ",
    question: "Which of the following is a cloud architecture component?",
    options: ["Client infrastructure", "Application", "Storage", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Client infrastructure, applications, and storage can all be parts of cloud architecture. Why others are wrong: Since all are correct, choosing only one is incomplete."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A hospital group wants to share a cloud system because all members have similar privacy and compliance requirements. Which model is best?",
    options: ["Community Cloud", "Public Cloud", "Personal Computer", "Offline Storage"],
    correctIndex: 0,
    explanation: "Correct: Community cloud is suitable for organizations with common requirements. Why others are wrong: Public cloud is open to many users, personal computers are not shared cloud infrastructure, and offline storage is not cloud."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A company wants to use public cloud during high traffic but keep confidential data in its own private cloud. Which model is this?",
    options: ["Hybrid Cloud", "Community Cloud", "Only Public Cloud", "Only Traditional Storage"],
    correctIndex: 0,
    explanation: "Correct: Hybrid cloud combines private and public cloud usage. Why others are wrong: Community cloud is shared by similar organizations, public cloud alone does not keep private control, and traditional storage is not this cloud model."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A user opens a cloud app through a browser. The browser belongs to which side of cloud architecture?",
    options: ["Front End", "Back End", "Data Center", "Storage Layer Only"],
    correctIndex: 0,
    explanation: "Correct: The browser is part of the front end because the user uses it to access cloud services. Why others are wrong: Back end, data center, and storage layer are provider-side components."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A provider hosts servers, databases, virtual machines, and security systems. This belongs mainly to:",
    options: ["Back End", "Front End", "Client Browser", "User Keyboard"],
    correctIndex: 0,
    explanation: "Correct: These resources are part of the back end cloud infrastructure. Why others are wrong: Front end is user-facing, while browser and keyboard are client-side tools."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A company uses one application platform, but many customers use it separately with isolated data. Which architecture is shown?",
    options: ["Multitenant Architecture", "Single Keyboard Architecture", "Offline Architecture", "Desktop-Only Architecture"],
    correctIndex: 0,
    explanation: "Correct: Multitenant architecture supports multiple customers on shared application infrastructure with separation. Why others are wrong: The other options are not standard cloud architecture types."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A customer pays only for the storage and compute hours used in a month. Which model is this?",
    options: ["Utility Computing", "Manual Computing", "Paper Billing Only", "Static Hardware Ownership"],
    correctIndex: 0,
    explanation: "Correct: Utility computing uses pay-per-use or pay-as-you-go billing. Why others are wrong: Manual computing and paper billing are not cloud models, and static hardware ownership is different from utility usage."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "Which is the best example of cloud storage replacing traditional storage?",
    options: ["Saving files in Google Drive instead of only on a local hard disk", "Typing on a keyboard", "Changing monitor brightness", "Cleaning CPU fan"],
    correctIndex: 0,
    explanation: "Correct: Google Drive stores files remotely and can be accessed online. Why others are wrong: Typing, brightness, and cleaning hardware are not cloud storage examples."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "A business checks security, cost, service availability, and provider reliability before adopting cloud. This is part of:",
    options: ["Cloud adoption considerations", "Keyboard configuration", "Screen calibration", "Document font selection"],
    correctIndex: 0,
    explanation: "Correct: These are important considerations before getting into the cloud. Why others are wrong: Keyboard, screen, and font settings are unrelated."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "Which statement is most accurate?",
    options: [
      "Cloud storage can support remote access and scalability",
      "Cloud storage is always only a pen drive",
      "Cloud architecture has no back end",
      "Public cloud is always used by only one organization"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud storage supports remote access and scalability. Why others are wrong: Cloud storage is not just a pen drive, cloud architecture has a back end, and public cloud is shared by many users."
  },

  {
    unit: "Unit 2 – Cloud Computing Architecture and Models",
    type: "Tricky Exam MCQ",
    question: "Which option correctly matches the concept?",
    options: [
      "SOA – applications/services can interact across different technologies",
      "Thin client – complete independent local processing only",
      "Public cloud – used by only one organization",
      "Hybrid cloud – no combination of clouds"
    ],
    correctIndex: 0,
    explanation: "Correct: SOA allows services to work across different systems and technologies. Why others are wrong: Thin clients depend on servers, public cloud is shared, and hybrid cloud combines cloud models."
  }
];
