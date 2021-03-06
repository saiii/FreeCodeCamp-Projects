import * as actionTypes from '../actions/actionTypes';

const initialState = {
    equation: [],
    type: [],
    ready: true,
    answer: '',
    charNum: 0,
    needParenthesis: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TYPE:
            return {
                ...state,
                type: [...state.type, action.value]
            };
        case actionTypes.CLEAR_WHAT_USER_TYPE:
            return {
                ...state,
                type: []
            }
        case actionTypes.CALCULATE_EQUATION:
            return {
                ...state,
                equation: [...state.equation, action.value]
            }
        case actionTypes.RESET:
            return {
                ...state, 
                equation: [],
                type: [],
                answer: '',
                ready: true
            }
        case actionTypes.CALCULATE:
            return {
                ...state,
                equation: [...state.equation, action.value, action.answer],
                type: [action.answer],
                answer: action.answer
             }
        case actionTypes.READY:
            return {
                ...state,
                ready: true
            }
        case actionTypes.NOT_READY:
            return {
                ...state,
                ready: false
            }
        case actionTypes.REMOVE_LAST_CHAR:
            return {
                ...state,
                equation: state.equation.slice(0, state.equation.length - 1)
            }
        case actionTypes.CHAR_NUM_PLUS:
            return {
                ...state,
                charNum: state.charNum + 1
            }
        case actionTypes.CHAR_NUM_RESET:
            return {
                ...state,
                charNum: 0
            }
        case actionTypes.NEED_PARENTHESIS:
            return {
                ...state,
                needParenthesis: action.parenthesis
            }
        default:
            return {...state};
    }
};

export default reducer;