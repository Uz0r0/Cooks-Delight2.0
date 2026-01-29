import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Twitter, Menu, X, } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "text-slate-900 border-b-2 border-orange-500 pb-1";
  const inactiveStyle = "text-slate-400";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "unset"; 
    }
  }, [isOpen]);

  return (
    <header className="border-b border-[#2625223d]">
      <div className="flex justify-between items-center py-5 px-6 md:py-7 md:px-10 ">
        <div className="flex items-center gap-2">
          <img src="Logo.png" alt="Logo" />
          <p className="text-xs md:text-sm font-heading font-bold leading-tight">
            Cooks <br /> Delight 2.0
          </p>
        </div>
        <nav className="hidden md:flex gap-10 font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `cursor-pointer hover:text-main-text transition-color duration-200 ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `cursor-pointer hover:text-main-text transition-color duration-200 ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              `cursor-pointer hover:text-main-text transition-color duration-200 ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Favourites
          </NavLink>
        </nav>
        <div className="hidden md:flex gap-5">
          <Instagram className="cursor-pointer hover:text-brand-primary transition-all duration-200 hover:-translate-y-0.5" />
          <Facebook className="cursor-pointer hover:text-brand-primary transition-all duration-200 hover:-translate-y-0.5" />
          <Twitter className="cursor-pointer hover:text-brand-primary transition-all duration-200 hover:-translate-y-0.5" />
        </div>
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const activeStyle = "text-slate-900 border-b-2 border-orange-500 pb-1";
  const inactiveStyle = "text-slate-400";

  return (
    <div
      className={`
          fixed inset-0 bg-brand-secondary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
    >
      <nav className="flex flex-col items-center gap-5 text-xl font-semibold">
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `cursor-pointer transition-colors ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `cursor-pointer transition-colors ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Recipes
        </NavLink>
        <NavLink
        to="/favourites"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `cursor-pointer transition-colors ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Favourites
        </NavLink>
      </nav>
      <div className="flex gap-8">
        <Instagram size={28} />
        <Facebook size={28} />
        <Twitter size={28} />
      </div>
    </div>
  );
};

export default Navbar;
