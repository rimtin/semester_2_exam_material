// ======================================================
//  EXAM PRACTICE HUB  (v9)
//  Home page with subjects · 2:00 per-question timer with ON/OFF
//  Agents: Hint · AI Tutor · Weak Topic · Revision · Practice Coach
// ======================================================

const QUICK_TEST_LENGTH = 10;
const TIMER_SECONDS = 120; // 2:00 per question

// ======================================================
//  QUESTION NORMALIZATION
// ======================================================

function normalizeQuestion(q, unitNo, kind) {
  const n = { ...q };

  if (!n.unit) n.unit = `Unit ${unitNo}`;

  if (kind === "mcq") {
    n.options = Array.isArray(n.options) ? n.options : [];
    n.correctIndex = getCorrectIndex(n);
    n.type = n.type || "Concept MCQ";
    n.topic = n.topic || (n.unit.split("–")[1] || n.unit).trim();

    // Backward compatibility: derive agent fields from legacy `explanation`
    const legacy = n.explanation || "";
    const legacyParts = legacy.split(/Why others are wrong:?\s*/i);
    const legacyTutor = (legacyParts[0] || "").replace(/^Correct:\s*/i, "").trim();
    const legacyWrong = (legacyParts[1] || "").trim();
    n.tutor = n.tutor || legacyTutor || "Review this concept from the unit notes.";
    n.hint = n.hint || "Read the question again slowly and eliminate options that clearly don't match the key term being asked.";
    n.revisionNote =
      n.revisionNote ||
      `${n.question.replace(/[:?\s]+$/, "")} → ${n.options[n.correctIndex] || ""}`;
    if (!Array.isArray(n.optionExplanations)) {
      n.optionExplanations = n.options.map((_, i) =>
        i === n.correctIndex ? "Correct. " + n.tutor : legacyWrong
      );
    }
  }

  return n;
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

// ======================================================
//  STATE
// ======================================================

let currentSubject = null;
let mcqQuestions = [];
let longQuestions = [];

let currentChapter = "all";
let currentMcqIndex = 0;
let currentLongIndex = 0;

let mcqScore = 0;
let mcqAttempts = 0;
let mcqAnswered = false;
let hintShown = false;

let filteredMcqIndices = [];
let filteredLongIndices = [];

let practiceOrder = [];
let practicePosition = 0;

let isQuickTest = false;
let quickOrder = [];
let quickTotal = 0;
let quickPosition = 0;

let coachSet = null; // { label, indices }

// Timer state
let timerEnabled = localStorage.getItem("quiz-timer-on") !== "off";
let timerInterval = null;
let timeLeft = TIMER_SECONDS;

// ======================================================
//  ELEMENT REFERENCES
// ======================================================

const homeSection = document.getElementById("home-section");
const subjectGrid = document.getElementById("subject-grid");
const quizArea = document.getElementById("quiz-area");
const btnHome = document.getElementById("btn-home");
const appTitle = document.getElementById("app-title");
const appSubtitle = document.getElementById("app-subtitle");

const btnMcqMode = document.getElementById("btn-mcq");
const btnLongMode = document.getElementById("btn-long");

const mcqSection = document.getElementById("mcq-section");
const longSection = document.getElementById("long-section");

const mcqUnitEl = document.getElementById("mcq-unit");
const mcqCounterEl = document.getElementById("mcq-counter");
const mcqTimerEl = document.getElementById("mcq-timer");
const timerToggleBtn = document.getElementById("timer-toggle");
const mcqQuestionEl = document.getElementById("mcq-question");
const mcqOptionsEl = document.getElementById("mcq-options");
const mcqResultEl = document.getElementById("mcq-result");
const mcqScoreEl = document.getElementById("mcq-score");
const mcqAttemptsEl = document.getElementById("mcq-attempts");
const btnNextMcq = document.getElementById("btn-next-mcq");

const btnHint = document.getElementById("btn-hint");
const hintBox = document.getElementById("hint-box");
const hintText = document.getElementById("hint-text");
const tutorBox = document.getElementById("tutor-box");
const tutorText = document.getElementById("tutor-text");

const agentTabs = document.querySelectorAll(".agent-tabs button");
const tabWeak = document.getElementById("tab-weak");
const tabRevision = document.getElementById("tab-revision");
const tabPractice = document.getElementById("tab-practice");
const weakList = document.getElementById("weak-list");
const revisionList = document.getElementById("revision-list");
const revisionCountEl = document.getElementById("revision-count");
const practiceAdvice = document.getElementById("practice-advice");
const btnStartCoach = document.getElementById("btn-start-coach");
const btnCopyRevision = document.getElementById("btn-copy-revision");
const btnDownloadRevision = document.getElementById("btn-download-revision");
const btnClearRevision = document.getElementById("btn-clear-revision");
const btnResetStats = document.getElementById("btn-reset-stats");

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
//  PERSISTENT LEARNING DATA (per subject)
// ======================================================

function statsKey() { return `quiz-agent-stats:${currentSubject?.id || "default"}`; }
function revisionKey() { return `quiz-agent-revision:${currentSubject?.id || "default"}`; }

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

let agentStats = { units: {} };
let revisionNotes = [];

function loadAgentData() {
  agentStats = loadJSON(statsKey(), { units: {} });
  revisionNotes = loadJSON(revisionKey(), []);
}

function saveStats() { localStorage.setItem(statsKey(), JSON.stringify(agentStats)); }
function saveRevision() { localStorage.setItem(revisionKey(), JSON.stringify(revisionNotes)); }

function recordAnswer(q, wasCorrect) {
  const u = (agentStats.units[q.unit] ||= { attempts: 0, wrong: 0, byType: {} });
  u.attempts++;
  const t = (u.byType[q.type] ||= { attempts: 0, wrong: 0 });
  t.attempts++;

  if (!wasCorrect) {
    u.wrong++;
    t.wrong++;

    const existing = revisionNotes.find((n) => n.question === q.question);
    if (existing) existing.count++;
    else revisionNotes.push({ unit: q.unit, question: q.question, note: q.revisionNote, count: 1 });
    saveRevision();
  }

  saveStats();
  renderWeakTopics();
  renderRevision();
  renderPracticeAdvice();
}

// ======================================================
//  HOME PAGE / SUBJECT LOADING
// ======================================================

function renderHome() {
  subjectGrid.innerHTML = "";
  (window.SUBJECTS || []).forEach((s) => {
    const card = document.createElement("button");
    card.className = "subject-card";
    card.innerHTML = `
      <span class="subject-icon">${s.icon || "📘"}</span>
      <span class="subject-name">${escapeHtml(s.name)}</span>
      <span class="subject-desc">${escapeHtml(s.description || "")}</span>
      <span class="subject-stats">${escapeHtml(s.stats || "")}</span>
    `;
    card.addEventListener("click", () => openSubject(s));
    subjectGrid.appendChild(card);
  });

  if ((window.SUBJECTS || []).length === 0) {
    subjectGrid.innerHTML = `<p class="agent-empty">No subjects configured. Add one in subjects.js.</p>`;
  }
}

function loadScript(src) {
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false); // missing optional files are fine
    document.head.appendChild(s);
  });
}

