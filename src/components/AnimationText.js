import { useRef } from "react";

const AnimationText = ({ text }) => {
  const textRef = useRef();

  const addAnimation = () => {
    textRef.current.classList.remove("animate__bounceIn");
    textRef.current.classList.add("animate__rubberBand");
    textRef.current.onanimationend = () => {
      textRef.current.classList.remove("animate__rubberBand");
    };
  };

  return (
    <div
      ref={textRef}
      className={`p-5 text-white animate__animated animate__bounceIn`}
      onMouseEnter={addAnimation}
    >
      {text}
    </div>
  );
};

export default AnimationText;
