import { Rate } from "rsuite";

const SectionRooms = () => {
  return (
    <section className="w-full mt-[10px] h-[64px] m-auto">
      <div className="w-[95%] m-auto">
        <div className="flex items-center justify-between w-[99%]  m-auto">
          <div>
            <span className="text-[17px] font-bold text-[#141414]">
              رامسر نیل
            </span>
          </div>
          <div className="flex items-center">
            <div>
              <Rate
                readOnly
                defaultValue={5}
                allowHalf
                className="text-[18px] h-[20px] w-[100px] mb-[5px]"
              />
            </div>
            <div className="mr-[17px]">
              <div>
                <span className="text-[17px] font-bold text-[#141414]">
                  RamsarNil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRooms;
