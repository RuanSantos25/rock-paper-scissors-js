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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let maxGameRounds = 5;
    let round = 1;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === null) {                                             // Display this message if the player typed something different
            console.log("Please type only rock, paper or scissors."); 
            return false;                                                       // Invalid round
        } else if ((humanChoice === "rock" && computerChoice === "scissors")    // Conditions for the player(left side) to win
             || (humanChoice === "paper" && computerChoice === "rock")
             || (humanChoice === "scissors" && computerChoice === "paper")
        ) {
                console.log(`You won! ${humanChoice} beats ${computerChoice}.`); 
                humanScore++;                                                    
                console.log(`Human Score: ${humanScore}`);                    
        } else if ((humanChoice === "rock" && computerChoice === "paper")        // Conditions for the player(left side) to lose
            || (humanChoice === "paper" && computerChoice === "scissors")
            || (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);    
            computerScore++;                                                     
            console.log(`Computer Score: ${computerScore}`);                     
        } else {                                                                 // It's a tie round
            console.log("It's a draw! no one scores this round.");               
            return false;                                                        // Invalid round
        }
        
        return true;                                                             // Valid round
    }

    while (round <= maxGameRounds) {
        console.log(`Round: ${round}`);
        checkValidGame = playRound(getHumanChoice(), getComputerChoice());
        if (checkValidGame) round++;                                             // Only progress to the next round if the move is valid
    }
}


playGame();