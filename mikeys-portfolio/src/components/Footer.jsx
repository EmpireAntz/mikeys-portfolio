import React from "react";

function Footer() {
  return (
    <footer className="text-center py-3">
      <div className="container">
        <a
          href="https://www.linkedin.com/in/michael-whipple-569a5a2b5/"
          className="me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/EmpireAntz"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/mikeyfullstack"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
