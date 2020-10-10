import flash from '../assets/flash';

jest.mock('../assets/flash', () => ({
  alertNoPlayers: jest.fn(() => 'Enter Players.'),
  showPlayers: jest.fn(() => 'Mary and Lucy are playing.'),
  showWinner: jest.fn(() => 'You win the game.'),
  showCurrentPlayer: jest.fn(() => 'Mary, your turn.'),
}));

it('displays game messages', () => {
  afterEach(() => jest.resetAllMocks());
  expect(flash.alertNoPlayers()).toBe('Enter Players.');
  expect(flash.showPlayers()).toBe('Mary and Lucy are playing.');
  expect(flash.showWinner()).toBe('You win the game.');
  expect(flash.showCurrentPlayer()).toBe('Mary, your turn.');
});