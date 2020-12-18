import AnimationText from "../../components/AnimationText";
import Tag from "../../components/Tag";

const TextCotainer = () => {
  return (
    <div className="relative p-10 flex">
      <Tag top="0" left="10" text="h1" />
      <AnimationText text="H" milliseconds={1000} />
      <AnimationText text="e" milliseconds={1100} />
      <AnimationText text="l" milliseconds={1200} />
      <AnimationText text="l" milliseconds={1300} />
      <AnimationText text="o" milliseconds={1400} />
      <AnimationText text="H" milliseconds={1500} />
      <AnimationText text="e" milliseconds={1600} />
      <AnimationText text="l" milliseconds={1700} />
      <AnimationText text="l" milliseconds={1800} />
      <AnimationText text="o" milliseconds={1900} />

      <Tag bottom="0" left="10" text="/h1" />
    </div>
  );
};

export default TextCotainer;
