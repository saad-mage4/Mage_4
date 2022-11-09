import React from "react";
import { Link } from "react-router-dom";
import members from "./Members.config";
import "../style/Members.scss";

const Members = () => {
  const membersInfo = members.map((member, index) => (
    <Link to={member.url} key={index} className="Links">
      <div className={`item members ${member.customClass}`}>
        <div className="icon">{member.icon}</div>
        <h2>{member.title}</h2>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="main-box">
        <div className="row box">{membersInfo}</div>
      </div>
    </>
  );
};

export default Members;
