import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import Typography from "./Right/Typography";

const Home = () => {
  return (
    <PageContainer
      left={
        <div className="grid gap-4 relative">
          <TextCotainer
            sentences={["Hello!", "I'm Gyeonghun", "passionate Student."]}
          />
          <span className="text-gray-500 font-bold absolute bottom-24 left-20">
            Full Stack Developer &nbsp;/&nbsp; Computer Science Student
          </span>
          <button className="text-prime py-2 w-32 ring-1 ring-prime ring-opacity-75 outline-none hover:bg-prime hover:text-home mt-10 ml-10">
            Contact Me!
          </button>
        </div>
      }
      right={<Typography />}
    />
  );
};

export default Home;
