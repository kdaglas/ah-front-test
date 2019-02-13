import {REGISTER_USER_SUCCESS,REGISTER_USER_FAILS} from '../actions/types';


const initialState={
    is_successful:false,
    data:"",
    status:""
    
}

function RegisterUserReducer(state=initialState,action){
    switch(action.type){
        case REGISTER_USER_SUCCESS:
        return{
            ...state,
            is_successful:true,
            data:action.payload,
            status:200
           
        }
        case REGISTER_USER_FAILS:
        return {
            ...state,
            is_successful:false,
            data:action.payload,
            status:400
        }
        default:
        return state
    }
}

export default RegisterUserReducer