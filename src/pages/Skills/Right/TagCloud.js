import { useEffect, useRef, useState } from "react";
import IconList from "./IconList";
import { icons } from "../../../iconList";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const TagCloud = () => {
  const targetRef = useRef();
  const [canvas] = useState(document.createElement("canvas"));

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [mobileOpen, setMobileOpen] = useState(windowDimensions.width < 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      if (windowDimensions.width < 1024) {
        setMobileOpen(true);
      } else {
        setMobileOpen(false);
      }
    };

    canvas.width = targetRef.current.clientWidth;
    canvas.height = targetRef.current.clientHeight;
    canvas.id = "myCanvas";
    targetRef.current.appendChild(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("resize", handleResize);
    if (mobileOpen) {
      eval(
        `try {
          TagCanvas.Start("myCanvas", "tags", {
            outlineMethod: "none",
            maxSpeed : 0.06,
            freezeActive:true,
            shuffleTags:true,
            shape:'sphere',
            zoom:0.8,
            pinchZoom:true,
            freezeDecel:true,
            fadeIn:3000,
            initial: [0.3,-0.1],
            depth : 1.1
          });
        } catch (e) {
          document.getElementById("myCanvasContainer").style.display = "none";
        }`
      );
    } else {
      eval(
        `try {
          TagCanvas.Start("myCanvas", "tags", {
            outlineMethod: "size",
            outlineIncrease: 15,
            maxSpeed : 0.06,
            freezeActive:true,
            shuffleTags:true,
            shape:'sphere',
            zoom:0.8,
            pinchZoom:true,
            freezeDecel:true,
            fadeIn:3000,
            initial: [0.3,-0.1],
            depth : 1.1
          });
        } catch (e) {
          document.getElementById("myCanvasContainer").style.display = "none";
        }`
      );
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resize = () => {
    canvas.width = targetRef.current.clientWidth;
    canvas.height = targetRef.current.clientHeight;
  };

  return (
    <div className="flex justify-center w-full h-full max-h-full">
      <div ref={targetRef} className="w-full" id="myCanvasContainer"></div>
      <div className="absolute flex w-full">
        <IconList icons={icons} />
      </div>
    </div>
  );
};

export default TagCloud;
