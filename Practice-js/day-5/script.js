// Constructor for Questions
function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  
  // Array of Questions
  const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
    new Question("What is the capital of India?", ["Mumbai", "Delhi", "Chennai", "Kolkata"], "Delhi"),
    new Question("Which one is a fruit?", ["Carrot", "Apple", "Potato", "Onion"], "Apple"),
  ];
  
  // Variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM Elements
  const questionEl = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  // Function to display question
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.questionText;
  
    optionsDiv.innerHTML = ""; // Clear previous options
  
    currentQuestion.options.forEach(option => {
      let button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", checkAnswer);
      optionsDiv.appendChild(button);
    });
  
    nextBtn.style.display = "none"; // Hide Next button until an option is selected
  }
  
  // Function to check answer
  function checkAnswer(event) {
    let selectedOption = event.target.innerText;
    let currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Disable all buttons after selection
    Array.from(optionsDiv.children).forEach(button => {
      button.disabled = true;
      if (button.innerText === currentQuestion.correctAnswer) {
        button.style.backgroundColor = "green";
      } else if (button.innerText === selectedOption) {
        button.style.backgroundColor = "red";
      }
    });
  
    nextBtn.style.display = "block"; // Show Next button
  }
  
  // Function to go to next question
  nextBtn.addEventListener("click", function() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  // Function to display final score
  function showScore() {
    questionEl.style.display = "none";
    optionsDiv.style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
    scoreEl.style.display = "block";
  }
  
  // Start the quiz
  showQuestion();
  