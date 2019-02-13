import React from 'react';
import { shallow,mount } from 'enzyme';
import {RegisterView} from './RegisterView';

const props = {
    RegsiterAction: jest.fn(),
    
    
}

describe('test register', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<RegisterView {...props} />)
    });
    it('matches snapshot', ()=>{
        expect(wrapper).toMatchSnapshot()
       
    })

    it('calls click event for clicked',()=>{
        wrapper.instance().Clicked({preventDefault(){}})
        expect(props.RegsiterAction).toBeCalled()
    })

    // it('calls click event for Handle submit ',()=>{
    //     wrapper.instance().HandleChange(jest.fn(event=>{}))
    //     expect(props.setState).toBeCalled()
    // })

    
})