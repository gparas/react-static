import React from 'react';
import css from './Nav.scss';

class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="navbar-brand">
            tripsta
          </a>
        </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li><a href="#">Flights</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Cars</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav