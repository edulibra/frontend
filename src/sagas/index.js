import {call, fork, put, takeLatest, all, takeEvery} from 'redux-saga/effects';
import commonSaga from './common';
import socket from './socket';
import user from './user';
import trade from './trade';
import TwoFa from './two-fa';
import context from './context';
import formSaga from './form';
import nodeData from './rc-node-data';

export default function* root() {
  try {

    yield all([
      ...formSaga(),
      ...socket(),
      ...user(),
      ...trade(),
      ...TwoFa(),
      ...context(),
      ...nodeData(),
    ])

  } catch (e) {
    console.log(e);
  }
}
