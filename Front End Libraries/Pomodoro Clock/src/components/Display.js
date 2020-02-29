import React from 'react';

import classes from './Display.module.css'

const Display = props => {

    const clocktify = () => {
        const minute = Math.floor(props.length / 60);
        const second = props.length % 60;
        const minuteText = minute.toFixed().length === 1 ? '0'.concat(minute.toFixed()) : minute.toFixed();
        const secondText = second.toFixed().length === 1 ? '0'.concat(second.toFixed()) : second.toFixed();
        return `${minuteText}:${secondText}`;
    };

    clocktify();

    return (
        <div id="clock" className={classes.Display}>
            <p>{props.displayText}</p>
            <p>{clocktify()}</p>
        </div>
    )
};

export default Display;