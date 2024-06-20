import React from 'react';
import'./Footer.css'

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <hr className='kontol'/>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="/features" className="nav-link px-2 text-muted">Features</a></li>
          <li className="nav-item"><a href="/pricing" className="nav-link px-2 text-muted">Pricing</a></li>
          <li className="nav-item"><a href="/faqs" className="nav-link px-2 text-muted">FAQs</a></li>
          <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About</a></li>
        </ul>
        <p className="text-center text-muted">&copy; 2024 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
