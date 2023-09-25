import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const TrustData = [
  {
    id: 1,
    titel: "پاسخگوی 24 ساعته رامسر باما",
    imgs: "../../../public/img/logo1.svg",
  },
  {
    id: 2,
    titel: "بهترین ویلاها در رامسر باما",
    imgs: "../../../public/img/logo2.svg",
  },
  {
    id: 3,
    titel: "ضمانت تحویل اقامتگاه",
    imgs: "../../../public/img/logo3.svg",
  },
  ,
  {
    id: 4,
    titel: "رزرو در لحظه آخری",
    imgs: "../../../public/img/logo44.svg",
  },
];

const DataContext = () => {
  return (
    <section className="flex items-center justify-start">
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        className="swiper-wrapper2"
        width={280}
        slidesPerView={2.2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {TrustData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-evenly w-[190px] bg-[#E4E4E4] h-[49px] rounded-[10px] border-solid border-[1px] border-gray-400 ml-[10px] mt-[30px] mr-[0px]">
                <img
                  src={item.imgs}
                  data-swiper-autoplay="2000"
                  className="w-[30px] h-[30px]"
                  alt=""
                />
                <p className="text-[13px] text-[#000e]">{item.titel}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default DataContext;
