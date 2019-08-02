import React from "react";
import Header from "../components/Header";
import TimerButton from "../components/TimerButton";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      seconds: 0,
      isTimerRunning: true
    };
  }

  tick = startTime => {
    let setMinutes = parseInt(
      (Date.now() - startTime) / 1000 / 60
    );
    let setSeconds = (
      (Date.now() - startTime) /
      1000
    ).toFixed(2);
    if (parseInt(setSeconds) >= 60) {
      setSeconds = (
        (Date.now() - startTime) / 1000 -
        60 * setMinutes
      ).toFixed(2);
    }
    this.setState({
      seconds: setSeconds,
      minutes: setMinutes
    });
  };

  componentDidMount() {
    let startTime = Date.now();
    this.interval = setInterval(() => {
      this.tick(startTime);
    }, 100);
  }

  stopTimer = () => {
    this.setState({
      isTimerRunning: false
    });
    clearInterval(this.interval);
  };

  resetTimer = () => {
    let startTime = Date.now();
    this.setState({
      isTimerRunning: true,
      seconds: 0
    });
    this.interval = setInterval(
      () => this.tick(startTime),
      100
    );
  };

  render() {
    const { seconds, minutes } = this.state;
    const displaySeconds =
      seconds < 10 ? `0${seconds}` : seconds;
    const displayMins =
      minutes < 10 ? `0${minutes}` : minutes;
    return (
      <>
        <Header />
        <div className="display">
          {`${displayMins}:${displaySeconds}`}
        </div>
        <div className="buttons">
          <TimerButton
            stopTimer={this.stopTimer}
            resetTimer={this.resetTimer}
            isTimerRunning={this.state.isTimerRunning}
          />
        </div>
      </>
    );
  }
}

export default Timer;
