const choices = ["rock", "paper", "scissors"];
let playerScore;
let computerScore;

// COMPUTER CHOICE
const getComputerChoice = () => {
  return (compChoice = choices[Math.floor(Math.random() * choices.length)]);
};

const getPlayerChoice = () => {
  const playerChoice = prompt("What is your weapon of choice?");
  return playerChoice;
};
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

const playRound = () => {
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log(
        `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`
      );
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log(
        `You lose! You chose ${playerSelection} and Computer chose ${computerSelection}`
      );
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log(`It's a tie! Both chose ${playerSelection}`);
  }
};

console.log(playRound());
