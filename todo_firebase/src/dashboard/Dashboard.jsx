import React, { Component } from "react";
import Notification from './Notification';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    
    const { projects, auth } = this.props

    if (!auth){
        return <Redirect to="/signIn" />
    }

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification projects={projects}/>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        auth: state.auth.idUser
    }
}

export default connect(mapStateToProps)(Dashboard);