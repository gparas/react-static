import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SearchMaskInput extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      searchString: '',
      airports: [
        {country: 'United Kingdom', name: 'All airports', code: 'LON', city: 'London'},
        {country: 'France', name: 'All airports', code: 'PAR', city: 'Paris'},
        {country: 'Germany', name: 'Berlin Brandenburg Willy Brandt', code: 'BER', city: 'Berlin'},
        {country: 'Italy', name: 'All airports', code: 'ROM', city: 'Rome'},
        {country: 'Turkey', name: 'Ataturk Airport', code: 'IST', city: 'Istanbul'},
        {country: 'Sweden', name: 'All airports', code: 'STO', city: 'Stockholm'},
        {country: 'Czech Republic', name: 'Vaclav Havel Prague Airport', code: 'PRG', city: 'Prague'},
        {country: 'Spain', name: 'Barcelona Int. Apt', code: 'BCN', city: 'Barcelona'},
        {country: 'Switzerland', name: 'Zurich Int. Apt', code: 'ZRH', city: 'Zurich'},
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e){
    this.setState({ searchString: e.target.value, isOpen: true });
  };
  handleFocus(e) {
    e.target.select();
  }
  handleClick(item){
    const location = item.target.title;
    this.setState({ searchString: location, isOpen: false });
    this.props.onSelectCity(item.target.dataset.city);
  }
  handleBlur(){
    this.setState({ isOpen: false });
  }
  render(){
    let filteredAirport = this.state.airports.filter(
      (airport) => {
        return airport.city.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
      }
    );
    const TransitionOptions = {
      transitionName: "dropdown",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    const { searchString, isOpen } = this.state;
    return (
      <div className="form-control">
        <input 
          type="text"
          value={searchString}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {/*<span className={`${searchString ? 'text-success' : ''} icon-map-pin`}></span>*/}
        <ReactCSSTransitionGroup 
          {...TransitionOptions} 
        >
        {isOpen ?
          <ul className="dropdown"> 
            {filteredAirport.map((item, i) =>
              <li key={i}>
                <a 
                  href="#"
                  data-city={item.city}
                  title={`${item.city} (${item.code}), ${item.country}`} 
                  onClick={ this.handleClick }
                >
                  <b>{item.city}</b> - {item.name} ({item.code}), {item.country}
                </a>
              </li>
            )}
          </ul>
          : null
        }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

SearchMaskInput.propTypes = {
  onSelectCity: React.PropTypes.func
};

export default SearchMaskInput