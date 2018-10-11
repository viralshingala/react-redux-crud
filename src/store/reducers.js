import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cars from './cars/reducer';

export default combineReducers({
  cars,
  routing: routerReducer,
});
