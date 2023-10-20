import "../../css/index.css";
import NavBarsScrool from "./NavBarsJungle";
import SectionJungle from "./SectionJungle";
import Junglebj from "./junglebj";

const JungleItems = () => {
  return (
    <section>
      <div className="flex items-center relative right-[10px] w-[104%] justify-center pt-[15px]">
        <span className="text-[17px]  font-bold text-center text-black z-[1000]">
          اقامتگاه های جنگلی
        </span>
      </div>
      <header className="flex  bg-fixed bg-contain overflow-auto  h-[90%] w-[106%] m-auto mt-[15px] relative right-[9px] rounded-[8px]">
      <Junglebj/>
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool className="w-[24px] h-[30px]" />
        </div>
      </header>
      <SectionJungle />
    </section>
  );
};

export default JungleItems;
