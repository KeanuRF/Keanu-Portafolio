import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header-top">
        <div className="logo">
        </div>
        <nav className="nav-right">
          <a href="#home" data-target="home-section">
            HOME
          </a>
          <a href="#work" data-target="work-section">
            PROJECTS
          </a>
          <a href="#contact" data-target="contact-section">
            CONTACT
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;