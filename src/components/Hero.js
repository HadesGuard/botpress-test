import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-aviation-bg">
      <div className="hero-container-aviation">
        <div className="hero-content-aviation">
          <h1 className="aviation-title">
            Experience Private Jet Luxury
          </h1>
          <p className="aviation-slogan">Fly anywhere, anytime. Premium service for elite travelers.</p>
          <button className="btn btn-primary">
            Get a Quote
          </button>
        </div>
        <div className="hero-plane-img">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Private Jet" style={{maxWidth:'420px', width:'100%', borderRadius:'18px', boxShadow:'0 8px 32px rgba(0,0,0,0.18)'}} />
        </div>
      </div>
    </section>
  );
};

export default Hero; 