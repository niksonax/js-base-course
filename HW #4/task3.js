/*  Создать игру "Камень-Ножницы-Бумага".
Выбор компьютера определяется строкой:  
"var computerChoice = Math.random();
alert(computerChoice);".
Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера. */

function rockPaperScissors() {
  let computerChoice = Math.random();
  //console.log(computerChoice);
  if (computerChoice >= 0 && computerChoice < 1 / 3) {
    computerChoice = "Rock";
  } else if (computerChoice > 1 / 3 && computerChoice < 2 / 3) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  alert(computerChoice);
}

rockPaperScissors();
