import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Questions.scss";

const TimeLimit: React.FC<any> = (props) => {
  const { timeLimit } = props;
  const history = useHistory();
  const [countDown, setCountDown] = useState("");
  const [countDownDate, setCountDownDate] = useState(0);

  useEffect(() => {
    const today = new Date();
    setCountDownDate(today.getTime() + timeLimit * 1000);
  }, []);

  const onSubmitHandler = () => {
    history.push("/test-submit/152");
  };

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDown(`${hours}h${minutes}m${seconds}s`);

    if (distance < 0 && countDownDate !== 0) {
      clearInterval(x);
      setCountDown(`EXPIRED`);
      onSubmitHandler();
    }
  }, 1000);

  return (
    <div className="header-submit">
      <h3 id={"count-down"}>{countDown}</h3>
      <button
        onClick={() => {
          onSubmitHandler();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TimeLimit;
