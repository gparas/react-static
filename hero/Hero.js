import React from 'react';
import Unsplash from 'unsplash-js';
import Title from '../title/Title';
import Nav from '../navigation/Nav';
import css from './Hero.scss';
import '../scss/Grid.scss';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: true
    };
  }
  render(){
    const unsplash = new Unsplash({
      applicationId: "4d66188560a3f9577f17edc2a8f720008149508df462c6528b3e6506694f8194",
      secret: "c40bfe342322aae748399333036ba4da6ec8b20099b4150d666784dec5a5bfdb",
      callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });
    const heroBgImage = {
      'backgroundImage': 'url(https://source.unsplash.com/1600x900/?city,paris)',
      'height': `${this.state.fullscreen ? window.innerHeight : '' }`
    };
    return (
      <section 
        className={`hero has-overlay is-dark`} 
        style={heroBgImage}
      >
        <div className="hero-head">
          <div className="container">
            <Nav />
          </div>
        </div>
        <div className="hero-body v-space">
          <div className="container">
            <Title
              title="Find your best way to anywhere"
              text="Compare and book Flights, Trains, Buses and Transfers"
            />
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="grid">
              <div className="grid-item text-center">
                <img src="../app/assets/images/award.png" />
              </div>
              <div className="grid-item text-center">
                <img src="../app/assets/images/award-2.png" />
              </div>
              <div className="grid-item text-center">
                <img src="../app/assets/images/award-3.png" />
              </div>
              <div className="grid-item text-center">
                <img src="../app/assets/images/award-4.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero