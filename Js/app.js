const rulesbtn = document.querySelector(".rules-btn");
const rulesPopup = document.querySelector(".rules-popup");
const closebtn = document.querySelector(".close-btn");
const gameArea = document.querySelector(".game-area");
const resultScreen = document.querySelector(".result-screen");
const resultMsg = document.getElementById("result-msg");
const userPick = document.getElementById("user-pick");
const computerPick = document.getElementById("computer-pick");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");
const playAgainBtns = document.querySelectorAll(".play-again");
const nextBtn = document.getElementById("next-btn");
const hurrayScreen = document.querySelector(".hurray-screen");
const scoreBoard = document.querySelector(".score-board");
const container = document.querySelector(".container");

rulesbtn.addEventListener("click", () => {
  rulesPopup.style.display = "flex";
});

closebtn.addEventListener("click", () => {
  rulesPopup.style.display = "none";
});

// VARIABLES 
let userScore = 0;
let computerScore = 0;

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

//  Load saved score from localStorage
userScore = localStorage.getItem("userScore")
  ? parseInt(localStorage.getItem("userScore"))
  : 0;

computerScore = localStorage.getItem("computerScore")
  ? parseInt(localStorage.getItem("computerScore"))
  : 0;

// Update scoreboard UI
userScoreEl.textContent = userScore;
computerScoreEl.textContent = computerScore;

// COMPUTER CHOICE FUNCTION
function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

//  RESULT FUNCTION
function getResult(user, computer) {
  if (user === computer) return "tie";

  if (
    (user === "rock" && computer === "scissor") ||
    (user === "scissor" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

//  MAIN GAME LOGIC
const choices = document.querySelectorAll(".game-area .choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.classList[1];
    const computerChoice = getComputerChoice();

    const result = getResult(userChoice, computerChoice);

    if (result === "win") {
      userScore++;
      userScoreEl.textContent = userScore;
      localStorage.setItem("userScore", userScore);
    } else if (result === "lose") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      localStorage.setItem("computerScore", computerScore);
    }

    //  SCREEN SWITCH YAHAN HOGA
    gameArea.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    // set circle border
    userPick.className = `choice ${userChoice}`;
    computerPick.className = `choice ${computerChoice}`;

    // set images
    userImg.src = `./assets/${userChoice}.png`;
    computerImg.src = `./assets/${computerChoice}.png`;

    // result text
    if (result === "win") {
      resultMsg.innerHTML = `
    <span class="main-result">YOU WIN</span>
    <span class="sub-result">AGAINST PC</span>
  `;
    } else if (result === "lose") {
      resultMsg.innerHTML = `
    <span class="main-result">YOU LOST</span>
    <span class="sub-result">AGAINST PC</span>
  `;
    } else {
      resultMsg.innerHTML = `
    <span class="main-result">TIE UP</span>
    <span class="sub-result">&nbsp;</span>

  `;
    }

    // NEXT button logic
    if (result === "win") {
      nextBtn.classList.remove("hidden");

      playAgainBtns.forEach((btn) => {
        btn.classList.add("hidden");
      }); // hide play again
    } else {
      nextBtn.classList.add("hidden");
      playAgainBtns.forEach((btn) => {
        btn.classList.remove("hidden");
      });
      //  show play again
    }

    // ------Animation class-------
    //  Remove old winner classes (important)
    userPick.classList.remove("winner");
    computerPick.classList.remove("winner");

    // Remove old ring3 if exists
    const oldRings = document.querySelectorAll(".ring3");
    oldRings.forEach((r) => r.remove());

    if (result === "win") {
      userPick.classList.add("winner");

      const ring = document.createElement("span");
      ring.classList.add("ring3");
      userPick.appendChild(ring);
    } else if (result === "lose") {
      computerPick.classList.add("winner");

      const ring = document.createElement("span");
      ring.classList.add("ring3");
      computerPick.appendChild(ring);
    }

    console.log("User:", userChoice);
    console.log("Computer:", computerChoice);
    console.log("Result:", result);
  });
});

playAgainBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hurray screen bhi hide karo
    hurrayScreen.classList.add("hidden");

    // Result hide
    resultScreen.classList.add("hidden");

    // Game wapas
    gameArea.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");

    nextBtn.classList.add("hidden");

    // winner effect remove
    userPick.classList.remove("winner");
    computerPick.classList.remove("winner");

    const oldRings = document.querySelectorAll(".ring3");
    oldRings.forEach((r) => r.remove());
  });
});

nextBtn.addEventListener("click", () => {
  // Hide result screen
  resultScreen.classList.add("hidden");

  // Hide game + scoreboard
  gameArea.classList.add("hidden");
  scoreBoard.classList.add("hidden");

  // Hide NEXT button
  nextBtn.classList.add("hidden");

  // Show Hurray screen
  hurrayScreen.classList.remove("hidden");

  playAgainBtns.forEach((btn) => {
    btn.classList.remove("hidden");
  });
});
