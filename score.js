// Iteration 8: Making scoreboard functional
let totalscored = document.getElementById('score-board');
totalscored.innerText = localStorage.getItem('score');

let playAgaianBtn = document.getElementById('play-again-button');
playAgaianBtn.addEventListener('click', function () {
  window.location.href = './game.html';
});