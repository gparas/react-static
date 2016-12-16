import React from 'react';
import fontColorContrast from 'font-color-contrast';
import DestinationItem from './DestinationItem';
import DestinationList from './DestinationList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash';
import './Destinations.scss';
import '../title/Title.scss';
import '../scss/Grid.scss';

class DestinationsTest extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: 'london',
      destination: [],
    };
    this.data = [];
    for (var i = 0; i < 40; i++) {
      this.data.push({
        price: Math.floor((Math.random() * 500) + 100),
        days: Math.floor((Math.random() * 15) + 1)
      });
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({ searchString:e.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    return $.getJSON(`https://pixabay.com/api/?key=3996820-5e281734e93c2d6d757f757d0&q=${this.state.searchString}&image_type=photo&min_width=800&min_height=480&orientation=horizontal&per_page=9&lang=en,el&category=buildings`)
      .then((data) => {
        data.hits.forEach((element, i) => {
          _.extend(element, this.data[i]);
        });
        this.setState({ destination: data.hits });
      });
  }
  render(){
    const sortDestination = _.sortBy(this.state.destination, [function(n) { return n.price; }]);
    const item = sortDestination.map((item, i) => 
      <DestinationList
        key={i} 
        title={item.tags.split(',')}
        image={item.webformatURL}
        price={item.price}
        days={item.days}
      />
    );
    const TransitionOptions = {
      transitionName: "scale-fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    return (
      <section id="destinations" className="v-space">
        <div className="container">
          <header className="text-center">
            <h1 className="primary-title">
              Points of interest
            </h1>
            <p className="secondary-title">
              Search a destination
            </p>
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                value={this.state.searchString} 
                onChange={this.handleChange} 
                placeholder="Search destination..."
              />
            </form>
          </header>
          <ReactCSSTransitionGroup 
            component="div"
            className="grid grid-block"
            {...TransitionOptions} 
          >
            {item}
          </ReactCSSTransitionGroup>
        </div>
      </section>
    );
  }
}

export default DestinationsTest