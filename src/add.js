function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Аргументи повинні бути числами.');
    }
    return a + b;
  }
  module.exports = add;