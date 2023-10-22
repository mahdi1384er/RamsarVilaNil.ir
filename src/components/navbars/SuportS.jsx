import NavbarsBlogs from "../Excellent/navbars/navbarsBlogs";
import { BiChevronLeft, BiSupport } from "react-icons/bi";
import { React, useState } from "react";
import Collapsible from "react-collapsible";
import { MdOutlineMail } from "react-icons/md";
import Suportdata from "./suportdata";
import { FaAngleDown } from "react-icons/fa6";
import { AiOutlineBell } from "react-icons/ai";
import OpenEmail from "./openEmeail";
import OpenCal from "./openCal";
import Opendata from "./opendata";

const SuportS = () => {
  return (
    <>
      <NavbarsBlogs />
      <section className="mt-[70px] w-[90%] m-auto">
        <div>
          <div className="flex items-center pt-[15px]">
            <div className="relative right-[-1px] bottom-[10px]">
              <div className="flex items-center">
                <a href="/" className="text-black text-[17px]">
                  رامسرباما
                </a>
                <BiChevronLeft className="text-[25px] text-black" />
                <span className="text-gr text-[18px]">پشتیبانی</span>
              </div>
            </div>
          </div>
          <div className=" w-[111%] relative left-[10px] p-2  rounded-[6px] ">
            <div>
              <div className="content w-[107%]">
                <div className="shadoboxRomms  flex items-center justify-between list-group list-group-flush  p-2 bg-[#ffff] rounded-[6px]">
                  <Suportdata title="چطور رزرو کنم ؟">
                    <p>
                      پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست
                      رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال
                      ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو
                      را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما
                      ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با
                      پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی
                      صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات
                      رزرو را دریافت کنید.
                    </p>
                  </Suportdata>
                  <div>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                </div>

                <div className="shadoboxRomms flex items-center justify-between mt-[15px] list-group list-group-flush  p-2 bg-[#ffff] rounded-[6px]">
                  <Suportdata title="چطور می‌توانم با رامسرباما تماس بگیرم؟">
                    <p>
                      پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست
                      رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال
                      ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو
                      را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما
                      ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با
                      پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی
                      صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات
                      رزرو را دریافت کنید.
                    </p>
                  </Suportdata>
                  <div>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                </div>

                <div className="shadoboxRomms flex items-center justify-between mt-[15px] list-group list-group-flush  p-2 bg-[#ffff] rounded-[6px]">
                  <Suportdata title="با رد یا لغو شدن درخواست رزرو چه می‌شود ؟">
                    <p>
                      زمانی که میزبان درخواست رزرو شما را رد کند، یک پیامک جهت
                      اطلاع دریافت می‌کنید و می‌توانید برای اقامتگاه دیگری
                      درخواست رزرو ثبت کنید. شما می‌توانید به‌صورت همزمان برای 2
                      اقامتگاه درخواست رزرو ارسال کنید.
                    </p>
                  </Suportdata>
                  <div>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto w-[118%]">
          <div className="flex items-center justify-around mt-[49px]">
            <div className="flex items-center pt-[13px] justify-center flex-col w-[40%] m-[4px] h-[60px] bg-white rounded-[6px] shadoboxRomms">
              <div>
                <MdOutlineMail className="text-[25px] text-blue-600" />
              </div>
              <div className="w-[60%]">
                <span className="text-[14px]">ارسال ایمیل</span>
                <div className="w-[100px]">
                  <OpenEmail />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-[40%] m-[4px] h-[60px] bg-white rounded-[6px] shadoboxRomms">
              <div className="h-[27px] w-[24px]">
                <BiSupport className="text-[25px] text-blue-600" />
                <div className="w-[100px]">
                  <OpenCal />
                </div>
              </div>
              <div>
                <span className="text-[14px]">تماس باما</span>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-[40%] m-[4px] h-[60px] bg-white rounded-[6px] shadoboxRomms">
              <div className="h-[28px]">
                <AiOutlineBell className="relative right-[33px] text-[25px] text-blue-600" />
                <div className="">
                  <Opendata />
                </div>
              </div>
              <div>
                <span className="text-[14px]">راهنما</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuportS;
