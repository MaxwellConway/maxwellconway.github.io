import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with expertise in creating responsive web applications and self-hosted solutions. 
              With a strong foundation in modern technologies, I enjoy solving complex problems and building intuitive user interfaces.
            </p>
            <p>
              My approach combines technical excellence with creative design thinking to deliver projects that not only function flawlessly but also provide exceptional user experiences.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="img-placeholder about-img-placeholder">
              <div className="about-placeholder-text">Maxwell Conway</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
