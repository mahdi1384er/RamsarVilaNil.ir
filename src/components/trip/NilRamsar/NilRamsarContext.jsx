import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NilRamsarContexts = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("http://localhost:3000/Article")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section>
        <div className="w-[100%] m-auto flex items-center flex-col">
          <div className="flex  flex-col w-full pr-2">
            <div className="text-center m-auto">
              <p className="font-bold text-black text-[17px] border-solid pb-[5px] w-[300px] border-blue-600 border-b-[3px] rounded-[10px]">
                با رامسر باما با خیال راحت ویلاتو رزرو کن!
              </p>
            </div>
          </div>

          <Swiper
            className="wiper  flex items-center justify-center m-auto container w-[100%] testimonials__container  h-[370px]"
            // install Swiper modules
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            navigation={false}
            centeredSlides={true}
            spaceBetween={90}
            width={459}
            slidesPerView={1}

          >
            {data.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="ml-[250px] pl-[105px] pr-[10px] testimonials"
                >
                  <div className="mr-[65px] w-[100%] h-[290px] shadow-lg border-solid border-[1px] text-[#818181] mt-[30px] rounded-[10px] flex flex-col ">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center mt-[4px]">
                          <div className="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative top-[1px]"></div>
                          <div>
                            <span className="text-[15px] text-black font-bold pr-[6px]">
                              بهترین زمان سفر به بهشت ایران رامسر
                            </span>
                          </div>
                          <div className="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative right-[4px] top-[1px]"></div>
                        </div>
                        <div className="m-[9px]">
                          <span>
                              سفر تو خون ما ایرانیهاست و معمولا بهترین خاطرات
                            عمرمون در سفرهامون رقم می خوره، به خصوص اگر سفری
                            خانوادگی یا در جمع دوستان بهتر از جان باشه.
                          </span>
                        </div>
                      </div>
                      <div>
                        <img src="../../../../public/img/97.svg" alt="" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between relative bottom-[10px]  w-[95%] pr-[13px]">
                      <div className=" flex justify-center p-[1px] w-[20px] h-[20px] rounded-full bg-blue-600">
                        <span className="text-white">{item.id}</span>
                      </div>
                      <div className="flex justify-center items-center p-[1px] w-[50px] h-[16px]  rounded-full bg-blue-600 float-left">
                        <span className="text-white text-[10px]">رامسر نیل</span>
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

export default NilRamsarContexts;
