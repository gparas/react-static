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
        {city: 'paris', price: 120},
        {city: 'london', price: 230},
        {city: 'amsterdam', price: 310},
        {city: 'berlin', price: 310},
        {city: 'madrid', price: 310},
        {city: 'rome', price: 310},
        {city: 'lisbon', price: 310},
        {city: 'prague', price: 310},
        {city: 'milan', price: 310},
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
              price={item.price}
            />
          )}
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations