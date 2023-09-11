import NavBarsScrool from "./NavBarsJungle";
import SectionMages from "./sectionMages";

// import Alders from "./aler";
import Footer from "../../Footer/Footer";


const MagseHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
          معرفی ییلاقات رامسر
        </span>
      </div>
      <header className="MagesageHeaders    bg-fixed bg-contain overflow-auto  h-[194px] w-[96%] m-auto mt-[10px]">
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <SectionMages />
      <Footer/>
    </>
  );
};

export default MagseHeader;
