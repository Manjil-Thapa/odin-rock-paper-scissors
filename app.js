const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// COMPUTER CHOICE
const getComputerChoice = () => {
  return (compChoice = choices[Math.floor(Math.random() * choices.length)]);
};

const getPlayerChoice = () => {
  const playerChoice = prompt("What is your weapon of choice?");
  return playerChoice;
};

const playRound = () => {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      playerScore++;
      console.log(
        `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`
      );
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerScore++;
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

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
};
