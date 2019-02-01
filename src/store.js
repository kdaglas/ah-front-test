import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';


const auth = { 'name': 'Authors haven'}

const defaultState = {auth}
export default function configureStore(initialState = defaultState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
