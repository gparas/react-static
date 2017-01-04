import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Title from '../title/Title';
import Nav from '../navigation/Nav';
import SearchMask from '../search_mask/SearchMask';
import css from './Hero.scss';
import '../scss/Grid.scss';
import '../settings/Settings.scss';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: false,
      checked: false,
      selected: false,
      options: false,
      opacity: 4,
      SearchMaskV2: true, 
      city: ''
    };
    this.handleSelectedChildCity = this.handleSelectedChildCity.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeHeroMask = this.handleChangeHeroMask.bind(this);
  }
  handleSelectedChildCity(selectedCity){
    this.setState({ city: selectedCity });
  };
  handleCheck() {
    this.setState({fullscreen: !this.state.fullscreen})
    this.setState({checked: !this.state.checked})
  }
  handleChangeHeroMask() {
    this.setState({selected: !this.state.selected})
    this.setState({SearchMaskV2: !this.state.SearchMaskV2}) 
  }
  handleClick() {
    this.setState({options: !this.state.options})
  }
  handleChange(e){
    this.setState({opacity: e.target.value});
  }
  handleChildClick(e){
    alert("The Child HTML is: " + e.target.value);
  }
  render(){
    const { fullscreen, opacity, city } = this.state;
    const heroHeight = {
      'height': `${fullscreen ? window.innerHeight + 'px' : '' }`
    };
    const bgImage = {
      'backgroundImage': `url(../app/assets/images/destinations/${city.length ? city : 'paris'}.jpg)`,
      'opacity': `.${opacity}`
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    return (
      <section 
        className={`hero is-dark settings ${this.state.SearchMaskV2 ? 'v2' : ''}`}
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
            <p>&nbsp;</p>
            <SearchMask 
              selectedCity={this.handleSelectedChildCity}
              onClick={this.handleChildClick.bind(this)} 
            />
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            
          </div>
        </div>

        <div className="settings-trigger" onClick={ this.handleClick }>
          <span className="icon-tools-2"></span>
        </div>
        {this.state.options ? 
          <div className="option-popover">
            <div style={ cover } onClick={ this.handleClick } />
            <div className="option-item">
              <div>Full Screen</div>
              <label className="switch">
                <input 
                  type="checkbox"
                  checked={this.state.checked}
                  onChange={this.handleCheck} 
                />
                <div className="slider"></div>
              </label>
            </div>
            <div className="option-item">
              <div>Overlay</div>
              <input type="number" min="1" max="5" value={this.state.opacity} onChange={this.handleChange}/>
            </div>
            <div className="option-item">
              <div>Search Mask v2</div>
              <label className="switch">
                <input 
                  type="checkbox"
                  checked={this.state.selected}
                  onChange={this.handleChangeHeroMask} 
                />
                <div className="slider"></div>
              </label>
            </div>
          </div>
          : null
        }
      </section>
    );
  }
}

export default Hero