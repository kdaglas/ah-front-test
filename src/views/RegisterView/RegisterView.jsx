import React, { Component } from 'react'
import RegsiterAction from '../../actions/registerUserActionCreator';
import {connect} from 'react-redux';
import Register from '../../components/Register/Register';
import socialSignUpAction from '../../actions/SocialSignupAction';

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
        const { socialSignUpAction } = this.props
        socialSignUpAction(resp.accessToken)
        console.log(resp)


    }
    handleGoogleSuccess=(resp)=>{
        console.log(resp)
    }
    handleGoogleFail=(resp)=>{
        console.log(resp)
    }
    render(){
         
    return (
       
        <div>
        <Register Clicked={this.Clicked} 
        responseFacebook={this.responseFacebook}
        successOrError={this.state.usernameValid? "has-danger":"has-success"}
         HandleChange={this.HandleChange}
         googleResponseSuccess={this.handleGoogleSuccess} googleResponseFailure={this.handleGoogleFail}/>

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

export default connect(mapStateToProps,{RegsiterAction,socialSignUpAction})(RegisterView)