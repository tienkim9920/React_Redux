import React, { Component } from "react";

class Notification extends Component {
  render() {
    const { projects } = this.props

    return (
        <div className="card notice">
          { projects && projects.map(project => {
            return (
                <div key={project.id} className="notice_padding grey-text text-darken-3">
                    <span>{project.title} was created on <div className="grey-text">
                        {project.timeAt}
                    </div></span>
                </div>
            )
          }) }
        </div>
    );
  }
}

export default Notification;