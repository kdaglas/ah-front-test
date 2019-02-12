import {REGISTER_FACEBOOK} from './types';
import {postDataNoAuth,baseURL} from '../constants';


const facebookSignUp=(accessToken)=>(dispatch)=>{
    postDataNoAuth(`${baseURL}/api/users/facebook-login/`,accessToken).then(
        data=>{
            console.log(data)
        }
    )
}

export default facebookSignUp