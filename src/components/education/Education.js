import React from "react";
import "./Education.css";
import { IoSchoolSharp } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";

const Education = () => {
  return (
    <>
      <section className="section__container " id="education">
        <h5 className="education__top">Get To Know</h5>
        <h1>
          <span className="education__text">Academics </span>
        </h1>
        <div className="education__content">
          <div className="education__cards">
            <div className="first__card">
              <article className="education__card">
                <SiSololearn className="education__icon" />

                <h3 className="skills">dented code</h3>
                <h4 className="skills__content">
                  Full Stack web development <br /> BootCamp <br />
                  <small>In progress</small>
                  <br />
                  <small>Expected to complete: July 2021</small>
                </h4>
              </article>
            </div>
            '
            <div className="second__card">
              <article className="education__card">
                <IoSchoolSharp className="education__icon" />

                <h3 className="skills">Kent institute Australia</h3>
                <h4 className="skills__content">
                  Bacehlor's of
                  <br /> Information Technology <br />
                  <small>graduated</small>
                  <br />
                  <small>2018-2021</small>
                </h4>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
