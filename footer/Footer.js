import React from 'react';
import Settings from '../settings/Settings';
import FooterItem from './FooterItem';
import FooterItem2 from './FooterItem2';
import FooterPayment from './FooterPayment';
import FooterSeo from './FooterSeo';
import Awards from '../Awards';
import css from './Footer.scss';

class Footer extends React.Component {
  render(){
    return (
      <Settings background="#222222">
        <footer className="site-footer">
          <div className="container">
            <FooterItem />
            <hr className="mb0" />
            <FooterItem2 />
            <hr />
            <FooterSeo />
            <div className="grid is-hidden">
              <div className="grid-item grid-block-item is-one-quarter">
                <h3>Connect with us</h3>
                <a href="#"><span className="icon-youtube-with-circle"></span></a>
                <a href="#"><span className="icon-facebook-with-circle"></span></a>
                <a href="#"><span className="icon-twitter-with-circle"></span></a>
                <a href="#"><span className="icon-google-with-circle"></span></a>
                <a href="#"><span className="icon-linkedin-with-circle"></span></a>
              </div>
              <div className="grid-item grid-block-item is-one-quarter">
                <h3>Contact</h3>
                <p>Karagiorgi Servias 4, 3rd floor <br />105 62 Syntagma, Athens</p>
                <p>Phonebooking: 14824 <br />International calling: 211 107 97 99</p>
              </div>
              <div className="grid-item grid-block-item is-one-quarter">
                <h3>Become a member</h3>
                <p>Sign up and enjoy all the benefits <br /> of a quick future ckekcout</p>
                <button className="btn btn-sm is-success">SignUp</button>
              </div>
              <div className="grid-item grid-block-item is-one-quarter">
                <h3>International sites</h3>
                <p>Sign up and enjoy all the benefits of a quick future ckekcout</p>
              </div>
            </div>
          </div>
        </footer>
      </Settings>
    );
  }
}

export default Footer