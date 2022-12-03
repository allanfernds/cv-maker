import { Route, Switch  } from 'react-router-dom'

import PersonalForm from './pages/PersonalForm'
import React, { Component } from 'react'
import EducationalForm from './pages/EducationalForm'
import ProfessionalForm from './pages/ProfessionalForm'
import ProjectsForm from './pages/ProjectsForm'
import SkillsForm from './pages/SkillsForm'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ PersonalForm } />
        <Route path='/educationalform' component={ EducationalForm } />
        <Route path='/professionalform' component={ ProfessionalForm } />
        <Route path='/projectsform' component={ ProjectsForm } />
        <Route path='/skillsform' component={ SkillsForm } />
      </Switch>
    )
  }
}
