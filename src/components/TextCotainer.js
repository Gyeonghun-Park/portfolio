import AnimationText from "./AnimationText";
import Tag from "./Tag";

const TextCotainer = ({ sentence, isTitle }) => {
  let milliseconds = 1000;

  const textFactory = () => {
    let texts = [];
    for (let i = 0; i < sentence.length; i++) {
      texts.push(sentence[i]);
    }
    return texts;
  };

  return (
    <div className="relative flex flex-wrap p-10">
      <Tag top="0" left="10" text="h1" />
      {textFactory().map((text, i) => {
        milliseconds += 100;
        return (
          <AnimationText
            key={i}
            text={text}
            milliseconds={milliseconds}
            isTitle={isTitle}
          />
        );
      })}
      <Tag bottom="0" left="10" text="/h1" />
    </div>
  );
};

export default TextCotainer;
