import React from "react";
import profilePic from "../assets/profilepic.jpg"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="about-me">
        <ul>
          <li>
            <h3>
              ... will finish the University of
              Minnesota/BCS coding bootcamp as a full-stack developer.
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
