import React from 'react';

class FooterItem extends React.Component {
  render(){
    const baseUrl = '/app/assets/images/';
    return (
      <div className="grid">
        <div className="grid-item is-one-half">
          <div className="grid">
            <div className="grid-item grid-block-item is-one-third">
              <h3>Product</h3>
              <ul>
                <li><a href="#">Flights</a></li>
                <li><a href="#">Trains</a></li>
                <li><a href="#">Buses</a></li>
                <li><a href="#">Ferries</a></li>
              </ul>
            </div>
            <div className="grid-item grid-block-item is-one-third">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
              </ul>
            </div>
            <div className="grid-item grid-block-item is-one-third">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Customer service</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Payment methods</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid-item is-one-half">
          <div className="grid">
            <div className="grid-item grid-block-item is-one-half">
              <h3>Payment methods</h3>
              <p>Buying the right telescope to take your love of astronomy to the next level.</p><br />
              <a href="#"><span className="icon-cc-visa"></span></a>
              <a href="#"><span className="icon-cc-discover"></span></a>
              <a href="#"><span className="icon-cc-amex"></span></a>
              <a href="#"><span className="icon-cc-paypal"></span></a>
            </div>
            <div className="grid-item grid-block-item is-one-half">
              <h3>Safety</h3>
              <p>Usage of the Internet is becoming more common due to technology.</p><br />
              <img src={baseUrl + '/verified.png'} width="240"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterItem