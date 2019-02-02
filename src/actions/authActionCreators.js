
//login action
export default function login( username , email, password ){
return {
    type: 'CLICKED_LOGIN',
    username,
    email,
    password
}
}

//register action