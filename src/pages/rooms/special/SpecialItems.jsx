import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rate } from "rsuite";

const SpecialItems = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("http://localhost:3000/specialRooms")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section>
        <div className="w-[100%] m-auto flex items-center flex-col">
          <div className="flex  flex-col w-full pr-2">
            <div>
              <p className="font-bold text-black text-[19px]">
                ویلاهای پرطرفدار رامسر نیل
              </p>
            </div>
            <div>
              <p className="text-[#575757] text-[13px]">
                رزرو تجربه و مقاصد پرطرفدار ویلاهای رامسر{" "}
              </p>
            </div>
          </div>

          <Swiper
            className="container testimonials__container h-[266px] "
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            spaceBetween={-100}
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
                  <div className="mr-[50px] w-[89%] h-[190px] shadow-lg border-solid border-[1px] text-[#818181] mt-[30px] rounded-[10px] flex justify-between items-center ">
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
                            <span className="text-[17px] font-bold text-black">
                            {item.title}
                            </span>
                          </div>
                          <div>
                            <Rate
                              readOnly
                              defaultValue={5}
                              allowHalf
                              className="text-[18px] h-[20px] w-[100px] mb-[5px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-[36px]">
                        <div className="relative top-[14px]">
                          <span>{item.author}</span>
                        </div>
                        <div className="flex items-center justify-around w-[120px] float-left mt-[25px]">
                          <div className="flex items-center w-[60px]  justify-around">
                            <div>
                              <img
                                src="../../../../public/img/l3.png"
                                alt=""
                                class="w-[18px] h-[18px] mt-[3px]"
                              />
                            </div>
                            <div>
                              <span>رامسر</span>
                            </div>
                          </div>
                          <div >
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
