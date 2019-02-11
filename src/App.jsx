import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActionCreators from './actions/loginAction'
import {bindActionCreators} from 'redux'
import App from './views/index'
import './assets/css/argon.min.css'

const mapStateToProps = state => ({
    ...state
   })

   const mapDispatchToProps = dispatch => {
    return bindActionCreators(authActionCreators, dispatch)
   }



export default connect(mapStateToProps, mapDispatchToProps)(App);
