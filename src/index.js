import GameBoard from './assets/gameboard';
import GameLogic from './assets/game_logic';
import playerModule, { gamePlayers } from './assets/storage';
import alertMessage from './assets/flash';
import clickEvent from './assets/clickevent';

import './style.css'
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
