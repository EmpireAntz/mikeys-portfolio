import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: 'Convo',
      imageUrl: '',
      projectUrl: 'http://link_to_project_1.com'
    },
    {
        title: 'Book Looker',
        imageUrl: '',
        projectUrl: 'http://link_to_project_1.com'
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;