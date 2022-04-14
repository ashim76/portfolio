import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <>
      <div className="header__socials" id="header-social">
        <a href="www.linkedin.com" target="blank">
          <BsLinkedin className="icon__linkedin" />
        </a>
        <a href="www.github.com" target="blank">
          <BsGithub className="icon__github" />
        </a>
        <a href="www.instagram" target="blank">
          <BsInstagram className="icon__insta" />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
