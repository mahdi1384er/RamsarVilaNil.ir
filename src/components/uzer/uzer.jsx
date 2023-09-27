import { FaRegCommentDots } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Uzer = () => {
  const [data, setdata] = useState([]);

  return (
    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/uzerweb/uzer")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <section className="w-full h-[129px] m-auto mt-[59px]">
          <div className="w-[98%] m-auto">
            <div className="m-[14px] mr-[0] text-center flex items-center justify-center">
              <span class="w-[100px] text-center flex justify-center items-center text-[17px] text-black font-bold border-b-[3px] rounded-[10px] bottom-[20px] border-blue-600">
                نظر کاربران
              </span>
            </div>

            <Swiper
              className="container testimonials__container h-[300px] "
              spaceBetween={-26}
              slidesPerView={1}
            
            >
              {data.map((item , index) => {
                return (
                  <>
                    <SwiperSlide
                      key={index}
                      className="pl-[-25px] pr-[10px] testimonials"
                    >
                      <div className="w-[100%] mt-[40px] h-[210px] rounded-[8px] flex flex-col items-center mr-[50px]">
                        <div className="w-[369px] h-[221px] rounded-[8px] mt-[10px] bg-white border-solid border-[1px] border-gray-200 shadow-xl">
                          <div className="">
                            <img
                              src={item.imgs}
                              alt=""
                              className="rounded-[100%] w-[50px] h-[50px] relative bottom-[26px] right-[160px]"
                            />
                          </div>
                          <div className="flec flex-col items-center justify-center pr-[4px] pl-[4px]">
                            <div className="flec items-center flex-col text-center relative bottom-[30px]">
                              <div className="text-center">
                                <div className="bgs relative right-[127px] top-[22px]">
                                  <FaRegCommentDots className="text-[15px] text-white" />
                                </div>
                              </div>
                              <div>
                                <span className="text-[15px] text-black">
                                  {item.name}
                                </span>
                              </div>
                              <div className="relative top-[4px]">
                                <span className="text-[12px]">
                                  {item.titel}
                                </span>
                              </div>
                            </div>
                            <div className="relative bottom-[10px] w-[97%] m-auto">
                              <div>
                                <span>
                                  {item.about}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </section>
      </>
    )
  );
};

export default Uzer;
