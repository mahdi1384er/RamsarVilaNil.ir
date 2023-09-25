import SpecialItems from "./specialItems";

const SpecialContext = () => {
  return (
    <section className="w-[96%] mt-[40px] h-[276px] m-auto">
      <div className="w-[96%]   m-auto">
        <div className="flex flex-col">
          <div className="relative bottom-[7px]">
            <div className="h-[20px]">
              <h2 className="font-bold text-[18px] text-black  relative bottom-[5px]">
                اقامتگاه های خاص
              </h2>
            </div>
            <div>
              <span className="text-[#5A5B5E] text-[13px] font-[900px] relative top-[13px]">
                اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی متفاوت و جذاب ﺑﺮای اﻓﺮاد ﺧﺎص
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between overflow-scroll mt-[6px] ml-[-18px] mr-[-8px] relative bottom-[28px]">
            <SpecialItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialContext;
