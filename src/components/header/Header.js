import React from "react";
import Git from "./Git";
import HeaderSocials from "./HeaderSocials";
import VideoBg from "../../videos/video1.mp4";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="video__bg">
        <video src={VideoBg} autoPlay loop muted></video>
        <div className="header-content">
          <h3 className="text-light">Hello I'm</h3>
          <h1 className="hero__content">Ashim Poudel</h1>
          <br /> <br />
          <h4 className="text-light">Full Stack Web Developer</h4>
        </div>
      </div>
      <Git />
      <HeaderSocials />
    </header>
  );
};

export default Header;
