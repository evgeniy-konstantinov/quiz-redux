import { SET_SCORE } from '../constants';

const initialState = {
  score: '',
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: action.score,
      };
    default:
      return state;
  }
};
