import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 55,
      sessionLength: 25,
      timeLeft: "25:00",
      minutesLeft: 0,
      secondsLeft: 0,
    };

    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakdecrement = this.handleBreakdecrement.bind(this);
  }

  handleBreakIncrement() {
    this.setState((state) => ({
      breakLength: state.breakLength + 1,
    }));
  }

  handleBreakdecrement() {
    this.setState((state) => ({
      breakLength: state.breakLength - 1,
    }));
  }

  render() {
    return (
      <div id="clock">
        <div id="header-section">
          <h1 id="title" className="select-off">
            25 + 5 Clock
          </h1>
        </div>
        <div id="lengths-section">
          <div id="break-length-section" className="length">
            <p className="select-off" id="break-label">
              Break Length
            </p>
            <div className="down-arrow-container">
              <i
                class="fa fa-arrow-down"
                id="break-decrement"
                onClick={this.handleBreakdecrement}
              ></i>
            </div>
            <div className="display-sm select-off" id="break-length">
              {this.state.breakLength}
            </div>

            <div className="up-arrow-container">
              <i
                class="fa fa-arrow-up"
                id="break-increment"
                onClick={this.handleBreakIncrement}
              ></i>
            </div>
          </div>
          <div id="session-length-section" className="length">
            <p className="select-off" id="session-label">
              Session Length
            </p>
            <div className="up-arrow-container">
              <i class="fa fa-arrow-up" id="session-increment"></i>
            </div>
            <div className="display-sm select-off" id="session-length">
              {this.state.sessionLength}
            </div>
            <div className="down-arrow-container">
              <i class="fa fa-arrow-down" id="session-decrement"></i>
            </div>
          </div>
        </div>
        <div id="display-section">
          <p id="timer-label">Session</p>
          <div id="time-left">{this.state.timeLeft}</div>
        </div>
        <div id="control-section">
          <div id="start-btn">
            <i class="fa fa-play" id="start_stop" aria-hidden="true"></i>
            <i class="fa fa-pause" aria-hidden="true"></i>
          </div>
          <div id="reset-btn">
            <i class="fa fa-refresh" id="reset" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
