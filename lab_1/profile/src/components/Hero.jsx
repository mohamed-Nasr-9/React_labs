import React from 'react';

function Hero() {
  return (
    <section className="hero bg-dark text-white text-center py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <img 
          src="https://via.placeholder.com/200" 
          alt="Profile" 
          className="rounded-circle mb-4"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <h1 className="display-3 fw-bold">Mohamed Aboelkhair</h1>
        <p className="lead">Software Engineer</p>
        
        {/* Social Media Icons */}
        <div className="social-links mt-4">
          <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
