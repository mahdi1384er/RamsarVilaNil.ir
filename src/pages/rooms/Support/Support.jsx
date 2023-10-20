import { React, useState, useEffect } from "react";
import { Ri24HoursLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaUserClock } from "react-icons/fa";



const SuporttData = [
  {
    id: 1,
    titel: "کم هزینه و باکیفیت",
    icons: <MdOutlineHomeWork className="w-[24px] text-[33px] text-blue-600" />,
  },
  {
    id: 2,
    titel: "پاسخگوی 24 ساعته",
    icons: <Ri24HoursLine className="w-[24px] text-[33px] text-blue-600" />,
  },
  {
    id: 3,
    titel: "خاص ترین لوکیشن ها",
    icons: (
      <IoPricetagsOutline className="w-[24px] text-[33px] text-blue-600" />
    ),
  },
  ,
  {
    id: 4,
    titel: "بهترین ویلاها در رامسرباما",
    icons: <FaUserClock className="w-[24px] text-[33px] text-blue-600" />,
  },
];

const Support = () => {
  return (
    <>
      <section className="w-[105%] mt-[60px] h-[100px] relative right-[11px] m-auto">
        <div className="flex flex-wrap justify-between">
          {SuporttData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center w-[190px] flex-wrap justify-evenly mt-[5px] mr-0 ml-0 mb-[6px] p-[2px] w-[48.5%] h-[46px] bg-[#E4E4E4] rounded-[6px]"
              >
                <div>
                 {item.icons}
                </div>
                <div>
                  <span className="text-[15px] font-bold">{item.titel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Support;
