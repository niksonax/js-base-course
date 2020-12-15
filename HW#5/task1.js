// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

let point = {
  x: 4,
  y: -2,
  getQuadrant() {
    if (this.x > 0 && this.y > 0) {
      return "1st Quadrant";
    } else if (this.x < 0 && this.y > 0) {
      return "2nd Quadrant";
    } else if (this.x < 0 && this.y < 0) {
      return "3rd Quadrant";
    } else if (this.x > 0 && this.y < 0) {
      return "4th Quadrant";
    } else {
      return "Looks like the point is on the axis!";
    }
  },
};

console.log(point.getQuadrant());

point.x = -8;
console.log(point.getQuadrant());

point.x = 9;
point.y = 12;
console.log(point.getQuadrant());
