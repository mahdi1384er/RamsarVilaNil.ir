import { React, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import DrawerPlacement from "../../navbars/Drawer";
import NilRamsarItemss from "../../../pages/Cottage/NilRamsar/NilRamsarItems";

const SectionMages = () => {
  const [data, setdata] = useState([]);

  return (
    useEffect(() => {
      axios
        .get(
          "https://my-json-server.typicode.com/mahdi1384er/bgDatas/imgsDataBG"
        )
        .then((res) => setdata(res.data))
        .catch((eror) => console.log(eror));
    }),
    (
      <>
        <section className="m-auto mt-[12px] w-[107%] relative right-[5px] h-[5111px] rounded-[8px] p-2 shadow-xl border-1 border-solid border-gray-300 ">
          <div className="flex flex-col ">
            <div>
              <span className="text-[17px] font-bold text-[#141414]">
                ییلاقات رامسر , دمی آسودن در آغوش امن طبیعت
              </span>
            </div>
            <div className="text-justify mt-[10px]">
              <span className="leading-[26px] text-[16px]">
                بدون شک یکی از محبوب‌ترین و زیباترین شهرهای شمالی ایران، شهر
                رامسره. موقعیت این شهر و یه جورایی مرکزیت اون در نوار شمالی کشور
                و همینطور جاذبه‌های طبیعی بی‌شمارش باعث شده تا گردشگران و
                طبیعت‌دوستان زیادی از سراسر ایران سفر به رامسر و دیدن زیبایی‌هاش
                رو در برنامه سفر خودشون قرار بدن. ییلاقات رامسر هم در این بین
                طرفداران زیادی داره که در این مقاله سفربازی به چند ییلاق باصفا و
                مشهور این شهر می‌پردازیم و اونا رو بهتون معرفی می‌کنیم. با{" "}
                <span className="text-[#105fb9]">رامسر باما</span> همراه ما
                باشین.
              </span>
            </div>
          </div>

          {data.map((ite, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col  mt-[40px]">
                  <div>
                    <div className="mb-[10px] flex items-center">
                      <div class="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative top-[1px]"></div>
                      <div>
                        <span className="text-[17px] font-bold text-[#141414] mr-[4px] pr-[2px]">
                          {ite.titels}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src={ite.imgs}
                          className="w-[100%] rounded-[7px]"
                          alt=""
                        />
                        <div class="flex items-center justify-between w-[60px] relative top-[-30px] float-left left-[9px]">
                          <div class="bg-white rounded-xl w-[80px] h-[20px] text-center flex items-center justify-center">
                            <span class="text-[12px] text-[#0373F3]">
                              رامسر باما
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <div className="text-justify">
                      <span className="text-[16px] text-black">{ite.span}</span>
                    </div>
                    <br />
                    <div className="text-justify text-[16px]">
                      <span className="leading-[26px]">{ite.about}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="m-auto flex items-center justify-center text-center">
            <NavLink to={{ pathname: "/rooms", search: "" }}>
              <div class="m-auto flex items-center justify-center">
                <div class="p-[4px] w-[152px] h-[35px] text-white flex items-center justify-center rounded-[5px] bg-[#0373F3]">
                  رزرو اقامتگاه های رامسر
                </div>
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col  mt-[20px]">
            <div className="mt-[0px]">
              <div className="text-justify">
                <span className="text-[16px] text-black">حرف آخر…</span>
              </div>
              <br />
              <div className="text-justify text-[16px] leading-[26px]">
                <span className="leading-[26px] ">
                  سفر به دامان آرامش‌بخش طبیعت، تجربه‌ای ناب برای بسیاری از
                  افراده که تا همیشه در ذهن و دل‌شون موندگار می‌شه. قطعا ما با
                  مسئولیت‌پذیری‌مون در مقابل مادر زمین و طبیعت بی‌نظیرش باید
                  قدردان حس‌های خوبی که بهمون می‌ده، باشیم.
                </span>
                <br />
                <span>
                  یادمون باشه در سفر به ییلاقات رامسر مثل بقیه اماکن طبیعی،
                  مراقب مظاهر طبیعت باشیم. زباله‌ای برجا نذاریم، سروصدای بی‌جهت
                  به راه نندازیم و در هر مکانی آتیش روشن نکنیم و وقتی محل
                  توقف‌مون رو ترک می‌کنیم از به جا نموندن زباله و خاموش شدن
                  آتیش، مطمئن بشیم.
                </span>
                <span>
                  مناظر کوهستان، چشمه‌های فراوون با آب گوارا، دشت‌های سرسبز و
                  یخچال‌های طبیعی تنها گوشه‌ای از زیبایی‌های ییلاق لپاسر محسوب
                  می‌شه.
                  <br />
                  <br />
                  در نهایت <span className="text-[#105fb9]">
                    رامسر باما
                  </span>{" "}
                  سفر خوشی را برای شما آرزومند است.
                </span>
              </div>
            </div>
          </div>

          <div className="w-[90%]">
            <NilRamsarItemss />
          </div>
          <DrawerPlacement />
        </section>
      </>
    )
  );
};

export default SectionMages;
