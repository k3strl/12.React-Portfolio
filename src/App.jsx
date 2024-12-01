import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Variables from '.variables/Variables'; --unsure if needed yet
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
