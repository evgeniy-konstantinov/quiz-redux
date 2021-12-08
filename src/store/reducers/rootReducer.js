import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { startButtonReducer } from './startButtonReducer';
import { scoreReducer } from './scoreReducer';

export const rootReducer = combineReducers({
  inputReducer,
  startButtonReducer,
  scoreReducer,
});
