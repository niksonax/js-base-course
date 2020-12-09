//3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.

arraySize = +prompt("Enter array size: ");
let myArray = Array();

for (let i = 0; i < arraySize; i++) {
  if (i % 2 == 1) {
    myArray.push(["odd", "odd", "odd"]);
  } else {
    myArray.push(["even", "even", "even"]);
  }
}

console.log(myArray);
