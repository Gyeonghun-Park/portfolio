import AnimationText from "../../components/AnimationText";
import Tag from "../../components/Tag";

const TextCotainer = () => {
  return (
    <div className="relative p-10 flex">
      <Tag top="0" left="10" text="h1" />
      <AnimationText text="H" />
      <AnimationText text="e" />
      <AnimationText text="l" />
      <AnimationText text="l" />
      <AnimationText text="o" />
      <Tag bottom="0" left="10" text="/h1" />
    </div>
  );
};

export default TextCotainer;
