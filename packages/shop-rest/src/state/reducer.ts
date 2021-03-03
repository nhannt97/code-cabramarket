
import { reducers } from './modules'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    ...reducers
})
