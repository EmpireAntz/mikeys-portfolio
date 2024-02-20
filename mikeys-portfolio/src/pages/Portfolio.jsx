import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: 'Convo',
      imageUrl: './public/convoimg.png',
      projectUrl: 'https://instant-message-bc5aadb93a5f.herokuapp.com/'
    },
    {
      title: 'Blooker',
      imageUrl: './public/blookerimg.png',
      projectUrl: 'https://empireantz.github.io/book-search/'
    },
    {
      title: 'D&D Character Generator',
      imageUrl: './public/dndgenimg.png',
      projectUrl: 'https://github.com/EmpireAntz/dd-image-gen'
    },
    {
      title: 'Weather Forecast',
      imageUrl: './public/weatherimg.png',
      projectUrl: 'https://empireantz.github.io/weather-forecast/'
    },
    {
      title: 'Note Taker',
      imageUrl: './public/notetakerimg.png',
      projectUrl: 'https://shrouded-spire-73338-77126ebbed1f.herokuapp.com/'
    },
    {
      title: 'proj6',
      imageUrl: './public/blookerimg.png',
      projectUrl: 'https://github.com/EmpireAntz/dd-image-gen'
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6 d-flex" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;