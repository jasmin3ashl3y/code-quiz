const theQuestions=[
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: {
           a: "<js>",
           b: "<javascript>",
           c: "<script>",
           d: "<link type=script>"
        },
        correctAnswer:"c",
    },
    {
        question: "Where is the correct place to insert the Javascript tag?",
        answers: {
           a: "in the <head> tag",
           b: "in the !DOCTYPE declaration",
           c: "at the end of the <body> tag",
           d: "in the <footer> tag",
        },
        correctAnswer:"c",
    },
    {
        question: "What year was JavaScript created?",
        answers: {
           a: "2003",
           b: "1989",
           c: "1992",
           d: "1995",
        },
        correctAnswer:"d",
    },
    {
        question: "What is Boolean data type?",
        answers: {
           a: "one of two possible values, usually true or false",
           b: "named after George Boole",
           c: "an algebraic system of logic",
           d: "all of the above",
        },
        correctAnswer:"d",
    },
    {
        question: "Javascript is hard to learn",
        answers: {
           a: "yup",
           b: "totally",
           c: "seems like it",
           d: "yes",
        },
        correctAnswer:"b",
    }
];

var i = 0;

var timeRemaining = 75;
var newTime = timeRemaining;

var startTest = function () {
    // creating container div for start test button
    var mainEl = document.querySelector("#quiz-center");
  
    // create row
    var rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row");
    mainEl.appendChild(rowEl);
  
    // center column
    var firstColEl = document.createElement("div");
    firstColEl.setAttribute("class", "col-12 text-center");
    rowEl.appendChild(firstColEl);
  
    // create button to start test
    var startButtonEl = document.createElement("button");
    startButtonEl.setAttribute("type", "button");
    startButtonEl.setAttribute("class", "btn btn-primary");
    startButtonEl.setAttribute("id", "start");
    startButtonEl.textContent = "Start test";
    firstColEl.appendChild(startButtonEl);
  
    // when startButtonEl is clicked, begin the test
    startButtonEl.addEventListener("click", beginTest, removeStart);
  };
  
    // change test to quiz
    var beginTest = function () {
      countDown(timeRemaining);
    var mainEl = document.querySelector("#quiz-center");
        mainEl.innerHTML = "";
  
    // setting up first column as click the high score
    var firstColEl = document.createElement("div");
        firstColEl.setAttribute("class", "col-3");
        firstColEl.setAttribute("id", "results");
  
    // creating row
    var rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row");
        rowEl.setAttribute("id", "over");
        mainEl.appendChild(rowEl);
        rowEl.appendChild(firstColEl);
  
    var highScoreButtonEl = document.createElement("button");
        highScoreButtonEl.setAttribute("type", "button");
        highScoreButtonEl.setAttribute("class", "btn btn-link");
        highScoreButtonEl.setAttribute("id", "viewScores");
        highScoreButtonEl.textContent = "View high scores";
        firstColEl.appendChild(highScoreButtonEl);
  
    // set up middle column for test
    var secondColEl = document.createElement("div");
        secondColEl.setAttribute("class", "col-6 text-center");
        secondColEl.setAttribute("id", "quiz");
  
    // loop through questions
    //for(var i = 0; i < theQuestions.length; i++) {
  
    console.log(theQuestions[i]);
    // ask question
    var questionH1El = document.createElement("h1");
        questionH1El.textContent = theQuestions[i].question;
        secondColEl.appendChild(questionH1El);
    // create list of answers
    var listOfAnswersEl = document.createElement("ul");
        secondColEl.appendChild(listOfAnswersEl);

    //  each answer is in an label
    var answerLabelOneEl = document.createElement("label");
        answerLabelOneEl.textContent = theQuestions[i].answers.c;
        listOfAnswersEl.appendChild(answerLabelOneEl);
    // creates an input for them to click
    var answerOneEl = document.createElement("input");
        answerOneEl.setAttribute("type", "button");
        answerOneEl.setAttribute("name", "answerC");
        answerOneEl.setAttribute("onclick", "answerQuestion()");
        answerLabelOneEl.appendChild(answerOneEl);

    // creates an input for them to click
    var answerTwoEl = document.createElement("input");
        answerTwoEl.setAttribute("type", "button");
        answerTwoEl.setAttribute("id", "answerC");
        answerTwoEl.setAttribute("onclick", "answerQuestion()");
        answerTwoEl.setAttribute("value", theQuestions[i].answers.c);
        listOfAnswersEl.appendChild(answerTwoEl);
  
    // each answer is in an label
    var answerLabelThreeEl = document.createElement("label");
        answerLabelThreeEl.textContent = theQuestions[i].answers.d;
        listOfAnswersEl.appendChild(answerLabelThreeEl);
    // create an input to click
    var answerThreeEl = document.createElement("input");
        answerThreeEl.setAttribute("type", "button");
        answerThreeEl.setAttribute("id", "answerD");
        answerThreeEl.setAttribute("onclick", "answerQuestion()");
        answerLabelThreeEl.appendChild(answerThreeEl);
  

    // each answer is in an label
    var answerLabelFourEl = document.createElement("label");
        answerLabelFourEl.textContent = theQuestions[i].answers.d;
        listOfAnswersEl.appendChild(answerLabelFourEl);
    // creates an input for them to click
    var answerFourEl = document.createElement("input");
        answerFourEl.setAttribute("type", "button");
        answerFourEl.setAttribute("id", "answerD");
        answerFourEl.setAttribute("onclick", "answerQuestion()");
        answerLabelFourEl.appendChild(answerFourEl);
    
    // each answer is in an label
    var answerLabelFourEl = document.createElement("label");
        answerLabelFourEl.textContent = theQuestions[i].answers.d;
        listOfAnswersEl.appendChild(answerLabelFourEl);
    // creates an input for them to click
    var answerFourEl = document.createElement("input");
        answerFourEl.setAttribute("type", "button");
        answerFourEl.setAttribute("id", "answerD");
        answerFourEl.setAttribute("onclick", "answerQuestion()");
        answerLabelFourEl.appendChild(answerFourEl);

  
    rowEl.appendChild(secondColEl);
  
    // set up third column for timer
    var thirdColEl = document.createElement("div");
        thirdColEl.setAttribute("class", "col-3");
        thirdColEl.setAttribute("id", "timer");
        thirdColEl.textContent = "You have " + newTime + " second(s) left.";
        rowEl.appendChild(thirdColEl);
  };
  
  var countDown = function (timeRemaining) {;
      console.log("hey", timeRemaining);
    setInterval(function () {
      timeRemaining--;
  
      document.getElementById("timer").innerHTML =
        "You have " + timeRemaining + " second(s) left.";
  
      if (timeRemaining <= 0) {
        document.getElementById("over").innerHTML =
          "Time's up!";
      }
      newTime = timeRemaining;
    }, 1000);
  };
  
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

