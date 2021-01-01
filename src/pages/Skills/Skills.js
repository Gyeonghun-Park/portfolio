import { Link } from "react-router-dom";
import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";

const Skills = () => {
  return (
    <PageContainer
      left={
        <div>
          <TextCotainer sentences={["Skills & Abilities"]} isTitle />
          <div className="text-gray-300">
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
