import React, { Component } from 'react';
//import React from 'react';
import store from 'store';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/dashboard-pane.css';

class DashboardPane extends Component {
   render() {
      if (store.get('access-token') === undefined ||
          store.get('uid')          === undefined ||
          store.get('client')       === undefined) {
         return (
         <div>
            <h1 className="title"> ank0 </h1>
            <div className="login-button">
            <Button bsStyle="success" bsSize="large" href="/login">
               Log in
            </Button>
            </div>

            <div className="signup-button">
            <Button bsStyle="primary" bsSize="large" href="/sign_up">
               Sign up
            </Button>
            </div>
         </div>
         );
      } else {
         return (
         <h1>success</h1>
         );
      }
   }
}

export default DashboardPane;

