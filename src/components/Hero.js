import React from 'react';

const Hero = ({ isVisible }) => {
  return (
    <header id="home-section" className={`abstract-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <h1>I AM KEANU</h1>
        <p>A FULL STACK DEVELOPER</p>
      </div>
      <div className="header-bottom"></div>
    </header>
  );
};

export default Hero;