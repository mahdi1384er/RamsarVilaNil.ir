import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";


const TrustData = [
  {
    id: 1,
    titels: "خدمات آنلاین در تمام روزهای هفته",
    icons: <BiSupport className="w-[14px] text-[18px] text-blue-600" />,
    imgs: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xtWXdfdXo5anl0WXx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: 2,
    titels: "اقامت با کیفیت تر با هزینه کمتر",
    icons: <MdOutlineHomeWork className="w-[14px] text-[18px] text-blue-600" />,
    imgs: "https://images.unsplash.com/photo-1608429835892-30be51ea4d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: 3,
    titels: "تسویه با میزبان پس از تحویل اقامتگاه",
    icons: (
      <IoPricetagsOutline className="w-[14px] text-[18px] text-blue-600" />
    ),
    imgs: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
  },
];

const Cottagess = () => {
  const [data, setdata] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300,
  };

  return (
    <>
      <Slider
        {...settings}
        className="text-center relative right-[-3px] w-[106%] h-[250px]"
      >
        {TrustData.map((item) => {
          return (
            <div className="flex flex-col h-[70px]">
              <div>
                <img src={item.imgs} alt="" className="w-full h-[251px]" />
              </div>
              <div className="flex items-center">
                <div class="flec flex-col  w-[100px] h-[40px] justify-between relative bottom-[240px] left-[310px]">
                  <div class="bg-white rounded-xl pl-[1px] w-[73px] h-[21px] text-center flex items-center justify-evenly">
                    <span class="text-[12px] text-[#0373F3]">رامسر باما</span>
                  </div>
                </div>
                <div class="flec flex-col w-[220px] h-[40px] justify-between relative bottom-[34px] left-[-66px]">
                  <div class="bg-white rounded-xl pl-[6px] w-[193px] h-[21px] text-center flex items-center justify-evenly p-[5px]">
                    <span class="text-[11px] text-[#0373F3] pl-[-3px]">
                      {item.titels}
                    </span>
                    <span class="text-[12px] text-[#0373F3]">
                      {item.icons}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      ;
    </>
  );
};

export default Cottagess;
