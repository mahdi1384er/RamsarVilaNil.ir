import CoastalItems from "./CoastalItems";

const CoastalContext = () => {
  return (
    <section className="w-full mt-[10px] h-[229px] m-auto">
      <div className="w-[101%] relative right-[13px]  m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[16px]">
              <h2 className="font-bold text-[15px] text-black  relative bottom-[5px]">
              اقامتگاه های ویلا ساحلی
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
              اجاره ویلا ساحلی، اقامتی خاطره انگیز، پر از انرژی و لبخند و شادی
              </span>
            </div>
          </div>


          <div className="flex items-center justify-between overflow-scroll mt-[0] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <CoastalItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoastalContext;
