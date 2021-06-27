const divideBy10 = (function divideBy(firstNumber) {
  function divide(secondNumber) {
    return secondNumber / firstNumber;
  }
  return divide;
})(10);

const divideBy100 = (function divideBy(firstNumber) {
  function divide(secondNumber) {
    return secondNumber / firstNumber;
  }
  return divide;
})(100);

const addBy100 = (function addBy(firstNumber) {
  function add(secondNumber) {
    return firstNumber + secondNumber;
  }
  return add;
})(100);

const addBy1000 = (function addBy(firstNumber) {
  function add(secondNumber) {
    return firstNumber + secondNumber;
  }
  return add;
})(1000);
