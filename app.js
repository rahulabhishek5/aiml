/*
  FIELD GUIDE — editable learning roadmap
  To change the curriculum, edit the `phases` array below.
  Progress is stored locally in this browser; no account or server is used.
*/
const phases = [
  {
    id: "p0", number: "00", label: "Start here", title: "Make starting easy", tag: "SETUP", time: "1–3 short sessions", state: "core",
    description: "Create a learning loop and refresh only the Python you need. You are allowed to begin before you feel ready.",
    intro: "The goal is not to study all of Python again. It is to be comfortable reading a short script, running a notebook, and looking up unfamiliar syntax. Keep your work in one repository so progress becomes visible.",
    tasks: ["Create one Git repository for this journey and a Python notebook environment.", "Refresh functions, lists, dictionaries, loops, imports, and reading files only where needed.", "Finish the core Python lesson and write a tiny script without copying the whole solution."],
    resources: [
      {title:"Kaggle Learn — Python", desc:"Short, hands-on lessons with exercises. Use this as the main resource if Python feels rusty.", url:"https://www.kaggle.com/learn/python", type:"CORE · FREE"},
      {title:"Python official tutorial", desc:"Use as a reference when syntax or language behavior is confusing.", url:"https://docs.python.org/3/tutorial/", type:"REFERENCE"},
      {title:"GitHub Skills", desc:"A guided way to practise repositories, commits, and collaboration basics.", url:"https://skills.github.com/", type:"REFERENCE"}
    ],
    projectTitle: "Tiny script: dataset reporter", project: "Write a script or notebook that loads a small CSV, prints its dimensions, lists its columns, and reports missing values. Keep the code and a short explanation in Git.",
    exit: "You can run a notebook, explain imports and variables, find documentation, and debug a basic error without restarting from a new tutorial.",
    nextAction: "Create the repository and run one Python cell. That is enough for day one."
  },
  {
    id: "p1", number: "01", label: "Work with data", title: "Python data toolkit", tag: "DATA", time: "1–2 weeks at a gentle pace", state: "core",
    description: "Turn raw rows into useful observations using NumPy, pandas, and visualisations.",
    intro: "Data work is a large part of practical ML. Learn the common operations by doing them on one dataset—not by memorising every library function. You can use Jupyter or Google Colab; a powerful GPU is not needed here.",
    tasks: ["Use NumPy arrays and understand shape, indexing, and simple vector operations.", "Use pandas to read, filter, sort, group, join, and handle missing values in a CSV.", "Make at least three plots and write five observations supported by the data."],
    resources: [
      {title:"Kaggle Learn — Pandas", desc:"Practical reading, selecting, grouping, combining, and cleaning data exercises.", url:"https://www.kaggle.com/learn/pandas", type:"CORE · FREE"},
      {title:"Kaggle Learn — Data Visualization", desc:"Short lessons on distributions, line charts, bar charts, heatmaps, and scatter plots.", url:"https://www.kaggle.com/learn/data-visualization", type:"CORE · FREE"},
      {title:"NumPy — absolute basics", desc:"Official quickstart for arrays, dimensions, indexing, and operations.", url:"https://numpy.org/doc/stable/user/absolute_beginners.html", type:"REFERENCE"},
      {title:"pandas — getting started", desc:"Official tutorials to revisit when you need a specific operation.", url:"https://pandas.pydata.org/docs/getting_started/intro_tutorials/", type:"REFERENCE"}
    ],
    projectTitle: "Project 1: dataset explorer", project: "Pick a small public dataset (for example, a student, weather, or sales dataset). Clean it, explore it, plot patterns, and write a short findings section. Do not train a model yet.",
    exit: "You can load an unfamiliar CSV, inspect and clean it, group values, make a useful plot, and explain at least five evidence-based findings.",
    nextAction: "Pick one CSV and keep using that same dataset for the whole session."
  },
  {
    id: "p2", number: "02", label: "Understand the why", title: "Math for ML (alongside everything else)", tag: "MATH", time: "Ongoing · revisit as needed", state: "core",
    description: "Build enough statistics, linear algebra, probability, and calculus to understand model behavior.",
    intro: "Do not spend months completing math playlists before touching ML. Learn the concept you need, then return to code and see where it appears. You do not need advanced proofs to start your first models.",
    tasks: ["Explain mean, median, variance, standard deviation, distributions, and outliers using a dataset.", "Understand vectors, matrices, dot products, and what a feature vector represents.", "Build intuition for probability, derivatives, loss, and gradient descent; derive details later if needed."],
    resources: [
      {title:"Khan Academy — Statistics and probability", desc:"A structured refresher for descriptive statistics and probability foundations.", url:"https://www.khanacademy.org/math/statistics-probability", type:"CORE · FREE"},
      {title:"3Blue1Brown — Essence of Linear Algebra", desc:"Visual intuition for vectors, matrices, transformations, and dot products.", url:"https://www.3blue1brown.com/topics/linear-algebra", type:"CORE · VIDEO"},
      {title:"3Blue1Brown — Essence of Calculus", desc:"Visual intuition for derivatives and the idea behind gradient-based learning.", url:"https://www.3blue1brown.com/topics/calculus", type:"CORE · VIDEO"},
      {title:"StatQuest", desc:"Friendly visual explanations of statistics and ML ideas; search for the exact concept you meet.", url:"https://www.youtube.com/@statquest", type:"SUPPORT · VIDEO"}
    ],
    projectTitle: "Mini-lab: see a model learn", project: "Generate or use a small numeric dataset, plot the relationship between two variables, fit a simple line, and describe how prediction errors change as the line changes.",
    exit: "You can explain, in plain language, what a feature vector, average, variance, probability, loss, and derivative are used for. You can keep learning the math while building models.",
    nextAction: "Spend one short session on statistics, then return to the data notebook."
  },
  {
    id: "p3", number: "03", label: "First models", title: "Machine learning foundations", tag: "ML CORE", time: "1–2 weeks", state: "core",
    description: "Train a model, evaluate it honestly, and understand what the numbers actually mean.",
    intro: "This is your first real ML loop: define a problem, identify features and target, split data, establish a baseline, fit a model, and evaluate unseen examples. Accuracy alone is not always the right metric.",
    tasks: ["Explain supervised learning, features, target labels, regression, and classification.", "Create a train/test split and establish a simple baseline before improving anything.", "Train a scikit-learn model and choose an appropriate metric; explain overfitting and data leakage."],
    resources: [
      {title:"Kaggle Learn — Intro to Machine Learning", desc:"A compact, hands-on introduction to your first models and validation.", url:"https://www.kaggle.com/learn/intro-to-machine-learning", type:"CORE · FREE"},
      {title:"Google — Machine Learning Crash Course", desc:"Structured explanations, videos, interactive exercises, and modern topics including LLM basics.", url:"https://developers.google.com/machine-learning/crash-course/", type:"CORE · FREE"},
      {title:"StatQuest — A Gentle Introduction to ML", desc:"A beginner-friendly video to build intuition before the more technical lessons.", url:"https://www.youtube.com/watch?v=Gv9_4yMHFhI", type:"SUPPORT · VIDEO"},
      {title:"scikit-learn — Getting started", desc:"The main reference for fitting, predicting, preprocessing, and evaluating models.", url:"https://scikit-learn.org/stable/getting_started.html", type:"REFERENCE"}
    ],
    projectTitle: "Project 2: your first prediction model", project: "Choose a beginner tabular regression or classification dataset. Build a baseline, train one model, evaluate it on held-out data, and write what the result does and does not tell you.",
    exit: "You can explain the full train/test workflow, why a baseline matters, why the metric fits the problem, and how a model can overfit.",
    nextAction: "Finish the Kaggle Intro to ML exercises and change one thing in your model."
  },
  {
    id: "p4", number: "04", label: "Become reliable", title: "Practical classical ML", tag: "ML PRACTICE", time: "1–3 weeks", state: "core",
    description: "Make your model less fragile with preprocessing, pipelines, validation, comparisons, and error analysis.",
    intro: "Real datasets are messy. Learn how to build a fair comparison between models and avoid accidentally leaking information from the test set. Fewer well-explained algorithms beat a long list you cannot defend.",
    tasks: ["Handle missing values and categorical features using a reproducible preprocessing pipeline.", "Compare at least two algorithms using suitable validation and metrics.", "Inspect errors, check for leakage, and record limitations instead of chasing a perfect score."],
    resources: [
      {title:"Kaggle Learn — Intermediate Machine Learning", desc:"Missing values, categorical variables, pipelines, cross-validation, and data leakage.", url:"https://www.kaggle.com/learn/intermediate-machine-learning", type:"CORE · FREE"},
      {title:"scikit-learn — Common pitfalls", desc:"Official guidance on leakage, inconsistent preprocessing, and evaluation mistakes.", url:"https://scikit-learn.org/stable/common_pitfalls.html", type:"CORE · DOCS"},
      {title:"Google ML Crash Course — modules", desc:"Use the relevant modules for classification metrics, data handling, and generalization.", url:"https://developers.google.com/machine-learning/crash-course/", type:"SUPPORT · FREE"}
    ],
    projectTitle: "Project 3: a defendable ML comparison", project: "Improve your first project or choose a fresh dataset. Compare two approaches using a preprocessing pipeline, explain your chosen metric, show results, and list limitations in the README.",
    exit: "You can explain why the model was selected, how evaluation was performed, how you reduced leakage risk, and what you would improve with more data or time.",
    nextAction: "Revisit your first model and improve the workflow, not just the score."
  },
  {
    id: "p5", number: "05", label: "Neural networks", title: "Deep learning foundations", tag: "DEEP LEARNING", time: "2–4 weeks", state: "core",
    description: "Understand tensors, training loops, loss, gradients, and overfitting; then train a small neural network.",
    intro: "Deep learning is not a requirement to begin ML, but it becomes useful for images, language, audio, and complex patterns. Learn one framework first: PyTorch. Start with a small task and use a pretrained model before considering training at scale.",
    tasks: ["Understand tensors, model layers, loss functions, optimizers, epochs, batches, and gradients.", "Train a small neural network and plot training versus validation behavior.", "Use a pretrained model or transfer learning for a small image/text task; document failure cases."],
    resources: [
      {title:"PyTorch — Learn the Basics", desc:"Official step-by-step path through tensors, datasets, building a network, autograd, and optimization.", url:"https://pytorch.org/tutorials/beginner/basics/intro.html", type:"CORE · FREE"},
      {title:"PyTorch — 60-minute blitz", desc:"A compact practical introduction when you want an overview before the full basics.", url:"https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html", type:"SUPPORT · FREE"},
      {title:"fast.ai — Practical Deep Learning", desc:"Application-first deep learning course for people with coding experience. Use after the basic ML workflow feels familiar.", url:"https://course.fast.ai/", type:"OPTIONAL · FREE"}
    ],
    projectTitle: "Project 4: image or text classifier", project: "Train a small neural network or adapt a pretrained model. Keep a held-out evaluation set, show several incorrect predictions, and explain where it is unreliable.",
    exit: "You can describe the training loop and why loss changes, identify overfitting from learning curves, and load a model to make predictions on new input.",
    nextAction: "Complete the PyTorch tensors and training tutorial, then run a tiny experiment."
  },
  {
    id: "p6", number: "06", label: "Language models", title: "NLP, embeddings & transformers", tag: "LLM FOUNDATIONS", time: "2–3 weeks", state: "core",
    description: "Understand how text becomes tokens and vectors, what attention does, and how to use pretrained models responsibly.",
    intro: "You do not need to train a large language model from scratch. Learn the concepts behind transformers and practise using pretrained models. Training at scale is a separate, expensive specialization—not the entry ticket to AI.",
    tasks: ["Explain tokenization, embeddings, attention, transformer blocks, pretraining, and inference at a high level.", "Use a pretrained language model for a small task and inspect its output and failure cases.", "Compare a simple baseline with a pretrained model; choose a meaningful evaluation method."],
    resources: [
      {title:"Hugging Face — LLM Course", desc:"Free course covering Transformers, datasets, tokenizers, fine-tuning, and sharing models.", url:"https://huggingface.co/learn/llm-course/chapter1/1", type:"CORE · FREE"},
      {title:"Google — Introduction to Large Language Models", desc:"A focused introduction to tokens, transformer models, and how LLMs work.", url:"https://developers.google.com/machine-learning/crash-course/llm", type:"CORE · FREE"},
      {title:"The Illustrated Transformer", desc:"A visual explanation of the Transformer architecture. Use it to build intuition, not as your only resource.", url:"https://jalammar.github.io/illustrated-transformer/", type:"SUPPORT · ARTICLE"}
    ],
    projectTitle: "Project 5: evaluate a language model", project: "Build a small text classification, extraction, or summarization demo. Create a test set with representative examples, record errors, and compare outputs against a basic baseline where possible.",
    exit: "You can distinguish training from inference, explain what a tokenizer and embedding do, and evaluate a pretrained model beyond saying its output looks good.",
    nextAction: "Read one transformer explanation and run an existing model before trying to fine-tune one."
  },
  {
    id: "p7", number: "07", label: "Build useful AI", title: "LLM applications, RAG & evaluation", tag: "GENAI", time: "2–4 weeks", state: "core",
    description: "Connect a model to useful information and tools without pretending it knows everything.",
    intro: "Learn the system around the model: retrieval, chunking, embeddings, prompt design, citations, structured output, tool calls, and evaluation. Build a narrow app that solves a real problem instead of a generic chatbot with no test plan.",
    tasks: ["Build a simple LLM application using a hosted API or a local model; understand its limits and cost/privacy trade-offs.", "Add retrieval over a small document set and display which sources support each answer.", "Create at least 15 test questions, check wrong/unsupported answers, and write down what the system should refuse to guess."],
    resources: [
      {title:"Hugging Face — LLM Course", desc:"Continue into model use, datasets, and fine-tuning concepts as needed.", url:"https://huggingface.co/learn/llm-course/chapter1/1", type:"CORE · FREE"},
      {title:"Ollama documentation", desc:"Run supported open models locally and connect them to your own applications.", url:"https://docs.ollama.com/", type:"OPTIONAL · LOCAL"},
      {title:"LlamaIndex documentation", desc:"Guides for document ingestion, retrieval, and RAG systems. Treat the docs as a reference, not another full course to binge.", url:"https://docs.llamaindex.ai/en/stable/", type:"REFERENCE"},
      {title:"Google — ML Crash Course", desc:"Revisit the LLM, embeddings, and production-system concepts when designing your app.", url:"https://developers.google.com/machine-learning/crash-course/", type:"REFERENCE · FREE"}
    ],
    projectTitle: "Project 6: grounded document assistant", project: "Build a question-answering assistant for a small, permitted collection of documents (for example, your own notes). Show source snippets or citations, provide an honest 'I don't know', and evaluate it with a fixed test set.",
    exit: "You can explain the flow from document → chunk → embedding → retrieval → model response, and demonstrate how you test factuality, retrieval misses, and unsupported questions.",
    nextAction: "Build the smallest retrieval demo with three documents before adding agents or many tools."
  },
  {
    id: "p8", number: "08", label: "Ship & show your work", title: "Deployment, portfolio & interview stories", tag: "SHIP IT", time: "1–3 weeks, then ongoing", state: "core",
    description: "Turn notebooks into reproducible projects that another person can run, test, and understand.",
    intro: "A strong project is more than a model score. It has a clear problem, a reliable data/evaluation process, reproducible setup, an interface or API where useful, honest limitations, and a README that explains your decisions.",
    tasks: ["Refactor the strongest project into clear modules and pin or document dependencies.", "Expose predictions through a small API or interface; add input validation and basic tests.", "Write a clear README with problem, data source, approach, metrics, limitations, setup, screenshots/demo, and next steps.", "Practise a 2-minute explanation: problem → choices → results → failure cases → what you learned."],
    resources: [
      {title:"FastAPI — Tutorial", desc:"Build and document a Python API for model predictions.", url:"https://fastapi.tiangolo.com/tutorial/", type:"CORE · FREE"},
      {title:"Made With ML — MLOps course", desc:"A free engineering-oriented guide to data, model evaluation, testing, serving, and monitoring.", url:"https://madewithml.com/courses/mlops/", type:"CORE · FREE"},
      {title:"GitHub Skills", desc:"Practise version control and collaboration workflows that make a project easier to review.", url:"https://skills.github.com/", type:"REFERENCE"},
      {title:"scikit-learn — model persistence", desc:"Learn how to save and load supported models safely and consistently.", url:"https://scikit-learn.org/stable/model_persistence.html", type:"REFERENCE"}
    ],
    projectTitle: "Capstone: one project worth explaining", project: "Polish one end-to-end ML or RAG project, deploy it if feasible, and include a repeatable evaluation. A smaller reliable project is better than five copied repositories you cannot explain.",
    exit: "A stranger can follow your README; you can reproduce the result, explain key design choices, discuss limitations, and debug ordinary issues without blindly rerunning a tutorial.",
    nextAction: "Choose your best existing project and improve its README before starting another repository."
  }
];

