/* 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя. */

function calculate() {
  operand1 = +document.getElementById("operand1").value;
  operand2 = +document.getElementById("operand2").value;
  sign = document.getElementById("operator").value;
  let result;
  if (operand1.isNaN || operand2.isNaN) {
    result = "Wrong operand. Operand only can be a number.";
    return result;
  }
  switch (sign) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
    default:
      result = "Wrong operator. Calculator only can take: +, -, * and /.";
  }
  return result;
}

function showAnswer() {
  let newAnswer = document.createElement("p");
  let previousAnswer = document.getElementById("answer").lastChild;
  newAnswer.innerHTML = calculate();
  document.getElementById("answer").replaceChild(newAnswer, previousAnswer);
}
