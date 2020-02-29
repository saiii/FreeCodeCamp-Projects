import React, {useState, useEffect} from 'react';

import Length from '../components/Length';
import Display from '../components/Display';

import classes from './Clock.module.css';

const Clock = () => {
    const [sessionLength, setSessionLength] = useState(1500);
    const [breakLength, setBreakLength] = useState(300);
    const [running, setRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [sessionSet, setSessionSet] = useState(1500);
    const [breakSet, setBreakSet] = useState(300);

    const reset = () => {
        setSessionLength(1500);
        setBreakLength(300);
        setRunning(false);
        setSessionSet(1500);
        setBreakSet(300);
    }

    const down = (setType, type, setTypeDefault, typeDefault) => {
        if (type > 60) {
            setType(type - 60);
            setTypeDefault(typeDefault - 60);
        }
    }

    const up = (setType, type, setTypeDefault, typeDefault) => {
        if (type < 3600) {
            setType(type + 60);
            setTypeDefault(typeDefault + 60);
        }
    }

    const playPause = () => {
        setRunning(state => !state);
    }

    useEffect(() => {
        if (running) {
            if (!isBreak) {
                let counting = setInterval(() => {setSessionLength(sessionLength - 1)}, 1000);
                setTimeout(() => {clearInterval(counting)}, 1000);
            } else {
                let counting = setInterval(() => {setBreakLength(breakLength - 1)}, 1000);
                setTimeout(() => {clearInterval(counting)}, 1000);
            }
        } 
    }, [running, sessionLength, breakLength, isBreak])

    useEffect(() => {
        if (sessionLength === 0) {
            setIsBreak(true);
            setSessionLength(sessionSet); // This does not change the value of sessionLength
            console.log(sessionSet)
            console.log(sessionLength);
        }

        if (breakLength === 0) {
            setIsBreak(false);
            setBreakLength(breakSet); // This does not change the value of breakLength
            console.log(breakSet)
            console.log(breakLength);
        }
    }, [breakLength, breakSet, sessionLength, sessionSet]);

    const length = () => {
        return !isBreak ? sessionLength : breakLength;
    }

    const displayText = () => {
        return !isBreak ? 'Session' : 'Break';
    }

    return (
        <div className={classes.Clock}>
            <h1>Pomodoro Clock</h1>
            <div className={classes.DisplayLength}>
                <Length 
                    lengthType="Break Length" 
                    length={breakSet} 
                    down={() => down(setBreakLength, breakLength, setBreakSet, breakSet)} 
                    up={() => up(setBreakLength, breakLength, setBreakSet, breakSet)}
                />
                <Length 
                    lengthType="Session Length" 
                    length={sessionSet} 
                    down={() => down(setSessionLength, sessionLength, setSessionSet, sessionSet)} 
                    up={() => up(setSessionLength, sessionLength, setSessionSet, sessionSet)}
                />
            </div>
            <Display length={length()} displayText={displayText()}/>
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

export default React.memo(Clock);