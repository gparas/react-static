import React from 'react';
import './scss/Normalize.scss';
import './scss/Scaffolding.scss';
import './scss/Typography.scss';
import './scss/Utilities.scss';
import Hero from './hero/Hero';
import Features from './features/Features';
import Destinations from './destinations/Destinations';
import Testimonial from './testimonial/Testimonial';
import Icons from './icons/Icons';

class App extends React.Component {
  render(){
    return (
      <div>
        <Hero />
        <Features />
        <Destinations />
        <Testimonial />
      </div>
    )
  }
}

export default App