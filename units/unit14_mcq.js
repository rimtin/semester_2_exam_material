// units/unit14_mcq.js
// Unit 14 – Additional Cloud Concepts
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit14_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which of the following is a key feature of a cloud server?",
    options: [
      "It can be physical, virtual, or a mix of both depending on use case",
      "It cannot process workloads",
      "It cannot store information",
      "It works only without networking"
    ],
    correctIndex: 0,
    explanation: "Correct: A cloud server can be physical, virtual, or a combination depending on the requirement. Why others are wrong: Cloud servers process workloads, store information, and use network access."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which of the following is a disadvantage of the traditional server concept?",
    options: [
      "Easy to conceptualize",
      "Easy to deploy",
      "Expensive to acquire and maintain hardware",
      "Easy to backup"
    ],
    correctIndex: 2,
    explanation: "Correct: Traditional servers can be expensive because organizations must buy and maintain hardware. Why others are wrong: Easy conceptualization, deployment, and backup are advantages, not disadvantages."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "The virtual server concept mainly separates server software from:",
    options: [
      "Application name",
      "User password",
      "Physical hardware",
      "Internet browser"
    ],
    correctIndex: 2,
    explanation: "Correct: Virtual servers encapsulate the operating system, applications, and storage away from physical hardware. Why others are wrong: Application name, password, and browser are not the main separation point."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which of the following can be included inside a virtual server?",
    options: [
      "Operating system",
      "Applications",
      "Storage",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: A virtual server can include an operating system, applications, and storage. Why others are wrong: A, B, and C are all correct individually, so the best answer is all of the above."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Cloud storage mainly allows users to store data:",
    options: [
      "Only on a local hard disk",
      "On remote cloud servers accessed through a network",
      "Only on paper",
      "Only inside a keyboard"
    ],
    correctIndex: 1,
    explanation: "Correct: Cloud storage stores data on remote cloud infrastructure and allows access through the internet or network. Why others are wrong: Local hard disks, paper, and keyboards do not describe cloud storage."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which of the following is a benefit of cloud storage?",
    options: [
      "No scalability",
      "No backup support",
      "Data access from different locations",
      "Only local access"
    ],
    correctIndex: 2,
    explanation: "Correct: Cloud storage allows users to access data from different locations using internet connectivity. Why others are wrong: Cloud storage supports scalability and backup options, and it is not limited to local access."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Before storing data in the cloud, which factor should be considered?",
    options: [
      "Only font style",
      "Security and privacy",
      "Only wallpaper",
      "Only screen brightness"
    ],
    correctIndex: 1,
    explanation: "Correct: Security and privacy are important before storing data in the cloud. Why others are wrong: Font, wallpaper, and brightness are not cloud data-storage considerations."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which of the following is/are benefits of using a cloud database?",
    options: [
      "Scalability",
      "Remote access",
      "Reduced infrastructure management",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Cloud databases provide scalability, remote access, and reduced infrastructure management. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Resource abstraction in cloud computing means:",
    options: [
      "Showing all hardware details to the user",
      "Removing all resources",
      "Hiding physical resource details and presenting logical resources",
      "Using only paper files"
    ],
    correctIndex: 2,
    explanation: "Correct: Resource abstraction hides physical details and presents resources in a simplified logical form. Why others are wrong: It does not expose all hardware details, remove resources, or use paper files."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which statement best defines an SLA?",
    options: [
      "SLA is only a password policy",
      "SLA is a contract between a service provider and the end user",
      "SLA is only a storage folder",
      "SLA is only a software update"
    ],
    correctIndex: 1,
    explanation: "Correct: SLA stands for Service Level Agreement and defines expected service commitments between provider and user. Why others are wrong: Password policy, storage folder, and software update do not define SLA."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "In SLA, the customer may terminate the contract when performance standards are consistently ______ an acceptable level.",
    options: ["below", "above", "close", "none of the above"],
    correctIndex: 0,
    explanation: "Correct: If performance stays below the agreed acceptable level, the customer may have the right to terminate the agreement. Why others are wrong: Above or close to acceptable level usually does not violate SLA terms."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "EC2 stands for:",
    options: [
      "Elastic Compute Cloud",
      "Elastic Configuration Cloud",
      "Elastic Cloud Configuration",
      "Elastic Cloud Compute"
    ],
    correctIndex: 0,
    explanation: "Correct: EC2 stands for Elastic Compute Cloud. Why others are wrong: The other options are incorrect expansions."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "Which term means distributing hardware or software load over web servers to improve server and application efficiency?",
    options: [
      "Amazon CloudFront",
      "Elastic Load Balancer",
      "Load Balancing",
      "Security Management"
    ],
    correctIndex: 2,
    explanation: "Correct: Load balancing distributes traffic or workload across servers to improve efficiency and availability. Why others are wrong: CloudFront is a content delivery service, Elastic Load Balancer is a specific AWS service, and security management is different."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "What is the virtual server platform that allows users to create and run virtual machines on Amazon’s server farm?",
    options: ["Azure", "EC2", "EC3", "EC5"],
    correctIndex: 1,
    explanation: "Correct: Amazon EC2 allows users to create and run virtual machines, called instances, on AWS infrastructure. Why others are wrong: Azure is Microsoft’s cloud platform, and EC3/EC5 are not the correct AWS service names."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Self Assessment Based",
    question: "An immutable representation of a set of disks containing an operating system, applications, and/or data is called:",
    options: [
      "Amazon Cloud9",
      "Amazon CloudFront",
      "Amazon Disk",
      "Amazon Machine Image"
    ],
    correctIndex: 3,
    explanation: "Correct: An Amazon Machine Image, or AMI, is used as a template for launching EC2 instances. Why others are wrong: Cloud9 is a cloud IDE, CloudFront is a CDN, and Amazon Disk is not the correct term."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "A traditional server usually includes:",
    options: ["Hardware", "Operating system", "Applications and storage", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: A traditional server is usually viewed as one complete unit containing hardware, OS, storage, and applications. Why others are wrong: Each option is only one part, so all of the above is best."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Why are traditional servers less scalable?",
    options: [
      "They often require physical hardware changes to expand capacity",
      "They scale automatically without limits",
      "They never use hardware",
      "They do not run applications"
    ],
    correctIndex: 0,
    explanation: "Correct: Traditional servers often need hardware purchase, installation, and configuration to scale. Why others are wrong: They do not scale automatically without limits, they use hardware, and they run applications."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "A virtual server is usually stored as:",
    options: ["Files on a physical host or enterprise storage", "Only a printed page", "Only a keyboard shortcut", "Only a wall poster"],
    correctIndex: 0,
    explanation: "Correct: Virtual servers are stored as files or images on physical hosts or shared storage. Why others are wrong: Printed pages, keyboard shortcuts, and posters do not store virtual servers."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "One physical host can usually run:",
    options: ["More than one virtual server", "Only one paper document", "No virtual server", "Only a printer process"],
    correctIndex: 0,
    explanation: "Correct: Virtualization allows one host to run multiple virtual servers. Why others are wrong: Paper documents and printer processes do not describe virtual server hosting."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Cloud storage is different from traditional storage because cloud storage:",
    options: [
      "Can be accessed through the internet from different locations",
      "Works only on one local hard disk",
      "Cannot scale",
      "Cannot support backup"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud storage supports internet-based access from many locations. Why others are wrong: Local-only access is traditional, and cloud storage can scale and support backup."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Which of the following is an example of cloud storage?",
    options: ["Amazon S3", "Local keyboard", "Monitor cable", "CPU fan"],
    correctIndex: 0,
    explanation: "Correct: Amazon S3 is a cloud storage service. Why others are wrong: Keyboard, monitor cable, and CPU fan are hardware items, not cloud storage."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "A major benefit of cloud storage is:",
    options: ["Scalability", "High local hardware dependency", "No remote access", "No redundancy"],
    correctIndex: 0,
    explanation: "Correct: Cloud storage can scale based on need. Why others are wrong: Cloud reduces local hardware dependency, supports remote access, and can use redundancy."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Which factor is important when storing sensitive data in the cloud?",
    options: ["Encryption", "Access control", "Backup and recovery", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Encryption, access control, and backup/recovery are all important for safe cloud storage. Why others are wrong: Each option alone is correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Cloud database storage means:",
    options: [
      "Using a database hosted and managed through cloud infrastructure",
      "Only writing records on paper",
      "Only saving data on a pen drive",
      "Only using a calculator"
    ],
    correctIndex: 0,
    explanation: "Correct: Cloud database storage provides database services through cloud infrastructure. Why others are wrong: Paper, pen drives, and calculators do not describe cloud databases."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "A relational cloud database usually stores data in:",
    options: ["Tables with rows and columns", "Only videos", "Only audio files", "Only unlabelled images"],
    correctIndex: 0,
    explanation: "Correct: Relational databases organize data in tables with rows and columns. Why others are wrong: Videos, audio files, and images are not the table-based relational model."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "A non-relational cloud database is commonly useful for:",
    options: ["Flexible or semi-structured data", "Only fixed table schema", "Only paper records", "Only local monitor settings"],
    correctIndex: 0,
    explanation: "Correct: Non-relational databases are useful for flexible, semi-structured, or large-scale distributed data. Why others are wrong: Fixed schema is relational, and paper or monitor settings are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Resource management in cloud computing is mainly concerned with:",
    options: [
      "Allocating, scheduling, monitoring, and optimizing cloud resources",
      "Only changing wallpapers",
      "Only cleaning keyboards",
      "Only printing invoices"
    ],
    correctIndex: 0,
    explanation: "Correct: Resource management handles allocation, scheduling, monitoring, and optimization of cloud resources. Why others are wrong: Wallpapers, keyboards, and invoices are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Resource scheduling means:",
    options: [
      "Assigning cloud resources to tasks or users based on need and policy",
      "Deleting all cloud resources",
      "Only changing font size",
      "Only switching off the monitor"
    ],
    correctIndex: 0,
    explanation: "Correct: Scheduling assigns resources to workloads based on demand, priority, and availability. Why others are wrong: Deleting resources, changing fonts, and switching off monitors are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "A good SLA should clearly define:",
    options: ["Service availability", "Performance expectations", "Responsibilities and penalties", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: A good SLA defines availability, performance, responsibilities, penalties, support, and recovery terms. Why others are wrong: A, B, and C are all important SLA elements."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "AWS stands for:",
    options: ["Amazon Web Services", "Advanced Web Storage", "Application Web Server", "Automated Wireless System"],
    correctIndex: 0,
    explanation: "Correct: AWS stands for Amazon Web Services. Why others are wrong: The other expansions are incorrect."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Amazon EC2 is mainly used to provide:",
    options: ["Virtual computing instances", "Only email newsletters", "Only image editing", "Only document printing"],
    correctIndex: 0,
    explanation: "Correct: Amazon EC2 provides scalable virtual machines called instances. Why others are wrong: Email newsletters, image editing, and printing are not EC2’s main purpose."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Amazon S3 is mainly used for:",
    options: ["Object storage", "Virtual machine launching only", "Video editing only", "Keyboard configuration"],
    correctIndex: 0,
    explanation: "Correct: Amazon S3 is used for object storage in the cloud. Why others are wrong: EC2 launches virtual machines, while video editing and keyboard configuration are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Amazon CloudFront is mainly used for:",
    options: ["Content delivery", "Database table joining only", "Physical server cleaning", "Local printer setup"],
    correctIndex: 0,
    explanation: "Correct: Amazon CloudFront is a content delivery network service. Why others are wrong: Database joining, server cleaning, and printer setup are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "Load balancing helps cloud applications by:",
    options: [
      "Distributing traffic across multiple servers",
      "Sending all traffic to one overloaded server",
      "Removing application availability",
      "Stopping user requests"
    ],
    correctIndex: 0,
    explanation: "Correct: Load balancing distributes requests to improve performance and availability. Why others are wrong: Sending all traffic to one server causes overload, while removing availability and stopping requests are harmful."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Concept MCQ",
    question: "An AMI is used in EC2 to:",
    options: ["Launch instances with a predefined OS, applications, and configuration", "Only play music", "Only send emails", "Only clean storage"],
    correctIndex: 0,
    explanation: "Correct: An Amazon Machine Image is a template used to launch EC2 instances. Why others are wrong: Music, email, and cleaning storage are not AMI functions."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A company buys one physical server and installs OS, storage, and applications on it. Scaling requires buying another server. Which concept is this?",
    options: ["Traditional server concept", "Cloud-native auto scaling", "Serverless computing", "Blockchain"],
    correctIndex: 0,
    explanation: "Correct: This describes a traditional server setup. Why others are wrong: Cloud-native auto scaling and serverless are more flexible cloud models, and blockchain is unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A server exists as a file and can be moved between hosts for maintenance. Which concept is shown?",
    options: ["Virtual server", "Paper server", "Physical-only server", "Manual register"],
    correctIndex: 0,
    explanation: "Correct: Virtual servers can be represented as files and moved between hosts. Why others are wrong: Paper servers, physical-only servers, and manual registers do not support this."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A user stores project backups in Amazon S3 instead of keeping only an external hard disk. Which concept is shown?",
    options: ["Cloud storage", "Traditional storage only", "CPU virtualization", "Manual storage only"],
    correctIndex: 0,
    explanation: "Correct: Amazon S3 is cloud storage. Why others are wrong: External hard disk is traditional storage, CPU virtualization is different, and manual-only storage is not shown."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A business chooses cloud storage because it wants access from many locations and scalable capacity. Which benefit is most relevant?",
    options: ["Remote access and scalability", "Only local access", "No backup", "No network use"],
    correctIndex: 0,
    explanation: "Correct: Cloud storage provides remote access and scalability. Why others are wrong: Local-only access, no backup, and no network use do not describe cloud storage benefits."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A cloud provider hides the exact physical server details and gives users virtual CPUs and storage. Which concept is this?",
    options: ["Resource abstraction", "Physical exposure", "Manual wiring", "No virtualization"],
    correctIndex: 0,
    explanation: "Correct: Resource abstraction hides physical details and presents logical resources. Why others are wrong: Physical exposure, manual wiring, and no virtualization do not match."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A cloud platform automatically assigns more compute power to a busy application. Which concept is involved?",
    options: ["Resource management", "Screen recording", "File naming only", "Printer queue only"],
    correctIndex: 0,
    explanation: "Correct: Resource management includes allocation and scaling of compute resources. Why others are wrong: Screen recording, file naming, and printer queues are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A contract says the cloud service must provide 99.9% uptime and defines penalties if it fails. What is this contract called?",
    options: ["SLA", "AMI", "CPU fan policy", "Local notebook"],
    correctIndex: 0,
    explanation: "Correct: An SLA defines service expectations such as uptime and penalties. Why others are wrong: AMI is an EC2 image template, and the other options are unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A website receives heavy traffic, so requests are spread across many servers. Which technique is used?",
    options: ["Load balancing", "Data deletion", "Single-server overload", "Manual printing"],
    correctIndex: 0,
    explanation: "Correct: Load balancing spreads traffic across multiple servers. Why others are wrong: Data deletion, overloading one server, and printing do not improve web-server efficiency."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "A developer launches a Linux virtual machine on AWS using a predefined template. Which AWS concepts are involved?",
    options: ["EC2 and AMI", "Only CloudFront", "Only local storage", "Only email service"],
    correctIndex: 0,
    explanation: "Correct: EC2 launches virtual machines, and AMI provides the image template. Why others are wrong: CloudFront is a CDN, local storage is not the AWS VM launch concept, and email service is unrelated."
  },

  {
    unit: "Unit 14 – Additional Cloud Concepts",
    type: "Tricky Exam MCQ",
    question: "Which statement best explains Unit 14?",
    options: [
      "It covers cloud servers, virtual servers, cloud storage, cloud databases, resource management, SLAs, AWS, EC2, load balancing, and AMIs",
      "It covers only image editing",
      "It says traditional servers are always more scalable than cloud servers",
      "It says SLAs are not used in cloud computing"
    ],
    correctIndex: 0,
    explanation: "Correct: Unit 14 focuses on additional cloud concepts such as storage, server models, SLAs, resource management, and AWS services. Why others are wrong: Image editing is unrelated, traditional servers are not always more scalable, and SLAs are important in cloud computing."
  }
];
