import React, { Component } from "react";
import "./draftcallsheet.css";
import { IoIosSearch } from "react-icons/io";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
export default class draftcallsheet extends Component {
  render() {
    return (
      <div className="callsheet-grandparent">
        <div className="callsheet-parent">
          <div className="left-contain">
            <div className="left-center-row">
              <div>
                <div className="back-tournamentname">
                  <Link to="/tournamentdetail">
                    <div className="backkbutton">Back</div>
                  </Link>
                  <div className="callsheetname">New Call Sheet</div>
                </div>
                <div className="tournamentname-budget">
                  <div className="tournamentname-heading">
                    Daily Tournament 17
                  </div>
                  <div className="budget-tournament">
                    Budget Remaining: $1000
                  </div>
                </div>
                <div className="searchbar">
                  <div className="Searchbar-align">
                    <div className="Search-field">
                      <div>
                        <Input id="inp" placeholder="Search"></Input>
                      </div>
                      <div>
                        <IoIosSearch />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tableleft">
                  <table id="table-prop">
                    <thead>
                      <th>Actor</th>
                      <th>Title</th>
                      <th>Platform</th>
                      <th>Genre</th>
                      <th>AT</th>
                      <th>Salary</th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr className="tr-styling">
                        <td>Christina Applegate</td>
                        <td>Dead To Me</td>
                        <td>TV-MA</td>
                        <td>Drama,Mystery,Crime</td>
                        <td>headliner</td>
                        <td>$12500 </td>
                        <td>
                          <button id="green">
                            <img
                              src="./assets/green-btn.png"
                              alt="img not loaded"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="right-contain">
            <div className="col-space-around">
              <div className="my-sheet">
                <div className="my-tournamentname">
                  <div className="my-callsheet">Daily Tournament 17</div>
                  <div className="my-budget">
                    Budget Remaining: <span id="budget"> $1000</span>
                  </div>
                </div>
                <div className="tableright">
                  <table className="table-prop">
                    <thead id="thead-width">
                      <th>Actor</th>
                      <th>Title</th>
                      <th>Platform</th>
                      <th>Genre</th>
                      <th>AT</th>
                      <th>Salary</th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr className="tr-styling">
                        <td>Christina Applegate</td>
                        <td>Dead To Me</td>
                        <td>TV-MA</td>
                        <td>Drama,Mystery,Crime</td>
                        <td>headliner</td>
                        <td>$12500 </td>
                        <td>
                          <button id="red">
                            <img
                              src="./assets/red-btn.png"
                              alt="img not loaded"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="tiebreaker">
                    <div className="tiebreaker1">
                      <div className="tiebreaker-question">
                        Enter Imbd prediction
                      </div>
                      <div className="tiebraker1answer">
                        <Input placeholder="Enter TieBreaker1 Answer"></Input>
                      </div>
                    </div>
                    <div className="tiebreaker2">
                      <div className="tiebreaker-question">
                        Enter Imbd prediction
                      </div>
                      <div className="tiebraker2answer">
                        <Input placeholder="Enter TieBreaker 2 Answer"></Input>
                      </div>
                    </div>
                  </div>
                  <div className="submitcallsheetbuttonalign">
                    <div className="submitcallsheetbutton">
                      <Button className="btn-lg btn-light btn-block submitcallsheet">
                        Submit Call Sheet
                      </Button>
                    </div>
                  </div>
                  <div className="rulez-align">
                    <div className="rulez">
                      <div className="rulez-row-center">
                        <div className="rule1">
                          1.Please draft 10 actors -no more,no less.
                        </div>
                        <div className="rule2">
                          2.Please draft at least one movie from all 3 Actor
                          Types(Headliner,Co-star,DayPlayer).
                        </div>

                        <div className="rule3">
                          3.Please enter TieBreaker Answers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
