import { INPUT_TEXT, START_BUTTON } from '../constants';

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
