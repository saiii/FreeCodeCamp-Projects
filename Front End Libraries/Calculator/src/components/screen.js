import React from 'react';
import classes from './Screen.module.css';
import { useSelector } from 'react-redux';

const Screen = props => {

    const equation = useSelector(state => { return state.equation });
    const type = useSelector(state => { return state.type });

    return (
        <div className={classes.Screen}>
            <p>{equation}</p>
            <p>{type}</p>
        </div>
    )
};

export default Screen;