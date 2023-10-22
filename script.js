const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const scorePr = document.querySelector(".score");
const resetBtn = document.querySelector(".reset");

// Score Cointer
const scoreCointer = {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Computer Choice
function randomIndex() {
  const container = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * container.length);
  const computerChoice = container[randomIndex];
  return computerChoice;
}

// User Choice
let userChoice;
rockBtn.onclick = function () {
  userChoice = "rock";
  conditions(randomIndex(), userChoice);
};

paperBtn.onclick = function () {
  userChoice = "paper";
  conditions(randomIndex(), userChoice);
};

scissorsBtn.onclick = function () {
  userChoice = "scissors";
  conditions(randomIndex(), userChoice);
};

// Print Score Function
function printScore() {
  scorePr.innerHTML = `Wins: ${scoreCointer.wins}, Losses: ${scoreCointer.losses}, Ties: ${scoreCointer.ties}`;
}
printScore();

// Alert Result
function alertResult(userChoice, computerChoice) {
  alert(`You picked ${userChoice} Computer picked ${computerChoice}.`);
}

// Conditions Function
function conditions(computerChoice, userChoice) {
  if (computerChoice == userChoice) {
    scoreCointer.ties += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    scoreCointer.losses += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  } else if (computerChoice === "paper" && userChoice === "rock") {
    scoreCointer.losses += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    scoreCointer.losses += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    scoreCointer.wins += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  } else if (userChoice === "paper" && computerChoice === "rock") {
    scoreCointer.wins += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  } else if (userChoice == "scissors" && computerChoice === "paper") {
    scoreCointer.wins += 1;
    printScore();
    alertResult(userChoice, computerChoice);
  }
}

// Reset Btn

resetBtn.onclick = function () {
  scoreCointer.losses = 0;
  scoreCointer.wins = 0;
  scoreCointer.ties = 0;
  printScore();
};
