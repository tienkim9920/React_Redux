import React, { Component } from "react";
import SignOutLink from './SignOutLink';
import SignInLink from './SignInLink';
import { Link } from 'react-router-dom'

class Navbar extends Component {

  state = {
    isLogin: false
  }

  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            TienKim
          </Link>
          {
            this.state.isLogin ? <SignOutLink /> : <SignInLink />
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;
