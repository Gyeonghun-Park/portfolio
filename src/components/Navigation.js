import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import {
  faCog,
  faEnvelope,
  faEye,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";
import Logo from "../img/Logo.png";
import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Navigation = withRouter(({ location: { pathname } }) => {
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
    <div className="z-10">
      {mobileOpen ? (
        <div
          className={
            "bg-nav h-9 text-gray-500 fixed inset-x-0 top-0 flex items-center justify-between pr-2"
          }
        >
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <div className="grid grid-flow-col">
            <NavItem icon={faHome} path="/" name="HOME" />
            <NavItem icon={faUser} path="/about" name="ABOUT" />
            <NavItem icon={faCog} path="/skills" name="SKILLS" />
            <NavItem icon={faEye} path="/portfolio" name="WORK" />
            <NavItem icon={faEnvelope} path="/contact" name="CONTACT" />
          </div>
          <div>
            <div className="grid grid-flow-col gap-2 text-xs">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Gyeonghun-Park"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="transition hover:text-prime"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100010395939047"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="transition hover:text-prime"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gyeonghun-park-095971193/"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="transition hover:text-prime"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            "bg-nav box-border flex flex-col justify-between h-full w-16 text-gray-500"
          }
        >
          <div className="grid bg-black justify-items-center">
            <img src={Logo} alt="logo" className="mt-2" />
            <span className="pb-2 text-xs font-bold text-gray-300">Park</span>
          </div>
          <div className="grid gap-10 text-xl">
            <NavItem icon={faHome} path="/" name="HOME" />
            <NavItem icon={faUser} path="/about" name="ABOUT" />
            <NavItem icon={faCog} path="/skills" name="SKILLS" />
            <NavItem icon={faEye} path="/portfolio" name="WORK" />
            <NavItem icon={faEnvelope} path="/contact" name="CONTACT" />
          </div>
          {/* wprapping with div to make it easy to click */}
          <div className="grid gap-5 mb-8 justify-items-center">
            <FontAwesomeIcon
              icon={faGithub}
              className="transition hover:text-prime"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="transition hover:text-prime"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="transition hover:text-prime"
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default Navigation;
