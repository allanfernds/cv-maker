import { combineReducers } from 'redux';
import { SAVE_INFO } from '../actions';


const INITIAL_STATE = {
 personalInfo: [ 
    {firstName: '',
    lastName: '',
    tel: '',
    email: '',
    github: '',}
]

};

const userInfo = (state = INITIAL_STATE, action) => {
  
  switch(action.type) {
    case SAVE_INFO:
      console.log(action.info)
      return {
        ...state,
        personalInfo: [
          action.info
        ]
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ userInfo })

export default rootReducer;