import React, { useState, useEffect } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import DrawerPlacement from "../../components/navbars/Drawer";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const NavBarsScrool = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const openDrawerRight = () => setOpenRight(true);
  const [openRight, setOpenRight] = React.useState(false);
  const closeDrawerRight = () => setOpenRight(false);

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
          <div className="flex w-[100px] fixed top-[22px] right-[14px] left-0 z-[1000]  ">
              <Button onClick={openDrawerRight}>
                <AiOutlineMenu className="text-[20px] font-bold" />
              </Button>
            </div>
          </li>
          <li className="w-[27px] h-[27px] bg-white rounded-full shadow-sm flex items-center justify-center">
            <NavLink to="/">
              <BiLeftArrowAlt className="w-[23px] h-[30px]" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarsScrool;
