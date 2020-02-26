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
            <div>
                <Length lengthType="Break Length"/>
                <Length lengthType="Session Length"/>
            </div>
        </div>
    )
};

export default Clock;