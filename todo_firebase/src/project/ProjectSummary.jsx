import React, { Component } from "react";
import { Link } from 'react-router-dom'

class ProjectSummary extends Component {
    render() {

        const { project } = this.props

        return (
            <Link to={'/detail/' + project.id}>
                <div className="card z-depth-0 project_summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                        <div className="grey-text">
                            {project.timeAt}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectSummary;