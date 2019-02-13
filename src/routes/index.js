import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Login from '../components/Login/index';
import Home from '../components/Home';
import RegisterView from '../views/RegisterView/RegisterView'

class Routes extends Component{
    render(){
        return(
                <Router>
                    <div>
                    <Route path="/" exact strict component={Home}/>
                    <Route exact path="/login" strict component={Login}/>
                    <Route exact path="/register" strict component={RegisterView}/>
                    </div>
                </Router>
        )
    }
}


  
export default Routes;