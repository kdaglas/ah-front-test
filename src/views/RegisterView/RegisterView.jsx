import React, { Component } from 'react'
import RegsiterAction from '../../actions/registerUserActionCreator';
import {connect} from 'react-redux';
import Register from '../../components/Register/Register';
import { faceBookSignUp, googleSignUp } from '../../actions/SocialSignupAction';

import './RegisterView.css'
import toastr from 'toastr'



export class RegisterView extends Component {
    state={
        username:'',
        email:'',
        password:'',
        usernameValid:false,
        loading:true
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.registerState.status===200){
            toastr.info('successful login')
            nextProps.history.push('/')
        }else if(nextProps.registerState.status===400){
                toastr.warning(
                    nextProps.registerState.data.username)
                    toastr.warning(
                        nextProps.registerState.data.email)
                        toastr.warning(
        nextProps.registerState.data.password)
        }
    }
    

    HandleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
    Clicked=(e)=>{
        e.preventDefault()
        const { RegsiterAction } = this.props;
        RegsiterAction(this.state)
       
    }
    
    responseFacebook=(resp)=>{
        const { faceBookSignUp } = this.props
        faceBookSignUp(resp.accessToken)
        console.log(resp)


    }
    handleGoogleSuccess=(resp)=>{
        console.log(resp.tokenId)
        const { googleSignUp } =this.props
        googleSignUp(resp.tokenId)
        
    }
    handleGoogleFail=(resp)=>{
        alert('its possible you are logged in with two accounts please signout of one or use ')
    }

    handleTwitterLoginFail=(resp)=>{
        console.log(resp)
    }
    handleTwitterLoginSuccess=(resp)=>{
        console.log(resp)
    }
    Clicked=()=>{
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 5; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
          }
          
          console.log(makeid());
        
        fetch('https://api.twitter.com/oauth/request_token'
        // ,{
        //     mode:"no-cors",method:"GET",headers:{
        //         oauth:{
        //             oauth_callback: "http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback",
        //             consumer_key: "m3zDQN5pkFlS129EA7sAr3XbN",
        //             consumer_secret: "shthUYGMZ2fOi9asg1dnryqdhvqx4wv0zwZEHAoIgbXooiKuub"
        //     }
        //     }
        // }
        
        ).then(data=>{
            console.log(data)
        })
    }
    render(){
         
    return (
       
        <div>
        <Register Clicked={this.Clicked} 
        responseFacebook={this.responseFacebook}
        successOrError={this.state.usernameValid? "has-danger":"has-success"}
         HandleChange={this.HandleChange}
         googleResponseSuccess={this.handleGoogleSuccess} googleResponseFailure={this.handleGoogleFail}
         TwitterLoginFail={this.handleTwitterLoginFail} TwitterLoginSuccess={this.handleTwitterLoginSuccess}
        
         
         />
        <button onClick={this.Clicked} className="btn btn-primary">login twiiter</button>
        </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        registerState: state.registerUserReducer,
        socailSignUpState:state.socialSignupReducer
    }
}

export default connect(mapStateToProps,{RegsiterAction,faceBookSignUp,googleSignUp})(RegisterView)