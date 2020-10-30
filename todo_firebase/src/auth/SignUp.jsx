import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../redux/action/authAction'

class SignUp extends Component {

    state = {
        id: "",
        fullName: "",
        email: "",
        password: "",
        isChecked: false
    }

    HandlerChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    HandlerSubmit = (e) => {
        e.preventDefault();

        this.setState({
            isChecked: true
        })

        const dataStore = {
            id: Math.random().toString(),
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        }

        console.log(dataStore)

        this.props.signUp(dataStore)

        this.setState({
            fullName: "",
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="container">
                <form className="col s12 m4 l8 z-detph-1 card" onSubmit={this.HandlerSubmit}>
                    <h4 className="center-align">Sign Up</h4>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="fullName" type="text" value={this.state.fullName} className="validate" onChange={this.HandlerChange} />
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="email" type="email" value={this.state.email} className="validate" onChange={this.HandlerChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="password" type="password" value={this.state.password} className="validate" onChange={this.HandlerChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    { this.state.isChecked && 
                        <p className="green-text accent-3 center">Sign Up Success!</p>
                    }
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <button className="btn btn-raised" type="submit">Sign Up</button>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signUp: (data) => {
            dispatch(signUp(data))
        }
    }

}

export default connect(null, mapDispatchToProps)(SignUp)