import { LiaBedSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineMeetingRoom } from "react-icons/md";

const RoomsItems = ({ bed1, bed2 }) => {
  return (
    <>
      <section className="w-full mt-[20px] m-auto">
        <div>
          <div className="flex  flex-col">
            <div>
              <span className="text-[17px] font-bold text-black">
                فضای خواب
              </span>
              <span className="font-bold pr-[6px]">2 خواب</span>
            </div>
            <div className="flex flex-wrap justify-between mt-[14px] w-[93%] h-[67px]">
              <div className="w-[110px] h-[30px] rounded-[6px] bg-gray-300 flex items-center justify-around">
                <div>
                  <span className="text-[#323232] text-[13px] font-bold">
                    {bed1}
                  </span>
                </div>
                <div>
                  <IoBedOutline className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="w-[110px] h-[30px] rounded-[6px] bg-gray-300 flex items-center justify-around">
                <div>
                  <span className="text-[#323232] text-[13px] font-bold">
                    {bed2}
                  </span>
                </div>
                <div>
                  <LiaBedSolid className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="w-[110px] h-[30px] rounded-[6px] bg-gray-300 flex items-center justify-around">
                <div>
                  <span className="text-[#323232] text-[13px] font-bold">
                    فضای مشترک
                  </span>
                </div>
                <div>
                  <MdOutlineMeetingRoom className="w-[25px] h-[25px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[5px]"></div>
        </div>
      </section>
    </>
  );
};

export default RoomsItems;

//   "imgsSlider": {
// "1" : "/img/90.jpg",
// "2": "/img/90.jpg"
//   },
