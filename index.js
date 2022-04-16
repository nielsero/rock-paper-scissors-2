const CHOICES = ["rock", "paper", "scissors"];
const RULES = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];

// Makes the computer choose rock, paper or scissors at random
const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomNumber];
}

// Checks if player won based on RULES
const hasPlayerWon = (playerSelection, computerSelection) => {
    for(const rule of RULES) {
        if(rule[0] === playerSelection && rule[1] === computerSelection) {
            return true;
        }
    }
    return false;
}

// Cleans player selection
const clean = (playerSelection) => (playerSelection.trim().toLowerCase());

// Plays a single round
const playRound = (playerSelection, computerSelection) => {
    playerSelection = clean(playerSelection);
    if(!CHOICES.includes(playerSelection)) {
        return "Invalid choice";
    }
    if(playerSelection == computerSelection) {
        return `It's a draw, you both picked ${playerSelection}`;
    }
    if(hasPlayerWon(playerSelection, computerSelection)) {
        return `You won, ${playerSelection} beats ${computerSelection}`;
    }
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

// Get buttons
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

// Just console logs the player and computer picks
const displayPlayersPicks = (playerSelection, computerSelection) => {
    console.log(`You: ${clean(playerSelection)}`);
    console.log(`Computer: ${computerSelection}`);
}

const handleRockClick = () => {
    computerSelection = computerPlay();
    displayPlayersPicks("rock", computerSelection);
    console.log(playRound("rock", computerSelection));
    console.log("------------------------------------------");
}

const handlePaperClick = () => {
    computerSelection = computerPlay();
    displayPlayersPicks("paper", computerSelection);
    console.log(playRound("paper", computerSelection));
    console.log("------------------------------------------");
}

const handleScissorsClick = () => {
    computerSelection = computerPlay();
    displayPlayersPicks("scissors", computerSelection);
    console.log(playRound("scissors", computerSelection));
    console.log("------------------------------------------");
}

// Add event listeners
rockButton.addEventListener("click", handleRockClick);
paperButton.addEventListener("click", handlePaperClick);
scissorsButton.addEventListener("click", handleScissorsClick);