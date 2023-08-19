import React, { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";

const NavBarsBottoms = () => {
  const navbarsBottom = [
    { id: 1, name: "خانه", icons: <BiHome /> },
    { id: 2, name: "اقامتگاه ها", icons: <MdOutlineVilla /> },
    { id: 3, name: "میزبانی", icons: <LuConciergeBell /> },
    { id: 4, name: "ارتباط با ما", icons: <AiOutlineUser /> },
  ];


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
      <nav className="transition ease-in-out delay-150">
        <ul
          className={`navbars active ${
            show && "hidden"
          } flex items-center justify-between backdrop-blur-2xl fixed  right-0 left-0 bottom-0 z-10 p-2 h-[40px] bg-white pt-[7px] pb-0 pr-[15px] pl-[15px]`}
        >
          {navbarsBottom.map((item, index) => {
            return (
              <li
                className="text-center flex items-center justify-end flex-col"
                key={index}
              >
                <div className="text-[20px] text-[#353535]">{item.icons}</div>
                <div>
                  <span className="text-[10px] font-bold relative bottom-[5px] text-[#353535]">
                    {item.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarsBottoms;
