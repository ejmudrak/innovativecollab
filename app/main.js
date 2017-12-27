/* Web app entry point
Source: main.js from https://github.com/pheuter/essential-react/tree/master/src
*/

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import '../node_modules/semantic-ui-css/semantic.css';

// Routes
import Routes from './components/Routes';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById(DOM_APP_EL_ID));
