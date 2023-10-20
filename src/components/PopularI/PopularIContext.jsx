import PopularItems from "./PopularItems";

const PopularIContext = () => {
  return (
    <section className="w-[100%] mt-[20px] m-auto relative right-[15px]">
      <div className="w-[100%]   m-auto  ">
        <div className="flex flex-col">
          <div className="">
            <h2 className="font-bold text-[18px] text-black h-[30px] relative left-[0]">
              مقاصد پر طرفدار در رامسر
            </h2>
          </div>

          <div className="flex w-[109%] items-center justify-between overflow-scroll mt-[7px] relative left-[9px] ">
              <PopularItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularIContext;
