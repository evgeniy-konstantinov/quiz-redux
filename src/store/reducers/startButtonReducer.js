import { START_BUTTON } from '../constants';

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

    default:
      return state;
  }
};
