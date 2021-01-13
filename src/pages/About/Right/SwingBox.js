import { useEffect, useRef, useState } from "react";
import Point from "./point.js";
import Dialog from "./dialog.js";
import ImgDialog from "./imgDialog.js";
import drag from "../../../img/drag.png";

const SwingBox = () => {
  const targetRef = useRef();
  const [canvas] = useState(document.createElement("canvas"));
  let ctx;
  let animations = [];

  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

  const mousePos = new Point();
  let curItem = null;

  const items = [];
  //const total = 3;

  useEffect(() => {
    items[0] = new ImgDialog();
    items[1] = new Dialog("Gyeonghun");
    items[2] = new Dialog("Park");

    targetRef.current.appendChild(canvas);
    canvas.classList.add("cursor-grab");
    ctx = canvas.getContext("2d");

    window.addEventListener("resize", resize);
    resize();

    animations.push(window.requestAnimationFrame(animate));

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    createCursor();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      animations.forEach((animation) => cancelAnimationFrame(animation));
    };
  }, []);

  const createCursor = () => {
    if (targetRef.current) {
      const container = document.createElement("div");
      container.className =
        "absolute flex items-center w-8 transition duration-1000 transform opacity-0 top-20 left-20 animate__animated";
      const cursorIcon = document.createElement("img");
      cursorIcon.src = drag;
      const cursorText = document.createElement("div");
      cursorText.className =
        "px-3 py-2 ml-1 text-sm text-white rounded-full bg-black-500";
      cursorText.innerText = "Drag";

      container.appendChild(cursorIcon);
      container.appendChild(cursorText);
      targetRef.current.appendChild(container);

      setTimeout(() => {
        container.classList.remove("opacity-0");
        container.classList.add("animate__tada");
      }, 2000);
      setTimeout(() => {
        container.classList.remove("animate__animated");
      }, 1900);
      setTimeout(() => {
        container.classList.add("translate-x-96");
        container.classList.add("translate-y-96");
      }, 3000);
      setTimeout(() => {
        container.classList.add("opacity-0");
      }, 4000);
    }
  };

  const resize = () => {
    canvas.width = targetRef.current.clientWidth * pixelRatio;
    canvas.height = targetRef.current.clientHeight * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 6;
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)";

    ctx.lineWidth = 2;

    for (let i = 0; i < items.length; i++) {
      items[i].resize(
        targetRef.current.clientWidth,
        targetRef.current.clientHeight
      );
    }
  };

  const animate = () => {
    animations.push(window.requestAnimationFrame(animate));

    if (targetRef.current) {
      ctx.clearRect(
        0,
        0,
        targetRef.current.clientWidth,
        targetRef.current.clientHeight
      );
    }

    for (let i = 0; i < items.length; i++) {
      items[i].animate(ctx);
    }

    if (curItem) {
      ctx.fillStyle = "#ff4338";
      ctx.strokeStyle = "#ff4338";

      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(curItem.centerPos.x, curItem.centerPos.y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(mousePos.x, mousePos.y);
      ctx.lineTo(curItem.centerPos.x, curItem.centerPos.y);
      ctx.stroke();
    }
  };

  const onDown = (e) => {
    canvas.classList.remove("cursor-grab");
    canvas.classList.add("cursor-grabbing");

    const rect = e.target.getBoundingClientRect();
    if (e.clientX > targetRef.current.clientWidth) {
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
    }

    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i].down(mousePos.clone());
      if (item) {
        curItem = item;
        const index = items.indexOf(item);
        items.push(items.splice(index, 1)[0]);
        break;
      }
    }
  };

  const onMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    if (e.target.tagName === "CANVAS") {
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
      for (let i = 0; i < items.length; i++) {
        items[i].move(mousePos.clone());
      }
    }
  };

  const onUp = (e) => {
    canvas.classList.remove("cursor-grabbing");
    canvas.classList.add("cursor-grab");
    curItem = null;

    for (let i = 0; i < items.length; i++) {
      items[i].up();
    }
  };

  return (
    <div
      ref={targetRef}
      className="relative w-full h-full"
      id={"swingCanvas"}
    ></div>
  );
};

export default SwingBox;
