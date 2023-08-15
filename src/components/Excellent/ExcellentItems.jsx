import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ExcellentItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("http://localhost:3000/bestItem")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <Swiper
          centeredSlides={true}
          autoplay={false}
          className="swiper-wrapper2"
          spaceBetween={-90}
          slidesPerView={3}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="w-[80px] h-[176px] relative left-[165px]"
              >
                <div>
                  <div className="m-[10px] flex items-center  w-[166px] h-[217px]">
                    <div className="rounded-[15px]">
                      <div className="flex items-center justify-between w-[120px] h-[166px]">
                        <img
                          src={item.src}
                          alt=""
                          className="w-[104px] h-[150px] rounded-[12px]"
                        />
                      </div>

                      <div className="flex items-center justify-between relative bottom-[43px] right-[8px]">
                        <div className="imgsBackGround flex flex-col ">
                          <div className="mt-[24px]">
                            <div>
                              <p className="color-white text-center text-[11px] relative bottom-[14px]">
                                {item.title}
                              </p>
                            </div>
                            <div>
                              <p className="color-white text-center text-[8px] relative bottom-[14px]">
                                {item.author}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    )
  );
};

export default ExcellentItems;
