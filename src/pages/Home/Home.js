import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import Typography from "./Right/Typography";

const Home = () => {
  return (
    <PageContainer
      left={
        <TextCotainer sentence="Hello, I'm Gyeonghun, passionate Student, and Developer!!" />
      }
      right={<Typography />}
    />
  );
};

export default Home;
