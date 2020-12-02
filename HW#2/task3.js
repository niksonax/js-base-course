// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");
let c = +prompt("Enter third number:");

if (a > b && a > c) {
  alert("The first number is the biggest: " + a);
} else if (b > a && b > c) {
  alert("The second number is the biggest: " + b);
} else {
  alert("The third number is the biggest: " + c);
}
