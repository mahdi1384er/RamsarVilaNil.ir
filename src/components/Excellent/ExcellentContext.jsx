import ExcellentItems from "./ExcellentItems";

const ExcellentContext = () => {
  return (
    <section className="w-[99%] relative right-[8px] mt-[29px] m-auto h-[232px]">
      <div className="w-[100%]   m-auto">
        <div className="flex flex-col">
          <div className="relative right-[7px] bottom-[-1px]">
            <div className="h-[20px]">
              <h2 className="font-bold text-[18px] text-black  relative bottom-[5px]">
                اقامتگاه های ممتاز
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[15px] font-[900px] relative top-[13px]">
                گلچینی از اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی ﺑﺎکیفیت ﺑﺎ میزبانهای مهمان نواز
              </span>
            </div>
          </div>

          <div className="sizeItemsBox flex items-center justify-between overflow-scroll mt-2 relative bottom-[26px] ">
            <ExcellentItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellentContext;
