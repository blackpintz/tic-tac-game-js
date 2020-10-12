import clickAction from '../assets/clickevent';
import Player from '../assets/player';
import { gamePlayers } from '../assets/storage';

beforeEach(() => {
  const player = Player('Lucy', 'X', true);
  gamePlayers.push(player);
});

test('restart button disabled', () => {
  document.body.innerHTML = `
    <button id='restart'>Restart Game</button>
    `;
  expect(clickAction().disableRestartBtn()).toBe(false);
});

test('submit button disabled', () => {
  document.body.innerHTML = `
    <button id='submit'>Restart Game</button>
    `;
  expect(clickAction().disableForm()).toBe(true);
});
