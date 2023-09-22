
import img from '../../../public/img/imgs/8888888888888.jpg'
import imgs from '../../../public/img/imgs/5555555.jpg'

const DataWebsite = () => {
  return (
    <>
      <section className="w-full mt-[5px] mb-[10px] m-auto h-[60px] flex items-center justify-around">
        <div className="w-[46%] h-full">
          <img src={img} alt="" className="rounded-[5px]"/>
        </div>
        <div className="w-[46%]  h-full">
          <img src={imgs} alt="" className="rounded-[5px]"/>
        </div>
      </section>
    </>
  );
};

export default DataWebsite;
