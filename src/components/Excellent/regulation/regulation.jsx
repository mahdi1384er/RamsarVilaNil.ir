import { LiaClock } from "react-icons/lia";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";

const Regulation = () => {
  return (
    <>
      <section className="w-[96%] mt-[-19px] m-auto relative right-[5px] mb-[125px] h-[239px]">
        <div>
          <div className="shadoboxRomms h-[337px] w-[99%] p-[11px] rounded-[7px] flex flex-col flex-wrap">
            <div>
              <span className="text-[17px] font-bold text-black">
                مقررات اقامتگاه
              </span>
            </div>
            <div className="flex items-center w-[101%] justify-between relative top-[10px]">
              <div className="border-solid w-[114px] border-[1.2px] border-gray-300 p-[6px] h-[56px] rounded-[10px]">
                <div className="flex items-center">
                  <div>
                    <span>
                      <LiaClock />
                    </span>
                  </div>
                  <div>
                    <span>ساعت ورود از</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-[15px] text-black font-bold">
                    3 ظهر تا 12 شب
                  </span>
                </div>
              </div>
              <div className="border-solid w-[114px] border-[1.2px] border-gray-300 p-[6px] h-[56px] rounded-[10px]">
                <div className="flex items-center">
                  <div>
                    <span>
                      <LiaClock />
                    </span>
                  </div>
                  <div>
                    <span>ساعت خروج تا</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-[15px] text-black font-bold">
                    12 ظهر
                  </span>
                </div>
              </div>
              <div className="border-solid w-[114px] border-[1.2px] border-gray-300 p-[6px] h-[56px] rounded-[10px]">
                <div className="flex items-center">
                  <div>
                    <span>
                      <AiOutlineIdcard />
                    </span>
                  </div>
                  <div>
                    <span>مدارک مورد نیاز</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-[15px] text-black font-bold">
                   کارت شناسایی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  mt-[14px] w-[77%] h-[67px] justify-between relative">
              <div className="flex flex-col ">
                <div className="flex mt-[11px]  w-[123%]">
                  <div className="relative">
                    <BsFillCircleFill className="text-blue-600 w-[7px] relative top-[5px]" />
                  </div>
                  <span className="text-[15px] text-black relative right-[6px]">
                    برگذاری جشن ممنوع
                  </span>
                </div>
                <div className="flex mt-[8px] w-[123%]">
                <div className="relative">
                    <BsFillCircleFill className="text-blue-600 w-[7px] relative top-[5px]" />
                  </div>
                  <span className="text-[15px] text-black relative right-[6px]">
                  همراه داشتن حیوان خانگی ممنوع است.
                  </span>
                </div>
                <div className="flex mt-[8px] w-[123%]">
                <div className="relative">
                    <BsFillCircleFill className="text-blue-600 w-[7px] relative top-[5px]" />
                  </div>
                  <span className="text-[15px] text-black relative right-[6px]">
                  استعمال دخانیات (سیگار، قلیان و ...) در داخل اقامتگاه ممنوع است.
                  </span>
                </div>
                <div className="flex mt-[8px] w-[123%]">
                <div className="relative">
                    <BsFillCircleFill className="text-blue-600 w-[7px] relative top-[5px]" />
                  </div>
                  <span className="text-[15px] text-black relative right-[6px]">
                  در محوطه محفظه ای جهت نگه داری حیوانات خانگی طراحی شده است لذا ورود حیوانات خانگی به داخل ویلا ممنوع می باشد.
                  </span>
                </div>
            
                <div className="flex mt-[8px] w-[123%]">
                <div className="relative">
                    <BsFillCircleFill className="text-blue-600 w-[7px] relative top-[5px]" />
                  </div>
                  <span className="text-[15px] text-black relative right-[6px]">
                  ارائه مدرک محرمیت و کارت ملی هوشمند الزامیست.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[170px]"></div>
        </div>
      </section>
    </>
  );
};

export default Regulation;
