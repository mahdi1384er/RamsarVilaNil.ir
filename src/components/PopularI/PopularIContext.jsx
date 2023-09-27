import PopularItems from "./PopularItems";

const PopularIContext = () => {
  return (
    <section className="w-[99%] mt-[20px] m-auto">
      <div className="w-[95%]   m-auto mr-[19px] ">
        <div className="flex flex-col">
          <div>
            <h2 className="font-bold text-[18px] text-black h-[30px] relative left-[2px]">
              مقاصد پر طرفدار در رامسر
            </h2>
          </div>

          <div className="flex items-center justify-between overflow-scroll mt-[7px] ml-[-16px] mr-[-8px] ">
              <PopularItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularIContext;
