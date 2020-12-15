import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import {
  faCog,
  faEnvelope,
  faEye,
  faHome,
  faLemon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";

const Navigation = withRouter(({ location: { pathname } }) => {
  return (
    <div className="bg-nav box-border flex flex-col justify-between h-fulll w-20 text-gray-500">
      <div className="grid gap-2 justify-items-center mt-4">
        <FontAwesomeIcon icon={faLemon} />
        <span className="text-xs">Gyeonghun</span>
      </div>
      <div className="grid gap-6 text-2xl">
        <NavItem icon={faHome} path="/" name="HOME" />
        <NavItem icon={faUser} path="/about" name="ABOUT" />
        <NavItem icon={faCog} path="/skills" name="SKILLS" />
        <NavItem icon={faEye} path="/portfolio" name="MY WORK" />
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
