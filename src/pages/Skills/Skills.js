import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";

const Skills = () => {
  return (
    <PageContainer
      left={
        <TextCotainer sentence="Hello, I'm Gyeonghun, passionate Student, and Developer!!" />
      }
      right={<TagCloud />}
    />
  );
};

export default Skills;
