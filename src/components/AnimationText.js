import { useEffect, useRef } from "react";

const AnimationText = ({ text, milliseconds }) => {
  const textRef = useRef();

  useEffect(() => {
    setTimeout(
      () => textRef.current.classList.add("animate__bounceIn"),
      milliseconds
    );
  });

  const addAnimation = () => {
    textRef.current.classList.remove("animate__bounceIn");
    textRef.current.classList.remove("opacity-0");
    textRef.current.classList.add("animate__rubberBand");
    textRef.current.onanimationend = () => {
      textRef.current.classList.remove("animate__rubberBand");
    };
  };

  return (
    <div
      ref={textRef}
      className={`p-3 text-5xl text-white animate__animated opacity-0 hover:text-prime`}
      onMouseEnter={addAnimation}
    >
      {text}
    </div>
  );
};

export default AnimationText;
