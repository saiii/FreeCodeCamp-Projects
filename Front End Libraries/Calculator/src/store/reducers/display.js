import * as actionTypes from '../actions/actionTypes';

const initialState = {
    equation: '',
    type: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TYPE:
            return {
                type: action.value 
            };
        default:
            return {...state};
    }
};

export default reducer;