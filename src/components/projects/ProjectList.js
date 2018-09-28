import React from 'react';
import ProjectSummary from './ProjectSummary';

// argument is a destructuring from props
const ProjectList = ({ projects }) => {
  // projects && project.map functions as if(projects){ do this }
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
