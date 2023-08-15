import React, { useState, useEffect } from "react";
import img from "../../../public/img/13.svg";
// import DrawerNavbars from "../../components/";

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
            {/* <DrawerNavbars /> */}
          </li>
          <li>
            <img src={img} alt="" className="w-[31px]" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarsScrool;
