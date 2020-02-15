import * as actionTypes from '../actions/actionTypes';

const initialState = {
    equation: '123',
    type: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TYPE:
            return {
                ...state,
                type: [state.type, action.value]
            };
        default:
            return {...state};
    }
};

export default reducer;