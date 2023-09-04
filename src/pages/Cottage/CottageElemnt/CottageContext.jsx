import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoHeartCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const CottageContext = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("http://localhost:3000/luxury")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <Swiper
          centeredSlides={true}
          autoplay={false}
          className="swiper-wrapper3"
          // spaceBetween={12}
          width={225}
          slidesPerView={1.8}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[404px] h-[176px] relative left-[365px]"
              >
                <NavLink
                  to={{ pathname: item.path, search: `/${item.title}/` }}
                >
                  <div>
                    <div className="m-[10px] flex items-center  w-[404px] h-[217px]">
                      <div className="rounded-[15px] h-[200px]">
                        <div className="flex items-center justify-between w-[172px] relative top-[32px] right-[7px]">
                          <div className="bg-white rounded-xl w-[46px] h-[15px] text-center flex items-center justify-center">
                            <span className="text-[9px] text-[#0373F3]">
                              {item.description}
                            </span>
                          </div>
                          <div>
                            <IoHeartCircleSharp className="text-[#0373F3] w-[22px] h-[19px]" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-[187px] h-[126px]">
                          <img
                            src={item.src}
                            alt=""
                            className="w-[320px] h-[107px] rounded-[8px]"
                          />
                        </div>

                        <div className="flex items-center justify-between relative bottom-[14px] right-[4px]">
                          <div className="mt-[24px]">
                            <div>
                              <p className="text-[#333333]  text-[11px] relative bottom-[14px]">
                                {item.title}
                              </p>
                            </div>
                            <div className="flex items-center relative w-[108px] justify-between bottom-[14px]">
                              <div>
                                <p className="text-[#41413f]  text-[8px] ">
                                  {item.author}
                                </p>
                              </div>
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 1024 1024"
                                  className="text-[#F7B701] w-[11px] "
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    )
  );
};

export default CottageContext;
