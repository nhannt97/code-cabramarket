import {
    all, takeEvery, put, call
} from 'redux-saga/effects';
import { getProducts, getProductsFinish } from './reducer';
import { getWC } from 'utils/api/callApi';


function* watchGetProducts({payload}) {
    const res = yield call(getWC, '/products', payload);
    yield put(getProductsFinish(res))
}

export function* rootSagas() {
    yield all([
        takeEvery(getProducts.type as any, watchGetProducts)
    ])
    yield put(getProducts({ page: 1, per_page: 20 }))
}