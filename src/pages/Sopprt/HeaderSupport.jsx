import "../../css/index.css";
import NavBarsScrool from "../../components/navbars/NavBars";

const HeaderSupport = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[18px] font-bold text-center text-black z-[1000]">
          ارتباط با ما
        </span>
      </div>
      <header className="Headerhosts  bg-fixed bg-contain overflow-auto  h-[219px] w-[96%] m-auto mt-[23px]">
        <div class="text-center">
          <span class="aboust text-white text-[17px] relative top-[60px] h-[160px] backdrop-blur-2xl">
            رامسر باما اولین وب سایت رسمی اجاره ویلا و کلبه در رامسر
          </span>
        </div>
        <div className="w-[94%] h-[178px] m-auto">
          <NavBarsScrool />
        </div>
      </header>
    </>
  );
};

export default HeaderSupport;
