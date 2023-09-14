import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rate } from "rsuite";

const HostContext = () => {
  const [data, setdata] = useState([]);

  return (
    // * get data
    useEffect(() => {
      axios
        .get("https://elegant-yak-tux.cyclic.app/Article")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section>
        <div className="w-[100%] m-auto flex items-center flex-col">
          <div className="flex  flex-col w-full pr-2">
            <div className="text-center m-auto">
              <p className="font-bold text-black text-[17px] border-solid pb-[5px] w-[118px] border-blue-600 border-b-[3px] rounded-[10px]">
                مجله رامسر نیل
              </p>
            </div>
          </div>

          <Swiper
            className="container testimonials__container h-[300px] "
            // install Swiper modules
            spaceBetween={-126}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="pl-[35px] pr-[10px] testimonials"
                >
                  <div className="ItemsBg  mr-[50px] w-[80%] h-[190px] shadow-lg border-solid border-[1px] text-[#818181] mt-[30px] rounded-[10px] flex flex-col ">
                    <div class="bg-white rounded-xl relative bottom-[-6px] right-[8px] w-[46px] h-[15px] text-center flex items-center justify-center">
                      <span class="text-[9px] text-[#0373F3]">دانستنی ها</span>
                    </div>
                    <div>
                      <span className="text-[14px] text-white relative bottom-[-25px] right-[8px]">
                        خنک ترین شهرهای شمال برای تعطیلی چهارشنبه و پنجشنبه
                      </span>
                    </div>
                    <div className="flex items-center justify-evenly relative top-[100px] left-[17px]  bottom-[5px]">
                      <div className="flex items-center justify-between ">
                        <div>
                          <img src="../../../../public/img/logo.svg" alt="" className="w-[24px]"/>
                        </div>
                        <div>
                          <span className="text-white p-[6px]">حسین رضایی</span>
                        </div>
                      </div>
                      <div className="relative right-[23px] top-[4px]">
                        <Rate
                          max={5}
                          readOnly
                          defaultValue={3}
                          allowHalf
                          className="text-[16px] h-[20px] w-[100px] mb-[5px]"
                        />
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

export default HostContext;
