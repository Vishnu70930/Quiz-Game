const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: 2
  },
  {
    question: "Which is the largest planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: 2
  },
  {
    question: "What language is used for web apps?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Dante", "Chaucer", "Shakespeare", "Milton"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.backgroundColor = "white";
    btn.disabled = false;
  });
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach(btn => btn.disabled = true);

  if (index === q.answer) {
    optionButtons[index].style.backgroundColor = "lightgreen";
    score++;
  } else {
    optionButtons[index].style.backgroundColor = "salmon";
    optionButtons[q.answer].style.backgroundColor = "lightgreen";
  }

  document.getElementById("score").innerText = `Score: ${score}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${questions.length}</p>
    `;
  }
}

loadQuestion();
