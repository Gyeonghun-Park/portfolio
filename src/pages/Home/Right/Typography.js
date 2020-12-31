import { useEffect, useRef } from "react";
import WebFont from "webfontloader";
import * as PIXI from "pixi.js";
import Visual from "./visual";
import cursor from "../../../img/cursor.png";

const Typography = () => {
  //SPA with PIXI
  const targetRef = useRef();
  let visual = new Visual();
  let stage = new PIXI.Container();
  let renderer = new PIXI.Renderer({
    width: 0,
    height: 0,
    antialias: true,
    transparent: false,
    resolution: window.devicePixelRatio > 1 ? 2 : 1,
    autoDensity: true,
    powerPreference: "high-performance",
    backgroundColor: 0x222222,
  });
  let blurFilter = new PIXI.filters.BlurFilter();

  const createCursor = () => {
    const container = document.createElement("div");
    container.className =
      "absolute top-1/2 left-1/4 transition duration-1000 transform transition-all flex items-center w-8 opacity-0 animate__animated";
    const cursorIcon = document.createElement("img");
    cursorIcon.src = cursor;
    const cursorText = document.createElement("div");
    cursorText.className =
      "bg-black text-sm text-white ml-1 px-3 py-2 rounded-full";
    cursorText.innerText = "Move";

    container.appendChild(cursorIcon);
    container.appendChild(cursorText);
    targetRef.current.appendChild(container);

    setTimeout(() => {
      container.classList.remove("opacity-0");
      container.classList.add("animate__tada");
    }, 2000);
    setTimeout(() => {
      container.classList.remove("animate__animated");
    }, 2900);
    setTimeout(() => {
      container.classList.add("translate-x-96");
    }, 3000);
    setTimeout(() => {
      container.classList.add("opacity-0");
    }, 4000);
  };

  useEffect(() => {
    setWebgl();

    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        window.addEventListener("resize", resize);
        resize();

        requestAnimationFrame(animate);
      },
    });

    setTimeout(() => {
      createCursor();
    }, 2000);
    return () => {
      window.removeEventListener("resize", resize);
      stage.destroy();
      stage = null;
      renderer.destroy();
      renderer = null;
      blurFilter.destroy();
      visual.destroy();
      visual = null;
    };
  }, []);

  const setWebgl = () => {
    targetRef.current.appendChild(renderer.view);

    blurFilter.blur = 10;
    blurFilter.autoFit = true;

    const fragSource = `
      precision mediump float;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      uniform float threshold;
      uniform float mr;
      uniform float mg;
      uniform float mb;
      void main(void) {
        vec4 color = texture2D(uSampler, vTextureCoord);
        vec3 mcolor = vec3(mr, mg, mb);
        if (color.a > threshold) {
          gl_FragColor = vec4(mcolor, 1.0);
        } else {
          gl_FragColor = vec4(vec3(0.0) ,0.0);
        }
      }
    `;

    const uniformsData = {
      threshold: 0.5,
      mr: 8.0 / 255.0,
      mg: 253.0 / 255.0,
      mb: 216.0 / 255.0,
    };

    const thresholdFilter = new PIXI.Filter(null, fragSource, uniformsData);
    stage.filters = [blurFilter, thresholdFilter];
    stage.filterArea = renderer.screen;
  };

  const resize = () => {
    renderer.resize(
      targetRef.current.clientWidth,
      targetRef.current.clientHeight
    );
    visual.show(
      targetRef.current.clientWidth,
      targetRef.current.clientHeight,
      stage
    );
  };

  const animate = () => {
    if (visual) {
      requestAnimationFrame(animate);
      visual.animate();
      renderer.render(stage);
    }
  };

  return (
    <div
      ref={targetRef}
      className="w-full h-full flex justify-center relative cursor-pointer"
    ></div>
  );
};

export default Typography;
