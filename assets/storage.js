/* eslint-disable-next-line import/extensions */
import Player from './player.js';

export const gamePlayers = localStorage.getItem('players')
  ? JSON.parse(localStorage.getItem('players'))
  : [];

localStorage.setItem('players', JSON.stringify(gamePlayers));
JSON.parse(localStorage.getItem('players'));

const playerModule = (() => {
  const addPlayer = (playerone, playertwo) => {
    const signone = 'X';
    const signtwo = 'O';
    const statusone = true;
    const statustwo = false;
    const firstPlayer = Player(playerone, signone, statusone);
    const secondPlayer = Player(playertwo, signtwo, statustwo);
    gamePlayers.push(firstPlayer);
    gamePlayers.push(secondPlayer);
    localStorage.setItem('players', JSON.stringify(gamePlayers));
  };

  const deletePlayers = () => {
    gamePlayers.splice(0);
    localStorage.setItem('players', JSON.stringify(gamePlayers));
  };

  const togglePlayer = () => {
    gamePlayers[0].status = !gamePlayers[0].status;
    gamePlayers[1].status = !gamePlayers[1].status;
    localStorage.setItem('players', JSON.stringify(gamePlayers));
  };

  return { addPlayer, deletePlayers, togglePlayer };
})();

export { playerModule };