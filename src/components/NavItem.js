import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = withRouter(({ location: { pathname }, icon, path, name }) => {
  return (
    <Link to={path}>
      <div className="relative text-center ">
        <div className="absolute inset-x-0 bg-nav top-0 hover:opacity-0 transition duration-500">
          <FontAwesomeIcon
            icon={icon}
            className={pathname === path ? "text-prime absolut" : ""}
          />
        </div>
        <div className="text-prime font-light text-base pt-1  text-center">
          {name}
        </div>
      </div>
    </Link>
  );
});

export default NavItem;
