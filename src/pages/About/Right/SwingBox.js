import { useEffect, useRef, useState } from "react";
import Point from "./point.js";
import Dialog from "./dialog.js";

const SwingBox = () => {
  const targetRef = useRef();
  const [canvas] = useState(document.createElement("canvas"));
  let ctx;
  let animations = [];

  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

  const mousePos = new Point();
  let curItem = null;

  const items = [];
  const total = 2;

  useEffect(() => {
    for (let i = 0; i < total; i++) {
      items[i] = new Dialog();
    }

    targetRef.current.appendChild(canvas);
    ctx = canvas.getContext("2d");

    window.addEventListener("resize", resize);
    resize();

    animations.push(window.requestAnimationFrame(animate));

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      animations.forEach((animation) => cancelAnimationFrame(animation));
    };
  }, []);

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
    curItem = null;

    for (let i = 0; i < items.length; i++) {
      items[i].up();
    }
  };

  return <div ref={targetRef} className="w-full h-full"></div>;
};

export default SwingBox;
