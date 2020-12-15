/* 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
В зависимости от принятого знака операции, вызвать соответствующий метод. */

let calculator = {
  sum(op1, op2) {
    return op1 + op2;
  },
  sub(op1, op2) {
    return op1 - op2;
  },
  mul(op1, op2) {
    return op1 * op2;
  },
  div(op1, op2) {
    return op1 / op2;
  },
};

operators = ["+", "-", "*", "/"];
operand1 = +prompt("Enter first number: ");
operand2 = +prompt("Enter second number: ");
operator = prompt("Enter operator: ");

if (operators.indexOf(operator) !== -1) {
  if (operator === "+") {
    var result = calculator.sum(operand1, operand2);
  } else if (operator === "-") {
    var result = calculator.sub(operand1, operand2);
  } else if (operator === "*") {
    var result = calculator.mul(operand1, operand2);
  } else if (operator === "/") {
    var result = calculator.div(operand1, operand2);
  }
} else {
  alert("Wrong operator!");
}

console.log("Result: " + result);
