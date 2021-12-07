import { START_BUTTON, SET_SCORE } from '../constants';

const initialState = {
  playerName: '',
};

export const startButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_BUTTON:
      return {
        ...state,
        playerName: action.playerName,
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.score,
      };
    default:
      return state;
  }
};
