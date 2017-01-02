import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Home from './Home';
import Barcelona from './landing/Barcelona';

import './scss/Normalize.scss';
import './scss/Scaffolding.scss';
import './scss/Typography.scss';
import './scss/Utilities.scss';

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}>
          <Route path="/barcelona" component={Barcelona}></Route>
        </Route>
      </Router>
    )
  }
}

export default App