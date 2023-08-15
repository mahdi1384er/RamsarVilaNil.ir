import ExcellentItems from "./ExcellentItems";

const ExcellentContext = () => {
  return (
    <section className="w-full mt-[40px] m-auto h-[222px]">
      <div className="w-[95%]   m-auto">
        <div className="flex flex-col">
          <div>
            <div className="h-[20px]">
              <h2 className="font-bold">اقامتگاه های ممتاز</h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px]">
                گلچینی از اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی ﺑﺎکیفیت ﺑﺎ میزبانهای مهمان نواز
              </span>
            </div>
          </div>

          <div className="sizeItemsBox flex items-center justify-between overflow-scroll mt-2 relative bottom-[30px] ">
            <ExcellentItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellentContext;