const STORAGE_KEY = "fieldGuideAimlProgressV1";
const defaultState = { checked: {}, completedPhases: {}, activePhase: "p0", focusMode: false };
let state = loadState();
let timerSeconds = 25 * 60;
let timerInterval = null;
let timerRunning = false;
let toastTimeout = null;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!stored || typeof stored !== "object") return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...stored,
      checked: stored.checked && typeof stored.checked === "object" ? stored.checked : {},
      completedPhases: stored.completedPhases && typeof stored.completedPhases === "object" ? stored.completedPhases : {}
    };
  } catch (error) {
    return structuredClone(defaultState);
  }
}
// Keep only valid task IDs during import or after curriculum edits.
function validTaskIds() { return new Set(phases.flatMap(p => p.tasks.map((_, i) => `${p.id}-t${i}`))); }
function validPhaseIds() { return new Set(phases.map(p => p.id)); }
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const status = document.getElementById("saveStatus");
    if (status) status.textContent = "Saved in this browser on this device · " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch (error) {
    const status = document.getElementById("saveStatus");
    if (status) status.textContent = "Browser storage is unavailable. Use Export progress to keep a backup.";
  }
}
function isChecked(phaseId, taskIndex) { return Boolean(state.checked[`${phaseId}-t${taskIndex}`]); }
function getPhaseDone(phase) { return phase.tasks.filter((_, i) => isChecked(phase.id, i)).length; }
function isPhaseComplete(phaseId) { return Boolean(state.completedPhases && state.completedPhases[phaseId]); }
function getCurrentPhase() {
  const incomplete = phases.find(p => !isPhaseComplete(p.id));
  return incomplete || phases[phases.length - 1];
}
function getNextTask() {
  for (const phase of phases) {
    if (isPhaseComplete(phase.id)) continue;
    for (let i = 0; i < phase.tasks.length; i++) {
      if (!isChecked(phase.id, i)) return { phase, index: i, text: phase.tasks[i] };
    }
    return { phase, index: null, text: "Review the exit check, then tick the phase-complete box." };
  }
  return null;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
}
function renderPhases() {
  const root = document.getElementById("phaseList");
  root.innerHTML = phases.map(phase => {
    const done = getPhaseDone(phase);
    const complete = isPhaseComplete(phase.id);
    const open = phase.id === state.activePhase;
    const tag = phase.state === "optional" ? "OPTIONAL" : phase.tag;
    const milestones = phase.tasks.map((task, i) => {
      const id = `${phase.id}-t${i}`;
      return `<label class="milestone"><input type="checkbox" data-task="${id}" ${state.checked[id] ? "checked" : ""}><span>${escapeHTML(task)}</span></label>`;
    }).join("");
    const resources = phase.resources.map(resource => `<a class="resource-item" href="${escapeHTML(resource.url)}" target="_blank" rel="noopener noreferrer"><span class="resource-arrow" aria-hidden="true">↗</span><span class="resource-copy"><span class="resource-title">${escapeHTML(resource.title)}</span><span class="resource-desc">${escapeHTML(resource.desc)}</span><span class="resource-type">${escapeHTML(resource.type)}</span></span></a>`).join("");
    return `<article class="phase-card ${open ? "open active" : ""} ${complete ? "completed" : ""}" id="card-${phase.id}">
      <button class="phase-summary" type="button" data-toggle-phase="${phase.id}" aria-expanded="${open}" aria-controls="content-${phase.id}">
        <span class="phase-number">${complete ? "✓" : phase.number}</span>
        <span class="phase-title-wrap"><span class="phase-meta"><span class="phase-label">${escapeHTML(phase.label)}</span><span class="phase-tag">${escapeHTML(tag)}</span></span><span class="phase-title">${escapeHTML(phase.title)}</span><span class="phase-description">${escapeHTML(phase.description)}</span></span>
        <span class="phase-status"><b>${done}/${phase.tasks.length}</b> tasks<br><span>${complete ? "PHASE SIGNED OFF" : escapeHTML(phase.time)}</span></span>
        <span class="chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="phase-content" id="content-${phase.id}">
        <p class="phase-intro">${escapeHTML(phase.intro)}</p>
        <div class="phase-columns">
          <div><div class="detail-label"><span class="detail-icon">□</span> Checkpoints</div><div class="milestone-list">${milestones}</div>
            <div class="exit-box"><span class="mini-label">Ready to move on when…</span><strong>Can you do this without following every line?</strong><p>${escapeHTML(phase.exit)}</p></div>
          </div>
          <div><div class="detail-label"><span class="detail-icon">↗</span> Curated resources</div><div class="resource-list">${resources}</div>
            <div class="project-box"><span class="mini-label">Build something</span><strong>${escapeHTML(phase.projectTitle)}</strong><p>${escapeHTML(phase.project)}</p></div>
          </div>
        </div>
        <label class="phase-completion ${complete ? "is-done" : ""}">
          <input type="checkbox" data-phase-complete="${phase.id}" ${complete ? "checked" : ""} aria-label="Mark ${escapeHTML(phase.title)} phase complete">
          <span class="completion-box" aria-hidden="true">✓</span>
          <span class="completion-copy"><strong>Phase complete?</strong><small>Tick this after finishing the core course, attempting the project, and checking that you can explain the key ideas.</small><span class="completion-status">${complete ? "✓ SIGNED OFF" : "MARK PHASE DONE"}</span></span>
        </label>
        <div class="phase-footer"><p>Estimated time is a guide—not a deadline. Use the main resource first; extras are there when you need them.</p><button class="phase-action" type="button" data-next-action="${phase.id}">Give me the next small step ↗</button></div>
      </div>
    </article>`;
  }).join("");
  root.querySelectorAll("[data-toggle-phase]").forEach(btn => btn.addEventListener("click", () => togglePhase(btn.dataset.togglePhase)));
  root.querySelectorAll("[data-task]").forEach(input => input.addEventListener("change", () => {
    state.checked[input.dataset.task] = input.checked;
    if (!input.checked) delete state.checked[input.dataset.task];
    const phaseId = input.closest(".phase-card").id.replace("card-", "");
    if (!input.checked && state.completedPhases[phaseId]) delete state.completedPhases[phaseId];
    state.activePhase = phaseId;
    const scrollY = window.scrollY;
    const taskSelector = `[data-task="${input.dataset.task}"]`;
    saveState();
    renderPhases();
    updateDashboard();
    window.scrollTo(0, scrollY);
    document.querySelector(taskSelector)?.focus({ preventScroll: true });
  }));
  root.querySelectorAll("[data-phase-complete]").forEach(input => input.addEventListener("change", () => {
    const phaseId = input.dataset.phaseComplete;
    const phase = phases.find(item => item.id === phaseId);
    if (input.checked && phase && getPhaseDone(phase) < phase.tasks.length) {
      input.checked = false;
      showToast("Tick the small checkpoints first. Then sign off this phase.");
      return;
    }
    if (input.checked) state.completedPhases[phaseId] = true;
    else delete state.completedPhases[phaseId];
    state.activePhase = phaseId;
    const scrollY = window.scrollY;
    saveState();
    renderPhases();
    updateDashboard();
    window.scrollTo(0, scrollY);
    document.querySelector(`[data-phase-complete="${phaseId}"]`)?.focus({ preventScroll: true });
    showToast(input.checked ? "Phase checkpoint saved. Nice work." : "Phase marked in progress again.");
  }));
  root.querySelectorAll("[data-next-action]").forEach(btn => btn.addEventListener("click", () => {
    const phase = phases.find(p => p.id === btn.dataset.nextAction);
    showToast(phase ? phase.nextAction : "Start with one small task.");
  }));
}
function togglePhase(phaseId) {
  state.activePhase = state.activePhase === phaseId ? "" : phaseId;
  const scrollY = window.scrollY;
  saveState();
  renderPhases();
  window.scrollTo(0, scrollY);
  document.querySelector(`[data-toggle-phase="${phaseId}"]`)?.focus({ preventScroll: true });
}
function updateDashboard() {
  const taskTotal = phases.reduce((n, p) => n + p.tasks.length, 0);
  const completedTasks = Object.keys(state.checked).filter(id => validTaskIds().has(id) && state.checked[id]).length;
  const phaseDone = phases.filter(p => isPhaseComplete(p.id)).length;
  const total = taskTotal + phases.length;
  const done = completedTasks + phaseDone;
  const percent = Math.round((done / total) * 100);
  document.getElementById("progressLabel").textContent = `${percent}% complete`;
  document.getElementById("overallProgressFill").style.width = `${percent}%`;
  document.getElementById("overallProgress").setAttribute("aria-valuenow", String(percent));
  document.getElementById("tasksDone").textContent = done;
  document.getElementById("tasksTotal").textContent = total;
  document.getElementById("phasesDone").textContent = `${phaseDone} / ${phases.length} phases`;
  const next = getNextTask();
  const title = document.getElementById("nextWinTitle");
  const text = document.getElementById("nextWinText");
  const jump = document.getElementById("jumpToNextBtn");
  if (next) {
    title.textContent = next.phase.title;
    text.textContent = `Next checkpoint: ${next.text}`;
    jump.setAttribute("aria-label", `Go to ${next.phase.title}, next checkpoint`);
    jump.dataset.phase = next.phase.id;
  } else {
    title.textContent = "You completed the roadmap checkpoints";
    text.textContent = "Now choose a specialization, deepen one project, and keep practising explaining your decisions.";
    jump.dataset.phase = phases[phases.length - 1].id;
    jump.setAttribute("aria-label", "Review the final phase");
  }
  document.getElementById("resumeBtn").textContent = next ? "Resume my path ↗" : "Review my path ↗";
}
function goToPhase(phaseId, shouldScroll = true) {
  state.activePhase = phaseId;
  saveState(); renderPhases(); updateDashboard();
  if (shouldScroll) {
    const card = document.getElementById(`card-${phaseId}`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
function showToast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove("show"), 4000);
}
function setFocusMode(enabled) {
  state.focusMode = enabled;
  document.body.classList.toggle("focus-mode", enabled);
  const button = document.getElementById("focusModeBtn");
  button.setAttribute("aria-pressed", String(enabled));
  button.innerHTML = enabled ? '<span aria-hidden="true">◑</span> Exit focus' : '<span aria-hidden="true">◐</span> Focus mode';
  saveState();
}
function updateTimerDisplay() {
  const min = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
  const sec = (timerSeconds % 60).toString().padStart(2, "0");
  document.getElementById("timerDisplay").textContent = `${min}:${sec}`;
  document.title = timerRunning ? `${min}:${sec} · Field Guide` : "Field Guide — Your AI/ML Learning Path";
}
function stopTimer(reset = false) {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null; timerRunning = false;
  document.getElementById("timerStartBtn").textContent = "Start focus";
  if (reset) timerSeconds = 25 * 60;
  updateTimerDisplay();
}
function exportProgress() {
  const blob = new Blob([JSON.stringify({app:"FieldGuideAIML",version:2,exportedAt:new Date().toISOString(),state}, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); link.href = url; link.download = "field-guide-aiml-progress.json"; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
  showToast("Progress backup downloaded.");
}
function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const incoming = parsed.state || parsed;
      if (!incoming || typeof incoming !== "object" || !incoming.checked || typeof incoming.checked !== "object") throw new Error("Invalid progress format");
      const allowed = validTaskIds();
      const cleaned = {};
      Object.entries(incoming.checked).forEach(([id, value]) => { if (allowed.has(id) && value === true) cleaned[id] = true; });
        const allowedPhases = validPhaseIds();
      const cleanedPhases = {};
      Object.entries(incoming.completedPhases && typeof incoming.completedPhases === "object" ? incoming.completedPhases : {}).forEach(([id, value]) => {
        const phase = phases.find(item => item.id === id);
        const allTasksChecked = phase && phase.tasks.every((_, index) => Boolean(cleaned[`${id}-t${index}`]));
        if (allowedPhases.has(id) && value === true && allTasksChecked) cleanedPhases[id] = true;
      });
      state = {checked:cleaned,completedPhases:cleanedPhases,activePhase:phases.some(p=>p.id===incoming.activePhase)?incoming.activePhase:getCurrentPhase().id,focusMode:Boolean(incoming.focusMode)};
      saveState(); setFocusMode(state.focusMode); renderPhases(); updateDashboard();
      showToast("Progress imported.");
    } catch (error) { showToast("That file doesn't look like a Field Guide progress backup."); }
    document.getElementById("importFile").value = "";
  };
  reader.readAsText(file);
}

