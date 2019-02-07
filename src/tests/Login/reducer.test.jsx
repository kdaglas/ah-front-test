
import login from '../../reducers/auth'
import actionTypes from '../../actions/actionTypes'


describe('test login reducer', ()=>{
   
    it(' test login reducer with token',()=>{

        let state = {}
        let action = {type:actionTypes.LOGIN_ACTION,payload:{token:'token'}}
        expect(login(state,action)).toEqual({token:'token'})
    })

    it(' test login reducer with login errors',()=>{

        let state = {}
        let action = {type:actionTypes.LOGIN_ACTION,payload:{errors:'this is an error'}}
        expect(login(state,action)).toEqual({login_errors:'this is an error'})
    })
    it(' test login reducer with unknown action',()=>{

        let state = {}
        let action = {type:'unknown action',payload:{errors:'this is an error'}}
        expect(login(state,action)).toEqual({})
    })


})