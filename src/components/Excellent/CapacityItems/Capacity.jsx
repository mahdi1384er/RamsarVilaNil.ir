const Capacity = ({
  StandardCapacity,
  Maximumcapacity,
  Meterage,
  residence,
}) => {
  return (
    <>
      <section className="w-[98%] mt-[20px] m-auto">
        <div>
          <div className="shadoboxRomms flex flex-col w-[101%] p-[9px] rounded-[7px]">
            <div>
              <span className="text-[17px] font-bold text-black">
                ظرفیت اقامتگاه
              </span>
            </div>
            <div className="flex  mt-[14px] w-[77%] h-[67px] justify-between relative text-center">
              <div className="flex flex-col h-[70px] justify-around">
                <div>
                  <span className="text-[14px] font-bold text-black">
                    ظرفیت استاندارد:{" "}
                    <span className="text-[#323232]">{StandardCapacity}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[14px] font-bold text-black">
                    حداکثر ظرفیت:{" "}
                    <span className="text-[#323232]">{Maximumcapacity}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col h-[70px] justify-around">
                <div>
                  <span className="text-[14px] font-bold text-black">
                    متراژ زیر بنا:{" "}
                    <span className="text-[#323232]">{Meterage}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[14px] font-bold text-black">
                    نوع اقامتگاه:{" "}
                    <span className="text-[#323232]">{residence}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[101%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[20px]"></div>
        </div>
      </section>
    </>
  );
};

export default Capacity;
