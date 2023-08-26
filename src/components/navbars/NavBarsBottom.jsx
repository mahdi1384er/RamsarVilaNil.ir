import React, { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import Example from "./Drawer";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBarsBottoms = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const DataNavBars = [
    { id: 1, name: "خانه", path: "/" },
    { id: 2, name: "اقامتگاه ها", path: "/rooms" },
    { id: 3, name: "میزبانی", path: "/host" },
    { id: 4, name: "ارتبط با ما", path: "/support" },
  ];

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav className="transition ease-in-out delay-150 ">
        <ul
          className={`navbars flex justify-around ${
            show && "hidden"
          } flex items-center justify-between backdrop-blur-2xl fixed  right-0 left-0 bottom-[-11px] z-10 p-2 h-[52px] bg-white  pb-[15px] pr-[15px] pl-[15px]`}
        >
          {DataNavBars.map((items, index) => {
            return (
              <li key={index}>
                <NavLink
                  className="links"
                  to={items.path}
                >
                  {items.name}
                  
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarsBottoms;

//
