import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

