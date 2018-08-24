import React from 'react';
// import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <h2 className="title">Newsy</h2>
        <h6 className="subtitle">Search the news in style.</h6>
        <div className="nav-bar">
          {/* example router link
            <Link className="router-link" to="/">
              Home
          */}
        </div>
      </div>
    );
  }
}

export default Header;
