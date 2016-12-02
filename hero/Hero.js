import React from 'react';
import Nav from '../navigation/Nav';
import css from './Hero.scss';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: false,
      title: 'Find your best way to anywhere'
    };
  }
  update(e){
    this.setState({title: e.target.value})
  }
  render(){
    const heroBgImage = {
      'background-image': 'url(https://source.unsplash.com/category/nature)',
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
            <h1 className="primary-title" onInput={this.update.bind(this)}>{this.state.title}</h1>
            <p className="secondary-title">Compare and book Flights, Trains, Buses and Transfers</p>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <Nav />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero