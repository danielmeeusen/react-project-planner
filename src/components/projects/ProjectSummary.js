import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card grey darken-2 z-depth-0 project-summary">
      <div className="card-content white-text">
        <span className="card-title">{project.title}</span>
        <p>Posted by User</p>
        <p className="white-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
