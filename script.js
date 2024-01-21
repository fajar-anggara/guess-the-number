'use strict';

let theNumber = Math.trunc(Math.random() * 5);
let score = 5;
let highscore = 0;

const dom = (selector, value) => {
  switch (value[0]) {
    case 't':
      document.querySelector(selector).textContent = value[1];
      break;
    case 'v':
      document.querySelector(selector).value = value[1];
      break;
  }
};
document.querySelector('.check').addEventListener('click', () => {
  let inputValue = Number(document.querySelector('.guess').value);
  console.log(score);
  dom('.score', ['t', score]);
  if (score == 0) {
    alert('nyawa habis');
  } else if (inputValue < theNumber) {
    score--;
    dom('.message', ['t', 'Too Low']);
  } else if (inputValue > theNumber) {
    score--;
    dom('.message', ['t', 'Too High']);
  } else if (inputValue === theNumber) {
    dom('.message', ['t', 'Correct']);
    dom('.number', ['t', theNumber]);
    score >= highscore ? highscore = score : highscore = highscore
    dom('.highscore', ['t', highscore]);
    dom('.titleScreen', ['t', 'You are correct']);
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 5;
  theNumber = Math.trunc(Math.random() * 5);
  dom('.message', ['t', 'Start guessing...']);
  dom('.titleScreen', ['t', 'Guess My Number!']);
  dom('.score', ['t', score]);
  dom('.guess', ['v', null]);
  dom('.number', ['t', '?'])
});
document.querySelector('.guess').addEventListener('click', () => {
  dom('.guess', ['v', null]);
});
