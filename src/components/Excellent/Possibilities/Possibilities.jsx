import { FaSwimmingPool } from "react-icons/fa";
import {
  MdOutlineBathroom,
  MdOutlineSevereCold,
  MdOutlineTableBar,
} from "react-icons/md";
import { PiTelevision, PiArmchair } from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import { BiBath, BiBed } from "react-icons/bi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuParkingSquare } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";
import { AiOutlineUserSwitch, AiOutlineWifi } from "react-icons/ai";
import { LiaFirstAidSolid, LiaConciergeBellSolid } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";
import { Panel, Placeholder } from "rsuite";
import {
  GiPoolTableCorner,
  GiWaterBottle,
  GiVacuumCleaner,
} from "react-icons/gi";
import { MdOutlineSanitizer } from "react-icons/md";

const Possibilities = ({ author, data }) => {
  return (
    <>
      <section className="w-[97%] mt-[20px] m-auto">
        <div className="shadoboxRomms flex flex-col w-[101%] p-[9px] rounded-[7px]">
          <div>
            <span className="text-[17px] font-bold text-black">امکانات</span>
          </div>
          <div className="flex h-[276px] justify-around w-[102%] relative left-[12px] ">
            <div className="flex flex-wrap mt-[2px] w-[100%] h-[69px] justify-around">
              <div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">استخر</span>
                  </div>
                  <div>
                    <FaSwimmingPool className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">حمام</span>
                  </div>
                  <div>
                    <MdOutlineBathroom className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">تلوزیون</span>
                  </div>
                  <div>
                    <PiTelevision className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">جکوزی</span>
                  </div>
                  <div>
                    <BiBath className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">تخت</span>
                  </div>
                  <div>
                    <BiBed className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">یخچال</span>
                  </div>
                  <div>
                    <CgSmartHomeRefrigerator className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-gray-400">
                  <div>
                    <div className="border-solid border-[1px] w-[153%] border-gray-400 relative top-[12px]"></div>
                    <span className="text-[14px]">اینترنت</span>
                  </div>
                  <div>
                    <AiOutlineWifi className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-[2px] w-[100%] h-[69px] justify-around">
              <div>
                <div className="mt-[14px] flex w-[97%] items-center justify-between text-black">
                  <div>
                    <span className="text-[14px]">وسیال آشپزخانه</span>
                  </div>
                  <div>
                    <FaKitchenSet className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex w-[95%] items-center justify-between text-black">
                  <div>
                    <span className="text-[14px]">سرایدار , نگهبان</span>
                  </div>
                  <div>
                    <AiOutlineUserSwitch className="text-[20px]" />
                  </div>
                </div>
                <div className="text-black mt-[14px] flex w-[102%] items-center justify-between ">
                  <div>
                    <span className="text-[14px]">سیستم سرمایشی</span>
                  </div>
                  <div>
                    <MdOutlineSevereCold className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex w-[98%] items-center justify-between text-black">
                  <div>
                    <span className="text-[14px]">کمک های اولیه</span>
                  </div>
                  <div>
                    <LiaFirstAidSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex w-[87%] items-center justify-between text-black">
                  <div>
                    <span className="text-[14px]">میز غذا خوری</span>
                  </div>
                  <div>
                    <MdOutlineTableBar className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex w-[52%] items-center justify-between text-black">
                  <div>
                    <span className="text-[14px]">پارکینگ</span>
                  </div>
                  <div>
                    <LuParkingSquare />
                  </div>
                </div>
                <div className="text-gray-400 mt-[14px] flex w-[66%] items-center justify-between ">
                  <div>
                    <div className="border-solid border-[1px] w-[145%] border-gray-400 relative top-[12px]"></div>
                    <span className="text-[14px]">تلفن ثابت</span>
                  </div>
                  <div>
                    <BsTelephone className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-[2px] w-[100%] h-[69px] justify-around">
              <div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">مبلمان</span>
                  </div>
                  <div>
                    <PiArmchair className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">بیلیارد</span>
                  </div>
                  <div>
                    <GiPoolTableCorner className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">جاروبرقی</span>
                  </div>
                  <div>
                    <GiVacuumCleaner className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[104%] justify-between text-black">
                  <div>
                    <span className="text-[14px]">آب لوله کشی</span>
                  </div>
                  <div>
                    <GiWaterBottle className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[45%] justify-between text-black">
                  <div>
                    <span className="text-[14px]">اتو</span>
                  </div>
                  <div>
                    <TbIroning3 className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[60px] justify-between text-black">
                  <div>
                    <span className="text-[14px]">بهداشتی</span>
                  </div>
                  <div>
                    <MdOutlineSanitizer className="text-[20px]" />
                  </div>
                </div>
                <div className="mt-[14px] flex items-center w-[100%] justify-between text-gray-400">
                  <div>
                    <div className="border-solid border-[1px] w-[145%] border-gray-400 relative top-[12px]"></div>
                    <span className="text-[14px]">سرور غذا</span>
                  </div>
                  <div>
                    <LiaConciergeBellSolid className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[20px]"></div>
        <div className="flex items-center mt-[10px] w-[90%] m-auto text-center h-[50px] justify-between">
          <div className="">
            <span className="text-[16px] font-bold text-black">{data}</span>
          </div>
          <div>
            <span className="text-[16px] font-bold text-blue-600 ">
              {author}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Possibilities;
