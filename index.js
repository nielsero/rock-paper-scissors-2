const CHOICES = ["rock", "paper", "scissors"];
const RULES = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];

// Makes the computer choose rock, paper or scissors at random
const computerPlay = (choices) => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

// To check if player won
const hasPlayerWon = (playerSelection, computerSelection, rules) => {
    for(const rule of rules) {
        if(rule[0] === playerSelection && rule[1] === computerSelection) {
            return true;
        }
    }
    return false;
}

// To clean player selection
const clean = (playerSelection) => (playerSelection.trim().toLowerCase());

// To play a single round
const playRound = (playerSelection, computerSelection, choices) => {
    playerSelection = clean(playerSelection);
    if(!choices.includes(playerSelection)) {
        return "Invalid choice";
    }
    if(playerSelection == computerSelection) {
        return `It's a draw, you both picked ${playerSelection}`;
    }
    if(hasPlayerWon(playerSelection, computerSelection, RULES)) {
        return `You won, ${playerSelection} beats ${computerSelection}`;
    }
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

const computerSelection = computerPlay(CHOICES);
console.log("Computer: " + computerSelection);
console.log(playRound(" rOck", computerSelection, CHOICES));