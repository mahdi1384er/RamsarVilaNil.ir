import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { AiOutlineMenu } from "react-icons/ai";
import { Sidenav, Nav } from "rsuite";
// import PhoneIcon from "@rsuite/icons/Phone";
import { BiHome } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdVilla } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "../../css/nav.css";
import { NavLink } from "react-router-dom";

export default function DrawerPlacement() {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex  w-[100px] fixed top-[17px] right-[13px] left-0 z-[1000]  ">
        <Button onClick={openDrawerRight}>
          <AiOutlineMenu className="text-[12px] font-bold" />
        </Button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="navbarsSidBar p-4 bg-slate-100  h-[400px] z-[5000]"
      >
        <div className="flex items-center justify-between text-[10px]">
          <Typography variant="h5" color="blue-gray" className="text-[13px]">
            <Sidenav defaultOpenKeys={["3", "4"]}>
              <Sidenav.Body>
                <Nav activeKey="1">
                  <div className="flex items-center w-[280px] h-[40px]">
                    <div className="relative   z-[500]">
                      <BiHome className="w-[28px] h-[18px]" />
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
                  <div className="flex items-center w-[280px] h-[40px]">
                    <div className="relative   z-[500]">
                      <AiOutlineHeart className="w-[28px] h-[18px]" />
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
                  <div className="flex items-center w-[280px] h-[40px]">
                    <div className="relative   z-[500]">
                      <TfiHeadphoneAlt className="w-[28px] h-[18px]" />
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
                  <div className="flex items-center w-[280px] h-[40px]">
                    <div className="relative   z-[500]">
                      <MdVilla className="w-[28px] h-[18px]" />
                    </div>
                    <Nav.Item
                      eventKey="2"
                      className="texthome relative left-[18px] top-[3px]"
                    >
                      <span>ثبت اقامتگاه</span>
                    </Nav.Item>
                  </div>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
              className="relative bottom-[148px] right-[256px]  z-[500]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
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
  );
}
