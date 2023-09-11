import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "../../css/index.css";

import { Pagination, Navigation } from "swiper/modules";

const Carousel = ({
  imgsSliders,
  imgsSliders2,
  imgsSliders3,
  imgsSliders4,
  imgsSliders5,
  imgsSliders6,
  imgsSliders7,
  imgsSliders8,
  imgsSliders9,
}) => (
  <div className="carousel  mt-[17px] mb-[8px]">
    <Swiper
      className="m-auto ml-0 w-[100%] h-[240px] rounded-[14px]  flex items-center justify-center"
      pagination={{
        dynamicBullets: true,
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      centeredSlides={true}
      autoplay={false}
      spaceBetween={200}
      width={459}
      slidesPerView={0.9}
    >
      <Swiper-wrapper>
        <SwiperSlide>
          <img
            src={imgsSliders2}
            alt=""
            className="w-[395px] h-[370px] relative bottom-[88px] left-[-90px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders3}
            alt=""
            className="w-[393px] h-[370px] relative bottom-[48px] left-[-50px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders4}
            alt=""
            className="w-[399px] h-[388px]  relative bottom-[148px] left-[-9px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders5}
            alt=""
            className="w-[393px] h-[388px] relative bottom-[148px] left-[31px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders6}
            alt=""
            className="w-[393px] h-[370px] relative bottom-[68px] left-[69px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders7}
            alt=""
            className="w-[399px] h-[370px] relative bottom-[128px] left-[119px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders8}
            alt=""
            className="w-[392px] h-[370px]  relative bottom-[128px] left-[149px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgsSliders9}
            alt=""
            className="w-[395px]  h-[370px] relative bottom-[128px] left-[194px]"
          />
        </SwiperSlide>
      </Swiper-wrapper>
    </Swiper>
  </div>
);

export default Carousel;
