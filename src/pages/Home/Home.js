import { Link } from "react-router-dom";
import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import Typography from "./Right/Typography";

const Home = () => {
  return (
    <PageContainer
      left={
        <div className="relative grid gap-4">
          <TextCotainer
            sentences={["Hello!", "I'm Gyeonghun", "Passionate Student."]}
          />
          <span className="absolute font-bold text-gray-500 bottom-24 left-20">
            Full Stack Developer &nbsp;/&nbsp; Computer Science Student
          </span>
          <Link to="/contact">
            <button className="w-32 py-2 mt-10 transition-colors text-prime ml-14 ring-1 ring-prime ring-opacity-75 focus:outline-none hover:bg-prime hover:text-home">
              Contact Me!
            </button>
          </Link>
        </div>
      }
      right={<Typography />}
    />
  );
};

export default Home;
