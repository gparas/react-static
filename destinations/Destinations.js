import React from 'react';
import fontColorContrast from 'font-color-contrast';
import DestinationList from './DestinationList';
import Title from '../title/Title';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Destinations.scss';
import '../title/Title.scss';
import '../scss/Grid.scss';

class Destinations extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: '50',
      destination: [
        {city: 'barcelona', caption: 'city of artistic treasures'},
        {city: 'berlin', caption: 'ich bin ein berliner'},
        {city: 'istanbul', caption: 'the city of flavors'},
        {city: 'london', caption: 'Elementary, dear Watson'},
        {city: 'paris', caption: 'is always a good idea'},
        {city: 'rome', caption: 'all roads lead to Rome'},
        {city: 'prague', caption: 'will sweep you off your feet'},
        {city: 'stockholm', caption: 'everything works good'},
        {city: 'zurich', caption: "chocolate lover's paradise"},
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.setState({ searchString:e.target.value });
  };
  render(){
    const item = this.state.destination.map((item, i) => 
      <DestinationList
        key={i}
        city={item.city}
        caption={item.caption}
        price={Math.floor((Math.random() * 500) + 100)}
      />
    );
    return (
      <section id="destinations" className="v-space">
        <div className="container">
          <Title
              title="Top destinations"
              text="Proin iaculis erat nec sapien vehicula scelerisque"
            />
            <div className="grid grid-block">
              {item}
            </div>
        </div>
      </section>
    );
  }
}

export default Destinations