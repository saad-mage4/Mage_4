import React from "react";
import About_info from "./About.config";
import "../style/About.scss";

const About = () => {
  const aboutinfo = About_info.map(
    ({ customClass, icon, title, text }, index) => (
      <div key={index} className={`item about ${customClass}`}>
        <div className="logo">{icon}</div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    )
  );

  return (
    <>
      <div className="main-box">
        <div className="row box">{aboutinfo}</div>
      </div>
    </>
  );
};

export default About;
