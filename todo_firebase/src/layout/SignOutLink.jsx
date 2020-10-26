import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SignOutLink extends Component {
  render() {
    return (
        <ul className="right">
            <li><Link to="/create">New Project</Link></li>
            <li><Link to="/">Log out</Link></li>
            <li><Link to="/"><button className="btn btn-floating pink lighten-2">TK</button></Link></li>
        </ul>
    );
  }
}

export default SignOutLink;