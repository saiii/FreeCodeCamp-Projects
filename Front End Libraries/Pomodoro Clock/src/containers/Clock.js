import React, {useState} from 'react';

import Length from '../components/Length';
import Display from '../components/Display';

import classes from './Clock.module.css';

const Clock = () => {
    const [sessionLength, setSessionLength] = useState(new Date(2500000).getMinutes());
    const [breakLength, setBreakLength] = useState(5);
    const [running, setRunning] = useState(false);

    return (
        <div className={classes.Clock}>
            <h1>Pomodoro Clock</h1>
            <div className={classes.DisplayLength}>
                <Length lengthType="Break Length" length={breakLength} />
                <Length lengthType="Session Length" length={sessionLength} />
            </div>
            <Display length={sessionLength}/>
            <div className={classes.Setting}>
                <div className={classes.Play}>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause"></i>
                </div>
                <div>
                    <i className="fas fa-history"></i>
                </div>
            </div>
        </div>
    )
};

export default Clock;