"use strict";

// Functions
const generateRandom = function () {
  return Math.trunc(Math.random() * 100 + 1);
};
const hideHotterColder = function () {
  document.querySelector(".hotter-message").style.display = "none";

  document.querySelector(".colder-message").style.display = "none";
};

const showHotter = function () {
  hideHotterColder();
  document.querySelector(".hotter-message").style.display = "inline-block";
};

const showColder = function () {
  hideHotterColder();
  document.querySelector(".colder-message").style.display = "inline-block";
};

const displayText = function (text) {
  document.querySelector(".message").textContent = text;
};

const showHighScore = function (highScore) {
  document.querySelector(".highscore").textContent = highScore;
};

const changeScore = function () {
  document.querySelector(".score").textContent = score;
};

// Animations
const animateVictory = function () {
  let bodybg = document.getElementById("victory");

  bodybg.style.transition = "background 0.5s ease-in";
  bodybg.style.backgroundColor = "#60b347";

  let num = document.getElementById("secret");
  num.style.transition = "width 0.5s";
  num.style.width = "40rem";

  document.querySelector(".number").textContent = secretNumber;
};

const animateLoss = function () {
  let bodybg = document.getElementById("victory");

  bodybg.style.transition = "background 0.5s ease-in";
  bodybg.style.backgroundColor = "#be1013";

  let num = document.getElementById("secret");
  num.style.transition = "width 0.5s";
  num.style.width = "20rem";

  document.querySelector(".number").textContent = secretNumber;
};

const resetGame = function () {
  let bodybg = document.getElementById("victory");

  bodybg.style.transition = "background 0.5s ease-in";
  bodybg.style.backgroundColor = "#222";

  let num = document.getElementById("secret");
  num.style.transition = "width 0.5s";
  num.style.width = "20rem";

  //   document.querySelector(".number").textContent = "?";
};

// Variables
let secretNumber = generateRandom();
let highScore = 0,
  score = 50;
let prevGuess = 0,
  prevDiff = 0,
  count = 0;

document.querySelector(".number").textContent = secretNumber;

// Game Logic
hideHotterColder();

document.querySelector(".check").addEventListener("click", function () {
  if (score === 1) {
    animateLoss();
    document.getElementById("replay").disabled = true;
  }

  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayText("⛔ Enter the number");
  } else {
    if (guess !== secretNumber) {
      score--;
      if (guess < secretNumber) {
        secretNumber - guess < 10 ? displayText("Low") : displayText("Too Low");
      } else if (guess > secretNumber) {
        guess - secretNumber < 10
          ? displayText("High")
          : displayText("Too High");
      }

      prevDiff = Math.abs(prevGuess - secretNumber);

      if (Math.abs(guess - secretNumber) < prevDiff) {
        showHotter();
      } else {
        showColder();
      }
    } else {
      displayText("🎉 You won! 🎉");
      hideHotterColder();

      if (highScore < score) {
        highScore = score;
        showHighScore(highScore);
      }

      animateVictory();
    }

    prevGuess = guess;
    changeScore();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = generateRandom();
  document.querySelector(".number").textContent = secretNumber;

  displayText("Start Guessing...");

  score = 50;
  changeScore();

  resetGame();

  document.getElementById("replay").disabled = false;

  document.querySelector(".guess").value = "";
});

// Modal
let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
