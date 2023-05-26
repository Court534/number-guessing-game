"use strict";

// Practice code

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent =
// "🎉 Correct!"

// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 20

// document.querySelector(".guess").value = 21
// console.log(document.querySelector(".guess").value = 21);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered! ⛔️";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct!";
    highScore += score;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You ran out of guesses, Game Over!💥";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You ran out of guesses, Game Over!💥";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});
