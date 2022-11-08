import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./log-in.css";
export default class login extends Component {
  render() {
    return (
      <div id="main" className="wrapper">
        <div id="left" className="left-container">
          <div className="image">
            <img id="img-size" src={"assets/logo.png"} alt="img not loaded" />
          </div>
          <div className="logo-links">
            <Link id="link">Home</Link>
            &nbsp;<span>|</span> &nbsp;<Link id="link">Support</Link>
            &nbsp;<span>|</span> &nbsp;<Link id="link">FAQ</Link>
            &nbsp;<span>|</span> &nbsp;
            <Link id="link">Terms & Condition</Link>
          </div>
        </div>
        <div id="right" className="right-container">
          <Form className="login-form">
            <h1 className="header">Log in</h1>
            <FormGroup>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-lg btn-light btn-block signin">
              Sign In
            </Button>
            <br />
            <div className="text-center">
              <Link to="/signup">Need an Account?</Link>
              <Link to="/forgotpassword">Forgot Password</Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
