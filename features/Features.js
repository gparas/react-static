import React from 'react';
import { TwitterPicker } from 'react-color';
import FeatureItem from './FeatureItem';
import '../scss/Grid.scss';

class Features extends React.Component {
  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
      background: '#fff',
      data: {
        features: [
          {title: 'Fast and easy-to-use', text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'},
          {title: 'Safe and secure', text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'},
          {title: 'Your travel best companion', text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'}
        ]
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose(){
    this.setState({ displayColorPicker: false })
  };
  handleChange(color){
    this.setState({ background: color.hex });
  };
  render(){
    const bgColor = {
      background: `${this.state.background}`
    }
    const popover = {
      position: 'absolute',
      zIndex: '2',
      top: '85px',
      right: '21px'
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (
      <div className="relative">
        <section className="features v-space text-center" style={bgColor} onClick={ this.handleClose }>
          <div className="container">
            <h2 className="primary-title">Why choose tripsta</h2>
            <p>Proin iaculis erat nec sapien vehicula scelerisque - Nullam a orci et elit gravida faucibus.</p>
            <div className="grid grid-block">
              {this.state.data.features.map((feature,i) => 
                <FeatureItem 
                  key={i}
                  title={feature.title}
                  text={feature.text}
                />
              )}
            </div>
          </div>
        </section>
        <div className="settings" onClick={ this.handleClick }>settings</div>
        { this.state.displayColorPicker ? <div style={ popover }>
          <TwitterPicker triangle="top-right" onChange={ this.handleChange }/>
        </div> : null }
      </div>
    );
  }
}

export default Features