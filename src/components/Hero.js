import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Typing animation
    const title = titleRef.current;
    if (title) {
      const text = title.textContent;
      title.textContent = '';
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          title.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      };
      setTimeout(typeWriter, 400);
    }
  }, []);

  return (
    <section id="home" className="hero-aviation-bg">
      <div className="aviation-cloud cloud1"></div>
      <div className="aviation-cloud cloud2"></div>
      <div className="hero-container-aviation">
        <div className="hero-content-aviation">
          <h1 ref={titleRef} className="aviation-title">
            <i className="fas fa-plane-departure"></i> Welcome Aboard!
          </h1>
          <p className="aviation-slogan">Your AI Copilot for Aviation Service</p>
          <button className="btn btn-aviation">
            <i className="fas fa-ticket-alt"></i> Book a Demo Flight
          </button>
        </div>
        <div className="hero-plane-img">
          {/* Use a plane illustration if available, else fallback to icon */}
          <img src="/plane-illustration.png" alt="Airplane" onError={e => {e.target.style.display='none';}} style={{maxWidth:'350px', width:'100%'}} />
          <div className="fallback-plane-icon">
            <i className="fas fa-plane fa-4x"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 