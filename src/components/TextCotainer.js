import { useEffect, useState } from "react";
import AnimationText from "./AnimationText";
import Tag from "./Tag";
import G from "../img/G.png";
import clsx from "clsx";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const TextCotainer = ({ sentences, isTitle }) => {
  let milliseconds = 1000;

  const textFactory = (sentence) => {
    let texts = [];
    for (let i = 0; i < sentence.length; i++) {
      texts.push(sentence[i]);
    }
    return texts;
  };

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={clsx("relative px-12 py-4", "xl:py-0")}>
      <Tag
        top={mobileOpen ? "2" : "-2"}
        left={mobileOpen ? "7" : "5"}
        text="h1"
      />
      {sentences.map((sentence, i) => {
        const tmp = textFactory(sentence).map((text, j) => {
          milliseconds += 100;
          if (text !== "G") {
            if (text === " ") {
              return <span key={`${i}${j}`} className="w-5"></span>;
            }
            return (
              <AnimationText
                key={`${i}${j}`}
                text={text}
                milliseconds={milliseconds}
                isTitle={isTitle}
              />
            );
          } else {
            return (
              <AnimationText
                key={`${i}${j}`}
                img={G}
                milliseconds={milliseconds}
                isTitle={isTitle}
              />
            );
          }
        });
        return (
          <div key={i} className="flex flex-wrap">
            {tmp}
          </div>
        );
      })}
      <Tag
        bottom={mobileOpen ? "1" : "-6"}
        left={mobileOpen ? "7" : "5"}
        text="/h1"
      />
    </div>
  );
};

export default TextCotainer;
