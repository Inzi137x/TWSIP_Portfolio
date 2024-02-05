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
          I'm a recent Software Engineering graduate from Amity University
          Kolkata (2022), passionate about Web Development with a focus on{" "}
          <span>ReactJS</span> , <span> NextJS</span>, and currently learning{" "}
          <span> Backend</span> technologies like{" "}
          <span> NodeJS, Express, MongoDB</span>. I also use{" "}
          <span>AI tools</span> to make my development easier as a Web
          Developer.<br></br>
          <br></br>I am solving problems on leetcode demonstrating my commitment
          to continuous learning and honing my problem-solving skills and
          algorithms.
          <br></br>
          <br></br>
          <span>(Available For Hiring Full Time)</span>
          <br></br>
          Email: <span>palas.ihih@gmail.com</span>
        </p>
        <div>
          <img src="images/pngwing.com.png" alt="AboutMe"></img>
        </div>
      </div>
    </div>
  );
}
