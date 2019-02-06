
import actionTypes from './actionTypes'

export function loginUser(email, password ){
  return function(dispatch){
  fetch("https://ah-backend-xmen.herokuapp.com/api/users/login/",{
        method:'POST',
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify({user:{
            email:email,
            password:password
        }
        })
    })
    .then( res => {
        status = res.status
        return res.json()
    })
    .then(data => {
        let payload = {}
        if(status>=400){
            let error_types = Object.keys(data.errors)
            let errors = []
            error_types.forEach(type =>{
            errors.push(type+': '+data.errors[type])
            })
             payload.errors=errors[0]
        }else{ 
            payload.token = data.token
        }
        dispatch({
                type: actionTypes.LOGIN_ACTION,
                payload:payload
            })
    })
}

} 
