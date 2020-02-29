import React, {useState} from 'react';

import Length from '../components/Length';
import Display from '../components/Display';

import classes from './Clock.module.css';

const Clock = () => {
    const [sessionLength, setSessionLength] = useState(1500);
    const [breakLength, setBreakLength] = useState(300);
    const [running, setRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    const reset = () => {
        setSessionLength(1500);
        setBreakLength(300);
        setRunning(false);
    }

    const down = (setType, type) => {
        if (type > 60) {
            setType(type - 60);
        }
    }

    const up = (setType, type) => {
        if (type < 3600) {
            setType(type + 60);
        }
    }

    const playPause = () => {
        console.log(running)
        setRunning(!running);
        // if (running) {
        //     const working = setInterval(() => {setSessionLength(sessionLength - 60)}, 1000);

        // }
        console.log(running)
    }

    const length = () => {
        return !isBreak? sessionLength : breakLength;
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
            <Display length={length()} />
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