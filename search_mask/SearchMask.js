import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SearchMaskInput from './SearchMaskInput';
import css from './SearchMask.scss';

class SearchMask extends React.Component {
  render(){
    return (
      <div id="search-mask">
        <SearchMaskInput placeholder="From city or airport" />
        <SearchMaskInput placeholder="To city, country or region" />
        <div className="form-control">
          <input 
            type="text" 
            value="12/06/2017 - 22/06/2017" 
            placeholder="Departure - Arrival"
            readOnly
          />
          <span className="icon-calendar text-success"></span>
        </div>
      </div>
    );
  }
}

export default SearchMask