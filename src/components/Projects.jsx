import React from "react";
import { renderProjects } from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <div className="projects-grid">
      {renderProjects(projects)}
    </div>
  );
};

export default Projects;