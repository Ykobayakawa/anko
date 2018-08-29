import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import store from 'store';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import DashboardPane from './dashboard-pane';
import LoginPage from './login-page';
import SignupPage from './signup-page';

// axios initialization
/*axios.interceptors.response.use(
  (res) => {
    if(res.headers['user-status-type']) {
      store.set('user-status-type', res.headers['user-status-type']);
    }
    if(res.headers['user-id']) {
      store.set('user-id', res.headers['user-id']);
    }
    return res;
  },
  (res) => {
    if (res.response.status === 401 && window.location.pathname !== '/login') {
      reduxStore.dispatch(sharedResourcesActions.addUnauthorizedErrorMessage());
    }else if(res.response.status === 403){
      reduxStore.dispatch(sharedResourcesActions.addForbiddenErrorMessage());
    }else if([500, 502, 503].includes(res.response.status)){
      reduxStore.dispatch(sharedResourcesActions.addServerErrorMessage());
    }
    return Promise.reject(res);
  }
);

axios.interceptors.request.use(
  (config) => {
    if(!config.headers['access-token']) {
      config.headers['access-token'] = store.get('access-token');
    }
    if(!config.headers['uid']) {
      config.headers['uid']          = store.get('uid');
    }
    if(!config.headers['client']) {
      config.headers['client']       = store.get('client');
    }
    config.headers['locale']         = store.get('langCode');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);*/



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
