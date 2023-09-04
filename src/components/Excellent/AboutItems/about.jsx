const About = ({ TitelReserv , TitelAbout , textTitel }) => {
  return (
    <>
      <section className="w-full m-auto">
        <div>
          <div className="flex flex-col">
            <div>
              <span className="text-[17px] font-bold text-black">درباره اقامتگاه</span>
            </div>
            <div className="flex flex-col mt-[8px]">
              <div>
                <span className="text-[14px] font-bold text-black">
                 {TitelReserv}
                </span>
              </div>
              <div className="mt-[6px]">
                <span className="text-[14px]">
                {TitelAbout}
                  <br />
                  <span className="text-[#0373F3]">بیشتر</span>
                </span>
              </div>
            </div>
          </div>
            <div className="w-[95%] m-auto border-[1px] border-solid border-[#dfdfdf] mt-[20px]"></div>
        </div>
      </section>
    </>
  );
};

export default About;
