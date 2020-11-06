var highScore = document.querySelector(".highscore");
var timeLeft = document.querySelector(".time-left");
var question = document.querySelector(".questions");
var heading = document.querySelector(".heading");
var answers = document.querySelector(".answers");
var response = document.querySelector(".response");
var score = 0;
var secondsLeft = 100;
var index = 0;
var questions = [ 
  { q: "What color is the sky?", a: ["blue", "red", "white", "black"], c:"blue"},
  { q: "How many days in a year?", a:["12" , "100", "250", "365"], c:"365"},
  { q: "How many ounces in a pound?", a:["10", "11", "15", "16"], c: "16"},
  { q: "What year was the declaration of independence written?", a:["1775","1776", "1777", "2001"], c:"1776"},
  { q: "What color are bananas?", a:["blue", "red", "white", "black"], c:"blue"},
  { q: "What grade will I get for this quiz?", a:["12" , "100", "250", "365"], c:"365"},
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
  renderQuestion(questions[index].q, questions[index].a);
  setTime();
  startButton.classList.add("d-none");
  startQuiz.classList.add("d-none");
  instructions.classList.add("d-none");
  });
}



function renderQuestion(q, aArr) {

  var questionEl = document.createElement("h2");
  questionEl.textContent = q
  question.appendChild(questionEl);
  for (var j = 0; j < aArr.length; j++) {
  var answerButton = document.createElement("button");
  answerButton.setAttribute("id", "btn-"+j);
  answerButton.textContent = aArr[j];
  answers.appendChild(answerButton);
  }
  
}


function logic(j, aArr) {
  if(j === aArr.length - 1) {
    highscores();
    return
  } 
  else {
    renderQuestion(score, index);
    if (renderQuestion() === true) {
      score++;
      index++;
    }
    else {
      index++;
      secondsLeft - 10;
    }
    console.log(j, questions)
    // if true, we then add score + iterate the index
    // if question is still there, hide the previous question
    // if false, we iterate the index and subtract the seconds
    // we then finally call back the logic function passing in our new index and array
    return logic(index, arr)
  }
}
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      highScores();
    }

  }, 1000);
}
function highScores() {
  alert("Finished!")
}

function evaluation(userChoice, correctAnswer) {
  if(userChoice === correctAnswer) {
    console.log(userChoice)
    console.log(correctAnswer)
    return true;
    
  } else {
    return false;
  }
}
document.documentElement.addEventListener("click", function(e) {
  if(e.target && e.target.id) {
    console.log(e.target)
    evaluation(e.target.textContent, questions[index].c)
  }
})
console.log(index)
console.log(score)
start();