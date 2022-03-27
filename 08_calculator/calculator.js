const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return Math.max(num1, num2) - Math.min(num1, num2);
};

const sum = function(num) {
  return num.reduce((prevNum, currentNum) => prevNum + currentNum, 0);
};

const multiply = function(num) {
  return num.reduce((prevNum, currentNum) => prevNum * currentNum);
};

const power = function(num, power) {
  return Math.pow(num, power);
};

const factorial = function(num) {
  return (num > 1) ? num * factorial(num-1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
