import React from 'react';
import '../scss/Grid.scss';

class DestinationItem extends React.Component {
  render(){
    return (
      <div className="grid-item is-one-third" >
        <figure>
          <img src={`https://source.unsplash.com/800x600/?${this.props.title}`} />
          <figcaption>
            <div>{this.props.title}</div>
            <div>{this.props.price}€</div>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    );
  }
}

DestinationItem.propTypes = {
  title: React.PropTypes.string,
  price: React.PropTypes.number,
};

export default DestinationItem