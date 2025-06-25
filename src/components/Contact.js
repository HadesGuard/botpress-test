import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Book Your Private Jet</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Ready for your next journey? Fill out the form and our concierge will contact you with a personalized quote.</p>
            <ul>
              <li><strong>Phone:</strong> +1 800 123 4567</li>
              <li><strong>Email:</strong> concierge@privatejetlux.com</li>
            </ul>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Flight Details (Date, From, To, Special Requests)" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Request a Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 