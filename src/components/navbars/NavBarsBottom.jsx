import React, { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import Example from "./Drawer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBarsBottoms = () => {
  let [categories] = useState({
    خانه: [
      {
        id: 1,
        icons: <BiHome />,
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    "اقامتگاه ها": [
      {
        id: 1,
        icons: <MdOutlineVilla />,
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    میزبانی: [
      {
        id: 1,
        icons: <LuConciergeBell />,
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
    "ارتباط با ما": [
      {
        id: 1,
        icons: <AiOutlineUser />,
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
  });

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
      <nav className="transition ease-in-out delay-150 ">
        <ul
          className={`navbars active ${
            show && "hidden"
          } flex items-center justify-between backdrop-blur-2xl fixed  right-0 left-0 bottom-[-11px] z-10 p-2 h-[45px] bg-white pt-[7px] pb-[3px] pr-[15px] pl-[15px]`}
        >
          <Tab.Group>
            <Tab.List className="flex justify-around w-full">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      " h-[10px] flex justify-end rounded-lg text-sm font-medium leading-5 mb-[12px] text-[#0373F3]",
                      "ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-[#292929] hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </ul>
      </nav>
    </>
  );
};

export default NavBarsBottoms;
