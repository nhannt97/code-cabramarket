import {
    all, takeEvery, put, call
} from 'redux-saga/effects';
import { getCategories, getCategoriesFinish } from './reducer';
import { getWC } from 'utils/api/callApi';


function* watchGetCategories({payload}) {
    const res = yield call(getWC, '/products/categories', payload);
    yield put(getCategoriesFinish(res))
}

export function* rootSagas() {
    yield all([
        takeEvery(getCategories.type as any, watchGetCategories)
    ])
    yield put(getCategories({
        page: 1,
        per_page: 100, 
        include: [0,1243,1244,1211,1252,1254,1256,1265,1266], 
        orderby: 'name' 
    }))
}