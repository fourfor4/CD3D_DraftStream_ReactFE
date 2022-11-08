import React, { Component } from "react";
import "./ranking.css";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default class ranking extends Component {
  render() {
    return (
      <div className="allfather">
        <div className="p-arent">
          <Link to="/tournamentdetail">
            <div className="baq-alignment">
              <div className="baq">Back</div>
              <div className="game-name">Tournament Info</div>
            </div>
          </Link>
          <div className="center-information">
            <div className="game-alignment">
              <div className="game-desc">125 dollar tourny</div>
              <div className="pictorial-info">
                <div className="pictorial-users">
                  <div className="fauser">
                    <FaUsers />
                  </div>
                  <div id="count-align">12/40</div>
                </div>
                <div className="pictorial-prize">
                  <div className="famoney">
                    <FaRegMoneyBillAlt />
                  </div>
                  <div className="prizealign">$100</div>
                </div>
              </div>
              <div className="time-remain">Time Remaining:2 days </div>
            </div>
          </div>
          <div className="live-currentlywinning">
            <div className="align-live">
              <div className="live-score">
                <div className="btn-align">
                  <Button id="livescore">Live Score</Button>
                </div>

                <div className="live-win">Currently winning: 3$</div>
              </div>

              <div className="table-ranking">
                <table id="table-width">
                  <thead id="ab">
                    <th>Rank</th>
                    <th>Player Id</th>
                    <th>Callsheet</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1</td>
                      <td>001</td>
                      <td>
                        <Button id="vcallsheet">View Callsheet</Button>
                      </td>
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
