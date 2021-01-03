import { useEffect, useRef, useState } from "react";
import IconList from "./IconList";
import iconList from "../../../iconList";

const TagCloud = () => {
  const targetRef = useRef();
  const [canvas] = useState(document.createElement("canvas"));

  useEffect(() => {
    canvas.width = targetRef.current.clientWidth;
    canvas.height = targetRef.current.clientHeight;
    canvas.id = "myCanvas";
    targetRef.current.appendChild(canvas);
    window.addEventListener("resize", resize);
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

    return () => window.removeEventListener("resize", resize);
  }, []);

  const resize = () => {
    canvas.width = targetRef.current.clientWidth;
    canvas.height = targetRef.current.clientHeight;
    console.log(targetRef.current.clientHeight);
  };

  return (
    <div className="flex justify-center w-full h-full max-h-full">
      <div ref={targetRef} className="w-full" id="myCanvasContainer"></div>
      <div className="absolute flex w-full">
        <IconList icons={iconList} />
      </div>
    </div>
  );
};

export default TagCloud;
