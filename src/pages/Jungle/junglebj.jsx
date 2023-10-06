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
    imgs: "https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60 100w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60 200w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60 300w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60 400w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 500w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60 600w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60 700w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60 800w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60 900w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60 1000w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60 1200w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60 1400w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=60 1600w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1800&q=60 1800w, https://images.unsplash.com/photo-1623298460174-371443cc45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=60 2000w",
  },
  {
    id: 2,
    titels: "اقامت با کیفیت تر با هزینه کمتر",
    icons: <MdOutlineHomeWork className="w-[14px] text-[18px] text-blue-600" />,
    imgs: "https://images.unsplash.com/photo-1635108201018-94bbbfac4a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    titels: "تسویه با میزبان پس از تحویل اقامتگاه",
    icons: (
      <IoPricetagsOutline className="w-[14px] text-[18px] text-blue-600" />
    ),
    imgs: "https://images.unsplash.com/photo-1568605115459-4b731184f961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Junglebj = () => {
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
        className="text-center relative right-[-3px] w-[106%] h-[275px]"
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

export default Junglebj;
