const SupportItems = () => {
  return (
    <>
      <section className="w-full mt-[28px]  h-[0] m-auto mb-[390px]">
        <div className="w-[95%] m-auto">
          <div className="flex items-center">
            <div className="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative top-[1px]"></div>
            <div>
              <span className="text-[15px] text-black font-bold pr-[6px]">
                برای ارتباط با ما کافیه به شماره های زیر واتساب یا تماس بگیرید :
              </span>
            </div>
          </div>

          <div className="mt-[17px] m-auto  w-[96%] h-[90px] flex items-center flex-wrap justify-around ">
            <div className="flex items-center w-[175px] justify-evenly">
              <div className="pb-[4px]">
                <span> تلفن اداره: </span>
              </div>
              <div>
                <a href="tel:01155215255">011-55215255</a>
              </div>
            </div>

            <div className="flex items-center w-[175px] justify-evenly">
              <div className="pb-[4px]">
                <span>بهرامی: </span>
              </div>
              <div>
                <a href="tel:09300616152">09300616152</a>
              </div>
            </div>

            <div className="flex items-center w-[175px] justify-evenly">
              <div className="pb-[4px]">
                <span> ابراهیمی :</span>
              </div>
              <div>
                <a href="tel:09112921952">009112921952</a>
              </div>
            </div>
            <div className="flex items-center w-[175px] justify-evenly">
              <div className="pb-[4px]">
                <span> ایزک شیریان: </span>
              </div>
              <div>
                <a href="tel:09379287791">09379287791</a>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <div className="bg-blue-600 rounded-[100%] w-[6px] h-[6px] relative top-[15px]"></div>
            <div className="mr-[5px]">
              <span className="text-[15px] text-black font-bold pr-[6px]">
                با خیال راحت به رامسر باما اعتماد کنید :
              </span>
            </div>
            <div className="w-[230px]">
              <div className="flex justify-between items-center mt-[20px] mr-[14px]">
                <div className="mt-[2px]">
                  <img src="../../../public/img/ins.svg" alt="" />
                </div>
                <div>
                  <span>پیج اینستگرام ما :  </span>
                  <a href="https://instagram.com/ramsar_vila_nil?igshid=OGQ5ZDc2ODk2ZA==">
                    RamsarVilaNil
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[30px] ml-[20px]">
                <div>
                    <img src="../../../public/img/6.svg" alt="" className="w-[70px]" />
                </div>
                <div>
                    <img src="../../../public/img/8.svg" alt="" className="w-[70px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportItems;
