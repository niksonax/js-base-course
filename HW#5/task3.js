/* 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках. */

let workersArr = [];

let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let age = document.getElementById("age");
let occupation = document.getElementById("occupation");

let addWorker = document.getElementById("addWorker");
let showWorkers = document.getElementById("showWorkers");

let workersList = document.getElementById("workersList");

addWorker.addEventListener("click", function () {
  workersArr.push({
    name: firstName.value,
    sName: secondName.value,
    age: age.value,
    occupation: occupation.value,
  });
});

showWorkers.addEventListener("click", function () {
  workersList.innerHTML = "";
  for (let i in workersArr) {
    let workersListItem = document.createElement("li");
    workersListItem.innerText = JSON.stringify(workersArr[i], null, 4);
    workersList.appendChild(workersListItem);
  }
});
