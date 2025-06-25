import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '50+', label: 'Languages' }
  ];

  const techStack = [
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fas fa-database', name: 'AI/ML' },
    { icon: 'fab fa-react', name: 'React' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our AI ChatBot</h2>
            <p>Our AI-powered chatbot is designed to revolutionize customer service by providing instant, accurate, and helpful responses to customer inquiries. Built with cutting-edge natural language processing technology, it understands context and provides personalized assistance.</p>
            <p>Whether you're a small business or a large enterprise, our chatbot can be customized to meet your specific needs and integrate seamlessly with your existing customer service workflow.</p>
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-item">
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 