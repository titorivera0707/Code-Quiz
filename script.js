var highScore = document.querySelector(".highscore");
var timeLeft = document.querySelector(".time-left");
var question = document.querySelector(".questions");
var heading = document.querySelector(".heading");
var response = document.querySelector(".response");
var chooseAnswer = document.querySelector(".buttons")
var score = 0;
var secondsLeft = 3;
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

function test(arr, c) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === c) {
      alert('You chose correctly!')
    }
  }
  questions[0].a
}

test(questions[0].a, questions[0].c)

chooseAnswer.addEventListener("click", function() {
  score();

})

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      allQuestions();
    }

  }, 1000);
}

setTime();