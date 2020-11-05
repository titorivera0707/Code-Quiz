var highScore = document.querySelector(".highscore");
var timeLeft = document.querySelector(".time-left");
var question = document.querySelector(".questions");
var heading = document.querySelector(".heading");
var answers = document.querySelector(".answers");
// var button1 = document.querySelector("#b1");
// var button2 = document.querySelector("#b2");
// var button3 = document.querySelector("#b3");
// var button4 = document.querySelector("#b4");
var response = document.querySelector(".response");
// var chooseAnswer = document.querySelector(".buttons")
var score = 0;
var secondsLeft = 100;
// var totalScores = JSON.parse(localSotrage.getItem("userData"));
var index = 0;
var questions = [ 
  { q: "What color is the sky?", a: ["blue", "red", "white", "black"], c:"blue"},
  { q: "How many days in a year?", a:2},
  { q: "How many ounces in a pound?", a:3},
  { q: "What year was the declaration of independence written?", a:2},
  { q: "What color are bananas?", a:4},
  { q: "What grade will I get for this quiz?", a:3}
];

function start() {
  var startQuiz = document.createElement("h2");
  startQuiz.textContent = "Code Quiz!"
  startQuiz.classList.add("center");
  question.appendChild(startQuiz);
  var instructions = document.createElement("h4");
  instructions.textContent = "In this code quiz, you will be answering questions about coding. Each question will have 4 options but only 1 answer. For every question that you get right, you will get a point. If you answer a question wrong, you will not get a point and you will lose 10 seconds. Quiz will begin once you click on the Start Quiz button."
  instructions.classList.add("center");
  heading.appendChild(instructions);
  var startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  startButton.classList.add("boldquiz");
  answers.appendChild(startButton);
  startButton.addEventListener("click", function() {
    test();
    setTime();
    startButton.classList.add("d-none");
    startQuiz.classList.add("d-none");
    instructions.classList.add("d-none")
  });
}
start();

function test() {
  for (var i = 0; i < questions.length; i++){
    if (i < questions.length){
      var newQuestions = document.createElement("h2");
      newQuestions.textContent = questions[i].q;
      question.appendChild(newQuestions);
      if(i < questions.length){
        allQuestions();
      }
      else {
        i = 0
        allQuestions();
      }
    }
  }
}
function allQuestions(c){
  for (var i = 0; i < questions.length; i++) {
    var buttons = document.createElement("button");
    buttons.textContent = questions[i].d
    answers.appendChild(buttons);
    buttons.addEventListener("click", function() {
    
    if(questions[i] === c) { 
      alert('You chose correctly!');
      test();
    }
    else {
      alert('You chose wrong!');
      secondsLeft - 10;
      test();
    }
  });
}
}

// console.log(test(questions[0].a, questions[0].c))


// chooseAnswer.addEventListener("click", function() {
//   score();
//   question();
// })

// function () {
//   question.
  
// }

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      // highScore();
    }

  }, 1000);
}