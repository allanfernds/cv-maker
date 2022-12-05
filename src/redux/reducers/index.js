import { combineReducers } from 'redux';
import { SAVE_PERSONAL_INFO, SAVE_EDUCATIONAL_INFO, SAVE_PROFESSIONAL_INFO, SAVE_PROJECTS_INFO, SAVE_SKILLS_INFO   } from '../actions';



const INITIAL_STATE = {
    personalInfo: [],
    educationalInfo: [],  
    professionalInfo: [],   
    projectsInfo: [ ],
    skillsInfo: [],
};

const userInfo = (state = INITIAL_STATE, action) => {
  
  switch(action.type) {
    case SAVE_PERSONAL_INFO:
      console.log(action.info)
      return {
        ...state,
        personalInfo: [
          ...state.personalInfo,
          action.info
        ]
      }
    case SAVE_EDUCATIONAL_INFO:
      return {
        ...state,
        educationalInfo: [
          ...state.educationalInfo,
          action.info
        ]
      }
      case SAVE_PROFESSIONAL_INFO:
        return {
          ...state,
          professionalInfo: [
            ...state.professionalInfo,
            action.info
          ]
        }
      case SAVE_PROJECTS_INFO:
        return {
          ...state,
          projectsInfo: [
            ...state.projectsInfo,
            action.info
          ]
        }
      case SAVE_SKILLS_INFO:
        return {
          ...state,
          skillsInfo: [
            ...state.skillsInfo,
            action.info
          ]
        }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ userInfo })

export default rootReducer;