import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsStarHalf } from "react-icons/bs";
import "./livecallsheet.css";

export default class livecallsheet extends Component {
  render() {
    return (
      <div className="roww">
        <div className="grand-parent">
          <div className="center-grand-parent">
            <div className="parent-className">
              <Link to="/rankings">
                <div className="backbutton">
                  <IoIosArrowBack /> Back
                </div>
              </Link>
              <div id="mobile-heading" className="tournamentheader">
                <div className="tournamentname">
                  $100K CELEBRATION Smash Tourney
                </div>
                <div className="tournamentbud">
                  <div id="bgt">Budget Remaining:</div>
                  <div id="budgetcolor">$100</div>
                </div>
              </div>
              <div className="tabular-callsheet">
                <table>
                  <thead id="al">
                    <th>Actor</th>
                    <th>Title</th>
                    <th>AT</th>
                    <th>Salary</th>
                    <th>Points</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Anna Kendrick <BsStarHalf />
                      </td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Anna Kendrick</td>
                      <td>Table 19</td>
                      <td>Headliner</td>
                      <td>$5500</td>
                      <td>1.5</td>
                    </tr>
                    <tr>
                      <td>Total Points</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>102</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
