import PoolItems from "./poolItems";

const PoolContext = () => {
  return (
    <section className="w-full mt-[10px] h-[229px] m-auto">
      <div className="w-[101%] relative right-[13px]  m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[16px]">
              <h2 className="font-bold text-[18px] text-black  relative bottom-[5px]">
              اقامتگاه های استخردار
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[14px] font-[900px] relative top-[13px]">
              جذاب ترین و بهترین ویلا های استخر دار رامسر
              </span>
            </div>
          </div>


          <div className="flex w-[108%] items-center justify-between overflow-scroll mt-[10px] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <PoolItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolContext;
