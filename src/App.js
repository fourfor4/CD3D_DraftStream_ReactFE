import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import forgotpassword from "./components/forgotpassword";
import login from "./components/log-in";
import signup from "./components/sign-up";
import welcome from "./components/welcome";
import contestslobby from "./components/contestslobby";
import tournamentdetail from "./components/tournament-details";
import draftcallsheet from "./components/draftcallsheet";
import rankings from "./components/ranking";
import livecallsheet from "./components/livecallsheet";
import { NavigationBar } from "./components/navbar";
import Sidebar from "./components/sidebar";
import pagenotfound from "./components/pagenotfound";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route path="/" exact component={login} />
              <Route path="/signup" component={signup} />
              <Route path="/forgotpassword" component={forgotpassword} />
            </Switch>
            <div className="child-wrapper">
              <NavigationBar />
              <Sidebar />
              <Switch>
                <Route path="/welcome" component={welcome} />
                <Route path="/contestslobby" component={contestslobby} />
                <Route path="/tournamentdetail" component={tournamentdetail} />
                <Route path="/draftcallsheet" component={draftcallsheet} />
                <Route path="/rankings" component={rankings} />
                <Route path="/livecallsheet" component={livecallsheet} />
                <Route component={pagenotfound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
