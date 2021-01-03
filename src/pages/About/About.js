import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import SwingBox from "./Right/SwingBox";

const About = () => {
  return (
    <PageContainer
      left={
        <div className="flex flex-col items-center justify-center pb-20">
          <div className="w-10/12">
            <TextCotainer sentences={["About Me"]} isTitle />
          </div>
          <div className="w-9/12 my-10 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus congue orci mattis sagittis. Donec vitae pellentesque diam,
            in tristique sem. Vestibulum et urna libero. In nec tincidunt justo.
            Donec dignissim imperdiet velit vitae malesuada. Aenean id neque nec
            ipsum dapibus condimentum.
          </div>
          <div className="w-9/12 mb-10 text-gray-300">
            In nec tincidunt justo. Donec dignissim imperdiet velit vitae
            malesuada. Aenean id neque nec ipsum dapibus condimentum.
          </div>
        </div>
      }
      right={<SwingBox />}
    />
  );
};

export default About;
