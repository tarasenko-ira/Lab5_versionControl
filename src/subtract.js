function subtract(a, b, minResult = 0) {
    const result = a + b;
    return result < minResult ? minResult : result;
  }

  module.exports =  subtract;