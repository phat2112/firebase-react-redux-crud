import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ProjectSummary from './ProjectSummary';
import {Redirect} from 'react-router-dom'

const ProjectDetail = (props) => {
    const id = props.match.params.id
    const { project, auth } = props
    console.log('abcc',{ project })

    if(!auth.uid) return <Redirect to='/login' />

    if(project){
        return (
            <div className=' container section project-details'>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {project.authorFirstname} {project.authorLastname}</div>
                        <div>2nd march 10 am </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="container center"> Loading Project ....</div>
        )
    }
};

ProjectDetail.propTypes = {
    
};
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects; //get all projects
    const project = projects ? projects[id] : null;// get project with specified id
    return {
        project: project, //update state equal to state got from projects
        auth: state.firebase.auth,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetail);