/* 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя. */

function calculate() {
  let operand1 = +document.getElementById("operand1").value;
  let operand2 = +document.getElementById("operand2").value;
  let sign = document.getElementById("operator").value;
  let operators = ["+", "-", "*", "/"];
  let result;

  if (operand1.isNaN || operand2.isNaN) {
    return "Wrong operand. Operand only can be a number.";
  } else if (!operators.includes(sign)) {
    return "Wrong operator. Calculator only can take: +, -, * and /.";
  }

  if (sign == "+") {
    result = operand1 + operand2;
  } else if (sign == "-") {
    result = operand1 - operand2;
  } else if (sign == "*") {
    result = operand1 * operand2;
  } else if (sign == "/") {
    result = operand1 / operand2;
  }
  return result;
}

function showAnswer() {
  let newAnswer = document.createElement("p");
  let previousAnswer = document.getElementById("answer").lastChild;
  newAnswer.innerHTML = calculate();
  document.getElementById("answer").replaceChild(newAnswer, previousAnswer);
}
