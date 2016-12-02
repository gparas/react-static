import React from 'react';
import './scss/Normalize.scss';
import './scss/Scaffolding.scss';
import './scss/Typography.scss';
import './scss/Utilities.scss';
import Hero from './hero/Hero';
import Features from './features/Features';

class App extends React.Component {
  render(){
    return (
      <div>
        <Hero />
        <Features />
      </div>
    )
  }
}

export default App