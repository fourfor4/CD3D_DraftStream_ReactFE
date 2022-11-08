import React, { Component } from "react";
import moment from "moment";
import "./contestslobby.css";
import { Cube } from "styled-loaders-react";
import { Button } from "reactstrap";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdTimer, MdTimerOff } from "react-icons/md";
const TronWeb = require("tronweb");
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
const eventServer = new HttpProvider("https://api.shasta.trongrid.io");
let contractAddress = "TM4uCXJvg6ReNeu7WHFtT8PLoZKkRYduDS";

const privateKey =
  "a59ddaaeb8a488fb77dc905b9ffa7387d42b457d68730854ea0f09b2269934e4";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

export default class contestslobby extends Component {
  constructor() {
    super();
    this.state = {
      Upcoming: true,
      Live: false,
      Completed: false,
      UpcomingContests: [],
      LiveContests: [],
      CompletedContests: [],
    };
    this.getUpcomingTournaments = this.getUpcomingTournaments.bind(this);
    this.getLiveTournaments = this.getLiveTournaments.bind(this);
    this.getCompletedTournaments = this.getCompletedTournaments.bind(this);
  }

  async getTournamentDetails() {
    let Upcoming = [];
    let live = [];
    let completed = [];
    let contractObject = await tronWeb.contract().at(contractAddress);
    let getNumberofTournaments = await contractObject
      .getAllTournaments()
      .call();

    let noOfContests = getNumberofTournaments.toNumber();
    for (let i = 0; i <= noOfContests; i++) {
      let getcurrentPlayers = await contractObject
        .getPlayersCountforTournament(i)
        .call();
      let currentplayers = parseInt(getcurrentPlayers);
      let output = await contractObject.getTournamentData(i).call();
      let ContestDetail = {
        ContestID: parseInt(output[0]),
        ContestName: output[1],
        StartTimestamp: parseInt(output[2]),
        EndTimestamp: parseInt(output[3]),
        maxPlayers: parseInt(output[4]),
        prizeMoney: parseInt(output[5]),
        currentplayers: currentplayers,
      };
      if (Date.now() < ContestDetail.StartTimestamp) {
        Upcoming.push(ContestDetail);
      }
      if (
        ContestDetail.StartTimestamp <= Date.now() &&
        Date.now() <= ContestDetail.EndTimestamp
      ) {
        live.push(ContestDetail);
      }
      if (Date.now() >= ContestDetail.EndTimestamp) {
        completed.push(ContestDetail);
      }
    }
    this.setState({
      UpcomingContests: Upcoming,
      LiveContests: live,
      CompletedContests: completed,
      loaded: true,
    });
  }

  getUpcomingTournaments() {
    this.setState({
      Upcoming: true,
      Live: false,
      Completed: false,
    });
  }

  getLiveTournaments() {
    this.setState({
      Upcoming: false,
      Live: true,
      Completed: false,
    });
  }

  getCompletedTournaments() {
    this.setState({
      Upcoming: false,
      Live: false,
      Completed: true,
    });
  }

