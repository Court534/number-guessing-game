"use strict";

// Generating the secret number 
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";
let score = 20;
let highScore = 0;

// Game Logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no number is entered
  if (!guess) {
    document.querySelector(".message").textContent = "No number entered! ⛔️";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct!";
    highScore += score;
    document.querySelector(".highscore").textContent = highScore;

    // Guess too high indicator
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      document.querySelector(".score").textContent = score;

      // Game over
    } else {
      document.querySelector(".message").textContent =
        "You ran out of guesses, Game Over!💥";
      score = 0;
      document.querySelector(".score").textContent = score;
    }

    // Guess too low indicator
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low! 📉";
      score--;
      document.querySelector(".score").textContent = score;

      // Game over
    } else {
      document.querySelector(".message").textContent =
        "You ran out of guesses, Game Over!💥";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});
