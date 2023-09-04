const Excellent = ({ ExcellentItems, src, title, author , data }) => {
  return (
    <>
      <div onClick={ExcellentItems}>
        <div className="m-[10px] flex items-center  w-[166px] h-[217px]">
          <div className="rounded-[15px]">
            <div className="flex items-center justify-between w-[120px] h-[166px]">
              <img
                src={src}
                alt=""
                className="w-[104px] h-[150px] rounded-[12px]"
              />
            </div>

            <div className="flex items-center justify-between relative bottom-[43px] right-[8px]">
              <div className="imgsBackGround flex flex-col ">
                <div className="mt-[24px]">
                  <div>
                    <p className="color-white text-center text-[11px] relative bottom-[14px]">
                      {title}
                    </p>
                  </div>
                  <div className="flex items-center justify-around">
                    <div>
                      <p className="color-white text-center text-[8px] relative bottom-[14px]">
                        {author}
                      </p>
                    </div>
                    <div>
                      <span className="text-[47px] font-bold text-black">
                        {data}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Excellent;
