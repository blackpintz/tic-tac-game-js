/* eslint-disable-next-line import/extensions */
import { gamePlayers } from './storage.js';

export default () => {
  const alertNoPlayers = () => {
    const content = document.getElementById('alert');
    const alertMsg = document.createElement('div');
    alertMsg.innerHTML = '<h3>Please enter players</h3>';
    alertMsg.className = 'alert alert-warning alert-dismissible fade show';
    const dismissBtn = document.createElement('button');
    dismissBtn.innerHTML = '<span>&times;</span>';
    dismissBtn.setAttribute('data-dismiss', 'alert');
    dismissBtn.setAttribute('type', 'button');
    dismissBtn.className = 'close';
    alertMsg.appendChild(dismissBtn);
    return content.appendChild(alertMsg);
  };

  const showPlayers = () => {
    const playerDiv = document.getElementById('player');
    const previousPlayers = document.getElementById('allplayers');
    if (previousPlayers !== null) previousPlayers.remove();
    const player = document.createElement('p');
    player.className = 'font-weight-bold';
    player.id = 'allplayers';
    if (gamePlayers.length !== 0) {
      player.innerText = `${gamePlayers[0].name} (${gamePlayers[0].sign}) and ${gamePlayers[1].name} (${gamePlayers[1].sign}) are playing the game.`;
    } else {
      player.innerText = 'Players, add your names before you play.';
    }
    return playerDiv.appendChild(player);
  };

  const showWinner = (player) => {
    const playerDiv = document.getElementById('player');
    const previousPlayer = document.getElementById('name');
    previousPlayer.remove();
    const winner = document.createElement('h4');
    winner.id = 'name';
    winner.innerText = `Congratulations ${player}, you won the game.`;
    return playerDiv.appendChild(winner);
  };

  const showCurrentPlayer = (player) => {
    const playerDiv = document.getElementById('player');
    const previousPlayer = document.getElementById('name');
    if (previousPlayer !== null) previousPlayer.remove();
    const name = document.createElement('h4');
    name.id = 'name';
    name.innerText = `${player}, your turn`;
    return playerDiv.appendChild(name);
  };

  return {
    alertNoPlayers, showCurrentPlayer, showPlayers, showWinner,
  };
};