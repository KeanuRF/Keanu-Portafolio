import React from 'react';

const Projects = ({ isVisible }) => {
  return (
    <section id="work-section" className={`abstract-section ${isVisible ? 'visible' : ''}`}>
      <div className="project-showcase">
        <div className="project-cards">
          <div className="project-card project-card-left">
            <img
              src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?q=80&w=1887&auto=format&fit=crop"
              alt="Proyecto 1"
            />
            <div className="card-overlay">
              <h3>K2021</h3>
              <p>Explore keto intro, concept in a ketogenic with keto coffee options, recipes, and more.</p>
            </div>
          </div>
          <div className="project-card project-card-center">
            <img
              src="https://images.unsplash.com/photo-1619080371491-144258310aa5?q=80&w=1964&auto=format&fit=crop"
              alt="Proyecto 2"
            />
            <div className="card-overlay">
              <h3>Keet Cafe</h3>
              <p>Homemade baking, tasty drinks, family owned cafe in Khmelnytskyi.</p>
            </div>
          </div>
          <div className="project-card project-card-right">
            <img
              src="https://images.unsplash.com/photo-1619250556999-38af9033f9d4?q=80&w=1887&auto=format&fit=crop"
              alt="Proyecto 3"
            />
            <div className="card-overlay">
              <h3>Log In</h3>
              <p>Login interface for Keet Cafe website.</p>
            </div>
          </div>
        </div>
        <div className="project-info">
          <h2>KEET CAFE</h2>
          <p className="section-subtitle">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
          <button className="view-project-button">VIEW PROJECT</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;