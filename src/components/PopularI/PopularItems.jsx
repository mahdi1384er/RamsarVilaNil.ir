import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";

const PopularItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("http://localhost:3000/posts")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <Swiper
          centeredSlides={true}
          autoplay={false}
          className="mySwiper"
          width={200}
          slidesPerView={2}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="ter">
                  <div className="m-[10px] flex items-center w-[166px]">
                    <div className="rounded-[15px]">
                      <div className="flex items-center justify-between">
                        <img
                          src={item.src}
                          alt=""
                          className="w-[167px] h-[100px] rounded-[12px]"
                        />
                      </div>

                      <div className="flex items-center justify-between relative bottom-[63px] right-[8px]">
                        <div className="flex flex-col">
                          <div className="relative top-[10px]">
                            <h2 className="color-white text-[11px] ">{item.title}</h2>
                          </div>
                          <div className="relative  bottom-[4px] left-[2px]">
                            <p className="color-white text-[8px]  pr-[2px]">
                              {item.author}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center w-[26%] mt-[11px]">
                          <div>
                            <AiFillStar className="text-[#F7B701] w-[11px] " />
                          </div>
                          <div>
                            <span className="text-[10px] text-white">
                              {item.star}
                            </span>
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

export default PopularItems;
