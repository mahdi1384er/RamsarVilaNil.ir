import PopularItems from "./PopularItems";

const PopularIContext = () => {
  return (
    <section className="w-full mt-[20px] m-auto">
      <div className="w-[93%]   m-auto">
        <div className="flex flex-col">
          <div>
            <h2 className="font-bold text-[17px] text-black h-[30px] relative left-[2px]">
              مقاصد پر طرفدار در رامسر
            </h2>
          </div>

          <div className="flex items-center justify-between overflow-scroll mt-[7px] ml-[-16px] mr-[-33px]">
              <PopularItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularIContext;
