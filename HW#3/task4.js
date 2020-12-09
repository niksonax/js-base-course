//4. Создать два произвольных массива: один массив - города, во втором - количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку.

let myCities = ["Kiyv", "Moscow", "New York", "Tokyo", "London"];
let myCitiesPopulation = [2884000, 11920000, 8399000, 13929280, 8982000];

let myCitiesFinal = {};
if (myCities.length === myCitiesPopulation.length) {
  for (let i = 0; i < myCities.length; i++) {
    myCitiesFinal[myCities[i]] = myCitiesPopulation[i];
  }
} else {
  console.log("Error. Arrays must have same length.");
}

console.log(myCitiesFinal);
