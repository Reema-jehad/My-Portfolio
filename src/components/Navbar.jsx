import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets";
import logo from "../assets/images/R-logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} z-20 top-0 w-full flex-item flex items-center py-5 fixed bg-black`}
    >
      <div className="w-full items-center flex mx-auto max-w-7xl justify-between ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Reema Jehad
          </p>
        </Link>
        <ul className="list-none hidden flex-row sm:flex gap-10 ">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active == link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="cursor-pointer w-[28px] h-[28px] object-contain "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {" "}
            <ul className="list-none flex-justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active == link.title ? "text-white" : "text-secondary"
                    }font-poppins  text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
