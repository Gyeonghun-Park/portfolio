import AnimationText from "./AnimationText";
import Tag from "./Tag";
import G from "../img/G.png";

const TextCotainer = ({ sentences, isTitle }) => {
  let milliseconds = 1000;

  const textFactory = (sentence) => {
    let texts = [];
    for (let i = 0; i < sentence.length; i++) {
      texts.push(sentence[i]);
    }
    return texts;
  };

  return (
    <div className="relative p-12">
      <Tag top="7" left="5" text="h1" />
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
      <Tag bottom="0" left="5" text="/h1" />
    </div>
  );
};

export default TextCotainer;
