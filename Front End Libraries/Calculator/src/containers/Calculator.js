import React from 'react';
import Screen from '../components/Screen';
import classes from './Calculator.module.css';

const Calculator = props => {

    return (
        <div className={classes.Calculator}>
            <Screen />
        </div>
    )

};

export default Calculator;