import React from 'react';
import ContentEditable from 'react-contenteditable';
import css from './Title.scss';

class Title extends React.Component {
  constructor(props) {
    super();
    this.state = {
      html: `<h1 class="primary-title ${props.titleClass}">${props.title}</h1><p class="secondary-title">${props.text}</p>`
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({html: e.target.value});
  }
  render(){
    return (
      <header className="text-center">
        <ContentEditable
          html={this.state.html}
          disabled={false}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

Title.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  titleClass: React.PropTypes.string
};

export default Title