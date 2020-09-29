import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 300,
      sessionLength: 1500,
      timeLeft: 1500,
      timeLabel: "Session",
      timeIntervel: "",
      running: false,
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
  }

  handleReset() {
    this.setState((state) => ({
      breakLength: 300,
      sessionLength: 1500,
      timeLeft: 1500,
      timeIntervel: clearInterval(state.timeIntervel),
      running: false,
    }));
  }

  handleBreakIncrement() {
    if (this.state.breakLength + 60 <= 3600) {
      this.setState((state) => ({
        breakLength: state.breakLength + 60,
      }));
    }
  }

  handleBreakDecrement() {
    if (this.state.breakLength - 60 >= 60) {
      this.setState((state) => ({
        breakLength: state.breakLength - 60,
      }));
    }
  }

  handleSessionIncrement() {
    if (this.state.sessionLength + 60 <= 3600) {
      this.setState((state) => ({
        sessionLength: state.sessionLength + 60,
      }));
    }
  }

  handleSessionDecrement() {
    if (this.state.sessionLength - 60 >= 60) {
      this.setState((state) => ({
        sessionLength: state.sessionLength - 60,
      }));
    }
  }

  handleStartTimer() {
    if (this.state.running === true) {
      this.setState((state) => ({
        timeIntervel: clearInterval(state.timeIntervel),
        running: false,
      }));
    } else {
      this.setState({
        timeIntervel: setInterval(this.doStuff, 1000),
        running: true,
      });
    }
  }

  doStuff() {
    console.log("hello");
  }

  componentDidMount() {}

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
                className="fa fa-arrow-down"
                id="break-decrement"
                onClick={this.handleBreakDecrement}
              ></i>
            </div>
            <div className="display-sm select-off" id="break-length">
              {this.state.breakLength / 60}
            </div>

            <div className="up-arrow-container">
              <i
                className="fa fa-arrow-up"
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
              <i
                className="fa fa-arrow-up"
                id="session-increment"
                onClick={this.handleSessionIncrement}
              ></i>
            </div>
            <div className="display-sm select-off" id="session-length">
              {this.state.sessionLength / 60}
            </div>
            <div className="down-arrow-container">
              <i
                className="fa fa-arrow-down"
                id="session-decrement"
                onClick={this.handleSessionDecrement}
              ></i>
            </div>
          </div>
        </div>
        <div id="display-section">
          <div id="timer-label">{this.state.timeLabel}</div>
          <div id="time-left">
            {new Date(1500 * 1000).toISOString().substr(14, 5)}
          </div>
        </div>
        <div id="control-section">
          <div id="start-btn">
            <i className="fa fa-play" id="start_stop" aria-hidden="true"></i>
            <i
              className="fa fa-pause"
              aria-hidden="true"
              onClick={this.handleStartTimer}
            ></i>
          </div>
          <div id="reset-btn">
            <i
              className="fa fa-refresh"
              id="reset"
              aria-hidden="true"
              onClick={this.handleReset}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
