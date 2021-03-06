import React, { Component } from 'react';
import {LoginController} from '../serviceclient';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import "../styles/Login.css";
import Home from './Home';
import Rekisteroi from './Rekisteroi';
import Routing from './Routing';
 

class Login extends Component {
    constructor (props){
        super (props)
        this.state = {Email: "", Salasana:"", isLogin:false, ID: ''};
    }

    validateForm() {
        return this.state.Email.length > 0 && this.state.Salasana.length > 0;
    }

    handleUsername(e){
        this.setState({Email: e})
    }

    handlePassword(e){
        this.setState({Salasana: e})
    }

    loginHandler=(e)=>{
        e.preventDefault();
        // Huom! tässä palautuu callbackin mukana koko käyttäjä, eli siis jatkossa routingissa kannasta ei lähdetä hakemaan enää uudestaan, vaan käytetään saatua tyyppiä
        LoginController(this.state, this.props.onnistuikoLogin);
        
    }

    validatePW(){
    }

   

    redirecRegister(){
        
    }

    render() {
           
        return (
            <div className="Login">
            <img className="imageLogin" alt="Parrot" src="https://trello-attachments.s3.amazonaws.com/5bd715c372be28202555c3ef/5bd80baf68c39a065a05d18e/48d0d4b6ec99a43c253904be163acd8d/Silver.png" />
            <form onSubmit={this.loginHandler}>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.Email}
                  onChange={e =>this.handleUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.Salasana}
                  onChange={e =>this.handlePassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              {this.onkoKirjautunut}
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>

              
            </form>
            {/* <br/>
            <form onSubmit={this.redirecRegister}>
            <Button
                block
                bsSize="large"
                type="submit"
              >
                Rekisteröidy
              </Button>
            
            </form> */}

          </div>
        );
    }
}

export default Login;