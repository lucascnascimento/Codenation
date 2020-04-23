"use strict";

const fibonacci = () => {
  let fibonacciArray = [0];

  // Calcula a sequência de Fibonacci recursivamente
  const recursiveFibonacci = () => {
    if (fibonacciArray[fibonacciArray.length - 1] > 350) {
      return fibonacciArray;
    } else if (fibonacciArray.length === 1) {
      fibonacciArray.push(1);
      recursiveFibonacci();
    } else {
      let aux =
        fibonacciArray[fibonacciArray.length - 2] +
        fibonacciArray[fibonacciArray.length - 1];
      fibonacciArray.push(aux);
      recursiveFibonacci();
    }
  };

  recursiveFibonacci();
  return fibonacciArray;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
