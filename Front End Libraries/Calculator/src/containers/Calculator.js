import React from 'react';
import Screen from '../components/Screen';
import classes from './Calculator.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/display';

const Calculator = props => {

    const equation = useSelector(state => { return state.equation });
    const type = useSelector(state => { return state.type });
    const ready = useSelector(state => { return state.ready });
    const answer = useSelector(state => { return state.answer });
    const charNum = useSelector(state => { return state.charNum });

    const dispatch = useDispatch();
    const typeHandler = (value) => dispatch(actions.displayWhatUserType(value));
    const clearHandler = () => dispatch(actions.clearWhatUserType());
    const calculateEquationHandler = (value) => dispatch(actions.calculateEquation(value));
    const resetHandler = () => dispatch(actions.reset());
    const calculateHansler = (value, answer) => dispatch(actions.calculate(value, answer));
    const setReady = () => dispatch(actions.ready());
    const setNotReady = () => dispatch(actions.notReady());
    const removeLastChar = () => dispatch(actions.removeLastChar());
    const charNumPlus = () => dispatch(actions.charNumPlus());
    const charNumReset = () => dispatch(actions.charNumReset());

    const clickHandler = (value) => { 
        if  (typeof value !== 'number' && typeof equation[equation.length - 1] !== 'number') {

        } else if (!ready && equation.length >= 17 && typeof value !== 'number') {
            resetHandler();
            calculateEquationHandler(answer);
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumReset();
        } else if (equation.length >= 17 && typeof value !== 'number' && value !== '=') {
            clearHandler();
            typeHandler(value);
            calculateEquationHandler(value);
            charNumReset();
        } else if (equation.length >= 17 && typeof equation[equation.length - 1] !== 'number') {
            clearHandler();
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumPlus();
        } else if (equation.length >= 17 && value === '=' && typeof equation[equation.length - 1] === 'number') {
            calculateHansler('=', eval(equation.join('')));
            setNotReady();
            charNumReset();
        } else if (charNum >= 17) {
            clearHandler();
            typeHandler('DIGIT LIMIT MET');
        } else if (value === '.' && type.length === 0) {
            typeHandler(0);
            calculateEquationHandler(0);
            typeHandler('.');
            calculateEquationHandler('.');
            charNumPlus();
        } else if (value === '=' && equation.length === 0) {

        } else if (!ready && value === '=') {

        } else if (value === '=' && ready) {
            if (typeof equation[equation.length - 1] !== 'number') {
                calculateHansler('=', eval(equation.slice(0,equation.length-1).join('')));
                removeLastChar();
                charNumReset();
            } else {
                calculateHansler('=', eval(equation.join('')));
                charNumReset();
            }
            setNotReady();
        } else if (!ready && ((typeof value === 'number') || value === '.')) {
            resetHandler();
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumPlus();
        } else if (!ready && typeof value !== 'number') {
            resetHandler();
            calculateEquationHandler(answer);
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumReset();
        } else if (/*answer.length > 0 && */(value === '+' || value === '-' || value === '*' || value === '/')) {
            clearHandler();
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumReset();
        } else if (typeof value === 'number' && typeof type[type.length - 1] !== 'number' && type[type.length - 1] !== '.') {
            clearHandler();
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumPlus();
        } else {
            typeHandler(value);
            calculateEquationHandler(value);
            setReady();
            charNumPlus();
        }
    };

    return (
        <div className={classes.Calculator}>
            <Screen />
            <div className={classes.Pad}>
                <button onClick={() => {resetHandler(); charNumReset();}} className={classes.AC}>AC</button>
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