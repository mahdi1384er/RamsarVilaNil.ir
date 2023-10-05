import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const LoderImgs = () => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState(0);
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const b = false;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://my-json-server.typicode.com/mahdi1384er/serchs/serchs/?q=${query}`
      );
      setData(res.data);
    };

    if (query.length === 0 && query.length == 0) b;
    else if (query.length === 1 || query.length > 1) fetchData();
    else if (query.length === 0 && query.length == 0) b;
  }, [query]);

  const handleEntered = () => {
    setTimeout(() => setRows(30), 1000);
  };

  return (
    <Modal.Body>
      {rows ? (
        <table>
          <tbody className="serchs">
            {data.map((item) => (
              <NavLink to={{ pathname: item.path, search: `/${item.title}/` }}>
                <div className="w-[320px] h-[100px] rounded-[5px] border-solid border-[1px] border-[#0373f3] mt-[20px] pr-[10px]">
                  <tr
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <td className="text-black text-[17px]">{item.code}</td>
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
      ) : (
        <Placeholder.Paragraph
          style={{ marginTop: 30 }}
          rows={5}
          graph="image"
          active
          onEntered={handleEntered}
        />
      )}
    </Modal.Body>
  );
};

export default LoderImgs;
