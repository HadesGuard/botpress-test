import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our Private Jet Service</h2>
            <p>We deliver an unparalleled flying experience for discerning travelers. Our fleet of state-of-the-art jets, experienced crew, and commitment to safety ensure your journey is seamless and secure. Enjoy personalized service, global reach, and the ultimate in comfort and privacy.</p>
            <p>From business trips to luxury getaways, we tailor every flight to your needs. Discover the freedom and prestige of private aviation with us.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80" alt="Jet Interior" style={{borderRadius:'16px', maxWidth:'100%', boxShadow:'0 4px 24px rgba(0,0,0,0.15)'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 