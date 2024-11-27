function power(base, exponent) {
    if (exponent < 0) {
      throw new Error('Показник степеня не може бути від’ємним');
    }
    return Math.pow(base, exponent);
  }
  
  module.exports = power;