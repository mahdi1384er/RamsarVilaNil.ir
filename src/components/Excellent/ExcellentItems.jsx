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
        .get("https://alert-pullover-toad.cyclic.cloud/bestItem")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <Swiper
          centeredSlides={true}
          autoplay={false}
          className="swiper-wrapper2"
          spaceBetween={4}
          width={170}
          slidesPerView={2.2}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[90px] h-[176px] relative left-[185px]"
              >

                <NavLink to={{ pathname: item.path, search: `/${item.title}/` }}>
                  <div>
                    <div className="m-[10px] flex items-center  w-[166px] h-[217px]">
                      <div className="rounded-[15px]">
                        <div className="flex items-center justify-between w-[120px] h-[166px]">
                          <img
                            src={item.img}
                            alt=""
                            className="w-[104px] h-[150px] rounded-[12px]"
                          />
                        </div>

                        <div className="flex items-center justify-between relative bottom-[43px] right-[8px]">
                          <div className="imgsBackGround flex flex-col ">
                            <div className="mt-[24px]">
                              <div>
                                <p className="color-white text-center text-[12px] relative bottom-[14px]">
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
