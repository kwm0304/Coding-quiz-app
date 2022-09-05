var startButton = document.getElementById('start-btn')
var scoreEl = document.querySelector('#score')
var showContainer = document.getElementById('container')
var nextButtonEl = document.getElementById('next-btn')
var hsInput = document.getElementById('hs-initials')
let currentQuestion = 0;
var questionEl = document.getElementById('question')
var questionboxEl = document.getElementById('question-box')
var leaderBoardEl = document.getElementById('leaderboard')
highscoresButton = document.getElementById('high-scores')
//time var
var timerEl = document.querySelector('#timer')
var timeLeft;
//answer button var
var answerButtonA = document.getElementById('A')
var answerButtonB = document.getElementById('B')
var answerButtonC = document.getElementById('C')
var answerButtonD = document.getElementById('D')
let score = 0;

let questions = [
    {
        question: "CSS stands for..",
        optionA: 'Cascading Style Selector',
        optionB: 'Code Style Sheet',
        optionC: 'Cascading Style Sheet',
        optionD: 'Character Style Selection',
        correct: 'C'
    },
    {
        question: "What targets a class in css?",
        optionA: '#',
        optionB: '!',
        optionC: '.',
        optionD: ':',
        correct: 'C'
    },
    {
        question: "What targets an id in css?",
        optionA: '#', 
        optionB: '!', 
        optionC: '.',
        optionD: ':', 
        correct: 'A'
    },
    {
        question: "How do you link your CSS and your HTML?",
        optionA: '<link src=""/> in head section',
        optionB: '<link src=""/> at bottom of body', 
        optionC: '<link href=""/> at bottom of body',
        optionD: '<link href=""/> in head section', 
        correct: 'D'
    },
    {
        question: "How do you link your script.js and HTML?",
        optionA: '<link src="script.js"></link> in head section',
        optionB: '<script src="script.js" defer></script> at bottom of the head section',
        optionC: '<script src="script.js"></script> at top of the body section',
        optionD: '<link src="script.js"></link> at bottom of the body section',
        correct: 'B'
    },
    {
        question: "Which of the following is not a block element",
        optionA: 'div',
        optionB: 'p',
        optionC: 'a',
        optionD: 'form',
        correct: 'C'    
    },
    {
        question: "Which of the following is not an inline element?",
        optionA: 'button', 
        optionB: 'figure', 
        optionC: 'span', 
        optionD: 'img', 
        correct: 'B'
    },
    {
        question: "What does a global scope variable mean?",
        optionA: 'A variable that can apply anywhere in the program and is declared at top of page',
        optionB: 'A variable that is native to any js file', 
        optionC: 'A variable that can apply to a specific function', 
        optionD: 'A variable that can apply anywhere in the program and is declared at the bottom of the page',
        correct: 'A'
    },
    {
        question: "HTML stands for...",
        optionA: 'Hyperlink Text Markup Language', 
        optionB: 'Hypertext Markup Language', 
        optionB: 'Hypertext Markup Link',
        optionC: 'Hypertext Mapping Link',
        optionD: 'Hyperlink Markup Language', 
        correct: 'B'
    },
    {
        question: "What is the purpose of a wireframe?",
        optionA: 'To link all of the files in a program.', 
        optionB: 'To outline what the code will look like.', 
        optionC: 'To outline what the page will look like.',
        optionD: 'To activate the functions in the script.',
        correct: 'C'
    },
    {
        question: "DOM stands for..",
        optionA: 'Descriptive Object Model',
        optionB: 'Detailed Object Map', 
        optionC: 'Document Oriented Markup', 
        optionD: 'Document Object Model', 
        correct: 'D'
    },
    {
        question: "Which of the following cannot be created in javascript?",
        optionA: 'HTML', 
        optionB: 'CSS', 
        optionC: 'functions', 
        optionD: 'none of the above',
        correct: 'D'
    },
    {
        question: "How do you write a comment in HTML?",
        optionA: '<!--Comment-->', 
        optionB: '//Comment',
        optionC: '/*Comment*/', 
        optionD: '*Comment', 
        correct: 'A'
    },
    {
        question: "How do you write a comment in CSS?",
        optionA: '<!--Comment-->', 
        optionB: '//Comment', 
        optionC: '/*Comment*/', 
        optionD: '*Comment',
        correct: 'C'
    },
    {
        question: "How do you write a comment in javascript?",
        optionA: '<!--Comment-->', 
        optionB: '//Comment', 
        optionC: '/*Comment*/',
        optionD: '*Comment',
        correct: 'B'
    },
    {
        question: "How are arrays formatted?",
        optionA: 'var array = {x,y}', 
        optionB: 'var array = <x,y>', 
        optionC: 'var array = [x,y]', 
        optionD: 'var array = (x,y)', 
        correct: 'C'
    },
    {
        question: "Which of the following is not a scope in javascript",
        optionA: 'Universal', 
        optionB: 'Function',
        optionC: 'Block',
        optionD: 'Global', 
        correct: 'A'
    },
    {
        question: "What type of variable returns a true/false value?",
        optionA: 'String',
        optionB: 'Number', 
        optionC: 'Boolean', 
        optionD: 'Object', 
        correct: 'C'
    },
    {
        question: "What type of variable is interpreted as text?",
        optionA: 'String',
        optionB: 'Number',
        optionC: 'Boolean', 
        optionD: 'Object', 
        correct: 'A'
    },    
    {
        question: "What type of variable is interpreted as a number?",     
        optionA: 'String', 
        optionB: 'Number', 
        optionC: 'Boolean', 
        optionD: 'Object', 
        correct: 'B'
    },
    {
        question: "What type of variable is not a primitive data type?",
        optionA: 'String', 
        optionB: 'Number', 
        optionC: 'Boolean', 
        optionD: 'Object', 
        correct: 'D'
    },
    {
        question: "What has to happen before a function will execute?",
        optionA: 'Call the function underneath it: functionName()',
        optionB: 'Define the parameters: functionName(parameter)',
        optionC: 'Add a semicolon to the end of the function', 
        optionD: 'Smack the computer screen', 
        correct: 'A'
    },
    {
        question: "Which of the following is not a parameter of a 'for' loop?",
        optionA: 'Initialization',
        optionB: 'Test Statement', 
        optionC: 'Endpoint', 
        optionD: 'Iteration Statement', 
        correct: 'C'
    },
    {
        question: "Which of the following operators performs math?", 
        optionA: 'Assignment',
        optionB: 'Comparison', 
        optionC: 'Arithmetic', 
        optionD: 'Logical', 
        correct: 'C'    
    },
    {
        question: "Which of the following is not an assignment operator?", 
        optionA: '/=', 
        optionB: '%=', 
        optionC: '+', 
        optionD: 'none of the above', 
        correct: 'D'
    }
  ]

