import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 10,
      sessionLength: 10,
      display: "25 : 00",
    };
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
          <div id="break-length" className="length">
            <p className="select-off">Break Length</p>
            <div className="up-arrow-container">
              <i class="fa fa-arrow-up"></i>
            </div>
            <div className="display-sm select-off">
              {this.state.breakLength}
            </div>
            <div className="down-arrow-container">
              <i class="fa fa-arrow-down"></i>
            </div>
          </div>
          <div id="session-length" className="length">
            <p className="select-off">Session Length</p>
            <div className="up-arrow-container">
              <i class="fa fa-arrow-up"></i>
            </div>
            <div className="display-sm select-off">
              {this.state.sessionLength}
            </div>
            <div className="down-arrow-container">
              <i class="fa fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <div id="display-section">
          <p id="display-title">Session</p>
          <div id="display">{this.state.display}</div>
        </div>
        <div id="control-section">
          <div id="start-btn">
            <i class="fa fa-play" aria-hidden="true"></i>
          </div>
          <div id="pause-btn">
            <i class="fa fa-pause" aria-hidden="true"></i>
          </div>
          <div id="reset-btn">
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
