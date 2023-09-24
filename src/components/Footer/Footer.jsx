import img from "../../../public/img/7002/6.svg";
import imgs from "../../../public/img/7002/8.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [data, setdata] = useState([]);

  // c7tvEpv/F1vbn|I2    p P qQ

  return (
    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/footer/search")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section className="w-full mt-[120px] h-[347px] m-auto bg-[#D9D9D9]">
        <div className="w-[100%]  p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between m-auto">
            <div className="">
              <span className="text-[15px] font-bold ml-[5px] text-black">
                جهت ارتباط با ما
              </span>
            </div>
            <div className="mr-[7px]">
              <div className="flex items-center flex-wrap justify-around">
                <div className="p-[3px] rounded-[4px] bg-[#f0f0f0]  text-[14px]">
                  <a href="tel:09300616152" className="text-[#080808]">
                    تلفن ضروری : ۰۹۳۰۰۶۱۶۱۵۲
                  </a>
                </div>
                <div className="mr-[2px]">
                  <div className="p-[3px] rounded-[4px] bg-[#f0f0f0]  text-[14px]">
                    <a href="tel:09379287791" className="text-[#080808]">
                      تماس با ما : ۰۹۳۷۹۲۸۷۷۹۱
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] items-center justify-center m-auto mt-[20px] max-sm:flex max-sm:flex-initial">
            <div className="text-center">
              <span className="text-[16px] font-bold text-black">
                با خیال راحت به رامسر نیل اعتماد کنید{" "}
              </span>
            </div>
            <div className="flex items-center w-[120px] justify-between mt-[10px]">
              <div>
                <img src={img} className="w-[70px]" alt="" />
              </div>
              <div>
                <img src={imgs} className="w-[70px]" alt="" />
              </div>
            </div>
            <div className="mt-[23px]">
              <div>
                <span className="text-[16] font-bold text-black">
                  باما همراه شوید
                </span>
                <div className="mt-[8px]">
                  <a href="https://instagram.com/ramsar_vila_nil?igshid=OGQ5ZDc2ODk2ZA==">
                    <div className="instagram w-[70px] h-[23px] p-[4px] rounded-[6px] flex items-center justify-around">
                      <div>
                        <span className="text-[12px] text-white">20k</span>
                      </div>
                      <div>
                        <AiOutlineInstagram className="text-[18px] text-white " />
                      </div>
                    </div>
                  </a>
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

        <div className="w-full  bg-[#a1a1a1] mt-[8px] h-[36px] flex items-center justify-center">
          <div>
            <span className="text-[14px] text-[#ffffff]">
              تمامی حقوق برای رامسرباما محفوظ می باشد.
            </span>
          </div>
        </div>
      </section>
    )
  );
};
export default Footer;
