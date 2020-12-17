import PageContainer from "../../components/Container";
import TextCotainer from "./TextCotainer";

const Home = () => {
  return <PageContainer left={<TextCotainer />} right={<div>hi</div>} />;
};

export default Home;
