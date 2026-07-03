// units/unit11_mcq.js
// Unit 11 – Virtual Machine
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit11_mcq = [
  // ======================================================
  // 15 SELF-ASSESSMENT BASED MCQs
  // ======================================================

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "A virtual machine is software that creates a virtualized environment between the computer platform and the:",
    options: ["End user", "Printer", "Monitor", "Keyboard"],
    correctIndex: 0,
    explanation: "Correct: A virtual machine creates a virtualized environment between the computer platform and the end user. Why others are wrong: Printer, monitor, and keyboard are hardware devices, not the user layer for VM operation."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Virtual machines allow applications written for one operating system to run on:",
    options: ["Only the same operating system", "Only mobile phones", "Only physical routers", "A machine running a different operating system"],
    correctIndex: 3,
    explanation: "Correct: VMs allow applications written for one OS to run in a virtual environment even if the host machine uses another OS. Why others are wrong: VMs are not limited to same OS, mobile phones, or routers."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "According to Popek and Goldberg, a virtual machine is:",
    options: ["A physical keyboard", "A cloud storage folder", "An efficient, isolated duplicate of a real machine", "Only a web browser"],
    correctIndex: 2,
    explanation: "Correct: A VM is described as an efficient, isolated duplicate of a real machine. Why others are wrong: A VM is not a keyboard, storage folder, or browser."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Which was the first available VM architecture mentioned in the unit?",
    options: ["VMware ESXi", "CP-67", "Google Drive", "HyperText"],
    correctIndex: 1,
    explanation: "Correct: CP-67 was the first available VM architecture mentioned. Why others are wrong: VMware ESXi is a later hypervisor, Google Drive is cloud storage, and HyperText is unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Each VM has its own set of RAM, CPU, NIC, and similar resources. This property is called:",
    options: ["Physical wiring", "Virtual hardware", "Manual booting", "Cloud billing"],
    correctIndex: 1,
    explanation: "Correct: Virtual hardware means each VM gets its own virtual CPU, memory, NIC, and storage. Why others are wrong: Physical wiring, manual booting, and cloud billing do not describe this VM property."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Which VM property allows multiple operating systems to be supported within a single physical system?",
    options: ["Printing", "Screen sharing", "Partitioning", "Email routing"],
    correctIndex: 2,
    explanation: "Correct: Partitioning allows multiple applications and operating systems to run within one physical system. Why others are wrong: Printing, screen sharing, and email routing are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "If one VM crashes and the other VMs remain unaffected, which VM property is shown?",
    options: ["Formatting", "Compression", "Indexing", "Isolation"],
    correctIndex: 3,
    explanation: "Correct: Isolation keeps VMs separate so failure in one VM does not directly affect others. Why others are wrong: Formatting, compression, and indexing do not describe VM separation."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "A VM can be transferred to another system easily because:",
    options: ["The complete VM status is saved in a few files", "It is printed on paper", "It has no operating system", "It cannot store data"],
    correctIndex: 0,
    explanation: "Correct: A VM can often be moved by copying its VM files because its state is stored digitally. Why others are wrong: Paper, no OS, and no data storage do not explain VM transfer."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Process virtual machines are also known as:",
    options: ["Application VMs", "Printer VMs", "Router VMs", "Database-only VMs"],
    correctIndex: 0,
    explanation: "Correct: Process VMs are also called Application VMs. Why others are wrong: Printer, router, and database-only VMs are not the standard names."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "A process VM is created for a process and is destroyed when:",
    options: ["The monitor turns on", "The process finishes", "The keyboard is removed", "The printer starts"],
    correctIndex: 1,
    explanation: "Correct: A process VM exists for a particular process and ends when that process finishes. Why others are wrong: Monitor, keyboard, and printer actions are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "For a system VM, the virtualization software is called:",
    options: ["Spreadsheet", "Compiler only", "Virtual Machine Monitor", "Email client"],
    correctIndex: 2,
    explanation: "Correct: The virtualization software for a system VM is called a Virtual Machine Monitor or VMM. Why others are wrong: Spreadsheet, compiler only, and email client are not the correct term."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Which of the following is an example of a High-Level-Language VM?",
    options: ["Java VM", ".NET Common Language Infrastructure", "Both A and B", "None of the above"],
    correctIndex: 2,
    explanation: "Correct: Java VM and .NET Common Language Infrastructure are examples of high-level-language VM concepts. Why others are wrong: Since both A and B are correct, the best answer is both."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Bare-metal virtualization is also commonly called:",
    options: ["Hosted virtualization", "Native virtualization", "Application editing", "Storage formatting"],
    correctIndex: 1,
    explanation: "Correct: Bare-metal virtualization is also known as native virtualization because the VMM works directly with hardware. Why others are wrong: Hosted virtualization runs over a host OS, while the other options are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "Which of the following is an example of hosted virtualization hypervisors?",
    options: ["VMware Workstation", "Oracle VirtualBox", "Microsoft Virtual PC", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: VMware Workstation, Oracle VirtualBox, and Microsoft Virtual PC are examples of hosted virtualization tools. Why others are wrong: A, B, and C are all correct individually, so the best answer is all of the above."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Self Assessment Based",
    question: "In which virtualization does the VMM communicate directly with system hardware instead of relying on a host operating system?",
    options: ["Bare-metal", "Hybrid", "Storage", "Hosted"],
    correctIndex: 0,
    explanation: "Correct: In bare-metal virtualization, the VMM communicates directly with hardware. Why others are wrong: Hosted virtualization relies on a host OS, while hybrid and storage virtualization do not match the statement."
  },

  // ======================================================
  // 20 CONCEPT MCQs
  // ======================================================

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "A virtual machine behaves like:",
    options: ["A software-based computer inside a physical computer", "Only a keyboard", "Only a printer", "Only a power cable"],
    correctIndex: 0,
    explanation: "Correct: A VM behaves like a computer with CPU, memory, disk, and network resources. Why others are wrong: Keyboard, printer, and cable are hardware parts, not complete virtual computers."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Which resources can a VM have virtually?",
    options: ["CPU", "Memory", "Disk and network", "All of the above"],
    correctIndex: 3,
    explanation: "Correct: A VM can have virtual CPU, memory, disk, and network resources. Why others are wrong: A, B, and C are all correct, so the best answer is all of the above."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "The main purpose of a VM is to:",
    options: ["Create isolated execution environments", "Delete all operating systems", "Stop software execution", "Remove memory from computers"],
    correctIndex: 0,
    explanation: "Correct: VMs create isolated environments where operating systems and applications can run. Why others are wrong: VMs do not delete OSs, stop software, or remove memory."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "In VM technology, virtual resources are mapped to:",
    options: ["Real physical resources", "Printed notes", "Keyboard colors", "Screen wallpapers"],
    correctIndex: 0,
    explanation: "Correct: Virtual resources such as virtual CPU or memory are mapped to real physical resources. Why others are wrong: Notes, colors, and wallpapers are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "The software layer added to a real machine to support VM architecture is used for:",
    options: ["Virtualization", "Printing", "Screen cleaning", "Audio recording only"],
    correctIndex: 0,
    explanation: "Correct: The added software layer supports virtualization and VM execution. Why others are wrong: Printing, cleaning, and audio recording do not define VM architecture."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Which VM property prevents data from leaking between VMs?",
    options: ["Isolation", "Brightness", "Typing speed", "Screen resolution"],
    correctIndex: 0,
    explanation: "Correct: Isolation prevents direct data leakage and unwanted influence between VMs. Why others are wrong: Brightness, typing speed, and resolution are device settings."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Partitioning in VMs helps because:",
    options: ["Multiple OSs and applications can share one physical system safely", "Only one task can run forever", "No memory is used", "The host becomes a printer"],
    correctIndex: 0,
    explanation: "Correct: Partitioning divides physical resources so multiple VMs can run on one host. Why others are wrong: It does not restrict to one task, remove memory use, or turn a host into a printer."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "A VM operating system sees:",
    options: ["A consistent normalized set of virtual hardware", "Only a paper notebook", "Only a wall clock", "Only a projector"],
    correctIndex: 0,
    explanation: "Correct: The guest OS sees virtual hardware presented by the virtualization layer. Why others are wrong: Paper, clocks, and projectors are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "The host machine is:",
    options: ["The physical system on which VMs run", "Only a guest OS", "Only a browser tab", "Only a USB cable"],
    correctIndex: 0,
    explanation: "Correct: The host machine provides physical resources for the VMs. Why others are wrong: Guest OS, browser tab, and USB cable are not the host system."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "The guest machine or guest OS is:",
    options: ["The OS running inside a VM", "Only the physical motherboard", "Only the network cable", "Only the monitor"],
    correctIndex: 0,
    explanation: "Correct: A guest OS runs inside a virtual machine. Why others are wrong: Motherboard, cable, and monitor are physical components."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Runtime software implements which type of VM?",
    options: ["Process VM", "Printer VM", "Monitor VM", "Router-only VM"],
    correctIndex: 0,
    explanation: "Correct: Runtime software implements the process VM at the API level. Why others are wrong: Printer, monitor, and router-only VM are not the correct architecture terms."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "The VMM is located between:",
    options: ["Host hardware and guest software", "Keyboard and mouse only", "Printer and paper only", "Monitor and wall"],
    correctIndex: 0,
    explanation: "Correct: The VMM sits between the host hardware and guest software to manage virtualization. Why others are wrong: The other pairs are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "A system VM is different from a process VM because a system VM:",
    options: ["Can support a complete operating system environment", "Exists only for one small process", "Cannot use memory", "Cannot run applications"],
    correctIndex: 0,
    explanation: "Correct: A system VM provides a full system environment for an operating system. Why others are wrong: A process VM exists for one process, and VMs use memory and run applications."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Emulators and translators are used to:",
    options: ["Run program binaries compiled for different instruction sets", "Only format documents", "Only crop images", "Only print files"],
    correctIndex: 0,
    explanation: "Correct: Emulators and translators help execute programs meant for different instruction sets. Why others are wrong: Formatting, cropping, and printing are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Binary translation means:",
    options: ["Converting instructions from one form to another so they can execute", "Deleting binary files", "Changing font style", "Making a PDF smaller"],
    correctIndex: 0,
    explanation: "Correct: Binary translation converts program instructions so they can run on another environment. Why others are wrong: Deleting files, font styling, and PDF compression do not describe binary translation."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Interpretation in VM execution means:",
    options: ["Reading and executing instructions step by step", "Only storing files", "Only changing passwords", "Only sending email"],
    correctIndex: 0,
    explanation: "Correct: Interpretation executes instructions step by step through an interpreter. Why others are wrong: Storage, password changes, and email are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "A hypervisor is responsible for:",
    options: ["Creating and managing virtual machines", "Only typing text", "Only charging a battery", "Only drawing shapes"],
    correctIndex: 0,
    explanation: "Correct: A hypervisor manages VM creation, execution, and resource allocation. Why others are wrong: Typing, charging, and drawing are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Xen, KVM, VMware, VirtualBox, and Hyper-V are related to:",
    options: ["Virtualization and hypervisors", "Only image editing", "Only music playback", "Only keyboard repair"],
    correctIndex: 0,
    explanation: "Correct: These are virtualization-related technologies or hypervisors. Why others are wrong: They are not image editors, music players, or keyboard repair tools."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Hosted virtualization requires:",
    options: ["A host operating system", "No computer at all", "Only paper records", "Only a printer"],
    correctIndex: 0,
    explanation: "Correct: Hosted virtualization runs as software on top of a host operating system. Why others are wrong: It still needs a computer, not paper or a printer."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Concept MCQ",
    question: "Native or bare-metal virtualization usually gives better performance because:",
    options: ["The hypervisor works directly with hardware", "It runs only inside a word processor", "It avoids using CPU", "It disables memory"],
    correctIndex: 0,
    explanation: "Correct: Bare-metal hypervisors communicate directly with hardware, reducing extra host OS overhead. Why others are wrong: Word processors, no CPU, and disabled memory are incorrect."
  },

  // ======================================================
  // 10 TRICKY EXAM MCQs
  // ======================================================

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A Windows laptop runs Ubuntu inside VirtualBox. What is Ubuntu in this case?",
    options: ["Guest OS", "Host hardware", "Physical CPU", "Monitor driver"],
    correctIndex: 0,
    explanation: "Correct: Ubuntu is the guest OS because it runs inside the VM. Why others are wrong: Host hardware is the physical machine, CPU is hardware, and monitor driver is unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A company runs five VMs on one physical server. Each VM has separate memory space. Which property is shown?",
    options: ["Partitioning", "Printing", "Image compression", "Cable management"],
    correctIndex: 0,
    explanation: "Correct: Partitioning separates resources such as memory among VMs. Why others are wrong: Printing, compression, and cable management do not describe VM resource separation."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "One VM gets infected with malware, but the other VMs remain safe. Which feature helps here?",
    options: ["Isolation", "Wallpaper change", "Battery saver", "Text alignment"],
    correctIndex: 0,
    explanation: "Correct: Isolation prevents one VM from directly affecting other VMs. Why others are wrong: Wallpaper, battery saver, and text alignment are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A VM is moved to another host by copying its VM files. Which feature makes this possible?",
    options: ["VM portability", "Screen brightness", "Printer sharing", "Manual typing"],
    correctIndex: 0,
    explanation: "Correct: VM portability allows a VM to be moved using its saved files and configuration. Why others are wrong: Brightness, printer sharing, and typing do not explain VM transfer."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A Java program runs on different operating systems because it targets an abstract machine. Which VM type is this?",
    options: ["High-Level-Language VM", "Only physical VM", "Printer VM", "Network cable VM"],
    correctIndex: 0,
    explanation: "Correct: Java VM is an example of a high-level-language VM that supports cross-platform execution. Why others are wrong: The other options are not standard VM types."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A program compiled for one instruction set is executed on another instruction set using translation. Which concept is involved?",
    options: ["Emulation and translation", "File deletion", "Monitor calibration", "Email filtering"],
    correctIndex: 0,
    explanation: "Correct: Emulation and translation help run binaries compiled for different instruction sets. Why others are wrong: File deletion, calibration, and email filtering are unrelated."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A hypervisor runs directly on server hardware without Windows or Linux as a host OS. Which type is this?",
    options: ["Bare-metal virtualization", "Hosted virtualization", "Application-only virtualization", "No virtualization"],
    correctIndex: 0,
    explanation: "Correct: Bare-metal virtualization runs directly on hardware. Why others are wrong: Hosted virtualization runs on a host OS, and the other options do not match."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "A user installs VMware Workstation on Windows and then creates VMs inside it. Which type is this?",
    options: ["Hosted virtualization", "Bare-metal virtualization", "Physical-only computing", "No hypervisor"],
    correctIndex: 0,
    explanation: "Correct: VMware Workstation is hosted virtualization because it runs on a host OS. Why others are wrong: Bare-metal runs directly on hardware, physical-only has no VMs, and a hypervisor is involved."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "Which pair is correctly matched?",
    options: [
      "VMM – manages system VM virtualization",
      "Process VM – runs forever after process ends",
      "Isolation – allows data leakage between VMs",
      "Hosted virtualization – no host OS required"
    ],
    correctIndex: 0,
    explanation: "Correct: VMM manages system VM virtualization. Why others are wrong: Process VMs end with the process, isolation prevents leakage, and hosted virtualization requires a host OS."
  },

  {
    unit: "Unit 11 – Virtual Machine",
    type: "Tricky Exam MCQ",
    question: "Which statement best explains virtual machines?",
    options: [
      "VMs are isolated software-based computers that share physical resources through virtualization",
      "VMs are only physical laptops",
      "VMs cannot run operating systems",
      "VMs do not use CPU or memory"
    ],
    correctIndex: 0,
    explanation: "Correct: VMs are software-based computers that run isolated environments while sharing host resources. Why others are wrong: They are not only physical laptops, they can run OSs, and they use CPU and memory."
  }
];
