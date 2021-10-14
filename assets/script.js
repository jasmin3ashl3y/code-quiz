var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: {
           choiceOne: "<js>",
           choiceTwo: "<javascript>",
           choiceThree: "<script>",
           choiceFour: "<link type=script>",
           correct:"Three",
        },
    },
    {
        question: "Where is the correct place to insert the Javascript tag?",
        answers: {
           choiceOne: "in the <head> tag",
           choiceTwo: "in the !DOCTYPE declaration",
           choiceThree: "at the end of the <body> tag",
           choiceFour: "in the <footer> tag",
           correct:"Three",
        },
    },
    {
        question: "What year was JavaScript created?",
        answers: {
           choiceOne: "2003",
           choiceTwo: "1989",
           choiceThree: "1992",
           choiceFour: "1995",
           correct:"Four",
        },
    },
    {
        question: "What is Boolean data type?",
        answers: {
           choiceOne: "one of two possible values, usually true or false",
           choiceTwo: "named after George Boole",
           choiceThree: "an algebraic system of logic",
           choiceFour: "all of the above",
           correct:"Four",
        },
    },
    {
        question: "Javascript is hard to learn",
        answers: {
           choiceOne: "yup",
           choiceTwo: "totally",
           choiceThree: "seems like it",
           choiceFour: "yes",
           correct:"Two",
        },
    }
];

var i = 0;

var timeRemaining = 75;
var newTime = timeRemaining;

var choiceOne = document.getElementById('one');
var choiceTwo = document.getElementById('two');
var choiceThree = document.getElementById('three');
var choiceFour = document.getElementById('four');

var timesUp = document.getElementById('times-up');
var gameOver = document.getElementById('game-over');
var quizStart = document.getElementById('quiz-start');
var quizContinue = document.getElementById('quiz-continue');
var question = document.getElementById('questions');
var gameOver = document.getElementById('game-over');
var checkAnswer = document.getElementById('check-answer');
var highScore = document.getElementById('high-score');


var timerE1 = document.getElementById('timer');
var header = document.getElementById('header');

var timeRemaining = 1;

var displayHighScore = function(event){

}

var checkAnswer(answer) {
    var answer = questions[listQuestions];
    
    question.innerHTML = answer.question;
    choiceOne.innerHTML = answer.choiceOne;
    choiceTwo.innerHTML = answer.choiceTwo;
    choiceThree.innerHTML = answer.choiceThree;
    choiceFour.innerHTML = answer.choiceFour;

};
  
    // change test to quiz
    var beginTest = function () {
      countDown(timeRemaining);
    var mainEl = document.querySelector("#quiz");
        mainEl.innerHTML = "";
  
    // setting up first column as click the high score
    var firstColEl = document.createElement("div");
        firstColEl.setAttribute("class", "col-3");
        firstColEl.setAttribute("id", "results");
  
    // ask question
    var questionH1El = document.createElement("h1");
        questionH1El.textContent = theQuestions[i].question;
        secondColEl.appendChild(questionH1El);
    // create list of answers
    var listOfAnswersEl = document.createElement("ul");
        secondColEl.appendChild(listOfAnswersEl);
    
    // each answer is in an label
    var answerLabelFourEl = document.createElement("label");
        answerLabelFourEl.textContent = theQuestions[i].answers.d;
        listOfAnswersEl.appendChild(answerLabelFourEl);

    rowEl.appendChild(secondColEl);
  
    // set up third column for timer
    var thirdColEl = document.createElement("div");
        thirdColEl.setAttribute("class", "col-3");
        thirdColEl.setAttribute("id", "timer");
        thirdColEl.textContent = "You have " + newTime + " second(s) left.";
        rowEl.appendChild(thirdColEl);
  };
  
  var countDown = function (timeRemaining) {;
    setInterval(function () {
      timeRemaining--;
  
      document.getElementById("timer").innerHTML =
        "You have " + timeRemaining + " second(s) left.";
  
      if (timeRemaining <= 0) {
        document.getElementById("times-up") =
          "Time's up!";
      }
      newTime = timeRemaining;
    }, 500);
  };

  //Remove start button after already clicked//

  var removeStart = function () {
    var removeStartButtonEl = document.getElementById("start");
    removeStartButtonEl.remove();
  };

  var answerQuestion = function () {
    i++;
    beginTest();
      console.log(newTime);
      countDown(newTime);
  };

  
  startTest();

highScore.addEventListener("click" displayHighScore);