import CottageItems from "./CottageItems";

const CottageItemsData = () => {
  return (
    <section className="w-[96%] mt-[10px] h-[229px] m-auto">
      <div className="w-[103%] relative right-[13px]  m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[16px]">
              <h2 className="font-bold text-[15px] text-black  relative bottom-[5px]">
              اقامتگاه های استخردار سوئیسی
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
              جذاب ترین و بهترین کلبه های رامسر
              </span>
            </div>
          </div>

          <div className="flex w-[109%] items-center justify-between overflow-scroll mt-[8px] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <CottageItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottageItemsData;
