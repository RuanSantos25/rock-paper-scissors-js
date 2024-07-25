function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) return "rock";
    else if (computerChoice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?");
    if (humanChoice.toLowerCase() === "rock") return "rock";
    else if (humanChoice.toLowerCase() === "paper") return "paper";
    else if (humanChoice.toLowerCase() === "scissors") return "scissors";
    else return null;
}