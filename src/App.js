// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'; 
import Contact from './components/Contact';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';
function App() {

  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
