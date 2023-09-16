import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import ExpiredNotice from './components/ExpiredNotice';
import ShowCounter from './components/ShowCounter';
const CountDownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return(
        <div>
            `{(days + hours + minutes + seconds <= 0) ? <ExpiredNotice></ExpiredNotice> : <ShowCounter days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}></ShowCounter>}`
        </div>
    )

  
  };

export default CountDownTimer;