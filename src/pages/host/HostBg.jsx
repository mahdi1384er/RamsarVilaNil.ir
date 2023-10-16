import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { MdOutlineHomeWork } from "react-icons/md";



import { Ri24HoursLine } from "react-icons/ri";

const HostBg = () => {
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
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/Hostbg/imgssuport"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <Slider
          {...settings}
          className="text-center relative right-[8px] w-[96%] h-[250px] rounded-[10px]"
        >
          {data.map((item) => {
            return (
              <div className="flex flex-col h-[70px]">
                <div>
                  <img src={item.imgs} alt="" className="w-full h-[251px] rounded-[14px]" />
                </div>
                <div className="flex items-center">
                  <div class="flec flex-col  w-[100px] h-[40px] justify-between relative bottom-[240px] left-[-10px]">
                    <div class="bg-white rounded-xl pl-[1px] w-[73px] h-[21px] text-center flex items-center justify-evenly">
                      <span class="text-[12px] text-[#0373F3]">رامسر باما</span>
                    </div>
                  </div>
                  <div class="flec flex-col w-[240px] h-[40px] justify-between relative bottom-[34px] left-[-42px]">
                    <div class="bg-white rounded-xl pl-[6px] w-[223px] h-[21px] text-center flex items-center justify-evenly p-[5px]">
                      <div className="flex items-center">
                        <div className="pl-[5px]">
                           <MdOutlineHomeWork className="text-[15px] text-blue-600"/>
                        </div>
                        <div>
                          <span class="text-[11px] text-[#0373F3] pl-[-3px]">
                            {item.titels}
                          </span>
                        </div>
                      </div>
                      <span class="text-[12px] text-[#0373F3]">
                        میزبانی رامسرباما برای اقامتگاه های ناب
                       
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    )
  );
};

export default HostBg;
