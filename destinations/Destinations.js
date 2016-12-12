import React from 'react';
import fontColorContrast from 'font-color-contrast';
import DestinationItem from './DestinationItem';
import './Destinations.scss';
import '../title/Title.scss';
import '../scss/Grid.scss';

class Destinations extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: '100',
      data: [
        {country: 'France',city: 'paris', price: 120, days: 8},
        {country: 'United Kingdom',city: 'london', price: 230, days: 13},
        {country: 'Netherlands',city: 'amsterdam', price: 310, days: 10},
        {country: 'Germany',city: 'berlin', price: 310, days: 9},
        {country: 'Spain',city: 'madrid', price: 310, days: 4},
        {country: 'Italy',city: 'rome', price: 310, days: 12},
        {country: 'Portugal',city: 'lisbon', price: 310, days: 10},
        {country: 'Czech Republic',city: 'prague', price: 310, days: 6},
        {country: 'Italy',city: 'milan', price: 310, days: 4},
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({ searchString:e.target.value });
  };
  render(){
    let filteredDestination = this.state.data.filter(
      (item) => {
        return item.price >= this.state.searchString;
      }
    );
    return (
      <section id="destinations" className="v-space">
        <div className="container">
          <header className="text-center">
            <h1 className="primary-title">
              Top destinations
            </h1>
            <p className="secondary-title">
              Search top destination from
              <input 
                className="top-destination-input"
                type="number"
                step='100'
                value={this.state.searchString} 
                onChange={this.handleChange}
              />
              €
            </p>
          </header>
          <div className="grid grid-block">
          {filteredDestination.map((item, i) => 
            <DestinationItem
              key={i}
              title={item.city}
              country={item.country}
              price={item.price}
              days={item.days}
            />
          )}
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations