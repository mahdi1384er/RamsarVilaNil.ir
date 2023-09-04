import React, { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reserv = ({priecs}) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);


  return (
    <>
      <nav className="transition ease-in-out delay-150 ">
        <ul
          className={`navbars flex items-center justify-around ${
            show && "hidden"
          } navbarsReserv flex items-center justify-between backdrop-blur-2xl fixed  right-[10px] left-[10px] bottom-[23px] z-10 p-2 h-[46px] mb-[30px] pb-[15px] pr-[15px] pl-[15px] rounded-[6px]`}
        >
            <div className="flex items-center text-center justify-between w-[94%] pt-[7px]">
              <div>
                <span className="text-black font-bold">{priecs}</span>
              </div>

              <div class="btnsan p-[4px] w-[120px]  rounded-[5px] bg-[#0373F3]">
                <a
                  href="https://wa.me/09300616152/?text=urlencodedtext"
                  class="text-white"
                >
                  <span>درخواست رزرو</span>
                </a>
              </div>
            </div>
        </ul>
      </nav>
    </>
  );
};

export default Reserv;

//
