import React from 'react';
import ImageLoader from 'react-imageloader';
import Preloader from './Preloader';
import '../scss/Grid.scss';

class DestinationItem extends React.Component {
  preloader() {
    return <Preloader />
  }
  render(){
    return (
      <div className="grid-item is-one-third">
        <figure>
          <ImageLoader
            src={`https://source.unsplash.com/800x600/?${this.props.title}`}
            preloader={this.preloader}
          >
            Image load failed!
          </ImageLoader>
          <figcaption>
            <div>
              <span className="country">{this.props.country}</span>
              <strong>{this.props.title}</strong>
            </div>
            <div className="text-right">
              <span className="days">{this.props.days} days</span>
              <strong>{this.props.price}€</strong>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    );
  }
}

DestinationItem.propTypes = {
  title: React.PropTypes.string,
  country: React.PropTypes.string,
  price: React.PropTypes.number,
  days: React.PropTypes.number,
};

export default DestinationItem