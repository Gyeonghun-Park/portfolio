import Point from "./point.js";
import avatar from "../../../img/Avatar.png";

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const RESOLUTION = 8;

export default class ImgDialog {
  constructor() {
    if (window.innerWidth < 1024) {
      this.pos = new Point(100, 100);
    } else {
      this.pos = new Point(50, 50);
    }
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
    this.img = new Image(60, 45);
    this.img.src = avatar;
  }

  resize(stageWidth, stageHeight) {
    this.width = window.innerWidth / RESOLUTION;
    this.height = window.innerWidth / RESOLUTION;
    this.target = this.pos.clone();
    this.prevPos = this.pos.clone();

    if (window.innerWidth < 1024) {
      this.pos.x = 50;
      this.pos.y = 50;
    } else {
      this.pos.x = 0;
      this.pos.y = 0;
    }
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
    ctx.drawImage(
      this.img,
      -this.origin.x,
      -this.origin.y,
      this.width,
      this.height
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
