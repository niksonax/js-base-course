/* 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
    • "director" — 3000;
    • "manager" — 1500;
    • "programmer" — 2000;
    • для остальных значений — 1000.
После выполнения функции — вывести информацию о сотрудниках. */

let workersArr = [];

// Properties
let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let age = document.getElementById("age");
let occupation = document.getElementById("occupation");

// Buttons
let addWorker = document.getElementById("addWorker");
let showWorkers = document.getElementById("showWorkers");
let addSalary = document.getElementById("addSalary");

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

addSalary.addEventListener("click", function () {
  workersList.innerHTML = "";
  for (let i in workersArr) {
    if (workersArr[i].occupation.toLowerCase() == "director") {
      workersArr[i].salary = 3000;
    } else if (workersArr[i].occupation.toLowerCase() == "manager") {
      workersArr[i].salary = 1500;
    } else if (workersArr[i].occupation.toLowerCase() == "programmer") {
      workersArr[i].salary = 2000;
    } else {
      workersArr[i].salary = 1000;
    }
    let workersListItem = document.createElement("li");
    workersListItem.innerText = JSON.stringify(workersArr[i], null, 4);
    workersList.appendChild(workersListItem);
  }
});
