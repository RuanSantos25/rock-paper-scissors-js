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
    console.log(`Human Choice: ${playerSelection}`);
    console.log(`Computer Choice: ${computerChoice}`);
    if (playerSelection === null) {                                             // Display this message if the player typed something different
        console.log("Please type only rock, paper or scissors.");
    } else if ((playerSelection === "rock" && computerChoice === "scissors")    // Conditions for the player(left side) to win
            || (playerSelection === "paper" && computerChoice === "rock")
            || (playerSelection === "scissors" && computerChoice === "paper")
    ) {
            console.log(`You won! ${playerSelection} beats ${computerChoice}.`);                   
    } else if ((playerSelection === "rock" && computerChoice === "paper")        // Conditions for the player(left side) to lose
        || (playerSelection === "paper" && computerChoice === "scissors")
        || (playerSelection === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${playerSelection}.`);                        
    } else {                                                                 // It's a tie round
        console.log("It's a draw! no one scores this round.");               
    }
}
