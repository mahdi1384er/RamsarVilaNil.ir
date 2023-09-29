import React, { useState, useEffect, useRef } from "react";
import { BiSupport } from "react-icons/bi";
import { Popover, Whisper, Button, ButtonToolbar } from "rsuite";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const speaker = (
  
  <Popover
    title="درحال پردازش پشتیبانی لطفا صبر کنید..."
    className="w-[347px] h-[397px] ml-[148px] mb-[100px] "
  >
    <div className="">
      <iframe
        src="https://deadsimplechat.com/vBdx7SPV-"
        width="400px"
        height="600px"
        className="w-[347px] h-[397px] relative left-[10px] bottom-[54px] z-[-4px]"
      ></iframe>
    </div>
  </Popover>
);

const Supports = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const triggerRef = React.useRef();
  const open = () => triggerRef.current.open();
  const close = () => triggerRef.current.close();
  const [loading, setLoading] = React.useState(true);

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
      <ul
        className={`suport navbars flex justify-around shadow-2xl ${
          show && "hidden"
        } flex items-center   justify-between backdrop-blur-2xl fixed  right-[339px] left-0 bottom-[64px] z-10 shadow-2xl w-[44px] h-[44px] bg-white  p-0 rounded-[100px] `}
      >
        <ButtonToolbar>
          <Whisper
            placement="top"
            trigger="click"
            controlId="control-id-click"
            speaker={speaker}
          >
            <Button>
              <BiSupport className="text-[29px] text-blue-500 font-bold" />
            </Button>
          </Whisper>
        </ButtonToolbar>
      </ul>
    </>
  );
};

export default Supports;

//
