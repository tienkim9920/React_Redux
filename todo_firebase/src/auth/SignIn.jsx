import React, { Component } from 'react';

class SignIn extends Component {

    render() {
        return (
            <div className="container">
                <form className="col s12 m4 l8 z-detph-1 card">
                    <h4 className="center-align">Sign In</h4>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <button className="btn btn-raised">Sign In</button>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignIn