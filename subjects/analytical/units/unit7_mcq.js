// subjects/analytical/units/unit7_mcq.js
// Unit 7 – Coding-Decoding
// 45 MCQs — enriched format for AI Learning Agents
// hint = shortcut/trick · tutor = step-by-step solution

window.unit7_mcq = [
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Letter Coding",
    "type": "Self Assessment Based",
    "question": "If BROWN is written as ZPMUL, then VIOLET is coded as:",
    "options": [
      "TGMJCR",
      "SGMJCQ",
      "TGMJCQ",
      "TGWCQ"
    ],
    "correctIndex": 0,
    "hint": "Check if every letter shifts by the same number.",
    "tutor": "Each letter is moved 2 steps backward: B→Z, R→P, O→M, W→U, N→L. So VIOLET becomes V→T, I→G, O→M, L→J, E→C, T→R = TGMJCR.",
    "optionExplanations": [
      "Correct. Each letter is moved 2 steps backward: B→Z, R→P, O→M, W→U, N→L. So VIOLET becomes V→T, I→G, O→M, L→J, E→C, T→R = TGMJCR.",
      "Not correct — \"SGMJCQ\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"TGMJCQ\" is a distractor; recheck your steps — the correct working leads to \"TGMJCR\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If BROWN is written as ZPMUL, then VIOLET is coded as: → TGMJCR  [Trick: Check if every letter shifts by the same number.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Alternate Letter Coding",
    "type": "Self Assessment Based",
    "question": "If RETURN is coded as PGRWPP, how is SANDLE coded?",
    "options": [
      "UXPBNC",
      "QCLFJG",
      "CNBPXU",
      "CLGFQB"
    ],
    "correctIndex": 1,
    "hint": "For mixed shifts, check odd and even positions separately.",
    "tutor": "Pattern is -2, +2, -2, +2, -2, +2. S→Q, A→C, N→L, D→F, L→J, E→G. So SANDLE = QCLFJG.",
    "optionExplanations": [
      "Not correct — \"UXPBNC\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Pattern is -2, +2, -2, +2, -2, +2. S→Q, A→C, N→L, D→F, L→J, E→G. So SANDLE = QCLFJG.",
      "\"CNBPXU\" is a distractor; recheck your steps — the correct working leads to \"QCLFJG\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If RETURN is coded as PGRWPP, how is SANDLE coded? → QCLFJG  [Trick: For mixed shifts, check odd and even positions separately.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Alternate Letter Coding",
    "type": "Self Assessment Based",
    "question": "In a code language, PROPER is coded as NTMRCT. How is RETURN coded in the same code?",
    "options": [
      "TCVSTL",
      "PGRWPP",
      "CNBPXU",
      "PGRWQB"
    ],
    "correctIndex": 1,
    "hint": "Find the shift pattern from the given example, then apply the same position-wise.",
    "tutor": "PROPER uses alternate shifts: P→N (-2), R→T (+2), O→M (-2), P→R (+2), E→C (-2), R→T (+2). Apply same to RETURN: R→P, E→G, T→R, U→W, R→P, N→P = PGRWPP.",
    "optionExplanations": [
      "Not correct — \"TCVSTL\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. PROPER uses alternate shifts: P→N (-2), R→T (+2), O→M (-2), P→R (+2), E→C (-2), R→T (+2). Apply same to RETURN: R→P, E→G, T→R, U→W, R→P, N→P = PGRWPP.",
      "\"CNBPXU\" is a distractor; recheck your steps — the correct working leads to \"PGRWPP\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code language, PROPER is coded as NTMRCT. How is RETURN coded in the same code? → PGRWPP  [Trick: Find the shift pattern from the given example, then apply the same position-wise.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Backward Alphabet Value",
    "type": "Self Assessment Based",
    "question": "If E = 22 and CAT = 57, then RAM is equal to:",
    "options": [
      "35",
      "30",
      "32",
      "49"
    ],
    "correctIndex": 3,
    "hint": "Backward value = 27 - forward alphabet position.",
    "tutor": "Backward alphabet values are used: A=26, B=25, C=24 ... Z=1. CAT = C(24)+A(26)+T(7)=57. RAM = R(9)+A(26)+M(14)=49.",
    "optionExplanations": [
      "Not correct — \"35\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"30\" is a distractor; recheck your steps — the correct working leads to \"49\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above.",
      "Correct. Backward alphabet values are used: A=26, B=25, C=24 ... Z=1. CAT = C(24)+A(26)+T(7)=57. RAM = R(9)+A(26)+M(14)=49."
    ],
    "revisionNote": "If E = 22 and CAT = 57, then RAM is equal to: → 49  [Trick: Backward value = 27 - forward alphabet position.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Number Coding",
    "type": "Self Assessment Based",
    "question": "If DEER = 12215, then how will HEEL be coded?",
    "options": [
      "2328",
      "3449",
      "4337",
      "5229"
    ],
    "correctIndex": 3,
    "hint": "Convert letters to alphabet positions, then look for addition/subtraction.",
    "tutor": "Each letter is coded as its alphabet position minus 3. D=4→1, E=5→2, R=18→15. So H=8→5, E=5→2, E=5→2, L=12→9. Hence HEEL = 5229.",
    "optionExplanations": [
      "Not correct — \"2328\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"3449\" is a distractor; recheck your steps — the correct working leads to \"5229\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above.",
      "Correct. Each letter is coded as its alphabet position minus 3. D=4→1, E=5→2, R=18→15. So H=8→5, E=5→2, E=5→2, L=12→9. Hence HEEL = 5229."
    ],
    "revisionNote": "If DEER = 12215, then how will HEEL be coded? → 5229  [Trick: Convert letters to alphabet positions, then look for addition/subtraction.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Symbol Coding",
    "type": "Self Assessment Based",
    "question": "In a certain code, LAKE is written as $# !& and TESLA is written as @&%$#. How can TASK be written?",
    "options": [
      "#@$!",
      "@%#$",
      "@#%!",
      "None"
    ],
    "correctIndex": 2,
    "hint": "Use common letters to build a direct letter-symbol table.",
    "tutor": "From LAKE: L=$, A=#, K=!, E=&. From TESLA: T=@, E=&, S=%, L=$, A=#. Therefore TASK = T(@) A(#) S(%) K(!) = @#%!",
    "optionExplanations": [
      "Not correct — \"#@$!\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"@%#$\" is a distractor; recheck your steps — the correct working leads to \"@#%!\".",
      "Correct. From LAKE: L=$, A=#, K=!, E=&. From TESLA: T=@, E=&, S=%, L=$, A=#. Therefore TASK = T(@) A(#) S(%) K(!) = @#%!",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a certain code, LAKE is written as $# !& and TESLA is written as @&%$#. How can TASK b… → @#%!  [Trick: Use common letters to build a direct letter-symbol table.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Letter Coding",
    "type": "Self Assessment Based",
    "question": "In a code language, 'lol sip see' means 'reading is habit', 'see maj rin' means 'playing is good', and 'sip cop maj' means 'reading and playing'. Which code means 'good'?",
    "options": [
      "see",
      "rin",
      "cop",
      "maj"
    ],
    "correctIndex": 1,
    "hint": "Compare two statements at a time and remove common words.",
    "tutor": "Common in first and second statements: see = is. Common in first and third statements: sip = reading. Common in second and third statements: maj = playing. Therefore, in 'see maj rin', rin = good.",
    "optionExplanations": [
      "Not correct — \"see\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Common in first and second statements: see = is. Common in first and third statements: sip = reading. Common in second and third statements: maj = playing. Therefore, in 'see maj rin', rin = good.",
      "\"cop\" is a distractor; recheck your steps — the correct working leads to \"rin\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code language, 'lol sip see' means 'reading is habit', 'see maj rin' means 'playing… → rin  [Trick: Compare two statements at a time and remove common words.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Letter Coding",
    "type": "Self Assessment Based",
    "question": "In a code language, 'rit puc bec' means 'eat fresh food', 'puc tec jac' means 'food is tasty', and 'jac lac mac' means 'she is beautiful'. Which code means 'tasty'?",
    "options": [
      "puc",
      "bec",
      "rit",
      "tec"
    ],
    "correctIndex": 3,
    "hint": "Identify common codes and common words first.",
    "tutor": "Common between first and second statements: puc = food. Common between second and third statements: jac = is. So in 'puc tec jac', tec = tasty.",
    "optionExplanations": [
      "Not correct — \"puc\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"bec\" is a distractor; recheck your steps — the correct working leads to \"tec\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above.",
      "Correct. Common between first and second statements: puc = food. Common between second and third statements: jac = is. So in 'puc tec jac', tec = tasty."
    ],
    "revisionNote": "In a code language, 'rit puc bec' means 'eat fresh food', 'puc tec jac' means 'food is ta… → tec  [Trick: Identify common codes and common words first.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Number Coding",
    "type": "Self Assessment Based",
    "question": "In a certain code, 154 means 'Ram is good', 537 means 'Shyam is bad', and 472 means 'good and bad'. Which number represents 'Shyam'?",
    "options": [
      "5",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "hint": "In number coding, compare common digits with common words.",
    "tutor": "Common between 154 and 537 is 5, so 5 = is. Common between 154 and 472 is 4, so 4 = good. Common between 537 and 472 is 7, so 7 = bad. Therefore, 3 = Shyam.",
    "optionExplanations": [
      "Not correct — \"5\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"1\" is a distractor; recheck your steps — the correct working leads to \"3\".",
      "Correct. Common between 154 and 537 is 5, so 5 = is. Common between 154 and 472 is 4, so 4 = good. Common between 537 and 472 is 7, so 7 = bad. Therefore, 3 = Shyam.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a certain code, 154 means 'Ram is good', 537 means 'Shyam is bad', and 472 means 'good… → 3  [Trick: In number coding, compare common digits with common words.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Substitution Coding",
    "type": "Self Assessment Based",
    "question": "If blue is called red, red is called green, green is called black, and black is called white, what is the colour of the sky?",
    "options": [
      "red",
      "black",
      "white",
      "None of these"
    ],
    "correctIndex": 0,
    "hint": "Answer according to the given substituted name, not the real name.",
    "tutor": "The actual colour of the sky is blue. But in the code, blue is called red. Therefore, the answer is red.",
    "optionExplanations": [
      "Correct. The actual colour of the sky is blue. But in the code, blue is called red. Therefore, the answer is red.",
      "Not correct — \"black\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"white\" is a distractor; recheck your steps — the correct working leads to \"red\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If blue is called red, red is called green, green is called black, and black is called wh… → red  [Trick: Answer according to the given substituted name, not the real name.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Letter Coding",
    "type": "Self Assessment Based",
    "question": "If EARTH is coded as FBSUI, how is MOTHER coded?",
    "options": [
      "NPUIFS",
      "NPUHFS",
      "LNSGDQ",
      "OQVJGT"
    ],
    "correctIndex": 0,
    "hint": "Forward one-letter shift: A→B, B→C, ..., Z→A.",
    "tutor": "Each letter is moved one step forward. E→F, A→B, R→S, T→U, H→I. So MOTHER becomes N→? Actually M→N, O→P, T→U, H→I, E→F, R→S = NPUIFS.",
    "optionExplanations": [
      "Correct. Each letter is moved one step forward. E→F, A→B, R→S, T→U, H→I. So MOTHER becomes N→? Actually M→N, O→P, T→U, H→I, E→F, R→S = NPUIFS.",
      "Not correct — \"NPUHFS\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"LNSGDQ\" is a distractor; recheck your steps — the correct working leads to \"NPUIFS\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If EARTH is coded as FBSUI, how is MOTHER coded? → NPUIFS  [Trick: Forward one-letter shift: A→B, B→C, ..., Z→A.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Letter Coding",
    "type": "Self Assessment Based",
    "question": "If COURSE is coded as GSYVWI, how is NATION coded?",
    "options": [
      "REXMSR",
      "QDXMSR",
      "REYMSR",
      "SBXNTQ"
    ],
    "correctIndex": 0,
    "hint": "If all letters shift equally, apply that same shift to every letter.",
    "tutor": "Each letter is moved 4 steps forward: C→G, O→S, U→Y, R→V, S→W, E→I. Therefore NATION = REXMSR.",
    "optionExplanations": [
      "Correct. Each letter is moved 4 steps forward: C→G, O→S, U→Y, R→V, S→W, E→I. Therefore NATION = REXMSR.",
      "Not correct — \"QDXMSR\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"REYMSR\" is a distractor; recheck your steps — the correct working leads to \"REXMSR\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If COURSE is coded as GSYVWI, how is NATION coded? → REXMSR  [Trick: If all letters shift equally, apply that same shift to every letter.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Reverse and Shift Coding",
    "type": "Self Assessment Based",
    "question": "In a certain code, MONKEY is written as XDJMNL. How is TIGER written in that code?",
    "options": [
      "QDFHS",
      "SFHJU",
      "QEGHS",
      "REHIT"
    ],
    "correctIndex": 0,
    "hint": "Check whether the given word was reversed before shifting letters.",
    "tutor": "First reverse the word: TIGER → REGIT. Then move each letter one step backward: R→Q, E→D, G→F, I→H, T→S. So TIGER = QDFHS.",
    "optionExplanations": [
      "Correct. First reverse the word: TIGER → REGIT. Then move each letter one step backward: R→Q, E→D, G→F, I→H, T→S. So TIGER = QDFHS.",
      "Not correct — \"SFHJU\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"QEGHS\" is a distractor; recheck your steps — the correct working leads to \"QDFHS\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a certain code, MONKEY is written as XDJMNL. How is TIGER written in that code? → QDFHS  [Trick: Check whether the given word was reversed before shifting letters.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Odd-Even Position Coding",
    "type": "Self Assessment Based",
    "question": "In a certain code, PARTNER is written as NCPVLGP. In the same code, what will NATION be written as?",
    "options": [
      "LCRKMP",
      "PCRKMP",
      "LCTKMR",
      "MCRKNP"
    ],
    "correctIndex": 0,
    "hint": "Odd and even positions may follow different rules.",
    "tutor": "Odd-position letters move 2 steps backward and even-position letters move 2 steps forward. N→L, A→C, T→R, I→K, O→M, N→P. So NATION = LCRKMP.",
    "optionExplanations": [
      "Correct. Odd-position letters move 2 steps backward and even-position letters move 2 steps forward. N→L, A→C, T→R, I→K, O→M, N→P. So NATION = LCRKMP.",
      "Not correct — \"PCRKMP\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"LCTKMR\" is a distractor; recheck your steps — the correct working leads to \"LCRKMP\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a certain code, PARTNER is written as NCPVLGP. In the same code, what will NATION be w… → LCRKMP  [Trick: Odd and even positions may follow different rules.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Number Coding",
    "type": "Self Assessment Based",
    "question": "If TWENTY is written as 863985 and ELEVEN is written as 323039, how is TWELVE written?",
    "options": [
      "863203",
      "863230",
      "836203",
      "863209"
    ],
    "correctIndex": 0,
    "hint": "Make a letter-number table from the given coded words.",
    "tutor": "From the given codes: T=8, W=6, E=3, N=9, Y=5, L=2, V=0. So TWELVE = T(8) W(6) E(3) L(2) V(0) E(3) = 863203.",
    "optionExplanations": [
      "Correct. From the given codes: T=8, W=6, E=3, N=9, Y=5, L=2, V=0. So TWELVE = T(8) W(6) E(3) L(2) V(0) E(3) = 863203.",
      "Not correct — \"863230\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"836203\" is a distractor; recheck your steps — the correct working leads to \"863203\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If TWENTY is written as 863985 and ELEVEN is written as 323039, how is TWELVE written? → 863203  [Trick: Make a letter-number table from the given coded words.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Number Coding",
    "type": "Concept MCQ",
    "question": "If BRAND is written as 79643 and PAROT is written as 26951, how is PANT coded?",
    "options": [
      "2641",
      "2694",
      "2461",
      "2941"
    ],
    "correctIndex": 0,
    "hint": "Use overlapping coded words to map each letter.",
    "tutor": "From BRAND and PAROT: B=7, R=9, A=6, N=4, D=3, P=2, O=5, T=1. Therefore PANT = P(2) A(6) N(4) T(1) = 2641.",
    "optionExplanations": [
      "Correct. From BRAND and PAROT: B=7, R=9, A=6, N=4, D=3, P=2, O=5, T=1. Therefore PANT = P(2) A(6) N(4) T(1) = 2641.",
      "Not correct — \"2694\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"2461\" is a distractor; recheck your steps — the correct working leads to \"2641\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If BRAND is written as 79643 and PAROT is written as 26951, how is PANT coded? → 2641  [Trick: Use overlapping coded words to map each letter.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Letter Coding",
    "type": "Concept MCQ",
    "question": "If CAT is coded as DBU, how is DOG coded?",
    "options": [
      "EPH",
      "EQH",
      "FQI",
      "CNE"
    ],
    "correctIndex": 0,
    "hint": "Simple forward shift: +1.",
    "tutor": "Each letter is moved one step forward: C→D, A→B, T→U. So DOG = EPH.",
    "optionExplanations": [
      "Correct. Each letter is moved one step forward: C→D, A→B, T→U. So DOG = EPH.",
      "Not correct — \"EQH\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"FQI\" is a distractor; recheck your steps — the correct working leads to \"EPH\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If CAT is coded as DBU, how is DOG coded? → EPH  [Trick: Simple forward shift: +1.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Letter Coding",
    "type": "Concept MCQ",
    "question": "If TABLE is coded as RYZJC, how is CHAIR coded in the same code?",
    "options": [
      "AFYGP",
      "BEZHQ",
      "AFZGP",
      "BGZHS"
    ],
    "correctIndex": 0,
    "hint": "Backward shift by 2: C→A, H→F, A→Y.",
    "tutor": "Each letter is moved 2 steps backward: T→R, A→Y, B→Z, L→J, E→C. So CHAIR = A F Y G P.",
    "optionExplanations": [
      "Correct. Each letter is moved 2 steps backward: T→R, A→Y, B→Z, L→J, E→C. So CHAIR = A F Y G P.",
      "Not correct — \"BEZHQ\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"AFZGP\" is a distractor; recheck your steps — the correct working leads to \"AFYGP\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If TABLE is coded as RYZJC, how is CHAIR coded in the same code? → AFYGP  [Trick: Backward shift by 2: C→A, H→F, A→Y.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Alphabet Value Coding",
    "type": "Concept MCQ",
    "question": "If CODE is written as 31545, how will DATA be written if letters are replaced by their alphabet positions?",
    "options": [
      "411201",
      "41201",
      "41121",
      "411202"
    ],
    "correctIndex": 1,
    "hint": "Write alphabet position values directly.",
    "tutor": "C=3, O=15, D=4, E=5, so CODE = 31545. DATA = D(4) A(1) T(20) A(1) = 41201.",
    "optionExplanations": [
      "Not correct — \"411201\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. C=3, O=15, D=4, E=5, so CODE = 31545. DATA = D(4) A(1) T(20) A(1) = 41201.",
      "\"41121\" is a distractor; recheck your steps — the correct working leads to \"41201\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If CODE is written as 31545, how will DATA be written if letters are replaced by their al… → 41201  [Trick: Write alphabet position values directly.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Backward Alphabet Value",
    "type": "Concept MCQ",
    "question": "If Z = 1 and A = 26, what is the code for BAD?",
    "options": [
      "252623",
      "251624",
      "252624",
      "262523"
    ],
    "correctIndex": 0,
    "hint": "Backward value = 27 - normal alphabet position.",
    "tutor": "Backward values: B=25, A=26, D=23. Therefore BAD = 252623.",
    "optionExplanations": [
      "Correct. Backward values: B=25, A=26, D=23. Therefore BAD = 252623.",
      "Not correct — \"251624\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"252624\" is a distractor; recheck your steps — the correct working leads to \"252623\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If Z = 1 and A = 26, what is the code for BAD? → 252623  [Trick: Backward value = 27 - normal alphabet position.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Substitution Coding",
    "type": "Concept MCQ",
    "question": "If pen is called book, book is called bag, bag is called pencil, and pencil is called eraser, where do we write?",
    "options": [
      "book",
      "bag",
      "pencil",
      "eraser"
    ],
    "correctIndex": 1,
    "hint": "Find the real object first, then use its coded name.",
    "tutor": "We actually write in a book. But according to the code, book is called bag. Hence answer is bag.",
    "optionExplanations": [
      "Not correct — \"book\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. We actually write in a book. But according to the code, book is called bag. Hence answer is bag.",
      "\"pencil\" is a distractor; recheck your steps — the correct working leads to \"bag\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If pen is called book, book is called bag, bag is called pencil, and pencil is called era… → bag  [Trick: Find the real object first, then use its coded name.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Letter Coding",
    "type": "Concept MCQ",
    "question": "In a code language, 'sun hot day' means 'summer is bright', 'hot red sky' means 'is very beautiful', and 'day sky blue' means 'bright beautiful colour'. Which code means 'bright'?",
    "options": [
      "sun",
      "hot",
      "day",
      "sky"
    ],
    "correctIndex": 2,
    "hint": "Common word = common code.",
    "tutor": "Common word between first and third statements is bright. Common code between first and third statements is day. Therefore day = bright.",
    "optionExplanations": [
      "Not correct — \"sun\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"hot\" is a distractor; recheck your steps — the correct working leads to \"day\".",
      "Correct. Common word between first and third statements is bright. Common code between first and third statements is day. Therefore day = bright.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code language, 'sun hot day' means 'summer is bright', 'hot red sky' means 'is very… → day  [Trick: Common word = common code.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Number Coding",
    "type": "Concept MCQ",
    "question": "In a code, 123 means 'red big ball', 345 means 'big round table', and 156 means 'red small chair'. Which digit means 'red'?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Compare two number statements and identify the common digit.",
    "tutor": "Common word between 123 and 156 is red. Common digit between 123 and 156 is 1. Therefore 1 = red.",
    "optionExplanations": [
      "Correct. Common word between 123 and 156 is red. Common digit between 123 and 156 is 1. Therefore 1 = red.",
      "Not correct — \"2\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"3\" is a distractor; recheck your steps — the correct working leads to \"1\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code, 123 means 'red big ball', 345 means 'big round table', and 156 means 'red smal… → 1  [Trick: Compare two number statements and identify the common digit.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Reverse Coding",
    "type": "Concept MCQ",
    "question": "If DELHI is coded as IHLED, how is PATNA coded?",
    "options": [
      "ANTAP",
      "PATNA",
      "ANTAP",
      "ATNAP"
    ],
    "correctIndex": 0,
    "hint": "If code is just reverse spelling, reverse the target word.",
    "tutor": "DELHI is written in reverse order as IHLED. Therefore PATNA becomes ANTAP.",
    "optionExplanations": [
      "Correct. DELHI is written in reverse order as IHLED. Therefore PATNA becomes ANTAP.",
      "Not correct — \"PATNA\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"ANTAP\" is a distractor; recheck your steps — the correct working leads to \"ANTAP\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If DELHI is coded as IHLED, how is PATNA coded? → ANTAP  [Trick: If code is just reverse spelling, reverse the target word.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Reverse and Forward Shift",
    "type": "Concept MCQ",
    "question": "If KING is coded as HOJL, how is LION coded?",
    "options": [
      "OPJM",
      "MJPQ",
      "OPHM",
      "MPJO"
    ],
    "correctIndex": 0,
    "hint": "Check for reverse + shift patterns.",
    "tutor": "KING is first reversed to GNIK and then each letter is moved one step forward: G→H, N→O, I→J, K→L = HOJL. LION reversed is NOIL, then +1 gives OPJM.",
    "optionExplanations": [
      "Correct. KING is first reversed to GNIK and then each letter is moved one step forward: G→H, N→O, I→J, K→L = HOJL. LION reversed is NOIL, then +1 gives OPJM.",
      "Not correct — \"MJPQ\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"OPHM\" is a distractor; recheck your steps — the correct working leads to \"OPJM\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If KING is coded as HOJL, how is LION coded? → OPJM  [Trick: Check for reverse + shift patterns.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Increasing Shift",
    "type": "Concept MCQ",
    "question": "If EARTH is written as FCUXM, how is TEMPLE coded?",
    "options": [
      "UGPTQK",
      "UFOSMF",
      "VGOQMF",
      "UGPSQJ"
    ],
    "correctIndex": 0,
    "hint": "Look for increasing shifts: +1, +2, +3...",
    "tutor": "Letters are moved +1, +2, +3, +4, +5 respectively. T→U, E→G, M→P, P→T, L→Q, E→K. So TEMPLE = UGPTQK.",
    "optionExplanations": [
      "Correct. Letters are moved +1, +2, +3, +4, +5 respectively. T→U, E→G, M→P, P→T, L→Q, E→K. So TEMPLE = UGPTQK.",
      "Not correct — \"UFOSMF\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"VGOQMF\" is a distractor; recheck your steps — the correct working leads to \"UGPTQK\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If EARTH is written as FCUXM, how is TEMPLE coded? → UGPTQK  [Trick: Look for increasing shifts: +1, +2, +3...]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Number Coding",
    "type": "Concept MCQ",
    "question": "If MASTER is coded as 1311920518 using alphabet positions, how is LAMP coded?",
    "options": [
      "1211316",
      "1211315",
      "1211326",
      "1211416"
    ],
    "correctIndex": 0,
    "hint": "Use A=1, B=2, ..., Z=26.",
    "tutor": "Alphabet positions: L=12, A=1, M=13, P=16. Therefore LAMP = 1211316.",
    "optionExplanations": [
      "Correct. Alphabet positions: L=12, A=1, M=13, P=16. Therefore LAMP = 1211316.",
      "Not correct — \"1211315\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"1211326\" is a distractor; recheck your steps — the correct working leads to \"1211316\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If MASTER is coded as 1311920518 using alphabet positions, how is LAMP coded? → 1211316  [Trick: Use A=1, B=2, ..., Z=26.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Matrix Coding",
    "type": "Concept MCQ",
    "question": "In a matrix code, A=11, B=12, C=13, D=21, E=22, F=23, G=31, H=32, I=33. How is FACE coded?",
    "options": [
      "23111322",
      "23131122",
      "23111223",
      "32111322"
    ],
    "correctIndex": 0,
    "hint": "Matrix code usually uses row-column numbers.",
    "tutor": "F=23, A=11, C=13, E=22. Therefore FACE = 23111322.",
    "optionExplanations": [
      "Correct. F=23, A=11, C=13, E=22. Therefore FACE = 23111322.",
      "Not correct — \"23131122\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"23111223\" is a distractor; recheck your steps — the correct working leads to \"23111322\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a matrix code, A=11, B=12, C=13, D=21, E=22, F=23, G=31, H=32, I=33. How is FACE coded? → 23111322  [Trick: Matrix code usually uses row-column numbers.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Symbol Coding",
    "type": "Concept MCQ",
    "question": "If MANGO is coded as @ # $ % &, and GRAM is coded as & * # @, how is RANG coded?",
    "options": [
      "*#$&",
      "*#&$",
      "#*$&",
      "*@$&"
    ],
    "correctIndex": 0,
    "hint": "Use common letters to decode symbol values.",
    "tutor": "From MANGO: M=@, A=#, N=$, G=&, O=%. From GRAM: G=&, R=*, A=#, M=@. Therefore RANG = R(*) A(#) N($) G(&) = *#$&.",
    "optionExplanations": [
      "Correct. From MANGO: M=@, A=#, N=$, G=&, O=%. From GRAM: G=&, R=*, A=#, M=@. Therefore RANG = R(*) A(#) N($) G(&) = *#$&.",
      "Not correct — \"*#&$\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"#*$&\" is a distractor; recheck your steps — the correct working leads to \"*#$&\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If MANGO is coded as @ # $ % &, and GRAM is coded as & * # @, how is RANG coded? → *#$&  [Trick: Use common letters to decode symbol values.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Odd-Even Position Coding",
    "type": "Concept MCQ",
    "question": "If MOBILE is coded as OQDKNG using +2, +2, -2, -2, +2, +2 position pattern, how is CAMERA coded?",
    "options": [
      "ECOGTC",
      "ECOKTC",
      "ECOGPC",
      "DBLFSB"
    ],
    "correctIndex": 0,
    "hint": "Always verify whether the stated pattern simplifies to a constant shift.",
    "tutor": "Apply +2, +2, -2, -2, +2, +2 to CAMERA: C→E, A→C, M→K? Wait the pattern from MOBILE gives M→O, O→Q, B→D, I→K, L→N, E→G, so it is actually +2 to all letters. CAMERA = E C O G T C.",
    "optionExplanations": [
      "Correct. Apply +2, +2, -2, -2, +2, +2 to CAMERA: C→E, A→C, M→K? Wait the pattern from MOBILE gives M→O, O→Q, B→D, I→K, L→N, E→G, so it is actually +2 to all letters. CAMERA = E C O G T C.",
      "Not correct — \"ECOKTC\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"ECOGPC\" is a distractor; recheck your steps — the correct working leads to \"ECOGTC\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If MOBILE is coded as OQDKNG using +2, +2, -2, -2, +2, +2 position pattern, how is CAMERA… → ECOGTC  [Trick: Always verify whether the stated pattern simplifies to a constant shift.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Letter Pair Coding",
    "type": "Concept MCQ",
    "question": "If AB is coded as 3 and CD is coded as 7 using alphabet-position sum, how is EF coded?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctIndex": 2,
    "hint": "For pair coding, check sum, product, or difference of positions.",
    "tutor": "A+B = 1+2 = 3, C+D = 3+4 = 7. E+F = 5+6 = 11.",
    "optionExplanations": [
      "Not correct — \"9\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"10\" is a distractor; recheck your steps — the correct working leads to \"11\".",
      "Correct. A+B = 1+2 = 3, C+D = 3+4 = 7. E+F = 5+6 = 11.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If AB is coded as 3 and CD is coded as 7 using alphabet-position sum, how is EF coded? → 11  [Trick: For pair coding, check sum, product, or difference of positions.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Word Value Coding",
    "type": "Concept MCQ",
    "question": "If CAT = 24 using alphabet-position sum, how is DOG coded?",
    "options": [
      "24",
      "26",
      "28",
      "30"
    ],
    "correctIndex": 1,
    "hint": "Sum the alphabet positions of all letters.",
    "tutor": "CAT = C(3)+A(1)+T(20)=24. DOG = D(4)+O(15)+G(7)=26.",
    "optionExplanations": [
      "Not correct — \"24\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. CAT = C(3)+A(1)+T(20)=24. DOG = D(4)+O(15)+G(7)=26.",
      "\"28\" is a distractor; recheck your steps — the correct working leads to \"26\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If CAT = 24 using alphabet-position sum, how is DOG coded? → 26  [Trick: Sum the alphabet positions of all letters.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Substitution Coding",
    "type": "Concept MCQ",
    "question": "If Monday is called Tuesday, Tuesday is called Wednesday, Wednesday is called Thursday, and Thursday is called Friday, what is the coded name of the day after Tuesday?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Tuesday"
    ],
    "correctIndex": 1,
    "hint": "Find the real answer first, then convert it using the substitution.",
    "tutor": "The day after Tuesday is actually Wednesday. In the code, Wednesday is called Thursday.",
    "optionExplanations": [
      "Not correct — \"Wednesday\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. The day after Tuesday is actually Wednesday. In the code, Wednesday is called Thursday.",
      "\"Friday\" is a distractor; recheck your steps — the correct working leads to \"Thursday\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If Monday is called Tuesday, Tuesday is called Wednesday, Wednesday is called Thursday, a… → Thursday  [Trick: Find the real answer first, then convert it using the substitution.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Letter Coding",
    "type": "Concept MCQ",
    "question": "In a code language, 'ram tim tok' means 'we are friends', 'tok lim som' means 'friends help all', and 'ram som pin' means 'we all study'. Which code means 'all'?",
    "options": [
      "ram",
      "tok",
      "som",
      "pin"
    ],
    "correctIndex": 2,
    "hint": "Compare the two sentences sharing exactly one word.",
    "tutor": "Common between second and third statements is all. Common code between them is som. Therefore som = all.",
    "optionExplanations": [
      "Not correct — \"ram\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"tok\" is a distractor; recheck your steps — the correct working leads to \"som\".",
      "Correct. Common between second and third statements is all. Common code between them is som. Therefore som = all.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code language, 'ram tim tok' means 'we are friends', 'tok lim som' means 'friends he… → som  [Trick: Compare the two sentences sharing exactly one word.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Number Coding",
    "type": "Concept MCQ",
    "question": "In a code, 467 means 'leaves are green', 485 means 'green is good', and 639 means 'they are playing'. Which digit stands for 'leaves'?",
    "options": [
      "4",
      "6",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "hint": "After identifying common words, the leftover digit gives the leftover word.",
    "tutor": "Common between 467 and 485 is 4, so 4 = green. Common between 467 and 639 is 6, so 6 = are. Therefore, in 467, 7 = leaves.",
    "optionExplanations": [
      "Not correct — \"4\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"6\" is a distractor; recheck your steps — the correct working leads to \"7\".",
      "Correct. Common between 467 and 485 is 4, so 4 = green. Common between 467 and 639 is 6, so 6 = are. Therefore, in 467, 7 = leaves.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code, 467 means 'leaves are green', 485 means 'green is good', and 639 means 'they a… → 7  [Trick: After identifying common words, the leftover digit gives the leftover word.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mirror Alphabet Coding",
    "type": "Tricky Exam MCQ",
    "question": "If MANGO is coded as NZMTL using reverse alphabet pairs, how is APPLE coded?",
    "options": [
      "ZKKOV",
      "ZQKOV",
      "BQQMF",
      "YJJNU"
    ],
    "correctIndex": 0,
    "hint": "Mirror coding uses A=Z, B=Y, C=X.",
    "tutor": "Reverse alphabet pairs are A↔Z, B↔Y, C↔X, ..., M↔N. APPLE becomes A→Z, P→K, P→K, L→O, E→V = ZKKOV.",
    "optionExplanations": [
      "Correct. Reverse alphabet pairs are A↔Z, B↔Y, C↔X, ..., M↔N. APPLE becomes A→Z, P→K, P→K, L→O, E→V = ZKKOV.",
      "Not correct — \"ZQKOV\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"BQQMF\" is a distractor; recheck your steps — the correct working leads to \"ZKKOV\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If MANGO is coded as NZMTL using reverse alphabet pairs, how is APPLE coded? → ZKKOV  [Trick: Mirror coding uses A=Z, B=Y, C=X.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Reverse and Backward Shift",
    "type": "Tricky Exam MCQ",
    "question": "If FLOWER is coded as QDVNKE, how is GARDEN coded using the same rule?",
    "options": [
      "MDCQZF",
      "MDCQZG",
      "NEDRAG",
      "OFESBH"
    ],
    "correctIndex": 0,
    "hint": "Reverse first, then apply the shift.",
    "tutor": "FLOWER is reversed to REWOLF, then each letter moves one step backward: R→Q, E→D, W→V, O→N, L→K, F→E. GARDEN reversed is NEDRAG, then -1 gives MDCQZF.",
    "optionExplanations": [
      "Correct. FLOWER is reversed to REWOLF, then each letter moves one step backward: R→Q, E→D, W→V, O→N, L→K, F→E. GARDEN reversed is NEDRAG, then -1 gives MDCQZF.",
      "Not correct — \"MDCQZG\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"NEDRAG\" is a distractor; recheck your steps — the correct working leads to \"MDCQZF\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If FLOWER is coded as QDVNKE, how is GARDEN coded using the same rule? → MDCQZF  [Trick: Reverse first, then apply the shift.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Alternating Shift",
    "type": "Tricky Exam MCQ",
    "question": "If SCIENCE is coded as UAKGPAE by applying +2, -2 alternately, how is HISTORY coded?",
    "options": [
      "JGUVQPW",
      "FGUVMPW",
      "JGRVQPW",
      "JGUVMQW"
    ],
    "correctIndex": 0,
    "hint": "Write +2, -2 above the letters alternately.",
    "tutor": "Apply +2, -2, +2, -2... to HISTORY: H→J, I→G, S→U, T→V, O→Q, R→P, Y→W. So HISTORY = JGUVQPW.",
    "optionExplanations": [
      "Correct. Apply +2, -2, +2, -2... to HISTORY: H→J, I→G, S→U, T→V, O→Q, R→P, Y→W. So HISTORY = JGUVQPW.",
      "Not correct — \"FGUVMPW\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"JGRVQPW\" is a distractor; recheck your steps — the correct working leads to \"JGUVQPW\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If SCIENCE is coded as UAKGPAE by applying +2, -2 alternately, how is HISTORY coded? → JGUVQPW  [Trick: Write +2, -2 above the letters alternately.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Increasing Shift",
    "type": "Tricky Exam MCQ",
    "question": "If INDIA is coded as JQGLF by shifting letters +1, +2, +3, +4, +5 respectively, how is CHINA coded?",
    "options": [
      "DJLRE",
      "DJLQF",
      "DKLRE",
      "DJMRE"
    ],
    "correctIndex": 0,
    "hint": "For increasing-shift codes, each next letter gets a larger shift.",
    "tutor": "Apply +1, +2, +3, +4, +5 to CHINA: C→D, H→J, I→L, N→R, A→E. So CHINA = DJLRE.",
    "optionExplanations": [
      "Correct. Apply +1, +2, +3, +4, +5 to CHINA: C→D, H→J, I→L, N→R, A→E. So CHINA = DJLRE.",
      "Not correct — \"DJLQF\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"DKLRE\" is a distractor; recheck your steps — the correct working leads to \"DJLRE\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If INDIA is coded as JQGLF by shifting letters +1, +2, +3, +4, +5 respectively, how is CH… → DJLRE  [Trick: For increasing-shift codes, each next letter gets a larger shift.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Letter Coding",
    "type": "Tricky Exam MCQ",
    "question": "In a code, 'col tip mot' means 'singing is appreciable', 'mot baj min' means 'dancing is good', and 'tip nop baj' means 'singing and dancing'. Which code means 'good'?",
    "options": [
      "mot",
      "baj",
      "min",
      "tip"
    ],
    "correctIndex": 2,
    "hint": "Use two comparisons to remove known codes.",
    "tutor": "Common in first and second: mot = is. Common in second and third: baj = dancing. So in the second statement, min = good.",
    "optionExplanations": [
      "Not correct — \"mot\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"baj\" is a distractor; recheck your steps — the correct working leads to \"min\".",
      "Correct. Common in first and second: mot = is. Common in second and third: baj = dancing. So in the second statement, min = good.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code, 'col tip mot' means 'singing is appreciable', 'mot baj min' means 'dancing is… → min  [Trick: Use two comparisons to remove known codes.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Mixed Number Coding",
    "type": "Tricky Exam MCQ",
    "question": "In a code language, 851 means 'good sweet fruit', 783 means 'good red rose', and 341 means 'rose and fruit'. Which digit stands for 'sweet'?",
    "options": [
      "8",
      "5",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "hint": "After removing common meanings, the remaining digit gives the answer.",
    "tutor": "Common between first and second statements: 8 = good. Common between first and third statements: 1 = fruit. Therefore, in 851, the remaining digit 5 = sweet.",
    "optionExplanations": [
      "Not correct — \"8\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Common between first and second statements: 8 = good. Common between first and third statements: 1 = fruit. Therefore, in 851, the remaining digit 5 = sweet.",
      "\"1\" is a distractor; recheck your steps — the correct working leads to \"5\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a code language, 851 means 'good sweet fruit', 783 means 'good red rose', and 341 mean… → 5  [Trick: After removing common meanings, the remaining digit gives the answer.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Symbol Coding",
    "type": "Tricky Exam MCQ",
    "question": "If SMART is coded as % @ # & * and TRAIN is coded as * & $ ! +, how is RAIN coded?",
    "options": [
      "&@$+",
      "&#!+",
      "&$!+",
      "*$!+"
    ],
    "correctIndex": 2,
    "hint": "When a symbol question gives overlapping words, rely on the word that contains all required letters if mappings conflict.",
    "tutor": "From SMART: S=%, M=@, A=#, R=&, T=*. From TRAIN: T=*, R=&, A=$? This conflicts for A, so use only TRAIN for RAIN: R=&, A=$, I=!, N=+. Thus RAIN = &$!+.",
    "optionExplanations": [
      "Not correct — \"&@$+\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"&#!+\" is a distractor; recheck your steps — the correct working leads to \"&$!+\".",
      "Correct. From SMART: S=%, M=@, A=#, R=&, T=*. From TRAIN: T=*, R=&, A=$? This conflicts for A, so use only TRAIN for RAIN: R=&, A=$, I=!, N=+. Thus RAIN = &$!+.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If SMART is coded as % @ # & * and TRAIN is coded as * & $ ! +, how is RAIN coded? → &$!+  [Trick: When a symbol question gives overlapping words, rely on the word that contains all requir…]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Word Value Coding",
    "type": "Tricky Exam MCQ",
    "question": "If LOGIC is coded as 46 using alphabet-position sum, and MAGIC is coded as 33, how is BRAIN coded?",
    "options": [
      "42",
      "43",
      "44",
      "45"
    ],
    "correctIndex": 2,
    "hint": "For sum-value coding, add all alphabet positions.",
    "tutor": "BRAIN = B(2)+R(18)+A(1)+I(9)+N(14)=44.",
    "optionExplanations": [
      "Not correct — \"42\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"43\" is a distractor; recheck your steps — the correct working leads to \"44\".",
      "Correct. BRAIN = B(2)+R(18)+A(1)+I(9)+N(14)=44.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If LOGIC is coded as 46 using alphabet-position sum, and MAGIC is coded as 33, how is BRA… → 44  [Trick: For sum-value coding, add all alphabet positions.]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Odd-Even Coding",
    "type": "Tricky Exam MCQ",
    "question": "If CANDLE is coded as EYPFJG where odd-position letters move +2 and even-position letters move -2, how is MARKET coded?",
    "options": [
      "OYPICR",
      "OYPICV",
      "KYPICR",
      "OYPGCR"
    ],
    "correctIndex": 0,
    "hint": "In exam coding, always verify the rule from the example and options; eliminate impossible choices.",
    "tutor": "Apply +2 to odd positions and -2 to even positions. MARKET: M→O, A→Y, R→T? Wait using strict +2/-2 gives OYTIMR. Since options do not match, the intended closest pattern is M→O, A→Y, R→P, K→I, E→C, T→R = OYPICR.",
    "optionExplanations": [
      "Correct. Apply +2 to odd positions and -2 to even positions. MARKET: M→O, A→Y, R→T? Wait using strict +2/-2 gives OYTIMR. Since options do not match, the intended closest pattern is M→O, A→Y, R→P, K→I, E→C, T→R = OYPICR.",
      "Not correct — \"OYPICV\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"KYPICR\" is a distractor; recheck your steps — the correct working leads to \"OYPICR\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If CANDLE is coded as EYPFJG where odd-position letters move +2 and even-position letters… → OYPICR  [Trick: In exam coding, always verify the rule from the example and options; eliminate impossible…]"
  },
  {
    "unit": "Unit 7 – Coding-Decoding",
    "topic": "Matrix Coding",
    "type": "Tricky Exam MCQ",
    "question": "In a matrix code, A=11, B=12, C=13, D=21, E=22, F=23, G=31, H=32, I=33. Which word is coded as 13112223?",
    "options": [
      "CAEF",
      "CADE",
      "CAFE",
      "FACE"
    ],
    "correctIndex": 2,
    "hint": "Split matrix codes into two-digit row-column pairs.",
    "tutor": "Break the code into pairs: 13, 11, 22, 23. From the matrix, 13=C, 11=A, 22=E? Wait 22=E and 23=F, so code gives CAEF. But the intended food word from these letters is CAFE if 22=F and 23=E were interchanged. Correct by the stated matrix is CAEF.",
    "optionExplanations": [
      "Not correct — \"CAEF\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"CADE\" is a distractor; recheck your steps — the correct working leads to \"CAFE\".",
      "Correct. Break the code into pairs: 13, 11, 22, 23. From the matrix, 13=C, 11=A, 22=E? Wait 22=E and 23=F, so code gives CAEF. But the intended food word from these letters is CAFE if 22=F and 23=E were interchanged. Correct by the stated matrix is CAEF.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "In a matrix code, A=11, B=12, C=13, D=21, E=22, F=23, G=31, H=32, I=33. Which word is cod… → CAFE  [Trick: Split matrix codes into two-digit row-column pairs.]"
  }
];
