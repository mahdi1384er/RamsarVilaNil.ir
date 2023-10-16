import { BsFillCircleFill } from "react-icons/bs";

const Hostsection = () => {
  return (
    <>
      <section className="w-[100%] mt-[28px]  relative right-[8px] h-[64px] m-auto ">
        <div className="w-[100%] m-auto relative right-[6px]">
          <div>
            <span className="text-[18px] text-black font-bold">
              چگونه میزبان شویم ؟
            </span>
          </div>
          <div className="flex mt-[8px]">
          <div className="relative top-[5px]">
          <BsFillCircleFill className="text-blue-600 w-[8px]" />
          </div>
            <div className="pr-[5px]">
              <span className="text-[15px] text-black">
                نکات زیر را مطالعه کنید تا با اطلاعات کافی در رامسر باما میزبان
                شوید و با خیال آسوده کسب درآمد کنید.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hostsection;
