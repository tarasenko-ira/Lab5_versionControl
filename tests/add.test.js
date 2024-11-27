const add = require('../src/add');

describe('Модульні тести для mathFunctions', () => {
  test('add додає два числа і кидає помилку при некоректних аргументах', () => {
    expect(add(3, 5)).toBe(8);
    expect(() => add('3', 5)).toThrow('Аргументи повинні бути числами');
  })  
})