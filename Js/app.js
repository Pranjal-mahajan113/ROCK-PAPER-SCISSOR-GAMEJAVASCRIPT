//rules Button show
const rulesbtn = document.querySelector(".rules-btn");
const rulesPopup = document.querySelector(".rules-popup");
const closebtn = document.querySelector(".close-btn");
rulesbtn.addEventListener("click", () => {
  rulesPopup.style.display = "flex";
});
closebtn.addEventListener("click", () => {
  rulesPopup.style.display = "none";
});

//
const choices = document.querySelectorAll(".choice");

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.classList[1];
//     console.log("User Choice:", userChoice);
//   });
// });


function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.classList[1];
    const computerChoice = getComputerChoice();

    console.log("User:", userChoice);
    console.log("Computer:", computerChoice);
  });
});
