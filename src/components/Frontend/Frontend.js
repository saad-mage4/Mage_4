import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import frontend_members from "./Frontend.config";
import "../style/Developers.scss";

const Frontend = () => {
  const frontendMembers = frontend_members.map((member, index) => (
    <div
      className={`item developers ${member.customClass}`}
      data-detail={member.detail.info}
      key={index}
    >
      <div className="logo">
        {member.icon === null ? (
          <FontAwesomeIcon icon={faUser} />
        ) : (
          <img src={member.icon} alt="user" />
        )}
      </div>
      <h3>{member.name}</h3>
      <h4>{member.info}</h4>
      <a href={member.detail.url} target="_blank" rel="noreferrer">
        Linkedin
      </a>
    </div>
  ));

  return (
    <>
      <div className="main-box">
        <div className="row box">{frontendMembers}</div>
      </div>
    </>
  );
};

export default Frontend;
