// units/unit12_mcq.js
// Unit 12 – Security and Standards in Cloud
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit12_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Availability in the CIA security triad includes:",
    options: [
      "Assures that system works promptly and service is not denied to authorized users",
      "Information should be accessible and usable upon appropriate demand by an authorized user",
      "Prevention of unauthorized withholding of information",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Availability means authorized users should be able to access information and services when needed. Why others are wrong: A, B, and C are all parts of availability, so the best answer is all of the above."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Which of the following property is not part of CIA security triad?",
    options: ["Locking", "Integrity", "Authentication", "Confidentiality"],
    correctIndex: 0,
    explanation: "Correct: Locking is not one of the CIA triad properties. Why others are wrong: Confidentiality and integrity are part of CIA. Authentication is related to security, but the unit answer key marks locking as the answer."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "___________ assures that confidential information is not disclosed to unauthorized individuals.",
    options: ["Authorizer", "Data confidentiality", "Integrity", "Authenticity"],
    correctIndex: 1,
    explanation: "Correct: Data confidentiality protects sensitive information from unauthorized access. Why others are wrong: Authorizer is not the property, integrity protects correctness of data, and authenticity verifies identity or genuineness."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "____________ assures that a system performs its operations in an unimpaired manner.",
    options: ["Data integrity", "Data confidentiality", "System integrity", "Availability"],
    correctIndex: 2,
    explanation: "Correct: System integrity means the system works correctly and is not improperly modified or damaged. Why others are wrong: Data integrity protects data correctness, confidentiality protects secrecy, and availability ensures access."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "The security concerns associated with cloud computing are typically categorized in certain ways that include:",
    options: [
      "Security issues faced by cloud providers",
      "Security issues faced by their customers",
      "Both cloud providers and customers",
      "None of the above"
    ],
    correctIndex: 2,
    explanation: "Correct: Cloud security concerns apply to both providers and customers. Why others are wrong: Only providers or only customers is incomplete, and none is incorrect."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Cloud security management involves certain security controls. Which of the following is a security control?",
    options: ["Deterrent controls", "Detective controls", "Creative control", "Collective controls"],
    correctIndex: 1,
    explanation: "Correct: Detective controls are used to identify and detect security incidents. Why others are wrong: Deterrent controls discourage attacks, but the unit answer key points to option B. Creative and collective controls are not standard answers here."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "_______________ controls in cloud security strengthen the system against incidents, generally by reducing or eliminating vulnerabilities.",
    options: ["Preventive", "Protective", "Trust", "Safety"],
    correctIndex: 0,
    explanation: "Correct: Preventive controls reduce vulnerabilities before incidents occur. Why others are wrong: Protective is general, trust is a security concept, and safety is not the specific control type here."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Which of the following is/are a cloud security challenge?",
    options: [
      "Managing complex environments",
      "Compliance with rules and regulations",
      "Data center or physical security issues",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Cloud security challenges include complex environments, compliance, and data center security. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Risk Management and Risk Assessment involve:",
    options: [
      "Formal risk assessment process",
      "Identification of technology assets",
      "Identification of data and its links to business processes, applications, and data stores",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Risk management includes formal assessment, identifying assets, and understanding data links to business processes. Why others are wrong: A, B, and C are all involved, so the best answer is all of the above."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "SecSDLC stands for:",
    options: [
      "Secure Software Development Life Cycle",
      "Secure Software Delivery Life Cycle",
      "Secure Service Delivery Life Cycle",
      "Secure Service Development Life Cycle"
    ],
    correctIndex: 0,
    explanation: "Correct: SecSDLC stands for Secure Software Development Life Cycle. Why others are wrong: Delivery and service-based expansions are not the correct term."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Working groups generally strive to create an informational document, a standard, or find some resolution for problems related to a system or network. Working groups are also called:",
    options: ["Tasklist groups", "Technical advisory groups", "Advising group", "Resolution group"],
    correctIndex: 1,
    explanation: "Correct: Working groups are also called technical advisory groups. Why others are wrong: Tasklist, advising group, and resolution group are not the standard term used here."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Open Cloud Consortium (OCC) offers open-source reference implementations that:",
    options: [
      "Manage a testing platform and a test-bed for cloud computing",
      "Sponsor workshops and other events related to cloud computing",
      "Develop benchmarks for cloud computing to support standards and cloud interoperability",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: OCC supports test-beds, workshops, benchmarks, standards, and interoperability. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "Which working group is tasked to study the applicability of variants of TCP and the use of other network protocols for clouds?",
    options: [
      "Working Group on Wide Area Clouds",
      "Open Cloud Test-bed Working Group",
      "Working Group on Standards and Interoperability",
      "None of the above"
    ],
    correctIndex: 0,
    explanation: "Correct: The Working Group on Wide Area Clouds studies TCP variants and other network protocols for clouds. Why others are wrong: The test-bed group focuses on cloud test platforms, standards group focuses on interoperability, and none is incorrect."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "DMTF stands for:",
    options: [
      "Datacentres Maintenance Task Force",
      "Datacentres Management Task Force",
      "Distributed Management Task Force",
      "Distributed Maintenance Task Force"
    ],
    correctIndex: 2,
    explanation: "Correct: DMTF stands for Distributed Management Task Force. Why others are wrong: The other options are incorrect expansions."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Self Assessment Based",
    question: "The interoperability committee of DMTF performs:",
    options: [
      "Communication with the industry, the public, and members about organization activities",
      "Supplementation of DMTF resources so multi-vendor implementations can be compatible",
      "Development of standards and initiatives for the DMTF",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: The DMTF interoperability committee supports communication, compatibility, and standards initiatives. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "The CIA triad in security stands for:",
    options: ["Confidentiality, Integrity, Availability", "Cloud, Internet, Application", "Control, Identity, Access", "Client, Interface, API"],
    correctIndex: 0,
    explanation: "Correct: CIA means Confidentiality, Integrity, and Availability. Why others are wrong: The other options are cloud or security-related words but not the CIA triad."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Confidentiality mainly protects:",
    options: ["Sensitive data from unauthorized disclosure", "Only system speed", "Only file size", "Only physical keyboard access"],
    correctIndex: 0,
    explanation: "Correct: Confidentiality prevents unauthorized users from viewing sensitive information. Why others are wrong: Speed, file size, and keyboard access do not define confidentiality."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Integrity mainly ensures that:",
    options: ["Data remains accurate and is not improperly modified", "Data is always public", "Every user gets admin access", "Files are always deleted"],
    correctIndex: 0,
    explanation: "Correct: Integrity protects data from unauthorized or incorrect modification. Why others are wrong: Public data, admin access, and file deletion do not describe integrity."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Availability mainly ensures that:",
    options: ["Authorized users can access services when needed", "Unauthorized users can access all data", "Data is hidden forever", "Security controls are removed"],
    correctIndex: 0,
    explanation: "Correct: Availability ensures that systems and data are accessible to authorized users when required. Why others are wrong: Unauthorized access, hiding data forever, and removing controls are not availability."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Authentication is used to:",
    options: ["Verify the identity of a user or system", "Delete cloud data", "Increase billing only", "Disable passwords"],
    correctIndex: 0,
    explanation: "Correct: Authentication verifies who the user or system is. Why others are wrong: It does not delete data, only increase billing, or disable passwords."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Authorization is used to:",
    options: ["Decide what an authenticated user is allowed to access", "Convert data into images", "Stop all users from logging in", "Remove encryption"],
    correctIndex: 0,
    explanation: "Correct: Authorization controls permissions after identity is verified. Why others are wrong: Image conversion, blocking all users, and removing encryption are unrelated."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Encryption protects cloud data by:",
    options: ["Converting readable data into unreadable form without the correct key", "Making all data public", "Deleting all backups", "Removing user accounts"],
    correctIndex: 0,
    explanation: "Correct: Encryption makes data unreadable to unauthorized users. Why others are wrong: It does not make data public, delete backups, or remove accounts."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "A major reason cloud security is challenging is:",
    options: ["Data and services may be hosted on provider-controlled infrastructure", "Cloud has no users", "Cloud never uses networks", "Cloud cannot store data"],
    correctIndex: 0,
    explanation: "Correct: In cloud computing, infrastructure may be managed by a third-party provider, so security responsibility must be carefully handled. Why others are wrong: Cloud has users, uses networks, and stores data."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "SaaS security is important because:",
    options: ["Users access provider-managed applications and data over the internet", "SaaS never stores data", "SaaS has no users", "SaaS is only hardware"],
    correctIndex: 0,
    explanation: "Correct: SaaS applications are accessed online and may store user data, so identity, access, privacy, and data protection matter. Why others are wrong: SaaS can store data, has users, and is software, not only hardware."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Security controls are used to:",
    options: ["Reduce, detect, prevent, or respond to security risks", "Increase attacks", "Remove all monitoring", "Disable all users permanently"],
    correctIndex: 0,
    explanation: "Correct: Security controls help manage risks through prevention, detection, correction, and deterrence. Why others are wrong: Increasing attacks, removing monitoring, and disabling all users are not security control goals."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Deterrent controls are mainly used to:",
    options: ["Discourage attackers from attempting an attack", "Repair damage after an attack only", "Remove all passwords", "Publish sensitive data"],
    correctIndex: 0,
    explanation: "Correct: Deterrent controls discourage malicious behavior. Why others are wrong: Repairing is corrective, removing passwords weakens security, and publishing sensitive data violates confidentiality."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Corrective controls are used to:",
    options: ["Restore systems after an incident", "Prevent every incident before it happens only", "Delete all records", "Allow anonymous access to everything"],
    correctIndex: 0,
    explanation: "Correct: Corrective controls reduce damage and restore normal operations after a security event. Why others are wrong: Prevention is preventive control, and deleting records or allowing anonymous access is unsafe."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Compliance in cloud security means:",
    options: ["Following laws, regulations, policies, and standards", "Ignoring all rules", "Allowing all users admin rights", "Disabling audit logs"],
    correctIndex: 0,
    explanation: "Correct: Compliance means meeting required legal, regulatory, organizational, and security standards. Why others are wrong: Ignoring rules, giving admin rights to everyone, and disabling logs reduce compliance."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Risk assessment helps an organization to:",
    options: ["Identify threats, vulnerabilities, assets, and possible impacts", "Avoid understanding threats", "Delete all security policies", "Stop backups"],
    correctIndex: 0,
    explanation: "Correct: Risk assessment identifies what needs protection and what could go wrong. Why others are wrong: Avoiding threats, deleting policies, and stopping backups increase risk."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "SecSDLC is important because it:",
    options: ["Builds security into the software development process", "Removes testing", "Allows insecure coding", "Stops software design"],
    correctIndex: 0,
    explanation: "Correct: Secure Software Development Life Cycle integrates security into each stage of development. Why others are wrong: Removing testing, insecure coding, and stopping design are not SecSDLC goals."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Cloud standards are useful because they help with:",
    options: ["Interoperability, portability, security, and common practices", "Vendor lock-in only", "Removing all documentation", "Stopping communication"],
    correctIndex: 0,
    explanation: "Correct: Standards help different systems work together and follow common security and design practices. Why others are wrong: Standards reduce vendor lock-in, require documentation, and improve communication."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Interoperability means:",
    options: ["Different systems or services can work together", "Only one vendor can be used forever", "Systems cannot communicate", "Users cannot move data"],
    correctIndex: 0,
    explanation: "Correct: Interoperability allows different cloud services, tools, and systems to communicate and work together. Why others are wrong: Single-vendor dependence, no communication, and no data movement are opposite ideas."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "Portability in cloud computing means:",
    options: ["Ability to move applications or data between environments", "Ability to permanently lock data", "Ability to remove standards", "Ability to block migration"],
    correctIndex: 0,
    explanation: "Correct: Portability helps move workloads or data between cloud providers or environments. Why others are wrong: Locking data, removing standards, and blocking migration reduce portability."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "OAuth is mainly used for:",
    options: ["Secure API authorization", "Physical server cooling", "Changing monitor brightness", "Deleting cloud accounts"],
    correctIndex: 0,
    explanation: "Correct: OAuth is used for secure authorization, especially for APIs and web applications. Why others are wrong: Cooling, brightness, and deleting accounts are unrelated."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Concept MCQ",
    question: "OpenID is mainly related to:",
    options: ["Authentication and single sign-on", "Hard disk formatting", "Network cable color", "Image compression"],
    correctIndex: 0,
    explanation: "Correct: OpenID is related to decentralized authentication and single sign-on. Why others are wrong: Formatting, cable color, and compression are unrelated."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A cloud service is working, but authorized users cannot access it during an outage. Which CIA property is affected?",
    options: ["Availability", "Confidentiality", "Formatting", "Compression"],
    correctIndex: 0,
    explanation: "Correct: Availability is affected because authorized users cannot access the service. Why others are wrong: Confidentiality protects secrecy, while formatting and compression are unrelated."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A hacker changes billing records stored in a cloud database. Which CIA property is violated?",
    options: ["Integrity", "Availability", "Aesthetics", "Portability"],
    correctIndex: 0,
    explanation: "Correct: Integrity is violated because the data was modified improperly. Why others are wrong: Availability is about access, aesthetics is appearance, and portability is movement between systems."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "An employee views confidential customer records without permission. Which security goal is mainly violated?",
    options: ["Confidentiality", "Availability", "Scalability", "Elasticity"],
    correctIndex: 0,
    explanation: "Correct: Confidentiality is violated because sensitive information was accessed by an unauthorized user. Why others are wrong: Availability is access when needed, scalability and elasticity are cloud resource concepts."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A company checks cloud risks, identifies important data, maps it to business processes, and reviews possible threats. What is this process?",
    options: ["Risk assessment", "Screen sharing", "File coloring", "Hardware painting"],
    correctIndex: 0,
    explanation: "Correct: This is risk assessment because the organization is identifying assets, threats, and business impact. Why others are wrong: Screen sharing, coloring, and painting are unrelated."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A cloud provider follows common security standards so its services can be trusted and integrated with other systems. Which concept is shown?",
    options: ["Cloud standards", "No security", "Manual-only access", "Random deployment"],
    correctIndex: 0,
    explanation: "Correct: Cloud standards define common practices for security, interoperability, and reliability. Why others are wrong: No security, manual-only access, and random deployment do not support trust."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A SaaS application allows users to log in, but each user should access only their own data. Which security concept is most important?",
    options: ["Authentication and authorization", "Only screen brightness", "Only file compression", "Only physical keyboard control"],
    correctIndex: 0,
    explanation: "Correct: Authentication verifies identity, and authorization controls what that user can access. Why others are wrong: Brightness, compression, and keyboard control do not protect SaaS data access."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "An organization adds security checks during requirement analysis, design, coding, testing, and deployment. Which approach is this?",
    options: ["SecSDLC", "No testing", "Unsecured release", "Random coding"],
    correctIndex: 0,
    explanation: "Correct: SecSDLC integrates security throughout the software development life cycle. Why others are wrong: No testing, unsecured release, and random coding increase risk."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A cloud group works on standards and interoperability so different cloud systems can work together. Which organization is related to this idea?",
    options: ["Open Cloud Consortium", "Music player group", "Printer-only group", "Screen design group"],
    correctIndex: 0,
    explanation: "Correct: Open Cloud Consortium supports standards, benchmarks, test-beds, and interoperability for cloud computing. Why others are wrong: The other options are unrelated."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "A cloud standard allows a company to move data and applications more easily from one provider to another. Which benefit is shown?",
    options: ["Portability", "Vendor lock-in", "Data loss", "No access control"],
    correctIndex: 0,
    explanation: "Correct: Portability means data or applications can move between environments. Why others are wrong: Vendor lock-in makes movement difficult, data loss is harmful, and no access control is insecure."
  },

  {
    unit: "Unit 12 – Security and Standards in Cloud",
    type: "Tricky Exam MCQ",
    question: "Which statement best explains Unit 12?",
    options: [
      "It focuses on cloud security, CIA triad, security challenges, SaaS security, risk management, standards, OCC, DMTF, OAuth, and OpenID",
      "It focuses only on image editing",
      "It removes all security from cloud computing",
      "It says standards are unnecessary in cloud computing"
    ],
    correctIndex: 0,
    explanation: "Correct: Unit 12 covers security and standards in cloud computing. Why others are wrong: Image editing is unrelated, security is not removed, and standards are important for cloud interoperability and security."
  }
];
