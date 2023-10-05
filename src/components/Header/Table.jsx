import { NavLink } from "react-router-dom";


const Table = ({ data }) => {
  return (
    <table>
      <tbody className="serchs">
        {data.map((item) => (
          <NavLink to={{ pathname: item.path, search: `/${item.title}/` }}>
            <div className="w-[320px] h-[100px] rounded-[5px] border-solid border-[1px] border-white mt-[20px] pr-[10px]">
              <tr key={item.id} className="flex items-center justify-between">
                <div>
                  <td className="text-white text-[17px]">{item.code}</td>
                </div>
                <div>
                  <td className="text-white">
                    <img
                      src={item.img}
                      alt=""
                      className="h-[99px] w-[100px] float-left rounded-[5px]"
                    />
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
