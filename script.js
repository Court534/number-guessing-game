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
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

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
      document.querySelector("body").style.backgroundColor = "red";
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
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// Again function
document.querySelector(".again").addEventListener("click", function () {
  let score = 20;

  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "black";
});
