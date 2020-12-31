import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";

const Skills = () => {
  return (
    <PageContainer
      left={<TextCotainer sentences={["Hello,", "I'm Gyeonghun"]} />}
      right={<TagCloud />}
    />
  );
};

export default Skills;
