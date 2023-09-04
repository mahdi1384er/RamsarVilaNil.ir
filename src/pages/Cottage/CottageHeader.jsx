import "../../css/index.css";
import NavBarsScrool from "./NavBarsJungle";
import SectionCottage from "./SectionCottage";

const CottageHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
        اقامتگاه های کلبه سوئیسی
        </span>
      </div>
      <header className="CottageHeaders  bg-fixed bg-contain overflow-auto  h-[170px] w-[96%] m-auto mt-[23px]">
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <SectionCottage />
    </>
  );
};

export default CottageHeader;
