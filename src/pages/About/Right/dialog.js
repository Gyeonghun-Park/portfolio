import Point from "./point.js";

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const WIDTH = 260;
const HEIGHT = 260;

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
    this.rotation = 0;
    this.sideValue = 0;
    this.isDown = false;
    this.text = text;
  }

  resize(stageWidth, stageHeight) {
    const random = Math.random();
    this.pos.x = Math.random() * (stageWidth - WIDTH);
    this.pos.y =
      (random > 0.5 ? random : random + 0.5) * (stageHeight - HEIGHT);
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
    ctx.fillRect(-this.origin.x, -this.origin.y, WIDTH, HEIGHT);
    ctx.fillStyle = "#222222";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      this.text,
      -this.origin.x + WIDTH / 2,
      -this.origin.y + HEIGHT / 2
    );
    ctx.restore();
  }

  down(point) {
    if (point.collide(this.pos, WIDTH, HEIGHT)) {
      this.isDown = true;
      this.speedPos = this.pos.clone();
      this.downPos = point.clone();
      this.mousePos = point.clone().subtract(this.pos);

      const xRatioValue = this.mousePos.x / WIDTH;
      this.origin.x = WIDTH * xRatioValue;
      this.origin.y = (HEIGHT * this.mousePos.y) / HEIGHT;

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
