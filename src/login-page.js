import React, { Component } from 'react';
import { Panel, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';
import store from 'store';
import * as AnkoApi from './anko-api';
import './css/login-form.css';

class LoginPage extends Component {
   constructor(props) {
      super(props);
      this._onFormChange = this._onFormChange.bind(this);
      this._login = this._login.bind(this);
      this._constructErrorsList = this._constructErrorsList.bind(this);
      this.state = {
         isLoggingIn: false,
         messages: [],
         user: {
            email: '',
            password: ''
         }
      }
   }

   _onFormChange(e) {
      const newUser = Object.assign({}, this.state.user, {
         [e.target.name]: e.target.value,
      });
      this.setState({ user: newUser });
   }

   _login() {
      this.setState({isLoggingIn: true});
      AnkoApi.login(this.state.user)
      .then(res => {
         console.log(res);
         store.set('access-token', res.headers['access-token']);
         store.set('uid',          res.headers['uid']);
         store.set('client',       res.headers['client']);
         window.location.href = "/";
      })
      .catch(res => {
         let errorMessages = [];
         if(res.response.data.errors) {
            errorMessages = res.response.data.errors;
         }
         this.setState({
            isLoggingIn: false,
            messages: errorMessages,
         });
      });
   }

   _constructErrorsList() {
      let errorRows = this.state.messages.map((message, i) => {
         return(<li key={i} style={{color: '#666', fontWeight: 'bold'}}>{message}</li>);
      });

     return( <ul>{errorRows}</ul> );
   }
   render() {
      return (
         <div>
         <div className="login-form">
         <Panel bsStyle="success">
            <Panel.Heading>
             <Panel.Title className="login-form-title">Log in</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
               {this._constructErrorsList()}
               <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                     Email
                  </Col>
                  <Col sm={10}>
                  <FormControl
                     type="email"
                     placeholder="Email"
                     name="email"
                     onChange={this._onFormChange}
                  />
                  </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                     Password
                  </Col>
                  <Col sm={10}>
                  <FormControl
                     type="password"
                     placeholder="Password"
                     name="password"
                     onChange={this._onFormChange}
                  />
                  </Col>
                  </FormGroup>


                  <FormGroup>
                  <Col smOffset={2} sm={10}>
                  <Button onClick={this._login}>Log in</Button>
                  </Col>
                  </FormGroup>
               </Form>
            <h2>{this.state.user.email}</h2>
            </Panel.Body>
         </Panel>
         </div>

         <div style={{textAlign: 'center'}}>
         <a href="/sign_up">create account</a>
         </div>

         </div>
      );
   }
}

export default LoginPage;
