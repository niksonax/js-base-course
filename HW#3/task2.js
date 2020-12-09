//2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

let someArray = [1, 6, "text", 4, 3, 8, "John", 2, 9, 3];
console.log("Before:");
console.log(someArray);

let newElement = prompt("Enter new element: ");
let afterWhichElement = prompt(
  "After wich element you want to add this new element: "
);

// Adding new element as a number if it is a number. Adding as a string otherwise.
if (!isNaN(newElement)) {
  newElement = +newElement;
}

for (let i = 0; i < someArray.length; i++) {
  if (someArray[i] == afterWhichElement) {
    someArray.splice(i + 1, 0, newElement);
  } else {
    continue;
  }
}
console.log("After:");
console.log(someArray);
