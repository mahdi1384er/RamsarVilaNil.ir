import { AiOutlineInstagram } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  const [data, setdata] = useState([]);
  // c7tvEpv/F1vbn|I2    p P qQ
  const showToastMessage = () => {
    toast.success("به زودی برای ارتباط باما به صفحه تماس وارد میشوید.", {
      position: toast.POSITION.TOP_RIGHT,
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
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/footerserch/search"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <footer className="w-[104%] mt-[150px] h-[350px] m-auto bg-[#D9D9D9]">
        <div className="w-[106%]  bg-[#D9D9D9] p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between m-auto">
            <div className="w-[40%]">
              <span className="text-[16px] font-bold ml-[5px] text-black">
                جهت ارتباط با ما :
              </span>
            </div>
            <div className="mr-[7px]">
              <div className="flex items-center  justify-around">
                <IconButton>
                  <div className="p-[3px] rounded-[4px] bg-[#f0f0f0]  text-[14px]">
                    <button onClick={showToastMessage}>
                      <a href="tel:09300616152" className="text-[#080808]">
                        تلفن ضروری : ۰۹۳۰۰۶۱۶۱۵۲
                      </a>
                    </button>
                  </div>
                </IconButton>
                <div className="mr-[2px]">
                  <IconButton>
                    <div className="p-[3px] rounded-[4px] bg-[#f0f0f0]  text-[14px]">
                      <button onClick={showToastMessage}>
                        <a href="tel:09379287791" className="text-[#080808]">
                          تماس با ما : ۰۹۳۷۹۲۸۷۷۹۱
                        </a>
                      </button>
                    </div>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] items-center justify-center m-auto mt-[20px] max-sm:flex max-sm:flex-initial">
            <div className="text-center">
              <span className="text-[16px] font-bold text-black">
                با خیال راحت به رامسرباما اعتماد کنید
              </span>
            </div>
            <div className="flex items-center w-[120px] justify-between mt-[10px]">
              {/* {data.map((item) => {
                return <img src={item.img} className="w-[120px] h-[60px]" alt="" />;
              })} */}
            </div>
            <div className="mt-[23px] relative right-[23px]">
              <div className="flex items-center flex-col ">
                <span className="text-[16px] font-bold text-black relative right-[-28px]">
                  باما همراه شوید
                </span>
                <div className="mt-[8px] mr-[3px] flex items-center flex-col">
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
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] items-center justify-center m-auto mt-[20px]">
            <div>
              <span className="text-[13px] font-bold text-center text-black">
                جستجوی سریع
              </span>
            </div>
            <div className="mt-[8px] flex items-center flex-wrap w-[300px]">
              {data.map((item, index) => {
                return (
                  <div>
                    <div
                      key={index}
                      class="p-[3px] rounded-[4px] bg-[#f0f0f0] text-[#000] text-[10px] mr-[6px] mt-[4px]"
                    >
                      <NavLink
                        to={{ pathname: item.path, search: `/${item.title}/` }}
                      >
                        <span className="text-[12px] font-bold">
                          {item.title}
                        </span>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[106%]  bg-[#a1a1a1] h-[39px] flex items-center justify-center mt-[0px]">
          <div>
            <span className="text-[14px] text-[#ffffff]">
              تمامی حقوق برای رامسرباما محفوظ می باشد.
            </span>
          </div>
        </div>
      </footer>
    )
  );
};
export default Footer;
