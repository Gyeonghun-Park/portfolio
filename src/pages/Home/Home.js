import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import Typography from "./Right/Typography";

const Home = () => {
  return (
    <PageContainer
      left={
        <TextCotainer
          sentences={["Hello!", "I'm Gyeonghun", "passionate Student."]}
        />
      }
      right={<Typography />}
    />
  );
};

export default Home;
