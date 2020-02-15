import * as actionTypes from '../actions/actionTypes';

const initialState = {
    equation: [],
    type: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TYPE:
            return {
                ...state,
                type: [state.type, action.value]
            };
        case actionTypes.CLEAR_WHAT_USER_TYPE:
            return {
                ...state,
                type: []
            }
        case actionTypes.CALCULATE_EQUATION:
            return {
                ...state,
                equation: [state.equation, action.value]
            }
        case actionTypes.RESET:
            return {
                equation: [],
                type: []
            }
        default:
            return {...state};
    }
};

export default reducer;