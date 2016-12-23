import React from 'react';
import { DateRangePicker } from 'react-dates';
import SearchMaskInput from './SearchMaskInput';
import SearchMaskOptions from './SearchMaskOptions';
import css from './SearchMask.scss';
import {Typeahead} from 'react-bootstrap-typeahead';

class SearchMask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.renderSelectedItems = this.renderSelectedItems.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }
  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }
  handleFocus(e){
    e.target.select();
  }
  _renderMenuItemChildren(props, option, idx) {
    return [
      <span key="city">{option.city} - </span>,
      <span key="name">{option.name} </span>,
      <span key="code">({option.code}), </span>,
      <span key="country">{option.country}</span>,
    ];
  };
  _labelKey(option){
    return `${option.city} (${option.code}), ${option.country}`;
  }
  renderSelectedItems(selected) {
    if (selected && selected.length) {
      this.props.selectedCity((selected[0].city).toLowerCase());
    }
  }
  render(){
    const airportSelected = [
      {country: 'Greece', name: 'Eleftherios Venizelos', code: 'ATH', city: 'Athens'},
    ]
    const airports = [
      {country: 'United Kingdom', name: 'All airports', code: 'LON', city: 'London'},
      {country: 'France', name: 'All airports', code: 'PAR', city: 'Paris'},
      {country: 'Germany', name: 'Berlin Brandenburg Willy Brandt', code: 'BER', city: 'Berlin'},
      {country: 'Italy', name: 'All airports', code: 'ROM', city: 'Rome'},
      {country: 'Turkey', name: 'Ataturk Airport', code: 'IST', city: 'Istanbul'},
      {country: 'Sweden', name: 'All airports', code: 'STO', city: 'Stockholm'},
      {country: 'Czech Republic', name: 'Vaclav Havel Prague Airport', code: 'PRG', city: 'Prague'},
      {country: 'Spain', name: 'Barcelona Int. Apt', code: 'BCN', city: 'Barcelona'},
      {country: 'Switzerland', name: 'Zurich Int. Apt', code: 'ZRH', city: 'Zurich'},
    ];
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div id="search-mask">
        <Typeahead
          options={airports}
          onChange={this._handleChange}
          defaultSelected={airportSelected}
          minLength={1}
          onFocus={this.handleFocus}
          placeholder="From city or airport"
          filterBy={['city', 'name', 'country']}
          labelKey={this._labelKey}
          renderMenuItemChildren={this._renderMenuItemChildren}
        />
        <Typeahead
          options={airports}
          onChange={this.renderSelectedItems}
          onBlur={this.props.onBlur}
          minLength={1}
          onFocus={this.handleFocus}
          placeholder="To city or airport"
          filterBy={['city', 'name', 'country']}
          labelKey={this._labelKey}
          paginate={true}
          maxResults={3}
          renderMenuItemChildren={this._renderMenuItemChildren}
        />
        <DateRangePicker
          {...this.props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          numberOfMonths={2}
        />
        <SearchMaskOptions />
        <button 
          type="submit" 
          className="btn is-success" 
          onClick={this.props.onClick}>
            Search
            <span className="icon-search"></span>
          </button>
      </div>
    );
  }
}

SearchMask.propTypes = {
  onClick: React.PropTypes.func,
  selectedCity: React.PropTypes.func
};

export default SearchMask