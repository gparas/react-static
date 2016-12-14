import React from 'react';
import fontColorContrast from 'font-color-contrast';
import DestinationList from './DestinationList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Destinations.scss';
import '../title/Title.scss';
import '../scss/Grid.scss';

class Destinations extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: '50',
      destination: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.DestinationList();
  }
  DestinationList() {
    return $.getJSON('https://pixabay.com/api/?key=3996820-5e281734e93c2d6d757f757d0&id=1506918,1606929,1504668,1373450,1272588,933713,1328467,1824368,1345586')
      .then((data) => {
        data.hits.forEach((element) => {
          element.price = Math.floor((Math.random() * 500) + 100);
          element.days = Math.floor((Math.random() * 15) + 1);
        });
        this.setState({ destination: data.hits });
      });
  }
  handleChange(e){
    this.setState({ searchString:e.target.value });
  };
  render(){
    let filteredDestination = this.state.destination.filter(
      (item) => {
        return item.downloads >= this.state.searchString;
      }
    );
    const item = filteredDestination.map((item, i) => 
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
              Top destinations
            </h1>
            <p className="secondary-title">
              Search top destination from
              <input 
                className="top-destination-input"
                type="number"
                step='50'
                value={this.state.searchString} 
                onChange={this.handleChange}
              />
              €
            </p>
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

export default Destinations