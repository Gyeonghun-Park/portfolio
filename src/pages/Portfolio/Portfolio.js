import { createRef } from "react";
import Tag from "../../components/Tag";
import TextCotainer from "../../components/TextCotainer";
import CardContainer from "./CardContainer";

const Portfolio = () => {
  const containerRef = createRef();
  return (
    <div
      ref={containerRef}
      className="relative flex justify-center w-full my-10 animate__animated animate__fadeIn animate__slow cursor-grab overflow-hidden pt-28"
    >
      <Tag top="0" left="10" text="html" />
      <Tag top="5" left="16" text="body" />

      <div>
        <TextCotainer sentences={["Toy Projects"]} isTitle />
      </div>
      <CardContainer parentRef={containerRef} />

      <Tag bottom="5" left="16" text="/body" />
      <Tag bottom="0" left="10" text="/html" />
    </div>
  );
};

export default Portfolio;
