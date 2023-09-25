import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  return (
    <>
      <section className="w-full mt-[28px]  h-[0] m-auto mb-[390px]">
        <div className="w-[95%] m-auto">
          <div className="flex items-center">
            <div className="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative top-[1px]"></div>
            <div>
              <span className="text-[17px] text-black font-bold pr-[6px]">
                برای ارتباط با ما کافیه به شماره های زیر واتساب یا تماس بگیرید :
              </span>
            </div>
          </div>

          <div className="mt-[17px] m-auto   w-[96%] h-[90px] flex items-center flex-wrap justify-around ">
            <div className="flex items-center w-[50%] justify-evenly">
              <div className="pb-[4px] ">
                <span className="text-[17px] text-black"> تلفن اداره: </span>
              </div>
              <div>
                <button onClick={showToastMessage}>
                  <a href="tel:01155215255" className="text-[16px]">
                    011-55215255
                  </a>
                </button>
              </div>
            </div>

            <div className="flex items-center w-[50%] justify-evenly">
              <div className="pb-[4px]">
                <span className="text-[17px] text-black">بهرامی: </span>
              </div>
              <div>
                <button onClick={showToastMessage}>
                  <a href="tel:09300616152">09300616152</a>
                </button>
              </div>
            </div>

            <div className="flex items-center w-[50%] justify-evenly">
              <div className="pb-[4px]">
                <span className="text-[17px] text-black"> ابراهیمی :</span>
              </div>
              <div>
                <button onClick={showToastMessage}>
                  <a href="tel:09112921952">009112921952</a>
                </button>
              </div>
            </div>
            <div className="flex items-center w-[50%] justify-evenly">
              <div className="pb-[4px]">
                <span className="text-[17px] text-black"> ایزک شیریان: </span>
              </div>
              <div>
                <button onClick={showToastMessage}>
                  <a href="tel:09379287791">09379287791</a>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <div className="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative top-[15px]"></div>
            <div className="mr-[5px]">
              <ToastContainer rtl />
              <span className="text-[17px] text-black font-bold pr-[6px]">
                با خیال راحت به رامسر باما اعتماد کنید :
              </span>
            </div>
            <div className="w-[160px]">
              <div className="">
                <button
                  onClick={showToastMessage2}
                  className="flex justify-between items-center mt-[20px] w-[200px] mr-[14px]"
                >
                  <div className="">
                    <img src="img/imgs/ins.svg" alt="" className="w-[40px]" />
                  </div>
                  <div>
                    <span className="text-[17px]">پیج اینستگرام ما : </span>
                    <a href="https://instagram.com/ramsar_vila_nil?igshid=OGQ5ZDc2ODk2ZA==">
                      Ramsar_bama_com
                    </a>
                  </div>
                </button>
              </div>
              <div className="flex items-center justify-center mt-[30px] ml-[20px]">
                <div>
                  <img src="/img/imgs/6.svg" alt="" className="w-[70px]" />
                </div>
                <div>
                  <img src="/img/imgs/8.svg" alt="" className="w-[70px]" />
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SupportItems;
