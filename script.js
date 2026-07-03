// ======================================================
//  CLOUD COMPUTING QUICK TEST APP
//  Supports Unit 1 to Unit 14 MCQs + optional long answers
// ======================================================

const TOTAL_UNITS = 14;
const QUICK_TEST_LENGTH = 10;

// ======================================================
//  BUILD MASTER QUESTION ARRAYS FROM UNIT FILES
// ======================================================

function normalizeQuestion(q, unitNo, type) {
  const normalized = { ...q };

  if (!normalized.unit) {
    normalized.unit = `Unit ${unitNo}`;
  }

  if (type === "mcq") {
    normalized.options = Array.isArray(normalized.options) ? normalized.options : [];
    normalized.correctIndex = getCorrectIndex(normalized);
    normalized.explanation = normalized.explanation || "Review this concept from the unit notes.";
  }

  return normalized;
}

function getCorrectIndex(q) {
  if (Number.isInteger(q.correctIndex)) return q.correctIndex;
  if (Number.isInteger(q.answer)) return q.answer;

  if (typeof q.answer === "string") {
    const answer = q.answer.trim();
    const letters = ["A", "B", "C", "D", "E", "F"];
    const letterIndex = letters.indexOf(answer.toUpperCase());
    if (letterIndex !== -1) return letterIndex;

    const optionIndex = (q.options || []).findIndex(
      (opt) => String(opt).trim().toLowerCase() === answer.toLowerCase()
    );
    if (optionIndex !== -1) return optionIndex;
  }

  return 0;
}

function collectQuestions(kind) {
  const all = [];

  for (let i = 1; i <= TOTAL_UNITS; i++) {
    const unitArray = window[`unit${i}_${kind}`] || [];
    unitArray.forEach((q) => all.push(normalizeQuestion(q, i, kind)));
  }

  return all;
}

const mcqQuestions = collectQuestions("mcq");
const longQuestions = collectQuestions("long");

// ======================================================
//  STATE
// ======================================================

let currentChapter = "all";
let currentMcqIndex = 0;
let currentLongIndex = 0;

let mcqScore = 0;
let mcqAttempts = 0;
let mcqAnswered = false;

let filteredMcqIndices = [];
let filteredLongIndices = [];

let practiceOrder = [];
let practicePosition = 0;

let isQuickTest = false;
let quickOrder = [];
let quickTotal = 0;
let quickPosition = 0;

// ======================================================
//  ELEMENT REFERENCES
// ======================================================

const btnMcqMode = document.getElementById("btn-mcq");
const btnLongMode = document.getElementById("btn-long");

const mcqSection = document.getElementById("mcq-section");
const longSection = document.getElementById("long-section");

const mcqUnitEl = document.getElementById("mcq-unit");
const mcqCounterEl = document.getElementById("mcq-counter");
const mcqQuestionEl = document.getElementById("mcq-question");
const mcqOptionsEl = document.getElementById("mcq-options");
const mcqResultEl = document.getElementById("mcq-result");
const mcqScoreEl = document.getElementById("mcq-score");
const mcqAttemptsEl = document.getElementById("mcq-attempts");
const btnNextMcq = document.getElementById("btn-next-mcq");

const longUnitEl = document.getElementById("long-unit");
const longCounterEl = document.getElementById("long-counter");
const longQuestionEl = document.getElementById("long-question");
const longAnswerEl = document.getElementById("long-answer");
const btnShowModel = document.getElementById("btn-show-model");
const btnNextLong = document.getElementById("btn-next-long");
const modelBoxEl = document.getElementById("model-box");
const modelAnswerEl = document.getElementById("model-answer");

const chapterSelect = document.getElementById("chapter-select");
const btnQuickTest = document.getElementById("btn-quick-test");
const themeToggleBtn = document.getElementById("theme-toggle");

// ======================================================
//  THEME
// ======================================================

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeToggleBtn.textContent = "🌙";
  }
  localStorage.setItem("quiz-theme", theme);
}

applyTheme(localStorage.getItem("quiz-theme") || "light");

themeToggleBtn.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
});

// ======================================================
//  MODE SWITCH
// ======================================================

btnMcqMode.addEventListener("click", () => showMode("mcq"));
btnLongMode.addEventListener("click", () => showMode("long"));

function showMode(mode) {
  if (mode === "mcq") {
    btnMcqMode.classList.add("active");
    btnLongMode.classList.remove("active");
    mcqSection.classList.remove("hidden");
    longSection.classList.add("hidden");
  } else {
    btnLongMode.classList.add("active");
    btnMcqMode.classList.remove("active");
    longSection.classList.remove("hidden");
    mcqSection.classList.add("hidden");
  }
}

