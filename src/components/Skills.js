import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'React', percentage: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 80 },
        { name: 'Express', percentage: 85 },
        { name: 'Databases', percentage: 75 }
      ]
    },
    {
      category: 'Other',
      skills: [
        { name: 'Docker', percentage: 85 },
        { name: 'Git', percentage: 90 },
        { name: 'UI/UX Design', percentage: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(skillBar => {
              const percentage = skillBar.getAttribute('data-percentage');
              skillBar.style.width = percentage + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const SkillBar = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-info">
        <span>{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          data-percentage={skill.percentage}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {skillsData.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
