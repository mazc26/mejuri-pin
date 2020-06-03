import { from } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import {
  fetchItems,
  fetchItemsSuccess,
  fetchItemsError,
} from '../../reducers/common';

import { apiParser } from '../../../api/apiParser';

export const fetchItemsEpic = action$ => action$.pipe(
  ofType(fetchItems.type),
  mergeMap(action => 
    from(
      apiParser(action.payload, "GET")
      .then(fetchItemsSuccess)
      .catch(fetchItemsError)
    )
  ));
