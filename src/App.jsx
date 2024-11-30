import React from 'react';
import Header from './components/Header';
import Hero from '.components/Hero';
import Navbar from '.components/Navbar';
import Projects from '.components/Projects';
// import Variables from '.variables/Variables';
import Footer from '.components/Footer';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="navbar"><Navbar /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
