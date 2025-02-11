import { NavLink } from "react-router-dom";
import { navData } from "../data/navData";
import { useContext } from "react";
import { ecommerceContext } from "../context/context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const { count, setCategoryFilter } = useContext(ecommerceContext);

  const activeStyle = `underline underline-offset-4`;
  return (
    <nav className="w-full h-20 fixed z-10 top-0 py-5  px-8 bg-blueMain border-b-2 border-border flex justify-between items-center">
      <ul className="flex gap-2 items-center ">
        {navData.mainNav.map((item) =>
          item.isLogo ? (
            <li key={item.id} onClick={() => setCategoryFilter(item.text)}>
              <NavLink to={item.to}>
                <img
                  src="./reactRetroLogo-8_tvcOxs (1).png"
                  alt="Logo"
                  className="w-10 h-10"
                />
              </NavLink>
            </li>
          ) : (
            <li
              key={item.id}
              onClick={() => setCategoryFilter(item.text)}
              className="flex gap-3 font-nunito"
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {item.text}
              </NavLink>
            </li>
          )
        )}
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
            <div key={item.id} className="flex items-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <div className="flex">
                  {item.isCart ? (
                    <ShoppingCartIcon className="h-6 w-6 text-gray-800" />
                  ) : (
                    <span>{item.text}</span>
                  )}
                  {item.id === 4 && <span className="ml-1">{count}</span>}
                </div>
              </NavLink>
            </div>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
