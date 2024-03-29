import React from "react";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "D&D Character Generator",
      imageUrl: "./dndgenimg.png",
      projectUrl: "https://dnd-generator-aorl.onrender.com/",
      githubUrl: "https://github.com/EmpireAntz/dnd-gen",
    },
    {
      title: "Blooker",
      imageUrl: "./blookerimg.png",
      projectUrl: "https://empireantz.github.io/book-search/",
      githubUrl: "https://github.com/EmpireAntz/book-search",
    },
    {
      title: "Convo",
      imageUrl: "./convoimg.png",
      projectUrl: "https://instant-message-bc5aadb93a5f.herokuapp.com/",
      githubUrl: "https://github.com/EmpireAntz/instant-message",
    },
    {
      title: "Weather Forecast",
      imageUrl: "./weatherimg.png",
      projectUrl: "https://empireantz.github.io/weather-forecast/",
      githubUrl: "https://github.com/EmpireAntz/weather-forecast",
    },
    {
      title: "Note Taker",
      imageUrl: "./notetakerimg.png",
      projectUrl: "https://shrouded-spire-73338-77126ebbed1f.herokuapp.com/",
      githubUrl: "https://github.com/EmpireAntz/note-taker",
    },
    {
      title: "README Generator",
      imageUrl: "./readmeimg.png",
      projectUrl: "https://github.com/EmpireAntz/readme-generator",
      githubUrl: "https://github.com/EmpireAntz/readme-generator",
    },
  ];

  return (
    <div className="container mt-4 portfolio-section">
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
