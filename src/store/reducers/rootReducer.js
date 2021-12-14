import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { startButtonReducer } from './startButtonReducer';
import { scoreReducer } from './scoreReducer';
import { setScoreListReducer } from './setScoreReducer';

export const rootReducer = combineReducers({
  inputReducer,
  startButtonReducer,
  scoreReducer,
  setScoreListReducer,
});
