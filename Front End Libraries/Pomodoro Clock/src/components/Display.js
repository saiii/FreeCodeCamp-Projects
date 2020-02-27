import React from 'react';

import classes from './Display.module.css'

const Display = props => {
    return (
        <div className={classes.Display}>
            <p>Session</p>
            <p>{props.length}</p>
        </div>
    )
};

export default Display;