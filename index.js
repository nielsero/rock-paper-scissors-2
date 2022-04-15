const CHOICES = ["rock", "paper", "scissors"];
const RULES = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];

// Makes the computer choose rock, paper or scissors at random
const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomNumber];
}

// To check if player won
const hasPlayerWon = (playerSelection, computerSelection) => {
    for(const rule of RULES) {
        if(rule[0] === playerSelection && rule[1] === computerSelection) {
            return true;
        }
    }
    return false;
}

// To clean player selection
const clean = (playerSelection) => (playerSelection.trim().toLowerCase());

// To play a single round
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

// To play 5 rounds
const game = () => {
    let playerSelection;
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = computerPlay();
        console.log(`You: ${clean(playerSelection)}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log("------------------------------------------");
    }
}

game();