import JunglepoolItems from "./junglepoolItems";

const Junglepool = () => {
  return (
    <section className="w-full mt-[5px] h-[229px] m-auto">
      <div className="w-[101%] relative right-[13px]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[16px]">
              <h2 className="font-bold text-[17px] text-black  relative bottom-[5px]">
              اقامتگاه های جنگلی استخر دار
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
              جذاب ترین و بهترین ویلا های جنگلی استخر دار رامسر 
              </span>
            </div>
          </div>


          <div className="flex w-[108%] items-center justify-between overflow-scroll mt-[8px] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <JunglepoolItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Junglepool;
