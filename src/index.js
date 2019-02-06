import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './App';
import Routes from './routes/index'




ReactDOM.render(
    <Provider store={configureStore()}>
    <Routes/>
    </Provider>,document.getElementById('root'));
