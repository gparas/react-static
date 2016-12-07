import React from 'react';
import Title from '../title/Title';
import Nav from '../navigation/Nav';
import css from './Hero.scss';
import '../scss/Grid.scss';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: false
    };
  }
  render(){
    const heroBgImage = {
      'backgroundImage': 'url(https://source.unsplash.com/category/nature)',
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