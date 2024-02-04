import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-container" id="aboutme">
      <div>
        <h3 id="section-title">&lt; AboutMe / &gt;</h3>
      </div>
      <div className="aboutme-contents">
        <p>
          I am a software engineering graduate from Amity University Kolkata. I
          am passionate about Web Development using ReactJS, NextJS. Learning
          new things always excites me, and I am constantly seeking new
          challenges to expand my knowledge and skills.
        </p>
        <div>
          <img src="images/pngwing.com.png" alt="AboutMe"></img>
        </div>
      </div>
    </div>
  );
}
