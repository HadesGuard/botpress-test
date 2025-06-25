import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeBotpress } from './utils/botpressUtils';

function App() {
  useEffect(() => {
    // Initialize Botpress chat using utility function
    initializeBotpress()
      .then(() => {
        console.log('Botpress WebChat initialized successfully');
      })
      .catch((error) => {
        console.error('Failed to initialize Botpress:', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
