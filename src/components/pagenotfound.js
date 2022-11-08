import React, { Component } from "react";
import "./pagenotfound.css";
export default class pagenotfound extends Component {
  render() {
    return (
      <div className="center-notfound">
        <div className="child-notfound">
          <h1 id="first-message">That Page doesn't exists! </h1>
          <h3 id="second-message">
            Sorry,the page you were looking for could not be found.
          </h3>
        </div>
      </div>
    );
  }
}
