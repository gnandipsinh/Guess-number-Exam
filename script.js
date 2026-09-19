let score = 20;

let userGuesses = [];

let gameOver = false;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = Number(localStorage.getItem("highscore")) || 0;


const guessInput = document.getElementById("guessInput");

const checkBtn = document.getElementById("checkBtn");

const againBtn = document.getElementById("againBtn");

const message = document.getElementById("message");

const scoreDisplay = document.getElementById("score");

const highscoreDisplay = document.getElementById("highscore");

const numberDisplay = document.getElementById("number");


scoreDisplay.textContent = score;

highscoreDisplay.textContent = highscore;


checkBtn.addEventListener("click", function () {

    if (gameOver) return;


    const guess = Number(guessInput.value);


    if (guessInput.value === "") {

        alert("Please enter a number");

        return;
    }


    if (!Number.isFinite(guess)) {

        alert("Please enter a valid number") ;

        return;
    }


    if (guess < 1 || guess > 20) {

        alert("Choose a number between 1 and 20");

        return;
    }


    if (userGuesses.includes(guess)) {

        alert("You already guessed this number");

        return;
    }


    userGuesses.push(guess);


    if (guess === secretNumber) {

        message.textContent = "Correct Number!";

        numberDisplay.textContent = secretNumber;

        gameOver = true;


        if (score > highscore) {

            highscore = score;

            highscoreDisplay.textContent = highscore;

            localStorage.setItem("highscore", highscore);
        }

        return;
    }


    if (score > 1) {

        score--;

        scoreDisplay.textContent = score;


        if (guess > secretNumber) {

            message.textContent = "Too High!";

        } else {

            message.textContent = "Too Low!";
        }

    } else {

        score = 0;

        scoreDisplay.textContent = score;

        message.textContent =
            `Game Over! The number was ${secretNumber}`;

        numberDisplay.textContent = secretNumber;

        gameOver = true;
    }

});


againBtn.addEventListener("click", function () {

    score = 20;

    userGuesses = [];

    gameOver = false;

    secretNumber = Math.trunc(Math.random() * 20) + 1;


    scoreDisplay.textContent = score;

    message.textContent = "Start guessing...";

    guessInput.value = "";

    numberDisplay.textContent = "?";
});