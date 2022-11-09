import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import section_1 from "../Box/Boxsection.config";
import "../style/Popup.scss";
const Popup = (props) => {
  let box_id = props.current_box_id
    ? Number(props.current_box_id)
    : props.current_box_id;
  const set_box_id = props.set_box_id;
  console.log(box_id);
  if (box_id !== null) {
    // console.log(section_1[box_id]);
    return (
      <>
        <div id="show__content" className="show_content">
          <ul>
            {section_1[box_id].details.map((detail, index) => (
              <li key={index}>
                <h2>{detail.name}</h2>
                <p>{detail.info}</p>
              </li>
            ))}
          </ul>
          <button onClick={hide}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </>
    );
  }

  function hide() {
    set_box_id(null);
  }
};

export default Popup;
