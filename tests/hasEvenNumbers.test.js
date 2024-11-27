const hasEvenNumbers = require('../src/hasEvenNumbers');

  test('hasEvenNumbers перевіряє наявність парних чисел у масиві', () => {
    expect(hasEvenNumbers([1, 3, 5])).toBe(false);
    expect(hasEvenNumbers([1, 4, 5])).toBe(true);
  });