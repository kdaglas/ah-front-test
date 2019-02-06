
import {mount,shallow} from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import Login from '../../components/Login/index'
import configureStore from 'redux-mock-store'


describe('test login', ()=>{
    let store,wrapper
    const initialState = {name:'authors haven'}
    const mockStore = configureStore()

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><Login/></Provider>)
    
    })

    it('render the Login component',()=>{
        expect(wrapper.find(Login).length).toEqual(1)
    })


})