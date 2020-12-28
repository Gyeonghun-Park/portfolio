const PI2 = Math.PI * 2;

export default class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
  }

  calCoord() {
    let coords = [];
    const angle = PI2 / this.sides;
    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);
      coords.push([x, y]);
    }
    return coords;
  }
}
