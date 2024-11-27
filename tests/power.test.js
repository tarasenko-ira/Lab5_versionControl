const power  = require('../src/power');

test('power повертає піднесення до степеня і кидає помилку при від’ємному показнику', () => {
    expect(power(2, 3)).toBe(8);
    expect(() => power(2, -1)).toThrow('Показник степеня не може бути від’ємним');
  }) 