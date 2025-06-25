import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-clock',
      title: '24/7 Availability',
      description: 'Get instant responses anytime, day or night. No waiting, no delays.'
    },
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered',
      description: 'Advanced machine learning for intelligent, contextual conversations.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Multi-Language',
      description: 'Support for multiple languages to serve global customers.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics',
      description: 'Detailed insights into customer interactions and satisfaction.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure',
      description: 'Enterprise-grade security to protect your data and conversations.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Easy Integration',
      description: 'Simple setup and integration with your existing systems.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Choose Our ChatBot?</h2>
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