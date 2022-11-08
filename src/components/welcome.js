import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./welcome.css";

export default class welcome extends Component {
  render() {
    return (
      <div className="pah-pah">
        <div className="wrap">
          <div id="mainid" className="welcomebox">
            <div className="title">
              <h1>Welcome</h1>
            </div>
            <br />
            <br />
            <div className="aligndescription">
              <div id="desc" className="description">
                <p>
                  CinemaDraft is a game where you pick <br />
                  hollywood actors and assemble a roster <br /> based on box
                  office projections
                </p>
                <br />
                <p>You'll compete against each others.</p>
                <br />
                <p>
                  This screen should have some detailed <br />
                  instructions on the rules and how to play
                  <br /> the game for onboarding new users.
                </p>
              </div>
            </div>
            <br />
            <div className="button">
              <Link to="/contestslobby">
                <Button className="btn-lg btn-light btn-block letsplay">
                  Lets Play
                </Button>
              </Link>
            </div>
          </div>
          <br />
          <div className="logolinks">
            <Link id="links">Home</Link>
            &nbsp;<span id="links">|</span> &nbsp;
            <Link id="links">Support</Link>
            &nbsp;<span id="links">|</span> &nbsp;<Link id="links">FAQ</Link>
            &nbsp;<span id="links">|</span>&nbsp;
            <Link id="links">Terms & Condition</Link>
          </div>
        </div>
      </div>
    );
  }
}
