import React from 'react';

class FooterCopy extends React.Component {
  render(){
    const baseUrl = '/app/assets/images/';
    return (
      <div className="payment-methods">
        <div className="grid">
          <div className="grid-item is-one-half">
            <a href="#"><span className="icon-cc-visa"></span></a>
            <a href="#"><span className="icon-cc-discover"></span></a>
            <a href="#"><span className="icon-cc-amex"></span></a>
            <a href="#"><span className="icon-cc-paypal"></span></a>
          </div>
          <div className="grid-item is-one-half text-right">
            <img src={baseUrl + '/verified.png'} width="240"/>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterCopy