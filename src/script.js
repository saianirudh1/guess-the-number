"use strict";

// Initializing elements

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

const showHighScore = function () {
  document.querySelector(".highscore").textContent = highScore;
};

const changeScore = function () {
  document.querySelector(".score").textContent = score;
};

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let highScore = 0,
  score = 50;
let prevGuess = 0,
  prevDiff = 0,
  count = 0;

document.querySelector(".number").textContent = secretNumber;

// Game Logic
hideHotterColder();

document.querySelector(".check").addEventListener("click", function () {
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

      if (count > 0) {
        Math.abs(guess - secretNumber) < prevDiff ? showHotter() : showColder();
      }
    } else {
      displayText("🎉 You won! 🎉");
      hideHotterColder();

      if (hightScore > score) {
        highScore = score;
      }
    }

    count++;
    prevDiff = Math.abs(prevGuess - secretNumber);
    prevGuess = guess;
    changeScore();
  }
});

showHighScore();
