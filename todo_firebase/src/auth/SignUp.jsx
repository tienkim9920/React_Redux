import React, { Component } from 'react';

class SignUp extends Component {

    state = {
        fullname: "",
        email: "",
        password: "",
        test: ""
    }

    HandlerChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    HandlerSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form className="col s12 m4 l8 z-detph-1 card" onSubmit={this.HandlerSubmit}>
                    <h4 className="center-align">Sign Up</h4>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="fullname" type="text" className="validate" onChange={this.HandlerChange} />
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="email" type="email" className="validate" onChange={this.HandlerChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="password" type="password" className="validate" onChange={this.HandlerChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <button className="btn btn-raised">Sign Up</button>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignUp