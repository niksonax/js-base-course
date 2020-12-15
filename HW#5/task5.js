/* 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
Параметр для сортировки принимается от пользователя.
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
let sortWorkers = document.getElementById("sortWorkers");

let workersList = document.getElementById("workersList");

addWorker.addEventListener("click", function () {
  workersArr.push({
    name: firstName.value,
    sName: secondName.value,
    age: +age.value,
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

sortWorkers.addEventListener("click", function () {
  workersList.innerHTML = "";
  let sortWorkersBy = document.getElementById("sortWorkersBy").value; // sort criteria

  workersArr.sort((a, b) => {
    let propA = a[sortWorkersBy];
    let propB = b[sortWorkersBy];
    if (typeof propA === "string" || typeof propb === "string") {
      propA.toLowerCase();
      propB.toLowerCase();
    }
    if (propA < propB) {
      return -1;
    } else if (propA > propB) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i in workersArr) {
    let workersListItem = document.createElement("li");
    workersListItem.innerText = JSON.stringify(workersArr[i], null, 4);
    workersList.appendChild(workersListItem);
  }
});
