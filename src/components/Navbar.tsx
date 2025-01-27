import { NavLink } from "react-router-dom";
import { navData } from "../data/navData";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {navData.mainNav.map((item) => (
            <NavLink to={item.to}>{item.text}</NavLink>
          ))}
        </li>
      </ul>
      <ul>
        <a href="https://github.com/tadeowoto" rel="noreferrer" target="_blank">
          Tadeowoto
        </a>
        <li>
          {navData.userNav.map((item) => (
            <NavLink to={item.to}>{item.text}</NavLink>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
