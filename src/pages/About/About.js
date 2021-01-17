import clsx from "clsx";
import { Link } from "react-router-dom";
import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import SwingBox from "./Right/SwingBox";

const About = () => {
  return (
    <PageContainer
      left={
        <div
          className={clsx(
            "flex flex-col items-center justify-center pt-10",
            ""
          )}
        >
          <div className={clsx("", "xl:w-10/12")}>
            <TextCotainer sentences={["About Me"]} isTitle />
          </div>
          <div
            className={clsx(
              "w-9/12 text-gray-300",
              "xl:my-10 xl:mb-5",
              "2xl:text-xl"
            )}
          >
            I am studying with the goal of becoming a full-stack developer.
            Overall, I have been cloning various services in real-word to
            increase my knowledge and experience in development. You can try the
            projects I've cloned on my&nbsp;
            <Link to="/portfolio" className="underline text-prime">
              portfolio
            </Link>
            &nbsp;page.
          </div>

          <div
            className={clsx(
              "w-9/12 mb-10 text-gray-300",
              "xl:mb-5",
              "2xl:text-xl"
            )}
          >
            Currently, I'm enjoying React.js at and love to make simple and
            beautiful interface and also I’m interested in learning more about
            accessibility and delving deeper into CSS/JS animations.
          </div>

          <div
            className={clsx(
              "w-9/12 mb-10 text-gray-300",
              "xl:mb-5",
              "2xl:text-xl"
            )}
          >
            On a personal level, I am highly-motivated, result oriented,
            self-driven, hard-working, fast learner and constantly seeking to
            improve my skills and am fully aware of the latest development
            skills.
          </div>

          <div
            className={clsx(
              "w-9/12 mb-10 text-gray-300",
              "xl:mb-5",
              "2xl:text-xl"
            )}
          >
            In addition to this, I have the ability to adapt to any type of team
            environment, I am team oriented and get along with others when
            working in a group setting. I also have the ability to work
            independently while staying on schedule and meeting those tight
            deadlines.
          </div>
        </div>
      }
      right={<SwingBox />}
    />
  );
};

export default About;
