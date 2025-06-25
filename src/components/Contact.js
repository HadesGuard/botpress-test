import React, { useState } from 'react';
import './Contact.css';
import { showNotification } from '../utils/notificationUtils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'info@aichatbot.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      value: '123 AI Street, Tech City, TC 12345'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <i className={info.icon}></i>
                <div>
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 