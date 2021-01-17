import clsx from "clsx";
import { Link } from "react-router-dom";
import PageContainer from "../../components/Container";
import TextCotainer from "../../components/TextCotainer";
import TagCloud from "./Right/TagCloud";
import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Skills = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [mobileOpen, setMobileOpen] = useState(windowDimensions.width < 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      if (windowDimensions.width < 1024) {
        setMobileOpen(true);
      } else {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageContainer
      left={
        <div
          className={clsx(
            "flex flex-col items-center justify-center pt-10 pb-5",
            "xl:pb-0"
          )}
        >
          <div className="xl:w-10/12">
            <TextCotainer sentences={["Skills & Abilities"]} isTitle />
          </div>
          <div
            className={clsx(
              "w-9/12 text-gray-300",
              "xl:my-10 xl:mb-5",
              "2xl:text-xl"
            )}
          >
            I have a firm knowledge of HTML, CSS and JavaScript language and
            possess a good knowledge of computer software packages (frameworks
            and tools) that are used in today’s technology.
          </div>
          <div
            className={clsx(
              "w-9/12 mb-10 text-gray-300",
              "xl:mb-5",
              "2xl:text-xl"
            )}
          >
            I know the importance of staying on top of the latest development
            trends. From DevSecOps to low-code apps, software development trends
            change as fast as technology itself. So I am experiencing as many
            things as I can to adapt to the fast-changing trends at any time.
          </div>
          <div
            className={clsx(
              "w-9/12 mb-10 text-gray-300",
              "xl:mb-5",
              "2xl:text-xl"
            )}
          >
            On the {mobileOpen ? "below" : "right"} is a sphere made up of my
            proficient programming languages and technical skills. If you want
            to know about their details, click the icon.
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
