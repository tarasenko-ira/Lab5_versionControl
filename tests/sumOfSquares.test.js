const sumOfSquares = require('../src/sumOfSquares');

describe('Інтеграційні тести для arrayOperations', () => {
  test('sumOfSquares обчислює суму квадратів елементів масиву', () => {
    expect(sumOfSquares([1, 2, 3])).toBe(14); // 1^2 + 2^2 + 3^2 = 14
    expect(() => sumOfSquares('не масив')).toThrow('Аргумент має бути масивом');
  })
})