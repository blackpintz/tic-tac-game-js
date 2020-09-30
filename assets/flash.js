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

  const showCurrentPlayer = (player) => {
    const playerDiv = document.getElementById('player');
    const previousPlayer = document.getElementById('name');
    if (previousPlayer !== null) previousPlayer.remove();
    const name = document.createElement('h4');
    name.id = 'name';
    name.innerText = `${player}, your turn`;
    return playerDiv.appendChild(name);
  };

  return { alertNoPlayers, showCurrentPlayer };
};