const loadedSubjects = new Set();

async function openSubject(subject) {
  currentSubject = subject;

  appTitle.textContent = `${subject.icon || "📘"} ${subject.name}`;
  appSubtitle.textContent = "Unit-wise MCQs with an AI tutor, hints, weak-topic tracking, and a practice coach";

  if (!loadedSubjects.has(subject.id)) {
    subjectGrid.querySelectorAll(".subject-card").forEach((c) => (c.disabled = true));
    const loads = [];
    for (let i = 1; i <= subject.unitCount; i++) {
      // Try unitN_mcq.js first; fall back to extensionless unitN_mcq
      loads.push(
        loadScript(`${subject.path}unit${i}_mcq.js?v=10`).then((ok) =>
          ok ? true : loadScript(`${subject.path}unit${i}_mcq?v=10`)
        )
      );
      loads.push(loadScript(`${subject.path}unit${i}_long.js?v=10`)); // optional
    }
    await Promise.all(loads);
    loadedSubjects.add(subject.id);
    subjectGrid.querySelectorAll(".subject-card").forEach((c) => (c.disabled = false));
  }

  // Build question arrays for THIS subject
  mcqQuestions = [];
  longQuestions = [];
  for (let i = 1; i <= subject.unitCount; i++) {
    (window[`unit${i}_mcq`] || []).forEach((q) => mcqQuestions.push(normalizeQuestion(q, i, "mcq")));
    (window[`unit${i}_long`] || []).forEach((q) => longQuestions.push(normalizeQuestion(q, i, "long")));
  }

  // NOTE: unit arrays are global per file name. If two subjects use the same
  // window.unitN_mcq names, we snapshot them per subject on first load.
  if (!subject._snapshot) {
    subject._snapshot = { mcq: mcqQuestions, long: longQuestions };
  } else {
    mcqQuestions = subject._snapshot.mcq;
    longQuestions = subject._snapshot.long;
  }

  loadAgentData();

  // Reset quiz state
  currentChapter = "all";
  coachSet = null;
  isQuickTest = false;
  chapterSelect.innerHTML = `<option value="all">All Units</option>`;
  populateChapterSelect();
  initLongModeVisibility();
  updateFilteredIndices();
  startPracticeOrder();
  resetScore();
  renderWeakTopics();
  renderRevision();
  renderPracticeAdvice();
  openAgentTab("weak");
  showMode("mcq");
  exitQuickTest();

  homeSection.classList.add("hidden");
  quizArea.classList.remove("hidden");
  btnHome.classList.remove("hidden");
  timerToggleBtn.classList.remove("hidden");

  if (mcqQuestions.length === 0) {
    mcqUnitEl.textContent = "No questions found";
    mcqCounterEl.textContent = "";
    mcqQuestionEl.textContent = `No unit files were found for ${subject.name}. Put unit1_mcq.js … unit${subject.unitCount}_mcq.js inside ${subject.path} (every file must end in .js), then hard-refresh with Ctrl+Shift+R.`;
    mcqOptionsEl.innerHTML = "";
    btnNextMcq.disabled = true;
    btnQuickTest.disabled = true;
    btnHint.classList.add("hidden");
    hideTimer();
  } else {
    btnNextMcq.disabled = false;
    btnQuickTest.disabled = false;
    if (practiceOrder.length > 0) loadMcqQuestion(practiceOrder[practicePosition]);
  }
  if (filteredLongIndices.length > 0) loadLongQuestionFromFilter();
}

