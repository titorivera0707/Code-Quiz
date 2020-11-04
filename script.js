var highScore = document.querySelector(".highscore");
var timeLeft = document.querySelector(".time-left");
var question = document.querySelector(".questions");
var heading = document.querySelector(".heading");
var firstQ = document.querySelector("#first");
var secondQ = document.querySelector("#second");
var thirdQ = document.querySelector("#third");
var fourthQ = document.querySelector("#fourth");
var response = document.querySelector(".response");

var secondsLeft = 3;

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

function allQuestions() {
var questions = [
  { q: "What color is the sky?", a:1},
  { q: "How many days in a year?", a:2},
  { q: "How many ounces in a pound?", a:3},
  { q: "What year was the declaration of independence written?", a:2},
  { q: "What color are bananas?", a:4},
  { q: "What grade will I get for this quiz?", a:3}
];

var score = 0;
var answer1 = document.getElementById("first");
var answer2 = document.getElementById("second");
var answer3 = document.getElementById("third");
var answer4 = document.getElementById("fourth");

if (questions[0] === 1){
  score++;
}
else {
  secondsLeft - 10;
}
if (questions[1] === 2){
  score++;
}
else {
  secondsLeft - 10;
}
}

function timeUp() {
  heading.textContent ="All Done!";  
}
setTime();