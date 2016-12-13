import React from 'react';
import ImageLoader from 'react-imageloader';
import Preloader from './Preloader';
import '../scss/Grid.scss';

class DestinationList extends React.Component {
  preloader() {
    return <Preloader />
  }
  render(){
    const days = Math.floor((Math.random() * 15) + 1);
    const price = Math.floor((Math.random() * 500) + 100);
    return (
      <div className="grid-item is-one-third">
        <figure>
          <ImageLoader
            src={`${this.props.image}`}
            preloader={this.preloader}
          >
            Image load failed!
          </ImageLoader>
          <figcaption>
            <div>
            <span className="country">{this.props.title[0]}</span>
              <strong>{this.props.title[1]}</strong>
            </div>
            <div className="text-right">
              <span className="days">{days} days</span>
              <strong>{this.props.price}€</strong>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    );
  }
}

DestinationList.propTypes = {
  title: React.PropTypes.array,
  country: React.PropTypes.string,
  price: React.PropTypes.number,
  days: React.PropTypes.number,
};

export default DestinationList