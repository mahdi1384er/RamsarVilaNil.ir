import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Ri24HoursLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaUserClock } from "react-icons/fa";

const TrustData = [
  {
    id: 1,
    titel: "پاسخگوی 24 ساعته رامسر باما",
    titels:"خدمات آنلاین در تمام روزهای هفته",
    icons: <Ri24HoursLine className="w-[30px] text-[33px] text-blue-600"/>,
  },
  {
    id: 2,
    titel: "بهترین ویلاها در رامسر باما",
    titels:"اقامت با کیفیت تر با هزینه کمتر",
    icons: <MdOutlineHomeWork className="w-[30px] text-[33px] text-blue-600"/>,
  },
  {
    id: 3,
    titel: "ضمانت تحویل اقامتگاه",
    titels:"تسویه با میزبان پس از تحویل اقامتگاه",
    icons: <IoPricetagsOutline className="w-[30px] text-[33px] text-blue-600"/>,
  },
  ,
  {
    id: 4,
    titel: "رزرو در لحظه آخری",
    titels:"رزرو اقامتگاه ها در حساس ترین لحظات",
    icons: <BiSupport className="w-[30px] text-[33px] text-blue-600"/>,
  },
];

const JungleContext = () => {
  const [data, setdata] = useState([]);

  return (
    <section className="flex w-[111%] items-center justify-start">
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        className="swiper-wrapper2"
        width={212}
        slidesPerView={1.3}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
      >
        {TrustData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-evenly w-[230px] h-[64px] rounded-[10px] border-solid border-[1px] border-gray-400 ml-[30px] mr-[46px]">
                <div>
                  {item.icons}
                </div>
                <div className="flex  justify-around flex-col">
                  <div>
                    <p className="text-[15px] text-[#272727]">{item.titel}</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#5f5f5f]">{item.titels}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default JungleContext;
