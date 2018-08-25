import React, { Component } from 'react';
import { Panel, Button, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './css/login-form.css';

class LoginPage extends Component {
   render() {
      return (
         <div>
         <div className="login-form">
         <Panel bsStyle="success">
            <Panel.Heading>
             <Panel.Title className="login-form-title">Log in</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
               <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                     Email
                  </Col>
                  <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                  </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                     Password
                  </Col>
                  <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                  </Col>
                  </FormGroup>


                  <FormGroup>
                  <Col smOffset={2} sm={10}>
                  <Button type="submit">Log in</Button>
                  </Col>
                  </FormGroup>
               </Form>
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
