import React from "react";
import "../style/BoxSection.scss";
import Box from "./Box";
import section_1 from "./Boxsection.config";

const BoxSection = () => {
  return (
    <>
      <div className="main-box">
        <div className="row box">
          <Box data={section_1} />
        </div>
      </div>
    </>
  );
};

export default BoxSection;
