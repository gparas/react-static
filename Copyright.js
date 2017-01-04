import React from 'react';

class Copyright extends React.Component {
  render(){
    const baseUrl = '/app/assets/images/';
    return (
      <div id="copyright">
        <div className="container">
          <div className="grid">
            <div className="grid-item is-one-third">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="grid-item is-one-third text-center">
              <img src={baseUrl + '/logo-grey.png'} width="110"/>
            </div>
            <div className="grid-item is-one-third text-right">
              <p>2016 © tripsta.com. All rights reserved by tripsta S.A.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Copyright