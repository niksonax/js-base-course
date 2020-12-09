//1. Сделать собственные примеры методов применяемых для массивов.

// Вывод спика городов для посещения
let citiesToVisit = ["Tokyo", "Los Angeles", "Rome", "Paris"];
let citiesString = citiesToVisit.join("-> ");

document.write("List of cities to visit: " + citiesString);

// И наоброт, создание спика из строки
let citiesToVisitNew = citiesString.split("-> ");
console.log(citiesToVisitNew);

// Добавление новых городов в список
citiesToVisitNew = citiesToVisitNew.concat("New York", "Berlin");
document.write("<br>Updated list of cities to visit: " + citiesToVisitNew);

// Смена порядка городов на обратный
citiesToVisitNew = citiesToVisitNew.reverse();
document.write("<br>Reversed list of cities to visit: " + citiesToVisitNew);

// Добавление города в начало списка
citiesToVisitNew.unshift("Hamburg");
document.write(
  "<br>List of cities to visit after added city: " + citiesToVisitNew
);
