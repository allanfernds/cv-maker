import { combineReducers } from 'redux';
import { SAVE_PERSONAL_INFO } from '../actions';
import { SAVE_EDUCATIONAL_INFO } from '../actions';


const INITIAL_STATE = {
    personalInfo: [ 
    {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      github: ''
    }],

    educationalInfo: [ 
      {
        institution: '',
        course: '',
        initialDate: '',
        finalDate: '',
      }],
};

const userInfo = (state = INITIAL_STATE, action) => {
  
  switch(action.type) {
    case SAVE_PERSONAL_INFO:
      console.log(action.info)
      return {
        ...state,
        personalInfo: [
          action.info
        ]
      }
    case SAVE_EDUCATIONAL_INFO:
      return {
        ...state,
        educationalInfo: [
          action.info
        ]
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ userInfo })

export default rootReducer;