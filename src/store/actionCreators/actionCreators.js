import {
  INPUT_TEXT,
  START_BUTTON,
  SET_SCORE,
  SET_SCORE_LIST,
  RESET_SCORE,
} from '../constants';

export function inputTextActionCreator(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function startButtonActionCreator(text) {
  return {
    type: START_BUTTON,
    playerName: text,
  };
}

export function setScoreActionCreator(score) {
  return {
    type: SET_SCORE,
    score: score,
  };
}

export function ResetScoreActionCreator(score) {
  return {
    type: RESET_SCORE,
    score: [],
  };
}

export function setScoreListActionCreator(playerName, score) {
  return {
    type: SET_SCORE_LIST,
    playerName,
    score,
  };
}
