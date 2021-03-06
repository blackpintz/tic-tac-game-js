import playerModule, { gamePlayers } from './storage';
import alertMessage from './flash';
import clickEvent from './clickevent';

export default () => {
  const gameCells = document.getElementsByTagName('td');
  const form = document.getElementById('form');
  const submitData = () => {
    const firstplayer = document.getElementById('playerone').value;
    const secondplayer = document.getElementById('playertwo').value;
    return playerModule.addPlayer(firstplayer, secondplayer);
  };

  const eventActions = () => {
    alertMessage().showPlayers();
    clickEvent().disableRestartBtn();
    clickEvent().disableForm();
  };

  const restartGame = document.getElementById('restart');
  restartGame.onclick = () => {
    const cells = [...gameCells];
    const playerDisplay = document.getElementById('name');
    if (playerDisplay !== null) playerDisplay.remove();
    cells.forEach(cell => cell.innerText = '');
    playerModule.emptyMovesPlayed();
  };

  const resetGame = document.getElementById('reset');
  resetGame.onclick = () => {
    const cells = [...gameCells];
    const playerDisplay = document.getElementById('name');
    if (playerDisplay !== null) playerDisplay.remove();
    cells.forEach(cell => cell.innerText = '');
    playerModule.deletePlayers();
    eventActions();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitData();
    form.reset();
    eventActions();
  });
  const cellsArr = [...gameCells];

  const playGame = (player, cell, index) => {
    cell.innerText = player.sign;
    player.playMoves.push(index + 1);
    playerModule.togglePlayer();
  };

  const winGame = (player) => {
    const winMoves = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    let i = 0;
    let tracker = [];
    while (i < winMoves.length) {
      if (player.playMoves.includes(winMoves[i][0]) && tracker.length < 3) {
        tracker.push(winMoves[i][0]);
      }
      if (player.playMoves.includes(winMoves[i][1]) && tracker.length < 3) {
        tracker.push(winMoves[i][1]);
      }
      if (player.playMoves.includes(winMoves[i][2]) && tracker.length < 3) {
        tracker.push(winMoves[i][2]);
      }
      if (tracker.length < 3) {
        tracker = [];
      } else {
        break;
      }
      i++;
    }
    return tracker.length === 3;
  };

  cellsArr.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if (gamePlayers.length === 0) {
        alertMessage().alertNoPlayers();
      } else if (gamePlayers[0].status === true && cell.innerText === '' && winGame(gamePlayers[0]) === false && winGame(gamePlayers[1]) === false) {
        playGame(gamePlayers[0], cell, idx);
        alertMessage().showCurrentPlayer(gamePlayers[1].name);
      } else if (gamePlayers[1].status === true && cell.innerText === '' && winGame(gamePlayers[0]) === false && winGame(gamePlayers[1]) === false) {
        playGame(gamePlayers[1], cell, idx);
        alertMessage().showCurrentPlayer(gamePlayers[0].name);
      }

      if (winGame(gamePlayers[0]) === true) {
        alertMessage().showWinner(gamePlayers[0].name);
      }

      if (winGame(gamePlayers[1]) === true) {
        alertMessage().showWinner(gamePlayers[1].name);
      }
      const noEmptyCell = (val) => val.innerText === 'X' || val.innerText === 'O';
      if (cellsArr.every(noEmptyCell) && winGame(gamePlayers[0]) === false && winGame(gamePlayers[1]) === false) {
        const previousPlayer = document.getElementById('name');
        previousPlayer.innerText = 'Game over with a draw. Play again.';
      }
    });
  });

  return { cellsArr, winGame, playGame };
};
