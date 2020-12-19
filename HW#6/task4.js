//4. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция должна возвращать логическое значение.

function checkPositive(arr) {
  return arr.some(function (item) {
    return item > 0;
  });
}

console.log(checkPositive([1, 2, 3, -4, 5]));
