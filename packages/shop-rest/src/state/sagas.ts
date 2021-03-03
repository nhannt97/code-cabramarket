
import { all, fork } from 'redux-saga/effects'
import { sagas } from './modules'

export const rootSaga = function* rootSaga() {
  yield all([
    ...sagas.map(saga => fork(saga))
  ])
}
