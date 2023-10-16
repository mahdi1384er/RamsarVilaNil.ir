import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { Rate } from "rsuite";
import { TbHomeDot } from "react-icons/tb";

const SerchboxBlogs = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(0);
  const handleOpen = () => setOpen(true);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleClose = () => setOpen(false);
  const b = false;
  const c = false;

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
    setTimeout(() => setRows(80), 5000);
  };

  const handleEntereds = () => {
    setTimeout(() => setRows(80), 5000);
  };

  const handleEnteredss = () => {
    setTimeout(() => setRowss(80), 2000);
  };

  const itmess = [{ id: 4 }, { id: 3 }, { id: 5 }, { id: 3 }, { id: 2.5 }];

  return (
    <div className="w-[80%]">
      <ButtonToolbar
        onClick={handleOpen}
        className="relative bottom-[35px] w-[320px] "
      >
        <Button></Button>
      </ButtonToolbar>

      <Modal
        open={open}
        onClose={handleClose}
        className=""
        onEntered={handleEntered}
        onExited={() => {
          setRows(0);
        }}
      >
      
        <Modal.Body>
          {rows ? (
            <table>
              <tbody className="serchs">
                {data.map((item) => (
                  <NavLink
                    to={{ pathname: item.path, search: `/${item.title}/` }}
                  >
                    <div className="h-[100px] rounded-[5px] border-solid border-[1px] border-[#0373F3] mt-[20px] pr-[10px]">
                      <tr
                        key={item.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-col font-bold w-[46%] ">
                          <td className="text-black text-[16px]">
                            {item.code}
                          </td>
                          <td className="text-black text-[16px]">
                            {item.title}
                          </td>
                          <Rate
                            readOnly
                            defaultValue={item.star}
                            allowHalf
                            className="text-[20px] w-[65%] relative left-[12px]"
                          />
                        </div>
                        <div class="bg-[#0373F3] relative pr-[5px]  left-[28px] top-[16px] pl-[6px] rounded-xl w-[84px] h-[25px] text-center flex items-center justify-around mt-[7px]">
                          <div className="pl-[2px]">
                            <span>
                              <TbHomeDot className="text-white" />
                            </span>
                          </div>
                          <div>
                            <span class="text-[10px] text-white">
                              مـشــــــاهده
                            </span>
                          </div>
                        </div>
                        <div>
                          <td className="text-white">
                            {c === b ? (
                              <img
                                src={item.img}
                                alt=""
                                className="h-[99px] w-[100px] float-left rounded-[5px]"
                              />
                            ) : (
                              <Placeholder.Paragraph
                                style={{ marginTop: 20 }}
                                rows={5}
                                graph="image"
                                active
                                onEntered={handleEnteredss}
                              />
                            )}
                          </td>
                        </div>
                      </tr>
                    </div>
                  </NavLink>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center" }}>
              <Loader size="md" />
              <Placeholder.Paragraph
                style={{ marginTop: 20 }}
                rows={5}
                graph="image"
                active
                onEntered={handleEntereds}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary"></Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SerchboxBlogs;
