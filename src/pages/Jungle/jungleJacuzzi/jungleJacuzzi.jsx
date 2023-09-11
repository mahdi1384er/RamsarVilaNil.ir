import JungleJacuzziItems from "./jungleJacuzziItems";

const jungleJacuzzi = () => {
  return (
    <section className="w-full mt-[10px] h-[229px] m-auto">
      <div className="w-[95%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[16px]">
              <h2 className="font-bold text-[15px] text-black  relative bottom-[5px]">
              اقامتگاه های جنگلی ویو دار 
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
             اجاره بهترین ویلا های ویو دار در رامسر
              </span>
            </div>
          </div>


          <div className="flex items-center justify-between overflow-scroll mt-[8px] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <JungleJacuzziItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default jungleJacuzzi;
