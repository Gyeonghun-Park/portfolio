import AnimationText from "../../../components/AnimationText";
import Tag from "../../../components/Tag";

const TextCotainer = () => {
  const BIO = "Hello, I'm Gyeonghun, passionate Student, and Developer!!";
  let milliseconds = 1000;

  const textFactory = () => {
    let texts = [];
    for (let i = 0; i < BIO.length; i++) {
      texts.push(BIO[i]);
    }
    return texts;
  };

  return (
    <div className="relative flex flex-wrap p-10">
      <Tag top="0" left="10" text="h1" />
      {textFactory().map((text, i) => {
        milliseconds += 100;
        return (
          <AnimationText key={i} text={text} milliseconds={milliseconds} />
        );
      })}

      <Tag bottom="0" left="10" text="/h1" />
    </div>
  );
};

export default TextCotainer;
