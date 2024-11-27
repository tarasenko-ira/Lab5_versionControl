const subtract = require('../src/subtract');

test('subtract повертає різницю або мінімальний результат', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(3, 7, 0)).toBe(0);
  });