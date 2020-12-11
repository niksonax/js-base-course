// 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

function getFibonacciNumber(n) {
  let prevElement = 1;
  let currentElement = 1;
  for (let i = 3; i <= n; i++) {
    let temp = prevElement + currentElement;
    prevElement = currentElement;
    currentElement = temp;
  }
  return currentElement;
}

console.log(getFibonacciNumber(7));
