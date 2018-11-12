import { combineReducers } from 'redux';
import colorListReducer from './colorListReducer';
import colorReducer from './colorReducer'

export default combineReducers({
  colorList: colorListReducer,
  pickedColor: colorReducer
});