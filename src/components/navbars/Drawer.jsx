import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { AiOutlineMenu } from "react-icons/ai";
import { Sidenav, Nav } from "rsuite";
import PhoneIcon from "@rsuite/icons/Phone";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "../../css/nav.css";

export default function DrawerPlacement() {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex  w-[100px] fixed top-[18px] right-[12px] left-0 z-[500]  ">
        <Button onClick={openDrawerRight}>
          <AiOutlineMenu className="text-[12px] font-bold" />
        </Button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="navbarsSidBar p-4 bg-slate-100  h-[400px] z-[500]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            <Sidenav defaultOpenKeys={["3", "4"]}>
              <Sidenav.Body>
                <Nav activeKey="1">
                  <Nav.Item eventKey="2" icon={<PhoneIcon />}>
                    خانه
                  </Nav.Item>

                  <Nav.Item eventKey="2" icon={<GroupIcon />}>
                    علاقه مندی ها
                  </Nav.Item>
                  <Nav.Menu eventKey="3" title="داشبورد" icon={<MagicIcon />}>
                    <Nav.Item eventKey="3-1">ثبت اقامتگاه</Nav.Item>
                    <Nav.Item eventKey="3-2">ارتباط با ما</Nav.Item>
                    <Nav.Item eventKey="3-3">شکایت</Nav.Item>
                  </Nav.Menu>
                  <Nav.Menu
                    eventKey="4"
                    title="درباره ما"
                    icon={<GearCircleIcon />}
                  >
                    <Nav.Item eventKey="4-2">قوانین وبسایت</Nav.Item>
                    <Nav.Item eventKey="4-3">پشتیبانی</Nav.Item>
                  </Nav.Menu>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
            className="relative bottom-[191px] right-[10px] z-[500]"
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
        </div>
      </Drawer>
    </React.Fragment>
  );
}
