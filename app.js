/*
  FIELD GUIDE — editable learning roadmap
  To change the curriculum, edit the `phases` array below.
  This guide contains topics, practical projects, and curated learning resources.
*/
const phases = [
  {
    id: "p0", number: "00", label: "Start here", title: "Make starting easy", tag: "SETUP", time: "1–3 short sessions", state: "core",
    description: "Create a learning loop and refresh only the Python you need. You are allowed to begin before you feel ready.",
    intro: "The goal is not to study all of Python again. It is to be comfortable reading a short script, running a notebook, and looking up unfamiliar syntax. Keep your work in one repository so your experiments and notes stay organized.",
    topics: ["Create one Git repository for this journey and a Python notebook environment.", "Refresh functions, lists, dictionaries, loops, imports, and reading files only where needed.", "Finish the core Python lesson and write a tiny script without copying the whole solution."],
    resources: [
      {title:"Kaggle Learn — Python", desc:"Short, hands-on lessons with exercises. Use this as the main resource if Python feels rusty.", url:"https://www.kaggle.com/learn/python", type:"CORE · FREE"},
      {title:"Python official tutorial", desc:"Use as a reference when syntax or language behavior is confusing.", url:"https://docs.python.org/3/tutorial/", type:"REFERENCE"},
      {title:"GitHub Skills", desc:"A guided way to practise repositories, commits, and collaboration basics.", url:"https://skills.github.com/", type:"REFERENCE"}
    ],
    projectTitle: "Tiny script: dataset reporter", project: "Write a script or notebook that loads a small CSV, prints its dimensions, lists its columns, and reports missing values. Keep the code and a short explanation in Git.",
    exit: "You can run a notebook, explain imports and variables, find documentation, and debug a basic error without restarting from a new tutorial.",

  },
  {
    id: "p1", number: "01", label: "Work with data", title: "Python data toolkit", tag: "DATA", time: "1–2 weeks at a gentle pace", state: "core",
    description: "Turn raw rows into useful observations using NumPy, pandas, and visualisations.",
    intro: "Data work is a large part of practical ML. Learn the common operations by doing them on one dataset—not by memorising every library function. You can use Jupyter or Google Colab; a powerful GPU is not needed here.",
    topics: ["Use NumPy arrays and understand shape, indexing, and simple vector operations.", "Use pandas to read, filter, sort, group, join, and handle missing values in a CSV.", "Make at least three plots and write five observations supported by the data."],
    resources: [
      {title:"Kaggle Learn — Pandas", desc:"Practical reading, selecting, grouping, combining, and cleaning data exercises.", url:"https://www.kaggle.com/learn/pandas", type:"CORE · FREE"},
      {title:"Kaggle Learn — Data Visualization", desc:"Short lessons on distributions, line charts, bar charts, heatmaps, and scatter plots.", url:"https://www.kaggle.com/learn/data-visualization", type:"CORE · FREE"},
      {title:"NumPy — absolute basics", desc:"Official quickstart for arrays, dimensions, indexing, and operations.", url:"https://numpy.org/doc/stable/user/absolute_beginners.html", type:"REFERENCE"},
      {title:"pandas — getting started", desc:"Official tutorials to revisit when you need a specific operation.", url:"https://pandas.pydata.org/docs/getting_started/intro_tutorials/", type:"REFERENCE"}
    ],
    projectTitle: "Project 1: dataset explorer", project: "Pick a small public dataset (for example, a student, weather, or sales dataset). Clean it, explore it, plot patterns, and write a short findings section. Do not train a model yet.",
    exit: "You can load an unfamiliar CSV, inspect and clean it, group values, make a useful plot, and explain at least five evidence-based findings.",

  },
  {
    id: "p2", number: "02", label: "Understand the why", title: "Math for ML (alongside everything else)", tag: "MATH", time: "Ongoing · revisit as needed", state: "core",
    description: "Build enough statistics, linear algebra, probability, and calculus to understand model behavior.",
    intro: "Do not spend months completing math playlists before touching ML. Learn the concept you need, then return to code and see where it appears. You do not need advanced proofs to start your first models.",
    topics: ["Explain mean, median, variance, standard deviation, distributions, and outliers using a dataset.", "Understand vectors, matrices, dot products, and what a feature vector represents.", "Build intuition for probability, derivatives, loss, and gradient descent; derive details later if needed."],
    resources: [
      {title:"Khan Academy — Statistics and probability", desc:"A structured refresher for descriptive statistics and probability foundations.", url:"https://www.khanacademy.org/math/statistics-probability", type:"CORE · FREE"},
      {title:"3Blue1Brown — Essence of Linear Algebra", desc:"Visual intuition for vectors, matrices, transformations, and dot products.", url:"https://www.3blue1brown.com/topics/linear-algebra", type:"CORE · VIDEO"},
      {title:"3Blue1Brown — Essence of Calculus", desc:"Visual intuition for derivatives and the idea behind gradient-based learning.", url:"https://www.3blue1brown.com/topics/calculus", type:"CORE · VIDEO"},
      {title:"StatQuest", desc:"Friendly visual explanations of statistics and ML ideas; search for the exact concept you meet.", url:"https://www.youtube.com/@statquest", type:"SUPPORT · VIDEO"}
    ],
    projectTitle: "Mini-lab: see a model learn", project: "Generate or use a small numeric dataset, plot the relationship between two variables, fit a simple line, and describe how prediction errors change as the line changes.",
    exit: "You can explain, in plain language, what a feature vector, average, variance, probability, loss, and derivative are used for. You can keep learning the math while building models.",

  },
  {
    id: "p3", number: "03", label: "First models", title: "Machine learning foundations", tag: "ML CORE", time: "1–2 weeks", state: "core",
    description: "Train a model, evaluate it honestly, and understand what the numbers actually mean.",
    intro: "This is your first real ML loop: define a problem, identify features and target, split data, establish a baseline, fit a model, and evaluate unseen examples. Accuracy alone is not always the right metric.",
    topics: ["Explain supervised learning, features, target labels, regression, and classification.", "Create a train/test split and establish a simple baseline before improving anything.", "Train a scikit-learn model and choose an appropriate metric; explain overfitting and data leakage."],
    resources: [
      {title:"Kaggle Learn — Intro to Machine Learning", desc:"A compact, hands-on introduction to your first models and validation.", url:"https://www.kaggle.com/learn/intro-to-machine-learning", type:"CORE · FREE"},
      {title:"Google — Machine Learning Crash Course", desc:"Structured explanations, videos, interactive exercises, and modern topics including LLM basics.", url:"https://developers.google.com/machine-learning/crash-course/", type:"CORE · FREE"},
      {title:"StatQuest — A Gentle Introduction to ML", desc:"A beginner-friendly video to build intuition before the more technical lessons.", url:"https://www.youtube.com/watch?v=Gv9_4yMHFhI", type:"SUPPORT · VIDEO"},
      {title:"scikit-learn — Getting started", desc:"The main reference for fitting, predicting, preprocessing, and evaluating models.", url:"https://scikit-learn.org/stable/getting_started.html", type:"REFERENCE"}
    ],
    projectTitle: "Project 2: your first prediction model", project: "Choose a beginner tabular regression or classification dataset. Build a baseline, train one model, evaluate it on held-out data, and write what the result does and does not tell you.",
    exit: "You can explain the full train/test workflow, why a baseline matters, why the metric fits the problem, and how a model can overfit.",

  },
  {
    id: "p4", number: "04", label: "Become reliable", title: "Practical classical ML", tag: "ML PRACTICE", time: "1–3 weeks", state: "core",
    description: "Make your model less fragile with preprocessing, pipelines, validation, comparisons, and error analysis.",
    intro: "Real datasets are messy. Learn how to build a fair comparison between models and avoid accidentally leaking information from the test set. Fewer well-explained algorithms beat a long list you cannot defend.",
    topics: ["Handle missing values and categorical features using a reproducible preprocessing pipeline.", "Compare at least two algorithms using suitable validation and metrics.", "Inspect errors, check for leakage, and record limitations instead of chasing a perfect score."],
    resources: [
      {title:"Kaggle Learn — Intermediate Machine Learning", desc:"Missing values, categorical variables, pipelines, cross-validation, and data leakage.", url:"https://www.kaggle.com/learn/intermediate-machine-learning", type:"CORE · FREE"},
      {title:"scikit-learn — Common pitfalls", desc:"Official guidance on leakage, inconsistent preprocessing, and evaluation mistakes.", url:"https://scikit-learn.org/stable/common_pitfalls.html", type:"CORE · DOCS"},
      {title:"Google ML Crash Course — modules", desc:"Use the relevant modules for classification metrics, data handling, and generalization.", url:"https://developers.google.com/machine-learning/crash-course/", type:"SUPPORT · FREE"}
    ],
    projectTitle: "Project 3: a defendable ML comparison", project: "Improve your first project or choose a fresh dataset. Compare two approaches using a preprocessing pipeline, explain your chosen metric, show results, and list limitations in the README.",
    exit: "You can explain why the model was selected, how evaluation was performed, how you reduced leakage risk, and what you would improve with more data or time.",

  },
  {
    id: "p5", number: "05", label: "Neural networks", title: "Deep learning foundations", tag: "DEEP LEARNING", time: "2–4 weeks", state: "core",
    description: "Understand tensors, training loops, loss, gradients, and overfitting; then train a small neural network.",
    intro: "Deep learning is not a requirement to begin ML, but it becomes useful for images, language, audio, and complex patterns. Learn one framework first: PyTorch. Start with a small task and use a pretrained model before considering training at scale.",
    topics: ["Understand tensors, model layers, loss functions, optimizers, epochs, batches, and gradients.", "Train a small neural network and plot training versus validation behavior.", "Use a pretrained model or transfer learning for a small image/text task; document failure cases."],
    resources: [
      {title:"PyTorch — Learn the Basics", desc:"Official step-by-step path through tensors, datasets, building a network, autograd, and optimization.", url:"https://pytorch.org/tutorials/beginner/basics/intro.html", type:"CORE · FREE"},
      {title:"PyTorch — 60-minute blitz", desc:"A compact practical introduction when you want an overview before the full basics.", url:"https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html", type:"SUPPORT · FREE"},
      {title:"fast.ai — Practical Deep Learning", desc:"Application-first deep learning course for people with coding experience. Use after the basic ML workflow feels familiar.", url:"https://course.fast.ai/", type:"OPTIONAL · FREE"}
    ],
    projectTitle: "Project 4: image or text classifier", project: "Train a small neural network or adapt a pretrained model. Keep a held-out evaluation set, show several incorrect predictions, and explain where it is unreliable.",
    exit: "You can describe the training loop and why loss changes, identify overfitting from learning curves, and load a model to make predictions on new input.",

  },
  {
    id: "p6", number: "06", label: "Language models", title: "NLP, embeddings & transformers", tag: "LLM FOUNDATIONS", time: "2–3 weeks", state: "core",
    description: "Understand how text becomes tokens and vectors, what attention does, and how to use pretrained models responsibly.",
    intro: "You do not need to train a large language model from scratch. Learn the concepts behind transformers and practise using pretrained models. Training at scale is a separate, expensive specialization—not the entry ticket to AI.",
    topics: ["Explain tokenization, embeddings, attention, transformer blocks, pretraining, and inference at a high level.", "Use a pretrained language model for a small task and inspect its output and failure cases.", "Compare a simple baseline with a pretrained model; choose a meaningful evaluation method."],
    resources: [
      {title:"Hugging Face — LLM Course", desc:"Free course covering Transformers, datasets, tokenizers, fine-tuning, and sharing models.", url:"https://huggingface.co/learn/llm-course/chapter1/1", type:"CORE · FREE"},
      {title:"Google — Introduction to Large Language Models", desc:"A focused introduction to tokens, transformer models, and how LLMs work.", url:"https://developers.google.com/machine-learning/crash-course/llm", type:"CORE · FREE"},
      {title:"The Illustrated Transformer", desc:"A visual explanation of the Transformer architecture. Use it to build intuition, not as your only resource.", url:"https://jalammar.github.io/illustrated-transformer/", type:"SUPPORT · ARTICLE"}
    ],
    projectTitle: "Project 5: evaluate a language model", project: "Build a small text classification, extraction, or summarization demo. Create a test set with representative examples, record errors, and compare outputs against a basic baseline where possible.",
    exit: "You can distinguish training from inference, explain what a tokenizer and embedding do, and evaluate a pretrained model beyond saying its output looks good.",

  },
  {
    id: "p7", number: "07", label: "Build useful AI", title: "LLM applications, RAG & evaluation", tag: "GENAI", time: "2–4 weeks", state: "core",
    description: "Connect a model to useful information and tools without pretending it knows everything.",
    intro: "Learn the system around the model: retrieval, chunking, embeddings, prompt design, citations, structured output, tool calls, and evaluation. Build a narrow app that solves a real problem instead of a generic chatbot with no test plan.",
    topics: ["Build a simple LLM application using a hosted API or a local model; understand its limits and cost/privacy trade-offs.", "Add retrieval over a small document set and display which sources support each answer.", "Create at least 15 test questions, check wrong/unsupported answers, and write down what the system should refuse to guess."],
    resources: [
      {title:"Hugging Face — LLM Course", desc:"Continue into model use, datasets, and fine-tuning concepts as needed.", url:"https://huggingface.co/learn/llm-course/chapter1/1", type:"CORE · FREE"},
      {title:"Ollama documentation", desc:"Run supported open models locally and connect them to your own applications.", url:"https://docs.ollama.com/", type:"OPTIONAL · LOCAL"},
      {title:"LlamaIndex documentation", desc:"Guides for document ingestion, retrieval, and RAG systems. Treat the docs as a reference, not another full course to binge.", url:"https://docs.llamaindex.ai/en/stable/", type:"REFERENCE"},
      {title:"Google — ML Crash Course", desc:"Revisit the LLM, embeddings, and production-system concepts when designing your app.", url:"https://developers.google.com/machine-learning/crash-course/", type:"REFERENCE · FREE"}
    ],
    projectTitle: "Project 6: grounded document assistant", project: "Build a question-answering assistant for a small, permitted collection of documents (for example, your own notes). Show source snippets or citations, provide an honest 'I don't know', and evaluate it with a fixed test set.",
    exit: "You can explain the flow from document → chunk → embedding → retrieval → model response, and demonstrate how you test factuality, retrieval misses, and unsupported questions.",

  },
  {
    id: "p8", number: "08", label: "Ship & show your work", title: "Deployment, portfolio & interview stories", tag: "SHIP IT", time: "1–3 weeks, then ongoing", state: "core",
    description: "Turn notebooks into reproducible projects that another person can run, test, and understand.",
    intro: "A strong project is more than a model score. It has a clear problem, a reliable data/evaluation process, reproducible setup, an interface or API where useful, honest limitations, and a README that explains your decisions.",
    topics: ["Refactor the strongest project into clear modules and pin or document dependencies.", "Expose predictions through a small API or interface; add input validation and basic tests.", "Write a clear README with problem, data source, approach, metrics, limitations, setup, screenshots/demo, and next steps.", "Practise a 2-minute explanation: problem → choices → results → failure cases → what you learned."],
    resources: [
      {title:"FastAPI — Tutorial", desc:"Build and document a Python API for model predictions.", url:"https://fastapi.tiangolo.com/tutorial/", type:"CORE · FREE"},
      {title:"Made With ML — MLOps course", desc:"A free engineering-oriented guide to data, model evaluation, testing, serving, and monitoring.", url:"https://madewithml.com/courses/mlops/", type:"CORE · FREE"},
      {title:"GitHub Skills", desc:"Practise version control and collaboration workflows that make a project easier to review.", url:"https://skills.github.com/", type:"REFERENCE"},
      {title:"scikit-learn — model persistence", desc:"Learn how to save and load supported models safely and consistently.", url:"https://scikit-learn.org/stable/model_persistence.html", type:"REFERENCE"}
    ],
    projectTitle: "Capstone: one project worth explaining", project: "Polish one end-to-end ML or RAG project, deploy it if feasible, and include a repeatable evaluation. A smaller reliable project is better than five copied repositories you cannot explain.",
    exit: "A stranger can follow your README; you can reproduce the result, explain key design choices, discuss limitations, and debug ordinary issues without blindly rerunning a tutorial.",

  }
];

