import React from 'react';
import PropTypes from 'prop-types';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstname} {project.authorLastname}</p>
                <p className="grey-text"> 1st march 2020</p>
            </div>
        </div>
    );
};

ProjectSummary.propTypes = {
    
};

export default ProjectSummary;