import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

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

const DataContext = () => {
  return (
    <>
      <section className="w-[100%] mt-[-102px] h-[100px] relative  m-auto">
        <div className="flex flex-wrap justify-between">
        <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        className="swiper-wrapper2"
        width={280}
        slidesPerView={2.2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
          {SuporttData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
              <div
                key={index}
                className="flex items-center flex-wrap justify-evenly mt-[5px] mr-0 ml-0 mb-[6px] p-[2px] w-[190px] h-[46px] bg-[#E4E4E4] rounded-[6px]"
              >
                <div>
                 {item.icons}
                </div>
                <div>
                  <span className="text-[15px] font-bold">{item.titel}</span>
                </div>
              </div>
              </SwiperSlide>
            );
          })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DataContext;
