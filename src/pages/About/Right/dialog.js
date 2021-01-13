import Point from "./point.js";

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const RESOLUTION = 8;

export default class Dialog {
  constructor(text) {
    this.pos = new Point();
    this.target = new Point();
    this.prevPos = new Point();
    this.downPos = new Point();
    this.startPos = new Point();
    this.mousePos = new Point();
    this.centerPos = new Point();
    this.origin = new Point();
    this.width = window.innerWidth / RESOLUTION;
    this.height = window.innerWidth / RESOLUTION;
    this.rotation = 0;
    this.sideValue = 0;
    this.isDown = false;
    this.text = text;
  }

  resize(stageWidth, stageHeight) {
    this.width = window.innerWidth / RESOLUTION;
    this.height = window.innerWidth / RESOLUTION;
    const random = Math.random();
    this.pos.x = Math.random() * (stageWidth - this.width);
    this.pos.y =
      (random > 0.5 ? random : random + 0.5) * (stageHeight - this.height);
    this.target = this.pos.clone();
    this.prevPos = this.pos.clone();
  }

  animate(ctx) {
    const move = this.target.clone().subtract(this.pos).reduce(FOLLOW_SPEED);
    this.pos.add(move);

    this.centerPos = this.pos.clone().add(this.mousePos);

    this.swingDrag(ctx);

    this.prevPos = this.pos.clone();
  }

  swingDrag(ctx) {
    const dx = this.pos.x - this.prevPos.x;
    const speedX = Math.abs(dx) / FPS;
    const speed = Math.min(Math.max(speedX, 0), 1);

    let rotation = (MAX_ANGLE / 1) * speed;
    rotation = rotation * (dx > 0 ? 1 : -1) - this.sideValue;

    this.rotation += (rotation - this.rotation) * ROTATE_SPEED;

    const tmpPos = this.pos.clone().add(this.origin);

    ctx.save();
    ctx.translate(tmpPos.x, tmpPos.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.beginPath();
    ctx.fillStyle = "#f4e55a";
    ctx.fillRect(-this.origin.x, -this.origin.y, this.width, this.height);
    ctx.fillStyle = "#222222";
    ctx.font = `${this.width / 6}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      this.text,
      -this.origin.x + this.width / 2,
      -this.origin.y + this.height / 2
    );
    ctx.restore();
  }

  down(point) {
    if (point.collide(this.pos, this.width, this.height)) {
      this.isDown = true;
      this.speedPos = this.pos.clone();
      this.downPos = point.clone();
      this.mousePos = point.clone().subtract(this.pos);

      const xRatioValue = this.mousePos.x / this.width;
      this.origin.x = this.width * xRatioValue;
      this.origin.y = (this.height * this.mousePos.y) / this.height;

      this.sideValue = xRatioValue - 0.5;

      return this;
    } else {
      return null;
    }
  }

  move(point) {
    if (this.isDown) {
      this.target = this.startPos.clone().add(point);
    }
  }

  up() {
    this.isDown = false;
  }
}
