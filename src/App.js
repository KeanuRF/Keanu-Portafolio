import React, { useEffect, useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialIcons from './components/SocialIcons';

const App = () => {
  const [visibleSections, setVisibleSections] = useState({
    home: false,
    work: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('.abstract-section');
      const updatedVisibility = {};

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id.split('-')[0];

        // La sección es visible si está dentro del viewport o parcialmente visible
        const isVisible =
          scrollPosition + windowHeight > sectionTop &&
          scrollPosition < sectionTop + sectionHeight;

        updatedVisibility[sectionId] = isVisible;
      });

      setVisibleSections(updatedVisibility);
    };

    const handleNavClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div>
      <div className="space-bg"></div>
      <SocialIcons />
      <Navbar />
      <Hero isVisible={visibleSections.home} />
      <Projects isVisible={visibleSections.work} />
      <Contact isVisible={visibleSections.contact} />
    </div>
  );
};

export default App;