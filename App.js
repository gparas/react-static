import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Home from './Home';
import Test from './Test';

import './scss/Normalize.scss';
import './scss/Scaffolding.scss';
import './scss/Typography.scss';
import './scss/Utilities.scss';

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}>
          <Route path="/test" component={Test}></Route>
        </Route>
      </Router>
    )
  }
}

export default App