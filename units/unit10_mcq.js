// units/unit10_mcq.js
// Unit 10 – Virtualization Concepts
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit10_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Virtualization means creating a ______ version of something instead of an actual physical version.",
    options: ["physical", "virtual", "manual", "restricted"],
    correctIndex: 1,
    explanation: "Correct: Virtualization creates a virtual version of hardware, storage, network, or operating system resources. Why others are wrong: Physical means real hardware, manual is not the concept, and restricted does not define virtualization."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Which of the following best explains why virtualization is used?",
    options: [
      "To share the same hardware among independent users",
      "To remove all operating systems",
      "To stop resource sharing",
      "To increase hardware waste"
    ],
    correctIndex: 0,
    explanation: "Correct: Virtualization allows the same physical hardware to be shared by multiple virtual machines or users. Why others are wrong: It does not remove operating systems, stop sharing, or increase waste."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Which of the following are examples of virtualization software?",
    options: ["VMware Workstation", "Oracle VirtualBox", "Microsoft Virtual PC", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: VMware Workstation, Oracle VirtualBox, and Microsoft Virtual PC are examples of virtualization software. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Cloud computing is an abstraction based on pooling physical resources and presenting them as a ________ resource.",
    options: ["limited", "restricted", "virtual", "homogeneous"],
    correctIndex: 2,
    explanation: "Correct: Cloud computing presents pooled physical resources as virtual resources. Why others are wrong: Limited, restricted, and homogeneous do not correctly describe this cloud abstraction."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "________ virtualization requires an operating system installed on the computer, with the virtualization layer installed as an application on the OS.",
    options: ["Bare-metal", "Hybrid", "Storage", "Hosted"],
    correctIndex: 3,
    explanation: "Correct: Hosted virtualization runs on top of a host operating system. Why others are wrong: Bare-metal runs directly on hardware, hybrid combines approaches, and storage virtualization is related to storage resources."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "CapEx stands for:",
    options: ["Capacity expenses", "Capital expenditure", "Capital explosion", "Capacity explosion"],
    correctIndex: 1,
    explanation: "Correct: CapEx means Capital Expenditure. Why others are wrong: The other options are incorrect expansions."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Which of the following is/are benefits of virtualizing resources?",
    options: [
      "To increase resource utilization",
      "To increase return on investment",
      "Ability to transform hardware into software",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Correct: Virtualization improves resource utilization, can improve return on investment, and converts hardware capabilities into software-managed virtual resources. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "What is most commonly used for managing resources for every virtual system?",
    options: ["Hypervisor", "Router", "Cloud", "Switch"],
    correctIndex: 0,
    explanation: "Correct: A hypervisor manages virtual machines and allocates physical resources to them. Why others are wrong: Routers and switches are networking devices, and cloud is a broader computing model."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Which is NOT a benefit of virtualization?",
    options: [
      "Run on single operating system",
      "Flexible and efficient allocation of resources",
      "Lowers the cost of IT infrastructure",
      "Remote access and rapid scalability"
    ],
    correctIndex: 0,
    explanation: "Correct: Running only on a single operating system is not a benefit because virtualization is used to run multiple isolated environments. Why others are wrong: Flexible allocation, lower infrastructure cost, and scalability are benefits."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Which of the following properties does NOT specify the virtualization requirements?",
    options: ["Efficiency property", "Resource control property", "Cluster property", "Equivalence property"],
    correctIndex: 2,
    explanation: "Correct: Cluster property is not one of the classic virtualization requirements. Why others are wrong: Efficiency, resource control, and equivalence are virtualization requirement properties."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "________ are used to isolate the operating system from untrusted user applications.",
    options: ["Usage rings", "Protection rings", "Privacy rings", "Trustful rings"],
    correctIndex: 1,
    explanation: "Correct: Protection rings separate privilege levels and help isolate the OS from untrusted applications. Why others are wrong: Usage rings, privacy rings, and trustful rings are not the correct technical term."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "An operating system running on a Type ______ VM is full virtualization.",
    options: ["1", "2", "3", "4"],
    correctIndex: 0,
    explanation: "Correct: Type 1 virtualization is associated with full virtualization in the unit's self-assessment. Why others are wrong: Types 2, 3, and 4 do not match the given self-assessment answer."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "In ________, the virtual machine simulates hardware, so it can be independent of the underlying system hardware.",
    options: ["Paravirtualization", "Full virtualization", "Emulation", "None of the above"],
    correctIndex: 2,
    explanation: "Correct: Emulation simulates hardware so the system can run independently of the actual underlying hardware. Why others are wrong: Paravirtualization communicates with the hypervisor, and full virtualization virtualizes hardware but the self-assessment answer is emulation."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "The software that supports virtual machines is called:",
    options: ["VMM", "Hypervisor", "Kernel", "Both A and B"],
    correctIndex: 3,
    explanation: "Correct: VMM and hypervisor are both used for software that supports and manages virtual machines. Why others are wrong: Kernel is part of an operating system, not the best answer here."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Self Assessment Based",
    question: "Which of the following types of virtualization is also characteristic of cloud computing?",
    options: ["Storage", "CPU", "Application", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: Cloud computing can use storage, CPU, and application virtualization. Why others are wrong: A, B, and C are all valid, so the best answer is all of the above."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Virtualization technology transforms:",
    options: ["Hardware into software-like virtual resources", "Software into paper", "Cloud into electricity", "Data into keyboard keys"],
    correctIndex: 0,
    explanation: "Correct: Virtualization converts physical hardware capabilities into software-managed virtual resources. Why others are wrong: Paper, electricity, and keyboard keys are unrelated."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "A virtual machine is:",
    options: [
      "A software-based computer running on physical hardware",
      "Only a physical monitor",
      "Only a keyboard shortcut",
      "A paper-based server"
    ],
    correctIndex: 0,
    explanation: "Correct: A virtual machine behaves like a computer but runs as software on physical hardware. Why others are wrong: Monitors, shortcuts, and paper servers do not define a VM."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Which component sits between virtual machines and physical hardware?",
    options: ["Hypervisor", "Printer", "Spreadsheet", "Browser cache"],
    correctIndex: 0,
    explanation: "Correct: The hypervisor manages virtual machines and controls access to physical hardware. Why others are wrong: Printer, spreadsheet, and browser cache are unrelated."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Type 1 hypervisor is also called:",
    options: ["Bare-metal hypervisor", "Hosted hypervisor", "Document hypervisor", "Browser hypervisor"],
    correctIndex: 0,
    explanation: "Correct: A Type 1 hypervisor runs directly on physical hardware and is called bare-metal. Why others are wrong: Hosted hypervisor is Type 2, and the remaining terms are not standard."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Type 2 hypervisor is also called:",
    options: ["Hosted hypervisor", "Bare-metal hypervisor", "Storage-only hypervisor", "Network cable"],
    correctIndex: 0,
    explanation: "Correct: A Type 2 hypervisor runs on top of a host operating system and is called hosted. Why others are wrong: Bare-metal is Type 1, storage-only is not the standard name, and network cable is hardware."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Which is an example of a Type 1 hypervisor?",
    options: ["VMware ESXi", "Microsoft Word", "Google Docs", "Paint"],
    correctIndex: 0,
    explanation: "Correct: VMware ESXi is a bare-metal Type 1 hypervisor. Why others are wrong: Word, Google Docs, and Paint are applications, not hypervisors."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Which is an example of a hosted virtualization tool?",
    options: ["Oracle VirtualBox", "CPU fan", "Printer driver only", "Physical router only"],
    correctIndex: 0,
    explanation: "Correct: Oracle VirtualBox runs on a host operating system and supports hosted virtualization. Why others are wrong: CPU fan, printer driver, and router are not virtualization tools."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "The main purpose of server consolidation is to:",
    options: [
      "Run multiple workloads on fewer physical servers",
      "Buy more unused servers",
      "Avoid resource sharing",
      "Remove virtual machines"
    ],
    correctIndex: 0,
    explanation: "Correct: Server consolidation reduces the number of physical servers by running multiple virtual machines on shared hardware. Why others are wrong: Buying unused servers, avoiding sharing, and removing VMs defeat the purpose."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "A sandbox environment is useful because:",
    options: [
      "Applications can be tested in isolation",
      "It removes all security",
      "It damages the host system",
      "It prevents testing"
    ],
    correctIndex: 0,
    explanation: "Correct: Sandboxing isolates applications so they can be tested safely. Why others are wrong: It does not remove security, damage the host, or prevent testing."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Virtualization helps hardware upgrades because:",
    options: [
      "Applications can be decoupled from underlying hardware",
      "Applications must be rewritten every time",
      "Operating systems cannot move",
      "Hardware becomes unusable"
    ],
    correctIndex: 0,
    explanation: "Correct: Virtualization separates OS/application images from physical hardware, making migration and upgrades easier. Why others are wrong: Rewriting apps, preventing movement, and making hardware unusable are incorrect."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Full virtualization means:",
    options: [
      "The guest OS can run without being modified",
      "The guest OS must always be rewritten completely",
      "No hypervisor is used",
      "Only storage is virtualized"
    ],
    correctIndex: 0,
    explanation: "Correct: In full virtualization, the guest OS usually runs without modification because hardware is simulated or virtualized. Why others are wrong: Rewriting is not required, a hypervisor is involved, and it is not only storage virtualization."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Paravirtualization is different from full virtualization because:",
    options: [
      "The guest OS is aware of virtualization and can communicate with the hypervisor",
      "It never uses a hypervisor",
      "It only changes monitor brightness",
      "It works only on paper"
    ],
    correctIndex: 0,
    explanation: "Correct: In paravirtualization, the guest OS knows it is virtualized and uses special calls or drivers to communicate with the hypervisor. Why others are wrong: It uses a hypervisor and has nothing to do with monitor brightness or paper."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Hybrid virtualization combines:",
    options: [
      "Full virtualization and paravirtualization features",
      "Only paper and pen",
      "Only printer and scanner",
      "Only email and chat"
    ],
    correctIndex: 0,
    explanation: "Correct: Hybrid virtualization combines full virtualization with paravirtualized drivers or techniques. Why others are wrong: Paper, printer, scanner, email, and chat are unrelated."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Storage virtualization means:",
    options: [
      "Combining or abstracting physical storage into logical storage",
      "Deleting all storage",
      "Using only one USB drive",
      "Turning RAM into a keyboard"
    ],
    correctIndex: 0,
    explanation: "Correct: Storage virtualization abstracts physical storage and presents it as logical storage. Why others are wrong: It does not delete storage, limit storage to USB, or turn RAM into hardware keys."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "CPU virtualization allows:",
    options: [
      "Multiple virtual machines to share processor resources",
      "Only one program to run forever",
      "No operating system to run",
      "The CPU to become a printer"
    ],
    correctIndex: 0,
    explanation: "Correct: CPU virtualization lets multiple VMs share physical processor resources. Why others are wrong: It is not limited to one program, does not prevent OS usage, and does not convert CPU into a printer."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Application virtualization means:",
    options: [
      "Applications are separated from the underlying operating system environment",
      "Applications are deleted permanently",
      "Only hardware is repaired",
      "A monitor is virtualized only"
    ],
    correctIndex: 0,
    explanation: "Correct: Application virtualization allows applications to run in a virtualized or isolated environment. Why others are wrong: It does not mean deleting apps, repairing hardware, or only virtualizing monitors."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Network virtualization means:",
    options: [
      "Creating logical network resources from physical network resources",
      "Removing all network devices permanently",
      "Using only handwritten addresses",
      "Stopping all communication"
    ],
    correctIndex: 0,
    explanation: "Correct: Network virtualization abstracts physical networking into logical networks. Why others are wrong: It does not remove networking, use handwritten addresses only, or stop communication."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "A major advantage of virtualization is:",
    options: ["Better resource utilization", "More unused hardware", "No isolation", "No flexibility"],
    correctIndex: 0,
    explanation: "Correct: Virtualization improves the use of hardware resources. Why others are wrong: It reduces unused hardware, improves isolation, and increases flexibility."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "A common disadvantage or risk of virtualization is:",
    options: [
      "Performance overhead may occur",
      "Hardware utilization always becomes zero",
      "It cannot run operating systems",
      "It removes all management needs"
    ],
    correctIndex: 0,
    explanation: "Correct: Virtualization can introduce performance overhead because resources are shared and managed through a virtualization layer. Why others are wrong: It does not reduce utilization to zero, it runs operating systems, and it still needs management."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Concept MCQ",
    question: "Virtualized environments are important in cloud computing because:",
    options: [
      "They allow flexible allocation of shared computing resources",
      "They stop scalability",
      "They remove pooling",
      "They require one physical server per user always"
    ],
    correctIndex: 0,
    explanation: "Correct: Virtualized environments allow cloud providers to allocate resources flexibly and efficiently. Why others are wrong: Cloud virtualization supports scalability, pooling, and shared infrastructure."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A company runs six operating systems on one physical server using a VMware layer. Which concept is shown?",
    options: ["Virtualization", "Manual filing", "Physical-only computing", "No resource sharing"],
    correctIndex: 0,
    explanation: "Correct: Running multiple OSs as virtual machines on one physical system is virtualization. Why others are wrong: Manual filing and physical-only computing do not describe VMs, and virtualization uses resource sharing."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A hypervisor is installed directly on server hardware without a host operating system. Which type is this?",
    options: ["Type 1 / Bare-metal", "Type 2 / Hosted", "Application software only", "Database software only"],
    correctIndex: 0,
    explanation: "Correct: A Type 1 or bare-metal hypervisor runs directly on physical hardware. Why others are wrong: Type 2 runs on a host OS, and application/database software does not define this setup."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A user installs VirtualBox on Windows and then runs Linux inside it. Which virtualization type is this?",
    options: ["Hosted virtualization", "Bare-metal virtualization", "Storage-only virtualization", "No virtualization"],
    correctIndex: 0,
    explanation: "Correct: VirtualBox runs as an application on a host OS, so it is hosted virtualization. Why others are wrong: Bare-metal does not need a host OS, storage-only refers to storage, and this is clearly virtualization."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A cloud provider wants to reduce the number of physical servers by running many VMs on fewer machines. Which benefit is this?",
    options: ["Server consolidation", "Hardware wastage", "No isolation", "Manual-only deployment"],
    correctIndex: 0,
    explanation: "Correct: Server consolidation means placing multiple workloads on fewer physical servers. Why others are wrong: It reduces wastage, supports isolation, and can automate deployment."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A guest OS knows it is virtualized and communicates with the hypervisor using special drivers. Which type is this?",
    options: ["Paravirtualization", "Full virtualization", "No virtualization", "Physical-only execution"],
    correctIndex: 0,
    explanation: "Correct: Paravirtualization uses an aware guest OS and special communication with the hypervisor. Why others are wrong: Full virtualization usually lets the guest run without modification, and the other options are not correct."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A virtual machine simulates hardware so software can run independently of the real underlying hardware. Which concept is this?",
    options: ["Emulation", "Keyboard mapping", "File compression", "Printer sharing"],
    correctIndex: 0,
    explanation: "Correct: Emulation simulates hardware behavior. Why others are wrong: Keyboard mapping, compression, and printer sharing are unrelated to hardware simulation."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "A company wants to test an untrusted application without affecting the main OS. Which virtualization benefit is most useful?",
    options: ["Sandboxing and isolation", "Removing the OS", "Increasing hardware waste", "Disabling all backups"],
    correctIndex: 0,
    explanation: "Correct: Sandboxing and isolation allow safe testing. Why others are wrong: Removing the OS, wasting hardware, and disabling backups are not useful virtualization benefits."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "Which pair is correctly matched?",
    options: [
      "Hypervisor – manages virtual machines",
      "Hosted virtualization – runs directly on hardware without OS",
      "Bare-metal virtualization – installed as an app on host OS",
      "Paravirtualization – guest OS is never aware of virtualization"
    ],
    correctIndex: 0,
    explanation: "Correct: A hypervisor manages virtual machines. Why others are wrong: Hosted virtualization runs on a host OS, bare-metal runs directly on hardware, and paravirtualized guests are aware of virtualization."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "Which situation best shows storage virtualization?",
    options: [
      "Multiple physical storage devices appear as one logical storage pool",
      "One keyboard controls two lights",
      "A file is printed on paper",
      "A monitor changes brightness"
    ],
    correctIndex: 0,
    explanation: "Correct: Storage virtualization combines or abstracts physical storage into logical storage. Why others are wrong: Keyboard control, printing, and brightness are unrelated."
  },

  {
    unit: "Unit 10 – Virtualization Concepts",
    type: "Tricky Exam MCQ",
    question: "Which statement best explains virtualization in cloud computing?",
    options: [
      "It allows physical resources like CPU, storage, network, and applications to be abstracted and shared as virtual resources",
      "It means every user must buy a separate physical server",
      "It prevents resource pooling",
      "It removes scalability from cloud computing"
    ],
    correctIndex: 0,
    explanation: "Correct: Virtualization abstracts and shares physical resources as virtual resources, which supports cloud computing. Why others are wrong: Cloud virtualization reduces the need for separate servers, supports pooling, and improves scalability."
  }
];
