const SuporttData = [
  {
    id: 1,
    titel: "کم هزینه و باکیفیت",
    imgs: "/img/imgs/l1.svg",
  },
  {
    id: 2,
    titel: "پاسخگوی 24 ساعته",
    imgs: "/img/imgs/l2.png",
  },
  {
    id: 3,
    titel: "خاص ترین لوکیشن ها",
    imgs: "/img/imgs/l3.png",
  },
  ,
  {
    id: 4,
    titel: "بهترین ویلاها در رامسرباما",
    imgs: "/img/imgs/l4.svg",
  },
];

const Support = () => {
  return (
    <>
      <section className="w-[95%] mt-[60px] h-[100px] m-auto">
        <div className="flex flex-wrap justify-between">
          {SuporttData.map((item, index) => {
            return (
              <div key={index} className="flex items-center flex-wrap justify-evenly mt-[5px] mr-0 ml-0 mb-[6px] p-[2px] w-[47%] h-[46px] bg-[#E4E4E4] rounded-[6px]">
                <div>
                  <img
                    src={item.imgs}
                    alt=""
                    className="w-[30px] h-[28px] mt-[3px]"
                  />
                </div>
                <div>
                  <span className="text-[15px] font-bold">
                        {item.titel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Support;
