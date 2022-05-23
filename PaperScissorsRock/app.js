const computerChoiceDisplay = document.getElementById("computer-choice");
const sukaChoiceDisplay = document.getElementById("suka-choice");
const showResult = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let sukaChoice;
let computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    sukaChoice = e.target.id;
    sukaChoiceDisplay.innerHTML = sukaChoice;
    generateComputerChoice();
    getResult();
} ))

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult () {
    if (computerChoice === sukaChoice) {
        result = "нихуя!";
    }
    if (computerChoice === "rock" && sukaChoice === "paper") {
        result = "ура, победа!";
    }
    if (computerChoice === "rock" && sukaChoice === "scissors") {
        result = "проебал!";
    }
    if (computerChoice === "paper" && sukaChoice === "scissors") {
        result = "ура, победа!";
    }
    if (computerChoice === "paper" && sukaChoice === "rock") {
        result = "проебал!";
    }
    if (computerChoice === "scissors" && sukaChoice === "rock") {
        result = "ура, победа!";
    }
    if (computerChoice === "scissors" && sukaChoice === "paper") {
        result = "проебал!";
    }
    showResult.innerHTML = result
}