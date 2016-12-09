import React from 'react';
import { TwitterPicker } from 'react-color';
import fontColorContrast from 'font-color-contrast';
import css from './Settings.scss';
import '../scss/Icons.scss';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
      background: '#222'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }
  handleClose(){
    this.setState({ displayColorPicker: false })
  };
  handleChange(color){
    this.setState({ background: color.hex });
  };
  render(){
    const settingsStyle = {
      background: `${this.state.background}`,
      color: fontColorContrast(`${this.state.background}`)
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
      <div className="settings" style={settingsStyle}>
        {this.props.children}
        <div className="settings-trigger" onClick={ this.handleClick }><span className="icon-tools-2"></span></div>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose } />
          <TwitterPicker triangle="top-right" onChange={ this.handleChange }/>
        </div> : null }
      </div>
    );
  }
}

Settings.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
};

export default Settings