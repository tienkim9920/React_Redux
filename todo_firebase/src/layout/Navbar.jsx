import React, { Component } from "react";
import SignOutLink from './SignOutLink';
import SignInLink from './SignInLink';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {

  render() {

    var idUser = this.props.auth

    var linkNavbar

    if (idUser){
        linkNavbar = (
          <SignOutLink />
        )
    }else{
      linkNavbar = (
        <SignInLink />
      )
    }

    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            TienKim
          </Link>
           { linkNavbar }
        </div>
      </nav>
    );
  }
}

const mapStateToProp = (state) => {

  return {
    auth: state.auth.idUser
  }

}

export default connect(mapStateToProp)(Navbar);
