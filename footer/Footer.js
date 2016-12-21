import React from 'react';
import Settings from '../settings/Settings';
import css from './Footer.scss';

class Footer extends React.Component {
  render(){
    return (
      <Settings background="#1a1a1a">
        <footer className="site-footer v-space-s">
          <div className="container">
            <div className="grid">
              <div className="grid-item is-one-third">
                <h3>Top countries</h3>
                <a href="#">Flights to United States</a>
                <a href="#">Flights to United Kingdom</a>
                <a href="#">Flights to Spain</a>
                <a href="#">Flights to Thailand</a>
                <a href="#">Flights to India</a>
                <a href="#">Flights to Italy</a>
                <a href="#">Flights to Germany</a>
                <a href="#">Flights to Denmark</a>
                <a href="#">Flights to France</a>
                <a href="#">Flights to Australia</a>
              </div>
              <div className="grid-item is-one-third">
                <h3>Top cities</h3>
                <a href="#">Flights to London, United Kingdom</a>
                <a href="#">Flights to New York, United States</a>
                <a href="#">Flights to Bangkok, Thailand</a>
                <a href="#">Flights to Copenhagen, Denmark</a>
                <a href="#">Flights to Orlando, United States</a>
                <a href="#">Flights to Paris, France</a>
                <a href="#">Flights to Dubai, United Arab Emirates</a>
                <a href="#">Flights to Singapore, Singapore</a>
                <a href="#">Flights to Istanbul, Turkey</a>
                <a href="#">Flights to Hong Kong, Hong Kong</a>
              </div>
              <div className="grid-item is-one-third">
                <h3>International sites</h3>
                <div className="grid">
                  <div className="grid-item is-one-half">
                    <a href="#">Billige flybilletter</a>
                    <a href="#">Billigflüge</a>
                    <a href="#">Flights</a>
                    <a href="#">Cheap Flights</a>
                    <a href="#">Vuelos baratos</a>
                    <a href="#">Halvat Lennot</a>
                    <a href="#">Vol pas cher</a>
                  </div>
                  <div className="grid-item is-one-half">
                    <a href="#">Voli low cost</a>
                    <a href="#">Billige flybilletter</a>
                    <a href="#">Goedkope vliegtickets</a>
                    <a href="#">Voos baratos</a>
                    <a href="#">Cheap Flights</a>
                    <a href="#">Flygresor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Settings>
    );
  }
}

export default Footer