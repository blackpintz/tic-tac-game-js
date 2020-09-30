/* eslint-disable-next-line import/extensions */
import GameBoard from './gameboard.js';
/* eslint-disable-next-line import/extensions */
import GameLogic from './game_logic.js';
/* eslint-disable-next-line import/extensions */
import playerModule from './storage.js';


GameBoard.tableArray(GameBoard.cells[0], GameBoard.cells[1], GameBoard.cells[2]);
GameBoard.tableArray(GameBoard.cells[3], GameBoard.cells[4], GameBoard.cells[5]);
GameBoard.tableArray(GameBoard.cells[6], GameBoard.cells[7], GameBoard.cells[8]);


const resetGame = document.getElementById('reset');
resetGame.onclick = () => {
  const gameCells = document.getElementsByTagName('td');
  const cells = [...gameCells];
  cells.forEach(cell => cell.innerText = '');
  playerModule.deletePlayers();
};

GameLogic();
