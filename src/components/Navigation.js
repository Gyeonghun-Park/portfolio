import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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

const Navigation = () => {
  //Todo: recognize current location
  return (
    <div class="bg-nav box-border flex flex-col justify-between h-fulll w-20 text-prime">
      <div className="grid gap-2 justify-items-center mt-4">
        <FontAwesomeIcon icon={faLemon} />
        <span className="text-xs">Gyeonghun</span>
      </div>
      <div className="grid gap-6 justify-items-center text-2xl">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/about">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/skills">
          <FontAwesomeIcon icon={faCog} />
        </Link>
        <Link to="/portfolio">
          <FontAwesomeIcon icon={faEye} />
        </Link>
        <Link to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      <div className="grid gap-5 justify-items-center mb-8">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </div>
  );
};

export default Navigation;
