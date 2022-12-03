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
        <Route exact to='/' component={ PersonalForm } />
        <Route to='/educationalform' component={ EducationalForm } />
        <Route to='/professionalform' component={ ProfessionalForm } />
        <Route to='/projectsform' component={ ProjectsForm } />
        <Route to='/skillsform' component={ SkillsForm } />
      </Switch>
    )
  }
}
