import GameBoard from '../assets/gameboard';

test('gameboard', () => {
  expect(GameBoard.cells).toHaveLength(9);
  expect(GameBoard.tableArray).toBeInstanceOf(Function);
});