import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Subscribe from './components/subscribe/subscribe';
import ThankYou from './components/thankyou/thankyou';
import GetSubscribers from './components/getsubscribers/getsubscribers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Subscribe} />
            <Route exact path="/subscribed" component={ThankYou} />
            <Route exact path="/getallsubscribers" component={GetSubscribers} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
