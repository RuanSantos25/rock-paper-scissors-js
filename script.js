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

function checkWin(humanScore, computerScore) {
    console.log("\n*** FINAL SCORE ***");
    console.log(`HUMAN: ${humanScore}`);
    console.log(`COMPUTER: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('YOU WIN!');
    } else {
        console.log('YOU LOSE!');
    }
}

function playRound(playerSelection, computerChoice) {
    if (humanScore >= maxGameScore || computerScore >= maxGameScore) return;
    if ((playerSelection === "rock" && computerChoice === "scissors")    // Conditions for the player(left side) to win
        || (playerSelection === "paper" && computerChoice === "rock")
        || (playerSelection === "scissors" && computerChoice === "paper")) 
    {
        displayResult.textContent = `You won the round! ${playerSelection} beats ${computerChoice}.`;
        humanScore++;
        displayPlayerScore.textContent = "Human Score: " + humanScore;
    } else if ((playerSelection === "rock" && computerChoice === "paper")        // Conditions for the player(left side) to lose
        || (playerSelection === "paper" && computerChoice === "scissors")
        || (playerSelection === "scissors" && computerChoice === "rock")) 
    {
        displayResult.textContent = `You lose the round! ${computerChoice} beats ${playerSelection}.`;
        computerScore++;
        displayComputerScore.textContent = "Computer Score: " + computerScore;
    } else {                                                                 // It's a tie round
        displayResult.textContent = "It's a draw! no one scores this round.";               
    }
    if (humanScore >= maxGameScore) {
        displayResult.textContent = "";
        displayGameOver.textContent = "GAME OVER: YOU WIN!";
    } else if (computerScore >= maxGameScore) {
        displayResult.textContent = "";
        displayGameOver.textContent = "GAME OVER: YOU LOSE!";
    }
}


const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const maxGameScore = 5;
const displayGameOver = document.createElement("p");
let humanScore = 0;
let computerScore = 0;
let div = document.querySelector("#result");
let displayPlayerScore = document.createElement("p");
let displayComputerScore = document.createElement("p");
let displayResult = document.createElement("p");

displayPlayerScore.textContent = "Human Score: " + humanScore;
div.appendChild(displayPlayerScore);
displayComputerScore.textContent = "Computer Score: " + computerScore;
div.appendChild(displayComputerScore);
div.appendChild(displayResult);
div.appendChild(displayGameOver);

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});