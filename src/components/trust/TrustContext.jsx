import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const TrustData = [
  {
    id: 1,
    titel: "رزرواسیون 24 ساعته",
    titels: "خدمات آنلاین در تمام روزهای هفته",
    imgs: "../../../public/img/logo1.svg",
  },
  {
    id: 2,
    titel: "کم هزینه و با کیفیت",
    titels: "اقامت با کیفیت تر با هزینه کمتر",
    imgs: "../../../public/img/logo2.svg",
  },
  {
    id: 3,
    titel: "ضمانت تحویل اقامتگاه",
    titels: "تسویه با میزبان پس از تحویل اقامتگاه",
    imgs: "../../../public/img/logo3.svg",
  },
  ,
  {
    id: 4,
    titel: "رزرو در لحظه آخری",
    titels: "رزرو اقامتگاه ها در حساس ترین لحظات",
    imgs: "../../../public/img/logo44.svg",
  },
];

const TrustContext = () => {
  return (
    useEffect(() => {
      axios
        .get("https://elegant-yak-tux.cyclic.app/Article")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section className="flex items-center justify-start">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          className="swiper-wrapper2"
          width={370}
          slidesPerView={2.6}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {TrustData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-evenly w-[220px] h-[48px] rounded-[10px] border-solid border-[1px] border-gray-400 ml-[10px] mr-[0px]">
                  <img
                    src={item.imgs}
                    data-swiper-autoplay="2000"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="text-[15px] text-[#272727]">{item.titel}</p>
                  <p className="text-[15px] text-[#272727]">{item.titel}</p>
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
