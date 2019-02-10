import React from 'react'
import sinon from 'sinon';
import { shallow,mount } from 'enzyme';
import Register from '../Register';
 


describe('<Register/>',()=>{

    it('should render without crushing',()=>{
       let wrapper = shallow(<Register/>)
        expect(wrapper).toMatchSnapshot()
    })

})