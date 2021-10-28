var timerE1 = document.getElementById('time');
var header = document.getElementById('header');
var startBtn= document.getElementById('start');
var quiz = document.getElementById('quiz');
var question = document.getElementById('questions');
var choiceOne = document.getElementById('one');
var choiceTwo = document.getElementById('two');
var choiceThree = document.getElementById('three');
var choiceFour = document.getElementById('four');
var startPage = document.getElementById('start-page');

var timesUp = document.getElementById('times-up');
var gameOver = document.getElementById('game-over');
var gameDisplay = document.getElementById('question-display');
var displayAnswer = document.getElementById('answer-display');
var checkAnswer = document.getElementById('check-answer');
var scoreEntry = document.getElementById('score-entry');
var highscoreContainer = document.getElementById('highscore-container');
var showHighscores = document.getElementById('high-score');

var timeRemaining;
var checkAnswer = 1;

var numberHighscore = 0;
var entries = [];
// quiz questions
var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
           choiceOne: "<js>",
           choiceTwo: "<javascript>",
           choiceThree: "<script>",
           choiceFour: "<link type=script>",
           correct:"Three",
    },
    {
        question: "Where is the correct place to insert the Javascript tag?",
           choiceOne: "in the <head> tag",
           choiceTwo: "in the !DOCTYPE declaration",
           choiceThree: "at the end of the <body> tag",
           choiceFour: "in the <footer> tag",
           correct:"Three",
    },
    {
        question: "What year was JavaScript created?",
           choiceOne: "2003",
           choiceTwo: "1989",
           choiceThree: "1992",
           choiceFour: "1995",
           correct:"Four",
    },
    {
        question: "What is Boolean data type?",
           choiceOne: "one of two possible values, usually true or false",
           choiceTwo: "named after George Boole",
           choiceThree: "an algebraic system of logic",
           choiceFour: "all of the above",
           correct:"Four",
    },
    {
        question: "Javascript is hard to learn",
           choiceOne: "yup",
           choiceTwo: "totally",
           choiceThree: "seems like it",
           choiceFour: "yes",
           correct:"Two",
    }
];

var listQuestions = 0;
var lastQuestion = questions.length - 1;

// display questions
function showQuestion() {
  var quest = questions[listQuestions];

  question.innerHTML = quest.question;
  choiceOne.innerHTML = quest.choiceOne;
  choiceTwo.inerHTML = quest.choiceTwo;
  choiceThree.innerHTML = quest.choiceThree;
  choiceFour.innerHTML = quest.choiceFour;
}

// check answer whether right or wrong
function checkAnswer(answer) {
    if(questions[listQuestions].correct == answer) {
      console.log('correct')
      var correctDisplay = setInterval(function() {
        if (showAnswer >= 0) {
          // display on
          displayAnswer.style.display = "block";
          // displau answer choice
          displayAnswer.textContent = "correct!";
          // start count down
          showAnswer--;
        } else {
            // return display to none
            displayAnswer.style.display = 'none';
            // clear timer
            clearInterval(correctDisplay);
            // reset displau timer to 1
            showAnswer = 1;
        }

        }, 500)
      } 
      else {
        console.log('wrong');
        var wrongDisplay = setInterval(function() {
          // if there is time left, continue count down
          if (showAnswer >= 0) {
            // display on
            displayAnswer.style.display = "block";
            // display answer choice
            displayAnswer.textContent = "wrong!";
            // count down
            showAnswer--;
          } else {
            // return display to blank
            displayAnswer.style.display = "none";
            // clear the timer
            clearInterval(wrongDisplay);
            // reset timer to 1
            showAnswer = 1;
          }
        }, 500)
        timeRemaining = timeRemaining - 10;
      }
      // next question but not last
      if(listQuestions < lastQuestion) {
        listQuestions++;
        showQuestion();
      }
      // stop timer
      else {
        // when time is up display hurry! in time remaining
        timerE1.textContent = 'hurry!'
        // clear timer
        clearInterval(timeInterval);
        gameDisplay.style.display = "none";
        timesUp.style.display = "block";
        gameOver.addEventListener("click", homeScreen);
      }
}

var timeInterval;
//timer
function timer() {
  timeInterval = setInterval(function() {
    //as long as there is time left >= 1 to count down
    if (timeRemaining >=1) {
      timeInterval.textContent = timeRemaining;
      timeRemaining--;
    } else {
      // when time is up, display "hurry!" in time remaining
      timeInterval.textContent = "hurry!"
      // clear timer
      clearInterval(timeInterval);
      gameDisplay.style.display = "none";
      timesUp.style.display = "block";
      gameOver.addEventListener('click', homeScreen);
    }
  }, 1000)
}

  // show open screen
function homeScreen() {
  startPage.style.display = "flex";
  timesUp.style.display = "none";
  scoreEntry.style.display = "none";
  highscoreContainer.style.display = "none";
  header.style.display = "flex";
  timeRemaining = "--";
}

// display scoreboard when clicked
function highscoreBoard() {
  // set displays
  header.style.display = "none";
  scoreEntry.style.display = "none";
  timesUp.style.display = "none";
  gameDisplay.style.display = "none";
  startPage.style.display = "none";
  highscoreContainer.style.display = "block";

  // return item from localStorage
  var savedScore = localStorage.getItem('entries');
  if(!savedScore) {
    return false
  }
  console.log("saved scores found!")
  savedScore = JSON.parse(savedScore);
  var ul = document.getElementById('highScores');

    for(i=0;i < savedScore.length; i++) {
      var scores = savedScore[i];
      var li = document.createElement('li')
      li.className = 'scores';
      li.id = 'delete';
      li.appendChild(document.createTextNode(scores));
      ul.appendChild(li);
    }

    console.log(savedScore);
}

var submit = document.getElementById('submit-score');
var userInitials = document.getElementById('user-input');
var displayScore = document.getElementById('display-score');

// logs user input into local storage
function userName() {
    var test = document.getElementById('initials').value;

    if(!test) {
      alert("you must enter something")
      return false;
    }
    var highScore = test + "-" + timeRemaining;
    highScore.id = numberHighscore;

    entries.push(highScore);

    saveScores();

    numberHighscore++;

    console.log(highScore);

    homeScreen();

}

var saveScores = function() {
  localStorage.setItem('entries', JSON.stringify(entries));
}

// when clicked, clears local storage
function clearStorage() {
  localStorage.clear();
  highscoreBoard();
  removeScores();
  entries = [];
}

function removeScores(scores) {
  var scores = document.getElementById('delete');
  scores.remove();
}

// start quiz

function startGame() {
  timeRemaining = 70;
  listQuestions = 0;
  startPage.style.display = "none";
  showQuestion();
  gameDisplay.style.display = "block";
  timer();

}


showHighscores.addEventListener("click", highscoreBoard);
startBtn.addEventListener('click', startGame);