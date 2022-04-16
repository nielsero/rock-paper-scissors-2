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

// Check if it's a draw
const isDraw = (playerSelection, computerSelection) => (playerSelection === computerSelection);

// Cleans player selection
const clean = (playerSelection) => (playerSelection.trim().toLowerCase());

// Plays a single round
const playRound = (playerSelection, computerSelection) => {
    playerSelection = clean(playerSelection);
    if(!CHOICES.includes(playerSelection)) {
        return "Invalid choice";
    }
    if(isDraw(playerSelection, computerSelection)) {
        return `It's a draw, you both picked ${playerSelection}`;
    }
    if(hasPlayerWon(playerSelection, computerSelection)) {
        return `You won, ${playerSelection} beats ${computerSelection}`;
    }
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

// Get DOM elements
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resultDiv = document.querySelector(".result");
resultDiv.setAttribute("style", "white-space: pre");

// Just console logs the player and computer picks
const getPlayersPicks = (playerSelection, computerSelection) => {
    let playerPicks = "";
    playerPicks += `You: ${clean(playerSelection)}\r\n`;
    playerPicks += `Computer: ${computerSelection}\r\n`;
    return playerPicks;
}

const handleRockClick = () => {
    computerSelection = computerPlay();
    resultDiv.textContent = "";
    resultDiv.textContent += getPlayersPicks("rock", computerSelection);
    resultDiv.textContent += playRound("rock", computerSelection);
}

const handlePaperClick = () => {
    computerSelection = computerPlay();
    resultDiv.textContent = "";
    resultDiv.textContent += getPlayersPicks("paper", computerSelection);
    resultDiv.textContent += playRound("paper", computerSelection);
}

const handleScissorsClick = () => {
    computerSelection = computerPlay();
    resultDiv.textContent = "";
    resultDiv.textContent += getPlayersPicks("scissors", computerSelection);
    resultDiv.textContent += playRound("scissors", computerSelection);
}

// Add event listeners
rockButton.addEventListener("click", handleRockClick);
paperButton.addEventListener("click", handlePaperClick);
scissorsButton.addEventListener("click", handleScissorsClick);