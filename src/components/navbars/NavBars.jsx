import React, { useState, useEffect } from "react";
// import img from "/img/imgs/l.jpg";
// import DrawerPlacement from "./Drawer";
import { NavLink } from "react-router-dom";
import axios from "axios";

const NavBarsScrool = () => {
  const [data, setdata] = useState([]);
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
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/navbarslogo/navbarslogo"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <nav className={`navbars active ${show && "hidden"}`}>
          <ul className="flex items-center justify-between backdrop-blur-2xl fixed top-0 right-0 left-0 z-10 p-2  pr-[12px] pl-[13px] animated">
            <li className="flex justify-center items-center bg-[#0373F3] pr-[1px]  w-[27px] h-[25px] rounded-md text-white">
              {/* <DrawerPlacement /> */}
            </li>
            <li className="flex items-center">
              <span className="pl-[6px] text-white text-[18px]">
                𝑅𝑎𝑚𝑠𝑎𝑟𝐵𝑎𝑚𝑎
              </span>
              <span>
                <NavLink to={"/"}>
                  {data.map((item, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={item.imgs}
                          alt=""
                          className="w-[36px] rounded-[5px]"
                        />
                      </div>
                    );
                  })}
                </NavLink>
              </span>
            </li>
          </ul>
        </nav>
      </>
    )
  );
};

export default NavBarsScrool;
