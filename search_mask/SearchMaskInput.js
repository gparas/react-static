import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SearchMaskInput extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      searchString: '',
      airports: [
        'Athens - Eleftherios Venizelos (ATH), Greece', 
        'London - All airports (LON), United Kingdom', 
        'Paris - All airports (PAR), France', 
        'Berlin - Berlin Brandenburg Willy Brandt (BER), Germany', 
        'Rome - All airports (ROM), Italy', 
        'Thessaloniki - Macedonia International (SKG), Greece', 
        'Amsterdam - Schiphol Int. Apt (AMS), Netherlands', 
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleChange(e){
    this.setState({ searchString: e.target.value, isOpen: true });
  };
  handleFocus(e) {
    e.target.select();
  }
  handleClick(item){
    const location = item.target.title
    this.setState({ searchString: location, isOpen: false });
  }
  render(){
    let filteredAirport = this.state.airports.filter(
      (airport) => {
        return airport.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
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
        />
        <span className={`${searchString ? 'text-success' : ''} icon-map-pin`}></span>
        <ReactCSSTransitionGroup 
          {...TransitionOptions} 
        >
        {isOpen ?
          <ul className="dropdown"> 
            {filteredAirport.map((item, i) =>
              <li key={i}>
                <a href="#" title={item} onClick={ this.handleClick }>{item}</a>
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

export default SearchMaskInput