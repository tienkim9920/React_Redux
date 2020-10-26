import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SignInLink extends Component {
  render() {
    return (
        <ul className="right">
            <li><Link to="/signIn">Sign In</Link></li>
            <li><Link to="/signUp">Sign Up</Link></li>
        </ul>
    );
  }
}

export default SignInLink;