const lastQuestion = questions.length - 1

//click event for starting game
startButton.addEventListener('click', startGame)
nextButtonEl.addEventListener('click', setNextQuestion)

//timer using setInterval and clears when game is over
function countDown() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent=timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            endGame()
        }
    }, 1000)
}

function startGame() {
    timeLeft = 60;
    countDown();
    showContainer.classList.remove('hidden')
    startButton.classList.add('hidden')
    nextButtonEl.classList.remove('hidden')
    questionboxEl.classList.remove('hidden')
    genQuestion()
}

function genQuestion() {
    let qArray = questions[currentQuestion]  

    questionEl.innerHTML = "<p>"+ qArray.question+ "</p>";
    answerButtonA.innerText = qArray.optionA;
    answerButtonB.innerText = qArray.optionB;
    answerButtonC.innerText = qArray.optionC;
    answerButtonD.innerText = qArray.optionD;
    
}

function checkAnswer(answer) {
    if( answer == questions[currentQuestion].correct) {
        scoreEl.textContent = score++;
        $(questionEl).append('&#10003;')
    } else {
        timeLeft = timeLeft - 5;
        $(questionEl).append('&#x2716;')
    }
    
}

function setNextQuestion() {
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        genQuestion()
    }
}

function endGame() {
    var initials = prompt("What are your initials?");
    var highscores = [

    ]
    

    if(localStorage.getItem('highscores')) {
        highscores = JSON.parse(localStorage.getItem("highscores"))
    }

    var newScore = {
        username: initials,
        score: score
    }

    highscores.push(newScore)

    localStorage.setItem("highscores", JSON.stringify(highscores))

    alert("Click the 'High Scores' button!")

    highscoresButton.addEventListener('click', displayHighScores)

    function displayHighScores() {
        questionboxEl.classList.add('hidden')
        leaderBoardEl.classList.remove('hidden')
        hsInput.textContent = localStorage.getItem("highscores");
    }
}  