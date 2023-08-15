const TripItems = () => {
  return (
    <section>
      <div className="w-[95%] m-auto flex items-center flex-col">
        <div className="flex  flex-col w-full">
          <div>
            <p className="font-bold">در سفر، تجربه کن</p>
          </div>
          <div>
            <p className="text-[#575757] text-[12px]">
              رزرو تجربه و گشت‌های یک روزه با راهنمای رامسر ویلا نیل{" "}
            </p>
          </div>
        </div>
        <div className="w-[94%] h-[160px] shadow-lg border-solid border-[1px] text-[#818181] mt-[30px] rounded-[10px] flex flex-col ">
          <div className="bgImgs w-full h-[70%] bg-red-300  rounded-[10px] ">
            {/* <img src={Imgs} alt="" /> */}
          </div>
          <div className="p-[5px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-black font-[600]">
                  گشت و گذار در ییلاقات رامسر
                </p>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="text-[#F7B701] w-[11px] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[10px]">
              <div>
                <p className="text-black text-[10px]">
                  با مجله رامسر ویلا نیل به ییلاقات رامسر سفر کنید!
                </p>
              </div>
              <div>
                <span className="text-[9px] text-black">
                  {new Date().toLocaleDateString("fa-IR", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripItems;
