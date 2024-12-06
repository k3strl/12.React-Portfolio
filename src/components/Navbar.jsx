import React from "react";

const Navbar = ({ setActiveComponent }) => {
  console.log(setActiveComponent);
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#hero" onClick={() => setActiveComponent('hero')}>About Me</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveComponent('projects')}>Projects</a>
          </li>
          <li>
            <a href="../assets/resume.pdf" download="resume.pdf">Resume</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveComponent('contact')}>Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Bluesky</a>
      </div>
    </>
  );
};

export default Navbar;
