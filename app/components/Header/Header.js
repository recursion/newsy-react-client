import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import './style.scss';

//          <img src={Banner} alt="react-redux-boilerplate - Logo" />

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/search">
            Search 
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
