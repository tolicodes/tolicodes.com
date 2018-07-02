import {
  takeLatest,
  all,
} from 'redux-saga/effects';

import {
  apiCall,
} from './api';

import {
  handleError,
} from '../api';

import {
  DO_API_CALL,
  setApiResponse,
} from './actions';

function* doApiCall() {
  const res = yield handleError(() => apiCall());
  if(res) setApiResponse(res);
}

export default function* root() {
  yield all([
    yield takeLatest(DO_API_CALL, doApiCall),
  ]);
}
