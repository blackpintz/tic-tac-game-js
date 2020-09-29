/* eslint-disable-next-line import/extensions */
import playerModule, { gamePlayers } from './storage.js';
/* eslint-disable-next-line import/extensions */
import alertMessage from './elements.js';

export default () => {
  const gameCells = document.getElementsByTagName('td');
  const form = document.getElementById('form');
  const submitData = () => {
    const firstplayer = document.getElementById('playerone').value;
    const secondplayer = document.getElementById('playertwo').value;
    return playerModule.addPlayer(firstplayer, secondplayer);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitData();
    form.reset();
  });
  const cellsArr = [...gameCells];

  const playGame = (player, cell, index) => {
    cell.innerText = player.sign;
    player.playMoves.push(index + 1);
    playerModule.togglePlayer();
  };

  cellsArr.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if (gamePlayers.length === 0) {
        alertMessage();
      } else if (gamePlayers[0].status === true && cell.innerText === '') {
        playGame(gamePlayers[0], cell, idx);
      } else if (gamePlayers[1].status === true && cell.innerText === '') {
        playGame(gamePlayers[1], cell, idx);
      }
    });
  });

  return { cellsArr };
};
