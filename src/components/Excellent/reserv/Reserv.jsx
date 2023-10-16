import React, { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reserv = ({ priecs }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <>
      <nav className="transition ease-in-out delay-150 ">
        <ul
          className={`navbars flex items-center justify-around ${
            show && "hidden"
          } navbarsReserv flex items-center justify-between backdrop-blur-2xl fixed  right-[10px] left-[10px] bottom-[23px] z-10 p-2 h-[68px] mb-[39px] pb-[15px] pr-[15px] pl-[15px] rounded-[6px]`}
        >
          <div className="flex items-center text-center justify-between w-[100%] h-[120px] pt-[7px]">
            <div>
              <span className="text-black font-bold text-[17px]">{priecs}</span>
            </div>

            <div class="btnsan p-[4px] w-[140px] h-[40px] flex items-center justify-center  rounded-[5px] bg-[#0373F3]">
              <button className="buton">
                <a
                  href="https://wa.me/09300616152/?text=urlencodedtext"
                  class="bt text-white"
                >
                  <span className="text-[15px] btnsans">درخواست رزرو</span>
                </a>
              </button>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Reserv;

//