let activePhase = "p0";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function renderPhases() {
  const root = document.getElementById("phaseList");
  root.innerHTML = phases.map(phase => {
    const open = phase.id === activePhase;
    const tag = phase.state === "optional" ? "OPTIONAL" : phase.tag;
    const topics = phase.topics.map(topic => `<li class="topic-item">${escapeHTML(topic)}</li>`).join("");
    const resources = phase.resources.map(resource => `
      <a class="resource-item" href="${escapeHTML(resource.url)}" target="_blank" rel="noopener noreferrer">
        <span class="resource-arrow" aria-hidden="true">↗</span>
        <span class="resource-copy">
          <span class="resource-title">${escapeHTML(resource.title)}</span>
          <span class="resource-desc">${escapeHTML(resource.desc)}</span>
          <span class="resource-type">${escapeHTML(resource.type)}</span>
        </span>
      </a>`).join("");

    return `<article class="phase-card ${open ? "open active" : ""}" id="card-${phase.id}">
      <button class="phase-summary" type="button" data-toggle-phase="${phase.id}" aria-expanded="${open}" aria-controls="content-${phase.id}">
        <span class="phase-number">${escapeHTML(phase.number)}</span>
        <span class="phase-title-wrap">
          <span class="phase-meta"><span class="phase-label">${escapeHTML(phase.label)}</span><span class="phase-tag">${escapeHTML(tag)}</span></span>
          <span class="phase-title">${escapeHTML(phase.title)}</span>
          <span class="phase-description">${escapeHTML(phase.description)}</span>
        </span>
        <span class="chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="phase-content" id="content-${phase.id}" ${open ? "" : "hidden"}>
        <p class="phase-intro">${escapeHTML(phase.intro)}</p>
        <div class="phase-columns">
          <div>
            <div class="detail-label"><span class="detail-icon">▤</span> Topics to cover</div>
            <ul class="topic-list">${topics}</ul>
            <div class="exit-box">
              <span class="mini-label">Key understanding</span>
              <strong>Ideas to understand and explain</strong>
              <p>${escapeHTML(phase.exit)}</p>
            </div>
          </div>
          <div>
            <div class="detail-label"><span class="detail-icon">↗</span> Learning resources</div>
            <div class="resource-list">${resources}</div>
            <div class="project-box">
              <span class="mini-label">Practical project</span>
              <strong>${escapeHTML(phase.projectTitle)}</strong>
              <p>${escapeHTML(phase.project)}</p>
            </div>
          </div>
        </div>
        <div class="phase-footer"><p><strong>Suggested pace:</strong> ${escapeHTML(phase.time)}. Use the main resource first; explore extra resources when a concept needs clarification.</p></div>
      </div>
    </article>`;
  }).join("");

  root.querySelectorAll("[data-toggle-phase]").forEach(button => {
    button.addEventListener("click", () => togglePhase(button.dataset.togglePhase));
  });
}

function togglePhase(phaseId) {
  activePhase = activePhase === phaseId ? "" : phaseId;
  const scrollY = window.scrollY;
  renderPhases();
  window.scrollTo(0, scrollY);
  document.querySelector(`[data-toggle-phase="${phaseId}"]`)?.focus({ preventScroll: true });
}

renderPhases();
