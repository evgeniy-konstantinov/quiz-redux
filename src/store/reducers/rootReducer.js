import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { startButtonReducer } from './startButtonReducer';
import { setScoreActionCreator } from '../actionCreators/actionCreators';

export const rootReducer = combineReducers({
  inputReducer,
  startButtonReducer,
  setScoreActionCreator,
});
