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