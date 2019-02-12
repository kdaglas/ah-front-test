import { REGISTER_FACEBOOK } from '../actions/types'

const initialState={
    is_authenticated:false,
    facebook_login:false
}

const socialLoginReducer=(state=initialState,action)=>{
switch(action.type){
    case REGISTER_FACEBOOK:
    return{
        ...state,
        is_authenticated:true,
        facebook_login:true
    }
    default:
    return state;
}
}

export default socialLoginReducer;