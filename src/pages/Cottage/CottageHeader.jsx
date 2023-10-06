import "../../css/index.css";
import NavBarsScrool from "../Jungle/NavBarsJungle";
import SectionCottage from "./SectionCottage";
import Cottagess from "./Cottage";

const CottageHeader = () => {
  return (
    <section className="w-[105%]">
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
        اقامتگاه های کلبه سوئیسی
        </span>
      </div>
      <header className="flex  bg-fixed bg-contain overflow-auto  h-[90%] w-[98%] m-auto mt-[11px] relative right-[2px] rounded-[8px]">
        <Cottagess/>
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <SectionCottage />
    </section>
  );
};

export default CottageHeader;
