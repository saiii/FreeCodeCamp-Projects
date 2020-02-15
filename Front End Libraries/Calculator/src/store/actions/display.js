import * as actionTypes from './actionTypes';

export const displayWhatUserType = (character) => {
   return {
       type: actionTypes.TYPE,
       value: character
    };
};