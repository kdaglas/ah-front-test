import * as actions from '../../actions/types'
import reducer from '../registerUserReducer';

describe('Test Reducers',()=>{
    it('state should change to successful if action is success',()=>{
        const action={
            type:actions.REGISTER_USER_SUCCESS
        }
        const expected= {"is_successful": true,status:200}
        expect(reducer({},action)).toEqual(expected)
    })

    it('state should remain the same if action is failure',()=>{
        const action={
            type:actions.REGISTER_USER_FAILS
        }
        const expected= {
            is_successful:false,
            status:400
        }
        expect(reducer({},action)).toEqual(expected)
    })

    it('state shouldnt change is no action is called',()=>{
        const action={}
        const expected= {}
        expect(reducer({},action)).toEqual(expected)
    })
})