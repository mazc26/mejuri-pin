import { combineEpics } from 'redux-observable';
import { fetchItemsEpic } from './common';

const rootEpic = combineEpics(
  fetchItemsEpic
);

export default rootEpic;