import PopularItems from "./PopularItems";

const PopularIContext = () => {
  return (
    <section className="w-full mt-[20px] m-auto">
      <div className="w-[95%]   m-auto">
        <div className="flex flex-col">
          <div>
            <h2 className="font-bold">مقاصد پر طرفدار در رامسر</h2>
          </div>

          <div className="flex items-center justify-between overflow-scroll mt-[0] ml-[-8px] mr-[-8px]">
            <PopularItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularIContext;
