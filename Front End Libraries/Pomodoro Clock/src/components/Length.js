import React from 'react';

import classes from './Length.module.css';

const Length = props => {
    return (
        <div className={classes.Length}>
            <p>{props.lengthType}</p>
            <div className={classes.DisplayNumber}>
                <i className="fas fa-arrow-up"></i>
                <p>{Math.floor(props.length/60)}</p>
                <i className="fas fa-arrow-down" onClick={() => props.down()}></i>
            </div>

        </div>
    )
};

export default Length;