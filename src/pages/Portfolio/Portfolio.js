import { useEffect } from "react";
import Wheel from "./wheel";
import "./Portfolio.css";

const styles = {
  transform: `translate(590.15036563712px,647px) rotate(0deg) scale(0.826303)`,
};

const Portfolio = () => {
  let isDown = false;
  let wheel;
  let moveX = 0;
  let offsetX = 0;

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
  }, []);

  const resize = () => {
    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;

    wheel = new Wheel(
      stageWidth / 2,
      stageHeight + stageHeight / 4,
      stageHeight / 1.5,
      15
    );
  };

  const onDown = (e) => {
    isDown = true;
    moveX = 0;
    offsetX = e.clientX;
  };

  const onMove = (e) => {
    if (isDown) {
      moveX = e.clientX - offsetX;
      offsetX = e.clientX;
      console.log(wheel.calCoord());
    }
  };

  const onUp = (e) => {
    isDown = false;
  };

  return (
    <div id="items5" className="items tmp" style={styles}>
      <div className="item-txt">
        <div className="item-txt-title">wiper typography</div>
        <div className="item-txt-date">january, thirteen</div>
      </div>
      <div className="item-button" data-id="5"></div>
    </div>
  );
};

export default Portfolio;
