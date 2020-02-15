import React from 'react';
import Screen from '../components/Screen';
import classes from './Calculator.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/display';

const Calculator = props => {

    const equation = useSelector(state => { return state.equation });
    const type = useSelector(state => { return state.type });

    const dispatch = useDispatch();
    const typeHandler = (value) => dispatch(actions.displayWhatUserType(value));
    const clearHandler = () => dispatch(actions.clearWhatUserType());
    const calculateEquationHandler = (value) => dispatch(actions.calculateEquation(value));
    const resetHandler = () => dispatch(actions.reset());

    const clickHandler = (value) => { 
        if (typeof value !== 'number' && typeof type[type.length - 1] !== 'number') {

        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            clearHandler();
            typeHandler(value);
            calculateEquationHandler(value);
        } else if (typeof value === 'number' && typeof type[type.length - 1] !== 'number' && type[type.length - 1] !== '.') {
            clearHandler();
            typeHandler(value);
            calculateEquationHandler(value);
        } else {
            typeHandler(value);
            calculateEquationHandler(value);
        }
    };

    return (
        <div className={classes.Calculator}>
            <Screen />
            <div className={classes.Pad}>
                <button onClick={() => resetHandler()} className={classes.AC}>AC</button>
                <button onClick={() => clickHandler('/')} className={[classes.Math, classes.Devision].join(' ')}>/</button>
                <button onClick={() => clickHandler('*')} className={[classes.Math, classes.Multiplication].join(' ')}>x</button>
                <button onClick={() => clickHandler(7)} className={[classes.Number, classes.Seven].join(' ')}>7</button>
                <button onClick={() => clickHandler(8)} className={[classes.Number, classes.Eight].join(' ')}>8</button>
                <button onClick={() => clickHandler(9)} className={[classes.Number, classes.Nine].join(' ')}>9</button>
                <button onClick={() => clickHandler('-')} className={[classes.Math, classes.Subtraction].join(' ')}>-</button>
                <button onClick={() => clickHandler(4)} className={[classes.Number, classes.Four].join(' ')}>4</button>
                <button onClick={() => clickHandler(5)} className={[classes.Number, classes.Five].join(' ')}>5</button>
                <button onClick={() => clickHandler(6)} className={[classes.Number, classes.Six].join(' ')}>6</button>
                <button onClick={() => clickHandler('+')} className={[classes.Math, classes.Addition].join(' ')}>+</button>
                <button onClick={() => clickHandler(1)} className={[classes.Number, classes.One].join(' ')}>1</button>
                <button onClick={() => clickHandler(2)} className={[classes.Number, classes.Two].join(' ')}>2</button>
                <button onClick={() => clickHandler(3)} className={[classes.Number, classes.Three].join(' ')}>3</button>
                <button onClick={() => clickHandler('=')} className={[classes.Equal, classes.Equal].join(' ')}>=</button>
                <button onClick={() => clickHandler(0)} className={[classes.Zero, classes.Zero].join(' ')}>0</button>
                <button onClick={() => clickHandler('.')} className={[classes.Number, classes.Dot].join(' ')}>.</button>
            </div>
        </div>
    )

};

export default Calculator;