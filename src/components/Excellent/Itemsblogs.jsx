// import SliderImgs from "./sliderImgs";
import Carousel from "./sliderImgs";
import About from "./AboutItems/about";
import Capacity from "./CapacityItems/Capacity";
import RoomsItems from "./RoomsItems/roomsItems";
import Possibilities from "./Possibilities/Possibilities";
import Reserv from "./reserv/Reserv";

const Itemsblogs = ({
  TitelReserv,
  TitelAbout,
  StandardCapacity,
  Maximumcapacity,
  Meterage,
  residence,
  bed1,
  bed2,
  author,
  priecs,
  imgsSliders,
  imgsSliders2,
  imgsSliders3,
  imgsSliders4,
  imgsSliders5,
  imgsSliders6,
  imgsSliders7,
  imgsSliders8,
  imgsSliders9,
  data
}) => {
  return (
    <>
      <section className="w-full  h-[1027px] m-auto">
        <div className="containerItemsBlogs w-[100%] h-[700px] bg-[#f8f8f8]  m-auto relative bottom-[118px]">
          <div className="relative top-[30px] w-[95%] h-[660px] m-auto ">
            <div className="mb-[10px]">
              <span className="text-[17px] font-bold text-black">تصاویر</span>
            </div>
            <div>
              <Carousel
                imgsSliders={imgsSliders}
                imgsSliders2={imgsSliders2}
                imgsSliders3={imgsSliders3}
                imgsSliders4={imgsSliders4}
                imgsSliders5={imgsSliders5}
                imgsSliders6={imgsSliders6}
                imgsSliders7={imgsSliders7}
                imgsSliders8={imgsSliders8}
                imgsSliders9={imgsSliders9}
              />
            </div>
            <div className="mt-[30px]">
              <About TitelReserv={TitelReserv} TitelAbout={TitelAbout} />
              <Capacity
                StandardCapacity={StandardCapacity}
                Maximumcapacity={Maximumcapacity}
                Meterage={Meterage}
                residence={residence}
              />
              <RoomsItems bed1={bed1} bed2={bed2} />
              <Possibilities author={author} data={data}/>
              <Reserv priecs={priecs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Itemsblogs;
