import { SET_SCORE, RESET_SCORE } from '../constants';

const initialState = {
  score: [],
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: [...state.score, action.score],
      };
    case RESET_SCORE:
      return {
        ...state,
        score: [],
      };
    default:
      return state;
  }
};
