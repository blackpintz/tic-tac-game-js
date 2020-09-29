/* eslint-disable-next-line import/extensions */
import Player from './player.js';

export const gamePlayers = localStorage.getItem('players')
  ? JSON.parse(localStorage.getItem('players'))
  : [];

localStorage.setItem('players', JSON.stringify(gamePlayers));
JSON.parse(localStorage.getItem('players'));

export default (() => {
  const addPlayer = (playerone, playertwo) => {
    const firstPlayer = Player(playerone, 'X', true);
    const secondPlayer = Player(playertwo, 'O', false);
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
