import { Link } from "react-router-dom";
import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";

const Skills = () => {
  return (
    <PageContainer
      left={
        <div className="flex flex-col justify-center items-center pb-20">
          <div className="w-10/12">
            <TextCotainer sentences={["Skills & Abilities"]} isTitle />
          </div>
          <div className="text-gray-300 w-9/12 my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus congue orci mattis sagittis. Donec vitae pellentesque diam,
            in tristique sem. Vestibulum et urna libero. In nec tincidunt justo.
            Donec dignissim imperdiet velit vitae malesuada. Aenean id neque nec
            ipsum dapibus condimentum.
          </div>
          <div className="text-gray-300 w-9/12 mb-10">
            On the right is a sphere made up of my proficient programming
            languages and technical skills. If you want to know about their
            details, click the icon.
          </div>
          <div className="text-gray-300 w-9/12">
            Visit my&nbsp;
            <a
              target="_blank"
              href="https://github.com/Gyeonghun-Park"
              className="text-prime underline"
            >
              GitHub
            </a>
            &nbsp;profile for more details or just&nbsp;
            <Link to="/contact" className="text-prime underline">
              contact
            </Link>
            &nbsp;me&nbsp;
          </div>
        </div>
      }
      right={<TagCloud />}
    />
  );
};

export default Skills;
