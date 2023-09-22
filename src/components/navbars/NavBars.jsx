import React, { useState, useEffect } from "react";
// import img from "../../../public/img/7002/l.jpg";
// import DrawerPlacement from "./Drawer";
import { NavLink } from "react-router-dom";


const NavBarsScrool = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <nav className={`navbars active ${show && "hidden"}`}>
        <ul className="flex items-center justify-between backdrop-blur-2xl fixed top-0 right-0 left-0 z-10 p-2  animated">
          <li className="flex justify-center items-center bg-[#0373F3] pr-[1px]  w-[21px] h-[20px] rounded-md text-white">
          {/* <DrawerPlacement /> */}
          </li>
          <li className="flex items-center">
            <span className="pl-[4px] text-white">
            𝑅𝑎𝑚𝑠𝑎𝑟𝐵𝑎𝑚𝑎
            </span>
            <span>
            <NavLink to={"/"}>
            {/* <img src={img} alt="" className="w-[36px] rounded-[5px]" /> */}
            </NavLink>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarsScrool;
