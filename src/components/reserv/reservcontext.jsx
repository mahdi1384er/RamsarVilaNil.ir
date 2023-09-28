import RKuxuryItems from "./reserv";

const Reservcontext = () => {
  return (
    <section className="w-[92%] h-[229px] m-auto mt-[45px]">
      <div className="w-[100%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[20px]">
              <h2 className="font-bold text-[17px] text-black  relative bottom-[5px]">
                اقامتگاه های اقتصادی
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
              اقامتگاه‌هایی با کیفیت و نرخ مناسب
              </span>
            </div>
          </div>


          <div className="flex w-[112%] items-center justify-between overflow-scroll mt-[6px] ml-[-18px] mr-[-8px] relative bottom-[28px]">
            <RKuxuryItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservcontext;