  async componentDidMount() {
    this.getTournamentDetails();
  }
  render() {
    return (
      <div className="wrap-per">
        <div id="main-headerid" className="main-header">
          <div id="head" className="header">
            <h5>Contest Lobby</h5>
          </div>
          <div className="states-position">
            <div id="states-mob" className="states">
              <div>
                <Button
                  id="button"
                  onClick={() => this.getUpcomingTournaments()}
                >
                  Upcoming
                </Button>
              </div>
              <div>
                <Button id="button" onClick={() => this.getLiveTournaments()}>
                  Live
                </Button>
              </div>
              <div>
                <Button
                  id="button"
                  onClick={() => this.getCompletedTournaments()}
                >
                  Completed
                </Button>
              </div>
            </div>
          </div>

          {this.state.Upcoming ? (
            this.state.UpcomingContests &&
            this.state.UpcomingContests.map((value, index) => {
              return (
                <div className="contestslists">
                  <div id="contestdetailid" className="contestdetail">
                    <div className="contest-left">
                      <div className="contest-name">{value.ContestName}</div>
                      <div className="status-upcoming">
                        Starts {""}
                        {moment
                          .unix(value.StartTimestamp / 1000)
                          .format("DD MMM YYYY ")}
                      </div>
                    </div>
                    <div className="contest-center">
                      <Button id="b"> Lets Play</Button>
                    </div>
                    <div className="contest-right">
                      <div className="playersdetails">
                        <div className="playersicon">
                          <FaUsers />{" "}
                        </div>
                        <div className="players">
                          {value.currentplayers}/{value.maxPlayers}
                        </div>
                      </div>

                      <div className="starttimedetails">
                        <div className="starttimeicon">
                          <MdTimer />
                        </div>
                        <div className="start-time">
                          {" "}
                          {moment
                            .unix(value.StartTimestamp / 1000)
                            .format("hh:mm a")}
                        </div>
                      </div>

                      <div className="endtimedetails">
                        <div className="endtimeicon">
                          <MdTimerOff />
                        </div>
                        <div className="end-time">
                          {moment
                            .unix(value.EndTimestamp / 1000)
                            .format("DD MMM YYYY hh:mm a")}
                        </div>
                      </div>
                      <div className="prizemoneydetails">
                        <div className="prizemoneyicon">
                          <FaRegMoneyBillAlt />
                        </div>
                        <div className="prizemoney">{value.prizeMoney}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : this.state.Live ? (
            this.state.LiveContests &&
            this.state.LiveContests.map((value, index) => {
              return (
                <div className="contestslists">
                  <div id="contest-mob" className="contestdetail">
                    <div className="contest-left">
                      <div className="contest-name">{value.ContestName}</div>
                      <div className="status-live">
                        Results{" "}
                        {moment
                          .unix(value.EndTimestamp / 1000)
                          .format("DD MMM YYYY ")}
                      </div>
                    </div>
                    <div className="contest-center">
                      <Button id="b"> View Callsheet</Button>
                    </div>
                    <div className="contest-right">
                      <div className="playersdetails">
                        <div className="playersicon">
                          <FaUsers />{" "}
                        </div>
                        <div className="players">
                          {value.currentplayers}/{value.maxPlayers}
                        </div>
                      </div>

                      <div className="starttimedetails">
                        <div className="starttimeicon">
                          <MdTimer />
                        </div>
                        <div className="start-time">
                          {moment
                            .unix(value.StartTimestamp / 1000)
                            .format("DD MMM YYYY hh:mm a")}
                        </div>
                      </div>

                      <div className="endtimedetails">
                        <div className="endtimeicon">
                          <MdTimerOff />
                        </div>
                        <div className="end-time">
                          {moment
                            .unix(value.EndTimestamp / 1000)
                            .format("DD MMM YYYY  hh:mm a")}
                        </div>
                      </div>
                      <div className="prizemoneydetails">
                        <div className="prizemoneyicon">
                          <FaRegMoneyBillAlt />
                        </div>
                        <div className="prizemoney">{value.prizeMoney}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : this.state.Completed ? (
            this.state.CompletedContests &&
            this.state.CompletedContests.map((value, index) => {
              return (
                <div className="contestslists">
                  <div className="contestdetail">
                    <div className="contest-left">
                      <div className="contest-name">{value.ContestName}</div>
                      <div className="status-completed">Finished</div>
                      <div className="rank">Your Rank: To be calculated</div>
                      <div className="prize">Your Prize :To be calcualted</div>
                    </div>
                    <div className="contest-center">
                      <Button id="b"> View Results</Button>
                    </div>
                    <div className="contest-right">
                      <div className="playersdetails">
                        <div className="playersicon">
                          <FaUsers />{" "}
                        </div>
                        <div className="players">
                          {value.currentplayers}/{value.maxPlayers}
                        </div>
                      </div>

                      <div className="starttimedetails">
                        <div className="starttimeicon">
                          <MdTimer />
                        </div>
                        <div className="start-time">{value.StartTimestamp}</div>
                      </div>

                      <div className="endtimedetails">
                        <div className="endtimeicon">
                          <MdTimerOff />
                        </div>
                        <div className="end-time">{value.EndTimestamp}</div>
                      </div>
                      <div className="prizemoneydetails">
                        <div className="prizemoneyicon">
                          <FaRegMoneyBillAlt />
                        </div>
                        <div className="prizemoney">{value.prizeMoney}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              {" "}
              <Cube color="red" size="80px" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
