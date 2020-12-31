import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import SwingBox from "./Right/SwingBox";

const About = () => {
  return (
    <PageContainer
      left={<TextCotainer sentences={["About me"]} isTitle={true} />}
      right={<SwingBox />}
    />
  );
};

export default About;
