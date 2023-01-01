const CHOICES = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors'
};

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

const possibleChoices = [...document.getElementsByClassName('choice-button')];
const refreshButton = document.getElementById('refresh');

let userChoice;
let computerChoice;
let result;
let winScore = 0;
let loseScore = 0;
let drawScore = 0;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    calculateResult();
    updateScore();
}));

refreshButton.addEventListener('click', (e) => {
    winScore = 0;
    loseScore = 0;
    drawScore = 0;
    updateScore();
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) {
        computerChoice = CHOICES.ROCK;
    } else if (randomNumber === 1) {
        computerChoice = CHOICES.PAPER;
    } else {
        computerChoice = CHOICES.SCISSORS;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function calculateResult() {
    if (userChoice === computerChoice) {
        result = "It's a draw!";
        ++drawScore;
    } else if (
        (userChoice === CHOICES.ROCK && computerChoice === CHOICES.SCISSORS) ||
        (userChoice === CHOICES.SCISSORS && computerChoice === CHOICES.PAPER) ||
        (userChoice === CHOICES.PAPER && computerChoice === CHOICES.ROCK)) {
        result = 'You won!';
        ++winScore;
    } else {
        result = 'You lost!';
        ++loseScore;
    }
    resultDisplay.innerHTML = result;
}

function updateScore() {
    scoreDisplay.innerHTML = `Wins: ${winScore}. Loses: ${loseScore}. Draws: ${drawScore}`;
}
