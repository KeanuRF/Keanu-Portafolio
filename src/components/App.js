import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import SocialIcons from './components/SocialIcons';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.abstract-section');
      const scrollPosition = window.scrollY + 200;

      const newVisibleSections = {};
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          newVisibleSections[sectionId] = true;
        } else {
          newVisibleSections[sectionId] = false;
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="space-bg"></div>
      <SocialIcons />
      <Navbar />
      <Element name="home-section">
        <Hero isVisible={visibleSections['home-section']} />
      </Element>
      <Element name="work-section">
        <Projects isVisible={visibleSections['work-section']} />
      </Element>
      <Element name="contact-section">
        <Contact isVisible={visibleSections['contact-section']} />
      </Element>
    </div>
  );
}

export default App;