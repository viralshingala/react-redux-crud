import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as carssEpics from './cars/epics';

export default combineEpics(
  ...values(carssEpics)
);
