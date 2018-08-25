import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import DashboardPane from './dashboard-pane';
import LoginPage from './login-page';
import SignupPage from './signup-page';

ReactDOM.render(
   <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/" component={DashboardPane} />
      <Route path="/login" component={LoginPage} />
      <Route path="/sign_up" component={SignupPage} />
      </Switch>
      </div>
   </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
