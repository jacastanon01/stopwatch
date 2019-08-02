import React from "react";

const TimerButton = ({
  isTimerRunning,
  stopTimer,
  resetTimer
}) => {
  const btnText = isTimerRunning ? "stop" : "reset";
  return (
    <div>
      {isTimerRunning ? (
        <button
          onClick={stopTimer}
          className="stopBtn btnStyle"
        >
          {btnText}
        </button>
      ) : (
        <button
          onClick={resetTimer}
          className="resetBtn btnStyle"
        >
          {btnText}
        </button>
      )}
    </div>
  );
};

export default TimerButton;
