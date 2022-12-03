
import React, { Component } from 'react'
import EducationalInfo from './components/EducationalInfo'
import PersonalInfo from './components/PersonalInfo'
import ProjectsInfo from './components/ProjectsInfo'
import SkillsInfo from './components/SkillsInfo'

export default class App extends Component {
  render() {
    return (
      <>
      <PersonalInfo />
      <EducationalInfo />
      <ProjectsInfo />
      <ProjectsInfo />
      <SkillsInfo />
      </>
    )
  }
}
