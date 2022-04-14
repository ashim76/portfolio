import React from "react";
import "./About.css";
import ME from "../../assets/me-about.png";
import { IoSchoolSharp } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import { AiOutlineCaretRight } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5 className="about-me__top">Get To Know</h5>
      <h1>
        <span className="about-me__text">About Me </span>
      </h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />

              <h3 className="skills">SKILLS</h3>
              <h4 className="skills__content">
                MERN Stack <br />
                Java
                <br />
                JavaScript
                <br />
                HTML CSS
              </h4>
            </article>
            <article className="about__card">
              <SiSololearn className="about__icon" />
              <h3 className="education">EDUCATION</h3>
              <h4 className="skills__content">
                Bachelor's Degree
                <br />
                Full-Stack-Web-Development-Bootcamp
              </h4>
            </article>
          </div>
          <p className="about-me__main-content">
            {/* <span></span> */}
            I'm a <span>goal-oriented</span>{" "}
            <span>Full Stack Web Developer</span> with a
            <span>Bachelor's degree in Information Technology</span> , eager to
            broaden professional expertise by working for a web
            development-focused IT organization. Prepared to offer all with a{" "}
            <span>strong sense of responsibility</span> and a
            <span>strong desire</span> to give utmost in any endeavor
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
