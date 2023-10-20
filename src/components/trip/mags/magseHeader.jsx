import SectionMages from "./sectionMages";
import CottageTrip from "./CottageTrips";
import NavBarsScrool from "../../navbars/NavBars";


// import Alders from "./aler";
import Footer from "../../Footer/Footer";

const MagseHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="relative right-[10px] text-[17px] font-bold text-center text-black z-[1000]">
          معرفی ییلاقات رامسر
        </span>
      </div>
      <header className="rounded-[11px] bg-fixed bg-contain overflow-auto relative right-[3px]  w-[108%] m-auto mt-[25px]">
        <CottageTrip />
        <div className="w-[100%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <SectionMages />

      <Footer />
    </>
  );
};

export default MagseHeader;
