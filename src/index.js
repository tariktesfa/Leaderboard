import Leaderboard from './modules/class.js';
import './style.css';

Leaderboard.load();

const name = document.querySelector('#fullname');
const playerScore = document.querySelector('#score');

document.querySelector('#submit-data').addEventListener('submit', (e) => {
  e.preventDefault();
  const score = new Leaderboard(name.value, playerScore.value);
  Leaderboard.add(score);
  document.querySelector('#fullname').value = '';
  document.querySelector('#score').value = '';
});

document.querySelector('.refresh').addEventListener('click', () => {
  Leaderboard.load();
});