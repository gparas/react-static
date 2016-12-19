import React from 'react';
import SearchMaskInput from './SearchMaskInput';
import css from './SearchMask.scss';

class SearchMask extends React.Component {
  constructor() {
    super();
    this.handleSelesct = this.handleSelesct.bind(this);
  }
  handleSelesct(cityValue){
    this.props.onSelectCityName(cityValue.toLowerCase());
  };
  render(){
    return (
      <div id="search-mask">
        <div className="form-control has-icon">
          <input 
            type="text" 
            value='Athens - Eleftherios Venizelos (ATH), Greece'
            placeholder="From city or airport" 
            readOnly
          />
          <span className="icon-map-pin text-success"></span>
        </div>
        <SearchMaskInput 
          placeholder="To city, country or region" 
          onSelectCity={this.handleSelesct}
        />
        <div className="form-control has-icon">
          <input 
            type="text" 
            value="12/06/2017 - 22/06/2017" 
            placeholder="Departure - Arrival"
            readOnly
          />
          <span className="icon-calendar text-success"></span>
        </div>
        <div className="form-control has-icon">
          <div className="select-options">
            1
            <span className="class-type">economy</span>
          </div>
          <span className="icon-person text-success"></span>
        </div>
      </div>
    );
  }
}

export default SearchMask