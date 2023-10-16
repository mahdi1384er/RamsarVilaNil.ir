import { MdOutlineHomeWork } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsDoorClosed } from "react-icons/bs";
import { GiThermometerScale } from "react-icons/gi";

const DataItem = () => {
  return (
    <>
      <section className="w-[106%] relative left-[8px] bg-[#ececec] m-auto mb-[24px] h-[81px]">
        <div className="flex items-center justify-around relative top-[11px]">
          <div className="flex items-center flex-col">
            <span className="text-[17px] mb-[5px] font-bold text-gray-800">
              <MdOutlineHomeWork className="text-[40px]" />
            </span>
            <span>
              <p className="text-gray-800">دربست</p>
            </span>
          </div>
          <div className="flex items-center flex-col">
            <span className="text-[17px] mb-[5px] font-bold text-gray-800">
              <FiUsers className="text-[40px]" />
            </span>
            <span>
              <p className="text-gray-800">تا 5 مهمان</p>
            </span>
          </div>
          <div className="flex items-center flex-col">
            <span className="text-[17px] mb-[5px] font-bold text-gray-800">
              <BsDoorClosed className="text-[40px]" />
            </span>
            <span>
              <p className="text-gray-800">1 اتاق‌خواب</p>
            </span>
          </div>
          <div className="flex items-center flex-col">
            <span className="text-[17px] mb-[5px] font-bold text-gray-800">
              <GiThermometerScale className="text-[40px]" />
            </span>
            <span>
              <p className="text-gray-800">100 متر</p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataItem;
