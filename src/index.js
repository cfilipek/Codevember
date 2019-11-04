import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contrast from './components/Contrast';


const Root = () => (
  <Router basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contrast" component={Contrast} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

