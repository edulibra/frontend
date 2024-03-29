import Requester from 'common/network/http/Request';
import endpoints from 'configs/endpoints';
import twoFaActions, { twoFaActionTypes } from 'action-creators/two-fa';
import { call, fork, put, takeEvery, } from 'redux-saga/effects';

function* generateSecret(action) {
  const { options } = action;

  const response = yield call(
    Requester.get,
    endpoints.twoFa.generateTwoFa,
  );
  if (response && response.success) {
    const result = response.result;
    yield put(twoFaActions.receivedTwoFaSecret(result));

    const qrResult = yield call(
      Requester.get,
      endpoints.twoFa.generateQrCode,
      {
        otpauth_url: result.otpauth_url,
      },
    );
    if (qrResult && qrResult.success) {
      yield put(twoFaActions.receivedQrCode(qrResult.result));
    }
  }

  // yield put(storeSiteConfig(defaultSiteConfig));
}

function* saveTwoFa(action) {
  const { options, data } = action;

  const response = yield call(
    Requester.postJson,
    endpoints.twoFa.saveTwoFa,
    data,
  );
  if (response && response.success) {
    const result = response.result;
    yield put(twoFaActions.saveTwoFaToServerSuccess(result));
    if (options && options.onSuccess) {
      options.onSuccess();
    }
    return;
  }
  if (options && options.onFail) {
    options.onFail(response);
  }
  // yield put(storeSiteConfig(defaultSiteConfig));
}
export default function* () {
  return [
    yield takeEvery(twoFaActionTypes.GENERATE_TWO_FA_SECRET, generateSecret),
    yield takeEvery(twoFaActionTypes.SAVE_TWO_FA_TO_SERVER, saveTwoFa)
  ]
}
