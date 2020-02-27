import React, {useState} from 'react';

import Length from '../components/Length';
import Display from '../components/Display';

import classes from './Clock.module.css';

const Clock = () => {
    const [sessionLength, setSessionLength] = useState(1500);
    const [breakLength, setBreakLength] = useState(300);
    const [running, setRunning] = useState(false);

    const reset = () => {
        setSessionLength(1500);
        setBreakLength(300);
        setRunning(false);
    }

    const down = (setType, type) => {
        if (type > 0) {
            setType(type - 60);
        }
    }

    const up = (setType, type) => {
        if (type < 3600) {
            setType(type + 60);
        }
    }

    const playPause = () => {
        setRunning(!running);
        console.log(running)
    }

    return (
        <div className={classes.Clock}>
            <h1>Pomodoro Clock</h1>
            <div className={classes.DisplayLength}>
                <Length 
                    lengthType="Break Length" 
                    length={breakLength} 
                    down={() => down(setBreakLength, breakLength)} 
                    up={() => up(setBreakLength, breakLength)}
                />
                <Length 
                    lengthType="Session Length" 
                    length={sessionLength} 
                    down={() => down(setSessionLength, sessionLength)} 
                    up={() => up(setSessionLength, sessionLength)}
                />
            </div>
            <Display length={sessionLength}/>
            <div className={classes.Setting}>
                <div className={classes.Play} onClick={() => playPause()}>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause"></i>
                </div>
                <div onClick={() => reset()}>
                    <i className="fas fa-history"></i>
                </div>
            </div>
        </div>
    )
};

export default Clock;