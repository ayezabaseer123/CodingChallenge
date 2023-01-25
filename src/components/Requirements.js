import React from "react";
import RequirementIcon from "../images/RequirementIcon.png";

const Requirements = () => {
  return (
    <div className="requirements">
      <div className="main">
        <div className="inner-requirements">
          <img
            style={{ width: "24px", height: "22px" }}
            src={RequirementIcon}
            alt="Requirement Icon"
          />
          <p className="upper-requirements">Submit your requirements </p>
        </div>
        <p className="lower-requirements">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
  );
};

export default Requirements;
