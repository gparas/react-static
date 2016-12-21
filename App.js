import React from 'react';
import './scss/Normalize.scss';
import './scss/Scaffolding.scss';
import './scss/Typography.scss';
import './scss/Utilities.scss';
import Hero from './hero/Hero';
import Features from './features/Features';
import Destinations from './destinations/Destinations';
import DestinationsTest from './destinations/DestinationsTest';
import Testimonial from './testimonial/Testimonial';
import Icons from './icons/Icons';
import Test from './Test';
import Deals from './Deals';
import AppStore from './appStore/AppStore';
import Newsletter from './newsletter/Newsletter';

class App extends React.Component {
  render(){
    return (
      <div>
        <Hero />
        <Features />
        <Destinations />
        <Testimonial />
        <Deals />
        <Newsletter />
      </div>
    )
  }
}

export default App