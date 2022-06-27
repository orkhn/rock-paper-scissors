"strict mode";
// VARIABLES
const moves = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;
const btnStart = document.querySelector(".starter-button");
const btnAgain = document.querySelector(".again-button");
const containerEl = document.querySelector(".container");
const userSelectionBtns = document.querySelectorAll(".user-selected");
const userScoreEl = document.querySelector("#player-score");
const compScoreEl = document.querySelector("#comp-score");
const cardWinner = document.querySelector(".winner-card");
const gameUpdates = document.querySelector(".game-updates");
const userWinLogo = document.querySelector("#user-wins-logo");
const compWinLogo = document.querySelector("#robot-wins-logo");
const userRockSelected = document.querySelector("#rockdiv");
const userPaperSelected = document.querySelector("#paperdiv");
const userScissorsSelected = document.querySelector("#scissorsdiv");
const compRockSelected = document.querySelector("#computer-rock-div");
const compPaperSelected = document.querySelector("#computer-paper-div");
const compScissorsSelected = document.querySelector("#computer-scissors-div");

// SELECTORS
btnStart.addEventListener("click", toggleModal);
btnAgain.addEventListener("click", resetGame);

// A Listener when clicking the buttons to make them soundy
gameButtons = document.querySelectorAll(".click-soundy").forEach((item) => {
  item.addEventListener("click", playSound);
});

// User Selection
userSelectionBtns.forEach((item) => {
  item.addEventListener("click", () => {
    userPaperSelected.style.backgroundColor = "#fff";
    userScissorsSelected.style.backgroundColor = "#fff";
    userRockSelected.style.backgroundColor = "#fff";
    if (item.id === "rockdiv") {
      playRound(moves[0]);
      userRockSelected.style.backgroundColor = "#7987e9";
    }
    if (item.id === "paperdiv") {
      playRound(moves[1]);
      userPaperSelected.style.backgroundColor = "#7987e9";
    }
    if (item.id === "scissorsdiv") {
      playRound(moves[2]);
      userScissorsSelected.style.backgroundColor = "#7987e9";
    }
  });
});

// FUNCTIONS
// Function that resets the game when clicking Again Button
function resetGame() {
  userScore = 0;
  compScore = 0;
  compScoreEl.textContent = compScore;
  userScoreEl.textContent = userScore;
  btnStart.classList.remove("hide");
  cardWinner.classList.add("hide");
  userWinLogo.classList.add("hide");
  compWinLogo.classList.add("hide");
  userScissorsSelected.style.backgroundColor = "#fff";
  userRockSelected.style.backgroundColor = "#fff";
  userPaperSelected.style.backgroundColor = "#fff";
  compPaperSelected.style.backgroundColor = "#fff";
  compRockSelected.style.backgroundColor = "#fff";
  compScissorsSelected.style.backgroundColor = "#fff";
  document.querySelector("body").style.boxShadow = "none";
}

//  Function to play audio on click
function playSound() {
  const btnPress = document.getElementById("click-sound");
  btnPress.play();
}

// Function to hide the button and show playground when clicking the Starter Button
function toggleModal() {
  btnStart.classList.toggle("hide");
  containerEl.classList.toggle("hide");
  document.querySelector("body").style.boxShadow =
    "inset 0 0 0 1000px rgba(0, 0, 0, 0.8)";
}

// Function for Computer selection
function computerPlay() {
  const randomNum = Math.trunc(Math.random() * 3) + 1;
  return moves[randomNum - 1];
}

//Main game function
function playRound(playerSelection) {
  const computerSelection = computerPlay();

  // Reset colors of computer selection boxes before choosing
  compPaperSelected.style.backgroundColor = "#fff";
  compRockSelected.style.backgroundColor = "#fff";
  compScissorsSelected.style.backgroundColor = "#fff";
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compPaperSelected.style.backgroundColor = "#fc5868";
      addScoreToComputer();
    } else if (computerSelection === "scissors") {
      compScissorsSelected.style.backgroundColor = "#fc5868";
      addScoreToPlayer();
    } else {
      addScoreInDraw();
      compRockSelected.style.backgroundColor = "#fc5868";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      compRockSelected.style.backgroundColor = "#fc5868";
      addScoreToPlayer();
    } else if (computerSelection === "scissors") {
      compScissorsSelected.style.backgroundColor = "#fc5868";
      addScoreToComputer();
    } else {
      addScoreInDraw();
      compPaperSelected.style.backgroundColor = "#fc5868";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      compRockSelected.style.backgroundColor = "#fc5868";
      addScoreToComputer();
    } else if (computerSelection === "paper") {
      compPaperSelected.style.backgroundColor = "#fc5868";
      addScoreToPlayer();
    } else {
      addScoreInDraw();
      compScissorsSelected.style.backgroundColor = "#fc5868";
    }
  }

  // Tracks the scores of players
  game(userScore, compScore);
}
// Function for adding 1 score to each player in case of draw
function addScoreInDraw() {
  userScore++;
  compScore++;
  compScoreEl.textContent = compScore;
  userScoreEl.textContent = userScore;
}

// Function for adding 1 score to Player
function addScoreToPlayer() {
  userScore++;
  userScoreEl.textContent = userScore;
}

// Function for adding  1 score to Computer
function addScoreToComputer() {
  compScore++;
  compScoreEl.textContent = compScore;
}

// Score Tracker
function game(playerScore, computerScore) {
  if (playerScore == 5 || computerScore == 5) {
    cardWinner.classList.remove("hide");
    containerEl.classList.add("hide");
    if (playerScore > computerScore) {
      gameUpdates.textContent = `YOU WIN ${playerScore}:${computerScore}`;
      userWinLogo.classList.remove("hide");
    } else if (computerScore > playerScore) {
      gameUpdates.textContent = `COMPUTER WINS ${playerScore}:${computerScore}!`;
      compWinLogo.classList.remove("hide");
    } else {
      gameUpdates.textContent = "IT WAS A DRAW!";
      userWinLogo.classList.remove("hide");
      compWinLogo.classList.remove("hide");
    }
  }
}
