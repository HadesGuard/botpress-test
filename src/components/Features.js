import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-couch',
      title: 'Luxury Interiors',
      description: 'Relax in spacious, elegant cabins with premium amenities.'
    },
    {
      icon: 'fas fa-plane-departure',
      title: 'On-demand Flights',
      description: 'Fly on your schedule, to any destination worldwide.'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Personalized Concierge',
      description: 'Enjoy tailored services from booking to landing.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Destinations',
      description: 'Access exclusive airports and private terminals globally.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety & Privacy',
      description: 'Your safety and privacy are our top priorities.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Seamless Booking',
      description: 'Book your flight easily with our intuitive platform.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Fly With Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 