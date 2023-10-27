import React, { useState, useEffect } from "react";
// import img from "/img/imgs/l.jpg";
// import DrawerPlacement from "./Drawer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BiLeftArrowAlt } from "react-icons/bi";
import DrawerPlacement from "../../components/navbars/Drawer";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { AiOutlineMenu } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { Sidenav, Nav } from "rsuite";
import { BiHome } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdVilla } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";



const NavBarsScrool = () => {
  const [data, setdata] = useState([]);
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

  const showToastMessage2 = () => {
    toast.error("! درخواست ناموفق به سرور ", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "light",
      className:"w-[76%]"
    });
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
          <ul className="flex m-auto w-[98%] h-[63px] items-center justify-between backdrop-blur-2xl fixed top-0 right-0 left-0 z-10 p-2  animated">
            <li className="flex justify-center items-center bg-[#0373F3] pr-[1px]  w-[31px] h-[30px] rounded-md text-white">
            <div className="flex w-[100px] fixed top-[22px] right-[14px] left-0 z-[1000]  ">
              <Button onClick={openDrawerRight}>
                <AiOutlineMenu className="text-[20px] font-bold" />
              </Button>
            </div>
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
                          className="w-[44px] rounded-[5px]"
                        />
                      </div>
                    );
                  })}
                </NavLink>
              </span>
            </li>
          </ul>
        </nav>
        <React.Fragment>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="navbarsSidBar w-[374px] p-4 bg-slate-100  h-[400px] z-[5000]"
        >
          <ToastContainer rtl />
          <div className="w-full h-[60px] border-b-[2px] border-solid  pb-[5px]">
            <span className="text-blue-600 text-[17px] font-bold">
              رامسرباما
            </span>
            <br />
            <span className="text-blue-500 text-[13px] ">
              اولین سامانه رسمی اجاره آنلاین ویلا در رامسر
            </span>
          </div>
          {/* 374px */}
          <div className="flex items-center justify-between text-[14px] mt-[40px]">
            <Typography variant="h5" color="blue-gray" className="text-[16px]">
              <Sidenav defaultOpenKeys={["3", "4"]}>
                <Sidenav.Body>
                  <Nav activeKey="1">
                    <div className="flex items-center w-[280px] h-[50px]">
                      <div className="relative   z-[500]">
                        <BiHome className="w-[32px] h-[20px]" />
                      </div>
                      <Nav.Item
                        eventKey="2"
                        className="texthome relative left-[18px] top-[3px]"
                      >
                        <NavLink to="/">
                          <span>خانه</span>
                        </NavLink>
                      </Nav.Item>
                    </div>
                  </Nav>

                  <Nav activeKey="1">
                    <div className="flex items-center w-[280px] h-[50px]">
                      <div className="relative   z-[500]">
                        <AiOutlineHeart className="w-[32px] h-[20px]" />
                      </div>
                      <Nav.Item
                        eventKey="2"
                        className="texthome relative left-[18px] top-[3px]"
                      >
                        <NavLink to="/">
                          <span>علاقه مندی ها</span>
                        </NavLink>
                      </Nav.Item>
                    </div>
                  </Nav>

                  <Nav activeKey="1">
                    <div className="flex items-center w-[280px] h-[50px]">
                      <div className="relative   z-[500]">
                        <TfiHeadphoneAlt className="w-[32px] h-[20px]" />
                      </div>
                      <Nav.Item
                        eventKey="2"
                        className="texthome relative left-[18px] top-[3px]"
                      >
                        <NavLink to="/support">
                          <span>ارتباط با ما</span>
                        </NavLink>
                      </Nav.Item>
                    </div>
                  </Nav>

                  <Nav activeKey="1">
                    <div className="flex items-center w-[280px] h-[50px]">
                      <div className="relative   z-[500]">
                        <MdVilla className="w-[32px] h-[20px]" />
                      </div>
                      <Nav.Item
                        eventKey="2"
                        className="texthome relative left-[18px] top-[3px]"
                      >
                        <NavLink to="/host">
                          <span>ثبت اقامتگاه</span>
                        </NavLink>
                      </Nav.Item>
                    </div>
                    <div class="relative top-[160px]">
                      <button
                        class="bg-blue-500 w-[90%]  items-center  h-[40px] m-auto flex justify-center p-[9px] rounded-[14px] shadow-xl text-blue-600"
                        tabindex="0"
                        type="button"
                        onClick={showToastMessage2}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          class="h-7 w-7 text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <p class="mr-2 text-[17px] text-white">ورود</p>
                      </button>
                    </div>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawerRight}
                className="relative  bottom-[338px] right-[256px]  z-[500]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </Typography>
          </div>
        </Drawer>
      </React.Fragment>
      </>
    )
  );
};

export default NavBarsScrool;



