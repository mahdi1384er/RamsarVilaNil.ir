import LKuxuryItems from "./luxuryItems";

const LuxuryContext = () => {
  return (
    <section className="w-[100%] h-[229px] m-auto mt-[11px]">
      <div className="w-[100%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[20px]">
              <h2 className="font-bold text-[17px] text-black  relative bottom-[5px]">
              ویلا های لوکس و مجلل
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
              ویلا های لوکس و زیبا برای خاض پسند ها
              </span>
            </div>
          </div>


          <div className="flex items-center justify-between overflow-scroll mt-[6px] ml-[-18px] mr-[-8px] relative bottom-[28px]">
            <LKuxuryItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryContext;
