
import { NavLink } from "react-router-dom";


const Table = ({ data }) => {
  return (
    <table>
      <tbody className="serchs">
        {data.map((item) => (
          <NavLink to={{ pathname: item.path, search: `/${item.title}/` }}>
            <div className="w-[280px] h-[50px] rounded-[5px] border-solid border-[1px] border-gray-600 mt-[20px] pr-[8px]">
              <tr key={item.id} className="flex items-center justify-between">
                <div>
                  <td className="text-white text-[15px]">{item.code}</td>
                </div>
                <div>
                  <td className="text-white">
                    <img src={item.img} alt="" className="w-[80px] h-[50px] rounded-[5px]" />
                  </td>
                </div>
              </tr>
            </div>
          </NavLink>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
