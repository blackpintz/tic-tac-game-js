/* eslint-disable-next-line import/extensions */
import GameBoard from './gameboard.js';
/* eslint-disable-next-line import/extensions */
import GameLogic from './game_logic.js';
/* eslint-disable-next-line import/extensions */
import playerModule, { gamePlayers } from './storage.js';
/* eslint-disable-next-line import/extensions */
import alertMessage from './flash.js';
/* eslint-disable-next-line import/extensions */
import clickEvent from './clickevent.js';

GameBoard.tableArray(GameBoard.cells[0], GameBoard.cells[1], GameBoard.cells[2]);
GameBoard.tableArray(GameBoard.cells[3], GameBoard.cells[4], GameBoard.cells[5]);
GameBoard.tableArray(GameBoard.cells[6], GameBoard.cells[7], GameBoard.cells[8]);

window.onload = () => {
  if (gamePlayers.length !== 0) playerModule.emptyMovesPlayed();
};

alertMessage().showPlayers();
clickEvent().disableRestartBtn();
clickEvent().disableForm();
GameLogic();
