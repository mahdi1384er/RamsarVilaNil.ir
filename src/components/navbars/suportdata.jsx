import React from "react";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa6";

const Suportdata = ({ title, children }) => {
  const [
    isExpanded,
    setIsExpanded
  ] = React.useState(false);

  const ref = React.useRef();

  const [height, setHeight] = React.useState();

  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
  };

  const classes = `list-group-item p-[10px]  ${
    isExpanded ? "is-expanded " : null
  }`;
  const currentHeight = isExpanded ? height : 0;
  return (
    <div
      className={classes}
      onClick={handleToggle}
    >
      <div className="card-title h-[5px] relative bottom-[23px] text-[15px]">
        <h2>{title}</h2>
      </div>
      <div
        className="card-collapse bg-white relative h-[44px] bottom-[19px] left-[8px] w-[105%]"
        style={{ height: currentHeight + "px" }}
      >
        <div className="card-body text-justify" ref={ref}>
          {children}
        </div>
       
      </div>
    </div>
  );
};


export default Suportdata;
