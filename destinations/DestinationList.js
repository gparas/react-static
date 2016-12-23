import React from 'react';
import { Link } from 'react-router';
import ImageLoader from 'react-imageloader';
import Preloader from './Preloader';
import '../scss/Grid.scss';

class DestinationList extends React.Component {
  preloader() {
    return <Preloader />
  }
  render(){
    return (
      <div className="grid-item is-one-third">
        <figure>
          <ImageLoader
            src={`../app/assets/images/destinations/${this.props.city}.jpg`}
            preloader={this.preloader}
          >
            Image load failed!
          </ImageLoader>
          <figcaption>
            <div>
            <span className="country">{this.props.city}</span>
              <strong>{this.props.caption}</strong>
            </div>
            <div className="text-right">
              <span className="days">from</span>
              <strong>{this.props.price}€</strong>
            </div>
          </figcaption>
          <Link to="/test"></Link>
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