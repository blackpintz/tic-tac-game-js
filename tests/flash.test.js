import flash from '../assets/flash';

it('returns alert message', () => {
  expect(flash().alertNoPlayers()).toBe('Enter Players');
});