// import { RiStarSmileLine } from "react-icons/ri";
// import imgsstar from "../../../../public/img/star.svg";
// import imgsclock from "../../../../public/img/clocl.svg";


const Accommodations = () => {
  return (
    <>
      <section className="w-[96%] mt-[0] m-auto h-[446px]  relative bottom-[-230px]">
        <div className="w-[96%] flec flex-col  pb-[22px] m-auto">
          <div className="flex items-center p-[3px]  justify-between w-[97%] m-auto rounded-[5px] border-[1px] border-solid border-gray-400">
            <div>
              <span>
                {/* <img src={imgsstar} className="w-[40px]" alt="" /> */}
              </span>
            </div>
            <div className="flex flex-col pr-[10px]">
              <div>
                <span className="font-bold text-black text-[15px]">
                  اقامتگاه های ممتاز
                </span>
              </div>
              <div>
                <span className="text-[13px]">
                  اقامتگاهی باکیفیت با میزبانی مهمان نواز که اقامتی شایسته را
                  برایتان تضمین می‌کند.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-[3px] justify-between mt-[16px] w-[97%] m-auto rounded-[5px] border-[1px] border-solid border-gray-400">
            <div>
              <span>
                {/* <img src={imgsclock} className="w-[40px]" alt="" /> */}
              </span>
            </div>
            <div className="flex flex-col pr-[10px]">
              <div>
                <span className="font-bold text-black text-[15px]">
                  رزرو فوری
                </span>
              </div>
              <div>
                <span className="text-[13px]">
                  در این روزها رزرو در یک مرحله و بدون نیاز به تایید میزبان قطعی
                  می شود.
                </span>
              </div>
            </div>
          </div>
        </div>
      <div className="w-[100%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[0px]"></div>
      </section>
    </>
  );
};

export default Accommodations;
