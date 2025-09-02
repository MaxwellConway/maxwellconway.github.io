import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Sample project data
  const sampleProjects = [
    {
      id: 1,
      title: 'Modern Web Application',
      description: 'A full-stack web application built with React and Node.js',
      image: 'project1.jpg',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application built with React Native',
      image: 'project2.jpg',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Redux'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets',
      image: 'project3.jpg',
      category: 'data',
      tags: ['D3.js', 'JavaScript', 'SVG'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment processing',
      image: 'project4.jpg',
      category: 'web',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for business intelligence',
      image: 'project5.jpg',
      category: 'data',
      tags: ['Python', 'TensorFlow', 'Pandas'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'IoT Home Automation',
      description: 'Smart home system using IoT devices and cloud services',
      image: 'project6.jpg',
      category: 'iot',
      tags: ['Raspberry Pi', 'MQTT', 'AWS IoT'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  useEffect(() => {
    // Simulate loading projects
    const loadProjects = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects(sampleProjects);
      setIsLoading(false);
    };

    loadProjects();
  }, [sampleProjects]);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const filteredProjects = currentFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === currentFilter);

  const ProjectCard = ({ project }) => (
    <div className="project-card animate-on-scroll">
      <div className="project-img">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demoUrl} className="project-link">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Demo
          </a>
          <a href={project.codeUrl} className="project-link">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'web' ? 'active' : ''}`}
            onClick={() => handleFilterChange('web')}
          >
            Web
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => handleFilterChange('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'data' ? 'active' : ''}`}
            onClick={() => handleFilterChange('data')}
          >
            Data
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'iot' ? 'active' : ''}`}
            onClick={() => handleFilterChange('iot')}
          >
            IoT
          </button>
        </div>
        
        <div className="projects-grid">
          {isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          ) : (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
