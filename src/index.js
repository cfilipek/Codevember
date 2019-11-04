import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Contrast from './components/Contrast';
import Geometric from './components/Geometric';


const Root = () => (
  <Router basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contrast" component={Contrast} />
      <Route path="/geometric" component={Geometric} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

