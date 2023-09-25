import "../../css/index.css";
import NavBarsScrool from "../../components/navbars/NavBars";
import SectionRooms from "./SectionsRooms/SectionRooms";

const HeaderRooms = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-[15px] ">
        <span className="text-[17px] font-bold text-center text-black z-[1000]">
          اقامتگاها
        </span>
      </div>
      <header className="HeaderRooms  bg-fixed bg-contain overflow-auto  h-[219px] w-[96%] m-auto mt-[23px]">
        <div className="w-[94%] h-full m-auto">
          <NavBarsScrool />

          <div className="flex items-center flex-col justify-center mt-0 relative top-[60px]">
            <div>
              <h2 className="text-[19px] text-white font-bold">
                اجاره بهترین اقامتگاه ها در رامسر
              </h2>
            </div>
            <div>
            <span class="aboust text-white text-[15px] relative top-[18px] backdrop-blur-2xl">رامسر باما اولین وب سایت رسمی اجاره ویلا و کلبه در رامسر</span>
            </div>
          </div>
        </div>
      </header>
      <SectionRooms />
    </>
  );
};

export default HeaderRooms;
