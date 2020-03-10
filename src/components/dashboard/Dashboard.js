import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { projects, auth, notification } = this.props;
        
        if(!auth.uid) return <Redirect to='/login' />

        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notification={notification}/>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {

};
const mapStateToProps = state => {
    return {
        // projects: state.project.projects
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notification: state.firestore.ordered.notification
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects', orderBy:['createdAt', 'desc'] },
        { collection: 'notification', limit:3, orderBy:['time', 'desc']}
    ])
)(Dashboard);