// ======================================================
//  CHAPTER / UNIT HANDLING
// ======================================================

function getUnitNumber(unitText) {
  const match = String(unitText).match(/Unit\s*(\d+)/i);
  return match ? Number(match[1]) : 999;
}

function getAllChapters() {
  const chapters = new Map();

  [...mcqQuestions, ...longQuestions].forEach((q) => {
    if (q.unit && !chapters.has(q.unit)) {
      chapters.set(q.unit, q.unit);
    }
  });

  return Array.from(chapters.values()).sort((a, b) => getUnitNumber(a) - getUnitNumber(b));
}

function populateChapterSelect() {
  getAllChapters().forEach((ch) => {
    const opt = document.createElement("option");
    opt.value = ch;
    opt.textContent = ch;
    chapterSelect.appendChild(opt);
  });
}

chapterSelect.addEventListener("change", () => {
  currentChapter = chapterSelect.value;
  exitQuickTest();
  updateFilteredIndices();
  startPracticeOrder();
  resetScore();

  if (practiceOrder.length > 0) loadMcqQuestion(practiceOrder[practicePosition]);
  if (filteredLongIndices.length > 0) loadLongQuestionFromFilter();
});

function updateFilteredIndices() {
  if (currentChapter === "all") {
    filteredMcqIndices = mcqQuestions.map((_, i) => i);
    filteredLongIndices = longQuestions.map((_, i) => i);
    return;
  }

  filteredMcqIndices = mcqQuestions
    .map((q, i) => (q.unit === currentChapter ? i : -1))
    .filter((i) => i !== -1);

  filteredLongIndices = longQuestions
    .map((q, i) => (q.unit === currentChapter ? i : -1))
    .filter((i) => i !== -1);
}

// ======================================================
//  MCQ LOGIC
// ======================================================

function startPracticeOrder() {
  practiceOrder = shuffleArray(filteredMcqIndices);
  practicePosition = 0;
}

function loadMcqQuestion(index) {
  const q = mcqQuestions[index];
  if (!q) return;

  currentMcqIndex = index;
  mcqAnswered = false;

  mcqUnitEl.textContent = isQuickTest ? "Quick Test – Mixed" : q.unit;

  if (isQuickTest) {
    mcqCounterEl.textContent = `Q ${quickPosition + 1} of ${quickTotal}`;
  } else {
    mcqCounterEl.textContent = `Q ${practicePosition + 1} of ${practiceOrder.length}`;
  }

  mcqQuestionEl.textContent = q.question;
  mcqOptionsEl.innerHTML = "";
  mcqResultEl.textContent = "";
  mcqResultEl.className = "result-text";

  const letters = ["A", "B", "C", "D", "E", "F"];

  q.options.forEach((optionText, i) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "mcqOption";
    input.value = i;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = letters[i] || String(i + 1);

    const span = document.createElement("span");
    span.className = "opt-text";
    span.textContent = optionText;

    label.appendChild(input);
    label.appendChild(badge);
    label.appendChild(span);
    mcqOptionsEl.appendChild(label);

    label.addEventListener("click", () => handleMcqSelection(i));
  });
}

function handleMcqSelection(selectedIndex) {
  if (mcqAnswered) return;
  mcqAnswered = true;

  const q = mcqQuestions[currentMcqIndex];
  const correctIndex = getCorrectIndex(q);
  const optionLabels = mcqOptionsEl.querySelectorAll(".option");

  mcqAttempts++;

  optionLabels.forEach((label, i) => {
    label.classList.add("locked");
    label.style.pointerEvents = "none";

    if (i === correctIndex) {
      label.classList.add("correct");
    } else if (i === selectedIndex) {
      label.classList.add("incorrect");
    }
  });

  if (selectedIndex === correctIndex) {
    mcqScore++;
    mcqResultEl.textContent = `Correct ✅ ${q.explanation}`;
    mcqResultEl.className = "result-text correct";
  } else {
    mcqResultEl.textContent = `Wrong ❌ Correct answer: ${q.options[correctIndex]}. ${q.explanation}`;
    mcqResultEl.className = "result-text wrong";
  }

  updateScoreDisplay();
}

btnNextMcq.addEventListener("click", () => {
  if (isQuickTest) {
    quickPosition++;

    if (quickPosition >= quickTotal) {
      mcqResultEl.textContent = `🎉 Quick Test finished! Score: ${mcqScore}/${quickTotal}`;
      mcqResultEl.className = "result-text correct";
      exitQuickTest(false);
      return;
    }

    loadMcqQuestion(quickOrder[quickPosition]);
    return;
  }

  if (practiceOrder.length === 0) return;

  practicePosition++;

  if (practicePosition >= practiceOrder.length) {
    practiceOrder = shuffleArray(filteredMcqIndices);
    practicePosition = 0;
    mcqResultEl.textContent = "🎉 Unit completed! Starting another shuffled round.";
    mcqResultEl.className = "result-text correct";
    setTimeout(() => loadMcqQuestion(practiceOrder[practicePosition]), 600);
    return;
  }

  loadMcqQuestion(practiceOrder[practicePosition]);
});

// ======================================================
//  QUICK TEST
// ======================================================

btnQuickTest.addEventListener("click", () => {
  if (mcqQuestions.length === 0) return;

  if (isQuickTest) {
    exitQuickTest();
    startPracticeOrder();
    if (practiceOrder.length > 0) loadMcqQuestion(practiceOrder[practicePosition]);
    return;
  }

  updateFilteredIndices();
  const sourceIndices = currentChapter === "all" ? mcqQuestions.map((_, i) => i) : filteredMcqIndices;

  if (sourceIndices.length === 0) {
    mcqResultEl.textContent = "No MCQs available for this unit.";
    return;
  }

  isQuickTest = true;
  btnQuickTest.classList.add("active-test");
  btnQuickTest.textContent = "Exit Test";
  resetScore();

  quickOrder = shuffleArray(sourceIndices);
  quickTotal = Math.min(QUICK_TEST_LENGTH, quickOrder.length);
  quickPosition = 0;

  showMode("mcq");
  loadMcqQuestion(quickOrder[quickPosition]);
});

function exitQuickTest(clearMessage = true) {
  isQuickTest = false;
  btnQuickTest.classList.remove("active-test");
  btnQuickTest.textContent = "🧪 Test Yourself";

  if (clearMessage) {
    mcqResultEl.textContent = "";
    mcqResultEl.className = "result-text";
  }
}

// ======================================================
//  LONG ANSWER LOGIC
// ======================================================

function loadLongQuestion(index) {
  const q = longQuestions[index];
  if (!q) return;

  currentLongIndex = index;
  longUnitEl.textContent = q.unit || "Long Answer";

  const position = filteredLongIndices.indexOf(index) + 1;
  longCounterEl.textContent = `Q ${Math.max(position, 1)} of ${filteredLongIndices.length}`;

  longQuestionEl.textContent = q.question || "";
  longAnswerEl.value = "";
  modelBoxEl.classList.add("hidden");
  modelAnswerEl.textContent = "";
}

function loadLongQuestionFromFilter() {
  if (filteredLongIndices.length === 0) return;
  const randomIndex = filteredLongIndices[Math.floor(Math.random() * filteredLongIndices.length)];
  loadLongQuestion(randomIndex);
}

btnShowModel.addEventListener("click", () => {
  const q = longQuestions[currentLongIndex];
  modelBoxEl.classList.remove("hidden");
  modelAnswerEl.textContent = q?.keyPoints || q?.answer || "Key points are not available for this question.";
});

btnNextLong.addEventListener("click", loadLongQuestionFromFilter);

// ======================================================
//  HELPERS
// ======================================================

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function resetScore() {
  mcqScore = 0;
  mcqAttempts = 0;
  updateScoreDisplay();
  mcqResultEl.textContent = "";
  mcqResultEl.className = "result-text";
}

function updateScoreDisplay() {
  mcqScoreEl.textContent = mcqScore;
  mcqAttemptsEl.textContent = mcqAttempts;
}

function initLongModeVisibility() {
  if (longQuestions.length === 0) {
    btnLongMode.style.display = "none";
    longSection.classList.add("hidden");
  }
}

function initEmptyState() {
  if (mcqQuestions.length === 0) {
    mcqUnitEl.textContent = "No questions loaded";
    mcqCounterEl.textContent = "";
    mcqQuestionEl.textContent = "Please check that your unit files are inside the units folder and loaded before script.js.";
    btnNextMcq.disabled = true;
    btnQuickTest.disabled = true;
  }
}

// ======================================================
//  INIT
// ======================================================

function init() {
  populateChapterSelect();
  initLongModeVisibility();
  updateFilteredIndices();
  startPracticeOrder();
  resetScore();
  initEmptyState();

  if (practiceOrder.length > 0) {
    loadMcqQuestion(practiceOrder[practicePosition]);
  }

  if (filteredLongIndices.length > 0) {
    loadLongQuestionFromFilter();
  }
}

init();
