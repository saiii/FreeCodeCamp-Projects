import React, {useState} from 'react';

import Length from '../components/Length';
import Display from '../components/Display';

import classes from './Clock.module.css';

const Clock = () => {
    const [sessionLength, setSessionLength] = useState(1500);
    const [breakLength, setBreakLength] = useState(300);
    const [running, setRunning] = useState(false);

    const down = (SetType, type) => {
        if (type > 0) {
            SetType(type - 60);
        }
    }

    return (
        <div className={classes.Clock}>
            <h1>Pomodoro Clock</h1>
            <div className={classes.DisplayLength}>
                <Length lengthType="Break Length" length={breakLength} down={() => down(setBreakLength, breakLength)} />
                <Length lengthType="Session Length" length={sessionLength} down={() => down(setSessionLength, sessionLength)} />
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