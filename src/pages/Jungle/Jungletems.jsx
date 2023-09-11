import "../../css/index.css";
import NavBarsScrool from "./NavBarsJungle";
import SectionJungle from "./SectionJungle";

const JungleItems = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
        اقامتگاه های جنگلی
        </span>
      </div>
      <header className="JungleItems  bg-fixed bg-contain overflow-auto  h-[194px] w-[96%] m-auto mt-[10px]">
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <SectionJungle />
    </>
  );
};

export default JungleItems;
