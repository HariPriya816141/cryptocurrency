import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row text-center text-lg-start">
          
          {/* Column 1: Brand + Description */}
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold">CryptoCurrency</h5>
            <p style={{ maxWidth: '300px' }}>
              Your gateway to secure and seamless digital currency management. 
              Explore, trade, and invest with confidence.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <div className="d-flex flex-column">
              <Link to="/" className="text-light text-decoration-none my-1">Home</Link>
              <Link to="/about" className="text-light text-decoration-none my-1">About</Link>
              <Link to="/contact" className="text-light text-decoration-none my-1">Contact</Link>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-lg-4 mb-4 text-center">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light mx-2">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center border-top pt-3" style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} CryptoCurrency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



