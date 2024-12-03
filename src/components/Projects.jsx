import React from "react";

const Project = ({ title, description, link, image }) => {
  return (
    <div className="project">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;