import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import '../styles/Project.css';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={deployedLink} target="_blank" rel="noopener noreferrer">
      View App
    </a>
    <a href={repoLink} target="_blank" rel="noopener noreferrer">
      GitHub Repo
    </a>
  </div>
);

// Add prop validation
Project.propTypes = {
  title: PropTypes.string.isRequired,       // Title must be a string
  image: PropTypes.string.isRequired,       // Image must be a string (URL)
  deployedLink: PropTypes.string.isRequired, // Deployed link must be a string (URL)
  repoLink: PropTypes.string.isRequired,    // Repo link must be a string (URL)
};

export default Project;
