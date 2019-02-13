import { combineReducers } from 'redux'
import auth from './auth'
import registerUserReducer from './registerUserReducer';
import socialSignupReducer from './socialSignupReducer'

export default combineReducers(
    {
        auth,
        registerUserReducer,
        socialSignupReducer
    }
)