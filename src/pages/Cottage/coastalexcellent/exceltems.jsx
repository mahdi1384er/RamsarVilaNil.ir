import CottageContext from "../CottageElemnt/CottageContext";

const Cottages = () => {
  return (
    <section className="w-full mt-[10px] h-[229px] m-auto">
      <div className="w-[95%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[16px]">
              <h2 className="font-bold text-[15px] text-black  relative bottom-[5px]">
              اقامتگاه های محبوب سوئیسی 
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
              جذاب ترین و بهترین کلبه های محبوب رامسر
              </span>
            </div>
          </div>


          <div className="flex items-center justify-between overflow-scroll mt-[0] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <CottageContext />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cottages;
