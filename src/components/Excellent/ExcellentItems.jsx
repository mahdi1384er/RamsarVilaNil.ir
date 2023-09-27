import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Excellent from "./Excellent";
import { NavLink } from "react-router-dom";
import Blogs1 from "./blogs";
import { BsCaretLeftFill } from "react-icons/bs";

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
          spaceBetween={70}
          height={300}
          width={190}
          slidesPerView={1.7}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[90px] h-[196px] relative left-[185px]"
              >
                <NavLink
                  to={{ pathname: item.path, search: `/${item.title}/` }}
                >
                  <div>
                    <div className="m-[10px] flex items-center  mt-[49px] w-[166px] h-[280px]">
                      <div className="rounded-[15px]">
                        <div className="flex items-center justify-between w-[172px] h-[198px]">
                          <img
                            src={item.img}
                            alt=""
                            className="w-[172px] h-[228px] rounded-[12px]"
                          />
                        </div>

                        <div className="flex items-center justify-between relative bottom-[43px] right-[8px]">
                          <div className="imgsBackGround flex flex-col ">
                            <div className="mt-[24px]">
                              <div>
                                <p className="color-white text-center text-[17px] relative bottom-[18px]">
                                  {item.title}
                                </p>
                              </div>
                              <div>
                                <p className="color-white text-center text-[13px] relative bottom-[16px]">
                                  {item.author}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <NavLink to={{ pathname: "/rooms" }}>
                          <div className="relative right-[577px] bottom-[120px]">
                            <div className="flex items-center  w-[100px] bg-slate-200 rounded-[9px]">
                              <div>
                                <h2 className="text-[19px] text-black w-[70%]">
                                  موارد بیشتر
                                </h2>
                              </div>
                              <div>
                                <BsCaretLeftFill className="text-black text-[30px]" />
                              </div>
                            </div>
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
