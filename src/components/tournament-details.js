import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./tournamentdetails.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdTimer, MdTimerOff } from "react-icons/md";
export default class tournamentdetails extends Component {
  render() {
    return (
      <div className="daddy">
        <div className="small-daddy">
          <div id="parent" className="parent-class">
            <Link to="/contestslobby">
              <div className="back-button">
                <IoIosArrowBack /> Back
              </div>
            </Link>

            <div id="mobileheading" className="tournament-header">
              <div className="tournament-name">
                $100K CELEBRATION Smash Tourney
              </div>
            </div>
            <div id="tournamentdetails" className="tournament-details">
              <div className="horizontal-line">
                <hr />
              </div>
              <div className="tournament-summary">
                This 58000 player contest features $1000 in total prizes and
                pays out the top 24000 finishing positions.First place wins
                $1000.
              </div>
              <br />
              <div className="time-remaining">12 days,4 hours</div>
              <div className="horizontal-line">
                <hr />
              </div>
              <div id="details-icons" className="details-in-icons">
                <div id="mobile1" className="players-in-icons">
                  <div className="players-icon">
                    <FaUsers size={30} color="white" />
                  </div>
                  <div className="players-in-count">80/100</div>
                  <div className="players-footer">Players</div>
                </div>
                <div id="mobile2" className="prizes-in-icons">
                  <div className="prizes-icon">
                    <FaRegMoneyBillAlt size={30} />
                  </div>
                  <div className="prizes-in-count">$1000</div>
                  <div className="prizes-footer">Prizes</div>
                </div>
                <div id="mobile3" className="starttime-in-icons">
                  <div className="starttime-icon">
                    <MdTimer size={30} />
                  </div>
                  <div className="starttime-in-count">Fri,May20</div>
                  <div className="starttime-footer">Start Time</div>
                </div>
                <div id="mobile4" className="endtime-in-icons">
                  <div className="endtime-icon">
                    <MdTimerOff size={30} />
                  </div>
                  <div className="endtime-in-count">Thu,May 28</div>
                  <div className="endtime-footer">End Time</div>
                </div>
              </div>
              <br />
              <br />
              <div className="Draftcallsheetbuttonalign">
                <div className="draftcallsheetbutton">
                  <Link to="/draftcallsheet">
                    <Button className="btn-lg btn-light btn-block draftcallsheet">
                      Draft Call Sheet
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footerlinks">
              <Link id="footerlink">Home</Link>
              &nbsp;<span id="footerlink">|</span> &nbsp;
              <Link id="footerlink">Support</Link>
              &nbsp;<span id="footerlink">|</span> &nbsp;
              <Link id="footerlink">FAQ</Link>
              &nbsp;<span id="footerlink">|</span>&nbsp;
              <Link id="footerlink">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
