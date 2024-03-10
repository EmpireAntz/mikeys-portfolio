import React from "react";

function ProjectCard({ title, imageUrl, projectUrl, githubUrl }) {
  return (
    <div className="card bg-dark text-white flex-fill position-relative">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} className="card-img" alt={title} />
        <div className="card-img-overlay d-flex align-items-end p-0">
          <h5 className="text-white w-100 text-center bg-dark bg-opacity-75 py-2">
            {title}
          </h5>
        </div>
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="position-absolute top-0 end-0 m-2"
      >
        <i className="fab fa-github fa-3x" style={{ color: "grey" }}></i>
      </a>
    </div>
  );
}

export default ProjectCard;
