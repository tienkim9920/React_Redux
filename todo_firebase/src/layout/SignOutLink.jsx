import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { logOut } from '../redux/action/authAction' 
import { connect } from 'react-redux'

class SignOutLink extends Component {

  HandlerOnclick = () => {
    const idUser = null;
    
    this.props.logOut(idUser)

  }

  render() {
    return (
        <ul className="right">
            <li><Link to="/create">New Project</Link></li>
            <li>
              <Link to="/" onClick={this.HandlerOnclick}>Log Out</Link>
            </li>
            <li><Link to="/"><button className="btn btn-floating pink lighten-2">Ava</button></Link></li>
        </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    logOut: (data) => {
      dispatch(logOut(data))
    }
  }

}


export default connect(null, mapDispatchToProps)(SignOutLink);