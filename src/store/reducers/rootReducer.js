import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { startButtonReducer } from './startButtonReducer';

export const rootReducer = combineReducers({
  inputReducer,
  startButtonReducer,
});
