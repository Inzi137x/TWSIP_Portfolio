import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import projectData from "./data/ProjectData";

function Project() {
  return (
    <div className="card-container" id="projects-section">
      <div className="project-heading">
        <h3 id="section-title">&lt; MyProjects / &gt;</h3>
        <div className="projects-div">
          {projectData.map((data, index) => {
            console.log(data.gitHubLink);
            return (
              <ProjectCard
                key={index}
                image={data.image}
                title={data.title}
                description={data.description}
                gitHubLink={data.gitHubLink}
                liveLink={data.liveLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
