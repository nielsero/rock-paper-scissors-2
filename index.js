// Makes the computer choose rock, paper or scissors at random
const computerPlay = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}