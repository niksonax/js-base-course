// Ex 1
var x1 = prompt("Enter x1:");
var y1 = prompt("Enter y1:");
var x2 = prompt("Enter x2:");
var y2 = prompt("Enter y2:");

var k = (y1 - y2) / (x1 - x2);
var b = y2 - k * x2;

var y = "y = " + k + "x + " + b;
alert(y);
