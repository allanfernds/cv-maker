import { combineReducers } from 'redux';
import { SAVE_INFO } from '../actions';


const INITIAL_STATE = {

  personalInfo: [],

};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SAVE_INFO:
      return {
        ...state,
        personalInfo: {...action.info}
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;