"use strict";

const fibonacci = () => {
  let fibonacciArray = [0];
  const recursiveFibonacci = () => {
    if (fibonacciArray[fibonacciArray.length - 1] > 350) {
      return fibonacciArray;
    } else if (fibonacciArray.length === 1) {
      fibonacciArray.push(1);
      recursiveFibonacci();
    }
    let aux =
      fibonacciArray[fibonacciArray.length - 2] +
      fibonacciArray[fibonacciArray.length - 1];
    fibonacciArray.push(aux);
    recursiveFibonacci();
  };
  recursiveFibonacci();
  return fibonacciArray;
};

const isFibonnaci = (num) => null;

module.exports = {
  fibonacci,
  isFibonnaci,
};
