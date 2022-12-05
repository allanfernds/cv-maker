
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
    }
  }

  addNewFormSection = () => {
    const { personalform } = this.state
    personalform.push({section: ''});

    this.setState({
      personalform: personalform
    });
  }

  render() {
    const { personalform } = this.state
    return (
      <main>

        <div>
        {personalform.map((section, index) => <PersonalInfo key={index} /> )}
          <button onClick={this.addNewFormSection}>
            Adicionar mais uma seção
          </button>
        </div>
        <div>

        </div>
      <EducationalInfo />
      <ProfessionalInfo />
      <ProjectsInfo />
      <SkillsInfo />
      </main>
    )
  }
}
