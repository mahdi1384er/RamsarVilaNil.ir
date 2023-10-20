import MagssHaders2 from "./MagssHaders2";
import NavBarsScrool from "../../navbars/NavBars";



// import Alders from "./aler";
import Footress from "./Footre";

const Headersmages2 = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
        مکان های دیدنی رامسر
        </span>
      </div>
      <header className="rounded-[11px] bg-fixed bg-contain overflow-auto relative right-[3px]  w-[108%] m-auto mt-[25px]">
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <MagssHaders2 />
      <Footress/>
    </>
  );
};

export default Headersmages2;
