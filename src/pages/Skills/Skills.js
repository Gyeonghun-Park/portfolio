import { Link } from "react-router-dom";
import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";

const Skills = () => {
  return (
    <PageContainer
      left={
        <div className="flex flex-col items-center justify-center pb-20">
          <div className="w-10/12">
            <TextCotainer sentences={["Skills & Abilities"]} isTitle />
          </div>
          <div className="w-9/12 my-10 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus congue orci mattis sagittis. Donec vitae pellentesque diam,
            in tristique sem. Vestibulum et urna libero. In nec tincidunt justo.
            Donec dignissim imperdiet velit vitae malesuada. Aenean id neque nec
            ipsum dapibus condimentum.
          </div>
          <div className="w-9/12 mb-10 text-gray-300">
            On the right is a sphere made up of my proficient programming
            languages and technical skills. If you want to know about their
            details, click the icon.
          </div>
          <div className="w-9/12 text-gray-300">
            Visit my&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Gyeonghun-Park"
              className="underline text-prime"
            >
              GitHub
            </a>
            &nbsp;profile for more details or just&nbsp;
            <Link to="/contact" className="underline text-prime">
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
