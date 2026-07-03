// units/unit3_mcq.js
// Unit 3 – Cloud Services
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit3_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "As per a survey, IP traffic in cloud services is expected to grow up to _________ in 2021.",
    options: ["19.5 zettabytes", "20.5 zettabytes", "1000 Exabytes", "20.5 Exabytes"],
    correctIndex: 0,
    explanation: "Correct: 19.5 zettabytes is the answer given in the unit's self-assessment. Why others are wrong: The other values do not match the survey figure mentioned in the unit."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "STaaS stands for:",
    options: ["Software Technology as a Service", "Storage-as-a-Service", "Software Team as a Service", "Structure as a Service"],
    correctIndex: 1,
    explanation: "Correct: STaaS stands for Storage-as-a-Service. Why others are wrong: The other options are incorrect expansions and are not standard cloud service terms."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Which of the following comes under monitoring components under Monitoring as a Service?",
    options: ["Virtual Infrastructure Monitoring", "Storage Monitoring", "Applications Monitoring", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: MaaS can include virtual infrastructure, storage, and application monitoring. Why others are wrong: Each individual option is correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Which concept of serverless computing allows developers to deploy an individual function, action, or piece of business logic?",
    options: ["Serverless as a Service", "Business as a Service", "Function as a Service", "None of the above"],
    correctIndex: 2,
    explanation: "Correct: Function as a Service allows developers to deploy small independent functions without managing servers. Why others are wrong: The other terms do not correctly describe this serverless function model."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "___________ provides IT solutions and/or services to end users and organizations in a cloud environment.",
    options: ["Service vendor", "Service organizer", "Service broker", "Service auditor"],
    correctIndex: 0,
    explanation: "Correct: A service vendor provides IT solutions or services to cloud users. Why others are wrong: Organizer, broker, and auditor have different meanings and do not directly match this definition."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "A service provider that provides computer storage space and related management services is called:",
    options: ["Storage hosting service provider", "SaaS provider", "PaaS provider", "Storage service provider"],
    correctIndex: 3,
    explanation: "Correct: A storage service provider offers storage space and related management services. Why others are wrong: SaaS and PaaS refer to broader cloud models, while storage hosting service provider is less precise here."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Google App Engine is a cloud-based ________ for developing and hosting web applications in Google-managed data centers.",
    options: ["SaaS", "PaaS", "FaaS", "MaaS"],
    correctIndex: 1,
    explanation: "Correct: Google App Engine is a PaaS because it provides a platform for developing and hosting applications. Why others are wrong: SaaS is ready-made software, FaaS is function-based serverless computing, and MaaS is monitoring."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Which of the following is not a cloud service offered by Amazon Web Services?",
    options: ["Elastic Compute Cloud", "App Engine", "SimpleDB", "CloudFront"],
    correctIndex: 1,
    explanation: "Correct: App Engine belongs to Google, not AWS. Why others are wrong: Elastic Compute Cloud, SimpleDB, and CloudFront are associated with AWS services."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "_______________ is a construct that allows access to an application that actually resides at a remote location, usually a distant data center.",
    options: ["Cloud computing", "Batch computing", "Data computing", "Construction computing"],
    correctIndex: 0,
    explanation: "Correct: Cloud computing allows access to applications and services located remotely. Why others are wrong: Batch computing is a processing method, and the remaining options do not describe this cloud concept."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "IaaS is also known as ______________.",
    options: ["Hoard as a Service", "Hardware as a Service", "Infra as a Service", "Physical as a Service"],
    correctIndex: 1,
    explanation: "Correct: IaaS is also known as Hardware as a Service because it provides infrastructure resources like virtual machines, storage, and networking. Why others are wrong: The other options are not standard names."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "_____________ model consists of the particular types of services that you can access on a cloud computing platform.",
    options: ["Application", "Service", "Virtualization", "Deployment"],
    correctIndex: 1,
    explanation: "Correct: A service model defines the types of services available on a cloud platform. Why others are wrong: Application, virtualization, and deployment are related terms but do not define this model."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Cloud providers provide cloud services to cloud users.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Correct: True. Cloud providers offer services such as infrastructure, platforms, software, storage, and databases to users. Why false is wrong: It contradicts the basic role of cloud providers."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Which cloud service model provides virtual platforms and tools to create, test, and deploy applications?",
    options: ["IaaS", "SaaS", "PaaS", "MaaS"],
    correctIndex: 2,
    explanation: "Correct: PaaS provides platforms and development tools for building, testing, and deploying applications. Why others are wrong: IaaS provides infrastructure, SaaS provides ready-to-use software, and MaaS provides monitoring."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "SaaS supports multiple users and provides a shared data model through _________ model.",
    options: ["single-tenancy", "multiple-instance", "multi-tenancy", "all of the mentioned"],
    correctIndex: 2,
    explanation: "Correct: SaaS commonly uses a multi-tenancy model to serve many users while keeping their data logically separate. Why others are wrong: Single-tenancy serves one tenant, multiple-instance is different, and all of the mentioned is not correct."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Self Assessment Based",
    question: "Which of the following are offerings from Infrastructure as a Service?",
    options: ["Virtual Server Space", "Network Connections", "Load Balancers", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: IaaS can offer virtual servers, networking, storage, and load balancing. Why others are wrong: A, B, and C are all IaaS offerings, so the best answer is all of the above."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Cloud services are generally delivered through:",
    options: ["Internet", "Only pen drives", "Only printed documents", "Only local calculators"],
    correctIndex: 0,
    explanation: "Correct: Cloud services are delivered over the internet or network. Why others are wrong: Pen drives, printed documents, and calculators do not provide cloud service delivery."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "The three classic cloud service models are:",
    options: ["SaaS, PaaS, IaaS", "LAN, WAN, MAN", "CPU, RAM, ROM", "HTML, CSS, JS"],
    correctIndex: 0,
    explanation: "Correct: SaaS, PaaS, and IaaS are the classic cloud service models. Why others are wrong: The other groups are networking, hardware, or web development terms."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which cloud model provides ready-to-use software applications over the internet?",
    options: ["SaaS", "PaaS", "IaaS", "NaaS"],
    correctIndex: 0,
    explanation: "Correct: SaaS provides ready-to-use software to end users. Why others are wrong: PaaS is for application development, IaaS is infrastructure, and NaaS is network service."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which cloud model is most suitable for developers who need tools to build and deploy applications?",
    options: ["SaaS", "PaaS", "IaaS", "STaaS"],
    correctIndex: 1,
    explanation: "Correct: PaaS provides development tools, runtime environments, and deployment platforms. Why others are wrong: SaaS is for users, IaaS is lower-level infrastructure, and STaaS is storage."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which cloud model provides virtual machines, storage, networking, and other hardware-like resources?",
    options: ["SaaS", "PaaS", "IaaS", "CaaS"],
    correctIndex: 2,
    explanation: "Correct: IaaS provides virtualized infrastructure resources. Why others are wrong: SaaS is software, PaaS is platform, and CaaS is communication service."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "In SaaS, the user mainly manages:",
    options: ["Using the application", "Physical servers", "Network switches", "Data center cooling"],
    correctIndex: 0,
    explanation: "Correct: SaaS users mainly use the application; the provider manages most technical parts. Why others are wrong: Servers, switches, and data center cooling are provider-side responsibilities."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "In PaaS, the cloud provider mainly manages:",
    options: ["Infrastructure and platform environment", "Only the user's keyboard", "Only printed reports", "Only offline files"],
    correctIndex: 0,
    explanation: "Correct: In PaaS, the provider manages infrastructure, operating systems, runtime, and platform tools. Why others are wrong: The other options are unrelated to PaaS."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "In IaaS, the customer is usually responsible for:",
    options: ["Managing applications and operating system configuration", "Managing the physical data center building", "Manufacturing servers", "Running the cloud provider company"],
    correctIndex: 0,
    explanation: "Correct: IaaS customers usually manage operating systems, applications, and configurations. Why others are wrong: The provider manages the physical data center and hardware."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which of the following is an example of SaaS?",
    options: ["Gmail", "Virtual Machine", "Raw Storage Disk", "Load Balancer"],
    correctIndex: 0,
    explanation: "Correct: Gmail is a ready-to-use software service. Why others are wrong: Virtual machines, storage disks, and load balancers are infrastructure-level resources."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which of the following is an example of PaaS?",
    options: ["Google App Engine", "A local keyboard", "A physical monitor", "A paper file"],
    correctIndex: 0,
    explanation: "Correct: Google App Engine provides a platform for building and hosting web applications. Why others are wrong: Keyboard, monitor, and paper file are not cloud platforms."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which of the following is an example of IaaS?",
    options: ["Amazon EC2", "Google Docs", "Gmail", "Facebook profile page"],
    correctIndex: 0,
    explanation: "Correct: Amazon EC2 provides virtual computing infrastructure. Why others are wrong: Google Docs, Gmail, and Facebook are application-level services."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "A Cloud Service Provider is responsible for:",
    options: ["Providing and managing cloud services", "Only making keyboards", "Only printing documents", "Only installing fans"],
    correctIndex: 0,
    explanation: "Correct: A CSP provides cloud services like storage, compute, networking, software, or platforms. Why others are wrong: The remaining options are not cloud provider responsibilities."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Which factor is important while choosing the best cloud service provider?",
    options: ["Security", "Reliability", "Cost", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Security, reliability, cost, performance, and support are all important when choosing a CSP. Why others are wrong: Each individual option is important, so the best answer is all of the above."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Database-as-a-Service means:",
    options: ["Using a cloud-managed database service", "Deleting all databases", "Using only paper records", "Using a database without any data"],
    correctIndex: 0,
    explanation: "Correct: DBaaS provides managed database services through the cloud. Why others are wrong: It does not mean deleting databases, using paper, or using empty databases."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Communication-as-a-Service mainly provides:",
    options: ["Cloud-based communication services", "Only physical chairs", "Only local storage", "Only keyboard shortcuts"],
    correctIndex: 0,
    explanation: "Correct: CaaS provides outsourced communication services such as voice, messaging, and collaboration tools. Why others are wrong: The other options are unrelated."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Monitoring-as-a-Service is mainly used to:",
    options: ["Monitor systems, applications, storage, and infrastructure", "Write essays only", "Draw pictures only", "Replace electricity"],
    correctIndex: 0,
    explanation: "Correct: MaaS helps monitor cloud resources and applications. Why others are wrong: Writing essays, drawing, and replacing electricity are not MaaS functions."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Network-as-a-Service provides:",
    options: ["Network services through the cloud", "Only word processing", "Only image editing", "Only spreadsheet formulas"],
    correctIndex: 0,
    explanation: "Correct: NaaS provides networking services such as connectivity, bandwidth, and network management. Why others are wrong: The other options are application tasks, not networking."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Virtual Data Center means:",
    options: ["A virtualized group of interconnected servers and resources", "A physical classroom only", "A paper register", "A desktop wallpaper"],
    correctIndex: 0,
    explanation: "Correct: A virtual data center uses virtualized servers, storage, and networks to provide data center-like capabilities. Why others are wrong: The remaining options are unrelated."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Healthcare-as-a-Service is related to:",
    options: ["Cloud-based healthcare services", "Online shopping only", "Gaming only", "CPU cooling only"],
    correctIndex: 0,
    explanation: "Correct: Healthcare-as-a-Service uses cloud services to support healthcare delivery, records, or applications. Why others are wrong: Shopping, gaming, and cooling are unrelated."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Concept MCQ",
    question: "Education-as-a-Service is useful because it can provide:",
    options: ["Cloud-based learning platforms and educational resources", "Only physical chalk", "Only printed tickets", "Only offline calculators"],
    correctIndex: 0,
    explanation: "Correct: Education-as-a-Service supports learning platforms, online classes, and educational content through cloud systems. Why others are wrong: The other options do not describe cloud education services."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A student uses Google Docs directly in a browser without installing office software. Which cloud model is this?",
    options: ["SaaS", "PaaS", "IaaS", "NaaS"],
    correctIndex: 0,
    explanation: "Correct: This is SaaS because the user is directly using ready-made software online. Why others are wrong: PaaS is for developers, IaaS is infrastructure, and NaaS is networking."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A developer wants a ready platform with runtime, tools, testing, and deployment support. Which model should be selected?",
    options: ["SaaS", "PaaS", "IaaS", "STaaS"],
    correctIndex: 1,
    explanation: "Correct: PaaS gives developers a platform to build, test, and deploy applications. Why others are wrong: SaaS is finished software, IaaS gives raw infrastructure, and STaaS gives storage."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A startup needs virtual servers and storage but does not want to buy physical hardware. Which model is best?",
    options: ["IaaS", "SaaS", "CaaS", "MaaS"],
    correctIndex: 0,
    explanation: "Correct: IaaS provides virtual servers, storage, and networking without buying physical hardware. Why others are wrong: SaaS is software, CaaS is communication, and MaaS is monitoring."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A company uses serverless functions that run only when an event happens. Which service is this?",
    options: ["FaaS", "STaaS", "DBaaS", "NaaS"],
    correctIndex: 0,
    explanation: "Correct: FaaS runs individual functions or pieces of logic in a serverless model. Why others are wrong: STaaS is storage, DBaaS is database, and NaaS is networking."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A company wants cloud storage space with backup and management support. Which service should it use?",
    options: ["STaaS", "FaaS", "PaaS", "MaaS"],
    correctIndex: 0,
    explanation: "Correct: STaaS provides cloud-based storage and related management. Why others are wrong: FaaS is functions, PaaS is development platform, and MaaS is monitoring."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A company uses cloud tools to check server health, storage usage, and application performance. Which service is shown?",
    options: ["MaaS", "SaaS", "FaaS", "CaaS"],
    correctIndex: 0,
    explanation: "Correct: MaaS is Monitoring-as-a-Service and monitors infrastructure, storage, and applications. Why others are wrong: SaaS is software, FaaS is functions, and CaaS is communication."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A business wants outsourced voice, messaging, and enterprise communication with quality support. Which service fits best?",
    options: ["CaaS", "DBaaS", "STaaS", "IaaS"],
    correctIndex: 0,
    explanation: "Correct: CaaS provides cloud-based communication services. Why others are wrong: DBaaS is database, STaaS is storage, and IaaS is infrastructure."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "Which pair is correctly matched?",
    options: [
      "SaaS – ready-to-use software",
      "PaaS – only physical hardware selling",
      "IaaS – only email inbox service",
      "STaaS – voice communication service"
    ],
    correctIndex: 0,
    explanation: "Correct: SaaS provides ready-to-use software. Why others are wrong: PaaS is a development platform, IaaS is infrastructure, and STaaS is storage."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "A business expects heavy traffic during festival sales and needs infrastructure that can scale quickly. Which cloud model is most suitable?",
    options: ["IaaS", "Only local desktop", "Manual paper system", "Offline spreadsheet only"],
    correctIndex: 0,
    explanation: "Correct: IaaS is useful when demand is volatile because infrastructure can scale according to need. Why others are wrong: Local desktops, paper systems, and offline spreadsheets do not provide flexible cloud scaling."
  },

  {
    unit: "Unit 3 – Cloud Services",
    type: "Tricky Exam MCQ",
    question: "Which statement is most accurate?",
    options: [
      "Cloud services can include SaaS, PaaS, IaaS, storage, database, monitoring, and communication services",
      "Cloud services only mean keyboards",
      "Cloud services cannot be accessed through the internet",
      "Cloud services never involve providers"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud services include many service types such as SaaS, PaaS, IaaS, STaaS, DBaaS, MaaS, and CaaS. Why others are wrong: Cloud services are not keyboards, are usually accessed online, and are commonly provided by cloud providers."
  }
];
