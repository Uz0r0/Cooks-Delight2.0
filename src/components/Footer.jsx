import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const activeStyle = "text-slate-900 border-b-2 border-orange-500 pb-1";
  const inactiveStyle = "text-slate-400";
  return (
    <footer className="px-6 md:px-10 py-10 pt-0 transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:pb-7 pb-5">
        <div className="flex items-center gap-2">
          <img src="Logo.png" alt="Logo" />
          <p className="text-xs md:text-sm font-heading font-bold leading-tight">
            Cooks <br /> Delight 2.0
          </p>
        </div>

        <nav className="hidden md:flex flex-wrap justify-center gap-10 font-medium ">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `cursor-pointer text-sm hover:text-main-text transition-color duration-200 ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `cursor-pointer text-sm hover:text-main-text transition-color duration-200 ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              `cursor-pointer text-sm hover:text-main-text transition-color duration-200 ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Favourites
          </NavLink>
        </nav>
      </div>

      <hr className="border-[#2625223d]" />

      <div className="grid md:grid-cols-3 items-center pt-5 md:pt-8 gap-6">
        <div className="hidden md:block"></div>
        <p className="text-sm text-gray-500 text-center">
          © 2026 Cooks Delight 2.0. Powered by{" "}
          <span className="font-bold text-brand-primary">Uz0r0</span>
        </p>

        <div className="hidden md:flex gap-6 justify-end items-center">
          <Instagram
            className="cursor-pointer hover:text-brand-primary transition-all duration-200 hover:-translate-y-1"
            size={20}
          />
          <Facebook
            className="cursor-pointer hover:text-brand-primary transition-all duration-200 hover:-translate-y-1"
            size={20}
          />
          <Twitter
            className="cursor-pointer hover:text-brand-primary transition-all duration-200 hover:-translate-y-1"
            size={20}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
