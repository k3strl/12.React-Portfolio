// src/components/Header.js
import React from "react";

function Header() {
  const handleNavigation = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => handleNavigation("hero")}>Home</li>
          <li onClick={() => handleNavigation("projects")}>Projects</li>
          {/* <li onClick={() => handleNavigation("skills")}>Skills</li> */}
          <li onClick={() => handleNavigation("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
