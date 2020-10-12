import GameLogic from '../assets/game_logic';
import Player from '../assets/player';
import { gamePlayers } from '../assets/storage';

beforeEach(() => {
  const playerone = Player('Lucy', 'X', true);
  const playertwo = Player('Jess', 'O', false);
  playertwo.playMoves = [4, 5, 6];
  gamePlayers.push(playerone);
  gamePlayers.push(playertwo);
});

test('game play', () => {
  document.body.innerHTML = `
    <button id='restart'></button>
    <button id='reset'></button>
    <form id='form'></form>
    `;
  const column = document.createElement('td');
  GameLogic().playGame(gamePlayers[0], column, 0);
  expect(column.innerText).toBe('X');
});

test('game win', () => {
  expect(GameLogic().winGame(gamePlayers[1])).toBe(true);
});