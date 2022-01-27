class Leaderboard {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  static list = document.querySelector('.scores-list');

  static add = async (scoreData) => {
    document.querySelector('.submit');
    if (scoreData.user !== '') {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(scoreData),
      };
      const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Vx0jHXdImQzjEt7NdS5l/scores', requestOptions);
    }
    if (request.status === 201) {
      this.load();
    }
  }

  static load = async () => {
    let scores = '';
    this.list.innerHTML = '';
    if (navigator.onLine) {
      const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Vx0jHXdImQzjEt7NdS5l/scores', { method: 'GET' });
      const { result } = await request.json();
      if (result.length) {
        result.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)).forEach((score) => {
          scores += `
          <li>${score.user} :  ${score.score}</li>
        `;
        });
        this.list.innerHTML = scores;
      } else {
        this.list.innerHTML += `
        <li class="no-score">No Data to Display</li>
      `;
      }
    }
  }
}
export default Leaderboard;