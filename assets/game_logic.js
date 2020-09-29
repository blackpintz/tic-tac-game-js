/* eslint-disable-next-line import/extensions */
import playerModule, { gamePlayers } from './storage.js';


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

  cellsArr.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if (gamePlayers[0].status === true && cell.innerText === '') {
        cell.innerText = gamePlayers[0].sign;
        gamePlayers[0].playMoves.push(idx + 1);
      } else if (gamePlayers[1].status === true && cell.innerText === '') {
        cell.innerText = gamePlayers[1].sign;
        gamePlayers[1].playMoves.push(idx + 1);
      }
      playerModule.togglePlayer();
    });
  });

  return { cellsArr };
};
