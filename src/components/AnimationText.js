import clsx from "clsx";
import { useEffect, useRef } from "react";

const AnimationText = ({ text, milliseconds, isTitle, img }) => {
  const textRef = useRef();
  let isFinshied = false;
  let timeouts;

  const later = () => {
    return new Promise((resolve) => {
      timeouts = setTimeout(resolve, milliseconds, true);
    }).then((result) => {
      if (textRef.current) {
        textRef.current.classList.add("animate__bounceIn");
        isFinshied = result;
      }
    });
  };

  useEffect(() => {
    later();
    return () => clearTimeout(timeouts);
  });

  const addAnimation = () => {
    if (isFinshied) {
      textRef.current.classList.remove("animate__bounceIn");
      textRef.current.classList.remove("opacity-0");
      textRef.current.classList.add("animate__rubberBand");
      textRef.current.onanimationend = () => {
        textRef.current.classList.remove("animate__rubberBand");
      };
    }
  };

  return (
    <div
      ref={textRef}
      className={clsx(
        `text-3xl animate__animated opacity-0 cursor-default ${
          isTitle ? "text-prime font-bold" : "text-white hover:text-prime"
        }`,
        "lg:text-5xl",
        "2xl:text-7xl"
      )}
      onMouseEnter={addAnimation}
    >
      {text ? (
        text
      ) : (
        <img
          src={img}
          alt="G"
          className={clsx(
            "w-6 h-6 mt-2",
            "lg:w-12 lg:h-12 ",
            "2xl:w-14 2xl:h-14 2xl:mt-4"
          )}
          id="imageText"
        />
      )}
    </div>
  );
};

export default AnimationText;
