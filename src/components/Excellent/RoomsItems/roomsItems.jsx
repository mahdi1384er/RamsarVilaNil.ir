import { LiaBedSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineMeetingRoom } from "react-icons/md";

const RoomsItems = ({ bed1, bed2 }) => {
  return (
    <>
      <section className="w-[101%] relative right-[3px] mt-[10px] m-auto">
        <div>
          <div className="shadoboxRomms w-[99%] p-[5px] rounded-[7px] flex  flex-col  h-[127px]">
            <div className="relative right-[5px] w-[88%]">
              <span className="text-[17px] font-bold text-black">
                فضای خواب
              </span>
              <span className="font-bold pr-[6px]">2 خواب</span>
            </div>
            <div className="flex flex-wrap  justify-between mt-[14px] w-[100%] h-[67px]">
              <div className="shadoboxRomms w-[110px]  h-[63px] rounded-[6px]  flex items-center  flex-col-reverse  justify-around">
                <div>
                  <span className="text-[#323232] text-[13px] font-bold">
                    {bed1}
                  </span>
                </div>
                <div>
                  <IoBedOutline className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="shadoboxRomms w-[110px] h-[63px] rounded-[6px]  flex items-center flex-col-reverse  justify-around">
                <div>
                  <span className="text-[#323232] text-[13px] font-bold">
                    {bed2}
                  </span>
                </div>
                <div>
                  <LiaBedSolid className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="shadoboxRomms w-[110px] h-[63px] rounded-[6px]  flex items-center  flex-col-reverse justify-around">
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
          <div className="w-[100%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[14px]"></div>
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
