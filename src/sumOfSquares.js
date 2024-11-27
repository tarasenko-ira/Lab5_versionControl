const add = require('../src/add');
const power = require('../src/power');

// Підрахунок суми квадратів елементів масиву
function sumOfSquares(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Аргумент має бути масивом');
  }
  return arr.reduce((acc, val) => add(acc, power(val, 2)), 0);
}

module.exports = sumOfSquares;