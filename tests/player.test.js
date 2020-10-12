import Player from '../assets/player';

test('player function', () => {
  expect(Player('Rose', 'X', true)).toEqual({
    name: 'Rose', sign: 'X', status: true, playMoves: [],
  });
});