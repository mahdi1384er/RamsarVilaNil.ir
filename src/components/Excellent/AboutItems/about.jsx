const About = ({ TitelReserv, TitelAbout, textTitel }) => {
  return (
    <>
      <section className="w-[96%] m-auto">
        <div>
          <div className="flex flex-col">
            <div>
              <span className="text-[17px] font-bold text-black">
                درباره اقامتگاه
              </span>
            </div>
            <div className="flex flex-col mt-[8px]">
              <div>
                <span className="text-[14px] font-bold text-black">
                  {TitelReserv}
                </span>
              </div>
              <div className="mt-[6px] text-justify w-[98%]">
                <span className="leading-[26px] text-[14px]">{TitelAbout}</span>
                {/* <span className="text-[#0373F3]">بیشتر</span> */}
              </div>
            </div>
          </div>
          <div className="w-[102%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[20px]"></div>
        </div>
      </section>
    </>
  );
};

export default About;
