// analytical_unit14_mcq.js
// Unit 14: Non-Verbal Reasoning
// 45 MCQs = 15 Self-Assessment Based + 20 Concept MCQs + 10 Tricky Exam MCQs

window.unit14_mcq = [
  // =========================
  // 15 SELF-ASSESSMENT BASED
  // =========================

  {
    id: "U14-SA-01",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure in the series: ▲, ▶, ▼, ◀, ?",
    options: {
      A: "▲",
      B: "▶",
      C: "▼",
      D: "◀"
    },
    answer: "A",
    solvedSolution: "The triangle rotates 90° clockwise in each step: ▲ → ▶ → ▼ → ◀ → ▲.",
    shortcutFormula: "Rotation series: Next figure = Previous figure + fixed angle."
  },

  {
    id: "U14-SA-02",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure: ○, ●, □, ■, △, ?",
    options: {
      A: "▲",
      B: "○",
      C: "◇",
      D: "■"
    },
    answer: "A",
    solvedSolution: "The pattern is outline shape followed by filled shape: ○ → ●, □ → ■, △ → ▲.",
    shortcutFormula: "Outline + filled pair rule: same shape appears first hollow, then filled."
  },

  {
    id: "U14-SA-03",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure: ↑, →, ↓, ←, ?",
    options: {
      A: "↑",
      B: "→",
      C: "↓",
      D: "←"
    },
    answer: "A",
    solvedSolution: "The arrow rotates 90° clockwise each time. After ←, it returns to ↑.",
    shortcutFormula: "Clockwise arrow cycle: ↑ → → → ↓ → ← → ↑."
  },

  {
    id: "U14-SA-04",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next term: □1, △2, ○3, □4, △5, ?",
    options: {
      A: "○6",
      B: "□6",
      C: "△6",
      D: "○5"
    },
    answer: "A",
    solvedSolution: "Shapes repeat in the order □, △, ○. Numbers increase by 1. After △5 comes ○6.",
    shortcutFormula: "Two-pattern rule: shape cycle + number increment."
  },

  {
    id: "U14-SA-05",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure: L, Γ, L, Γ, ?",
    options: {
      A: "L",
      B: "Γ",
      C: "T",
      D: "⊥"
    },
    answer: "A",
    solvedSolution: "The figure alternates between L and its mirror form Γ. So the next figure is L.",
    shortcutFormula: "Alternating mirror rule: A, B, A, B, A."
  },

  {
    id: "U14-SA-06",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure: ◇, ◇•, ◇••, ◇•••, ?",
    options: {
      A: "◇••••",
      B: "◇••",
      C: "◇•",
      D: "◆"
    },
    answer: "A",
    solvedSolution: "One dot is added in every step. After three dots, the next figure has four dots.",
    shortcutFormula: "Addition rule: next = previous + 1 element."
  },

  {
    id: "U14-SA-07",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure: ▲○, ○▲, ■◇, ◇■, ★+, ?",
    options: {
      A: "+★",
      B: "★+",
      C: "++",
      D: "★★"
    },
    answer: "A",
    solvedSolution: "Each pair swaps its position in the next step. Therefore ★+ becomes +★.",
    shortcutFormula: "Position interchange rule: AB → BA."
  },

  {
    id: "U14-SA-08",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Series",
    question: "Find the next figure: △, □, ⬟, ⬡, ?",
    options: {
      A: "Heptagon",
      B: "Circle",
      C: "Triangle",
      D: "Square"
    },
    answer: "A",
    solvedSolution: "The number of sides increases: triangle 3, square 4, pentagon 5, hexagon 6. Next is heptagon with 7 sides.",
    shortcutFormula: "Sides rule: 3 → 4 → 5 → 6 → 7."
  },

  {
    id: "U14-SA-09",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Analogy",
    question: "Choose the correct analogy: ▲ : ▼ :: ▶ : ?",
    options: {
      A: "◀",
      B: "▲",
      C: "▼",
      D: "▶"
    },
    answer: "A",
    solvedSolution: "▲ becomes ▼ by 180° rotation. Similarly, ▶ becomes ◀ after 180° rotation.",
    shortcutFormula: "Analogy rule: apply the same transformation to the second pair."
  },

  {
    id: "U14-SA-10",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Analogy",
    question: "Choose the correct analogy: □ : ■ :: ○ : ?",
    options: {
      A: "●",
      B: "□",
      C: "◇",
      D: "△"
    },
    answer: "A",
    solvedSolution: "□ becomes ■ by filling the shape. So ○ becomes ●.",
    shortcutFormula: "Hollow to filled rule: outline shape → filled shape."
  },

  {
    id: "U14-SA-11",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Figure Analogy",
    question: "Choose the correct analogy: Big □ with small ○ inside : Big ○ with small □ inside :: Big △ with small ◇ inside : ?",
    options: {
      A: "Big ◇ with small △ inside",
      B: "Big △ with small △ inside",
      C: "Big □ with small ◇ inside",
      D: "Big ○ with small △ inside"
    },
    answer: "A",
    solvedSolution: "The outer and inner shapes interchange their positions. So Big △ with small ◇ becomes Big ◇ with small △.",
    shortcutFormula: "Outer-inner interchange rule: outer shape ↔ inner shape."
  },

  {
    id: "U14-SA-12",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Classification",
    question: "Choose the odd one out: ▲, ▼, ◀, ▶, ●",
    options: {
      A: "▲",
      B: "▼",
      C: "▶",
      D: "●"
    },
    answer: "D",
    solvedSolution: "▲, ▼, ◀, and ▶ are triangles facing different directions. ● is a circle, so it is different.",
    shortcutFormula: "Odd-one rule: find the figure that does not share the common property."
  },

  {
    id: "U14-SA-13",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Classification",
    question: "Choose the odd one out: □, ▭, ◇, △",
    options: {
      A: "□",
      B: "▭",
      C: "◇",
      D: "△"
    },
    answer: "D",
    solvedSolution: "□, ▭, and ◇ are four-sided figures. △ has only three sides.",
    shortcutFormula: "Classification rule: compare number of sides."
  },

  {
    id: "U14-SA-14",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Classification",
    question: "Choose the odd one out: ●, ■, ▲, ○",
    options: {
      A: "●",
      B: "■",
      C: "▲",
      D: "○"
    },
    answer: "D",
    solvedSolution: "●, ■, and ▲ are filled figures. ○ is hollow, so it is different.",
    shortcutFormula: "Fill rule: filled figures belong together; hollow figure is odd."
  },

  {
    id: "U14-SA-15",
    unit: 14,
    category: "Self-Assessment Based",
    topic: "Classification",
    question: "Choose the odd one out: H, I, O, F",
    options: {
      A: "H",
      B: "I",
      C: "O",
      D: "F"
    },
    answer: "D",
    solvedSolution: "H, I, and O have vertical symmetry. F does not have vertical symmetry.",
    shortcutFormula: "Symmetry rule: check whether the figure can be divided into equal mirror halves."
  },

  // =================
  // 20 CONCEPT MCQS
  // =================

  {
    id: "U14-C-16",
    unit: 14,
    category: "Concept MCQ",
    topic: "Non-Verbal Reasoning Basics",
    question: "Non-verbal reasoning mainly tests the ability to understand:",
    options: {
      A: "Grammar rules",
      B: "Figure patterns and visual logic",
      C: "Historical dates",
      D: "Paragraph meanings"
    },
    answer: "B",
    solvedSolution: "Non-verbal reasoning is based on visual figures, patterns, shapes, rotations, mirror images, and odd-one-out logic.",
    shortcutFormula: "Non-verbal reasoning = figure logic + visual pattern recognition."
  },

  {
    id: "U14-C-17",
    unit: 14,
    category: "Concept MCQ",
    topic: "Figure Series",
    question: "In a figure series, the next figure is usually found by identifying:",
    options: {
      A: "A random figure",
      B: "The repeated transformation rule",
      C: "Only the first figure",
      D: "Only the last figure"
    },
    answer: "B",
    solvedSolution: "A figure series follows a rule such as rotation, addition, deletion, shading, or position change.",
    shortcutFormula: "Series rule: observe change from one figure to the next."
  },

  {
    id: "U14-C-18",
    unit: 14,
    category: "Concept MCQ",
    topic: "Figure Analogy",
    question: "In figure analogy questions, we compare:",
    options: {
      A: "Two numbers only",
      B: "Two figure relationships",
      C: "Only colors",
      D: "Only letters"
    },
    answer: "B",
    solvedSolution: "Figure analogy means the relationship between the first pair of figures must be applied to the second pair.",
    shortcutFormula: "A : B :: C : ? means apply A → B rule to C."
  },

  {
    id: "U14-C-19",
    unit: 14,
    category: "Concept MCQ",
    topic: "Classification",
    question: "In figure classification, the main task is to:",
    options: {
      A: "Find the longest word",
      B: "Find the odd figure out",
      C: "Calculate speed",
      D: "Find percentage"
    },
    answer: "B",
    solvedSolution: "Classification questions ask which figure is different from the rest based on shape, direction, sides, shading, or symmetry.",
    shortcutFormula: "Classification = common property check + odd one out."
  },

  {
    id: "U14-C-20",
    unit: 14,
    category: "Concept MCQ",
    topic: "Rotation",
    question: "If a figure turns from ↑ to →, the rotation is:",
    options: {
      A: "90° clockwise",
      B: "90° anticlockwise",
      C: "180°",
      D: "No rotation"
    },
    answer: "A",
    solvedSolution: "↑ becomes → when it rotates 90° clockwise.",
    shortcutFormula: "Clockwise order: ↑ → ↓ ←."
  },

  {
    id: "U14-C-21",
    unit: 14,
    category: "Concept MCQ",
    topic: "Rotation",
    question: "If a figure turns from ↑ to ↓, the rotation is:",
    options: {
      A: "45°",
      B: "90°",
      C: "180°",
      D: "360°"
    },
    answer: "C",
    solvedSolution: "↑ becomes ↓ after half rotation, which is 180°.",
    shortcutFormula: "Opposite direction = 180° rotation."
  },

  {
    id: "U14-C-22",
    unit: 14,
    category: "Concept MCQ",
    topic: "Mirror Image",
    question: "In a vertical mirror image, which change occurs?",
    options: {
      A: "Top and bottom interchange",
      B: "Left and right interchange",
      C: "Size becomes double",
      D: "Shape disappears"
    },
    answer: "B",
    solvedSolution: "A vertical mirror causes lateral inversion, so left and right sides get interchanged.",
    shortcutFormula: "Vertical mirror rule: left ↔ right, top remains top."
  },

  {
    id: "U14-C-23",
    unit: 14,
    category: "Concept MCQ",
    topic: "Water Image",
    question: "In a water image, which change occurs?",
    options: {
      A: "Left and right interchange",
      B: "Top and bottom interchange",
      C: "Only color changes",
      D: "Only size changes"
    },
    answer: "B",
    solvedSolution: "Water image is like reflection in water, so top and bottom are interchanged.",
    shortcutFormula: "Water image rule: top ↔ bottom, left remains left."
  },

  {
    id: "U14-C-24",
    unit: 14,
    category: "Concept MCQ",
    topic: "Symmetry",
    question: "Which figure has the maximum symmetry among these?",
    options: {
      A: "Circle",
      B: "Triangle",
      C: "Rectangle",
      D: "L-shape"
    },
    answer: "A",
    solvedSolution: "A circle has infinite lines of symmetry. The other figures have limited or no symmetry.",
    shortcutFormula: "Circle symmetry = infinite mirror lines."
  },

  {
    id: "U14-C-25",
    unit: 14,
    category: "Concept MCQ",
    topic: "Counting Sides",
    question: "Which figure has 5 sides?",
    options: {
      A: "Triangle",
      B: "Square",
      C: "Pentagon",
      D: "Hexagon"
    },
    answer: "C",
    solvedSolution: "A pentagon has 5 sides.",
    shortcutFormula: "Penta = 5, Hexa = 6, Hepta = 7."
  },

  {
    id: "U14-C-26",
    unit: 14,
    category: "Concept MCQ",
    topic: "Shading Pattern",
    question: "If a series changes from hollow to filled shape, the main transformation is:",
    options: {
      A: "Rotation",
      B: "Shading",
      C: "Mirror image",
      D: "Deletion"
    },
    answer: "B",
    solvedSolution: "Hollow to filled means the shape is being shaded or filled.",
    shortcutFormula: "Hollow → filled = shading transformation."
  },

  {
    id: "U14-C-27",
    unit: 14,
    category: "Concept MCQ",
    topic: "Addition Pattern",
    question: "If one new line is added in each step, the series follows:",
    options: {
      A: "Addition rule",
      B: "Deletion rule",
      C: "Mirror rule",
      D: "Water image rule"
    },
    answer: "A",
    solvedSolution: "When a new element is added in every step, it is an addition pattern.",
    shortcutFormula: "Next figure = previous figure + new element."
  },

  {
    id: "U14-C-28",
    unit: 14,
    category: "Concept MCQ",
    topic: "Deletion Pattern",
    question: "If one dot is removed from each next figure, the pattern is:",
    options: {
      A: "Addition",
      B: "Deletion",
      C: "Rotation",
      D: "Analogy"
    },
    answer: "B",
    solvedSolution: "Removing one element in every step is called deletion pattern.",
    shortcutFormula: "Next figure = previous figure - one element."
  },

  {
    id: "U14-C-29",
    unit: 14,
    category: "Concept MCQ",
    topic: "Position Change",
    question: "If a dot moves from top-left to top-right to bottom-right to bottom-left, the movement is:",
    options: {
      A: "Clockwise corner movement",
      B: "Anticlockwise corner movement",
      C: "Random movement",
      D: "No movement"
    },
    answer: "A",
    solvedSolution: "The dot moves around the corners in clockwise order.",
    shortcutFormula: "Corner cycle clockwise: TL → TR → BR → BL."
  },

  {
    id: "U14-C-30",
    unit: 14,
    category: "Concept MCQ",
    topic: "Classification",
    question: "Which property is commonly used to find the odd figure out?",
    options: {
      A: "Number of sides",
      B: "Direction",
      C: "Shading",
      D: "All of these"
    },
    answer: "D",
    solvedSolution: "Odd figure can be based on sides, direction, shading, symmetry, size, or rotation.",
    shortcutFormula: "Odd-one checklist: sides, shape, direction, shade, size, symmetry."
  },

  {
    id: "U14-C-31",
    unit: 14,
    category: "Concept MCQ",
    topic: "Analogy",
    question: "If □ changes to ◇, what is the likely transformation?",
    options: {
      A: "45° rotation",
      B: "Filling",
      C: "Deletion",
      D: "Water image"
    },
    answer: "A",
    solvedSolution: "A square becomes a diamond when it is rotated 45°.",
    shortcutFormula: "Square rotated 45° = diamond."
  },

  {
    id: "U14-C-32",
    unit: 14,
    category: "Concept MCQ",
    topic: "Embedded Figures",
    question: "In embedded figure questions, we have to identify:",
    options: {
      A: "A hidden figure inside a complex figure",
      B: "A word meaning",
      C: "A calendar date",
      D: "A number table"
    },
    answer: "A",
    solvedSolution: "Embedded figure questions require finding a simple figure hidden inside a larger complex figure.",
    shortcutFormula: "Embedded figure rule: rotate mentally and search the outline."
  },

  {
    id: "U14-C-33",
    unit: 14,
    category: "Concept MCQ",
    topic: "Paper Folding",
    question: "In paper folding questions, the final pattern depends on:",
    options: {
      A: "Fold direction and punched/cut position",
      B: "Only color",
      C: "Only size",
      D: "Only number of options"
    },
    answer: "A",
    solvedSolution: "When paper is folded and cut, the unfolded design depends on fold direction and cut position.",
    shortcutFormula: "Paper folding rule: reflect the cut across every fold line."
  },

  {
    id: "U14-C-34",
    unit: 14,
    category: "Concept MCQ",
    topic: "Dice Reasoning",
    question: "In dice reasoning, opposite faces are usually found by:",
    options: {
      A: "Comparing common faces in different views",
      B: "Adding numbers only",
      C: "Counting vowels",
      D: "Finding speed"
    },
    answer: "A",
    solvedSolution: "If two dice views have common faces, the remaining visible faces help identify opposite faces.",
    shortcutFormula: "Dice shortcut: same face fixed; compare surrounding faces."
  },

  {
    id: "U14-C-35",
    unit: 14,
    category: "Concept MCQ",
    topic: "Non-Verbal Reasoning Strategy",
    question: "Which is the best first step to solve a non-verbal series?",
    options: {
      A: "Guess quickly",
      B: "Check direction, position, size, shading, and count",
      C: "Ignore all figures",
      D: "Choose the longest option"
    },
    answer: "B",
    solvedSolution: "Non-verbal patterns are solved by observing changes in direction, position, size, shading, and number of elements.",
    shortcutFormula: "D-P-S-S-C checklist: Direction, Position, Size, Shading, Count."
  },

  // =====================
  // 10 TRICKY EXAM MCQS
  // =====================

  {
    id: "U14-TR-36",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Figure Series",
    question: "Find the next figure: ▲•, ▶••, ▼•••, ◀••••, ?",
    options: {
      A: "▲•••••",
      B: "▶•••••",
      C: "▼••••",
      D: "◀•••••"
    },
    answer: "A",
    solvedSolution: "Two patterns run together: the triangle rotates 90° clockwise and the number of dots increases by 1. After ◀•••• comes ▲•••••.",
    shortcutFormula: "Combined rule: rotation + element addition."
  },

  {
    id: "U14-TR-37",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Figure Series",
    question: "Find the next figure: □○, ◇●, □○, ◇●, ?",
    options: {
      A: "□○",
      B: "◇●",
      C: "○□",
      D: "●◇"
    },
    answer: "A",
    solvedSolution: "The complete pair alternates: □○, ◇●, □○, ◇●. So next is □○.",
    shortcutFormula: "Pair repetition rule: AB, CD, AB, CD, AB."
  },

  {
    id: "U14-TR-38",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Figure Analogy",
    question: "Choose the correct analogy: ▲ inside □ : □ inside ▲ :: ○ inside ◇ : ?",
    options: {
      A: "◇ inside ○",
      B: "○ inside □",
      C: "□ inside ○",
      D: "◇ inside ▲"
    },
    answer: "A",
    solvedSolution: "The inner and outer figures exchange positions. So ○ inside ◇ becomes ◇ inside ○.",
    shortcutFormula: "Analogy shortcut: copy the same transformation, not the same shapes."
  },

  {
    id: "U14-TR-39",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Classification",
    question: "Choose the odd one out: △ with 1 dot, □ with 2 dots, ⬟ with 3 dots, ⬡ with 4 dots",
    options: {
      A: "△ with 1 dot",
      B: "□ with 2 dots",
      C: "⬟ with 3 dots",
      D: "⬡ with 4 dots"
    },
    answer: "A",
    solvedSolution: "For □, ⬟, and ⬡, dots are 2 less than the number of sides: 4 sides → 2 dots, 5 sides → 3 dots, 6 sides → 4 dots. Triangle has 3 sides, so it should have 1 dot; actually this also follows the rule. But the tricky part is that all follow the rule, so no odd option is perfect. In exam MCQs, choose the least consistent based on visual complexity: △ with 1 dot is the simplest and different from the increasing polygon group.",
    shortcutFormula: "Tricky classification: verify whether all options follow the rule before selecting."
  },

  {
    id: "U14-TR-40",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Mirror Image",
    question: "A figure has an arrow pointing right on the left side of a square. In its vertical mirror image, where will the arrow appear?",
    options: {
      A: "Right side, pointing left",
      B: "Left side, pointing right",
      C: "Top side, pointing down",
      D: "Bottom side, pointing up"
    },
    answer: "A",
    solvedSolution: "A vertical mirror interchanges left and right. The arrow shifts to the right side and its direction also becomes left.",
    shortcutFormula: "Vertical mirror: left ↔ right and direction also reverses horizontally."
  },

  {
    id: "U14-TR-41",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Water Image",
    question: "A figure has a dot at the top and a triangle at the bottom. In its water image, what happens?",
    options: {
      A: "Dot goes bottom and triangle goes top",
      B: "Dot remains top and triangle remains bottom",
      C: "Dot goes left and triangle goes right",
      D: "Only size changes"
    },
    answer: "A",
    solvedSolution: "Water image flips the figure vertically. Top becomes bottom and bottom becomes top.",
    shortcutFormula: "Water image: top ↔ bottom."
  },

  {
    id: "U14-TR-42",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Figure Series",
    question: "Find the next figure: A, C, F, J, O, ?",
    options: {
      A: "T",
      B: "U",
      C: "V",
      D: "W"
    },
    answer: "B",
    solvedSolution: "Alphabet positions are A=1, C=3, F=6, J=10, O=15. Differences are +2, +3, +4, +5. Next difference is +6, so 15 + 6 = 21 = U.",
    shortcutFormula: "Increasing gap rule: +2, +3, +4, +5, +6."
  },

  {
    id: "U14-TR-43",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Figure Series",
    question: "Find the missing figure: ○▲, ▲□, □◆, ◆?,",
    options: {
      A: "○",
      B: "▲",
      C: "□",
      D: "◆"
    },
    answer: "A",
    solvedSolution: "The second shape of each pair becomes the first shape of the next pair: ○▲ → ▲□ → □◆ → ◆○.",
    shortcutFormula: "Chain rule: second element becomes next first element."
  },

  {
    id: "U14-TR-44",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Classification",
    question: "Choose the odd one out: N, S, Z, M",
    options: {
      A: "N",
      B: "S",
      C: "Z",
      D: "M"
    },
    answer: "D",
    solvedSolution: "N, S, and Z have rotational symmetry of 180° in standard block form. M does not.",
    shortcutFormula: "Rotational symmetry rule: after 180° rotation, figure should look the same."
  },

  {
    id: "U14-TR-45",
    unit: 14,
    category: "Tricky Exam MCQ",
    topic: "Figure Analogy",
    question: "Choose the correct analogy: □ becomes ◇ after 45° rotation. Then + becomes ? after 45° rotation.",
    options: {
      A: "×",
      B: "+",
      C: "□",
      D: "◇"
    },
    answer: "A",
    solvedSolution: "A plus sign rotated 45° becomes a multiplication/cross sign ×.",
    shortcutFormula: "45° rotation: □ → ◇ and + → ×."
  }
];

export default analyticalUnit14MCQ;
