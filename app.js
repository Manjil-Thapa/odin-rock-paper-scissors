let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

const mainDiv = document.querySelector("#mainDiv");

const rock = document.createElement("button");
rock.id = "rock";
rock.textContent = "rock";

const paper = document.createElement("button");
paper.textContent = "paper";
paper.id = "paper";

const scissors = document.createElement("button");
scissors.textContent = "scissors";
scissors.setAttribute("id", "scissors");

const display = document.createElement("div");
mainDiv.append(display);

mainDiv.append(rock);
mainDiv.append(paper);
mainDiv.append(scissors);

// select player for score display
const playerDisplay = document.querySelector(".player");
const comp = document.querySelector(".comp");

// EVENT LISTENERS FOR ALL THREE BUTTONS
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playerDisplay.textContent = `Player: ${e.target.textContent}`;
  });
});

// FUNCTIONS

// COMPUTER CHOICE
const getComputerChoice = () => {
  return (compChoice = choices[Math.floor(Math.random() * choices.length)]);
};

// Player CHOICE
// const getPlayerChoice = () => {
//   const playerChoice = prompt("What is your weapon of choice?");
//   return playerChoice;
// };

// GAMEPLAY LOGIC
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
// LOOP
// const game = () => {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// };
