'use strict';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'Not a Number')
    );
  }
});
