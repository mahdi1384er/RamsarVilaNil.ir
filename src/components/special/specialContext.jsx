import SpecialItems from "./specialItems";

const SpecialContext = () => {
  return (
    <section className="w-full mt-[30px] h-[229px] m-auto">
      <div className="w-[95%]   m-auto">
        <div className="flex flex-col">
          <div className="h-[20px]">
            <h2 className="font-bold">اقامتگاه های خاص</h2>
          </div>
          <div>
            <span className="text-[#5A5B5E] text-[13px]">
              اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی متفاوت و جذاب ﺑﺮای اﻓﺮاد ﺧﺎص
            </span>
          </div>
          <div className="flex items-center justify-between overflow-scroll mt-[0] ml-[-8px] mr-[-8px] relative bottom-[28px]">
            <SpecialItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialContext;
