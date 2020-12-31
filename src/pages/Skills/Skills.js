import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";

const Skills = () => {
  return (
    <PageContainer
      left={<TextCotainer sentences={["Skills & Abilities"]} isTitle />}
      right={<TagCloud />}
    />
  );
};

export default Skills;
