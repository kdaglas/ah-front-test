import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';


class Routes extends Component{
    render(){
        return(
                <Router>
                    <div>
                    <Route path="/" exact strict component={Home}/>
                    <Route exact path="/login" strict component={Login}/>
                    <Route exact path="/register" strict component={Register}/>
                    </div>
                </Router>
        )
    }
}

export default Routes;