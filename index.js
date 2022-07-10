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

// RPS - UI

// Getting DOM elements
const roundCounter = document.querySelector(".round-counter");
const playerScoreCounter = document.querySelector(".player-score-counter");
const computerScoreCounter = document.querySelector(".computer-score-counter");
const playerMove = document.querySelector(".player-move");
const computerMove = document.querySelector(".computer-move");
const results = document.querySelector(".results");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const restartButton = document.querySelector(".restart-button");

// Initial variables
let computerSelection;
let gameOver = false;
let round = 1;
let playerScore = 0;
let computerScore = 0;

// Initial setup
roundCounter.textContent = round.toString();
playerScoreCounter.textContent = playerScore.toString();
computerScoreCounter.textContent = computerScore.toString();
results.textContent = "Pick a move below";

// Methods for updating rounds, scores and result
const updateRound = (round) => {
    roundCounter.textContent = round.toString();
}

const updatePlayerScore = (score) => {
    playerScoreCounter.textContent = score.toString();
}

const updateComputerScore = (score) => {
    computerScoreCounter.textContent = score.toString();
}

const updateResults = (result) => {
    results.textContent = result;
}

// Update the computer move with computer latest move
const updateComputerMove = (move) => {
    // Removes all classes
    computerMove.classList.remove("rock");
    computerMove.classList.remove("paper");
    computerMove.classList.remove("scissors");

    // Adds correct class
    if(move == "rock") {
        computerMove.classList.add("rock");
        return;
    }
    if(move == "paper") {
        computerMove.classList.add("paper");
        return;
    }
    computerMove.classList.add("scissors");
}

// Update player move
const updatePlayerMove = (move) => {
    // Removes all classes
    playerMove.classList.remove("rock");
    playerMove.classList.remove("paper");
    playerMove.classList.remove("scissors");

    // Adds correct class
    if(move == "rock") {
        playerMove.classList.add("rock");
        return;
    }
    if(move == "paper") {
        playerMove.classList.add("paper");
        return;
    }
    playerMove.classList.add("scissors");
}

// Disable (appears) the buttons 
const disableButtons = () => {
    rockButton.classList.add("disabled");
    paperButton.classList.add("disabled");
    scissorsButton.classList.add("disabled");
}

// Enable buttons
const enableButtons = () => {
    rockButton.classList.remove("disabled");
    paperButton.classList.remove("disabled");
    scissorsButton.classList.remove("disabled");
}

// Event listeners
const handleMove = (move) => {
    // To handle any move (to not repeat the same instructions for every move)
    if(!gameOver) {
        updateRound(round);
        computerSelection = computerPlay();
        updatePlayerMove(move);
        updateComputerMove(computerSelection);

        const result = playRound(move, computerSelection);
        updateResults(result);

        if(hasPlayerWon(move, computerSelection)) {
            playerScore++;
        } else if(!isDraw(move, computerSelection)) {
            // if it's not a draw, it means computer won
            computerScore++;
        }
        updatePlayerScore(playerScore);
        updateComputerScore(computerScore);
        round++;

        if(playerScore === 5) {
            gameOver = true;
            updateResults("Player won!");
            disableButtons();
        }

        if(computerScore === 5) {
            gameOver = true;
            updateResults("Computer won!");
            disableButtons();
        }
    }
}

const handleRockClick = (event) => {
    handleMove("rock");
}

const handlePaperClick = (event) => {
    handleMove("paper");
}

const handleScissorsClick = () => {
    handleMove("scissors");
}

const handleRestartClick = () => {
    gameOver = false;
    round = 1;
    playerScore = 0;
    computerScore = 0;

    // Initial setup
    roundCounter.textContent = round.toString();
    playerScoreCounter.textContent = playerScore.toString();
    computerScoreCounter.textContent = computerScore.toString();
    results.textContent = "";
    enableButtons();
}

// Add event listeners
rockButton.addEventListener("click", handleRockClick);
paperButton.addEventListener("click", handlePaperClick);
scissorsButton.addEventListener("click", handleScissorsClick);
restartButton.addEventListener("click", handleRestartClick);