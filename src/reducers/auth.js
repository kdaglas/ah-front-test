
import actionTypes from '../actions/actionTypes'

export default function login ( state = {}, action){
switch(action.type){
    case actionTypes.LOGIN_ACTION: 
        if(action.payload.token){
            return {
                ...state,
                token:action.payload.token
            }
        }else{
            return {
                ...state,
                login_errors:action.payload.errors
            }
        }
    default:
    return state
}

}
