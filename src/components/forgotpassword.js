import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./forgotpassword.css";

export default class forgotpassword extends Component {
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
            <h1 className="headerr">Bueller? Bueller?</h1>
            <FormGroup>
              <Input type="input" placeholder="Enter your Email" />
            </FormGroup>
            <Button className="btn-md btn-light btn-block resetpassword">
              Reset Password
            </Button>
            <br />
            <div className="text-center">
              <Link to="/">Fugheddaboutit! I Know my Password</Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
