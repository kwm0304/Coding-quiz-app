var startButton = document.getElementById('start-btn')
var scoreEl = document.querySelector('#score')
//time var
var timerEl = document.getElementById('#timer')
var timeLeft;
//answer button var
var answerButtonA = document.getElementById('A')
var answerButtonB = document.getElementById('B')
var answerButtonC = document.getElementById('C')
var answerButtonD = document.getElementById('D')

//click event for starting game
startButton.addEventListener('click', startGame)


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