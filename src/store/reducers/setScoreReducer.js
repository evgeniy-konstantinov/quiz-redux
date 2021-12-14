import { SET_SCORE_LIST } from '../constants';

const initialState = [];

export const setScoreListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE_LIST:
      return [...state, { playerName: action.playerName, score: action.score }];

    default:
      return state;
  }
};
