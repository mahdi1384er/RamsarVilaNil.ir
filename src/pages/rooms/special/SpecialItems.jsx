import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rate } from "rsuite";
import { IoLocationOutline } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const SpecialItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/specialRooms/specialRooms"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section className="">
        <div className="w-[103%] m-auto flex items-center flex-col">
          <div className="flex  flex-col w-full pr-2">
            <div>
              <p className="font-bold text-black text-[19px]">
                ویلاهای پرطرفدار رامسرباما
              </p>
            </div>
            <div>
              <p className="text-[#575757] text-[14px]">
                رزرو تجربه و مقاصد پرطرفدار ویلاهای رامسر
              </p>
            </div>
          </div>

          <Swiper
            className="container testimonials__container h-[266px] "
            // install Swiper modules
            // modules={[Pagination, Autoplay]}
            spaceBetween={-80}
            slidesPerView={0.9}
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 4200,
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
                    to={{ pathname: item.path, search: `/${item.title}/` }}
                  >
                    <div className="mr-[50px] w-[96%] h-[190px] shadow-lg border-solid border-[1px] text-[#818181] mt-[30px] rounded-[10px] flex justify-between items-center ">
                      <div className="w-[53%]">
                        <div className="flex items-center justify-center">
                          <img
                            src={item.src}
                            alt=""
                            className="w-[84%] h-[174px] rounded-[5px]"
                          />
                        </div>
                      </div>
                      <div className="w-[60%] h-[80%]">
                        <div>
                          <div>
                            <div>
                              <span className="text-[15px] font-bold text-black">
                                {item.title}
                              </span>
                            </div>
                            <div className="relative left-[10px] top-[2px]">
                              <Rate
                                readOnly
                                defaultValue={5}
                                allowHalf
                                className="text-[18px] h-[20px] w-[100px] mb-[5px]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="relative top-[14px]">
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center justify-between w-[100%] float-left mt-[54px] ml-[5px]">
                            <div className="flex items-center w-[60px]  justify-around">
                              <div>
                                <div class="bg-white rounded-xl pl-[1px] w-[73px] h-[21px] text-center flex items-center justify-evenly">
                                  <span>
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 256 256"
                                      class="w-[16px] text-blue-600"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M173.57,117.77a6,6,0,0,1-3.34,7.8L137.5,138.66l19.3,25.74a6,6,0,0,1-9.6,7.2L128,146l-19.2,25.6a6,6,0,1,1-9.6-7.2l19.3-25.74L85.77,125.57a6,6,0,0,1,4.46-11.14L122,127.14V96a6,6,0,0,1,12,0v31.14l31.77-12.71A6,6,0,0,1,173.57,117.77ZM222,56v58.77c0,88.25-74.68,117.52-89.65,122.49a13.5,13.5,0,0,1-8.7,0C108.68,232.31,34,203,34,114.79V56A14,14,0,0,1,48,42H208A14,14,0,0,1,222,56Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v58.77c0,80,67.84,106.59,81.43,111.1a1.57,1.57,0,0,0,1.13,0c13.6-4.51,81.44-31.09,81.44-111.1Z"></path>
                                    </svg>
                                  </span>
                                  <span class="text-[10px] text-[#0373F3]">
                                    {item.description}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div>
                                  <span>رامسر</span>
                                </div>
                                <div>
                                  <HiLocationMarker className="w-[23px] h-[20px] text-blue-600" />
                                </div>
                              </div>
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  class="text-[#0373F3] w-[32px] h-[29px]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.69 252.82c-8.5 10.36-39.69 38.48-74.69 63.51-35-25-66.19-53.15-74.69-63.51-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 22 0 37.3 12.41 46.19 22.76l2.27 2.75 2.27-2.75C267 180.29 282.42 168 304.46 168c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49z"></path>
                                </svg>
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
        </div>
      </section>
    )
  );
};

export default SpecialItems;
