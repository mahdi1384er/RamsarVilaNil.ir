import { AiOutlineInstagram } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";

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
      position: toast.POSITION.TOP_RIGHT,
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
      <footer className="w-[89%] mt-[10px] h-[350px] m-auto bg-[#D9D9D9]">
        <div className="w-[113%] relative left-[23px] bg-[#D9D9D9] p-2 flex flex-col justify-between">
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
            <div className="mt-[23px]">
              <div>
                <span className="text-[16px] font-bold text-black">
                  باما همراه شوید
                </span>
                <div className="mt-[8px] mr-[3px]">
                  <button onClick={showToastMessage2}>
                    <IconButton>
                      <a href="https://instagram.com/ramsar_bama_com?igshid=MzMyNGUyNmU2YQ==">
                        <div className="instagram w-[90px] h-[33px] p-[4px] rounded-[6px] flex items-center justify-around">
                          <div className="mt-[3px]">
                            <span className="text-[14px] text-white ">20k</span>
                          </div>
                          <div>
                            <AiOutlineInstagram className="text-[22px] text-white " />
                          </div>
                        </div>
                      </a>
                    </IconButton>
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

        <div className="w-[114%]  bg-[#a1a1a1] h-[39px] relative left-[22px] flex items-center justify-center mt-[0px]">
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
