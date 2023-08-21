import img from "../../../public/img/6.svg";
import imgs from "../../../public/img/8.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [data, setdata] = useState([]);

  return (
    useEffect(() => {
      axios
        .get("http://localhost:3000/search")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <section className="w-full mt-[120px] h-[347px] m-auto bg-[#D9D9D9]">
        <div className="w-[95%]  p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between m-auto">
            <div className="">
              <span className="text-[10px] font-bold ml-[5px]">
                جهت ارتباط با ما
              </span>
            </div>
            <div>
              <div className="flex items-center">
                <div className="p-[3px] rounded-[4px] bg-[#f0f0f0] text-[#000] text-[9px]">
                  <a href="tel:09300616152">تلفن ضروری : ۰۹۳۰۰۶۱۶۱۵۲</a>
                </div>
                <div className="mr-[4px]">
                  <div className="p-[3px] rounded-[4px] bg-[#f0f0f0] text-[#000] text-[9px]">
                    <a href="tel:01155215255">تماس با ما : ۵۵۲۱۵۲۵۵</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] items-center justify-center m-auto mt-[20px] max-sm:flex max-sm:flex-initial">
            <div className="text-center">
              <span className="text-[12px] font-bold">
                با خیال راحت به رامسر نیل اعتماد کنید{" "}
              </span>
            </div>
            <div className="flex items-center w-[120px] justify-between mt-[10px]">
              <div>
                <img src={img} className="w-[50px]" alt="" />
              </div>
              <div>
                <img src={imgs} className="w-[50px]" alt="" />
              </div>
            </div>
            <div className="mt-[23px]">
              <div>
                <span className="text-[12px] font-bold">باما همراه شوید</span>
                <div className="mt-[8px]">
                  <div className="instagram w-[70px] h-[23px] p-[4px] rounded-[6px] flex items-center justify-around">
                    <div>
                      <span className="text-[12px] text-white">20k</span>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/ramsar_vila_nil">
                        <AiOutlineInstagram className="text-[18px] text-white " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] items-center justify-center m-auto mt-[20px]">
            <div>
              <span className="text-[12px] font-bold text-center">
                جستجوی سریع
              </span>
            </div>
            <div className="mt-[8px] flex items-center flex-wrap w-[300px]">
              {data.map((item, index) => {
                return (
                  <div>
                    <div
                      key={index}
                      class="p-[3px] rounded-[4px] bg-[#f0f0f0] text-[#000] text-[9px] mr-[6px] mt-[4px]"
                    >
                      <span className="text-[8px] font-bold">{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full  bg-[#a1a1a1] mt-[10px] h-[23px] flex items-center justify-center">
          <div>
            <span className="text-[9px] text-[#ffffff]">
              تمامی حقوق برای رامسر نیل محفوظ می باشد.
            </span>
          </div>
        </div>
      </section>
    )
  );
};
export default Footer;
