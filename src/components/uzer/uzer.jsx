import { FaRegCommentDots } from "react-icons/fa";

import Slider from "react-slick";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Uzer = () => {
  const [data, setdata] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 0.9,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };
      
  return (

    useEffect(() => {
      axios
        .get("https://my-json-server.typicode.com/mahdi1384er/uzerweb/uzer")
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <section className="w-full relative h-[319px] m-auto mt-[59px]">
          <div className="w-[100%] m-auto">
            <div className="m-0 text-center flex items-center justify-center relative right-[13px]">
              <span class="w-[100px] relative right-[6px] text-center flex justify-center items-center text-[17px] text-black font-bold border-b-[3px] rounded-[10px] bottom-[0px] border-blue-600">
                نظر کاربران
              </span>
            </div>

            <Slider {...settings} className="text-center relative right-[-25px] w-[111%]">
              {data.map((item, index) => {
                return (
                  <>
                    <div className="text-center  w-[100%]  mt-[40px] h-[210px] rounded-[8px] flex flex-col items-center ">
                      <div className="text-center w-[359px] mr-[180px] h-[221px] rounded-[8px] mt-[10px] bg-white border-solid border-[1px] border-gray-200 shadow-xl">
                        <div className="text-center m-auto w-full flex items-center justify-center">
                          <img
                            src={item.imgs}
                            alt="l"
                            className="rounded-[100%] w-[50px] h-[50px] relative bottom-[26px]"
                          />
                        </div>
                        <div className="flec flex-col items-center justify-center pr-[4px] pl-[4px]">
                          <div className="flex  w-[50%] m-auto items-center flex-col text-center relative bottom-[39px] ">
                            <div className="text-center w-[100%] h-[50px] flex items-center flex-col justify-between">
                              <div className="bgs relative float-right left-[30px] top-[24px]">
                                <FaRegCommentDots className="text-[15px] text-white" />
                              </div>
                            <div>
                              <span className="text-[15px] text-black">
                                {item.name}
                              </span>
                            </div>
                            </div>
                            <div className="relative top-[4px]">
                              <span className="text-[12px]">{item.titel}</span>
                            </div>
                          </div>
                          <div className="relative bottom-[10px] w-[97%] m-auto">
                            <div className="relative bottom-[11px]">
                              <span>{item.about}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </section>
      </>
    )
  );
};

export default Uzer;
