import ExcellentItems from "./ExcellentItems";

const ExcellentContext = () => {
  return (
    <section className="w-[96%] mt-[25px] m-auto h-[232px]">
      <div className="w-[96%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
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

          <div className="sizeItemsBox flex items-center justify-between overflow-scroll mt-2 ml-[28px] relative bottom-[-17px] ">
            <ExcellentItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellentContext;
