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

const Navigation = withRouter(({ location: { pathname } }) => {
  return (
    <div className="bg-nav box-border flex flex-col justify-between h-fulll w-16 text-gray-500 z-50">
      <div className="grid justify-items-center bg-black">
        <img src={Logo} alt="logo" className="mt-2" />
        <span className="text-xs text-gray-300 font-bold pb-2">Park</span>
      </div>
      <div className="grid gap-10 text-xl">
        <NavItem icon={faHome} path="/" name="HOME" />
        <NavItem icon={faUser} path="/about" name="ABOUT" />
        <NavItem icon={faCog} path="/skills" name="SKILLS" />
        <NavItem icon={faEye} path="/portfolio" name="WORK" />
        <NavItem icon={faEnvelope} path="/contact" name="CONTACT" />
      </div>
      {/* wprapping with div to make it easy to click */}
      <div className="grid gap-5 justify-items-center mb-8">
        <FontAwesomeIcon
          icon={faGithub}
          className="hover:text-prime transition"
        />
        <FontAwesomeIcon
          icon={faFacebookF}
          className="hover:text-prime transition"
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="hover:text-prime transition"
        />
      </div>
    </div>
  );
});

export default Navigation;
