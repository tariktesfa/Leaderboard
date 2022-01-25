class Leaderboard {
  constructor(playerName, score) {
    this.playerName = playerName;
    this.score = score;
  }

  static list = document.querySelector('.scores-list');

  static data = (scoreObj) => {
    if (scoreObj) {
      window.localStorage.setItem('scores', JSON.stringify(scoreObj));
      return true;
    }
    const datas = ((window.localStorage.getItem('scores') !== null) ? JSON.parse(window.localStorage.getItem('scores')) : []);
    return datas;
  }

  static add = (scoreData) => {
    if (scoreData.user !== '') {
      if (this.data().length === 0) {
        document.querySelector('.no-score').remove();
      }
      const store = Leaderboard.data();
      store.push(scoreData);
      this.data(store);
      this.load();
    }
  }

  static load = () => {
    this.list.innerHTML = '';
    if (this.data().length) {
      this.data().forEach((result) => {
        this.append(result);
      });
    } else {
      this.list.innerHTML += `
        <li class="no-score">No Data to Display</li>
      `;
    }
  }

  static append = (result) => {
    this.list.innerHTML += `
      <li>${result.playerName} :  ${result.score}</span></li>
    `;
  }
}
export default Leaderboard;