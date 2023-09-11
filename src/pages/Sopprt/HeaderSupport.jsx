import "../../css/index.css";
import NavBarsScrool from "../../components/navbars/NavBars";

const HeaderSupport = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
          ارتباط با ما
        </span>
      </div>
      <header className="Headerhosts  bg-fixed bg-contain overflow-auto  h-[170px] w-[96%] m-auto mt-[23px]">
        <div class="text-center">
          <span class="aboust text-white text-[15px] relative top-[70px] backdrop-blur-2xl">
            رامسر باما اولین وب سایت رسمی اجاره ویلا و کلبه در رامسر
          </span>
        </div>
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool />
        </div>
      </header>
    </>
  );
};

export default HeaderSupport;
