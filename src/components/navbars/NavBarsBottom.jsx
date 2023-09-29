import React, { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import Example from "./Drawer";
import { NavLink } from "react-router-dom";
import { BiSupport } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBarsBottoms = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const DataNavBars = [
    {
      id: 1,
      name: "خانه",
      path: "/",
      icons: <BiHome className="w-[23px] h-[25px]" />,
    },
    {
      id: 2,
      name: "اقامتگاه ها",
      path: "/rooms",
      icons: <MdOutlineVilla className="w-[23px] h-[25px]" />,
    },
    {
      id: 3,
      name: "میزبانی",
      path: "/host",
      icons: <LuConciergeBell className="w-[23px] h-[25px]" />,
    },
    {
      id: 4,
      name: "ارتبط با ما",
      path: "/support",
      icons: <AiOutlineUser className="w-[23px] h-[25px]" />,
    },
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
          } flex items-center w-[116%]  justify-between backdrop-blur-2xl fixed  right-0 left-0 bottom-[-11px] z-10 h-[68px] bg-white  pb-[10px] pr-[16px] pl-[76px]`}
          >
       
            {DataNavBars.map((items, index) => {
              return (
                <li key={index}>
                  <NavLink className="links text-[16px]" to={items.path}>
                    <div className="activBorder flex flex-col items-center justify-between">
                      {items.icons}
                      <span className="outline-none border-none ">
                        {items.name}
                      </span>
                    </div>
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
