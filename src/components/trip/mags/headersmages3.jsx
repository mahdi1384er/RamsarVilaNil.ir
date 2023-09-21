import NavBarsScrool from "./NavBarsJungle";
import MagssHaders3 from "./MagssHaders3";

// import Alders from "./aler";
import Footress from "./Footre";

const Headersmages3 = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
         درباره رامسر باما
        </span>
      </div>
      <header className="MagesageHeaderss    bg-fixed bg-contain overflow-auto  h-[194px] w-[96%] m-auto mt-[10px]">
        <div className="w-[94%] h-full m-auto">
          <div className="text-center">
            <span className="aboust text-white text-[15px] relative top-[100px] backdrop-blur-2xl">
              رامسر باما اولین وب سایت رسمی اجاره ویلا و کلبه در رامسر 
            </span>
          </div>
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <MagssHaders3 />
      <Footress/>
    </>
  );
};

export default Headersmages3;
