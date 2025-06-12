// ✅ Step 2: Interactive Quiz Logic
const quiz = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Hot Mail", "How To Make Links"],
    answer: 0
  },
  {
    question: "Which tag is used for JavaScript?",
    options: ["<js>", "<javascript>", "<script>"],
    answer: 2
  },
  {
    question: "Which CSS property is used for responsive layouts?",
    options: ["float", "media queries", "z-index"],
    answer: 1
  }
];

let quizIndex = 0;

function loadQuiz() {
  const q = quiz[quizIndex];
  document.getElementById("quiz-question").textContent = q.question;
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = ""; // Clear previous options

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.answer) {
        alert("✅ Correct!");
      } else {
        alert("❌ Wrong!");
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex < quiz.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-section").innerHTML = "<h3>🎉 Quiz Finished!</h3>";
  }
}

// Initialize the quiz
loadQuiz();


// ✅ Step 3: Fetch Joke from API
async function fetchJoke() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById("joke").textContent = "⚠️ Failed to fetch joke. Try again later.";
    console.error("Error fetching joke:", error);
  }
}