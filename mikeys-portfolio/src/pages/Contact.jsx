import React from 'react';

function Contact() {
  return (
    <div className="contact-form-section">
      <h2>Contact</h2>
      <form className="my-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="John Doe" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;