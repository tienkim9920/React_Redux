import React, { Component } from 'react';
import { createProject } from '../redux/action/projectAction'
import { connect } from 'react-redux'

class CreateProject extends Component {

    state = {
        id: "",
        title: "",
        content: "",
        timeAt: "",
        isChecked: false
    }

    HandlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    HandlerSubmit = (e) => {
        e.preventDefault();
        
        const time = new Date()

        var getDate = time.getDate()

        var getMonth = time.getMonth()

        var getYear = time.getFullYear()

        var strTimeAt = getDate + "-" + getMonth + "-" + getYear

        var idRandom = Math.random().toString()

        this.setState({
            id: idRandom,
            timeAt: strTimeAt,
            isChecked: true
        })

        this.props.createProject(this.state)

        this.setState({
            title: "",
            content: ""
        })
    }

    render() {
        
        return (
            <div className="container">
                <form className="col s12 m4 l8 z-detph-1 card" onSubmit={this.HandlerSubmit}>
                    <h4 className="center-align">New Project</h4>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input name="title" type="text" value={this.state.title} className="validate"
                             onChange={this.HandlerChange} required/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input name="content" type="text" value={this.state.content} className="validate"
                             onChange={this.HandlerChange} required/>
                            <label htmlFor="content">Content</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    { this.state.isChecked && 
                        <p className="green-text accent-3 center">New Project Success!</p>
                    }
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <button className="btn btn-raised" type="submit">Create</button>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchtToProps = (dispatch) => {
    return {
        createProject: (project) => {
            dispatch(createProject(project))
        }
    }
}

export default connect(null ,mapDispatchtToProps)(CreateProject)

