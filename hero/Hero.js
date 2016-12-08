import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Switch from 'react-toggle-switch'
import Title from '../title/Title';
import Nav from '../navigation/Nav';
import css from './Hero.scss';
import '../scss/Grid.scss';
import '../settings/Settings.scss';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: false,
      options: false,
      opacity: 4
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleCheck() {
    this.setState({fullscreen: !this.state.fullscreen})
  }
  handleClick() {
    this.setState({options: !this.state.options})
  }
  handleChange(e){
    this.setState({opacity: e.target.value});
  }
  render(){
    const heroHeight = {
      'height': `${this.state.fullscreen ? window.innerHeight + 'px' : '' }`
    };
    const bgImage = {
      'backgroundImage': 'url(https://source.unsplash.com/1600x900/?city,paris)',
      'opacity': `.${this.state.opacity}`
    };
    return (
      <section 
        className="hero is-dark settings"
        style={heroHeight}
      >
        <div className="hero-image" style={bgImage}></div>
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
            <OwlCarousel slideSpeed={300} pagination  itemsCustom={[[0, 1],[768, 3], [992, 4]]} >
              <div className="text-center"><img src="../app/assets/images/award.png" /></div>
              <div className="text-center"><img src="../app/assets/images/award-2.png" /></div>
              <div className="text-center"><img src="../app/assets/images/award-3.png" /></div>
              <div className="text-center"><img src="../app/assets/images/award-4.png" /></div>
            </OwlCarousel>
          </div>
        </div>

        <div className="settings-trigger" onClick={ this.handleClick }>
          <span className="icon-tools-2"></span>
        </div>
        {this.state.options ? 
          <div className="option-container">
            <div className="option-item">
              <div>Full Screen</div>
              <label className="switch">
                <input type="checkbox" onClick={this.handleCheck}/>
                <div className="slider"></div>
              </label>
            </div>
            <div className="option-item">
              <div>Full Screen</div>
              <input type="number" min="1" max="5" value={this.state.opacity} onChange={this.handleChange}/>
            </div>
          </div>
          : null
        }
      </section>
    );
  }
}

export default Hero