import * as actionTypes from './actionTypes';

export const displayWhatUserType = (character) => {
   return {
       type: actionTypes.TYPE,
       value: character
    };
};

export const clearWhatUserType = () => {
    return {
        type: actionTypes.CLEAR_WHAT_USER_TYPE
    };
};

export const calculateEquation = (value) => {
    return {
        type: actionTypes.CALCULATE_EQUATION,
        value: value
    };
};

export const reset = () => {
    return {
        type: actionTypes.RESET
    };
};

export const calculate = (value, answer) => {
    return { 
        type: actionTypes.CALCULATE,
        value: value,
        answer: answer
     };
};

export const ready = () => {
    return {
        type: actionTypes.READY
    };
};

export const notReady = () => {
    return {
        type: actionTypes.NOT_READY
    };
};

export const removeLastChar = () => {
    return {
        type: actionTypes.REMOVE_LAST_CHAR
    };
};

export const charNumPlus = () => {
    return {
        type: actionTypes.CHAR_NUM_PLUS
    };
};

export const charNumReset = () => {
    return {
        type: actionTypes.CHAR_NUM_RESET
    };
};