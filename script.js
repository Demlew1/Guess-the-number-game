'use strict';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '🔢 Please insert a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😃Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '👇Try Lower!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '☝️Try higher!';
  }
});
