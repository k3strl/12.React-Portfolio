import React from "react";

const Navbar = ({ setActiveComponent }) => {
  console.log(setActiveComponent);
  return (
    <nav>
      <ul>
        <li>
          <a href="#hero" onClick={() => setActiveComponent('hero')}>About Me</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setActiveComponent('projects')}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActiveComponent('contact')}>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
