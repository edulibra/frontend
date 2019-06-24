import Requester from 'common/network/http/Request';
import endpoints from 'configs/endpoints';
import tradeActions, { tradeActionTypes } from 'action-creators/trade';
import { call, fork, put, takeEvery, } from 'redux-saga/effects';

function* getExchangeRate() {
  const result = yield call(
    Requester.get,
    endpoints.trade.getExchangeRate,
  );


  if (result && result.success) {
    // set exchange rate to store
    if (result.result) { yield put(tradeActions.setExchangeRage(result.result)); }
    if (result.wallets) { yield put(tradeActions.setUserWallets(result.wallets)); }
    // if (options && options.onSuccess) {
    //   options.onSuccess(setResult.setResult);
    // }
  } else {
    // if (options && options.onFail) {
    //   options.onFail(setResult);
    // }
  }

  // yield put(storeSiteConfig(defaultSiteConfig));
}

export default function* () {
  return [
    yield takeEvery(tradeActionTypes.GET_EXCHANGE_RATE, getExchangeRate)
  ]
}
