import React, { useState } from "react";
import Popup from "../PopUp/Popup";
const Box = (props) => {
  let box = props.data;
  const [current_box_id, set_box_id] = useState(null);
  const item = box.map((items, index) => (
    <div
      className={`item homepage_box ${items.customClass}`}
      key={index}
      id={index}
      onClick={(e) => {
        e.preventDefault();
        set_box_id(e.target.id);
      }}
    >
      <div className="logo">{items.icon}</div>
      <h3>{items.title}</h3>
    </div>
  ));

  return (
    <>
      {item}
      <Popup current_box_id={current_box_id} set_box_id={set_box_id} />
    </>
  );
};

export default Box;
