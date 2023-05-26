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

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(document.querySelector(".score").textContent);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered! ⛔️";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High! 📈";
    document.querySelector(".score").value - 1
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low! 📉"
  }
});

// 'Too high!' : '📉 Too low!'
