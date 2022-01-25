import Leaderboard from './modules/class.js';
import './style.css';

(() => {
  Leaderboard.load();
})();

document.querySelector('#submit-data').addEventListener('submit', (e) => {
  e.preventDefault();
  const score = new Leaderboard(document.querySelector('#fullname').value, document.querySelector('#score').value);
  Leaderboard.add(score);
  document.querySelector('#fullname').value = '';
  document.querySelector('#score').value = '';
});

document.querySelector('.form').addEventListener('click', () => {
  Leaderboard.load();
});