document.getElementById("resumeBtn").addEventListener("click", () => {
  const next = getNextTask();
  goToPhase(next ? next.phase.id : phases[phases.length - 1].id);
});
document.getElementById("jumpToNextBtn").addEventListener("click", event => goToPhase(event.currentTarget.dataset.phase || getCurrentPhase().id));
document.getElementById("focusModeBtn").addEventListener("click", () => setFocusMode(!state.focusMode));
document.getElementById("timerStartBtn").addEventListener("click", () => {
  if (timerRunning) {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null; timerRunning = false;
    document.getElementById("timerStartBtn").textContent = "Resume focus";
    updateTimerDisplay();
    return;
  }
  if (timerSeconds <= 0) timerSeconds = 25 * 60;
  timerRunning = true;
  document.getElementById("timerStartBtn").textContent = "Pause";
  timerInterval = setInterval(() => {
    timerSeconds -= 1;
    if (timerSeconds <= 0) {
      timerSeconds = 0; stopTimer(false); showToast("Focus session complete. Take a short break or keep going if you're in flow.");
    } else updateTimerDisplay();
  }, 1000);
  updateTimerDisplay();
});
document.getElementById("timerResetBtn").addEventListener("click", () => stopTimer(true));
document.getElementById("exportBtn").addEventListener("click", exportProgress);
document.getElementById("importFile").addEventListener("change", event => { if (event.target.files && event.target.files[0]) importProgress(event.target.files[0]); });
document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Reset all roadmap checkboxes on this browser? Export a backup first if you want to keep your progress.")) return;
  state = structuredClone(defaultState); saveState(); setFocusMode(false); renderPhases(); updateDashboard(); showToast("Progress reset. Your next small step is ready.");
});

// Restore only valid local task IDs in case the roadmap has been edited since the last visit.
const allowedIds = validTaskIds();
const allowedPhases = validPhaseIds();
Object.keys(state.checked || {}).forEach(id => { if (!allowedIds.has(id) || !state.checked[id]) delete state.checked[id]; });
Object.keys(state.completedPhases || {}).forEach(id => {
  const phase = phases.find(item => item.id === id);
  const allTasksChecked = phase && phase.tasks.every((_, index) => Boolean(state.checked[`${id}-t${index}`]));
  if (!allowedPhases.has(id) || !state.completedPhases[id] || !allTasksChecked) delete state.completedPhases[id];
});
if (!phases.some(p => p.id === state.activePhase)) state.activePhase = getCurrentPhase().id;
renderPhases(); updateDashboard(); setFocusMode(Boolean(state.focusMode)); updateTimerDisplay();
