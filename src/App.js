
import React, { Component } from 'react'
import EducationalInfo from './components/EducationalInfo'
import PersonalInfo from './components/PersonalInfo'
import ProfessionalInfo from './components/ProfessionalInfo'
import ProjectsInfo from './components/ProjectsInfo'
import SkillsInfo from './components/SkillsInfo'

export default class App extends Component {
  render() {
    return (
      <main>
      <PersonalInfo/>
      <EducationalInfo />
      <ProfessionalInfo />
      <ProjectsInfo />
      <SkillsInfo />
      </main>
    )
  }
}
