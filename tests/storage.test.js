import playerModule, { gamePlayers } from '../src/assets/storage';
import Player from '../src/assets/player';

beforeEach(() => {
  const playerone = Player('Lucy', 'X', true);
  const playertwo = Player('Jess', 'O', false);
  playertwo.playMoves = [4, 5, 6];
  gamePlayers.push(playerone);
  gamePlayers.push(playertwo);
});

test('add players', () => {
  playerModule.addPlayer('May', 'June');
  expect(gamePlayers).toHaveLength(4);
});

test('delete players', () => {
  playerModule.deletePlayers();
  expect(gamePlayers).toHaveLength(0);
});

test('toggle players', () => {
  playerModule.togglePlayer();
  expect(gamePlayers[0].status).toBe(false);
});

test('empty played moves', () => {
  playerModule.emptyMovesPlayed();
  expect(gamePlayers[1].playMoves).toHaveLength(0);
});