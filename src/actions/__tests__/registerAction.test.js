import registerAction from '../registerUserActionCreator';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import {baseURL} from '../../constants';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const url=`${baseURL}/api/users/`

describe('test register actions',()=>{
    
  afterEach(()=>{
      fetchMock.restore()
  })
  it('should call fetch api', () => {
    const store = mockStore({ is_successful:false });
    fetchMock.postOnce(
        url,{
        headers: {
          'content-type': 'application/json'
        },
        body: {"user":{
            "email":"test@gmail.com",
            "password":"Adesdwq34.",
            "username":"Ausername2"
        }}
      }
    );
    store.dispatch(registerAction({}));
    expect(store.getActions()).toEqual([]);
    });

  
  
})