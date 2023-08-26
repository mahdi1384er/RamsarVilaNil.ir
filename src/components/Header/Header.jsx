import "../../css/index.css";
import NavBarsScrool from "../navbars/NavBars";

const Header = () => {
  return (
    <header className="HeaderBg  bg-fixed bg-contain overflow-auto  h-[210px] w-full">
      <div className="w-[94%] h-full m-auto">
        {/* Navigation */}
        <NavBarsScrool />


        <div className="flex items-center flex-col justify-center mt-0 relative top-[57px]">
          <div>
            <h2 className="text-[16px] text-white font-bold">
              اجاره ویلا در شمال ایران رامسر
            </h2>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="کد ویلاتو سرچ کن ...."
                className="h-[18px] w-[170px]  p-[11px] pt-[12px] pb-[13px] rounded-[14px] bg-white text-[#8D8E8F] text-[9px] font-bold focus:outline-none"
              />
            </form>
          </div>
          <div>
            <h2 className="text-white text-[14px]">رامسر نیل</h2>
          </div>
          <div>
            <div className="animate-bounce  mt-[4px]">
              <svg
                className="w-4 h-4 text-[#ffff]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
