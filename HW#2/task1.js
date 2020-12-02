//1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");
let c = +prompt("Enter third number:");

if (a === b || a === c || b === c) {
  alert("Ошибка");
} else {
  let res = (a + b + c) / 3;
  alert(res);
}
