import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Excellent from "./Excellent";
import { NavLink } from "react-router-dom";
import Blogs1 from "./blogs";

const ExcellentItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/bestItem/bestItem"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <Swiper
          centeredSlides={true}
          autoplay={false}
          className="swiper-wrapper2"
          spaceBetween={30}
          width={180}
          slidesPerView={1.8}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[90px] h-[176px] relative left-[185px]"
              >
                <NavLink
                  to={{ pathname: item.path, search: `/${item.title}/` }}
                >
                  <div>
                    <div className="m-[10px] flex items-center  mt-[59px] w-[166px] h-[217px]">
                      <div className="rounded-[15px]">
                        <div className="flex items-center justify-between w-[142px] h-[166px]">
                          <img
                            src={item.img}
                            alt=""
                            className="w-[142px] h-[187px] rounded-[12px]"
                          />
                        </div>

                        <div className="flex items-center justify-between relative bottom-[43px] right-[8px]">
                          <div className="imgsBackGround flex flex-col ">
                            <div className="mt-[24px]">
                              <div>
                                <p className="color-white text-center text-[15px] relative bottom-[14px]">
                                  {item.title}
                                </p>
                              </div>
                              <div>
                                <p className="color-white text-center text-[11px] relative bottom-[14px]">
                                  {item.author}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <NavLink
                          to={{pathname: "/rooms"}}
                        >
                          <div className="relative right-[340px] bottom-[120px]">
                            <h2 className="text-[20px] text-black">
                              موارد بیشتر
                            </h2>
                          </div>
                        </NavLink>
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

export default ExcellentItems;
