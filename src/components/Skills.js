import React from "react";
import SkillCard from "./SkillCard";
import skillData from "./data/SkillsData";
import "./Skill.css";

export default function Skills() {
  return (
    <div className="skill-container" id="skill-section">
      <div className="skill-heading">
        <h3 id="section-title">&lt; Skills & Tools / &gt;</h3>
        <div className="logo-container">
          {skillData.map((image, index) => {
            return <SkillCard key={index} image={image} />;
          })}
        </div>
      </div>
    </div>
  );
}
