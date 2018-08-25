import React, { Component } from 'react';
import { Panel, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as AnkoApi from './anko-api';
import './css/signup-form.css';
import i18n from './i18n/signup-page.json';

class SignupPage extends Component {
   constructor(props) {
      super(props);
      this._onFormChange = this._onFormChange.bind(this);
      this._signup = this._signup.bind(this);
      this.state = {
         isSigningUp: false,
         hasSignedUp: false,
         messages: [],
         user: {
            email: '',
            password: '',
            password_confirmation: ''
         }
      }
   }

   _onFormChange(e) {
      const newUser = Object.assign({}, this.state.user, {
         [e.target.name]: e.target.value,
      });
      this.setState({ user: newUser });
   }

   _signup() {
      const lang = i18n['en'];
      this.setState({isSigningUp: true});

      const params = {user: this.state.user};
      AnkoApi.signup(params)
      .then(res => {
         this.setState({
            isSigningUp: false,
            hasSignedUp: true,
            messages: [lang.signupCompletedMessage]
         });
      })
      .catch(res => {
         let errorMessages = [];
         if(res.response.errors) {
            errorMessages = res.response.errors.full_messages;
         }
         this.setState({
            isSigningUp: false,
            messages: errorMessages,
         });
      });
   }

   _constructErrorsList() {
      const errorRows = this.state.messages.map((message, i) => {
         return (<li key={i} style={{color: '#666', fontWeight: 'bold'}}>{message}</li>);
      });

     return( <ul>{errorRows}</ul> );
   }

   render() {
      return (
         <div className="signup-form">
         <Panel bsStyle="primary">
            <Panel.Heading>
             <Panel.Title className="signup-form-title">Sign up</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
               {this._constructErrorsList()}
               { this.state.hasSignedUp ? null :
               <Form horizontal>
                  <FormGroup controlId="formHorizontalName">
                  <Col componentClass={ControlLabel} sm={2}>
                     Name
                  </Col>
                  <Col sm={10}>
                  <FormControl
                     type="name"
                     placeholder="Name"
                     name="name"
                     onChange={this._onFormChange}
                  />
                  </Col>
                  </FormGroup>

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

                  <FormGroup controlId="formHorizontalTel">
                  <Col componentClass={ControlLabel} sm={2}>
                     Tel
                  </Col>
                  <Col sm={10}>
                  <FormControl
                     type="text"
                     placeholder="Tel"
                     name="tel"
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

                  <FormGroup controlId="formHorizontalPassword_confirmation">
                  <Col componentClass={ControlLabel} sm={2}>
                     Password Confirmation
                  </Col>
                  <Col sm={10}>
                  <FormControl
                     type="password"
                     placeholder="Password Confirmation"
                     name="password_confirmation"
                     onChange={this._onFormChange}
                  />
                  </Col>
                  </FormGroup>

                  <FormGroup>
                  <Col smOffset={2} sm={10}>
                  <Button type="submit"
                          onClick={this._signup}>Sign up</Button>
                  </Col>
                  </FormGroup>
               </Form>
               }
            </Panel.Body>
         <h2>{this.state.user.name}</h2>
         <h2>{this.state.user.email}</h2>
         <h2>{this.state.user.tel}</h2>
         <h2>{this.state.user.password}</h2>
         <h2>{this.state.user.password_confirmation}</h2>
         </Panel>
         </div>
      );
   }
}

export default SignupPage;
