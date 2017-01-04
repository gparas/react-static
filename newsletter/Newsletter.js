import React from 'react';
import Title from '../title/Title';
import Settings from '../settings/Settings';
import css from './Newsletter.scss';


class Newsletter extends React.Component {
  render(){
    return(
      <Settings background="#f5f5f5">
        <section id="newsletter" className="v-space-s">
          <div className="container">
            <Title
              title="Get exclusive prices and special deals"
              text="Subscribe to our newsletter to save big!"
              titleClass="is-smaller"
            />
            <p>&nbsp;</p>
            <div className="newsletter-form">
              <div className="form-control">
                <input 
                  type="text" 
                  placeholder="Your email address" 
                />
              </div>
              <div className="form-control">
                <input className="is-success" type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </section>
      </Settings>
    )
  }
}

export default Newsletter