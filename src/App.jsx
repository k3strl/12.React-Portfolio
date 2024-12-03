import React, { useState } from "react";
import { useContext } from 'react';
import Header from "./components/Header";
import Hero from "./components/navbar/Hero";
import Projects from "./components/navbar/Projects";
import Contact from "./components/navbar/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeComponent, setActiveComponent] = useState('hero');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'hero':
        return <Hero />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return null; // Update default case
    }
  };

  return (
    <>
      <Header />
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    </>
  );
}

export default App;
