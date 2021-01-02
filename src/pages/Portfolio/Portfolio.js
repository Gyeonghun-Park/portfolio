import Tag from "../../components/Tag";
import TextCotainer from "../../components/TextCotainer";
import CardContainer from "./CardContainer";

const Portfolio = () => {
  return (
    <div className="flex justify-center my-10 w-full relative animate__animated animate__fadeIn animate__slow">
      <Tag top="0" left="10" text="html" />
      <Tag top="5" left="16" text="body" />

      <div>
        <TextCotainer
          sentences={["Hello!", "I'm Gyeonghun", "Passionate Student."]}
        />
        <CardContainer />
      </div>

      <Tag bottom="5" left="16" text="/body" />
      <Tag bottom="0" left="10" text="/html" />
    </div>
  );
};

export default Portfolio;
