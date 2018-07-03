import {
  takeLatest,
  select,
  put,
  all,
} from 'redux-saga/effects';

import {
  getHomeText,
} from './api';

import {
  handleError,
} from '../api';

import {
  DO_GET_HOME_TEXT,
  doGetHomeText,
  setHomeText,
} from './actions';

function* selectPathName() {
  return yield select(({ router }) => router.location.pathname);
}

function* onDoGetHomeText() {
  const res = yield handleError(() => getHomeText());
  if(res) yield put(setHomeText(res));
}

function* onInitialize() {
  if ((yield selectPathName()) === '/') {
    yield put(doGetHomeText());
  }
}

export default function* root() {
  yield all([
    onInitialize(),
    yield takeLatest(DO_GET_HOME_TEXT, onDoGetHomeText),
  ]);
}
