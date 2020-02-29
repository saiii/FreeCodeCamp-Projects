import React from 'react';

import classes from './Display.module.css'


// const clocktify = () => {
//     if (props.)
// };

const Display = props => {
    return (
        <div className={classes.Display}>
            <p>Session</p>
            <p>{Math.floor(props.length/60)}</p>
        </div>
    )
};

export default Display;