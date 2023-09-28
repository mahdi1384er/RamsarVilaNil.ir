import ReservationItems from "./ReservationItems";

const ReservationContext = () => {
  return (
    <section className="w-[92%] mt-[9px] h-[247px] m-auto">
      <div className="w-[100%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[20px]">
              <h2 className="font-bold text-[18px] text-black  relative bottom-[5px]">
                اقامتگاه های رزرو فوری
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
                رزرو فوری بدون نیاز به تایید میزبان
              </span>
            </div>
          </div>
          <div className="flex w-[113%] items-center justify-between overflow-scroll mt-[6px] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <ReservationItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationContext;
