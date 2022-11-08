import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./sign-up.css";

export default class signup extends Component {
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
            <h1 className="header">Sign Up</h1>
            <FormGroup>
              <Input type="name" placeholder="Player Name" />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Confirm Password" />
            </FormGroup>
            <FormGroup>
              <Input type="date" placeholder="Date of Birth" />
            </FormGroup>
            <FormGroup>
              <div className="radio">
                <label for="male">
                  <input type="radio" id="male" name="gender" value="male" />
                  Male
                </label>
                <label for="male">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>
              </div>
            </FormGroup>

            <Button className="btn-lg btn-light btn-block create">
              Create Account
            </Button>
            <br />
            <div className="text-center">
              <Link to="/forgotpassword">Forgot Password?</Link>
              <Link to="/">Log in</Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
