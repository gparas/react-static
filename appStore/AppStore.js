import React from 'react';
import Settings from '../settings/Settings';
import css from './AppStore.scss';

class AppStore extends React.Component {
  render(){
    return(
      <Settings background="#222222">
        <section id="download-app">
          <div className="container">
            <div className="grid">
              <div className="grid-item is-one-half">
                <img src="../app/assets/images/app.png"/>
              </div>
              <div className="grid-item is-one-half">
                <h3>Book Tickets on the Go</h3>
              </div>
            </div>
          </div>
        </section>
      </Settings>
    )
  }
}

export default AppStore