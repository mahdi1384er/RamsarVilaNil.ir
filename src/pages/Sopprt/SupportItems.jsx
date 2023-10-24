import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillCircleFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";

const SupportItems = () => {
  const showToastMessage = () => {
    toast.success("به زودی برای ارتباط باما به صفحه تماس وارد میشوید.", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "light",
    });
  };

  const showToastMessage2 = () => {
    toast.success("به زودی به صفحه پیج اینستگرام رامسرباما وارد می شوید.", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "light",
    });
  };

  
  const showToastMessage3 = () => {
    toast.success("به زودی به صفحه کانال تلگرام رامسرباما وارد می شوید.", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "light",
    });
  };

  return (
    <>
      <section className="w-[100%] relative right-[7px] mt-[28px]  h-[0] m-auto mb-[390px]">
        <div className="w-[100%] m-auto relative right-[7px]">
          <div className="flex items-center">
            <div className="relative bottom-[11px]">
              <BsFillCircleFill className="text-blue-600 w-[8px]" />
            </div>
            <div>
              <span className="text-[17px] text-black font-bold pr-[6px]">
                برای ارتباط با ما کافیه به شماره های زیر واتساب یا تماس بگیرید :
              </span>
            </div>
          </div>

          <div className="mt-[17px] m-auto   w-[105%] h-[116px] flex  flex-wrap justify-between ">
            <div className="flex items-center  justify-evenly">
              <div className="pb-[4px] ">
                <span className="text-[17px] text-black"> تلفن اداره: </span>
              </div>
              <div className="pr-[4px]">
                <button onClick={showToastMessage}>
                  <a href="tel:01155215255" className="text-[16px]">
                    011-55215255
                  </a>
                </button>
              </div>
            </div>

            <div className="flex items-center  justify-evenly">
              <div className="pb-[4px] relative left-[37px]">
                <span className="text-[17px] text-black"> بهرامی: </span>
              </div>
              <div className="pr-[4px] relative left-[36px]">
                <button onClick={showToastMessage}>
                  <a href="tel:09300616152">09300616152</a>
                </button>
              </div>
            </div>

            <div className="flex items-center  justify-evenly">
              <div className="pb-[4px]">
                <span className="text-[17px] text-black"> ابراهیمی: </span>
              </div>
              <div className="pr-[4px]">
                <button onClick={showToastMessage}>
                  <a href="tel:09112921952">09112921952</a>
                </button>
              </div>
            </div>
            <div className="flex items-center  justify-evenly">
              <div className="pb-[4px]">
                <span className="text-[17px] text-black"> ایزک شیریان: </span>
              </div>
              <div className="pr-[4px]">
                <button onClick={showToastMessage}>
                  <a href="tel:09379287791">09379287791</a>
                </button>
              </div>
            </div>
            <div className="flex items-center  justify-evenly">
              <div className="pb-[4px]">
                <span className="text-[17px] text-black">سروش حدادی: </span>
              </div>
              <div className="pr-[4px]">
                <button onClick={showToastMessage}>
                  <a href="tel:09026800425">09026800425</a>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[12px]">
            <div className="relative top-[20px]">
              <BsFillCircleFill className="text-blue-600 w-[8px]" />
            </div>
            <div className="mr-[5px]">
              <ToastContainer rtl />
              <span className="text-[17px] text-black font-bold pr-[8px]">
                با ما همراه شوید
              </span>
            </div>
            <div className="w-[160px]">
              <div className="">
                <button
                  onClick={showToastMessage2}
                  className="flex justify-between items-center mt-[20px] w-[200px] mr-[14px]"
                >
                  <div className="w-[200px] flex items-center">
                    <div>
                      <a href="https://instagram.com/ramsar_vila_nil?igshid=OGQ5ZDc2ODk2ZA==">
                        <BsInstagram className="instgram pr-[38px]  w-[120px] h-[34px] rounded-[6px] text-white p-[3px]" />
                      </a>
                    </div>
                    <div className="relative left-[100px] text-white top-[2px] text-[15px]">
                      <span>20k</span>
                    </div>
                  </div>
                </button>
                <button
                  onClick={showToastMessage3}
                  className="flex justify-between items-center mt-[20px] w-[200px] mr-[14px]"
                >
                  <div className="w-[200px] flex items-center">
                    <div>
                      <a href="https://t.me/ramsarbama">
                        <LiaTelegramPlane className="talegram pr-[38px]  w-[120px] h-[34px] rounded-[6px] text-white p-[3px]" />
                      </a>
                    </div>
                    <div className="relative left-[100px] text-white top-[2px] text-[15px]">
                      <span>10k</span>
                    </div>
                  </div>

                </button>
              </div>
              <div className="mr-[5px] w-[300px] mt-[30px]">
                <ToastContainer rtl />
                <div className="flex items-center">
                  <div>
                    <div className="relative top-[20px]">
                      <BsFillCircleFill className="text-blue-600 w-[8px]" />
                    </div>
                    <div className="mr-[7px]">
                      <span className="text-[17px] text-black font-bold pr-[6px]">
                        با خیال راحت به رامسرباما اعتماد کنید.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[0px] ml-[20px]"></div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SupportItems;
