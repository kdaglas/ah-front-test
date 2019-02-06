import React, { Component } from 'react'


import { connect } from 'react-redux';
import * as loginActionCreators from '../../actions/loginAction'
import {bindActionCreators} from 'redux'


function SigninForm(props){
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group m-4">
                <div className="input-group input-group-alternative mb-3">        
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input type="email" className="form-control" placeholder="email" required/> <br/>
                </div>
            </div>
            <div className="form-group m-4">
                <div className="input-group input-group-alternative mb-3">        
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-key-25"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="paswword" required/> <br/>
                </div>
            </div>
            <div className="form-group m-4">     
            <input type="submit" className="btn btn-primary btn-block" value="Login" />
            </div>     
    </form>
    )
}

function SocialButtons(props){
   return (
    <div className="text-center"> 
    <a href="#" className="btn btn-neutral btn-icon m-2"> 
        <span className="btn-inner--icon"><img src="/dist/assets/img/icons/common/facebook.svg"/></span>
        <span className="btn-inner--text">Facebook</span>
    </a>
    <a href="#" className="btn btn-neutral btn-icon m-2"> 
        <span className="btn-inner--icon"><img src="/dist/assets/img/icons/common/google.svg"/></span>
        <span className="btn-inner--text">Google</span>
    </a> 
    <a href="#" className="btn btn-neutral btn-icon m-2"> 
        <span className="btn-inner--icon"><img src="/dist/assets/img/icons/common/twitter.svg"/></span>
        <span className="btn-inner--text">Twitter</span>
    </a> 
</div>
   )
}

function MutedText(props){
    return (<div  className="text-center text-muted">
    <small>{props.text}</small>   
</div>)
}


export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors:undefined
        }

    this.handleSubmit = (event) =>{
        event.preventDefault()
        this.setState({errors:undefined})
        const email = event.target[0].value
        const password = event.target[1].value
        this.props.loginUser(email,password)
    }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.token){
            localStorage.setItem('token',nextProps.auth.token)
            window.location = '/'
        }
        this.setState({errors:nextProps.auth.login_errors})
    }

    render(){
        return (
        <div className="container col-lg-4 col-md-6 col-sm-8">
            <div className="card bg-secondary pb-5">
                <div className="card-header bg-white pb-5">
                    <h5 className="text-center">Login</h5>  
                    <MutedText text="with social" />
                    <SocialButtons />
                </div>
                <div className="card-body">
                    <MutedText text="or with email" />   
                    <div  id="error-message" className="text-center text-warning text-small">{this.state.errors}</div>
                    <SigninForm onSubmit={this.handleSubmit}/>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
   })
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(loginActionCreators, dispatch)
   }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);