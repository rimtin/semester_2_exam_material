// ======================================================
//  SUBJECT REGISTRY
//  To add a new subject:
//   1. Create subjects/<id>/units/unit1_mcq.js ... unitN_mcq.js
//      (same enriched question format as Cloud Computing)
//   2. Add an entry below with the right unitCount.
// ======================================================

window.SUBJECTS = [
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: "☁️",
    description: "Cloud models, services, virtualization, big data, security and collaboration tools.",
    unitCount: 14,
    stats: "14 units · 630 MCQs",
    path: "subjects/cloud/units/",
  },

  {
    id: "analytical",
    name: "Analytical Skill",
    icon: "🧠",
    description: "Reasoning, problem solving, and analytical ability practice for the exam.",
    unitCount: 14,
    stats: "14 units",
    path: "subjects/analytical/units/",
  },

  // Example — uncomment and create the files to add your DWDM subject:
  // {
  //   id: "dwdm",
  //   name: "Data Mining & Data Warehousing",
  //   icon: "⛏️",
  //   description: "Warehousing, OLAP, classification, clustering and association rules.",
  //   unitCount: 10,
  //   stats: "10 units",
  //   path: "subjects/dwdm/units/",
  // },
];
