import React from 'react';
import ContentEditable from 'react-contenteditable';
import Nav from '../navigation/Nav';
import css from './Hero.scss';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      fullscreen: false,
      html: '<h1 class="primary-title">Find your best way to anywhere</h1><p className="secondary-title">Compare and book Flights, Trains, Buses and Transfers</p>'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({html: e.target.value});
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
              <ContentEditable
                html={this.state.html}
                disabled={false}      
                onChange={this.handleChange}
              />
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