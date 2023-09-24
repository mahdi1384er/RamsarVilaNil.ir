import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoHeartCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { PiLightningBold, PiStarFour } from "react-icons/pi";
import { PiShieldStarLight } from "react-icons/pi";


const ReservationItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/booking/booking")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
    <>
        <Swiper
          centeredSlides={true}
          autoplay={false}
          className="swiper-wrapper3"
          spaceBetween={130}
          width={130}
          slidesPerView={1.1}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[404px] h-[186px] relative left-[365px]"
              >
                <NavLink
                  to={{ pathname: item.path, search: `/${item.title}/` }}
                >
                  <div>
                    <div className="m-[7px] flex items-center  w-[404px] h-[227px] mr-[50px]">
                      <div className="rounded-[15px] h-[243px]">
                        <div className="flex items-center justify-between w-[90%] relative top-[44px] right-[7px]">
                          <div className="flec flex-col  w-[100px] h-[40px] justify-between">
                            <div className="bg-white rounded-xl pl-[1px] w-[73px] h-[21px] text-center flex items-center justify-evenly">
                              <span>
                                <PiShieldStarLight className="w-[16px] text-blue-600" />
                              </span>
                              <span className="text-[10px] text-[#0373F3]">
                                {item.description}
                              </span>
                            </div>
                            <div className="bg-white pl-[4px] rounded-xl w-[73px] h-[21px] text-center flex items-center justify-evenly mt-[7px]">
                              <span>
                                <PiStarFour className="w-[16px] text-blue-600" />
                              </span>
                              <span className="text-[10px] text-[#0373F3]">
                                {item.description2}
                              </span>
                            </div>
                          </div>
                          <div>
                            <IoHeartCircleSharp className="text-[#0373F3] w-[30px] h-[27px]" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-[265px] h-[161px]">
                          <img
                            src={item.img}
                            alt=""
                            className="w-[260px] h-[161px] rounded-[8px]"
                          />
                        </div>

                        <div className="flex items-center justify-between relative bottom-[9px] right-[4px]">
                          <div className="mt-[24px]">
                            <div>
                              <p className="text-[#333333]  text-[14px] relative bottom-[14px]">
                                {item.title}
                              </p>
                            </div>
                            <div className="flex items-center relative w-[148px] justify-between bottom-[14px]">
                              <div>
                                <p className="text-[#41413f]  text-[11px] ">
                                  {item.authors}
                                </p>
                              </div>
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 1024 1024"
                                  className="text-[#F7B701] w-[14px] "
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

export default ReservationItems;
