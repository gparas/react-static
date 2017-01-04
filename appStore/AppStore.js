import React from 'react';
import Settings from '../settings/Settings';
import css from './AppStore.scss';

class AppStore extends React.Component {
  render(){
    const baseUrl = '/app/assets/images/';
    return(
      <Settings background="#222222">
        <section id="download-app">
          <div className="container">
            <div className="test">
              <img src={baseUrl + '/app2.png'}/>
              <div>
                <h2 className="primary-title">
                  Find the cheapest ways to travel from your mobile phone.
                </h2>
                <p>Download our apps for iOS and Android</p><br />
                <img src={baseUrl + '/appstore.png'} width="120"/>
                <img src={baseUrl + '/googleplay.png'} width="120"/>
              </div>
            </div>
          </div>
        </section>
      </Settings>
    )
  }
}

export default AppStore