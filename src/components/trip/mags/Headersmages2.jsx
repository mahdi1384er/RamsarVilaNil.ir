import NavBarsScrool from "./NavBarsJungle";
import MagssHaders2 from "./MagssHaders2";

// import Alders from "./aler";
import Footress from "./footre";

const Headersmages2 = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
        مکان های دیدنی رامسر
        </span>
      </div>
      <header className="MagesageHeaders2    bg-fixed bg-contain overflow-auto  h-[194px] w-[96%] m-auto mt-[10px]">
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
