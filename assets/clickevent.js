/* eslint-disable-next-line import/extensions */
import { gamePlayers } from './storage.js';

export default () => {
  const restartGame = document.getElementById('restart');
  const submitBtn = document.getElementById('submit');
  const disableRestartBtn = () => {
    gamePlayers.length === 0 ? restartGame.disabled = true : restartGame.disabled = false;
  };

  const disableForm = () => {
    gamePlayers.length === 0 ? submitBtn.disabled = false : submitBtn.disabled = true;
  };

  return { disableRestartBtn, disableForm };
};