function goHome() {
  stopTimer();
  currentSubject = null;
  quizArea.classList.add("hidden");
  homeSection.classList.remove("hidden");
  btnHome.classList.add("hidden");
  timerToggleBtn.classList.add("hidden");
  appTitle.textContent = "📚 Exam Practice Hub";
  appSubtitle.textContent = "Pick a subject to start practicing";
}

btnHome.addEventListener("click", goHome);

// ======================================================
//  QUESTION TIMER (2:00, with ON/OFF toggle)
// ======================================================

function renderTimerToggle() {
  timerToggleBtn.textContent = timerEnabled ? "⏱ ON" : "⏱ OFF";
  timerToggleBtn.classList.toggle("timer-off", !timerEnabled);
}

timerToggleBtn.addEventListener("click", () => {
  timerEnabled = !timerEnabled;
  localStorage.setItem("quiz-timer-on", timerEnabled ? "on" : "off");
  renderTimerToggle();

  if (timerEnabled && !mcqAnswered && currentSubject) startTimer();
  else stopTimer();
});

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

function startTimer() {
  stopTimer();
  if (!timerEnabled) return;

  timeLeft = TIMER_SECONDS;
  mcqTimerEl.textContent = `⏱ ${formatTime(timeLeft)}`;
  mcqTimerEl.classList.remove("hidden", "timer-warn");

  timerInterval = setInterval(() => {
    timeLeft--;
    mcqTimerEl.textContent = `⏱ ${formatTime(timeLeft)}`;
    if (timeLeft <= 30) mcqTimerEl.classList.add("timer-warn");
    if (timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function hideTimer() {
  stopTimer();
  mcqTimerEl.classList.add("hidden");
}

function handleTimeout() {
  if (mcqAnswered) return;
  mcqAnswered = true;

  const q = mcqQuestions[currentMcqIndex];
  const correctIndex = getCorrectIndex(q);
  const optionLabels = mcqOptionsEl.querySelectorAll(".option");

  mcqAttempts++;

  optionLabels.forEach((label, i) => {
    label.classList.add("locked");
    label.style.pointerEvents = "none";
    if (i === correctIndex) label.classList.add("correct");
  });

  mcqResultEl.textContent = `⏰ Time's up! Correct answer: ${q.options[correctIndex]}`;
  mcqResultEl.className = "result-text wrong";
  mcqTimerEl.textContent = "⏱ 0:00";

  btnHint.classList.add("hidden");
  showTutor(q, -1);
  recordAnswer(q, false);
  updateScoreDisplay();
}

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
    if (!mcqAnswered && mcqQuestions.length > 0) startTimer();
  } else {
    btnLongMode.classList.add("active");
    btnMcqMode.classList.remove("active");
    longSection.classList.remove("hidden");
    mcqSection.classList.add("hidden");
    stopTimer();
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
    if (q.unit && !chapters.has(q.unit)) chapters.set(q.unit, q.unit);
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
  coachSet = null;
  exitQuickTest();
  updateFilteredIndices();
  startPracticeOrder();
  resetScore();

  if (practiceOrder.length > 0) loadMcqQuestion(practiceOrder[practicePosition]);
  if (filteredLongIndices.length > 0) loadLongQuestionFromFilter();
});

function updateFilteredIndices() {
  if (coachSet) {
    filteredMcqIndices = [...coachSet.indices];
  } else if (currentChapter === "all") {
    filteredMcqIndices = mcqQuestions.map((_, i) => i);
  } else {
    filteredMcqIndices = mcqQuestions
      .map((q, i) => (q.unit === currentChapter ? i : -1))
      .filter((i) => i !== -1);
  }

  if (currentChapter === "all") {
    filteredLongIndices = longQuestions.map((_, i) => i);
  } else {
    filteredLongIndices = longQuestions
      .map((q, i) => (q.unit === currentChapter ? i : -1))
      .filter((i) => i !== -1);
  }
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
  hintShown = false;

  if (isQuickTest) {
    mcqUnitEl.textContent = "Quick Test – Mixed";
    mcqCounterEl.textContent = `Q ${quickPosition + 1} of ${quickTotal}`;
  } else if (coachSet) {
    mcqUnitEl.textContent = `🎯 ${coachSet.label}`;
    mcqCounterEl.textContent = `Q ${practicePosition + 1} of ${practiceOrder.length}`;
  } else {
    mcqUnitEl.textContent = q.unit;
    mcqCounterEl.textContent = `Q ${practicePosition + 1} of ${practiceOrder.length}`;
  }

  mcqQuestionEl.textContent = q.question;
  mcqOptionsEl.innerHTML = "";
  mcqResultEl.textContent = "";
  mcqResultEl.className = "result-text";

  hintBox.classList.add("hidden");
  hintText.textContent = "";
  btnHint.classList.remove("hidden");
  btnHint.disabled = false;

  tutorBox.classList.add("hidden");
  tutorText.textContent = "";

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

  if (timerEnabled) startTimer();
  else hideTimer();
}

// ---------------- Hint Agent ----------------

btnHint.addEventListener("click", () => {
  if (mcqAnswered) return;
  const q = mcqQuestions[currentMcqIndex];
  hintText.textContent = q.hint;
  hintBox.classList.remove("hidden");
  btnHint.disabled = true;
  hintShown = true;
});

// ---------------- AI Tutor Agent ----------------

function showTutor(q, selectedIndex) {
  tutorText.textContent = q.tutor;
  tutorBox.classList.remove("hidden");

  const optionLabels = mcqOptionsEl.querySelectorAll(".option");
  optionLabels.forEach((label, i) => {
    const explanation = q.optionExplanations[i];
    if (!explanation) return;

    const div = document.createElement("div");
    div.className = "opt-explain";
    if (i === q.correctIndex) div.classList.add("good");
    else if (i === selectedIndex) div.classList.add("bad");
    div.textContent = explanation;
    label.appendChild(div);
  });
}

function handleMcqSelection(selectedIndex) {
  if (mcqAnswered) return;
  mcqAnswered = true;
  stopTimer();

  const q = mcqQuestions[currentMcqIndex];
  const correctIndex = getCorrectIndex(q);
  const optionLabels = mcqOptionsEl.querySelectorAll(".option");

  mcqAttempts++;

  optionLabels.forEach((label, i) => {
    label.classList.add("locked");
    label.style.pointerEvents = "none";
    if (i === correctIndex) label.classList.add("correct");
    else if (i === selectedIndex) label.classList.add("incorrect");
  });

  const wasCorrect = selectedIndex === correctIndex;

  if (wasCorrect) {
    mcqScore++;
    mcqResultEl.textContent = hintShown ? "Correct ✅ (with hint)" : "Correct ✅";
    mcqResultEl.className = "result-text correct";
  } else {
    mcqResultEl.textContent = `Wrong ❌ Correct answer: ${q.options[correctIndex]}`;
    mcqResultEl.className = "result-text wrong";
  }

  btnHint.classList.add("hidden");
  showTutor(q, selectedIndex);
  recordAnswer(q, wasCorrect);
  updateScoreDisplay();
}

btnNextMcq.addEventListener("click", () => {
  if (isQuickTest) {
    quickPosition++;

    if (quickPosition >= quickTotal) {
      mcqResultEl.textContent = `🎉 Quick Test finished! Score: ${mcqScore}/${quickTotal}`;
      mcqResultEl.className = "result-text correct";
      exitQuickTest(false);
      hideTimer();
      renderPracticeAdvice();
      openAgentTab("practice");
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
    mcqResultEl.textContent = coachSet
      ? "🎉 Coach set completed! Check the Practice Coach for your next step."
      : "🎉 Unit completed! Starting another shuffled round.";
    mcqResultEl.className = "result-text correct";
    if (coachSet) renderPracticeAdvice();
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

  coachSet = null;
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
//  WEAK TOPIC AGENT
// ======================================================

function getUnitAccuracy(u) {
  return u.attempts === 0 ? 1 : (u.attempts - u.wrong) / u.attempts;
}

function getWeakUnits() {
  return Object.entries(agentStats.units)
    .filter(([, u]) => u.attempts >= 3)
    .map(([unit, u]) => ({ unit, ...u, accuracy: getUnitAccuracy(u) }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

function renderWeakTopics() {
  const entries = Object.entries(agentStats.units).map(([unit, u]) => ({
    unit, ...u, accuracy: getUnitAccuracy(u),
  }));

  if (entries.length === 0) {
    weakList.innerHTML = `<p class="agent-empty">Answer some questions and I'll show you which units need more revision.</p>`;
    return;
  }

  entries.sort((a, b) => a.accuracy - b.accuracy);
  weakList.innerHTML = "";

  entries.forEach((e) => {
    const pct = Math.round(e.accuracy * 100);
    const level = pct < 50 ? "low" : pct < 75 ? "mid" : "high";
    const flag = e.attempts >= 3 && pct < 70 ? `<span class="weak-flag">Needs revision</span>` : "";

    const row = document.createElement("div");
    row.className = "weak-row";
    row.innerHTML = `
      <div class="weak-head">
        <span class="weak-name">${escapeHtml(e.unit)}</span>
        ${flag}
      </div>
      <div class="weak-bar"><div class="weak-fill ${level}" style="width:${pct}%"></div></div>
      <div class="weak-meta">${pct}% correct · ${e.wrong} wrong of ${e.attempts} attempted</div>
    `;
    weakList.appendChild(row);
  });
}

// ======================================================
//  REVISION AGENT
// ======================================================

function renderRevision() {
  revisionCountEl.textContent = revisionNotes.length;

  if (revisionNotes.length === 0) {
    revisionList.innerHTML = `<p class="agent-empty">No revision notes yet. Every question you get wrong is turned into a one-line note here.</p>`;
    return;
  }

  const byUnit = new Map();
  revisionNotes.forEach((n) => {
    if (!byUnit.has(n.unit)) byUnit.set(n.unit, []);
    byUnit.get(n.unit).push(n);
  });

  revisionList.innerHTML = "";
  [...byUnit.keys()]
    .sort((a, b) => getUnitNumber(a) - getUnitNumber(b))
    .forEach((unit) => {
      const h = document.createElement("h4");
      h.className = "revision-unit";
      h.textContent = unit;
      revisionList.appendChild(h);

      byUnit.get(unit)
        .sort((a, b) => b.count - a.count)
        .forEach((n) => {
          const p = document.createElement("p");
          p.className = "revision-note";
          p.textContent = "• " + n.note + (n.count > 1 ? `  (missed ${n.count}×)` : "");
          revisionList.appendChild(p);
        });
    });
}

function revisionAsText() {
  let out = `REVISION SUMMARY — ${currentSubject?.name || ""}\nGenerated from your wrong answers\n\n`;
  const byUnit = new Map();
  revisionNotes.forEach((n) => {
    if (!byUnit.has(n.unit)) byUnit.set(n.unit, []);
    byUnit.get(n.unit).push(n);
  });
  [...byUnit.keys()]
    .sort((a, b) => getUnitNumber(a) - getUnitNumber(b))
    .forEach((unit) => {
      out += unit + "\n";
      byUnit.get(unit)
        .sort((a, b) => b.count - a.count)
        .forEach((n) => {
          out += "  • " + n.note + (n.count > 1 ? `  (missed ${n.count}x)` : "") + "\n";
        });
      out += "\n";
    });
  return out;
}

btnCopyRevision.addEventListener("click", async () => {
  if (revisionNotes.length === 0) return;
  try {
    await navigator.clipboard.writeText(revisionAsText());
    btnCopyRevision.textContent = "✅ Copied";
    setTimeout(() => (btnCopyRevision.textContent = "📋 Copy"), 1500);
  } catch {
    btnCopyRevision.textContent = "Copy failed";
    setTimeout(() => (btnCopyRevision.textContent = "📋 Copy"), 1500);
  }
});

btnDownloadRevision.addEventListener("click", () => {
  if (revisionNotes.length === 0) return;
  const blob = new Blob([revisionAsText()], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `revision-${currentSubject?.id || "notes"}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
});

btnClearRevision.addEventListener("click", () => {
  if (revisionNotes.length === 0) return;
  if (!confirm("Clear all revision notes for this subject?")) return;
  revisionNotes = [];
  saveRevision();
  renderRevision();
});

btnResetStats.addEventListener("click", () => {
  if (!confirm("Reset weak-topic statistics for this subject?")) return;
  agentStats = { units: {} };
  saveStats();
  renderWeakTopics();
  renderPracticeAdvice();
});

// ======================================================
//  PRACTICE AGENT (Coach)
// ======================================================

function buildCoachPlan() {
  const totalAttempts = Object.values(agentStats.units).reduce((s, u) => s + u.attempts, 0);
  const totalWrong = Object.values(agentStats.units).reduce((s, u) => s + u.wrong, 0);

  if (totalAttempts < 5) {
    return {
      message: "Answer at least 5 questions so I can measure your level. Then I'll suggest the right practice set for you.",
      plan: null,
    };
  }

  const accuracy = (totalAttempts - totalWrong) / totalAttempts;
  const pct = Math.round(accuracy * 100);
  const weak = getWeakUnits();
  const weakest = weak[0];
  const attemptedUnits = Object.keys(agentStats.units);

  if (accuracy < 0.5) {
    if (weakest) {
      const indices = mcqQuestions
        .map((q, i) => (q.unit === weakest.unit && q.type === "Self Assessment Based" ? i : -1))
        .filter((i) => i !== -1);
      return {
        message: `Your accuracy is ${pct}%. Let's rebuild the basics: an easy revision set (Self-Assessment questions) from your weakest unit — ${weakest.unit}.`,
        plan: { label: `Easy revision · ${weakest.unit}`, indices },
      };
    }
    const indices = shuffleArray(
      mcqQuestions
        .map((q, i) => (attemptedUnits.includes(q.unit) && q.type === "Self Assessment Based" ? i : -1))
        .filter((i) => i !== -1)
    ).slice(0, 15);
    return {
      message: `Your accuracy is ${pct}%. Let's slow down with an easy revision set (Self-Assessment questions) from the units you have been practicing.`,
      plan: { label: "Easy revision set", indices },
    };
  }

  if (accuracy < 0.8) {
    if (weak.length > 0) {
      const targetUnits = weak.slice(0, 2).map((w) => w.unit);
      const indices = mcqQuestions
        .map((q, i) => (targetUnits.includes(q.unit) ? i : -1))
        .filter((i) => i !== -1);
      return {
        message: `Your accuracy is ${pct}%. Good progress — now focus on your weak units: ${targetUnits.join(" and ")}.`,
        plan: { label: `Weak units focus`, indices },
      };
    }
    const indices = shuffleArray(
      mcqQuestions
        .map((q, i) => (attemptedUnits.includes(q.unit) ? i : -1))
        .filter((i) => i !== -1)
    ).slice(0, 15);
    return {
      message: `Your accuracy is ${pct}%. Good progress — keep practicing the units you started so I can pinpoint your weak topics.`,
      plan: { label: "Focused practice", indices },
    };
  }

  const tricky = mcqQuestions
    .map((q, i) => (q.type === "Tricky Exam MCQ" ? i : -1))
    .filter((i) => i !== -1);
  const indices = shuffleArray(tricky.length >= 10 ? tricky : mcqQuestions.map((_, i) => i)).slice(0, 20);
  return {
    message: `Your accuracy is ${pct}%. Excellent! Time for a mixed random challenge with tricky exam-level questions from all units.`,
    plan: { label: "Mixed tricky challenge", indices },
  };
}

function renderPracticeAdvice() {
  const { message, plan } = buildCoachPlan();
  practiceAdvice.textContent = message;
  btnStartCoach.classList.toggle("hidden", !plan || plan.indices.length === 0);
}

btnStartCoach.addEventListener("click", () => {
  const { plan } = buildCoachPlan();
  if (!plan || plan.indices.length === 0) return;

  exitQuickTest();
  coachSet = plan;
  updateFilteredIndices();
  startPracticeOrder();
  resetScore();
  showMode("mcq");
  loadMcqQuestion(practiceOrder[practicePosition]);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======================================================
//  AGENT TABS
// ======================================================

function openAgentTab(name) {
  agentTabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
  tabWeak.classList.toggle("hidden", name !== "weak");
  tabRevision.classList.toggle("hidden", name !== "revision");
  tabPractice.classList.toggle("hidden", name !== "practice");
}

agentTabs.forEach((b) => b.addEventListener("click", () => openAgentTab(b.dataset.tab)));

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

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
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
  const hasLong = longQuestions.length > 0;
  btnLongMode.style.display = hasLong ? "" : "none";
  if (!hasLong) longSection.classList.add("hidden");
}

// ======================================================
//  INIT
// ======================================================

renderTimerToggle();
renderHome();
