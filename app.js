let playerScore = 0;
let compScore = 0;

const playerChoiceDisplay = document.createElement("h1");
playerChoiceDisplay.textContent = `Player: ${""}`;

const compChoiceDisplay = document.createElement("h1");
compChoiceDisplay.textContent = `Computer: ${""}`;

const playerScoreDisplay = document.createElement("h2");
playerScoreDisplay.textContent = `Player Score: ${playerScore}`;

const compScoreDisplay = document.createElement("h2");
compScoreDisplay.textContent = `Computer Score: ${compScore}`;

const resultDisplay = document.createElement("h1");
const gameGrid = document.querySelector("#mainDiv");

const battleLog = document.createElement("h3");
battleLog.textContent = "";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

gameGrid.append(
  playerChoiceDisplay,
  compChoiceDisplay,
  playerScoreDisplay,
  compScoreDisplay,
  resultDisplay,
  battleLog,
  resetBtn
);

const choices = ["rock", "paper", "scissors"];
let playerChoice;
let compChoice;

const handleClick = (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
  getComputerChoice();
  playRound();
  game();
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  compScoreDisplay.textContent = `Computer Score: ${compScore}`;
};

// Computer random choices
const getComputerChoice = () => {
  const randChoice = choices[Math.floor(Math.random() * choices.length)];
  compChoice = randChoice;
  compChoiceDisplay.textContent = `Computer: ${compChoice}`;
};

// Button creation
choices.forEach((choice) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.id = choice;
  button.textContent = choice;
  button.addEventListener("click", handleClick);
  gameGrid.append(button);
});

// Game logic
const playRound = () => {
  switch (playerChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      resultDisplay.textContent = "You win!";
      playerScore++;
      battleLog.textContent = `You win! You chose ${playerChoice} and Computer chose ${compChoice}`;

      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      resultDisplay.textContent = "You lose!";
      compScore++;
      battleLog.textContent = `You lose! You chose ${playerChoice} and Computer chose ${compChoice}`;
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      resultDisplay.innerHTML = "It's a tie!";
      battleLog.textContent = `It's a tie! Both chose ${playerChoice}`;
      break;
  }
};
const btns = document.querySelectorAll(".btn");
// Win condition logic
const game = () => {
  if (playerScore < 5) {
    battleLog.textContent = "You won the battle!";
  }
  if (compScore < 5) {
    battleLog.textContent = "You LOST the battle!";
  } else {
    btns.disabled = true;
    // console.log("STOP!");
  }
};

resetBtn.addEventListener("click", function () {
  reset();
});

// Reset
const reset = () => {
  playerScore = 0;
  compScore = 0;
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  compScoreDisplay.textContent = `Computer Score: ${compScore}`;
  playerChoiceDisplay.textContent = `Player: ${""}`;
  compChoiceDisplay.textContent = `Computer: ${""}`;
  resultDisplay.textContent = "";
  battleLog.textContent = "";
  document.getElementById("Button").disabled = false;
};
