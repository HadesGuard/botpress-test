import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Customer Support', href: '#' },
        { name: 'Sales Assistant', href: '#' },
        { name: 'FAQ Bot', href: '#' },
        { name: 'Custom Solutions', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Contact Support', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-github', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-robot"></i>
              <span>AI ChatBot</span>
            </div>
            <p>Revolutionizing customer service with intelligent AI-powered chatbots.</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href.substring(1));
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AI ChatBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 