import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {getProjectItemUi(projects)}
      </div>
    </div>
  );
}

function getProjectItemUi(projects) {
  return projects.map(project => <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>);
}

export default ProjectList;