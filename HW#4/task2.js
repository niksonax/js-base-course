//2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

function raiseTopower(number, power) {
  if (power === 1) {
    return number;
  } else if (power === 0) {
    return 1;
  } else if (power === -1) {
    return 1 / number;
  } else if (power < -1) {
    return (1 / number) * raiseTopower(number, power + 1);
  }
  return number * raiseTopower(number, power - 1);
}

while (true) {
  var number = +prompt("Enter number: ");
  var power = +prompt("Enter power: ");
  if (isNaN(number) || !Number.isInteger(power)) {
    alert("This program only takes numbers. Power should be an integer.");
  } else {
    alert("Answer is: " + raiseTopower(number, power));
    break;
  }
}
