import React, { useState, useEffect, useRef } from "react";
import { BiSupport } from "react-icons/bi";
import { Popover, Whisper, Button, ButtonToolbar } from "rsuite";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Supports = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const triggerRef = React.useRef();

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

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
      <NavLink to={"/suport"}>
        <ul
          className={`suport navbars flex justify-around shadow-2xl ${
            show && "hidden"
          } flex items-center justify-between backdrop-blur-2xl fixed  right-[334px] left-0 bottom-[64px] z-10 shadow-2xl w-[44px] h-[44px] bg-white  p-0 rounded-[100px] `}
        >
          <Button>
            <BiSupport className="text-[29px] text-blue-500 font-bold" />
          </Button>
        </ul>
      </NavLink>
    </>
  );
};

export default Supports;

//
