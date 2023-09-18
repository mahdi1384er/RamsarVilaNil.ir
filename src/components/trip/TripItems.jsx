import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

const TripItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/Article/Article")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section>
        <div className="w-[100%] h-[359px] m-auto flex items-center flex-col">
          <div className="flex  flex-col w-full pr-2">
            <div>
              <p className="font-bold text-black text-[15px]">
                در سفر، تجربه کن
              </p>
            </div>
            <div>
              <p className="text-[#575757] text-[12px]">
                رزرو تجربه و گشت‌های یک روزه با راهنمای رامسر با ما
              </p>
            </div>
          </div>

          <Swiper
            className="container testimonials__container h-[300px] "
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={-126}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="pl-[35px] pr-[10px] testimonials"
                >
                  <NavLink
                    to={{ pathname: item.path, search: `${item.titels}` }}
                  >
                    <div className="mr-[50px] w-[83%] h-[232px] shadow-lg border-solid border-[1px] text-[#818181] mt-[30px] rounded-[10px] flex flex-col ">
                      <img
                        className="bgImgs w-full h-[70%]  rounded-[10px] "
                        src={item.src}
                      />
                      <div className="p-[5px]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[12px] text-black font-[600]">
                              {item.title}
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
                        <div className="flex items-center justify-between mt-[5px]">
                          <div>
                            <p className="text-black text-[12px] pt-[2px]">
                              {item.author}
                            </p>
                          </div>
                          <div>
                            <span className="text-[10px] text-black">
                              {item.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    )
  );
};

export default TripItems;
