import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.image} alt="ProjectImage"></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="project-buttons">
        <a href={props.gitHubLink} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={props.liveLink} target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </div>
  );
}
