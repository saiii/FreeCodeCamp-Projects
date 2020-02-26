import React, {useState} from 'react';

import Length from '../components/Length';

import classes from './Clock.module.css';

const Clock = () => {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [running, setRunning] = useState(false);

    return (
        <div className={classes.Clock}>
            <h1>Pomodoro Clock</h1>
            <div className={classes.DisplayLength}>
                <Length lengthType="Break Length" length={breakLength} />
                <Length lengthType="Session Length" length={sessionLength} />
            </div>
        </div>
    )
};

export default Clock;