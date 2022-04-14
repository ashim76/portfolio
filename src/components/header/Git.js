import React from "react";
import Resume from "../../assets/Ashim_Poudel_Resume.pdf";

const Git = () => {
  return (
    <div className="git">
      <a href={Resume} download className="btn">
        {" "}
        Download Resume
      </a>
      <a href="#contact" className="btn">
        Contact Me
      </a>
    </div>
  );
};

export default Git;
