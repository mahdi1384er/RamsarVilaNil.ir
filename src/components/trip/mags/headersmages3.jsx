import MagssHaders3 from "./MagssHaders3";
import MagssHadersbg from "./MagssHadersbg";
import NavBarsScrool from "../../navbars/NavBars";
import Footer from '../../Footer/Footer'
const Headersmages3 = () => {
  return (
    <>
      <div className="flex w-[110%] items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
         درباره رامسر باما
        </span>
      </div>
      <header className="bg-fixed h-[296px] bg-contain overflow-auto  w-[108%] rounded-[11px] m-auto mt-[16px]">
        <div className="w-[100%] relative right-[8px] h-full m-auto">
          <MagssHadersbg/>
          <div className="text-center relative bottom-[71px] left-[4px]">
            <span className="aboust text-white text-[15px] relative top-[100px] backdrop-blur-2xl">
              رامسر باما اولین وب سایت رسمی اجاره ویلا و کلبه در رامسر 
            </span>
          </div>
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <MagssHaders3 />
      <Footer/>
    </>
  );
};

export default Headersmages3;
