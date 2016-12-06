import React from 'react';
import ContentEditable from 'react-contenteditable';
import '../scss/Grid.scss';

class FeatureItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      html: `<h3 class="secondary-title">${props.title}</h3><p>${props.text}</p>`
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({html: e.target.value});
  }
  render(){
    return (
      <div className="grid-item grid-block-item is-one-third">
        <ContentEditable
          html={this.state.html}
          disabled={false}      
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

FeatureItem.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string
};

export default FeatureItem