import React from 'react';
import Hero from './hero/Hero';
import Features from './features/Features';
import Destinations from './destinations/Destinations';
import DestinationsTest from './destinations/DestinationsTest';
import Testimonial from './testimonial/Testimonial';
import Icons from './icons/Icons';
import Deals from './Deals';
import AppStore from './appStore/AppStore';
import Newsletter from './newsletter/Newsletter';
import Footer from './footer/Footer';
import Copyright from './Copyright';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Slider from 'react-slick';

class App extends React.Component {
  render(){
    return (
      <div style={{ position: 'relative'}}>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }
          transitionName="animation" component="div" className="holder">
            {this.props.children}
        </ReactCSSTransitionGroup>
        <Hero />
        <Features />
        <Destinations />
        <Testimonial />
        <Deals />
        <Newsletter />
        <AppStore />
        <Footer />
        <Copyright />
      </div>
    )
  }
}

export default App