// 4. Дано два числа A и B где (A<B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

let a = +prompt("Enter A:");
let b = +prompt("Enter B:");
let temp = a;
let res = 0;
temp++; // sum of elements between A and B, so A doesnt included

if (a < b) {
  for (temp; temp < b; temp++) {
    res += temp;

    // All uneven numbers will be printed in console
    if (temp % 2 === 1) {
      console.log(temp);
    } else {
      continue;
    }
  }
  alert("Sum of all number between " + a + " and " + b + " is: " + res);
} else {
  alert("A should be less than B.");
}
