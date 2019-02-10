import { combineReducers } from 'redux'
import auth from './auth'
import registerUserReducer from './registerUserReducer';

export default combineReducers(
    {
        auth,
        registerUserReducer
    }
)