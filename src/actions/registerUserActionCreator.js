import {REGISTER_USER_SUCCESS,REGISTER_USER_FAILS} from './types';
import toastr from 'toastr';
import{baseURL, postDataNoAuth} from '../constants';



toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


const RegisterUser=(payload)=>dispatch=>{
    postDataNoAuth(`${baseURL}/api/users/`,
    {"user":{
        "email":payload['email'],
        "password":payload['password'],
        "username":payload['username']
    }}
    ).then(
            data=>{
                if(data.errors){ 
                    dispatch({
                        type:REGISTER_USER_FAILS,
                        payload:data.errors
                    })
                    
                }
                else{
                dispatch({
                        type:REGISTER_USER_SUCCESS,
                        payload:data
                })

              
                } 
            
            }
    )

}

export default RegisterUser;