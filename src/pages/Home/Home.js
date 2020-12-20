import PageContainer from "../../components/Container";
import TextCotainer from "./Left/TextCotainer";
import Typography from "./Right/Typography";

const Home = () => {
  return <PageContainer left={<TextCotainer />} right={<Typography />} />;
};

export default Home;
