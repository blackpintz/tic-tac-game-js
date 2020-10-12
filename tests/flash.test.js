import flash from '../assets/flash';

it('displays game messages', () => {
  document.body.innerHTML = `
   <div id='alert'></div>
  <div id='player'></div>
  <h4 id='name'></h4>
  `;
  expect(flash().showPlayers().innerText).toBe('Players, add your names before you play.');
  expect(flash().showWinner('Rose').innerText).toBe('Congratulations Rose, you won the game.');
  expect(flash().alertNoPlayers().innerHTML).toContain('<h3>Please enter players</h3>');
  expect(flash().showCurrentPlayer('Mary').innerText).toBe('Mary, your turn');
});