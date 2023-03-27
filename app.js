let playerScore = 0;
let computerScore = 0;

function getComputerChoice(random) {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    random = "rock";
  } else if (randomNum === 1) {
    random = "paper";
  } else {
    random = "scissors";
  }
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock, you chose rock and computer chose paper";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie! Both chose Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors, you chose rock and computer chose scissors";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie! Both chose Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper, you chose paper and computer chose scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock, you chose paper and computer chose rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat Paper, you chose scissors and computer chose paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a tie! Both chose scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors, you chose scissors and computer chose rock";
  }
}

function playerChoice(choice) {
  let choice = prompt("What is your choice of weapon?");
  return choice;
}

const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
