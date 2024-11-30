import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App
