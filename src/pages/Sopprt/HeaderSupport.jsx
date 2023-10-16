import "../../css/index.css";
import NavBarsScrool from "../../components/navbars/NavBars";
import Supportbg from "./supportbg";

const HeaderSupport = () => {
  return (
    <section>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
          ارتباط با ما
        </span>
      </div>
      <header className="bg-fixed bg-contain overflow-auto  h-[251px] w-[103%] m-auto mt-[23px]  relative right-[9px] rounded-[9px]">
        <div className="w-[100%] h-full m-auto rounded-[10px]">
          <Supportbg />
          <NavBarsScrool />

          <div className="flex items-center flex-col justify-center mt-0 relative top-[-170px]">
            <div>
              <h2 className="text-[20px] text-white ">
              پشتیبانی ۲۴ ساعته رامسرباما
              </h2>
            </div>
            <div>
              <span class="aboust text-white text-[15px] relative top-[18px] backdrop-blur-2xl">
                رامسر باما اولین وب سایت رسمی اجاره ویلا و کلبه در رامسر
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HeaderSupport;
