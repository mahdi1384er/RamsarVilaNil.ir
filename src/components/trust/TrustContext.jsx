import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const TrustContext = () => {
  const [data, setdata] = useState([]);

  return (
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/TrustData/TrustData"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section className="flex w-[106%] items-center justify-start">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          className="swiper-wrapper2"
          width={199}
          slidesPerView={1.3}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-evenly w-[220px] h-[64px] rounded-[10px] border-solid border-[1px] border-gray-400 ml-[30px] mr-[46px]">
                  <div>
                    <img
                      src={item.imgs}
                      data-swiper-autoplay="2000"
                      className="w-[33px] h-[34px]"
                      alt=""
                    />
         
                  </div>
                  <div className="flex  justify-around flex-col">
                    <div>
                      <p className="text-[15px] text-[#272727]">{item.titel}</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-[#5f5f5f]">
                        {item.titels}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    )
  );
};

export default TrustContext;
