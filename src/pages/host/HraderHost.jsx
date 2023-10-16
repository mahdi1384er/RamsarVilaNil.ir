import "../../css/index.css";
import NavBarsScrool from "../../components/navbars/NavBars";
import HostBg from "./HostBg";

const HraderHost = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[18px] font-bold text-center text-black z-[1000]">
          میزبانی
        </span>
      </div>
      <header className="bg-fixed bg-contain overflow-auto  h-[251px] w-[104%] m-auto mt-[23px] relative right-[4px] rounded-[9px]">
        <div className="w-[100%] h-full m-auto">
          <HostBg/>
          <NavBarsScrool />
        </div>
      </header>
    </>
  );
};

export default HraderHost;
