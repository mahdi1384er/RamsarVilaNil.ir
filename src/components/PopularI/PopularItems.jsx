import { React, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Populsr from "./Popul";
import { NavLink } from "react-router-dom";

const PopularItems = () => {
  const [data, setdata] = useState([]);

  const setDataUzer = (id) => {
    // console.log(id);
  };

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
                  <NavLink to={item.path}>
                    <Populsr
                      title={item.title}
                      src={item.src}
                      author={item.author}
                      key={index}
                      star={item.star}
                      SevedData={() => setDataUzer(item.id)}
                    />
                  </NavLink>
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
