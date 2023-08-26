import "../../css/index.css";
import NavBarsScrool from "../../components/navbars/NavBars";

const HraderHost = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
          میزبانی
        </span>
      </div>
      <header className="Headerhost  bg-fixed bg-contain overflow-auto  h-[170px] w-[96%] m-auto mt-[23px]">
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool />
        </div>
      </header>
    </>
  );
};

export default HraderHost;
