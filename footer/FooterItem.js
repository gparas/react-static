import React from 'react';

class FooterItem extends React.Component {
  render(){
    return (
      <div className="grid">
        <div className="grid-item grid-block-item is-one-quarter">
          <h3>Follow us</h3>
          <a href="#"><span className="icon-youtube-with-circle"></span></a>
          <a href="#"><span className="icon-facebook-with-circle"></span></a>
          <a href="#"><span className="icon-twitter-with-circle"></span></a>
          <a href="#"><span className="icon-google-with-circle"></span></a>
          <a href="#"><span className="icon-linkedin-with-circle"></span></a>
        </div>
        <div className="grid-item grid-block-item is-one-quarter">
          <h3>Become a member</h3>
          <p>Sign up and enjoy all the benefits <br /> of a quick future ckekcout</p>
          <button className="btn btn-sm is-success">SignUp</button>
        </div>
        <div className="grid-item grid-block-item is-one-quarter text-center">
          <h3>Contact</h3>
          <p className="phone">211-107-97-99</p>
          <p>
            Karagiorgi Servias 4, 3rd floor <br />
            <a href="#" className="text-success">info@tripsta.com</a>
          </p>
        </div>
        <div className="grid-item grid-block-item is-one-quarter text-center">
          <h3>International sites</h3>
          <div className="select-wings">
            <img src="../app/assets/images/Flags-Icon-Set/24x24/GB.png"/>
            United Kingdom
            <span className="caret"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterItem