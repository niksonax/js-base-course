let testArr = [1, 2, 3, 4, 5, "six", 7, 8, "John", "William"];

console.log("### For Each ###");
testArr.forEach(function (item) {
  console.log(item);
});

console.log("### Filter ###");
let newTestArr = testArr.filter(function (item) {
  return item % 2 === 0;
});
console.log(newTestArr);

console.log("### Map ###");
let mapTestArr = testArr.map(function (item) {
  return item + " test";
});
console.log(mapTestArr);

console.log("### Every ###");
let everyTestArr = testArr.every(function (item) {
  return typeof item === "number";
});
console.log(everyTestArr);

console.log("### Some ###");
let someTestArr = testArr.some(function (item) {
  return typeof item === "string";
});
console.log(someTestArr);

console.log("### Reduce ###");
let sum = 0;
let totalSum = testArr.reduce(function (sum, item) {
  return sum + item;
});
console.log(totalSum);
