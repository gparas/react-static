import React from 'react';
import NumericInput from 'react-numeric-input';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SearchMaskOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      inputVal: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(){
    this.setState({ isOpen: true });
  }
  handleClose(){
    this.setState({ isOpen: false });
  }
  handleChange(e){
    this.setState({ inputVal: document.getElementsByName("adults")[0].value });
  };
  render(){
    const TransitionOptions = {
      transitionName: "dropdown",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    const { inputVal, isOpen } = this.state;
    return (
      <div className="form-control has-icon" >
        <button 
          className="select-options" 
          onClick={this.handleClick}
        >
          {inputVal}&nbsp;
          {inputVal > 1 ? 'Passengers' : 'Passenger'}
        </button>
        <span className="icon-person text-success"></span>
        <ReactCSSTransitionGroup 
          {...TransitionOptions} 
        >
        {isOpen ?
          <span>
            <div style={ cover } onClick={ this.handleClose } />
            <ul className="dropdown-menu"> 
              <li>
                <div className="select-passengers">
                  <b>Adults <span>(12+)</span></b>
                  <NumericInput 
                    name="adults" 
                    mobile 
                    className="number-spinner"
                    value={inputVal}
                    min={ 1 } 
                    max={ 10 }
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li>
                <div className="select-passengers">
                  <b>Youths <span>(2-12)</span></b>
                  <NumericInput 
                    mobile 
                    className="number-spinner"
                    value={ 0 }
                    min={ 0 } 
                    max={ 5 }
                  />
                </div>
              </li>
              <li>
                <div className="select-passengers">
                  <b>Children <span>(&lt;2)</span></b>
                  <NumericInput 
                    mobile 
                    className="number-spinner"
                    value={ 0 }
                    min={ 0 } 
                    max={ 5 }
                  />
                </div>
              </li>
            </ul>
          </span>
          : null
        }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SearchMaskOptions