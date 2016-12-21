import React from 'react';
import css from './Nav.scss';

class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="navbar-brand">
            <img src="../app/assets/images/logo_white.png" />
          </a>
          <ul className="navbar-nav">
            <li><a href="#">Flights</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Cars</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="#" className="navbar-link hidden-xs" style={{fontSize: '14px'}}>
            <img src="../app/assets/images/Flags-Icon-Set/24x24/GB.png" />&nbsp;&nbsp;
            <span>English (EUR)</span>
          </a>
          <a href="#" className="navbar-link">
            <span className="icon-notifications"></span>
            <span className="navbar-badge">2</span>
          </a>
          <a href="#" className="navbar-link">
            <span className="icon-person"></span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav