import { NavLink } from "react-router-dom";
import { navData } from "../data/navData";

function Navbar() {
  const activeStyle = `underline underline-offset-4`;
  return (
    <nav className="w-full h-20 fixed z-10 top-0 py-5  px-8 bg-white flex justify-between items-center">
      <ul className="flex ">
        <li className="flex gap-3 font-nunito ">
          {navData.mainNav.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.text}
            </NavLink>
          ))}
        </li>
      </ul>
      <ul className="w-1/2 flex items-center justify-end ">
        <a
          href="https://github.com/tadeowoto"
          rel="noreferrer"
          target="_blank"
          className="mr-3 text-[#1a1a1a] font-semibold"
        >
          @Tadeowoto
        </a>
        <li className="flex gap-3 font-nunito ">
          {navData.userNav.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.text}
            </NavLink>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
