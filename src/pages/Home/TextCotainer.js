import { Animated } from "react-animated-css";
import Tag from "../../components/Tag";

const TextCotainer = () => {
  return (
    <div className="relative p-10 ">
      <Tag top="0" left="10" text="h1" />
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div>hello world ;)</div>
      </Animated>
      <Tag bottom="0" left="10" text="/h1" />
    </div>
  );
};

export default TextCotainer;
