/* eslint-disable no-unused-vars */
import { put, all } from 'redux-saga/effects';
import { Creators as loader } from '../ducks/loader';

const getParams = (data) => ({
  object: data.split('_')[2].toLowerCase(),
  method: data.split('_')[1].toLowerCase(),
});

function* addLoader(params) {
  const { type } = params;
  const result = type === undefined ? params : getParams(type);
  yield put(loader.startLoading(result));
}

function* removeLoader(params, full = false) {
  if (!full) {
    const { type } = params;
    const result = type === undefined ? params : getParams(type);
    yield put(loader.stopLoading(result));
  } else {
    yield put(loader.stopLoadingFull(params.object));
  }
}

function* SagaLoader() {
  yield all([]);
}

export default SagaLoader;
