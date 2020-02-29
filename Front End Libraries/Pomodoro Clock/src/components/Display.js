import React from 'react';

import classes from './Display.module.css'

const Display = props => {

    const clocktify = () => {
        const minute = Math.floor(props.length / 60);
        const second = props.length % 60;
        return `${minute.toFixed()}:${second.toFixed()}`;
    };

    clocktify();

    return (
        <div className={classes.Display}>
            <p>Session</p>
            <p>{clocktify()}</p>
        </div>
    )
};

export default Display;