import React from 'react';
import { DateRangePicker } from 'react-dates';
import SearchMaskInput from './SearchMaskInput';
import SearchMaskOptions from './SearchMaskOptions';
import css from './SearchMask.scss';

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
    this.handleSelesct = this.handleSelesct.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleSelesct(cityValue){
    this.props.onSelectCityName(cityValue.toLowerCase());
  };
  render(){
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div id="search-mask">
        <div className="form-control">
          <input 
            type="text" 
            value='Athens (ATH), Greece'
            placeholder="From city or airport" 
            readOnly
          />
        </div>
        <SearchMaskInput 
          placeholder="To city or country" 
          onSelectCity={this.handleSelesct}
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
        <div className="form-control">
          <input type="submit" value="Search" />
          <span className="icon-search"></span>
        </div>
      </div>
    );
  }
}

export default SearchMask