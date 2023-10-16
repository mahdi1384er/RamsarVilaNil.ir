import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillCircleFill } from "react-icons/bs";

const Record = () => {
  const showToastMessage = () => {
    toast.success("به زودی به صفحه ثبت اقامتگاه وارد می شوید", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <section className="w-[100%] mt-[47px]  h-[64px] m-auto mb-[1021px]">
        <div className="w-[100%] m-auto pl-[4px] relative right-[12px]">
          <ToastContainer rtl />
          <div className="text-center ">
            <span className="text-[18px] pb-[5px] text-black font-bold border-b-[3px] rounded-[10px] bottom-[10px] border-blue-600">
              1- اقامتگاه خود را ثبت کنید
            </span>
          </div>
          <div className="m-auto w-[97%] h-[300px] bg-[#E6E6E6] rounded-[7px] mt-[30px] p-[9px]">
            <div>
              <div>
                <span className="text-black font-bold text-[17px]">
                  چگونه میتوانیم اقامتگاه خود را در اپلیکیشن رامسرباما ثبت کنیم
                  ؟
                </span>
              </div>
              <div className="flex mt-[15px]">
                <div className="relative top-[6px]">
                  <BsFillCircleFill className="text-blue-600 w-[7px]" />
                </div>
                <div className="pr-[5px] text-justify">
                  <span className="text-[16px] text-black text-justify">
                    برای ثبت اقامتگاه در رامسرباما ابتدا باید مدارک خود را به
                    شماره ''
                    <a
                      href="https://wa.me/09300616152/?text=urlencodedtext"
                      className="text-blue-500"
                    >
                      ۰۹۳۰۰۶۱۶۱۵۲
                    </a>
                    '' واتساب ارسال کرده و پس از تاید مالکیت, اطلاعات مربوطه
                    اقامتگاه خود را برایمان ارسال کنید.
                  </span>
                </div>
              </div>
              <div className="flex mt-[30px]">
                <div className="bg-blue-600 rounded-[100%] w-[13px] h-[6px] mt-[12px]"></div>
                <div className="pr-[5px] text-justify">
                  <span className="text-[16px] text-black ">
                    پس از طی مراحل مربوطه کارشناسان ما پس از تأید مدارک محرمیت
                    میزبان,اقامتگاه شما را در رامسر باما ثبت میکنند.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-[50px]">
            <span className="text-[17px] pb-[5px] text-black font-bold border-b-[3px] rounded-[10px]  bottom-[10px] border-blue-600">
              ۲- چگونه از دریافت رزرو خود با خبر شویم ؟
            </span>
          </div>
          <div className="m-auto w-[97%] h-[43  0px] bg-[#E6E6E6] rounded-[7px] mt-[30px] p-[9px]">
            <div>
              <div>
                <span className="text-black pb-[5px] font-bold text-[18px]">
                  چگونه میتوانیم اقامتگاه خود را در اپلیکیشن رامسر باما ثبت کنیم
                  ؟
                </span>
              </div>
              <div className="flex mt-[8px]">
                 <div className="relative top-[6px]">
                  <BsFillCircleFill className="text-blue-600 w-[7px]" />
                </div>
                <div className="pr-[5px]">
                  <span className="text-[16px]  text-black text-justify">
                    پس از درخواست رزرو اقامتگاه از سوی میهمان, کارشناسان ما برای
                    تأییدیه با شما تماس خواهند گرفت و درخواست رزرو مورد برسی
                    قرار میگیرد.
                  </span>
                </div>
              </div>
              <div className="flex mt-[20px]">
                <div className="relative top-[6px]">
                  <BsFillCircleFill className="text-blue-600 w-[7px]" />
                </div>
                <div className="pr-[5px] text-justify">
                  <span className="text-[16px] text-black ">
                    و در نهایت برای میزبانی بهتر شما در کنار اخلاق خوب و مثبت
                    اندیشی، توجه به نظافت اقامتگاه کلید موفقیت شماست. میزبانان
                    محبوب و موفق, تمام مکانها و فضاهایی که توسط میهمانان مورد
                    استفاده قرار می گیرد, همچون سرویس بهداشتی, آشپزخانه و اتاقها
                    را پس از تحویل گرفتن اقامتگاه از میهمان قبل و پیش از ورود
                    میهمان بعدی تمیز و مرتب کرده اقلام فردی و بهداشتی همچون
                    روتختی, روبالشی را تعویض نموده و اقلامی همچون دستمال کاغذی,
                    دستمال توالت ,مایع دستشوی را شارژ می کنند.
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center mt-[15px]">
              <span className="text-black text-[17px] font-bold text-center">
                :. برای میزبانی دکمه ثبت اقامتگاه زیر کلیک کنید .:
              </span>
            </div>
          </div>
          <div className="flex justify-center text-center mt-[40px] mb-[30px]">
            <button onClick={showToastMessage}>
              <div className="m-auto">
                <div className="p-[9px] w-[166px]  rounded-[5px] bg-[#0373F3] shadow-2xl shadow-blue-600  active:shadow-blue-700 active:text-white">
                  <a
                    href="https://wa.me/09300616152/?text=urlencodedtext"
                    className="text-white"
                  >
                    ثبت اقامتگاه
                  </a>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Record;
