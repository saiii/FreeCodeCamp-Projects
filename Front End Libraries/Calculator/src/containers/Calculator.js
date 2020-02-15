import React from 'react';
import Screen from '../components/Screen';
import classes from './Calculator.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/display';

const Calculator = props => {


    const equation = useSelector(state => { return state.equation });
    const type = useSelector(state => { return state.type });

    const dispatch = useDispatch();
    const typeHandler = () => dispatch(actions.displayWhatUserType());

    return (
        <div className={classes.Calculator}>
            <Screen />
            <div className={classes.Pad}>
                <button className={classes.AC}>AC</button>
                <button className={[classes.Math, classes.Devision].join(' ')}>/</button>
                <button className={[classes.Math, classes.Multiplication].join(' ')}>x</button>
                <button className={[classes.Number, classes.Seven].join(' ')}>7</button>
                <button className={[classes.Number, classes.Eight].join(' ')}>8</button>
                <button className={[classes.Number, classes.Nine].join(' ')}>9</button>
                <button className={[classes.Math, classes.Subtraction].join(' ')}>-</button>
                <button className={[classes.Number, classes.Four].join(' ')}>4</button>
                <button className={[classes.Number, classes.Five].join(' ')}>5</button>
                <button className={[classes.Number, classes.Six].join(' ')}>6</button>
                <button className={[classes.Math, classes.Addition].join(' ')}>+</button>
                <button className={[classes.Number, classes.One].join(' ')}>1</button>
                <button className={[classes.Number, classes.Two].join(' ')}>2</button>
                <button className={[classes.Number, classes.Three].join(' ')}>3</button>
                <button className={[classes.Equal, classes.Equal].join(' ')}>=</button>
                <button className={[classes.Zero, classes.Zero].join(' ')}>0</button>
                <button className={[classes.Number, classes.Dot].join(' ')}>.</button>
            </div>
        </div>
    )

};

export default Calculator;