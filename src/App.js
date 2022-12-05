
import React, { Component } from 'react'
import EducationalInfo from './components/EducationalInfo'
import PersonalInfo from './components/PersonalInfo'
import ProfessionalInfo from './components/ProfessionalInfo'
import ProjectsInfo from './components/ProjectsInfo'
import SkillsInfo from './components/SkillsInfo'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      personalform: [{section: ''}],
      educationallform: [{section: ''}],
      professionalform: [{section: ''}],
      projectsform: [{section: ''}],
      skillsform: [{section: ''}],
    }
  }

  addNewFormSection = ({target}) => {
    console.log(target.name)
    const { name } = target
    this.setState(prevState => ({
      [name]: [...prevState[name], {section: ''}]
    }))
  }

  render() {
    const { personalform, educationallform, professionalform, projectsform, skillsform } = this.state
    return (
      <main>

        <div>
        {personalform.map((section, index) => <PersonalInfo key={index} /> )}
          <button name={'personalform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        {educationallform.map((section, index) => <EducationalInfo key={index} /> )}
          <button name={'educationallform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        {professionalform.map((section, index) => <ProfessionalInfo key={index} /> )}
          <button name={'professionalform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        {projectsform.map((section, index) => <ProjectsInfo key={index} /> )}
          <button name={'projectsform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>

        <div>
        {skillsform.map((section, index) => <SkillsInfo key={index} /> )}
          <button name={'skillsform'} onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>


      </main>
    )
  }
}
