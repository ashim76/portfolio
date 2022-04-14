import React from "react";
import "./Nav.css";
//imports
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
//useState
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome className="home" />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FaUser className="about" />{" "}
        </a>
        <a
          href="#education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "#education" ? "active" : ""}
        >
          <BiBookReader className="education" />{" "}
        </a>

        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active " : ""}
        >
          <BsBullseye className="skills" />{" "}
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active " : ""}
        >
          <BsBriefcaseFill className="portfolio" />{" "}
        </a>
      </nav>
    </>
  );
};

export default Nav;
